/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ListModule } from '../listbutton/list.module';
import { ButtonModule } from '../button/button.module';
import { DropDownButtonComponent } from './dropdownbutton.component';
import * as i0 from "@angular/core";
/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `DropDownButtonComponent`&mdash;The DropDownButtonComponent component class.
 */
export class DropDownButtonModule {
}
DropDownButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropDownButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonModule, declarations: [DropDownButtonComponent], imports: [CommonModule, PopupModule, ListModule, ButtonModule], exports: [DropDownButtonComponent, ListModule] });
DropDownButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonModule, imports: [[CommonModule, PopupModule, ListModule, ButtonModule], ListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DropDownButtonComponent],
                    exports: [DropDownButtonComponent, ListModule],
                    imports: [CommonModule, PopupModule, ListModule, ButtonModule]
                }]
        }] });
