/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
export const findElement = (node, predicate, matchSelf = true) => {
    if (!node) {
        return;
    }
    if (matchSelf && predicate(node)) {
        return node;
    }
    node = node.firstChild;
    while (node) {
        if (node.nodeType === 1) {
            const element = findElement(node, predicate);
            if (element) {
                return element;
            }
        }
        node = node.nextSibling;
    }
};
