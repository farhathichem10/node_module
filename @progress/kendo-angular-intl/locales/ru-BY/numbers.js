/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
var setData = require('@progress/kendo-angular-intl').setData;
setData({
    name: "ru-BY",
    likelySubtags: {
        ru: "ru-Cyrl-RU"
    },
    identity: {
        language: "ru",
        territory: "BY"
    },
    territory: "BY",
    numbers: {
        symbols: {
            decimal: ",",
            group: " ",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
            approximatelySign: "≈",
            exponential: "E",
            superscriptingExponent: "×",
            perMille: "‰",
            infinity: "∞",
            nan: "не число",
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
                "n %"
            ],
            groupSize: [
                3
            ]
        },
        currency: {
            patterns: [
                "n $"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-few": "n $",
            "unitPattern-count-many": "n $",
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
        BYN: {
            _rounding: "0",
            _digits: "2"
        }
    }
});

