/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, EventEmitter, HostBinding, Input, Output, ViewChild, forwardRef, isDevMode } from '@angular/core';
import { anyChanged, hasObservers, Keys, guid, KendoInput } from '@progress/kendo-angular-common';
import { areSame, getStylingClasses, requiresZoneOnBlur } from '../common/utils';
import { invokeElementMethod } from '../common/dom-utils';
import { add, toFixedPrecision, limitPrecision } from '../common/math';
import { createMaxValidator } from '../validators/max.validator';
import { createMinValidator } from '../validators/min.validator';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';
import { L10N_PREFIX, LocalizationService } from '@progress/kendo-angular-l10n';
import { validatePackage } from '@progress/kendo-licensing';
import { packageMetadata } from '../package-metadata';
import { MIN_DOC_LINK, MAX_DOC_LINK, POINT, INITIAL_SPIN_DELAY, SPIN_DELAY, EXPONENT_REGEX } from './constants';
import { defined, noop, numericRegex, isNumber, pad, decimalPart, getDeltaFromMouseWheel, getCaretPosition, extractSignificantNumericChars, isRightClick } from './utils';
import { ArrowDirection } from './arrow-direction';
import { mobileOS } from '@progress/kendo-common';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-intl";
import * as i2 from "@progress/kendo-angular-l10n";
import * as i3 from "./localization/localized-numerictextbox-messages.directive";
import * as i4 from "@progress/kendo-angular-common";
import * as i5 from "@angular/common";
const PARSABLE_OPTIONS = ['min', 'max', 'step', 'decimals'];
const PARSABLE_DEFAULTS = {
    decimals: null,
    max: null,
    min: null,
    step: 1
};
const FOCUSED = 'k-focus';
const DEFAULT_SIZE = 'medium';
const DEFAULT_ROUNDED = 'medium';
const DEFAULT_FILL_MODE = 'solid';
/**
 * Represents the [Kendo UI NumericTextBox component for Angular]({% slug overview_numerictextbox %}).
 */
