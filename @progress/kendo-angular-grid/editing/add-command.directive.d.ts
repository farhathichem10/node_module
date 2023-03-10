/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ElementRef, Renderer2 as Renderer, NgZone } from '@angular/core';
import { Button } from '@progress/kendo-angular-buttons';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { EditService } from './edit.service';
import * as i0 from "@angular/core";
/**
 * Represents the command for adding a new item to the Grid. You can apply this directive to any
 * `button` element inside a [ToolbarTemplate]({% slug api_grid_commandcolumncomponent %}).
 * When an associated button with the directive is clicked, the
 * [add]({% slug api_grid_gridcomponent %}#toc-add) event is triggered
 * ([see example]({% slug basics_editing_grid %})).
 *
 * @example
 * ```html-no-run
 * <kendo-grid>
 *    <ng-template kendoGridToolbarTemplate>
 *       <button kendoGridAddCommand>Add new</button>
 *    </ng-template>
 * </kendo-grid>
 * ```
 */
export declare class AddCommandDirective extends Button {
    private editService;
    /**
     * @hidden
     */
    onClick(e: any): void;
    /**
     * @hidden
     */
    get commandClass(): boolean;
    constructor(editService: EditService, element: ElementRef, renderer: Renderer, localization: LocalizationService, ngZone: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AddCommandDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AddCommandDirective, "[kendoGridAddCommand]", never, {}, {}, never>;
}
