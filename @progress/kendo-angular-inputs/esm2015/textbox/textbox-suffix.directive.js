/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive, Optional } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Specifies the adornments in the suffix container ([see examples]({% slug adornments_textbox %}#toc-suffixadornments)).
 * ```ts-no-run
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-textbox>
 *    <ng-template kendoTextBoxSuffixTemplate>
 *        <button kendoButton look="clear" icon="image"></button>
 *    </ng-template>
 *  </kendo-textbox>
 * `
 * })
 * class AppComponent {}
 * ```
 */
export class TextBoxSuffixTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TextBoxSuffixTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TextBoxSuffixTemplateDirective, deps: [{ token: i0.TemplateRef, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
TextBoxSuffixTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: TextBoxSuffixTemplateDirective, selector: "[kendoTextBoxSuffixTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TextBoxSuffixTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoTextBoxSuffixTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Optional
                }] }]; } });
