/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { Messages } from './messages';
import * as i0 from "@angular/core";
/**
 * Custom component messages override default component messages
 * ([see example]({% slug rtl_buttons %}).
 */
export declare class SplitButtonCustomMessagesComponent extends Messages {
    protected service: LocalizationService;
    constructor(service: LocalizationService);
    protected get override(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitButtonCustomMessagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitButtonCustomMessagesComponent, "kendo-splitbutton-messages", never, {}, {}, never, never>;
}
