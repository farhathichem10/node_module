/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
export declare class ItemMap {
    count: number;
    items: any;
    get first(): any;
    get last(): any;
    removeItem(key: any): void;
    setItem(key: any, item: any): void;
    getItem(key: any): any;
    toArray(): any[];
    forEach(callback: any): any;
    find(callback: any): any;
}