export class NumericTextBoxComponent {
    constructor(intl, renderer, localizationService, injector, ngZone, changeDetector, hostElement) {
        this.intl = intl;
        this.renderer = renderer;
        this.localizationService = localizationService;
        this.injector = injector;
        this.ngZone = ngZone;
        this.changeDetector = changeDetector;
        this.hostElement = hostElement;
        /**
         * @hidden
         */
        this.focusableId = `k-${guid()}`;
        /**
         * Determines whether the NumericTextBox is disabled ([see example]({% slug disabled_numerictextbox %})).
         */
        this.disabled = false;
        /**
         * Determines whether the NumericTextBox is in its read-only state ([see example]({% slug readonly_numerictextbox %})).
         */
        this.readonly = false;
        /**
         * Sets the title of the `input` element of the NumericTextBox.
         */
        this.title = '';
        /**
         * Specifies whether the value will be auto-corrected based on the minimum and maximum values
         * ([see example]({% slug precision_numerictextbox %})).
         */
        this.autoCorrect = false;
        /**
         * Specifies the number of decimals that the user can enter when the input is focused
         * ([see example]({% slug precision_numerictextbox %})).
         */
        this.decimals = null;
        /**
         * Specifies the value that is used to increment or decrement the component value
         * ([see example]({% slug predefinedsteps_numerictextbox %})).
         */
        this.step = 1;
        /**
         * Specifies whether the **Up** and **Down** spin buttons will be rendered
         * ([see example]({% slug spinbuttons_numerictextbox %})).
         */
        this.spinners = true;
        /**
         * Determines whether the built-in minimum or maximum validators are enforced when a form is validated.
         *
         * > The 4.2.0 Angular version introduces the `min` and `max` validation directives. As a result, even if you set `rangeValidation`
         * to `false`, the built-in Angular validators will be executed.
         */
        this.rangeValidation = true;
        /**
         * Specifies the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabindex = 0;
        /**
         * Determines whether the value of the NumericTextBox will be changed via scrolling. Defaults to `true`.
         *
         * @default true
         */
        this.changeValueOnScroll = true;
        /**
         * Determines whether the whole value will be selected when the NumericTextBox is clicked. Defaults to `true`.
         */
        this.selectOnFocus = true;
        /**
         * Specifies the value of the NumericTextBox
         * ([see example]({% slug formats_numerictextbox %})).
         */
        this.value = null;
        /**
         * Fires each time the user selects a new value ([see example]({% slug overview_numerictextbox %}#toc-events)).
         */
        this.valueChange = new EventEmitter();
        /**
         * Fires each time the user focuses the `input` element ([see example]({% slug overview_numerictextbox %}#toc-events)).
         */
        this.onFocus = new EventEmitter();
        /**
         * Fires each time the `input` element gets blurred ([see example]({% slug overview_numerictextbox %}#toc-events)).
         */
        this.onBlur = new EventEmitter();
        /**
         * @hidden
         */
        this.ArrowDirection = ArrowDirection;
        /**
         * @hidden
         */
        this.arrowDirection = ArrowDirection.None;
        this.hostClasses = true;
        this.inputValue = '';
        this.minValidateFn = noop;
        this.maxValidateFn = noop;
        this._format = "n2";
        this.isPasted = false;
        this.mouseDown = false;
        this._size = 'medium';
        this._rounded = 'medium';
        this._fillMode = 'solid';
        this.ngChange = noop;
        this.ngTouched = noop;
        this.ngValidatorChange = noop;
        this.domEvents = [];
        /**
         * @hidden
         */
        this.increasePress = (e) => {
            this.arrowPress(ArrowDirection.Up, e);
        };
        /**
         * @hidden
         */
        this.decreasePress = (e) => {
            this.arrowPress(ArrowDirection.Down, e);
        };
        /**
         * @hidden
         */
        this.releaseArrow = () => {
            clearTimeout(this.spinTimeout);
            if (this.arrowDirection !== ArrowDirection.None) {
                this.arrowDirection = ArrowDirection.None;
                this.changeDetector.detectChanges();
            }
        };
        /**
         * @hidden
         */
        this.handlePaste = () => {
            this.isPasted = true;
        };
        /**
         * @hidden
         */
        this.handleInput = () => {
            const input = this.numericInput.nativeElement;
            let { selectionStart, selectionEnd, value: inputValue } = input;
            if (this.pressedKey === Keys.NumpadDecimal) {
                inputValue = this.replaceNumpadDotValue();
            }
            if (this.isPasted) {
                inputValue = this.formatInputValue(this.intl.parseNumber(inputValue));
            }
            if (!this.isValid(inputValue)) {
                input.value = this.inputValue;
                this.setSelection(selectionStart - 1, selectionEnd - 1);
                return;
            }
            const parsedValue = this.intl.parseNumber(inputValue);
            let value = this.restrictDecimals(parsedValue);
            if (this.autoCorrect) {
                const limited = this.limitInputValue(value);
                value = limited.value;
                selectionStart = limited.selectionStart;
                selectionEnd = limited.selectionEnd;
            }
            if (parsedValue !== value || this.hasTrailingZeros(inputValue) || !this.focused) {
                this.setInputValue(value);
                this.setSelection(selectionStart, selectionEnd);
            }
            else {
                this.inputValue = inputValue;
            }
            if (this.isPasted) {
                input.value = this.inputValue;
            }
            this.updateValue(value);
            this.previousSelection = null;
            this.isPasted = false;
        };
        /**
         * @hidden
         */
        this.handleDragEnter = () => {
            if (!this.focused && !this.isDisabled) {
                this.setInputValue(this.value, true);
            }
        };
        /**
         * @hidden
         */
        this.handleMouseDown = () => {
            this.mouseDown = true;
        };
        /**
         * @hidden
         */
        this.handleFocus = () => {
            if (!this.focused) {
                this.focused = true;
                if (!this.isDisabled) {
                    const shouldSelectAll = this.selectOnFocus || !this.mouseDown;
                    this.ngZone.runOutsideAngular(() => {
                        setTimeout(() => {
                            if (shouldSelectAll) {
                                this.selectAll();
                            }
                            else {
                                this.selectCaret();
                            }
                        }, 0);
                    });
                }
            }
            this.mouseDown = false;
            if (hasObservers(this.onFocus)) {
                this.ngZone.run(() => {
                    this.onFocus.emit();
                });
            }
        };
        /**
         * @hidden
         */
        this.handleBlur = () => {
            this.changeDetector.markForCheck();
            this.focused = false;
            //blur is thrown before input when dragging the input text in IE
            if (this.inputValue !== this.elementValue) {
                this.handleInput();
            }
            this.setInputValue();
            if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
                this.ngZone.run(() => {
                    this.ngTouched();
                    this.onBlur.emit();
                });
            }
        };
        /**
         * @hidden
         */
        this.handleKeyDown = (e) => {
            if (this.isDisabled) {
                return;
            }
            let step;
            if (e.keyCode === Keys.ArrowDown) {
                step = -1;
            }
            else if (e.keyCode === Keys.ArrowUp) {
                step = 1;
            }
            if (step && this.step) {
                e.preventDefault();
                this.addStep(step);
            }
            const input = this.numericInput.nativeElement;
            this.previousSelection = {
                end: input.selectionEnd,
                start: input.selectionStart
            };
            this.pressedKey = e.keyCode;
        };
        /**
         * @hidden
         */
        this.handleWheel = (e) => {
            if (this.focused && !this.isDisabled && this.changeValueOnScroll) {
                e.preventDefault();
                const delta = getDeltaFromMouseWheel(e);
                this.addStep(delta);
            }
        };
        validatePackage(packageMetadata);
        this.direction = localizationService.rtl ? 'rtl' : 'ltr';
    }
    /**
     * Specifies the number format which is used when the NumericTextBox is not focused
     * ([see example]({% slug formats_numerictextbox %})).
     * If `format` is set to `null` or `undefined`, the default format will be used.
     */
    get format() {
        const format = this._format;
        return format !== null && format !== undefined ? format : 'n2';
    }
    set format(value) {
        this._format = value;
    }
    /**
     * @hidden
     */
    set tabIndex(tabIndex) {
        this.tabindex = tabIndex;
    }
    get tabIndex() {
        return this.tabindex;
    }
    /**
     * The size property specifies padding of the NumericTextBox internal input element
     * ([see example]({% slug appearance_numerictextbox %}#toc-size)).
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    set size(size) {
        const newSize = size ? size : DEFAULT_SIZE;
        this.handleClasses(newSize, 'size');
        this._size = newSize;
    }
    get size() {
        return this._size;
    }
    /**
     * The rounded property specifies the border radius of the NumericTextBox
     * ([see example]({% slug appearance_numerictextbox %}#toc-rounded)).
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    set rounded(rounded) {
        const newRounded = rounded ? rounded : DEFAULT_ROUNDED;
        this.handleClasses(newRounded, 'rounded');
        this._rounded = newRounded;
    }
    get rounded() {
        return this._rounded;
    }
    /**
     * The fillMode property specifies the background and border styles of the NumericTextBox
     * ([see example]({% slug appearance_numerictextbox %}#toc-fillMode)).
     * The possible values are:
     * * `flat`
     * * `solid` (default)
     * * `outline`
     * * `none`
     */
    set fillMode(fillMode) {
        const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
        this.handleClasses(newFillMode, 'fillMode');
        this._fillMode = newFillMode;
    }
    get fillMode() {
        return this._fillMode;
    }
    get disableClass() {
        return this.disabled;
    }
    ngOnInit() {
        this.subscriptions = this.localizationService
            .changes
            .subscribe(({ rtl }) => {
            this.direction = rtl ? 'rtl' : 'ltr';
        });
        this.subscriptions.add(this.intl.changes.subscribe(this.intlChange.bind(this)));
        if (this.hostElement) {
            this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
        }
        this.control = this.injector.get(NgControl, null);
        this.ngZone.runOutsideAngular(() => {
            this.domEvents.push(this.renderer.listen(this.hostElement.nativeElement, 'mousewheel', this.handleWheel.bind(this)));
            this.domEvents.push(this.renderer.listen(this.hostElement.nativeElement, 'DOMMouseScroll', this.handleWheel.bind(this)));
        });
    }
    ngAfterViewInit() {
        const stylingInputs = ['size', 'rounded', 'fillMode'];
        stylingInputs.forEach(input => {
            this.handleClasses(this[input], input);
        });
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        if (anyChanged(PARSABLE_OPTIONS, changes, false)) {
            this.parseOptions(PARSABLE_OPTIONS.filter(option => changes[option]));
        }
        this.verifySettings();
        if (anyChanged(['min', 'max', 'rangeValidation'], changes, false)) {
            this.minValidateFn = this.rangeValidation ? createMinValidator(this.min) : noop;
            this.maxValidateFn = this.rangeValidation ? createMaxValidator(this.max) : noop;
            this.ngValidatorChange();
        }
        if (anyChanged(['autoCorrect', 'decimals', 'min'], changes)) {
            delete this.numericRegex;
        }
        if (anyChanged(['value', 'format'], changes, false)) {
            this.verifyValue(this.value);
            this.value = this.restrictModelValue(this.value);
            if (!this.focused || (this.intl.parseNumber(this.elementValue) !== this.value)) {
                this.setInputValue();
            }
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        clearTimeout(this.spinTimeout);
        this.domEvents.forEach(unbindHandler => unbindHandler());
    }
    /**
     * @hidden
     */
    validate(control) {
        return this.minValidateFn(control) || this.maxValidateFn(control);
    }
    /**
     * @hidden
     */
    registerOnValidatorChange(fn) {
        this.ngValidatorChange = fn;
    }
    /**
     * @hidden
     */
    writeValue(value) {
        this.verifyValue(value);
        let restrictedValue = this.restrictModelValue(value);
        this.value = restrictedValue;
        this.setInputValue();
    }
    /**
     * @hidden
     */
    registerOnChange(fn) {
        this.ngChange = fn;
    }
    /**
     * @hidden
     */
    registerOnTouched(fn) {
        this.ngTouched = fn;
    }
    /**
     * @hidden
     * Called when the status of the component changes to or from `disabled`.
     * Depending on the value, it enables or disables the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        this.changeDetector.markForCheck();
        this.disabled = isDisabled;
    }
    /**
     * Focuses the NumericTextBox.
     *
     * @example
     * ```ts-no-run
     * _@Component({
     * selector: 'my-app',
     * template: `
     *  <button (click)="numerictextbox.focus()">Focus NumericTextBox</button>
     *  <kendo-numerictextbox #numerictextbox></kendo-numerictextbox>
     * `
     * })
     * class AppComponent { }
     * ```
     */
    focus() {
        invokeElementMethod(this.numericInput, 'focus');
    }
    /**
     * Blurs the NumericTextBox.
     */
    blur() {
        invokeElementMethod(this.numericInput, 'blur');
    }
    /**
     * Notifies the `NumericTextBoxComponent` that the input value should be changed.
     * Can be used to update the input after setting the component properties directly.
     */
    notifyValueChange() {
        this.setInputValue();
    }
    /**
     * @hidden
     */
    get incrementTitle() {
        return this.localizationService.get('increment');
    }
    /**
     * @hidden
     */
    get decrementTitle() {
        return this.localizationService.get('decrement');
    }
    /**
     * @hidden
     */
    get isControlInvalid() {
        return this.control && this.control.touched && !this.control.valid;
    }
    get decimalSeparator() {
        const numberSymbols = this.intl.numberSymbols();
        return numberSymbols.decimal;
    }
    get elementValue() {
        return this.numericInput.nativeElement.value;
    }
    set elementValue(value) {
        this.renderer.setProperty(this.numericInput.nativeElement, 'value', value);
    }
    get focused() {
        return this.isFocused;
    }
    get hasDecimals() {
        return this.decimals !== null && this.decimals >= 0;
    }
    set focused(value) {
        if (this.isFocused !== value && this.hostElement) {
            const wrap = this.hostElement.nativeElement;
            if (value) {
                this.renderer.addClass(wrap, FOCUSED);
            }
            else {
                this.renderer.removeClass(wrap, FOCUSED);
            }
            this.isFocused = value;
        }
    }
    get isDisabled() {
        return this.disabled || this.readonly;
    }
    arrowPress(direction, e) {
        e.preventDefault();
        if (this.isDisabled || isRightClick(e)) {
            return;
        }
        if (!mobileOS) {
            this.focused = true;
            this.focus();
        }
        if (this.arrowDirection !== direction) {
            this.arrowDirection = direction;
            this.changeDetector.detectChanges();
        }
        if (this.step) {
            this.spin(direction, INITIAL_SPIN_DELAY);
        }
        else {
            this.setInputValue();
        }
    }
    updateValue(value) {
        if (!areSame(this.value, value)) {
            this.ngZone.run(() => {
                this.value = value;
                this.ngChange(value);
                this.valueChange.emit(value);
                this.changeDetector.markForCheck();
            });
        }
    }
    replaceNumpadDotValue() {
        let value = this.inputValue || "";
        if (this.previousSelection) {
            const input = this.numericInput.nativeElement;
            const { selectionStart, selectionEnd } = input;
            const { start, end } = this.previousSelection;
            input.value = value = value.substring(0, start) + this.decimalSeparator + value.substring(end);
            this.setSelection(selectionStart, selectionEnd);
        }
        return value;
    }
    isValid(value) {
        if (!this.numericRegex) {
            this.numericRegex = numericRegex({
                autoCorrect: this.autoCorrect,
                decimals: this.decimals,
                min: this.min,
                separator: this.decimalSeparator
            });
        }
        return this.numericRegex.test(value);
    }
    spin(step, timeout) {
        clearTimeout(this.spinTimeout);
        this.spinTimeout = window.setTimeout(() => {
            this.spin(step, SPIN_DELAY);
        }, timeout);
        this.addStep(step);
    }
    addStep(step) {
        let value = add(this.value || 0, this.step * step);
        value = this.limitValue(value);
        value = this.restrictDecimals(value);
        this.setInputValue(value);
        this.updateValue(value);
    }
    setSelection(start, end) {
        if (this.focused) {
            invokeElementMethod(this.numericInput, 'setSelectionRange', start, end);
        }
    }
    limitValue(value) {
        let result = value;
        if (!this.isInRange(value)) {
            if (isNumber(this.max) && value > this.max) {
                result = this.max;
            }
            if (isNumber(this.min) && value < this.min) {
                result = this.min;
            }
        }
        return result;
    }
    limitInputValue(value) {
        let { selectionStart, selectionEnd, value: enteredValue } = this.numericInput.nativeElement;
        let limitedValue = value;
        let selectToEnd = false;
        if (!this.isInRange(value)) {
            const lengthChange = enteredValue.length - String(this.inputValue).length;
            const { min, max } = this;
            const hasMax = isNumber(max);
            const hasMin = isNumber(min);
            let padLimit, replaceNext;
            let correctedValue = value;
            if (selectionStart === 0 && this.inputValue.substr(1) === enteredValue) {
                return {
                    selectionEnd: selectionEnd,
                    selectionStart: selectionStart,
                    value: null
                };
            }
            if (hasMax && value > max) {
                if (value > 0) {
                    replaceNext = true;
                }
                else {
                    padLimit = max;
                }
            }
            else if (hasMin && value < min) {
                if (value > 0) {
                    padLimit = min;
                }
                else {
                    replaceNext = true;
                }
            }
            if (padLimit) {
                const paddedValue = this.tryPadValue(value, padLimit);
                if (paddedValue && decimalPart(value) !== decimalPart(padLimit)) {
                    correctedValue = paddedValue;
                    selectToEnd = true;
                }
            }
            else if (replaceNext) {
                if (this.inputValue && selectionStart !== enteredValue.length) {
                    correctedValue = parseFloat(enteredValue.substr(0, selectionStart) +
                        enteredValue.substr(selectionStart + lengthChange));
                }
            }
            limitedValue = this.limitValue(correctedValue);
            selectToEnd = (selectToEnd || limitedValue !== correctedValue) && this.previousSelection &&
                (this.previousSelection.end - this.previousSelection.start + lengthChange) > 0;
        }
        return {
            selectionEnd: selectToEnd ? String(limitedValue).length : selectionEnd,
            selectionStart: selectionStart,
            value: limitedValue
        };
    }
    tryPadValue(value, limit) {
        const limitLength = String(Math.floor(limit)).length;
        const zeroPadded = pad(value, limitLength);
        const zeroPaddedNext = pad(value, limitLength + 1);
        let result;
        if (this.isInRange(zeroPadded)) {
            result = zeroPadded;
        }
        else if (this.isInRange(zeroPaddedNext)) {
            result = zeroPaddedNext;
        }
        return result;
    }
    isInRange(value) {
        return !isNumber(value) || ((!isNumber(this.min) || this.min <= value) && (!isNumber(this.max) || value <= this.max));
    }
    restrictModelValue(value) {
        let result = this.restrictDecimals(value, true);
        if (this.autoCorrect && this.limitValue(result) !== result) {
            result = null;
        }
        return result;
    }
    restrictDecimals(value, round) {
        let result = value;
        if (value && this.hasDecimals) {
            const decimals = this.decimals;
            const stringValue = String(value);
            if (round || EXPONENT_REGEX.test(stringValue)) {
                result = toFixedPrecision(value, decimals);
            }
            else {
                const parts = stringValue.split(POINT);
                let fraction = parts[1];
                if (fraction && fraction.length > decimals) {
                    fraction = fraction.substr(0, decimals);
                    result = parseFloat(`${parts[0]}${POINT}${fraction}`);
                }
            }
        }
        return result;
    }
    formatInputValue(value) {
        let stringValue = Object.is(value, -0) ? '-0' : String(value);
        const exponentMatch = EXPONENT_REGEX.exec(stringValue);
        if (exponentMatch) {
            stringValue = value.toFixed(limitPrecision(parseInt(exponentMatch[1], 10)));
        }
        return stringValue.replace(POINT, this.decimalSeparator);
    }
    formatValue(value, focused) {
        let formattedValue;
        if (value === null || !defined(value) || value === '') {
            formattedValue = '';
        }
        else if (focused && !this.readonly) {
            formattedValue = this.formatInputValue(value);
        }
        else {
            formattedValue = this.intl.formatNumber(value, this.format);
        }
        return formattedValue;
    }
    setInputValue(value = this.value, focused = this.focused) {
        const formattedValue = this.formatValue(value, focused);
        this.elementValue = formattedValue;
        this.inputValue = formattedValue;
    }
    verifySettings() {
        if (!isDevMode()) {
            return;
        }
        if (this.min !== null && this.max !== null && this.min > this.max) {
            throw new Error(`The max value should be bigger than the min. See ${MIN_DOC_LINK} and ${MAX_DOC_LINK}.`);
        }
    }
    verifyValue(value) {
        if (isDevMode() && value && typeof value !== 'number') {
            throw new Error(`The NumericTextBox component requires value of type Number and ${JSON.stringify(value)} was set.`);
        }
    }
    parseOptions(options) {
        for (let idx = 0; idx < options.length; idx++) {
            const name = options[idx];
            const value = this[name];
            if (typeof value === 'string') {
                const parsed = parseFloat(value);
                const valid = !isNaN(parsed);
                if (isDevMode() && !valid && value !== '') {
                    throw new Error('The NumericTextBox component requires value of type Number or a String representing ' +
                        `a number for the ${name} property and ${JSON.stringify(value)} was set.`);
                }
                this[name] = valid ? parsed : PARSABLE_DEFAULTS[name];
            }
        }
    }
    intlChange() {
        delete this.numericRegex;
        if (this.numericInput && (!this.focused || !this.isValid(this.elementValue))) {
            this.setInputValue();
        }
    }
    hasTrailingZeros(inputValue) {
        if (this.hasDecimals && this.focused) {
            const fraction = inputValue.split(this.decimalSeparator)[1];
            return fraction && fraction.length > this.decimals && fraction.lastIndexOf('0') === fraction.length - 1;
        }
    }
    selectAll() {
        this.setInputValue();
        this.setSelection(0, this.inputValue.length);
    }
    selectCaret() {
        const caretPosition = getCaretPosition(this.numericInput.nativeElement);
        const formattedValue = this.elementValue;
        const partialValue = formattedValue.substring(0, caretPosition);
        this.setInputValue();
        if (partialValue.length) {
            const significantCharsInFormattedValue = extractSignificantNumericChars(partialValue, this.decimalSeparator);
            const adjustedSignificantChars = this.adjustSignificantChars(formattedValue, significantCharsInFormattedValue);
            this.setSelection(adjustedSignificantChars, adjustedSignificantChars);
        }
        else {
            this.setSelection(0, 0);
        }
    }
    numberOfLeadingZeroes(formattedValue) {
        const separatorIndex = formattedValue.indexOf(this.decimalSeparator);
        const matchedLeadingZeroes = formattedValue.match(/^[^1-9]*?(0+)/);
        if (matchedLeadingZeroes) {
            const lengthOfMatch = matchedLeadingZeroes[0].length;
            const lengthOfLeadingZeroesMatch = matchedLeadingZeroes[1].length;
            return lengthOfMatch === separatorIndex ? lengthOfLeadingZeroesMatch - 1 : lengthOfLeadingZeroesMatch;
        }
        return 0;
    }
    adjustSignificantChars(formattedValue, significantChars) {
        const leadingZeroes = this.numberOfLeadingZeroes(formattedValue);
        if (leadingZeroes > 0) {
            return Math.max(0, significantChars - leadingZeroes);
        }
        return significantChars;
    }
    handleClasses(value, input) {
        const elem = this.hostElement.nativeElement;
        const classes = getStylingClasses('input', input, this[input], value);
        if (classes.toRemove) {
            this.renderer.removeClass(elem, classes.toRemove);
        }
        if (classes.toAdd) {
            this.renderer.addClass(elem, classes.toAdd);
        }
    }
}
NumericTextBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumericTextBoxComponent, deps: [{ token: i1.IntlService }, { token: i0.Renderer2 }, { token: i2.LocalizationService }, { token: i0.Injector }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NumericTextBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: NumericTextBoxComponent, selector: "kendo-numerictextbox", inputs: { focusableId: "focusableId", disabled: "disabled", readonly: "readonly", title: "title", autoCorrect: "autoCorrect", format: "format", max: "max", min: "min", decimals: "decimals", placeholder: "placeholder", step: "step", spinners: "spinners", rangeValidation: "rangeValidation", tabindex: "tabindex", tabIndex: "tabIndex", changeValueOnScroll: "changeValueOnScroll", selectOnFocus: "selectOnFocus", value: "value", maxlength: "maxlength", size: "size", rounded: "rounded", fillMode: "fillMode" }, outputs: { valueChange: "valueChange", onFocus: "focus", onBlur: "blur" }, host: { properties: { "attr.dir": "this.direction", "class.k-disabled": "this.disableClass", "class.k-input": "this.hostClasses", "class.k-numerictextbox": "this.hostClasses" } }, providers: [
        LocalizationService,
        { provide: L10N_PREFIX, useValue: 'kendo.numerictextbox' },
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NumericTextBoxComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NumericTextBoxComponent), multi: true },
        { provide: KendoInput, useExisting: forwardRef(() => NumericTextBoxComponent) }
    ], viewQueries: [{ propertyName: "numericInput", first: true, predicate: ["numericInput"], descendants: true, static: true }], exportAs: ["kendoNumericTextBox"], usesOnChanges: true, ngImport: i0, template: `
        <ng-container kendoNumericTextBoxLocalizedMessages
            i18n-increment="kendo.numerictextbox.increment|The title for the **Increment** button in the NumericTextBox"
            increment="Increase value"
            i18n-decrement="kendo.numerictextbox.decrement|The title for the **Decrement** button in the NumericTextBox"
            decrement="Decrease value"
        >
        </ng-container>
            <input
                role="spinbutton"
                class="k-input-inner"
                autocomplete="off"
                autocorrect="off"
                [id]="focusableId"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="value"
                [attr.title]="title"
                [attr.placeholder]="placeholder"
                [attr.maxLength]="maxlength"
                [attr.aria-invalid]="isControlInvalid"
                [tabindex]="tabIndex"
                [disabled]="disabled"
                [readonly]="readonly"
                [kendoEventsOutsideAngular]="{
                    mousedown: handleMouseDown,
                    dragenter: handleDragEnter,
                    keydown: handleKeyDown,
                    input: handleInput,
                    focus: handleFocus,
                    blur: handleBlur,
                    paste: handlePaste
                }"
                #numericInput />
            <span
                class="k-input-spinner k-spin-button" *ngIf="spinners"
                [kendoEventsOutsideAngular]="{ mouseup: releaseArrow, mouseleave: releaseArrow }"
            >
               <button
                    type="button"
                    [kendoEventsOutsideAngular]="{ mousedown: increasePress }"
                    [attr.aria-hidden]="true"
                    [attr.aria-label]="incrementTitle"
                    [title]="incrementTitle"
                    [class.k-active]="arrowDirection === ArrowDirection.Up"
                    class="k-spinner-increase k-button k-icon-button k-button-solid k-button-solid-base"
                    tabindex="-1"
                >
                    <span class="k-button-icon k-icon k-i-caret-alt-up"></span>
               </button>
               <button
                    type="button"
                    [kendoEventsOutsideAngular]="{ mousedown: decreasePress }"
                    [attr.aria-hidden]="true"
                    [attr.aria-label]="decrementTitle"
                    [title]="decrementTitle"
                    [class.k-active]="arrowDirection === ArrowDirection.Down"
                    class="k-spinner-decrease k-button k-icon-button k-button-solid k-button-solid-base"
                    tabindex="-1"
               >
                    <span class="k-button-icon k-icon k-i-caret-alt-down"></span>
               </button>
            </span>
      `, isInline: true, directives: [{ type: i3.LocalizedNumericTextBoxMessagesDirective, selector: "[kendoNumericTextBoxLocalizedMessages]" }, { type: i4.EventsOutsideAngularDirective, selector: "[kendoEventsOutsideAngular]", inputs: ["kendoEventsOutsideAngular", "scope"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumericTextBoxComponent, decorators: [{
            type: Component,
            args: [{
                    exportAs: 'kendoNumericTextBox',
                    providers: [
                        LocalizationService,
                        { provide: L10N_PREFIX, useValue: 'kendo.numerictextbox' },
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NumericTextBoxComponent), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NumericTextBoxComponent), multi: true },
                        { provide: KendoInput, useExisting: forwardRef(() => NumericTextBoxComponent) }
                    ],
                    selector: 'kendo-numerictextbox',
                    template: `
        <ng-container kendoNumericTextBoxLocalizedMessages
            i18n-increment="kendo.numerictextbox.increment|The title for the **Increment** button in the NumericTextBox"
            increment="Increase value"
            i18n-decrement="kendo.numerictextbox.decrement|The title for the **Decrement** button in the NumericTextBox"
            decrement="Decrease value"
        >
        </ng-container>
            <input
                role="spinbutton"
                class="k-input-inner"
                autocomplete="off"
                autocorrect="off"
                [id]="focusableId"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="value"
                [attr.title]="title"
                [attr.placeholder]="placeholder"
                [attr.maxLength]="maxlength"
                [attr.aria-invalid]="isControlInvalid"
                [tabindex]="tabIndex"
                [disabled]="disabled"
                [readonly]="readonly"
                [kendoEventsOutsideAngular]="{
                    mousedown: handleMouseDown,
                    dragenter: handleDragEnter,
                    keydown: handleKeyDown,
                    input: handleInput,
                    focus: handleFocus,
                    blur: handleBlur,
                    paste: handlePaste
                }"
                #numericInput />
            <span
                class="k-input-spinner k-spin-button" *ngIf="spinners"
                [kendoEventsOutsideAngular]="{ mouseup: releaseArrow, mouseleave: releaseArrow }"
            >
               <button
                    type="button"
                    [kendoEventsOutsideAngular]="{ mousedown: increasePress }"
                    [attr.aria-hidden]="true"
                    [attr.aria-label]="incrementTitle"
                    [title]="incrementTitle"
                    [class.k-active]="arrowDirection === ArrowDirection.Up"
                    class="k-spinner-increase k-button k-icon-button k-button-solid k-button-solid-base"
                    tabindex="-1"
                >
                    <span class="k-button-icon k-icon k-i-caret-alt-up"></span>
               </button>
               <button
                    type="button"
                    [kendoEventsOutsideAngular]="{ mousedown: decreasePress }"
                    [attr.aria-hidden]="true"
                    [attr.aria-label]="decrementTitle"
                    [title]="decrementTitle"
                    [class.k-active]="arrowDirection === ArrowDirection.Down"
                    class="k-spinner-decrease k-button k-icon-button k-button-solid k-button-solid-base"
                    tabindex="-1"
               >
                    <span class="k-button-icon k-icon k-i-caret-alt-down"></span>
               </button>
            </span>
      `
                }]
        }], ctorParameters: function () { return [{ type: i1.IntlService }, { type: i0.Renderer2 }, { type: i2.LocalizationService }, { type: i0.Injector }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, propDecorators: { focusableId: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], title: [{
                type: Input
            }], autoCorrect: [{
                type: Input
            }], format: [{
                type: Input
            }], max: [{
                type: Input
            }], min: [{
                type: Input
            }], decimals: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], step: [{
                type: Input
            }], spinners: [{
                type: Input
            }], rangeValidation: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], changeValueOnScroll: [{
                type: Input
            }], selectOnFocus: [{
                type: Input
            }], value: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], size: [{
                type: Input
            }], rounded: [{
                type: Input
            }], fillMode: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], onFocus: [{
                type: Output,
                args: ['focus']
            }], onBlur: [{
                type: Output,
                args: ['blur']
            }], numericInput: [{
                type: ViewChild,
                args: ['numericInput', { static: true }]
            }], direction: [{
                type: HostBinding,
                args: ['attr.dir']
            }], disableClass: [{
                type: HostBinding,
                args: ['class.k-disabled']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class.k-input']
            }, {
                type: HostBinding,
                args: ['class.k-numerictextbox']
            }] } });
