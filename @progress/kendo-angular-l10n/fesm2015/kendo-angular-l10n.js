/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from '@angular/core';
import { Injectable, Directive, InjectionToken, Inject, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skip, map, tap } from 'rxjs/operators';

/**
 * A base class for a service that returns localized messages.
 *
 * For more information, refer to the section on [using the message service]({% slug messages_l10n %}#toc-using-the-message-service).
 */
class MessageService {
    /**
     * @hidden
     */
    constructor() {
        /**
         * @hidden
         */
        this.changes = new BehaviorSubject({ rtl: undefined });
    }
    /**
     * Notifies the components that the messages were changed.
     *
     * @param rtl - (Optional) A new value for the [text direction token]({% slug api_l10n_rtl %}).
     */
    notify(rtl) {
        this.changes.next({ rtl });
    }
    /**
     * Returns a localized message for the supplied key.
     *
     * @param _key - The message key. For example, `"kendo.grid.noRecords"`.
     * @return - The localized message for this key or `undefined` if not found.
     */
    get(_key) {
        return undefined;
    }
}
MessageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MessageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MessageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MessageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MessageService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

/**
 * Base class that acts as a component messages container.
 *
 * For internal use.
 * @hidden
 */
class ComponentMessages {
    get override() {
        return false;
    }
    ngOnChanges(changes) {
        this.register(changes);
        if (Object.keys(changes).some(field => !changes[field].isFirstChange())) {
            this.service.notifyChanges();
        }
    }
    ngOnInit() {
        this.subscription = this.service.changes.pipe(skip(1)).subscribe(() => this.register(this));
    }
    register(changes) {
        const keys = Object.keys(changes);
        keys.forEach(key => this.service.register(key, this[key], this.override));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ComponentMessages.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ComponentMessages, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ComponentMessages.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ComponentMessages, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ComponentMessages, decorators: [{
            type: Directive,
            args: [{}]
        }] });

/**
 * A token that specifies the text direction of Kendo UI for Angular components.
 *
 * @example
 * {% meta height:230 %}
 * {% embed_file rtl/app.module.ts preview %}
 * {% embed_file rtl/app.component.ts %}
 * {% embed_file shared/main.ts hidden %}
 * {% endmeta %}
 *
 */
const RTL = new InjectionToken("Kendo UI Right-to-Left token");

/**
 * Localization prefix for the component messages.
 *
 * For internal use.
 * @hidden
 */
const L10N_PREFIX = new InjectionToken('Localization key prefix');
/**
 * Component localization service.
 *
 * For internal use.
 * @hidden
 */
class LocalizationService {
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
LocalizationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalizationService, deps: [{ token: L10N_PREFIX }, { token: MessageService, optional: true }, { token: RTL, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
LocalizationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalizationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalizationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [L10N_PREFIX]
                }] }, { type: MessageService, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [RTL]
                }] }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentMessages, L10N_PREFIX, LocalizationService, MessageService, RTL };

