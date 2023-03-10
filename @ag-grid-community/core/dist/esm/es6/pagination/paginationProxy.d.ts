// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowBounds } from "../interfaces/iRowModel";
import { BeanStub } from "../context/beanStub";
import { RowNode } from "../entities/rowNode";
import { RowPosition } from "../entities/rowPosition";
export declare class PaginationProxy extends BeanStub {
    private rowModel;
    private active;
    private paginateChildRows;
    private pageSize;
    private totalPages;
    private currentPage;
    private topDisplayedRowIndex;
    private bottomDisplayedRowIndex;
    private pixelOffset;
    private topRowBounds;
    private bottomRowBounds;
    private masterRowCount;
    private postConstruct;
    ensureRowHeightsValid(startPixel: number, endPixel: number, startLimitIndex: number, endLimitIndex: number): boolean;
    private onModelUpdated;
    private onPaginationPageSizeChanged;
    goToPage(page: number): void;
    getPixelOffset(): number;
    getRow(index: number): RowNode | undefined;
    getRowNode(id: string): RowNode | undefined;
    getRowIndexAtPixel(pixel: number): number;
    getCurrentPageHeight(): number;
    getCurrentPagePixelRange(): {
        pageFirstPixel: number;
        pageLastPixel: number;
    };
    isRowPresent(rowNode: RowNode): boolean;
    isEmpty(): boolean;
    isRowsToRender(): boolean;
    getNodesInRangeForSelection(firstInRange: RowNode, lastInRange: RowNode): RowNode[];
    forEachNode(callback: (rowNode: RowNode, index: number) => void): void;
    getType(): string;
    getRowBounds(index: number): RowBounds;
    getPageFirstRow(): number;
    getPageLastRow(): number;
    getRowCount(): number;
    getPageForIndex(index: number): number;
    goToPageWithIndex(index: any): void;
    isRowInPage(row: RowPosition): boolean;
    isLastPageFound(): boolean;
    getCurrentPage(): number;
    goToNextPage(): void;
    goToPreviousPage(): void;
    goToFirstPage(): void;
    goToLastPage(): void;
    getPageSize(): number;
    getTotalPages(): number;
    private setPageSize;
    private calculatePages;
    private setPixelOffset;
    private setZeroRows;
    private calculatePagesMasterRowsOnly;
    getMasterRowCount(): number;
    private calculatePagesAllRows;
    private calculatedPagesNotActive;
}
