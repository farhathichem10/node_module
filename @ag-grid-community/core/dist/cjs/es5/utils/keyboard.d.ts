// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridOptionsWrapper } from '../gridOptionsWrapper';
import { RowNode } from '../entities/rowNode';
import { Column } from '../entities/column';
import { ColumnGroup } from '../entities/columnGroup';
export declare function isEventFromPrintableCharacter(event: KeyboardEvent): boolean;
/**
 * Allows user to tell the grid to skip specific keyboard events
 * @param {GridOptionsWrapper} gridOptionsWrapper
 * @param {KeyboardEvent} keyboardEvent
 * @param {RowNode} rowNode
 * @param {Column} column
 * @param {boolean} editing
 * @returns {boolean}
 */
export declare function isUserSuppressingKeyboardEvent(gridOptionsWrapper: GridOptionsWrapper, keyboardEvent: KeyboardEvent, rowNode: RowNode, column: Column, editing: boolean): boolean;
export declare function isUserSuppressingHeaderKeyboardEvent(gridOptionsWrapper: GridOptionsWrapper, keyboardEvent: KeyboardEvent, headerRowIndex: number, column: Column | ColumnGroup): boolean;
export declare function normaliseQwertyAzerty(keyboardEvent: KeyboardEvent): string;
export declare function isDeleteKey(key: string, alwaysReturnFalseOnBackspace?: boolean): boolean;
