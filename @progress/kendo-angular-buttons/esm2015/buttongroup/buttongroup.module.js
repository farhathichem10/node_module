/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { ButtonGroupComponent } from './buttongroup.component';
import * as i0 from "@angular/core";
/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `ButtonGroupComponent`&mdash;The ButtonGroupComponent component class.
 */
export class ButtonGroupModule {
}
ButtonGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupModule, declarations: [ButtonGroupComponent], imports: [CommonModule, ButtonModule], exports: [ButtonGroupComponent] });
ButtonGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupModule, imports: [[CommonModule, ButtonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonGroupComponent],
                    exports: [ButtonGroupComponent],
                    imports: [CommonModule, ButtonModule]
                }]
        }] });
