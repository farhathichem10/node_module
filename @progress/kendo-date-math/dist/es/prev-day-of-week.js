import { Direction } from "./direction.enum";
import { dayOfWeek } from './day-of-week';
/**
 * A function which returns a date by a specific week name. For example, `Day.Monday`.
 *
 * @param date - The date to calculate from.
 * @param weekDay - The `Day` enum specifying the desired week day.
 * @returns - A `Date` instance.
 *
 * @example
 * ```ts-no-run
 * prevDayOfWeek(new Date(2016, 0, 1), Day.Wednesday); // 2015-12-30, Wednesday
 * ```
 */
export var prevDayOfWeek = function (date, weekDay) {
    return dayOfWeek(date, weekDay, Direction.Backward);
};
