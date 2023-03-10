/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { addDays, cloneDate, getDate, isEqual } from '@progress/kendo-date-math';
import { MIDNIGHT_DATE } from './defaults';
import { EMPTY_SELECTIONRANGE } from './calendar/models/selection-range.interface';
import { isPresent } from './common/utils';
const isSet = (value) => value !== null && value !== undefined;
const setter = (method) => (date, value) => {
    const clone = cloneDate(date);
    clone[method](value);
    return clone;
};
/**
 * @hidden
 */
export const setTime = (origin, candidate) => {
    const date = cloneDate(origin);
    date.setHours(candidate.getHours(), candidate.getMinutes(), candidate.getSeconds(), candidate.getMilliseconds());
    return date;
};
const normalizeTimes = (candidate, min, max) => ({
    candidateValue: setTime(MIDNIGHT_DATE, candidate),
    maxValue: addDays(setTime(MIDNIGHT_DATE, max), min.getHours() < max.getHours() ||
        (min.getHours() === max.getHours() && min.getMinutes() < max.getMinutes()) ? 0 : 1),
    minValue: setTime(MIDNIGHT_DATE, min)
});
/**
 * @hidden
 */
export const setYears = setter('setFullYear');
/**
 * @hidden
 */
export const setHours = setter('setHours');
/**
 * @hidden
 */
export const setMinutes = setter('setMinutes');
/**
 * @hidden
 */
export const setSeconds = setter('setSeconds');
/**
 * @hidden
 */
export const setMilliseconds = setter('setMilliseconds');
/**
 * @hidden
 */
export const range = (start, end, step = 1) => {
    const result = [];
    for (let i = start; i < end; i = i + step) {
        result.push(i);
    }
    return result;
};
/**
 * @hidden
 */
export const isInRange = (candidate, min, max) => (!candidate || !((min && min > candidate) || (max && max < candidate)));
/**
 * @hidden
 */
export const isInTimeRange = (candidate, min, max) => {
    if (!candidate || !min || !max) {
        return true;
    }
    const { candidateValue, minValue, maxValue } = normalizeTimes(candidate, min, max);
    return minValue <= candidateValue && candidateValue <= maxValue;
};
/**
 * @hidden
 */
export const isValidRange = (min, max) => (!isSet(min) || !isSet(max) || min <= max);
/**
 * @hidden
 */
export const dateInRange = (candidate, min, max) => {
    if (!candidate) {
        return candidate;
    }
    if (min && candidate < min) {
        return cloneDate(min);
    }
    if (max && candidate > max) {
        return cloneDate(max);
    }
    return candidate;
};
/**
 * @hidden
 */
export const timeInRange = (candidate, min, max) => {
    if (!candidate || !min || !max) {
        return candidate;
    }
    const { candidateValue, minValue, maxValue } = normalizeTimes(candidate, min, max);
    if (candidateValue < minValue) {
        return setTime(candidate, min);
    }
    if (candidateValue > maxValue) {
        return setTime(candidate, max);
    }
    return candidate;
};
/**
 * @hidden
 */
export const getNow = () => new Date();
/**
 * @hidden
 */
export const getToday = () => getDate(new Date());
/**
 * @hidden
 */
export const noop = (_) => { }; // eslint-disable-line no-empty
/**
 * @hidden
 */
export const isWindowAvailable = () => {
    return typeof window !== 'undefined';
};
/**
 * @hidden
 */
export const stringifyClassObject = (classes) => {
    const pushToAcc = (acc, cls) => classes[cls] ? acc.concat(cls) : acc;
    return Object.keys(classes).reduce(pushToAcc, []).join(' ');
};
/**
 * @hidden
 */
export const shiftWeekNames = (names, offset) => (names.slice(offset).concat(names.slice(0, offset)));
/**
 * @hidden
 */
