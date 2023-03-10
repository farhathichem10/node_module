/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, EventEmitter, HostBinding, Input, Output, ViewChild, ContentChild } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { L10N_PREFIX, LocalizationService } from '@progress/kendo-angular-l10n';
import { validatePackage } from '@progress/kendo-licensing';
import { packageMetadata } from '../package-metadata';
import { guid, isDocumentAvailable } from '@progress/kendo-angular-common';
import { FocusService } from '../focusable/focus.service';
import { NavigationAction } from '../navigation/navigation-action';
import { NAVIGATION_CONFIG } from '../navigation/navigation-config';
import { NavigationService } from '../navigation/navigation.service';
import { closest, isPresent } from '../util';
import { getAnchorAlign, getPopupAlign } from './utils';
import { closeAnimation, openAnimation } from './animations/animations';
import { PreventableEvent } from '../preventable-event';
import { DialItemTemplateDirective } from './templates/dial-item-template.directive';
import { FloatingActionButtonTemplateDirective } from './templates/fab-template.directive';
import * as i0 from "@angular/core";
import * as i1 from "../focusable/focus.service";
import * as i2 from "../navigation/navigation.service";
import * as i3 from "@progress/kendo-angular-popup";
import * as i4 from "@angular/animations";
import * as i5 from "@progress/kendo-angular-l10n";
import * as i6 from "./dial-list.component";
import * as i7 from "@angular/common";
import * as i8 from "@progress/kendo-angular-common";
const NAVIGATION_SETTINGS = {
    useLeftRightArrows: false
};
const NAVIGATION_SETTINGS_PROVIDER = {
    provide: NAVIGATION_CONFIG,
    useValue: NAVIGATION_SETTINGS
};
const SIZE_CLASSES = {
    small: 'k-fab-sm',
    medium: 'k-fab-md',
    large: 'k-fab-lg'
};
const ROUNDED_CLASSES = {
    small: 'k-rounded-sm',
    medium: 'k-rounded-md',
    large: 'k-rounded-lg',
    full: 'k-rounded-full'
};
const FILLMODE_CLASS = 'k-fab-solid';
const DEFAULT_DURATION = 180;
const DEFAULT_ITEM_GAP = 90;
const DEFAULT_OFFSET = '16px';
const DEFAULT_ROUNDED = 'full';
const DEFAULT_SIZE = 'medium';
const DEFAULT_THEME_COLOR = 'primary';
/**
 *
 * Represents the [Kendo UI FloatingActionButton component for Angular]({% slug overview_floatingactionbutton %}).
 * Used to specify the primary or the most common action in an application.
 *
 */
