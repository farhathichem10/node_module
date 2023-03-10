/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Represents the predicate that is used by the
 * [DetailTemplateDirective]({% slug api_grid_detailtemplatedirective %}) conditional rendering
 * ([see runnable example]({% slug detailrowtemplate_grid %}#toc-conditional-display)).
 *
 * ```ts-no-run
 *  myCondition(dataItem: any, index: number) { return dataItem.CategoryID % 2 === 0; }
 * ```
 */
export declare type DetailTemplateShowIfFn = (dataItem: any, index: number) => boolean;
/**
 * Represents the detail template of the Grid ([more information and examples]({% slug detailrowtemplate_grid %})).
 * To define the detail template, nest an `<ng-template>` tag with the `kendoGridDetailTemplate` directive inside a `<kendo-grid>` tag.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *       <kendo-grid
 *         [data]="data"
 *         selectable="true"
 *         style="height: 160px"
 *         >
 *         <kendo-grid-column field="ProductID"></kendo-grid-column>
 *         <kendo-grid-column field="ProductName"></kendo-grid-column>
 *         <kendo-grid-column field="UnitPrice"></kendo-grid-column>
 *         <ng-template kendoGridDetailTemplate let-dataItem>
 *           <div *ngIf="dataItem.Category">
 *             <header>{{dataItem.Category?.CategoryName}}</header>
 *             <span>{{dataItem.Category?.Description}}</span>
 *           </div>
 *         </ng-template>
 *       </kendo-grid>
 *   `
 * })
 *
 * class AppComponent {
 *     public data = [{
 *         "ProductID": 1,
 *         "ProductName": "Chai",
 *         "UnitPrice": 18.0000,
 *         "Discontinued": false,
 *         "Category": {
 *             "CategoryID": 1,
 *             "CategoryName": "Beverages",
 *             "Description": "Soft drinks, coffees, teas, beers, and ales"
 *         }
 *       }, {
 *         "ProductID": 2,
 *         "ProductName": "Chang",
 *         "UnitPrice": 19.0000,
 *         "Discontinued": false,
 *         "Category": {
 *             "CategoryID": 1,
 *             "CategoryName": "Beverages",
 *             "Description": "Soft drinks, coffees, teas, beers, and ales"
 *         }
 *       }, {
 *         "ProductID": 3,
 *         "ProductName": "Aniseed Syrup",
 *         "UnitPrice": 10.0000,
 *         "Discontinued": false,
 *         "Category": {
 *             "CategoryID": 2,
 *             "CategoryName": "Condiments",
 *             "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
 *         }
 *     }];
 *
 * }
 *
 * ```
 *
 */
export declare class DetailTemplateDirective {
    templateRef: TemplateRef<any>;
    /**
     * Defines the function that indicates if a given detail row and the associated **Expand** or **Collapse** button will be displayed.
     */
    set showIf(fn: DetailTemplateShowIfFn);
    get showIf(): DetailTemplateShowIfFn;
    constructor(templateRef: TemplateRef<any>);
    private _condition;
    static ɵfac: i0.ɵɵFactoryDeclaration<DetailTemplateDirective, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DetailTemplateDirective, "[kendoGridDetailTemplate]", never, { "showIf": "kendoGridDetailTemplateShowIf"; }, {}, never>;
}
