/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Observable, Observer } from 'rxjs';
import { RowHeightService } from './row-height.service';
/**
 * @hidden
 */
export declare class ScrollAction {
    offset: number;
    constructor(offset: number);
}
/**
 * @hidden
 */
export declare class PageAction {
    skip: number;
    take: number;
    constructor(skip: number, take: number);
}
/**
 * @hidden
 */
export declare class ScrollBottomAction {
}
/**
 * @hidden
 */
export declare type Action = ScrollAction | ScrollBottomAction | PageAction;
/**
 * @hidden
 */
export declare class ScrollerService {
    private scrollObservable;
    private firstLoaded;
    private lastLoaded;
    private lastScrollTop;
    private take;
    private total;
    private rowHeightService;
    private scrollSubscription;
    private subscription;
    constructor(scrollObservable: Observable<any>);
    create(rowHeightService: RowHeightService, skip: number, take: number, total: number): Observable<Action>;
    destroy(): void;
    protected onScroll({ scrollTop, offsetHeight, scrollHeight, clientHeight }: any, observer: Observer<Action>): void;
    private unsubscribe;
}
