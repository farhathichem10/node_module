/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ElementRef, Renderer2 as Renderer, NgZone } from '@angular/core';
import { Button } from '@progress/kendo-angular-buttons';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PDFService } from './pdf.service';
import * as i0 from "@angular/core";
/**
 * Represents the `export-to-PDF` command of the Grid.
 * You can apply this directive to any `button` element inside a
 * [ToolbarTemplate]({% slug api_grid_commandcolumncomponent %}).
 * When the user clicks a button that is associated with the directive, the
 * [pdfExport]({% slug api_grid_gridcomponent %}#toc-pdfexport) event
 * fires ([see example]({% slug pdfexport_grid %})).
 *
 * @example
 * ```html-no-run
 * <kendo-grid>
 *      <ng-template kendoGridToolbarTemplate>
 *          <button kendoGridPDFCommand>Export to PDF</button>
 *      </ng-template>
 *      <kendo-grid-pdf fileName="Grid.pdf">
 *      </kendo-grid-pdf>
 * </kendo-grid>
 * ```
 */
export declare class PDFCommandDirective extends Button {
    private pdfService;
    /**
     * @hidden
     */
    onClick(e: any): void;
    /**
     * @hidden
     */
    get pdfClass(): boolean;
    constructor(pdfService: PDFService, element: ElementRef, renderer: Renderer, localization: LocalizationService, ngZone: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<PDFCommandDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PDFCommandDirective, "[kendoGridPDFCommand]", never, {}, {}, never>;
}
