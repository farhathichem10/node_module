/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from "@angular/core";
import * as i1 from "./floatingactionbutton.component";
import * as i2 from "./templates/dial-item-template.directive";
import * as i3 from "./templates/fab-template.directive";
import * as i4 from "./dial-list.component";
import * as i5 from "./dial-item.component";
import * as i6 from "@angular/common";
import * as i7 from "@progress/kendo-angular-popup";
import * as i8 from "../listbutton/list.module";
import * as i9 from "@progress/kendo-angular-common";
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmoduleapi'])
 * definition for the FloatingActionButton component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the FloatingActionButton module
 * import { FloatingActionButtonModule } from '@progress/kendo-angular-buttons';
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
 *     imports:      [BrowserModule, FloatingActionButtonModule], // import FloatingActionButton module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * ```
 */
export declare class FloatingActionButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FloatingActionButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FloatingActionButtonModule, [typeof i1.FloatingActionButtonComponent, typeof i2.DialItemTemplateDirective, typeof i3.FloatingActionButtonTemplateDirective, typeof i4.DialListComponent, typeof i5.DialItemComponent], [typeof i6.CommonModule, typeof i7.PopupModule, typeof i8.ListModule, typeof i9.EventsModule], [typeof i1.FloatingActionButtonComponent, typeof i2.DialItemTemplateDirective, typeof i3.FloatingActionButtonTemplateDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FloatingActionButtonModule>;
}
