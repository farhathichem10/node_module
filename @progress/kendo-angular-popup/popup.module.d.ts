/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from "@angular/core";
import * as i1 from "./popup.component";
import * as i2 from "@angular/common";
import * as i3 from "@progress/kendo-angular-common";
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmoduleapi'])
 * definition for the Popup component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Popup module
 * import { PopupModule } from '@progress/kendo-angular-popup';
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
 *     imports:      [BrowserModule, PopupModule], // import Popup module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
export declare class PopupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PopupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PopupModule, [typeof i1.PopupComponent], [typeof i2.CommonModule, typeof i3.ResizeSensorModule], [typeof i1.PopupComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PopupModule>;
}
