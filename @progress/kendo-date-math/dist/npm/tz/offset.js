"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zone_and_rule_1 = require("./zone-and-rule");
/**
 * @hidden
 *
 * A function that calculates the time offset based on zone name.
 *
 * @param timezone - The timezone name. For example, `America/Chicago`, `Europe/Sofia`.
 * @param date - A date for which the zone rule will be located.
 *
 * @return - Returns the timezone offset in minutes at the specified time.
 */
exports.offset = function (timezone, date) {
    if (date === void 0) { date = new Date(); }
    if (timezone === 'Etc/UTC' || timezone === 'Etc/GMT') {
        return 0;
    }
    if (timezone === '') {
        return date.getTimezoneOffset();
    }
    var _a = zone_and_rule_1.zoneAndRule(timezone, date), rule = _a.rule, zone = _a.zone;
    return parseFloat(rule ? zone[0] - rule[6] : zone[0]);
};
