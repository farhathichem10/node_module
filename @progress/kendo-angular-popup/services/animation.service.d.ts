/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter, OnDestroy } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class AnimationService implements OnDestroy {
    private animationBuilder;
    start: EventEmitter<any>;
    end: EventEmitter<any>;
    private flip;
    private player;
    constructor(animationBuilder: AnimationBuilder);
    play(element: any, options: any, flip: any): void;
    ngOnDestroy(): void;
    private playStates;
    private getDirection;
    private stopPlayer;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnimationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnimationService>;
}
