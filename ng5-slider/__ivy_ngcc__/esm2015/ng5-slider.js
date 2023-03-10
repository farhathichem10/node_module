import { Subject } from 'rxjs';
import { Renderer2, Directive, ElementRef, HostBinding, ChangeDetectorRef, Component, ViewChild, HostListener, Input, EventEmitter, Output, ContentChild, forwardRef, NgZone, NgModule } from '@angular/core';
import { throttleTime, tap, distinctUntilChanged, filter } from 'rxjs/operators';
import detectPassiveEvents from 'detect-passive-events';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["tooltipTemplate"];
const _c1 = ["leftOuterSelectionBar"];
const _c2 = ["rightOuterSelectionBar"];
const _c3 = ["fullBar"];
const _c4 = ["selectionBar"];
const _c5 = ["minHandle"];
const _c6 = ["maxHandle"];
const _c7 = ["floorLabel"];
const _c8 = ["ceilLabel"];
const _c9 = ["minHandleLabel"];
const _c10 = ["maxHandleLabel"];
const _c11 = ["combinedLabel"];
const _c12 = ["ticksElement"];
function SliderComponent_span_28_ng5_slider_tooltip_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ng5-slider-tooltip-wrapper", 31);
} if (rf & 2) {
    const t_r13 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r14 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("template", ctx_r14.tooltipTemplate)("tooltip", t_r13.valueTooltip)("placement", t_r13.valueTooltipPlacement)("content", t_r13.value);
} }
function SliderComponent_span_28_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 32);
} if (rf & 2) {
    const t_r13 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", t_r13.legend, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c13 = function (a0) { return { "ng5-slider-selected": a0 }; };
function SliderComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 27);
    ɵngcc0.ɵɵelement(1, "ng5-slider-tooltip-wrapper", 28);
    ɵngcc0.ɵɵtemplate(2, SliderComponent_span_28_ng5_slider_tooltip_wrapper_2_Template, 1, 4, "ng5-slider-tooltip-wrapper", 29);
    ɵngcc0.ɵɵtemplate(3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    const ctx_r12 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c13, t_r13.selected))("ngStyle", t_r13.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("template", ctx_r12.tooltipTemplate)("tooltip", t_r13.tooltip)("placement", t_r13.tooltipPlacement);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", t_r13.value != null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", t_r13.legend != null);
} }
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c14 = function (a0, a1, a2) { return { tooltip: a0, placement: a1, content: a2 }; };
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, undefined, 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c14, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
} }
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("title", ctx_r1.tooltip)("data-tooltip-placement", ctx_r1.placement);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.content, " ");
} }
const PointerType = {
    /** Low pointer */
    Min: 0,
    /** High pointer */
    Max: 1,
};
PointerType[PointerType.Min] = "Min";
PointerType[PointerType.Max] = "Max";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const LabelType = {
    /** Label above low pointer */
    Low: 0,
    /** Label above high pointer */
    High: 1,
    /** Label for minimum slider value */
    Floor: 2,
    /** Label for maximum slider value */
    Ceil: 3,
    /** Label below legend tick */
    TickValue: 4,
};
LabelType[LabelType.Low] = "Low";
LabelType[LabelType.High] = "High";
LabelType[LabelType.Floor] = "Floor";
LabelType[LabelType.Ceil] = "Ceil";
LabelType[LabelType.TickValue] = "TickValue";
/**
 * Custom step definition
 *
 * This can be used to specify custom values and legend values for slider ticks
 * @record
 */

/**
 * Slider options
 */