export const approximateStringMatching = (oldTextOrigin, oldFormat, newTextOrigin, caret) => {
    // Remove the right part of the cursor.
    //oldFormat = oldFormat.substring(0, caret + oldText.length - newText.length);
    const oldIndex = caret + oldTextOrigin.length - newTextOrigin.length;
    const oldTextSeparator = oldTextOrigin[oldIndex];
    const oldText = oldTextOrigin.substring(0, caret + oldTextOrigin.length - newTextOrigin.length);
    const newText = newTextOrigin.substring(0, caret);
    const diff = [];
    // Handle typing a single character over the same selection.
    if (oldText === newText && caret > 0) {
        diff.push([oldFormat[caret - 1], newText[caret - 1]]);
        return diff;
    }
    if (oldText.indexOf(newText) === 0 && (newText.length === 0 || oldFormat[newText.length - 1] !== oldFormat[newText.length])) {
        // Handle Delete/Backspace.
        let deletedSymbol = "";
        //XXX:
        // Whole text is replaced with a same char
        // Nasty patch required to keep the selection in the first segment
        if (newText.length === 1) {
            diff.push([oldFormat[0], newText[0]]);
        }
        for (let i = newText.length; i < oldText.length; i++) {
            if (oldFormat[i] !== deletedSymbol && oldFormat[i] !== "_") {
                deletedSymbol = oldFormat[i];
                diff.push([deletedSymbol, ""]);
            }
        }
        return diff;
    }
    // Handle inserting text (the new text is longer than the previous one).
    // Handle typing over a literal as well.
    if (newText.indexOf(oldText) === 0 || oldFormat[caret - 1] === "_") {
        let symbol = oldFormat[0];
        for (let i = Math.max(0, oldText.length - 1); i < oldFormat.length; i++) {
            if (oldFormat[i] !== "_") {
                symbol = oldFormat[i];
                break;
            }
        }
        return [[symbol, newText[caret - 1]]];
    }
    // Handle entering a space or a separator, for navigation to the next item.
    if (newText[newText.length - 1] === " " || (newText[newText.length - 1] === oldTextSeparator && oldFormat[oldIndex] === '_')) {
        return [[oldFormat[caret - 1], "_"]];
    }
    // Handle typing over a correctly selected part.
    return [[oldFormat[caret - 1], newText[caret - 1]]];
};
/**
 * @hidden
 */
export const domContainerFactory = (type) => (children, classes = "", styles = {}) => {
    const container = document.createElement(type);
    container.className = classes;
    Object.keys(styles).map(key => container.style[key] = styles[key]);
    if (typeof children === 'string') {
        container.innerHTML = children || '';
    }
    else {
        (children || []).forEach(child => child && container.appendChild(child));
    }
    return container;
};
/**
 * @hidden
 */
export const hasChange = (changes, field) => changes[field] !== undefined;
/**
 * @hidden
 */
export const hasExistingValue = (changes, field) => changes[field] && changes[field].currentValue !== undefined && changes[field].currentValue !== null;
/**
 * @hidden
 */
export const last = (list = []) => list && list[list.length - 1];
/**
 * @hidden
 */
export const isInSelectionRange = (value, selectionRange) => {
    const { start, end } = selectionRange || EMPTY_SELECTIONRANGE;
    if (!start || !end) {
        return false;
    }
    return start < value && value < end;
};
/**
 * @hidden
 */
export const either = (value1, value2) => value1 || value2;
/**
 * @hidden
 */
export const clampRange = (value) => ({ start: value, end: value });
/**
 * @hidden
 */
export const isEqualRange = (initial, updated) => {
    const { start: initialStart, end: initialEnd } = initial || EMPTY_SELECTIONRANGE;
    const { start: updatedStart, end: updatedEnd } = updated || EMPTY_SELECTIONRANGE;
    return isEqual(initialStart, updatedStart) && isEqual(initialEnd, updatedEnd);
};
/**
 * @hidden
 */
export const areDatesEqual = (first, second) => {
    first = first || [];
    second = second || [];
    return first.length === second.length && first.every((date, index) => isEqual(date, second[index]));
};
/**
 * @hidden
 */
