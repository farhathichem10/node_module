import { ElementRef } from '@angular/core';
import { ScrollToAnimationEasingCollection } from './scroll-to-easing.interface';
import { ScrollToDefaultConfigOptions } from './scroll-to-config.interface';
/** Default values for Component Input */
export declare const DEFAULTS: ScrollToDefaultConfigOptions;
/** Easing Colleciton */
export declare const EASING: ScrollToAnimationEasingCollection;
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 */
export declare const EVENTS: string[];
/**
 * Strip hash (#) from value.
 *
 * @param value 				The given string value
 * @returns 					The stripped string value
 */
export declare function stripHash(value: string): string;
/**
 * Test if a given value is a string.
 *
 * @param value 					The given value
 * @returns 						Whether the given value is a string
 */
export declare function isString(value: any): value is string;
/**
 * Test if a given Element is the Window.
 *
 * @param container 				The given Element
 * @returns 						Whether the given Element is Window
 */
export declare function isWindow(container: any): container is Window;
/**
 * Test if a given value is of type ElementRef.
 *
 * @param value 					The given value
 * @returns               Whether the given value is a number
 */
export declare function isElementRef(value: any): value is ElementRef;
/**
 * Whether or not the given value is a Native Element.
 *
 * @param value           The given value
 * @returns               Whether or not the value is a Native Element
 */
export declare function isNativeElement(value: any): value is HTMLElement;
/**
 * Test if a given value is type number.
 *
 * @param value 					The given value
 * @returns 						Whether the given value is a number
 */
export declare function isNumber(value: any): value is number;
