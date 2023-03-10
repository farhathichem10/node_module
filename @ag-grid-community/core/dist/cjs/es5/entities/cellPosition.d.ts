// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../context/beanStub";
import { Column } from "./column";
import { RowPosition } from "./rowPosition";
import { RowPinnedType } from "./rowNode";
export interface CellPosition extends RowPosition {
    /** The grid column */
    column: Column;
}
export declare class CellPositionUtils extends BeanStub {
    createId(cellPosition: CellPosition): string;
    createIdFromValues(rowIndex: number, column: Column, rowPinned: RowPinnedType): string;
    equals(cellA: CellPosition, cellB: CellPosition): boolean;
}
