'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaultData = {
    en: {
        name: "en",
        identity: {
            version: {
                _unicodeVersion: "14.0.0",
                _cldrVersion: "41"
            },
            language: "en"
        },
        territory: "US",
        numbers: {
            symbols: {
                decimal: ".",
                group: ",",
                list: ";",
                percentSign: "%",
                plusSign: "+",
                minusSign: "-",
                exponential: "E",
                superscriptingExponent: "×",
                perMille: "‰",
                infinity: "∞",
                nan: "NaN",
                timeSeparator: ":",
                approximatelySign: "~"
            },
            decimal: {
                patterns: [
                    "n"
                ],
                groupSize: [
                    3
                ]
            },
            scientific: {
                patterns: [
                    "nEn"
                ],
                groupSize: []
            },
            percent: {
                patterns: [
                    "n%"
                ],
                groupSize: [
                    3
                ]
            },
            currency: {
                patterns: [
                    "$n"
                ],
                groupSize: [
                    3
                ],
                "unitPattern-count-one": "n $",
                "unitPattern-count-other": "n $"
            },
            currencies: {
                BGN: {
                    displayName: "Bulgarian Lev",
                    "displayName-count-one": "Bulgarian lev",
                    "displayName-count-other": "Bulgarian leva",
                    symbol: "BGN"
                },
                EUR: {
                    displayName: "Euro",
                    "displayName-count-one": "euro",
                    "displayName-count-other": "euros",
                    symbol: "€",
                    "symbol-alt-narrow": "€"
                },
                USD: {
                    displayName: "US Dollar",
                    "displayName-count-one": "US dollar",
                    "displayName-count-other": "US dollars",
                    symbol: "$",
                    "symbol-alt-narrow": "$"
                }
            },
            localeCurrency: "USD",
            accounting: {
                patterns: [
                    "$n",
                    "($n)"
                ],
                groupSize: [
                    3
                ]
            }
        },
        calendar: {
            gmtFormat: "GMT{0}",
            gmtZeroFormat: "GMT",
            patterns: {
                d: "M/d/y",
                D: "EEEE, MMMM d, y",
                m: "MMM d",
                M: "MMMM d",
                y: "MMM y",
                Y: "MMMM y",
                F: "EEEE, MMMM d, y h:mm:ss a",
                g: "M/d/y h:mm a",
                G: "M/d/y h:mm:ss a",
                t: "h:mm a",
                T: "h:mm:ss a",
                s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
            },
            dateTimeFormats: {
                full: "{1} 'at' {0}",
                long: "{1} 'at' {0}",
                medium: "{1}, {0}",
                short: "{1}, {0}",
                availableFormats: {
                    Bh: "h B",
                    Bhm: "h:mm B",
                    Bhms: "h:mm:ss B",
                    d: "d",
                    E: "ccc",
                    EBhm: "E h:mm B",
                    EBhms: "E h:mm:ss B",
                    Ed: "d E",
                    Ehm: "E h:mm a",
                    EHm: "E HH:mm",
                    Ehms: "E h:mm:ss a",
                    EHms: "E HH:mm:ss",
                    Gy: "y G",
                    GyMd: "M/d/y GGGGG",
                    GyMMM: "MMM y G",
                    GyMMMd: "MMM d, y G",
                    GyMMMEd: "E, MMM d, y G",
                    h: "h a",
                    H: "HH",
                    hm: "h:mm a",
                    Hm: "HH:mm",
                    hms: "h:mm:ss a",
                    Hms: "HH:mm:ss",
                    hmsv: "h:mm:ss a v",
                    Hmsv: "HH:mm:ss v",
                    hmv: "h:mm a v",
                    Hmv: "HH:mm v",
                    M: "L",
                    Md: "M/d",
                    MEd: "E, M/d",
                    MMM: "LLL",
                    MMMd: "MMM d",
                    MMMEd: "E, MMM d",
                    MMMMd: "MMMM d",
                    "MMMMW-count-one": "'week' W 'of' MMMM",
                    "MMMMW-count-other": "'week' W 'of' MMMM",
                    ms: "mm:ss",
                    y: "y",
                    yM: "M/y",
                    yMd: "M/d/y",
                    yMEd: "E, M/d/y",
                    yMMM: "MMM y",
                    yMMMd: "MMM d, y",
                    yMMMEd: "E, MMM d, y",
                    yMMMM: "MMMM y",
                    yQQQ: "QQQ y",
                    yQQQQ: "QQQQ y",
                    "yw-count-one": "'week' w 'of' Y",
                    "yw-count-other": "'week' w 'of' Y"
                }
            },
            timeFormats: {
                full: "h:mm:ss a zzzz",
                long: "h:mm:ss a z",
                medium: "h:mm:ss a",
                short: "h:mm a"
            },
            dateFormats: {
                full: "EEEE, MMMM d, y",
                long: "MMMM d, y",
                medium: "MMM d, y",
                short: "M/d/yy"
            },
            days: {
                format: {
                    abbreviated: [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    narrow: [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    short: [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    wide: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    narrow: [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    short: [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    wide: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                }
            },
            months: {
                format: {
                    abbreviated: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    narrow: [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D"
                    ],
                    wide: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    narrow: [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D"
                    ],
                    wide: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                }
            },
            quarters: {
                format: {
                    abbreviated: [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                }
            },
            dayPeriods: {
                format: {
                    abbreviated: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    },
                    narrow: {
                        midnight: "mi",
                        am: "a",
                        "am-alt-variant": "am",
                        noon: "n",
                        pm: "p",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    },
                    wide: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    }
                },
                "stand-alone": {
                    abbreviated: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    },
                    narrow: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    },
                    wide: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    }
                }
            },
            eras: {
                format: {
                    wide: {
                        "0": "Before Christ",
                        "1": "Anno Domini",
                        "0-alt-variant": "Before Common Era",
                        "1-alt-variant": "Common Era"
                    },
                    abbreviated: {
                        "0": "BC",
                        "1": "AD",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    },
                    narrow: {
                        "0": "B",
                        "1": "A",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    }
                }
            },
            dateFields: {
                era: {
                    wide: "era",
                    short: "era",
                    narrow: "era"
                },
                year: {
                    wide: "year",
                    short: "yr.",
                    narrow: "yr."
                },
                quarter: {
                    wide: "quarter",
                    short: "qtr.",
                    narrow: "qtr."
                },
                month: {
                    wide: "month",
                    short: "mo.",
                    narrow: "mo."
                },
                week: {
                    wide: "week",
                    short: "wk.",
                    narrow: "wk."
                },
                weekOfMonth: {
                    wide: "week of month",
                    short: "wk. of mo.",
                    narrow: "wk. of mo."
                },
                day: {
                    wide: "day",
                    short: "day",
                    narrow: "day"
                },
                dayOfYear: {
                    wide: "day of year",
                    short: "day of yr.",
                    narrow: "day of yr."
                },
                weekday: {
                    wide: "day of the week",
                    short: "day of wk.",
                    narrow: "day of wk."
                },
                weekdayOfMonth: {
                    wide: "weekday of the month",
                    short: "wkday. of mo.",
                    narrow: "wkday. of mo."
                },
                dayperiod: {
                    short: "AM/PM",
                    wide: "AM/PM",
                    narrow: "AM/PM"
                },
                hour: {
                    wide: "hour",
                    short: "hr.",
                    narrow: "hr."
                },
                minute: {
                    wide: "minute",
                    short: "min.",
                    narrow: "min."
                },
                second: {
                    wide: "second",
                    short: "sec.",
                    narrow: "sec."
                },
                zone: {
                    wide: "time zone",
                    short: "zone",
                    narrow: "zone"
                },
                millisecond: {
                    narrow: "ms",
                    short: "ms",
                    wide: "millisecond"
                }
            }
        }
    },
    supplemental: {
        likelySubtags: {
            en: "en-Latn-US"
        },
        currencyData: {
            region: {
                US: [
                    {
                        USD: {
                            _from: "1792-01-01"
                        }
                    }
                ]
            }
        },
        weekData: {
            firstDay: {
                US: "sun"
            },
            weekendStart: {
                "001": "sat"
            },
            weekendEnd: {
                "001": "sun"
            }
        }
    }
};

function isString(value) {
    return typeof value === "string";
}

//The error is represented by unique name and corresponding message
//The message can contain placeholders with index, e.g. {0}, {1}

var errorDetails = {
    "NoLocale": "Missing locale info for '{0}'",
    "NoCurrency": "Cannot determine currency information. Please load the locale currencies data.",
    "NoSupplementalCurrency": "Cannot determine currency. Please load the supplemental currencyData.",
    "NoCurrencyRegion": "No currency data for region '{0}'",
    "NoCurrencyDisplay": "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
    "NoGMTInfo": "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
    "NoWeekData": "Cannot determine locale first day of week. Please load the supplemental weekData.",
    "NoFirstDay": "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
    "NoValidCurrency": "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
    "NoDateFieldNames": "Cannot determine the locale date field names. Please load the locale dateFields data."
};

var formatRegExp = /\{(\d+)}?\}/g;

var IntlError = function IntlError(ref) {
    var name = ref.name;
    var message = ref.message;

    if (!name || !message) {
        throw new Error("{ name: string, message: string } object is required!");
    }

    this.name = name;
    this.message = message;
};

IntlError.prototype.formatMessage = function formatMessage () {
        var values = [], len = arguments.length;
        while ( len-- ) values[ len ] = arguments[ len ];

    var flattenValues = flatten(values);

    var formattedMessage = this.message.replace(formatRegExp, function(match, index) {
        return flattenValues[parseInt(index, 10)];
    });

    return ((this.name) + ": " + formattedMessage);
};

IntlError.prototype.error = function error () {
        var values = [], len = arguments.length;
        while ( len-- ) values[ len ] = arguments[ len ];

    return new Error(this.formatMessage(values));
};

var flatten = function(arr) {
    return arr.reduce(function (a, b) { return a.concat(b); }, []);
};

var toIntlErrors = function(errors) {
    var predicate = function(prev, name) {
        prev[name] = new IntlError({ name: name, message: errors[name] });
        return prev;
    };

    return Object.keys(errors).reduce(predicate, {});
};

var errors = toIntlErrors(errorDetails);

function availableLocaleInfo(fullName, suffixes) {
    var parts = fullName.split("-");
    var language = parts[0];
    var script = parts[1];
    var territory = parts[2];

    return cldr[fullName] || (suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory]) || (suffixes.indexOf(script) !== -1 && cldr[language + "-" + script]) || cldr[language];
}

function localeFullName(language, suffixes) {
    var likelySubtags = cldr.supplemental.likelySubtags;

    for (var idx = 0; idx < suffixes.length; idx++) {
        var name = likelySubtags[language + "-" + suffixes[idx ]];
        if (name) {
            return name;
        }
    }

    if (likelySubtags[language]) {
        return likelySubtags[language];
    }
}

var cldr = defaultData;

function getLocaleInfo(locale) {
    var info;
    if (isString(locale)) {
        info = localeInfo(locale);
    } else {
        info = locale;
    }
    return info;
}

function localeInfo(locale) {
    if (cldr[locale]) {
        return cldr[locale];
    }

    var likelySubtags = cldr.supplemental.likelySubtags;
    if (likelySubtags) {
        var parts = locale.split("-");
        var language = parts[0];
        var suffixes = parts.slice(1);
        var fullName = localeFullName(language, suffixes);
        var info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
        if (info) {
            return info;
        }
    }

    throw errors.NoLocale.error(locale);
}

var DECIMAL = "decimal";
var CURRENCY = "currency";
var ACCOUNTING = "accounting";
var PERCENT = "percent";
var SCIENTIFIC = "scientific";

var CURRENCY_PLACEHOLDER = "$";
var PERCENT_PLACEHOLDER = "%";
var NUMBER_PLACEHOLDER = "n";

var LIST_SEPARATOR = ";";
var GROUP_SEPARATOR = ",";

var POINT = ".";
var EMPTY = "";

var DEFAULT_LOCALE = "en";

var LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
var LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";

var patternRegExp = /([#,0.]+)/g;
var cldrCurrencyRegExp = /¤/g;

function getPatterns(pattern) {
    patternRegExp.lastIndex = 0;

    return pattern.replace(cldrCurrencyRegExp, CURRENCY_PLACEHOLDER).replace(patternRegExp, NUMBER_PLACEHOLDER).split(LIST_SEPARATOR);
}

function getGroupSize(pattern) {
    patternRegExp.lastIndex = 0;

    var numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[0])[0].split(POINT);
    var integer = numberPatterns[0];

    var groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function(group) {
        return group.length;
    }).reverse();

    return groupSize;
}

function loadCurrencyUnitPatterns(currencyInfo, currencyFormats) {
    for (var field in currencyFormats) {
        if (field.startsWith("unitPattern")) {
            currencyInfo[field] = currencyFormats[field].replace("{0}", NUMBER_PLACEHOLDER).replace("{1}", CURRENCY_PLACEHOLDER);
        }
    }
}

function loadNumbersInfo(locale, info) {
    var localeInfo$$1 = cldr[locale];
    var numbers = localeInfo$$1.numbers = localeInfo$$1.numbers || {};
    numbers.symbols = numbers.symbols || {};
    for (var field in info) {
        if (field === LATIN_NUMBER_SYMBOLS) {
            Object.assign(numbers.symbols, info[field]);
        } else if (field.includes(LATIN_NUMBER_FORMATS)) {
            var style = field.substr(0, field.indexOf(LATIN_NUMBER_FORMATS));
            var pattern = info[field].standard;
            numbers[style] = {
                patterns: getPatterns(pattern)
            };
            if (style === CURRENCY) {
                numbers[style].groupSize = getGroupSize((info[DECIMAL + LATIN_NUMBER_FORMATS] || info[field]).standard);
                loadCurrencyUnitPatterns(numbers[style], info[field]);
                numbers[ACCOUNTING] = {
                    patterns: getPatterns(info[field][ACCOUNTING]),
                    groupSize: numbers[style].groupSize
                };
            } else {
                numbers[style].groupSize = getGroupSize(pattern);
            }
        } else if (field === "currencies") {
            numbers.currencies = info[field];
        }
    }
}

var predefinedDatePatterns = {
    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
};

var YEAR_REGEX = /y+/g;
var SHORT_DATE = [ [ "dateFormats", "short" ] ];

var datePatterns = {
    D: [ [ "dateFormats", "full" ] ],
    m: [ [ "dateTimeFormats", "availableFormats", "MMMd" ] ],
    M: [ [ "dateTimeFormats", "availableFormats", "MMMMd" ] ],
    y: [ [ "dateTimeFormats", "availableFormats", "yMMM" ] ],
    Y: [ [ "dateTimeFormats", "availableFormats", "yMMMM" ] ],
    F: [ [ "dateFormats", "full" ], [ "timeFormats", "medium" ] ],
    g: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "short" ] ],
    G: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "medium" ] ],
    t: [ [ "timeFormats", "short" ] ],
    T: [ [ "timeFormats", "medium" ] ]
};

function toArray(obj) {
    var result = [];
    var names = Object.getOwnPropertyNames(obj);
    for (var idx = 0; idx < names.length; idx++) {
        var value = obj[names[idx]];
        result.push(value);
    }
    return result;
}

function getCalendarNames(info, isObj) {
    var result = {};
    for (var formatType in info) {
        var names = result[formatType] = {};
        for (var format in info[formatType]) {
            var formats = info[formatType][format];
            names[format] = isObj ? formats : toArray(formats);
        }
    }
    return result;
}

function getEraNames(eras) {
    var result = {};
    var format = result.format = {};
    var eraNameMap = {
        eraAbbr: "abbreviated",
        eraNames: "wide",
        eraNarrow: "narrow"
    };

    for (var eraFormatName in eras) {
        var formatName = eraNameMap[eraFormatName];
        format[formatName] = eras[eraFormatName];
    }

    return result;
}

function loadCalendarNames(locale, calendar) {
    var localeCalendar = cldr[locale].calendar;
    localeCalendar.days = getCalendarNames(calendar.days);
    localeCalendar.months = getCalendarNames(calendar.months);
    localeCalendar.quarters = getCalendarNames(calendar.quarters);
    localeCalendar.dayPeriods = getCalendarNames(calendar.dayPeriods, true);

    localeCalendar.eras = getEraNames(calendar.eras);
}

function loadCalendarDateFields(locale, fields) {
    var localeCalendar = cldr[locale].calendar;
    var dateFields = {};

    for (var field in fields) {
        var ref = field.split('-');
        var fieldName = ref[0];
        var formatType = ref[1]; if ( formatType === void 0 ) formatType = 'wide';
        var fieldInfo = dateFields[fieldName] || {};
        var displayName = fields[field].displayName;

        if (!displayName) { continue; }

        fieldInfo[formatType] = displayName;
        dateFields[fieldName] = fieldInfo;
    }

    localeCalendar.dateFields = dateFields;
}

function getPredefinedFormat(paths, calendar) {
    var result = [];

    for (var pathIdx = 0; pathIdx < paths.length; pathIdx++) {
        var fields = paths[ pathIdx ];
        var pattern = calendar;
        for (var idx = 0; idx < fields.length; idx++) {
            pattern = pattern[fields[idx]];
        }
        result.push(pattern);
    }

    return result.join(" ");
}

function loadCalendarPatterns(locale, calendar) {
    var cldrCalendar = cldr[locale].calendar;
    var patterns = cldrCalendar.patterns = {};

    patterns.d = getPredefinedFormat(SHORT_DATE, calendar).replace(YEAR_REGEX, 'y');

    for (var pattern in datePatterns) {
        patterns[pattern] = getPredefinedFormat(datePatterns[pattern], calendar);
    }

    for (var pattern$1 in predefinedDatePatterns) {
        patterns[pattern$1] = predefinedDatePatterns[pattern$1];
    }

    var dateTimeFormats = calendar.dateTimeFormats;
    cldrCalendar.dateTimeFormats = {
        full: dateTimeFormats.full,
        long: dateTimeFormats.long,
        medium: dateTimeFormats.medium,
        short: dateTimeFormats.short,
        availableFormats: dateTimeFormats.availableFormats
    };
    cldrCalendar.timeFormats = calendar.timeFormats;
    cldrCalendar.dateFormats = calendar.dateFormats;
}


function loadCalendarInfo(locale, info) {
    var calendar = cldr[locale].calendar = cldr[locale].calendar || {};
    for (var field in info) {
        if (field === "timeZoneNames") {
            calendar.gmtFormat = info[field].gmtFormat;
            calendar.gmtZeroFormat = info[field].gmtZeroFormat;
        } else if (field === "calendars" && info[field].gregorian) {
            loadCalendarPatterns(locale, info[field].gregorian);
            loadCalendarNames(locale, info[field].gregorian);
        } else if (field === "fields") {
            loadCalendarDateFields(locale, info.fields);
        }
    }
}

function territoryFromName(name, identity) {
    var likelySubtags = cldr.supplemental.likelySubtags;
    var parts = name.split("-");
    if (likelySubtags) {
        var likelyName = likelySubtags[name] || likelySubtags[parts[0]];
        if (likelyName) {
            parts = likelyName.split("-");
        }
    }

    if (identity) {
        for (var idx = parts.length - 1; idx >= 1; idx--) {
            var part = parts[idx];
            if (part === identity.variant || part === identity.script) {
                parts.splice(idx, 1);
            }
        }
    }

    var length = parts.length;

    if (length > 1) {
        var territory = parts[length - 1];
        return territory.toUpperCase();
    }
}

function localeTerritory(info) {
    if (info.territory) {
        return info.territory;
    }

    var name = info.name;
    var identity = info.identity;
    var territory;

    if (identity && identity.territory) {
        territory = identity.territory;
    } else {
        territory = territoryFromName(name, identity);
    }

    info.territory = territory;

    return territory;
}

var MILLISECOND = 'duration-millisecond';
var UNIT_PATTERN_ONE = 'unitPattern-count-one';
var UNIT_PATTERN_OTHER = 'unitPattern-count-other';
var placeholderPattern = /\{0\}\s?/;

function extractUnit(unit) {
    var value = unit[UNIT_PATTERN_ONE] || unit[UNIT_PATTERN_OTHER];
    return value.replace(placeholderPattern, '');
}

function loadUnits(localeInfo, units) {
    localeInfo.calendar.dateFields.millisecond = {
        narrow: extractUnit(units.narrow[MILLISECOND]),
        short: extractUnit(units.short[MILLISECOND]),
        wide: extractUnit(units.long[MILLISECOND])
    };
}

function loadLocale(locale, info) {
    for (var field in info) {
        if (field === "numbers") {
            loadNumbersInfo(locale, info[field]);
        } else if (field === "dates") {
            loadCalendarInfo(locale, info[field]);
        }
    }
}

function load() {
    var arguments$1 = arguments;

    var length = arguments.length;
    for (var idx = 0; idx < length; idx++) {
        var entry = arguments$1[idx];
        if (entry.main) {
            var locale = Object.keys(entry.main)[0];
            var info = entry.main[locale];
            var localeInfo$$1 = cldr[locale] = cldr[locale] || {};

            if (info.units) {
                loadUnits(localeInfo$$1, info.units);
            } else {
                localeInfo$$1.name = localeInfo$$1.name || locale;
                localeInfo$$1.identity = localeInfo$$1.identity || info.identity;

                localeTerritory(localeInfo$$1);
                loadLocale(locale, info);
            }
        } else if (entry.supplemental) {
            if (entry.supplemental.weekData) {
                cldr.supplemental.weekData = {
                    firstDay: entry.supplemental.weekData.firstDay,
                    weekendStart: entry.supplemental.weekData.weekendStart,
                    weekendEnd: entry.supplemental.weekData.weekendEnd
                };
            } else if (entry.supplemental.likelySubtags) {
                cldr.supplemental.likelySubtags = Object.assign(cldr.supplemental.likelySubtags, entry.supplemental.likelySubtags);
            } else if (entry.supplemental.currencyData) {
                var currencyData = cldr.supplemental.currencyData;
                currencyData.region = Object.assign(currencyData.region || {}, entry.supplemental.currencyData.region);
                currencyData.fractions = Object.assign(currencyData.fractions || {}, entry.supplemental.currencyData.fractions);
            }
        }
    }
}

function setData(data) {
    var locale = data.name;
    var info = cldr[locale] = cldr[locale] || {};
    var supplemental = cldr.supplemental = cldr.supplemental || {};

    if (data.likelySubtags) {
        supplemental.likelySubtags = Object.assign(supplemental.likelySubtags || {}, data.likelySubtags);
    }

    if (data.currencyData) {
        supplemental.currencyData = supplemental.currencyData || {};
        supplemental.currencyData.fractions = Object.assign(supplemental.currencyData.fractions || {}, data.currencyData);
    }

    var numbers = info.numbers;

    Object.assign(info, data);

    if (numbers && data.numbers) {
        info.numbers = Object.assign({}, numbers, data.numbers);
    }
}

function dateFieldName(options, locale) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    var info = localeInfo(locale);
    var dateFields = info.calendar.dateFields;
    if (!dateFields) {
        throw errors.NoDateFieldNames.error();
    }

    var fieldNameInfo = dateFields[options.type] || {};

    return fieldNameInfo[options.nameType] || fieldNameInfo['wide'];
}

function lowerArray(arr) {
    var result = [];
    for (var idx = 0; idx < arr.length; idx++) {
        result.push(arr[idx].toLowerCase());
    }
    return result;
}

function lowerObject(obj) {
    var result = {};
    for (var field in obj) {
        result[field] = obj[field].toLowerCase();
    }
    return result;
}

function cloneLower(obj) {
    var result = Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
    return result;
}

function dateFormatNames(locale, options) {
    var type = options.type;
    var nameType = options.nameType;
    var standAlone = options.standAlone;
    var lower = options.lower;
    var info = getLocaleInfo(locale);
    var formatType = standAlone ? "stand-alone" : "format";
    var lowerNameType = (lower ? "lower-" : EMPTY) + nameType;
    var formatNames = info.calendar[type][formatType];
    var result = formatNames[lowerNameType];
    if (!result && lower) {
        result = formatNames[lowerNameType] = cloneLower(formatNames[nameType]);
    }
    return result;
}

function parseRangeDate(value) {
    var parts = value.split('-');
    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var day = parseInt(parts[2], 10);

    return new Date(year, month, day);
}

/* eslint-disable consistent-return */

var NoCurrency = errors.NoCurrency;
var NoCurrencyDisplay = errors.NoCurrencyDisplay;
var NoSupplementalCurrency = errors.NoSupplementalCurrency;
var NoCurrencyRegion = errors.NoCurrencyRegion;
var NoValidCurrency = errors.NoValidCurrency;

var DEFAULT_CURRENCY_FRACTIONS = 2;
var SYMBOL = "symbol";
var INVALID_CURRENCY_CODE = 'XXX';

var GLOBAL_CURRENCIES = {
    '001': 'USD', // 001 refers to world. not sure if it is correct to assume USD but seems better than throw an error
    '150': 'EUR' // 150 territory for Europe

};

function getCurrencyInfo(locale, currency, throwIfNoValid) {
    var info = getLocaleInfo(locale);
    var currencies = info.numbers.currencies;
    if (!currencies) {
        if (throwIfNoValid) {
            throw NoCurrency.error();
        }

        return;
    }

    var currencyDisplayInfo = currencies[currency];

    if (!currencyDisplayInfo) {
        if (throwIfNoValid) {
            throw NoCurrencyDisplay.error();
        }

        return;
    }

    return currencyDisplayInfo;
}

function lengthComparer(a, b) {
    return b.length - a.length;
}

function regionCurrency(regionCurrencies) {
    var latestValidUntil, latestValidUntilRange;
    var latestStillValid, latestStillValidDate;

    for (var idx = 0; idx < regionCurrencies.length; idx++) {
        var currency = regionCurrencies[idx];
        var code = Object.keys(currency)[0];
        var info = currency[code];
        if (code !== INVALID_CURRENCY_CODE && info._tender !== 'false' && info._from) {
            if (!info._to) {
                var stillValidDate = parseRangeDate(info._from);
                if (!latestStillValidDate || latestStillValidDate < stillValidDate) {
                    latestStillValid = code;
                    latestStillValidDate = stillValidDate;
                }
            } else if (!latestStillValid) {
                var validFrom = parseRangeDate(info._from);
                var validTo = parseRangeDate(info._to);
                if (!latestValidUntilRange || latestValidUntilRange.to < validTo || latestValidUntilRange.from < validFrom) {
                    latestValidUntil = code;
                    latestValidUntilRange = {
                        from: validFrom,
                        to: validTo
                    };
                }
            }
        }
    }

    return latestStillValid || latestValidUntil;
}

function currencyDisplays(locale, currency, throwIfNoValid) {
    if ( throwIfNoValid === void 0 ) throwIfNoValid = true;

    var currencyInfo = getCurrencyInfo(locale, currency, throwIfNoValid);
    if (!currencyInfo) {
        return;
    }

    if (!currencyInfo.displays) {
        var displays = [ currency ];
        for (var field in currencyInfo) {
            displays.push(currencyInfo[field]);
        }
        displays.sort(lengthComparer);
        currencyInfo.displays = displays;
    }

    return currencyInfo.displays;
}

function currencyDisplay(locale, options) {
    var value = options.value;
    var currency = options.currency;
    var currencyDisplay = options.currencyDisplay; if ( currencyDisplay === void 0 ) currencyDisplay = SYMBOL;

    if (currencyDisplay === "code") {
        return currency;
    }

    var currencyInfo = getCurrencyInfo(locale, currency, true);
    var result;

    if (currencyDisplay === SYMBOL) {
        result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL];
    } else {
        if (typeof value === "undefined" || value !== 1) {
            result = currencyInfo["displayName-count-other"];
        } else {
            result = currencyInfo["displayName-count-one"];
        }
    }

    return result;
}

function currencyFractionOptions(code) {
    var minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
    var maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;

    var fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];

    if (fractions && fractions._digits) {
        maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function territoryCurrencyCode(territory, throwIfNoValid) {
    if ( throwIfNoValid === void 0 ) throwIfNoValid = true;

    if (GLOBAL_CURRENCIES[territory]) {
        return GLOBAL_CURRENCIES[territory];
    }

    var currencyData = cldr.supplemental.currencyData;
    if (!currencyData) {
        if (throwIfNoValid) {
            throw NoSupplementalCurrency.error();
        }

        return;
    }

    var regionCurrencies = currencyData.region[territory];

    if (!regionCurrencies) {
        if (throwIfNoValid) {
            throw NoCurrencyRegion.error(territory);
        }

        return;
    }

    var currencyCode = regionCurrency(regionCurrencies);

    return currencyCode;
}

function localeCurrency(locale, throwIfNoValid) {
    var info = getLocaleInfo(locale);
    var numbers = info.numbers;

    if (!numbers.localeCurrency) {
        var currency = territoryCurrencyCode(localeTerritory(info), throwIfNoValid);

        if (!currency && throwIfNoValid) {
            throw NoValidCurrency.error(info.name);
        }

        numbers.localeCurrency = currency;
    }

    return numbers.localeCurrency;
}

var DAYS_OF_WEEK = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

var DEFAULT_TERRITORY = '001';

var NoWeekData = errors.NoWeekData;
var NoFirstDay = errors.NoFirstDay;

function firstDay(locale) {
    var info = getLocaleInfo(locale);

    if (!isNaN(info.firstDay)) {
        return info.firstDay;
    }

    var weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData.error();
    }

    var firstDay = weekData.firstDay[localeTerritory(info)] || weekData.firstDay[DEFAULT_TERRITORY];

    if (!firstDay) {
        throw NoFirstDay.error();
    }

    info.firstDay = DAYS_OF_WEEK.indexOf(firstDay);

    return info.firstDay;
}

var NoWeekData$1 = errors.NoWeekData;

function weekendRange(locale) {
    var info = getLocaleInfo(locale);

    if (info.weekendRange) {
        return info.weekendRange;
    }

    var weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData$1.error();
    }

    var territory = localeTerritory(info);
    var start = weekData.weekendStart[territory] || weekData.weekendStart[DEFAULT_TERRITORY];
    var end = weekData.weekendEnd[territory] || weekData.weekendEnd[DEFAULT_TERRITORY];

    info.weekendRange = {
        start: DAYS_OF_WEEK.indexOf(start),
        end: DAYS_OF_WEEK.indexOf(end)
    };

    return info.weekendRange;
}

function numberSymbols(locale) {
    var info = getLocaleInfo(locale);

    return info.numbers.symbols;
}

function isNegativeZero(value) {
    return (1 / value === -Infinity);
}

function formatCurrencySymbol(info, options) {
    if ( options === void 0 ) options = {};

    if (!options.currency) {
        options.currency = localeCurrency(info, true);
    }

    var display = currencyDisplay(info, options);

    return display;
}

function groupInteger(number, start, end, options, info) {
    var symbols = info.numbers.symbols;
    var decimalIndex = number.indexOf(symbols.decimal);
    var groupSizes = options.groupSize.slice();
    var groupSize = groupSizes.shift();

    var integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;

    var integer = number.substring(start, integerEnd);
    var result = number;
    var integerLength = integer.length;

    if (integerLength >= groupSize) {
        var idx = integerLength;
        var parts = [];

        while (idx > -1) {
            var value = integer.substring(idx - groupSize, idx);
            if (value) {
                parts.push(value);
            }
            idx -= groupSize;
            var newGroupSize = groupSizes.shift();
            groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

            if (groupSize === 0) {
                value = integer.substring(0, idx);
                if (value) {
                    parts.push(value);
                }
                break;
            }
        }

        integer = parts.reverse().join(symbols.group);
        result = number.substring(0, start) + integer + number.substring(integerEnd);
    }

    return result;
}

function isCurrencyStyle(style) {
    return style === CURRENCY || style === ACCOUNTING;
}

function pad(number, digits, right) {
    if ( digits === void 0 ) digits = 2;
    if ( right === void 0 ) right = false;

    var count = digits - String(number).length;
    var result = number;

    if (count > 0) {
        var padString = new Array(count + 1).join("0");
        result = right ? number + padString : padString + number;
    }

    return result;
}

var MAX_PRECISION = 20;

function round(value, precision) {
    var result = value;
    var decimals = precision || 0;

    result = result.toString().split('e');
    result = Math.round(Number(result[0] + 'e' + (result[1] ? (Number(result[1]) + decimals) : decimals)));

    result = result.toString().split('e');
    result = Number(result[0] + 'e' + (result[1] ? (Number(result[1]) - decimals) : -decimals));

    return result.toFixed(Math.min(decimals, MAX_PRECISION));
}

var DEFAULT_DECIMAL_ROUNDING = 3;
var DEFAULT_PERCENT_ROUNDING = 0;

var trailingZeroRegex = /0+$/;

function fractionOptions(options) {
    var minimumFractionDigits = options.minimumFractionDigits;
    var maximumFractionDigits = options.maximumFractionDigits;
    var style = options.style;
    var isCurrency = isCurrencyStyle(style);
    var currencyFractions;
    if (isCurrency) {
        currencyFractions = currencyFractionOptions(options.currency);
    }

    if (minimumFractionDigits === undefined) {
        minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
    }

    if (maximumFractionDigits === undefined) {
        if (style === PERCENT) {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
        } else if (isCurrency) {
            maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
        } else {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
        }
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function applyPattern(value, pattern, symbol) {
    var result = EMPTY;
    for (var idx = 0, length = pattern.length; idx < length; idx++) {
        var ch = pattern.charAt(idx);

        if (ch === NUMBER_PLACEHOLDER) {
            result += value;
        } else if (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) {
            result += symbol;
        } else {
            result += ch;
        }
    }
    return result;
}

function currencyUnitPattern(info, value) {
    var currencyInfo = info.numbers.currency;
    var pattern = value !== 1 ? currencyInfo["unitPattern-count-other"] : currencyInfo["unitPattern-count-one"];
    if (value < 0) {
        pattern = pattern.replace(NUMBER_PLACEHOLDER, ("-" + NUMBER_PLACEHOLDER));
    }

    return pattern;
}


function standardNumberFormat(number, options, info) {
    var symbols = info.numbers.symbols;
    var style = options.style;
    var isCurrency = isCurrencyStyle(style);

    //return number in exponential format
    if (style === SCIENTIFIC) {
        var exponential = options.minimumFractionDigits !== undefined ? number.toExponential(options.minimumFractionDigits) : number.toExponential();
        return exponential.replace(POINT, symbols.decimal);
    }

    var value = number;
    var symbol;

    if (isCurrency) {
        options.value = value;
        symbol = formatCurrencySymbol(info, options);
    }

    if (style === PERCENT) {
        value *= 100;
        symbol = symbols.percentSign;
    }

    var ref = fractionOptions(options);
    var minimumFractionDigits = ref.minimumFractionDigits;
    var maximumFractionDigits = ref.maximumFractionDigits;

    value = round(value, maximumFractionDigits);

    var negative = value < 0;
    var negativeZero = isNegativeZero(number);

    var parts = value.split(POINT);

    var integer = parts[0];
    var fraction = pad(parts[1] ? parts[1].replace(trailingZeroRegex, EMPTY) : EMPTY, minimumFractionDigits, true);

    //exclude "-" if number is negative.
    if (negative) {
        integer = integer.substring(1);
    }

    if (options.minimumIntegerDigits) {
        integer = pad(integer, options.minimumIntegerDigits);
    }

    var formattedValue = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, info) : integer;

    if (fraction) {
        formattedValue += symbols.decimal + fraction;
    }

    var pattern;

    if (isCurrency && options.currencyDisplay === "name") {
        pattern = currencyUnitPattern(info, number);
    } else {
        var patterns = options.patterns;
        pattern = (negative || negativeZero) ? patterns[1] || ("-" + patterns[0]) : patterns[0];
    }

    if (pattern === NUMBER_PLACEHOLDER && !negative) {
        return formattedValue;
    }

    var result = applyPattern(formattedValue, pattern, symbol);

    return result;
}

var literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
var PLACEHOLDER = "__??__";

function setStyleOptions(formatOptions, info) {
    var format = formatOptions.format;

    //multiply number if the format has percent
    if (format.indexOf(PERCENT_PLACEHOLDER) !== -1) {
        formatOptions.style = PERCENT;
        formatOptions.symbol = info.numbers.symbols.percentSign;
        formatOptions.number *= 100;
    }

    if (format.indexOf(CURRENCY_PLACEHOLDER) !== -1) {
        formatOptions.style = CURRENCY;
        formatOptions.symbol = formatCurrencySymbol(info);
    }
}

function setFormatLiterals(formatOptions) {
    var format = formatOptions.format;
    if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
        var literals = formatOptions.literals = [];
        formatOptions.format = format.replace(literalRegExp, function(match) {
            var quoteChar = match.charAt(0).replace("\\", EMPTY);
            var literal = match.slice(1).replace(quoteChar, EMPTY);

            literals.push(literal);

            return PLACEHOLDER;
        });
    }
}

