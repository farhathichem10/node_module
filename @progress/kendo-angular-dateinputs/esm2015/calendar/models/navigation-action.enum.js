/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
export var Action;
(function (Action) {
    Action[Action["Left"] = 0] = "Left";
    Action[Action["Right"] = 1] = "Right";
    Action[Action["Up"] = 2] = "Up";
    Action[Action["Down"] = 3] = "Down";
    Action[Action["PrevView"] = 4] = "PrevView";
    Action[Action["NextView"] = 5] = "NextView";
    Action[Action["FirstInView"] = 6] = "FirstInView";
    Action[Action["LastInView"] = 7] = "LastInView";
    Action[Action["LowerView"] = 8] = "LowerView";
    Action[Action["UpperView"] = 9] = "UpperView";
})(Action || (Action = {}));
