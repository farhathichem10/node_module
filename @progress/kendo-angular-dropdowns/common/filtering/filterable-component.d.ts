/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter } from '@angular/core';
/**
 * Defines the mandatory properties of the `kendoDropDownFilter` directive
 * so that `kendoDropDownFilter` can be used with any of the DropDowns components
 * which implement the `FilterableDropDownComponentBase` class.
 *
 * @hidden
 */
export declare class FilterableComponent {
    /**
     * Sets the data of the component.
     */
    data: any[];
    /**
     * Explicitly enables the emitting of the `filterChange` event.
     */
    filterable: boolean;
    /**
     * Hooks to the `filter` event.
     */
    filterChange: EventEmitter<string>;
    /**
     * Reads the data from the components with complex data.
     */
    textField?: string;
    /**
     * Reads the data from the components with complex data which use `valueField` instead of
     * `textField`&mdash;for example, the AutoComplete.
     */
    valueField?: string;
}
