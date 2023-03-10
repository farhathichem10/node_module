import { NgbDate } from '../ngb-date';
import { NgbCalendar, NgbPeriod } from '../ngb-calendar';
import * as ɵngcc0 from '@angular/core';
export declare class NgbCalendarPersian extends NgbCalendar {
    getDaysPerWeek(): number;
    getMonths(): number[];
    getWeeksPerMonth(): number;
    getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getWeekday(date: NgbDate): number;
    getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    getToday(): NgbDate;
    isValid(date?: NgbDate | null): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbCalendarPersian, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NgbCalendarPersian>;
}

//# sourceMappingURL=ngb-calendar-persian.d.ts.map