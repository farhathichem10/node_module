import { EventEmitter } from '@angular/core';
import { WizardStep } from './wizard-step.interface';
import { MovingDirection } from './moving-direction.enum';
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class WizardCompletionStep extends WizardStep {
    /**
     * @inheritDoc
     */
    stepExit: EventEmitter<MovingDirection>;
    /**
     * @inheritDoc
     */
    canExit: ((direction: MovingDirection) => boolean) | boolean;
    /**
     * @inheritDoc
     */
    enter(direction: MovingDirection): void;
    /**
     * @inheritDoc
     */
    exit(direction: MovingDirection): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WizardCompletionStep, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<WizardCompletionStep, never, never, {}, {}, never>;
}

//# sourceMappingURL=wizard-completion-step.interface.d.ts.map