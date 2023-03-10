/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ElementRef, OnDestroy, Renderer2, OnInit } from '@angular/core';
import { FocusService } from './focus.service';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class FocusableDirective implements OnInit, OnDestroy {
    private focusService;
    private renderer;
    index: number;
    private element;
    private subs;
    constructor(focusService: FocusService, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    private subscribeEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FocusableDirective, "[kendoButtonFocusable]", never, { "index": "index"; }, {}, never>;
}
