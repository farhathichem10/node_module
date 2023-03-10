/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChipListComponent } from './chip-list.component';
import { ChipComponent } from './chip.component';
/**
 * Arguments for the `remove` event of the ChipList.
 */
export interface ChipListRemoveEvent {
    /**
     * The `ChipListComponent` instance.
     */
    sender: ChipListComponent;
    /**
     * The DOM event that triggered the `remove` event of the ChipList.
     */
    originalEvent: any;
    /**
     * The removed `ChipComponent` instance.
     */
    removedChip: ChipComponent;
}
