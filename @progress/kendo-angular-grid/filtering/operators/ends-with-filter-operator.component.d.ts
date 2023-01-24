/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { FilterOperatorBase } from './filter-operator.base';
import * as i0 from "@angular/core";
/**
 * Represents the `EndsWith` (**Ends with**) string filter operator.
 *
 * For more information and examples, refer to:
 * * [Setting the default filter operators]({% slug filter_menu %}#toc-default-filter-operator)
 * * [Setting the order of the filter operators]({% slug filter_menu %}#toc-order-of-filter-operators)
 */
export declare class EndsWithFilterOperatorComponent extends FilterOperatorBase {
    constructor(localization: LocalizationService);
    static ɵfac: i0.ɵɵFactoryDeclaration<EndsWithFilterOperatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EndsWithFilterOperatorComponent, "kendo-filter-endswith-operator", never, {}, {}, never, never>;
}
