import { Day } from './day.enum';
import { addDays } from './add-days';
import { createDate } from './create-date';
import { prevDayOfWeek } from './prev-day-of-week';
import { MS_PER_DAY } from './constants';
import { getDate } from './get-date';
var moveDateToWeekStart = function (date, weekStartDay) {
    if (weekStartDay !== Day.Monday) {
        return addDays(prevDayOfWeek(date, weekStartDay), 4);
    }
    return addDays(date, (4 - (date.getDay() || 7)));
};
var calcWeekInYear = function (date, weekStartDay) {
    var firstWeekInYear = createDate(date.getFullYear(), 0, 1, -6);
    var newDate = moveDateToWeekStart(date, weekStartDay);
    var diffInMS = newDate.getTime() - firstWeekInYear.getTime();
    var days = Math.floor(diffInMS / MS_PER_DAY);
    return 1 + Math.floor(days / 7);
};
/**
 * A function that returns the number of the week within a year, which is calculated in relation to the date.
 *
 * For more information, refer to the [**ISO week date**](https://en.wikipedia.org/wiki/ISO_week_date) article.
 *
 * @param date - The date used for the week number calculation.
 * @param weekStartDay - The first day of the week. By default, the first week day is Monday.
 * @returns - The number of the week within the year.
 *
 * @example
 * ```ts-no-run
 * weekInYear(new Date(2016, 0, 1)); // Week 53, 2015
 * weekInYear(new Date(2016, 0, 5)); // Week 1, 2016
 * weekInYear(new Date(2017, 0, 1)); // Week 52, 2016
 * weekInYear(new Date(2017, 0, 2)); // Week 1, 2017
 * ```
 */
export var weekInYear = function (date, weekStartDay) {
    if (weekStartDay === void 0) { weekStartDay = Day.Monday; }
    date = getDate(date);
    var prevWeekDate = addDays(date, -7);
    var nextWeekDate = addDays(date, 7);
    var weekNumber = calcWeekInYear(date, weekStartDay);
    if (weekNumber === 0) {
        return calcWeekInYear(prevWeekDate, weekStartDay) + 1;
    }
    if (weekNumber === 53 && calcWeekInYear(nextWeekDate, weekStartDay) > 1) {
        return 1;
    }
    return weekNumber;
};
