import { EventEmitter } from '@angular/core';
import { WizardComponent } from '../components/wizard.component';
/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
import * as ɵngcc0 from '@angular/core';
export declare class NextStepDirective {
    private wizard;
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     */
    preFinalize: EventEmitter<void>;
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     */
    postFinalize: EventEmitter<void>;
    /**
     * Constructor
     *
     * @param wizard The state of the wizard
     */
    constructor(wizard: WizardComponent);
    /**
     * A convenience field for `preFinalize`
     */
    get finalize(): EventEmitter<void>;
    /**
     * A convenience name for `preFinalize`
     *
     * @param emitter The [[EventEmitter]] to be set
     */
    set finalize(emitter: EventEmitter<void>);
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    onClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NextStepDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<NextStepDirective, "[awNextStep]", never, {}, { "preFinalize": "preFinalize"; "postFinalize": "postFinalize"; "finalize": "finalize"; }, never>;
}

//# sourceMappingURL=next-step.directive.d.ts.map