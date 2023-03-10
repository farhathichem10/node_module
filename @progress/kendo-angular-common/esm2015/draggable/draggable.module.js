/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class DraggableModule {
}
DraggableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DraggableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DraggableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DraggableModule, declarations: [DraggableDirective], imports: [CommonModule], exports: [DraggableDirective] });
DraggableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DraggableModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DraggableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DraggableDirective],
                    exports: [DraggableDirective],
                    imports: [CommonModule]
                }]
        }] });
