/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v28.2.1
 * @link https://www.ag-grid.com/
 * @license MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AgInputTextField } from "./agInputTextField";
import { addOrRemoveAttribute } from '../utils/dom';
var AgInputNumberField = /** @class */ (function (_super) {
    __extends(AgInputNumberField, _super);
    function AgInputNumberField(config) {
        return _super.call(this, config, 'ag-number-field', 'number') || this;
    }
    AgInputNumberField.prototype.postConstruct = function () {
        var _this = this;
        _super.prototype.postConstruct.call(this);
        this.addManagedListener(this.eInput, 'blur', function () {
            var floatedValue = parseFloat(_this.eInput.value);
            var value = isNaN(floatedValue) ? '' : _this.normalizeValue(floatedValue.toString());
            if (_this.value !== value) {
                _this.setValue(value);
            }
        });
        this.addManagedListener(this.eInput, 'wheel', this.onWheel.bind(this));
        this.eInput.step = 'any';
    };
    AgInputNumberField.prototype.onWheel = function (e) {
        // Prevent default scroll events from incrementing / decrementing the input, since its inconsistent between browsers
        if (document.activeElement === this.eInput) {
            e.preventDefault();
        }
    };
    AgInputNumberField.prototype.normalizeValue = function (value) {
        if (value === '') {
            return '';
        }
        if (this.precision) {
            value = this.adjustPrecision(value);
        }
        var val = parseFloat(value);
        if (this.min != null && val < this.min) {
            value = this.min.toString();
        }
        else if (this.max != null && val > this.max) {
            value = this.max.toString();
        }
        return value;
    };
    AgInputNumberField.prototype.adjustPrecision = function (value) {
        if (this.precision) {
            var floatString = parseFloat(value).toFixed(this.precision);
            value = parseFloat(floatString).toString();
        }
        return value;
    };
    AgInputNumberField.prototype.setMin = function (min) {
        if (this.min === min) {
            return this;
        }
        this.min = min;
        addOrRemoveAttribute(this.eInput, 'min', min);
        return this;
    };
    AgInputNumberField.prototype.setMax = function (max) {
        if (this.max === max) {
            return this;
        }
        this.max = max;
        addOrRemoveAttribute(this.eInput, 'max', max);
        return this;
    };
    AgInputNumberField.prototype.setPrecision = function (precision) {
        this.precision = precision;
        return this;
    };
    AgInputNumberField.prototype.setStep = function (step) {
        if (this.step === step) {
            return this;
        }
        this.step = step;
        addOrRemoveAttribute(this.eInput, 'step', step);
        return this;
    };
    AgInputNumberField.prototype.setValue = function (value, silent) {
        value = this.adjustPrecision(value);
        var normalizedValue = this.normalizeValue(value);
        if (value != normalizedValue) {
            return this;
        }
        return _super.prototype.setValue.call(this, value, silent);
    };
    return AgInputNumberField;
}(AgInputTextField));
export { AgInputNumberField };
