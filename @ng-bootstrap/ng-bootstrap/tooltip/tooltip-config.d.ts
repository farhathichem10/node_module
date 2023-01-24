import { PlacementArray } from '../util/positioning';
import { NgbConfig } from '../ngb-config';
/**
 * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbTooltipConfig {
    private _ngbConfig;
    autoClose: boolean | 'inside' | 'outside';
    placement: PlacementArray;
    triggers: string;
    container: string;
    disableTooltip: boolean;
    tooltipClass: string;
    openDelay: number;
    closeDelay: number;
    private _animation;
    constructor(_ngbConfig: NgbConfig);
    get animation(): boolean;
    set animation(animation: boolean);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbTooltipConfig, never>;
}

//# sourceMappingURL=tooltip-config.d.ts.map