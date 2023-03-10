/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from "@angular/core";
import * as i1 from "./buttongroup/buttongroup.module";
import * as i2 from "./button/button.module";
import * as i3 from "./splitbutton/splitbutton.module";
import * as i4 from "./dropdownbutton/dropdownbutton.module";
import * as i5 from "./chip/chip.module";
import * as i6 from "./floatingactionbutton/floatingactionbutton.module";
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
export declare class ButtonsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ButtonsModule, never, never, [typeof i1.ButtonGroupModule, typeof i2.ButtonModule, typeof i3.SplitButtonModule, typeof i4.DropDownButtonModule, typeof i5.ChipModule, typeof i6.FloatingActionButtonModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ButtonsModule>;
}
