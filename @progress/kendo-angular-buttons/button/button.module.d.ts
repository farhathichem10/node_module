/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from "@angular/core";
import * as i1 from "./button.directive";
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmodules'])
 * definition for the Button directive.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Button module
 * import { ButtonModule } from '@progress/kendo-angular-buttons';
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
 *     imports:      [BrowserModule, ButtonModule], // import Button module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
export declare class ButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ButtonModule, [typeof i1.ButtonDirective], never, [typeof i1.ButtonDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ButtonModule>;
}
