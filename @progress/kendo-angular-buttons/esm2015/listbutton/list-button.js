/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter, Component, Input, Output } from '@angular/core';
/* eslint-disable import/no-deprecated */
import { Subscription, fromEvent, merge } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { KeyEvents } from './../navigation/key-events';
import { NavigationAction } from './../navigation/navigation-action';
import { isDocumentAvailable, guid, Keys, isChanged } from '@progress/kendo-angular-common';
import { validatePackage } from '@progress/kendo-licensing';
import { packageMetadata } from '../package-metadata';
import { PreventableEvent } from '../preventable-event';
import { isPresent } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "./../focusable/focus.service";
import * as i2 from "./../navigation/navigation.service";
import * as i3 from "@progress/kendo-angular-popup";
import * as i4 from "@progress/kendo-angular-l10n";
import * as i5 from "./container.service";
/**
 * @hidden
 */
export class ListButton {
    constructor(focusService, navigationService, wrapperRef, _zone, popupService, elRef, localization, cdr, containerService) {
        this.focusService = focusService;
        this.navigationService = navigationService;
        this.wrapperRef = wrapperRef;
        this._zone = _zone;
        this.popupService = popupService;
        this.elRef = elRef;
        this.cdr = cdr;
        this.containerService = containerService;
        this._open = false;
        this._disabled = false;
        this._active = false;
        this._popupSettings = { animate: true, popupClass: '' };
        this.listId = guid();
        this._isFocused = false;
        this.subs = new Subscription();
        this.popupSubs = new Subscription();
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
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
        this.isClosePrevented = false;
        validatePackage(packageMetadata);
        this.focusService = focusService;
        this.navigationService = navigationService;
        this.wrapper = wrapperRef.nativeElement;
        this.subs.add(localization.changes.subscribe(({ rtl }) => (this.direction = rtl ? 'rtl' : 'ltr')));
        this.subscribeEvents();
    }
    /**
     * Sets the disabled state of the DropDownButton.
     */
    set disabled(value) {
        if (value && this.openState) {
            this.openState = false;
        }
        this._disabled = value;
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @hidden
     */
    get componentTabIndex() {
        return this.disabled ? (-1) : this.tabIndex;
    }
    get appendTo() {
        const { appendTo } = this.popupSettings;
        if (!appendTo || appendTo === 'root') {
            return undefined;
        }
        return appendTo === 'component' ? this.containerService.container : appendTo;
    }
    /**
     * Configures the popup of the DropDownButton.
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
    ngOnChanges(changes) {
        if (isChanged("popupSettings", changes) && isPresent(this.popupRef)) {
            const popup = this.popupRef.popup.instance;
            const newSettings = changes.popupSettings.currentValue;
            popup.popupClass = newSettings.popupClass;
            popup.animate = newSettings.animate;
            popup.popupAlign = this.popupAlign;
        }
    }
    get popupClasses() {
        const popupClasses = ['k-menu-popup'];
        if (this._popupSettings.popupClass) {
            popupClasses.push(this._popupSettings.popupClass);
        }
        return popupClasses.join(' ');
    }
    get openState() {
        return this._open;
    }
    /**
     * @hidden
     */
    set openState(open) {
        if (this.disabled) {
            return;
        }
        this._open = open;
    }
    /**
     * Returns the current open state of the popup.
     */
    get isOpen() {
        return this._open;
    }
    /**
     * @hidden
     */
    togglePopupVisibility() {
        if (this._disabled) {
            return;
        }
        this._toggle(!this.openState);
        if (!this.isClosePrevented) {
            this.focusService.focus(this.openState ? 0 : -1);
        }
    }
    /**
     * @hidden
     */
    onItemClick(index) {
        this.togglePopupVisibility();
        if (this.isClosePrevented) {
            this.emitItemClickHandler(index);
            return;
        }
        if (isDocumentAvailable() && !this.isClosePrevented) {
            this.focusButton();
        }
        this.emitItemClickHandler(index);
    }
    ngOnDestroy() {
        this.openState = false;
        this.subs.unsubscribe();
        this.destroyPopup();
    }
    subscribeEvents() {
        if (!isDocumentAvailable()) {
            return;
        }
        this.subscribeListItemFocusEvent();
        this.subscribeComponentBlurredEvent();
        this.subscribeNavigationEvents();
    }
    subscribeListItemFocusEvent() {
        this.subs.add(this.focusService.onFocus.subscribe(() => {
            this._isFocused = true;
        }));
    }
    subscribeComponentBlurredEvent() {
        this._zone.runOutsideAngular(() => {
            this.subs.add(this.navigationService.tab.pipe(filter(() => this._isFocused), tap(() => this.focusButton())).subscribe(this.handleTab.bind(this)));
            this.subs.add(fromEvent(document, 'click')
                .pipe(filter((event) => !this.wrapperContains(event.target)), filter(() => this._isFocused))
                .subscribe(() => this._zone.run(() => this.blurWrapper())));
        });
    }
    subscribeNavigationEvents() {
        this.subs.add(this.navigationService.navigate
            .subscribe(this.onArrowKeyNavigate.bind(this)));
        this.subs.add(this.navigationService.enterup.subscribe(this.onNavigationEnterUp.bind(this)));
        this.subs.add(this.navigationService.open.subscribe(this.onNavigationOpen.bind(this)));
        this.subs.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
    }
    /**
     * Toggles the visibility of the popup.
     * If the `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
     *
     * @param open - The state of the popup.
     */
    toggle(open) {
        if (this.disabled) {
            return;
        }
        this._toggle((open === undefined) ? !this.openState : open);
    }
    /**
     * @hidden
     */
    keyDownHandler(event, isHost) {
        this.keyHandler(event, null, isHost);
    }
    /**
     * @hidden
     */
    keyUpHandler(event) {
        this.keyHandler(event, KeyEvents.keyup);
    }
    /**
     * @hidden
     */
    keyHandler(event, keyEvent, isHost) {
        if (this._disabled) {
            return;
        }
        const eventData = event;
        if (!isHost) {
            eventData.stopImmediatePropagation();
        }
        let focused = this.focusService.focused || 0;
        const action = this.navigationService.process({
            altKey: eventData.altKey,
            current: focused,
            keyCode: eventData.keyCode,
            keyEvent: keyEvent,
            max: this._data ? this._data.length - 1 : 0,
            min: 0,
            target: event.target
        });
        if (action !== NavigationAction.Undefined &&
            action !== NavigationAction.Tab &&
            (action !== NavigationAction.Enter || (action === NavigationAction.Enter && this.openState))) {
            if (!(event.keyCode === Keys.Space && action === NavigationAction.EnterUp)) {
                eventData.preventDefault();
            }
        }
    }
    emitItemClickHandler(index) {
        const dataItem = this._data[index];
        if (this._itemClick) {
            this._itemClick.emit(dataItem);
        }
        if (dataItem && dataItem.click && !dataItem.disabled) {
            dataItem.click(dataItem);
        }
        this.focusService.focus(index);
    }
    focusWrapper() {
        if (this.openState) {
            this.togglePopupVisibility();
            this.focusButton();
        }
    }
    wrapperContains(element) {
        return this.wrapper === element || this.wrapper.contains(element);
    }
    blurWrapper(emit = true) {
        if (!this._isFocused) {
            return;
        }
        if (this.openState) {
            this.togglePopupVisibility();
        }
        this._isFocused = false;
        if (emit) {
            this._blur.emit();
            this.cdr.markForCheck();
        }
    }
    focusButton() {
        if (this.button) {
            this.button.nativeElement.focus();
        }
    }
    handleTab() {
        this.blurWrapper();
    }
    onNavigationEnterUp() {
        if (!this._disabled && !this.openState) {
            this._active = false;
        }
        if (this.openState) {
            let focused = this.focusService.focused;
            if (isPresent(focused) && focused !== -1) {
                this.emitItemClickHandler(focused);
            }
        }
        this.togglePopupVisibility();
        if (!this.openState && isDocumentAvailable()) {
            this.button.nativeElement.focus();
        }
    }
    onNavigationOpen() {
        if (!this._disabled && !this.openState) {
            this.togglePopupVisibility();
        }
    }
    onNavigationClose() {
        if (this.openState && !this.isClosePrevented) {
            this.togglePopupVisibility();
            if (isDocumentAvailable()) {
                this.button.nativeElement.focus();
            }
        }
    }
    onArrowKeyNavigate({ index }) {
        this.focusService.focus(index);
    }
    _toggle(open) {
        if (this.openState === open) {
            return;
        }
        const eventArgs = new PreventableEvent();
        if (open && !this.openState) {
            this.open.emit(eventArgs);
        }
        else if (!open && this.openState) {
            this.close.emit(eventArgs);
        }
        if (eventArgs.isDefaultPrevented()) {
            this.isClosePrevented = true;
            return;
        }
        this.openState = open;
        this.destroyPopup();
        if (this.openState) {
            this.createPopup();
        }
    }
    createPopup() {
        this.popupRef = this.popupService.open({
            anchor: this.elRef,
            anchorAlign: this.anchorAlign,
            animate: this.popupSettings.animate,
            appendTo: this.appendTo,
            content: this.containerService.template,
            popupAlign: this.popupAlign,
            popupClass: this.popupClasses
        });
        this.popupSubs.add(this.popupRef.popupAnchorViewportLeave.subscribe(() => this.openState = false));
    }
    destroyPopup() {
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
            this.popupSubs.unsubscribe();
            this.isClosePrevented = false;
        }
    }
}
ListButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListButton, deps: [{ token: i1.FocusService }, { token: i2.NavigationService }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i3.PopupService }, { token: i0.ElementRef }, { token: i4.LocalizationService }, { token: i0.ChangeDetectorRef }, { token: i5.PopupContainerService }], target: i0.ɵɵFactoryTarget.Component });
ListButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ListButton, selector: "ng-component", inputs: { disabled: "disabled", tabIndex: "tabIndex", buttonClass: "buttonClass", popupSettings: "popupSettings" }, outputs: { open: "open", close: "close" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListButton, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.FocusService }, { type: i2.NavigationService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i3.PopupService }, { type: i0.ElementRef }, { type: i4.LocalizationService }, { type: i0.ChangeDetectorRef }, { type: i5.PopupContainerService }]; }, propDecorators: { disabled: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], buttonClass: [{
                type: Input
            }], open: [{
                type: Output
            }], close: [{
                type: Output
            }], popupSettings: [{
                type: Input
            }] } });
