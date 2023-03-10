/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * Arguments for the `click` event of the dial item
 * ([see example]({% slug overview_floatingactionbutton %}#toc-events)).
 */
export interface DialItemClickEvent {
    /**
     * The clicked dial item.
     */
    item: any;
    /**
     * The index of the clicked dial item in the `dialItems` collection.
     */
    index: number;
}
