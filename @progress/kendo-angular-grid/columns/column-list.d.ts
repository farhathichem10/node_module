/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { QueryList } from '@angular/core';
import { ColumnBase } from './column-base';
/**
 * @hidden
 */
export declare class ColumnList {
    private columns;
    static empty(): ColumnList;
    constructor(columns: QueryList<ColumnBase>);
    forEach(callback: (column: ColumnBase) => void): void;
    filter(callback: (column: ColumnBase) => any): ColumnBase[];
    filterHierarchy(predicate: (column: ColumnBase) => boolean): ColumnBase[];
    filterSort(callback: (column: ColumnBase) => any): ColumnBase[];
    toArray(): ColumnBase[];
    rootColumns(): ColumnBase[];
    totalColumnLevels(): number;
}
