/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Optional, Input, Output, HostBinding, HostListener, isDevMode, Component, ContentChildren, NgModule, InjectionToken, Inject, forwardRef, ElementRef, ViewContainerRef, ContentChild, ViewChild } from '@angular/core';
import * as i8 from '@progress/kendo-angular-common';
import { isDocumentAvailable, Keys, isChanged, hasObservers, guid, EventsModule } from '@progress/kendo-angular-common';
import * as i1 from '@progress/kendo-angular-l10n';
import { LocalizationService, L10N_PREFIX, ComponentMessages } from '@progress/kendo-angular-l10n';
import { Subject, Subscription, fromEvent, merge } from 'rxjs';
import { take, filter, tap } from 'rxjs/operators';
import { validatePackage } from '@progress/kendo-licensing';
import { detectDesktopBrowser, detectMobileOS } from '@progress/kendo-common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@progress/kendo-angular-popup';
import { PopupModule } from '@progress/kendo-angular-popup';
import * as i4 from '@angular/animations';
import { sequence, query, style, stagger, animate } from '@angular/animations';

/**
 * @hidden
 */
const packageMetadata = {
    name: '@progress/kendo-angular-buttons',
    productName: 'Kendo UI for Angular',
    productCodes: ['KENDOUIANGULAR', 'KENDOUICOMPLETE'],
    publishDate: 1668698044,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning'
};

/**
 * @hidden
 */
const resolvedPromise = Promise.resolve(null);
/**
 * @hidden
 */
const isPresent = (value) => value !== null && value !== undefined;
/**
 * @hidden
 */
const tick = (f) => (resolvedPromise.then(f));
/**
 * @hidden
 */
function isDocumentNode(container) {
    return container.nodeType === 9;
}
/**
 * @hidden
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    const matches = Element.prototype.matches ?
        (el, sel) => el.matches(sel)
        : (el, sel) => el.msMatchesSelector(sel);
    let node = element;
    while (node && !isDocumentNode(node)) {
        if (matches(node, selector)) {
            return node;
        }
        node = node.parentNode;
    }
}
/**
 * @hidden
 */
const replaceMessagePlaceholder = (message, name, value) => message.replace(new RegExp(`\{\\s*${name}\\s*\}`, 'g'), value);
/**
 * @hidden
 */
const SIZES = {
    small: 'sm',
    medium: 'md',
    large: 'lg'
};
const ROUNDNESS = {
    small: 'sm',
    medium: 'md',
    large: 'lg',
    full: 'full'
};
/**
 * @hidden
 *
 * Returns the styling classes to be added and removed
 */
const getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
    switch (stylingOption) {
        case 'size':
            return {
                toRemove: `k-${componentType}-${SIZES[previousValue]}`,
                toAdd: newValue !== 'none' ? `k-${componentType}-${SIZES[newValue]}` : ''
            };
        case 'rounded':
            return {
                toRemove: `k-rounded-${ROUNDNESS[previousValue]}`,
                toAdd: newValue !== 'none' ? `k-rounded-${ROUNDNESS[newValue]}` : ''
            };
        case 'fillMode':
            return {
                toRemove: `k-${componentType}-${previousValue}`,
                toAdd: newValue !== 'none' ? `k-${componentType}-${newValue}` : ''
            };
        default:
            break;
    }
};
/**
 * @hidden
 *
 * Returns the themeColor classes to be added and removed
 */
const getThemeColorClasses = (componentType, prevFillMode, fillMode, previousValue, newValue) => {
    return {
        toRemove: `k-${componentType}-${prevFillMode}-${previousValue}`,
        toAdd: newValue !== 'none' ? `k-${componentType}-${fillMode}-${newValue}` : ''
    };
};
/**
 * @hidden
 *
 * Returns true if the used browser is Firefox.
 */
const isFirefox = (userAgent) => {
    const desktopBrowser = detectDesktopBrowser(userAgent);
    const mobileOS = detectMobileOS(userAgent);
    return (desktopBrowser && desktopBrowser.mozilla) || (mobileOS && mobileOS.browser === 'firefox');
};

/**
 * @hidden
 */
class KendoButtonService {
    constructor() {
        this.buttonClicked = new Subject();
        this.buttonClicked$ = this.buttonClicked.asObservable();
    }
    click(button) {
        this.buttonClicked.next(button);
    }
}
KendoButtonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: KendoButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
KendoButtonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: KendoButtonService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: KendoButtonService, decorators: [{
            type: Injectable
        }] });

const SPAN_TAG_NAME = 'SPAN';
const DEFAULT_ROUNDED$2 = 'medium';
const DEFAULT_SIZE$1 = 'medium';
const DEFAULT_THEME_COLOR$1 = 'base';
const DEFAULT_FILL_MODE$2 = 'solid';
/**
 * Represents the Kendo UI Button component for Angular.
 */
