/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * A base class for a service that returns localized messages.
 *
 * For more information, refer to the section on [using the message service]({% slug messages_l10n %}#toc-using-the-message-service).
 */
export class MessageService {
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
