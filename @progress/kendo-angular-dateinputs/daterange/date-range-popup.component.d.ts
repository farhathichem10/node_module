/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChangeDetectorRef, ElementRef, EventEmitter, TemplateRef, NgZone, OnInit, OnDestroy, ViewContainerRef, QueryList } from '@angular/core';
import { Align, Collision, Margin, PopupAnimation, PopupService, PopupRef } from '@progress/kendo-angular-popup';
import { DateRangePopupTemplateDirective } from './date-range-popup-template.directive';
import { DateRangeService } from './date-range.service';
import { MultiViewCalendarComponent } from '../calendar/multiview-calendar.component';
import { PreventableEvent } from '../preventable-event';
import * as i0 from "@angular/core";
/**
 * Represents the Kendo UI DateRangePopup component for Angular.
 *
 * @example
 * ```ts
 * import { DateInputsModule, DateRangeService } from '@progress/kendo-angular-dateinputs';
 *
 * _@Component({
 * providers: [DateRangeService],
 * selector: 'my-app',
 * template: `
 *  <button #anchor (click)="popup.toggle()">Toggle</button>
 *  <kendo-daterange-popup [anchor]="anchor" #popup></kendo-daterange-popup>
 * `
 * })
 * export class AppComponent {
 * }
 * ```
 */
export declare class DateRangePopupComponent implements OnInit, OnDestroy {
    private popupService;
    private dateRangeService;
    private ref;
    private zone;
    private rtl;
    container: ViewContainerRef;
    defaultTemplate: TemplateRef<any>;
    contentTemplate: DateRangePopupTemplateDirective;
    viewCalendar: QueryList<MultiViewCalendarComponent>;
    contentCalendar: QueryList<MultiViewCalendarComponent>;
    /**
     * Controls the popup animation.
     * By default, the opening and closing animations are enabled.
     * For more information about controlling the popup animations,
     * refer to the article on [animations]({% slug animations_popup %}).
     */
    animate: boolean | PopupAnimation;
    /**
     * Specifies the element that will be used as an anchor. The popup opens next to that element.
     * For more information, refer to the section on
     * [aligning to specific components]({% slug alignmentpositioning_popup %}#toc-aligning-to-components).
     */
    anchor: ElementRef;
    /**
     * Specifies the anchor pivot point.
     * For more information, refer to the section on
     * [positioning]({% slug alignmentpositioning_popup %}#toc-positioning).
     */
    anchorAlign: Align;
    /**
     * Controls the popup container. By default, the popup is appended to the root component.
     */
    appendTo: 'root' | 'component' | ViewContainerRef;
    /**
     * Configures the collision behavior of the popup.
     * For more information, refer to the article on
     * [viewport boundary detection]({% slug viewportboundarydetection_popup %}).
     */
    collision: Collision;
    /**
     * Specifies the pivot point of the popup.
     * For more information, refer to the section on
     * [positioning]({% slug alignmentpositioning_popup %}#toc-positioning).
     */
    popupAlign: Align;
    /**
     * Specifies the margin value that will be added to the popup dimensions in pixels
     * and leaves a blank space between the popup and the anchor.
     */
    margin: Margin;
    /**
     * Fires each time the popup is about to open.
     * This event is preventable. If you cancel the event, the popup will remain closed.
     * For more information, refer to the section on
     * [events]({% slug overview_datepicker %}#toc-events).
     */
    open: EventEmitter<PreventableEvent>;
    /**
     * Fires each time the popup is about to close.
     * This event is preventable. If you cancel the event, the popup will remain open.
     * For more information, refer to the section on
     * [events]({% slug overview_datepicker %}#toc-events).
     */
    close: EventEmitter<PreventableEvent>;
    /**
     * Fires each time the calendar element is blurred.
     */
    onBlur: EventEmitter<null>;
    /**
     * Fires each time the calendar element is focused.
     */
    onFocus: EventEmitter<null>;
    /**
     * Fires each time the popup is closed either on `ESC` keypress or on leaving the viewport.
     */
    cancel: EventEmitter<null>;
    /**
     * The active calendar that is visible in the popup.
     *
     * > When the popup is closed, the property returns `null`.
     */
    get calendar(): MultiViewCalendarComponent;
    set calendar(calendar: MultiViewCalendarComponent);
    /**
     * Gets the active state of the component.
     * When the opened calendar is active, returns `true`.
     */
    get isActive(): boolean;
    /**
     * @hidden
     */
    popupRef: PopupRef;
    /**
     * @hidden
     */
    popupUID: string;
    /**
     * Gets or sets the visibility state of the component.
     */
    set show(show: boolean);
    get show(): boolean;
    private activateSubscription;
    private blurSubscription;
    private focusSubscription;
    private calendarSubscriptions;
    private popupSubscriptions;
    private windowBlurSubscription;
    private resolvedPromise;
    private _calendar;
    private _show;
    constructor(popupService: PopupService, dateRangeService: DateRangeService, ref: ChangeDetectorRef, zone: NgZone, rtl: boolean);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     *  Opens the popup component and focuses the calendar.
     */
    activate(): void;
    /**
     *  Focuses the calendar (if available).
     */
    focus(): void;
    /**
     * Checks if a focused element ids placed inside the popup.
     *
     * @return boolean;
     */
    hasActiveContent(): boolean;
    /**
     * Toggles the visibility of the popup.
     * If you use the `toggle` method to show or hide the popup,
     * the `open` and `close` events do not fire.
     *
     * @param show The state of the popup.
     */
    toggle(show?: boolean): void;
    /**
     * @hidden
     *
     * Closes the popup and triggers the `cancel` event.
     */
    cancelPopup(): void;
    private handleWindowBlur;
    private handleMouseLeave;
    private handleKeydown;
    private subscribeFocusBlur;
    private addPopupSubscriptions;
    private get _appendTo();
    private _toggle;
    private destroyPopup;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePopupComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePopupComponent, "kendo-daterange-popup", ["kendo-daterange-popup"], { "animate": "animate"; "anchor": "anchor"; "anchorAlign": "anchorAlign"; "appendTo": "appendTo"; "collision": "collision"; "popupAlign": "popupAlign"; "margin": "margin"; }, { "open": "open"; "close": "close"; "onBlur": "blur"; "onFocus": "focus"; "cancel": "cancel"; }, ["contentTemplate", "contentCalendar"], never>;
}