class ButtonDirective {
    constructor(element, renderer, service, localization, ngZone) {
        this.renderer = renderer;
        this.service = service;
        this.ngZone = ngZone;
        /**
         * Provides visual styling that indicates if the Button is active.
         * By default, `toggleable` is set to `false`.
         */
        this.toggleable = false;
        /**
         * @hidden
         */
        this.role = 'button';
        /**
         * Fires each time the selected state of a toggleable button is changed.
         *
         * The event argument is the new selected state (boolean).
         */
        this.selectedChange = new EventEmitter();
        /**
         * Fires each time the user clicks the button.
         */
        this.click = new EventEmitter();
        this.isDisabled = false;
        this.isIcon = false;
        this.isIconClass = false;
        this._size = DEFAULT_SIZE$1;
        this._rounded = DEFAULT_ROUNDED$2;
        this._fillMode = DEFAULT_FILL_MODE$2;
        this._themeColor = DEFAULT_THEME_COLOR$1;
        this._focused = false;
        this.subs = new Subscription();
        validatePackage(packageMetadata);
        this.direction = localization.rtl ? 'rtl' : 'ltr';
        this.subs.add(localization.changes.subscribe(({ rtl }) => (this.direction = rtl ? 'rtl' : 'ltr')));
        this.element = element.nativeElement;
    }
    /**
     * Backwards-compatible alias
     *
     * @hidden
     */
    get togglable() {
        return this.toggleable;
    }
    /**
     * @hidden
     */
    set togglable(value) {
        this.toggleable = value;
    }
    /**
     * Sets the selected state of the Button.
     */
    get selected() {
        return this._selected || false;
    }
    set selected(value) {
        this._selected = value;
    }
    /**
     * @hidden
     */
    set tabIndex(index) {
        this.element.tabIndex = index;
    }
    get tabIndex() {
        return this.element.tabIndex;
    }
    /**
     * Defines the name for an existing icon in a Kendo UI theme.
     * The icon is rendered inside the Button by a `span.k-icon` element.
     */
    set icon(icon) {
        if (icon) {
            this.iconSetter(icon, () => {
                this.isIcon = true;
                const classes = 'k-button-icon k-icon k-i-' + icon;
                this.addIcon(classes);
            });
        }
        else {
            this.isIcon = false;
            this.updateIconNode();
        }
    }
    /**
     * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
     * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
     */
    set iconClass(iconClassName) {
        if (iconClassName) {
            this.iconSetter(iconClassName, () => {
                this.isIconClass = true;
                const classes = 'k-button-icon ' + iconClassName;
                this.addIcon(classes);
            });
        }
        else {
            this.isIconClass = false;
            this.updateIconNode();
        }
    }
    /**
     * Defines a URL which is used for an `img` element inside the Button.
     * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
     */
    set imageUrl(imageUrl) {
        if (imageUrl) {
            this.iconSetter(imageUrl, this.addImgIcon.bind(this));
        }
        else {
            this.removeImageNode();
        }
    }
    /**
     * If set to `true`, it disables the Button.
     */
    set disabled(disabled) {
        //Required, because in FF focused buttons are not blurred on disabled
        if (disabled && isDocumentAvailable() && isFirefox(navigator.userAgent)) {
            this.blur();
        }
        this.isDisabled = disabled;
        this.renderer.setProperty(this.element, 'disabled', disabled);
    }
    get disabled() {
        return this.isDisabled;
    }
    /**
     * The size property specifies the padding of the Button
     * ([see example]({% slug appearance_button %}#toc-size)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    set size(size) {
        const newSize = size ? size : DEFAULT_SIZE$1;
        this.handleClasses(newSize, 'size');
        this._size = newSize;
    }
    get size() {
        return this._size;
    }
    /**
     * The rounded property specifies the border radius of the Button
     * ([see example]({% slug appearance_button %}#toc-rounded)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `full`
     * * `none`
     */
    set rounded(rounded) {
        const newRounded = rounded ? rounded : DEFAULT_ROUNDED$2;
        this.handleClasses(newRounded, 'rounded');
        this._rounded = newRounded;
    }
    get rounded() {
        return this._rounded;
    }
    /**
     * The fillMode property specifies the background and border styles of the Button
     * ([see example]({% slug appearance_button %}#toc-fillMode)).
     *
     * The possible values are:
     * * `flat`
     * * `solid` (default)
     * * `outline`
     * * `clear`
     * * `link`
     * * `none`
     */
    set fillMode(fillMode) {
        const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$2;
        this.handleClasses(newFillMode, 'fillMode');
        this._fillMode = newFillMode;
    }
    get fillMode() {
        return this._fillMode;
    }
    /**
     * The Button allows you to specify predefined theme colors.
     * The theme color will be applied as a background and border color while also amending the text color accordingly
     * ([see example]({% slug appearance_button %}#toc-themeColor)).
     *
     * The possible values are:
     * * `base` (default)
     * * `primary`
     * * `secondary`
     * * `tertiary`
     * * `info`
     * * `success`
     * * `warning`
     * * `error`
     * * `dark`
     * * `light`
     * * `inverse`
     * * `none`
     */
    set themeColor(themeColor) {
        const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$1;
        this.handleThemeColor(newThemeColor);
        this._themeColor = newThemeColor;
    }
    get themeColor() {
        return this._themeColor;
    }
    set isFocused(isFocused) {
        this.toggleClass('k-focus', isFocused);
        this._focused = isFocused;
    }
    get isFocused() {
        return this._focused;
    }
    get classButton() {
        return true;
    }
    get isToggleable() {
        return this.toggleable;
    }
    get roleSetter() {
        return this.role;
    }
    get classDisabled() {
        return this.isDisabled;
    }
    get classActive() {
        return this.selected;
    }
    get getDirection() {
        return this.direction;
    }
    /**
     * @hidden
     */
    onFocus() {
        this.isFocused = true;
    }
    /**
     * @hidden
     */
    onBlur() {
        this.isFocused = false;
    }
    /**
     * @hidden
     */
    set primary(value) {
        this.themeColor = value ? 'primary' : 'base';
    }
    /**
     * @hidden
     */
    set look(value) {
        switch (value) {
            case 'default':
                this.fillMode = 'solid';
                break;
            default:
                this.fillMode = value;
                break;
        }
    }
    ngOnInit() {
        const isSpan = this.element.tagName === SPAN_TAG_NAME;
        this.addTextSpan();
        if (!this.element.hasAttribute('role') && this.togglable) {
            this.toggleAriaPressed(this.toggleable);
        }
        if (this.role) {
            this.setAttribute('role', this.role);
        }
        this.ngZone.runOutsideAngular(() => {
            this.subs.add(this.renderer.listen(this.element, 'click', this._onButtonClick.bind(this)));
            this.subs.add(this.renderer.listen(this.element, 'keydown', (event) => {
                const isSpaceOrEnter = event.keyCode === Keys.Space || event.keyCode === Keys.Enter;
                if (isSpan && isSpaceOrEnter) {
                    this.click.emit(event);
                    this._onButtonClick();
                }
            }));
        });
    }
    ngOnChanges(change) {
        if (isChanged('togglable', change) || isChanged('toggleable', change)) {
            this.toggleAriaPressed(this.toggleable);
        }
    }
    ngAfterViewInit() {
        const stylingOptions = ['size', 'rounded', 'fillMode'];
        stylingOptions.forEach(input => {
            this.handleClasses(this[input], input);
        });
    }
    ngAfterViewChecked() {
        this.setIconTextClasses();
    }
    ngOnDestroy() {
        this.imageNode = null;
        this.iconNode = null;
        this.iconSpanNode = null;
        this.subs.unsubscribe();
        clearTimeout(this.deferTimeout);
    }
    /**
     * Focuses the Button component.
     */
    focus() {
        if (isDocumentAvailable()) {
            this.element.focus();
            this.isFocused = true;
        }
    }
    /**
     * Blurs the Button component.
     */
    blur() {
        if (isDocumentAvailable()) {
            this.element.blur();
            this.isFocused = false;
        }
    }
    /**
     * @hidden
     */
    setAttribute(attribute, value) {
        this.renderer.setAttribute(this.element, attribute, value);
    }
    /**
     * @hidden
     */
    removeAttribute(attribute) {
        this.renderer.removeAttribute(this.element, attribute);
    }
    /**
     * @hidden
     *
     * Internal setter that triggers selectedChange
     */
    setSelected(value) {
        const changed = this.selected !== value;
        this.selected = value;
        this.setAttribute('aria-pressed', this.selected.toString());
        this.toggleClass('k-selected', this.selected);
        if (changed && hasObservers(this.selectedChange)) {
            this.ngZone.run(() => {
                this.selectedChange.emit(value);
            });
        }
    }
    toggleAriaPressed(shouldSet) {
        if (!isDocumentAvailable()) {
            return;
        }
        if (shouldSet) {
            this.setAttribute('aria-pressed', this.selected.toString());
        }
        else {
            this.removeAttribute('aria-pressed');
        }
    }
    hasText() {
        return isDocumentAvailable() && this.element.textContent.trim().length > 0;
    }
    addImgIcon(imageUrl) {
        let renderer = this.renderer;
        if (!this.iconSpanNode) {
            this.iconSpanNode = renderer.createElement('span');
            renderer.setProperty(this.iconSpanNode, 'className', 'k-button-icon k-icon');
        }
        if (this.imageNode) {
            renderer.setProperty(this.imageNode, 'src', imageUrl);
        }
        else if (isDocumentAvailable()) {
            this.imageNode = renderer.createElement('img');
            renderer.setProperty(this.imageNode, 'src', imageUrl);
            renderer.setProperty(this.imageNode, 'className', 'k-image');
            renderer.setAttribute(this.imageNode, 'role', 'presentation');
        }
        this.iconSpanNode.appendChild(this.imageNode);
        this.prependChild(this.iconSpanNode);
    }
    addIcon(classNames) {
        let renderer = this.renderer;
        if (this.iconNode) {
            renderer.setProperty(this.iconNode, 'className', classNames);
        }
        else if (isDocumentAvailable()) {
            this.iconNode = renderer.createElement('span');
            renderer.setProperty(this.iconNode, 'className', classNames);
            renderer.setAttribute(this.iconNode, 'role', 'presentation');
            this.prependChild(this.iconNode);
        }
    }
    addTextSpan() {
        this.ngZone.onStable.pipe(take(1)).subscribe(() => {
            if (isDocumentAvailable() && this.hasText()) {
                const span = this.renderer.createElement('span');
                this.renderer.addClass(span, 'k-button-text');
                const buttonContentNodes = Array.from(this.element.childNodes);
                buttonContentNodes.forEach(node => this.renderer.appendChild(span, node));
                this.renderer.appendChild(this.element, span);
            }
        });
    }
    prependChild(node) {
        this.defer(() => {
            if (this.renderer && node !== this.element.firstChild) {
                this.renderer.insertBefore(this.element, node, this.element.firstChild);
            }
        });
    }
    defer(callback) {
        this.ngZone.runOutsideAngular(() => {
            this.deferTimeout = setTimeout(callback, 0);
        });
    }
    iconSetter(icon, insertIcon) {
        if (icon) {
            insertIcon(icon);
        }
        this.setIconTextClasses();
    }
    removeImageNode() {
        if (this.imageNode && this.renderer.parentNode(this.imageNode)) {
            this.renderer.removeChild(this.element, this.imageNode);
            this.renderer.removeChild(this.element, this.iconSpanNode);
            this.imageNode = null;
            this.iconSpanNode = null;
        }
    }
    removeIconNode() {
        if (this.iconNode && this.renderer.parentNode(this.iconNode)) {
            this.renderer.removeChild(this.element, this.iconNode);
            this.iconNode = null;
        }
        if (this.iconSpanNode) {
            this.renderer.removeChild(this.element, this.iconSpanNode);
            this.iconSpanNode = null;
        }
    }
    updateIconNode() {
        if (!this.isIcon && !this.isIconClass) {
            this.removeIconNode();
        }
    }
    setIconTextClasses() {
        const hasIcon = this.isIcon || this.isIconClass || this.imageNode;
        this.toggleClass('k-icon-button', hasIcon && !this.hasText());
    }
    toggleClass(className, add) {
        if (add) {
            this.renderer.addClass(this.element, className);
        }
        else {
            this.renderer.removeClass(this.element, className);
        }
    }
    _onButtonClick() {
        if (!this.disabled && this.service) {
            this.ngZone.run(() => {
                this.service.click(this);
            });
        }
        if (this.togglable && !this.service) {
            this.setSelected(!this.selected);
        }
    }
    handleClasses(value, input) {
        const elem = this.element;
        const classes = getStylingClasses('button', input, this[input], value);
        if (input === 'fillMode') {
            this.handleThemeColor(this.themeColor, this[input], value);
        }
        if (classes.toRemove) {
            this.renderer.removeClass(elem, classes.toRemove);
        }
        if (classes.toAdd) {
            this.renderer.addClass(elem, classes.toAdd);
        }
    }
    handleThemeColor(value, prevFillMode, fillMode) {
        const elem = this.element;
        const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
        const addFillMode = fillMode ? fillMode : this.fillMode;
        const themeColorClass = getThemeColorClasses('button', removeFillMode, addFillMode, this.themeColor, value);
        this.renderer.removeClass(elem, themeColorClass.toRemove);
        if (addFillMode !== 'none' && fillMode !== 'none') {
            if (themeColorClass.toAdd) {
                this.renderer.addClass(elem, themeColorClass.toAdd);
            }
        }
    }
}
ButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: KendoButtonService, optional: true }, { token: i1.LocalizationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
ButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ButtonDirective, selector: "button[kendoButton], span[kendoButton]", inputs: { toggleable: "toggleable", togglable: "togglable", selected: "selected", tabIndex: "tabIndex", icon: "icon", iconClass: "iconClass", imageUrl: "imageUrl", disabled: "disabled", size: "size", rounded: "rounded", fillMode: "fillMode", themeColor: "themeColor", role: "role", primary: "primary", look: "look" }, outputs: { selectedChange: "selectedChange", click: "click" }, host: { listeners: { "focus": "onFocus()", "blur": "onBlur()" }, properties: { "class.k-button": "this.classButton", "class.k-toggle-button": "this.isToggleable", "attr.role": "this.roleSetter", "attr.aria-disabled": "this.classDisabled", "class.k-disabled": "this.classDisabled", "class.k-selected": "this.classActive", "attr.dir": "this.getDirection" } }, providers: [
        LocalizationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.button'
        }
    ], exportAs: ["kendoButton"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    exportAs: 'kendoButton',
                    providers: [
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.button'
                        }
                    ],
                    selector: 'button[kendoButton], span[kendoButton]' // eslint-disable-line
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: KendoButtonService, decorators: [{
                    type: Optional
                }] }, { type: i1.LocalizationService }, { type: i0.NgZone }]; }, propDecorators: { toggleable: [{
                type: Input
            }], togglable: [{
                type: Input
            }], selected: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], imageUrl: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], rounded: [{
                type: Input
            }], fillMode: [{
                type: Input
            }], themeColor: [{
                type: Input
            }], role: [{
                type: Input
            }], selectedChange: [{
                type: Output
            }], click: [{
                type: Output
            }], classButton: [{
                type: HostBinding,
                args: ['class.k-button']
            }], isToggleable: [{
                type: HostBinding,
                args: ['class.k-toggle-button']
            }], roleSetter: [{
                type: HostBinding,
                args: ['attr.role']
            }], classDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }, {
                type: HostBinding,
                args: ['class.k-disabled']
            }], classActive: [{
                type: HostBinding,
                args: ['class.k-selected']
            }], getDirection: [{
                type: HostBinding,
                args: ['attr.dir']
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }], primary: [{
                type: Input
            }], look: [{
                type: Input
            }] } });

