import { EventEmitter, OnInit } from '@angular/core';
import { MovingDirection } from '../util/moving-direction.enum';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
import * as ɵngcc0 from '@angular/core';
export declare class EnableBackLinksDirective implements OnInit {
    private completionStep;
    /**
     * This EventEmitter is called when the step is exited.
     * The bound method can be used to do cleanup work.
     */
    stepExit: EventEmitter<MovingDirection>;
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    constructor(completionStep: WizardCompletionStep);
    /**
     * Initialization work
     */
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<EnableBackLinksDirective, [{ host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<EnableBackLinksDirective, "[awEnableBackLinks]", never, {}, { "stepExit": "stepExit"; }, never>;
}

//# sourceMappingURL=enable-back-links.directive.d.ts.map