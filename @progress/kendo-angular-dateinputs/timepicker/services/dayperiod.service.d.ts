/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { IntlService } from '@progress/kendo-angular-intl';
import { ListServiceSettings } from '../models/list-service-settings';
import { ListService } from '../models/list-service.interface';
import { ListItem } from '../models/list-item.interface';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class DayPeriodService implements ListService {
    private intl;
    private min;
    private max;
    private part;
    constructor(intl: IntlService);
    /**
     * @hidden
     */
    apply(value: Date, candidate: Date): Date;
    /**
     * @hidden
     */
    configure(settings: ListServiceSettings): void;
    /**
     * @hidden
     */
    data(_?: Date): ListItem[];
    /**
     * @hidden
     */
    isRangeChanged(_: Date, __: Date): boolean;
    /**
     * @hidden
     */
    limitRange(min: Date, max: Date, _?: Date): Date[];
    /**
     * @hidden
     */
    total(): number;
    /**
     * @hidden
     */
    selectedIndex(value: Date): number;
    /**
     * @hidden
     */
    valueInList(value: Date): boolean;
    private normalizedRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<DayPeriodService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DayPeriodService>;
}
