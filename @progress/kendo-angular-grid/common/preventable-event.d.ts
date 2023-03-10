/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
export declare abstract class PreventableEvent {
    private prevented;
    /**
     * Prevents the default action for a specified event.
     * In this way, the source component suppresses
     * the built-in behavior that follows the event.
     */
    preventDefault(): void;
    /**
     * Returns `true` if the event was prevented
     * by any of its subscribers.
     *
     * @returns `true` if the default action was prevented.
     * Otherwise, returns `false`.
     */
    isDefaultPrevented(): boolean;
}
