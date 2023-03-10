/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import { ColumnBase } from './column-base';
import { CellTemplateDirective } from '../rendering/cell-template.directive';
import { IdService } from '../common/id.service';
import * as i0 from "@angular/core";
/**
 * Represents the checkbox for selecting columns in the Grid. If the column is
 * defined as empty, it renders a default checkbox for row selection.
 * You can also define the content of the column inside an `<ng-template>` tag.
 * The input requires you to include the `SelectionCheckbox` option.
 *
 * The template context is set to the current data item and the following additional fields are passed:
 * - `columnIndex`&mdash;The current column index.
 * - `rowIndex`&mdash;The current data row index. If inside a new item row, it will be `-1`.
 * - `dataItem`&mdash;The current data item.
 * - `column`&mdash;The current column instance.
 * - `isNew`&mdash;The state of the current item.
 *
 * For more examples, refer to:
 * - [Selecting or deselecting all items on a page]({% slug selection_grid %}#toc-select-all-feature)
 * - [Persisting the selection]({% slug selection_grid %}#toc-in-combination-with-the-select-all-feature)
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *    selector: 'my-app',
 *    template: `
 *        <kendo-grid [data]="gridData" [selectable]="{enabled: true, checkboxOnly: true}">
 *          <kendo-grid-column field="ProductID" title="Product ID" [width]="120">
 *          </kendo-grid-column>
 *          <kendo-grid-column field="ProductName" title="Product Name">
 *          </kendo-grid-column>
 *          <kendo-grid-checkbox-column title="Default checkbox">
 *          </kendo-grid-checkbox-column>
 *          <kendo-grid-checkbox-column title="Custom checkbox">
 *            <ng-template kendoGridCellTemplate let-idx="rowIndex">
 *              Select row <input [kendoGridSelectionCheckbox]="idx" />
 *            </ng-template>
 *          </kendo-grid-checkbox-column>
 *        </kendo-grid>
 *    `
 * })
 *
 * class AppComponent {
 *    public gridData: any[];
 *
 *    constructor() {
 *        this.gridData = products;
 *    }
 * }
 *
 * const products = [{
 *    "ProductID": 1,
 *    "ProductName": "Chai",
 *    "UnitPrice": 18.0000,
 *    "Discontinued": true
 *  }, {
 *    "ProductID": 2,
 *    "ProductName": "Chang",
 *    "UnitPrice": 19.0000,
 *    "Discontinued": false
 *  }
 * ];
 *
 * ```
 */
export declare class CheckboxColumnComponent extends ColumnBase {
    parent?: ColumnBase;
    /**
     * Determines whether a select-all `kendoGridSelectAllCheckbox` checkbox will be displayed in the header.
     */
    showSelectAll: boolean;
    readonly isCheckboxColumn: boolean;
    template: CellTemplateDirective;
    constructor(parent?: ColumnBase, idService?: IdService);
    get templateRef(): TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxColumnComponent, [{ optional: true; host: true; skipSelf: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxColumnComponent, "kendo-grid-checkbox-column", never, { "showSelectAll": "showSelectAll"; }, {}, ["template"], never>;
}
