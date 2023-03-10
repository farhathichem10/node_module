/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Represents a template that defines the content of the whole dial item.
 * To define the template, nest an `<ng-template>` tag
 * with the `kendoDialItemTemplate` directive inside the `<kendo-floatingactionbutton>` tag
 * ([see example]({% slug templates_floatingactionbutton %}#toc-dial-item-template)).
 */
export declare class DialItemTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<DialItemTemplateDirective, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DialItemTemplateDirective, "[kendoDialItemTemplate]", never, {}, {}, never>;
}
