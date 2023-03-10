/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { PreventableEvent } from './preventable-event';
/**
 * Arguments for the `removeTag` event. The `removeTag` event fires when a tag is about
 * to the removed. If you cancel the event, the removal is prevented.
 */
export class RemoveTagEvent extends PreventableEvent {
    /**
     * Constructs the event arguments for the `remove` event.
     * @param dataItem - The data item or an array of data items that will be removed.
     */
    constructor(dataItem) {
        super();
        this.dataItem = dataItem;
    }
}
