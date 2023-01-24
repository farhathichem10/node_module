/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { ResizeSensorModule } from '@progress/kendo-angular-common';
import { PopupService } from './popup.service';
import * as i0 from "@angular/core";
const POPUP_DIRECTIVES = [PopupComponent];
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
export class PopupModule {
}
PopupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PopupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupModule, declarations: [PopupComponent], imports: [CommonModule, ResizeSensorModule], exports: [PopupComponent] });
PopupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupModule, providers: [PopupService], imports: [[CommonModule, ResizeSensorModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [POPUP_DIRECTIVES],
                    entryComponents: [POPUP_DIRECTIVES],
                    exports: [POPUP_DIRECTIVES],
                    imports: [CommonModule, ResizeSensorModule],
                    providers: [PopupService]
                }]
        }] });
