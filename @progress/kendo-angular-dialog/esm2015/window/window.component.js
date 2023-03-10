/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, Input, Output, HostBinding, EventEmitter, ContentChild, ViewChildren, HostListener, ViewChild } from '@angular/core';
import { L10N_PREFIX, LocalizationService } from '@progress/kendo-angular-l10n';
import { isChanged, isDocumentAvailable } from '@progress/kendo-angular-common';
import { Subscription } from 'rxjs';
import { validatePackage } from '@progress/kendo-licensing';
import { packageMetadata } from '../package-metadata';
import { DragResizeService } from './drag-resize.service';
import { OFFSET_STYLES, isPresent, isTruthy, hasClasses, WINDOW_CLASSES, parseCSSClassNames, setHTMLAttributes } from '../common/util';
import { RESIZE_DIRECTIONS } from "../common/util";
import { ResizeHandleDirective } from './window-resize-handle.directive';
import { WindowTitleBarComponent } from './window-titlebar.component';
import { NavigationService } from './navigation.service';
import * as i0 from "@angular/core";
import * as i1 from "./drag-resize.service";
import * as i2 from "./navigation.service";
import * as i3 from "@progress/kendo-angular-l10n";
import * as i4 from "./window-titlebar.component";
import * as i5 from "../localization/localized-messages.directive";
import * as i6 from "@angular/common";
import * as i7 from "./actions/window-minimize-action.directive";
import * as i8 from "./actions/window-maximize-action.directive";
import * as i9 from "./actions/window-restore-action.directive";
import * as i10 from "./actions/window-close-action.directive";
import * as i11 from "./window-resize-handle.directive";
import * as i12 from "@progress/kendo-angular-common";
/**
 * Represents the [Kendo UI Window component for Angular]({% slug overview_window_dialogs %}).
 */
