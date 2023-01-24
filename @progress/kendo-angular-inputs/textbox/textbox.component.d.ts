/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Subscription } from 'rxjs';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ElementRef, EventEmitter, NgZone, ChangeDetectorRef, Injector, Renderer2, SimpleChanges } from '@angular/core';
import { IconShowOptions } from './models/icon-show-options';
import { TextBoxSuffixTemplateDirective } from './textbox-suffix.directive';
import { TextBoxPrefixTemplateDirective } from './textbox-prefix.directive';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { InputSize, InputRounded, InputFillMode } from '../common/models';
import * as i0 from "@angular/core";
export declare class TextBoxComponent implements ControlValueAccessor {
    private localizationService;
    private ngZone;
    private changeDetector;
    protected renderer: Renderer2;
    private injector;
    private hostElement;
    /**
     * @hidden
     */
    focusableId: string;
    /**
     * Sets the `title` attribute of the `input` element of the TextBox.
     */
    title: string;
    /**
     * Sets the disabled state of the component.
     *
     * @default false
     */
    disabled: boolean;
    /**
     * Sets the read-only state of the component.
     *
     * @default false
     */
    readonly: boolean;
    /**
     * Specifies the `tabindex` of the TextBox.
     *
     * @default 0
     */
    tabindex: number;
    /**
     * Provides a value for the TextBox.
     */
    value: string;
    /**
     * Determines whether the whole value will be selected when the TextBox is clicked. Defaults to `false`.
     *
     * @default false
     */
    selectOnFocus: boolean;
    /**
     * Specifies when the Success icon will be shown ([see example]({% slug validation_textbox %})).
     *
     * The possible values are:
     *
     * `boolean`&mdash;The Success icon is displayed, if the condition given by the developer is met.
     *
     * `initial`&mdash;The Success icon will be displayed when the component state is neither `invalid` nor `touched` or `dirty`.
     *
     * @default false
     */
    showSuccessIcon: IconShowOptions;
    /**
     * Specifies when the Error icon will be shown ([see example]({% slug validation_textbox %})).
     *
     * The possible values are:
     *
     * * `initial`&mdash;The Error icon will be displayed when the component state is
     * `invalid` and `touched` or `dirty`.
     * * `boolean`&mdash;The Error icon is displayed, if the condition given by the developer is met.
     *
     * @default false
     */
    showErrorIcon: IconShowOptions;
    /**
     * Specifies whether a Clear button will be rendered.
     *
     * @default false
     */
    clearButton: boolean;
    /**
     * Sets a custom icon that will be rendered instead of the default one for a valid user input.
     */
    successIcon: string;
    /**
     * Sets a custom icon that will be rendered instead of the default one for invalid user input.
     */
    errorIcon: string;
    /**
     * Sets a custom icon that will be rendered instead of the default one.
     */
    clearButtonIcon: string;
    /**
     * The size property specifies the padding of the TextBox internal input element
     * ([see example]({% slug appearance_textbox %}#toc-size)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    set size(size: InputSize);
    get size(): InputSize;
    /**
     * The rounded property specifies the border radius of the TextBox
     * ([see example]({% slug appearance_textbox %}#toc-rounded)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `full`
     * * `none`
     */
    set rounded(rounded: InputRounded);
    get rounded(): InputRounded;
    /**
     * The fillMode property specifies the background and border styles of the TextBox
     * ([see example]({% slug appearance_textbox %}#toc-fillMode)).
     *
     * The possible values are:
     * * `flat`
     * * `solid` (default)
     * * `outline`
     * * `none`
     */
    set fillMode(fillMode: InputFillMode);
    get fillMode(): InputFillMode;
    /**
     * @hidden
     */
    set tabIndex(tabIndex: number);
    get tabIndex(): number;
    /**
     * The hint, which is displayed when the component is empty.
     */
    placeholder: string;
    /**
     * Specifies the maximum length of the TextBox value.
     */
    maxlength: number;
    /**
     * Fires each time the value is changed&mdash;
     * when the component is blurred or the value is cleared through the **Clear** button
     * ([see example]({% slug overview_textbox %}#toc-events)).
     * When the value of the component is programmatically changed to `ngModel` or `formControl`
     * through its API or form binding, the `valueChange` event is not triggered because it
     * might cause a mix-up with the built-in `valueChange` mechanisms of the `ngModel` or `formControl` bindings.
     */
    valueChange: EventEmitter<any>;
    /**
     * Fires each time the user focuses the `input` element.
     */
    inputFocus: EventEmitter<any>;
    /**
     * Fires each time the `input` element gets blurred.
     */
    inputBlur: EventEmitter<any>;
    /**
     * Fires each time the user focuses the TextBox component.
     *
     * > To wire the event programmatically, use the `onFocus` property.
     *
     * @example
     * ```ts-no-run
     * _@Component({
     * selector: 'my-app',
     * template: `
     *  <kendo-textbox (focus)="handleFocus()"></kendo-textbox>
     * `
     * })
     * class AppComponent {
     *   public handleFocus(): void {
     *      console.log('Component is isFocused');
     *   }
     * }
     * ```
     */
    onFocus: EventEmitter<any>;
    /**
     * Fires each time the TextBox component gets blurred.
     *
     * > To wire the event programmatically, use the `onBlur` property.
     *
     * @example
     * ```ts-no-run
     * _@Component({
     * selector: 'my-app',
     * template: `
     *  <kendo-textbox (blur)="handleBlur()"></kendo-textbox>
     * `
     * })
     * class AppComponent {
     *   public handleBlur(): void {
     *      console.log('Component is blurred');
     *   }
     * }
     * ```
     */
    onBlur: EventEmitter<any>;
    /**
     * Represents the visible `input` element of the TextBox.
     */
    input: ElementRef;
    /**
     * @hidden
     */
    suffixTemplate: TextBoxSuffixTemplateDirective;
    /**
     * @hidden
     */
    prefixTemplate: TextBoxPrefixTemplateDirective;
    get disabledClass(): boolean;
    hostClasses: boolean;
    direction: string;
    /**
     * @hidden
     */
    showClearButton: boolean;
    protected control: NgControl;
    protected subscriptions: Subscription;
    private clearButtonClicked;
    private _isFocused;
    private focusChangedProgrammatically;
    private _size;
    private _rounded;
    private _fillMode;
    constructor(localizationService: LocalizationService, ngZone: NgZone, changeDetector: ChangeDetectorRef, renderer: Renderer2, injector: Injector, hostElement: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Focuses the TextBox.
     *
     * @example
     * ```ts-no-run
     * _@Component({
     * selector: 'my-app',
     * template: `
     *  <button (click)="input.focus()">Focus the input</button>
     *  <kendo-textbox #input></kendo-textbox>
     * `
     * })
     * class AppComponent { }
     * ```
     */
    focus(): void;
    /**
     * Blurs the TextBox.
     */
    blur(): void;
    /**
     * @hidden
     */
    handleInputFocus: () => void;
    /**
     * @hidden
     */
    handleInputBlur: () => void;
    /**
     * @hidden
     */
    handleInput: (ev: any) => void;
    /**
     * @hidden
     */
    clearTitle(): string;
    /**
     * @hidden
     */
    checkClearButton(): void;
    /**
     * @hidden
     */
    clearValue(ev?: any): void;
    /**
     * @hidden
     */
    writeValue(value: string): void;
    /**
     * @hidden
     */
    registerOnChange(fn: () => any): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: () => any): void;
    /**
     * @hidden
     * Called when the status of the component changes to or from `disabled`.
     * Depending on the value, it enables or disables the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * @hidden
     */
    showErrorsInitial(): boolean;
    /**
     * @hidden
     */
    private showSuccessInitial;
    /**
     * @hidden
     */
    get isControlInvalid(): boolean;
    /**
     * @hidden
     */
    get successIconClasses(): string;
    /**
     * @hidden
     */
    get errorIconClasses(): string;
    /**
     * @hidden
     */
    get clearButtonClasses(): string;
    /**
     * @hidden
     */
    get hasErrors(): boolean;
    /**
     * @hidden
     */
    get isSuccessful(): boolean;
    private ngChange;
    private ngTouched;
    private setSelection;
    private selectAll;
    private updateValue;
    private get isFocused();
    private set isFocused(value);
    private handleBlur;
    private handleClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextBoxComponent, "kendo-textbox", ["kendoTextBox"], { "focusableId": "focusableId"; "title": "title"; "disabled": "disabled"; "readonly": "readonly"; "tabindex": "tabindex"; "value": "value"; "selectOnFocus": "selectOnFocus"; "showSuccessIcon": "showSuccessIcon"; "showErrorIcon": "showErrorIcon"; "clearButton": "clearButton"; "successIcon": "successIcon"; "errorIcon": "errorIcon"; "clearButtonIcon": "clearButtonIcon"; "size": "size"; "rounded": "rounded"; "fillMode": "fillMode"; "tabIndex": "tabIndex"; "placeholder": "placeholder"; "maxlength": "maxlength"; }, { "valueChange": "valueChange"; "inputFocus": "inputFocus"; "inputBlur": "inputBlur"; "onFocus": "focus"; "onBlur": "blur"; }, ["suffixTemplate", "prefixTemplate"], never>;
}
