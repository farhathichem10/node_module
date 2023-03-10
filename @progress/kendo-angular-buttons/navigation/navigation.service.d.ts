/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter } from '@angular/core';
import { NavigationAction } from './navigation-action';
import { NavigationConfig } from './navigation-config';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class NavigationService {
    navigate: EventEmitter<number>;
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    enter: EventEmitter<any>;
    enterpress: EventEmitter<any>;
    enterup: EventEmitter<any>;
    tab: EventEmitter<any>;
    esc: EventEmitter<any>;
    useLeftRightArrows: boolean;
    constructor(config: NavigationConfig);
    process(args: any): NavigationAction;
    private isEnterOrSpace;
    private next;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NavigationService>;
}
