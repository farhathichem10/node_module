/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { isFocusable } from './is-focusable';
import { isVisible } from './is-visible';
export const isFocusableWithTabKey = (element, checkVisibility = true) => {
    if (!isFocusable(element)) {
        return false;
    }
    const tabIndex = element.getAttribute('tabIndex');
    const visible = !checkVisibility || isVisible(element);
    return visible && tabIndex !== '-1';
};
