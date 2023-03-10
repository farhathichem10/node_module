// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowNode, RowPinnedType } from "../entities/rowNode";
import { BeanStub } from "../context/beanStub";
export declare class PinnedRowModel extends BeanStub {
    private beans;
    private pinnedTopRows;
    private pinnedBottomRows;
    init(): void;
    isEmpty(floating: RowPinnedType): boolean;
    isRowsToRender(floating: RowPinnedType): boolean;
    getRowAtPixel(pixel: number, floating: RowPinnedType): number;
    setPinnedTopRowData(rowData: any[] | undefined): void;
    setPinnedBottomRowData(rowData: any[] | undefined): void;
    private createNodesFromData;
    getPinnedTopRowData(): RowNode[];
    getPinnedBottomRowData(): RowNode[];
    getPinnedTopTotalHeight(): number;
    getPinnedTopRowCount(): number;
    getPinnedBottomRowCount(): number;
    getPinnedTopRow(index: number): RowNode | undefined;
    getPinnedBottomRow(index: number): RowNode | undefined;
    forEachPinnedTopRow(callback: (rowNode: RowNode, index: number) => void): void;
    forEachPinnedBottomRow(callback: (rowNode: RowNode, index: number) => void): void;
    getPinnedBottomTotalHeight(): number;
    private getTotalHeight;
}
