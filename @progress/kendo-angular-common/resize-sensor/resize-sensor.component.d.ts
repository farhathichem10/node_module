/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter, OnDestroy, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { ResizeBatchService } from './resize-batch.service';
import * as i0 from "@angular/core";
/**
 * Resize Sensor Component
 *
 * Triggers a "resize" event whenever the parent DOM element size changes.
 */
export declare class ResizeSensorComponent implements OnDestroy, AfterViewChecked {
    /**
     * The maximum number of resize events to emit per second.
     *
     * Defaults to 10.
     */
    rateLimit: number;
    /**
     * Fires when the parent DOM element has been resized.
     */
    resize: EventEmitter<any>;
    private subscription;
    private resizeService;
    constructor(resizeBatchService: ResizeBatchService, element: ElementRef, ngZone: NgZone);
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    acceptSize(size?: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizeSensorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResizeSensorComponent, "kendo-resize-sensor", never, { "rateLimit": "rateLimit"; }, { "resize": "resize"; }, never, never>;
}
