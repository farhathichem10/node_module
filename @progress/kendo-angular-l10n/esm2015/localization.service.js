/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Inject, Injectable, Optional, InjectionToken } from '@angular/core';
import { RTL } from './rtl';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./message.service";
/**
 * Localization prefix for the component messages.
 *
 * For internal use.
 * @hidden
 */
export const L10N_PREFIX = new InjectionToken('Localization key prefix');
/**
 * Component localization service.
 *
 * For internal use.
 * @hidden
 */
export class LocalizationService {
    constructor(prefix, messageService, _rtl) {
        this.prefix = prefix;
        this.messageService = messageService;
        this._rtl = _rtl;
        this.changes = new BehaviorSubject({ rtl: this._rtl });
        this.dictionary = {};
        if (messageService) {
            this.subscription = messageService.changes
                .pipe(map(({ rtl }) => rtl !== undefined ? rtl : this._rtl), tap(rtl => this._rtl = rtl))
                .subscribe(rtl => {
                this.dictionary = {};
                this.changes.next({ rtl });
            });
        }
    }
    get rtl() {
        return this._rtl;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    get(shortKey) {
        const key = this.key(shortKey);
        return this.dictionary[key];
    }
    register(shortKey, value, override = false) {
        const key = this.key(shortKey);
        let message = value;
        if (!override) {
            if (this.dictionary.hasOwnProperty(key)) {
                return;
            }
            message = this.defaultValue(key, value);
        }
        this.dictionary[key] = message;
    }
    notifyChanges() {
        this.changes.next({ rtl: this.rtl });
    }
    key(shortKey) {
        return this.prefix + '.' + shortKey;
    }
    defaultValue(key, value) {
        if (!this.messageService) {
            return value;
        }
        const alt = this.messageService.get(key);
        return (alt === undefined) ? value : alt;
    }
}
LocalizationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalizationService, deps: [{ token: L10N_PREFIX }, { token: i1.MessageService, optional: true }, { token: RTL, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
LocalizationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalizationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalizationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [L10N_PREFIX]
                }] }, { type: i1.MessageService, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [RTL]
                }] }]; } });
