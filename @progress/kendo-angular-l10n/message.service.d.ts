/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * A base class for a service that returns localized messages.
 *
 * For more information, refer to the section on [using the message service]({% slug messages_l10n %}#toc-using-the-message-service).
 */
export declare class MessageService {
    /**
     * @hidden
     */
    constructor();
    /**
     * @hidden
     */
    readonly changes: Subject<{
        rtl: boolean;
    }>;
    /**
     * Notifies the components that the messages were changed.
     *
     * @param rtl - (Optional) A new value for the [text direction token]({% slug api_l10n_rtl %}).
     */
    notify(rtl?: boolean): void;
    /**
     * Returns a localized message for the supplied key.
     *
     * @param _key - The message key. For example, `"kendo.grid.noRecords"`.
     * @return - The localized message for this key or `undefined` if not found.
     */
    get(_key: string): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageService>;
}
