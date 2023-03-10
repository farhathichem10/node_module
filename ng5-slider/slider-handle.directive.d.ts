import { ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { SliderElementDirective } from './slider-element.directive';
import * as ɵngcc0 from '@angular/core';
export declare class SliderHandleDirective extends SliderElementDirective {
    active: boolean;
    role: string;
    tabindex: string;
    ariaOrientation: string;
    ariaLabel: string;
    ariaLabelledBy: string;
    ariaValueNow: string;
    ariaValueText: string;
    ariaValueMin: string;
    ariaValueMax: string;
    focus(): void;
    constructor(elemRef: ElementRef, renderer: Renderer2, changeDetectionRef: ChangeDetectorRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SliderHandleDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SliderHandleDirective, "[ng5SliderHandle]", never, {}, {}, never>;
}

//# sourceMappingURL=slider-handle.directive.d.ts.map