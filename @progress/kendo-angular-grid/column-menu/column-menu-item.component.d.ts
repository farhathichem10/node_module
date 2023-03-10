/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter, OnChanges } from '@angular/core';
import { ColumnMenuItemContentTemplateDirective } from './column-menu-item-content-template.directive';
import * as i0 from "@angular/core";
/**
 * Represents an item that can be placed inside a
 * [ColumnMenuTemplate]({% slug api_grid_columnmenutemplatedirective %}) directive.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *       <kendo-grid [data]="data" [columnMenu]="true" [resizable]="true" #grid>
 *          <ng-template kendoGridColumnMenuTemplate let-service="service" let-column="column">
 *              <kendo-grid-columnmenu-item icon="arrows-resizing" text="Fit column"
 *                  (itemClick)="grid.autoFitColumn(column); service.close()">
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
export declare class ColumnMenuItemComponent implements OnChanges {
    /**
     * Fires when the item is clicked.
     */
    itemClick: EventEmitter<any>;
    /**
     * Fires when the content is expanded.
     */
    expand: EventEmitter<any>;
    /**
     * Fires when the content is collapsed.
     */
    collapse: EventEmitter<any>;
    /**
     * Specifies the name of the [font icon]({% slug icons %}#toc-list-of-font-icons)
     * that will be rendered for the item.
     */
    icon: string;
    /**
     * Specifies the item text.
     */
    text: string;
    /**
     * Specifies if the item is selected.
     */
    selected: boolean;
    /**
     * Specifies if the item is disabled.
     */
    disabled: boolean;
    /**
     * Specifies if the item is expanded.
     */
    expanded: boolean;
    contentTemplate: ColumnMenuItemContentTemplateDirective;
    get iconClass(): string;
    contentState: string;
    ngOnChanges(changes: any): void;
    /**
     * @hidden
     */
    onClick(e: any): void;
    private updateContentState;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnMenuItemComponent, "kendo-grid-columnmenu-item", never, { "icon": "icon"; "text": "text"; "selected": "selected"; "disabled": "disabled"; "expanded": "expanded"; }, { "itemClick": "itemClick"; "expand": "expand"; "collapse": "collapse"; }, ["contentTemplate"], never>;
}
