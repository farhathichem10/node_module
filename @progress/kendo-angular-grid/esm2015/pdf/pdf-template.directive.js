/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive, Optional } from '@angular/core';
import { PDFExportTemplateDirective } from '@progress/kendo-angular-pdf-export';
import * as i0 from "@angular/core";
/**
 * Represents the PDF page template of the Grid that helps to customize the PDF pages. To define a page template,
 * nest an `<ng-template>` tag with the `kendoGridPDFTemplate` directive inside `<kendo-grid-pdf>`.
 *
 * The template context provides the following fields:
 * - `pageNumber`&mdash;Defines PDF page number.
 * - `totalPages`&mdash;Defines the total number of PDF pages.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *         <kendo-grid [data]="gridData">
 *             <ng-template kendoGridToolbarTemplate>
 *                 <button kendoGridPDFCommand icon="file-pdf">Export to PDF</button>
 *             </ng-template>
 *             <kendo-grid-column field="ProductName">
 *             </kendo-grid-column>
 *              <kendo-grid-column field="UnitPrice">
 *             </kendo-grid-column>
 *             <kendo-grid-pdf fileName="Products.pdf" paperSize="A4" [margin]="{ top: '1cm', left: '1cm', right: '1cm', bottom: '1cm' }">
 *                 <ng-template kendoGridPDFTemplate let-pageNum="pageNum" let-totalPages="totalPages">
 *                     <div style="position: absolute;top: 5px; left: 5px;">
 *                         Page {{ pageNum }} of {{ totalPages }}
 *                     </div>
 *                 </ng-template>
 *             </kendo-grid-pdf>
 *         </kendo-grid>
 *     `
 * })
 *
 * class AppComponent {
 *     public gridData = [{
 *         "ProductID": 1,
 *         "ProductName": "Chai",
 *         "UnitPrice": 18.0000
 *       }, {
 *         "ProductID": 2,
 *         "ProductName": "Chang",
 *         "UnitPrice": 19.0000
 *       }
 *     ];
 * }
 *
 * ```
 */
export class PDFTemplateDirective extends PDFExportTemplateDirective {
    constructor(templateRef) {
        super(templateRef);
    }
}
PDFTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PDFTemplateDirective, deps: [{ token: i0.TemplateRef, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
PDFTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: PDFTemplateDirective, selector: "[kendoGridPDFTemplate]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PDFTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoGridPDFTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Optional
                }] }]; } });
