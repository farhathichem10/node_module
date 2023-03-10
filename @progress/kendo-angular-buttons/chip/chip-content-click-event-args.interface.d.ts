/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChipComponent } from './chip.component';
/**
 * Arguments for the `contentClick` event of the Chip.
 */
export interface ChipContentClickEvent {
    /**
     * The `ChipComponent` instance.
     */
    sender: ChipComponent;
    /**
     * The DOM event that triggered the `contentClick` event of the Chip.
     */
    originalEvent: any;
}
