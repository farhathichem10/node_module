import { localeInfo, localeCurrency, currencyDisplays } from '../cldr';
import { PERCENT, NUMBER_PLACEHOLDER, CURRENCY_PLACEHOLDER, DEFAULT_LOCALE, EMPTY, POINT } from '../common/constants';
import { setStyleOptions, setFormatLiterals } from './utils';
import isNumber from '../common/is-number';
import isCurrencyStyle from './is-currency-style';
import formatOptions from './format-options';
import isString from '../common/is-string';

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

function cleanLiterals(number, formatOptions) {
    var literals = formatOptions.literals;
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

export default function parseNumber(value, locale, format) {
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
    var formatOptions = format || {};
    var isPercent;

    if (isString(format)) {
        formatOptions = { format: format };
        setFormatLiterals(formatOptions);
        number = cleanLiterals(number, formatOptions);

        setStyleOptions(formatOptions, info);
    }

    if (formatOptions.style === PERCENT || number.indexOf(symbols.percentSign) > -1) {
        number = number.replace(symbols.percentSign, EMPTY);
        isPercent = true;
    }

    if (exponentRegExp.test(number)) {
        number = parseFloat(number.replace(symbols.decimal, POINT));
        return isNaN(number) ? null : number;
    }

    var ref = cleanCurrencyNumber(number, info, formatOptions);
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