class Options {
    constructor() {
        /**
         * Minimum value for a slider.
         * Not applicable when using stepsArray.
         */
        this.floor = 0;
        /**
         * Maximum value for a slider.
         * Not applicable when using stepsArray.
         */
        this.ceil = null;
        /**
         * Step between each value.
         * Not applicable when using stepsArray.
         */
        this.step = 1;
        /**
         * The minimum range authorized on the slider.
         * Applies to range slider only.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.minRange = null;
        /**
         * The maximum range authorized on the slider.
         * Applies to range slider only.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.maxRange = null;
        /**
         * Set to true to have a push behavior. When the min handle goes above the max,
         * the max is moved as well (and vice-versa). The range between min and max is
         * defined by the step option (defaults to 1) and can also be overriden by
         * the minRange option. Applies to range slider only.
         */
        this.pushRange = false;
        /**
         * The minimum value authorized on the slider.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.minLimit = null;
        /**
         * The maximum value authorized on the slider.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.maxLimit = null;
        /**
         * Custom translate function. Use this if you want to translate values displayed
         * on the slider.
         */
        this.translate = null;
        /**
         * Custom function for combining overlapping labels in range slider.
         * It takes the min and max values (already translated with translate fuction)
         * and should return how these two values should be combined.
         * If not provided, the default function will join the two values with
         * ' - ' as separator.
         */
        this.combineLabels = null;
        /**
         * Use to display legend under ticks (thus, it needs to be used along with
         * showTicks or showTicksValues). The function will be called with each tick
         * value and returned content will be displayed under the tick as a legend.
         * If the returned value is null, then no legend is displayed under
         * the corresponding tick.You can also directly provide the legend values
         * in the stepsArray option.
         */
        this.getLegend = null;
        /**
         * If you want to display a slider with non linear/number steps.
         * Just pass an array with each slider value and that's it; the floor, ceil and step settings
         * of the slider will be computed automatically.
         * By default, the value model and valueHigh model values will be the value of the selected item
         * in the stepsArray.
         * They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
         * option to true.
         */
        this.stepsArray = null;
        /**
         * Set to true to bind the index of the selected item to value model and valueHigh model.
         */
        this.bindIndexForStepsArray = false;
        /**
         * When set to true and using a range slider, the range can be dragged by the selection bar.
         * Applies to range slider only.
         */
        this.draggableRange = false;
        /**
         * Same as draggableRange but the slider range can't be changed.
         * Applies to range slider only.
         */
        this.draggableRangeOnly = false;
        /**
         * Set to true to always show the selection bar before the slider handle.
         */
        this.showSelectionBar = false;
        /**
         * Set to true to always show the selection bar after the slider handle.
         */
        this.showSelectionBarEnd = false;
        /**
         * Set a number to draw the selection bar between this value and the slider handle.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.showSelectionBarFromValue = null;
        /**
         * Only for range slider. Set to true to visualize in different colour the areas
         * on the left/right (top/bottom for vertical range slider) of selection bar between the handles.
         */
        this.showOuterSelectionBars = false;
        /**
         * Set to true to hide pointer labels
         */
        this.hidePointerLabels = false;
        /**
         * Set to true to hide min / max labels
         */
        this.hideLimitLabels = false;
        /**
         * Set to false to disable the auto-hiding behavior of the limit labels.
         */
        this.autoHideLimitLabels = true;
        /**
         * Set to true to make the slider read-only.
         */
        this.readOnly = false;
        /**
         * Set to true to disable the slider.
         */
        this.disabled = false;
        /**
         * Throttle interval for mouse events in milliseconds.
         * This is provided to avoid a flood of events when moving the slider with mouse.
         */
        this.mouseEventsInterval = 50;
        /**
         * Throttle interval for touch events in milliseconds.
         * This is provided to avoid a flood of events when moving the slider with touch gesture.
         */
        this.touchEventsInterval = 50;
        /**
         * Throttle interval for input changes (changes to bindings or reactive form inputs)
         * This is provided to avoid a flood of events on frequent input binding changes affecting performance.
         */
        this.inputEventsInterval = 100;
        /**
         * Throttle interval for output changes (signalling changes to output bindings and user callbacks)
         * This is provided to avoid a flood of outgoing events affecting Angular app performance.
         */
        this.outputEventsInterval = 100;
        /**
         * Set to true to display a tick for each step of the slider.
         */
        this.showTicks = false;
        /**
         * Set to true to display a tick and the step value for each step of the slider..
         */
        this.showTicksValues = false;
        /* The step between each tick to display. If not set, the step value is used.
            Not used when ticksArray is specified. */
        this.tickStep = null;
        /* The step between displaying each tick step value. */
        this.tickValueStep = 1;
        /**
         * Use to display ticks at specific positions.
         * The array contains the index of the ticks that should be displayed.
         * For example, [0, 1, 5] will display a tick for the first, second and sixth values.
         */
        this.ticksArray = null;
        /**
         * Used to display a tooltip when a tick is hovered.
         * Set to a function that returns the tooltip content for a given value.
         */
        this.ticksTooltip = null;
        /**
         * Same as ticksTooltip but for ticks values.
         */
        this.ticksValuesTooltip = null;
        /**
         * Set to true to display the slider vertically.
         * The slider will take the full height of its parent.
         * Changing this value at runtime is not currently supported.
         */
        this.vertical = false;
        /**
         * Function that returns the current color of the selection bar.
         * If your color won't change, don't use this option but set it through CSS.
         * If the returned color depends on a model value (either value or valueHigh),
         * you should use the argument passed to the function.
         * Indeed, when the function is called, there is no certainty that the model
         * has already been updated.
         */
        this.getSelectionBarColor = null;
        /**
         * Function that returns the color of a tick. showTicks must be enabled.
         */
        this.getTickColor = null;
        /**
         * Function that returns the current color of a pointer.
         * If your color won't change, don't use this option but set it through CSS.
         * If the returned color depends on a model value (either value or valueHigh),
         * you should use the argument passed to the function.
         * Indeed, when the function is called, there is no certainty that the model has already been updated.
         * To handle range slider pointers independently, you should evaluate pointerType within the given
         * function where "min" stands for value model and "max" for valueHigh model values.
         */
        this.getPointerColor = null;
        /**
         * Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
         * Left/bottom arrows: -1
         * Right/top arrows: +1
         * Page-down: -10%
         * Page-up: +10%
         * Home: minimum value
         * End: maximum value
         */
        this.keyboardSupport = true;
        /**
         * If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
         * so that the slider is rendered properly and the events are handled correctly.
         */
        this.scale = 1;
        /**
         * Set to true to force the value to be rounded to the step, even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, they are not rounded
         * and can be between two steps.
         */
        this.enforceStep = true;
        /**
         * Set to true to force the value to be normalised to allowed range (floor to ceil), even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
         * the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation.
         */
        this.enforceRange = true;
        /**
         * Set to true to prevent to user from switching the min and max handles. Applies to range slider only.
         */
        this.noSwitching = false;
        /**
         * Set to true to only bind events on slider handles.
         */
        this.onlyBindHandles = false;
        /**
         * Set to true to show graphs right to left.
         * If vertical is true it will be from top to bottom and left / right arrow functions reversed.
         */
        this.rightToLeft = false;
        /**
         * Set to true to reverse keyboard navigation:
         * Right/top arrows: -1
         * Left/bottom arrows: +1
         * Page-up: -10%
         * Page-down: +10%
         * End: minimum value
         * Home: maximum value
         */
        this.reversedControls = false;
        /**
         * Set to true to keep the slider labels inside the slider bounds.
         */
        this.boundPointerLabels = true;
        /**
         * Set to true to use a logarithmic scale to display the slider.
         */
        this.logScale = false;
        /**
         * Function that returns the position on the slider for a given value.
         * The position must be a percentage between 0 and 1.
         * The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly.
         */
        this.customValueToPosition = null;
        /**
         * Function that returns the value for a given position on the slider.
         * The position is a percentage between 0 and 1.
         * The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly.
         */
        this.customPositionToValue = null;
        /**
         * Precision limit for calculated values.
         * Values used in calculations will be rounded to this number of significant digits
         * to prevent accumulating small floating-point errors.
         */
        this.precisionLimit = 12;
        /**
         * Use to display the selection bar as a gradient.
         * The given object must contain from and to properties which are colors.
         */
        this.selectionBarGradient = null;
        /**
         * Use to add a label directly to the slider for accessibility. Adds the aria-label attribute.
         */
        this.ariaLabel = null;
        /**
         * Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
         * Adds the aria-labelledby attribute.
         */
        this.ariaLabelledBy = null;
        /**
         * Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute.
         */
        this.ariaLabelHigh = null;
        /**
         * Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
         * Adds the aria-labelledby attribute.
         */
        this.ariaLabelledByHigh = null;
        /**
         * Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle
         */
        this.handleDimension = null;
        /**
         * Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar
         */
        this.barDimension = null;
        /**
         * Enable/disable CSS animations
         */
        this.animate = true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChangeContext {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 *  Collection of functions to handle conversions/lookups of values
 */
class ValueHelper {
    /**
     * @param {?} value
     * @return {?}
     */
    static isNullOrUndefined(value) {
        return value === undefined || value === null;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearValueToPosition(val, minVal, maxVal) {
        const /** @type {?} */ range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logValueToPosition(val, minVal, maxVal) {
        val = Math.log(val);
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        const /** @type {?} */ range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearPositionToValue(percent, minVal, maxVal) {
        return percent * (maxVal - minVal) + minVal;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logPositionToValue(percent, minVal, maxVal) {
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        const /** @type {?} */ value = percent * (maxVal - minVal) + minVal;
        return Math.exp(value);
    }
    /**
     * @param {?} modelValue
     * @param {?} stepsArray
     * @return {?}
     */
    static findStepIndex(modelValue, stepsArray) {
        const /** @type {?} */ differences = stepsArray.map((step) => Math.abs(modelValue - step.value));
        let /** @type {?} */ minDifferenceIndex = 0;
        for (let /** @type {?} */ index = 0; index < stepsArray.length; index++) {
            if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
                minDifferenceIndex = index;
            }
        }
        return minDifferenceIndex;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Helper with compatibility functions to support different browsers
 */
class CompatibilityHelper {
    /**
     * Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari)
     * @param {?} event
     * @return {?}
     */
    static isTouchEvent(event) {
        if ((/** @type {?} */ (window)).TouchEvent !== undefined) {
            return event instanceof TouchEvent;
        }
        return event.touches !== undefined;
    }
    /**
     * Detect presence of ResizeObserver API
     * @return {?}
     */
    static isResizeObserverAvailable() {
        return (/** @type {?} */ (window)).ResizeObserver !== undefined;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Helper with mathematical functions
 */
class MathHelper {
    /**
     * @param {?} value
     * @param {?} precisionLimit
     * @return {?}
     */
    static roundToPrecisionLimit(value, precisionLimit) {
        return +(value.toPrecision(precisionLimit));
    }
    /**
     * @param {?} value
     * @param {?} floor
     * @param {?} ceil
     * @return {?}
     */
    static clampToRange(value, floor, ceil) {
        return Math.min(Math.max(value, floor), ceil);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EventListener {
    constructor() {
        this.eventName = null;
        this.events = null;
        this.eventsSubscription = null;
        this.teardownCallback = null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
class EventListenerHelper {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
        // Only use passive event listeners if the browser supports it
        if (detectPassiveEvents.hasSupport !== true) {
            return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
        }
        // Angular doesn't support passive event handlers (yet), so we need to roll our own code using native functions
        const /** @type {?} */ listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new Subject();
        const /** @type {?} */ observerCallback = (event) => {
            listener.events.next(event);
        };
        nativeElement.addEventListener(eventName, observerCallback, { passive: true, capture: false });
        listener.teardownCallback = () => {
            nativeElement.removeEventListener(eventName, observerCallback, { passive: true, capture: false });
        };
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? throttleTime(throttleInterval, undefined, { leading: true, trailing: true })
            : tap(() => { }) // no-op
        )
            .subscribe((event) => {
            callback(event);
        });
        return listener;
    }
    /**
     * @param {?} eventListener
     * @return {?}
     */
    detachEventListener(eventListener) {
        if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
            eventListener.eventsSubscription.unsubscribe();
            eventListener.eventsSubscription = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
            eventListener.events.complete();
            eventListener.events = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
            eventListener.teardownCallback();
            eventListener.teardownCallback = null;
        }
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachEventListener(nativeElement, eventName, callback, throttleInterval) {
        const /** @type {?} */ listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new Subject();
        const /** @type {?} */ observerCallback = (event) => {
            listener.events.next(event);
        };
        listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? throttleTime(throttleInterval, undefined, { leading: true, trailing: true })
            : tap(() => { }) // no-op
        )
            .subscribe((event) => { callback(event); });
        return listener;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.changeDetectionRef = changeDetectionRef;
        this._position = 0;
        this._dimension = 0;
        this._alwaysHide = false;
        this._vertical = false;
        this._scale = 1;
        this.opacity = 1;
        this.visibility = 'visible';
        this.left = '';
        this.bottom = '';
        this.height = '';
        this.width = '';
        this.eventListeners = [];
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @return {?}
     */
    get dimension() {
        return this._dimension;
    }
    /**
     * @return {?}
     */
    get alwaysHide() {
        return this._alwaysHide;
    }
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._scale;
    }
    /**
     * @param {?} hide
     * @return {?}
     */
    setAlwaysHide(hide) {
        this._alwaysHide = hide;
        if (hide) {
            this.visibility = 'hidden';
        }
        else {
            this.visibility = 'visible';
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    show() {
        if (this.alwaysHide) {
            return;
        }
        this.opacity = 1;
    }
    /**
     * @return {?}
     */
    isVisible() {
        if (this.alwaysHide) {
            return false;
        }
        return this.opacity !== 0;
    }
    /**
     * @param {?} vertical
     * @return {?}
     */
    setVertical(vertical) {
        this._vertical = vertical;
        if (this._vertical) {
            this.left = '';
            this.width = '';
        }
        else {
            this.bottom = '';
            this.height = '';
        }
    }
    /**
     * @param {?} scale
     * @return {?}
     */
    setScale(scale) {
        this._scale = scale;
    }
    /**
     * @param {?} pos
     * @return {?}
     */
    setPosition(pos) {
        if (this._position !== pos && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._position = pos;
        if (this._vertical) {
            this.bottom = Math.round(pos) + 'px';
        }
        else {
            this.left = Math.round(pos) + 'px';
        }
    }
    /**
     * @return {?}
     */
    calculateDimension() {
        const /** @type {?} */ val = this.getBoundingClientRect();
        if (this.vertical) {
            this._dimension = (val.bottom - val.top) * this.scale;
        }
        else {
            this._dimension = (val.right - val.left) * this.scale;
        }
    }
    /**
     * @param {?} dim
     * @return {?}
     */
    setDimension(dim) {
        if (this._dimension !== dim && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._dimension = dim;
        if (this._vertical) {
            this.height = Math.round(dim) + 'px';
        }
        else {
            this.width = Math.round(dim) + 'px';
        }
    }
    /**
     * @return {?}
     */
    getBoundingClientRect() {
        return this.elemRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    on(eventName, callback, debounceInterval) {
        const /** @type {?} */ listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    onPassive(eventName, callback, debounceInterval) {
        const /** @type {?} */ listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?=} eventName
     * @return {?}
     */
    off(eventName) {
        let /** @type {?} */ listenersToKeep;
        let /** @type {?} */ listenersToRemove;
        if (!ValueHelper.isNullOrUndefined(eventName)) {
            listenersToKeep = this.eventListeners.filter((event) => event.eventName !== eventName);
            listenersToRemove = this.eventListeners.filter((event) => event.eventName === eventName);
        }
        else {
            listenersToKeep = [];
            listenersToRemove = this.eventListeners;
        }
        for (const /** @type {?} */ listener of listenersToRemove) {
            this.eventListenerHelper.detachEventListener(listener);
        }
        this.eventListeners = listenersToKeep;
    }
    /**
     * @return {?}
     */
    isRefDestroyed() {
        return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
    }
}
SliderElementDirective.ɵfac = function SliderElementDirective_Factory(t) { return new (t || SliderElementDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SliderElementDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: SliderElementDirective, selectors: [["", "ng5SliderElement", ""]], hostVars: 12, hostBindings: function SliderElementDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width);
    } } });
/** @nocollapse */
SliderElementDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
SliderElementDirective.propDecorators = {
    "opacity": [{ type: HostBinding, args: ['style.opacity',] },],
    "visibility": [{ type: HostBinding, args: ['style.visibility',] },],
    "left": [{ type: HostBinding, args: ['style.left',] },],
    "bottom": [{ type: HostBinding, args: ['style.bottom',] },],
    "height": [{ type: HostBinding, args: ['style.height',] },],
    "width": [{ type: HostBinding, args: ['style.width',] },],
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderElementDirective, [{
        type: Directive,
        args: [{
                selector: '[ng5SliderElement]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { opacity: [{
            type: HostBinding,
            args: ['style.opacity']
        }], visibility: [{
            type: HostBinding,
            args: ['style.visibility']
        }], left: [{
            type: HostBinding,
            args: ['style.left']
        }], bottom: [{
            type: HostBinding,
            args: ['style.bottom']
        }], height: [{
            type: HostBinding,
            args: ['style.height']
        }], width: [{
            type: HostBinding,
            args: ['style.width']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SliderHandleDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this.active = false;
        this.role = '';
        this.tabindex = '';
        this.ariaOrientation = '';
        this.ariaLabel = '';
        this.ariaLabelledBy = '';
        this.ariaValueNow = '';
        this.ariaValueText = '';
        this.ariaValueMin = '';
        this.ariaValueMax = '';
    }
    /**
     * @return {?}
     */
    focus() {
        this.elemRef.nativeElement.focus();
    }
}
SliderHandleDirective.ɵfac = function SliderHandleDirective_Factory(t) { return new (t || SliderHandleDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SliderHandleDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: SliderHandleDirective, selectors: [["", "ng5SliderHandle", ""]], hostVars: 11, hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
        ɵngcc0.ɵɵclassProp("ng5-slider-active", ctx.active);
    } }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
SliderHandleDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
SliderHandleDirective.propDecorators = {
    "active": [{ type: HostBinding, args: ['class.ng5-slider-active',] },],
    "role": [{ type: HostBinding, args: ['attr.role',] },],
    "tabindex": [{ type: HostBinding, args: ['attr.tabindex',] },],
    "ariaOrientation": [{ type: HostBinding, args: ['attr.aria-orientation',] },],
    "ariaLabel": [{ type: HostBinding, args: ['attr.aria-label',] },],
    "ariaLabelledBy": [{ type: HostBinding, args: ['attr.aria-labelledby',] },],
    "ariaValueNow": [{ type: HostBinding, args: ['attr.aria-valuenow',] },],
    "ariaValueText": [{ type: HostBinding, args: ['attr.aria-valuetext',] },],
    "ariaValueMin": [{ type: HostBinding, args: ['attr.aria-valuemin',] },],
    "ariaValueMax": [{ type: HostBinding, args: ['attr.aria-valuemax',] },],
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderHandleDirective, [{
        type: Directive,
        args: [{
                selector: '[ng5SliderHandle]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { active: [{
            type: HostBinding,
            args: ['class.ng5-slider-active']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], tabindex: [{
            type: HostBinding,
            args: ['attr.tabindex']
        }], ariaOrientation: [{
            type: HostBinding,
            args: ['attr.aria-orientation']
        }], ariaLabel: [{
            type: HostBinding,
            args: ['attr.aria-label']
        }], ariaLabelledBy: [{
            type: HostBinding,
            args: ['attr.aria-labelledby']
        }], ariaValueNow: [{
            type: HostBinding,
            args: ['attr.aria-valuenow']
        }], ariaValueText: [{
            type: HostBinding,
            args: ['attr.aria-valuetext']
        }], ariaValueMin: [{
            type: HostBinding,
            args: ['attr.aria-valuemin']
        }], ariaValueMax: [{
            type: HostBinding,
            args: ['attr.aria-valuemax']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SliderLabelDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this._value = null;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        let /** @type {?} */ recalculateDimension = false;
        if (!this.alwaysHide &&
            (ValueHelper.isNullOrUndefined(this.value) ||
                this.value.length !== value.length ||
                (this.value.length > 0 && this.dimension === 0))) {
            recalculateDimension = true;
        }
        this._value = value;
        this.elemRef.nativeElement.innerHTML = value;
        // Update dimension only when length of the label have changed
        if (recalculateDimension) {
            this.calculateDimension();
        }
    }
}
SliderLabelDirective.ɵfac = function SliderLabelDirective_Factory(t) { return new (t || SliderLabelDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SliderLabelDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: SliderLabelDirective, selectors: [["", "ng5SliderLabel", ""]], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
SliderLabelDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderLabelDirective, [{
        type: Directive,
        args: [{
                selector: '[ng5SliderLabel]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Tick {
    constructor() {
        this.selected = false;
        this.style = {};
        this.tooltip = null;
        this.tooltipPlacement = null;
        this.value = null;
        this.valueTooltip = null;
        this.valueTooltipPlacement = null;
        this.legend = null;
    }
}
class Dragging {
    constructor() {
        this.active = false;
        this.value = 0;
        this.difference = 0;
        this.position = 0;
        this.lowLimit = 0;
        this.highLimit = 0;
    }
}
class ModelValues {
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    static compare(x, y) {
        if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        return x.value === y.value && x.highValue === y.highValue;
    }
}
class ModelChange extends ModelValues {
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    static compare(x, y) {
        if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        return x.value === y.value &&
            x.highValue === y.highValue &&
            x.forceChange === y.forceChange;
    }
}
const NG5_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => SliderComponent),
    multi: true,
};
class SliderComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectionRef
     * @param {?} zone
     */
    constructor(renderer, elementRef, changeDetectionRef, zone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectionRef = changeDetectionRef;
        this.zone = zone;
        // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
        this.value = null;
        // Output for low value slider to support two-way bindings
        this.valueChange = new EventEmitter();
        // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
        this.highValue = null;
        // Output for high value slider to support two-way bindings
        this.highValueChange = new EventEmitter();
        // An object with all the other options of the slider.
        // Each option can be updated at runtime and the slider will automatically be re-rendered.
        this.options = new Options();
        // Event emitted when user starts interaction with the slider
        this.userChangeStart = new EventEmitter();
        // Event emitted on each change coming from user interaction
        this.userChange = new EventEmitter();
        // Event emitted when user finishes interaction with the slider
        this.userChangeEnd = new EventEmitter();
        this.initHasRun = false;
        this.inputModelChangeSubject = new Subject();
        this.inputModelChangeSubscription = null;
        this.outputModelChangeSubject = new Subject();
        this.outputModelChangeSubscription = null;
        this.viewLowValue = null;
        this.viewHighValue = null;
        this.viewOptions = new Options();
        this.handleHalfDimension = 0;
        this.maxHandlePosition = 0;
        this.currentTrackingPointer = null;
        this.currentFocusPointer = null;
        this.firstKeyDown = false;
        this.touchId = null;
        this.dragging = new Dragging();
        // Host element class bindings
        this.sliderElementVerticalClass = false;
        this.sliderElementAnimateClass = false;
        this.sliderElementDisabledAttr = null;
        this.barStyle = {};
        this.minPointerStyle = {};
        this.maxPointerStyle = {};
        this.fullBarTransparentClass = false;
        this.selectionBarDraggableClass = false;
        this.ticksUnderValuesClass = false;
        this.intermediateTicks = false;
        this.ticks = [];
        this.eventListenerHelper = null;
        this.onMoveEventListener = null;
        this.onEndEventListener = null;
        this.resizeObserver = null;
        this.onTouchedCallback = null;
        this.onChangeCallback = null;
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @param {?} manualRefresh
     * @return {?}
     */
    set manualRefresh(manualRefresh) {
        this.unsubscribeManualRefresh();
        this.manualRefreshSubscription = manualRefresh.subscribe(() => {
            setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
        });
    }
    /**
     * @param {?} triggerFocus
     * @return {?}
     */
    set triggerFocus(triggerFocus) {
        this.unsubscribeTriggerFocus();
        this.triggerFocusSubscription = triggerFocus.subscribe((pointerType) => {
            this.focusPointer(pointerType);
        });
    }
    /**
     * @return {?}
     */
    get range() {
        return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
    }
    /**
     * @return {?}
     */
    get showTicks() {
        return this.viewOptions.showTicks;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        // We need to run these two things first, before the rest of the init in ngAfterViewInit(),
        // because these two settings are set through @HostBinding and Angular change detection
        // mechanism doesn't like them changing in ngAfterViewInit()
        this.updateDisabledState();
        this.updateVerticalState();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.applyOptions();
        this.subscribeInputModelChangeSubject(this.viewOptions.inputEventsInterval);
        this.subscribeOutputModelChangeSubject(this.viewOptions.outputEventsInterval);
        // Once we apply options, we need to normalise model values for the first time
        this.renormaliseModelValues();
        this.viewLowValue = this.modelValueToViewValue(this.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(this.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.updateVerticalState(); // need to run this again to cover changes to slider elements
        this.manageElementsStyle();
        this.updateDisabledState();
        this.calculateViewDimensions();
        this.addAccessibility();
        this.updateCeilLabel();
        this.updateFloorLabel();
        this.initHandles();
        this.manageEventsBindings();
        this.subscribeResizeObserver();
        this.initHasRun = true;
        // Run change detection manually to resolve some issues when init procedure changes values used in the view
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Always apply options first
        if (!ValueHelper.isNullOrUndefined(changes["options"])) {
            this.onChangeOptions();
        }
        // Then value changes
        if (!ValueHelper.isNullOrUndefined(changes["value"]) ||
            !ValueHelper.isNullOrUndefined(changes["highValue"])) {
            this.inputModelChangeSubject.next({
                value: this.value,
                highValue: this.highValue,
                forceChange: false,
                internalChange: false
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unbindEvents();
        this.unsubscribeResizeObserver();
        this.unsubscribeInputModelChangeSubject();
        this.unsubscribeOutputModelChangeSubject();
        this.unsubscribeManualRefresh();
        this.unsubscribeTriggerFocus();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj instanceof Array) {
            this.value = obj[0];
            this.highValue = obj[1];
        }
        else {
            this.value = obj;
        }
        // ngOnChanges() is not called in this instance, so we need to communicate the change manually
        this.inputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            forceChange: false,
            internalChange: false
        });
    }
    /**
     * @param {?} onChangeCallback
     * @return {?}
     */
    registerOnChange(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
    /**
     * @param {?} onTouchedCallback
     * @return {?}
     */
    registerOnTouched(onTouchedCallback) {
        this.onTouchedCallback = onTouchedCallback;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.viewOptions.disabled = isDisabled;
        this.updateDisabledState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.calculateViewDimensionsAndDetectChanges();
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    subscribeInputModelChangeSubject(interval) {
        this.inputModelChangeSubscription = this.inputModelChangeSubject
            .pipe(distinctUntilChanged(ModelChange.compare),
        // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
        // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
        filter((modelChange) => !modelChange.forceChange && !modelChange.internalChange), (!ValueHelper.isNullOrUndefined(interval))
            ? throttleTime(interval, undefined, { leading: true, trailing: true })
            : tap(() => { }) // no-op
        )
            .subscribe((modelChange) => this.applyInputModelChange(modelChange));
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    subscribeOutputModelChangeSubject(interval) {
        this.outputModelChangeSubscription = this.outputModelChangeSubject
            .pipe(distinctUntilChanged(ModelChange.compare), (!ValueHelper.isNullOrUndefined(interval))
            ? throttleTime(interval, undefined, { leading: true, trailing: true })
            : tap(() => { }) // no-op
        )
            .subscribe((modelChange) => this.publishOutputModelChange(modelChange));
    }
    /**
     * @return {?}
     */
    subscribeResizeObserver() {
        if (CompatibilityHelper.isResizeObserverAvailable()) {
            this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
            this.resizeObserver.observe(this.elementRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    unsubscribeResizeObserver() {
        if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOnMove() {
        if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
            this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
            this.onMoveEventListener = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOnEnd() {
        if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
            this.eventListenerHelper.detachEventListener(this.onEndEventListener);
            this.onEndEventListener = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeInputModelChangeSubject() {
        if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
            this.inputModelChangeSubscription.unsubscribe();
            this.inputModelChangeSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOutputModelChangeSubject() {
        if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
            this.outputModelChangeSubscription.unsubscribe();
            this.outputModelChangeSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeManualRefresh() {
        if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
            this.manualRefreshSubscription.unsubscribe();
            this.manualRefreshSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeTriggerFocus() {
        if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
            this.triggerFocusSubscription.unsubscribe();
            this.triggerFocusSubscription = null;
        }
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    getPointerElement(pointerType) {
        if (pointerType === PointerType.Min) {
            return this.minHandleElement;
        }
        else if (pointerType === PointerType.Max) {
            return this.maxHandleElement;
        }
        return null;
    }
    /**
     * @return {?}
     */
    getCurrentTrackingValue() {
        if (this.currentTrackingPointer === PointerType.Min) {
            return this.viewLowValue;
        }
        else if (this.currentTrackingPointer === PointerType.Max) {
            return this.viewHighValue;
        }
        return null;
    }
    /**
     * @param {?} modelValue
     * @return {?}
     */
    modelValueToViewValue(modelValue) {
        if (ValueHelper.isNullOrUndefined(modelValue)) {
            return NaN;
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
        }
        return +modelValue;
    }
    /**
     * @param {?} viewValue
     * @return {?}
     */
    viewValueToModelValue(viewValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            return this.getStepValue(viewValue);
        }
        return viewValue;
    }
    /**
     * @param {?} sliderValue
     * @return {?}
     */
    getStepValue(sliderValue) {
        const /** @type {?} */ step = this.viewOptions.stepsArray[sliderValue];
        return (!ValueHelper.isNullOrUndefined(step)) ? step.value : NaN;
    }
    /**
     * @return {?}
     */
    applyViewChange() {
        this.value = this.viewValueToModelValue(this.viewLowValue);
        if (this.range) {
            this.highValue = this.viewValueToModelValue(this.viewHighValue);
        }
        this.outputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            userEventInitiated: true,
            forceChange: false
        });
        // At this point all changes are applied and outputs are emitted, so we should be done.
        // However, input changes are communicated in different stream and we need to be ready to
        // act on the next input change even if it is exactly the same as last input change.
        // Therefore, we send a special event to reset the stream.
        this.inputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            forceChange: false,
            internalChange: true
        });
    }
    /**
     * @param {?} modelChange
     * @return {?}
     */
    applyInputModelChange(modelChange) {
        const /** @type {?} */ normalisedModelChange = this.normaliseModelValues(modelChange);
        // If normalised model change is different, apply the change to the model values
        const /** @type {?} */ normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
        if (normalisationChange) {
            this.value = normalisedModelChange.value;
            this.highValue = normalisedModelChange.highValue;
        }
        this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        this.updateAriaAttributes();
        if (this.range) {
            this.updateCombinedLabel();
        }
        // At the end, we need to communicate the model change to the outputs as well
        // Normalisation changes are also always forced out to ensure that subscribers always end up in correct state
        this.outputModelChangeSubject.next({
            value: normalisedModelChange.value,
            highValue: normalisedModelChange.highValue,
            forceChange: normalisationChange,
            userEventInitiated: false
        });
    }
    /**
     * @param {?} modelChange
     * @return {?}
     */
    publishOutputModelChange(modelChange) {
        const /** @type {?} */ emitOutputs = () => {
            this.valueChange.emit(modelChange.value);
            if (this.range) {
                this.highValueChange.emit(modelChange.highValue);
            }
            if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
                if (this.range) {
                    this.onChangeCallback([modelChange.value, modelChange.highValue]);
                }
                else {
                    this.onChangeCallback(modelChange.value);
                }
            }
            if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
                if (this.range) {
                    this.onTouchedCallback([modelChange.value, modelChange.highValue]);
                }
                else {
                    this.onTouchedCallback(modelChange.value);
                }
            }
        };
        if (modelChange.userEventInitiated) {
            // If this change was initiated by a user event, we can emit outputs in the same tick
            emitOutputs();
            this.userChange.emit(this.getChangeContext());
        }
        else {
            // But, if the change was initated by something else like a change in input bindings,
            // we need to wait until next tick to emit the outputs to keep Angular change detection happy
            setTimeout(() => { emitOutputs(); });
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    normaliseModelValues(input) {
        const /** @type {?} */ normalisedInput = new ModelValues();
        normalisedInput.value = input.value;
        normalisedInput.highValue = input.highValue;
        if (this.viewOptions.enforceStep) {
            normalisedInput.value = this.roundStep(normalisedInput.value);
            if (this.range) {
                normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
            }
        }
        // Don't attempt to normalise further when using steps array (steps may be out of order and that is perfectly fine)
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) || !this.viewOptions.enforceRange) {
            return normalisedInput;
        }
        normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
        if (this.range) {
            normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
        }
        // Make sure that range slider invariant (value <= highValue) is always satisfied
        if (this.range && input.value > input.highValue) {
            // We know that both values are now clamped correctly, they may just be in the wrong order
            // So the easy solution is to swap them... except swapping is sometimes disabled in options, so we make the two values the same
            if (this.viewOptions.noSwitching) {
                normalisedInput.value = normalisedInput.highValue;
            }
            else {
                const /** @type {?} */ tempValue = input.value;
                normalisedInput.value = input.highValue;
                normalisedInput.highValue = tempValue;
            }
        }
        return normalisedInput;
    }
    /**
     * @return {?}
     */
    renormaliseModelValues() {
        const /** @type {?} */ previousModelValues = {
            value: this.value,
            highValue: this.highValue
        };
        const /** @type {?} */ normalisedModelValues = this.normaliseModelValues(previousModelValues);
        if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
            this.value = normalisedModelValues.value;
            this.highValue = normalisedModelValues.highValue;
            this.outputModelChangeSubject.next({
                value: this.value,
                highValue: this.highValue,
                forceChange: true,
                userEventInitiated: false
            });
        }
    }
    /**
     * @return {?}
     */
    onChangeOptions() {
        if (!this.initHasRun) {
            return;
        }
        const /** @type {?} */ previousInputEventsInterval = this.viewOptions.inputEventsInterval;
        const /** @type {?} */ previousOutputEventsInterval = this.viewOptions.outputEventsInterval;
        this.applyOptions();
        if (previousInputEventsInterval !== this.viewOptions.inputEventsInterval) {
            this.unsubscribeInputModelChangeSubject();
            this.subscribeInputModelChangeSubject(this.viewOptions.inputEventsInterval);
        }
        if (previousOutputEventsInterval !== this.viewOptions.outputEventsInterval) {
            this.unsubscribeInputModelChangeSubject();
            this.subscribeInputModelChangeSubject(this.viewOptions.outputEventsInterval);
        }
        // With new options, we need to re-normalise model values if necessary
        this.renormaliseModelValues();
        this.viewLowValue = this.modelValueToViewValue(this.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(this.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.resetSlider();
    }
    /**
     * @return {?}
     */
    applyOptions() {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
        this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
        if (this.viewOptions.draggableRangeOnly) {
            this.viewOptions.draggableRange = true;
        }
        this.viewOptions.showTicks = this.viewOptions.showTicks ||
            this.viewOptions.showTicksValues ||
            !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
        if (this.viewOptions.showTicks &&
            (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
            this.intermediateTicks = true;
        }
        this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar ||
            this.viewOptions.showSelectionBarEnd ||
            !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
            this.applyStepsArrayOptions();
        }
        else {
            this.applyFloorCeilOptions();
        }
        if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
            this.viewOptions.combineLabels = (minValue, maxValue) => {
                return minValue + ' - ' + maxValue;
            };
        }
        if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
            throw Error('Can\'t use floor=0 with logarithmic scale');
        }
    }
    /**
     * @return {?}
     */
    applyStepsArrayOptions() {
        this.viewOptions.floor = 0;
        this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
        this.viewOptions.step = 1;
        if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
            this.viewOptions.translate = (modelValue) => {
                if (this.viewOptions.bindIndexForStepsArray) {
                    return String(this.getStepValue(modelValue));
                }
                return String(modelValue);
            };
        }
        this.viewOptions.getLegend = (index) => {
            const /** @type {?} */ step = this.viewOptions.stepsArray[index];
            return step.legend;
        };
    }
    /**
     * @return {?}
     */
    applyFloorCeilOptions() {
        if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
            this.viewOptions.step = 1;
        }
        else {
            this.viewOptions.step = +this.viewOptions.step;
            if (this.viewOptions.step <= 0) {
                this.viewOptions.step = 1;
            }
        }
        if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) ||
            ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
            throw Error('floor and ceil options must be supplied');
        }
        this.viewOptions.ceil = +this.viewOptions.ceil;
        this.viewOptions.floor = +this.viewOptions.floor;
        if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
            this.viewOptions.translate = (value) => String(value);
        }
    }
    /**
     * @return {?}
     */
    resetSlider() {
        this.manageElementsStyle();
        this.addAccessibility();
        this.updateCeilLabel();
        this.updateFloorLabel();
        this.unbindEvents();
        this.manageEventsBindings();
        this.updateDisabledState();
        this.calculateViewDimensions();
        this.refocusPointerIfNeeded();
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    focusPointer(pointerType) {
        // If not supplied, use min pointer as default
        if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
            pointerType = PointerType.Min;
        }
        if (pointerType === PointerType.Min) {
            this.minHandleElement.focus();
        }
        else if (this.range && pointerType === PointerType.Max) {
            this.maxHandleElement.focus();
        }
    }
    /**
     * @return {?}
     */
    refocusPointerIfNeeded() {
        if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
            this.onPointerFocus(this.currentFocusPointer);
            const /** @type {?} */ element = this.getPointerElement(this.currentFocusPointer);
            element.focus();
        }
    }
    /**
     * @return {?}
     */
    manageElementsStyle() {
        this.updateScale();
        this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        const /** @type {?} */ hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
        this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
        this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
        this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
        this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
        this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
        this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
        this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
        if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
            this.updateVerticalState();
            // The above change in host component class will not be applied until the end of this cycle
            // However, functions calculating the slider position expect the slider to be already styled as vertical
            // So as a workaround, we need to reset the slider once again to compute the correct values
            setTimeout(() => { this.resetSlider(); });
        }
        // Changing animate class may interfere with slider reset/initialisation, so we should set it separately,
        // after all is properly set up
        if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
            setTimeout(() => { this.sliderElementAnimateClass = this.viewOptions.animate; });
        }
    }
    /**
     * @return {?}
     */
    manageEventsBindings() {
        if (this.viewOptions.disabled || this.viewOptions.readOnly) {
            this.unbindEvents();
        }
        else {
            this.bindEvents();
        }
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        this.sliderElementDisabledAttr = this.viewOptions.disabled ? 'disabled' : null;
    }
    /**
     * @return {?}
     */
    updateVerticalState() {
        this.sliderElementVerticalClass = this.viewOptions.vertical;
        for (const /** @type {?} */ element of this.getAllSliderElements()) {
            // This is also called before ngAfterInit, so need to check that view child bindings work
            if (!ValueHelper.isNullOrUndefined(element)) {
                element.setVertical(this.viewOptions.vertical);
            }
        }
    }
    /**
     * @return {?}
     */
    updateScale() {
        for (const /** @type {?} */ element of this.getAllSliderElements()) {
            element.setScale(this.viewOptions.scale);
        }
    }
    /**
     * @return {?}
     */
    getAllSliderElements() {
        return [this.leftOuterSelectionBarElement,
            this.rightOuterSelectionBarElement,
            this.fullBarElement,
            this.selectionBarElement,
            this.minHandleElement,
            this.maxHandleElement,
            this.floorLabelElement,
            this.ceilLabelElement,
            this.minHandleLabelElement,
            this.maxHandleLabelElement,
            this.combinedLabelElement,
            this.ticksElement
        ];
    }
    /**
     * @return {?}
     */
    initHandles() {
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        /*
           the order here is important since the selection bar should be
           updated after the high handle but before the combined label
           */
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        if (this.range) {
            this.updateCombinedLabel();
        }
        this.updateTicksScale();
    }
    /**
     * @return {?}
     */
    addAccessibility() {
        this.updateAriaAttributes();
        this.minHandleElement.role = 'slider';
        if (this.viewOptions.keyboardSupport &&
            !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
            this.minHandleElement.tabindex = '0';
        }
        else {
            this.minHandleElement.tabindex = '';
        }
        if (this.viewOptions.vertical) {
            this.minHandleElement.ariaOrientation = 'vertical';
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
            this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
        }
        else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
            this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
        }
        if (this.range) {
            this.maxHandleElement.role = 'slider';
            if (this.viewOptions.keyboardSupport &&
                !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
                this.maxHandleElement.tabindex = '0';
            }
            else {
                this.maxHandleElement.tabindex = '';
            }
            this.maxHandleElement.ariaOrientation = this.viewOptions.vertical ? 'vertical' : 'horizontal';
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
                this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
            }
            else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
                this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
            }
        }
    }
    /**
     * @return {?}
     */
    updateAriaAttributes() {
        this.minHandleElement.ariaValueNow = (+this.value).toString();
        this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
        this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
        this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
        if (this.range) {
            this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
            this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
            this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
            this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
        }
    }
    /**
     * @return {?}
     */
    calculateViewDimensions() {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
            this.minHandleElement.setDimension(this.viewOptions.handleDimension);
        }
        else {
            this.minHandleElement.calculateDimension();
        }
        const /** @type {?} */ handleWidth = this.minHandleElement.dimension;
        this.handleHalfDimension = handleWidth / 2;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
            this.fullBarElement.setDimension(this.viewOptions.barDimension);
        }
        else {
            this.fullBarElement.calculateDimension();
        }
        this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
        if (this.initHasRun) {
            this.updateFloorLabel();
            this.updateCeilLabel();
            this.initHandles();
        }
    }
    /**
     * @return {?}
     */
    calculateViewDimensionsAndDetectChanges() {
        this.calculateViewDimensions();
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * If the slider reference is already destroyed
     * @return {?} boolean - true if ref is destroyed
     */
    isRefDestroyed() {
        return this.changeDetectionRef['destroyed'];
    }
    /**
     * @return {?}
     */
    updateTicksScale() {
        if (!this.viewOptions.showTicks) {
            return;
        }
        const /** @type {?} */ ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray)
            ? this.viewOptions.ticksArray
            : this.getTicksArray();
        const /** @type {?} */ translate = this.viewOptions.vertical ? 'translateY' : 'translateX';
        if (this.viewOptions.rightToLeft) {
            ticksArray.reverse();
        }
        const /** @type {?} */ newTicks = ticksArray.map((value) => {
            let /** @type {?} */ position = this.valueToPosition(value);
            if (this.viewOptions.vertical) {
                position = this.maxHandlePosition - position;
            }
            const /** @type {?} */ translation = translate + '(' + Math.round(position) + 'px)';
            const /** @type {?} */ tick = new Tick();
            tick.selected = this.isTickSelected(value);
            tick.style = {
                '-webkit-transform': translation,
                '-moz-transform': translation,
                '-o-transform': translation,
                '-ms-transform': translation,
                transform: translation,
            };
            if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
                tick.style['background-color'] = this.getSelectionBarColor();
            }
            if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
                tick.style['background-color'] = this.getTickColor(value);
            }
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
                tick.tooltip = this.viewOptions.ticksTooltip(value);
                tick.tooltipPlacement = this.viewOptions.vertical ? 'right' : 'top';
            }
            if (this.viewOptions.showTicksValues && (value % this.viewOptions.tickValueStep === 0)) {
                tick.value = this.getDisplayValue(value, LabelType.TickValue);
                if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
                    tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
                    tick.valueTooltipPlacement = this.viewOptions.vertical
                        ? 'right'
                        : 'top';
                }
            }
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
                const /** @type {?} */ legend = this.viewOptions.getLegend(value);
                if (!ValueHelper.isNullOrUndefined(legend)) {
                    tick.legend = legend;
                }
            }
            return tick;
        });
        // We should avoid re-creating the ticks array if possible
        // This both improves performance and makes CSS animations work correctly
        if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
            for (let /** @type {?} */ i = 0; i < newTicks.length; ++i) {
                Object.assign(this.ticks[i], newTicks[i]);
            }
        }
        else {
            this.ticks = newTicks;
        }
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    getTicksArray() {
        const /** @type {?} */ step = (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) ? this.viewOptions.tickStep : this.viewOptions.step;
        const /** @type {?} */ ticksArray = [];
        for (let /** @type {?} */ value = this.viewOptions.floor; value <= this.viewOptions.ceil; value += step) {
            ticksArray.push(value);
        }
        return ticksArray;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTickSelected(value) {
        if (!this.range) {
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                const /** @type {?} */ center = this.viewOptions.showSelectionBarFromValue;
                if (this.viewLowValue > center &&
                    value >= center &&
                    value <= this.viewLowValue) {
                    return true;
                }
                else if (this.viewLowValue < center &&
                    value <= center &&
                    value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBarEnd) {
                if (value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
                return true;
            }
        }
        if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    updateFloorLabel() {
        if (!this.floorLabelElement.alwaysHide) {
            this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
            this.floorLabelElement.calculateDimension();
            const /** @type {?} */ position = this.viewOptions.rightToLeft
                ? this.fullBarElement.dimension - this.floorLabelElement.dimension
                : 0;
            this.floorLabelElement.setPosition(position);
        }
    }
    /**
     * @return {?}
     */
    updateCeilLabel() {
        if (!this.ceilLabelElement.alwaysHide) {
            this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
            this.ceilLabelElement.calculateDimension();
            const /** @type {?} */ position = this.viewOptions.rightToLeft
                ? 0
                : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
            this.ceilLabelElement.setPosition(position);
        }
    }
    /**
     * @param {?} which
     * @param {?} newPos
     * @return {?}
     */
    updateHandles(which, newPos) {
        if (which === PointerType.Min) {
            this.updateLowHandle(newPos);
        }
        else if (which === PointerType.Max) {
            this.updateHighHandle(newPos);
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        if (this.range) {
            this.updateCombinedLabel();
        }
    }
    /**
     * @param {?} labelType
     * @param {?} newPos
     * @return {?}
     */
    getHandleLabelPos(labelType, newPos) {
        const /** @type {?} */ labelDimension = (labelType === PointerType.Min)
            ? this.minHandleLabelElement.dimension
            : this.maxHandleLabelElement.dimension;
        const /** @type {?} */ nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
        const /** @type {?} */ endOfBarPos = this.fullBarElement.dimension - labelDimension;
        if (!this.viewOptions.boundPointerLabels) {
            return nearHandlePos;
        }
        if ((this.viewOptions.rightToLeft && labelType === PointerType.Min) ||
            (!this.viewOptions.rightToLeft && labelType === PointerType.Max)) {
            return Math.min(nearHandlePos, endOfBarPos);
        }
        else {
            return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
        }
    }
    /**
     * @param {?} newPos
     * @return {?}
     */
    updateLowHandle(newPos) {
        this.minHandleElement.setPosition(newPos);
        this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
        this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
            this.minPointerStyle = {
                backgroundColor: this.getPointerColor(PointerType.Min),
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @param {?} newPos
     * @return {?}
     */
    updateHighHandle(newPos) {
        this.maxHandleElement.setPosition(newPos);
        this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
        this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
            this.maxPointerStyle = {
                backgroundColor: this.getPointerColor(PointerType.Max),
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @return {?}
     */
    updateFloorAndCeilLabelsVisibility() {
        // Show based only on hideLimitLabels if pointer labels are hidden
        if (this.viewOptions.hidePointerLabels) {
            return;
        }
        let /** @type {?} */ floorLabelHidden = false;
        let /** @type {?} */ ceilLabelHidden = false;
        const /** @type {?} */ isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
        const /** @type {?} */ isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
        const /** @type {?} */ isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
        const /** @type {?} */ isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
        const /** @type {?} */ isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
        if (isMinLabelAtFloor) {
            floorLabelHidden = true;
            this.floorLabelElement.hide();
        }
        else {
            floorLabelHidden = false;
            this.floorLabelElement.show();
        }
        if (isMinLabelAtCeil) {
            ceilLabelHidden = true;
            this.ceilLabelElement.hide();
        }
        else {
            ceilLabelHidden = false;
            this.ceilLabelElement.show();
        }
        if (this.range) {
            const /** @type {?} */ hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
            const /** @type {?} */ hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
            if (hideCeil) {
                this.ceilLabelElement.hide();
            }
            else if (!ceilLabelHidden) {
                this.ceilLabelElement.show();
            }
            // Hide or show floor label
            if (hideFloor) {
                this.floorLabelElement.hide();
            }
            else if (!floorLabelHidden) {
                this.floorLabelElement.show();
            }
        }
    }
    /**
     * @param {?} label
     * @return {?}
     */
    isLabelBelowFloorLabel(label) {
        const /** @type {?} */ pos = label.position;
        const /** @type {?} */ dim = label.dimension;
        const /** @type {?} */ floorPos = this.floorLabelElement.position;
        const /** @type {?} */ floorDim = this.floorLabelElement.dimension;
        return this.viewOptions.rightToLeft
            ? pos + dim >= floorPos - 2
            : pos <= floorPos + floorDim + 2;
    }
    /**
     * @param {?} label
     * @return {?}
     */
    isLabelAboveCeilLabel(label) {
        const /** @type {?} */ pos = label.position;
        const /** @type {?} */ dim = label.dimension;
        const /** @type {?} */ ceilPos = this.ceilLabelElement.position;
        const /** @type {?} */ ceilDim = this.ceilLabelElement.dimension;
        return this.viewOptions.rightToLeft
            ? pos <= ceilPos + ceilDim + 2
            : pos + dim >= ceilPos - 2;
    }
    /**
     * @return {?}
     */
    updateSelectionBar() {
        let /** @type {?} */ position = 0;
        let /** @type {?} */ dimension = 0;
        const /** @type {?} */ isSelectionBarFromRight = this.viewOptions.rightToLeft
            ? !this.viewOptions.showSelectionBarEnd
            : this.viewOptions.showSelectionBarEnd;
        const /** @type {?} */ positionForRange = this.viewOptions.rightToLeft
            ? this.maxHandleElement.position + this.handleHalfDimension
            : this.minHandleElement.position + this.handleHalfDimension;
        if (this.range) {
            dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
            position = positionForRange;
        }
        else {
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                const /** @type {?} */ center = this.viewOptions.showSelectionBarFromValue;
                const /** @type {?} */ centerPosition = this.valueToPosition(center);
                const /** @type {?} */ isModelGreaterThanCenter = this.viewOptions.rightToLeft
                    ? this.viewLowValue <= center
                    : this.viewLowValue > center;
                if (isModelGreaterThanCenter) {
                    dimension = this.minHandleElement.position - centerPosition;
                    position = centerPosition + this.handleHalfDimension;
                }
                else {
                    dimension = centerPosition - this.minHandleElement.position;
                    position = this.minHandleElement.position + this.handleHalfDimension;
                }
            }
            else if (isSelectionBarFromRight) {
                dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
                position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
            }
            else {
                dimension = this.minHandleElement.position + this.handleHalfDimension;
                position = 0;
            }
        }
        this.selectionBarElement.setDimension(dimension);
        this.selectionBarElement.setPosition(position);
        if (this.range && this.viewOptions.showOuterSelectionBars) {
            if (this.viewOptions.rightToLeft) {
                this.rightOuterSelectionBarElement.setDimension(position);
                this.rightOuterSelectionBarElement.setPosition(0);
                this.fullBarElement.calculateDimension();
                this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
                this.leftOuterSelectionBarElement.setPosition(position + dimension);
            }
            else {
                this.leftOuterSelectionBarElement.setDimension(position);
                this.leftOuterSelectionBarElement.setPosition(0);
                this.fullBarElement.calculateDimension();
                this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
                this.rightOuterSelectionBarElement.setPosition(position + dimension);
            }
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
            const /** @type {?} */ color = this.getSelectionBarColor();
            this.barStyle = {
                backgroundColor: color,
            };
        }
        else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
            const /** @type {?} */ offset = (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue))
                ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue)
                : 0;
            const /** @type {?} */ reversed = (offset - position > 0 && !isSelectionBarFromRight) || (offset - position <= 0 && isSelectionBarFromRight);
            const /** @type {?} */ direction = this.viewOptions.vertical
                ? reversed ? 'bottom' : 'top'
                : reversed ? 'left' : 'right';
            this.barStyle = {
                backgroundImage: 'linear-gradient(to ' +
                    direction +
                    ', ' +
                    this.viewOptions.selectionBarGradient.from +
                    ' 0%,' +
                    this.viewOptions.selectionBarGradient.to +
                    ' 100%)',
            };
            if (this.viewOptions.vertical) {
                this.barStyle.backgroundPosition =
                    'center ' +
                        (offset +
                            dimension +
                            position +
                            (reversed ? -this.handleHalfDimension : 0)) +
                        'px';
                this.barStyle.backgroundSize =
                    '100% ' + (this.fullBarElement.dimension - this.handleHalfDimension) + 'px';
            }
            else {
                this.barStyle.backgroundPosition =
                    offset -
                        position +
                        (reversed ? this.handleHalfDimension : 0) +
                        'px center';
                this.barStyle.backgroundSize =
                    this.fullBarElement.dimension - this.handleHalfDimension + 'px 100%';
            }
        }
    }
    /**
     * @return {?}
     */
    getSelectionBarColor() {
        if (this.range) {
            return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
        }
        return this.viewOptions.getSelectionBarColor(this.value);
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    getPointerColor(pointerType) {
        if (pointerType === PointerType.Max) {
            return this.viewOptions.getPointerColor(this.highValue, pointerType);
        }
        return this.viewOptions.getPointerColor(this.value, pointerType);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getTickColor(value) {
        return this.viewOptions.getTickColor(value);
    }
    /**
     * @return {?}
     */
    updateCombinedLabel() {
        let /** @type {?} */ isLabelOverlap = null;
        if (this.viewOptions.rightToLeft) {
            isLabelOverlap =
                this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
        }
        else {
            isLabelOverlap =
                this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
        }
        if (isLabelOverlap) {
            const /** @type {?} */ lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
            const /** @type {?} */ highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
            const /** @type {?} */ combinedLabelValue = this.viewOptions.rightToLeft
                ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue)
                : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
            this.combinedLabelElement.setValue(combinedLabelValue);
            const /** @type {?} */ pos = this.viewOptions.boundPointerLabels
                ? Math.min(Math.max(this.selectionBarElement.position +
                    this.selectionBarElement.dimension / 2 -
                    this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension)
                : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
            this.combinedLabelElement.setPosition(pos);
            this.minHandleLabelElement.hide();
            this.maxHandleLabelElement.hide();
            this.combinedLabelElement.show();
        }
        else {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
            this.updateLowHandle(this.valueToPosition(this.viewLowValue));
            this.maxHandleLabelElement.show();
            this.minHandleLabelElement.show();
            this.combinedLabelElement.hide();
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @param {?} value
     * @param {?} which
     * @return {?}
     */
    getDisplayValue(value, which) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            value = this.getStepValue(value);
        }
        return this.viewOptions.translate(value, which);
    }
    /**
     * @param {?} value
     * @param {?=} customStep
     * @return {?}
     */
    roundStep(value, customStep) {
        const /** @type {?} */ step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
        let /** @type {?} */ steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
        steppedDifference = Math.round(steppedDifference) * step;
        return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    valueToPosition(val) {
        let /** @type {?} */ fn = ValueHelper.linearValueToPosition;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
            fn = this.viewOptions.customValueToPosition;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logValueToPosition;
        }
        val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
        let /** @type {?} */ percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
        if (ValueHelper.isNullOrUndefined(percent)) {
            percent = 0;
        }
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        return percent * this.maxHandlePosition;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    positionToValue(position) {
        let /** @type {?} */ percent = position / this.maxHandlePosition;
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        let /** @type {?} */ fn = ValueHelper.linearPositionToValue;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
            fn = this.viewOptions.customPositionToValue;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logPositionToValue;
        }
        const /** @type {?} */ value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
        return !ValueHelper.isNullOrUndefined(value) ? value : 0;
    }
    /**
     * @param {?} event
     * @param {?=} targetTouchId
     * @return {?}
     */
    getEventXY(event, targetTouchId) {
        if (event instanceof MouseEvent) {
            return this.viewOptions.vertical ? event.clientY : event.clientX;
        }
        let /** @type {?} */ touchIndex = 0;
        const /** @type {?} */ touches = event.touches;
        if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
            for (let /** @type {?} */ i = 0; i < touches.length; i++) {
                if (touches[i].identifier === targetTouchId) {
                    touchIndex = i;
                    break;
                }
            }
        }
        // Return the target touch or if the target touch was not found in the event
        // returns the coordinates of the first touch
        return this.viewOptions.vertical ? touches[touchIndex].clientY : touches[touchIndex].clientX;
    }
    /**
     * @param {?} event
     * @param {?=} targetTouchId
     * @return {?}
     */
    getEventPosition(event, targetTouchId) {
        const /** @type {?} */ sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
        const /** @type {?} */ sliderPos = this.viewOptions.vertical ?
            sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
        let /** @type {?} */ eventPos = 0;
        if (this.viewOptions.vertical) {
            eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
        }
        else {
            eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
        }
        return eventPos * this.viewOptions.scale - this.handleHalfDimension;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getNearestHandle(event) {
        if (!this.range) {
            return PointerType.Min;
        }
        const /** @type {?} */ position = this.getEventPosition(event);
        const /** @type {?} */ distanceMin = Math.abs(position - this.minHandleElement.position);
        const /** @type {?} */ distanceMax = Math.abs(position - this.maxHandleElement.position);
        if (distanceMin < distanceMax) {
            return PointerType.Min;
        }
        else if (distanceMin > distanceMax) {
            return PointerType.Max;
        }
        else if (!this.viewOptions.rightToLeft) {
            // if event is at the same distance from min/max then if it's at left of minH, we return minH else maxH
            return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
        }
        // reverse in rtl
        return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    /**
     * @return {?}
     */
    bindEvents() {
        const /** @type {?} */ draggableRange = this.viewOptions.draggableRange;
        if (!this.viewOptions.onlyBindHandles) {
            this.selectionBarElement.on('mousedown', (event) => this.onBarStart(null, draggableRange, event, true, true, true));
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHandleElement.on('mousedown', (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
            this.maxHandleElement.on('mousedown', (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
        }
        else {
            this.minHandleElement.on('mousedown', (event) => this.onStart(PointerType.Min, event, true, true));
            if (this.range) {
                this.maxHandleElement.on('mousedown', (event) => this.onStart(PointerType.Max, event, true, true));
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElement.on('mousedown', (event) => this.onStart(null, event, true, true, true));
                this.ticksElement.on('mousedown', (event) => this.onStart(null, event, true, true, true, true));
            }
        }
        if (!this.viewOptions.onlyBindHandles) {
            this.selectionBarElement.onPassive('touchstart', (event) => this.onBarStart(null, draggableRange, event, true, true, true));
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHandleElement.onPassive('touchstart', (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
            this.maxHandleElement.onPassive('touchstart', (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
        }
        else {
            this.minHandleElement.onPassive('touchstart', (event) => this.onStart(PointerType.Min, event, true, true));
            if (this.range) {
                this.maxHandleElement.onPassive('touchstart', (event) => this.onStart(PointerType.Max, event, true, true));
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElement.onPassive('touchstart', (event) => this.onStart(null, event, true, true, true));
                this.ticksElement.onPassive('touchstart', (event) => this.onStart(null, event, false, false, true, true));
            }
        }
        if (this.viewOptions.keyboardSupport) {
            this.minHandleElement.on('focus', () => this.onPointerFocus(PointerType.Min));
            if (this.range) {
                this.maxHandleElement.on('focus', () => this.onPointerFocus(PointerType.Max));
            }
        }
    }
    /**
     * @return {?}
     */
    unbindEvents() {
        this.unsubscribeOnMove();
        this.unsubscribeOnEnd();
        for (const /** @type {?} */ element of this.getAllSliderElements()) {
            if (!ValueHelper.isNullOrUndefined(element)) {
                element.off();
            }
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} draggableRange
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @param {?=} simulateImmediateMove
     * @param {?=} simulateImmediateEnd
     * @return {?}
     */
    onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        if (draggableRange) {
            this.onDragStart(pointerType, event, bindMove, bindEnd);
        }
        else {
            this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @param {?=} simulateImmediateMove
     * @param {?=} simulateImmediateEnd
     * @return {?}
     */
    onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        event.stopPropagation();
        // Only call preventDefault() when handling non-passive events (passive events don't need it)
        if (!CompatibilityHelper.isTouchEvent(event) || !detectPassiveEvents.hasSupport) {
            event.preventDefault();
        }
        // We have to do this in case the HTML where the sliders are on
        // have been animated into view.
        this.calculateViewDimensions();
        if (ValueHelper.isNullOrUndefined(pointerType)) {
            pointerType = this.getNearestHandle(event);
        }
        this.currentTrackingPointer = pointerType;
        const /** @type {?} */ pointerElement = this.getPointerElement(pointerType);
        pointerElement.active = true;
        if (this.viewOptions.keyboardSupport) {
            pointerElement.focus();
        }
        if (bindMove) {
            this.unsubscribeOnMove();
            const /** @type {?} */ onMoveCallback = (e) => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
            if (CompatibilityHelper.isTouchEvent(event)) {
                this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchmove', onMoveCallback, this.viewOptions.touchEventsInterval);
            }
            else {
                this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, 'mousemove', onMoveCallback, this.viewOptions.mouseEventsInterval);
            }
        }
        if (bindEnd) {
            this.unsubscribeOnEnd();
            const /** @type {?} */ onEndCallback = (e) => this.onEnd(e);
            if (CompatibilityHelper.isTouchEvent(event)) {
                this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchend', onEndCallback);
            }
            else {
                this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, 'mouseup', onEndCallback);
            }
        }
        this.userChangeStart.emit(this.getChangeContext());
        if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined((/** @type {?} */ (event)).changedTouches)) {
            // Store the touch identifier
            if (ValueHelper.isNullOrUndefined(this.touchId)) {
                this.touchId = (/** @type {?} */ (event)).changedTouches[0].identifier;
            }
        }
        // Click events, either with mouse or touch gesture are weird. Sometimes they result in full
        // start, move, end sequence, and sometimes, they don't - they only invoke mousedown
        // As a workaround, we simulate the first move event and the end event if it's necessary
        if (simulateImmediateMove) {
            this.onMove(event, true);
        }
        if (simulateImmediateEnd) {
            this.onEnd(event);
        }
    }
    /**
     * @param {?} event
     * @param {?=} fromTick
     * @return {?}
     */
    onMove(event, fromTick) {
        let /** @type {?} */ touchForThisSlider = null;
        if (CompatibilityHelper.isTouchEvent(event)) {
            const /** @type {?} */ changedTouches = (/** @type {?} */ (event)).changedTouches;
            for (let /** @type {?} */ i = 0; i < changedTouches.length; i++) {
                if (changedTouches[i].identifier === this.touchId) {
                    touchForThisSlider = changedTouches[i];
                    break;
                }
            }
            if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
                return;
            }
        }
        const /** @type {?} */ newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider)
            ? this.getEventPosition(event, touchForThisSlider.identifier)
            : this.getEventPosition(event);
        let /** @type {?} */ newValue;
        const /** @type {?} */ ceilValue = this.viewOptions.rightToLeft
            ? this.viewOptions.floor
            : this.viewOptions.ceil;
        const /** @type {?} */ floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
        if (newPos <= 0) {
            newValue = floorValue;
        }
        else if (newPos >= this.maxHandlePosition) {
            newValue = ceilValue;
        }
        else {
            newValue = this.positionToValue(newPos);
            if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
                newValue = this.roundStep(newValue, this.viewOptions.tickStep);
            }
            else {
                newValue = this.roundStep(newValue);
            }
        }
        this.positionTrackingHandle(newValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnd(event) {
        if (CompatibilityHelper.isTouchEvent(event)) {
            const /** @type {?} */ changedTouches = (/** @type {?} */ (event)).changedTouches;
            if (changedTouches[0].identifier !== this.touchId) {
                return;
            }
        }
        this.touchId = null;
        if (!this.viewOptions.keyboardSupport) {
            this.minHandleElement.active = false;
            this.maxHandleElement.active = false;
            this.currentTrackingPointer = null;
        }
        this.dragging.active = false;
        this.unsubscribeOnMove();
        this.unsubscribeOnEnd();
        this.userChangeEnd.emit(this.getChangeContext());
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    onPointerFocus(pointerType) {
        const /** @type {?} */ pointerElement = this.getPointerElement(pointerType);
        pointerElement.on('blur', () => this.onPointerBlur(pointerElement));
        pointerElement.on('keydown', (event) => this.onKeyboardEvent(event));
        pointerElement.on('keyup', () => this.onKeyUp());
        pointerElement.active = true;
        this.currentTrackingPointer = pointerType;
        this.currentFocusPointer = pointerType;
        this.firstKeyDown = true;
    }
    /**
     * @return {?}
     */
    onKeyUp() {
        this.firstKeyDown = true;
        this.userChangeEnd.emit(this.getChangeContext());
    }
    /**
     * @param {?} pointer
     * @return {?}
     */
    onPointerBlur(pointer) {
        pointer.off('blur');
        pointer.off('keydown');
        pointer.off('keyup');
        pointer.active = false;
        if (ValueHelper.isNullOrUndefined(this.touchId)) {
            this.currentTrackingPointer = null;
            this.currentFocusPointer = null;
        }
    }
    /**
     * @param {?} currentValue
     * @return {?}
     */
    getKeyActions(currentValue) {
        const /** @type {?} */ valueRange = this.viewOptions.ceil - this.viewOptions.floor;
        let /** @type {?} */ increaseStep = currentValue + this.viewOptions.step;
        let /** @type {?} */ decreaseStep = currentValue - this.viewOptions.step;
        let /** @type {?} */ increasePage = currentValue + valueRange / 10;
        let /** @type {?} */ decreasePage = currentValue - valueRange / 10;
        if (this.viewOptions.reversedControls) {
            increaseStep = currentValue - this.viewOptions.step;
            decreaseStep = currentValue + this.viewOptions.step;
            increasePage = currentValue - valueRange / 10;
            decreasePage = currentValue + valueRange / 10;
        }
        // Left to right default actions
        const /** @type {?} */ actions = {
            UP: increaseStep,
            DOWN: decreaseStep,
            LEFT: decreaseStep,
            RIGHT: increaseStep,
            PAGEUP: increasePage,
            PAGEDOWN: decreasePage,
            HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
            END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil,
        };
        // right to left means swapping right and left arrows
        if (this.viewOptions.rightToLeft) {
            actions["LEFT"] = increaseStep;
            actions["RIGHT"] = decreaseStep;
            // right to left and vertical means we also swap up and down
            if (this.viewOptions.vertical) {
                actions["UP"] = decreaseStep;
                actions["DOWN"] = increaseStep;
            }
        }
        return actions;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyboardEvent(event) {
        const /** @type {?} */ currentValue = this.getCurrentTrackingValue();
        const /** @type {?} */ keyCode = !ValueHelper.isNullOrUndefined(event.keyCode)
            ? event.keyCode
            : event.which;
        const /** @type {?} */ keys = {
            38: 'UP',
            40: 'DOWN',
            37: 'LEFT',
            39: 'RIGHT',
            33: 'PAGEUP',
            34: 'PAGEDOWN',
            36: 'HOME',
            35: 'END',
        };
        const /** @type {?} */ actions = this.getKeyActions(currentValue);
        const /** @type {?} */ key = keys[keyCode];
        const /** @type {?} */ action = actions[key];
        if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
            return;
        }
        event.preventDefault();
        if (this.firstKeyDown) {
            this.firstKeyDown = false;
            this.userChangeStart.emit(this.getChangeContext());
        }
        const /** @type {?} */ actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
        const /** @type {?} */ newValue = this.roundStep(actionValue);
        if (!this.viewOptions.draggableRangeOnly) {
            this.positionTrackingHandle(newValue);
        }
        else {
            const /** @type {?} */ difference = this.viewHighValue - this.viewLowValue;
            let /** @type {?} */ newMinValue;
            let /** @type {?} */ newMaxValue;
            if (this.currentTrackingPointer === PointerType.Min) {
                newMinValue = newValue;
                newMaxValue = newValue + difference;
                if (newMaxValue > this.viewOptions.ceil) {
                    newMaxValue = this.viewOptions.ceil;
                    newMinValue = newMaxValue - difference;
                }
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                newMaxValue = newValue;
                newMinValue = newValue - difference;
                if (newMinValue < this.viewOptions.floor) {
                    newMinValue = this.viewOptions.floor;
                    newMaxValue = newMinValue + difference;
                }
            }
            this.positionTrackingBar(newMinValue, newMaxValue);
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @return {?}
     */
    onDragStart(pointerType, event, bindMove, bindEnd) {
        const /** @type {?} */ position = this.getEventPosition(event);
        this.dragging = new Dragging();
        this.dragging.active = true;
        this.dragging.value = this.positionToValue(position);
        this.dragging.difference = this.viewHighValue - this.viewLowValue;
        this.dragging.lowLimit = this.viewOptions.rightToLeft
            ? this.minHandleElement.position - position
            : position - this.minHandleElement.position;
        this.dragging.highLimit = this.viewOptions.rightToLeft
            ? position - this.maxHandleElement.position
            : this.maxHandleElement.position - position;
        this.onStart(pointerType, event, bindMove, bindEnd);
    }
    /**
     * Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
     * @param {?} newPos
     * @param {?} outOfBounds
     * @param {?} isAbove
     * @return {?}
     */
    getMinValue(newPos, outOfBounds, isAbove) {
        const /** @type {?} */ isRTL = this.viewOptions.rightToLeft;
        let /** @type {?} */ value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.viewOptions.floor
                    : this.viewOptions.ceil - this.dragging.difference;
            }
            else {
                value = isRTL
                    ? this.viewOptions.ceil - this.dragging.difference
                    : this.viewOptions.floor;
            }
        }
        else {
            value = isRTL
                ? this.positionToValue(newPos + this.dragging.lowLimit)
                : this.positionToValue(newPos - this.dragging.lowLimit);
        }
        return this.roundStep(value);
    }
    /**
     * Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
     * @param {?} newPos
     * @param {?} outOfBounds
     * @param {?} isAbove
     * @return {?}
     */
    getMaxValue(newPos, outOfBounds, isAbove) {
        const /** @type {?} */ isRTL = this.viewOptions.rightToLeft;
        let /** @type {?} */ value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.viewOptions.floor + this.dragging.difference
                    : this.viewOptions.ceil;
            }
            else {
                value = isRTL
                    ? this.viewOptions.ceil
                    : this.viewOptions.floor + this.dragging.difference;
            }
        }
        else {
            if (isRTL) {
                value =
                    this.positionToValue(newPos + this.dragging.lowLimit) +
                        this.dragging.difference;
            }
            else {
                value =
                    this.positionToValue(newPos - this.dragging.lowLimit) +
                        this.dragging.difference;
            }
        }
        return this.roundStep(value);
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onDragMove(event) {
        const /** @type {?} */ newPos = this.getEventPosition(event);
        let /** @type {?} */ ceilLimit, /** @type {?} */
        floorLimit, /** @type {?} */
        floorHandleElement, /** @type {?} */
        ceilHandleElement;
        if (this.viewOptions.rightToLeft) {
            ceilLimit = this.dragging.lowLimit;
            floorLimit = this.dragging.highLimit;
            floorHandleElement = this.maxHandleElement;
            ceilHandleElement = this.minHandleElement;
        }
        else {
            ceilLimit = this.dragging.highLimit;
            floorLimit = this.dragging.lowLimit;
            floorHandleElement = this.minHandleElement;
            ceilHandleElement = this.maxHandleElement;
        }
        const /** @type {?} */ isUnderFloorLimit = (newPos <= floorLimit);
        const /** @type {?} */ isOverCeilLimit = (newPos >= this.maxHandlePosition - ceilLimit);
        let /** @type {?} */ newMinValue;
        let /** @type {?} */ newMaxValue;
        if (isUnderFloorLimit) {
            if (floorHandleElement.position === 0) {
                return;
            }
            newMinValue = this.getMinValue(newPos, true, false);
            newMaxValue = this.getMaxValue(newPos, true, false);
        }
        else if (isOverCeilLimit) {
            if (ceilHandleElement.position === this.maxHandlePosition) {
                return;
            }
            newMaxValue = this.getMaxValue(newPos, true, true);
            newMinValue = this.getMinValue(newPos, true, true);
        }
        else {
            newMinValue = this.getMinValue(newPos, false, false);
            newMaxValue = this.getMaxValue(newPos, false, false);
        }
        this.positionTrackingBar(newMinValue, newMaxValue);
    }
    /**
     * @param {?} newMinValue
     * @param {?} newMaxValue
     * @return {?}
     */
    positionTrackingBar(newMinValue, newMaxValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) &&
            newMinValue < this.viewOptions.minLimit) {
            newMinValue = this.viewOptions.minLimit;
            newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) &&
            newMaxValue > this.viewOptions.maxLimit) {
            newMaxValue = this.viewOptions.maxLimit;
            newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
        }
        this.viewLowValue = newMinValue;
        this.viewHighValue = newMaxValue;
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
        this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    positionTrackingHandle(newValue) {
        newValue = this.applyMinMaxLimit(newValue);
        if (this.range) {
            if (this.viewOptions.pushRange) {
                newValue = this.applyPushRange(newValue);
            }
            else {
                if (this.viewOptions.noSwitching) {
                    if (this.currentTrackingPointer === PointerType.Min &&
                        newValue > this.viewHighValue) {
                        newValue = this.applyMinMaxRange(this.viewHighValue);
                    }
                    else if (this.currentTrackingPointer === PointerType.Max &&
                        newValue < this.viewLowValue) {
                        newValue = this.applyMinMaxRange(this.viewLowValue);
                    }
                }
                newValue = this.applyMinMaxRange(newValue);
                /* This is to check if we need to switch the min and max handles */
                if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
                    this.viewLowValue = this.viewHighValue;
                    this.applyViewChange();
                    this.updateHandles(PointerType.Min, this.maxHandleElement.position);
                    this.updateAriaAttributes();
                    this.currentTrackingPointer = PointerType.Max;
                    this.minHandleElement.active = false;
                    this.maxHandleElement.active = true;
                    if (this.viewOptions.keyboardSupport) {
                        this.maxHandleElement.focus();
                    }
                }
                else if (this.currentTrackingPointer === PointerType.Max &&
                    newValue < this.viewLowValue) {
                    this.viewHighValue = this.viewLowValue;
                    this.applyViewChange();
                    this.updateHandles(PointerType.Max, this.minHandleElement.position);
                    this.updateAriaAttributes();
                    this.currentTrackingPointer = PointerType.Min;
                    this.maxHandleElement.active = false;
                    this.minHandleElement.active = true;
                    if (this.viewOptions.keyboardSupport) {
                        this.minHandleElement.focus();
                    }
                }
            }
        }
        if (this.getCurrentTrackingValue() !== newValue) {
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewLowValue = newValue;
                this.applyViewChange();
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewHighValue = newValue;
                this.applyViewChange();
            }
            this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
            this.updateAriaAttributes();
        }
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyMinMaxLimit(newValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
            return this.viewOptions.minLimit;
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
            return this.viewOptions.maxLimit;
        }
        return newValue;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyMinMaxRange(newValue) {
        const /** @type {?} */ oppositeValue = (this.currentTrackingPointer === PointerType.Min)
            ? this.viewHighValue
            : this.viewLowValue;
        const /** @type {?} */ difference = Math.abs(newValue - oppositeValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
            if (difference < this.viewOptions.minRange) {
                if (this.currentTrackingPointer === PointerType.Min) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
                }
                else if (this.currentTrackingPointer === PointerType.Max) {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
                }
            }
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
            if (difference > this.viewOptions.maxRange) {
                if (this.currentTrackingPointer === PointerType.Min) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                }
                else if (this.currentTrackingPointer === PointerType.Max) {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                }
            }
        }
        return newValue;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyPushRange(newValue) {
        const /** @type {?} */ difference = (this.currentTrackingPointer === PointerType.Min)
            ? this.viewHighValue - newValue
            : newValue - this.viewLowValue;
        const /** @type {?} */ minRange = (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange))
            ? this.viewOptions.minRange
            : this.viewOptions.step;
        const /** @type {?} */ maxRange = this.viewOptions.maxRange;
        // if smaller than minRange
        if (difference < minRange) {
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
            // if greater than maxRange
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        return newValue;
    }
    /**
     * @return {?}
     */
    getChangeContext() {
        const /** @type {?} */ changeContext = new ChangeContext();
        changeContext.pointerType = this.currentTrackingPointer;
        changeContext.value = +this.value;
        if (this.range) {
            changeContext.highValue = +this.highValue;
        }
        return changeContext;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
SliderComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["ng5-slider"]], contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, viewQuery: function SliderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, 5, SliderElementDirective);
        ɵngcc0.ɵɵviewQuery(_c2, 5, SliderElementDirective);
        ɵngcc0.ɵɵviewQuery(_c3, 5, SliderElementDirective);
        ɵngcc0.ɵɵviewQuery(_c4, 5, SliderElementDirective);
        ɵngcc0.ɵɵviewQuery(_c5, 5, SliderHandleDirective);
        ɵngcc0.ɵɵviewQuery(_c6, 5, SliderHandleDirective);
        ɵngcc0.ɵɵviewQuery(_c7, 5, SliderLabelDirective);
        ɵngcc0.ɵɵviewQuery(_c8, 5, SliderLabelDirective);
        ɵngcc0.ɵɵviewQuery(_c9, 5, SliderLabelDirective);
        ɵngcc0.ɵɵviewQuery(_c10, 5, SliderLabelDirective);
        ɵngcc0.ɵɵviewQuery(_c11, 5, SliderLabelDirective);
        ɵngcc0.ɵɵviewQuery(_c12, 5, SliderElementDirective);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.leftOuterSelectionBarElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.rightOuterSelectionBarElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fullBarElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.selectionBarElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.minHandleElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.maxHandleElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.floorLabelElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ceilLabelElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.minHandleLabelElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.maxHandleLabelElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.combinedLabelElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ticksElement = _t.first);
    } }, hostAttrs: [1, "ng5-slider"], hostVars: 5, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function SliderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("disabled", ctx.sliderElementDisabledAttr);
        ɵngcc0.ɵɵclassProp("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass);
    } }, inputs: { value: "value", highValue: "highValue", options: "options", manualRefresh: "manualRefresh", triggerFocus: "triggerFocus" }, outputs: { valueChange: "valueChange", highValueChange: "highValueChange", userChangeStart: "userChangeStart", userChange: "userChange", userChangeEnd: "userChangeEnd" }, features: [ɵngcc0.ɵɵProvidersFeature([NG5_SLIDER_CONTROL_VALUE_ACCESSOR]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 29, vars: 13, consts: [["ng5SliderElement", "", 1, "ng5-slider-span", "ng5-slider-bar-wrapper", "ng5-slider-left-out-selection"], ["leftOuterSelectionBar", ""], [1, "ng5-slider-span", "ng5-slider-bar"], ["ng5SliderElement", "", 1, "ng5-slider-span", "ng5-slider-bar-wrapper", "ng5-slider-right-out-selection"], ["rightOuterSelectionBar", ""], ["ng5SliderElement", "", 1, "ng5-slider-span", "ng5-slider-bar-wrapper", "ng5-slider-full-bar"], ["fullBar", ""], ["ng5SliderElement", "", 1, "ng5-slider-span", "ng5-slider-bar-wrapper", "ng5-slider-selection-bar"], ["selectionBar", ""], [1, "ng5-slider-span", "ng5-slider-bar", "ng5-slider-selection", 3, "ngStyle"], ["ng5SliderHandle", "", 1, "ng5-slider-span", "ng5-slider-pointer", "ng5-slider-pointer-min", 3, "ngStyle"], ["minHandle", ""], ["ng5SliderHandle", "", 1, "ng5-slider-span", "ng5-slider-pointer", "ng5-slider-pointer-max", 3, "ngStyle"], ["maxHandle", ""], ["ng5SliderLabel", "", 1, "ng5-slider-span", "ng5-slider-bubble", "ng5-slider-limit", "ng5-slider-floor"], ["floorLabel", ""], ["ng5SliderLabel", "", 1, "ng5-slider-span", "ng5-slider-bubble", "ng5-slider-limit", "ng5-slider-ceil"], ["ceilLabel", ""], ["ng5SliderLabel", "", 1, "ng5-slider-span", "ng5-slider-bubble", "ng5-slider-model-value"], ["minHandleLabel", ""], ["ng5SliderLabel", "", 1, "ng5-slider-span", "ng5-slider-bubble", "ng5-slider-model-high"], ["maxHandleLabel", ""], ["ng5SliderLabel", "", 1, "ng5-slider-span", "ng5-slider-bubble", "ng5-slider-combined"], ["combinedLabel", ""], ["ng5SliderElement", "", 1, "ng5-slider-ticks", 3, "hidden"], ["ticksElement", ""], ["class", "ng5-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ng5-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ng5-slider-span ng5-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ng5-slider-span ng5-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ng5-slider-span", "ng5-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ng5-slider-span", "ng5-slider-tick-legend", 3, "innerHTML"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0, 1);
        ɵngcc0.ɵɵelement(2, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 3, 4);
        ɵngcc0.ɵɵelement(5, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "span", 5, 6);
        ɵngcc0.ɵɵelement(8, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "span", 7, 8);
        ɵngcc0.ɵɵelement(11, "span", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(12, "span", 10, 11);
        ɵngcc0.ɵɵelement(14, "span", 12, 13);
        ɵngcc0.ɵɵelement(16, "span", 14, 15);
        ɵngcc0.ɵɵelement(18, "span", 16, 17);
        ɵngcc0.ɵɵelement(20, "span", 18, 19);
        ɵngcc0.ɵɵelement(22, "span", 20, 21);
        ɵngcc0.ɵɵelement(24, "span", 22, 23);
        ɵngcc0.ɵɵelementStart(26, "span", 24, 25);
        ɵngcc0.ɵɵtemplate(28, SliderComponent_span_28_Template, 4, 9, "span", 26);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵclassProp("ng5-slider-transparent", ctx.fullBarTransparentClass);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵclassProp("ng5-slider-draggable", ctx.selectionBarDraggableClass);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.barStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.minPointerStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleProp("display", ctx.range ? "inherit" : "none");
        ɵngcc0.ɵɵproperty("ngStyle", ctx.maxPointerStyle);
        ɵngcc0.ɵɵadvance(12);
        ɵngcc0.ɵɵclassProp("ng5-slider-ticks-values-under", ctx.ticksUnderValuesClass);
        ɵngcc0.ɵɵproperty("hidden", !ctx.showTicks);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.ticks);
    } }, directives: function () { return [SliderElementDirective, ɵngcc1.NgStyle, SliderHandleDirective, SliderLabelDirective, ɵngcc1.NgForOf, ɵngcc1.NgClass, TooltipWrapperComponent, ɵngcc1.NgIf]; }, styles: [".ng5-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y}  .ng5-slider.with-legend{margin-bottom:40px}  .ng5-slider[disabled]{cursor:not-allowed}  .ng5-slider[disabled] .ng5-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ng5-slider[disabled] .ng5-slider-draggable{cursor:not-allowed}  .ng5-slider[disabled] .ng5-slider-selection{background:#8b91a2}  .ng5-slider[disabled] .ng5-slider-tick{cursor:not-allowed}  .ng5-slider[disabled] .ng5-slider-tick.ng5-slider-selected{background:#8b91a2}  .ng5-slider .ng5-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ng5-slider .ng5-slider-base{width:100%;height:100%;padding:0}  .ng5-slider .ng5-slider-bar-wrapper{left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ng5-slider .ng5-slider-draggable{cursor:move}  .ng5-slider .ng5-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}  .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-transparent .ng5-slider-bar{background:0 0}  .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-left-out-selection .ng5-slider-bar{background:#df002d}  .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-right-out-selection .ng5-slider-bar{background:#03a688}  .ng5-slider .ng5-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}  .ng5-slider .ng5-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}  .ng5-slider .ng5-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}  .ng5-slider .ng5-slider-pointer:hover:after{background-color:#fff}  .ng5-slider .ng5-slider-pointer.ng5-slider-active{z-index:4}  .ng5-slider .ng5-slider-pointer.ng5-slider-active:after{background-color:#451aff}  .ng5-slider .ng5-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ng5-slider .ng5-slider-bubble.ng5-slider-limit{color:#55637d}  .ng5-slider .ng5-slider-ticks{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ng5-slider .ng5-slider-ticks-values-under .ng5-slider-tick-value{top:auto;bottom:-36px}  .ng5-slider .ng5-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ng5-slider .ng5-slider-tick.ng5-slider-selected{background:#0db9f0}  .ng5-slider .ng5-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}  .ng5-slider .ng5-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}  .ng5-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;-ms-touch-action:pan-x;touch-action:pan-x}  .ng5-slider.vertical .ng5-slider-base{width:100%;height:100%;padding:0}  .ng5-slider.vertical .ng5-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ng5-slider.vertical .ng5-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ng5-slider.vertical .ng5-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ng5-slider.vertical .ng5-slider-bubble{left:16px!important;bottom:0}  .ng5-slider.vertical .ng5-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ng5-slider.vertical .ng5-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ng5-slider.vertical .ng5-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}  .ng5-slider.vertical .ng5-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}  .ng5-slider.vertical .ng5-slider-ticks-values-under .ng5-slider-tick-value{bottom:auto;left:auto;right:24px}  .ng5-slider *{-webkit-transition:none;transition:none}  .ng5-slider.animate .ng5-slider-bar-wrapper{-webkit-transition:all linear .3s;transition:all linear .3s}  .ng5-slider.animate .ng5-slider-selection{-webkit-transition:background-color linear .3s;transition:background-color linear .3s}  .ng5-slider.animate .ng5-slider-pointer{-webkit-transition:all linear .3s;transition:all linear .3s}  .ng5-slider.animate .ng5-slider-bubble{-webkit-transition:all linear .3s;transition:all linear .3s}  .ng5-slider.animate .ng5-slider-bubble.ng5-slider-limit{-webkit-transition:opacity linear .3s;transition:opacity linear .3s}  .ng5-slider.animate .ng5-slider-bubble.ng5-slider-combined{-webkit-transition:opacity linear .3s;transition:opacity linear .3s}  .ng5-slider.animate .ng5-slider-tick{-webkit-transition:background-color linear .3s;transition:background-color linear .3s}"] });
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: NgZone, },
];
SliderComponent.propDecorators = {
    "value": [{ type: Input },],
    "valueChange": [{ type: Output },],
    "highValue": [{ type: Input },],
    "highValueChange": [{ type: Output },],
    "options": [{ type: Input },],
    "userChangeStart": [{ type: Output },],
    "userChange": [{ type: Output },],
    "userChangeEnd": [{ type: Output },],
    "manualRefresh": [{ type: Input },],
    "triggerFocus": [{ type: Input },],
    "leftOuterSelectionBarElement": [{ type: ViewChild, args: ['leftOuterSelectionBar', { read: SliderElementDirective },] },],
    "rightOuterSelectionBarElement": [{ type: ViewChild, args: ['rightOuterSelectionBar', { read: SliderElementDirective },] },],
    "fullBarElement": [{ type: ViewChild, args: ['fullBar', { read: SliderElementDirective },] },],
    "selectionBarElement": [{ type: ViewChild, args: ['selectionBar', { read: SliderElementDirective },] },],
    "minHandleElement": [{ type: ViewChild, args: ['minHandle', { read: SliderHandleDirective },] },],
    "maxHandleElement": [{ type: ViewChild, args: ['maxHandle', { read: SliderHandleDirective },] },],
    "floorLabelElement": [{ type: ViewChild, args: ['floorLabel', { read: SliderLabelDirective },] },],
    "ceilLabelElement": [{ type: ViewChild, args: ['ceilLabel', { read: SliderLabelDirective },] },],
    "minHandleLabelElement": [{ type: ViewChild, args: ['minHandleLabel', { read: SliderLabelDirective },] },],
    "maxHandleLabelElement": [{ type: ViewChild, args: ['maxHandleLabel', { read: SliderLabelDirective },] },],
    "combinedLabelElement": [{ type: ViewChild, args: ['combinedLabel', { read: SliderLabelDirective },] },],
    "ticksElement": [{ type: ViewChild, args: ['ticksElement', { read: SliderElementDirective },] },],
    "tooltipTemplate": [{ type: ContentChild, args: ['tooltipTemplate',] },],
    "sliderElementVerticalClass": [{ type: HostBinding, args: ['class.vertical',] },],
    "sliderElementAnimateClass": [{ type: HostBinding, args: ['class.animate',] },],
    "sliderElementDisabledAttr": [{ type: HostBinding, args: ['attr.disabled',] },],
    "onResize": [{ type: HostListener, args: ['window:resize', ['$event'],] },],
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: 'ng5-slider',
                template: `<!-- // 0 Left selection bar outside two handles -->
<span ng5SliderElement #leftOuterSelectionBar class="ng5-slider-span ng5-slider-bar-wrapper ng5-slider-left-out-selection">
  <span class="ng5-slider-span ng5-slider-bar"></span>
</span>
<!-- // 1 Right selection bar outside two handles -->
<span ng5SliderElement #rightOuterSelectionBar class="ng5-slider-span ng5-slider-bar-wrapper ng5-slider-right-out-selection">
  <span class="ng5-slider-span ng5-slider-bar"></span>
</span>
<!-- // 2 The whole slider bar -->
<span ng5SliderElement #fullBar [class.ng5-slider-transparent]="fullBarTransparentClass" class="ng5-slider-span ng5-slider-bar-wrapper ng5-slider-full-bar">
  <span class="ng5-slider-span ng5-slider-bar"></span>
</span>
<!-- // 3 Selection bar between two handles -->
<span ng5SliderElement #selectionBar [class.ng5-slider-draggable]="selectionBarDraggableClass" class="ng5-slider-span ng5-slider-bar-wrapper ng5-slider-selection-bar">
  <span class="ng5-slider-span ng5-slider-bar ng5-slider-selection" [ngStyle]="barStyle"></span>
</span>
<!-- // 4 Low slider handle -->
<span ng5SliderHandle #minHandle class="ng5-slider-span ng5-slider-pointer ng5-slider-pointer-min" [ngStyle]=minPointerStyle></span>
<!-- // 5 High slider handle -->
<span ng5SliderHandle #maxHandle [style.display]="range ? 'inherit' : 'none'" class="ng5-slider-span ng5-slider-pointer ng5-slider-pointer-max" [ngStyle]=maxPointerStyle></span>
<!-- // 6 Floor label -->
<span ng5SliderLabel #floorLabel class="ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-floor"></span>
<!-- // 7 Ceiling label -->
<span ng5SliderLabel #ceilLabel class="ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-ceil"></span>
<!-- // 8 Label above the low slider handle -->
<span ng5SliderLabel #minHandleLabel class="ng5-slider-span ng5-slider-bubble ng5-slider-model-value"></span>
<!-- // 9 Label above the high slider handle -->
<span ng5SliderLabel #maxHandleLabel class="ng5-slider-span ng5-slider-bubble ng5-slider-model-high"></span>
<!-- // 10 Combined range label when the slider handles are close ex. 15 - 17 -->
<span ng5SliderLabel #combinedLabel class="ng5-slider-span ng5-slider-bubble ng5-slider-combined"></span>
<!-- // 11 The ticks -->
<span ng5SliderElement #ticksElement [hidden]="!showTicks" [class.ng5-slider-ticks-values-under]="ticksUnderValuesClass" class="ng5-slider-ticks">
  <span *ngFor="let t of ticks" class="ng5-slider-tick" [ngClass]="{'ng5-slider-selected': t.selected}" [ngStyle]="t.style">
    <ng5-slider-tooltip-wrapper [template]="tooltipTemplate" [tooltip]="t.tooltip" [placement]="t.tooltipPlacement"></ng5-slider-tooltip-wrapper>
    <ng5-slider-tooltip-wrapper *ngIf="t.value != null" class="ng5-slider-span ng5-slider-tick-value"
        [template]="tooltipTemplate" [tooltip]="t.valueTooltip" [placement]="t.valueTooltipPlacement" [content]="t.value"></ng5-slider-tooltip-wrapper>
    <span *ngIf="t.legend != null" class="ng5-slider-span ng5-slider-tick-legend" [innerHTML]="t.legend"></span>
  </span>
</span>`,
                styles: [`::ng-deep .ng5-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y}::ng-deep .ng5-slider.with-legend{margin-bottom:40px}::ng-deep .ng5-slider[disabled]{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ng5-slider[disabled] .ng5-slider-draggable{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-selection{background:#8b91a2}::ng-deep .ng5-slider[disabled] .ng5-slider-tick{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-tick.ng5-slider-selected{background:#8b91a2}::ng-deep .ng5-slider .ng5-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ng5-slider .ng5-slider-base{width:100%;height:100%;padding:0}::ng-deep .ng5-slider .ng5-slider-bar-wrapper{left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ng5-slider .ng5-slider-draggable{cursor:move}::ng-deep .ng5-slider .ng5-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-transparent .ng5-slider-bar{background:0 0}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-left-out-selection .ng5-slider-bar{background:#df002d}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-right-out-selection .ng5-slider-bar{background:#03a688}::ng-deep .ng5-slider .ng5-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}::ng-deep .ng5-slider .ng5-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}::ng-deep .ng5-slider .ng5-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}::ng-deep .ng5-slider .ng5-slider-pointer:hover:after{background-color:#fff}::ng-deep .ng5-slider .ng5-slider-pointer.ng5-slider-active{z-index:4}::ng-deep .ng5-slider .ng5-slider-pointer.ng5-slider-active:after{background-color:#451aff}::ng-deep .ng5-slider .ng5-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ng5-slider .ng5-slider-bubble.ng5-slider-limit{color:#55637d}::ng-deep .ng5-slider .ng5-slider-ticks{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ng5-slider .ng5-slider-ticks-values-under .ng5-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ng5-slider .ng5-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ng5-slider .ng5-slider-tick.ng5-slider-selected{background:#0db9f0}::ng-deep .ng5-slider .ng5-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}::ng-deep .ng5-slider .ng5-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}::ng-deep .ng5-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;-ms-touch-action:pan-x;touch-action:pan-x}::ng-deep .ng5-slider.vertical .ng5-slider-base{width:100%;height:100%;padding:0}::ng-deep .ng5-slider.vertical .ng5-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ng5-slider.vertical .ng5-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ng5-slider.vertical .ng5-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ng5-slider.vertical .ng5-slider-bubble{left:16px!important;bottom:0}::ng-deep .ng5-slider.vertical .ng5-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ng5-slider.vertical .ng5-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ng5-slider.vertical .ng5-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}::ng-deep .ng5-slider.vertical .ng5-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}::ng-deep .ng5-slider.vertical .ng5-slider-ticks-values-under .ng5-slider-tick-value{bottom:auto;left:auto;right:24px}::ng-deep .ng5-slider *{-webkit-transition:none;transition:none}::ng-deep .ng5-slider.animate .ng5-slider-bar-wrapper{-webkit-transition:all linear .3s;transition:all linear .3s}::ng-deep .ng5-slider.animate .ng5-slider-selection{-webkit-transition:background-color linear .3s;transition:background-color linear .3s}::ng-deep .ng5-slider.animate .ng5-slider-pointer{-webkit-transition:all linear .3s;transition:all linear .3s}::ng-deep .ng5-slider.animate .ng5-slider-bubble{-webkit-transition:all linear .3s;transition:all linear .3s}::ng-deep .ng5-slider.animate .ng5-slider-bubble.ng5-slider-limit{-webkit-transition:opacity linear .3s;transition:opacity linear .3s}::ng-deep .ng5-slider.animate .ng5-slider-bubble.ng5-slider-combined{-webkit-transition:opacity linear .3s;transition:opacity linear .3s}::ng-deep .ng5-slider.animate .ng5-slider-tick{-webkit-transition:background-color linear .3s;transition:background-color linear .3s}`],
                host: { class: 'ng5-slider' },
                providers: [NG5_SLIDER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], highValue: [{
            type: Input
        }], highValueChange: [{
            type: Output
        }], options: [{
            type: Input
        }], userChangeStart: [{
            type: Output
        }], userChange: [{
            type: Output
        }], userChangeEnd: [{
            type: Output
        }], sliderElementVerticalClass: [{
            type: HostBinding,
            args: ['class.vertical']
        }], sliderElementAnimateClass: [{
            type: HostBinding,
            args: ['class.animate']
        }], sliderElementDisabledAttr: [{
            type: HostBinding,
            args: ['attr.disabled']
        }], manualRefresh: [{
            type: Input
        }], triggerFocus: [{
            type: Input
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }], leftOuterSelectionBarElement: [{
            type: ViewChild,
            args: ['leftOuterSelectionBar', { read: SliderElementDirective }]
        }], rightOuterSelectionBarElement: [{
            type: ViewChild,
            args: ['rightOuterSelectionBar', { read: SliderElementDirective }]
        }], fullBarElement: [{
            type: ViewChild,
            args: ['fullBar', { read: SliderElementDirective }]
        }], selectionBarElement: [{
            type: ViewChild,
            args: ['selectionBar', { read: SliderElementDirective }]
        }], minHandleElement: [{
            type: ViewChild,
            args: ['minHandle', { read: SliderHandleDirective }]
        }], maxHandleElement: [{
            type: ViewChild,
            args: ['maxHandle', { read: SliderHandleDirective }]
        }], floorLabelElement: [{
            type: ViewChild,
            args: ['floorLabel', { read: SliderLabelDirective }]
        }], ceilLabelElement: [{
            type: ViewChild,
            args: ['ceilLabel', { read: SliderLabelDirective }]
        }], minHandleLabelElement: [{
            type: ViewChild,
            args: ['minHandleLabel', { read: SliderLabelDirective }]
        }], maxHandleLabelElement: [{
            type: ViewChild,
            args: ['maxHandleLabel', { read: SliderLabelDirective }]
        }], combinedLabelElement: [{
            type: ViewChild,
            args: ['combinedLabel', { read: SliderLabelDirective }]
        }], ticksElement: [{
            type: ViewChild,
            args: ['ticksElement', { read: SliderElementDirective }]
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TooltipWrapperComponent {
}
TooltipWrapperComponent.ɵfac = function TooltipWrapperComponent_Factory(t) { return new (t || TooltipWrapperComponent)(); };
TooltipWrapperComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: TooltipWrapperComponent, selectors: [["ng5-slider-tooltip-wrapper"]], inputs: { template: "template", tooltip: "tooltip", placement: "placement", content: "content" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng5-slider-inner-tooltip"]], template: function TooltipWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".ng5-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"] });
/** @nocollapse */
TooltipWrapperComponent.ctorParameters = () => [];
TooltipWrapperComponent.propDecorators = {
    "template": [{ type: Input },],
    "tooltip": [{ type: Input },],
    "placement": [{ type: Input },],
    "content": [{ type: Input },],
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TooltipWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'ng5-slider-tooltip-wrapper',
                template: `<ng-container *ngIf="template">
  <ng-template *ngTemplateOutlet="template; context: {tooltip: tooltip, placement: placement, content: content}"></ng-template>
</ng-container>

<ng-container *ngIf="!template">
  <div class="ng5-slider-inner-tooltip" [attr.title]="tooltip" [attr.data-tooltip-placement]="placement">
    {{content}}
  </div>
</ng-container>`,
                styles: [`.ng5-slider-inner-tooltip{height:100%}`]
            }]
    }], null, { template: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], placement: [{
            type: Input
        }], content: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ng5Slider module
 *
 * The module exports the slider component
 */
class Ng5SliderModule {
}
Ng5SliderModule.ɵfac = function Ng5SliderModule_Factory(t) { return new (t || Ng5SliderModule)(); };
Ng5SliderModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: Ng5SliderModule });
Ng5SliderModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
/** @nocollapse */
Ng5SliderModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(Ng5SliderModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SliderComponent,
                    SliderElementDirective,
                    SliderHandleDirective,
                    SliderLabelDirective,
                    TooltipWrapperComponent
                ],
                exports: [
                    SliderComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(Ng5SliderModule, { declarations: function () { return [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SliderComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { Ng5SliderModule, ChangeContext, PointerType, LabelType, Options, SliderElementDirective as ɵb, SliderHandleDirective as ɵc, SliderLabelDirective as ɵd, SliderComponent as ɵa, TooltipWrapperComponent as ɵe };

//# sourceMappingURL=ng5-slider.js.map