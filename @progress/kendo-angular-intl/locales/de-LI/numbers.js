/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
var setData = require('@progress/kendo-angular-intl').setData;
setData({
    name: "de-LI",
    likelySubtags: {
        de: "de-Latn-DE"
    },
    identity: {
        language: "de",
        territory: "LI"
    },
    territory: "LI",
    numbers: {
        symbols: {
            decimal: ".",
            group: "’",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
            approximatelySign: "≈",
            exponential: "E",
            superscriptingExponent: "·",
            perMille: "‰",
            infinity: "∞",
            nan: "NaN",
            timeSeparator: ":"
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
                "$ n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "n $"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        CHF: {
            _rounding: "0",
            _digits: "2",
            _cashRounding: "5"
        }
    }
});