export class WindowComponent {
    constructor(el, renderer, service, navigation, ngZone, localization) {
        this.el = el;
        this.renderer = renderer;
        this.service = service;
        this.navigation = navigation;
        this.ngZone = ngZone;
        this.localization = localization;
        /**
         * Specifies if the content of the component is persisted in the DOM when minimized.
         * @default false
         */
        this.keepContent = false;
        /**
         * Fires when the user starts to move the Window.
         */
        this.dragStart = new EventEmitter();
        /**
         * Fires when the Window was moved by the user.
         */
        this.dragEnd = new EventEmitter();
        /**
         * Fires when the user starts to resize the Window.
         */
        this.resizeStart = new EventEmitter();
        /**
         * Fires when the Window was resized by the user.
         */
        this.resizeEnd = new EventEmitter();
        /**
         * Fires when the user closes the Window.
         */
        this.close = new EventEmitter();
        /**
         * Fires when the `width` property of the component was updated. The event is triggered only after the resizing
         * has ended. The event data contains the new width. Allows a two-way binding of the `width` property.
         */
        this.widthChange = new EventEmitter();
        /**
         * Fires when the `height` property of the component was updated. The event is triggered only after the resizing
         * has ended. The event data contains the new height. Allows a two-way binding of the `height` property.
         */
        this.heightChange = new EventEmitter();
        /**
         * Fires when the `top` property of the component was updated. The event is triggered only after the dragging
         * and resizing have ended. The event data contains the new top offset. Allows a two-way binding of the `top` property.
         */
        this.topChange = new EventEmitter();
        /**
         * Fires when the `left` property of the component was updated. The event is triggered only after the dragging
         * and resizing have ended. The event data contains the new left offset. Allows a two-way binding of the `left` property.
         */
        this.leftChange = new EventEmitter();
        /**
         * Fires when the `state` property of the component was updated. The event data contains the new state. Allows a
         * two-way binding of the `state` property.
         */
        this.stateChange = new EventEmitter();
        /**
         * @hidden
         */
        this.messages = {};
        this.tabIndex = 0;
        this.role = 'dialog';
        /**
         * @hidden
         */
        this.titleId = null;
        this.draged = false;
        this.resized = false;
        this.windowSubscription = new Subscription();
        this.domSubs = new Subscription();
        validatePackage(packageMetadata);
        this.direction = this.localization.rtl ? 'rtl' : 'ltr';
        this.localizationChangeSubscription = this.localization.changes
            .subscribe(({ rtl }) => this.direction = rtl ? 'rtl' : 'ltr');
        this.resizeDirections = RESIZE_DIRECTIONS;
        this.subscribeEvents();
        this.titleId = this.generateTitleId();
    }
    /**
     * Specifies whether the user will be able to drag the component.
     * @default true
     */
    set draggable(value) {
        this.options.draggable = value;
    }
    get draggable() {
        return this.options.draggable;
    }
    /**
     * Specifies whether the user will be able to resize the component.
     * @default true
     */
    set resizable(value) {
        this.options.resizable = value;
    }
    get resizable() {
        return this.options.resizable;
    }
    /**
     * @hidden
     */
    set cssClass(classes) {
        this.setServiceClasses(this._cssClass, classes);
        this._cssClass = classes;
    }
    get cssClass() {
        return this._cssClass;
    }
    /**
     * @hidden
     */
    set htmlAttributes(attributes) {
        setHTMLAttributes(attributes, this.renderer, this.el.nativeElement);
        const el = this.el.nativeElement;
        const dir = el.getAttribute('dir');
        const tIndex = el.getAttribute('tabindex');
        if (this.direction !== dir) {
            this.direction = dir;
        }
        if (this.tabIndex !== tIndex) {
            this.tabIndex = tIndex;
        }
        this._htmlAttributes = attributes;
    }
    get htmlAttributes() {
        return this._htmlAttributes;
    }
    /**
     * Specifies the initial state of the component.
     * If not specified, the value is set to `default`.
     *
     * The possible values are:
     * * `minimized`
     * * `maximized`
     * * `default`
     */
    set state(value) {
        this.options.state = value;
    }
    get state() {
        return this.options.state;
    }
    /**
     * Specifies the minimum width of the component.
     * The `minWidth` property has to be set in pixels.
     * @default 120
     */
    set minWidth(value) {
        this.setOption('minWidth', value);
    }
    get minWidth() {
        return this.options.minWidth;
    }
    /**
     * Specifies the minimum height of the Window.
     * The `minHeight` property has to be set in pixels.
     * @default 100
     */
    set minHeight(value) {
        this.setOption('minHeight', value);
    }
    get minHeight() {
        return this.options.minHeight;
    }
    /**
     * Specifies the width of the Window.
     * The `width` property has to be set in pixels.
     */
    set width(value) {
        this.setOption('width', value);
    }
    get width() {
        return this.options.width;
    }
    /**
     * Specifies the height of the Window.
     * The `height` property has to be set in pixels.
     */
    set height(value) {
        this.setOption('height', value);
    }
    get height() {
        return this.options.height;
    }
    /**
     * Specifies the initial top offset of the Window.
     * The `top` property has to be set in pixels.
     */
    set top(value) {
        this.setOption('top', value);
    }
    get top() {
        return this.options.top;
    }
    /**
     * Specifies the initial left offset of the Window.
     * Numeric values are treated as pixels.
     */
    set left(value) {
        this.setOption('left', value);
    }
    get left() {
        return this.options.left;
    }
    get closeButtonTitle() {
        if (this.messages && this.messages.closeTitle) {
            return this.messages.closeTitle;
        }
        return this.localization.get('closeTitle');
    }
    get restoreButtonTitle() {
        if (this.messages && this.messages.restoreTitle) {
            return this.messages.restoreTitle;
        }
        return this.localization.get('restoreTitle');
    }
    get maximizeButtonTitle() {
        if (this.messages && this.messages.maximizeTitle) {
            return this.messages.maximizeTitle;
        }
        return this.localization.get('maximizeTitle');
    }
    get minimizeButtonTitle() {
        if (this.messages && this.messages.minimizeTitle) {
            return this.messages.minimizeTitle;
        }
        return this.localization.get('minimizeTitle');
    }
    get hostClasses() {
        return true;
    }
    get dir() {
        return this.direction;
    }
    ngAfterViewInit() {
        this.setNextZIndex();
        this.handleInitialFocus();
        this.ngZone.runOutsideAngular(() => Promise.resolve(null).then(() => this.setInitialOffset()));
        this.initDomEvents();
        if (this.titleBarView || this.titleBarContent) {
            this.renderer.setAttribute(this.el.nativeElement, 'aria-labelledby', this.titleId);
        }
    }
    ngOnInit() {
        this.renderer.removeAttribute(this.el.nativeElement, 'title');
        this.service.init(this.el);
    }
    ngOnChanges(changes) {
        OFFSET_STYLES.forEach((style) => {
            if (isChanged(style, changes)) {
                this.setStyle(style, this.options[style]);
            }
        });
        if (isChanged('draggable', changes)) {
            const titleBar = isPresent(this.titleBarContent) ? this.titleBarContent : this.titleBarView;
            if (isTruthy(changes.draggable.currentValue)) {
                titleBar.subscribeDrag();
            }
            else {
                titleBar.unsubscribeDrag();
            }
        }
        if (isChanged('state', changes)) {
            if (isPresent(this.service.lastAction)) {
                this.service.lastAction = null;
            }
            else {
                this.service.applyManualState();
                this.updateAllOffset();
            }
        }
    }
    ngOnDestroy() {
        if (this.windowSubscription) {
            this.windowSubscription.unsubscribe();
        }
        if (this.domSubs) {
            this.domSubs.unsubscribe();
        }
        this.localizationChangeSubscription.unsubscribe();
    }
    /**
     * Focuses the wrapper of the Window component.
     */
    focus() {
        const wrapper = this.el.nativeElement;
        if (isPresent(wrapper)) {
            wrapper.focus();
        }
    }
    /**
     * Brings the current Window component on top of other Window components on the page.
     */
    bringToFront() {
        this.setNextZIndex();
    }
    /**
     * Manually updates the `width` or `height` option of the Window.
     * The required style will be applied to the Window wrapper element and the
     * corresponding property of the component instance will be updated.
     * This method is intended to be used for sizing dynamically created components using the
     * [`WindowService`]({% slug api_dialog_windowservice %})
     * @param {WindowDimensionSetting} dimension - The option that will be updated
     * @param {number} value - The value set in pixels
     */
    setDimension(dimension, value) {
        this.setOption(dimension, value);
        this.setStyle(dimension, value);
    }
    /**
     * Manually updates the `top` or `left` offset of the Window.
     * The required style will be applied to the Window wrapper element and the
     * corresponding property of the component instance will be updated.
     * This method is intended to be used for positioning dynamically created components using the
     * [`WindowService`]({% slug api_dialog_windowservice %})
     * @param {WindowOffsetSetting} offset - The option that will be updated
     * @param {number} value - The value set in pixels
     */
    setOffset(offset, value) {
        this.setOption(offset, value);
        this.setStyle(offset, value);
    }
    get showDefaultTitleBar() {
        return !isPresent(this.titleBarContent);
    }
    get styleMinWidth() {
        return this.minWidth + 'px';
    }
    get styleMinHeight() {
        return this.minHeight + 'px';
    }
    get stylePosition() {
        return this.options.position;
    }
    get wrapperMaximizedClass() {
        return this.state === 'maximized';
    }
    get wrapperMinimizedClass() {
        return this.state === 'minimized';
    }
    /**
     * @hidden
     */
    onComponentFocus() {
        this.renderer.addClass(this.el.nativeElement, 'k-focus');
        this.setNextZIndex();
    }
    /**
     * @hidden
     */
    onComponentBlur() {
        this.renderer.removeClass(this.el.nativeElement, 'k-focus');
    }
    subscribeEvents() {
        if (!isDocumentAvailable()) {
            return;
        }
        this.windowSubscription.add(this.service.focus.subscribe(() => {
            this.el.nativeElement.focus();
        }));
        this.windowSubscription.add(this.service.dragStart.subscribe(() => {
            this.draged = true;
            this.ngZone.run(() => {
                this.dragStart.emit();
            });
        }));
        this.windowSubscription.add(this.service.dragEnd.subscribe(() => {
            if (this.draged) {
                this.draged = false;
                this.ngZone.run(() => {
                    this.dragEnd.emit();
                });
            }
        }));
        this.windowSubscription.add(this.service.close.subscribe(() => {
            this.close.emit();
        }));
        this.windowSubscription.add(this.service.resizeStart.subscribe(() => {
            this.resized = true;
            this.ngZone.run(() => {
                this.resizeStart.emit();
            });
        }));
        this.windowSubscription.add(this.service.resizeEnd.subscribe(() => {
            if (this.resized) {
                this.resized = false;
                this.ngZone.run(() => {
                    this.resizeEnd.emit();
                });
            }
        }));
        this.windowSubscription.add(this.service.change.subscribe((ev) => {
            OFFSET_STYLES.forEach((style) => {
                if (isPresent(ev[style])) {
                    this.setStyle(style, ev[style]);
                    if (this.state !== 'maximized') {
                        const emitter = this[style + 'Change'];
                        if (emitter.observers.length) {
                            this.ngZone.run(() => {
                                emitter.emit(ev[style]);
                            });
                        }
                    }
                }
            });
        }));
        this.windowSubscription.add(this.service.stateChange.subscribe((state) => {
            if (isPresent(this.service.lastAction)) {
                this.updateAllOffset();
                this.stateChange.emit(state);
            }
        }));
    }
    initDomEvents() {
        if (!this.el) {
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this.domSubs.add(this.renderer.listen(this.el.nativeElement, 'keydown', (ev) => {
                this.onKeyDown(ev);
            }));
        });
    }
    onKeyDown(event) {
        if (hasClasses(event.target, WINDOW_CLASSES)) {
            this.navigation.process(event);
        }
    }
    setServiceClasses(prevValue, value) {
        const el = this.el.nativeElement;
        if (prevValue) {
            parseCSSClassNames(prevValue).forEach(className => {
                this.renderer.removeClass(el, className);
            });
        }
        if (value) {
            parseCSSClassNames(value).forEach(className => {
                this.renderer.addClass(el, className);
            });
        }
    }
    setNextZIndex() {
        const currentZIndex = this.el.nativeElement.style['z-index'];
        const nextPossibleZIndex = this.service.nextPossibleZIndex;
        if (!currentZIndex || (nextPossibleZIndex - currentZIndex > 1)) {
            this.renderer.setStyle(this.el.nativeElement, "z-index", this.service.nextZIndex);
        }
    }
    setInitialOffset() {
        if (this.state !== 'maximized') {
            this.updateAllOffset();
            if (!isPresent(this.left) || !isPresent(this.top)) {
                this.service.center();
            }
        }
        else {
            const viewPort = this.service.windowViewPort;
            this.setStyle('width', viewPort.width);
            this.setStyle('height', viewPort.height);
            this.setStyle('top', 0);
            this.setStyle('left', 0);
        }
    }
    updateAllOffset() {
        OFFSET_STYLES.forEach((style) => {
            if (isPresent(this[style])) {
                this.setStyle(style, this[style]);
            }
            else {
                this.removeStyle(style);
            }
        });
    }
    setStyle(style, value) {
        this.renderer.setStyle(this.el.nativeElement, style, value + 'px');
    }
    removeStyle(style) {
        this.renderer.removeStyle(this.el.nativeElement, style);
    }
    get options() {
        return this.service.options;
    }
    setOption(style, value) {
        if (typeof value !== 'number' && typeof value !== 'string') {
            return;
        }
        const parsedValue = (typeof value === 'number') ? value : parseInt(value, 10);
        this.options[style] = parsedValue;
        this.service.setRestoreOption(style, parsedValue);
    }
    handleInitialFocus() {
        const wrapper = this.el.nativeElement;
        if (this.autoFocusedElement) {
            const initiallyFocusedElement = wrapper.querySelector(this.autoFocusedElement);
            if (initiallyFocusedElement) {
                initiallyFocusedElement.focus();
            }
        }
        else {
            this.focus();
        }
    }
    /**
     * @hidden
     */
    generateTitleId() {
        return 'kendo-window-title-' + Math.ceil(Math.random() * 1000000).toString();
    }
}
WindowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: WindowComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.DragResizeService }, { token: i2.NavigationService }, { token: i0.NgZone }, { token: i3.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
WindowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: WindowComponent, selector: "kendo-window", inputs: { autoFocusedElement: "autoFocusedElement", title: "title", draggable: "draggable", resizable: "resizable", keepContent: "keepContent", state: "state", minWidth: "minWidth", minHeight: "minHeight", width: "width", height: "height", top: "top", left: "left" }, outputs: { dragStart: "dragStart", dragEnd: "dragEnd", resizeStart: "resizeStart", resizeEnd: "resizeEnd", close: "close", widthChange: "widthChange", heightChange: "heightChange", topChange: "topChange", leftChange: "leftChange", stateChange: "stateChange" }, host: { listeners: { "focus": "onComponentFocus()", "blur": "onComponentBlur()" }, properties: { "attr.tabIndex": "this.tabIndex", "attr.role": "this.role", "class.k-window": "this.hostClasses", "attr.dir": "this.dir", "style.minWidth": "this.styleMinWidth", "style.minHeight": "this.styleMinHeight", "style.position": "this.stylePosition", "class.k-window-maximized": "this.wrapperMaximizedClass", "class.k-window-minimized": "this.wrapperMinimizedClass" } }, providers: [
        DragResizeService,
        NavigationService,
        LocalizationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.window'
        }
    ], queries: [{ propertyName: "titleBarContent", first: true, predicate: WindowTitleBarComponent, descendants: true }], viewQueries: [{ propertyName: "titleBarView", first: true, predicate: WindowTitleBarComponent, descendants: true }, { propertyName: "resizeHandles", predicate: ResizeHandleDirective, descendants: true }], exportAs: ["kendoWindow"], usesOnChanges: true, ngImport: i0, template: `
        <ng-container kendoWindowLocalizedMessages
            i18n-closeTitle="kendo.window.closeTitle|The title of the close button"
            closeTitle="Close"

            i18n-restoreTitle="kendo.window.restoreTitle|The title of the restore button"
            restoreTitle="Restore"

            i18n-maximizeTitle="kendo.window.maximizeTitle|The title of the maximize button"
            maximizeTitle="Maximize"

            i18n-minimizeTitle="kendo.window.minimizeTitle|The title of the minimize button"
            minimizeTitle="Minimize"
        >
        <ng-container>

        <kendo-window-titlebar *ngIf="showDefaultTitleBar" [template]="titleBarTemplate" [id]="titleId">
            <div class="k-window-title">{{ title }}</div>
            <div class="k-window-actions">
                <button kendoWindowMinimizeAction  [attr.title]="minimizeButtonTitle" [attr.aria-label]="minimizeButtonTitle"></button>
                <button kendoWindowMaximizeAction [attr.title]="maximizeButtonTitle" [attr.aria-label]="maximizeButtonTitle"></button>
                <button kendoWindowRestoreAction [attr.title]="restoreButtonTitle" [attr.aria-label]="restoreButtonTitle"></button>
                <button kendoWindowCloseAction [attr.title]="closeButtonTitle" [attr.aria-label]="closeButtonTitle"></button>
            </div>
        </kendo-window-titlebar>
        <ng-content select="kendo-window-titlebar" *ngIf="!showDefaultTitleBar"></ng-content>

        <div *ngIf="state !== 'minimized' || keepContent"
            [hidden]="state === 'minimized' && keepContent"
            class="k-content k-window-content"
        >
            <ng-content *ngIf="!contentTemplate"></ng-content>
            <ng-template [ngTemplateOutlet]="contentTemplate" *ngIf="contentTemplate"></ng-template>
        </div>

        <ng-template [ngIf]='resizable'>
            <div *ngFor='let dir of resizeDirections'
                [direction]="dir"
                kendoWindowResizeHandle
                kendoDraggable>
            </div>
        </ng-template>
    `, isInline: true, components: [{ type: i4.WindowTitleBarComponent, selector: "kendo-window-titlebar", inputs: ["template", "id"] }], directives: [{ type: i5.LocalizedMessagesDirective, selector: "\n    [kendoDialogLocalizedMessages],\n    [kendoWindowLocalizedMessages],\n    [kendoDialogTitleBarLocalizedMessages]\n  " }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.WindowMinimizeActionDirective, selector: "button[kendoWindowMinimizeAction]", inputs: ["window"], exportAs: ["kendoWindowMinimizeAction"] }, { type: i8.WindowMaximizeActionDirective, selector: "button[kendoWindowMaximizeAction]", inputs: ["window"], exportAs: ["kendoWindowMaximizeAction"] }, { type: i9.WindowRestoreActionDirective, selector: "button[kendoWindowRestoreAction]", inputs: ["window"], exportAs: ["kendoWindowRestoreAction"] }, { type: i10.WindowCloseActionDirective, selector: "button[kendoWindowCloseAction]", inputs: ["window"], exportAs: ["kendoWindowCloseAction"] }, { type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i11.ResizeHandleDirective, selector: "[kendoWindowResizeHandle]", inputs: ["direction"] }, { type: i12.DraggableDirective, selector: "[kendoDraggable]", inputs: ["enableDrag"], outputs: ["kendoPress", "kendoDrag", "kendoRelease"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: WindowComponent, decorators: [{
            type: Component,
            args: [{
                    exportAs: 'kendoWindow',
                    providers: [
                        DragResizeService,
                        NavigationService,
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.window'
                        }
                    ],
                    selector: 'kendo-window',
                    template: `
        <ng-container kendoWindowLocalizedMessages
            i18n-closeTitle="kendo.window.closeTitle|The title of the close button"
            closeTitle="Close"

            i18n-restoreTitle="kendo.window.restoreTitle|The title of the restore button"
            restoreTitle="Restore"

            i18n-maximizeTitle="kendo.window.maximizeTitle|The title of the maximize button"
            maximizeTitle="Maximize"

            i18n-minimizeTitle="kendo.window.minimizeTitle|The title of the minimize button"
            minimizeTitle="Minimize"
        >
        <ng-container>

        <kendo-window-titlebar *ngIf="showDefaultTitleBar" [template]="titleBarTemplate" [id]="titleId">
            <div class="k-window-title">{{ title }}</div>
            <div class="k-window-actions">
                <button kendoWindowMinimizeAction  [attr.title]="minimizeButtonTitle" [attr.aria-label]="minimizeButtonTitle"></button>
                <button kendoWindowMaximizeAction [attr.title]="maximizeButtonTitle" [attr.aria-label]="maximizeButtonTitle"></button>
                <button kendoWindowRestoreAction [attr.title]="restoreButtonTitle" [attr.aria-label]="restoreButtonTitle"></button>
                <button kendoWindowCloseAction [attr.title]="closeButtonTitle" [attr.aria-label]="closeButtonTitle"></button>
            </div>
        </kendo-window-titlebar>
        <ng-content select="kendo-window-titlebar" *ngIf="!showDefaultTitleBar"></ng-content>

        <div *ngIf="state !== 'minimized' || keepContent"
            [hidden]="state === 'minimized' && keepContent"
            class="k-content k-window-content"
        >
            <ng-content *ngIf="!contentTemplate"></ng-content>
            <ng-template [ngTemplateOutlet]="contentTemplate" *ngIf="contentTemplate"></ng-template>
        </div>

        <ng-template [ngIf]='resizable'>
            <div *ngFor='let dir of resizeDirections'
                [direction]="dir"
                kendoWindowResizeHandle
                kendoDraggable>
            </div>
        </ng-template>
    `
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.DragResizeService }, { type: i2.NavigationService }, { type: i0.NgZone }, { type: i3.LocalizationService }]; }, propDecorators: { autoFocusedElement: [{
                type: Input
            }], title: [{
                type: Input
            }], draggable: [{
                type: Input
            }], resizable: [{
                type: Input
            }], keepContent: [{
                type: Input
            }], state: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], minHeight: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], top: [{
                type: Input
            }], left: [{
                type: Input
            }], dragStart: [{
                type: Output
            }], dragEnd: [{
                type: Output
            }], resizeStart: [{
                type: Output
            }], resizeEnd: [{
                type: Output
            }], close: [{
                type: Output
            }], widthChange: [{
                type: Output
            }], heightChange: [{
                type: Output
            }], topChange: [{
                type: Output
            }], leftChange: [{
                type: Output
            }], stateChange: [{
                type: Output
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabIndex']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class.k-window']
            }], dir: [{
                type: HostBinding,
                args: ['attr.dir']
            }], titleBarView: [{
                type: ViewChild,
                args: [WindowTitleBarComponent, { static: false }]
            }], titleBarContent: [{
                type: ContentChild,
                args: [WindowTitleBarComponent, { static: false }]
            }], resizeHandles: [{
                type: ViewChildren,
                args: [ResizeHandleDirective]
            }], styleMinWidth: [{
                type: HostBinding,
                args: ['style.minWidth']
            }], styleMinHeight: [{
                type: HostBinding,
                args: ['style.minHeight']
            }], stylePosition: [{
                type: HostBinding,
                args: ['style.position']
            }], wrapperMaximizedClass: [{
                type: HostBinding,
                args: ['class.k-window-maximized']
            }], wrapperMinimizedClass: [{
                type: HostBinding,
                args: ['class.k-window-minimized']
            }], onComponentFocus: [{
                type: HostListener,
                args: ['focus']
            }], onComponentBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });
