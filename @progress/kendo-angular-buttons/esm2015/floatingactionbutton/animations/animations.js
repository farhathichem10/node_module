/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { animate, query, sequence, stagger, style } from '@angular/animations';
/**
 * @hidden
 */
export function openAnimation(animationSettings) {
    const isBottom = animationSettings.align.vertical === 'bottom';
    const duration = animationSettings.duration;
    const gap = animationSettings.gap;
    return sequence([
        query(`.k-fab-item`, [
            style({ opacity: 0, transform: `translateY(${isBottom ? '8px' : '-8px'})` }),
            stagger(gap, [animate(`${duration}ms ease-in`, style({ opacity: '*', transform: 'translateY(0)' }))])
        ], { optional: true })
    ]);
}
/**
 * @hidden
 */
export function closeAnimation(animationSettings) {
    const isBottom = animationSettings.align.vertical === 'bottom';
    const duration = animationSettings.duration;
    const gap = animationSettings.gap;
    return sequence([
        query(`.k-fab-item`, [
            style({ opacity: '*', transform: 'translateY(0)' }),
            stagger(-gap, [animate(`${duration}ms ease-in`, style({ opacity: 0, transform: `translateY(${isBottom ? '8px' : '-8px'})` }))])
        ], { optional: true })
    ]);
}
