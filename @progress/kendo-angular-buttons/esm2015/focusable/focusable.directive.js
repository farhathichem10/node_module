/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { isDocumentAvailable } from '@progress/kendo-angular-common';
import * as i0 from "@angular/core";
import * as i1 from "./focus.service";
/**
 * @hidden
 */
export class FocusableDirective {
    constructor(focusService, elementRef, renderer) {
        this.focusService = focusService;
        this.renderer = renderer;
        this.subs = new Subscription();
        this.element = elementRef.nativeElement;
        this.subscribeEvents();
    }
    ngOnInit() {
        if (this.index === this.focusService.focused) {
            this.renderer.addClass(this.element, 'k-focus');
        }
        else {
            this.renderer.removeClass(this.element, 'k-focus');
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    subscribeEvents() {
        if (!isDocumentAvailable()) {
            return;
        }
        this.subs.add(this.focusService.onFocus.subscribe((index) => {
            if (this.index === index) {
                this.renderer.addClass(this.element, 'k-focus');
                this.element.focus();
            }
            else {
                this.renderer.removeClass(this.element, 'k-focus');
            }
        }));
    }
}
FocusableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusableDirective, deps: [{ token: i1.FocusService }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
FocusableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: FocusableDirective, selector: "[kendoButtonFocusable]", inputs: { index: "index" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoButtonFocusable]'
                }]
        }], ctorParameters: function () { return [{ type: i1.FocusService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { index: [{
                type: Input
            }] } });
