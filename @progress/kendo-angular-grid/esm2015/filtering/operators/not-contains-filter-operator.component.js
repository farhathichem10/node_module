/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-l10n";
/**
 * Represents the `DoesNotContain` (**Does not contain**) filter operator.
 *
 * For more information and examples, refer to:
 * * [Setting the default filter operators]({% slug filter_menu %}#toc-default-filter-operator)
 * * [Setting the order of the filter operators]({% slug filter_menu %}#toc-order-of-filter-operators)
 */
export class DoesNotContainFilterOperatorComponent extends FilterOperatorBase {
    constructor(localization) { super("doesnotcontain", localization); }
}
DoesNotContainFilterOperatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoesNotContainFilterOperatorComponent, deps: [{ token: i1.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
DoesNotContainFilterOperatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoesNotContainFilterOperatorComponent, selector: "kendo-filter-not-contains-operator", providers: [
        {
            provide: FilterOperatorBase,
            useExisting: forwardRef(() => DoesNotContainFilterOperatorComponent)
        }
    ], usesInheritance: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoesNotContainFilterOperatorComponent, decorators: [{
            type: Component,
            args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(() => DoesNotContainFilterOperatorComponent)
                        }
                    ],
                    selector: 'kendo-filter-not-contains-operator',
                    template: ``
                }]
        }], ctorParameters: function () { return [{ type: i1.LocalizationService }]; } });
