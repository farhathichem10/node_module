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
export declare class ResizeService {
    private _dom;
    private _zone;
    private subscription;
    constructor(_dom: DOMService, _zone: NgZone);
    subscribe(callback: Function): void;
    unsubscribe(): void;
    isUnsubscribed(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResizeService>;
}
