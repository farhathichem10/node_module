/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare type ScrollSyncEvent = {
    scrollLeft: number;
    sourceType: string;
};
/**
 * @hidden
 */
export declare class ScrollSyncService {
    private ngZone;
    changes: Subject<ScrollSyncEvent>;
    private elements;
    private source;
    private subscriptions;
    private headerSubscription;
    private bodySubscription;
    constructor(ngZone: NgZone);
    registerEmitter(el: any, sourceType: "body" | "header" | "footer"): void;
    /**
     * destroy
     */
    destroy(): void;
    private scrollLeft;
    private unregister;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollSyncService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScrollSyncService>;
}
