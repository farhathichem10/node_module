/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { detectDesktopBrowser, detectMobileOS } from "@progress/kendo-common";
/**
 * @hidden
 */
const resolvedPromise = Promise.resolve(null);
/**
 * @hidden
 */
export const isPresent = (value) => value !== null && value !== undefined;
/**
 * @hidden
 */
export const tick = (f) => (resolvedPromise.then(f));
/**
 * @hidden
 */
function isDocumentNode(container) {
    return container.nodeType === 9;
}
/**
 * @hidden
 */
export function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    const matches = Element.prototype.matches ?
        (el, sel) => el.matches(sel)
        : (el, sel) => el.msMatchesSelector(sel);
    let node = element;
    while (node && !isDocumentNode(node)) {
        if (matches(node, selector)) {
            return node;
        }
        node = node.parentNode;
    }
}
/**
 * @hidden
 */
export const replaceMessagePlaceholder = (message, name, value) => message.replace(new RegExp(`\{\\s*${name}\\s*\}`, 'g'), value);
/**
 * @hidden
 */
export const SIZES = {
    small: 'sm',
    medium: 'md',
    large: 'lg'
};
const ROUNDNESS = {
    small: 'sm',
    medium: 'md',
    large: 'lg',
    full: 'full'
};
/**
 * @hidden
 *
 * Returns the styling classes to be added and removed
 */
export const getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
    switch (stylingOption) {
        case 'size':
            return {
                toRemove: `k-${componentType}-${SIZES[previousValue]}`,
                toAdd: newValue !== 'none' ? `k-${componentType}-${SIZES[newValue]}` : ''
            };
        case 'rounded':
            return {
                toRemove: `k-rounded-${ROUNDNESS[previousValue]}`,
                toAdd: newValue !== 'none' ? `k-rounded-${ROUNDNESS[newValue]}` : ''
            };
        case 'fillMode':
            return {
                toRemove: `k-${componentType}-${previousValue}`,
                toAdd: newValue !== 'none' ? `k-${componentType}-${newValue}` : ''
            };
        default:
            break;
    }
};
/**
 * @hidden
 *
 * Returns the themeColor classes to be added and removed
 */
export const getThemeColorClasses = (componentType, prevFillMode, fillMode, previousValue, newValue) => {
    return {
        toRemove: `k-${componentType}-${prevFillMode}-${previousValue}`,
        toAdd: newValue !== 'none' ? `k-${componentType}-${fillMode}-${newValue}` : ''
    };
};
/**
 * @hidden
 *
 * Returns true if the used browser is Firefox.
 */
export const isFirefox = (userAgent) => {
    const desktopBrowser = detectDesktopBrowser(userAgent);
    const mobileOS = detectMobileOS(userAgent);
    return (desktopBrowser && desktopBrowser.mozilla) || (mobileOS && mobileOS.browser === 'firefox');
};
