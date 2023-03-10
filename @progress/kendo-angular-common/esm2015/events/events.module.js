/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { EventsOutsideAngularDirective } from './events-outside-angular.directive';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class EventsModule {
}
EventsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EventsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EventsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EventsModule, declarations: [EventsOutsideAngularDirective], exports: [EventsOutsideAngularDirective] });
EventsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EventsModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EventsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EventsOutsideAngularDirective],
                    exports: [EventsOutsideAngularDirective]
                }]
        }] });
