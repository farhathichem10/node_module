/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, ElementRef, Input, Output, HostBinding, HostListener, EventEmitter, ContentChild, ViewChild, ViewContainerRef } from '@angular/core';
import { LocalizationService, L10N_PREFIX } from '@progress/kendo-angular-l10n';
import { ListButton } from './../listbutton/list-button';
import { ButtonItemTemplateDirective } from './../listbutton/button-item-template.directive';
import { FocusService } from './../focusable/focus.service';
import { NavigationService } from './../navigation/navigation.service';
import { NAVIGATION_CONFIG } from './../navigation/navigation-config';
import { isDocumentAvailable, guid, isChanged } from '@progress/kendo-angular-common';
import { closest, isPresent } from './../util';
import { Keys } from '@progress/kendo-angular-common';
import { replaceMessagePlaceholder, getStylingClasses } from '../util';
import { PopupContainerService } from '../listbutton/container.service';
import * as i0 from "@angular/core";
import * as i1 from "./../focusable/focus.service";
import * as i2 from "./../navigation/navigation.service";
import * as i3 from "@progress/kendo-angular-popup";
import * as i4 from "@progress/kendo-angular-l10n";
import * as i5 from "../listbutton/container.service";
import * as i6 from "../listbutton/list.component";
import * as i7 from "./localization/localized-messages.directive";
import * as i8 from "../button/button.directive";
import * as i9 from "@angular/common";
const NAVIGATION_SETTINGS = {
    useLeftRightArrows: true
};
const NAVIGATION_SETTINGS_PROVIDER = {
    provide: NAVIGATION_CONFIG,
    useValue: NAVIGATION_SETTINGS
};
const DEFAULT_ROUNDED = 'medium';
const DEFAULT_FILL_MODE = 'solid';
/**
 * Represents the Kendo UI SplitButton component for Angular.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="data" icon="clipboard"
 *      (itemClick)="onSplitButtonItemClick($event)"
 *      (buttonClick)="onSplitButtonClick()">Paste</kendo-splitbutton>
 * `
 * })
 *
 * class AppComponent {
 *   public data: Array<any> = [{
 *       text: 'Keep Text Only',
 *       icon: 'clipboard-text',
 *       click: () => { console.log('Keep Text Only click handler'); }
 *   }, {
 *       text: 'Paste as HTML',
 *       icon: 'clipboard-code'
 *   }, {
 *       text: 'Paste Markdown',
 *       icon: 'clipboard-markdown'
 *   }, {
 *       text: 'Set Default Paste'
 *   }];
 *
 *   public onSplitButtonClick(dataItem: any): void {
 *       console.log('Paste');
 *   }
 *
 *   public onSplitButtonItemClick(dataItem: any): void {
 *       if (dataItem) {
 *           console.log(dataItem.text);
 *       }
 *   }
 * }
 * ```
 */