/**
 * @hidden
 */
class PreventableEvent {
    constructor() {
        this.prevented = false;
    }
    /**
     * Prevents the default action for a specified event.
     * In this way, the source component suppresses the built-in behavior that follows the event.
     */
    preventDefault() {
        this.prevented = true;
    }
    /**
     * If the event is prevented by any of its subscribers, returns `true`.
     *
     * @returns `true` if the default action was prevented. Otherwise, returns `false`.
     */
    isDefaultPrevented() {
        return this.prevented;
    }
}

/**
 * @hidden
 */
const tabindex = 'tabindex';
/**
 * Represents the Kendo UI ButtonGroup component for Angular.
 */
class ButtonGroupComponent {
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
ButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupComponent, deps: [{ token: KendoButtonService }, { token: i1.LocalizationService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: function () { return [{ type: KendoButtonService }, { type: i1.LocalizationService }, { type: i0.ElementRef }]; }, propDecorators: { disabled: [{
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

/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmodules'])
 * definition for the Button directive.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Button module
 * import { ButtonModule } from '@progress/kendo-angular-buttons';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, ButtonModule], // import Button module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonModule, declarations: [ButtonDirective], exports: [ButtonDirective] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonDirective],
                    exports: [ButtonDirective]
                }]
        }] });

/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `ButtonGroupComponent`&mdash;The ButtonGroupComponent component class.
 */
class ButtonGroupModule {
}
ButtonGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupModule, declarations: [ButtonGroupComponent], imports: [CommonModule, ButtonModule], exports: [ButtonGroupComponent] });
ButtonGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupModule, imports: [[CommonModule, ButtonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonGroupComponent],
                    exports: [ButtonGroupComponent],
                    imports: [CommonModule, ButtonModule]
                }]
        }] });

/**
 * @hidden
 */
class FocusService {
    constructor() {
        this.onFocus = new EventEmitter();
    }
    isFocused(index) {
        return index === this.focused;
    }
    focus(index) {
        if (this.isFocused(index)) {
            return;
        }
        this.focused = index;
        this.onFocus.emit(index);
    }
    resetFocus() {
        this.focused = -1;
    }
    get focused() {
        return this.focusedIndex;
    }
    set focused(index) {
        this.focusedIndex = index;
        this.onFocus.emit(index);
    }
}
FocusService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FocusService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusService, decorators: [{
            type: Injectable
        }] });

/**
 * @hidden
 */
class FocusableDirective {
    constructor(focusService, elementRef, renderer) {
        this.focusService = focusService;
        this.renderer = renderer;
        this.subs = new Subscription();
        this.element = elementRef.nativeElement;
        this.subscribeEvents();
    }
    ngOnInit() {
        if (this.index === this.focusService.focused) {
            this.renderer.addClass(this.element, 'k-focus');
        }
        else {
            this.renderer.removeClass(this.element, 'k-focus');
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    subscribeEvents() {
        if (!isDocumentAvailable()) {
            return;
        }
        this.subs.add(this.focusService.onFocus.subscribe((index) => {
            if (this.index === index) {
                this.renderer.addClass(this.element, 'k-focus');
                this.element.focus();
            }
            else {
                this.renderer.removeClass(this.element, 'k-focus');
            }
        }));
    }
}
FocusableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusableDirective, deps: [{ token: FocusService }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
FocusableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: FocusableDirective, selector: "[kendoButtonFocusable]", inputs: { index: "index" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FocusableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoButtonFocusable]'
                }]
        }], ctorParameters: function () { return [{ type: FocusService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { index: [{
                type: Input
            }] } });

/**
 * @hidden
 */
class TemplateContextDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    set templateContext(context) {
        if (this.insertedViewRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
            this.insertedViewRef = undefined;
        }
        if (context.templateRef) {
            this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
        }
    }
}
TemplateContextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TemplateContextDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
TemplateContextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: TemplateContextDirective, selector: "[templateContext]", inputs: { templateContext: "templateContext" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TemplateContextDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[templateContext]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { templateContext: [{
                type: Input
            }] } });

/**
 * @hidden
 */
class ListComponent {
    constructor() {
        this.onItemClick = new EventEmitter();
        this.onItemBlur = new EventEmitter();
        this.sizeClass = '';
        validatePackage(packageMetadata);
    }
    set size(size) {
        if (size) {
            this.sizeClass = `k-menu-group-${SIZES[size]}`;
        }
        else {
            this.sizeClass = '';
        }
    }
    getText(dataItem) {
        if (dataItem) {
            return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
        }
        return undefined;
    }
    getIconClasses(dataItem) {
        const icon = dataItem.icon ? 'k-icon k-i-' + dataItem.icon : undefined;
        const classes = {};
        classes[icon || dataItem.iconClass] = true;
        return classes;
    }
    onClick(index) {
        this.onItemClick.emit(index);
    }
    onBlur() {
        this.onItemBlur.emit();
    }
}
ListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ListComponent, selector: "kendo-button-list", inputs: { data: "data", textField: "textField", itemTemplate: "itemTemplate", size: "size" }, outputs: { onItemClick: "onItemClick", onItemBlur: "onItemBlur" }, ngImport: i0, template: `
        <ul class="k-group k-menu-group k-reset" [ngClass]="sizeClass" unselectable="on" role="menu">
            <li role="menuitem"
                unselectable="on"
                kendoButtonFocusable
                *ngFor="let dataItem of data; let index = index;"
                [index]="index"
                tabindex="-1"
                class="k-item k-menu-item"
                (click)="$event.stopImmediatePropagation(); onClick(index);"
                (blur)="onBlur()"
                [attr.aria-disabled]="dataItem.disabled ? true : false">
                <ng-template [ngIf]="itemTemplate?.templateRef">
                    <span class="k-link k-menu-link" [class.k-disabled]="dataItem.disabled">
                        <ng-template [templateContext]="{templateRef: itemTemplate?.templateRef, $implicit: dataItem}"></ng-template>
                    </span>
                </ng-template>
                <ng-template [ngIf]="!itemTemplate?.templateRef">
                    <span class="k-link k-menu-link" [class.k-disabled]="dataItem.disabled">
                        <span
                            *ngIf="dataItem.icon || dataItem.iconClass"
                            [ngClass]="getIconClasses(dataItem)"
                        ></span>
                        <img
                            *ngIf="dataItem.imageUrl"
                            class="k-image"
                            [src]="dataItem.imageUrl"
                            alt=""
                        >
                        <span *ngIf="getText(dataItem)" class="k-menu-link-text">
                        {{ getText(dataItem) }}
                        </span>
                    </span>
                </ng-template>
            </li>
        </ul>
      `, isInline: true, directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: FocusableDirective, selector: "[kendoButtonFocusable]", inputs: ["index"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: TemplateContextDirective, selector: "[templateContext]", inputs: ["templateContext"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'kendo-button-list',
                    template: `
        <ul class="k-group k-menu-group k-reset" [ngClass]="sizeClass" unselectable="on" role="menu">
            <li role="menuitem"
                unselectable="on"
                kendoButtonFocusable
                *ngFor="let dataItem of data; let index = index;"
                [index]="index"
                tabindex="-1"
                class="k-item k-menu-item"
                (click)="$event.stopImmediatePropagation(); onClick(index);"
                (blur)="onBlur()"
                [attr.aria-disabled]="dataItem.disabled ? true : false">
                <ng-template [ngIf]="itemTemplate?.templateRef">
                    <span class="k-link k-menu-link" [class.k-disabled]="dataItem.disabled">
                        <ng-template [templateContext]="{templateRef: itemTemplate?.templateRef, $implicit: dataItem}"></ng-template>
                    </span>
                </ng-template>
                <ng-template [ngIf]="!itemTemplate?.templateRef">
                    <span class="k-link k-menu-link" [class.k-disabled]="dataItem.disabled">
                        <span
                            *ngIf="dataItem.icon || dataItem.iconClass"
                            [ngClass]="getIconClasses(dataItem)"
                        ></span>
                        <img
                            *ngIf="dataItem.imageUrl"
                            class="k-image"
                            [src]="dataItem.imageUrl"
                            alt=""
                        >
                        <span *ngIf="getText(dataItem)" class="k-menu-link-text">
                        {{ getText(dataItem) }}
                        </span>
                    </span>
                </ng-template>
            </li>
        </ul>
      `
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { data: [{
                type: Input
            }], textField: [{
                type: Input
            }], itemTemplate: [{
                type: Input
            }], onItemClick: [{
                type: Output
            }], onItemBlur: [{
                type: Output
            }], size: [{
                type: Input
            }] } });

