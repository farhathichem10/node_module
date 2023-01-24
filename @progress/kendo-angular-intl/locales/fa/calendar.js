/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
var setData = require('@progress/kendo-angular-intl').setData;
setData({
    name: "fa",
    likelySubtags: {
        fa: "fa-Arab-IR"
    },
    identity: {
        language: "fa"
    },
    territory: "IR",
    calendar: {
        patterns: {
            d: "y/M/d",
            D: "EEEE d MMMM y",
            m: "d LLL",
            M: "d LLLL",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE d MMMM y H:mm:ss",
            g: "y/M/d H:mm",
            G: "y/M/d H:mm:ss",
            t: "H:mm",
            T: "H:mm:ss",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1}، ساعت {0}",
            long: "{1}، ساعت {0}",
            medium: "{1}،‏ {0}",
            short: "{1}،‏ {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d",
                E: "ccc",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "E d",
                Ehm: "E h:mm a",
                EHm: "E H:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E H:mm:ss",
                Gy: "y G",
                GyMd: "y/M/d GGGGG",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E d MMM y G",
                h: "h a",
                H: "H",
                HHmmZ: "HH:mm (Z)",
                hm: "h:mm a",
                Hm: "H:mm",
                hms: "h:mm:ss a",
                Hms: "H:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "H:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "H:mm v",
                M: "L",
                Md: "M/d",
                MEd: "E M/d",
                MMM: "LLL",
                MMMd: "d LLL",
                MMMEd: "E d LLL",
                MMMMd: "d LLLL",
                MMMMEd: "E d LLLL",
                "MMMMW-count-one": "هفتهٔ Wم LLLL",
                "MMMMW-count-other": "هفتهٔ Wم LLLL",
                mmss: "mm:ss",
                ms: "m:ss",
                y: "y",
                yM: "y/M",
                yMd: "y/M/d",
                yMEd: "E y/M/d",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E d MMM y",
                yMMMM: "MMMM y",
                yMMMMEEEEd: "EEEE d MMMM y",
                yQQQ: "QQQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "هفتهٔ wم Y",
                "yw-count-other": "هفتهٔ wم Y"
            }
        },
        timeFormats: {
            full: "H:mm:ss (zzzz)",
            long: "H:mm:ss (z)",
            medium: "H:mm:ss",
            short: "H:mm"
        },
        dateFormats: {
            full: "EEEE d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "y/M/d"
        },
        days: {
            format: {
                abbreviated: [
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه"
                ],
                narrow: [
                    "ی",
                    "د",
                    "س",
                    "چ",
                    "پ",
                    "ج",
                    "ش"
                ],
                short: [
                    "۱ش",
                    "۲ش",
                    "۳ش",
                    "۴ش",
                    "۵ش",
                    "ج",
                    "ش"
                ],
                wide: [
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه"
                ],
                narrow: [
                    "ی",
                    "د",
                    "س",
                    "چ",
                    "پ",
                    "ج",
                    "ش"
                ],
                short: [
                    "۱ش",
                    "۲ش",
                    "۳ش",
                    "۴ش",
                    "۵ش",
                    "ج",
                    "ش"
                ],
                wide: [
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "ژانویه",
                    "فوریه",
                    "مارس",
                    "آوریل",
                    "مه",
                    "ژوئن",
                    "ژوئیه",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر"
                ],
                narrow: [
                    "ژ",
                    "ف",
                    "م",
                    "آ",
                    "م",
                    "ژ",
                    "ژ",
                    "ا",
                    "س",
                    "ا",
                    "ن",
                    "د"
                ],
                wide: [
                    "ژانویهٔ",
                    "فوریهٔ",
                    "مارس",
                    "آوریل",
                    "مهٔ",
                    "ژوئن",
                    "ژوئیهٔ",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ژانویه",
                    "فوریه",
                    "مارس",
                    "آوریل",
                    "مه",
                    "ژوئن",
                    "ژوئیه",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر"
                ],
                narrow: [
                    "ژ",
                    "ف",
                    "م",
                    "آ",
                    "م",
                    "ژ",
                    "ژ",
                    "ا",
                    "س",
                    "ا",
                    "ن",
                    "د"
                ],
                wide: [
                    "ژانویه",
                    "فوریه",
                    "مارس",
                    "آوریل",
                    "مه",
                    "ژوئن",
                    "ژوئیه",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "س‌م۱",
                    "س‌م۲",
                    "س‌م۳",
                    "س‌م۴"
                ],
                narrow: [
                    "۱",
                    "۲",
                    "۳",
                    "۴"
                ],
                wide: [
                    "سه‌ماههٔ اول",
                    "سه‌ماههٔ دوم",
                    "سه‌ماههٔ سوم",
                    "سه‌ماههٔ چهارم"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "س‌م۱",
                    "س‌م۲",
                    "س‌م۳",
                    "س‌م۴"
                ],
                narrow: [
                    "۱",
                    "۲",
                    "۳",
                    "۴"
                ],
                wide: [
                    "سه‌ماههٔ اول",
                    "سه‌ماههٔ دوم",
                    "سه‌ماههٔ سوم",
                    "سه‌ماههٔ چهارم"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    am: "ق.ظ.",
                    pm: "ب.ظ.",
                    morning1: "بامداد",
                    morning2: "صبح",
                    afternoon1: "ظهر",
                    afternoon2: "عصر",
                    night1: "شب",
                    night2: "نیمه‌شب"
                },
                narrow: {
                    am: "ق",
                    pm: "ب",
                    morning1: "ب",
                    morning2: "ص",
                    afternoon1: "ظ",
                    afternoon2: "ع",
                    night1: "ش",
                    night2: "ن"
                },
                wide: {
                    am: "قبل‌ازظهر",
                    pm: "بعدازظهر",
                    morning1: "بامداد",
                    morning2: "صبح",
                    afternoon1: "بعدازظهر",
                    afternoon2: "عصر",
                    night1: "شب",
                    night2: "نیمه‌شب"
                }
            },
            "stand-alone": {
                abbreviated: {
                    am: "ق.ظ.",
                    pm: "ب.ظ.",
                    morning1: "بامداد",
                    morning2: "صبح",
                    afternoon1: "ظهر",
                    afternoon2: "عصر",
                    night1: "شب",
                    night2: "نیمه‌شب"
                },
                narrow: {
                    am: "ق",
                    pm: "ب",
                    morning1: "ب",
                    morning2: "ص",
                    afternoon1: "ظ",
                    afternoon2: "ع",
                    night1: "ش",
                    night2: "ن"
                },
                wide: {
                    am: "قبل‌ازظهر",
                    pm: "بعدازظهر",
                    morning1: "بامداد",
                    morning2: "صبح",
                    afternoon1: "ظهر",
                    afternoon2: "عصر",
                    night1: "شب",
                    night2: "نیمه‌شب"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "قبل از میلاد",
                    "1": "میلادی",
                    "0-alt-variant": "قبل از دوران مشترک",
                    "1-alt-variant": "دوران مشترک"
                },
                abbreviated: {
                    "0": "ق.م.",
                    "1": "م.",
                    "0-alt-variant": "ق.د.م",
                    "1-alt-variant": "د.م."
                },
                narrow: {
                    "0": "ق",
                    "1": "م",
                    "0-alt-variant": "ق.د.م",
                    "1-alt-variant": "د.م."
                }
            }
        },
        gmtFormat: "{0} گرینویچ",
        gmtZeroFormat: "گرینویچ",
        dateFields: {
            era: {
                wide: "دوره",
                short: "دوره",
                narrow: "دوره"
            },
            year: {
                wide: "سال",
                short: "سال",
                narrow: "سال"
            },
            quarter: {
                wide: "سه‌ماهه",
                short: "سه‌ماهه",
                narrow: "سه‌ماهه"
            },
            month: {
                wide: "ماه",
                short: "ماه",
                narrow: "ماه"
            },
            week: {
                wide: "هفته",
                short: "هفته",
                narrow: "هفته"
            },
            weekOfMonth: {
                wide: "هفتهٔ ماه",
                short: "هفتهٔ ماه",
                narrow: "هفتهٔ ماه"
            },
            day: {
                wide: "روز",
                short: "روز",
                narrow: "روز"
            },
            dayOfYear: {
                wide: "روز سال",
                short: "روز سال",
                narrow: "روز سال"
            },
            weekday: {
                wide: "روز هفته",
                short: "روز هفته",
                narrow: "روز هفته"
            },
            weekdayOfMonth: {
                wide: "روز کاری ماه",
                short: "روز کاری ماه",
                narrow: "روز کاری ماه"
            },
            dayperiod: {
                short: "ق.ظ/ب.ظ",
                wide: "ق.ظ/ب.ظ",
                narrow: "ق.ظ/ب.ظ"
            },
            hour: {
                wide: "ساعت",
                short: "ساعت",
                narrow: "ساعت"
            },
            minute: {
                wide: "دقیقه",
                short: "دقیقه",
                narrow: "دقیقه"
            },
            second: {
                wide: "ثانیه",
                short: "ثانیه",
                narrow: "ثانیه"
            },
            zone: {
                wide: "منطقهٔ زمانی",
                short: "منطقهٔ زمانی",
                narrow: "منطقهٔ زمانی"
            },
            millisecond: {
                narrow: "ms",
                short: "میلی‌ثانیه",
                wide: "میلی‌ثانیه"
            }
        }
    },
    firstDay: 6
});

