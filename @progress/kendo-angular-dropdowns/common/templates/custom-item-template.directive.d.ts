/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Renders the content of the custom list item in the MultiSelect
 * ([see example]({% slug templates_multiselect %}#toc-customizing-the-item-content)).
 * The template context is set to the current component.
 * To get a reference to the current text that is typed by the
 * user, use the `let-customItem` directive.
 *
 * > The `CustomItemTemplate` directive can only be used with the MultiSelect component.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-multiselect [data]="listItems" [allowCustom]="true">
 *    <ng-template kendoMultiSelectCustomItemTemplate let-customItem>
 *      <span>New Item: {{customItem}}</span>
 *    </ng-template>
 *  </kendo-multiselect>
 * `
 * })
 * class AppComponent {
 *   public listItems: Array<string> = ["Item 1", "Item 2", "Item 3", "Item 4"];
 * }
 * ```
 *
 */
export declare class CustomItemTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomItemTemplateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomItemTemplateDirective, "[kendoMultiSelectCustomItemTemplate]", never, {}, {}, never>;
}
