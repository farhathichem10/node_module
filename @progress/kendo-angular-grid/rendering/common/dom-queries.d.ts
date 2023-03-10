/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
export declare const hasClasses: (element: HTMLElement, classNames: string) => boolean;
/**
 * @hidden
 */
export declare const matchesClasses: (classNames: string) => (element: HTMLElement) => boolean;
/**
 * @hidden
 */
export declare const matchesNodeName: (nodeName: string) => any;
/**
 * @hidden
 */
export declare const closest: (node: any, predicate: any) => any;
/**
 * @hidden
 */
export declare const closestInScope: (node: any, predicate: any, scope: any) => any;
/**
 * @hidden
 */
export declare const contains: (parent: any, node: any, matchSelf?: boolean) => boolean;
/**
 * @hidden
 */
export declare const isVisible: (element: any) => boolean;
/**
 * @hidden
 */
export declare const isFocusable: (element: any) => boolean;
/**
 * @hidden
 */
export declare const isFocusableWithTabKey: (element: any, checkVisibility?: boolean) => boolean;
/**
 * @hidden
 */
export declare const findElement: (node: any, predicate: (element: any) => boolean, matchSelf?: boolean) => any;
/**
 * @hidden
 */
export declare const findLastElement: (node: any, predicate: (element: any) => boolean, matchSelf?: boolean) => any;
/**
 * @hidden
 */
export declare const findFocusable: (element: any, checkVisibility?: boolean) => any;
/**
 * @hidden
 */
export declare const findFocusableChild: (element: any, checkVisibility?: boolean) => any;
/**
 * @hidden
 */
export declare const findLastFocusableChild: (element: any, checkVisibility?: boolean) => any;
/**
 * @hidden
 */
export declare function rtlScrollPosition(position: number, element: any, initial: number): number;
