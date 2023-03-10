/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * Specifies the animation settings for the dial items of the FloatingActionButton
 * ([see example]({% slug dialitems_floatingactionbutton %}#toc-animation)).
 */
export interface DialItemAnimation {
    /**
     * Specifies the animation duration in milliseconds for each dial item.
     * @default 180
     */
    duration?: number;
    /**
     * Specifies the animation duration gap in milliseconds after each dial item is animated.
     * @default 90
     */
    gap?: number;
}
