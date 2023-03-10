import { CURRENCY, PERCENT, LIST_SEPARATOR, GROUP_SEPARATOR, CURRENCY_PLACEHOLDER, PERCENT_PLACEHOLDER, POINT, EMPTY } from '../common/constants';
import isNegativeZero from '../common/is-negative-zero';
import groupInteger from './group-integer';
import round from '../common/round';
import { setStyleOptions, setFormatLiterals, replaceLiterals } from './utils';

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

export default function customNumberFormat(number, format, info) {
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