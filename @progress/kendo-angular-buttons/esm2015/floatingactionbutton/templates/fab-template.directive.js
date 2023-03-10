/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive, Optional } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Represents a template that defines the content of the FloatingActionButton.
 * To define the template, nest an `<ng-template>` tag
 * with the `kendoFloatingActionButtonTemplate` directive inside the `<kendo-floatingactionbutton>` tag
 * ([see example]({% slug templates_floatingactionbutton %}#toc-floatingactionbutton-template)).
 */
export class FloatingActionButtonTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
FloatingActionButtonTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonTemplateDirective, deps: [{ token: i0.TemplateRef, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
FloatingActionButtonTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: FloatingActionButtonTemplateDirective, selector: "[kendoFloatingActionButtonTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoFloatingActionButtonTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Optional
                }] }]; } });
