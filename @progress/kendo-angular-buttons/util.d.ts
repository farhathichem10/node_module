/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ButtonStylingClasses } from "./common/models";
/**
 * @hidden
 */
export declare const isPresent: Function;
/**
 * @hidden
 */
export declare const tick: (f: any) => Promise<any>;
/**
 * @hidden
 */
export declare function closest(element: any, selector: string): any;
/**
 * @hidden
 */
export declare const replaceMessagePlaceholder: (message: string, name: string, value: string) => string;
/**
 * @hidden
 */
export declare const SIZES: {
    small: string;
    medium: string;
    large: string;
};
/**
 * @hidden
 *
 * Returns the styling classes to be added and removed
 */
export declare const getStylingClasses: (componentType: any, stylingOption: string, previousValue: any, newValue: any) => ButtonStylingClasses;
/**
 * @hidden
 *
 * Returns the themeColor classes to be added and removed
 */
export declare const getThemeColorClasses: (componentType: any, prevFillMode: any, fillMode: any, previousValue: any, newValue: any) => ButtonStylingClasses;
/**
 * @hidden
 *
 * Returns true if the used browser is Firefox.
 */
export declare const isFirefox: (userAgent: any) => boolean;
