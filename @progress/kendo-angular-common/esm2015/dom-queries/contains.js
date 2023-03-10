/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { closest } from './closest';
export const contains = (parent, node, matchSelf = false) => {
    const outside = !closest(node, (child) => child === parent);
    if (outside) {
        return false;
    }
    const el = closest(node, (child) => child === node);
    return el && (matchSelf || el !== parent);
};
