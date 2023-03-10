/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { isDocumentAvailable } from '@progress/kendo-angular-common';
import { FRAME_DURATION } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "./dom.service";
/**
 * @hidden
 */
export class ResizeService {
    constructor(_dom, _zone) {
        this._dom = _dom;
        this._zone = _zone;
    }
    subscribe(callback) {
        if (!isDocumentAvailable()) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            this.subscription = fromEvent(this._dom.getWindow(), "resize")
                .pipe(auditTime(FRAME_DURATION))
                .subscribe(() => callback());
        });
    }
    unsubscribe() {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
    isUnsubscribed() {
        return this.subscription && this.subscription.closed;
    }
}
ResizeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeService, deps: [{ token: i1.DOMService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
ResizeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DOMService }, { type: i0.NgZone }]; } });
