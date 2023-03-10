/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * Specifies the horizontal and vertical alignment of the FloatingActionButton relative to the viewport or parent element
 * ([see example]({% slug positioning_floatingactionbutton %}#toc-align)).
 */
export interface FabAlign {
    /**
     * Specifies the vertical alignment of the FloatingActionButton.
     *
     * The available options are:
     * - `top` (Default)
     * - `middle`
     * - `bottom`
     */
    vertical?: 'top' | 'middle' | 'bottom';
    /**
     * Specifies the horizontal alignment of the FloatingActionButton.
     *
     * The available options are:
     * - `start`
     * - `center`
     * - `end` (Default)
     */
    horizontal?: 'start' | 'center' | 'end';
}
