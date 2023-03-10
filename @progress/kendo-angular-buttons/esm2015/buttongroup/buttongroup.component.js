/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ButtonDirective } from '../button/button.directive';
import { Component, EventEmitter, Output, Input, ContentChildren, HostBinding, isDevMode } from '@angular/core';
import { LocalizationService, L10N_PREFIX } from '@progress/kendo-angular-l10n';
import { isChanged, Keys } from '@progress/kendo-angular-common';
import { KendoButtonService } from '../button/button.service';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isPresent } from '../util';
import { PreventableEvent } from '../preventable-event';
import { packageMetadata } from '../package-metadata';
import { validatePackage } from '@progress/kendo-licensing';
import * as i0 from "@angular/core";
import * as i1 from "../button/button.service";
import * as i2 from "@progress/kendo-angular-l10n";
/**
 * @hidden
 */
const tabindex = 'tabindex';
/**
 * Represents the Kendo UI ButtonGroup component for Angular.
 */
export class ButtonGroupComponent {
    constructor(service, localization, element) {
        this.service = service;
        this.element = element;
        /**
         * The selection mode of the ButtonGroup.
         * @default 'multiple'
         */
        this.selection = 'multiple';
        /**
         * When this option is set to `true` (default), the component is a single tab-stop,
         * and focus is moved through the inner buttons via the arrow keys.
         *
         * When the option is set to `false`, the inner buttons are part of the natural tab sequence of the page.
         *
         * @default true
         */
        this.navigable = true;
        /**
         * Fires every time keyboard navigation occurs.
         */
        this.navigate = new EventEmitter();
        this._tabIndex = 0;
        this.currentTabIndex = 0;
        this.subs = new Subscription();
        this.role = 'group';
        this.focusHandler = () => {
            this.currentTabIndex = -1;
            const focusedIndex = this.buttons.toArray().findIndex(current => current.element.tabIndex !== -1);
            const index = focusedIndex === -1 ? 0 : focusedIndex;
            this.focus(this.buttons.filter((_current, i) => {
                return i === index;
            }));
        };
        validatePackage(packageMetadata);
        this.subs.add(localization.changes.subscribe(({ rtl }) => this.direction = rtl ? 'rtl' : 'ltr'));
    }
    /**
     * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
     */
    set tabIndex(value) {
        this._tabIndex = value;
        this.currentTabIndex = value;
    }
    get tabIndex() {
        return this._tabIndex;
    }
    get wrapperClass() {
        return true;
    }
    get disabledClass() {
        return this.disabled;
    }
    get stretchedClass() {
        return !!this.width;
    }
    get dir() {
        return this.direction;
    }
    get ariaDisabled() {
        return this.disabled;
    }
    get wrapperWidth() {
        return this.width;
    }
    get wrapperTabIndex() {
        return this.disabled ? undefined : this.navigable ? this.currentTabIndex : undefined;
    }
    ngOnInit() {
        this.subs.add(this.service.buttonClicked$.subscribe((button) => {
            let newSelectionValue;
            if (this.isSelectionSingle()) {
                newSelectionValue = true;
                this.deactivate(this.buttons.filter(current => current !== button));
            }
            else {
                if (this.navigable) {
                    this.defocus(this.buttons.toArray());
                }
                newSelectionValue = !button.selected;
            }
            if (button.togglable) {
                button.setSelected(newSelectionValue);
            }
            if (this.navigable) {
                button.setAttribute(tabindex, '0');
            }
        }));
        this.handleSubs('focus', () => this.navigable, this.focusHandler);
        this.handleSubs('keydown', () => this.navigable && !this.disabled, (event) => this.navigateFocus(event));
        this.handleSubs('focusout', (event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement, () => {
            this.defocus(this.buttons.toArray());
            this.currentTabIndex = this.tabIndex;
        });
        this.subs.add(fromEvent(this.element.nativeElement, 'focusout')
            .pipe(filter((event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement))
            .subscribe(() => {
            this.defocus(this.buttons.toArray());
            this.currentTabIndex = this.tabIndex;
        }));
    }
    ngOnChanges(changes) {
        if (isChanged('disabled', changes)) {
            this.buttons.forEach((button) => {
                if (isPresent(this.disabled)) {
                    button.disabled = this.disabled;
                }
            });
        }
        if (isChanged('navigable', changes)) {
            if (changes.navigable.currentValue) {
                this.setButtonsTabIndex();
                this.currentTabIndex = 0;
            }
            else {
                this.currentTabIndex = -1;
                this.buttons.forEach((button) => button.setAttribute(tabindex, '0'));
            }
        }
    }
    ngAfterContentInit() {
        if (!this.navigable) {
            return;
        }
        this.setButtonsTabIndex();
    }
    ngAfterViewChecked() {
        if (this.buttons.length) {
            this.buttons.first.renderer.addClass(this.buttons.first.element, 'k-group-start');
            this.buttons.last.renderer.addClass(this.buttons.last.element, 'k-group-end');
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    ngAfterContentChecked() {
        this.verifySettings();
    }
    navigateFocus(event) {
        let focusedIndex = this.buttons.toArray().findIndex(current => current.element.tabIndex !== -1);
        const firstIndex = 0;
        const lastIndex = this.buttons.length - 1;
        const eventArgs = new PreventableEvent();
        if (event.keyCode === Keys.ArrowRight && focusedIndex < lastIndex) {
            this.navigate.emit(eventArgs);
            if (!eventArgs.isDefaultPrevented()) {
                this.defocus(this.buttons.toArray());
                this.focus(this.buttons.filter((_current, index) => {
                    return index === focusedIndex + 1;
                }));
            }
        }
        if (event.keyCode === Keys.ArrowLeft && focusedIndex > firstIndex) {
            this.navigate.emit(eventArgs);
            if (!eventArgs.isDefaultPrevented()) {
                this.defocus(this.buttons.toArray());
                this.focus(this.buttons.filter((_current, index) => {
                    return index === focusedIndex - 1;
                }));
            }
        }
    }
    deactivate(buttons) {
        buttons.forEach((button) => {
            button.setSelected(false);
            if (this.navigable) {
                button.setAttribute(tabindex, '-1');
            }
        });
    }
    activate(buttons) {
        buttons.forEach((button) => {
            button.setSelected(true);
            if (this.navigable) {
                button.setAttribute(tabindex, '0');
            }
            button.focus();
        });
    }
    defocus(buttons) {
        buttons.forEach((button) => {
            button.setAttribute(tabindex, '-1');
        });
    }
    focus(buttons) {
        buttons.forEach((button) => {
            button.setAttribute(tabindex, '0');
            button.focus();
        });
    }
    verifySettings() {
        if (isDevMode()) {
            if (this.isSelectionSingle() && this.buttons.filter(button => button.selected).length > 1) {
                throw new Error('Having multiple selected buttons with single selection mode is not supported');
            }
        }
    }
    isSelectionSingle() {
        return this.selection === 'single';
    }
    setButtonsTabIndex() {
        this.buttons.forEach((button) => {
            if (button.selected) {
                button.setAttribute(tabindex, '0');
            }
            else {
                button.setAttribute(tabindex, '-1');
            }
        });
    }
    handleSubs(eventName, predicate, handler) {
        this.subs.add(fromEvent(this.element.nativeElement, eventName)
            .pipe(filter(predicate))
            .subscribe(handler));
    }
}
ButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupComponent, deps: [{ token: i1.KendoButtonService }, { token: i2.LocalizationService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ButtonGroupComponent, selector: "kendo-buttongroup", inputs: { disabled: "disabled", selection: "selection", width: "width", tabIndex: "tabIndex", navigable: "navigable" }, outputs: { navigate: "navigate" }, host: { properties: { "class.k-button-group": "this.wrapperClass", "class.k-disabled": "this.disabledClass", "class.k-button-group-stretched": "this.stretchedClass", "attr.role": "this.role", "attr.dir": "this.dir", "attr.aria-disabled": "this.ariaDisabled", "style.width": "this.wrapperWidth", "attr.tabindex": "this.wrapperTabIndex" } }, providers: [
        KendoButtonService,
        LocalizationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.buttongroup'
        }
    ], queries: [{ propertyName: "buttons", predicate: ButtonDirective }], exportAs: ["kendoButtonGroup"], usesOnChanges: true, ngImport: i0, template: `
        <ng-content select="[kendoButton]"></ng-content>
    `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{
                    exportAs: 'kendoButtonGroup',
                    providers: [
                        KendoButtonService,
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.buttongroup'
                        }
                    ],
                    selector: 'kendo-buttongroup',
                    template: `
        <ng-content select="[kendoButton]"></ng-content>
    `
                }]
        }], ctorParameters: function () { return [{ type: i1.KendoButtonService }, { type: i2.LocalizationService }, { type: i0.ElementRef }]; }, propDecorators: { disabled: [{
                type: Input,
                args: ['disabled']
            }], selection: [{
                type: Input,
                args: ['selection']
            }], width: [{
                type: Input,
                args: ['width']
            }], tabIndex: [{
                type: Input
            }], navigable: [{
                type: Input
            }], navigate: [{
                type: Output
            }], buttons: [{
                type: ContentChildren,
                args: [ButtonDirective]
            }], wrapperClass: [{
                type: HostBinding,
                args: ['class.k-button-group']
            }], disabledClass: [{
                type: HostBinding,
                args: ['class.k-disabled']
            }], stretchedClass: [{
                type: HostBinding,
                args: ['class.k-button-group-stretched']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], dir: [{
                type: HostBinding,
                args: ['attr.dir']
            }], ariaDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], wrapperWidth: [{
                type: HostBinding,
                args: ['style.width']
            }], wrapperTabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }] } });
