/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ButtonModule } from './../button/button.module';
import { ListModule } from './../listbutton/list.module';
import { SplitButtonComponent } from './splitbutton.component';
import { LocalizedSplitButtonMessagesDirective } from './localization/localized-messages.directive';
import { SplitButtonCustomMessagesComponent } from './localization/custom-messages.component';
import * as i0 from "@angular/core";
/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `SplitButtonComponent`&mdash;The SplitButtonComponent component class.
 */
export class SplitButtonModule {
}
SplitButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonModule, declarations: [SplitButtonComponent, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent], imports: [CommonModule, PopupModule, ButtonModule, ListModule], exports: [SplitButtonComponent, ListModule, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent] });
SplitButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonModule, imports: [[CommonModule, PopupModule, ButtonModule, ListModule], ListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SplitButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SplitButtonComponent, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent],
                    exports: [SplitButtonComponent, ListModule, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent],
                    imports: [CommonModule, PopupModule, ButtonModule, ListModule]
                }]
        }] });
