/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { FilterService } from '../filter.service';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { NumericFilterComponent } from '../numeric-filter.component';
import * as i0 from "@angular/core";
/**
 * Represents a numeric filter cell.
 *
 * @example
 *  ```html-no-run
 *      <kendo-grid-column field="ProductName" title="Product Name">
 *          <ng-template kendoGridFilterCellTemplate let-filter let-column="column">
 *          <kendo-grid-numeric-filter-cell
 *              [column]="column"
 *              [filter]="filter">
 *          </kendo-grid-numeric-filter-cell>
 *          </ng-template>
 *      </kendo-grid-column>
 *   ```
 */
export declare class NumericFilterCellComponent extends NumericFilterComponent {
    protected localization: LocalizationService;
    /**
     * Determines the delay time (in milliseconds) before the filter value is submitted.
     * A value of `0` indicates no delay. The default value is `500`.
     * @type {boolean}
     */
    filterDelay: number;
    /**
     * Determines if the drop-down filter operators will be displayed.
     * The default value is `true`.
     * @type {boolean}
     */
    showOperators: boolean;
    constructor(filterService: FilterService, localization: LocalizationService);
    /**
     * @hidden
     */
    messageFor(key: string): string;
    /**
     * @hidden
     */
    get columnLabel(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumericFilterCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumericFilterCellComponent, "kendo-grid-numeric-filter-cell", never, { "filterDelay": "filterDelay"; "showOperators": "showOperators"; }, {}, never, never>;
}
