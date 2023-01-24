/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { SelectionRange } from './calendar/models/selection-range.interface';
import { CalendarType } from './calendar/models/type';
import { DateInputSize } from './common/models/size';
import { DateInputRounded } from './common/models/rounded';
import { DateInputFillMode } from './common/models/fillmode';
/**
 * @hidden
 */
export declare const setTime: (origin: Date, candidate: Date) => Date;
/**
 * @hidden
 */
export declare const setYears: (date: Date, value: number) => Date;
/**
 * @hidden
 */
export declare const setHours: (date: Date, value: number) => Date;
/**
 * @hidden
 */
export declare const setMinutes: (date: Date, value: number) => Date;
/**
 * @hidden
 */
export declare const setSeconds: (date: Date, value: number) => Date;
/**
 * @hidden
 */
export declare const setMilliseconds: (date: Date, value: number) => Date;
/**
 * @hidden
 */
export declare const range: (start: number, end: number, step?: number) => number[];
/**
 * @hidden
 */
export declare const isInRange: (candidate: Date, min: Date, max: Date) => boolean;
/**
 * @hidden
 */
export declare const isInTimeRange: (candidate: Date, min: Date, max: Date) => boolean;
/**
 * @hidden
 */
export declare const isValidRange: (min: Date, max: Date) => boolean;
/**
 * @hidden
 */
export declare const dateInRange: (candidate: Date, min: Date, max: Date) => Date;
/**
 * @hidden
 */
export declare const timeInRange: (candidate: Date, min: Date, max: Date) => Date;
/**
 * @hidden
 */
export declare const getNow: () => Date;
/**
 * @hidden
 */
export declare const getToday: () => Date;
/**
 * @hidden
 */
export declare const noop: (_: any) => void;
/**
 * @hidden
 */
export declare const isWindowAvailable: () => boolean;
/**
 * @hidden
 */
export declare const stringifyClassObject: (classes: {
    [x: string]: boolean;
}) => string;
/**
 * @hidden
 */
export declare const shiftWeekNames: (names: string[], offset: number) => string[];
/**
 * @hidden
 */
export declare const approximateStringMatching: (oldTextOrigin: string, oldFormat: string, newTextOrigin: string, caret: number) => any[];
/**
 * @hidden
 */
export declare const domContainerFactory: (type: string) => (children: string | HTMLElement[], classes?: string, styles?: any) => HTMLElement;
/**
 * @hidden
 */
export declare const hasChange: (changes: any, field: string) => boolean;
/**
 * @hidden
 */
export declare const hasExistingValue: (changes: any, field: string) => boolean;
/**
 * @hidden
 */
export declare const last: (list?: any[]) => any;
/**
 * @hidden
 */
export declare const isInSelectionRange: (value: Date, selectionRange?: SelectionRange) => boolean;
/**
 * @hidden
 */
export declare const either: (value1: any, value2: any) => any;
/**
 * @hidden
 */
export declare const clampRange: (value: Date) => SelectionRange;
/**
 * @hidden
 */
export declare const isEqualRange: (initial: SelectionRange, updated: SelectionRange) => boolean;
/**
 * @hidden
 */
export declare const areDatesEqual: (first: Date[], second: Date[]) => boolean;
/**
 * @hidden
 */
export declare const sortDates: (dates: Date[]) => Date[];
/**
 * @hidden
 *
 * Creates a new date based on the date information from the specified date portion
 * and the time information from the time portion.
 * If a parameter is not provided, returns `null`.
 */
export declare const mergeDateAndTime: (date: Date, time: Date) => Date;
/**
 * @hidden
 */
export declare const lastMillisecondOfDate: (date: Date) => Date;
/**
 * @hidden
 *
 * Returns an array with dates ranging between and including the specified start and
 * end dates that are evaluated as disabled.
 */
export declare const disabledDatesInRange: (start: Date, end: Date, isDateDisabled: (date: Date) => boolean) => Date[];
/**
 * @hidden
 *
 * Crops the last two digits from the year of the provided date value.
 */
export declare const cropTwoDigitYear: (date: Date) => number;
/**
 * @hidden
 *
 * Used when resetting millisecond segment value in the DateInput
 */
export declare const msPaddingFromFormat: (format: string) => string;
/**
 * @hidden
 */
export declare const millisecondDigitsInFormat: (format: string) => number;
/**
 * @hidden
 */
export declare const millisecondStepFor: (digits: number) => number;
/**
 * @hidden
 *
 * Checks if a tab keydown would would move the focus outside of the calendar.
 */
export declare const isTabExitingCalendar: (calendarType: CalendarType, focusedElement: Element, shiftKey: boolean) => boolean;
/**
 * @hidden
 * Returns the size class based on the component and size input.
 */
export declare const getSizeClass: (component: string, size: DateInputSize) => string;
/**
 * @hidden
 * Returns the rounded class based on the rounded input.
 */
export declare const getRoundedClass: (rounded: DateInputRounded) => string;
/**
 * @hidden
 * Return the fillMode class based on the component and fillMode input.
 */
export declare const getFillModeClass: (component: string, fillMode: DateInputFillMode) => string;
/**
 * @hidden
 */
export declare const DEFAULT_ROUNDED: DateInputRounded;
/**
 * @hidden
 */
export declare const DEFAULT_SIZE: DateInputSize;
/**
 * @hidden
 */
export declare const DEFAULT_FILL_MODE: DateInputFillMode;
