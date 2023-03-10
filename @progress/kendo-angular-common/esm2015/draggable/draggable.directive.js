/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter, Directive, Output, Input } from '@angular/core';
import { isDocumentAvailable, isChanged } from '../utils';
import { Draggable } from '@progress/kendo-draggable';
import * as i0 from "@angular/core";
export class DraggableDirective {
    constructor(element, ngZone) {
        this.element = element;
        this.ngZone = ngZone;
        this.enableDrag = true;
        this.kendoPress = new EventEmitter();
        this.kendoDrag = new EventEmitter();
        this.kendoRelease = new EventEmitter();
    }
    ngOnInit() {
        this.toggleDraggable();
    }
    ngOnChanges(changes) {
        if (isChanged('enableDrag', changes)) {
            this.toggleDraggable();
        }
    }
    ngOnDestroy() {
        this.destroyDraggable();
    }
    toggleDraggable() {
        if (isDocumentAvailable()) {
            this.destroyDraggable();
            if (this.enableDrag) {
                this.draggable = new Draggable({
                    drag: (e) => this.kendoDrag.next(e),
                    press: (e) => this.kendoPress.next(e),
                    release: (e) => this.kendoRelease.next(e)
                });
                this.ngZone.runOutsideAngular(() => this.draggable.bindTo(this.element.nativeElement));
            }
        }
    }
    destroyDraggable() {
        if (this.draggable) {
            this.draggable.destroy();
            this.draggable = null;
        }
    }
}
DraggableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DraggableDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
DraggableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: DraggableDirective, selector: "[kendoDraggable]", inputs: { enableDrag: "enableDrag" }, outputs: { kendoPress: "kendoPress", kendoDrag: "kendoDrag", kendoRelease: "kendoRelease" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DraggableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoDraggable]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { enableDrag: [{
                type: Input
            }], kendoPress: [{
                type: Output
            }], kendoDrag: [{
                type: Output
            }], kendoRelease: [{
                type: Output
            }] } });
