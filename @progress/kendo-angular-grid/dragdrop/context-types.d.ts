/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ColumnBase } from '../columns/column-base';
/**
 * @hidden
 */
export declare type DragAndDropContext = {
    field?: string;
    hint?: string;
    lastTarget?: boolean;
    lastColumn?: boolean;
    column?: ColumnBase;
    type?: 'column' | 'groupIndicator' | 'columnGroup';
};
