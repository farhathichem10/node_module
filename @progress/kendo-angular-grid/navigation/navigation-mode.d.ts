/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * The operating mode of the navigation service.
 *
 * The following list includes some of the available state transitions:
 *     Standby  (focusIn)                                               -> Cursor
 *     Standby  (click)                     On focusable child          -> Content
 *     Standby  (click)                     On cell                     -> Cursor
 *     Cursor   (focusOut)                                              -> Standby
 *     Cursor   (keydown = arrows, paging)                              -> Cursor
 *     Cursor   (keydown = Enter|F2)        With focusable children     -> Content
 *     Cursor   (keydown = Enter|F2)        Without focusable children  -> Cursor
 *     Cursor   (keydown = other)           With focusable children     -> Content
 *     Content  (focusOut)                                              -> Standby
 *
 * @hidden
 *
 */
export declare const enum NavigationMode {
    /**
     * The Grid is ready to receive focus.
     * - The last focused cell has `tabindex = 0`.
     * - Other focusable elements have `tabindex = -1`.
     */
    Standby = 0,
    /**
     * The Grid has focus.
     * - The user can navigate to adjacent cells with the arrow keys.
     * - The user can skip cells when they navigate up and down by holding `Ctrl`.
     * - The user can change pages by using `Page Up` or `Page Down`.
     * - The user can focus content elements by pressing `Enter` or `F2`.
     */
    Cursor = 1,
    /**
     * The focus is on the content elements and the keyboard navigation of the Grid is disabled.
     * - The user can switch between focusable elements inside the Grid by using `Tab`.
     * - The user can return to the keyboard navigation mode by pressing `Enter`, `F2`, or `Esc`.
     */
    Content = 2
}
