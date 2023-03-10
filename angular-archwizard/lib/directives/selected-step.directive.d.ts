import { OnInit } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
import * as ɵngcc0 from '@angular/core';
export declare class SelectedStepDirective implements OnInit {
    private wizardStep;
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which should be selected by default
     */
    constructor(wizardStep: WizardStep);
    /**
     * Initialization work
     */
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SelectedStepDirective, [{ host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SelectedStepDirective, "[awSelectedStep]", never, {}, {}, never>;
}

//# sourceMappingURL=selected-step.directive.d.ts.map