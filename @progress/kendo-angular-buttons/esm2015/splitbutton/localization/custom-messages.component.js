/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, forwardRef } from '@angular/core';
import { Messages } from './messages';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-l10n";
/**
 * Custom component messages override default component messages
 * ([see example]({% slug rtl_buttons %}).
 */
export class SplitButtonCustomMessagesComponent extends Messages {
    constructor(service) {
        super();
        this.service = service;
    }
    get override() {
        return true;
    }
}
SplitButtonCustomMessagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonCustomMessagesComponent, deps: [{ token: i1.LocalizationService }], target: i0.ɵɵFactoryTarget.Component });
SplitButtonCustomMessagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SplitButtonCustomMessagesComponent, selector: "kendo-splitbutton-messages", providers: [{
            provide: Messages,
            useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
        }], usesInheritance: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonCustomMessagesComponent, decorators: [{
            type: Component,
            args: [{
                    providers: [{
                            provide: Messages,
                            useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
                        }],
                    selector: 'kendo-splitbutton-messages',
                    template: ``
                }]
        }], ctorParameters: function () { return [{ type: i1.LocalizationService }]; } });
