/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { findElement } from './find-element';
import { isFocusableWithTabKey } from './is-focusable-with-tab-key';
export const findFocusableChild = (element, checkVisibility = true) => {
    return findElement(element, (node) => isFocusableWithTabKey(node, checkVisibility), false);
};
