import { NgbDate } from '../ngb-date';
import { NgbCalendar, NgbPeriod } from '../ngb-calendar';
/**
 * @since 3.2.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbCalendarHebrew extends NgbCalendar {
    getDaysPerWeek(): number;
    getMonths(year?: number): number[];
    getWeeksPerMonth(): number;
    isValid(date?: NgbDate | null): boolean;
    getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getWeekday(date: NgbDate): number;
    getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    getToday(): NgbDate;
    /**
     * @since 3.4.0
     */
    toGregorian(date: NgbDate): NgbDate;
    /**
     * @since 3.4.0
     */
    fromGregorian(date: NgbDate): NgbDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbCalendarHebrew, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NgbCalendarHebrew>;
}

//# sourceMappingURL=ngb-calendar-hebrew.d.ts.map