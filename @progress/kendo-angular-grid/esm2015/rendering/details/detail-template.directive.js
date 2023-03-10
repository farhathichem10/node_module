/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive, Optional, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
export class DetailTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._condition = () => true;
    }
    /**
     * Defines the function that indicates if a given detail row and the associated **Expand** or **Collapse** button will be displayed.
     */
    set showIf(fn) {
        if (typeof fn !== 'function') {
            throw new Error(`showIf must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._condition = fn;
    }
    get showIf() {
        return this._condition;
    }
}
DetailTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DetailTemplateDirective, deps: [{ token: i0.TemplateRef, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
DetailTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: DetailTemplateDirective, selector: "[kendoGridDetailTemplate]", inputs: { showIf: ["kendoGridDetailTemplateShowIf", "showIf"] }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DetailTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoGridDetailTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { showIf: [{
                type: Input,
                args: ["kendoGridDetailTemplateShowIf"]
            }] } });
