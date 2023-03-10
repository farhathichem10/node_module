/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * The animation settings for the Popup component.
 */
export interface PopupAnimation {
    /**
     * The type of the animation.
     * @default 'slide'
     */
    type?: AnimationType;
    /**
     * The animation duration in milliseconds.
     * @default 100
     */
    duration: number;
    /**
     * The animation direction. Applicable if the type is set to `slide` or `expand`.
     * @default 'down'
     */
    direction: AnimationDirection;
}
export declare type AnimationType = 'slide' | 'expand' | 'zoom' | 'fade';
export declare type AnimationDirection = 'down' | 'up' | 'left' | 'right';