function replaceLiterals(number, literals) {
    var result = number;
    if (literals) {
        var length = literals.length;
        for (var idx = 0; idx < length; idx++) {
            result = result.replace(PLACEHOLDER, literals[idx]);
        }
    }
    return result;
}

var SHARP = "#";
var ZERO = "0";

var trailingZerosRegExp = /(\.(?:[0-9]*[1-9])?)0+$/g;
var trailingPointRegExp = /\.$/;
var commaRegExp = /,/g;

function trimTrailingZeros(value, lastZero) {
    var trimRegex;

    if (lastZero === 0) {
        trimRegex = trailingZerosRegExp;
    } else {
        trimRegex = new RegExp(("(\\.[0-9]{" + lastZero + "}[1-9]*)0+$"), 'g');
    }

    return value.replace(trimRegex, '$1').replace(trailingPointRegExp, EMPTY);
}

function roundNumber(formatOptions) {
    var number = formatOptions.number;
    var format = formatOptions.format;
    var decimalIndex = format.indexOf(POINT);

    if (decimalIndex !== -1) {
        var zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
        var sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
        var hasZero = zeroIndex > -1;
        var hasSharp = sharpIndex > -1;
        var fraction = number.toString().split("e");

        if (fraction[1]) {
            fraction = round(number, Math.abs(fraction[1]));
        } else {
            fraction = fraction[0];
        }
        fraction = fraction.split(POINT)[1] || EMPTY;

        var precision = fraction.length;
        var trailingZeros = -1;

        if (!hasZero && !hasSharp) {
            formatOptions.format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
            decimalIndex = -1;
            precision = 0;
        } else if (hasZero && zeroIndex > sharpIndex) {
            precision = zeroIndex;
        } else if (sharpIndex > zeroIndex) {
            if (hasSharp && precision > sharpIndex) {
                precision = sharpIndex;
            } else if (hasZero && precision < zeroIndex) {
                precision = zeroIndex;
            }

            trailingZeros = hasZero ? zeroIndex : 0;
        }

        if (precision > -1) {
            number = round(number, precision);
            if (trailingZeros > -1) {
                number = trimTrailingZeros(number, trailingZeros);
            }
        }
    } else {
        number = round(number);
    }

    if (formatOptions.negative && (number * -1) >= 0 && !formatOptions.negativeZero) {
        formatOptions.negative = false;
    }

    formatOptions.number = number;
    formatOptions.decimalIndex = decimalIndex;
}

function isConstantFormat(format) {
    return format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1;
}

function setValueSpecificFormat(formatOptions) {
    var number = formatOptions.number;
    var format = formatOptions.format;
    format = format.split(LIST_SEPARATOR);
    if ((formatOptions.negative || formatOptions.negativeZero) && format[1]) {
        format = format[1];
        formatOptions.hasNegativeFormat = true;
    } else if (number === 0) {
        var zeroFormat = format[2];
        format = zeroFormat || format[0];
        if (zeroFormat && isConstantFormat(zeroFormat)) {
            formatOptions.constant = zeroFormat;
        }
    } else {
        format = format[0];
    }

    formatOptions.format = format;
}

function setGroupOptions(formatOptions) {
    formatOptions.hasGroup = formatOptions.format.indexOf(GROUP_SEPARATOR) > -1;
    if (formatOptions.hasGroup) {
        formatOptions.format = formatOptions.format.replace(commaRegExp, EMPTY);
    }
}

function placeholderIndex(index1, index2, start) {
    var index;
    if (index1 === -1 && index2 !== -1) {
        index = index2;
    } else if (index1 !== -1 && index2 === -1) {
        index = index1;
    } else {
        index = start ? Math.min(index1, index2) : Math.max(index1, index2);
    }
    return index;
}

function setPlaceholderIndices(formatOptions) {
    var format = formatOptions.format;
    var sharpIndex = format.indexOf(SHARP);
    var zeroIndex = format.indexOf(ZERO);

    var start = placeholderIndex(sharpIndex, zeroIndex, true);

    sharpIndex = format.lastIndexOf(SHARP);
    zeroIndex = format.lastIndexOf(ZERO);

    var end = placeholderIndex(sharpIndex, zeroIndex);

    if (start === format.length) {
        end = start;
    }

    formatOptions.start = start;
    formatOptions.end = end;
    formatOptions.lastZeroIndex = zeroIndex;
}

function replaceStyleSymbols(number, style, symbol) {
    var result = number;
    if (style === CURRENCY || style === PERCENT) {
        result = EMPTY;
        for (var idx = 0, length = number.length; idx < length; idx++) {
            var ch = number.charAt(idx);
            result += (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) ? symbol : ch;
        }
    }
    return result;
}

function replacePlaceHolders(formatOptions, info) {
    var start = formatOptions.start;
    var end = formatOptions.end;
    var negative = formatOptions.negative;
    var negativeZero = formatOptions.negativeZero;
    var format = formatOptions.format;
    var decimalIndex = formatOptions.decimalIndex;
    var lastZeroIndex = formatOptions.lastZeroIndex;
    var hasNegativeFormat = formatOptions.hasNegativeFormat;
    var hasGroup = formatOptions.hasGroup;
    var number = formatOptions.number;
    var value = number.toString().split(POINT);
    var length = format.length;
    var integer = value[0];
    var fraction = value[1] || EMPTY;
    var integerLength = integer.length;
    var replacement = EMPTY;

    number = format.substring(0, start);

    if ((negative || negativeZero) && !hasNegativeFormat) {
        number += "-";
    }

    for (var idx = start; idx < length; idx++) {
        var ch = format.charAt(idx);

        if (decimalIndex === -1) {
            if (end - idx < integerLength) {

                number += integer;
                break;
            }
        } else {
            if (lastZeroIndex !== -1 && lastZeroIndex < idx) {
                replacement = EMPTY;
            }

            if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
                number += integer;
                idx = decimalIndex;
            }

            if (decimalIndex === idx) {
                number += (fraction ? info.numbers.symbols.decimal : EMPTY) + fraction;
                idx += end - decimalIndex + 1;
                continue;
            }
        }

        if (ch === ZERO) {
            number += ch;
            replacement = ch;
        } else if (ch === SHARP) {
            number += replacement;
        }
    }

    if (hasGroup) {
        number = groupInteger(number, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, (integerLength + start)), info.numbers.decimal, info);
    }

    if (end >= start) {
        number += format.substring(end + 1);
    }

    return number;
}

function applyCustomFormat(formatOptions, info) {
    var number = formatOptions.number;
    if (formatOptions.start !== -1) {
        number = replacePlaceHolders(formatOptions, info);
        number = replaceStyleSymbols(number, formatOptions.style, formatOptions.symbol);
        number = replaceLiterals(number, formatOptions.literals);
    }

    return number;
}

function customNumberFormat(number, format, info) {
    var formatOptions = {
        negative: number < 0,
        number: Math.abs(number),
        negativeZero: isNegativeZero(number),
        format: format
    };

    setValueSpecificFormat(formatOptions);

    if (formatOptions.constant) {
        return formatOptions.constant;
    }

    setFormatLiterals(formatOptions);
    setStyleOptions(formatOptions, info);
    setGroupOptions(formatOptions);
    roundNumber(formatOptions);
    setPlaceholderIndices(formatOptions);

    return applyCustomFormat(formatOptions, info);
}

var standardFormatRegExp = /^(n|c|p|e|a)(\d*)$/i;

function standardFormatOptions(format) {
    var formatAndPrecision = standardFormatRegExp.exec(format);

    if (formatAndPrecision) {
        var options = {
            style: DECIMAL
        };

        var style = formatAndPrecision[1].toLowerCase();

        if (style === "c") {
            options.style = CURRENCY;
        } else if (style === "a") {
            options.style = ACCOUNTING;
        } else if (style === "p") {
            options.style = PERCENT;
        } else if (style === "e") {
            options.style = SCIENTIFIC;
        }

        if (formatAndPrecision[2]) {
            options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
        }

        return options;
    }
}

function formatOptions(format) {
    var options;
    if (isString(format)) {
        options = standardFormatOptions(format);
    } else {
        options = format;
    }

    return options;
}

function formatNumber(number, format, locale) {
    if ( format === void 0 ) format = NUMBER_PLACEHOLDER;
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    if (number === undefined || number === null) {
        return EMPTY;
    }

    if (!isFinite(number)) {
        return String(number);
    }

    var info = localeInfo(locale);
    var options = formatOptions(format);

    var result;
    if (options) {
        var style = options.style || DECIMAL;
        result = standardNumberFormat(number, Object.assign({}, info.numbers[style], options), info);
    } else {
        result = customNumberFormat(number, format, info);
    }

    return result;
}

function isNumber(value) {
    return typeof value === "number";
}

var exponentRegExp = /[eE][-+]?[0-9]+/;
var nonBreakingSpaceRegExp = /\u00A0/g;

function cleanNegativePattern(number, patterns) {
    if (patterns.length > 1) {
        var parts = (patterns[1] || EMPTY).replace(CURRENCY_PLACEHOLDER, EMPTY).split(NUMBER_PLACEHOLDER);
        if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) {
            return number.replace(parts[0], EMPTY).replace(parts[1], EMPTY);
        }
    }
}

function cleanCurrencyNumber(value, info, format) {
    var options = formatOptions(format) || {};
    var isCurrency = isCurrencyStyle(options.style);
    var number = value;
    var negative;

    var currency = options.currency || localeCurrency(info, isCurrency);

    if (currency) {
        var displays = currencyDisplays(info, currency, isCurrency);
        if (displays) {
            for (var idx = 0; idx < displays.length; idx++) {
                var display = displays[idx];
                if (number.includes(display)) {
                    number = number.replace(display, EMPTY);
                    isCurrency = true;
                    break;
                }
            }
        }

        if (isCurrency) {
            var cleanNumber = cleanNegativePattern(number, info.numbers.currency.patterns) ||
                cleanNegativePattern(number, info.numbers.accounting.patterns);

            if (cleanNumber) {
                negative = true;
                number = cleanNumber;
            }

        }
    }

    return {
        number: number,
        negative: negative
    };
}

function cleanLiterals(number, formatOptions$$1) {
    var literals = formatOptions$$1.literals;
    var result = number;

    if (literals) {
        for (var idx = 0; idx < literals.length; idx++) {
            result = result.replace(literals[idx], EMPTY);
        }
    }

    return result;
}

function divideBy100(number) {
    var strNumber = String(number);
    var pointIndex = strNumber.indexOf(POINT);
    var zeroesCount = 2;
    var result = number / Math.pow(10, zeroesCount);

    if (pointIndex === -1 || String(result).length <= strNumber.length + zeroesCount) {
        return result;
    }

    var fractionDigits = strNumber.length - pointIndex + 1 + zeroesCount;
    return parseFloat(result.toFixed(fractionDigits));
}

function parseNumber(value, locale, format) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;
    if ( format === void 0 ) format = {};

    if (!value && value !== 0) {
        return null;
    }

    if (isNumber(value)) {
        return value;
    }

    var info = localeInfo(locale);
    var symbols = info.numbers.symbols;

    var number = value.toString();
    var formatOptions$$1 = format || {};
    var isPercent;

    if (isString(format)) {
        formatOptions$$1 = { format: format };
        setFormatLiterals(formatOptions$$1);
        number = cleanLiterals(number, formatOptions$$1);

        setStyleOptions(formatOptions$$1, info);
    }

    if (formatOptions$$1.style === PERCENT || number.indexOf(symbols.percentSign) > -1) {
        number = number.replace(symbols.percentSign, EMPTY);
        isPercent = true;
    }

    if (exponentRegExp.test(number)) {
        number = parseFloat(number.replace(symbols.decimal, POINT));
        return isNaN(number) ? null : number;
    }

    var ref = cleanCurrencyNumber(number, info, formatOptions$$1);
    var negativeCurrency = ref.negative;
    var currencyNumber = ref.number;
    number = String(currencyNumber).trim();

    var negativeSignIndex = number.indexOf("-");
    if (negativeSignIndex > 0) {
        return null;
    }

    var isNegative = negativeSignIndex > -1;

    isNegative = negativeCurrency !== undefined ? negativeCurrency : isNegative;

    number = number.replace("-", EMPTY)
          .replace(nonBreakingSpaceRegExp, " ")
          .split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join(EMPTY)
          .replace(symbols.decimal, POINT);

    number = parseFloat(number);

    if (isNaN(number)) {
        number = null;
    } else if (isNegative) {
        number *= -1;
    }

    if (number && isPercent) {
        number = divideBy100(number);
    }

    return number;
}

var formatRegExp$1 = /\{(\d+)}/g;

function formatString(format) {
    var values = arguments;

    return format.replace(formatRegExp$1, function (match, index) {
        var value = values[parseInt(index, 10) + 1];

        return value;
    });
}

var REMOVAL_PENALTY = 120;
var ADDITION_PENALTY = 20;
var LENGHT_DELTA = [ 2, 1, 5, 3, 4 ];
var LONG_LESS_PENALTY_DELTA = -2;
var SHORT_LESS_PENALTY_DELTA = -1;
var SHORT_MORE_PENALTY_DELTA = 1;
var LONG_MORE_PENALTY_DELTA = 2;

var PENALTIES = {};
PENALTIES[LONG_LESS_PENALTY_DELTA.toString()] = 8;
PENALTIES[SHORT_LESS_PENALTY_DELTA.toString()] = 6;
PENALTIES[LONG_MORE_PENALTY_DELTA.toString()] = 6;
PENALTIES[SHORT_MORE_PENALTY_DELTA.toString()] = 3;

var VALUE_FORMAT_LENGTH = {
    numeric: 1,
    "2-digit": 2,
    short: 3,
    long: 4,
    narrow: 5
};

var TIME_SPECIFIERS_REGEX = /[hHmsSzZoOvVxX]/;

function getHourSpecifier(options) {
    return options.hour12 ? "h" : "H";
}

var DATE_OPTIONS_MAP = [ {
    key: "era",
    specifier: "G"
}, {
    key: "year",
    specifier: "y"
}, {
    key: "month",
    specifier: "M"
}, {
    key: "day",
    specifier: "d"
}, {
    key: "weekday",
    specifier: "E"
}, {
    key: "hour",
    getSpecifier: getHourSpecifier
}, {
    key: "minute",
    specifier: "m"
}, {
    key: "second",
    specifier: "s"
}, {
    key: "timeZoneName",
    specifier: "z"
} ];

var STAND_ALONE_SPECIFIERS = {
    e: 'c',
    E: 'c',
    M: 'L',
    Q: 'q'
};

var specifiersRegex = {};
var resolvedFormats = {};

function getSpecifierRegex(specifier) {
    if (!specifiersRegex[specifier]) {
        specifiersRegex[specifier] = new RegExp(specifier + "+");
    }
    return specifiersRegex[specifier];
}

function skeletonSpecifiers(skeleton) {
    var result = [];
    var current = skeleton.charAt(0);
    var specifier = current;
    for (var idx = 1; idx < skeleton.length; idx++) {
        var character = skeleton.charAt(idx);
        if (character === specifier) {
            current += character;
        } else {
            result.push(current);
            current = specifier = character;
        }
    }

    result.push(current);

    return result;
}

function findBestMatch(specifiers, availableFormats) {
    var specifiersLength = specifiers.length;
    var maxScore = -Number.MAX_VALUE;
    var bestMatches, result;
    for (var format in availableFormats) {
        var matches = [];
        var currentFormat = format.replace("v", "z");
        var score = 0;
        for (var idx = 0; idx < specifiersLength; idx++) {
            var specifier = specifiers[idx];
            var specifierRegex = getSpecifierRegex(specifier[0]);
            var match = (specifierRegex.exec(currentFormat) || [])[0];

            if (!match) {
                score -= REMOVAL_PENALTY;
            } else {
                currentFormat = currentFormat.replace(match, EMPTY);
                if (match.length !== specifier.length) {
                    var delta = Math.max(Math.min(LENGHT_DELTA[match.length] - LENGHT_DELTA[specifier.length], 2), -2);
                    score -= PENALTIES[delta];
                }
            }

            matches.push(match);

            if (score < maxScore) {
                break;
            }
        }

        if (currentFormat.length) {
            score -= skeletonSpecifiers(currentFormat).length * ADDITION_PENALTY;
        }

        if (score > maxScore) {
            maxScore = score;
            bestMatches = matches;
            result = availableFormats[format];
        }
    }

    result = result.replace("v", "z");

    for (var idx$1 = 0; idx$1 < specifiersLength; idx$1++) {
        var bestMatch = bestMatches[idx$1];
        if (bestMatch && bestMatch !== specifiers[idx$1]) {
            var matchSpecifier = bestMatches[idx$1][0];
            result = result.replace(getSpecifierRegex(matchSpecifier), specifiers[idx$1]);
            if (STAND_ALONE_SPECIFIERS[matchSpecifier]) {
                result = result.replace(getSpecifierRegex(STAND_ALONE_SPECIFIERS[matchSpecifier]), specifiers[idx$1]);
            }
        }
    }

    return result;
}

function cacheFormat(skeleton, format, locale) {
    if (!resolvedFormats[locale]) {
        resolvedFormats[locale] = {};
    }
    resolvedFormats[locale][skeleton] = format;
}


function skeletonFormat(skeleton, info) {
    var availableFormats = info.calendar.dateTimeFormats.availableFormats;
    if (availableFormats[skeleton]) {
        return availableFormats[skeleton];
    }
    if (resolvedFormats[info.name] && resolvedFormats[info.name][skeleton]) {
        return resolvedFormats[info.name][skeleton];
    }
    var timeStartIndex = skeleton.search(TIME_SPECIFIERS_REGEX);
    var result;
    if (timeStartIndex > 0) {
        var dateSkeleton = skeleton.substr(0, timeStartIndex);
        var timeSkeleton = skeleton.substr(timeStartIndex);

        result = formatString(info.calendar.dateTimeFormats.short, //should be deterimed based on specifiers
            availableFormats[timeSkeleton] || findBestMatch(skeletonSpecifiers(timeSkeleton), availableFormats),
            availableFormats[dateSkeleton] || findBestMatch(skeletonSpecifiers(dateSkeleton), availableFormats));
    } else {
        result = findBestMatch(skeletonSpecifiers(skeleton), availableFormats);
    }

    cacheFormat(skeleton, result, info.name);
    return result;
}

function skeletonFromOptions(options) {
    var result = [];
    for (var idx = 0; idx < DATE_OPTIONS_MAP.length; idx++) {
        var option = DATE_OPTIONS_MAP[idx];
        var field = option.key;
        var value = options[field];
        if (value) {
            var spcifier = option.specifier || option.getSpecifier(options);
            result.push(spcifier.repeat(VALUE_FORMAT_LENGTH[value]));
        }
    }

    return result.join(EMPTY);
}

function datePattern(format, info) {
    var calendar = info.calendar;
    var result;
    if (isString(format)) {
        if (calendar.patterns[format]) {
            result = calendar.patterns[format];
        } else {
            result = format;
        }
    } else if (format) {
        if (format.pattern) {
            return format.pattern;
        }

        var skeleton = format.skeleton;
        if (!skeleton) {
            if (format.datetime) {
                result = formatString(calendar.dateTimeFormats[format.datetime], calendar.timeFormats[format.datetime], calendar.dateFormats[format.datetime]);
            } else if (format.date) {
                result = calendar.dateFormats[format.date];
            } else if (format.time) {
                result = calendar.timeFormats[format.time];
            } else {
                skeleton = skeletonFromOptions(format);
            }
        }

        if (skeleton) {
            result = skeletonFormat(skeleton, info);
        }
    }

    if (!result) {
        result = calendar.patterns.d;
    }

    return result;
}

function dateNameType(formatLength) {
    var nameType;
    if (formatLength <= 3) {
        nameType = "abbreviated";
    } else if (formatLength === 4) {
        nameType = "wide";
    } else if (formatLength === 5) {
        nameType = "narrow";
    } else if (formatLength === 6) {
        nameType = "short";
    }

    return nameType;
}

function formatNames(locale, type, formatLength, standAlone, lower) {
    return dateFormatNames(locale, {
        type: type,
        nameType: dateNameType(formatLength),
        standAlone: standAlone,
        lower: lower
    });
}

function isFunction(fun) {
    return typeof(fun) === 'function';
}

function isDate(value) {
    return Boolean(value) && isFunction(value.getTime) && isFunction(value.getMonth);
}

var MONTH = 'month';
var HOUR = 'hour';
var ZONE = 'zone';
var WEEKDAY = 'weekday';
var QUARTER = 'quarter';

var DATE_FIELD_MAP = {
    'G': 'era',
    'y': 'year',
    'q': QUARTER,
    'Q': QUARTER,
    'M': MONTH,
    'L': MONTH,
    'd': 'day',
    'E': WEEKDAY,
    'c': WEEKDAY,
    'e': WEEKDAY,
    'h': HOUR,
    'H': HOUR,
    'k': HOUR,
    'K': HOUR,
    'm': 'minute',
    's': 'second',
    'S': 'millisecond',
    'a': 'dayperiod',
    'x': ZONE,
    'X': ZONE,
    'z': ZONE,
    'Z': ZONE
};

var dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

function formatDayOfWeekIndex(day, formatLength, localeInfo$$1) {
    var firstDayIndex = firstDay(localeInfo$$1);
    var dayIndex;
    if (day < firstDayIndex) {
        dayIndex = 7 - firstDayIndex + day;
    } else {
        dayIndex = day - firstDayIndex;
    }

    return dayIndex + 1;
}

function formatMonth(month, formatLength, info, standAlone) {
    if (formatLength <= 2) {
        return pad(month + 1, formatLength);
    }
    return formatNames(info, "months", formatLength, standAlone)[month];
}

function formatQuarter(date, formatLength, info, standAlone) {
    var quarter = Math.floor(date.getMonth() / 3);
    if (formatLength < 3) {
        return quarter + 1;
    }

    return formatNames(info, "quarters", formatLength, standAlone)[quarter];
}


function formatTimeZone(date, info, options) {
    var shortHours = options.shortHours;
    var optionalMinutes = options.optionalMinutes;
    var separator = options.separator;
    var localizedName = options.localizedName;
    var zZeroOffset = options.zZeroOffset;
    var offset = date.getTimezoneOffset() / 60;
    if (offset === 0 && zZeroOffset) {
        return "Z";
    }
    var sign = offset <= 0 ? "+" : "-";
    var hoursMinutes = Math.abs(offset).toString().split(".");
    var minutes = hoursMinutes[1] || 0;
    var result = sign + (shortHours ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
    if (minutes || !optionalMinutes) {
        result += (separator ? ":" : EMPTY) + pad(minutes, 2);
    }

    if (localizedName) {
        var localizedFormat = offset === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat;
        result = formatString(localizedFormat, result);
    }

    return result;
}

function formatDayOfWeek(date, formatLength, info, standAlone) {
    var result;
    if (formatLength < 3) {
        result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
    } else {
        result = formatNames(info, "days", formatLength, standAlone)[date.getDay()];
    }
    return result;
}

var formatters = {};

formatters.d = function(date, formatLength) {
    return pad(date.getDate(), formatLength);
};

formatters.E = function(date, formatLength, info) {
    return formatNames(info, "days", formatLength)[date.getDay()];
};

formatters.M = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, false);
};

formatters.L = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, true);
};

formatters.y = function(date, formatLength) {
    var year = date.getFullYear();
    if (formatLength === 2) {
        year = year % 100;
    }
    return pad(year, formatLength);
};

formatters.h = function(date, formatLength) {
    var hours = date.getHours() % 12 || 12;
    return pad(hours, formatLength);
};

formatters.H = function(date, formatLength) {
    return pad(date.getHours(), formatLength);
};

formatters.k = function(date, formatLength) {
    return pad(date.getHours() || 24, formatLength);
};

formatters.K = function(date, formatLength) {
    return pad(date.getHours() % 12, formatLength);
};

formatters.m = function(date, formatLength) {
    return pad(date.getMinutes(), formatLength);
};

formatters.s = function(date, formatLength) {
    return pad(date.getSeconds(), formatLength);
};

formatters.S = function(date, formatLength) {
    var milliseconds = date.getMilliseconds();
    var result;
    if (milliseconds !== 0) {
        result = pad(String(milliseconds / 1000).split(".")[1].substr(0, formatLength), formatLength, true);
    } else {
        result = pad(EMPTY, formatLength);
    }
    return result;
};

formatters.a = function(date, formatLength, info) {
    return formatNames(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
};

formatters.z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        shortHours: formatLength < 4,
        optionalMinutes: formatLength < 4,
        separator: true,
        localizedName: true
    });
};

formatters.Z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        separator: formatLength > 3,
        localizedName: formatLength === 4,
        zZeroOffset: formatLength === 5
    });
};

formatters.x = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5
    });
};

formatters.X = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5,
        zZeroOffset: true
    });
};

formatters.G = function(date, formatLength, info) {
    var era = date.getFullYear() >= 0 ? 1 : 0;
    return formatNames(info, "eras", formatLength)[era];
};

formatters.e = formatDayOfWeek;

formatters.c = function(date, formatLength, info) {
    return formatDayOfWeek(date, formatLength, info, true);
};

formatters.q = function(date, formatLength, info) {
    return formatQuarter(date, formatLength, info, true);
};

formatters.Q = formatQuarter;

function formatDate(date, format, locale) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    if (!isDate(date)) {
        if (date === undefined || date === null) {
            return EMPTY;
        }
        return date;
    }

    var info = localeInfo(locale);
    var pattern = datePattern(format, info);

    return pattern.replace(dateFormatRegExp, function(match) {
        var formatLength = match.length;
        var result;

        if (match.includes("'") || match.includes("\"")) {
            result = match.slice(1, formatLength - 1);
        } else {
            result = formatters[match[0]](date, formatLength, info);
        }

        return result;
    });
}

function convertTimeZone(date, fromOffset, toOffset) {
    var fromLocalOffset = date.getTimezoneOffset();

    var offsetDate = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

    var toLocalOffset = offsetDate.getTimezoneOffset();

    return new Date(offsetDate.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
}

function adjustDST(date, hours) {
    if (!hours && date.getHours() === 23) {
        date.setHours(date.getHours() + 2);
    }
}

var timeZoneOffsetRegExp = /([+|-]\d{1,2})(:?)(\d{2})?/;
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var offsetRegExp = /[+-]\d*/;
var numberRegExp = {
    2: /^\d{1,2}/,
    3: /^\d{1,3}/,
    4: /^\d{4}/
};
var numberRegex = /\d+/;
var PLACEHOLDER$1 = "{0}";

var leadingSpacesRegex = /^ */;
var trailingSpacesRegex = / *$/;

var standardDateFormats = [
    "yyyy/MM/dd HH:mm:ss",
    "yyyy/MM/dd HH:mm",
    "yyyy/MM/dd",
    "E MMM dd yyyy HH:mm:ss",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
    "yyyy-MM-ddTHH:mm:ss.SSSXXX",
    "yyyy-MM-ddTHH:mm:ss.SSXXX",
    "yyyy-MM-ddTHH:mm:ssXXX",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
    "yyyy-MM-ddTHH:mm:ss.SSS",
    "yyyy-MM-ddTHH:mmXXX",
    "yyyy-MM-ddTHH:mmX",
    "yyyy-MM-ddTHH:mm:ss",
    "yyyy-MM-ddTHH:mm",
    "yyyy-MM-dd HH:mm:ss",
    "yyyy-MM-dd HH:mm",
    "yyyy-MM-dd",
    "HH:mm:ss",
    "HH:mm"
];
var FORMATS_SEQUENCE = [ "G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t" ];
var TWO_DIGIT_YEAR_MAX = 2029;

function outOfRange(value, start, end) {
    return !(value >= start && value <= end);
}

function lookAhead(match, state) {
    var format = state.format;
    var idx = state.idx;
    var i = 0;
    while (format[idx] === match) {
        i++;
        idx++;
    }
    if (i > 0) {
        idx -= 1;
    }
    state.idx = idx;
    return i;
}

function getNumber(size, state) {
    var regex = size ? (numberRegExp[size] || new RegExp('^\\d{1,' + size + '}')) : numberRegex,
        match = state.value.substr(state.valueIdx, size).match(regex);

    if (match) {
        match = match[0];
        state.valueIdx += match.length;
        return parseInt(match, 10);
    }
    return null;
}

function getIndexByName(names, state, lower) {
    var i = 0,
        length = names.length,
        name, nameLength,
        matchLength = 0,
        matchIdx = 0,
        subValue;

    for (; i < length; i++) {
        name = names[i];
        nameLength = name.length;
        subValue = state.value.substr(state.valueIdx, nameLength);

        if (lower) {
            subValue = subValue.toLowerCase();
        }

        if (subValue === name && nameLength > matchLength) {
            matchLength = nameLength;
            matchIdx = i;
        }
    }

    if (matchLength) {
        state.valueIdx += matchLength;
        return matchIdx + 1;
    }

    return null;
}

function checkLiteral(state) {
    var result = false;
    if (state.value.charAt(state.valueIdx) === state.format[state.idx]) {
        state.valueIdx++;
        result = true;
    }
    return result;
}

function calendarGmtFormats(calendar) {
    var gmtFormat = calendar.gmtFormat;
    var gmtZeroFormat = calendar.gmtZeroFormat;
    if (!gmtFormat) {
        throw errors.NoGMTInfo.error();
    }

    return [ gmtFormat.replace(PLACEHOLDER$1, EMPTY).toLowerCase(), gmtZeroFormat.replace(PLACEHOLDER$1, EMPTY).toLowerCase() ];
}

function parseTimeZoneOffset(state, info, options) {
    var shortHours = options.shortHours;
    var noSeparator = options.noSeparator;
    var optionalMinutes = options.optionalMinutes;
    var localizedName = options.localizedName;
    var zLiteral = options.zLiteral;
    state.UTC = true;

    if (zLiteral && state.value.charAt(state.valueIdx) === "Z") {
        state.valueIdx++;
        return false;
    }

    if (localizedName && !getIndexByName(calendarGmtFormats(info.calendar), state, true)) {
        return true;
    }

    var matches = timeZoneOffsetRegExp.exec(state.value.substr(state.valueIdx, 6));
    if (!matches) {
        return !localizedName;
    }

    var hoursMatch = matches[1];
    var minutesMatch = matches[3];
    var hoursOffset = parseInt(hoursMatch, 10);
    var separator = matches[2];
    var minutesOffset = parseInt(minutesMatch, 10);

    if (isNaN(hoursOffset) || (!shortHours && hoursMatch.length !== 3) || (!optionalMinutes && isNaN(minutesOffset)) || (noSeparator && separator)) {
        return true;
    }

    if (isNaN(minutesOffset)) {
        minutesOffset = null;
    }

    if (outOfRange(hoursOffset, -12, 13) || (minutesOffset && outOfRange(minutesOffset, 0, 59))) {
        return true;
    }

    state.valueIdx += matches[0].length;
    state.hoursOffset = hoursOffset;
    state.minutesOffset = minutesOffset;
}

function parseMonth(ch, state, info) {
    var count = lookAhead(ch, state);
    var names = formatNames(info, "months", count, ch === "L", true);

    var month = count < 3 ? getNumber(2, state) : getIndexByName(names, state, true);

    if (month === null || outOfRange(month, 1, 12)) {
        return true;
    }
    state.month = month - 1;
}

function parseDayOfWeek(ch, state, info) {
    var count = lookAhead(ch, state);
    var names = formatNames(info, "days", count, ch === "c", true);
    var dayOfWeek = count < 3 ? getNumber(1, state) : getIndexByName(names, state, true);
    if ((!dayOfWeek && dayOfWeek !== 0) || outOfRange(dayOfWeek, 1, 7)) {
        return true;
    }
}

var parsers = {};

parsers.d = function(state) {
    lookAhead("d", state);
    var day = getNumber(2, state);

    if (day === null || outOfRange(day, 1, 31)) {
        return true;
    }

    if (state.day === null) {
        state.day = day;
    }
};

parsers.E = function(state, info) {
    var count = lookAhead("E", state);
    //validate if it matches the day?
    var dayOfWeek = getIndexByName(formatNames(info, "days", count, false, true), state, true);
    if (dayOfWeek === null) {
        return true;
    }
};

parsers.M = function(state, info) {
    return parseMonth("M", state, info);
};

parsers.L = function(state, info) {
    return parseMonth("L", state, info);
};

parsers.y = function(state) {
    var count = lookAhead("y", state);
    var year = getNumber(count === 1 ? undefined : count, state);

    if (year === null) {
        return true;
    }

    if (count === 2) {
        var currentYear = new Date().getFullYear();
        year = (currentYear - currentYear % 100) + year;
        if (year > TWO_DIGIT_YEAR_MAX) {
            year -= 100;
        }
    }

    state.year = year;
};

parsers.h = function(state) {
    lookAhead("h", state);

    var hours = getNumber(2, state);
    if (hours === 12) {
        hours = 0;
    }

    if (hours === null || outOfRange(hours, 0, 11)) {
        return true;
    }

    state.hours = hours;
};

parsers.K = function(state) {
    lookAhead("K", state);

    var hours = getNumber(2, state);

    if (hours === null || outOfRange(hours, 0, 11)) {
        return true;
    }

    state.hours = hours;
};

parsers.a = function(state, info) {
    var count = lookAhead("a", state);
    var periodFormats = formatNames(info, "dayPeriods", count, false, true);

    var pmHour = getIndexByName([ periodFormats.pm ], state, true);
    if (!pmHour && !getIndexByName([ periodFormats.am ], state, true)) {
        return true;
    }

    state.pmHour = pmHour;
};

parsers.H = function(state) {
    lookAhead("H", state);
    var hours = getNumber(2, state);
    if (hours === null || outOfRange(hours, 0, 23)) {
        return true;
    }
    state.hours = hours;
};

parsers.k = function(state) {
    lookAhead("k", state);

    var hours = getNumber(2, state);

    if (hours === null || outOfRange(hours, 1, 24)) {
        return true;
    }

    state.hours = hours === 24 ? 0 : hours;
};

parsers.m = function(state) {
    lookAhead("m", state);
    var minutes = getNumber(2, state);

    if (minutes === null || outOfRange(minutes, 0, 59)) {
        return true;
    }

    state.minutes = minutes;
};

parsers.s = function(state) {
    lookAhead("s", state);
    var seconds = getNumber(2, state);
    if (seconds === null || outOfRange(seconds, 0, 59)) {
        return true;
    }
    state.seconds = seconds;
};

parsers.S = function(state) {
    var count = lookAhead("S", state);
    var match = state.value.substr(state.valueIdx, count);
    var milliseconds = null;

    if (!isNaN(parseInt(match, 10))) {
        milliseconds = parseFloat("0." + match, 10);
        milliseconds = round(milliseconds, 3);
        milliseconds *= 1000;
        state.valueIdx += count;
    }

    if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
        return true;
    }

    state.milliseconds = milliseconds;
};

parsers.z = function(state, info) {
    var count = lookAhead("z", state);

    var shortFormat = count < 4;

    var invalid = parseTimeZoneOffset(state, info, {
        shortHours: shortFormat,
        optionalMinutes: shortFormat,
        localizedName: true
    });

    if (invalid) {
        return invalid;
    }
};

