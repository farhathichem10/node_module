// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowCtrl } from "./row/rowCtrl";
import { Column } from "../entities/column";
import { RowNode } from "../entities/rowNode";
import { CellPosition } from "../entities/cellPosition";
import { BeanStub } from "../context/beanStub";
import { FlashCellsParams, GetCellRendererInstancesParams, RefreshCellsParams } from "../gridApi";
import { ICellRenderer } from "./cellRenderers/iCellRenderer";
import { ICellEditor } from "../interfaces/iCellEditor";
import { RowPosition } from "../entities/rowPosition";
import { CellCtrl } from "./cell/cellCtrl";
export interface RowCtrlMap {
    [key: string]: RowCtrl;
}
export declare class RowRenderer extends BeanStub {
    private animationFrameService;
    private paginationProxy;
    private columnModel;
    private pinnedRowModel;
    private rowModel;
    private focusService;
    private beans;
    private rowContainerHeightService;
    private ctrlsService;
    private gridBodyCtrl;
    private destroyFuncsForColumnListeners;
    private firstRenderedRow;
    private lastRenderedRow;
    private rowCtrlsByRowIndex;
    private zombieRowCtrls;
    private cachedRowCtrls;
    private allRowCtrls;
    private topRowCtrls;
    private bottomRowCtrls;
    private pinningLeft;
    private pinningRight;
    private firstVisibleVPixel;
    private refreshInProgress;
    private printLayout;
    private embedFullWidthRows;
    private stickyRowFeature;
    private dataFirstRenderedFired;
    private postConstruct;
    private initialise;
    private initialiseCache;
    getRowCtrls(): RowCtrl[];
    getStickyTopRowCtrls(): RowCtrl[];
    private updateAllRowCtrls;
    private registerCellEventListeners;
    private removeGridColumnListeners;
    private refreshListenersToColumnsForCellComps;
    private onDomLayoutChanged;
    datasourceChanged(): void;
    private onPageLoaded;
    getAllCellsForColumn(column: Column): HTMLElement[];
    refreshFloatingRowComps(): void;
    getTopRowCtrls(): RowCtrl[];
    getBottomRowCtrls(): RowCtrl[];
    private refreshFloatingRows;
    private onPinnedRowDataChanged;
    private getRenderedIndexesForRowNodes;
    redrawRows(rowNodes?: RowNode[]): void;
    private getCellToRestoreFocusToAfterRefresh;
    private redrawAfterModelUpdate;
    private scrollToTopIfNewData;
    private updateContainerHeights;
    private getLockOnRefresh;
    private releaseLockOnRefresh;
    isRefreshInProgress(): boolean;
    private restoreFocusedCell;
    stopEditing(cancel?: boolean): void;
    getAllCellCtrls(): CellCtrl[];
    private getAllRowCtrls;
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    flashCells(params?: FlashCellsParams): void;
    refreshCells(params?: RefreshCellsParams): void;
    getCellRendererInstances(params: GetCellRendererInstancesParams): ICellRenderer[];
    getCellEditorInstances(params: GetCellRendererInstancesParams): ICellEditor[];
    getEditingCells(): CellPosition[];
    private mapRowNodes;
    private isRowInMap;
    private getCellCtrls;
    protected destroy(): void;
    private removeAllRowComps;
    private recycleRows;
    private removeRowCtrls;
    redrawAfterScroll(): void;
    private removeRowCompsNotToDraw;
    private calculateIndexesToDraw;
    private redraw;
    private dispatchDisplayedRowsChanged;
    private onDisplayedColumnsChanged;
    private redrawFullWidthEmbeddedRows;
    getFullWidthRowCtrls(rowNodes?: RowNode[]): RowCtrl[];
    refreshFullWidthRows(rowNodesToRefresh?: RowNode[]): void;
    private createOrUpdateRowCtrl;
    private destroyRowCtrls;
    private workOutFirstAndLastRowsToRender;
    /**
     * This event will only be fired once, and is queued until after the browser next renders.
     * This allows us to fire an event during the start of the render cycle, when we first see data being rendered
     * but not execute the event until all of the data has finished being rendered to the dom.
     */
    dispatchFirstDataRenderedEvent(): void;
    private ensureAllRowsInRangeHaveHeightsCalculated;
    getFirstVisibleVerticalPixel(): number;
    getFirstVirtualRenderedRow(): number;
    getLastVirtualRenderedRow(): number;
    private doNotUnVirtualiseRow;
    private createRowCon;
    getRenderedNodes(): RowNode<any>[];
    getRowByPosition(rowPosition: RowPosition): RowCtrl | null;
    getRowNode(gridRow: RowPosition): RowNode | undefined;
    isRangeInRenderedViewport(startIndex: number, endIndex: number): boolean;
}
export interface RefreshViewParams {
    recycleRows?: boolean;
    animate?: boolean;
    suppressKeepFocus?: boolean;
    onlyBody?: boolean;
    newData?: boolean;
    newPage?: boolean;
}
