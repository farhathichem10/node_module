/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { auditTime } from 'rxjs/operators';
import { ResizeCompatService } from './compat.service';
import { ResizeObserverService } from './observer.service';
import * as i0 from "@angular/core";
import * as i1 from "./resize-batch.service";
/**
 * Emit up to 10 resize events per second by default.
 * Chosen as a compromise between responsiveness and performance.
 */
const DEFAULT_RATE_LIMIT = 10;
/**
 * Resize Sensor Component
 *
 * Triggers a "resize" event whenever the parent DOM element size changes.
 */
export class ResizeSensorComponent {
    constructor(resizeBatchService, element, ngZone) {
        /**
         * The maximum number of resize events to emit per second.
         *
         * Defaults to 10.
         */
        this.rateLimit = DEFAULT_RATE_LIMIT;
        /**
         * Fires when the parent DOM element has been resized.
         */
        this.resize = new EventEmitter();
        const serviceType = ResizeObserverService.supported() ? ResizeObserverService : ResizeCompatService;
        this.resizeService = new serviceType(resizeBatchService, element, ngZone);
        const throttleTime = 1000 / (this.rateLimit || DEFAULT_RATE_LIMIT);
        this.subscription = this.resizeService.resize
            .pipe(auditTime(throttleTime))
            .subscribe(() => {
            if (!this.resizeService.acceptedSize) {
                this.resize.emit();
            }
        });
    }
    ngAfterViewChecked() {
        this.resizeService.checkChanges();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.resizeService.destroy();
    }
    acceptSize(size) {
        this.resizeService.acceptSize(size);
    }
}
ResizeSensorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeSensorComponent, deps: [{ token: i1.ResizeBatchService }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
ResizeSensorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ResizeSensorComponent, selector: "kendo-resize-sensor", inputs: { rateLimit: "rateLimit" }, outputs: { resize: "resize" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeSensorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'kendo-resize-sensor',
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.ResizeBatchService }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { rateLimit: [{
                type: Input
            }], resize: [{
                type: Output
            }] } });
