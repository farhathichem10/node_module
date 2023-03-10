/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Observable, ReplaySubject } from 'rxjs';
const normalize = x => Math.max(x, 0);
/**
 * @hidden
 */
export class ScrollAction {
    constructor(offset) {
        this.offset = offset;
    }
}
/**
 * @hidden
 */
export class PageAction {
    constructor(skip) {
        this.skip = skip;
    }
}
/**
 * @hidden
 */
export class ScrollerService {
    constructor(scrollObservable) {
        this.scrollObservable = scrollObservable;
        this.firstLoaded = 0;
        this.bottomOffset = 0;
        this.topOffset = 0;
    }
    create(rowHeightService, skip, take, total, topOffset = 0, bottomOffset = 0, direction = 'vertical') {
        this.rowHeightService = rowHeightService;
        this.firstLoaded = skip;
        this.lastLoaded = skip + take;
        this.take = take;
        this.total = total;
        this.lastScroll = 0;
        this.topOffset = topOffset;
        this.bottomOffset = bottomOffset;
        this.direction = direction;
        const subject = new ReplaySubject(2);
        const offsetBufferRows = this.rowsForHeight(topOffset);
        const skipWithOffset = normalize(skip - offsetBufferRows);
        subject.next(new ScrollAction(this.rowOffset(skipWithOffset)));
        if (offsetBufferRows) {
            subject.next(new PageAction(skipWithOffset));
        }
        this.subscription = new Observable(observer => {
            this.unsubscribe();
            this.scrollSubscription = this.scrollObservable.subscribe(x => this.onScroll(x, observer));
        }).subscribe((x) => subject.next(x));
        return subject;
    }
    destroy() {
        this.unsubscribe();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    onScroll({ scrollLeft, scrollTop, offsetHeight, offsetWidth }, observer) {
        const scrollPosition = this.direction === 'vertical' ? scrollTop : scrollLeft;
        const offsetSize = this.direction === 'vertical' ? offsetHeight : offsetWidth;
        if (this.lastScroll === scrollPosition) {
            return;
        }
        const up = this.lastScroll >= scrollPosition;
        this.lastScroll = scrollPosition;
        const firstItemIndex = this.rowHeightService.index(normalize(scrollPosition - this.topOffset));
        const lastItemIndex = this.rowHeightService.index(normalize(scrollPosition + offsetSize - this.bottomOffset));
        if (!up && lastItemIndex >= this.lastLoaded && this.lastLoaded < this.total) {
            this.firstLoaded = firstItemIndex;
            observer.next(new ScrollAction(this.rowOffset(firstItemIndex)));
            this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
            observer.next(new PageAction(this.firstLoaded));
        }
        if (up && firstItemIndex <= this.firstLoaded) {
            const nonVisibleBuffer = Math.floor(this.take * 0.3);
            this.firstLoaded = normalize(firstItemIndex - nonVisibleBuffer);
            observer.next(new ScrollAction(this.rowOffset(this.firstLoaded)));
            this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
            observer.next(new PageAction(this.firstLoaded));
        }
    }
    rowOffset(index) {
        return this.rowHeightService.offset(index) + this.topOffset;
    }
    rowsForHeight(height) {
        return Math.ceil(height / this.rowHeightService.height(0));
    }
    unsubscribe() {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
            this.scrollSubscription = null;
        }
    }
}
