/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Represents the column edit-cell template of the Grid ([see example]({% slug inline_editing_grid %}#toc-using-reactive-forms)).
 * Helps to customize the content of the edited cells. To define the cell template, nest an `<ng-template>`
 * tag with the `kendoGridEditTemplate` directive inside a `<kendo-grid-column>` tag.
 *
 * The template context is set to the current form group and the following additional fields are passed:
 * - `formGroup`&mdash;The current [FormGroup](link:site.data.urls.angular['formgroupapi']).
 * Represents the default context that will be assigned to any template variable which utilizes the `let-x` syntax&mdash;for example, `let-formGroup`.
 * If you use the Grid inside [Template-Driven Forms](link:site.data.urls.angular['forms']), it will be `undefined`.
 * - `rowIndex`&mdash;The current data row index. If inside a new item row, `rowIndex` is `-1`. Use it as an alias for a template variable by utilizing the `let-rowIndex="rowIndex"` syntax.
 * - `dataItem`&mdash;The current data item. Use it as an alias for a template variable by utilizing the `let-dataItem="dataItem"` syntax.
 * - `column`&mdash;The current column instance. Use it as an alias for a template variable by utilizing the `let-column="column"` syntax.
 * - `isNew`&mdash;The state of the current item. Use it as an alias for a template variable by utilizing the `let-isNew="isNew"` syntax.
 */
export declare class EditTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<EditTemplateDirective, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EditTemplateDirective, "[kendoGridEditTemplate]", never, {}, {}, never>;
}