parsers.Z = function(state, info) {
    var count = lookAhead("Z", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count < 4,
        zLiteral: count === 5,
        localizedName: count === 4
    });

    if (invalid) {
        return invalid;
    }
};

parsers.x = function(state, info) {
    var count = lookAhead("x", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count !== 3 && count !== 5,
        optionalMinutes: count === 1
    });
    if (invalid) {
        return invalid;
    }
};

parsers.X = function(state, info) {
    var count = lookAhead("X", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count !== 3 && count !== 5,
        optionalMinutes: count === 1,
        zLiteral: true
    });
    if (invalid) {
        return invalid;
    }
};

parsers.G = function(state, info) {
    var count = lookAhead("G", state);
    var eras = formatNames(info, "eras", count, false, true);
    var era = getIndexByName([ eras[0], eras[1] ], state, true);

    if (era === null) {
        return true;
    }
};

parsers.e = function(state, info) {
    return parseDayOfWeek("e", state, info);
};

parsers.c = function(state, info) {
    return parseDayOfWeek("c", state, info);
};

function createDate(state) {
    var year = state.year;
    var month = state.month;
    var day = state.day;
    var hours = state.hours;
    var minutes = state.minutes;
    var seconds = state.seconds;
    var milliseconds = state.milliseconds;
    var pmHour = state.pmHour;
    var UTC = state.UTC;
    var hoursOffset = state.hoursOffset;
    var minutesOffset = state.minutesOffset;
    var hasTime = hours !== null || minutes !== null || seconds || null;
    var date = new Date();
    var result;

    if (year === null && month === null && day === null && hasTime) {
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
    } else {
        if (year === null) {
            year = date.getFullYear();
        }

        if (day === null) {
            day = 1;
        }
    }

    if (pmHour && hours < 12) {
        hours += 12;
    }

    if (UTC) {
        if (hoursOffset) {
            hours += -hoursOffset;
        }

        if (minutesOffset) {
            minutes += -minutesOffset * (hoursOffset < 0 ? -1 : 1);
        }

        result = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
    } else {
        result = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        adjustDST(result, hours);
    }

    if (year < 100) {
        result.setFullYear(year);
    }

    if (result.getDate() !== day && UTC === undefined) {
        return null;
    }

    return result;
}

function addFormatSpaces(value, format) {
    var leadingSpaces = leadingSpacesRegex.exec(format)[0];
    var trailingSpaces = trailingSpacesRegex.exec(format)[0];

    return ("" + leadingSpaces + value + trailingSpaces);
}

function parseExact(value, format, info) {
    var pattern = datePattern(format, info).split(EMPTY);

    var state = {
        format: pattern,
        idx: 0,
        value: addFormatSpaces(value, format),
        valueIdx: 0,
        year: null,
        month: null,
        day: null,
        hours: null,
        minutes: null,
        seconds: null,
        milliseconds: null
    };
    var length = pattern.length;
    var literal = false;

    for (; state.idx < length; state.idx++) {
        var ch = pattern[state.idx];

        if (literal) {
            if (ch === "'") {
                literal = false;
            }

            checkLiteral(state);
        } else {
            if (parsers[ch]) {
                var invalid = parsers[ch](state, info);
                if (invalid) {
                    return null;
                }
            } else if (ch === "'") {
                literal = true;
                checkLiteral(state);
            } else if (!checkLiteral(state)) {
                return null;
            }
        }
    }

    if (state.valueIdx < value.length) {
        return null;
    }

    return createDate(state) || null;
}

function parseMicrosoftDateOffset(offset) {
    var sign = offset.substr(0, 1) === "-" ? -1 : 1;

    var result = offset.substring(1);
    result = (parseInt(result.substr(0, 2), 10) * 60) + parseInt(result.substring(2), 10);

    return sign * result;
}

function parseMicrosoftDateFormat(value) {
    if (value && value.indexOf("/D") === 0) {
        var date = dateRegExp.exec(value);
        if (date) {
            date = date[1];
            var tzoffset = offsetRegExp.exec(date.substring(1));

            date = new Date(parseInt(date, 10));

            if (tzoffset) {
                tzoffset = parseMicrosoftDateOffset(tzoffset[0]);
                date = convertTimeZone(date, date.getTimezoneOffset(), 0);
                date = convertTimeZone(date, 0, -1 * tzoffset);
            }

            return date;
        }
    }
}

function defaultFormats(calendar) {
    var formats = [];
    var patterns = calendar.patterns;
    var length = FORMATS_SEQUENCE.length;

    for (var idx = 0; idx < length; idx++) {
        formats.push(patterns[FORMATS_SEQUENCE[idx]]);
    }

    return formats.concat(standardDateFormats);
}

function parseDate(value, formats, locale) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    if (!value) {
        return null;
    }

    if (isDate(value)) {
        return value;
    }

    var parseValue = String(value).trim();
    var date = parseMicrosoftDateFormat(parseValue);
    if (date) {
        return date;
    }

    var info = localeInfo(locale);
    var parseFormats = formats || defaultFormats(info.calendar);
    parseFormats = Array.isArray(parseFormats) ? parseFormats : [ parseFormats ];

    var length = parseFormats.length;

    for (var idx = 0; idx < length; idx++) {
        date = parseExact(parseValue, parseFormats[idx], info);
        if (date) {
            return date;
        }
    }

    return date;
}

var NAME_TYPES = {
    month: {
        type: 'months',
        minLength: 3,
        standAlone: 'L'
    },

    quarter: {
        type: 'quarters',
        minLength: 3,
        standAlone: 'q'
    },

    weekday: {
        type: 'days',
        minLength: {
            E: 0,
            c: 3,
            e: 3
        },
        standAlone: 'c'
    },

    dayperiod: {
        type: 'dayPeriods',
        minLength: 0
    },

    era: {
        type: 'eras',
        minLength: 0
    }
};

var LITERAL = 'literal';

function addLiteral(parts, value) {
    var lastPart = parts[parts.length - 1];
    if (lastPart && lastPart.type === LITERAL) {
        lastPart.pattern += value;
    } else {
        parts.push({
            type: LITERAL,
            pattern: value
        });
    }
}

function isHour12(pattern) {
    return pattern === 'h' || pattern === 'K';
}

function splitDateFormat(format, locale) {
    if ( locale === void 0 ) locale = DEFAULT_LOCALE;

    var info = localeInfo(locale);
    var pattern = datePattern(format, info);
    var parts = [];
    var lastIndex = dateFormatRegExp.lastIndex = 0;
    var match = dateFormatRegExp.exec(pattern);

    while (match) {
        var value = match[0];

        if (lastIndex < match.index) {
            addLiteral(parts, pattern.substring(lastIndex, match.index));
        }

        if (value.startsWith('"') || value.startsWith("'")) {
            addLiteral(parts, value);
        } else {
            var specifier = value[0];
            var type = DATE_FIELD_MAP[specifier];
            var part = {
                type: type,
                pattern: value
            };

            if (type === 'hour') {
                part.hour12 = isHour12(value);
            }

            var names = NAME_TYPES[type];

            if (names) {
                var minLength = isNumber(names.minLength) ? names.minLength : names.minLength[specifier];
                var patternLength = value.length;

                if (patternLength >= minLength) {
                    part.names = {
                        type: names.type,
                        nameType: dateNameType(patternLength),
                        standAlone: names.standAlone === specifier
                    };
                }
            }

            parts.push(part);
        }

        lastIndex = dateFormatRegExp.lastIndex;
        match = dateFormatRegExp.exec(pattern);
    }

    if (lastIndex < pattern.length) {
        addLiteral(parts, pattern.substring(lastIndex));
    }

    return parts;
}

var formatRegExp$2 = /\{(\d+)(:[^}]+)?\}/g;

function toString(value, format, locale) {
    if (format) {
        if (isDate(value)) {
            return formatDate(value, format, locale);
        } else if (isNumber(value)) {
            return formatNumber(value, format, locale);
        }
    }

    return value !== undefined && value !== null ? value : EMPTY;
}

function format(format, values, locale) {
    return format.replace(formatRegExp$2, function(match, index, placeholderFormat) {
        var value = values[parseInt(index, 10)];

        return toString(value, placeholderFormat ? placeholderFormat.substring(1) : EMPTY, locale);
    });
}

