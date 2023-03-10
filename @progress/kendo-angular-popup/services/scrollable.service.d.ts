/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgZone } from '@angular/core';
import { DOMService } from './dom.service';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare const THRESHOLD_DIFF = 1;
/**
 * @hidden
 */
export declare class ScrollableService {
    private _dom;
    private _zone;
    private element;
    private subscription;
    constructor(_dom: DOMService, _zone: NgZone);
    forElement(element: HTMLElement): ScrollableService;
    subscribe(callback: Function): void;
    unsubscribe(): void;
    isVisible(elem: HTMLElement, container: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollableService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScrollableService>;
}
