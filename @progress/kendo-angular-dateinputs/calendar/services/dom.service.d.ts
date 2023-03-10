/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { CalendarViewEnum } from '../models/view.enum';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class CalendarDOMService {
    calendarHeight: number;
    headerHeight: number;
    monthViewHeight: number;
    yearViewHeight: number;
    decadeViewHeight: number;
    centuryViewHeight: number;
    navigationItemHeight: number;
    scrollableContentHeight: number;
    scrollableYearContentHeight: number;
    calendarWidth: number;
    monthViewWidth: number;
    yearViewWidth: number;
    decadeViewWidth: number;
    centuryViewWidth: number;
    scrollableContentWidth: number;
    private hostContainer;
    ensureHeights(): void;
    calculateHeights(container?: HTMLElement): void;
    viewHeight(viewType: CalendarViewEnum): number;
    viewWidth(viewType: CalendarViewEnum): number;
    private viewDimension;
    private batch;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarDOMService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalendarDOMService>;
}
