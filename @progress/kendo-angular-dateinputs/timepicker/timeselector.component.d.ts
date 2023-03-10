/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, QueryList, OnInit, OnChanges, OnDestroy, Renderer2 } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { IntlService } from '@progress/kendo-angular-intl';
import { TimeListComponent } from './timelist.component';
import { TimePickerDOMService } from './services/dom.service';
import { TimePickerIncrementalSteps } from './models/incremental-steps.model';
import { PickerService } from '../common/picker.service';
import * as i0 from "@angular/core";
/**
 * @hidden
 *
 * Represents the Kendo UI TimeSelector component for Angular.
 */
export declare class TimeSelectorComponent implements OnChanges, OnInit, OnDestroy {
    localization: LocalizationService;
    private cdr;
    private element;
    intl: IntlService;
    dom: TimePickerDOMService;
    private zone;
    private renderer;
    private pickerService?;
    accept: ElementRef;
    cancel: ElementRef;
    now: ElementRef;
    timeLists: QueryList<TimeListComponent>;
    timeListWrappers: QueryList<ElementRef>;
    /**
     * @hidden
     */
    get disabledClass(): boolean;
    /**
     * Specifies the time format used to display the time list columns.
     */
    format: string;
    /**
     * Specifies the smallest valid time value.
     */
    min: Date;
    /**
     * Specifies the biggest valid time value.
     */
    max: Date;
    /**
     * Determines whether to display the **Cancel** button in the popup.
     */
    cancelButton: boolean;
    /**
     * Determines whether to display the **Set** button in the popup.
     */
    setButton: boolean;
    /**
     * Determines whether to display the **Now** button in the popup.
     *
     * > If the current time is out of range or the incremental step is greater than `1`, the **Now** button will be hidden.
     */
    nowButton: boolean;
    /**
     * Sets or gets the `disabled` property of the TimeSelector and determines whether the component is active.
     */
    disabled: boolean;
    /**
     * Configures the incremental steps of the TimeSelector.
     *
     * The available options are:
     * - `hour: Number`&mdash;Controls the incremental step of the hour value.
     * - `minute: Number`&mdash;Controls the incremental step of the minute value.
     * - `second: Number`&mdash;Controls the incremental step of the second value.
     *
     * @example
     * ```ts
     * _@Component({
     * selector: 'my-app',
     * template: `
     *  <kendo-timeselector format="HH:mm:ss" [steps]="steps"></kendo-timeselector>
     * `
     * })
     * export class AppComponent {
     *   public steps = { hour: 2, minute: 15, second: 15 };
     * }
     * ```
     *
     * > If the incremental step is greater than `1`, the **Now** button will be hidden.
     */
    set steps(steps: TimePickerIncrementalSteps);
    get steps(): TimePickerIncrementalSteps;
    /**
     * Specifies the value of the TimeSelector component.
     */
    value: Date;
    /**
     * Fires each time the user selects a new value.
     */
    valueChange: EventEmitter<Date>;
    /**
     * Fires each time the user cancels the selected value.
     */
    valueReject: EventEmitter<any>;
    dateFormatParts: any[];
    isActive: boolean;
    showNowButton: boolean;
    set current(value: Date);
    get current(): Date;
    get activeListIndex(): number;
    set activeListIndex(value: number);
    private mergeValue;
    private snapTime;
    private _activeListIndex;
    private _current;
    private _steps;
    private subscriptions;
    private domEvents;
    constructor(localization: LocalizationService, cdr: ChangeDetectorRef, element: ElementRef, intl: IntlService, dom: TimePickerDOMService, zone: NgZone, renderer: Renderer2, pickerService?: PickerService);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(_: any): void;
    ngOnDestroy(): void;
    /**
     * Focuses the TimeSelector component.
     *
     * @example
     * ```ts
     * _@Component({
     * selector: 'my-app',
     * template: `
     *  <button (click)="timeselector.focus()">Focus time picker</button>
     *  <kendo-timeselector #timeselector></kendo-timeselector>
     * `
     * })
     * export class AppComponent { }
     * ```
     */
    focus(): void;
    /**
     * Blurs the TimeSelector component.
     */
    blur(): void;
    /**
     * @hidden
     */
    handleAccept(): void;
    /**
     * @hidden
     */
    handleNow(): void;
    /**
     * @hidden
     */
    handleReject(): void;
    /**
     * @hidden
     */
    handleFocus(args: any): void;
    /**
     * @hidden
     */
    handleListFocus(args: any): void;
    /**
     * @hidden
     */
    handleBlur(args: any): void;
    /**
     * @hidden
     */
    containsElement(element: any): boolean;
    partStep(part: any): number;
    private init;
    private focusList;
    private handleChange;
    private hasActiveButton;
    private hasSteps;
    private intlChange;
    private bindEvents;
    private handleKeydown;
    private emitBlur;
    private emitFocus;
    private listIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSelectorComponent, [null, null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSelectorComponent, "kendo-timeselector", ["kendo-timeselector"], { "format": "format"; "min": "min"; "max": "max"; "cancelButton": "cancelButton"; "setButton": "setButton"; "nowButton": "nowButton"; "disabled": "disabled"; "steps": "steps"; "value": "value"; }, { "valueChange": "valueChange"; "valueReject": "valueReject"; }, never, never>;
}