exports.formatNumber = formatNumber;
exports.parseNumber = parseNumber;
exports.formatDate = formatDate;
exports.parseDate = parseDate;
exports.splitDateFormat = splitDateFormat;
exports.load = load;
exports.setData = setData;
exports.dateFieldName = dateFieldName;
exports.dateFormatNames = dateFormatNames;
exports.cldr = cldr;
exports.localeInfo = localeInfo;
exports.currencyDisplays = currencyDisplays;
exports.currencyDisplay = currencyDisplay;
exports.currencyFractionOptions = currencyFractionOptions;
exports.territoryCurrencyCode = territoryCurrencyCode;
exports.localeCurrency = localeCurrency;
exports.firstDay = firstDay;
exports.weekendRange = weekendRange;
exports.numberSymbols = numberSymbols;
exports.toString = toString;
exports.format = format;
exports.errors = errors;
exports.IntlError = IntlError;
exports.toIntlErrors = toIntlErrors;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvY2xkci9kZWZhdWx0LWRhdGEuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2NvbW1vbi9pcy1zdHJpbmcuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2Vycm9yLWRldGFpbHMuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2Vycm9ycy5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvY2xkci9pbmZvLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jb21tb24vY29uc3RhbnRzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jbGRyL2xvYWQtbnVtYmVycy5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvY2xkci9sb2FkLWRhdGVzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jbGRyL3RlcnJpdG9yeS5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvY2xkci9sb2FkLXVuaXRzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jbGRyL2xvYWQuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2NsZHIvc2V0LWRhdGEuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2NsZHIvZGF0ZS1maWVsZC1uYW1lLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jbGRyL2RhdGUtZm9ybWF0LW5hbWVzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jbGRyL3BhcnNlLXJhbmdlLWRhdGUuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2NsZHIvY3VycmVuY3kuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2NsZHIvY29uc3RhbnRzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jbGRyL2ZpcnN0LWRheS5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvY2xkci93ZWVrZW5kLXJhbmdlLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jbGRyL251bWJlci1zeW1ib2xzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jb21tb24vaXMtbmVnYXRpdmUtemVyby5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvbnVtYmVycy9mb3JtYXQtY3VycmVuY3ktc3ltYm9sLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9udW1iZXJzL2dyb3VwLWludGVnZXIuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL251bWJlcnMvaXMtY3VycmVuY3ktc3R5bGUuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2NvbW1vbi9wYWQuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2NvbW1vbi9yb3VuZC5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvbnVtYmVycy9zdGFuZGFyZC1udW1iZXItZm9ybWF0LmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9udW1iZXJzL3V0aWxzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9udW1iZXJzL2N1c3RvbS1udW1iZXItZm9ybWF0LmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9udW1iZXJzL2Zvcm1hdC1vcHRpb25zLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9udW1iZXJzL2Zvcm1hdC1udW1iZXIuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2NvbW1vbi9pcy1udW1iZXIuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL251bWJlcnMvcGFyc2UtbnVtYmVyLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jb21tb24vZm9ybWF0LXN0cmluZy5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvZGF0ZXMvZGF0ZS1wYXR0ZXJuLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9kYXRlcy9kYXRlLW5hbWUtdHlwZS5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvZGF0ZXMvZm9ybWF0LW5hbWVzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9jb21tb24vaXMtZGF0ZS5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvZGF0ZXMvY29uc3RhbnRzLmpzIiwiL2hvbWUvcnVubmVyL3dvcmsva2VuZG8taW50bC9rZW5kby1pbnRsL3NyYy9kYXRlcy9mb3JtYXQtZGF0ZS5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvZGF0ZXMvdGltZS11dGlscy5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvZGF0ZXMvcGFyc2UtZGF0ZS5qcyIsIi9ob21lL3J1bm5lci93b3JrL2tlbmRvLWludGwva2VuZG8taW50bC9zcmMvZGF0ZXMvc3BsaXQtZGF0ZS1mb3JtYXQuanMiLCIvaG9tZS9ydW5uZXIvd29yay9rZW5kby1pbnRsL2tlbmRvLWludGwvc3JjL2Zvcm1hdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0RGF0YSA9IHtcbiAgICBlbjoge1xuICAgICAgICBuYW1lOiBcImVuXCIsXG4gICAgICAgIGlkZW50aXR5OiB7XG4gICAgICAgICAgICB2ZXJzaW9uOiB7XG4gICAgICAgICAgICAgICAgX3VuaWNvZGVWZXJzaW9uOiBcIjE0LjAuMFwiLFxuICAgICAgICAgICAgICAgIF9jbGRyVmVyc2lvbjogXCI0MVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZW5cIlxuICAgICAgICB9LFxuICAgICAgICB0ZXJyaXRvcnk6IFwiVVNcIixcbiAgICAgICAgbnVtYmVyczoge1xuICAgICAgICAgICAgc3ltYm9sczoge1xuICAgICAgICAgICAgICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgICAgICAgICAgICAgIGdyb3VwOiBcIixcIixcbiAgICAgICAgICAgICAgICBsaXN0OiBcIjtcIixcbiAgICAgICAgICAgICAgICBwZXJjZW50U2lnbjogXCIlXCIsXG4gICAgICAgICAgICAgICAgcGx1c1NpZ246IFwiK1wiLFxuICAgICAgICAgICAgICAgIG1pbnVzU2lnbjogXCItXCIsXG4gICAgICAgICAgICAgICAgZXhwb25lbnRpYWw6IFwiRVwiLFxuICAgICAgICAgICAgICAgIHN1cGVyc2NyaXB0aW5nRXhwb25lbnQ6IFwiw5dcIixcbiAgICAgICAgICAgICAgICBwZXJNaWxsZTogXCLigLBcIixcbiAgICAgICAgICAgICAgICBpbmZpbml0eTogXCLiiJ5cIixcbiAgICAgICAgICAgICAgICBuYW46IFwiTmFOXCIsXG4gICAgICAgICAgICAgICAgdGltZVNlcGFyYXRvcjogXCI6XCIsXG4gICAgICAgICAgICAgICAgYXBwcm94aW1hdGVseVNpZ246IFwiflwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVjaW1hbDoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm5zOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiblwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBncm91cFNpemU6IFtcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2llbnRpZmljOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybnM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJuRW5cIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ3JvdXBTaXplOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuczogW1xuICAgICAgICAgICAgICAgICAgICBcIm4lXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdyb3VwU2l6ZTogW1xuICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybnM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIkblwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBncm91cFNpemU6IFtcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ1bml0UGF0dGVybi1jb3VudC1vbmVcIjogXCJuICRcIixcbiAgICAgICAgICAgICAgICBcInVuaXRQYXR0ZXJuLWNvdW50LW90aGVyXCI6IFwibiAkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXJyZW5jaWVzOiB7XG4gICAgICAgICAgICAgICAgQkdOOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkJ1bGdhcmlhbiBMZXZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5TmFtZS1jb3VudC1vbmVcIjogXCJCdWxnYXJpYW4gbGV2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheU5hbWUtY291bnQtb3RoZXJcIjogXCJCdWxnYXJpYW4gbGV2YVwiLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IFwiQkdOXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIEVVUjoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJFdXJvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheU5hbWUtY291bnQtb25lXCI6IFwiZXVyb1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlOYW1lLWNvdW50LW90aGVyXCI6IFwiZXVyb3NcIixcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBcIuKCrFwiLFxuICAgICAgICAgICAgICAgICAgICBcInN5bWJvbC1hbHQtbmFycm93XCI6IFwi4oKsXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFVTRDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJVUyBEb2xsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5TmFtZS1jb3VudC1vbmVcIjogXCJVUyBkb2xsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5TmFtZS1jb3VudC1vdGhlclwiOiBcIlVTIGRvbGxhcnNcIixcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBcIiRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2wtYWx0LW5hcnJvd1wiOiBcIiRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2NhbGVDdXJyZW5jeTogXCJVU0RcIixcbiAgICAgICAgICAgIGFjY291bnRpbmc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuczogW1xuICAgICAgICAgICAgICAgICAgICBcIiRuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiKCRuKVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBncm91cFNpemU6IFtcbiAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIGdtdEZvcm1hdDogXCJHTVR7MH1cIixcbiAgICAgICAgICAgIGdtdFplcm9Gb3JtYXQ6IFwiR01UXCIsXG4gICAgICAgICAgICBwYXR0ZXJuczoge1xuICAgICAgICAgICAgICAgIGQ6IFwiTS9kL3lcIixcbiAgICAgICAgICAgICAgICBEOiBcIkVFRUUsIE1NTU0gZCwgeVwiLFxuICAgICAgICAgICAgICAgIG06IFwiTU1NIGRcIixcbiAgICAgICAgICAgICAgICBNOiBcIk1NTU0gZFwiLFxuICAgICAgICAgICAgICAgIHk6IFwiTU1NIHlcIixcbiAgICAgICAgICAgICAgICBZOiBcIk1NTU0geVwiLFxuICAgICAgICAgICAgICAgIEY6IFwiRUVFRSwgTU1NTSBkLCB5IGg6bW06c3MgYVwiLFxuICAgICAgICAgICAgICAgIGc6IFwiTS9kL3kgaDptbSBhXCIsXG4gICAgICAgICAgICAgICAgRzogXCJNL2QveSBoOm1tOnNzIGFcIixcbiAgICAgICAgICAgICAgICB0OiBcImg6bW0gYVwiLFxuICAgICAgICAgICAgICAgIFQ6IFwiaDptbTpzcyBhXCIsXG4gICAgICAgICAgICAgICAgczogXCJ5eXl5Jy0nTU0nLSdkZCdUJ0hIJzonbW0nOidzc1wiLFxuICAgICAgICAgICAgICAgIHU6IFwieXl5eSctJ01NJy0nZGQgSEgnOidtbSc6J3NzJ1onXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRlVGltZUZvcm1hdHM6IHtcbiAgICAgICAgICAgICAgICBmdWxsOiBcInsxfSAnYXQnIHswfVwiLFxuICAgICAgICAgICAgICAgIGxvbmc6IFwiezF9ICdhdCcgezB9XCIsXG4gICAgICAgICAgICAgICAgbWVkaXVtOiBcInsxfSwgezB9XCIsXG4gICAgICAgICAgICAgICAgc2hvcnQ6IFwiezF9LCB7MH1cIixcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVGb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgICAgIEJoOiBcImggQlwiLFxuICAgICAgICAgICAgICAgICAgICBCaG06IFwiaDptbSBCXCIsXG4gICAgICAgICAgICAgICAgICAgIEJobXM6IFwiaDptbTpzcyBCXCIsXG4gICAgICAgICAgICAgICAgICAgIGQ6IFwiZFwiLFxuICAgICAgICAgICAgICAgICAgICBFOiBcImNjY1wiLFxuICAgICAgICAgICAgICAgICAgICBFQmhtOiBcIkUgaDptbSBCXCIsXG4gICAgICAgICAgICAgICAgICAgIEVCaG1zOiBcIkUgaDptbTpzcyBCXCIsXG4gICAgICAgICAgICAgICAgICAgIEVkOiBcImQgRVwiLFxuICAgICAgICAgICAgICAgICAgICBFaG06IFwiRSBoOm1tIGFcIixcbiAgICAgICAgICAgICAgICAgICAgRUhtOiBcIkUgSEg6bW1cIixcbiAgICAgICAgICAgICAgICAgICAgRWhtczogXCJFIGg6bW06c3MgYVwiLFxuICAgICAgICAgICAgICAgICAgICBFSG1zOiBcIkUgSEg6bW06c3NcIixcbiAgICAgICAgICAgICAgICAgICAgR3k6IFwieSBHXCIsXG4gICAgICAgICAgICAgICAgICAgIEd5TWQ6IFwiTS9kL3kgR0dHR0dcIixcbiAgICAgICAgICAgICAgICAgICAgR3lNTU06IFwiTU1NIHkgR1wiLFxuICAgICAgICAgICAgICAgICAgICBHeU1NTWQ6IFwiTU1NIGQsIHkgR1wiLFxuICAgICAgICAgICAgICAgICAgICBHeU1NTUVkOiBcIkUsIE1NTSBkLCB5IEdcIixcbiAgICAgICAgICAgICAgICAgICAgaDogXCJoIGFcIixcbiAgICAgICAgICAgICAgICAgICAgSDogXCJISFwiLFxuICAgICAgICAgICAgICAgICAgICBobTogXCJoOm1tIGFcIixcbiAgICAgICAgICAgICAgICAgICAgSG06IFwiSEg6bW1cIixcbiAgICAgICAgICAgICAgICAgICAgaG1zOiBcImg6bW06c3MgYVwiLFxuICAgICAgICAgICAgICAgICAgICBIbXM6IFwiSEg6bW06c3NcIixcbiAgICAgICAgICAgICAgICAgICAgaG1zdjogXCJoOm1tOnNzIGEgdlwiLFxuICAgICAgICAgICAgICAgICAgICBIbXN2OiBcIkhIOm1tOnNzIHZcIixcbiAgICAgICAgICAgICAgICAgICAgaG12OiBcImg6bW0gYSB2XCIsXG4gICAgICAgICAgICAgICAgICAgIEhtdjogXCJISDptbSB2XCIsXG4gICAgICAgICAgICAgICAgICAgIE06IFwiTFwiLFxuICAgICAgICAgICAgICAgICAgICBNZDogXCJNL2RcIixcbiAgICAgICAgICAgICAgICAgICAgTUVkOiBcIkUsIE0vZFwiLFxuICAgICAgICAgICAgICAgICAgICBNTU06IFwiTExMXCIsXG4gICAgICAgICAgICAgICAgICAgIE1NTWQ6IFwiTU1NIGRcIixcbiAgICAgICAgICAgICAgICAgICAgTU1NRWQ6IFwiRSwgTU1NIGRcIixcbiAgICAgICAgICAgICAgICAgICAgTU1NTWQ6IFwiTU1NTSBkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTU1NTVctY291bnQtb25lXCI6IFwiJ3dlZWsnIFcgJ29mJyBNTU1NXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiTU1NTVctY291bnQtb3RoZXJcIjogXCInd2VlaycgVyAnb2YnIE1NTU1cIixcbiAgICAgICAgICAgICAgICAgICAgbXM6IFwibW06c3NcIixcbiAgICAgICAgICAgICAgICAgICAgeTogXCJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHlNOiBcIk0veVwiLFxuICAgICAgICAgICAgICAgICAgICB5TWQ6IFwiTS9kL3lcIixcbiAgICAgICAgICAgICAgICAgICAgeU1FZDogXCJFLCBNL2QveVwiLFxuICAgICAgICAgICAgICAgICAgICB5TU1NOiBcIk1NTSB5XCIsXG4gICAgICAgICAgICAgICAgICAgIHlNTU1kOiBcIk1NTSBkLCB5XCIsXG4gICAgICAgICAgICAgICAgICAgIHlNTU1FZDogXCJFLCBNTU0gZCwgeVwiLFxuICAgICAgICAgICAgICAgICAgICB5TU1NTTogXCJNTU1NIHlcIixcbiAgICAgICAgICAgICAgICAgICAgeVFRUTogXCJRUVEgeVwiLFxuICAgICAgICAgICAgICAgICAgICB5UVFRUTogXCJRUVFRIHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5dy1jb3VudC1vbmVcIjogXCInd2VlaycgdyAnb2YnIFlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ5dy1jb3VudC1vdGhlclwiOiBcIid3ZWVrJyB3ICdvZicgWVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWVGb3JtYXRzOiB7XG4gICAgICAgICAgICAgICAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICAgICAgICAgICAgICAgIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgICAgICAgICAgICAgICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gICAgICAgICAgICAgICAgc2hvcnQ6IFwiaDptbSBhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0czoge1xuICAgICAgICAgICAgICAgIGZ1bGw6IFwiRUVFRSwgTU1NTSBkLCB5XCIsXG4gICAgICAgICAgICAgICAgbG9uZzogXCJNTU1NIGQsIHlcIixcbiAgICAgICAgICAgICAgICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgICAgICAgICAgICAgICBzaG9ydDogXCJNL2QveXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheXM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRodVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F0XCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTYVwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F0dXJkYXlcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN0YW5kLWFsb25lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRodVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F0XCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTYVwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F0dXJkYXlcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vbnRoczoge1xuICAgICAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlZDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1hclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkp1blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNlcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTm92XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRlY1wiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRFwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEZWNlbWJlclwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic3RhbmQtYWxvbmVcIjoge1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlZDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1hclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkp1blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNlcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTm92XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRlY1wiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRFwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEZWNlbWJlclwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhcnRlcnM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTRcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNFwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMXN0IHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMm5kIHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiM3JkIHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNHRoIHF1YXJ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN0YW5kLWFsb25lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUTRcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNFwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMXN0IHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMm5kIHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiM3JkIHF1YXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNHRoIHF1YXJ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRheVBlcmlvZHM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbTogXCJBTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbS1hbHQtdmFyaWFudFwiOiBcImFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBub29uOiBcIm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBtOiBcIlBNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBtLWFsdC12YXJpYW50XCI6IFwicG1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcm5pbmcxOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcm5vb24xOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pbmcxOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWdodDE6IFwiYXQgbmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbTogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtLWFsdC12YXJpYW50XCI6IFwiYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vb246IFwiblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG06IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbS1hbHQtdmFyaWFudFwiOiBcInBtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JuaW5nMTogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJub29uMTogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVuaW5nMTogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmlnaHQxOiBcImF0IG5pZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtOiBcIkFNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtLWFsdC12YXJpYW50XCI6IFwiYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vb246IFwibm9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG06IFwiUE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG0tYWx0LXZhcmlhbnRcIjogXCJwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ybmluZzE6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVybm9vbjE6IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbmluZzE6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pZ2h0MTogXCJhdCBuaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic3RhbmQtYWxvbmVcIjoge1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtOiBcIkFNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtLWFsdC12YXJpYW50XCI6IFwiYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vb246IFwibm9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG06IFwiUE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG0tYWx0LXZhcmlhbnRcIjogXCJwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ybmluZzE6IFwibW9ybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJub29uMTogXCJhZnRlcm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pbmcxOiBcImV2ZW5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pZ2h0MTogXCJuaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtOiBcIkFNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtLWFsdC12YXJpYW50XCI6IFwiYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vb246IFwibm9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG06IFwiUE1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG0tYWx0LXZhcmlhbnRcIjogXCJwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ybmluZzE6IFwibW9ybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJub29uMTogXCJhZnRlcm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pbmcxOiBcImV2ZW5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pZ2h0MTogXCJuaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbTogXCJBTVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbS1hbHQtdmFyaWFudFwiOiBcImFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBub29uOiBcIm5vb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBtOiBcIlBNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBtLWFsdC12YXJpYW50XCI6IFwicG1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcm5pbmcxOiBcIm1vcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVybm9vbjE6IFwiYWZ0ZXJub29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVuaW5nMTogXCJldmVuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWdodDE6IFwibmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyYXM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IFwiQmVmb3JlIENocmlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IFwiQW5ubyBEb21pbmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMC1hbHQtdmFyaWFudFwiOiBcIkJlZm9yZSBDb21tb24gRXJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEtYWx0LXZhcmlhbnRcIjogXCJDb21tb24gRXJhXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiBcIkJDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjFcIjogXCJBRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIwLWFsdC12YXJpYW50XCI6IFwiQkNFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEtYWx0LXZhcmlhbnRcIjogXCJDRVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IFwiQlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IFwiQVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIwLWFsdC12YXJpYW50XCI6IFwiQkNFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEtYWx0LXZhcmlhbnRcIjogXCJDRVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0ZUZpZWxkczoge1xuICAgICAgICAgICAgICAgIGVyYToge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcImVyYVwiLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogXCJlcmFcIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcImVyYVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5ZWFyOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwieWVhclwiLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogXCJ5ci5cIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcInlyLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWFydGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwicXVhcnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogXCJxdHIuXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJxdHIuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vbnRoOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwibW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvcnQ6IFwibW8uXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJtby5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcIndlZWtcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvcnQ6IFwid2suXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJ3ay5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2Vla09mTW9udGg6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkZTogXCJ3ZWVrIG9mIG1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0OiBcIndrLiBvZiBtby5cIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcIndrLiBvZiBtby5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0OiBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IFwiZGF5XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRheU9mWWVhcjoge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcImRheSBvZiB5ZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0OiBcImRheSBvZiB5ci5cIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcImRheSBvZiB5ci5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2Vla2RheToge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcImRheSBvZiB0aGUgd2Vla1wiLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogXCJkYXkgb2Ygd2suXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJkYXkgb2Ygd2suXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdlZWtkYXlPZk1vbnRoOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwid2Vla2RheSBvZiB0aGUgbW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvcnQ6IFwid2tkYXkuIG9mIG1vLlwiLFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IFwid2tkYXkuIG9mIG1vLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXlwZXJpb2Q6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcnQ6IFwiQU0vUE1cIixcbiAgICAgICAgICAgICAgICAgICAgd2lkZTogXCJBTS9QTVwiLFxuICAgICAgICAgICAgICAgICAgICBuYXJyb3c6IFwiQU0vUE1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaG91cjoge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcImhvdXJcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvcnQ6IFwiaHIuXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJoci5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWludXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwibWludXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0OiBcIm1pbi5cIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcIm1pbi5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2Vjb25kOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGU6IFwic2Vjb25kXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0OiBcInNlYy5cIixcbiAgICAgICAgICAgICAgICAgICAgbmFycm93OiBcInNlYy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgem9uZToge1xuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcInRpbWUgem9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogXCJ6b25lXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJ6b25lXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1pbGxpc2Vjb25kOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hcnJvdzogXCJtc1wiLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydDogXCJtc1wiLFxuICAgICAgICAgICAgICAgICAgICB3aWRlOiBcIm1pbGxpc2Vjb25kXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN1cHBsZW1lbnRhbDoge1xuICAgICAgICBsaWtlbHlTdWJ0YWdzOiB7XG4gICAgICAgICAgICBlbjogXCJlbi1MYXRuLVVTXCJcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3lEYXRhOiB7XG4gICAgICAgICAgICByZWdpb246IHtcbiAgICAgICAgICAgICAgICBVUzogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVU0Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZnJvbTogXCIxNzkyLTAxLTAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2Vla0RhdGE6IHtcbiAgICAgICAgICAgIGZpcnN0RGF5OiB7XG4gICAgICAgICAgICAgICAgVVM6IFwic3VuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3ZWVrZW5kU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICBcIjAwMVwiOiBcInNhdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2Vla2VuZEVuZDoge1xuICAgICAgICAgICAgICAgIFwiMDAxXCI6IFwic3VuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0RGF0YTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59IiwiLy9UaGUgZXJyb3IgaXMgcmVwcmVzZW50ZWQgYnkgdW5pcXVlIG5hbWUgYW5kIGNvcnJlc3BvbmRpbmcgbWVzc2FnZVxuLy9UaGUgbWVzc2FnZSBjYW4gY29udGFpbiBwbGFjZWhvbGRlcnMgd2l0aCBpbmRleCwgZS5nLiB7MH0sIHsxfVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgXCJOb0xvY2FsZVwiOiBcIk1pc3NpbmcgbG9jYWxlIGluZm8gZm9yICd7MH0nXCIsXG4gICAgXCJOb0N1cnJlbmN5XCI6IFwiQ2Fubm90IGRldGVybWluZSBjdXJyZW5jeSBpbmZvcm1hdGlvbi4gUGxlYXNlIGxvYWQgdGhlIGxvY2FsZSBjdXJyZW5jaWVzIGRhdGEuXCIsXG4gICAgXCJOb1N1cHBsZW1lbnRhbEN1cnJlbmN5XCI6IFwiQ2Fubm90IGRldGVybWluZSBjdXJyZW5jeS4gUGxlYXNlIGxvYWQgdGhlIHN1cHBsZW1lbnRhbCBjdXJyZW5jeURhdGEuXCIsXG4gICAgXCJOb0N1cnJlbmN5UmVnaW9uXCI6IFwiTm8gY3VycmVuY3kgZGF0YSBmb3IgcmVnaW9uICd7MH0nXCIsXG4gICAgXCJOb0N1cnJlbmN5RGlzcGxheVwiOiBcIkNhbm5vdCBkZXRlcm1pbmUgY3VycmVuY3kgZGlzcGxheSBpbmZvcm1hdGlvbi4gUGxlYXNlIGxvYWQgdGhlIGxvY2FsZSBjdXJyZW5jaWVzIGRhdGEuIFRoZSBkZWZhdWx0IGN1bHR1cmUgZG9lcyBub3QgaW5jbHVkZSB0aGUgYWxsIGN1cnJlbmNpZXMgZGF0YS5cIixcbiAgICBcIk5vR01USW5mb1wiOiBcIkNhbm5vdCBkZXRlcm1pbmUgbG9jYWxlIEdNVCBmb3JtYXQuIFBsZWFzZSBsb2FkIHRoZSBsb2NhbGUgdGltZVpvbmVOYW1lcyBkYXRhLlwiLFxuICAgIFwiTm9XZWVrRGF0YVwiOiBcIkNhbm5vdCBkZXRlcm1pbmUgbG9jYWxlIGZpcnN0IGRheSBvZiB3ZWVrLiBQbGVhc2UgbG9hZCB0aGUgc3VwcGxlbWVudGFsIHdlZWtEYXRhLlwiLFxuICAgIFwiTm9GaXJzdERheVwiOiBcIkNhbm5vdCBkZXRlcm1pbmUgbG9jYWxlIGZpcnN0IGRheSBvZiB3ZWVrLiBQbGVhc2UgbG9hZCB0aGUgc3VwcGxlbWVudGFsIHdlZWtEYXRhLiBUaGUgZGVmYXVsdCBjdWx0dXJlIGluY2x1ZGVzIG9ubHkgdGhlICdlbi1VUycgZmlyc3QgZGF5IGluZm8uXCIsXG4gICAgXCJOb1ZhbGlkQ3VycmVuY3lcIjogXCJDYW5ub3QgZGV0ZXJtaW5lIGEgZGVmYXVsdCBjdXJyZW5jeSBmb3IgdGhlIHswfSBsb2NhbGUuIFBsZWFzZSBzcGVjaWZ5IGV4cGxpY2l0bHkgdGhlIGN1cnJlbmN5IHdpdGggdGhlIGZvcm1hdCBvcHRpb25zLlwiLFxuICAgIFwiTm9EYXRlRmllbGROYW1lc1wiOiBcIkNhbm5vdCBkZXRlcm1pbmUgdGhlIGxvY2FsZSBkYXRlIGZpZWxkIG5hbWVzLiBQbGVhc2UgbG9hZCB0aGUgbG9jYWxlIGRhdGVGaWVsZHMgZGF0YS5cIlxufTtcbiIsImltcG9ydCBlcnJvckRldGFpbHMgZnJvbSAnLi9lcnJvci1kZXRhaWxzJztcblxuY29uc3QgZm9ybWF0UmVnRXhwID0gL1xceyhcXGQrKX0/XFx9L2c7XG5cbmNsYXNzIEludGxFcnJvciB7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBtZXNzYWdlIH0pIHtcbiAgICAgICAgaWYgKCFuYW1lIHx8ICFtZXNzYWdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ7IG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nIH0gb2JqZWN0IGlzIHJlcXVpcmVkIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgZm9ybWF0TWVzc2FnZSguLi52YWx1ZXMpIHtcbiAgICAgICAgY29uc3QgZmxhdHRlblZhbHVlcyA9IGZsYXR0ZW4odmFsdWVzKTtcblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRNZXNzYWdlID0gdGhpcy5tZXNzYWdlLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbihtYXRjaCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGF0dGVuVmFsdWVzW3BhcnNlSW50KGluZGV4LCAxMCldO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfTogJHtmb3JtYXR0ZWRNZXNzYWdlfWA7XG4gICAgfVxuXG4gICAgZXJyb3IoLi4udmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IodGhpcy5mb3JtYXRNZXNzYWdlKHZhbHVlcykpO1xuICAgIH1cbn1cblxuY29uc3QgZmxhdHRlbiA9IGZ1bmN0aW9uKGFycikge1xuICAgIHJldHVybiBhcnIucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChiKSwgW10pO1xufTtcblxuY29uc3QgdG9JbnRsRXJyb3JzID0gZnVuY3Rpb24oZXJyb3JzKSB7XG4gICAgY29uc3QgcHJlZGljYXRlID0gZnVuY3Rpb24ocHJldiwgbmFtZSkge1xuICAgICAgICBwcmV2W25hbWVdID0gbmV3IEludGxFcnJvcih7IG5hbWUsIG1lc3NhZ2U6IGVycm9yc1tuYW1lXSB9KTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLnJlZHVjZShwcmVkaWNhdGUsIHt9KTtcbn07XG5cbmNvbnN0IGVycm9ycyA9IHRvSW50bEVycm9ycyhlcnJvckRldGFpbHMpO1xuXG5leHBvcnQge1xuICAgIGVycm9ycyxcbiAgICBJbnRsRXJyb3IsXG4gICAgdG9JbnRsRXJyb3JzXG59O1xuIiwiaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdC1kYXRhJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuLi9jb21tb24vaXMtc3RyaW5nJztcbmltcG9ydCB7IGVycm9ycyB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbmZ1bmN0aW9uIGF2YWlsYWJsZUxvY2FsZUluZm8oZnVsbE5hbWUsIHN1ZmZpeGVzKSB7XG4gICAgY29uc3QgcGFydHMgPSBmdWxsTmFtZS5zcGxpdChcIi1cIik7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBwYXJ0c1swXTtcbiAgICBjb25zdCBzY3JpcHQgPSBwYXJ0c1sxXTtcbiAgICBjb25zdCB0ZXJyaXRvcnkgPSBwYXJ0c1syXTtcblxuICAgIHJldHVybiBjbGRyW2Z1bGxOYW1lXSB8fCAoc3VmZml4ZXMuaW5kZXhPZih0ZXJyaXRvcnkpICE9PSAtMSAmJiBjbGRyW2xhbmd1YWdlICsgXCItXCIgKyB0ZXJyaXRvcnldKSB8fCAoc3VmZml4ZXMuaW5kZXhPZihzY3JpcHQpICE9PSAtMSAmJiBjbGRyW2xhbmd1YWdlICsgXCItXCIgKyBzY3JpcHRdKSB8fCBjbGRyW2xhbmd1YWdlXTtcbn1cblxuZnVuY3Rpb24gbG9jYWxlRnVsbE5hbWUobGFuZ3VhZ2UsIHN1ZmZpeGVzKSB7XG4gICAgY29uc3QgbGlrZWx5U3VidGFncyA9IGNsZHIuc3VwcGxlbWVudGFsLmxpa2VseVN1YnRhZ3M7XG5cbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBzdWZmaXhlcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGxldCBuYW1lID0gbGlrZWx5U3VidGFnc1tsYW5ndWFnZSArIFwiLVwiICsgc3VmZml4ZXNbaWR4IF1dO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobGlrZWx5U3VidGFnc1tsYW5ndWFnZV0pIHtcbiAgICAgICAgcmV0dXJuIGxpa2VseVN1YnRhZ3NbbGFuZ3VhZ2VdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNsZHIgPSBkZWZhdWx0RGF0YTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZUluZm8obG9jYWxlKSB7XG4gICAgbGV0IGluZm87XG4gICAgaWYgKGlzU3RyaW5nKGxvY2FsZSkpIHtcbiAgICAgICAgaW5mbyA9IGxvY2FsZUluZm8obG9jYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvID0gbG9jYWxlO1xuICAgIH1cbiAgICByZXR1cm4gaW5mbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUluZm8obG9jYWxlKSB7XG4gICAgaWYgKGNsZHJbbG9jYWxlXSkge1xuICAgICAgICByZXR1cm4gY2xkcltsb2NhbGVdO1xuICAgIH1cblxuICAgIGNvbnN0IGxpa2VseVN1YnRhZ3MgPSBjbGRyLnN1cHBsZW1lbnRhbC5saWtlbHlTdWJ0YWdzO1xuICAgIGlmIChsaWtlbHlTdWJ0YWdzKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbG9jYWxlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBwYXJ0c1swXTtcbiAgICAgICAgY29uc3Qgc3VmZml4ZXMgPSBwYXJ0cy5zbGljZSgxKTtcbiAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBsb2NhbGVGdWxsTmFtZShsYW5ndWFnZSwgc3VmZml4ZXMpO1xuICAgICAgICBjb25zdCBpbmZvID0gZnVsbE5hbWUgPyBhdmFpbGFibGVMb2NhbGVJbmZvKGZ1bGxOYW1lLCBzdWZmaXhlcykgOiBudWxsO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcnMuTm9Mb2NhbGUuZXJyb3IobG9jYWxlKTtcbn1cbiIsImV4cG9ydCBjb25zdCBERUNJTUFMID0gXCJkZWNpbWFsXCI7XG5leHBvcnQgY29uc3QgQ1VSUkVOQ1kgPSBcImN1cnJlbmN5XCI7XG5leHBvcnQgY29uc3QgQUNDT1VOVElORyA9IFwiYWNjb3VudGluZ1wiO1xuZXhwb3J0IGNvbnN0IFBFUkNFTlQgPSBcInBlcmNlbnRcIjtcbmV4cG9ydCBjb25zdCBTQ0lFTlRJRklDID0gXCJzY2llbnRpZmljXCI7XG5cbmV4cG9ydCBjb25zdCBDVVJSRU5DWV9QTEFDRUhPTERFUiA9IFwiJFwiO1xuZXhwb3J0IGNvbnN0IFBFUkNFTlRfUExBQ0VIT0xERVIgPSBcIiVcIjtcbmV4cG9ydCBjb25zdCBOVU1CRVJfUExBQ0VIT0xERVIgPSBcIm5cIjtcblxuZXhwb3J0IGNvbnN0IExJU1RfU0VQQVJBVE9SID0gXCI7XCI7XG5leHBvcnQgY29uc3QgR1JPVVBfU0VQQVJBVE9SID0gXCIsXCI7XG5cbmV4cG9ydCBjb25zdCBQT0lOVCA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZID0gXCJcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTE9DQUxFID0gXCJlblwiO1xuXG4iLCJpbXBvcnQgeyBjbGRyIH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IENVUlJFTkNZLCBBQ0NPVU5USU5HLCBERUNJTUFMLCBDVVJSRU5DWV9QTEFDRUhPTERFUiwgTlVNQkVSX1BMQUNFSE9MREVSLCBMSVNUX1NFUEFSQVRPUiwgR1JPVVBfU0VQQVJBVE9SLCBQT0lOVCB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5jb25zdCBMQVRJTl9OVU1CRVJfRk9STUFUUyA9IFwiRm9ybWF0cy1udW1iZXJTeXN0ZW0tbGF0blwiO1xuY29uc3QgTEFUSU5fTlVNQkVSX1NZTUJPTFMgPSBcInN5bWJvbHMtbnVtYmVyU3lzdGVtLWxhdG5cIjtcblxuY29uc3QgcGF0dGVyblJlZ0V4cCA9IC8oWyMsMC5dKykvZztcbmNvbnN0IGNsZHJDdXJyZW5jeVJlZ0V4cCA9IC/CpC9nO1xuXG5mdW5jdGlvbiBnZXRQYXR0ZXJucyhwYXR0ZXJuKSB7XG4gICAgcGF0dGVyblJlZ0V4cC5sYXN0SW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShjbGRyQ3VycmVuY3lSZWdFeHAsIENVUlJFTkNZX1BMQUNFSE9MREVSKS5yZXBsYWNlKHBhdHRlcm5SZWdFeHAsIE5VTUJFUl9QTEFDRUhPTERFUikuc3BsaXQoTElTVF9TRVBBUkFUT1IpO1xufVxuXG5mdW5jdGlvbiBnZXRHcm91cFNpemUocGF0dGVybikge1xuICAgIHBhdHRlcm5SZWdFeHAubGFzdEluZGV4ID0gMDtcblxuICAgIGNvbnN0IG51bWJlclBhdHRlcm5zID0gcGF0dGVyblJlZ0V4cC5leGVjKHBhdHRlcm4uc3BsaXQoTElTVF9TRVBBUkFUT1IpWzBdKVswXS5zcGxpdChQT0lOVCk7XG4gICAgY29uc3QgaW50ZWdlciA9IG51bWJlclBhdHRlcm5zWzBdO1xuXG4gICAgY29uc3QgZ3JvdXBTaXplID0gaW50ZWdlci5zcGxpdChHUk9VUF9TRVBBUkFUT1IpLnNsaWNlKDEpLm1hcChmdW5jdGlvbihncm91cCkge1xuICAgICAgICByZXR1cm4gZ3JvdXAubGVuZ3RoO1xuICAgIH0pLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBncm91cFNpemU7XG59XG5cbmZ1bmN0aW9uIGxvYWRDdXJyZW5jeVVuaXRQYXR0ZXJucyhjdXJyZW5jeUluZm8sIGN1cnJlbmN5Rm9ybWF0cykge1xuICAgIGZvciAobGV0IGZpZWxkIGluIGN1cnJlbmN5Rm9ybWF0cykge1xuICAgICAgICBpZiAoZmllbGQuc3RhcnRzV2l0aChcInVuaXRQYXR0ZXJuXCIpKSB7XG4gICAgICAgICAgICBjdXJyZW5jeUluZm9bZmllbGRdID0gY3VycmVuY3lGb3JtYXRzW2ZpZWxkXS5yZXBsYWNlKFwiezB9XCIsIE5VTUJFUl9QTEFDRUhPTERFUikucmVwbGFjZShcInsxfVwiLCBDVVJSRU5DWV9QTEFDRUhPTERFUik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWROdW1iZXJzSW5mbyhsb2NhbGUsIGluZm8pIHtcbiAgICBjb25zdCBsb2NhbGVJbmZvID0gY2xkcltsb2NhbGVdO1xuICAgIGNvbnN0IG51bWJlcnMgPSBsb2NhbGVJbmZvLm51bWJlcnMgPSBsb2NhbGVJbmZvLm51bWJlcnMgfHwge307XG4gICAgbnVtYmVycy5zeW1ib2xzID0gbnVtYmVycy5zeW1ib2xzIHx8IHt9O1xuICAgIGZvciAobGV0IGZpZWxkIGluIGluZm8pIHtcbiAgICAgICAgaWYgKGZpZWxkID09PSBMQVRJTl9OVU1CRVJfU1lNQk9MUykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihudW1iZXJzLnN5bWJvbHMsIGluZm9bZmllbGRdKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5pbmNsdWRlcyhMQVRJTl9OVU1CRVJfRk9STUFUUykpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZmllbGQuc3Vic3RyKDAsIGZpZWxkLmluZGV4T2YoTEFUSU5fTlVNQkVSX0ZPUk1BVFMpKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBpbmZvW2ZpZWxkXS5zdGFuZGFyZDtcbiAgICAgICAgICAgIG51bWJlcnNbc3R5bGVdID0ge1xuICAgICAgICAgICAgICAgIHBhdHRlcm5zOiBnZXRQYXR0ZXJucyhwYXR0ZXJuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzdHlsZSA9PT0gQ1VSUkVOQ1kpIHtcbiAgICAgICAgICAgICAgICBudW1iZXJzW3N0eWxlXS5ncm91cFNpemUgPSBnZXRHcm91cFNpemUoKGluZm9bREVDSU1BTCArIExBVElOX05VTUJFUl9GT1JNQVRTXSB8fCBpbmZvW2ZpZWxkXSkuc3RhbmRhcmQpO1xuICAgICAgICAgICAgICAgIGxvYWRDdXJyZW5jeVVuaXRQYXR0ZXJucyhudW1iZXJzW3N0eWxlXSwgaW5mb1tmaWVsZF0pO1xuICAgICAgICAgICAgICAgIG51bWJlcnNbQUNDT1VOVElOR10gPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5zOiBnZXRQYXR0ZXJucyhpbmZvW2ZpZWxkXVtBQ0NPVU5USU5HXSksXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwU2l6ZTogbnVtYmVyc1tzdHlsZV0uZ3JvdXBTaXplXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyc1tzdHlsZV0uZ3JvdXBTaXplID0gZ2V0R3JvdXBTaXplKHBhdHRlcm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSBcImN1cnJlbmNpZXNcIikge1xuICAgICAgICAgICAgbnVtYmVycy5jdXJyZW5jaWVzID0gaW5mb1tmaWVsZF07XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgY2xkciB9IGZyb20gJy4vaW5mbyc7XG5cbmNvbnN0IHByZWRlZmluZWREYXRlUGF0dGVybnMgPSB7XG4gICAgczogXCJ5eXl5Jy0nTU0nLSdkZCdUJ0hIJzonbW0nOidzc1wiLFxuICAgIHU6IFwieXl5eSctJ01NJy0nZGQgSEgnOidtbSc6J3NzJ1onXCJcbn07XG5cbmNvbnN0IFlFQVJfUkVHRVggPSAveSsvZztcbmNvbnN0IFNIT1JUX0RBVEUgPSBbIFsgXCJkYXRlRm9ybWF0c1wiLCBcInNob3J0XCIgXSBdO1xuXG5jb25zdCBkYXRlUGF0dGVybnMgPSB7XG4gICAgRDogWyBbIFwiZGF0ZUZvcm1hdHNcIiwgXCJmdWxsXCIgXSBdLFxuICAgIG06IFsgWyBcImRhdGVUaW1lRm9ybWF0c1wiLCBcImF2YWlsYWJsZUZvcm1hdHNcIiwgXCJNTU1kXCIgXSBdLFxuICAgIE06IFsgWyBcImRhdGVUaW1lRm9ybWF0c1wiLCBcImF2YWlsYWJsZUZvcm1hdHNcIiwgXCJNTU1NZFwiIF0gXSxcbiAgICB5OiBbIFsgXCJkYXRlVGltZUZvcm1hdHNcIiwgXCJhdmFpbGFibGVGb3JtYXRzXCIsIFwieU1NTVwiIF0gXSxcbiAgICBZOiBbIFsgXCJkYXRlVGltZUZvcm1hdHNcIiwgXCJhdmFpbGFibGVGb3JtYXRzXCIsIFwieU1NTU1cIiBdIF0sXG4gICAgRjogWyBbIFwiZGF0ZUZvcm1hdHNcIiwgXCJmdWxsXCIgXSwgWyBcInRpbWVGb3JtYXRzXCIsIFwibWVkaXVtXCIgXSBdLFxuICAgIGc6IFsgWyBcImRhdGVUaW1lRm9ybWF0c1wiLCBcImF2YWlsYWJsZUZvcm1hdHNcIiwgXCJ5TWRcIiBdLCBbIFwidGltZUZvcm1hdHNcIiwgXCJzaG9ydFwiIF0gXSxcbiAgICBHOiBbIFsgXCJkYXRlVGltZUZvcm1hdHNcIiwgXCJhdmFpbGFibGVGb3JtYXRzXCIsIFwieU1kXCIgXSwgWyBcInRpbWVGb3JtYXRzXCIsIFwibWVkaXVtXCIgXSBdLFxuICAgIHQ6IFsgWyBcInRpbWVGb3JtYXRzXCIsIFwic2hvcnRcIiBdIF0sXG4gICAgVDogWyBbIFwidGltZUZvcm1hdHNcIiwgXCJtZWRpdW1cIiBdIF1cbn07XG5cbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG4gICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbmFtZXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBsZXQgdmFsdWUgPSBvYmpbbmFtZXNbaWR4XV07XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FsZW5kYXJOYW1lcyhpbmZvLCBpc09iaikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAobGV0IGZvcm1hdFR5cGUgaW4gaW5mbykge1xuICAgICAgICBsZXQgbmFtZXMgPSByZXN1bHRbZm9ybWF0VHlwZV0gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0IGluIGluZm9bZm9ybWF0VHlwZV0pIHtcbiAgICAgICAgICAgIGxldCBmb3JtYXRzID0gaW5mb1tmb3JtYXRUeXBlXVtmb3JtYXRdO1xuICAgICAgICAgICAgbmFtZXNbZm9ybWF0XSA9IGlzT2JqID8gZm9ybWF0cyA6IHRvQXJyYXkoZm9ybWF0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0RXJhTmFtZXMoZXJhcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IGZvcm1hdCA9IHJlc3VsdC5mb3JtYXQgPSB7fTtcbiAgICBjb25zdCBlcmFOYW1lTWFwID0ge1xuICAgICAgICBlcmFBYmJyOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgIGVyYU5hbWVzOiBcIndpZGVcIixcbiAgICAgICAgZXJhTmFycm93OiBcIm5hcnJvd1wiXG4gICAgfTtcblxuICAgIGZvciAobGV0IGVyYUZvcm1hdE5hbWUgaW4gZXJhcykge1xuICAgICAgICBsZXQgZm9ybWF0TmFtZSA9IGVyYU5hbWVNYXBbZXJhRm9ybWF0TmFtZV07XG4gICAgICAgIGZvcm1hdFtmb3JtYXROYW1lXSA9IGVyYXNbZXJhRm9ybWF0TmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbG9hZENhbGVuZGFyTmFtZXMobG9jYWxlLCBjYWxlbmRhcikge1xuICAgIGNvbnN0IGxvY2FsZUNhbGVuZGFyID0gY2xkcltsb2NhbGVdLmNhbGVuZGFyO1xuICAgIGxvY2FsZUNhbGVuZGFyLmRheXMgPSBnZXRDYWxlbmRhck5hbWVzKGNhbGVuZGFyLmRheXMpO1xuICAgIGxvY2FsZUNhbGVuZGFyLm1vbnRocyA9IGdldENhbGVuZGFyTmFtZXMoY2FsZW5kYXIubW9udGhzKTtcbiAgICBsb2NhbGVDYWxlbmRhci5xdWFydGVycyA9IGdldENhbGVuZGFyTmFtZXMoY2FsZW5kYXIucXVhcnRlcnMpO1xuICAgIGxvY2FsZUNhbGVuZGFyLmRheVBlcmlvZHMgPSBnZXRDYWxlbmRhck5hbWVzKGNhbGVuZGFyLmRheVBlcmlvZHMsIHRydWUpO1xuXG4gICAgbG9jYWxlQ2FsZW5kYXIuZXJhcyA9IGdldEVyYU5hbWVzKGNhbGVuZGFyLmVyYXMpO1xufVxuXG5mdW5jdGlvbiBsb2FkQ2FsZW5kYXJEYXRlRmllbGRzKGxvY2FsZSwgZmllbGRzKSB7XG4gICAgY29uc3QgbG9jYWxlQ2FsZW5kYXIgPSBjbGRyW2xvY2FsZV0uY2FsZW5kYXI7XG4gICAgY29uc3QgZGF0ZUZpZWxkcyA9IHt9O1xuXG4gICAgZm9yIChsZXQgZmllbGQgaW4gZmllbGRzKSB7XG4gICAgICAgIGNvbnN0IFsgZmllbGROYW1lLCBmb3JtYXRUeXBlID0gJ3dpZGUnIF0gPSBmaWVsZC5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBmaWVsZEluZm8gPSBkYXRlRmllbGRzW2ZpZWxkTmFtZV0gfHwge307XG4gICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gZmllbGRzW2ZpZWxkXS5kaXNwbGF5TmFtZTtcblxuICAgICAgICBpZiAoIWRpc3BsYXlOYW1lKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgZmllbGRJbmZvW2Zvcm1hdFR5cGVdID0gZGlzcGxheU5hbWU7XG4gICAgICAgIGRhdGVGaWVsZHNbZmllbGROYW1lXSA9IGZpZWxkSW5mbztcbiAgICB9XG5cbiAgICBsb2NhbGVDYWxlbmRhci5kYXRlRmllbGRzID0gZGF0ZUZpZWxkcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJlZGVmaW5lZEZvcm1hdChwYXRocywgY2FsZW5kYXIpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIGZvciAobGV0IHBhdGhJZHggPSAwOyBwYXRoSWR4IDwgcGF0aHMubGVuZ3RoOyBwYXRoSWR4KyspIHtcbiAgICAgICAgbGV0IGZpZWxkcyA9IHBhdGhzWyBwYXRoSWR4IF07XG4gICAgICAgIGxldCBwYXR0ZXJuID0gY2FsZW5kYXI7XG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGZpZWxkcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybltmaWVsZHNbaWR4XV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2gocGF0dGVybik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gbG9hZENhbGVuZGFyUGF0dGVybnMobG9jYWxlLCBjYWxlbmRhcikge1xuICAgIGNvbnN0IGNsZHJDYWxlbmRhciA9IGNsZHJbbG9jYWxlXS5jYWxlbmRhcjtcbiAgICBjb25zdCBwYXR0ZXJucyA9IGNsZHJDYWxlbmRhci5wYXR0ZXJucyA9IHt9O1xuXG4gICAgcGF0dGVybnMuZCA9IGdldFByZWRlZmluZWRGb3JtYXQoU0hPUlRfREFURSwgY2FsZW5kYXIpLnJlcGxhY2UoWUVBUl9SRUdFWCwgJ3knKTtcblxuICAgIGZvciAobGV0IHBhdHRlcm4gaW4gZGF0ZVBhdHRlcm5zKSB7XG4gICAgICAgIHBhdHRlcm5zW3BhdHRlcm5dID0gZ2V0UHJlZGVmaW5lZEZvcm1hdChkYXRlUGF0dGVybnNbcGF0dGVybl0sIGNhbGVuZGFyKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBwYXR0ZXJuIGluIHByZWRlZmluZWREYXRlUGF0dGVybnMpIHtcbiAgICAgICAgcGF0dGVybnNbcGF0dGVybl0gPSBwcmVkZWZpbmVkRGF0ZVBhdHRlcm5zW3BhdHRlcm5dO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IGNhbGVuZGFyLmRhdGVUaW1lRm9ybWF0cztcbiAgICBjbGRyQ2FsZW5kYXIuZGF0ZVRpbWVGb3JtYXRzID0ge1xuICAgICAgICBmdWxsOiBkYXRlVGltZUZvcm1hdHMuZnVsbCxcbiAgICAgICAgbG9uZzogZGF0ZVRpbWVGb3JtYXRzLmxvbmcsXG4gICAgICAgIG1lZGl1bTogZGF0ZVRpbWVGb3JtYXRzLm1lZGl1bSxcbiAgICAgICAgc2hvcnQ6IGRhdGVUaW1lRm9ybWF0cy5zaG9ydCxcbiAgICAgICAgYXZhaWxhYmxlRm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLmF2YWlsYWJsZUZvcm1hdHNcbiAgICB9O1xuICAgIGNsZHJDYWxlbmRhci50aW1lRm9ybWF0cyA9IGNhbGVuZGFyLnRpbWVGb3JtYXRzO1xuICAgIGNsZHJDYWxlbmRhci5kYXRlRm9ybWF0cyA9IGNhbGVuZGFyLmRhdGVGb3JtYXRzO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDYWxlbmRhckluZm8obG9jYWxlLCBpbmZvKSB7XG4gICAgY29uc3QgY2FsZW5kYXIgPSBjbGRyW2xvY2FsZV0uY2FsZW5kYXIgPSBjbGRyW2xvY2FsZV0uY2FsZW5kYXIgfHwge307XG4gICAgZm9yIChsZXQgZmllbGQgaW4gaW5mbykge1xuICAgICAgICBpZiAoZmllbGQgPT09IFwidGltZVpvbmVOYW1lc1wiKSB7XG4gICAgICAgICAgICBjYWxlbmRhci5nbXRGb3JtYXQgPSBpbmZvW2ZpZWxkXS5nbXRGb3JtYXQ7XG4gICAgICAgICAgICBjYWxlbmRhci5nbXRaZXJvRm9ybWF0ID0gaW5mb1tmaWVsZF0uZ210WmVyb0Zvcm1hdDtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJjYWxlbmRhcnNcIiAmJiBpbmZvW2ZpZWxkXS5ncmVnb3JpYW4pIHtcbiAgICAgICAgICAgIGxvYWRDYWxlbmRhclBhdHRlcm5zKGxvY2FsZSwgaW5mb1tmaWVsZF0uZ3JlZ29yaWFuKTtcbiAgICAgICAgICAgIGxvYWRDYWxlbmRhck5hbWVzKGxvY2FsZSwgaW5mb1tmaWVsZF0uZ3JlZ29yaWFuKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJmaWVsZHNcIikge1xuICAgICAgICAgICAgbG9hZENhbGVuZGFyRGF0ZUZpZWxkcyhsb2NhbGUsIGluZm8uZmllbGRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNsZHIgfSBmcm9tICcuL2luZm8nO1xuXG5mdW5jdGlvbiB0ZXJyaXRvcnlGcm9tTmFtZShuYW1lLCBpZGVudGl0eSkge1xuICAgIGNvbnN0IGxpa2VseVN1YnRhZ3MgPSBjbGRyLnN1cHBsZW1lbnRhbC5saWtlbHlTdWJ0YWdzO1xuICAgIGxldCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICAgIGlmIChsaWtlbHlTdWJ0YWdzKSB7XG4gICAgICAgIGNvbnN0IGxpa2VseU5hbWUgPSBsaWtlbHlTdWJ0YWdzW25hbWVdIHx8IGxpa2VseVN1YnRhZ3NbcGFydHNbMF1dO1xuICAgICAgICBpZiAobGlrZWx5TmFtZSkge1xuICAgICAgICAgICAgcGFydHMgPSBsaWtlbHlOYW1lLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpZGVudGl0eSkge1xuICAgICAgICBmb3IgKGxldCBpZHggPSBwYXJ0cy5sZW5ndGggLSAxOyBpZHggPj0gMTsgaWR4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpZHhdO1xuICAgICAgICAgICAgaWYgKHBhcnQgPT09IGlkZW50aXR5LnZhcmlhbnQgfHwgcGFydCA9PT0gaWRlbnRpdHkuc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgcGFydHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCB0ZXJyaXRvcnkgPSBwYXJ0c1tsZW5ndGggLSAxXTtcbiAgICAgICAgcmV0dXJuIHRlcnJpdG9yeS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWxlVGVycml0b3J5KGluZm8pIHtcbiAgICBpZiAoaW5mby50ZXJyaXRvcnkpIHtcbiAgICAgICAgcmV0dXJuIGluZm8udGVycml0b3J5O1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBpbmZvLm5hbWU7XG4gICAgY29uc3QgaWRlbnRpdHkgPSBpbmZvLmlkZW50aXR5O1xuICAgIGxldCB0ZXJyaXRvcnk7XG5cbiAgICBpZiAoaWRlbnRpdHkgJiYgaWRlbnRpdHkudGVycml0b3J5KSB7XG4gICAgICAgIHRlcnJpdG9yeSA9IGlkZW50aXR5LnRlcnJpdG9yeTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZXJyaXRvcnkgPSB0ZXJyaXRvcnlGcm9tTmFtZShuYW1lLCBpZGVudGl0eSk7XG4gICAgfVxuXG4gICAgaW5mby50ZXJyaXRvcnkgPSB0ZXJyaXRvcnk7XG5cbiAgICByZXR1cm4gdGVycml0b3J5O1xufVxuIiwiY29uc3QgTUlMTElTRUNPTkQgPSAnZHVyYXRpb24tbWlsbGlzZWNvbmQnO1xuY29uc3QgVU5JVF9QQVRURVJOX09ORSA9ICd1bml0UGF0dGVybi1jb3VudC1vbmUnO1xuY29uc3QgVU5JVF9QQVRURVJOX09USEVSID0gJ3VuaXRQYXR0ZXJuLWNvdW50LW90aGVyJztcbmNvbnN0IHBsYWNlaG9sZGVyUGF0dGVybiA9IC9cXHswXFx9XFxzPy87XG5cbmZ1bmN0aW9uIGV4dHJhY3RVbml0KHVuaXQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHVuaXRbVU5JVF9QQVRURVJOX09ORV0gfHwgdW5pdFtVTklUX1BBVFRFUk5fT1RIRVJdO1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHBsYWNlaG9sZGVyUGF0dGVybiwgJycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVW5pdHMobG9jYWxlSW5mbywgdW5pdHMpIHtcbiAgICBsb2NhbGVJbmZvLmNhbGVuZGFyLmRhdGVGaWVsZHMubWlsbGlzZWNvbmQgPSB7XG4gICAgICAgIG5hcnJvdzogZXh0cmFjdFVuaXQodW5pdHMubmFycm93W01JTExJU0VDT05EXSksXG4gICAgICAgIHNob3J0OiBleHRyYWN0VW5pdCh1bml0cy5zaG9ydFtNSUxMSVNFQ09ORF0pLFxuICAgICAgICB3aWRlOiBleHRyYWN0VW5pdCh1bml0cy5sb25nW01JTExJU0VDT05EXSlcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgY2xkciB9IGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgbG9hZE51bWJlcnNJbmZvIGZyb20gJy4vbG9hZC1udW1iZXJzJztcbmltcG9ydCBsb2FkQ2FsZW5kYXJJbmZvIGZyb20gJy4vbG9hZC1kYXRlcyc7XG5pbXBvcnQgbG9jYWxlVGVycml0b3J5IGZyb20gJy4vdGVycml0b3J5JztcbmltcG9ydCBsb2FkVW5pdHMgZnJvbSAnLi9sb2FkLXVuaXRzJztcblxuZnVuY3Rpb24gbG9hZExvY2FsZShsb2NhbGUsIGluZm8pIHtcbiAgICBmb3IgKGxldCBmaWVsZCBpbiBpbmZvKSB7XG4gICAgICAgIGlmIChmaWVsZCA9PT0gXCJudW1iZXJzXCIpIHtcbiAgICAgICAgICAgIGxvYWROdW1iZXJzSW5mbyhsb2NhbGUsIGluZm9bZmllbGRdKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJkYXRlc1wiKSB7XG4gICAgICAgICAgICBsb2FkQ2FsZW5kYXJJbmZvKGxvY2FsZSwgaW5mb1tmaWVsZF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBsZXQgZW50cnkgPSBhcmd1bWVudHNbaWR4XTtcbiAgICAgICAgaWYgKGVudHJ5Lm1haW4pIHtcbiAgICAgICAgICAgIGxldCBsb2NhbGUgPSBPYmplY3Qua2V5cyhlbnRyeS5tYWluKVswXTtcbiAgICAgICAgICAgIGxldCBpbmZvID0gZW50cnkubWFpbltsb2NhbGVdO1xuICAgICAgICAgICAgbGV0IGxvY2FsZUluZm8gPSBjbGRyW2xvY2FsZV0gPSBjbGRyW2xvY2FsZV0gfHwge307XG5cbiAgICAgICAgICAgIGlmIChpbmZvLnVuaXRzKSB7XG4gICAgICAgICAgICAgICAgbG9hZFVuaXRzKGxvY2FsZUluZm8sIGluZm8udW5pdHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVJbmZvLm5hbWUgPSBsb2NhbGVJbmZvLm5hbWUgfHwgbG9jYWxlO1xuICAgICAgICAgICAgICAgIGxvY2FsZUluZm8uaWRlbnRpdHkgPSBsb2NhbGVJbmZvLmlkZW50aXR5IHx8IGluZm8uaWRlbnRpdHk7XG5cbiAgICAgICAgICAgICAgICBsb2NhbGVUZXJyaXRvcnkobG9jYWxlSW5mbyk7XG4gICAgICAgICAgICAgICAgbG9hZExvY2FsZShsb2NhbGUsIGluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LnN1cHBsZW1lbnRhbCkge1xuICAgICAgICAgICAgaWYgKGVudHJ5LnN1cHBsZW1lbnRhbC53ZWVrRGF0YSkge1xuICAgICAgICAgICAgICAgIGNsZHIuc3VwcGxlbWVudGFsLndlZWtEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdERheTogZW50cnkuc3VwcGxlbWVudGFsLndlZWtEYXRhLmZpcnN0RGF5LFxuICAgICAgICAgICAgICAgICAgICB3ZWVrZW5kU3RhcnQ6IGVudHJ5LnN1cHBsZW1lbnRhbC53ZWVrRGF0YS53ZWVrZW5kU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHdlZWtlbmRFbmQ6IGVudHJ5LnN1cHBsZW1lbnRhbC53ZWVrRGF0YS53ZWVrZW5kRW5kXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnkuc3VwcGxlbWVudGFsLmxpa2VseVN1YnRhZ3MpIHtcbiAgICAgICAgICAgICAgICBjbGRyLnN1cHBsZW1lbnRhbC5saWtlbHlTdWJ0YWdzID0gT2JqZWN0LmFzc2lnbihjbGRyLnN1cHBsZW1lbnRhbC5saWtlbHlTdWJ0YWdzLCBlbnRyeS5zdXBwbGVtZW50YWwubGlrZWx5U3VidGFncyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LnN1cHBsZW1lbnRhbC5jdXJyZW5jeURhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeURhdGEgPSBjbGRyLnN1cHBsZW1lbnRhbC5jdXJyZW5jeURhdGE7XG4gICAgICAgICAgICAgICAgY3VycmVuY3lEYXRhLnJlZ2lvbiA9IE9iamVjdC5hc3NpZ24oY3VycmVuY3lEYXRhLnJlZ2lvbiB8fCB7fSwgZW50cnkuc3VwcGxlbWVudGFsLmN1cnJlbmN5RGF0YS5yZWdpb24pO1xuICAgICAgICAgICAgICAgIGN1cnJlbmN5RGF0YS5mcmFjdGlvbnMgPSBPYmplY3QuYXNzaWduKGN1cnJlbmN5RGF0YS5mcmFjdGlvbnMgfHwge30sIGVudHJ5LnN1cHBsZW1lbnRhbC5jdXJyZW5jeURhdGEuZnJhY3Rpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNsZHIgfSBmcm9tICcuL2luZm8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcbiAgICBjb25zdCBsb2NhbGUgPSBkYXRhLm5hbWU7XG4gICAgY29uc3QgaW5mbyA9IGNsZHJbbG9jYWxlXSA9IGNsZHJbbG9jYWxlXSB8fCB7fTtcbiAgICBjb25zdCBzdXBwbGVtZW50YWwgPSBjbGRyLnN1cHBsZW1lbnRhbCA9IGNsZHIuc3VwcGxlbWVudGFsIHx8IHt9O1xuXG4gICAgaWYgKGRhdGEubGlrZWx5U3VidGFncykge1xuICAgICAgICBzdXBwbGVtZW50YWwubGlrZWx5U3VidGFncyA9IE9iamVjdC5hc3NpZ24oc3VwcGxlbWVudGFsLmxpa2VseVN1YnRhZ3MgfHwge30sIGRhdGEubGlrZWx5U3VidGFncyk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuY3VycmVuY3lEYXRhKSB7XG4gICAgICAgIHN1cHBsZW1lbnRhbC5jdXJyZW5jeURhdGEgPSBzdXBwbGVtZW50YWwuY3VycmVuY3lEYXRhIHx8IHt9O1xuICAgICAgICBzdXBwbGVtZW50YWwuY3VycmVuY3lEYXRhLmZyYWN0aW9ucyA9IE9iamVjdC5hc3NpZ24oc3VwcGxlbWVudGFsLmN1cnJlbmN5RGF0YS5mcmFjdGlvbnMgfHwge30sIGRhdGEuY3VycmVuY3lEYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBudW1iZXJzID0gaW5mby5udW1iZXJzO1xuXG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCBkYXRhKTtcblxuICAgIGlmIChudW1iZXJzICYmIGRhdGEubnVtYmVycykge1xuICAgICAgICBpbmZvLm51bWJlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBudW1iZXJzLCBkYXRhLm51bWJlcnMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBsb2NhbGVJbmZvIH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IGVycm9ycyB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBERUZBVUxUX0xPQ0FMRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlRmllbGROYW1lKG9wdGlvbnMsIGxvY2FsZSA9IERFRkFVTFRfTE9DQUxFKSB7XG4gICAgY29uc3QgaW5mbyA9IGxvY2FsZUluZm8obG9jYWxlKTtcbiAgICBjb25zdCBkYXRlRmllbGRzID0gaW5mby5jYWxlbmRhci5kYXRlRmllbGRzO1xuICAgIGlmICghZGF0ZUZpZWxkcykge1xuICAgICAgICB0aHJvdyBlcnJvcnMuTm9EYXRlRmllbGROYW1lcy5lcnJvcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkTmFtZUluZm8gPSBkYXRlRmllbGRzW29wdGlvbnMudHlwZV0gfHwge307XG5cbiAgICByZXR1cm4gZmllbGROYW1lSW5mb1tvcHRpb25zLm5hbWVUeXBlXSB8fCBmaWVsZE5hbWVJbmZvWyd3aWRlJ107XG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhbGVJbmZvIH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIGxvd2VyQXJyYXkoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgYXJyLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXJyW2lkeF0udG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGxvd2VyT2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAobGV0IGZpZWxkIGluIG9iaikge1xuICAgICAgICByZXN1bHRbZmllbGRdID0gb2JqW2ZpZWxkXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbG9uZUxvd2VyKG9iaikge1xuICAgIGxldCByZXN1bHQgPSBBcnJheS5pc0FycmF5KG9iaikgPyBsb3dlckFycmF5KG9iaikgOiBsb3dlck9iamVjdChvYmopO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGb3JtYXROYW1lcyhsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHR5cGUsIG5hbWVUeXBlLCBzdGFuZEFsb25lLCBsb3dlciB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBpbmZvID0gZ2V0TG9jYWxlSW5mbyhsb2NhbGUpO1xuICAgIGNvbnN0IGZvcm1hdFR5cGUgPSBzdGFuZEFsb25lID8gXCJzdGFuZC1hbG9uZVwiIDogXCJmb3JtYXRcIjtcbiAgICBjb25zdCBsb3dlck5hbWVUeXBlID0gKGxvd2VyID8gXCJsb3dlci1cIiA6IEVNUFRZKSArIG5hbWVUeXBlO1xuICAgIGNvbnN0IGZvcm1hdE5hbWVzID0gaW5mby5jYWxlbmRhclt0eXBlXVtmb3JtYXRUeXBlXTtcbiAgICBsZXQgcmVzdWx0ID0gZm9ybWF0TmFtZXNbbG93ZXJOYW1lVHlwZV07XG4gICAgaWYgKCFyZXN1bHQgJiYgbG93ZXIpIHtcbiAgICAgICAgcmVzdWx0ID0gZm9ybWF0TmFtZXNbbG93ZXJOYW1lVHlwZV0gPSBjbG9uZUxvd2VyKGZvcm1hdE5hbWVzW25hbWVUeXBlXSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VSYW5nZURhdGUodmFsdWUpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChwYXJ0c1sxXSwgMTApIC0gMTtcbiAgICBjb25zdCBkYXkgPSBwYXJzZUludChwYXJ0c1syXSwgMTApO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xufVxuIiwiaW1wb3J0IHsgY2xkciwgZ2V0TG9jYWxlSW5mbyB9IGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IGxvY2FsZVRlcnJpdG9yeSBmcm9tICcuL3RlcnJpdG9yeSc7XG5pbXBvcnQgcGFyc2VSYW5nZURhdGUgZnJvbSAnLi9wYXJzZS1yYW5nZS1kYXRlJztcblxuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cblxuY29uc3Qge1xuICAgIE5vQ3VycmVuY3ksXG4gICAgTm9DdXJyZW5jeURpc3BsYXksXG4gICAgTm9TdXBwbGVtZW50YWxDdXJyZW5jeSxcbiAgICBOb0N1cnJlbmN5UmVnaW9uLFxuICAgIE5vVmFsaWRDdXJyZW5jeVxufSA9IGVycm9ycztcblxuY29uc3QgREVGQVVMVF9DVVJSRU5DWV9GUkFDVElPTlMgPSAyO1xuY29uc3QgU1lNQk9MID0gXCJzeW1ib2xcIjtcbmNvbnN0IElOVkFMSURfQ1VSUkVOQ1lfQ09ERSA9ICdYWFgnO1xuXG5jb25zdCBHTE9CQUxfQ1VSUkVOQ0lFUyA9IHtcbiAgICAnMDAxJzogJ1VTRCcsIC8vIDAwMSByZWZlcnMgdG8gd29ybGQuIG5vdCBzdXJlIGlmIGl0IGlzIGNvcnJlY3QgdG8gYXNzdW1lIFVTRCBidXQgc2VlbXMgYmV0dGVyIHRoYW4gdGhyb3cgYW4gZXJyb3JcbiAgICAnMTUwJzogJ0VVUicgLy8gMTUwIHRlcnJpdG9yeSBmb3IgRXVyb3BlXG5cbn07XG5cbmZ1bmN0aW9uIGdldEN1cnJlbmN5SW5mbyhsb2NhbGUsIGN1cnJlbmN5LCB0aHJvd0lmTm9WYWxpZCkge1xuICAgIGNvbnN0IGluZm8gPSBnZXRMb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgY29uc3QgY3VycmVuY2llcyA9IGluZm8ubnVtYmVycy5jdXJyZW5jaWVzO1xuICAgIGlmICghY3VycmVuY2llcykge1xuICAgICAgICBpZiAodGhyb3dJZk5vVmFsaWQpIHtcbiAgICAgICAgICAgIHRocm93IE5vQ3VycmVuY3kuZXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW5jeURpc3BsYXlJbmZvID0gY3VycmVuY2llc1tjdXJyZW5jeV07XG5cbiAgICBpZiAoIWN1cnJlbmN5RGlzcGxheUluZm8pIHtcbiAgICAgICAgaWYgKHRocm93SWZOb1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBOb0N1cnJlbmN5RGlzcGxheS5lcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW5jeURpc3BsYXlJbmZvO1xufVxuXG5mdW5jdGlvbiBsZW5ndGhDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlZ2lvbkN1cnJlbmN5KHJlZ2lvbkN1cnJlbmNpZXMpIHtcbiAgICBsZXQgbGF0ZXN0VmFsaWRVbnRpbCwgbGF0ZXN0VmFsaWRVbnRpbFJhbmdlO1xuICAgIGxldCBsYXRlc3RTdGlsbFZhbGlkLCBsYXRlc3RTdGlsbFZhbGlkRGF0ZTtcblxuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHJlZ2lvbkN1cnJlbmNpZXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBjb25zdCBjdXJyZW5jeSA9IHJlZ2lvbkN1cnJlbmNpZXNbaWR4XTtcbiAgICAgICAgY29uc3QgY29kZSA9IE9iamVjdC5rZXlzKGN1cnJlbmN5KVswXTtcbiAgICAgICAgY29uc3QgaW5mbyA9IGN1cnJlbmN5W2NvZGVdO1xuICAgICAgICBpZiAoY29kZSAhPT0gSU5WQUxJRF9DVVJSRU5DWV9DT0RFICYmIGluZm8uX3RlbmRlciAhPT0gJ2ZhbHNlJyAmJiBpbmZvLl9mcm9tKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8uX3RvKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RpbGxWYWxpZERhdGUgPSBwYXJzZVJhbmdlRGF0ZShpbmZvLl9mcm9tKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxhdGVzdFN0aWxsVmFsaWREYXRlIHx8IGxhdGVzdFN0aWxsVmFsaWREYXRlIDwgc3RpbGxWYWxpZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0U3RpbGxWYWxpZCA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdFN0aWxsVmFsaWREYXRlID0gc3RpbGxWYWxpZERhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghbGF0ZXN0U3RpbGxWYWxpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkRnJvbSA9IHBhcnNlUmFuZ2VEYXRlKGluZm8uX2Zyb20pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkVG8gPSBwYXJzZVJhbmdlRGF0ZShpbmZvLl90byk7XG4gICAgICAgICAgICAgICAgaWYgKCFsYXRlc3RWYWxpZFVudGlsUmFuZ2UgfHwgbGF0ZXN0VmFsaWRVbnRpbFJhbmdlLnRvIDwgdmFsaWRUbyB8fCBsYXRlc3RWYWxpZFVudGlsUmFuZ2UuZnJvbSA8IHZhbGlkRnJvbSkge1xuICAgICAgICAgICAgICAgICAgICBsYXRlc3RWYWxpZFVudGlsID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0VmFsaWRVbnRpbFJhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogdmFsaWRGcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHZhbGlkVG9cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGF0ZXN0U3RpbGxWYWxpZCB8fCBsYXRlc3RWYWxpZFVudGlsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lEaXNwbGF5cyhsb2NhbGUsIGN1cnJlbmN5LCB0aHJvd0lmTm9WYWxpZCA9IHRydWUpIHtcbiAgICBjb25zdCBjdXJyZW5jeUluZm8gPSBnZXRDdXJyZW5jeUluZm8obG9jYWxlLCBjdXJyZW5jeSwgdGhyb3dJZk5vVmFsaWQpO1xuICAgIGlmICghY3VycmVuY3lJbmZvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWN1cnJlbmN5SW5mby5kaXNwbGF5cykge1xuICAgICAgICBjb25zdCBkaXNwbGF5cyA9IFsgY3VycmVuY3kgXTtcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gY3VycmVuY3lJbmZvKSB7XG4gICAgICAgICAgICBkaXNwbGF5cy5wdXNoKGN1cnJlbmN5SW5mb1tmaWVsZF0pO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlzLnNvcnQobGVuZ3RoQ29tcGFyZXIpO1xuICAgICAgICBjdXJyZW5jeUluZm8uZGlzcGxheXMgPSBkaXNwbGF5cztcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVuY3lJbmZvLmRpc3BsYXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lEaXNwbGF5KGxvY2FsZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgdmFsdWUsIGN1cnJlbmN5LCBjdXJyZW5jeURpc3BsYXkgPSBTWU1CT0wgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoY3VycmVuY3lEaXNwbGF5ID09PSBcImNvZGVcIikge1xuICAgICAgICByZXR1cm4gY3VycmVuY3k7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVuY3lJbmZvID0gZ2V0Q3VycmVuY3lJbmZvKGxvY2FsZSwgY3VycmVuY3ksIHRydWUpO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoY3VycmVuY3lEaXNwbGF5ID09PSBTWU1CT0wpIHtcbiAgICAgICAgcmVzdWx0ID0gY3VycmVuY3lJbmZvW1wic3ltYm9sLWFsdC1uYXJyb3dcIl0gfHwgY3VycmVuY3lJbmZvW1NZTUJPTF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSAhPT0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gY3VycmVuY3lJbmZvW1wiZGlzcGxheU5hbWUtY291bnQtb3RoZXJcIl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjdXJyZW5jeUluZm9bXCJkaXNwbGF5TmFtZS1jb3VudC1vbmVcIl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lGcmFjdGlvbk9wdGlvbnMoY29kZSkge1xuICAgIGxldCBtaW5pbXVtRnJhY3Rpb25EaWdpdHMgPSBERUZBVUxUX0NVUlJFTkNZX0ZSQUNUSU9OUztcbiAgICBsZXQgbWF4aW11bUZyYWN0aW9uRGlnaXRzID0gREVGQVVMVF9DVVJSRU5DWV9GUkFDVElPTlM7XG5cbiAgICBjb25zdCBmcmFjdGlvbnMgPSAoKGNsZHIuc3VwcGxlbWVudGFsLmN1cnJlbmN5RGF0YSB8fCB7fSkuZnJhY3Rpb25zIHx8IHt9KVtjb2RlXTtcblxuICAgIGlmIChmcmFjdGlvbnMgJiYgZnJhY3Rpb25zLl9kaWdpdHMpIHtcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzID0gbWluaW11bUZyYWN0aW9uRGlnaXRzID0gcGFyc2VJbnQoZnJhY3Rpb25zLl9kaWdpdHMsIDEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG1pbmltdW1GcmFjdGlvbkRpZ2l0cyxcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBtYXhpbXVtRnJhY3Rpb25EaWdpdHNcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVycml0b3J5Q3VycmVuY3lDb2RlKHRlcnJpdG9yeSwgdGhyb3dJZk5vVmFsaWQgPSB0cnVlKSB7XG4gICAgaWYgKEdMT0JBTF9DVVJSRU5DSUVTW3RlcnJpdG9yeV0pIHtcbiAgICAgICAgcmV0dXJuIEdMT0JBTF9DVVJSRU5DSUVTW3RlcnJpdG9yeV07XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVuY3lEYXRhID0gY2xkci5zdXBwbGVtZW50YWwuY3VycmVuY3lEYXRhO1xuICAgIGlmICghY3VycmVuY3lEYXRhKSB7XG4gICAgICAgIGlmICh0aHJvd0lmTm9WYWxpZCkge1xuICAgICAgICAgICAgdGhyb3cgTm9TdXBwbGVtZW50YWxDdXJyZW5jeS5lcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZ2lvbkN1cnJlbmNpZXMgPSBjdXJyZW5jeURhdGEucmVnaW9uW3RlcnJpdG9yeV07XG5cbiAgICBpZiAoIXJlZ2lvbkN1cnJlbmNpZXMpIHtcbiAgICAgICAgaWYgKHRocm93SWZOb1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBOb0N1cnJlbmN5UmVnaW9uLmVycm9yKHRlcnJpdG9yeSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVuY3lDb2RlID0gcmVnaW9uQ3VycmVuY3kocmVnaW9uQ3VycmVuY2llcyk7XG5cbiAgICByZXR1cm4gY3VycmVuY3lDb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlQ3VycmVuY3kobG9jYWxlLCB0aHJvd0lmTm9WYWxpZCkge1xuICAgIGNvbnN0IGluZm8gPSBnZXRMb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgY29uc3QgbnVtYmVycyA9IGluZm8ubnVtYmVycztcblxuICAgIGlmICghbnVtYmVycy5sb2NhbGVDdXJyZW5jeSkge1xuICAgICAgICBjb25zdCBjdXJyZW5jeSA9IHRlcnJpdG9yeUN1cnJlbmN5Q29kZShsb2NhbGVUZXJyaXRvcnkoaW5mbyksIHRocm93SWZOb1ZhbGlkKTtcblxuICAgICAgICBpZiAoIWN1cnJlbmN5ICYmIHRocm93SWZOb1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBOb1ZhbGlkQ3VycmVuY3kuZXJyb3IoaW5mby5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG51bWJlcnMubG9jYWxlQ3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVycy5sb2NhbGVDdXJyZW5jeTtcbn1cbiIsIlxuZXhwb3J0IGNvbnN0IERBWVNfT0ZfV0VFSyA9IFsgXCJzdW5cIiwgXCJtb25cIiwgXCJ0dWVcIiwgXCJ3ZWRcIiwgXCJ0aHVcIiwgXCJmcmlcIiwgXCJzYXRcIiBdO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9URVJSSVRPUlkgPSAnMDAxJztcbiIsImltcG9ydCB7IGNsZHIsIGdldExvY2FsZUluZm8gfSBmcm9tICcuL2luZm8nO1xuaW1wb3J0IGxvY2FsZVRlcnJpdG9yeSBmcm9tICcuL3RlcnJpdG9yeSc7XG5cbmltcG9ydCB7IERBWVNfT0ZfV0VFSywgREVGQVVMVF9URVJSSVRPUlkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICcuLi9lcnJvcnMnO1xuXG5jb25zdCB7IE5vV2Vla0RhdGEsIE5vRmlyc3REYXkgfSA9IGVycm9ycztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlyc3REYXkobG9jYWxlKSB7XG4gICAgY29uc3QgaW5mbyA9IGdldExvY2FsZUluZm8obG9jYWxlKTtcblxuICAgIGlmICghaXNOYU4oaW5mby5maXJzdERheSkpIHtcbiAgICAgICAgcmV0dXJuIGluZm8uZmlyc3REYXk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2Vla0RhdGEgPSBjbGRyLnN1cHBsZW1lbnRhbC53ZWVrRGF0YTtcbiAgICBpZiAoIXdlZWtEYXRhKSB7XG4gICAgICAgIHRocm93IE5vV2Vla0RhdGEuZXJyb3IoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdERheSA9IHdlZWtEYXRhLmZpcnN0RGF5W2xvY2FsZVRlcnJpdG9yeShpbmZvKV0gfHwgd2Vla0RhdGEuZmlyc3REYXlbREVGQVVMVF9URVJSSVRPUlldO1xuXG4gICAgaWYgKCFmaXJzdERheSkge1xuICAgICAgICB0aHJvdyBOb0ZpcnN0RGF5LmVycm9yKCk7XG4gICAgfVxuXG4gICAgaW5mby5maXJzdERheSA9IERBWVNfT0ZfV0VFSy5pbmRleE9mKGZpcnN0RGF5KTtcblxuICAgIHJldHVybiBpbmZvLmZpcnN0RGF5O1xufVxuIiwiaW1wb3J0IHsgY2xkciwgZ2V0TG9jYWxlSW5mbyB9IGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgbG9jYWxlVGVycml0b3J5IGZyb20gJy4vdGVycml0b3J5JztcblxuaW1wb3J0IHsgREFZU19PRl9XRUVLLCBERUZBVUxUX1RFUlJJVE9SWSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGVycm9ycyB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbmNvbnN0IHsgTm9XZWVrRGF0YSB9ID0gZXJyb3JzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWVrZW5kUmFuZ2UobG9jYWxlKSB7XG4gICAgY29uc3QgaW5mbyA9IGdldExvY2FsZUluZm8obG9jYWxlKTtcblxuICAgIGlmIChpbmZvLndlZWtlbmRSYW5nZSkge1xuICAgICAgICByZXR1cm4gaW5mby53ZWVrZW5kUmFuZ2U7XG4gICAgfVxuXG4gICAgY29uc3Qgd2Vla0RhdGEgPSBjbGRyLnN1cHBsZW1lbnRhbC53ZWVrRGF0YTtcbiAgICBpZiAoIXdlZWtEYXRhKSB7XG4gICAgICAgIHRocm93IE5vV2Vla0RhdGEuZXJyb3IoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXJyaXRvcnkgPSBsb2NhbGVUZXJyaXRvcnkoaW5mbyk7XG4gICAgY29uc3Qgc3RhcnQgPSB3ZWVrRGF0YS53ZWVrZW5kU3RhcnRbdGVycml0b3J5XSB8fCB3ZWVrRGF0YS53ZWVrZW5kU3RhcnRbREVGQVVMVF9URVJSSVRPUlldO1xuICAgIGNvbnN0IGVuZCA9IHdlZWtEYXRhLndlZWtlbmRFbmRbdGVycml0b3J5XSB8fCB3ZWVrRGF0YS53ZWVrZW5kRW5kW0RFRkFVTFRfVEVSUklUT1JZXTtcblxuICAgIGluZm8ud2Vla2VuZFJhbmdlID0ge1xuICAgICAgICBzdGFydDogREFZU19PRl9XRUVLLmluZGV4T2Yoc3RhcnQpLFxuICAgICAgICBlbmQ6IERBWVNfT0ZfV0VFSy5pbmRleE9mKGVuZClcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluZm8ud2Vla2VuZFJhbmdlO1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYWxlSW5mbyB9IGZyb20gJy4vaW5mbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG51bWJlclN5bWJvbHMobG9jYWxlKSB7XG4gICAgY29uc3QgaW5mbyA9IGdldExvY2FsZUluZm8obG9jYWxlKTtcblxuICAgIHJldHVybiBpbmZvLm51bWJlcnMuc3ltYm9scztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05lZ2F0aXZlWmVybyh2YWx1ZSkge1xuICAgIHJldHVybiAoMSAvIHZhbHVlID09PSAtSW5maW5pdHkpO1xufVxuIiwiaW1wb3J0IHsgY3VycmVuY3lEaXNwbGF5LCBsb2NhbGVDdXJyZW5jeSB9IGZyb20gJy4uL2NsZHInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeVN5bWJvbChpbmZvLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIW9wdGlvbnMuY3VycmVuY3kpIHtcbiAgICAgICAgb3B0aW9ucy5jdXJyZW5jeSA9IGxvY2FsZUN1cnJlbmN5KGluZm8sIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXkgPSBjdXJyZW5jeURpc3BsYXkoaW5mbywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gZGlzcGxheTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdyb3VwSW50ZWdlcihudW1iZXIsIHN0YXJ0LCBlbmQsIG9wdGlvbnMsIGluZm8pIHtcbiAgICBjb25zdCBzeW1ib2xzID0gaW5mby5udW1iZXJzLnN5bWJvbHM7XG4gICAgY29uc3QgZGVjaW1hbEluZGV4ID0gbnVtYmVyLmluZGV4T2Yoc3ltYm9scy5kZWNpbWFsKTtcbiAgICBjb25zdCBncm91cFNpemVzID0gb3B0aW9ucy5ncm91cFNpemUuc2xpY2UoKTtcbiAgICBsZXQgZ3JvdXBTaXplID0gZ3JvdXBTaXplcy5zaGlmdCgpO1xuXG4gICAgbGV0IGludGVnZXJFbmQgPSBkZWNpbWFsSW5kZXggIT09IC0xID8gZGVjaW1hbEluZGV4IDogZW5kICsgMTtcblxuICAgIGxldCBpbnRlZ2VyID0gbnVtYmVyLnN1YnN0cmluZyhzdGFydCwgaW50ZWdlckVuZCk7XG4gICAgbGV0IHJlc3VsdCA9IG51bWJlcjtcbiAgICBjb25zdCBpbnRlZ2VyTGVuZ3RoID0gaW50ZWdlci5sZW5ndGg7XG5cbiAgICBpZiAoaW50ZWdlckxlbmd0aCA+PSBncm91cFNpemUpIHtcbiAgICAgICAgbGV0IGlkeCA9IGludGVnZXJMZW5ndGg7XG4gICAgICAgIGxldCBwYXJ0cyA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChpZHggPiAtMSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gaW50ZWdlci5zdWJzdHJpbmcoaWR4IC0gZ3JvdXBTaXplLCBpZHgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZHggLT0gZ3JvdXBTaXplO1xuICAgICAgICAgICAgbGV0IG5ld0dyb3VwU2l6ZSA9IGdyb3VwU2l6ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGdyb3VwU2l6ZSA9IG5ld0dyb3VwU2l6ZSAhPT0gdW5kZWZpbmVkID8gbmV3R3JvdXBTaXplIDogZ3JvdXBTaXplO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBTaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBpbnRlZ2VyLnN1YnN0cmluZygwLCBpZHgpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbnRlZ2VyID0gcGFydHMucmV2ZXJzZSgpLmpvaW4oc3ltYm9scy5ncm91cCk7XG4gICAgICAgIHJlc3VsdCA9IG51bWJlci5zdWJzdHJpbmcoMCwgc3RhcnQpICsgaW50ZWdlciArIG51bWJlci5zdWJzdHJpbmcoaW50ZWdlckVuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBDVVJSRU5DWSwgQUNDT1VOVElORyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0N1cnJlbmN5U3R5bGUoc3R5bGUpIHtcbiAgICByZXR1cm4gc3R5bGUgPT09IENVUlJFTkNZIHx8IHN0eWxlID09PSBBQ0NPVU5USU5HO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZChudW1iZXIsIGRpZ2l0cyA9IDIsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBjb3VudCA9IGRpZ2l0cyAtIFN0cmluZyhudW1iZXIpLmxlbmd0aDtcbiAgICBsZXQgcmVzdWx0ID0gbnVtYmVyO1xuXG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBjb25zdCBwYWRTdHJpbmcgPSBuZXcgQXJyYXkoY291bnQgKyAxKS5qb2luKFwiMFwiKTtcbiAgICAgICAgcmVzdWx0ID0gcmlnaHQgPyBudW1iZXIgKyBwYWRTdHJpbmcgOiBwYWRTdHJpbmcgKyBudW1iZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iLCJjb25zdCBNQVhfUFJFQ0lTSU9OID0gMjA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdW5kKHZhbHVlLCBwcmVjaXNpb24pIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWU7XG4gICAgbGV0IGRlY2ltYWxzID0gcHJlY2lzaW9uIHx8IDA7XG5cbiAgICByZXN1bHQgPSByZXN1bHQudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgIHJlc3VsdCA9IE1hdGgucm91bmQoTnVtYmVyKHJlc3VsdFswXSArICdlJyArIChyZXN1bHRbMV0gPyAoTnVtYmVyKHJlc3VsdFsxXSkgKyBkZWNpbWFscykgOiBkZWNpbWFscykpKTtcblxuICAgIHJlc3VsdCA9IHJlc3VsdC50b1N0cmluZygpLnNwbGl0KCdlJyk7XG4gICAgcmVzdWx0ID0gTnVtYmVyKHJlc3VsdFswXSArICdlJyArIChyZXN1bHRbMV0gPyAoTnVtYmVyKHJlc3VsdFsxXSkgLSBkZWNpbWFscykgOiAtZGVjaW1hbHMpKTtcblxuICAgIHJldHVybiByZXN1bHQudG9GaXhlZChNYXRoLm1pbihkZWNpbWFscywgTUFYX1BSRUNJU0lPTikpO1xufSIsImltcG9ydCB7IFBFUkNFTlQsIFNDSUVOVElGSUMsIE5VTUJFUl9QTEFDRUhPTERFUiwgQ1VSUkVOQ1lfUExBQ0VIT0xERVIsIFBFUkNFTlRfUExBQ0VIT0xERVIsIEVNUFRZLCBQT0lOVCB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IGlzTmVnYXRpdmVaZXJvIGZyb20gJy4uL2NvbW1vbi9pcy1uZWdhdGl2ZS16ZXJvJztcbmltcG9ydCBmb3JtYXRDdXJyZW5jeVN5bWJvbCBmcm9tICcuL2Zvcm1hdC1jdXJyZW5jeS1zeW1ib2wnO1xuaW1wb3J0IGdyb3VwSW50ZWdlciBmcm9tICcuL2dyb3VwLWludGVnZXInO1xuaW1wb3J0IGlzQ3VycmVuY3lTdHlsZSBmcm9tICcuL2lzLWN1cnJlbmN5LXN0eWxlJztcbmltcG9ydCBwYWQgZnJvbSAnLi4vY29tbW9uL3BhZCc7XG5pbXBvcnQgcm91bmQgZnJvbSAnLi4vY29tbW9uL3JvdW5kJztcbmltcG9ydCB7IGN1cnJlbmN5RnJhY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vY2xkcic7XG5cbmNvbnN0IERFRkFVTFRfREVDSU1BTF9ST1VORElORyA9IDM7XG5jb25zdCBERUZBVUxUX1BFUkNFTlRfUk9VTkRJTkcgPSAwO1xuXG5jb25zdCB0cmFpbGluZ1plcm9SZWdleCA9IC8wKyQvO1xuXG5mdW5jdGlvbiBmcmFjdGlvbk9wdGlvbnMob3B0aW9ucykge1xuICAgIGxldCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0cywgbWF4aW11bUZyYWN0aW9uRGlnaXRzLCBzdHlsZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBpc0N1cnJlbmN5ID0gaXNDdXJyZW5jeVN0eWxlKHN0eWxlKTtcbiAgICBsZXQgY3VycmVuY3lGcmFjdGlvbnM7XG4gICAgaWYgKGlzQ3VycmVuY3kpIHtcbiAgICAgICAgY3VycmVuY3lGcmFjdGlvbnMgPSBjdXJyZW5jeUZyYWN0aW9uT3B0aW9ucyhvcHRpb25zLmN1cnJlbmN5KTtcbiAgICB9XG5cbiAgICBpZiAobWluaW11bUZyYWN0aW9uRGlnaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzID0gaXNDdXJyZW5jeSA/IGN1cnJlbmN5RnJhY3Rpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA6IDA7XG4gICAgfVxuXG4gICAgaWYgKG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzdHlsZSA9PT0gUEVSQ0VOVCkge1xuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzID0gTWF0aC5tYXgobWluaW11bUZyYWN0aW9uRGlnaXRzLCBERUZBVUxUX1BFUkNFTlRfUk9VTkRJTkcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ3VycmVuY3kpIHtcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IE1hdGgubWF4KG1pbmltdW1GcmFjdGlvbkRpZ2l0cywgY3VycmVuY3lGcmFjdGlvbnMubWF4aW11bUZyYWN0aW9uRGlnaXRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IE1hdGgubWF4KG1pbmltdW1GcmFjdGlvbkRpZ2l0cywgREVGQVVMVF9ERUNJTUFMX1JPVU5ESU5HKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogbWluaW11bUZyYWN0aW9uRGlnaXRzLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG1heGltdW1GcmFjdGlvbkRpZ2l0c1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFwcGx5UGF0dGVybih2YWx1ZSwgcGF0dGVybiwgc3ltYm9sKSB7XG4gICAgbGV0IHJlc3VsdCA9IEVNUFRZO1xuICAgIGZvciAobGV0IGlkeCA9IDAsIGxlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGxldCBjaCA9IHBhdHRlcm4uY2hhckF0KGlkeCk7XG5cbiAgICAgICAgaWYgKGNoID09PSBOVU1CRVJfUExBQ0VIT0xERVIpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gQ1VSUkVOQ1lfUExBQ0VIT0xERVIgfHwgY2ggPT09IFBFUkNFTlRfUExBQ0VIT0xERVIpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzeW1ib2w7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gY2g7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY3VycmVuY3lVbml0UGF0dGVybihpbmZvLCB2YWx1ZSkge1xuICAgIGNvbnN0IGN1cnJlbmN5SW5mbyA9IGluZm8ubnVtYmVycy5jdXJyZW5jeTtcbiAgICBsZXQgcGF0dGVybiA9IHZhbHVlICE9PSAxID8gY3VycmVuY3lJbmZvW1widW5pdFBhdHRlcm4tY291bnQtb3RoZXJcIl0gOiBjdXJyZW5jeUluZm9bXCJ1bml0UGF0dGVybi1jb3VudC1vbmVcIl07XG4gICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKE5VTUJFUl9QTEFDRUhPTERFUiwgYC0keyBOVU1CRVJfUExBQ0VIT0xERVIgfWApO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJuO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YW5kYXJkTnVtYmVyRm9ybWF0KG51bWJlciwgb3B0aW9ucywgaW5mbykge1xuICAgIGNvbnN0IHN5bWJvbHMgPSBpbmZvLm51bWJlcnMuc3ltYm9scztcbiAgICBjb25zdCB7IHN0eWxlIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGlzQ3VycmVuY3kgPSBpc0N1cnJlbmN5U3R5bGUoc3R5bGUpO1xuXG4gICAgLy9yZXR1cm4gbnVtYmVyIGluIGV4cG9uZW50aWFsIGZvcm1hdFxuICAgIGlmIChzdHlsZSA9PT0gU0NJRU5USUZJQykge1xuICAgICAgICBsZXQgZXhwb25lbnRpYWwgPSBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyAhPT0gdW5kZWZpbmVkID8gbnVtYmVyLnRvRXhwb25lbnRpYWwob3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMpIDogbnVtYmVyLnRvRXhwb25lbnRpYWwoKTtcbiAgICAgICAgcmV0dXJuIGV4cG9uZW50aWFsLnJlcGxhY2UoUE9JTlQsIHN5bWJvbHMuZGVjaW1hbCk7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gbnVtYmVyO1xuICAgIGxldCBzeW1ib2w7XG5cbiAgICBpZiAoaXNDdXJyZW5jeSkge1xuICAgICAgICBvcHRpb25zLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN5bWJvbCA9IGZvcm1hdEN1cnJlbmN5U3ltYm9sKGluZm8sIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChzdHlsZSA9PT0gUEVSQ0VOVCkge1xuICAgICAgICB2YWx1ZSAqPSAxMDA7XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbHMucGVyY2VudFNpZ247XG4gICAgfVxuXG4gICAgY29uc3QgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHMsIG1heGltdW1GcmFjdGlvbkRpZ2l0cyB9ID0gZnJhY3Rpb25PcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgdmFsdWUgPSByb3VuZCh2YWx1ZSwgbWF4aW11bUZyYWN0aW9uRGlnaXRzKTtcblxuICAgIGNvbnN0IG5lZ2F0aXZlID0gdmFsdWUgPCAwO1xuICAgIGNvbnN0IG5lZ2F0aXZlWmVybyA9IGlzTmVnYXRpdmVaZXJvKG51bWJlcik7XG5cbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KFBPSU5UKTtcblxuICAgIGxldCBpbnRlZ2VyID0gcGFydHNbMF07XG4gICAgbGV0IGZyYWN0aW9uID0gcGFkKHBhcnRzWzFdID8gcGFydHNbMV0ucmVwbGFjZSh0cmFpbGluZ1plcm9SZWdleCwgRU1QVFkpIDogRU1QVFksIG1pbmltdW1GcmFjdGlvbkRpZ2l0cywgdHJ1ZSk7XG5cbiAgICAvL2V4Y2x1ZGUgXCItXCIgaWYgbnVtYmVyIGlzIG5lZ2F0aXZlLlxuICAgIGlmIChuZWdhdGl2ZSkge1xuICAgICAgICBpbnRlZ2VyID0gaW50ZWdlci5zdWJzdHJpbmcoMSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubWluaW11bUludGVnZXJEaWdpdHMpIHtcbiAgICAgICAgaW50ZWdlciA9IHBhZChpbnRlZ2VyLCBvcHRpb25zLm1pbmltdW1JbnRlZ2VyRGlnaXRzKTtcbiAgICB9XG5cbiAgICBsZXQgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnVzZUdyb3VwaW5nICE9PSBmYWxzZSA/IGdyb3VwSW50ZWdlcihpbnRlZ2VyLCAwLCBpbnRlZ2VyLmxlbmd0aCwgb3B0aW9ucywgaW5mbykgOiBpbnRlZ2VyO1xuXG4gICAgaWYgKGZyYWN0aW9uKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlICs9IHN5bWJvbHMuZGVjaW1hbCArIGZyYWN0aW9uO1xuICAgIH1cblxuICAgIGxldCBwYXR0ZXJuO1xuXG4gICAgaWYgKGlzQ3VycmVuY3kgJiYgb3B0aW9ucy5jdXJyZW5jeURpc3BsYXkgPT09IFwibmFtZVwiKSB7XG4gICAgICAgIHBhdHRlcm4gPSBjdXJyZW5jeVVuaXRQYXR0ZXJuKGluZm8sIG51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGF0dGVybnMgPSBvcHRpb25zLnBhdHRlcm5zO1xuICAgICAgICBwYXR0ZXJuID0gKG5lZ2F0aXZlIHx8IG5lZ2F0aXZlWmVybykgPyBwYXR0ZXJuc1sxXSB8fCAoXCItXCIgKyBwYXR0ZXJuc1swXSkgOiBwYXR0ZXJuc1swXTtcbiAgICB9XG5cbiAgICBpZiAocGF0dGVybiA9PT0gTlVNQkVSX1BMQUNFSE9MREVSICYmICFuZWdhdGl2ZSkge1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXBwbHlQYXR0ZXJuKGZvcm1hdHRlZFZhbHVlLCBwYXR0ZXJuLCBzeW1ib2wpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBQRVJDRU5UX1BMQUNFSE9MREVSLCBDVVJSRU5DWV9QTEFDRUhPTERFUiwgQ1VSUkVOQ1ksIFBFUkNFTlQsIEVNUFRZIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgZm9ybWF0Q3VycmVuY3lTeW1ib2wgZnJvbSAnLi9mb3JtYXQtY3VycmVuY3ktc3ltYm9sJztcblxuY29uc3QgbGl0ZXJhbFJlZ0V4cCA9IC8oXFxcXC4pfChbJ11bXiddKlsnXT8pfChbXCJdW15cIl0qW1wiXT8pL2c7XG5jb25zdCBQTEFDRUhPTERFUiA9IFwiX18/P19fXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZU9wdGlvbnMoZm9ybWF0T3B0aW9ucywgaW5mbykge1xuICAgIGNvbnN0IGZvcm1hdCA9IGZvcm1hdE9wdGlvbnMuZm9ybWF0O1xuXG4gICAgLy9tdWx0aXBseSBudW1iZXIgaWYgdGhlIGZvcm1hdCBoYXMgcGVyY2VudFxuICAgIGlmIChmb3JtYXQuaW5kZXhPZihQRVJDRU5UX1BMQUNFSE9MREVSKSAhPT0gLTEpIHtcbiAgICAgICAgZm9ybWF0T3B0aW9ucy5zdHlsZSA9IFBFUkNFTlQ7XG4gICAgICAgIGZvcm1hdE9wdGlvbnMuc3ltYm9sID0gaW5mby5udW1iZXJzLnN5bWJvbHMucGVyY2VudFNpZ247XG4gICAgICAgIGZvcm1hdE9wdGlvbnMubnVtYmVyICo9IDEwMDtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoQ1VSUkVOQ1lfUExBQ0VIT0xERVIpICE9PSAtMSkge1xuICAgICAgICBmb3JtYXRPcHRpb25zLnN0eWxlID0gQ1VSUkVOQ1k7XG4gICAgICAgIGZvcm1hdE9wdGlvbnMuc3ltYm9sID0gZm9ybWF0Q3VycmVuY3lTeW1ib2woaW5mbyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9ybWF0TGl0ZXJhbHMoZm9ybWF0T3B0aW9ucykge1xuICAgIGxldCBmb3JtYXQgPSBmb3JtYXRPcHRpb25zLmZvcm1hdDtcbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoXCInXCIpID4gLTEgfHwgZm9ybWF0LmluZGV4T2YoXCJcXFwiXCIpID4gLTEgfHwgZm9ybWF0LmluZGV4T2YoXCJcXFxcXCIpID4gLTEpIHtcbiAgICAgICAgY29uc3QgbGl0ZXJhbHMgPSBmb3JtYXRPcHRpb25zLmxpdGVyYWxzID0gW107XG4gICAgICAgIGZvcm1hdE9wdGlvbnMuZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobGl0ZXJhbFJlZ0V4cCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1b3RlQ2hhciA9IG1hdGNoLmNoYXJBdCgwKS5yZXBsYWNlKFwiXFxcXFwiLCBFTVBUWSk7XG4gICAgICAgICAgICBjb25zdCBsaXRlcmFsID0gbWF0Y2guc2xpY2UoMSkucmVwbGFjZShxdW90ZUNoYXIsIEVNUFRZKTtcblxuICAgICAgICAgICAgbGl0ZXJhbHMucHVzaChsaXRlcmFsKTtcblxuICAgICAgICAgICAgcmV0dXJuIFBMQUNFSE9MREVSO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTGl0ZXJhbHMobnVtYmVyLCBsaXRlcmFscykge1xuICAgIGxldCByZXN1bHQgPSBudW1iZXI7XG4gICAgaWYgKGxpdGVyYWxzKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGxpdGVyYWxzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoUExBQ0VIT0xERVIsIGxpdGVyYWxzW2lkeF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgQ1VSUkVOQ1ksIFBFUkNFTlQsIExJU1RfU0VQQVJBVE9SLCBHUk9VUF9TRVBBUkFUT1IsIENVUlJFTkNZX1BMQUNFSE9MREVSLCBQRVJDRU5UX1BMQUNFSE9MREVSLCBQT0lOVCwgRU1QVFkgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBpc05lZ2F0aXZlWmVybyBmcm9tICcuLi9jb21tb24vaXMtbmVnYXRpdmUtemVybyc7XG5pbXBvcnQgZ3JvdXBJbnRlZ2VyIGZyb20gJy4vZ3JvdXAtaW50ZWdlcic7XG5pbXBvcnQgcm91bmQgZnJvbSAnLi4vY29tbW9uL3JvdW5kJztcbmltcG9ydCB7IHNldFN0eWxlT3B0aW9ucywgc2V0Rm9ybWF0TGl0ZXJhbHMsIHJlcGxhY2VMaXRlcmFscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBTSEFSUCA9IFwiI1wiO1xuY29uc3QgWkVSTyA9IFwiMFwiO1xuXG5jb25zdCB0cmFpbGluZ1plcm9zUmVnRXhwID0gLyhcXC4oPzpbMC05XSpbMS05XSk/KTArJC9nO1xuY29uc3QgdHJhaWxpbmdQb2ludFJlZ0V4cCA9IC9cXC4kLztcbmNvbnN0IGNvbW1hUmVnRXhwID0gLywvZztcblxuZnVuY3Rpb24gdHJpbVRyYWlsaW5nWmVyb3ModmFsdWUsIGxhc3RaZXJvKSB7XG4gICAgbGV0IHRyaW1SZWdleDtcblxuICAgIGlmIChsYXN0WmVybyA9PT0gMCkge1xuICAgICAgICB0cmltUmVnZXggPSB0cmFpbGluZ1plcm9zUmVnRXhwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoYChcXFxcLlswLTldeyR7IGxhc3RaZXJvIH19WzEtOV0qKTArJGAsICdnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodHJpbVJlZ2V4LCAnJDEnKS5yZXBsYWNlKHRyYWlsaW5nUG9pbnRSZWdFeHAsIEVNUFRZKTtcbn1cblxuZnVuY3Rpb24gcm91bmROdW1iZXIoZm9ybWF0T3B0aW9ucykge1xuICAgIGxldCB7IG51bWJlciwgZm9ybWF0IH0gPSBmb3JtYXRPcHRpb25zO1xuICAgIGxldCBkZWNpbWFsSW5kZXggPSBmb3JtYXQuaW5kZXhPZihQT0lOVCk7XG5cbiAgICBpZiAoZGVjaW1hbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB6ZXJvSW5kZXggPSBmb3JtYXQubGFzdEluZGV4T2YoWkVSTykgLSBkZWNpbWFsSW5kZXg7XG4gICAgICAgIGNvbnN0IHNoYXJwSW5kZXggPSBmb3JtYXQubGFzdEluZGV4T2YoU0hBUlApIC0gZGVjaW1hbEluZGV4O1xuICAgICAgICBjb25zdCBoYXNaZXJvID0gemVyb0luZGV4ID4gLTE7XG4gICAgICAgIGNvbnN0IGhhc1NoYXJwID0gc2hhcnBJbmRleCA+IC0xO1xuICAgICAgICBsZXQgZnJhY3Rpb24gPSBudW1iZXIudG9TdHJpbmcoKS5zcGxpdChcImVcIik7XG5cbiAgICAgICAgaWYgKGZyYWN0aW9uWzFdKSB7XG4gICAgICAgICAgICBmcmFjdGlvbiA9IHJvdW5kKG51bWJlciwgTWF0aC5hYnMoZnJhY3Rpb25bMV0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyYWN0aW9uID0gZnJhY3Rpb25bMF07XG4gICAgICAgIH1cbiAgICAgICAgZnJhY3Rpb24gPSBmcmFjdGlvbi5zcGxpdChQT0lOVClbMV0gfHwgRU1QVFk7XG5cbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IGZyYWN0aW9uLmxlbmd0aDtcbiAgICAgICAgbGV0IHRyYWlsaW5nWmVyb3MgPSAtMTtcblxuICAgICAgICBpZiAoIWhhc1plcm8gJiYgIWhhc1NoYXJwKSB7XG4gICAgICAgICAgICBmb3JtYXRPcHRpb25zLmZvcm1hdCA9IGZvcm1hdC5zdWJzdHJpbmcoMCwgZGVjaW1hbEluZGV4KSArIGZvcm1hdC5zdWJzdHJpbmcoZGVjaW1hbEluZGV4ICsgMSk7XG4gICAgICAgICAgICBkZWNpbWFsSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHByZWNpc2lvbiA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzWmVybyAmJiB6ZXJvSW5kZXggPiBzaGFycEluZGV4KSB7XG4gICAgICAgICAgICBwcmVjaXNpb24gPSB6ZXJvSW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hhcnBJbmRleCA+IHplcm9JbmRleCkge1xuICAgICAgICAgICAgaWYgKGhhc1NoYXJwICYmIHByZWNpc2lvbiA+IHNoYXJwSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSBzaGFycEluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNaZXJvICYmIHByZWNpc2lvbiA8IHplcm9JbmRleCkge1xuICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IHplcm9JbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJhaWxpbmdaZXJvcyA9IGhhc1plcm8gPyB6ZXJvSW5kZXggOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZWNpc2lvbiA+IC0xKSB7XG4gICAgICAgICAgICBudW1iZXIgPSByb3VuZChudW1iZXIsIHByZWNpc2lvbik7XG4gICAgICAgICAgICBpZiAodHJhaWxpbmdaZXJvcyA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyID0gdHJpbVRyYWlsaW5nWmVyb3MobnVtYmVyLCB0cmFpbGluZ1plcm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG51bWJlciA9IHJvdW5kKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdE9wdGlvbnMubmVnYXRpdmUgJiYgKG51bWJlciAqIC0xKSA+PSAwICYmICFmb3JtYXRPcHRpb25zLm5lZ2F0aXZlWmVybykge1xuICAgICAgICBmb3JtYXRPcHRpb25zLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9ybWF0T3B0aW9ucy5udW1iZXIgPSBudW1iZXI7XG4gICAgZm9ybWF0T3B0aW9ucy5kZWNpbWFsSW5kZXggPSBkZWNpbWFsSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGlzQ29uc3RhbnRGb3JtYXQoZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdC5pbmRleE9mKFNIQVJQKSA9PT0gLTEgJiYgZm9ybWF0LmluZGV4T2YoWkVSTykgPT09IC0xO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZVNwZWNpZmljRm9ybWF0KGZvcm1hdE9wdGlvbnMpIHtcbiAgICBsZXQgeyBudW1iZXIsIGZvcm1hdCB9ID0gZm9ybWF0T3B0aW9ucztcbiAgICBmb3JtYXQgPSBmb3JtYXQuc3BsaXQoTElTVF9TRVBBUkFUT1IpO1xuICAgIGlmICgoZm9ybWF0T3B0aW9ucy5uZWdhdGl2ZSB8fCBmb3JtYXRPcHRpb25zLm5lZ2F0aXZlWmVybykgJiYgZm9ybWF0WzFdKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdFsxXTtcbiAgICAgICAgZm9ybWF0T3B0aW9ucy5oYXNOZWdhdGl2ZUZvcm1hdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgICAgY29uc3QgemVyb0Zvcm1hdCA9IGZvcm1hdFsyXTtcbiAgICAgICAgZm9ybWF0ID0gemVyb0Zvcm1hdCB8fCBmb3JtYXRbMF07XG4gICAgICAgIGlmICh6ZXJvRm9ybWF0ICYmIGlzQ29uc3RhbnRGb3JtYXQoemVyb0Zvcm1hdCkpIHtcbiAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMuY29uc3RhbnQgPSB6ZXJvRm9ybWF0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0WzBdO1xuICAgIH1cblxuICAgIGZvcm1hdE9wdGlvbnMuZm9ybWF0ID0gZm9ybWF0O1xufVxuXG5mdW5jdGlvbiBzZXRHcm91cE9wdGlvbnMoZm9ybWF0T3B0aW9ucykge1xuICAgIGZvcm1hdE9wdGlvbnMuaGFzR3JvdXAgPSBmb3JtYXRPcHRpb25zLmZvcm1hdC5pbmRleE9mKEdST1VQX1NFUEFSQVRPUikgPiAtMTtcbiAgICBpZiAoZm9ybWF0T3B0aW9ucy5oYXNHcm91cCkge1xuICAgICAgICBmb3JtYXRPcHRpb25zLmZvcm1hdCA9IGZvcm1hdE9wdGlvbnMuZm9ybWF0LnJlcGxhY2UoY29tbWFSZWdFeHAsIEVNUFRZKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlaG9sZGVySW5kZXgoaW5kZXgxLCBpbmRleDIsIHN0YXJ0KSB7XG4gICAgbGV0IGluZGV4O1xuICAgIGlmIChpbmRleDEgPT09IC0xICYmIGluZGV4MiAhPT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleDI7XG4gICAgfSBlbHNlIGlmIChpbmRleDEgIT09IC0xICYmIGluZGV4MiA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBzdGFydCA/IE1hdGgubWluKGluZGV4MSwgaW5kZXgyKSA6IE1hdGgubWF4KGluZGV4MSwgaW5kZXgyKTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiBzZXRQbGFjZWhvbGRlckluZGljZXMoZm9ybWF0T3B0aW9ucykge1xuICAgIGNvbnN0IGZvcm1hdCA9IGZvcm1hdE9wdGlvbnMuZm9ybWF0O1xuICAgIGxldCBzaGFycEluZGV4ID0gZm9ybWF0LmluZGV4T2YoU0hBUlApO1xuICAgIGxldCB6ZXJvSW5kZXggPSBmb3JtYXQuaW5kZXhPZihaRVJPKTtcblxuICAgIGxldCBzdGFydCA9IHBsYWNlaG9sZGVySW5kZXgoc2hhcnBJbmRleCwgemVyb0luZGV4LCB0cnVlKTtcblxuICAgIHNoYXJwSW5kZXggPSBmb3JtYXQubGFzdEluZGV4T2YoU0hBUlApO1xuICAgIHplcm9JbmRleCA9IGZvcm1hdC5sYXN0SW5kZXhPZihaRVJPKTtcblxuICAgIGxldCBlbmQgPSBwbGFjZWhvbGRlckluZGV4KHNoYXJwSW5kZXgsIHplcm9JbmRleCk7XG5cbiAgICBpZiAoc3RhcnQgPT09IGZvcm1hdC5sZW5ndGgpIHtcbiAgICAgICAgZW5kID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgZm9ybWF0T3B0aW9ucy5zdGFydCA9IHN0YXJ0O1xuICAgIGZvcm1hdE9wdGlvbnMuZW5kID0gZW5kO1xuICAgIGZvcm1hdE9wdGlvbnMubGFzdFplcm9JbmRleCA9IHplcm9JbmRleDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0eWxlU3ltYm9scyhudW1iZXIsIHN0eWxlLCBzeW1ib2wpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVtYmVyO1xuICAgIGlmIChzdHlsZSA9PT0gQ1VSUkVOQ1kgfHwgc3R5bGUgPT09IFBFUkNFTlQpIHtcbiAgICAgICAgcmVzdWx0ID0gRU1QVFk7XG4gICAgICAgIGZvciAobGV0IGlkeCA9IDAsIGxlbmd0aCA9IG51bWJlci5sZW5ndGg7IGlkeCA8IGxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgIGxldCBjaCA9IG51bWJlci5jaGFyQXQoaWR4KTtcbiAgICAgICAgICAgIHJlc3VsdCArPSAoY2ggPT09IENVUlJFTkNZX1BMQUNFSE9MREVSIHx8IGNoID09PSBQRVJDRU5UX1BMQUNFSE9MREVSKSA/IHN5bWJvbCA6IGNoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VQbGFjZUhvbGRlcnMoZm9ybWF0T3B0aW9ucywgaW5mbykge1xuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCwgbmVnYXRpdmUsIG5lZ2F0aXZlWmVybywgZm9ybWF0LCBkZWNpbWFsSW5kZXgsIGxhc3RaZXJvSW5kZXgsIGhhc05lZ2F0aXZlRm9ybWF0LCBoYXNHcm91cCB9ID0gZm9ybWF0T3B0aW9ucztcbiAgICBsZXQgbnVtYmVyID0gZm9ybWF0T3B0aW9ucy5udW1iZXI7XG4gICAgY29uc3QgdmFsdWUgPSBudW1iZXIudG9TdHJpbmcoKS5zcGxpdChQT0lOVCk7XG4gICAgY29uc3QgbGVuZ3RoID0gZm9ybWF0Lmxlbmd0aDtcbiAgICBjb25zdCBpbnRlZ2VyID0gdmFsdWVbMF07XG4gICAgY29uc3QgZnJhY3Rpb24gPSB2YWx1ZVsxXSB8fCBFTVBUWTtcbiAgICBjb25zdCBpbnRlZ2VyTGVuZ3RoID0gaW50ZWdlci5sZW5ndGg7XG4gICAgbGV0IHJlcGxhY2VtZW50ID0gRU1QVFk7XG5cbiAgICBudW1iZXIgPSBmb3JtYXQuc3Vic3RyaW5nKDAsIHN0YXJ0KTtcblxuICAgIGlmICgobmVnYXRpdmUgfHwgbmVnYXRpdmVaZXJvKSAmJiAhaGFzTmVnYXRpdmVGb3JtYXQpIHtcbiAgICAgICAgbnVtYmVyICs9IFwiLVwiO1xuICAgIH1cblxuICAgIGZvciAobGV0IGlkeCA9IHN0YXJ0OyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGxldCBjaCA9IGZvcm1hdC5jaGFyQXQoaWR4KTtcblxuICAgICAgICBpZiAoZGVjaW1hbEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaWYgKGVuZCAtIGlkeCA8IGludGVnZXJMZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIG51bWJlciArPSBpbnRlZ2VyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxhc3RaZXJvSW5kZXggIT09IC0xICYmIGxhc3RaZXJvSW5kZXggPCBpZHgpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IEVNUFRZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKGRlY2ltYWxJbmRleCAtIGlkeCkgPD0gaW50ZWdlckxlbmd0aCAmJiBkZWNpbWFsSW5kZXggLSBpZHggPiAtMSkge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBpbnRlZ2VyO1xuICAgICAgICAgICAgICAgIGlkeCA9IGRlY2ltYWxJbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlY2ltYWxJbmRleCA9PT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IChmcmFjdGlvbiA/IGluZm8ubnVtYmVycy5zeW1ib2xzLmRlY2ltYWwgOiBFTVBUWSkgKyBmcmFjdGlvbjtcbiAgICAgICAgICAgICAgICBpZHggKz0gZW5kIC0gZGVjaW1hbEluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaCA9PT0gWkVSTykge1xuICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBjaDtcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gU0hBUlApIHtcbiAgICAgICAgICAgIG51bWJlciArPSByZXBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNHcm91cCkge1xuICAgICAgICBudW1iZXIgPSBncm91cEludGVnZXIobnVtYmVyLCBzdGFydCArIChuZWdhdGl2ZSAmJiAhaGFzTmVnYXRpdmVGb3JtYXQgPyAxIDogMCksIE1hdGgubWF4KGVuZCwgKGludGVnZXJMZW5ndGggKyBzdGFydCkpLCBpbmZvLm51bWJlcnMuZGVjaW1hbCwgaW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKGVuZCA+PSBzdGFydCkge1xuICAgICAgICBudW1iZXIgKz0gZm9ybWF0LnN1YnN0cmluZyhlbmQgKyAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBseUN1c3RvbUZvcm1hdChmb3JtYXRPcHRpb25zLCBpbmZvKSB7XG4gICAgbGV0IG51bWJlciA9IGZvcm1hdE9wdGlvbnMubnVtYmVyO1xuICAgIGlmIChmb3JtYXRPcHRpb25zLnN0YXJ0ICE9PSAtMSkge1xuICAgICAgICBudW1iZXIgPSByZXBsYWNlUGxhY2VIb2xkZXJzKGZvcm1hdE9wdGlvbnMsIGluZm8pO1xuICAgICAgICBudW1iZXIgPSByZXBsYWNlU3R5bGVTeW1ib2xzKG51bWJlciwgZm9ybWF0T3B0aW9ucy5zdHlsZSwgZm9ybWF0T3B0aW9ucy5zeW1ib2wpO1xuICAgICAgICBudW1iZXIgPSByZXBsYWNlTGl0ZXJhbHMobnVtYmVyLCBmb3JtYXRPcHRpb25zLmxpdGVyYWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXN0b21OdW1iZXJGb3JtYXQobnVtYmVyLCBmb3JtYXQsIGluZm8pIHtcbiAgICBjb25zdCBmb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBuZWdhdGl2ZTogbnVtYmVyIDwgMCxcbiAgICAgICAgbnVtYmVyOiBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICBuZWdhdGl2ZVplcm86IGlzTmVnYXRpdmVaZXJvKG51bWJlciksXG4gICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgfTtcblxuICAgIHNldFZhbHVlU3BlY2lmaWNGb3JtYXQoZm9ybWF0T3B0aW9ucyk7XG5cbiAgICBpZiAoZm9ybWF0T3B0aW9ucy5jb25zdGFudCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0T3B0aW9ucy5jb25zdGFudDtcbiAgICB9XG5cbiAgICBzZXRGb3JtYXRMaXRlcmFscyhmb3JtYXRPcHRpb25zKTtcbiAgICBzZXRTdHlsZU9wdGlvbnMoZm9ybWF0T3B0aW9ucywgaW5mbyk7XG4gICAgc2V0R3JvdXBPcHRpb25zKGZvcm1hdE9wdGlvbnMpO1xuICAgIHJvdW5kTnVtYmVyKGZvcm1hdE9wdGlvbnMpO1xuICAgIHNldFBsYWNlaG9sZGVySW5kaWNlcyhmb3JtYXRPcHRpb25zKTtcblxuICAgIHJldHVybiBhcHBseUN1c3RvbUZvcm1hdChmb3JtYXRPcHRpb25zLCBpbmZvKTtcbn0iLCJpbXBvcnQgeyBDVVJSRU5DWSwgQUNDT1VOVElORywgREVDSU1BTCwgUEVSQ0VOVCwgU0NJRU5USUZJQyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL2NvbW1vbi9pcy1zdHJpbmcnO1xuXG5jb25zdCBzdGFuZGFyZEZvcm1hdFJlZ0V4cCA9IC9eKG58Y3xwfGV8YSkoXFxkKikkL2k7XG5cbmZ1bmN0aW9uIHN0YW5kYXJkRm9ybWF0T3B0aW9ucyhmb3JtYXQpIHtcbiAgICBjb25zdCBmb3JtYXRBbmRQcmVjaXNpb24gPSBzdGFuZGFyZEZvcm1hdFJlZ0V4cC5leGVjKGZvcm1hdCk7XG5cbiAgICBpZiAoZm9ybWF0QW5kUHJlY2lzaW9uKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdHlsZTogREVDSU1BTFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzdHlsZSA9IGZvcm1hdEFuZFByZWNpc2lvblsxXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChzdHlsZSA9PT0gXCJjXCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGUgPSBDVVJSRU5DWTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGUgPSBBQ0NPVU5USU5HO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlID09PSBcInBcIikge1xuICAgICAgICAgICAgb3B0aW9ucy5zdHlsZSA9IFBFUkNFTlQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUgPT09IFwiZVwiKSB7XG4gICAgICAgICAgICBvcHRpb25zLnN0eWxlID0gU0NJRU5USUZJQztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtYXRBbmRQcmVjaXNpb25bMl0pIHtcbiAgICAgICAgICAgIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gb3B0aW9ucy5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPSBwYXJzZUludChmb3JtYXRBbmRQcmVjaXNpb25bMl0sIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0T3B0aW9ucyhmb3JtYXQpIHtcbiAgICBsZXQgb3B0aW9ucztcbiAgICBpZiAoaXNTdHJpbmcoZm9ybWF0KSkge1xuICAgICAgICBvcHRpb25zID0gc3RhbmRhcmRGb3JtYXRPcHRpb25zKGZvcm1hdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn0iLCJpbXBvcnQgeyBsb2NhbGVJbmZvIH0gZnJvbSAnLi4vY2xkcic7XG5pbXBvcnQgeyBERUNJTUFMLCBERUZBVUxUX0xPQ0FMRSwgTlVNQkVSX1BMQUNFSE9MREVSLCBFTVBUWSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHN0YW5kYXJkTnVtYmVyRm9ybWF0IGZyb20gJy4vc3RhbmRhcmQtbnVtYmVyLWZvcm1hdCc7XG5pbXBvcnQgY3VzdG9tTnVtYmVyRm9ybWF0IGZyb20gJy4vY3VzdG9tLW51bWJlci1mb3JtYXQnO1xuaW1wb3J0IGZvcm1hdE9wdGlvbnMgZnJvbSAnLi9mb3JtYXQtb3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXIsIGZvcm1hdCA9IE5VTUJFUl9QTEFDRUhPTERFUiwgbG9jYWxlID0gREVGQVVMVF9MT0NBTEUpIHtcbiAgICBpZiAobnVtYmVyID09PSB1bmRlZmluZWQgfHwgbnVtYmVyID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhudW1iZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGluZm8gPSBsb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZvcm1hdE9wdGlvbnMoZm9ybWF0KTtcblxuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBvcHRpb25zLnN0eWxlIHx8IERFQ0lNQUw7XG4gICAgICAgIHJlc3VsdCA9IHN0YW5kYXJkTnVtYmVyRm9ybWF0KG51bWJlciwgT2JqZWN0LmFzc2lnbih7fSwgaW5mby5udW1iZXJzW3N0eWxlXSwgb3B0aW9ucyksIGluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbU51bWJlckZvcm1hdChudW1iZXIsIGZvcm1hdCwgaW5mbyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcbn0iLCJpbXBvcnQgeyBsb2NhbGVJbmZvLCBsb2NhbGVDdXJyZW5jeSwgY3VycmVuY3lEaXNwbGF5cyB9IGZyb20gJy4uL2NsZHInO1xuaW1wb3J0IHsgUEVSQ0VOVCwgTlVNQkVSX1BMQUNFSE9MREVSLCBDVVJSRU5DWV9QTEFDRUhPTERFUiwgREVGQVVMVF9MT0NBTEUsIEVNUFRZLCBQT0lOVCB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgc2V0U3R5bGVPcHRpb25zLCBzZXRGb3JtYXRMaXRlcmFscyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL2NvbW1vbi9pcy1udW1iZXInO1xuaW1wb3J0IGlzQ3VycmVuY3lTdHlsZSBmcm9tICcuL2lzLWN1cnJlbmN5LXN0eWxlJztcbmltcG9ydCBmb3JtYXRPcHRpb25zIGZyb20gJy4vZm9ybWF0LW9wdGlvbnMnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4uL2NvbW1vbi9pcy1zdHJpbmcnO1xuXG5jb25zdCBleHBvbmVudFJlZ0V4cCA9IC9bZUVdWy0rXT9bMC05XSsvO1xuY29uc3Qgbm9uQnJlYWtpbmdTcGFjZVJlZ0V4cCA9IC9cXHUwMEEwL2c7XG5cbmZ1bmN0aW9uIGNsZWFuTmVnYXRpdmVQYXR0ZXJuKG51bWJlciwgcGF0dGVybnMpIHtcbiAgICBpZiAocGF0dGVybnMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IChwYXR0ZXJuc1sxXSB8fCBFTVBUWSkucmVwbGFjZShDVVJSRU5DWV9QTEFDRUhPTERFUiwgRU1QVFkpLnNwbGl0KE5VTUJFUl9QTEFDRUhPTERFUik7XG4gICAgICAgIGlmIChudW1iZXIuaW5kZXhPZihwYXJ0c1swXSkgPiAtMSAmJiBudW1iZXIuaW5kZXhPZihwYXJ0c1sxXSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlci5yZXBsYWNlKHBhcnRzWzBdLCBFTVBUWSkucmVwbGFjZShwYXJ0c1sxXSwgRU1QVFkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbkN1cnJlbmN5TnVtYmVyKHZhbHVlLCBpbmZvLCBmb3JtYXQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZm9ybWF0T3B0aW9ucyhmb3JtYXQpIHx8IHt9O1xuICAgIGxldCBpc0N1cnJlbmN5ID0gaXNDdXJyZW5jeVN0eWxlKG9wdGlvbnMuc3R5bGUpO1xuICAgIGxldCBudW1iZXIgPSB2YWx1ZTtcbiAgICBsZXQgbmVnYXRpdmU7XG5cbiAgICBjb25zdCBjdXJyZW5jeSA9IG9wdGlvbnMuY3VycmVuY3kgfHwgbG9jYWxlQ3VycmVuY3koaW5mbywgaXNDdXJyZW5jeSk7XG5cbiAgICBpZiAoY3VycmVuY3kpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheXMgPSBjdXJyZW5jeURpc3BsYXlzKGluZm8sIGN1cnJlbmN5LCBpc0N1cnJlbmN5KTtcbiAgICAgICAgaWYgKGRpc3BsYXlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBkaXNwbGF5cy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXkgPSBkaXNwbGF5c1tpZHhdO1xuICAgICAgICAgICAgICAgIGlmIChudW1iZXIuaW5jbHVkZXMoZGlzcGxheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoZGlzcGxheSwgRU1QVFkpO1xuICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ3VycmVuY3kpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuTnVtYmVyID0gY2xlYW5OZWdhdGl2ZVBhdHRlcm4obnVtYmVyLCBpbmZvLm51bWJlcnMuY3VycmVuY3kucGF0dGVybnMpIHx8XG4gICAgICAgICAgICAgICAgY2xlYW5OZWdhdGl2ZVBhdHRlcm4obnVtYmVyLCBpbmZvLm51bWJlcnMuYWNjb3VudGluZy5wYXR0ZXJucyk7XG5cbiAgICAgICAgICAgIGlmIChjbGVhbk51bWJlcikge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBudW1iZXIgPSBjbGVhbk51bWJlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNsZWFuTGl0ZXJhbHMobnVtYmVyLCBmb3JtYXRPcHRpb25zKSB7XG4gICAgY29uc3QgbGl0ZXJhbHMgPSBmb3JtYXRPcHRpb25zLmxpdGVyYWxzO1xuICAgIGxldCByZXN1bHQgPSBudW1iZXI7XG5cbiAgICBpZiAobGl0ZXJhbHMpIHtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbGl0ZXJhbHMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobGl0ZXJhbHNbaWR4XSwgRU1QVFkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZGl2aWRlQnkxMDAobnVtYmVyKSB7XG4gICAgY29uc3Qgc3RyTnVtYmVyID0gU3RyaW5nKG51bWJlcik7XG4gICAgY29uc3QgcG9pbnRJbmRleCA9IHN0ck51bWJlci5pbmRleE9mKFBPSU5UKTtcbiAgICBjb25zdCB6ZXJvZXNDb3VudCA9IDI7XG4gICAgbGV0IHJlc3VsdCA9IG51bWJlciAvIE1hdGgucG93KDEwLCB6ZXJvZXNDb3VudCk7XG5cbiAgICBpZiAocG9pbnRJbmRleCA9PT0gLTEgfHwgU3RyaW5nKHJlc3VsdCkubGVuZ3RoIDw9IHN0ck51bWJlci5sZW5ndGggKyB6ZXJvZXNDb3VudCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IGZyYWN0aW9uRGlnaXRzID0gc3RyTnVtYmVyLmxlbmd0aCAtIHBvaW50SW5kZXggKyAxICsgemVyb2VzQ291bnQ7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocmVzdWx0LnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VOdW1iZXIodmFsdWUsIGxvY2FsZSA9IERFRkFVTFRfTE9DQUxFLCBmb3JtYXQgPSB7fSkge1xuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IGxvY2FsZUluZm8obG9jYWxlKTtcbiAgICBjb25zdCBzeW1ib2xzID0gaW5mby5udW1iZXJzLnN5bWJvbHM7XG5cbiAgICBsZXQgbnVtYmVyID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICBsZXQgZm9ybWF0T3B0aW9ucyA9IGZvcm1hdCB8fCB7fTtcbiAgICBsZXQgaXNQZXJjZW50O1xuXG4gICAgaWYgKGlzU3RyaW5nKGZvcm1hdCkpIHtcbiAgICAgICAgZm9ybWF0T3B0aW9ucyA9IHsgZm9ybWF0OiBmb3JtYXQgfTtcbiAgICAgICAgc2V0Rm9ybWF0TGl0ZXJhbHMoZm9ybWF0T3B0aW9ucyk7XG4gICAgICAgIG51bWJlciA9IGNsZWFuTGl0ZXJhbHMobnVtYmVyLCBmb3JtYXRPcHRpb25zKTtcblxuICAgICAgICBzZXRTdHlsZU9wdGlvbnMoZm9ybWF0T3B0aW9ucywgaW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdE9wdGlvbnMuc3R5bGUgPT09IFBFUkNFTlQgfHwgbnVtYmVyLmluZGV4T2Yoc3ltYm9scy5wZXJjZW50U2lnbikgPiAtMSkge1xuICAgICAgICBudW1iZXIgPSBudW1iZXIucmVwbGFjZShzeW1ib2xzLnBlcmNlbnRTaWduLCBFTVBUWSk7XG4gICAgICAgIGlzUGVyY2VudCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGV4cG9uZW50UmVnRXhwLnRlc3QobnVtYmVyKSkge1xuICAgICAgICBudW1iZXIgPSBwYXJzZUZsb2F0KG51bWJlci5yZXBsYWNlKHN5bWJvbHMuZGVjaW1hbCwgUE9JTlQpKTtcbiAgICAgICAgcmV0dXJuIGlzTmFOKG51bWJlcikgPyBudWxsIDogbnVtYmVyO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmVnYXRpdmU6IG5lZ2F0aXZlQ3VycmVuY3ksIG51bWJlcjogY3VycmVuY3lOdW1iZXIgfSA9IGNsZWFuQ3VycmVuY3lOdW1iZXIobnVtYmVyLCBpbmZvLCBmb3JtYXRPcHRpb25zKTtcbiAgICBudW1iZXIgPSBTdHJpbmcoY3VycmVuY3lOdW1iZXIpLnRyaW0oKTtcblxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbkluZGV4ID0gbnVtYmVyLmluZGV4T2YoXCItXCIpO1xuICAgIGlmIChuZWdhdGl2ZVNpZ25JbmRleCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGlzTmVnYXRpdmUgPSBuZWdhdGl2ZVNpZ25JbmRleCA+IC0xO1xuXG4gICAgaXNOZWdhdGl2ZSA9IG5lZ2F0aXZlQ3VycmVuY3kgIT09IHVuZGVmaW5lZCA/IG5lZ2F0aXZlQ3VycmVuY3kgOiBpc05lZ2F0aXZlO1xuXG4gICAgbnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoXCItXCIsIEVNUFRZKVxuICAgICAgICAgIC5yZXBsYWNlKG5vbkJyZWFraW5nU3BhY2VSZWdFeHAsIFwiIFwiKVxuICAgICAgICAgIC5zcGxpdChzeW1ib2xzLmdyb3VwLnJlcGxhY2Uobm9uQnJlYWtpbmdTcGFjZVJlZ0V4cCwgXCIgXCIpKS5qb2luKEVNUFRZKVxuICAgICAgICAgIC5yZXBsYWNlKHN5bWJvbHMuZGVjaW1hbCwgUE9JTlQpO1xuXG4gICAgbnVtYmVyID0gcGFyc2VGbG9hdChudW1iZXIpO1xuXG4gICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgbnVtYmVyID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgICAgbnVtYmVyICo9IC0xO1xuICAgIH1cblxuICAgIGlmIChudW1iZXIgJiYgaXNQZXJjZW50KSB7XG4gICAgICAgIG51bWJlciA9IGRpdmlkZUJ5MTAwKG51bWJlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bWJlcjtcbn1cbiIsImNvbnN0IGZvcm1hdFJlZ0V4cCA9IC9cXHsoXFxkKyl9L2c7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFN0cmluZyhmb3JtYXQpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBhcmd1bWVudHM7XG5cbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoZm9ybWF0UmVnRXhwLCAobWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW3BhcnNlSW50KGluZGV4LCAxMCkgKyAxXTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG59IiwiaW1wb3J0IGZvcm1hdFN0cmluZyBmcm9tICcuLi9jb21tb24vZm9ybWF0LXN0cmluZyc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi4vY29tbW9uL2lzLXN0cmluZyc7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5jb25zdCBSRU1PVkFMX1BFTkFMVFkgPSAxMjA7XG5jb25zdCBBRERJVElPTl9QRU5BTFRZID0gMjA7XG5jb25zdCBMRU5HSFRfREVMVEEgPSBbIDIsIDEsIDUsIDMsIDQgXTtcbmNvbnN0IExPTkdfTEVTU19QRU5BTFRZX0RFTFRBID0gLTI7XG5jb25zdCBTSE9SVF9MRVNTX1BFTkFMVFlfREVMVEEgPSAtMTtcbmNvbnN0IFNIT1JUX01PUkVfUEVOQUxUWV9ERUxUQSA9IDE7XG5jb25zdCBMT05HX01PUkVfUEVOQUxUWV9ERUxUQSA9IDI7XG5cbmNvbnN0IFBFTkFMVElFUyA9IHtcbiAgICBbTE9OR19MRVNTX1BFTkFMVFlfREVMVEEudG9TdHJpbmcoKV06IDgsXG4gICAgW1NIT1JUX0xFU1NfUEVOQUxUWV9ERUxUQS50b1N0cmluZygpXTogNixcbiAgICBbTE9OR19NT1JFX1BFTkFMVFlfREVMVEEudG9TdHJpbmcoKV06IDYsXG4gICAgW1NIT1JUX01PUkVfUEVOQUxUWV9ERUxUQS50b1N0cmluZygpXTogM1xufTtcblxuY29uc3QgVkFMVUVfRk9STUFUX0xFTkdUSCA9IHtcbiAgICBudW1lcmljOiAxLFxuICAgIFwiMi1kaWdpdFwiOiAyLFxuICAgIHNob3J0OiAzLFxuICAgIGxvbmc6IDQsXG4gICAgbmFycm93OiA1XG59O1xuXG5jb25zdCBUSU1FX1NQRUNJRklFUlNfUkVHRVggPSAvW2hIbXNTelpvT3ZWeFhdLztcblxuZnVuY3Rpb24gZ2V0SG91clNwZWNpZmllcihvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuaG91cjEyID8gXCJoXCIgOiBcIkhcIjtcbn1cblxuY29uc3QgREFURV9PUFRJT05TX01BUCA9IFsge1xuICAgIGtleTogXCJlcmFcIixcbiAgICBzcGVjaWZpZXI6IFwiR1wiXG59LCB7XG4gICAga2V5OiBcInllYXJcIixcbiAgICBzcGVjaWZpZXI6IFwieVwiXG59LCB7XG4gICAga2V5OiBcIm1vbnRoXCIsXG4gICAgc3BlY2lmaWVyOiBcIk1cIlxufSwge1xuICAgIGtleTogXCJkYXlcIixcbiAgICBzcGVjaWZpZXI6IFwiZFwiXG59LCB7XG4gICAga2V5OiBcIndlZWtkYXlcIixcbiAgICBzcGVjaWZpZXI6IFwiRVwiXG59LCB7XG4gICAga2V5OiBcImhvdXJcIixcbiAgICBnZXRTcGVjaWZpZXI6IGdldEhvdXJTcGVjaWZpZXJcbn0sIHtcbiAgICBrZXk6IFwibWludXRlXCIsXG4gICAgc3BlY2lmaWVyOiBcIm1cIlxufSwge1xuICAgIGtleTogXCJzZWNvbmRcIixcbiAgICBzcGVjaWZpZXI6IFwic1wiXG59LCB7XG4gICAga2V5OiBcInRpbWVab25lTmFtZVwiLFxuICAgIHNwZWNpZmllcjogXCJ6XCJcbn0gXTtcblxuY29uc3QgU1RBTkRfQUxPTkVfU1BFQ0lGSUVSUyA9IHtcbiAgICBlOiAnYycsXG4gICAgRTogJ2MnLFxuICAgIE06ICdMJyxcbiAgICBROiAncSdcbn07XG5cbmNvbnN0IHNwZWNpZmllcnNSZWdleCA9IHt9O1xuY29uc3QgcmVzb2x2ZWRGb3JtYXRzID0ge307XG5cbmZ1bmN0aW9uIGdldFNwZWNpZmllclJlZ2V4KHNwZWNpZmllcikge1xuICAgIGlmICghc3BlY2lmaWVyc1JlZ2V4W3NwZWNpZmllcl0pIHtcbiAgICAgICAgc3BlY2lmaWVyc1JlZ2V4W3NwZWNpZmllcl0gPSBuZXcgUmVnRXhwKHNwZWNpZmllciArIFwiK1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHNwZWNpZmllcnNSZWdleFtzcGVjaWZpZXJdO1xufVxuXG5mdW5jdGlvbiBza2VsZXRvblNwZWNpZmllcnMoc2tlbGV0b24pIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IHNrZWxldG9uLmNoYXJBdCgwKTtcbiAgICBsZXQgc3BlY2lmaWVyID0gY3VycmVudDtcbiAgICBmb3IgKGxldCBpZHggPSAxOyBpZHggPCBza2VsZXRvbi5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGxldCBjaGFyYWN0ZXIgPSBza2VsZXRvbi5jaGFyQXQoaWR4KTtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gc3BlY2lmaWVyKSB7XG4gICAgICAgICAgICBjdXJyZW50ICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgY3VycmVudCA9IHNwZWNpZmllciA9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmluZEJlc3RNYXRjaChzcGVjaWZpZXJzLCBhdmFpbGFibGVGb3JtYXRzKSB7XG4gICAgY29uc3Qgc3BlY2lmaWVyc0xlbmd0aCA9IHNwZWNpZmllcnMubGVuZ3RoO1xuICAgIGxldCBtYXhTY29yZSA9IC1OdW1iZXIuTUFYX1ZBTFVFO1xuICAgIGxldCBiZXN0TWF0Y2hlcywgcmVzdWx0O1xuICAgIGZvciAobGV0IGZvcm1hdCBpbiBhdmFpbGFibGVGb3JtYXRzKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnRGb3JtYXQgPSBmb3JtYXQucmVwbGFjZShcInZcIiwgXCJ6XCIpO1xuICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBzcGVjaWZpZXJzTGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVyID0gc3BlY2lmaWVyc1tpZHhdO1xuICAgICAgICAgICAgbGV0IHNwZWNpZmllclJlZ2V4ID0gZ2V0U3BlY2lmaWVyUmVnZXgoc3BlY2lmaWVyWzBdKTtcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IChzcGVjaWZpZXJSZWdleC5leGVjKGN1cnJlbnRGb3JtYXQpIHx8IFtdKVswXTtcblxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHNjb3JlIC09IFJFTU9WQUxfUEVOQUxUWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEZvcm1hdCA9IGN1cnJlbnRGb3JtYXQucmVwbGFjZShtYXRjaCwgRU1QVFkpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggIT09IHNwZWNpZmllci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gTWF0aC5tYXgoTWF0aC5taW4oTEVOR0hUX0RFTFRBW21hdGNoLmxlbmd0aF0gLSBMRU5HSFRfREVMVEFbc3BlY2lmaWVyLmxlbmd0aF0sIDIpLCAtMik7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IFBFTkFMVElFU1tkZWx0YV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuXG4gICAgICAgICAgICBpZiAoc2NvcmUgPCBtYXhTY29yZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRGb3JtYXQubGVuZ3RoKSB7XG4gICAgICAgICAgICBzY29yZSAtPSBza2VsZXRvblNwZWNpZmllcnMoY3VycmVudEZvcm1hdCkubGVuZ3RoICogQURESVRJT05fUEVOQUxUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY29yZSA+IG1heFNjb3JlKSB7XG4gICAgICAgICAgICBtYXhTY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgYmVzdE1hdGNoZXMgPSBtYXRjaGVzO1xuICAgICAgICAgICAgcmVzdWx0ID0gYXZhaWxhYmxlRm9ybWF0c1tmb3JtYXRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoXCJ2XCIsIFwielwiKTtcblxuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHNwZWNpZmllcnNMZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGNvbnN0IGJlc3RNYXRjaCA9IGJlc3RNYXRjaGVzW2lkeF07XG4gICAgICAgIGlmIChiZXN0TWF0Y2ggJiYgYmVzdE1hdGNoICE9PSBzcGVjaWZpZXJzW2lkeF0pIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoU3BlY2lmaWVyID0gYmVzdE1hdGNoZXNbaWR4XVswXTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGdldFNwZWNpZmllclJlZ2V4KG1hdGNoU3BlY2lmaWVyKSwgc3BlY2lmaWVyc1tpZHhdKTtcbiAgICAgICAgICAgIGlmIChTVEFORF9BTE9ORV9TUEVDSUZJRVJTW21hdGNoU3BlY2lmaWVyXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGdldFNwZWNpZmllclJlZ2V4KFNUQU5EX0FMT05FX1NQRUNJRklFUlNbbWF0Y2hTcGVjaWZpZXJdKSwgc3BlY2lmaWVyc1tpZHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNhY2hlRm9ybWF0KHNrZWxldG9uLCBmb3JtYXQsIGxvY2FsZSkge1xuICAgIGlmICghcmVzb2x2ZWRGb3JtYXRzW2xvY2FsZV0pIHtcbiAgICAgICAgcmVzb2x2ZWRGb3JtYXRzW2xvY2FsZV0gPSB7fTtcbiAgICB9XG4gICAgcmVzb2x2ZWRGb3JtYXRzW2xvY2FsZV1bc2tlbGV0b25dID0gZm9ybWF0O1xufVxuXG5cbmZ1bmN0aW9uIHNrZWxldG9uRm9ybWF0KHNrZWxldG9uLCBpbmZvKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlRm9ybWF0cyA9IGluZm8uY2FsZW5kYXIuZGF0ZVRpbWVGb3JtYXRzLmF2YWlsYWJsZUZvcm1hdHM7XG4gICAgaWYgKGF2YWlsYWJsZUZvcm1hdHNbc2tlbGV0b25dKSB7XG4gICAgICAgIHJldHVybiBhdmFpbGFibGVGb3JtYXRzW3NrZWxldG9uXTtcbiAgICB9XG4gICAgaWYgKHJlc29sdmVkRm9ybWF0c1tpbmZvLm5hbWVdICYmIHJlc29sdmVkRm9ybWF0c1tpbmZvLm5hbWVdW3NrZWxldG9uXSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWRGb3JtYXRzW2luZm8ubmFtZV1bc2tlbGV0b25dO1xuICAgIH1cbiAgICBjb25zdCB0aW1lU3RhcnRJbmRleCA9IHNrZWxldG9uLnNlYXJjaChUSU1FX1NQRUNJRklFUlNfUkVHRVgpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHRpbWVTdGFydEluZGV4ID4gMCkge1xuICAgICAgICBjb25zdCBkYXRlU2tlbGV0b24gPSBza2VsZXRvbi5zdWJzdHIoMCwgdGltZVN0YXJ0SW5kZXgpO1xuICAgICAgICBjb25zdCB0aW1lU2tlbGV0b24gPSBza2VsZXRvbi5zdWJzdHIodGltZVN0YXJ0SW5kZXgpO1xuXG4gICAgICAgIHJlc3VsdCA9IGZvcm1hdFN0cmluZyhpbmZvLmNhbGVuZGFyLmRhdGVUaW1lRm9ybWF0cy5zaG9ydCwgLy9zaG91bGQgYmUgZGV0ZXJpbWVkIGJhc2VkIG9uIHNwZWNpZmllcnNcbiAgICAgICAgICAgIGF2YWlsYWJsZUZvcm1hdHNbdGltZVNrZWxldG9uXSB8fCBmaW5kQmVzdE1hdGNoKHNrZWxldG9uU3BlY2lmaWVycyh0aW1lU2tlbGV0b24pLCBhdmFpbGFibGVGb3JtYXRzKSxcbiAgICAgICAgICAgIGF2YWlsYWJsZUZvcm1hdHNbZGF0ZVNrZWxldG9uXSB8fCBmaW5kQmVzdE1hdGNoKHNrZWxldG9uU3BlY2lmaWVycyhkYXRlU2tlbGV0b24pLCBhdmFpbGFibGVGb3JtYXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmluZEJlc3RNYXRjaChza2VsZXRvblNwZWNpZmllcnMoc2tlbGV0b24pLCBhdmFpbGFibGVGb3JtYXRzKTtcbiAgICB9XG5cbiAgICBjYWNoZUZvcm1hdChza2VsZXRvbiwgcmVzdWx0LCBpbmZvLm5hbWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNrZWxldG9uRnJvbU9wdGlvbnMob3B0aW9ucykge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBEQVRFX09QVElPTlNfTUFQLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IERBVEVfT1BUSU9OU19NQVBbaWR4XTtcbiAgICAgICAgbGV0IGZpZWxkID0gb3B0aW9uLmtleTtcbiAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uc1tmaWVsZF07XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHNwY2lmaWVyID0gb3B0aW9uLnNwZWNpZmllciB8fCBvcHRpb24uZ2V0U3BlY2lmaWVyKG9wdGlvbnMpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3BjaWZpZXIucmVwZWF0KFZBTFVFX0ZPUk1BVF9MRU5HVEhbdmFsdWVdKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oRU1QVFkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRlUGF0dGVybihmb3JtYXQsIGluZm8pIHtcbiAgICBjb25zdCBjYWxlbmRhciA9IGluZm8uY2FsZW5kYXI7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAoaXNTdHJpbmcoZm9ybWF0KSkge1xuICAgICAgICBpZiAoY2FsZW5kYXIucGF0dGVybnNbZm9ybWF0XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gY2FsZW5kYXIucGF0dGVybnNbZm9ybWF0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZvcm1hdDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm9ybWF0KSB7XG4gICAgICAgIGlmIChmb3JtYXQucGF0dGVybikge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC5wYXR0ZXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNrZWxldG9uID0gZm9ybWF0LnNrZWxldG9uO1xuICAgICAgICBpZiAoIXNrZWxldG9uKSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0LmRhdGV0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZm9ybWF0U3RyaW5nKGNhbGVuZGFyLmRhdGVUaW1lRm9ybWF0c1tmb3JtYXQuZGF0ZXRpbWVdLCBjYWxlbmRhci50aW1lRm9ybWF0c1tmb3JtYXQuZGF0ZXRpbWVdLCBjYWxlbmRhci5kYXRlRm9ybWF0c1tmb3JtYXQuZGF0ZXRpbWVdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0LmRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxlbmRhci5kYXRlRm9ybWF0c1tmb3JtYXQuZGF0ZV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdC50aW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsZW5kYXIudGltZUZvcm1hdHNbZm9ybWF0LnRpbWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBza2VsZXRvbiA9IHNrZWxldG9uRnJvbU9wdGlvbnMoZm9ybWF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChza2VsZXRvbikge1xuICAgICAgICAgICAgcmVzdWx0ID0gc2tlbGV0b25Gb3JtYXQoc2tlbGV0b24sIGluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsZW5kYXIucGF0dGVybnMuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZU5hbWVUeXBlKGZvcm1hdExlbmd0aCkge1xuICAgIGxldCBuYW1lVHlwZTtcbiAgICBpZiAoZm9ybWF0TGVuZ3RoIDw9IDMpIHtcbiAgICAgICAgbmFtZVR5cGUgPSBcImFiYnJldmlhdGVkXCI7XG4gICAgfSBlbHNlIGlmIChmb3JtYXRMZW5ndGggPT09IDQpIHtcbiAgICAgICAgbmFtZVR5cGUgPSBcIndpZGVcIjtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdExlbmd0aCA9PT0gNSkge1xuICAgICAgICBuYW1lVHlwZSA9IFwibmFycm93XCI7XG4gICAgfSBlbHNlIGlmIChmb3JtYXRMZW5ndGggPT09IDYpIHtcbiAgICAgICAgbmFtZVR5cGUgPSBcInNob3J0XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVUeXBlO1xufSIsImltcG9ydCBkYXRlRm9ybWF0TmFtZXMgZnJvbSAnLi4vY2xkci9kYXRlLWZvcm1hdC1uYW1lcyc7XG5pbXBvcnQgZGF0ZU5hbWVUeXBlIGZyb20gJy4vZGF0ZS1uYW1lLXR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXROYW1lcyhsb2NhbGUsIHR5cGUsIGZvcm1hdExlbmd0aCwgc3RhbmRBbG9uZSwgbG93ZXIpIHtcbiAgICByZXR1cm4gZGF0ZUZvcm1hdE5hbWVzKGxvY2FsZSwge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBuYW1lVHlwZTogZGF0ZU5hbWVUeXBlKGZvcm1hdExlbmd0aCksXG4gICAgICAgIHN0YW5kQWxvbmU6IHN0YW5kQWxvbmUsXG4gICAgICAgIGxvd2VyOiBsb3dlclxuICAgIH0pO1xufSIsImZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuKSB7XG4gICAgcmV0dXJuIHR5cGVvZihmdW4pID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5nZXRUaW1lKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmdldE1vbnRoKTtcbn1cbiIsImNvbnN0IE1PTlRIID0gJ21vbnRoJztcbmNvbnN0IEhPVVIgPSAnaG91cic7XG5jb25zdCBaT05FID0gJ3pvbmUnO1xuY29uc3QgV0VFS0RBWSA9ICd3ZWVrZGF5JztcbmNvbnN0IFFVQVJURVIgPSAncXVhcnRlcic7XG5cbmNvbnN0IERBVEVfRklFTERfTUFQID0ge1xuICAgICdHJzogJ2VyYScsXG4gICAgJ3knOiAneWVhcicsXG4gICAgJ3EnOiBRVUFSVEVSLFxuICAgICdRJzogUVVBUlRFUixcbiAgICAnTSc6IE1PTlRILFxuICAgICdMJzogTU9OVEgsXG4gICAgJ2QnOiAnZGF5JyxcbiAgICAnRSc6IFdFRUtEQVksXG4gICAgJ2MnOiBXRUVLREFZLFxuICAgICdlJzogV0VFS0RBWSxcbiAgICAnaCc6IEhPVVIsXG4gICAgJ0gnOiBIT1VSLFxuICAgICdrJzogSE9VUixcbiAgICAnSyc6IEhPVVIsXG4gICAgJ20nOiAnbWludXRlJyxcbiAgICAncyc6ICdzZWNvbmQnLFxuICAgICdTJzogJ21pbGxpc2Vjb25kJyxcbiAgICAnYSc6ICdkYXlwZXJpb2QnLFxuICAgICd4JzogWk9ORSxcbiAgICAnWCc6IFpPTkUsXG4gICAgJ3onOiBaT05FLFxuICAgICdaJzogWk9ORVxufTtcblxuY29uc3QgZGF0ZUZvcm1hdFJlZ0V4cCA9IC9kezEsMn18RXsxLDZ9fGV7MSw2fXxjezMsNn18Y3sxfXxNezEsNX18THsxLDV9fHl7MSw0fXxIezEsMn18aHsxLDJ9fGt7MSwyfXxLezEsMn18bXsxLDJ9fGF7MSw1fXxzezEsMn18U3sxLDN9fHp7MSw0fXxaezEsNX18eHsxLDV9fFh7MSw1fXxHezEsNX18cXsxLDV9fFF7MSw1fXxcIlteXCJdKlwifCdbXiddKicvZztcblxuZXhwb3J0IHsgZGF0ZUZvcm1hdFJlZ0V4cCwgREFURV9GSUVMRF9NQVAgfTsiLCJpbXBvcnQgeyBsb2NhbGVJbmZvLCBmaXJzdERheSB9IGZyb20gJy4uL2NsZHInO1xuaW1wb3J0IHsgREVGQVVMVF9MT0NBTEUsIEVNUFRZIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgZm9ybWF0U3RyaW5nIGZyb20gJy4uL2NvbW1vbi9mb3JtYXQtc3RyaW5nJztcbmltcG9ydCBkYXRlUGF0dGVybiBmcm9tICcuL2RhdGUtcGF0dGVybic7XG5pbXBvcnQgZm9ybWF0TmFtZXMgZnJvbSAnLi9mb3JtYXQtbmFtZXMnO1xuaW1wb3J0IHBhZCBmcm9tICcuLi9jb21tb24vcGFkJztcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi4vY29tbW9uL2lzLWRhdGUnO1xuaW1wb3J0IHsgZGF0ZUZvcm1hdFJlZ0V4cCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gZm9ybWF0RGF5T2ZXZWVrSW5kZXgoZGF5LCBmb3JtYXRMZW5ndGgsIGxvY2FsZUluZm8pIHtcbiAgICBjb25zdCBmaXJzdERheUluZGV4ID0gZmlyc3REYXkobG9jYWxlSW5mbyk7XG4gICAgbGV0IGRheUluZGV4O1xuICAgIGlmIChkYXkgPCBmaXJzdERheUluZGV4KSB7XG4gICAgICAgIGRheUluZGV4ID0gNyAtIGZpcnN0RGF5SW5kZXggKyBkYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF5SW5kZXggPSBkYXkgLSBmaXJzdERheUluZGV4O1xuICAgIH1cblxuICAgIHJldHVybiBkYXlJbmRleCArIDE7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1vbnRoKG1vbnRoLCBmb3JtYXRMZW5ndGgsIGluZm8sIHN0YW5kQWxvbmUpIHtcbiAgICBpZiAoZm9ybWF0TGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgcmV0dXJuIHBhZChtb250aCArIDEsIGZvcm1hdExlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXROYW1lcyhpbmZvLCBcIm1vbnRoc1wiLCBmb3JtYXRMZW5ndGgsIHN0YW5kQWxvbmUpW21vbnRoXTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UXVhcnRlcihkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8sIHN0YW5kQWxvbmUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5mbG9vcihkYXRlLmdldE1vbnRoKCkgLyAzKTtcbiAgICBpZiAoZm9ybWF0TGVuZ3RoIDwgMykge1xuICAgICAgICByZXR1cm4gcXVhcnRlciArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdE5hbWVzKGluZm8sIFwicXVhcnRlcnNcIiwgZm9ybWF0TGVuZ3RoLCBzdGFuZEFsb25lKVtxdWFydGVyXTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lWm9uZShkYXRlLCBpbmZvLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBzaG9ydEhvdXJzLCBvcHRpb25hbE1pbnV0ZXMsIHNlcGFyYXRvciwgbG9jYWxpemVkTmFtZSwgelplcm9PZmZzZXQgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qgb2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XG4gICAgaWYgKG9mZnNldCA9PT0gMCAmJiB6WmVyb09mZnNldCkge1xuICAgICAgICByZXR1cm4gXCJaXCI7XG4gICAgfVxuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPD0gMCA/IFwiK1wiIDogXCItXCI7XG4gICAgY29uc3QgaG91cnNNaW51dGVzID0gTWF0aC5hYnMob2Zmc2V0KS50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcbiAgICBjb25zdCBtaW51dGVzID0gaG91cnNNaW51dGVzWzFdIHx8IDA7XG4gICAgbGV0IHJlc3VsdCA9IHNpZ24gKyAoc2hvcnRIb3VycyA/IGhvdXJzTWludXRlc1swXSA6IHBhZChob3Vyc01pbnV0ZXNbMF0sIDIpKTtcbiAgICBpZiAobWludXRlcyB8fCAhb3B0aW9uYWxNaW51dGVzKSB7XG4gICAgICAgIHJlc3VsdCArPSAoc2VwYXJhdG9yID8gXCI6XCIgOiBFTVBUWSkgKyBwYWQobWludXRlcywgMik7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsaXplZE5hbWUpIHtcbiAgICAgICAgY29uc3QgbG9jYWxpemVkRm9ybWF0ID0gb2Zmc2V0ID09PSAwID8gaW5mby5jYWxlbmRhci5nbXRaZXJvRm9ybWF0IDogaW5mby5jYWxlbmRhci5nbXRGb3JtYXQ7XG4gICAgICAgIHJlc3VsdCA9IGZvcm1hdFN0cmluZyhsb2NhbGl6ZWRGb3JtYXQsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF5T2ZXZWVrKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbywgc3RhbmRBbG9uZSkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKGZvcm1hdExlbmd0aCA8IDMpIHtcbiAgICAgICAgcmVzdWx0ID0gZm9ybWF0RGF5T2ZXZWVrSW5kZXgoZGF0ZS5nZXREYXkoKSwgZm9ybWF0TGVuZ3RoLCBpbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmb3JtYXROYW1lcyhpbmZvLCBcImRheXNcIiwgZm9ybWF0TGVuZ3RoLCBzdGFuZEFsb25lKVtkYXRlLmdldERheSgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZm9ybWF0dGVycyA9IHt9O1xuXG5mb3JtYXR0ZXJzLmQgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpLCBmb3JtYXRMZW5ndGgpO1xufTtcblxuZm9ybWF0dGVycy5FID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKSB7XG4gICAgcmV0dXJuIGZvcm1hdE5hbWVzKGluZm8sIFwiZGF5c1wiLCBmb3JtYXRMZW5ndGgpW2RhdGUuZ2V0RGF5KCldO1xufTtcblxuZm9ybWF0dGVycy5NID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKSB7XG4gICAgcmV0dXJuIGZvcm1hdE1vbnRoKGRhdGUuZ2V0TW9udGgoKSwgZm9ybWF0TGVuZ3RoLCBpbmZvLCBmYWxzZSk7XG59O1xuXG5mb3JtYXR0ZXJzLkwgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8pIHtcbiAgICByZXR1cm4gZm9ybWF0TW9udGgoZGF0ZS5nZXRNb250aCgpLCBmb3JtYXRMZW5ndGgsIGluZm8sIHRydWUpO1xufTtcblxuZm9ybWF0dGVycy55ID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoKSB7XG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKGZvcm1hdExlbmd0aCA9PT0gMikge1xuICAgICAgICB5ZWFyID0geWVhciAlIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhZCh5ZWFyLCBmb3JtYXRMZW5ndGgpO1xufTtcblxuZm9ybWF0dGVycy5oID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMjtcbiAgICByZXR1cm4gcGFkKGhvdXJzLCBmb3JtYXRMZW5ndGgpO1xufTtcblxuZm9ybWF0dGVycy5IID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCksIGZvcm1hdExlbmd0aCk7XG59O1xuXG5mb3JtYXR0ZXJzLmsgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSB8fCAyNCwgZm9ybWF0TGVuZ3RoKTtcbn07XG5cbmZvcm1hdHRlcnMuSyA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpICUgMTIsIGZvcm1hdExlbmd0aCk7XG59O1xuXG5mb3JtYXR0ZXJzLm0gPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpLCBmb3JtYXRMZW5ndGgpO1xufTtcblxuZm9ybWF0dGVycy5zID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSwgZm9ybWF0TGVuZ3RoKTtcbn07XG5cbmZvcm1hdHRlcnMuUyA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCkge1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAobWlsbGlzZWNvbmRzICE9PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IHBhZChTdHJpbmcobWlsbGlzZWNvbmRzIC8gMTAwMCkuc3BsaXQoXCIuXCIpWzFdLnN1YnN0cigwLCBmb3JtYXRMZW5ndGgpLCBmb3JtYXRMZW5ndGgsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHBhZChFTVBUWSwgZm9ybWF0TGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZvcm1hdHRlcnMuYSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbykge1xuICAgIHJldHVybiBmb3JtYXROYW1lcyhpbmZvLCBcImRheVBlcmlvZHNcIiwgZm9ybWF0TGVuZ3RoKVtkYXRlLmdldEhvdXJzKCkgPCAxMiA/IFwiYW1cIiA6IFwicG1cIl07XG59O1xuXG5mb3JtYXR0ZXJzLnogPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8pIHtcbiAgICByZXR1cm4gZm9ybWF0VGltZVpvbmUoZGF0ZSwgaW5mbywge1xuICAgICAgICBzaG9ydEhvdXJzOiBmb3JtYXRMZW5ndGggPCA0LFxuICAgICAgICBvcHRpb25hbE1pbnV0ZXM6IGZvcm1hdExlbmd0aCA8IDQsXG4gICAgICAgIHNlcGFyYXRvcjogdHJ1ZSxcbiAgICAgICAgbG9jYWxpemVkTmFtZTogdHJ1ZVxuICAgIH0pO1xufTtcblxuZm9ybWF0dGVycy5aID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKSB7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWVab25lKGRhdGUsIGluZm8sIHtcbiAgICAgICAgc2VwYXJhdG9yOiBmb3JtYXRMZW5ndGggPiAzLFxuICAgICAgICBsb2NhbGl6ZWROYW1lOiBmb3JtYXRMZW5ndGggPT09IDQsXG4gICAgICAgIHpaZXJvT2Zmc2V0OiBmb3JtYXRMZW5ndGggPT09IDVcbiAgICB9KTtcbn07XG5cbmZvcm1hdHRlcnMueCA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbykge1xuICAgIHJldHVybiBmb3JtYXRUaW1lWm9uZShkYXRlLCBpbmZvLCB7XG4gICAgICAgIG9wdGlvbmFsTWludXRlczogZm9ybWF0TGVuZ3RoID09PSAxLFxuICAgICAgICBzZXBhcmF0b3I6IGZvcm1hdExlbmd0aCA9PT0gMyB8fCBmb3JtYXRMZW5ndGggPT09IDVcbiAgICB9KTtcbn07XG5cbmZvcm1hdHRlcnMuWCA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdExlbmd0aCwgaW5mbykge1xuICAgIHJldHVybiBmb3JtYXRUaW1lWm9uZShkYXRlLCBpbmZvLCB7XG4gICAgICAgIG9wdGlvbmFsTWludXRlczogZm9ybWF0TGVuZ3RoID09PSAxLFxuICAgICAgICBzZXBhcmF0b3I6IGZvcm1hdExlbmd0aCA9PT0gMyB8fCBmb3JtYXRMZW5ndGggPT09IDUsXG4gICAgICAgIHpaZXJvT2Zmc2V0OiB0cnVlXG4gICAgfSk7XG59O1xuXG5mb3JtYXR0ZXJzLkcgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8pIHtcbiAgICBsZXQgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID49IDAgPyAxIDogMDtcbiAgICByZXR1cm4gZm9ybWF0TmFtZXMoaW5mbywgXCJlcmFzXCIsIGZvcm1hdExlbmd0aClbZXJhXTtcbn07XG5cbmZvcm1hdHRlcnMuZSA9IGZvcm1hdERheU9mV2VlaztcblxuZm9ybWF0dGVycy5jID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKSB7XG4gICAgcmV0dXJuIGZvcm1hdERheU9mV2VlayhkYXRlLCBmb3JtYXRMZW5ndGgsIGluZm8sIHRydWUpO1xufTtcblxuZm9ybWF0dGVycy5xID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKSB7XG4gICAgcmV0dXJuIGZvcm1hdFF1YXJ0ZXIoZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvLCB0cnVlKTtcbn07XG5cbmZvcm1hdHRlcnMuUSA9IGZvcm1hdFF1YXJ0ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsb2NhbGUgPSBERUZBVUxUX0xPQ0FMRSkge1xuICAgIGlmICghaXNEYXRlKGRhdGUpKSB7XG4gICAgICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQgfHwgZGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGluZm8gPSBsb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgY29uc3QgcGF0dGVybiA9IGRhdGVQYXR0ZXJuKGZvcm1hdCwgaW5mbyk7XG5cbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKGRhdGVGb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIGxldCBmb3JtYXRMZW5ndGggPSBtYXRjaC5sZW5ndGg7XG4gICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgaWYgKG1hdGNoLmluY2x1ZGVzKFwiJ1wiKSB8fCBtYXRjaC5pbmNsdWRlcyhcIlxcXCJcIikpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG1hdGNoLnNsaWNlKDEsIGZvcm1hdExlbmd0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZm9ybWF0dGVyc1ttYXRjaFswXV0oZGF0ZSwgZm9ybWF0TGVuZ3RoLCBpbmZvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY29udmVydFRpbWVab25lKGRhdGUsIGZyb21PZmZzZXQsIHRvT2Zmc2V0KSB7XG4gICAgY29uc3QgZnJvbUxvY2FsT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgY29uc3Qgb2Zmc2V0RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgKGZyb21PZmZzZXQgLSB0b09mZnNldCkgKiA2MDAwMCk7XG5cbiAgICBjb25zdCB0b0xvY2FsT2Zmc2V0ID0gb2Zmc2V0RGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKG9mZnNldERhdGUuZ2V0VGltZSgpICsgKHRvTG9jYWxPZmZzZXQgLSBmcm9tTG9jYWxPZmZzZXQpICogNjAwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0RFNUKGRhdGUsIGhvdXJzKSB7XG4gICAgaWYgKCFob3VycyAmJiBkYXRlLmdldEhvdXJzKCkgPT09IDIzKSB7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgMik7XG4gICAgfVxufSIsImltcG9ydCB7IGFkanVzdERTVCwgY29udmVydFRpbWVab25lIH0gZnJvbSAnLi90aW1lLXV0aWxzJztcbmltcG9ydCB7IGxvY2FsZUluZm8gfSBmcm9tICcuLi9jbGRyJztcbmltcG9ydCB7IERFRkFVTFRfTE9DQUxFLCBFTVBUWSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3JzIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCBmb3JtYXROYW1lcyBmcm9tICcuL2Zvcm1hdC1uYW1lcyc7XG5pbXBvcnQgZGF0ZVBhdHRlcm4gZnJvbSAnLi9kYXRlLXBhdHRlcm4nO1xuaW1wb3J0IHJvdW5kIGZyb20gJy4uL2NvbW1vbi9yb3VuZCc7XG5pbXBvcnQgaXNEYXRlIGZyb20gJy4uL2NvbW1vbi9pcy1kYXRlJztcblxuY29uc3QgdGltZVpvbmVPZmZzZXRSZWdFeHAgPSAvKFsrfC1dXFxkezEsMn0pKDo/KShcXGR7Mn0pPy87XG5jb25zdCBkYXRlUmVnRXhwID0gL15cXC9EYXRlXFwoKC4qPylcXClcXC8kLztcbmNvbnN0IG9mZnNldFJlZ0V4cCA9IC9bKy1dXFxkKi87XG5jb25zdCBudW1iZXJSZWdFeHAgPSB7XG4gICAgMjogL15cXGR7MSwyfS8sXG4gICAgMzogL15cXGR7MSwzfS8sXG4gICAgNDogL15cXGR7NH0vXG59O1xuY29uc3QgbnVtYmVyUmVnZXggPSAvXFxkKy87XG5jb25zdCBQTEFDRUhPTERFUiA9IFwiezB9XCI7XG5cbmNvbnN0IGxlYWRpbmdTcGFjZXNSZWdleCA9IC9eICovO1xuY29uc3QgdHJhaWxpbmdTcGFjZXNSZWdleCA9IC8gKiQvO1xuXG5jb25zdCBzdGFuZGFyZERhdGVGb3JtYXRzID0gW1xuICAgIFwieXl5eS9NTS9kZCBISDptbTpzc1wiLFxuICAgIFwieXl5eS9NTS9kZCBISDptbVwiLFxuICAgIFwieXl5eS9NTS9kZFwiLFxuICAgIFwiRSBNTU0gZGQgeXl5eSBISDptbTpzc1wiLFxuICAgIFwieXl5eS1NTS1kZFRISDptbTpzcy5TU1NTU1NTWFhYXCIsXG4gICAgXCJ5eXl5LU1NLWRkVEhIOm1tOnNzLlNTU1hYWFwiLFxuICAgIFwieXl5eS1NTS1kZFRISDptbTpzcy5TU1hYWFwiLFxuICAgIFwieXl5eS1NTS1kZFRISDptbTpzc1hYWFwiLFxuICAgIFwieXl5eS1NTS1kZFRISDptbTpzcy5TU1NTU1NTXCIsXG4gICAgXCJ5eXl5LU1NLWRkVEhIOm1tOnNzLlNTU1wiLFxuICAgIFwieXl5eS1NTS1kZFRISDptbVhYWFwiLFxuICAgIFwieXl5eS1NTS1kZFRISDptbVhcIixcbiAgICBcInl5eXktTU0tZGRUSEg6bW06c3NcIixcbiAgICBcInl5eXktTU0tZGRUSEg6bW1cIixcbiAgICBcInl5eXktTU0tZGQgSEg6bW06c3NcIixcbiAgICBcInl5eXktTU0tZGQgSEg6bW1cIixcbiAgICBcInl5eXktTU0tZGRcIixcbiAgICBcIkhIOm1tOnNzXCIsXG4gICAgXCJISDptbVwiXG5dO1xuY29uc3QgRk9STUFUU19TRVFVRU5DRSA9IFsgXCJHXCIsIFwiZ1wiLCBcIkZcIiwgXCJZXCIsIFwieVwiLCBcIk1cIiwgXCJtXCIsIFwiRFwiLCBcImRcIiwgXCJ5XCIsIFwiVFwiLCBcInRcIiBdO1xuY29uc3QgVFdPX0RJR0lUX1lFQVJfTUFYID0gMjAyOTtcblxuZnVuY3Rpb24gb3V0T2ZSYW5nZSh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAhKHZhbHVlID49IHN0YXJ0ICYmIHZhbHVlIDw9IGVuZCk7XG59XG5cbmZ1bmN0aW9uIGxvb2tBaGVhZChtYXRjaCwgc3RhdGUpIHtcbiAgICBsZXQgeyBmb3JtYXQsIGlkeCB9ID0gc3RhdGU7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChmb3JtYXRbaWR4XSA9PT0gbWF0Y2gpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBpZHgrKztcbiAgICB9XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIGlkeCAtPSAxO1xuICAgIH1cbiAgICBzdGF0ZS5pZHggPSBpZHg7XG4gICAgcmV0dXJuIGk7XG59XG5cbmZ1bmN0aW9uIGdldE51bWJlcihzaXplLCBzdGF0ZSkge1xuICAgIGxldCByZWdleCA9IHNpemUgPyAobnVtYmVyUmVnRXhwW3NpemVdIHx8IG5ldyBSZWdFeHAoJ15cXFxcZHsxLCcgKyBzaXplICsgJ30nKSkgOiBudW1iZXJSZWdleCxcbiAgICAgICAgbWF0Y2ggPSBzdGF0ZS52YWx1ZS5zdWJzdHIoc3RhdGUudmFsdWVJZHgsIHNpemUpLm1hdGNoKHJlZ2V4KTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaCA9IG1hdGNoWzBdO1xuICAgICAgICBzdGF0ZS52YWx1ZUlkeCArPSBtYXRjaC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhCeU5hbWUobmFtZXMsIHN0YXRlLCBsb3dlcikge1xuICAgIGxldCBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBuYW1lLCBuYW1lTGVuZ3RoLFxuICAgICAgICBtYXRjaExlbmd0aCA9IDAsXG4gICAgICAgIG1hdGNoSWR4ID0gMCxcbiAgICAgICAgc3ViVmFsdWU7XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgbmFtZUxlbmd0aCA9IG5hbWUubGVuZ3RoO1xuICAgICAgICBzdWJWYWx1ZSA9IHN0YXRlLnZhbHVlLnN1YnN0cihzdGF0ZS52YWx1ZUlkeCwgbmFtZUxlbmd0aCk7XG5cbiAgICAgICAgaWYgKGxvd2VyKSB7XG4gICAgICAgICAgICBzdWJWYWx1ZSA9IHN1YlZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ViVmFsdWUgPT09IG5hbWUgJiYgbmFtZUxlbmd0aCA+IG1hdGNoTGVuZ3RoKSB7XG4gICAgICAgICAgICBtYXRjaExlbmd0aCA9IG5hbWVMZW5ndGg7XG4gICAgICAgICAgICBtYXRjaElkeCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2hMZW5ndGgpIHtcbiAgICAgICAgc3RhdGUudmFsdWVJZHggKz0gbWF0Y2hMZW5ndGg7XG4gICAgICAgIHJldHVybiBtYXRjaElkeCArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGl0ZXJhbChzdGF0ZSkge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAoc3RhdGUudmFsdWUuY2hhckF0KHN0YXRlLnZhbHVlSWR4KSA9PT0gc3RhdGUuZm9ybWF0W3N0YXRlLmlkeF0pIHtcbiAgICAgICAgc3RhdGUudmFsdWVJZHgrKztcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FsZW5kYXJHbXRGb3JtYXRzKGNhbGVuZGFyKSB7XG4gICAgY29uc3QgeyBnbXRGb3JtYXQsIGdtdFplcm9Gb3JtYXQgfSA9IGNhbGVuZGFyO1xuICAgIGlmICghZ210Rm9ybWF0KSB7XG4gICAgICAgIHRocm93IGVycm9ycy5Ob0dNVEluZm8uZXJyb3IoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWyBnbXRGb3JtYXQucmVwbGFjZShQTEFDRUhPTERFUiwgRU1QVFkpLnRvTG93ZXJDYXNlKCksIGdtdFplcm9Gb3JtYXQucmVwbGFjZShQTEFDRUhPTERFUiwgRU1QVFkpLnRvTG93ZXJDYXNlKCkgXTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lWm9uZU9mZnNldChzdGF0ZSwgaW5mbywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2hvcnRIb3Vycywgbm9TZXBhcmF0b3IsIG9wdGlvbmFsTWludXRlcywgbG9jYWxpemVkTmFtZSwgekxpdGVyYWwgfSA9IG9wdGlvbnM7XG4gICAgc3RhdGUuVVRDID0gdHJ1ZTtcblxuICAgIGlmICh6TGl0ZXJhbCAmJiBzdGF0ZS52YWx1ZS5jaGFyQXQoc3RhdGUudmFsdWVJZHgpID09PSBcIlpcIikge1xuICAgICAgICBzdGF0ZS52YWx1ZUlkeCsrO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsaXplZE5hbWUgJiYgIWdldEluZGV4QnlOYW1lKGNhbGVuZGFyR210Rm9ybWF0cyhpbmZvLmNhbGVuZGFyKSwgc3RhdGUsIHRydWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoZXMgPSB0aW1lWm9uZU9mZnNldFJlZ0V4cC5leGVjKHN0YXRlLnZhbHVlLnN1YnN0cihzdGF0ZS52YWx1ZUlkeCwgNikpO1xuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gIWxvY2FsaXplZE5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgaG91cnNNYXRjaCA9IG1hdGNoZXNbMV07XG4gICAgY29uc3QgbWludXRlc01hdGNoID0gbWF0Y2hlc1szXTtcbiAgICBjb25zdCBob3Vyc09mZnNldCA9IHBhcnNlSW50KGhvdXJzTWF0Y2gsIDEwKTtcbiAgICBjb25zdCBzZXBhcmF0b3IgPSBtYXRjaGVzWzJdO1xuICAgIGxldCBtaW51dGVzT2Zmc2V0ID0gcGFyc2VJbnQobWludXRlc01hdGNoLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4oaG91cnNPZmZzZXQpIHx8ICghc2hvcnRIb3VycyAmJiBob3Vyc01hdGNoLmxlbmd0aCAhPT0gMykgfHwgKCFvcHRpb25hbE1pbnV0ZXMgJiYgaXNOYU4obWludXRlc09mZnNldCkpIHx8IChub1NlcGFyYXRvciAmJiBzZXBhcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc05hTihtaW51dGVzT2Zmc2V0KSkge1xuICAgICAgICBtaW51dGVzT2Zmc2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAob3V0T2ZSYW5nZShob3Vyc09mZnNldCwgLTEyLCAxMykgfHwgKG1pbnV0ZXNPZmZzZXQgJiYgb3V0T2ZSYW5nZShtaW51dGVzT2Zmc2V0LCAwLCA1OSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRlLnZhbHVlSWR4ICs9IG1hdGNoZXNbMF0ubGVuZ3RoO1xuICAgIHN0YXRlLmhvdXJzT2Zmc2V0ID0gaG91cnNPZmZzZXQ7XG4gICAgc3RhdGUubWludXRlc09mZnNldCA9IG1pbnV0ZXNPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTW9udGgoY2gsIHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoY2gsIHN0YXRlKTtcbiAgICBjb25zdCBuYW1lcyA9IGZvcm1hdE5hbWVzKGluZm8sIFwibW9udGhzXCIsIGNvdW50LCBjaCA9PT0gXCJMXCIsIHRydWUpO1xuXG4gICAgY29uc3QgbW9udGggPSBjb3VudCA8IDMgPyBnZXROdW1iZXIoMiwgc3RhdGUpIDogZ2V0SW5kZXhCeU5hbWUobmFtZXMsIHN0YXRlLCB0cnVlKTtcblxuICAgIGlmIChtb250aCA9PT0gbnVsbCB8fCBvdXRPZlJhbmdlKG1vbnRoLCAxLCAxMikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRlLm1vbnRoID0gbW9udGggLSAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZURheU9mV2VlayhjaCwgc3RhdGUsIGluZm8pIHtcbiAgICBjb25zdCBjb3VudCA9IGxvb2tBaGVhZChjaCwgc3RhdGUpO1xuICAgIGNvbnN0IG5hbWVzID0gZm9ybWF0TmFtZXMoaW5mbywgXCJkYXlzXCIsIGNvdW50LCBjaCA9PT0gXCJjXCIsIHRydWUpO1xuICAgIGxldCBkYXlPZldlZWsgPSBjb3VudCA8IDMgPyBnZXROdW1iZXIoMSwgc3RhdGUpIDogZ2V0SW5kZXhCeU5hbWUobmFtZXMsIHN0YXRlLCB0cnVlKTtcbiAgICBpZiAoKCFkYXlPZldlZWsgJiYgZGF5T2ZXZWVrICE9PSAwKSB8fCBvdXRPZlJhbmdlKGRheU9mV2VlaywgMSwgNykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5jb25zdCBwYXJzZXJzID0ge307XG5cbnBhcnNlcnMuZCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgbG9va0FoZWFkKFwiZFwiLCBzdGF0ZSk7XG4gICAgY29uc3QgZGF5ID0gZ2V0TnVtYmVyKDIsIHN0YXRlKTtcblxuICAgIGlmIChkYXkgPT09IG51bGwgfHwgb3V0T2ZSYW5nZShkYXksIDEsIDMxKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZGF5ID09PSBudWxsKSB7XG4gICAgICAgIHN0YXRlLmRheSA9IGRheTtcbiAgICB9XG59O1xuXG5wYXJzZXJzLkUgPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKFwiRVwiLCBzdGF0ZSk7XG4gICAgLy92YWxpZGF0ZSBpZiBpdCBtYXRjaGVzIHRoZSBkYXk/XG4gICAgbGV0IGRheU9mV2VlayA9IGdldEluZGV4QnlOYW1lKGZvcm1hdE5hbWVzKGluZm8sIFwiZGF5c1wiLCBjb3VudCwgZmFsc2UsIHRydWUpLCBzdGF0ZSwgdHJ1ZSk7XG4gICAgaWYgKGRheU9mV2VlayA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG5wYXJzZXJzLk0gPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIHJldHVybiBwYXJzZU1vbnRoKFwiTVwiLCBzdGF0ZSwgaW5mbyk7XG59O1xuXG5wYXJzZXJzLkwgPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIHJldHVybiBwYXJzZU1vbnRoKFwiTFwiLCBzdGF0ZSwgaW5mbyk7XG59O1xuXG5wYXJzZXJzLnkgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKFwieVwiLCBzdGF0ZSk7XG4gICAgbGV0IHllYXIgPSBnZXROdW1iZXIoY291bnQgPT09IDEgPyB1bmRlZmluZWQgOiBjb3VudCwgc3RhdGUpO1xuXG4gICAgaWYgKHllYXIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB5ZWFyID0gKGN1cnJlbnRZZWFyIC0gY3VycmVudFllYXIgJSAxMDApICsgeWVhcjtcbiAgICAgICAgaWYgKHllYXIgPiBUV09fRElHSVRfWUVBUl9NQVgpIHtcbiAgICAgICAgICAgIHllYXIgLT0gMTAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUueWVhciA9IHllYXI7XG59O1xuXG5wYXJzZXJzLmggPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGxvb2tBaGVhZChcImhcIiwgc3RhdGUpO1xuXG4gICAgbGV0IGhvdXJzID0gZ2V0TnVtYmVyKDIsIHN0YXRlKTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICAgIGhvdXJzID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaG91cnMgPT09IG51bGwgfHwgb3V0T2ZSYW5nZShob3VycywgMCwgMTEpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRlLmhvdXJzID0gaG91cnM7XG59O1xuXG5wYXJzZXJzLksgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGxvb2tBaGVhZChcIktcIiwgc3RhdGUpO1xuXG4gICAgbGV0IGhvdXJzID0gZ2V0TnVtYmVyKDIsIHN0YXRlKTtcblxuICAgIGlmIChob3VycyA9PT0gbnVsbCB8fCBvdXRPZlJhbmdlKGhvdXJzLCAwLCAxMSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGUuaG91cnMgPSBob3Vycztcbn07XG5cbnBhcnNlcnMuYSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY291bnQgPSBsb29rQWhlYWQoXCJhXCIsIHN0YXRlKTtcbiAgICBsZXQgcGVyaW9kRm9ybWF0cyA9IGZvcm1hdE5hbWVzKGluZm8sIFwiZGF5UGVyaW9kc1wiLCBjb3VudCwgZmFsc2UsIHRydWUpO1xuXG4gICAgY29uc3QgcG1Ib3VyID0gZ2V0SW5kZXhCeU5hbWUoWyBwZXJpb2RGb3JtYXRzLnBtIF0sIHN0YXRlLCB0cnVlKTtcbiAgICBpZiAoIXBtSG91ciAmJiAhZ2V0SW5kZXhCeU5hbWUoWyBwZXJpb2RGb3JtYXRzLmFtIF0sIHN0YXRlLCB0cnVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wbUhvdXIgPSBwbUhvdXI7XG59O1xuXG5wYXJzZXJzLkggPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGxvb2tBaGVhZChcIkhcIiwgc3RhdGUpO1xuICAgIGNvbnN0IGhvdXJzID0gZ2V0TnVtYmVyKDIsIHN0YXRlKTtcbiAgICBpZiAoaG91cnMgPT09IG51bGwgfHwgb3V0T2ZSYW5nZShob3VycywgMCwgMjMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0ZS5ob3VycyA9IGhvdXJzO1xufTtcblxucGFyc2Vycy5rID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBsb29rQWhlYWQoXCJrXCIsIHN0YXRlKTtcblxuICAgIGxldCBob3VycyA9IGdldE51bWJlcigyLCBzdGF0ZSk7XG5cbiAgICBpZiAoaG91cnMgPT09IG51bGwgfHwgb3V0T2ZSYW5nZShob3VycywgMSwgMjQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRlLmhvdXJzID0gaG91cnMgPT09IDI0ID8gMCA6IGhvdXJzO1xufTtcblxucGFyc2Vycy5tID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBsb29rQWhlYWQoXCJtXCIsIHN0YXRlKTtcbiAgICBjb25zdCBtaW51dGVzID0gZ2V0TnVtYmVyKDIsIHN0YXRlKTtcblxuICAgIGlmIChtaW51dGVzID09PSBudWxsIHx8IG91dE9mUmFuZ2UobWludXRlcywgMCwgNTkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRlLm1pbnV0ZXMgPSBtaW51dGVzO1xufTtcblxucGFyc2Vycy5zID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBsb29rQWhlYWQoXCJzXCIsIHN0YXRlKTtcbiAgICBjb25zdCBzZWNvbmRzID0gZ2V0TnVtYmVyKDIsIHN0YXRlKTtcbiAgICBpZiAoc2Vjb25kcyA9PT0gbnVsbCB8fCBvdXRPZlJhbmdlKHNlY29uZHMsIDAsIDU5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGUuc2Vjb25kcyA9IHNlY29uZHM7XG59O1xuXG5wYXJzZXJzLlMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKFwiU1wiLCBzdGF0ZSk7XG4gICAgY29uc3QgbWF0Y2ggPSBzdGF0ZS52YWx1ZS5zdWJzdHIoc3RhdGUudmFsdWVJZHgsIGNvdW50KTtcbiAgICBsZXQgbWlsbGlzZWNvbmRzID0gbnVsbDtcblxuICAgIGlmICghaXNOYU4ocGFyc2VJbnQobWF0Y2gsIDEwKSkpIHtcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gcGFyc2VGbG9hdChcIjAuXCIgKyBtYXRjaCwgMTApO1xuICAgICAgICBtaWxsaXNlY29uZHMgPSByb3VuZChtaWxsaXNlY29uZHMsIDMpO1xuICAgICAgICBtaWxsaXNlY29uZHMgKj0gMTAwMDtcbiAgICAgICAgc3RhdGUudmFsdWVJZHggKz0gY291bnQ7XG4gICAgfVxuXG4gICAgaWYgKG1pbGxpc2Vjb25kcyA9PT0gbnVsbCB8fCBvdXRPZlJhbmdlKG1pbGxpc2Vjb25kcywgMCwgOTk5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHM7XG59O1xuXG5wYXJzZXJzLnogPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKFwielwiLCBzdGF0ZSk7XG5cbiAgICBjb25zdCBzaG9ydEZvcm1hdCA9IGNvdW50IDwgNDtcblxuICAgIGNvbnN0IGludmFsaWQgPSBwYXJzZVRpbWVab25lT2Zmc2V0KHN0YXRlLCBpbmZvLCB7XG4gICAgICAgIHNob3J0SG91cnM6IHNob3J0Rm9ybWF0LFxuICAgICAgICBvcHRpb25hbE1pbnV0ZXM6IHNob3J0Rm9ybWF0LFxuICAgICAgICBsb2NhbGl6ZWROYW1lOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICByZXR1cm4gaW52YWxpZDtcbiAgICB9XG59O1xuXG5wYXJzZXJzLlogPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKFwiWlwiLCBzdGF0ZSk7XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcGFyc2VUaW1lWm9uZU9mZnNldChzdGF0ZSwgaW5mbywge1xuICAgICAgICBub1NlcGFyYXRvcjogY291bnQgPCA0LFxuICAgICAgICB6TGl0ZXJhbDogY291bnQgPT09IDUsXG4gICAgICAgIGxvY2FsaXplZE5hbWU6IGNvdW50ID09PSA0XG4gICAgfSk7XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICByZXR1cm4gaW52YWxpZDtcbiAgICB9XG59O1xuXG5wYXJzZXJzLnggPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKFwieFwiLCBzdGF0ZSk7XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcGFyc2VUaW1lWm9uZU9mZnNldChzdGF0ZSwgaW5mbywge1xuICAgICAgICBub1NlcGFyYXRvcjogY291bnQgIT09IDMgJiYgY291bnQgIT09IDUsXG4gICAgICAgIG9wdGlvbmFsTWludXRlczogY291bnQgPT09IDFcbiAgICB9KTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICByZXR1cm4gaW52YWxpZDtcbiAgICB9XG59O1xuXG5wYXJzZXJzLlggPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIGNvbnN0IGNvdW50ID0gbG9va0FoZWFkKFwiWFwiLCBzdGF0ZSk7XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcGFyc2VUaW1lWm9uZU9mZnNldChzdGF0ZSwgaW5mbywge1xuICAgICAgICBub1NlcGFyYXRvcjogY291bnQgIT09IDMgJiYgY291bnQgIT09IDUsXG4gICAgICAgIG9wdGlvbmFsTWludXRlczogY291bnQgPT09IDEsXG4gICAgICAgIHpMaXRlcmFsOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIGludmFsaWQ7XG4gICAgfVxufTtcblxucGFyc2Vycy5HID0gZnVuY3Rpb24oc3RhdGUsIGluZm8pIHtcbiAgICBjb25zdCBjb3VudCA9IGxvb2tBaGVhZChcIkdcIiwgc3RhdGUpO1xuICAgIGNvbnN0IGVyYXMgPSBmb3JtYXROYW1lcyhpbmZvLCBcImVyYXNcIiwgY291bnQsIGZhbHNlLCB0cnVlKTtcbiAgICBjb25zdCBlcmEgPSBnZXRJbmRleEJ5TmFtZShbIGVyYXNbMF0sIGVyYXNbMV0gXSwgc3RhdGUsIHRydWUpO1xuXG4gICAgaWYgKGVyYSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG5wYXJzZXJzLmUgPSBmdW5jdGlvbihzdGF0ZSwgaW5mbykge1xuICAgIHJldHVybiBwYXJzZURheU9mV2VlayhcImVcIiwgc3RhdGUsIGluZm8pO1xufTtcblxucGFyc2Vycy5jID0gZnVuY3Rpb24oc3RhdGUsIGluZm8pIHtcbiAgICByZXR1cm4gcGFyc2VEYXlPZldlZWsoXCJjXCIsIHN0YXRlLCBpbmZvKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGUoc3RhdGUpIHtcbiAgICBsZXQgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzLCBwbUhvdXIsIFVUQywgaG91cnNPZmZzZXQsIG1pbnV0ZXNPZmZzZXQgfSA9IHN0YXRlO1xuICAgIGNvbnN0IGhhc1RpbWUgPSBob3VycyAhPT0gbnVsbCB8fCBtaW51dGVzICE9PSBudWxsIHx8IHNlY29uZHMgfHwgbnVsbDtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKHllYXIgPT09IG51bGwgJiYgbW9udGggPT09IG51bGwgJiYgZGF5ID09PSBudWxsICYmIGhhc1RpbWUpIHtcbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh5ZWFyID09PSBudWxsKSB7XG4gICAgICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRheSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGF5ID0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwbUhvdXIgJiYgaG91cnMgPCAxMikge1xuICAgICAgICBob3VycyArPSAxMjtcbiAgICB9XG5cbiAgICBpZiAoVVRDKSB7XG4gICAgICAgIGlmIChob3Vyc09mZnNldCkge1xuICAgICAgICAgICAgaG91cnMgKz0gLWhvdXJzT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZXNPZmZzZXQpIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgKz0gLW1pbnV0ZXNPZmZzZXQgKiAoaG91cnNPZmZzZXQgPCAwID8gLTEgOiAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXksIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzKTtcbiAgICAgICAgYWRqdXN0RFNUKHJlc3VsdCwgaG91cnMpO1xuICAgIH1cblxuICAgIGlmICh5ZWFyIDwgMTAwKSB7XG4gICAgICAgIHJlc3VsdC5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmdldERhdGUoKSAhPT0gZGF5ICYmIFVUQyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGFkZEZvcm1hdFNwYWNlcyh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgY29uc3QgbGVhZGluZ1NwYWNlcyA9IGxlYWRpbmdTcGFjZXNSZWdleC5leGVjKGZvcm1hdClbMF07XG4gICAgY29uc3QgdHJhaWxpbmdTcGFjZXMgPSB0cmFpbGluZ1NwYWNlc1JlZ2V4LmV4ZWMoZm9ybWF0KVswXTtcblxuICAgIHJldHVybiBgJHsgbGVhZGluZ1NwYWNlcyB9JHsgdmFsdWUgfSR7IHRyYWlsaW5nU3BhY2VzIH1gO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4YWN0KHZhbHVlLCBmb3JtYXQsIGluZm8pIHtcbiAgICBsZXQgcGF0dGVybiA9IGRhdGVQYXR0ZXJuKGZvcm1hdCwgaW5mbykuc3BsaXQoRU1QVFkpO1xuXG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGZvcm1hdDogcGF0dGVybixcbiAgICAgICAgaWR4OiAwLFxuICAgICAgICB2YWx1ZTogYWRkRm9ybWF0U3BhY2VzKHZhbHVlLCBmb3JtYXQpLFxuICAgICAgICB2YWx1ZUlkeDogMCxcbiAgICAgICAgeWVhcjogbnVsbCxcbiAgICAgICAgbW9udGg6IG51bGwsXG4gICAgICAgIGRheTogbnVsbCxcbiAgICAgICAgaG91cnM6IG51bGwsXG4gICAgICAgIG1pbnV0ZXM6IG51bGwsXG4gICAgICAgIHNlY29uZHM6IG51bGwsXG4gICAgICAgIG1pbGxpc2Vjb25kczogbnVsbFxuICAgIH07XG4gICAgY29uc3QgbGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG4gICAgbGV0IGxpdGVyYWwgPSBmYWxzZTtcblxuICAgIGZvciAoOyBzdGF0ZS5pZHggPCBsZW5ndGg7IHN0YXRlLmlkeCsrKSB7XG4gICAgICAgIGxldCBjaCA9IHBhdHRlcm5bc3RhdGUuaWR4XTtcblxuICAgICAgICBpZiAobGl0ZXJhbCkge1xuICAgICAgICAgICAgaWYgKGNoID09PSBcIidcIikge1xuICAgICAgICAgICAgICAgIGxpdGVyYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hlY2tMaXRlcmFsKHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXJzZXJzW2NoXSkge1xuICAgICAgICAgICAgICAgIGxldCBpbnZhbGlkID0gcGFyc2Vyc1tjaF0oc3RhdGUsIGluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICAgICAgbGl0ZXJhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2hlY2tMaXRlcmFsKHN0YXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrTGl0ZXJhbChzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS52YWx1ZUlkeCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRGF0ZShzdGF0ZSkgfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaWNyb3NvZnREYXRlT2Zmc2V0KG9mZnNldCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQuc3Vic3RyKDAsIDEpID09PSBcIi1cIiA/IC0xIDogMTtcblxuICAgIGxldCByZXN1bHQgPSBvZmZzZXQuc3Vic3RyaW5nKDEpO1xuICAgIHJlc3VsdCA9IChwYXJzZUludChyZXN1bHQuc3Vic3RyKDAsIDIpLCAxMCkgKiA2MCkgKyBwYXJzZUludChyZXN1bHQuc3Vic3RyaW5nKDIpLCAxMCk7XG5cbiAgICByZXR1cm4gc2lnbiAqIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaWNyb3NvZnREYXRlRm9ybWF0KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoXCIvRFwiKSA9PT0gMCkge1xuICAgICAgICBsZXQgZGF0ZSA9IGRhdGVSZWdFeHAuZXhlYyh2YWx1ZSk7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZVsxXTtcbiAgICAgICAgICAgIGxldCB0em9mZnNldCA9IG9mZnNldFJlZ0V4cC5leGVjKGRhdGUuc3Vic3RyaW5nKDEpKTtcblxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGUsIDEwKSk7XG5cbiAgICAgICAgICAgIGlmICh0em9mZnNldCkge1xuICAgICAgICAgICAgICAgIHR6b2Zmc2V0ID0gcGFyc2VNaWNyb3NvZnREYXRlT2Zmc2V0KHR6b2Zmc2V0WzBdKTtcbiAgICAgICAgICAgICAgICBkYXRlID0gY29udmVydFRpbWVab25lKGRhdGUsIGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSwgMCk7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IGNvbnZlcnRUaW1lWm9uZShkYXRlLCAwLCAtMSAqIHR6b2Zmc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRGb3JtYXRzKGNhbGVuZGFyKSB7XG4gICAgY29uc3QgZm9ybWF0cyA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm5zID0gY2FsZW5kYXIucGF0dGVybnM7XG4gICAgY29uc3QgbGVuZ3RoID0gRk9STUFUU19TRVFVRU5DRS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGZvcm1hdHMucHVzaChwYXR0ZXJuc1tGT1JNQVRTX1NFUVVFTkNFW2lkeF1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0cy5jb25jYXQoc3RhbmRhcmREYXRlRm9ybWF0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlRGF0ZSh2YWx1ZSwgZm9ybWF0cywgbG9jYWxlID0gREVGQVVMVF9MT0NBTEUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VWYWx1ZSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xuICAgIGxldCBkYXRlID0gcGFyc2VNaWNyb3NvZnREYXRlRm9ybWF0KHBhcnNlVmFsdWUpO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGluZm8gPSBsb2NhbGVJbmZvKGxvY2FsZSk7XG4gICAgbGV0IHBhcnNlRm9ybWF0cyA9IGZvcm1hdHMgfHwgZGVmYXVsdEZvcm1hdHMoaW5mby5jYWxlbmRhcik7XG4gICAgcGFyc2VGb3JtYXRzID0gQXJyYXkuaXNBcnJheShwYXJzZUZvcm1hdHMpID8gcGFyc2VGb3JtYXRzIDogWyBwYXJzZUZvcm1hdHMgXTtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlRm9ybWF0cy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGRhdGUgPSBwYXJzZUV4YWN0KHBhcnNlVmFsdWUsIHBhcnNlRm9ybWF0c1tpZHhdLCBpbmZvKTtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGU7XG59XG4iLCJpbXBvcnQgeyBERUZBVUxUX0xPQ0FMRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4uL2NvbW1vbi9pcy1udW1iZXInO1xuaW1wb3J0IGRhdGVQYXR0ZXJuIGZyb20gJy4vZGF0ZS1wYXR0ZXJuJztcbmltcG9ydCBkYXRlTmFtZVR5cGUgZnJvbSAnLi9kYXRlLW5hbWUtdHlwZSc7XG5pbXBvcnQgeyBkYXRlRm9ybWF0UmVnRXhwLCBEQVRFX0ZJRUxEX01BUCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGxvY2FsZUluZm8gfSBmcm9tICcuLi9jbGRyJztcblxuY29uc3QgTkFNRV9UWVBFUyA9IHtcbiAgICBtb250aDoge1xuICAgICAgICB0eXBlOiAnbW9udGhzJyxcbiAgICAgICAgbWluTGVuZ3RoOiAzLFxuICAgICAgICBzdGFuZEFsb25lOiAnTCdcbiAgICB9LFxuXG4gICAgcXVhcnRlcjoge1xuICAgICAgICB0eXBlOiAncXVhcnRlcnMnLFxuICAgICAgICBtaW5MZW5ndGg6IDMsXG4gICAgICAgIHN0YW5kQWxvbmU6ICdxJ1xuICAgIH0sXG5cbiAgICB3ZWVrZGF5OiB7XG4gICAgICAgIHR5cGU6ICdkYXlzJyxcbiAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICBFOiAwLFxuICAgICAgICAgICAgYzogMyxcbiAgICAgICAgICAgIGU6IDNcbiAgICAgICAgfSxcbiAgICAgICAgc3RhbmRBbG9uZTogJ2MnXG4gICAgfSxcblxuICAgIGRheXBlcmlvZDoge1xuICAgICAgICB0eXBlOiAnZGF5UGVyaW9kcycsXG4gICAgICAgIG1pbkxlbmd0aDogMFxuICAgIH0sXG5cbiAgICBlcmE6IHtcbiAgICAgICAgdHlwZTogJ2VyYXMnLFxuICAgICAgICBtaW5MZW5ndGg6IDBcbiAgICB9XG59O1xuXG5jb25zdCBMSVRFUkFMID0gJ2xpdGVyYWwnO1xuXG5mdW5jdGlvbiBhZGRMaXRlcmFsKHBhcnRzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGxhc3RQYXJ0ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGxhc3RQYXJ0ICYmIGxhc3RQYXJ0LnR5cGUgPT09IExJVEVSQUwpIHtcbiAgICAgICAgbGFzdFBhcnQucGF0dGVybiArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IExJVEVSQUwsXG4gICAgICAgICAgICBwYXR0ZXJuOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzSG91cjEyKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybiA9PT0gJ2gnIHx8IHBhdHRlcm4gPT09ICdLJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BsaXREYXRlRm9ybWF0KGZvcm1hdCwgbG9jYWxlID0gREVGQVVMVF9MT0NBTEUpIHtcbiAgICBjb25zdCBpbmZvID0gbG9jYWxlSW5mbyhsb2NhbGUpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBkYXRlUGF0dGVybihmb3JtYXQsIGluZm8pO1xuICAgIGNvbnN0IHBhcnRzID0gW107XG4gICAgbGV0IGxhc3RJbmRleCA9IGRhdGVGb3JtYXRSZWdFeHAubGFzdEluZGV4ID0gMDtcbiAgICBsZXQgbWF0Y2ggPSBkYXRlRm9ybWF0UmVnRXhwLmV4ZWMocGF0dGVybik7XG5cbiAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbWF0Y2hbMF07XG5cbiAgICAgICAgaWYgKGxhc3RJbmRleCA8IG1hdGNoLmluZGV4KSB7XG4gICAgICAgICAgICBhZGRMaXRlcmFsKHBhcnRzLCBwYXR0ZXJuLnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCgnXCInKSB8fCB2YWx1ZS5zdGFydHNXaXRoKFwiJ1wiKSkge1xuICAgICAgICAgICAgYWRkTGl0ZXJhbChwYXJ0cywgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVyID0gdmFsdWVbMF07XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gREFURV9GSUVMRF9NQVBbc3BlY2lmaWVyXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiB2YWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdob3VyJykge1xuICAgICAgICAgICAgICAgIHBhcnQuaG91cjEyID0gaXNIb3VyMTIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IE5BTUVfVFlQRVNbdHlwZV07XG5cbiAgICAgICAgICAgIGlmIChuYW1lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IGlzTnVtYmVyKG5hbWVzLm1pbkxlbmd0aCkgPyBuYW1lcy5taW5MZW5ndGggOiBuYW1lcy5taW5MZW5ndGhbc3BlY2lmaWVyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhdHRlcm5MZW5ndGggPj0gbWluTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQubmFtZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBuYW1lcy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVR5cGU6IGRhdGVOYW1lVHlwZShwYXR0ZXJuTGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YW5kQWxvbmU6IG5hbWVzLnN0YW5kQWxvbmUgPT09IHNwZWNpZmllclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmRleCA9IGRhdGVGb3JtYXRSZWdFeHAubGFzdEluZGV4O1xuICAgICAgICBtYXRjaCA9IGRhdGVGb3JtYXRSZWdFeHAuZXhlYyhwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4IDwgcGF0dGVybi5sZW5ndGgpIHtcbiAgICAgICAgYWRkTGl0ZXJhbChwYXJ0cywgcGF0dGVybi5zdWJzdHJpbmcobGFzdEluZGV4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRzO1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4vZGF0ZXMnO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSAnLi9udW1iZXJzJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9jb21tb24vaXMtZGF0ZSc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9jb21tb24vaXMtbnVtYmVyJztcblxuY29uc3QgZm9ybWF0UmVnRXhwID0gL1xceyhcXGQrKSg6W159XSspP1xcfS9nO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUsIGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdERhdGUodmFsdWUsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXROdW1iZXIodmFsdWUsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBFTVBUWTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChmb3JtYXQsIHZhbHVlcywgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24obWF0Y2gsIGluZGV4LCBwbGFjZWhvbGRlckZvcm1hdCkge1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbcGFyc2VJbnQoaW5kZXgsIDEwKV07XG5cbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nKHZhbHVlLCBwbGFjZWhvbGRlckZvcm1hdCA/IHBsYWNlaG9sZGVyRm9ybWF0LnN1YnN0cmluZygxKSA6IEVNUFRZLCBsb2NhbGUpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbnN0IiwibGV0IiwibG9jYWxlSW5mbyIsInBhdHRlcm4iLCJhcmd1bWVudHMiLCJOb1dlZWtEYXRhIiwiZm9ybWF0T3B0aW9ucyIsImZvcm1hdFJlZ0V4cCIsImlkeCIsIlBMQUNFSE9MREVSIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUFBLElBQU0sV0FBVyxHQUFHO0lBQ2hCLEVBQUUsRUFBRTtRQUNBLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGVBQWUsRUFBRSxRQUFRO2dCQUN6QixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELFFBQVEsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLElBQUk7UUFDZixPQUFPLEVBQUU7WUFDTCxPQUFPLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLFNBQVMsRUFBRSxHQUFHO2dCQUNkLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixzQkFBc0IsRUFBRSxHQUFHO2dCQUMzQixRQUFRLEVBQUUsR0FBRztnQkFDYixRQUFRLEVBQUUsR0FBRztnQkFDYixHQUFHLEVBQUUsS0FBSztnQkFDVixhQUFhLEVBQUUsR0FBRztnQkFDbEIsaUJBQWlCLEVBQUUsR0FBRzthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDTCxRQUFRLEVBQUU7b0JBQ04sR0FBRztpQkFDTjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsQ0FBQztpQkFDSjthQUNKO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFFBQVEs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