/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef, QueryList } from '@angular/core';
import { CellTemplateDirective } from '../rendering/cell-template.directive';
import { EditTemplateDirective } from '../editing/edit-template.directive';
import { ColumnBase } from './column-base';
import { ColumnComponent } from "./column.component";
import { IdService } from '../common/id.service';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare function isSpanColumnComponent(column: any): column is SpanColumnComponent;
/**
 * Represents a column which can be spanned over multiple data cells while the individual
 * header and footer cells are retained ([see example]({% slug spanned_columns_grid %})).
 * Enables you to achieve more flexible layout while keeping the built-in UI element for
 * [sorting]({% slug sorting_grid %}), [filtering]({% slug filtering_grid %}), and
 * [grouping]({% slug grouping_grid %}). Wrap the columns that will be
 * merged inside the `<kendo-grid-span-column>` tag.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *    selector: 'my-app',
 *    template: `
 *        <kendo-grid
 *              [sortable]="true"
 *              [filterable]="true"
 *              [kendoGridBinding]="products">
 *          <kendo-grid-column field="ProductID" title="Product ID" [width]="120">
 *          </kendo-grid-column>
 *          <kendo-grid-span-column>
 *              <kendo-grid-column field="ProductName" title="Product Name">
 *              </kendo-grid-column>
 *              <kendo-grid-column field="UnitPrice" title="Unit Price" filter="numeric" [width]="180" format="{0:c}">
 *              </kendo-grid-column>
 *          </kendo-grid-span-column>
 *          <kendo-grid-column field="Discontinued" [width]="120" filter="boolean">
 *              <ng-template kendoGridCellTemplate let-dataItem>
 *                  <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
 *              </ng-template>
 *          </kendo-grid-column>
 *        </kendo-grid>
 *    `
 * })
 *
 * class AppComponent {
 *   public products = [{
 *      "ProductID": 1,
 *      "ProductName": "Chai",
 *      "UnitPrice": 18.0000,
 *      "Discontinued": true
 *    }, {
 *      "ProductID": 2,
 *      "ProductName": "Chang",
 *      "UnitPrice": 19.0000,
 *      "Discontinued": false
 *    }
 *   ];
 * }
 *
 * ```
 *
 * By default, the data cell displays the data for the specified fields. To further customize
 * the span-column functionality, use a [cell template]({% slug api_grid_celltemplatedirective %}).
 *
 * ```html-no-run
 * <kendo-grid-span-column>
 *  <kendo-grid-column field="field1" title="Field 1"></kendo-grid-column>
 *  <kendo-grid-column field="field2" title="Field 2"></kendo-grid-column>
 *    <ng-template kendoGridCellTemplate let-dataItem>
 *        <h5>{{ dataItem.field1 }}</h5>
 *        <p>{{ dataItem.field2 }}</p>
 *    </ng-template>
 *  </kendo-grid-span-column>
 * ```
 */
export declare class SpanColumnComponent extends ColumnBase {
    readonly isSpanColumn: boolean;
    template: QueryList<CellTemplateDirective>;
    editTemplate: QueryList<EditTemplateDirective>;
    /**
     * @hidden
     */
    childColumns: QueryList<ColumnComponent>;
    /**
     * @hidden
     */
    title: string;
    /**
     * @hidden
     */
    headerStyle: {
        [key: string]: string;
    };
    /**
     * @hidden
     */
    footerStyle: {
        [key: string]: string;
    };
    /**
     * @hidden
     */
    headerClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    /**
     * @hidden
     */
    footerClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    /**
     * @hidden
     */
    includeInChooser: boolean;
    /**
     * Defines whether the edit template of the column will be rendered. The default value is `false`.
     *
     * > To enable the editing functionality for a spanned column, set an edit template for it.
     *
     * @example
     * ```html-no-run
     * <kendo-grid>
     *    <kendo-grid-span-column [editable]="false">
     *      <kendo-grid-column field="UnitPrice">
     *      </kendo-grid-column>
     *      <kendo-grid-column field="ProductName">
     *      </kendo-grid-column>
     *      <ng-template kendoGridEditTemplate>
     *         .....
     *      </ng-template>
     *    </kendo-grid-span-column>
     * </kendo-grid>
     * ```
     */
    set editable(value: boolean);
    get editable(): boolean;
    /**
     * @hidden
     * added for backwards compitability
     */
    set width(_value: number);
    get width(): number;
    /**
     * @hidden
     */
    get leafIndex(): number;
    private _editable;
    constructor(parent?: ColumnBase, idService?: IdService);
    /**
     * @hidden
     */
    get templateRef(): TemplateRef<any>;
    /**
     * @hidden
     */
    get editTemplateRef(): TemplateRef<any>;
    /**
     * @hidden
     */
    get colspan(): number;
    /**
     * Toggles the locked (frozen) state of the columns. Locked columns are visible
     * at all times during the horizontal scrolling of the Grid.
     *
     * For the option to work properly, make sure that:
     * - Scrolling is enabled.
     * - The `height` option of the Grid is set.
     * - The widths of all Grid columns are explicitly set in pixels. In this way,
     * the Grid adjusts the layout of the locked and unlocked columns.
     *
     * @default false
     *
     * @example
     * ```ts
     * _@Component({
     *    selector: 'my-app',
     *    template: `
     *        <kendo-grid [data]="gridData" [scrollable]="scrollable" style="height: 200px">
     *          <kendo-grid-span-column [locked]="true">
     *             <kendo-grid-column field="ProductID" title="Product ID" [width]="120">
     *             </kendo-grid-column>
     *             <kendo-grid-column field="ProductName" title="Product Name" [width]="200">
     *             </kendo-grid-column>
     *          </kendo-grid-span-column>
     *          <kendo-grid-column field="UnitPrice" title="Unit Price" [width]="230">
     *          </kendo-grid-column>
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
    set locked(value: boolean);
    get locked(): boolean;
    get childrenArray(): any[];
    get hasChildren(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpanColumnComponent, [{ optional: true; host: true; skipSelf: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpanColumnComponent, "kendo-grid-span-column", never, { "editable": "editable"; "locked": "locked"; }, {}, ["template", "editTemplate", "childColumns"], never>;
}
