/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { from as fromPromise } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class ResizeBatchService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.scheduled = [];
        this.resolvedPromise = Promise.resolve(null);
        this.flush = this.flush.bind(this);
    }
    schedule(instance, method) {
        this.scheduled.push({ instance, method });
        if (!this.subscription) {
            this.ngZone.runOutsideAngular(() => {
                this.subscription = fromPromise(this.resolvedPromise)
                    .subscribe(this.flush);
            });
        }
    }
    isScheduled(instance) {
        return Boolean(this.scheduled.find(item => item.instance === instance));
    }
    cancel(instance) {
        const scheduled = this.scheduled;
        const count = scheduled.length;
        for (let idx = 0; idx < count; idx++) {
            if (scheduled[idx].instance === instance) {
                scheduled.splice(idx, 1);
                if (!scheduled.length) {
                    this.unsubscribe();
                }
                return;
            }
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    unsubscribe() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    flush() {
        this.scheduled.forEach(item => {
            item.method.call(item.instance);
        });
        this.scheduled = [];
        this.unsubscribe();
    }
}
ResizeBatchService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeBatchService, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
ResizeBatchService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeBatchService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeBatchService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; } });
