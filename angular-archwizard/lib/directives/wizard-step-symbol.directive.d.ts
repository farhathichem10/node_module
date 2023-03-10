import { TemplateRef } from '@angular/core';
/**
 * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
 * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepSymbol>
 *     ...
 * </ng-template>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class WizardStepSymbolDirective {
    templateRef: TemplateRef<any>;
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WizardStepSymbolDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<WizardStepSymbolDirective, "ng-template[awStepSymbol], ng-template[awWizardStepSymbol]", never, {}, {}, never>;
}

//# sourceMappingURL=wizard-step-symbol.directive.d.ts.map