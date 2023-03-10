/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, HostBinding, Input, Inject, Output, InjectionToken } from '@angular/core';
import { RowHeightService } from './services/row-height.service';
import { ScrollerService, PageAction } from './services/scroller.service';
import { isDocumentAvailable } from '@progress/kendo-angular-common';
import { Subject, fromEvent, interval, EMPTY, of, combineLatest, animationFrameScheduler as animationFrame } from 'rxjs';
import { map, scan, takeWhile } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-common";
import * as i2 from "@angular/common";
/**
 * @hidden
 */
export const SCROLLER_FACTORY_TOKEN = new InjectionToken('dateinputs-scroll-service-factory');
/**
 * @hidden
 */
export function DEFAULT_SCROLLER_FACTORY(observable) {
    return new ScrollerService(observable);
}
/**
 * @hidden
 */
export var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["Backward"] = 0] = "Backward";
    ScrollDirection[ScrollDirection["Forward"] = 1] = "Forward";
})(ScrollDirection || (ScrollDirection = {}));
const FRAME_DURATION = 17;
const scrollModifiers = {
    [ScrollDirection.Forward]: (step) => value => value + step,
    [ScrollDirection.Backward]: (step) => value => value - step
};
const scrollNormalizers = {
    [ScrollDirection.Forward]: (end) => value => Math.min(value, end),
    [ScrollDirection.Backward]: (end) => value => Math.max(value, end)
};
const scrollValidators = {
    [ScrollDirection.Forward]: end => start => start < end,
    [ScrollDirection.Backward]: end => start => start > end
};
const differenceToScroll = (scrollTop, staticOffset, maxScrollDifference) => {
    return Math.min(Math.abs(staticOffset - scrollTop), maxScrollDifference);
};
/**
 * @hidden
 */
