import { NgbTransitionStartFn } from '../util/transition/ngbTransition';
/**
 * Defines the carousel slide transition direction.
 */
export declare enum NgbSlideEventDirection {
    LEFT = "left",
    RIGHT = "right"
}
export interface NgbCarouselCtx {
    direction: 'left' | 'right';
}
export declare const ngbCarouselTransitionIn: NgbTransitionStartFn<NgbCarouselCtx>;
export declare const ngbCarouselTransitionOut: NgbTransitionStartFn<NgbCarouselCtx>;
