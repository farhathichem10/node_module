/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
export var KeyEvents;
(function (KeyEvents) {
    KeyEvents[KeyEvents["keydown"] = 0] = "keydown";
    KeyEvents[KeyEvents["keypress"] = 1] = "keypress";
    KeyEvents[KeyEvents["keyup"] = 2] = "keyup";
})(KeyEvents || (KeyEvents = {}));