export class VirtualizationComponent {
    constructor(scrollerFactory, container, renderer, zone, scrollBarWidthService) {
        this.container = container;
        this.renderer = renderer;
        this.zone = zone;
        this.scrollBarWidthService = scrollBarWidthService;
        this.direction = 'vertical';
        this.itemHeight = 1;
        this.itemWidth = 1;
        this.topOffset = 0;
        this.bottomOffset = 0;
        this.maxScrollDifference = 100;
        this.scrollOffsetSize = 0;
        this.scrollDuration = 150;
        this.activeIndexChange = new EventEmitter();
        this.pageChange = new EventEmitter();
        this.scrollChange = new EventEmitter();
        this.wrapperClasses = true;
        this.resolvedPromise = Promise.resolve(null);
        this.dispatcher = new Subject();
        this.scroller = scrollerFactory(this.dispatcher);
    }
    get horizontalClass() {
        return this.direction === 'horizontal';
    }
    get totalVertexLength() {
        const value = `${this.totalSize}px`;
        return this.direction === 'vertical' ? { height: value } : { width: value };
    }
    get containerOffsetSize() {
        return this.getContainerProperty(this.direction === 'vertical' ? 'offsetHeight' : 'offsetWidth');
    }
    get containerScrollSize() {
        return this.getContainerProperty(this.direction === 'vertical' ? 'scrollHeight' : 'scrollWidth');
    }
    get containerScrollPosition() {
        return this.getContainerProperty(this.direction === 'vertical' ? 'scrollTop' : 'scrollLeft');
    }
    ngOnChanges(changes) {
        if (changes.direction || changes.take || changes.total) {
            this.initServices();
            this.totalSize = this.rowHeightService.totalHeight() + this.bottomOffset;
        }
    }
    ngOnInit() {
        if (!this.rowHeightService) {
            this.rowHeightService = this.createRowHeightService();
        }
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.containerScrollSubscription = this.scroll$()
                .pipe(map((event) => event.target))
                .subscribe(t => {
                this.dispatcher.next(t);
                this.emitActiveIndex();
            });
        });
    }
    ngOnDestroy() {
        if (this.containerScrollSubscription) {
            this.containerScrollSubscription.unsubscribe();
        }
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
        if (this.animationSubscription) {
            this.animationSubscription.unsubscribe();
        }
    }
    getContainerProperty(propertyName) {
        return this.container.nativeElement[propertyName];
    }
    activeIndex() {
        return this.itemIndex(Math.ceil(this.containerScrollPosition)); //handle subpixeling
    }
    itemIndex(offset) {
        return this.rowHeightService.index(offset);
    }
    itemOffset(index) {
        return this.rowHeightService.offset(index);
    }
    isIndexVisible(index) {
        if (!this.rowHeightService) {
            return false;
        }
        const containerTop = this.containerScrollPosition;
        const containerBottom = containerTop + this.containerOffsetSize;
        const top = this.rowHeightService.offset(index);
        const bottom = top + this.rowHeightService.height(index);
        return top >= containerTop && bottom <= containerBottom;
    }
    isListScrolled(index) {
        return this.containerScrollPosition !== this.rowHeightService.offset(index);
    }
    scrollTo(value) {
        const scrollProperty = this.direction === "vertical" ? 'scrollTop' : 'scrollLeft';
        this.renderer.setProperty(this.container.nativeElement, scrollProperty, value);
    }
    scrollToIndex(index) {
        //XXX: scrolling with tick is required to prevent list jump in Chrome.
        //Original issue: focus first day in the month and press LEFT arrow.
        //Notice how the view jumps on every day change.
        //
        this.zone.runOutsideAngular(() => {
            this.resolvedPromise.then(() => {
                this.scrollTo(this.rowHeightService.offset(index));
            });
        });
    }
    scrollToBottom() {
        this.scrollTo(this.totalSize);
    }
    animateToIndex(index) {
        if (this.animationSubscription) {
            this.animationSubscription.unsubscribe();
        }
        const indexOffset = this.rowHeightService.offset(index);
        const direction = this.getContainerScrollDirection(indexOffset);
        const { start, end } = this.scrollRange(indexOffset, direction);
        if (start === end) {
            return;
        }
        const step = this.scrollStep(start, end);
        const modifyScroll = scrollModifiers[direction](step);
        const normalizeScroll = scrollNormalizers[direction](end);
        const isScrollValid = scrollValidators[direction](modifyScroll(end));
        this.zone.runOutsideAngular(() => {
            this.animationSubscription =
                combineLatest(of(start), interval(0, animationFrame)).pipe(map(stream => stream[0]), scan(modifyScroll), takeWhile(isScrollValid), map(normalizeScroll)).subscribe((x) => this.scrollTo(x));
        });
    }
    scrollRange(indexOffset, direction) {
        const containerScroll = this.containerScrollPosition;
        if (parseInt(indexOffset, 10) === parseInt(containerScroll, 10)) {
            return { start: indexOffset, end: indexOffset };
        }
        const maxScroll = this.containerMaxScroll();
        const sign = direction === ScrollDirection.Backward ? 1 : -1;
        const difference = differenceToScroll(containerScroll, indexOffset, this.maxScrollDifference);
        const end = Math.min(indexOffset, maxScroll);
        const start = Math.min(Math.max(end + (sign * difference), 0), maxScroll);
        return { start, end };
    }
    scrollStep(start, end) {
        return Math.abs(end - start) / (this.scrollDuration / FRAME_DURATION);
    }
    scroll$() {
        return isDocumentAvailable() ? fromEvent(this.container.nativeElement, 'scroll') : EMPTY;
    }
    initServices() {
        this.rowHeightService = this.createRowHeightService();
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
        this.scrollSubscription = this.scroller
            .create(this.rowHeightService, this.skip, this.take, this.total, this.topOffset, this.scrollOffsetSize, this.direction)
            .subscribe((x) => {
            if (x instanceof PageAction) {
                this.pageChange.emit(x);
            }
            else {
                this.scrollChange.emit(x);
            }
        });
    }
    createRowHeightService() {
        const dimension = this.direction === 'vertical' ? this.itemHeight : this.itemWidth;
        return new RowHeightService(this.total, dimension, 0);
    }
    emitActiveIndex() {
        const index = this.rowHeightService.index(this.containerScrollPosition - this.topOffset);
        if (this.lastActiveIndex !== index) {
            this.lastActiveIndex = index;
            this.activeIndexChange.emit(index);
        }
    }
    containerMaxScroll() {
        return this.containerScrollSize - this.containerOffsetSize;
    }
    getContainerScrollDirection(indexOffset) {
        return indexOffset < this.containerScrollPosition ? ScrollDirection.Backward : ScrollDirection.Forward;
    }
}
VirtualizationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: VirtualizationComponent, deps: [{ token: SCROLLER_FACTORY_TOKEN }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i1.ScrollbarWidthService }], target: i0.ɵɵFactoryTarget.Component });
VirtualizationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: VirtualizationComponent, selector: "kendo-virtualization", inputs: { direction: "direction", itemHeight: "itemHeight", itemWidth: "itemWidth", topOffset: "topOffset", bottomOffset: "bottomOffset", maxScrollDifference: "maxScrollDifference", scrollOffsetSize: "scrollOffsetSize", scrollDuration: "scrollDuration", skip: "skip", take: "take", total: "total" }, outputs: { activeIndexChange: "activeIndexChange", pageChange: "pageChange", scrollChange: "scrollChange" }, host: { properties: { "class.k-flex": "this.wrapperClasses", "class.k-content": "this.wrapperClasses", "class.k-scrollable": "this.wrapperClasses", "class.k-scrollable-horizontal": "this.horizontalClass" } }, providers: [{
            provide: SCROLLER_FACTORY_TOKEN,
            useValue: DEFAULT_SCROLLER_FACTORY
        }], usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
    <div
        class="k-scrollable-placeholder"
        [class.k-scrollable-horizontal-placeholder]="direction === 'horizontal'"
        [ngStyle]="totalVertexLength"
    ></div>
  `, isInline: true, directives: [{ type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: VirtualizationComponent, decorators: [{
            type: Component,
            args: [{
                    providers: [{
                            provide: SCROLLER_FACTORY_TOKEN,
                            useValue: DEFAULT_SCROLLER_FACTORY
                        }],
                    selector: 'kendo-virtualization',
                    template: `
    <ng-content></ng-content>
    <div
        class="k-scrollable-placeholder"
        [class.k-scrollable-horizontal-placeholder]="direction === 'horizontal'"
        [ngStyle]="totalVertexLength"
    ></div>
  `
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [SCROLLER_FACTORY_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i1.ScrollbarWidthService }]; }, propDecorators: { direction: [{
                type: Input
            }], itemHeight: [{
                type: Input
            }], itemWidth: [{
                type: Input
            }], topOffset: [{
                type: Input
            }], bottomOffset: [{
                type: Input
            }], maxScrollDifference: [{
                type: Input
            }], scrollOffsetSize: [{
                type: Input
            }], scrollDuration: [{
                type: Input
            }], skip: [{
                type: Input
            }], take: [{
                type: Input
            }], total: [{
                type: Input
            }], activeIndexChange: [{
                type: Output
            }], pageChange: [{
                type: Output
            }], scrollChange: [{
                type: Output
            }], wrapperClasses: [{
                type: HostBinding,
                args: ['class.k-flex']
            }, {
                type: HostBinding,
                args: ['class.k-content']
            }, {
                type: HostBinding,
                args: ['class.k-scrollable']
            }], horizontalClass: [{
                type: HostBinding,
                args: ['class.k-scrollable-horizontal']
            }] } });
