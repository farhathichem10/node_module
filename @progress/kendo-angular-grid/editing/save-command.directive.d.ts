/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ElementRef, Renderer2 as Renderer, NgZone, DoCheck } from '@angular/core';
import { Button } from '@progress/kendo-angular-buttons';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { EditService } from './edit.service';
import { CellContext } from '../rendering/common/cell-context';
import * as i0 from "@angular/core";
/**
 * Represents the `save` command of the Grid. You can apply this directive to any `button`
 * element inside a [CommandColumnComponent]({% slug api_grid_commandcolumncomponent %}).
 * When an associated button with the directive is clicked, the
 * [save]({% slug api_grid_gridcomponent %}#toc-save) event
 * is triggered ([see example]({% slug basics_editing_grid %})).
 *
 * > When the row is not in the edit mode, the button with `kendoGridSaveCommand` is automatically hidden.
 *
 * @example
 * ```html-no-run
 * <kendo-grid>
 *   <kendo-grid-command-column title="command">
 *     <ng-template kendoGridCellTemplate>
 *       <button kendoGridSaveCommand>Save changes</button>
 *     </ng-template>
 *   </kendo-grid-command-column>
 * </kendo-grid>
 * ```
 *
 * You can control the content of the button based on the state of the row.
 *
 * @example
 * ```html-no-run
 * <kendo-grid>
 *   <kendo-grid-command-column title="command">
 *     <ng-template kendoGridCellTemplate let-isNew="isNew">
 *       <button kendoGridSaveCommand>{{isNew ? 'Add' : 'Update'}}</button>
 *     </ng-template>
 *   </kendo-grid-command-column>
 * </kendo-grid>
 * ```
 */
export declare class SaveCommandDirective extends Button implements DoCheck {
    private editService;
    private cellContext;
    rowIndex: number;
    protected isEdited: boolean;
    /**
     * @hidden
     */
    get visible(): string;
    /**
     * @hidden
     */
    commandClass: boolean;
    /**
     * @hidden
     */
    onClick(e: any): void;
    constructor(editService: EditService, cellContext: CellContext, element: ElementRef, renderer: Renderer, localization: LocalizationService, ngZone: NgZone);
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaveCommandDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SaveCommandDirective, "[kendoGridSaveCommand]", never, {}, {}, never>;
}