/**
 * Used for rendering the list item content.
 *
 * To define the item template, nest a `<ng-template>` tag with the `kendo<ComponentName>ItemTemplate` directive inside the component tag.
 *
 * For the DropDownButton, use the `kendoDropDownButtonItemTemplate` directive.
 * For the SplitButton, use the `kendoSplitButtonItemTemplate` directive.
 *
 * The template context is set to the current component. To get a reference to the current data item, use the `let-dataItem` directive.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="listItems">
 *    <ng-template kendoSplitButtonItemTemplate let-dataItem>
 *      <span>{{dataItem}} option</span>
 *    </ng-template>
 *  </kendo-splitbutton>
 *  <kendo-dropdownbutton [data]="listItems">
 *    <ng-template kendoDropDownButtonItemTemplate let-dataItem>
 *      <span>{{dataItem}} option</span>
 *    </ng-template>
 *  </kendo-dropdownbutton>
 * `
 * })
 * class AppComponent {
 *   public listItems: Array<any> = [{
 *      text: 'item1',
 *      icon: 'arrow-rotate-cw',
 *      disabled: false,
 *      click: (dataItem: any) => {
 *          //action
 *      }
 *  }, {
 *      text: 'item2',
 *      icon: 'arrow-rotate-cw',
 *      disabled: false,
 *      click: (dataItem: any) => {
 *          //action
 *      }
 *  }]
 * }
 * ```
 *
 * For more examples, refer to the article on the [DropDownList templates]({% slug overview_ddl %}#templates).
 */
class ButtonItemTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
ButtonItemTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonItemTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
ButtonItemTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ButtonItemTemplateDirective, selector: "[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonItemTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

const EXPORTED_DIRECTIVES = [
    ListComponent,
    FocusableDirective,
    ButtonItemTemplateDirective,
    TemplateContextDirective
];
/**
 * @hidden
 */
class ListModule {
}
ListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListModule, declarations: [ListComponent,
        FocusableDirective,
        ButtonItemTemplateDirective,
        TemplateContextDirective], imports: [CommonModule], exports: [ListComponent,
        FocusableDirective,
        ButtonItemTemplateDirective,
        TemplateContextDirective] });
ListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EXPORTED_DIRECTIVES],
                    exports: [EXPORTED_DIRECTIVES],
                    imports: [CommonModule]
                }]
        }] });

/**
 * @hidden
 */
var KeyEvents;
(function (KeyEvents) {
    KeyEvents[KeyEvents["keydown"] = 0] = "keydown";
    KeyEvents[KeyEvents["keypress"] = 1] = "keypress";
    KeyEvents[KeyEvents["keyup"] = 2] = "keyup";
})(KeyEvents || (KeyEvents = {}));

/**
 * @hidden
 */
var NavigationAction;
(function (NavigationAction) {
    // eslint-disable-next-line id-denylist
    NavigationAction[NavigationAction["Undefined"] = 0] = "Undefined";
    NavigationAction[NavigationAction["Open"] = 1] = "Open";
    NavigationAction[NavigationAction["Close"] = 2] = "Close";
    NavigationAction[NavigationAction["Enter"] = 3] = "Enter";
    NavigationAction[NavigationAction["EnterPress"] = 4] = "EnterPress";
    NavigationAction[NavigationAction["EnterUp"] = 5] = "EnterUp";
    NavigationAction[NavigationAction["Tab"] = 6] = "Tab";
    NavigationAction[NavigationAction["Esc"] = 7] = "Esc";
    NavigationAction[NavigationAction["Navigate"] = 8] = "Navigate";
})(NavigationAction || (NavigationAction = {}));

/**
 * @hidden
 */
const NAVIGATION_CONFIG = new InjectionToken('navigation.config');

/**
 * @hidden
 */
class NavigationService {
    constructor(config) {
        this.navigate = new EventEmitter();
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.enter = new EventEmitter();
        this.enterpress = new EventEmitter();
        this.enterup = new EventEmitter();
        this.tab = new EventEmitter();
        this.esc = new EventEmitter();
        this.useLeftRightArrows = config.useLeftRightArrows;
    }
    process(args) {
        const keyCode = args.keyCode;
        const keyEvent = args.keyEvent;
        let index;
        let action = NavigationAction.Undefined;
        if (keyEvent === KeyEvents.keyup) {
            if (this.isEnterOrSpace(keyCode)) {
                action = NavigationAction.EnterUp;
            }
        }
        else {
            if (args.altKey && keyCode === Keys.ArrowDown) {
                action = NavigationAction.Open;
            }
            else if (args.altKey && keyCode === Keys.ArrowUp) {
                action = NavigationAction.Close;
            }
            else if (this.isEnterOrSpace(keyCode)) {
                action = NavigationAction.Enter;
            }
            else if (keyCode === Keys.Escape) {
                action = NavigationAction.Esc;
            }
            else if (keyCode === Keys.Tab) {
                action = NavigationAction.Tab;
            }
            else if (keyCode === Keys.ArrowUp || (this.useLeftRightArrows && keyCode === Keys.ArrowLeft)) {
                const step = args.flipNavigation ? 1 : -1;
                const start = args.flipNavigation ? args.min : args.max;
                const end = args.flipNavigation ? args.max : args.min;
                index = this.next({
                    current: args.current,
                    start: start,
                    end: end,
                    step: step
                });
                action = NavigationAction.Navigate;
            }
            else if (keyCode === Keys.ArrowDown || (this.useLeftRightArrows && keyCode === Keys.ArrowRight)) {
                const step = args.flipNavigation ? -1 : 1;
                const start = args.flipNavigation ? args.max : args.min;
                const end = args.flipNavigation ? args.min : args.max;
                index = this.next({
                    current: args.current,
                    start: start,
                    end: end,
                    step: step
                });
                action = NavigationAction.Navigate;
            }
            else if (keyCode === Keys.Home) {
                index = args.min;
                action = NavigationAction.Navigate;
            }
            else if (keyCode === Keys.End) {
                index = args.max;
                action = NavigationAction.Navigate;
            }
        }
        if (action !== NavigationAction.Undefined) {
            this[NavigationAction[action].toLowerCase()].emit({ index, target: args.target });
        }
        return action;
    }
    isEnterOrSpace(keyCode) {
        return keyCode === Keys.Enter || keyCode === Keys.Space;
    }
    next(args) {
        if (!isPresent(args.current)) {
            return args.start;
        }
        else {
            return args.current !== args.end ? args.current + args.step : args.end;
        }
    }
}
NavigationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService, deps: [{ token: NAVIGATION_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
NavigationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NAVIGATION_CONFIG]
                }] }]; } });

/**
 * @hidden
 */
class PopupContainerService {
}
PopupContainerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupContainerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PopupContainerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupContainerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupContainerService, decorators: [{
            type: Injectable
        }] });

/**
 * @hidden
 */
class ListButton {
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
ListButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListButton, deps: [{ token: FocusService }, { token: NavigationService }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i3.PopupService }, { token: i0.ElementRef }, { token: i1.LocalizationService }, { token: i0.ChangeDetectorRef }, { token: PopupContainerService }], target: i0.ɵɵFactoryTarget.Component });
ListButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ListButton, selector: "ng-component", inputs: { disabled: "disabled", tabIndex: "tabIndex", buttonClass: "buttonClass", popupSettings: "popupSettings" }, outputs: { open: "open", close: "close" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListButton, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: FocusService }, { type: NavigationService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i3.PopupService }, { type: i0.ElementRef }, { type: i1.LocalizationService }, { type: i0.ChangeDetectorRef }, { type: PopupContainerService }]; }, propDecorators: { disabled: [{
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

/**
 * @hidden
 */
class Messages extends ComponentMessages {
}
Messages.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Messages, deps: null, target: i0.ɵɵFactoryTarget.Directive });
Messages.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: Messages, selector: "kendo-splitbutton-messages-base", inputs: { splitButtonLabel: "splitButtonLabel" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Messages, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'kendo-splitbutton-messages-base'
                }]
        }], propDecorators: { splitButtonLabel: [{
                type: Input
            }] } });

/**
 * @hidden
 */
class LocalizedSplitButtonMessagesDirective extends Messages {
    constructor(service) {
        super();
        this.service = service;
    }
}
LocalizedSplitButtonMessagesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalizedSplitButtonMessagesDirective, deps: [{ token: i1.LocalizationService }], target: i0.ɵɵFactoryTarget.Directive });
LocalizedSplitButtonMessagesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: LocalizedSplitButtonMessagesDirective, selector: "[kendoSplitButtonLocalizedMessages]", providers: [
        {
            provide: Messages,
            useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
        }
    ], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalizedSplitButtonMessagesDirective, decorators: [{
            type: Directive,
            args: [{
                    providers: [
                        {
                            provide: Messages,
                            useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
                        }
                    ],
                    selector: '[kendoSplitButtonLocalizedMessages]'
                }]
        }], ctorParameters: function () { return [{ type: i1.LocalizationService }]; } });

