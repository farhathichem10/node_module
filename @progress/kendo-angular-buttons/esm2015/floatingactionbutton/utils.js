/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
export function getAnchorAlign(fabAlign, rtl) {
    let align = { horizontal: (rtl ? 'right' : 'left'), vertical: 'bottom' };
    if (fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
    }
    if (fabAlign.vertical === 'bottom') {
        align.vertical = 'top';
    }
    if (fabAlign.vertical === 'bottom' && fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
        align.vertical = 'top';
    }
    return align;
}
/**
 * @hidden
 */
export function getPopupAlign(fabAlign, rtl) {
    let align = { horizontal: (rtl ? 'right' : 'left'), vertical: 'top' };
    if (fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
    }
    if (fabAlign.vertical === 'bottom') {
        align.vertical = 'bottom';
    }
    if (fabAlign.vertical === 'bottom' && fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
        align.vertical = 'bottom';
    }
    return align;
}
