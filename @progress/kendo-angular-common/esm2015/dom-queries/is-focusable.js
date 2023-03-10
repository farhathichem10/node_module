/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
const focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
export const isFocusable = (element) => {
    if (!element.tagName) {
        return false;
    }
    const tagName = element.tagName.toLowerCase();
    const hasTabIndex = Boolean(element.getAttribute('tabIndex'));
    const focusable = !element.disabled && focusableRegex.test(tagName);
    return focusable || hasTabIndex;
};
