/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { ButtonGroupModule } from './buttongroup/buttongroup.module';
import { SplitButtonModule } from './splitbutton/splitbutton.module';
import { DropDownButtonModule } from './dropdownbutton/dropdownbutton.module';
import { ChipModule } from './chip/chip.module';
import { FloatingActionButtonModule } from './floatingactionbutton/floatingactionbutton.module';
import * as i0 from "@angular/core";
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmodules'])
 * definition for the Buttons components.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Buttons module
 * import { ButtonsModule } from '@progress/kendo-angular-buttons';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, ButtonsModule], // import Buttons module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
export class ButtonsModule {
}
ButtonsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonsModule, exports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule] });
ButtonsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonsModule, imports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ButtonsModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule]
                }]
        }] });
