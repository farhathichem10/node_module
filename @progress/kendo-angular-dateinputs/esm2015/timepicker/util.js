/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { cloneDate } from '@progress/kendo-date-math';
import { TIME_PART } from './models/time-part.default';
const isEqualTillMinute = (value, min) => value.getHours() === min.getHours() && value.getMinutes() === min.getMinutes();
const isEqualTillSecond = (value, min) => isEqualTillMinute(value, min) && value.getSeconds() === min.getSeconds();
const isEqualTillMillisecond = (value, min) => isEqualTillSecond(value, min) && value.getMilliseconds() === min.getMilliseconds();
const defaultGetters = [
    {
        type: TIME_PART.hour,
        getter: (value) => value.getHours(),
        minGetter: (_, min) => min.getHours()
    }, {
        type: TIME_PART.minute,
        getter: (value) => value.getMinutes(),
        minGetter: (value, min) => isEqualTillMinute(value, min) ? min.getMinutes() : 0
    }, {
        type: TIME_PART.second,
        getter: (value) => value.getSeconds(),
        minGetter: (value, min) => isEqualTillSecond(value, min) ? min.getSeconds() : 0
    }, {
        type: TIME_PART.millisecond,
        getter: (value) => value.getMilliseconds(),
        minGetter: (value, min) => isEqualTillMillisecond(value, min) ? min.getMilliseconds() : 0
    }
];
const left = getter => (origin, _) => getter(origin);
const right = getter => (_, candidate) => getter(candidate);
const convertToObject = (parts) => parts.reduce((obj, p) => { obj[p.type] = p.type; return obj; }, {});
const getterByPart = parts => g => parts[g.type] ? right(g.getter) : left(g.getter);
const gettersFactory = getters => parts => (getters.map(getterByPart(convertToObject(parts))));
const snapValue = (getter, minGetter, step) => (date, min) => {
    const value = getter(date);
    const minValue = minGetter(date, min);
    const rest = value - minValue;
    if (rest < 0) {
        return minValue;
    }
    const mod = rest % step;
    return value - mod + (mod > step / 2 ? step : 0);
};
const snappersFactory = (getters) => steps => (getters.map(g => {
    const step = steps[g.type];
    return step ? snapValue(g.getter, g.minGetter, step) : g.getter;
}));
/**
 * @hidden
 */
export const generateGetters = gettersFactory(defaultGetters);
/**
 * @hidden
 */
export const generateSnappers = snappersFactory(defaultGetters);
/**
 * @hidden
 */
export const valueMerger = getters => (origin, candidate) => {
    origin.setHours(...getters.map(g => g(origin, candidate)));
    return origin;
};
/**
 * @hidden
 */
export const snapTime = snappers => (candidate, min) => {
    const date = cloneDate(candidate);
    date.setHours(...snappers.map(s => s(date, min)));
    return date;
};