export class SplitButtonComponent extends ListButton {
    constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, renderer, containerService) {
        super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
        this.localization = localization;
        this.renderer = renderer;
        /**
         * Sets the text of the SplitButton.
         */
        this.text = '';
        /**
         * Defines an icon to be rendered next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        this.icon = '';
        /**
         * Defines an icon with a custom CSS class to be rendered next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        this.iconClass = '';
        /**
         * Defines the type attribute of the main button
         */
        this.type = 'button';
        /**
         * Defines the location of an image to be displayed next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        this.imageUrl = '';
        /**
         * The size property specifies the padding of the SplitButton
         * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-size)).
         *
         * The possible values are:
         * * `small`
         * * `medium` (default)
         * * `large`
         * * `none`
         */
        this.size = 'medium';
        /**
         * The SplitButton allows you to specify predefined theme colors.
         * The theme color will be applied as a background and border color while also amending the text color accordingly
         * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-themeColor)).
         *
         * The possible values are:
         * * `base` &mdash;Applies coloring based on the `base` theme color. (default)
         * * `primary` &mdash;Applies coloring based on the `primary` theme color.
         * * `secondary`&mdash;Applies coloring based on the `secondary` theme color.
         * * `tertiary`&mdash; Applies coloring based on the `tertiary` theme color.
         * * `info`&mdash;Applies coloring based on the `info` theme color.
         * * `success`&mdash; Applies coloring based on the `success` theme color.
         * * `warning`&mdash; Applies coloring based on the `warning` theme color.
         * * `error`&mdash; Applies coloring based on the `error` theme color.
         * * `dark`&mdash; Applies coloring based on the `dark` theme color.
         * * `light`&mdash; Applies coloring based on the `light` theme color.
         * * `inverse`&mdash; Applies coloring based on the `inverse` theme color.
         * * `none`&mdash; Removes the built in theme color.
         */
        this.themeColor = 'base';
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        /**
         * Specifies the name of the [font icon]({% slug icons %}#toc-list-of-font-icons) that will
         * be rendered for the button which opens the popup.
         */
        this.arrowButtonIcon = 'caret-alt-down';
        /**
         * Fires each time the user clicks the main button.
         *
         * @example
         * ```ts
         * _@Component({
         *    selector: 'my-app',
         *    template: `
         *        <kendo-splitbutton (buttonClick)="onSplitButtonClick()" [data]="data">
         *            Reply
         *        </kendo-splitbutton>
         *    `
         * })
         * class AppComponent {
         *    public data: Array<any> = ['Reply All', 'Forward', 'Reply & Delete'];
         *
         *    public onSplitButtonClick(): void {
         *      console.log('SplitButton click');
         *    }
         * }
         * ```
         *
         */
        this.buttonClick = new EventEmitter();
        /**
         * Fires each time the user clicks on the drop-down list. The event data contains the data item bound to the clicked list item.
         *
         * @example
         * ```ts
         * _@Component({
         *     selector: 'my-app',
         *    template: `
         *        <kendo-splitbutton (itemClick)="onSplitButtonItemClick($event)" [data]="data">
         *          Reply
         *      </kendo-splitbutton>
         *    `
         * })
         * class AppComponent {
         *    public data: Array<any> = ['Reply All', 'Forward', 'Reply & Delete'];
         *
         *   public onSplitButtonItemClick(dataItem?: string): void {
         *        if (dataItem) {
         *            console.log(dataItem);
         *       }
         *    }
         * }
         * ```
         *
         */
        this.itemClick = new EventEmitter();
        /**
         * Fires each time the SplitButton gets focused.
         */
        this.onFocus = new EventEmitter();
        /**
         * Fires each time the SplitButton gets blurred.
         */
        this.onBlur = new EventEmitter();
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed.
         */
        this.open = new EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain open.
         */
        this.close = new EventEmitter();
        /**
         * @hidden
         */
        this.activeArrow = false;
        this.listId = guid();
        this.buttonText = '';
        this.arrowButtonClicked = false;
        this._rounded = DEFAULT_ROUNDED;
        this._fillMode = DEFAULT_FILL_MODE;
        this._itemClick = this.itemClick;
        this._blur = this.onBlur;
    }
    /**
     * The rounded property specifies the border radius of the SplitButton
     * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-rounded)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `full`
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
     * The fillMode property specifies the background and border styles of the SplitButton
     * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-fillMode)).
     *
     * The available values are:
     * * `solid` (default)
     * * `flat`
     * * `outline`
     * * `link`
     */
    set fillMode(fillMode) {
        const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
        this._fillMode = fillMode === 'clear' ? 'flat' : newFillMode;
    }
    get fillMode() {
        return this._fillMode;
    }
    /**
     * When set to `true`, disables a SplitButton item
     * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
     */
    set disabled(value) {
        if (this.isOpen) {
            this.toggle(false);
        }
        this._disabled = value;
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * Configures the popup of the SplitButton.
     *
     * The available options are:
     * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
     * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
     * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
     * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
     */
    set popupSettings(settings) {
        this._popupSettings = Object.assign({ animate: true, popupClass: '' }, settings);
    }
    get popupSettings() {
        return this._popupSettings;
    }
    /**
     * Sets the data of the SplitButton.
     *
     * > The data has to be provided in an array-like list.
     */
    set data(data) {
        this._data = data || [];
    }
    get data() {
        if (!this._data) {
            this.data = [];
        }
        return this._data;
    }
    /**
     * @hidden
     */
    get active() {
        return this._active;
    }
    /**
     * @hidden
     */
    get componentTabIndex() {
        return this.disabled ? -1 : this.tabIndex;
    }
    set isFocused(value) {
        this._isFocused = value;
    }
    get isFocused() {
        return this._isFocused && !this._disabled && isDocumentAvailable() && this.wrapperContains(document.activeElement);
    }
    get widgetClasses() {
        return true;
    }
    get dir() {
        return this.direction;
    }
    /**
     * @hidden
     */
    get ariaLabel() {
        const localizationMsg = this.localization.get('splitButtonLabel') || '';
        return replaceMessagePlaceholder(localizationMsg, 'buttonText', this.buttonText);
    }
    /**
     * @hidden
     */
    onButtonFocus(event) {
        if (!this._disabled) {
            // eslint-disable-next-line no-unused-expressions
            !this._isFocused && this.onFocus.emit();
            this._isFocused = true;
            this.focusService.resetFocus();
            const relatedTargetInList = event.relatedTarget && closest(event.relatedTarget, '.k-popup kendo-button-list');
            if (this.openState && !relatedTargetInList) {
                this.focusService.focus(0);
            }
        }
    }
    /**
     * @hidden
     */
    onArrowButtonClick() {
        this.togglePopupVisibility();
        this.arrowButtonClicked = false;
    }
    /**
     * @hidden
     */
    toggleButtonActiveState(enable) {
        this._active = enable;
    }
    /**
     * @hidden
     */
    toggleArrowButtonActiveState(enable) {
        this.arrowButtonClicked = true;
        this.activeArrow = enable;
    }
    /**
     * @hidden
     */
    onButtonClick() {
        this.buttonClick.emit();
    }
    /**
     * @hidden
     */
    onButtonBlur() {
        if (!this.isOpen && !this.arrowButtonClicked) {
            this.blurWrapper();
        }
    }
    /**
     * @hidden
     */
    keydown(event) {
        this.keyDownHandler(event, true);
        if (event.keyCode === Keys.Space) {
            this._active = true;
        }
    }
    /**
     * @hidden
     */
    keyup(event) {
        this._active = false;
        if (event.keyCode !== Keys.Space) {
            this.keyUpHandler(event);
        }
    }
    /**
     * @hidden
     */
    ngAfterViewInit() {
        this.containerService.container = this.containerRef;
        this.containerService.template = this.popupTemplate;
        this.updateButtonText();
        this.handleClasses(this.rounded, 'rounded');
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('text')) {
            this.updateButtonText();
        }
        if (isChanged("popupSettings", changes) && isPresent(this.popupRef)) {
            const popup = this.popupRef.popup.instance;
            const newSettings = changes.popupSettings.currentValue;
            popup.popupClass = newSettings.popupClass;
            popup.animate = newSettings.animate;
            popup.popupAlign = this.popupAlign;
        }
    }
    /**
     * @hidden
     */
    onNavigationEnterUp(args) {
        if (args.target !== this.button.nativeElement) {
            super.onNavigationEnterUp();
        }
    }
    /**
     * @hidden
     */
    togglePopupVisibility() {
        if (isDocumentAvailable() && this.wrapperContains(document.activeElement) && this.arrowButtonClicked) {
            this.button.nativeElement.focus();
        }
        super.togglePopupVisibility();
    }
    /**
     * @hidden
     */
    wrapperContains(element) {
        return (this.wrapper === element || this.wrapper.contains(element) || (this.popupRef && this.popupRef.popupElement.contains(element)));
    }
    /**
     * @hidden
     */
    get anchorAlign() {
        let align = { horizontal: this.popupSettings.align || 'left', vertical: 'bottom' };
        if (this.direction === 'rtl' && !isPresent(this.popupSettings.align)) {
            align.horizontal = 'right';
        }
        return align;
    }
    /**
     * @hidden
     */
    get popupAlign() {
        let align = { horizontal: this.popupSettings.align || 'left', vertical: 'top' };
        if (this.direction === 'rtl' && !isPresent(this.popupSettings.align)) {
            align.horizontal = 'right';
        }
        return align;
    }
    /**
     * Focuses the SplitButton component.
     */
    focus() {
        if (isDocumentAvailable()) {
            this.button.nativeElement.focus();
        }
    }
    /**
     * Blurs the SplitButton component.
     */
    blur() {
        if (isDocumentAvailable()) {
            this.button.nativeElement.blur();
            this.blurWrapper();
        }
    }
    /**
     * Returns the current open state of the popup.
     */
    get isOpen() {
        return this.openState;
    }
    updateButtonText() {
        if (isDocumentAvailable()) {
            let innerText = this.wrapper.innerText
                .split('\n')
                .join('')
                .trim();
            //setTimeout is needed because of `Expression has changed after it was checked.` error;
            setTimeout(() => (this.buttonText = innerText), 0);
        }
    }
    handleClasses(value, input) {
        const elem = this.wrapperRef.nativeElement;
        const classes = getStylingClasses('button', input, this[input], value);
        if (classes.toRemove) {
            this.renderer.removeClass(elem, classes.toRemove);
        }
        if (classes.toAdd) {
            this.renderer.addClass(elem, classes.toAdd);
        }
    }
}
SplitButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonComponent, deps: [{ token: i1.FocusService }, { token: i2.NavigationService }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i3.PopupService }, { token: i0.ElementRef }, { token: i4.LocalizationService }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i5.PopupContainerService }], target: i0.ɵɵFactoryTarget.Component });
SplitButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SplitButtonComponent, selector: "kendo-splitbutton", inputs: { text: "text", icon: "icon", iconClass: "iconClass", type: "type", imageUrl: "imageUrl", size: "size", rounded: "rounded", fillMode: "fillMode", themeColor: "themeColor", disabled: "disabled", popupSettings: "popupSettings", tabIndex: "tabIndex", textField: "textField", data: "data", buttonClass: "buttonClass", arrowButtonClass: "arrowButtonClass", arrowButtonIcon: "arrowButtonIcon" }, outputs: { buttonClick: "buttonClick", itemClick: "itemClick", onFocus: "focus", onBlur: "blur", open: "open", close: "close" }, host: { listeners: { "keydown": "keydown($event)", "keyup": "keyup($event)" }, properties: { "class.k-focus": "this.isFocused", "class.k-split-button": "this.widgetClasses", "class.k-button-group": "this.widgetClasses", "attr.dir": "this.dir" } }, providers: [
        FocusService,
        NavigationService,
        NAVIGATION_SETTINGS_PROVIDER,
        LocalizationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.splitbutton'
        },
        PopupContainerService
    ], queries: [{ propertyName: "itemTemplate", first: true, predicate: ButtonItemTemplateDirective, descendants: true }], viewQueries: [{ propertyName: "button", first: true, predicate: ["button"], descendants: true }, { propertyName: "arrowButton", first: true, predicate: ["arrowButton"], descendants: true, read: ElementRef }, { propertyName: "popupTemplate", first: true, predicate: ["popupTemplate"], descendants: true }, { propertyName: "containerRef", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], exportAs: ["kendoSplitButton"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
        <ng-container kendoSplitButtonLocalizedMessages
            i18n-splitButtonLabel="kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label"
            splitButtonLabel="{{ '{buttonText} splitbutton' }}">
        </ng-container>
        <button
            kendoButton
            #button
            [type]="type"
            [tabindex]="componentTabIndex"
            [disabled]="disabled"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [icon]="icon"
            [class.k-active]="active"
            [class.k-icon-button]="!text && icon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            (focus)="onButtonFocus($event)"
            (click)="onButtonClick()"
            (blur)="onButtonBlur()"
            (mousedown)="toggleButtonActiveState(true)"
            (mouseup)="toggleButtonActiveState(false)"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-haspopup]="true"
            [attr.aria-owns]="listId"
            [attr.aria-label]="ariaLabel"
        >
            <span *ngIf="text" class="k-button-text">
                {{ text }}
            </span><ng-content></ng-content>
        </button>
        <button kendoButton #arrowButton type="button"
            class="k-split-button-arrow"
            [class.k-active]="activeArrow"
            [ngClass]="arrowButtonClass"
            [disabled]="disabled"
            [icon]="arrowButtonIcon"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [tabindex]="-1"
            (click)="onArrowButtonClick()"
            (mousedown)="toggleArrowButtonActiveState(true)"
            (mouseup)="toggleArrowButtonActiveState(false)"
        ></button>
        <ng-template #popupTemplate>
            <kendo-button-list
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `, isInline: true, components: [{ type: i6.ListComponent, selector: "kendo-button-list", inputs: ["data", "textField", "itemTemplate", "size"], outputs: ["onItemClick", "onItemBlur"] }], directives: [{ type: i7.LocalizedSplitButtonMessagesDirective, selector: "[kendoSplitButtonLocalizedMessages]" }, { type: i8.ButtonDirective, selector: "button[kendoButton], span[kendoButton]", inputs: ["toggleable", "togglable", "selected", "tabIndex", "icon", "iconClass", "imageUrl", "disabled", "size", "rounded", "fillMode", "themeColor", "role", "primary", "look"], outputs: ["selectedChange", "click"], exportAs: ["kendoButton"] }, { type: i9.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonComponent, decorators: [{
            type: Component,
            args: [{
                    exportAs: 'kendoSplitButton',
                    providers: [
                        FocusService,
                        NavigationService,
                        NAVIGATION_SETTINGS_PROVIDER,
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.splitbutton'
                        },
                        PopupContainerService
                    ],
                    selector: 'kendo-splitbutton',
                    template: `
        <ng-container kendoSplitButtonLocalizedMessages
            i18n-splitButtonLabel="kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label"
            splitButtonLabel="{{ '{buttonText} splitbutton' }}">
        </ng-container>
        <button
            kendoButton
            #button
            [type]="type"
            [tabindex]="componentTabIndex"
            [disabled]="disabled"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [icon]="icon"
            [class.k-active]="active"
            [class.k-icon-button]="!text && icon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            (focus)="onButtonFocus($event)"
            (click)="onButtonClick()"
            (blur)="onButtonBlur()"
            (mousedown)="toggleButtonActiveState(true)"
            (mouseup)="toggleButtonActiveState(false)"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-haspopup]="true"
            [attr.aria-owns]="listId"
            [attr.aria-label]="ariaLabel"
        >
            <span *ngIf="text" class="k-button-text">
                {{ text }}
            </span><ng-content></ng-content>
        </button>
        <button kendoButton #arrowButton type="button"
            class="k-split-button-arrow"
            [class.k-active]="activeArrow"
            [ngClass]="arrowButtonClass"
            [disabled]="disabled"
            [icon]="arrowButtonIcon"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [tabindex]="-1"
            (click)="onArrowButtonClick()"
            (mousedown)="toggleArrowButtonActiveState(true)"
            (mouseup)="toggleArrowButtonActiveState(false)"
        ></button>
        <ng-template #popupTemplate>
            <kendo-button-list
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `
                }]
        }], ctorParameters: function () { return [{ type: i1.FocusService }, { type: i2.NavigationService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i3.PopupService }, { type: i0.ElementRef }, { type: i4.LocalizationService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i5.PopupContainerService }]; }, propDecorators: { text: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], type: [{
                type: Input
            }], imageUrl: [{
                type: Input
            }], size: [{
                type: Input
            }], rounded: [{
                type: Input
            }], fillMode: [{
                type: Input
            }], themeColor: [{
                type: Input
            }], disabled: [{
                type: Input
            }], popupSettings: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], textField: [{
                type: Input
            }], data: [{
                type: Input
            }], buttonClass: [{
                type: Input
            }], arrowButtonClass: [{
                type: Input
            }], arrowButtonIcon: [{
                type: Input
            }], buttonClick: [{
                type: Output
            }], itemClick: [{
                type: Output
            }], onFocus: [{
                type: Output,
                args: ['focus']
            }], onBlur: [{
                type: Output,
                args: ['blur']
            }], open: [{
                type: Output
            }], close: [{
                type: Output
            }], itemTemplate: [{
                type: ContentChild,
                args: [ButtonItemTemplateDirective]
            }], button: [{
                type: ViewChild,
                args: ['button']
            }], arrowButton: [{
                type: ViewChild,
                args: ['arrowButton', { read: ElementRef }]
            }], popupTemplate: [{
                type: ViewChild,
                args: ['popupTemplate']
            }], containerRef: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef }]
            }], isFocused: [{
                type: HostBinding,
                args: ['class.k-focus']
            }], widgetClasses: [{
                type: HostBinding,
                args: ['class.k-split-button']
            }, {
                type: HostBinding,
                args: ['class.k-button-group']
            }], dir: [{
                type: HostBinding,
                args: ['attr.dir']
            }], keydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], keyup: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
