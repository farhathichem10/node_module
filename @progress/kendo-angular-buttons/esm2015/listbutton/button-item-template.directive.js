/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Used for rendering the list item content.
 *
 * To define the item template, nest a `<ng-template>` tag with the `kendo<ComponentName>ItemTemplate` directive inside the component tag.
 *
 * For the DropDownButton, use the `kendoDropDownButtonItemTemplate` directive.
 * For the SplitButton, use the `kendoSplitButtonItemTemplate` directive.
 *
 * The template context is set to the current component. To get a reference to the current data item, use the `let-dataItem` directive.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="listItems">
 *    <ng-template kendoSplitButtonItemTemplate let-dataItem>
 *      <span>{{dataItem}} option</span>
 *    </ng-template>
 *  </kendo-splitbutton>
 *  <kendo-dropdownbutton [data]="listItems">
 *    <ng-template kendoDropDownButtonItemTemplate let-dataItem>
 *      <span>{{dataItem}} option</span>
 *    </ng-template>
 *  </kendo-dropdownbutton>
 * `
 * })
 * class AppComponent {
 *   public listItems: Array<any> = [{
 *      text: 'item1',
 *      icon: 'arrow-rotate-cw',
 *      disabled: false,
 *      click: (dataItem: any) => {
 *          //action
 *      }
 *  }, {
 *      text: 'item2',
 *      icon: 'arrow-rotate-cw',
 *      disabled: false,
 *      click: (dataItem: any) => {
 *          //action
 *      }
 *  }]
 * }
 * ```
 *
 * For more examples, refer to the article on the [DropDownList templates]({% slug overview_ddl %}#templates).
 */
export class ButtonItemTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
ButtonItemTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonItemTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
ButtonItemTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ButtonItemTemplateDirective, selector: "[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonItemTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
