import { NgbDatepickerConfig } from './datepicker-config';
import { PlacementArray } from '../util/positioning';
/**
 * A configuration service for the [`NgbDatepickerInput`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepicker inputs used in the application.
 *
 * @since 5.2.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbInputDatepickerConfig extends NgbDatepickerConfig {
    autoClose: boolean | 'inside' | 'outside';
    container: null | 'body';
    positionTarget: string | HTMLElement;
    placement: PlacementArray;
    restoreFocus: true | HTMLElement | string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbInputDatepickerConfig, never>;
}

//# sourceMappingURL=datepicker-input-config.d.ts.map