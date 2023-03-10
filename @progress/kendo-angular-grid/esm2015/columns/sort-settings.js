/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
const DEFAULTS = {
    allowUnsort: true,
    mode: 'single',
    showIndexes: true,
    initialDirection: 'asc',
    multiSortKey: 'none'
};
/**
 * @hidden
 */
export const normalize = (...settings) => Object.assign({}, DEFAULTS, ...settings);
