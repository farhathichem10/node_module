/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Represents the content template of the
 * [kendo-grid-columnmenu-item]({% slug api_grid_columnmenuitemcomponent %}) component.
 * Provides an option for specifying the content of a column item.
 * To define the content template, nest an `<ng-template>` tag with the
 * `kendoGridColumnMenuItemContentTemplate` directive inside a `<kendo-grid-columnmenu-item>`.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *       <kendo-grid [data]="data" [columnMenu]="true">
 *          <ng-template kendoGridColumnMenuTemplate>
 *              <kendo-grid-columnmenu-item text="Item Text" [expanded]="true">
 *                  <ng-template kendoGridColumnMenuItemContentTemplate>
 *                      Item Content
 *                  </ng-template>
 *              </kendo-grid-columnmenu-item>
 *          </ng-template>
 *          <kendo-grid-column field="Field1"></kendo-grid-column>
 *          <kendo-grid-column field="Field2"></kendo-grid-column>
 *       </kendo-grid>
 *     `
 * })
 *
 * class AppComponent {
 *   public data: any[] = [{ Field1: 'Foo', Field2: 'Bar' }];
 * }
 *
 * ```
 */
export declare class ColumnMenuItemContentTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnMenuItemContentTemplateDirective, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnMenuItemContentTemplateDirective, "[kendoGridColumnMenuItemContentTemplate]", never, {}, {}, never>;
}
