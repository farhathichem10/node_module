// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowModelType } from "../interfaces/iRowModel";
import { ColumnPinnedType } from "../entities/column";
export declare class Constants {
    static ROW_BUFFER_SIZE: number;
    static LAYOUT_INTERVAL: number;
    static BATCH_WAIT_MILLIS: number;
    static EXPORT_TYPE_DRAG_COPY: 'dragCopy';
    static EXPORT_TYPE_CLIPBOARD: 'clipboard';
    static EXPORT_TYPE_EXCEL: 'excel';
    static EXPORT_TYPE_CSV: 'csv';
    static ROW_MODEL_TYPE_INFINITE: RowModelType;
    static ROW_MODEL_TYPE_VIEWPORT: RowModelType;
    static ROW_MODEL_TYPE_CLIENT_SIDE: RowModelType;
    static ROW_MODEL_TYPE_SERVER_SIDE: RowModelType;
    static ALWAYS: 'always';
    static ONLY_WHEN_GROUPING: 'onlyWhenGrouping';
    static PINNED_TOP: 'top';
    static PINNED_BOTTOM: 'bottom';
    static DOM_LAYOUT_NORMAL: 'normal';
    static DOM_LAYOUT_PRINT: 'print';
    static DOM_LAYOUT_AUTO_HEIGHT: 'autoHeight';
    static GROUP_AUTO_COLUMN_ID: 'ag-Grid-AutoColumn';
    static SOURCE_PASTE: 'paste';
    static PINNED_RIGHT: ColumnPinnedType;
    static PINNED_LEFT: ColumnPinnedType;
    static SORT_ASC: 'asc';
    static SORT_DESC: 'desc';
    static INPUT_SELECTOR: string;
    static FOCUSABLE_SELECTOR: string;
    static FOCUSABLE_EXCLUDE: string;
}
