import { TemplateRef } from '@angular/core';
/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
import * as ɵngcc0 from '@angular/core';
export declare class WizardStepTitleDirective {
    templateRef: TemplateRef<any>;
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WizardStepTitleDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<WizardStepTitleDirective, "ng-template[awStepTitle], ng-template[awWizardStepTitle]", never, {}, {}, never>;
}

//# sourceMappingURL=wizard-step-title.directive.d.ts.map