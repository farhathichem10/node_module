/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, ContentChild, ViewChild, ViewContainerRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { LocalizationService, L10N_PREFIX } from '@progress/kendo-angular-l10n';
import { isDocumentAvailable, guid, Keys } from '@progress/kendo-angular-common';
import { ButtonItemTemplateDirective } from '../listbutton/button-item-template.directive';
import { closest } from '../util';
import { ListButton } from '../listbutton/list-button';
import { FocusService } from '../focusable/focus.service';
import { NavigationService } from '../navigation/navigation.service';
import { NAVIGATION_CONFIG } from '../navigation/navigation-config';
import { PopupContainerService } from '../listbutton/container.service';
import * as i0 from "@angular/core";
import * as i1 from "../focusable/focus.service";
import * as i2 from "../navigation/navigation.service";
import * as i3 from "@progress/kendo-angular-popup";
import * as i4 from "@progress/kendo-angular-l10n";
import * as i5 from "../listbutton/container.service";
import * as i6 from "../listbutton/list.component";
import * as i7 from "../button/button.directive";
import * as i8 from "@angular/common";
const NAVIGATION_SETTINGS = {
    useLeftRightArrows: true
};
const NAVIGATION_SETTINGS_PROVIDER = {
    provide: NAVIGATION_CONFIG,
    useValue: NAVIGATION_SETTINGS
};
const DEFAULT_FILL_MODE = 'solid';
/**
 * Represents the Kendo UI DropDownButton component for Angular.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-dropdownbutton [data]="data">
 *    User Settings
 *  </kendo-dropdownbutton>
 * `
 * })
 * class AppComponent {
 *   public data: Array<any> = [{
 *       text: 'My Profile'
 *   }, {
 *       text: 'Friend Requests'
 *   }, {
 *       text: 'Account Settings'
 *   }, {
 *       text: 'Support'
 *   }, {
 *       text: 'Log Out'
 *   }];
 * }
 * ```
 */
