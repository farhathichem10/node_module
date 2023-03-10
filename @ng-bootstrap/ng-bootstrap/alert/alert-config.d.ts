import { NgbConfig } from '../ngb-config';
/**
 * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all alerts used in the application.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbAlertConfig {
    private _ngbConfig;
    dismissible: boolean;
    type: string;
    private _animation;
    constructor(_ngbConfig: NgbConfig);
    get animation(): boolean;
    set animation(animation: boolean);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbAlertConfig, never>;
}

//# sourceMappingURL=alert-config.d.ts.map