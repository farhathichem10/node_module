/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { QueryList, NgZone } from '@angular/core';
import { WorkbookOptions } from '@progress/kendo-ooxml';
import { CellOptions } from './ooxml/cell-options.interface';
import { ExcelExportData } from './excel-export-data';
import { ColumnBase } from './columns/column-base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import * as i0 from "@angular/core";
/**
 * Represents the [Kendo UI Excel Export component for Angular]({% slug overview_excelexport %}).
 * Configures the settings for the Excel export of the Kendo UI Grid.
 */
export declare class ExcelExportComponent {
    private localization;
    private zone;
    /**
     * Specifies the name of the file that is exported to Excel.
     * @default "Export.xlsx"
     */
    fileName: string;
    /**
     * Enables or disables the column filtering in the Excel file
     * ([see example]({% slug filtering_excelexport %})).
     */
    filterable: boolean;
    /**
     * Specifies if groups are collapsible in the excel file.
     */
    collapsible: boolean;
    /**
     * The author of the workbook.
     */
    creator?: string;
    /**
     * The date on which the workbook is created.
     * The default value is `new Date()`.
     */
    date?: Date;
    /**
     * If `forceProxy` is set to `true`, the content is forwarded to `proxyURL`
     * even if the browser supports the local saving of files.
     */
    forceProxy: boolean;
    /**
     * The URL of the server-side proxy which will stream the file to the end user. When the browser is not
     * capable of saving files locally&mdash;for example, Internet Explorer 9 and earlier, and Safari&mdash;a
     * proxy is used. The implementation of the server-side proxy has to be done by you.
     *
     * The proxy receives a POST request with the following parameters in the request body:
     * - `contentType`&mdash;The MIME type of the file.
     * - `base64`&mdash;The base-64 encoded file content.
     * - `fileName`&mdash;The file name, as requested by the caller.
     * The proxy is expected to return the decoded file with the **Content-Disposition** header set to `attachment; filename="<fileName.xslx>"`.
     */
    proxyURL: string;
    /**
     * The exported data. If grouped, the data must be structured as described by the
     * [`GroupResult`]({% slug api_kendo-data-query_groupresult %}) option of the Kendo UI Data Query component.
     */
    data: any[];
    /**
     * The exported data groups. The groups must be compatible with the
     * [`GroupDescriptor`]({% slug api_kendo-data-query_groupdescriptor %}) option of the Kendo UI Data Query component.
     */
    group: any[];
    /**
     * The options of the cells that are inserted before the data, group, and footer cells
     * to indicate the group hierarchy when the data is grouped
     * ([see example]({% slug cells_excelexport %}#toc-padding-cells)).
     */
    paddingCellOptions: CellOptions;
    /**
     * The options of the cells that are inserted before the header cells
     * to align the headers and the column values when the data is grouped
     * ([see example]({% slug cells_excelexport %}#toc-header-padding-cells)).
     */
    headerPaddingCellOptions: CellOptions;
    /**
     * @hidden
     */
    columns: QueryList<ColumnBase>;
    constructor(localization: LocalizationService, zone: NgZone);
    /**
     * Saves the data to Excel.
     *
     * @param exportData - An optional parameter. Can be the data that will be exported or [`WorkbookOptions`]({% slug api_excel-export_workbookoptions %}).
     */
    save(exportData?: any[] | ExcelExportData | WorkbookOptions): void;
    /**
     * Based on the specified columns and data, returns
     * [`WorkbookOptions`]({% slug api_excel-export_workbookoptions %})
     * ([see example]({% slug customrowsandcells_excelexport %})).
     *
     * @param exportData - The optional data to be exported.
     * @returns {WorkbookOptions} - The workbook options.
     */
    workbookOptions(exportData?: any[] | ExcelExportData): WorkbookOptions;
    /**
     * Returns a promise which will be resolved with the file data URI
     * ([see example]({% slug filesaving_excelexport %})).
     *
     * @param exportData - The optional data or [`WorkbookOptions`]({% slug api_excel-export_workbookoptions %}) that will be used to generate the data URI.
     * @returns {Promise<string>} - The promise that will be resolved by the file data URI.
     */
    toDataURL(exportData?: any[] | ExcelExportData | WorkbookOptions): Promise<string>;
    protected getExportData(exportData?: ExcelExportData | any[]): ExcelExportData;
    protected saveFile(dataURL: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExcelExportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExcelExportComponent, "kendo-excelexport", ["kendoExcelExport"], { "fileName": "fileName"; "filterable": "filterable"; "collapsible": "collapsible"; "creator": "creator"; "date": "date"; "forceProxy": "forceProxy"; "proxyURL": "proxyURL"; "data": "data"; "group": "group"; "paddingCellOptions": "paddingCellOptions"; "headerPaddingCellOptions": "headerPaddingCellOptions"; }, {}, ["columns"], never>;
}
