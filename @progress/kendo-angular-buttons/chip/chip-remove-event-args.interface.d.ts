/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChipComponent } from './chip.component';
/**
 * Arguments for the `remove` event of the Chip.
 */
export interface ChipRemoveEvent {
    /**
     * The `ChipComponent` instance.
     */
    sender: ChipComponent;
    /**
     * The DOM event that triggered the `remove` event of the Chip.
     */
    originalEvent: any;
}
