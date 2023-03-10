/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
export const isFilterable = (settings) => settings !== false;
/**
 * @hidden
 */
export const hasFilterMenu = (settings) => typeof settings === 'string' && settings.indexOf('menu') > -1;
/**
 * @hidden
 */
export const hasFilterRow = (settings) => settings === true || (typeof settings === 'string' && settings.indexOf('row') > -1);