export class DropDownButtonComponent extends ListButton {
    constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService) {
        super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
        this.containerService = containerService;
        /**
         * Defines the name of an existing icon in a Kendo UI theme.
         */
        this.icon = '';
        /**
         * Defines the list of CSS classes which are used for styling the Button with custom icons.
         */
        this.iconClass = '';
        /**
         * Defines a URL for styling the button with a custom image.
         */
        this.imageUrl = '';
        /**
         * The size property specifies the padding of the DropDownButton
         * ([see example]({% slug api_buttons_dropdownbuttoncomponent %}#toc-size)).
         *
         * The possible values are:
         * * `small`
         * * `medium` (default)
         * * `large`
         * * `none`
         */
        this.size = 'medium';
        /**
         * The rounded property specifies the border radius of the DropDownButton
         * ([see example]({% slug api_buttons_dropdownbuttoncomponent %}#toc-rounded)).
         *
         * The possible values are:
         * * `small`
         * * `medium` (default)
         * * `large`
         * * `full`
         * * `none`
         */
        this.rounded = 'medium';
        /**
         * The DropDownButton allows you to specify predefined theme colors.
         * The theme color will be applied as a background and border color while also amending the text color accordingly
         * ([see example]({% slug api_buttons_dropdownbuttoncomponent %}#toc-themeColor)).
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
         * * `none` &mdash;Removes the default CSS class (no class would be rendered).
         */
        this.themeColor = 'base';
        /**
         * Fires each time the user clicks on a drop-down list item. The event data contains the data item bound to the clicked list item.
         */
        this.itemClick = new EventEmitter();
        /**
         * Fires each time the DropDownButton gets focused.
         */
        this.onFocus = new EventEmitter();
        /**
         * Fires each time the DropDownButton gets blurred.
         */
        this.onBlur = new EventEmitter();
        this.listId = guid();
        this.buttonId = guid();
        this._fillMode = DEFAULT_FILL_MODE;
        this._itemClick = this.itemClick;
        this._blur = this.onBlur;
    }
    /**
     * Sets or gets the data of the DropDownButton.
     *
     * > The data has to be provided in an array-like list.
     */
    set data(data) {
        this._data = data || [];
    }
    get data() {
        return this._data;
    }
    /**
     * The fillMode property specifies the background and border styles of the DropDownButton
     * ([see example]({% slug api_buttons_dropdownbuttoncomponent %}#toc-fillMode)).
     *
     * The available values are:
     * * `solid` (default)
     * * `flat`
     * * `outline`
     * * `link`
     * * `none`
     */
    set fillMode(fillMode) {
        this._fillMode = fillMode === 'clear' ? 'flat' : fillMode;
    }
    get fillMode() {
        return this._fillMode;
    }
    get focused() {
        return this._isFocused && !this._disabled;
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
    get active() {
        return this._active;
    }
    /**
     * @hidden
     */
    keydown(event) {
        this.keyDownHandler(event, true);
        if (event.keyCode === Keys.Space || event.keyCode === Keys.Enter) {
            this._active = true;
        }
        if (event.keyCode === Keys.Enter) {
            event.preventDefault();
        }
    }
    /**
     * @hidden
     */
    keyup(event) {
        this.keyUpHandler(event);
        this._active = false;
    }
    /**
     * @hidden
     */
    mousedown(event) {
        if (this._disabled) {
            event.preventDefault();
        }
        this._active = true;
    }
    /**
     * @hidden
     */
    mouseup(event) {
        if (this._disabled) {
            event.preventDefault();
        }
        this._active = false;
    }
    /**
     * @hidden
     */
    openPopup() {
        this._isFocused = true;
        this.togglePopupVisibility();
    }
    /**
     * @hidden
     */
    onButtonBlur() {
        if (!this.openState) {
            this.blurWrapper();
        }
    }
    /**
     * Focuses the DropDownButton component.
     */
    focus() {
        if (isDocumentAvailable()) {
            this.button.nativeElement.focus();
        }
    }
    /**
     * Blurs the DropDownButton component.
     */
    blur() {
        if (isDocumentAvailable()) {
            this.button.nativeElement.blur();
            this.blurWrapper();
        }
    }
    ngAfterViewInit() {
        this.containerService.container = this.container;
        this.containerService.template = this.popupTemplate;
    }
    /**
     * @hidden
     */
    handleFocus(event) {
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
    wrapperContains(element) {
        return this.wrapper === element
            || this.wrapper.contains(element)
            || (this.popupRef && this.popupRef.popupElement.contains(element));
    }
}
DropDownButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonComponent, deps: [{ token: i1.FocusService }, { token: i2.NavigationService }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i3.PopupService }, { token: i0.ElementRef }, { token: i4.LocalizationService }, { token: i0.ChangeDetectorRef }, { token: i5.PopupContainerService }], target: i0.ɵɵFactoryTarget.Component });
DropDownButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DropDownButtonComponent, selector: "kendo-dropdownbutton", inputs: { icon: "icon", iconClass: "iconClass", imageUrl: "imageUrl", textField: "textField", data: "data", size: "size", rounded: "rounded", fillMode: "fillMode", themeColor: "themeColor" }, outputs: { itemClick: "itemClick", onFocus: "focus", onBlur: "blur" }, host: { listeners: { "keydown": "keydown($event)", "keyup": "keyup($event)", "mousedown": "mousedown($event)", "mouseup": "mouseup($event)" }, properties: { "class.k-focus": "this.focused", "class.k-dropdown-button": "this.widgetClasses", "attr.dir": "this.dir" } }, providers: [
        FocusService,
        NavigationService,
        NAVIGATION_SETTINGS_PROVIDER,
        LocalizationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.dropdownbutton'
        },
        PopupContainerService
    ], queries: [{ propertyName: "itemTemplate", first: true, predicate: ButtonItemTemplateDirective, descendants: true }], viewQueries: [{ propertyName: "button", first: true, predicate: ["button"], descendants: true }, { propertyName: "buttonList", first: true, predicate: ["buttonList"], descendants: true }, { propertyName: "popupTemplate", first: true, predicate: ["popupTemplate"], descendants: true }, { propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], exportAs: ["kendoDropDownButton"], usesInheritance: true, ngImport: i0, template: `
        <button kendoButton #button
            type="button"
            [id]="buttonId"
            [tabindex]="componentTabIndex"
            [class.k-active]="active"
            [disabled]="disabled"
            [icon]="icon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="fillMode ? themeColor : null"
            (click)="openPopup()"
            (focus)="handleFocus($event)"
            (blur)="onButtonBlur()"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-haspopup]="true"
            [attr.aria-controls]="listId"
        >
            <ng-content></ng-content>
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                #buttonList
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [attr.aria-labelledby]="buttonId"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `, isInline: true, components: [{ type: i6.ListComponent, selector: "kendo-button-list", inputs: ["data", "textField", "itemTemplate", "size"], outputs: ["onItemClick", "onItemBlur"] }], directives: [{ type: i7.ButtonDirective, selector: "button[kendoButton], span[kendoButton]", inputs: ["toggleable", "togglable", "selected", "tabIndex", "icon", "iconClass", "imageUrl", "disabled", "size", "rounded", "fillMode", "themeColor", "role", "primary", "look"], outputs: ["selectedChange", "click"], exportAs: ["kendoButton"] }, { type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonComponent, decorators: [{
            type: Component,
            args: [{
                    exportAs: 'kendoDropDownButton',
                    providers: [
                        FocusService,
                        NavigationService,
                        NAVIGATION_SETTINGS_PROVIDER,
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.dropdownbutton'
                        },
                        PopupContainerService
                    ],
                    selector: 'kendo-dropdownbutton',
                    template: `
        <button kendoButton #button
            type="button"
            [id]="buttonId"
            [tabindex]="componentTabIndex"
            [class.k-active]="active"
            [disabled]="disabled"
            [icon]="icon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="fillMode ? themeColor : null"
            (click)="openPopup()"
            (focus)="handleFocus($event)"
            (blur)="onButtonBlur()"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-haspopup]="true"
            [attr.aria-controls]="listId"
        >
            <ng-content></ng-content>
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                #buttonList
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [attr.aria-labelledby]="buttonId"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `
                }]
        }], ctorParameters: function () { return [{ type: i1.FocusService }, { type: i2.NavigationService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i3.PopupService }, { type: i0.ElementRef }, { type: i4.LocalizationService }, { type: i0.ChangeDetectorRef }, { type: i5.PopupContainerService }]; }, propDecorators: { icon: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], imageUrl: [{
                type: Input
            }], textField: [{
                type: Input
            }], data: [{
                type: Input
            }], size: [{
                type: Input
            }], rounded: [{
                type: Input
            }], fillMode: [{
                type: Input
            }], themeColor: [{
                type: Input
            }], itemClick: [{
                type: Output
            }], onFocus: [{
                type: Output,
                args: ['focus']
            }], onBlur: [{
                type: Output,
                args: ['blur']
            }], focused: [{
                type: HostBinding,
                args: ['class.k-focus']
            }], widgetClasses: [{
                type: HostBinding,
                args: ['class.k-dropdown-button']
            }], dir: [{
                type: HostBinding,
                args: ['attr.dir']
            }], itemTemplate: [{
                type: ContentChild,
                args: [ButtonItemTemplateDirective]
            }], button: [{
                type: ViewChild,
                args: ['button']
            }], buttonList: [{
                type: ViewChild,
                args: ['buttonList']
            }], popupTemplate: [{
                type: ViewChild,
                args: ['popupTemplate']
            }], container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef }]
            }], keydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], keyup: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }], mousedown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }], mouseup: [{
                type: HostListener,
                args: ['mouseup', ['$event']]
            }] } });
