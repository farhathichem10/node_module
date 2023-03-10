import { NgbConfig } from '../ngb-config';
/**
 * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbAccordionConfig {
    private _ngbConfig;
    closeOthers: boolean;
    type: string;
    private _animation;
    constructor(_ngbConfig: NgbConfig);
    get animation(): boolean;
    set animation(animation: boolean);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbAccordionConfig, never>;
}

//# sourceMappingURL=accordion-config.d.ts.map