export class FloatingActionButtonComponent {
    constructor(renderer, element, focusService, navigationService, ngZone, popupService, builder, localizationService) {
        this.renderer = renderer;
        this.element = element;
        this.focusService = focusService;
        this.navigationService = navigationService;
        this.ngZone = ngZone;
        this.popupService = popupService;
        this.builder = builder;
        this.localizationService = localizationService;
        /**
         * Specifies the positionMode of the FloatingActionButton
         * ([see example]({% slug positioning_floatingactionbutton %}#toc-positionMode)).
         *
         * * The possible values are:
         * * `absolute`&mdash;Positions the FloatingActionButton absolutely to its first positioned parent element.
         * * `fixed` (Default)&mdash;Positions the FloatingActionButton relative to the viewport. It always stays in the same place even if the page is scrolled.
         */
        this.positionMode = 'fixed';
        /**
         * Specifies the animation settings of the FloatingActionButton dial items.
         * ([see example]({% slug dialitems_floatingactionbutton %}#toc-animation)).
         *
         * The possible values are:
         * * Boolean
         *    * (Default) `true`&mdash;Applies the default [`DialItemAnimation`]({% slug api_buttons_dialitemanimation %}) settings.
         *    * `false`
         * * `DialItemAnimation`
         *    * `duration`&mdash;Specifies the animation duration in milliseconds for each dial item. Defaults to `180ms`.
         *    * `gap`&mdash;Specifies the animation duration gap in milliseconds after each dial item is animated. Defaults to `90ms`.
         */
        this.dialItemAnimation = true;
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the FloatingActionButton.
         */
        this.tabIndex = 0;
        /**
         * Specifies the collection of the dial items that will be rendered in the FloatingActionButton popup.
         */
        this.dialItems = [];
        /**
         * Fires each time the FloatingActionButton gets blurred.
         */
        this.onBlur = new EventEmitter();
        /**
         * Fires each time the FloatingActionButton gets focused.
         */
        this.onFocus = new EventEmitter();
        /**
         * Fires each time a dial item is clicked.
         */
        this.dialItemClick = new EventEmitter();
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed
         * ([more information and example]({% slug overview_floatingactionbutton %}#toc-events)).
         */
        this.open = new EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain open
         * ([more information and example]({% slug overview_floatingactionbutton %}#toc-events)).
         */
        this.close = new EventEmitter();
        /**
         * @hidden
         */
        this.id = `k-${guid()}`;
        /**
         * @hidden
         */
        this.dialListId = `k-dial-list-${guid()}`;
        this._themeColor = DEFAULT_THEME_COLOR;
        this._size = DEFAULT_SIZE;
        this._rounded = DEFAULT_ROUNDED;
        this._disabled = false;
        this._align = { horizontal: 'end', vertical: 'bottom' };
        this._offset = { x: DEFAULT_OFFSET, y: DEFAULT_OFFSET };
        this.subscriptions = new Subscription();
        this.rtl = false;
        this.animationEnd = new EventEmitter();
        this.initialSetup = true;
        validatePackage(packageMetadata);
        this.subscribeNavigationEvents();
        this.subscriptions.add(this.localizationService.changes.subscribe(({ rtl }) => {
            this.rtl = rtl;
            this.direction = this.rtl ? 'rtl' : 'ltr';
        }));
    }
    get fixedClass() {
        return this.positionMode === 'fixed';
    }
    get absoluteClass() {
        return this.positionMode === 'absolute';
    }
    /**
     * Specifies the theme color of the FloatingActionButton
     * ([see example]({% slug appearance_floatingactionbutton %}#toc-themeColor)).
     * The theme color will be applied as background color of the component.
     *
     * The possible values are:
     * * `primary` (Default)&mdash;Applies coloring based on the `primary` theme color.
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
    set themeColor(themeColor) {
        const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR;
        this.handleClasses(newThemeColor, 'themeColor');
        this._themeColor = newThemeColor;
    }
    get themeColor() {
        return this._themeColor;
    }
    /**
     * Specifies the size of the FloatingActionButton
     * ([see example]({% slug appearance_floatingactionbutton %}#toc-size)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (Default)
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
     * The rounded property specifies the border radius of the FloatingActionButton.
     *
     * The possible values are:
     * * `small`
     * * `medium`
     * * `large`
     * * `full` (default)
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
     * Specifies whether the FloatingActionButton is disabled.
     */
    set disabled(disabled) {
        this._disabled = disabled;
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * Specifies the horizontal and vertical alignment of the FloatingActionButton
     * ([see example]({% slug positioning_floatingactionbutton %}#toc-align)).
     *
     * The possible values are:
     * * `{ horizontal: 'start'|'center'|'end', vertical: 'top'|'middle'|'bottom' }`
     *
     * The default value is:
     * * `{ horizontal: 'end', vertical: 'bottom' }`
     *
     */
    set align(align) {
        this._align = Object.assign(this._align, align);
    }
    get align() {
        return this._align;
    }
    /**
     * Specifies the horizontal and vertical offset position of the FloatingActionButton
     * ([see example]({% slug positioning_floatingactionbutton %}#toc-offset)).
     *
     * * The default value is:
     * * `{ x: '16px', y: '16px' }`
     */
    set offset(offset) {
        this._offset = Object.assign(this._offset, offset);
        this.offsetStyles();
    }
    get offset() {
        return this._offset;
    }
    /**
     * @hidden
     */
    get componentTabIndex() {
        return this.disabled ? (-1) : this.tabIndex;
    }
    ngAfterViewInit() {
        ['size', 'rounded', 'themeColor'].forEach(option => this.handleClasses(this[option], option));
        this.renderer.addClass(this.element.nativeElement, this.alignClass());
        this.offsetStyles();
        this.initialSetup = false;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * Indicates whether the FloatingActionButton is currently open.
     */
    get isOpen() { return isPresent(this.popupRef); }
    /**
     * Focuses the FloatingActionButton.
     */
    focus() {
        if (isDocumentAvailable()) {
            this.button.nativeElement.focus();
        }
    }
    /**
     * Blurs the FloatingActionButton.
     */
    blur() {
        if (isDocumentAvailable()) {
            this.button.nativeElement.blur();
        }
    }
    /**
     * Toggles the visibility of the FloatingActionButton dial items popup.
     *
     * If you use the `toggleDial` method to open or close the dial items,
     * the `open` and `close` events do not fire ([more information and examples]({% slug openstate_floatingactionbutton %}#toc-events)).
     *
     * @param open - The state of dial items popup.
     */
    toggleDial(open) {
        if (this.disabled || !this.hasDialItems) {
            return;
        }
        const shouldOpen = isPresent(open) ? open : !this.isOpen;
        if (this.disabled || shouldOpen === this.isOpen) {
            return;
        }
        if (shouldOpen) {
            setTimeout(() => this.openDial());
        }
        else {
            this.closeDial();
        }
    }
    /**
     * @hidden
     */
    get ariaExpanded() {
        return this.hasDialItems ? this.isOpen : null;
    }
    /**
     * @hidden
     */
    get ariaHasPopup() {
        return this.hasDialItems ? 'menu' : null;
    }
    /**
     * @hidden
     */
    get ariaControls() {
        return this.hasDialItems ? this.dialListId : null;
    }
    /**
     * @hidden
     */
    get iconClasses() {
        const classes = [];
        if (this.iconClass) {
            classes.push(`${this.iconClass}`);
        }
        if (this.icon) {
            classes.push(`k-fab-icon k-icon k-i-${this.icon}`);
        }
        return classes;
    }
    /**
     * @hidden
     */
    clickHandler() {
        if (this.disabled || !this.hasDialItems) {
            return;
        }
        this.ngZone.run(() => {
            const shouldOpen = !this.isOpen;
            this.toggleDialWithEvents(shouldOpen);
        });
    }
    /**
     * @hidden
     */
    keyDownHandler(event) {
        this.keyHandler(event);
    }
    /**
     * @hidden
     */
    keyHandler(event, keyEvent) {
        if (this.disabled) {
            return;
        }
        const focused = this.focusService.focused || 0;
        const keyCode = event.keyCode;
        const action = this.navigationService.process({
            altKey: event.altKey,
            current: focused,
            keyCode,
            keyEvent: keyEvent,
            max: this.dialItems ? this.dialItems.length - 1 : 0,
            min: 0,
            flipNavigation: this.align.vertical === 'bottom'
        });
        if (action !== NavigationAction.Undefined &&
            action !== NavigationAction.Tab) {
            event.preventDefault();
        }
        if (action === NavigationAction.EnterUp && !this.hasDialItems) {
            this.button.nativeElement.click();
        }
        else if (action === NavigationAction.Open || action === NavigationAction.Close) {
            const toggleDial = action === NavigationAction.Open;
            this.ngZone.run(() => {
                this.toggleDialWithEvents(toggleDial);
            });
        }
    }
    /**
     * @hidden
     */
    onItemClick(event) {
        const item = closest(event.target, '.k-fab-item');
        if (!item) {
            return;
        }
        const index = item.getAttribute('data-fab-item-index');
        this.emitItemClick(index);
    }
    /**
     * @hidden
     */
    focusHandler() {
        if (!this.disabled) {
            this.onFocus.emit();
        }
    }
    /**
     * @hidden
     */
    blurHandler() {
        this.onBlur.emit();
        this.toggleDialWithEvents(false);
    }
    handleClasses(inputValue, input) {
        if (isPresent(this.button) && (this[input] !== inputValue || this.initialSetup)) {
            const button = this.button.nativeElement;
            const classesToRemove = {
                themeColor: `${FILLMODE_CLASS}-${this.themeColor}`,
                size: SIZE_CLASSES[this.size],
                rounded: ROUNDED_CLASSES[this.rounded]
            };
            const classesToAdd = {
                themeColor: inputValue !== 'none' ? `${FILLMODE_CLASS}-${inputValue}` : '',
                size: SIZE_CLASSES[inputValue],
                rounded: ROUNDED_CLASSES[inputValue]
            };
            this.renderer.removeClass(button, classesToRemove[input]);
            if (classesToAdd[input]) {
                this.renderer.addClass(button, classesToAdd[input]);
            }
        }
    }
    onEnterPressed() {
        const index = this.focusService.focused;
        this.emitItemClick(index);
    }
    emitItemClick(index) {
        const item = this.dialItems[index];
        if (item && !item.disabled) {
            const clickEventArgs = { item: item, index: index };
            this.dialItemClick.emit(clickEventArgs);
            this.toggleDialWithEvents(false);
        }
    }
    subscribeNavigationEvents() {
        this.subscriptions.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
        this.subscriptions.add(this.navigationService.enter.subscribe(this.onNavigationEnterPress.bind(this)));
        this.subscriptions.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
    }
    onArrowKeyNavigate({ index }) {
        this.focusService.focus(index);
    }
    onNavigationEnterPress() {
        this.ngZone.run(() => {
            if (this.isOpen) {
                let focusedIndex = this.focusService.focused;
                const focusedItem = this.dialItems[focusedIndex];
                if (focusedItem && focusedItem.disabled) {
                    return;
                }
                if (isPresent(focusedIndex) && focusedIndex !== -1) {
                    this.onEnterPressed();
                    return;
                }
            }
            if (!this.isOpen && isDocumentAvailable()) {
                this.toggleDialWithEvents(true);
                this.button.nativeElement.focus();
            }
        });
    }
    onNavigationClose() {
        if (this.isOpen) {
            this.ngZone.run(() => {
                this.toggleDialWithEvents(false);
                if (isDocumentAvailable()) {
                    this.button.nativeElement.focus();
                }
            });
        }
    }
    alignClass() {
        return `k-pos-${this.align.vertical}-${this.align.horizontal}`;
    }
    toggleDialWithEvents(open) {
        if (open === this.isOpen) {
            return;
        }
        const event = new PreventableEvent();
        if (open) {
            this.open.emit(event);
        }
        else {
            this.close.emit(event);
        }
        if (event.isDefaultPrevented()) {
            return;
        }
        if (open) {
            this.openDial();
        }
        else {
            this.closeDial();
        }
    }
    openPopup() {
        if (this.isOpen) {
            return;
        }
        const isIconFab = this.icon && !this.text;
        const rtl = this.rtl;
        const align = this.align;
        this.popupRef = this.popupService.open({
            anchor: this.element.nativeElement,
            animate: false,
            content: this.popupTemplate,
            anchorAlign: getAnchorAlign(align, rtl),
            popupAlign: getPopupAlign(align, rtl),
            popupClass: 'k-fab-popup k-popup-transparent'
        });
        const popupElement = this.popupRef.popupElement;
        this.renderer.setStyle(popupElement, 'box-shadow', 'none');
        if (isIconFab) {
            this.subscriptions.add(this.popupRef.popupOpen.subscribe(() => this.positionPopup()));
        }
        this.ngZone.runOutsideAngular(() => {
            this.popupMouseDownListener = this.renderer.listen(popupElement, 'mousedown', (event) => {
                event.preventDefault();
            });
        });
        this.popupRef.popupAnchorViewportLeave.subscribe(() => this.toggleDialWithEvents(false));
    }
    closePopup() {
        if (this.isOpen) {
            if (this.popupMouseDownListener) {
                this.popupMouseDownListener();
            }
            this.popupRef.close();
            this.popupRef = null;
        }
    }
    openDial() {
        this.openPopup();
        this.focusService.focus(0);
        if (this.dialItemAnimation && this.isValidAnimation()) {
            this.playAnimation(true);
        }
        this.renderer.setAttribute(this.button.nativeElement, 'aria-expanded', 'true');
    }
    closeDial() {
        if (this.dialItemAnimation && this.isValidAnimation()) {
            this.playAnimation(false);
            this.animationEnd.pipe(take(1)).subscribe(() => this.closePopup());
        }
        else {
            this.closePopup();
        }
        this.renderer.setAttribute(this.button.nativeElement, 'aria-expanded', 'false');
    }
    isValidAnimation() {
        const animation = this.dialItemAnimation;
        if (typeof animation !== 'boolean') {
            return animation.duration !== 0;
        }
        return true;
    }
    positionPopup() {
        if (this.dialItemTemplate) {
            return;
        }
        if (!this.popupRef) {
            return;
        }
        const fab = this.element.nativeElement;
        const fabWidth = fab.getBoundingClientRect().width;
        const popupEl = this.popupRef.popupElement;
        const icon = popupEl.querySelector('.k-fab-item-icon');
        if (!icon) {
            return;
        }
        const iconWidth = icon.getBoundingClientRect().width;
        const left = (fabWidth / 2) - (iconWidth / 2);
        const popupLeft = popupEl.getBoundingClientRect().left;
        const isEndAlign = this.align.horizontal === 'end';
        const leftValue = isEndAlign ? (popupLeft - left) : (left + popupLeft);
        const rtlLeftValue = isEndAlign ? (left + popupLeft) : (popupLeft - left);
        popupEl.style.left = this.rtl ? `${rtlLeftValue}px` : `${leftValue}px`;
    }
    offsetStyles() {
        const hostElement = this.element.nativeElement;
        this.renderer.setStyle(hostElement, this.horizontalPosition, this.horizontalOffset);
        this.renderer.setStyle(hostElement, this.verticalPosition, this.verticalOffset);
    }
    get hasDialItems() {
        return isPresent(this.dialItems) && this.dialItems.length !== 0;
    }
    /**
     * Gets the CSS prop name of the selected vertical position (`top`/`bottom`);
     */
    get verticalPosition() {
        return {
            top: 'top',
            middle: 'top',
            bottom: 'bottom'
        }[this.align.vertical];
    }
    /**
     * Gets the offset according to the selected vertical position.
     */
    get verticalOffset() {
        if (this.align.vertical === 'middle') {
            return this.offset.y === DEFAULT_OFFSET ? '50%' : `calc(50% + ${this.offset.y})`;
        }
        return this.offset.y;
    }
    /**
     * Gets the CSS prop name of the selected horizontal position (`left`/`right`);
     */
    get horizontalPosition() {
        const { horizontal } = this.align;
        return {
            end: this.rtl ? 'left' : 'right',
            center: 'left',
            start: this.rtl ? 'right' : 'left'
        }[horizontal];
    }
    /**
     * Gets the offset according to the selected horizontal position.
     */
    get horizontalOffset() {
        if (this.align.horizontal === 'center') {
            return this.offset.x === DEFAULT_OFFSET ? '50%' : `calc(50% + ${this.offset.x})`;
        }
        return this.offset.x;
    }
    playerFor(element, animation) {
        const factory = this.builder.build(animation);
        return factory.create(element);
    }
    playAnimation(open) {
        const durationSettings = this.durationSettings();
        const animationSettings = {
            duration: durationSettings.duration,
            gap: durationSettings.gap,
            align: this.align
        };
        const animation = open ? openAnimation(animationSettings) : closeAnimation(animationSettings);
        let player = this.playerFor(this.popupRef.popupElement, animation);
        player.play();
        player.onDone(() => {
            if (player) {
                this.animationEnd.emit();
                player.destroy();
                player = null;
            }
        });
    }
    durationSettings() {
        return {
            duration: this.animationDuration(),
            gap: this.animationGap()
        };
    }
    animationGap() {
        const animation = this.dialItemAnimation;
        if (typeof animation !== 'boolean' && isPresent(animation.gap)) {
            return animation.gap;
        }
        return DEFAULT_ITEM_GAP;
    }
    animationDuration() {
        const animation = this.dialItemAnimation;
        if (typeof animation !== 'boolean' && isPresent(animation.duration)) {
            return animation.duration;
        }
        return DEFAULT_DURATION;
    }
}
FloatingActionButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.FocusService }, { token: i2.NavigationService }, { token: i0.NgZone }, { token: i3.PopupService }, { token: i4.AnimationBuilder }, { token: i5.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
FloatingActionButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: FloatingActionButtonComponent, selector: "kendo-floatingactionbutton", inputs: { themeColor: "themeColor", size: "size", rounded: "rounded", disabled: "disabled", align: "align", offset: "offset", positionMode: "positionMode", icon: "icon", iconClass: "iconClass", buttonClass: "buttonClass", dialClass: "dialClass", text: "text", dialItemAnimation: "dialItemAnimation", tabIndex: "tabIndex", dialItems: "dialItems" }, outputs: { onBlur: "blur", onFocus: "focus", dialItemClick: "dialItemClick", open: "open", close: "close" }, host: { properties: { "class.k-pos-fixed": "this.fixedClass", "class.k-pos-absolute": "this.absoluteClass", "attr.dir": "this.direction" } }, providers: [
        FocusService,
        NavigationService,
        NAVIGATION_SETTINGS_PROVIDER,
        LocalizationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.floatingactionbutton'
        }
    ], queries: [{ propertyName: "dialItemTemplate", first: true, predicate: DialItemTemplateDirective, descendants: true }, { propertyName: "fabTemplate", first: true, predicate: FloatingActionButtonTemplateDirective, descendants: true }], viewQueries: [{ propertyName: "button", first: true, predicate: ["button"], descendants: true, static: true }, { propertyName: "popupTemplate", first: true, predicate: ["popupTemplate"], descendants: true, static: true }], ngImport: i0, template: `
        <button
            #button
            [attr.id]="id"
            [tabIndex]="componentTabIndex"
            type="button"
            class="k-fab k-fab-solid"
            [class.k-disabled]="disabled"
            [ngClass]="buttonClass"
            [disabled]="disabled"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="ariaExpanded"
            [attr.aria-haspopup]="ariaHasPopup"
            [attr.aria-controls]="ariaControls"
            (focus)="focusHandler()"
            (blur)="blurHandler()"
            [kendoEventsOutsideAngular]="{
                keydown: keyDownHandler,
                click: clickHandler
            }"
            [scope]="this"
        >
            <ng-template *ngIf="fabTemplate"
                [ngTemplateOutlet]="fabTemplate?.templateRef"
            >
            </ng-template>

            <ng-container *ngIf="!fabTemplate">
                <span *ngIf="icon || iconClass" [ngClass]="iconClasses"></span>
                <span *ngIf="text" class="k-fab-text">{{ text }}</span>
            </ng-container>
        </button>

        <ng-template #popupTemplate>
            <ul
                kendoDialList
                role="menu"
                [id]="dialListId"
                [ngClass]="dialClass"
                [dialItems]="dialItems"
                [dialItemTemplate]='dialItemTemplate?.templateRef'
                [align]="align"
                [attr.aria-labelledby]="id"
                (click)="onItemClick($event)"
            >
            </ul>
        </ng-template>
    `, isInline: true, components: [{ type: i6.DialListComponent, selector: "[kendoDialList]", inputs: ["dialItems", "dialItemTemplate", "align"] }], directives: [{ type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8.EventsOutsideAngularDirective, selector: "[kendoEventsOutsideAngular]", inputs: ["kendoEventsOutsideAngular", "scope"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'kendo-floatingactionbutton',
                    providers: [
                        FocusService,
                        NavigationService,
                        NAVIGATION_SETTINGS_PROVIDER,
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.floatingactionbutton'
                        }
                    ],
                    template: `
        <button
            #button
            [attr.id]="id"
            [tabIndex]="componentTabIndex"
            type="button"
            class="k-fab k-fab-solid"
            [class.k-disabled]="disabled"
            [ngClass]="buttonClass"
            [disabled]="disabled"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="ariaExpanded"
            [attr.aria-haspopup]="ariaHasPopup"
            [attr.aria-controls]="ariaControls"
            (focus)="focusHandler()"
            (blur)="blurHandler()"
            [kendoEventsOutsideAngular]="{
                keydown: keyDownHandler,
                click: clickHandler
            }"
            [scope]="this"
        >
            <ng-template *ngIf="fabTemplate"
                [ngTemplateOutlet]="fabTemplate?.templateRef"
            >
            </ng-template>

            <ng-container *ngIf="!fabTemplate">
                <span *ngIf="icon || iconClass" [ngClass]="iconClasses"></span>
                <span *ngIf="text" class="k-fab-text">{{ text }}</span>
            </ng-container>
        </button>

        <ng-template #popupTemplate>
            <ul
                kendoDialList
                role="menu"
                [id]="dialListId"
                [ngClass]="dialClass"
                [dialItems]="dialItems"
                [dialItemTemplate]='dialItemTemplate?.templateRef'
                [align]="align"
                [attr.aria-labelledby]="id"
                (click)="onItemClick($event)"
            >
            </ul>
        </ng-template>
    `
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.FocusService }, { type: i2.NavigationService }, { type: i0.NgZone }, { type: i3.PopupService }, { type: i4.AnimationBuilder }, { type: i5.LocalizationService }]; }, propDecorators: { fixedClass: [{
                type: HostBinding,
                args: ['class.k-pos-fixed']
            }], absoluteClass: [{
                type: HostBinding,
                args: ['class.k-pos-absolute']
            }], direction: [{
                type: HostBinding,
                args: ['attr.dir']
            }], button: [{
                type: ViewChild,
                args: ['button', { static: true }]
            }], popupTemplate: [{
                type: ViewChild,
                args: ['popupTemplate', { static: true }]
            }], dialItemTemplate: [{
                type: ContentChild,
                args: [DialItemTemplateDirective, { static: false }]
            }], fabTemplate: [{
                type: ContentChild,
                args: [FloatingActionButtonTemplateDirective, { static: false }]
            }], themeColor: [{
                type: Input
            }], size: [{
                type: Input
            }], rounded: [{
                type: Input
            }], disabled: [{
                type: Input
            }], align: [{
                type: Input
            }], offset: [{
                type: Input
            }], positionMode: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], buttonClass: [{
                type: Input
            }], dialClass: [{
                type: Input
            }], text: [{
                type: Input
            }], dialItemAnimation: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], dialItems: [{
                type: Input
            }], onBlur: [{
                type: Output,
                args: ['blur']
            }], onFocus: [{
                type: Output,
                args: ['focus']
            }], dialItemClick: [{
                type: Output,
                args: ['dialItemClick']
            }], open: [{
                type: Output
            }], close: [{
                type: Output
            }] } });
