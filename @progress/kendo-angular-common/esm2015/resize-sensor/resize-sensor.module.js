/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { ResizeSensorComponent } from './resize-sensor.component';
import { ResizeBatchService } from './resize-batch.service';
import * as i0 from "@angular/core";
const COMPONENT_DIRECTIVES = [ResizeSensorComponent];
/**
 * Resize Sensor module
 */
export class ResizeSensorModule {
}
ResizeSensorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeSensorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResizeSensorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeSensorModule, declarations: [ResizeSensorComponent], exports: [ResizeSensorComponent] });
ResizeSensorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeSensorModule, providers: [ResizeBatchService] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeSensorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT_DIRECTIVES],
                    exports: [COMPONENT_DIRECTIVES],
                    providers: [ResizeBatchService]
                }]
        }] });
