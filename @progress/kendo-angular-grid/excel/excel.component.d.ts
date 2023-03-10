/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { OnDestroy, QueryList, NgZone } from '@angular/core';
import { ExcelExportData, ColumnBase, CellOptions } from '@progress/kendo-angular-excel-export';
import { GridComponent } from '../grid.component';
import { ExcelService } from './excel.service';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { FetchDataCallback } from '../common/fetch-data-callback';
import * as i0 from "@angular/core";
/**
 * Configures the settings for the export of Grid in Excel ([see example]({% slug excelexport_grid %})).
 */
export declare class ExcelComponent implements OnDestroy {
    private localization;
    private zone;
    /**
     * Specifies the file name of the exported Excel file.
     * @default "Export.xlsx"
     */
    fileName: string;
    /**
     * Enables or disables column filtering in the Excel file. This behavior is different from the filtering feature of the Grid.
     */
    filterable: boolean;
    /**
     * The author of the workbook.
     */
    creator?: string;
    /**
     * The date on which the workbook was created. Defaults to `new Date()`.
     */
    date?: Date;
    /**
     * If set to `true`, the content is forwarded to [proxyURL](#toc-proxyurl) even if the browser supports the saving of files locally.
     */
    forceProxy: boolean;
    /**
     * The URL of the server-side proxy which streams the file to the end user.
     *
     * Using a proxy is required if the browser is not capable of saving files locally&mdash;for example,
     * Internet Explorer 9 and Safari.
     *
     * Optionally, set up a proxy to reduce memory usage. This avoids copying the file contents in memory,
     * but transmits it over the network instead. For this use case, set [forceProxy](#toc-forceproxy) to `true`
     * to skip client-side saving even in browser that support it.
     *
     * In the request body, the proxy receives a POST request with the following parameters:
     * - `contentType`&mdash;The MIME type of the file.
     * - `base64`&mdash;The base-64 encoded file content.
     * - `fileName`&mdash;The file name, as requested by the caller.
     *
     * The proxy returns the decoded file with the `"Content-Disposition"` header set to `attachment; filename="<fileName.xslx>"`.
     *
     * For details on the server-side proxy usage and implementation, see the [File Saver]({% slug overview_filesaver %}) documentation.
     */
    proxyURL: string;
    /**
     * The function that is used to get the exported data options. By default, uses the current data and group of the Grid.
     * To export data that is different from the current Grid data, provide a custom function.
     */
    fetchData: FetchDataCallback;
    /**
     * If the data is grouped, the options of the cells that are inserted before the data,
     * group, and footer cells to indicate the group hierarchy.
     */
    paddingCellOptions: CellOptions;
    /**
     * If the data is grouped, the options of the cells that are inserted before the
     * header cells to align the headers and the column values.
     */
    headerPaddingCellOptions: CellOptions;
    /**
     * Specifies if the groups in the Excel file are collapsible.
     */
    collapsible: boolean;
    /**
     * @hidden
     */
    columns: QueryList<ColumnBase>;
    private saveSubscription;
    private dataSubscription;
    constructor(excelService: ExcelService, localization: LocalizationService, zone: NgZone);
    ngOnDestroy(): void;
    protected save(component: GridComponent): void;
    protected exportData(component: GridComponent, result: ExcelExportData): void;
    protected saveFile(options: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExcelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExcelComponent, "kendo-grid-excel", never, { "fileName": "fileName"; "filterable": "filterable"; "creator": "creator"; "date": "date"; "forceProxy": "forceProxy"; "proxyURL": "proxyURL"; "fetchData": "fetchData"; "paddingCellOptions": "paddingCellOptions"; "headerPaddingCellOptions": "headerPaddingCellOptions"; "collapsible": "collapsible"; }, {}, ["columns"], never>;
}