const NAVIGATION_SETTINGS$2 = {
    useLeftRightArrows: true
};
const NAVIGATION_SETTINGS_PROVIDER$2 = {
    provide: NAVIGATION_CONFIG,
    useValue: NAVIGATION_SETTINGS$2
};
const DEFAULT_ROUNDED$1 = 'medium';
const DEFAULT_FILL_MODE$1 = 'solid';
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
class SplitButtonComponent extends ListButton {
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
        this._rounded = DEFAULT_ROUNDED$1;
        this._fillMode = DEFAULT_FILL_MODE$1;
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
        const newRounded = rounded ? rounded : DEFAULT_ROUNDED$1;
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
        const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$1;
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
SplitButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonComponent, deps: [{ token: FocusService }, { token: NavigationService }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i3.PopupService }, { token: i0.ElementRef }, { token: i1.LocalizationService }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: PopupContainerService }], target: i0.ɵɵFactoryTarget.Component });
SplitButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SplitButtonComponent, selector: "kendo-splitbutton", inputs: { text: "text", icon: "icon", iconClass: "iconClass", type: "type", imageUrl: "imageUrl", size: "size", rounded: "rounded", fillMode: "fillMode", themeColor: "themeColor", disabled: "disabled", popupSettings: "popupSettings", tabIndex: "tabIndex", textField: "textField", data: "data", buttonClass: "buttonClass", arrowButtonClass: "arrowButtonClass", arrowButtonIcon: "arrowButtonIcon" }, outputs: { buttonClick: "buttonClick", itemClick: "itemClick", onFocus: "focus", onBlur: "blur", open: "open", close: "close" }, host: { listeners: { "keydown": "keydown($event)", "keyup": "keyup($event)" }, properties: { "class.k-focus": "this.isFocused", "class.k-split-button": "this.widgetClasses", "class.k-button-group": "this.widgetClasses", "attr.dir": "this.dir" } }, providers: [
        FocusService,
        NavigationService,
        NAVIGATION_SETTINGS_PROVIDER$2,
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
    `, isInline: true, components: [{ type: ListComponent, selector: "kendo-button-list", inputs: ["data", "textField", "itemTemplate", "size"], outputs: ["onItemClick", "onItemBlur"] }], directives: [{ type: LocalizedSplitButtonMessagesDirective, selector: "[kendoSplitButtonLocalizedMessages]" }, { type: ButtonDirective, selector: "button[kendoButton], span[kendoButton]", inputs: ["toggleable", "togglable", "selected", "tabIndex", "icon", "iconClass", "imageUrl", "disabled", "size", "rounded", "fillMode", "themeColor", "role", "primary", "look"], outputs: ["selectedChange", "click"], exportAs: ["kendoButton"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonComponent, decorators: [{
            type: Component,
            args: [{
                    exportAs: 'kendoSplitButton',
                    providers: [
                        FocusService,
                        NavigationService,
                        NAVIGATION_SETTINGS_PROVIDER$2,
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
        }], ctorParameters: function () { return [{ type: FocusService }, { type: NavigationService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i3.PopupService }, { type: i0.ElementRef }, { type: i1.LocalizationService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: PopupContainerService }]; }, propDecorators: { text: [{
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

/**
 * Custom component messages override default component messages
 * ([see example]({% slug rtl_buttons %}).
 */
class SplitButtonCustomMessagesComponent extends Messages {
    constructor(service) {
        super();
        this.service = service;
    }
    get override() {
        return true;
    }
}
SplitButtonCustomMessagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonCustomMessagesComponent, deps: [{ token: i1.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
SplitButtonCustomMessagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SplitButtonCustomMessagesComponent, selector: "kendo-splitbutton-messages", providers: [{
            provide: Messages,
            useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
        }], usesInheritance: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonCustomMessagesComponent, decorators: [{
            type: Component,
            args: [{
                    providers: [{
                            provide: Messages,
                            useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
                        }],
                    selector: 'kendo-splitbutton-messages',
                    template: ``
                }]
        }], ctorParameters: function () { return [{ type: i1.LocalizationService }]; } });

/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `SplitButtonComponent`&mdash;The SplitButtonComponent component class.
 */
class SplitButtonModule {
}
SplitButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonModule, declarations: [SplitButtonComponent, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent], imports: [CommonModule, PopupModule, ButtonModule, ListModule], exports: [SplitButtonComponent, ListModule, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent] });
SplitButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonModule, imports: [[CommonModule, PopupModule, ButtonModule, ListModule], ListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SplitButtonComponent, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent],
                    exports: [SplitButtonComponent, ListModule, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent],
                    imports: [CommonModule, PopupModule, ButtonModule, ListModule]
                }]
        }] });

const NAVIGATION_SETTINGS$1 = {
    useLeftRightArrows: true
};
const NAVIGATION_SETTINGS_PROVIDER$1 = {
    provide: NAVIGATION_CONFIG,
    useValue: NAVIGATION_SETTINGS$1
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
class DropDownButtonComponent extends ListButton {
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
DropDownButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonComponent, deps: [{ token: FocusService }, { token: NavigationService }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i3.PopupService }, { token: i0.ElementRef }, { token: i1.LocalizationService }, { token: i0.ChangeDetectorRef }, { token: PopupContainerService }], target: i0.ɵɵFactoryTarget.Component });
DropDownButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DropDownButtonComponent, selector: "kendo-dropdownbutton", inputs: { icon: "icon", iconClass: "iconClass", imageUrl: "imageUrl", textField: "textField", data: "data", size: "size", rounded: "rounded", fillMode: "fillMode", themeColor: "themeColor" }, outputs: { itemClick: "itemClick", onFocus: "focus", onBlur: "blur" }, host: { listeners: { "keydown": "keydown($event)", "keyup": "keyup($event)", "mousedown": "mousedown($event)", "mouseup": "mouseup($event)" }, properties: { "class.k-focus": "this.focused", "class.k-dropdown-button": "this.widgetClasses", "attr.dir": "this.dir" } }, providers: [
        FocusService,
        NavigationService,
        NAVIGATION_SETTINGS_PROVIDER$1,
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
    `, isInline: true, components: [{ type: ListComponent, selector: "kendo-button-list", inputs: ["data", "textField", "itemTemplate", "size"], outputs: ["onItemClick", "onItemBlur"] }], directives: [{ type: ButtonDirective, selector: "button[kendoButton], span[kendoButton]", inputs: ["toggleable", "togglable", "selected", "tabIndex", "icon", "iconClass", "imageUrl", "disabled", "size", "rounded", "fillMode", "themeColor", "role", "primary", "look"], outputs: ["selectedChange", "click"], exportAs: ["kendoButton"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonComponent, decorators: [{
            type: Component,
            args: [{
                    exportAs: 'kendoDropDownButton',
                    providers: [
                        FocusService,
                        NavigationService,
                        NAVIGATION_SETTINGS_PROVIDER$1,
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
        }], ctorParameters: function () { return [{ type: FocusService }, { type: NavigationService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i3.PopupService }, { type: i0.ElementRef }, { type: i1.LocalizationService }, { type: i0.ChangeDetectorRef }, { type: PopupContainerService }]; }, propDecorators: { icon: [{
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

/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `DropDownButtonComponent`&mdash;The DropDownButtonComponent component class.
 */
class DropDownButtonModule {
}
DropDownButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropDownButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonModule, declarations: [DropDownButtonComponent], imports: [CommonModule, PopupModule, ListModule, ButtonModule], exports: [DropDownButtonComponent, ListModule] });
DropDownButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonModule, imports: [[CommonModule, PopupModule, ListModule, ButtonModule], ListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DropDownButtonComponent],
                    exports: [DropDownButtonComponent, ListModule],
                    imports: [CommonModule, PopupModule, ListModule, ButtonModule]
                }]
        }] });

/**
 * Displays a Chip that represents an input, attribute or an action.
 */
class ChipComponent {
    constructor(element, renderer, ngZone, localizationService) {
        this.element = element;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.localizationService = localizationService;
        /**
         * Specifies the selected state of the Chip.
         * @default false
         */
        this.selected = false;
        /**
         * Specifies if the Chip will be removable or not.
         * If the property is set to `true`, the Chip renders a remove icon.
         * @default false
         */
        this.removable = false;
        /**
         * If set to `true`, the Chip will be disabled.
         * @default false
         */
        this.disabled = false;
        /**
         * Fires each time the user clicks the remove icon of the Chip.
         */
        this.remove = new EventEmitter();
        /**
         * Fires each time the user clicks the content of the Chip.
         */
        this.contentClick = new EventEmitter();
        this.tabIndex = 0;
        this.hostClass = true;
        this._size = 'medium';
        this._rounded = 'medium';
        this._fillMode = 'solid';
        this._themeColor = 'base';
        this.focused = false;
        this.subs = new Subscription();
        validatePackage(packageMetadata);
        this.direction = localizationService.rtl ? 'rtl' : 'ltr';
    }
    /**
     * The size property specifies the padding of the Chip
     * ([see example]({% slug appearance_chip %}#toc-size)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    set size(size) {
        if (isPresent(size)) {
            this._size = size;
        }
        this.handleClasses(this._size, 'size');
    }
    get size() {
        return this._size;
    }
    /**
     * The rounded property specifies the border radius of the Chip
     * ([see example]({% slug appearance_chip %}#toc-rounded)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `full`
     * * `none`
     */
    set rounded(rounded) {
        if (isPresent(rounded)) {
            this._rounded = rounded;
        }
        this.handleClasses(this._rounded, 'rounded');
    }
    get rounded() {
        return this._rounded;
    }
    /**
     * The fillMode property specifies the background and border styles of the Chip
     * ([see example]({% slug appearance_chip %}#toc-fillMode)).
     *
     * The possible values are:
     * * `solid` (default)
     * * `outline`
     * * `none`
     */
    set fillMode(fillMode) {
        if (isPresent(fillMode)) {
            this._fillMode = fillMode;
        }
        this.handleClasses(this._fillMode, 'fillMode');
    }
    get fillMode() {
        return this._fillMode;
    }
    /**
     * The Chip allows you to specify predefined theme colors.
     * The theme color will be applied as a background and border color while also amending the text color accordingly
     * ([see example]({% slug appearance_chip %}#toc-themeColor)).
     *
     * The possible values are:
     * * `base` (default)
     * * `info`
     * * `success`
     * * `warning`
     * * `error`
     * * `none`
     */
    set themeColor(themeColor) {
        if (isPresent(themeColor)) {
            this._themeColor = themeColor;
        }
        this.handleThemeColor(this._themeColor);
    }
    get themeColor() {
        return this._themeColor;
    }
    get hasIconClass() {
        return this.icon || this.iconClass || this.avatarClass ? true : false;
    }
    get disabledClass() {
        return this.disabled;
    }
    get selectedClass() {
        return this.selected;
    }
    get focusedClass() {
        return this.focused;
    }
    ngOnInit() {
        this.subs.add(this.localizationService.changes
            .subscribe(({ rtl }) => this.direction = rtl ? 'rtl' : 'ltr'));
        this.renderer.setAttribute(this.element.nativeElement, 'role', 'button');
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    ngOnChanges(changes) {
        if (changes && changes['selected']) {
            const hasAriaSelected = this.element.nativeElement.hasAttribute('aria-selected');
            if (!hasAriaSelected) {
                this.renderer.setAttribute(this.element.nativeElement, 'aria-pressed', `${this.selected}`);
            }
        }
    }
    ngAfterViewInit() {
        const chip = this.element.nativeElement;
        const stylingOptions = ['size', 'rounded', 'fillMode'];
        stylingOptions.forEach(input => {
            this.handleClasses(this[input], input);
        });
        this.attachElementEventHandlers(chip);
    }
    /**
     * @hidden
     */
    get kendoIconClass() {
        this.verifyIconSettings([this.iconClass, this.avatarClass]);
        return `k-i-${this.icon}`;
    }
    /**
     * @hidden
     */
    get customIconClass() {
        this.verifyIconSettings([this.icon, this.avatarClass]);
        return `${this.iconClass}`;
    }
    /**
     * @hidden
     */
    get chipAvatarClass() {
        this.verifyIconSettings([this.icon, this.iconClass]);
        return `${this.avatarClass}`;
    }
    /**
     * @hidden
     */
    get removeIconClass() {
        if (this.removeIcon) {
            return `${this.removeIcon}`;
        }
        return `k-i-x-circle`;
    }
    /**
     * Focuses the Chip component.
     */
    focus() {
        if (isDocumentAvailable()) {
            this.element.nativeElement.focus();
        }
    }
    /**
     * Blurs the Chip component.
     */
    blur() {
        if (isDocumentAvailable()) {
            this.element.nativeElement.blur();
        }
    }
    /**
     * @hidden
     */
    onRemoveClick(e) {
        if (this.removable) {
            this.remove.emit({ sender: this, originalEvent: e });
        }
    }
    attachElementEventHandlers(chip) {
        this.ngZone.runOutsideAngular(() => {
            this.subs.add(this.renderer.listen(chip, 'focus', () => {
                this.renderer.addClass(chip, 'k-focus');
            }));
            this.subs.add(this.renderer.listen(chip, 'blur', () => {
                this.renderer.removeClass(chip, 'k-focus');
            }));
            this.subs.add(this.renderer.listen(chip, 'click', (e) => {
                const isRemoveClicked = closest(e.target, '.k-chip-remove-action');
                if (!isRemoveClicked) {
                    this.ngZone.run(() => {
                        this.contentClick.emit({ sender: this, originalEvent: e });
                    });
                }
            }));
            this.subs.add(this.renderer.listen(chip, 'keydown', this.keyDownHandler.bind(this)));
        });
    }
    /**
     * @hidden
     */
    verifyIconSettings(iconsToCheck) {
        if (isDevMode()) {
            if (iconsToCheck.filter(icon => icon !== null && icon !== undefined).length > 0) {
                this.renderer.removeClass(this.element.nativeElement, 'k-chip-has-icon');
                throw new Error('Invalid configuration: Having multiple icons is not supported. Only a single icon on a chip can be displayed.');
            }
        }
    }
    handleClasses(value, input) {
        const elem = this.element.nativeElement;
        const classes = getStylingClasses('chip', input, this[input], value);
        if (input === 'fillMode') {
            this.handleThemeColor(this.themeColor, this[input], value);
        }
        if (classes.toRemove) {
            this.renderer.removeClass(elem, classes.toRemove);
        }
        if (classes.toAdd) {
            this.renderer.addClass(elem, classes.toAdd);
        }
    }
    handleThemeColor(value, prevFillMode, fillMode) {
        const elem = this.element.nativeElement;
        const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
        const addFillMode = fillMode ? fillMode : this.fillMode;
        const themeColorClass = getThemeColorClasses('chip', removeFillMode, addFillMode, this.themeColor, value);
        this.renderer.removeClass(elem, themeColorClass.toRemove);
        if (addFillMode !== 'none' && fillMode !== 'none') {
            if (themeColorClass.toAdd) {
                this.renderer.addClass(elem, themeColorClass.toAdd);
            }
        }
    }
    keyDownHandler(e) {
        const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
        const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
        if (this.disabled) {
            return;
        }
        if (isEnterOrSpace) {
            this.ngZone.run(() => {
                this.contentClick.emit({ sender: this, originalEvent: e });
            });
        }
        else if (isDeleteOrBackspace && this.removable) {
            this.ngZone.run(() => {
                this.remove.emit({ sender: this, originalEvent: e });
            });
        }
    }
}
ChipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChipComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i1.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
ChipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ChipComponent, selector: "kendo-chip", inputs: { label: "label", icon: "icon", iconClass: "iconClass", avatarClass: "avatarClass", selected: "selected", removable: "removable", removeIcon: "removeIcon", disabled: "disabled", size: "size", rounded: "rounded", fillMode: "fillMode", themeColor: "themeColor" }, outputs: { remove: "remove", contentClick: "contentClick" }, host: { properties: { "attr.tabindex": "this.tabIndex", "class.k-chip": "this.hostClass", "class.k-chip-has-icon": "this.hasIconClass", "attr.aria-disabled": "this.disabledClass", "class.k-disabled": "this.disabledClass", "class.k-selected": "this.selectedClass", "class.k-focus": "this.focusedClass", "attr.dir": "this.direction" } }, providers: [
        LocalizationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.chip'
        }
    ], usesOnChanges: true, ngImport: i0, template: `
        <span
            *ngIf="icon"
            class="k-chip-icon k-icon"
            [ngClass]="kendoIconClass"
        >
        </span>

        <span
            *ngIf="iconClass"
            class="k-chip-icon"
            [ngClass]="customIconClass"
        >
        </span>

        <span
            *ngIf="avatarClass"
            class="k-chip-avatar k-avatar k-rounded-full"
        >
            <span class="k-avatar-image" [ngClass]="chipAvatarClass"></span>
        </span>

        <span class="k-chip-content">
            <span class="k-chip-label" *ngIf="label">
                {{ label }}
            </span>
            <ng-content *ngIf="!label"></ng-content>
        </span>

        <span class="k-chip-actions">
            <span class="k-chip-action k-chip-remove-action"
                *ngIf="removable"
                (click)="onRemoveClick($event)"
                >
                <span
                    class="k-icon"
                    [ngClass]="removeIconClass"
                >
                </span>
            </span>
        </span>
    `, isInline: true, directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'kendo-chip',
                    template: `
        <span
            *ngIf="icon"
            class="k-chip-icon k-icon"
            [ngClass]="kendoIconClass"
        >
        </span>

        <span
            *ngIf="iconClass"
            class="k-chip-icon"
            [ngClass]="customIconClass"
        >
        </span>

        <span
            *ngIf="avatarClass"
            class="k-chip-avatar k-avatar k-rounded-full"
        >
            <span class="k-avatar-image" [ngClass]="chipAvatarClass"></span>
        </span>

        <span class="k-chip-content">
            <span class="k-chip-label" *ngIf="label">
                {{ label }}
            </span>
            <ng-content *ngIf="!label"></ng-content>
        </span>

        <span class="k-chip-actions">
            <span class="k-chip-action k-chip-remove-action"
                *ngIf="removable"
                (click)="onRemoveClick($event)"
                >
                <span
                    class="k-icon"
                    [ngClass]="removeIconClass"
                >
                </span>
            </span>
        </span>
    `,
                    providers: [
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.chip'
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i1.LocalizationService }]; }, propDecorators: { label: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], avatarClass: [{
                type: Input
            }], selected: [{
                type: Input
            }], removable: [{
                type: Input
            }], removeIcon: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], rounded: [{
                type: Input
            }], fillMode: [{
                type: Input
            }], themeColor: [{
                type: Input
            }], remove: [{
                type: Output
            }], contentClick: [{
                type: Output
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], hostClass: [{
                type: HostBinding,
                args: ['class.k-chip']
            }], hasIconClass: [{
                type: HostBinding,
                args: ['class.k-chip-has-icon']
            }], disabledClass: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }, {
                type: HostBinding,
                args: ['class.k-disabled']
            }], selectedClass: [{
                type: HostBinding,
                args: ['class.k-selected']
            }], focusedClass: [{
                type: HostBinding,
                args: ['class.k-focus']
            }], direction: [{
                type: HostBinding,
                args: ['attr.dir']
            }] } });

