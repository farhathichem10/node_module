/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class FocusService {
    constructor() {
        this.onFocus = new EventEmitter();
    }
    isFocused(index) {
        return index === this.focused;
    }
    focus(index) {
        if (this.isFocused(index)) {
            return;
        }
        this.focused = index;
        this.onFocus.emit(index);
    }
    resetFocus() {
        this.focused = -1;
    }
    get focused() {
        return this.focusedIndex;
    }
    set focused(index) {
        this.focusedIndex = index;
        this.onFocus.emit(index);
    }
}
FocusService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FocusService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusService, decorators: [{
            type: Injectable
        }] });
