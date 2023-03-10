"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timezones_1 = require("./timezones");
/**
 * A function that returns the full name of the timezone.
 *
 * @param timezone - The timezone name. For example, `America/Chicago`, `Europe/Sofia`.
 *
 * @return - Returns the full names of the timezone and the group.
 *
 * @example
 * ```ts-no-run
 * timezoneTitle('America/Chicago'); // Central Standard Time
 * ```
 */
exports.timezoneTitle = function (timezone) {
    var titles = timezones_1.timezones.titles;
    var info = titles[timezone] || {};
    return info.long || timezone;
};
