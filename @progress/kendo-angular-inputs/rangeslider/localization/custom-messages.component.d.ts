/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { RangeSliderMessages } from './messages';
import * as i0 from "@angular/core";
/**
 * Custom component messages override default component messages.
 */
export declare class RangeSliderCustomMessagesComponent extends RangeSliderMessages {
    protected service: LocalizationService;
    constructor(service: LocalizationService);
    protected get override(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeSliderCustomMessagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangeSliderCustomMessagesComponent, "kendo-rangeslider-messages", never, {}, {}, never, never>;
}
