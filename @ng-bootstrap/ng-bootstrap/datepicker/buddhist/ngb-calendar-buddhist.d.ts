import { NgbCalendarGregorian, NgbPeriod } from '../ngb-calendar';
import { NgbDate } from '../ngb-date';
/**
 * @since 9.1.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbCalendarBuddhist extends NgbCalendarGregorian {
    getToday(): NgbDate;
    getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getWeekday(date: NgbDate): number;
    getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    isValid(date?: NgbDate | null): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbCalendarBuddhist, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NgbCalendarBuddhist>;
}

//# sourceMappingURL=ngb-calendar-buddhist.d.ts.map