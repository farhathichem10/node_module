import { ChangeDetectorRef, Directive, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbButtonLabel } from './label';
let nextId = 0;
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
export class NgbRadioGroup {
    constructor() {
        this._radios = new Set();
        this._value = null;
        /**
         * Name of the radio group applied to radio input elements.
         *
         * Will be applied to all radio input elements inside the group,
         * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
         *
         * If not provided, will be generated in the `ngb-radio-xx` format.
         */
        this.name = `ngb-radio-${nextId++}`;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get disabled() { return this._disabled; }
    set disabled(isDisabled) { this.setDisabledState(isDisabled); }
    onRadioChange(radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    }
    onRadioValueUpdate() { this._updateRadiosValue(); }
    register(radio) { this._radios.add(radio); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    }
    unregister(radio) { this._radios.delete(radio); }
    writeValue(value) {
        this._value = value;
        this._updateRadiosValue();
    }
    _updateRadiosValue() { this._radios.forEach((radio) => radio.updateValue(this._value)); }
    _updateRadiosDisabled() { this._radios.forEach((radio) => radio.updateDisabled()); }
}
NgbRadioGroup.decorators = [
    { type: Directive, args: [{
                selector: '[ngbRadioGroup]',
                host: { 'role': 'radiogroup' },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbRadioGroup), multi: true }]
            },] }
];
NgbRadioGroup.propDecorators = {
    name: [{ type: Input }]
};
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 */
export class NgbRadio {
    constructor(_group, _label, _renderer, _element, _cd) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._cd = _cd;
        this._value = null;
        this._group.register(this);
        this.updateDisabled();
    }
    /**
     * The form control value when current radio button is checked.
     */
    set value(value) {
        this._value = value;
        const stringValue = value ? value.toString() : '';
        this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
        this._group.onRadioValueUpdate();
    }
    /**
     * If `true`, current radio button will be disabled.
     */
    set disabled(isDisabled) {
        this._disabled = isDisabled !== false;
        this.updateDisabled();
    }
    set focused(isFocused) {
        if (this._label) {
            this._label.focused = isFocused;
        }
        if (!isFocused) {
            this._group.onTouched();
        }
    }
    get checked() { return this._checked; }
    get disabled() { return this._group.disabled || this._disabled; }
    get value() { return this._value; }
    get nameAttr() { return this.name || this._group.name; }
    ngOnDestroy() { this._group.unregister(this); }
    onChange() { this._group.onRadioChange(this); }
    updateValue(value) {
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        if (this.value !== value) {
            this._cd.markForCheck();
        }
        this._checked = this.value === value;
        this._label.active = this._checked;
    }
    updateDisabled() { this._label.disabled = this.disabled; }
}
NgbRadio.decorators = [
    { type: Directive, args: [{
                selector: '[ngbButton][type=radio]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '[name]': 'nameAttr',
                    '(change)': 'onChange()',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                }
            },] }
];
NgbRadio.ctorParameters = () => [
    { type: NgbRadioGroup },
    { type: NgbButtonLabel },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NgbRadio.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input, args: ['value',] }],
    disabled: [{ type: Input, args: ['disabled',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYnV0dG9ucy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUV2QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFZjs7Ozs7R0FLRztBQU1ILE1BQU0sT0FBTyxhQUFhO0lBTDFCO1FBTVUsWUFBTyxHQUFrQixJQUFJLEdBQUcsRUFBWSxDQUFDO1FBQzdDLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFNdEI7Ozs7Ozs7V0FPRztRQUNNLFNBQUksR0FBRyxhQUFhLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFFeEMsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDMUIsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQTZCdkIsQ0FBQztJQTNDQyxJQUFJLFFBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLFVBQW1CLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWV4RSxhQUFhLENBQUMsS0FBZTtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0JBQWtCLEtBQUssSUFBSSxDQUFDLGtCQUFrQixFQUFFLENB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QXBGM0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsU0FBUztvQkFDdEIsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsWUFBWTtvQkFDeEIsU0FBUyxFQUFFLGdCQUFnQjtvQkFDM0IsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7YUFDRjs7O1lBc0RxQixhQUFhO1lBdEkzQixjQUFjO1lBSDBELFNBQVM7WUFBbkQsVUFBVTtZQUF4QyxpQkFBaUI7OzttQkFpR3RCLEtBQUs7b0JBS0wsS0FBSyxTQUFDLE9BQU87dUJBV2IsS0FBSyxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge05nYkJ1dHRvbkxhYmVsfSBmcm9tICcuL2xhYmVsJztcblxubGV0IG5leHRJZCA9IDA7XG5cbi8qKlxuICogQWxsb3dzIHRvIGVhc2lseSBjcmVhdGUgQm9vdHN0cmFwLXN0eWxlIHJhZGlvIGJ1dHRvbnMuXG4gKlxuICogSW50ZWdyYXRlcyB3aXRoIGZvcm1zLCBzbyB0aGUgdmFsdWUgb2YgYSBjaGVja2VkIGJ1dHRvbiBpcyBib3VuZCB0byB0aGUgdW5kZXJseWluZyBmb3JtIGNvbnRyb2xcbiAqIGVpdGhlciBpbiBhIHJlYWN0aXZlIG9yIHRlbXBsYXRlLWRyaXZlbiB3YXkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2JSYWRpb0dyb3VwXScsXG4gIGhvc3Q6IHsncm9sZSc6ICdyYWRpb2dyb3VwJ30sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdiUmFkaW9Hcm91cCksIG11bHRpOiB0cnVlfV1cbn0pXG5leHBvcnQgY2xhc3MgTmdiUmFkaW9Hcm91cCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfcmFkaW9zOiBTZXQ8TmdiUmFkaW8+ID0gbmV3IFNldDxOZ2JSYWRpbz4oKTtcbiAgcHJpdmF0ZSBfdmFsdWUgPSBudWxsO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbikgeyB0aGlzLnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7IH1cblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgcmFkaW8gZ3JvdXAgYXBwbGllZCB0byByYWRpbyBpbnB1dCBlbGVtZW50cy5cbiAgICpcbiAgICogV2lsbCBiZSBhcHBsaWVkIHRvIGFsbCByYWRpbyBpbnB1dCBlbGVtZW50cyBpbnNpZGUgdGhlIGdyb3VwLFxuICAgKiB1bmxlc3MgW2BOZ2JSYWRpb2BdKCMvY29tcG9uZW50cy9idXR0b25zL2FwaSNOZ2JSYWRpbykncyBzcGVjaWZ5IG5hbWVzIHRoZW1zZWx2ZXMuXG4gICAqXG4gICAqIElmIG5vdCBwcm92aWRlZCwgd2lsbCBiZSBnZW5lcmF0ZWQgaW4gdGhlIGBuZ2ItcmFkaW8teHhgIGZvcm1hdC5cbiAgICovXG4gIEBJbnB1dCgpIG5hbWUgPSBgbmdiLXJhZGlvLSR7bmV4dElkKyt9YDtcblxuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBvblJhZGlvQ2hhbmdlKHJhZGlvOiBOZ2JSYWRpbykge1xuICAgIHRoaXMud3JpdGVWYWx1ZShyYWRpby52YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZShyYWRpby52YWx1ZSk7XG4gIH1cblxuICBvblJhZGlvVmFsdWVVcGRhdGUoKSB7IHRoaXMuX3VwZGF0ZVJhZGlvc1ZhbHVlKCk7IH1cblxuICByZWdpc3RlcihyYWRpbzogTmdiUmFkaW8pIHsgdGhpcy5fcmFkaW9zLmFkZChyYWRpbyk7IH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl91cGRhdGVSYWRpb3NEaXNhYmxlZCgpO1xuICB9XG5cbiAgdW5yZWdpc3RlcihyYWRpbzogTmdiUmFkaW8pIHsgdGhpcy5fcmFkaW9zLmRlbGV0ZShyYWRpbyk7IH1cblxuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl91cGRhdGVSYWRpb3NWYWx1ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmFkaW9zVmFsdWUoKSB7IHRoaXMuX3JhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4gcmFkaW8udXBkYXRlVmFsdWUodGhpcy5fdmFsdWUpKTsgfVxuICBwcml2YXRlIF91cGRhdGVSYWRpb3NEaXNhYmxlZCgpIHsgdGhpcy5fcmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiByYWRpby51cGRhdGVEaXNhYmxlZCgpKTsgfVxufVxuXG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBtYXJrcyBhbiBpbnB1dCBvZiB0eXBlIFwicmFkaW9cIiBhcyBhIHBhcnQgb2YgdGhlXG4gKiBbYE5nYlJhZGlvR3JvdXBgXSgjL2NvbXBvbmVudHMvYnV0dG9ucy9hcGkjTmdiUmFkaW9Hcm91cCkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2JCdXR0b25dW3R5cGU9cmFkaW9dJyxcbiAgaG9zdDoge1xuICAgICdbY2hlY2tlZF0nOiAnY2hlY2tlZCcsXG4gICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbbmFtZV0nOiAnbmFtZUF0dHInLFxuICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgpJyxcbiAgICAnKGZvY3VzKSc6ICdmb2N1c2VkID0gdHJ1ZScsXG4gICAgJyhibHVyKSc6ICdmb2N1c2VkID0gZmFsc2UnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTmdiUmFkaW8gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IGJvb2xlYW4gfCAnJztcblxuICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBmb3IgdGhlICduYW1lJyBwcm9wZXJ0eSBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIGlucHV0cyBvZiB0aGUgcmFkaW8gZ3JvdXAgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbmFtZS4gSWYgbm90IHNwZWNpZmllZCxcbiAgICogdGhlIG5hbWUgb2YgdGhlIGVuY2xvc2luZyBncm91cCBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9ybSBjb250cm9sIHZhbHVlIHdoZW4gY3VycmVudCByYWRpbyBidXR0b24gaXMgY2hlY2tlZC5cbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgY29uc3Qgc3RyaW5nVmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnRvU3RyaW5nKCkgOiAnJztcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHN0cmluZ1ZhbHVlKTtcbiAgICB0aGlzLl9ncm91cC5vblJhZGlvVmFsdWVVcGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGN1cnJlbnQgcmFkaW8gYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoJ2Rpc2FibGVkJylcbiAgc2V0IGRpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGlzRGlzYWJsZWQgIT09IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlRGlzYWJsZWQoKTtcbiAgfVxuXG4gIHNldCBmb2N1c2VkKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9sYWJlbCkge1xuICAgICAgdGhpcy5fbGFiZWwuZm9jdXNlZCA9IGlzRm9jdXNlZDtcbiAgICB9XG4gICAgaWYgKCFpc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX2dyb3VwLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGVja2VkKCkgeyByZXR1cm4gdGhpcy5fY2hlY2tlZDsgfVxuXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2dyb3VwLmRpc2FibGVkIHx8IHRoaXMuX2Rpc2FibGVkOyB9XG5cbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBnZXQgbmFtZUF0dHIoKSB7IHJldHVybiB0aGlzLm5hbWUgfHwgdGhpcy5fZ3JvdXAubmFtZTsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfZ3JvdXA6IE5nYlJhZGlvR3JvdXAsIHByaXZhdGUgX2xhYmVsOiBOZ2JCdXR0b25MYWJlbCwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuX2dyb3VwLnJlZ2lzdGVyKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlRGlzYWJsZWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkgeyB0aGlzLl9ncm91cC51bnJlZ2lzdGVyKHRoaXMpOyB9XG5cbiAgb25DaGFuZ2UoKSB7IHRoaXMuX2dyb3VwLm9uUmFkaW9DaGFuZ2UodGhpcyk7IH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZSkge1xuICAgIC8vIGxhYmVsIHdvbid0IGJlIHVwZGF0ZWQsIGlmIGl0IGlzIGluc2lkZSB0aGUgT25QdXNoIGNvbXBvbmVudCB3aGVuIFtuZ01vZGVsXSBjaGFuZ2VzXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGVja2VkID0gdGhpcy52YWx1ZSA9PT0gdmFsdWU7XG4gICAgdGhpcy5fbGFiZWwuYWN0aXZlID0gdGhpcy5fY2hlY2tlZDtcbiAgfVxuXG4gIHVwZGF0ZURpc2FibGVkKCkgeyB0aGlzLl9sYWJlbC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7IH1cbn1cbiJdfQ==