export const sortDates = (dates) => {
    return dates.filter(date => isPresent(date)).sort((a, b) => a.getTime() - b.getTime());
};
/**
 * @hidden
 *
 * Creates a new date based on the date information from the specified date portion
 * and the time information from the time portion.
 * If a parameter is not provided, returns `null`.
 */
export const mergeDateAndTime = (date, time) => {
    if (!(date && time)) {
        return null;
    }
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds());
};
/**
 * @hidden
 */
export const lastMillisecondOfDate = (date) => {
    if (!date) {
        return null;
    }
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
};
/**
 * @hidden
 *
 * Returns an array with dates ranging between and including the specified start and
 * end dates that are evaluated as disabled.
 */
export const disabledDatesInRange = (start, end, isDateDisabled) => {
    if (!(start && end && isDateDisabled) || (start > end)) {
        return [];
    }
    const dates = [];
    let current = start;
    while (current <= end) {
        if (isDateDisabled(current)) {
            dates.push(current);
        }
        current = addDays(current, 1);
    }
    return dates;
};
/**
 * @hidden
 *
 * Crops the last two digits from the year of the provided date value.
 */
export const cropTwoDigitYear = (date) => {
    if (!isPresent(date) || isNaN(date.getTime())) {
        return 0;
    }
    return Number(date
        .getFullYear()
        .toString()
        .slice(-2));
};
/**
 * @hidden
 *
 * Used when resetting millisecond segment value in the DateInput
 */
export const msPaddingFromFormat = (format) => {
    return Array(format.match(/S+(\1)/)[0].length).join("0");
};
/**
 * @hidden
 */
export const millisecondDigitsInFormat = (format) => {
    const result = format && format.match(/S+(\1)/);
    return result ? result[0].length : 0;
};
/**
 * @hidden
 */
export const millisecondStepFor = (digits) => {
    return Math.pow(10, 3 - digits);
};
/**
 * @hidden
 *
 * Checks if a tab keydown would would move the focus outside of the calendar.
 */
export const isTabExitingCalendar = (calendarType, focusedElement, shiftKey) => {
    if (!isPresent(focusedElement)) {
        return false;
    }
    return calendarType === 'infinite' || ( // infinte calendar is always exited on first tab keydown
    calendarType === 'classic' &&
        (shiftKey && focusedElement.classList.contains('k-calendar-table')) || // exited on main calendar element focused and back-tab
        (!shiftKey && focusedElement.classList.contains('k-calendar-table')) // exited on next button focused and regular tab
    );
};
/**
 * @hidden
 * Returns the size class based on the component and size input.
 */
export const getSizeClass = (component, size) => {
    const SIZE_CLASSES = {
        'small': `k-${component}-sm`,
        'medium': `k-${component}-md`,
        'large': `k-${component}-lg`
    };
    return SIZE_CLASSES[size];
};
/**
 * @hidden
 * Returns the rounded class based on the rounded input.
 */
export const getRoundedClass = (rounded) => {
    const ROUNDED_CLASSES = {
        'small': 'k-rounded-sm',
        'medium': 'k-rounded-md',
        'large': 'k-rounded-lg',
        'full': 'k-rounded-full'
    };
    return ROUNDED_CLASSES[rounded];
};
/**
 * @hidden
 * Return the fillMode class based on the component and fillMode input.
 */
export const getFillModeClass = (component, fillMode) => {
    const FILLMODE_CLASSES = {
        'solid': `k-${component}-solid`,
        'flat': `k-${component}-flat`,
        'outline': `k-${component}-outline`
    };
    return FILLMODE_CLASSES[fillMode];
};
/**
 * @hidden
 */
export const DEFAULT_ROUNDED = 'medium';
/**
 * @hidden
 */
export const DEFAULT_SIZE = 'medium';
/**
 * @hidden
 */
export const DEFAULT_FILL_MODE = 'solid';
