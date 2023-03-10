import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { SliderElementDirective } from './slider-element.directive';
import * as ɵngcc0 from '@angular/core';
export declare class SliderLabelDirective extends SliderElementDirective {
    private _value;
    readonly value: string;
    constructor(elemRef: ElementRef, renderer: Renderer2, changeDetectionRef: ChangeDetectorRef);
    setValue(value: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SliderLabelDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SliderLabelDirective, "[ng5SliderLabel]", never, {}, {}, never>;
}

//# sourceMappingURL=slider-label.directive.d.ts.map