import { OnInit } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
import * as ɵngcc0 from '@angular/core';
export declare class OptionalStepDirective implements OnInit {
    private wizardStep;
    optional: boolean;
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    constructor(wizardStep: WizardStep);
    /**
     * Initialization work
     */
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<OptionalStepDirective, [{ host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<OptionalStepDirective, "[awOptionalStep]", never, { "optional": "awOptionalStep"; }, {}, never>;
}

//# sourceMappingURL=optional-step.directive.d.ts.map