class ChipListComponent {
    constructor(localizationService, renderer, element, ngZone) {
        this.localizationService = localizationService;
        this.renderer = renderer;
        this.element = element;
        this.ngZone = ngZone;
        this.hostClass = true;
        this.orientation = 'horizontal';
        /**
         * Sets the selection mode of the ChipList.
         *
         * The available values are:
         * * `none` (default)
         * * `single`
         * * `multiple`
         */
        this.selection = 'none';
        /**
         * Fires each time when the ChipList selection is changed.
         */
        this.selectedChange = new EventEmitter();
        /**
         * Fires each time the user clicks on the remove icon of the Chip.
         */
        this.remove = new EventEmitter();
        this.role = 'listbox';
        this._size = 'medium';
        this.subs = new Subscription();
        validatePackage(packageMetadata);
        this.direction = localizationService.rtl ? 'rtl' : 'ltr';
    }
    /**
     * The size property specifies the gap between the Chips in the ChipList
     * ([see example]({% slug appearance_chiplist %}#toc-size)).
     *
     * The possible values are:
     * * `'small'`
     * * `'medium'` (default)
     * * `'large'`
     * * `none`
     */
    set size(size) {
        const sizeValue = size ? size : 'medium';
        this.handleClasses(sizeValue, 'size');
        this._size = sizeValue;
    }
    get size() {
        return this._size;
    }
    get single() {
        return this.selection === 'single';
    }
    get multiple() {
        return this.selection === 'multiple';
    }
    /**
     * @hidden
     */
    onClick($event) {
        const target = $event.target;
        const isRemoveClicked = closest(target, '.k-chip-remove-action');
        const clickedChip = closest(target, '.k-chip');
        const chip = this.chips.find((chip) => clickedChip === chip.element.nativeElement);
        if (isRemoveClicked && clickedChip) {
            const removeEventArgs = { sender: this, originalEvent: $event, removedChip: chip };
            this.remove.emit(removeEventArgs);
        }
        if (this.selection !== 'none' && clickedChip && !isRemoveClicked) {
            this.setSelection(chip);
        }
    }
    ngOnInit() {
        this.dynamicRTLSubscription = this.localizationService.changes
            .subscribe(({ rtl }) => this.direction = rtl ? 'rtl' : 'ltr');
    }
    ngAfterViewInit() {
        const stylingInputs = ['size'];
        stylingInputs.forEach(input => {
            this.handleClasses(this[input], input);
        });
    }
    ngAfterContentInit() {
        this.chips.forEach((chip) => {
            const chipEl = chip.element.nativeElement;
            this.renderer.setAttribute(chipEl, 'role', 'option');
            if (chip.removable) {
                this.renderer.setAttribute(chipEl, 'aria-keyshortcuts', 'Enter Delete');
            }
            this.renderer.removeAttribute(chipEl, 'aria-pressed');
            this.renderer.setAttribute(chipEl, 'aria-selected', `${chip.selected}`);
        });
        this.attachElementEventHandlers();
    }
    ngOnDestroy() {
        if (this.dynamicRTLSubscription) {
            this.dynamicRTLSubscription.unsubscribe();
        }
        this.subs.unsubscribe();
    }
    selectedChips() {
        return this.chips.reduce((acc, cur, idx) => { return cur.selected ? acc.concat(idx) : acc; }, []);
    }
    /**
     * Updates the selection on click of a Chip. Emits events.
     */
    setSelection(chip) {
        if (this.selection === 'single') {
            this.clearSelection(chip);
        }
        chip.selected = !chip.selected;
        const chipEl = chip.element.nativeElement;
        this.renderer.setAttribute(chipEl, 'aria-selected', `${chip.selected}`);
        this.selectedChange.emit(this.selectedChips());
    }
    clearSelection(chip) {
        this.chips.forEach((c) => {
            if (chip !== c) {
                c.selected = false;
                this.renderer.setAttribute(c.element.nativeElement, 'aria-selected', 'false');
            }
        });
    }
    handleClasses(value, input) {
        const elem = this.element.nativeElement;
        const classes = getStylingClasses('chip-list', input, this[input], value);
        if (classes.toRemove) {
            this.renderer.removeClass(elem, classes.toRemove);
        }
        if (classes.toAdd) {
            this.renderer.addClass(elem, classes.toAdd);
        }
    }
    attachElementEventHandlers() {
        const chiplist = this.element.nativeElement;
        this.ngZone.runOutsideAngular(() => {
            this.subs.add(this.renderer.listen(chiplist, 'keydown', this.keyDownHandler.bind(this)));
        });
    }
    keyDownHandler(e) {
        const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
        const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
        if (isEnterOrSpace) {
            const target = e.target;
            const clickedChip = closest(target, '.k-chip');
            const chip = this.chips.find((chip) => clickedChip === chip.element.nativeElement);
            if (this.selection !== 'none' && clickedChip) {
                this.ngZone.run(() => {
                    this.setSelection(chip);
                });
            }
        }
        else if (isDeleteOrBackspace) {
            const target = e.target;
            const clickedChip = closest(target, '.k-chip');
            const chip = this.chips.find((chip) => clickedChip === chip.element.nativeElement);
            if (clickedChip) {
                const removeEventArgs = { sender: this, originalEvent: e, removedChip: chip };
                this.ngZone.run(() => {
                    this.remove.emit(removeEventArgs);
                });
            }
        }
    }
}
ChipListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChipListComponent, deps: [{ token: i1.LocalizationService }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
ChipListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ChipListComponent, selector: "kendo-chiplist, kendo-chip-list", inputs: { selection: "selection", size: "size" }, outputs: { selectedChange: "selectedChange", remove: "remove" }, host: { listeners: { "click": "onClick($event)" }, properties: { "class.k-chip-list": "this.hostClass", "attr.aria-orientation": "this.orientation", "attr.dir": "this.direction", "class.k-selection-single": "this.single", "attr.aria-multiselectable": "this.multiple", "class.k-selection-multiple": "this.multiple", "attr.role": "this.role" } }, providers: [
        LocalizationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.chiplist'
        }
    ], queries: [{ propertyName: "chips", predicate: ChipComponent }], ngImport: i0, template: `
        <ng-content></ng-content>
    `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChipListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'kendo-chiplist, kendo-chip-list',
                    template: `
        <ng-content></ng-content>
    `,
                    providers: [
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.chiplist'
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.LocalizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.k-chip-list']
            }], orientation: [{
                type: HostBinding,
                args: ['attr.aria-orientation']
            }], direction: [{
                type: HostBinding,
                args: ['attr.dir']
            }], selection: [{
                type: Input
            }], size: [{
                type: Input
            }], selectedChange: [{
                type: Output
            }], remove: [{
                type: Output
            }], chips: [{
                type: ContentChildren,
                args: [ChipComponent]
            }], single: [{
                type: HostBinding,
                args: ['class.k-selection-single']
            }], multiple: [{
                type: HostBinding,
                args: ['attr.aria-multiselectable']
            }, {
                type: HostBinding,
                args: ['class.k-selection-multiple']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

const exportedModules$1 = [
    ChipComponent,
    ChipListComponent
];
const declarations$1 = [
    ...exportedModules$1
];
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmoduleapi'])
 * definition for the Chip and ChipList components.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Chip module
 * import { ChipModule } from '@progress/kendo-angular-buttons';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, ChipModule], // import Chip module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * ```
 */
class ChipModule {
}
ChipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChipModule, declarations: [ChipComponent,
        ChipListComponent], imports: [CommonModule], exports: [ChipComponent,
        ChipListComponent] });
ChipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChipModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [declarations$1],
                    exports: [exportedModules$1],
                    imports: [CommonModule]
                }]
        }] });

/**
 * @hidden
 */
function getAnchorAlign(fabAlign, rtl) {
    let align = { horizontal: (rtl ? 'right' : 'left'), vertical: 'bottom' };
    if (fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
    }
    if (fabAlign.vertical === 'bottom') {
        align.vertical = 'top';
    }
    if (fabAlign.vertical === 'bottom' && fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
        align.vertical = 'top';
    }
    return align;
}
/**
 * @hidden
 */
function getPopupAlign(fabAlign, rtl) {
    let align = { horizontal: (rtl ? 'right' : 'left'), vertical: 'top' };
    if (fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
    }
    if (fabAlign.vertical === 'bottom') {
        align.vertical = 'bottom';
    }
    if (fabAlign.vertical === 'bottom' && fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
        align.vertical = 'bottom';
    }
    return align;
}

/**
 * @hidden
 */
function openAnimation(animationSettings) {
    const isBottom = animationSettings.align.vertical === 'bottom';
    const duration = animationSettings.duration;
    const gap = animationSettings.gap;
    return sequence([
        query(`.k-fab-item`, [
            style({ opacity: 0, transform: `translateY(${isBottom ? '8px' : '-8px'})` }),
            stagger(gap, [animate(`${duration}ms ease-in`, style({ opacity: '*', transform: 'translateY(0)' }))])
        ], { optional: true })
    ]);
}
/**
 * @hidden
 */
function closeAnimation(animationSettings) {
    const isBottom = animationSettings.align.vertical === 'bottom';
    const duration = animationSettings.duration;
    const gap = animationSettings.gap;
    return sequence([
        query(`.k-fab-item`, [
            style({ opacity: '*', transform: 'translateY(0)' }),
            stagger(-gap, [animate(`${duration}ms ease-in`, style({ opacity: 0, transform: `translateY(${isBottom ? '8px' : '-8px'})` }))])
        ], { optional: true })
    ]);
}

/**
 * Represents a template that defines the content of the whole dial item.
 * To define the template, nest an `<ng-template>` tag
 * with the `kendoDialItemTemplate` directive inside the `<kendo-floatingactionbutton>` tag
 * ([see example]({% slug templates_floatingactionbutton %}#toc-dial-item-template)).
 */
class DialItemTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
DialItemTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialItemTemplateDirective, deps: [{ token: i0.TemplateRef, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
DialItemTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: DialItemTemplateDirective, selector: "[kendoDialItemTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialItemTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoDialItemTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Optional
                }] }]; } });

/**
 * Represents a template that defines the content of the FloatingActionButton.
 * To define the template, nest an `<ng-template>` tag
 * with the `kendoFloatingActionButtonTemplate` directive inside the `<kendo-floatingactionbutton>` tag
 * ([see example]({% slug templates_floatingactionbutton %}#toc-floatingactionbutton-template)).
 */
class FloatingActionButtonTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
FloatingActionButtonTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonTemplateDirective, deps: [{ token: i0.TemplateRef, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
FloatingActionButtonTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: FloatingActionButtonTemplateDirective, selector: "[kendoFloatingActionButtonTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoFloatingActionButtonTemplate]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Optional
                }] }]; } });

/**
 * @hidden
 */
class DialItemComponent {
    constructor(element, renderer, localisationService) {
        this.element = element;
        this.renderer = renderer;
        this.localisationService = localisationService;
        this.hostClass = true;
        this.role = 'menuitem';
    }
    get disabledClass() {
        return this.item.disabled;
    }
    get title() {
        const label = this.item.label;
        return label ? label : this.itemTitle;
    }
    get indexAttr() {
        return this.index;
    }
    get iconClasses() {
        const classes = [];
        if (this.item.iconClass) {
            classes.push(`${this.item.iconClass}`);
        }
        if (this.item.icon) {
            classes.push(`k-fab-item-icon k-icon k-i-${this.item.icon}`);
        }
        return classes;
    }
    get itemTitle() {
        const icon = this.item.icon;
        const itemTitle = this.item.itemTitle;
        return (icon && itemTitle) ? itemTitle : icon;
    }
    ngAfterViewInit() {
        const element = this.element.nativeElement;
        const rtl = this.localisationService.rtl;
        const hAlign = this.align.horizontal;
        this.renderer.addClass(element, this.getTextDirectionClass(rtl, hAlign));
    }
    getTextDirectionClass(rtl, hAlign) {
        const dir = rtl ? 'rtl' : 'ltr';
        const align = hAlign === 'end' ? 'end' : 'start';
        const directions = {
            rtl: { end: 'k-text-left', start: 'k-text-right' },
            ltr: { start: 'k-text-left', end: 'k-text-right' }
        };
        return directions[dir][align];
    }
}
DialItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
DialItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialItemComponent, selector: "[kendoDialItem]", inputs: { cssClass: "cssClass", cssStyle: "cssStyle", isFocused: "isFocused", index: "index", item: "item", dialItemTemplate: "dialItemTemplate", align: "align" }, host: { properties: { "class.k-fab-item": "this.hostClass", "attr.role": "this.role", "attr.aria-disabled": "this.disabledClass", "class.k-disabled": "this.disabledClass", "attr.title": "this.title", "attr.aria-label": "this.title", "attr.data-fab-item-index": "this.indexAttr" } }, ngImport: i0, template: `
        <ng-template *ngIf="dialItemTemplate"
            [ngTemplateOutlet]="dialItemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item, index: index, isFocused: isFocused }"
        >
        </ng-template>

        <ng-container *ngIf="!dialItemTemplate">
            <span *ngIf="item.label" class="k-fab-item-text">{{ item.label }}</span>
            <span *ngIf="item.icon || item.iconClass" [ngClass]="iconClasses"></span>
        </ng-container>
    `, isInline: true, directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialItemComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: '[kendoDialItem]',
                    template: `
        <ng-template *ngIf="dialItemTemplate"
            [ngTemplateOutlet]="dialItemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item, index: index, isFocused: isFocused }"
        >
        </ng-template>

        <ng-container *ngIf="!dialItemTemplate">
            <span *ngIf="item.label" class="k-fab-item-text">{{ item.label }}</span>
            <span *ngIf="item.icon || item.iconClass" [ngClass]="iconClasses"></span>
        </ng-container>
    `
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.LocalizationService }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.k-fab-item']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], disabledClass: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }, {
                type: HostBinding,
                args: ['class.k-disabled']
            }], title: [{
                type: HostBinding,
                args: ['attr.title']
            }, {
                type: HostBinding,
                args: ['attr.aria-label']
            }], indexAttr: [{
                type: HostBinding,
                args: ['attr.data-fab-item-index']
            }], cssClass: [{
                type: Input
            }], cssStyle: [{
                type: Input
            }], isFocused: [{
                type: Input
            }], index: [{
                type: Input
            }], item: [{
                type: Input
            }], dialItemTemplate: [{
                type: Input
            }], align: [{
                type: Input
            }] } });

/**
 * @hidden
 */
class DialListComponent {
    constructor(focusService, cdr) {
        this.focusService = focusService;
        this.cdr = cdr;
        this.hostClass = true;
        this.subscriptions = new Subscription();
        this.subscriptions.add(this.focusService.onFocus.subscribe(() => this.cdr.detectChanges()));
    }
    get bottomClass() {
        return this.align.vertical === 'top' || this.align.vertical === 'middle';
    }
    get topClass() {
        return this.align.vertical === 'bottom';
    }
    isFocused(index) {
        return this.focusService.isFocused(index);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
DialListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialListComponent, deps: [{ token: FocusService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
DialListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialListComponent, selector: "[kendoDialList]", inputs: { dialItems: "dialItems", dialItemTemplate: "dialItemTemplate", align: "align" }, host: { properties: { "class.k-fab-items": "this.hostClass", "class.k-fab-items-bottom": "this.bottomClass", "class.k-fab-items-top": "this.topClass" } }, ngImport: i0, template: `
        <ng-container *ngFor='let item of dialItems; let idx = index'>
            <li
                kendoButtonFocusable
                kendoDialItem
                [item]="dialItems[idx]"
                [index]="idx"
                [dialItemTemplate]="dialItemTemplate"
                [isFocused]="isFocused(idx)"
                [ngClass]='item.cssClass'
                [ngStyle]='item.cssStyle'
                [align]="align"
            >
            </li>
        </ng-container>
    `, isInline: true, components: [{ type: DialItemComponent, selector: "[kendoDialItem]", inputs: ["cssClass", "cssStyle", "isFocused", "index", "item", "dialItemTemplate", "align"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: FocusableDirective, selector: "[kendoButtonFocusable]", inputs: ["index"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialListComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: '[kendoDialList]',
                    template: `
        <ng-container *ngFor='let item of dialItems; let idx = index'>
            <li
                kendoButtonFocusable
                kendoDialItem
                [item]="dialItems[idx]"
                [index]="idx"
                [dialItemTemplate]="dialItemTemplate"
                [isFocused]="isFocused(idx)"
                [ngClass]='item.cssClass'
                [ngStyle]='item.cssStyle'
                [align]="align"
            >
            </li>
        </ng-container>
    `
                }]
        }], ctorParameters: function () { return [{ type: FocusService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.k-fab-items']
            }], bottomClass: [{
                type: HostBinding,
                args: ['class.k-fab-items-bottom']
            }], topClass: [{
                type: HostBinding,
                args: ['class.k-fab-items-top']
            }], dialItems: [{
                type: Input
            }], dialItemTemplate: [{
                type: Input
            }], align: [{
                type: Input
            }] } });

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
class FloatingActionButtonComponent {
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
FloatingActionButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: FocusService }, { token: NavigationService }, { token: i0.NgZone }, { token: i3.PopupService }, { token: i4.AnimationBuilder }, { token: i1.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
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
    `, isInline: true, components: [{ type: DialListComponent, selector: "[kendoDialList]", inputs: ["dialItems", "dialItemTemplate", "align"] }], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8.EventsOutsideAngularDirective, selector: "[kendoEventsOutsideAngular]", inputs: ["kendoEventsOutsideAngular", "scope"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
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
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: FocusService }, { type: NavigationService }, { type: i0.NgZone }, { type: i3.PopupService }, { type: i4.AnimationBuilder }, { type: i1.LocalizationService }]; }, propDecorators: { fixedClass: [{
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

const exportedModules = [
    FloatingActionButtonComponent,
    DialItemTemplateDirective,
    FloatingActionButtonTemplateDirective
];
const declarations = [
    ...exportedModules,
    DialListComponent,
    DialItemComponent
];
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmoduleapi'])
 * definition for the FloatingActionButton component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the FloatingActionButton module
 * import { FloatingActionButtonModule } from '@progress/kendo-angular-buttons';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, FloatingActionButtonModule], // import FloatingActionButton module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * ```
 */
class FloatingActionButtonModule {
}
FloatingActionButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FloatingActionButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonModule, declarations: [FloatingActionButtonComponent,
        DialItemTemplateDirective,
        FloatingActionButtonTemplateDirective, DialListComponent,
        DialItemComponent], imports: [CommonModule, PopupModule, ListModule, EventsModule], exports: [FloatingActionButtonComponent,
        DialItemTemplateDirective,
        FloatingActionButtonTemplateDirective] });
FloatingActionButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonModule, imports: [[CommonModule, PopupModule, ListModule, EventsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FloatingActionButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [declarations],
                    exports: [exportedModules],
                    imports: [CommonModule, PopupModule, ListModule, EventsModule]
                }]
        }] });

/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmodules'])
 * definition for the Buttons components.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Buttons module
 * import { ButtonsModule } from '@progress/kendo-angular-buttons';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, ButtonsModule], // import Buttons module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
class ButtonsModule {
}
ButtonsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonsModule, exports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule] });
ButtonsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonsModule, imports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonsModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonDirective as Button, ButtonDirective, ButtonGroupComponent as ButtonGroup, ButtonGroupComponent, ButtonGroupModule, ButtonItemTemplateDirective, ButtonModule, ButtonsModule, ChipComponent, ChipListComponent, ChipModule, DialItemTemplateDirective, DropDownButtonComponent as DropDownButton, DropDownButtonComponent, DropDownButtonModule, FloatingActionButtonComponent, FloatingActionButtonModule, FloatingActionButtonTemplateDirective, FocusableDirective, ListComponent, ListModule, LocalizedSplitButtonMessagesDirective, PreventableEvent, SplitButtonComponent as SplitButton, SplitButtonComponent, SplitButtonCustomMessagesComponent, SplitButtonModule, TemplateContextDirective };

