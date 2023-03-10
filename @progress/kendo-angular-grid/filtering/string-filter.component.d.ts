/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ColumnComponent } from '../columns/column.component';
import { FilterService } from './filter.service';
import { CompositeFilterDescriptor, FilterDescriptor } from '@progress/kendo-data-query';
import { BaseFilterCellComponent } from './base-filter-cell.component';
import { FilterComponent } from './filter-component.interface';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import * as i0 from "@angular/core";
/**
 * Represents a base string filter component.
 */
export declare abstract class StringFilterComponent extends BaseFilterCellComponent implements FilterComponent {
    protected localization: LocalizationService;
    /**
     * The column with which the filter is associated.
     * @type {ColumnComponent}
     */
    column: ColumnComponent;
    /**
     * The current root filter.
     * @type {CompositeFilterDescriptor}
     */
    filter: CompositeFilterDescriptor;
    /**
     * The default filter operator. Defaults to `contains`.
     * @type {string}
     */
    operator: string;
    /**
     * The current filter for the associated column field.
     * @readonly
     * @type {FilterDescriptor}
     */
    get currentFilter(): FilterDescriptor;
    /**
     * The current filter operator for the associated column field.
     * @readonly
     * @type {string}
     */
    get currentOperator(): string;
    protected defaultOperators: Array<{
        text: string;
        value: string;
    }>;
    private subscription;
    constructor(filterService: FilterService, localization: LocalizationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected localizationChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringFilterComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StringFilterComponent, never, never, { "column": "column"; "filter": "filter"; "operator": "operator"; }, {}, never>;
}
