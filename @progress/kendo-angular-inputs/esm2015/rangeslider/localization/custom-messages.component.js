/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, forwardRef } from '@angular/core';
import { RangeSliderMessages } from './messages';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-l10n";
/**
 * Custom component messages override default component messages.
 */
export class RangeSliderCustomMessagesComponent extends RangeSliderMessages {
    constructor(service) {
        super();
        this.service = service;
    }
    get override() {
        return true;
    }
}
RangeSliderCustomMessagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RangeSliderCustomMessagesComponent, deps: [{ token: i1.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
RangeSliderCustomMessagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RangeSliderCustomMessagesComponent, selector: "kendo-rangeslider-messages", providers: [
        {
            provide: RangeSliderMessages,
            useExisting: forwardRef(() => RangeSliderCustomMessagesComponent)
        }
    ], usesInheritance: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RangeSliderCustomMessagesComponent, decorators: [{
            type: Component,
            args: [{
                    providers: [
                        {
                            provide: RangeSliderMessages,
                            useExisting: forwardRef(() => RangeSliderCustomMessagesComponent)
                        }
                    ],
                    selector: 'kendo-rangeslider-messages',
                    template: ``
                }]
        }], ctorParameters: function () { return [{ type: i1.LocalizationService }]; } });
