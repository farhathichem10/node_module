import { EventEmitter } from '@angular/core';
import { WizardComponent } from '../components/wizard.component';
/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
import * as ɵngcc0 from '@angular/core';
export declare class ResetWizardDirective {
    private wizard;
    /**
     * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
     */
    finalize: EventEmitter<void>;
    /**
     * Constructor
     *
     * @param wizard The wizard component
     */
    constructor(wizard: WizardComponent);
    /**
     * Resets the wizard
     */
    onClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ResetWizardDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<ResetWizardDirective, "[awResetWizard]", never, {}, { "finalize": "finalize"; }, never>;
}

//# sourceMappingURL=reset-wizard.directive.d.ts.map