/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, Renderer2, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Represents the [Kendo UI TextBox directive]({% slug overview_textbox %}) for the Inputs components for Angular.
 * Used to style the textbox of any `input` element.
 *
 * @example
 * ```ts-no-run
 * <input kendoTextBox />
 * <input kendoTextBox type="email" />
 * <input kendoTextBox type="password" />
 * ```
 */
export declare class TextBoxDirective implements AfterViewInit, OnDestroy {
    private renderer;
    private inputElement;
    private ngZone;
    hostClasses: boolean;
    /**
     * @hidden
     */
    onFocus: EventEmitter<any>;
    /**
     * @hidden
     */
    onBlur: EventEmitter<any>;
    /**
     * @hidden
     */
    onValueChange: EventEmitter<any>;
    /**
     * @hidden
     */
    autoFillStart: EventEmitter<any>;
    /**
     * @hidden
     */
    autoFillEnd: EventEmitter<any>;
    /**
     * @hidden
     */
    set value(text: string);
    /**
     * @hidden
     */
    get value(): string;
    get id(): string;
    set id(id: string);
    private listeners;
    constructor(renderer: Renderer2, inputElement: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextBoxDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TextBoxDirective, "input[kendoTextBox]", never, { "value": "value"; }, {}, never>;
}
