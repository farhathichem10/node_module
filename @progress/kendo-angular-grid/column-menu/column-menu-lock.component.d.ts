/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChangeDetectorRef } from '@angular/core';
import { LocalizationService } from "@progress/kendo-angular-l10n";
import { ColumnInfoService } from '../common/column-info.service';
import { ColumnMenuItemBase } from './column-menu-item-base';
import * as i0 from "@angular/core";
/**
 * Represents a column-menu item that can be placed inside a
 * [ColumnMenuTemplate]({% slug api_grid_columnmenutemplatedirective %}) directive.
 * Allows the user to lock or unlock the columns.
 *
 * > You have to set the [ColumnMenuService]({% slug api_grid_columnmenuservice %}) that is passed by
 * > the template to the service input of the `kendo-grid-columnmenu-lock` component.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *       <kendo-grid [data]="data" [columnMenu]="true">
 *          <ng-template kendoGridColumnMenuTemplate let-service="service">
 *              <kendo-grid-columnmenu-lock [service]="service">
 *              </kendo-grid-columnmenu-lock>
 *          </ng-template>
 *          <kendo-grid-column field="Field1" [width]="100"></kendo-grid-column>
 *          <kendo-grid-column field="Field2" [width]="100"></kendo-grid-column>
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
export declare class ColumnMenuLockComponent extends ColumnMenuItemBase {
    private localization;
    private columnInfoService;
    private changeDetector;
    constructor(localization: LocalizationService, columnInfoService: ColumnInfoService, changeDetector: ChangeDetectorRef);
    get text(): string;
    get icon(): string;
    get disabled(): boolean;
    /**
     * @hidden
     */
    toggleColumn(): void;
    private toggleHierarchy;
    private get locked();
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnMenuLockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnMenuLockComponent, "kendo-grid-columnmenu-lock", never, {}, {}, never, never>;
}
