/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { isDocumentAvailable } from '@progress/kendo-angular-common';
import { FRAME_DURATION } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "./dom.service";
/**
 * @hidden
 */
export const THRESHOLD_DIFF = 1;
/**
 * @hidden
 */
export class ScrollableService {
    constructor(_dom, _zone) {
        this._dom = _dom;
        this._zone = _zone;
    }
    forElement(element) {
        this.unsubscribe();
        this.element = element;
        return this;
    }
    subscribe(callback) {
        if (!callback || !isDocumentAvailable() || !this.element) {
            return;
        }
        const parents = this._dom.scrollableParents(this.element);
        this._zone.runOutsideAngular(() => {
            const observables = parents.map(p => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
            const subscriber = (e) => {
                const target = e.target;
                const isParent = parents.filter(p => p === target).length > 0;
                const isDocument = target === document;
                const isWindow = target === window;
                if (isParent || isDocument || isWindow) {
                    callback(this.isVisible(this.element, target));
                }
            };
            this.subscription = merge(...observables).subscribe(subscriber);
        });
    }
    unsubscribe() {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
    isVisible(elem, container) {
        const elemRect = this._dom.boundingOffset(elem);
        const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
        if (THRESHOLD_DIFF < (containerRect.top - elemRect.bottom)) {
            return false;
        }
        if (THRESHOLD_DIFF < (elemRect.top - containerRect.bottom)) {
            return false;
        }
        if (THRESHOLD_DIFF < (elemRect.left - containerRect.right)) {
            return false;
        }
        if (THRESHOLD_DIFF < (containerRect.left - elemRect.right)) {
            return false;
        }
        return true;
    }
}
ScrollableService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ScrollableService, deps: [{ token: i1.DOMService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
ScrollableService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ScrollableService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ScrollableService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DOMService }, { type: i0.NgZone }]; } });
