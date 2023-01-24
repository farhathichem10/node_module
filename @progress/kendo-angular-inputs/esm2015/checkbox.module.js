/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { CheckBoxDirective } from './checkbox/checkbox.directive';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * Represents the [NgModule]({{ site.data.urls.angular['ngmoduleapi'] }})
 * definition for the CheckBox directive.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the CheckBox module
 * import { CheckBoxModule } from '@progress/kendo-angular-inputs';
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
 *     imports:      [BrowserModule, CheckBoxModule], // import CheckBox module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
export class CheckBoxModule {
}
CheckBoxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CheckBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CheckBoxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CheckBoxModule, declarations: [CheckBoxDirective], imports: [CommonModule], exports: [CheckBoxDirective] });
CheckBoxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CheckBoxModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CheckBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CheckBoxDirective],
                    exports: [CheckBoxDirective],
                    imports: [CommonModule]
                }]
        }] });
