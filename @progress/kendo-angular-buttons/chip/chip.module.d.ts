/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from "@angular/core";
import * as i1 from "./chip.component";
import * as i2 from "./chip-list.component";
import * as i3 from "@angular/common";
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmoduleapi'])
 * definition for the Chip and ChipList components.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Chip module
 * import { ChipModule } from '@progress/kendo-angular-buttons';
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
 *     imports:      [BrowserModule, ChipModule], // import Chip module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * ```
 */
export declare class ChipModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ChipModule, [typeof i1.ChipComponent, typeof i2.ChipListComponent], [typeof i3.CommonModule], [typeof i1.ChipComponent, typeof i2.ChipListComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ChipModule>;
}
