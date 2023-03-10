/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class FocusService {
    onFocus: EventEmitter<number>;
    focusedIndex: number;
    isFocused(index: number): boolean;
    focus(index: number): void;
    resetFocus(): void;
    get focused(): number;
    set focused(index: number);
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FocusService>;
}
