/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class DataService {
    grouped: boolean;
    groupIndices: number[];
    view: any[];
    private _data;
    private _flatData;
    set data(data: any[]);
    get data(): any[];
    /**
     * @hidden
     * Used to get the actual items count, i.e. excluding the header items in case of grouping.
     */
    get itemsCount(): number;
    /**
     * @hidden
     * Used to determine if the component received grouped data.
     */
    isGrouped(data: any[]): boolean;
    /**
     * @hidden
     * Used to calculate the last item index of each group.
     */
    getGroupIndices(data: any[]): number[];
    /**
     * @hidden
     * Used to get a flat array containing all items matching certain criteria.
     */
    filter(predicate: (value: any, index: number, array: any[]) => boolean): any[];
    /**
     * @hidden
     * Used to get the index of a given data item.
     */
    indexOf(item: any, startFrom?: number): number;
    /**
     * @hidden
     * Used to get the index of a data item based on an expression.
     */
    findIndex(predicate: any, startFrom?: number): number;
    /**
     * @hidden
     * Used to get the closest group header prior to an item index.
     */
    closestGroup(index: number): any;
    /**
     * @hidden
     * Used to get the first item matching the criteria.
     */
    find(predicate: any): number;
    /**
     * @hidden
     * Used to get the true index in a flattened data array.
     */
    flatIndex(index: number): any;
    /**
     * @hidden
     * Used to get the item at the provided index.
     */
    itemAt(index: number): any;
    /**
     * @hidden
     * Used to get the group at the provided index.
     */
    groupAt(index: number): any;
    /**
     * @hidden
     * Used to get all group items indices.
     */
    groupItemsIndices(): number[];
    /**
     * @hidden
     * Used to get the field by which the data is grouped.
     */
    groupField(): string;
    /**
     * @hidden
     * Used to get the group to which a dataItem belongs.
     */
    itemGroup(item: any): any;
    private flatten;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataService>;
}
