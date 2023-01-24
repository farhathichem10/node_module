/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { SliderMessages } from './messages';
import * as i0 from "@angular/core";
/**
 * Custom component messages override default component messages.
 */
export declare class SliderCustomMessagesComponent extends SliderMessages {
    protected service: LocalizationService;
    constructor(service: LocalizationService);
    protected get override(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderCustomMessagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderCustomMessagesComponent, "kendo-slider-messages", never, {}, {}, never, never>;
}
