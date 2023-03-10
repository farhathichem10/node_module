/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable, EventEmitter } from '@angular/core';
import { contains } from './common';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class DragAndDropService {
    constructor() {
        this.changes = new EventEmitter();
        this.register = [];
        this.lastTarget = null;
    }
    add(target) {
        this.register.push(target);
    }
    remove(target) {
        this.register = this.register.filter(current => current !== target);
    }
    notifyDrag(draggable, element, mouseEvent) {
        const target = this.targetFor(element);
        if (this.lastTarget === target) {
            return;
        }
        this.changes.next({
            draggable,
            mouseEvent,
            target: this.lastTarget,
            type: 'leave'
        });
        if (target) {
            this.changes.next({
                draggable,
                mouseEvent,
                target,
                type: 'enter'
            });
        }
        this.lastTarget = target;
    }
    notifyDrop(draggable, mouseEvent) {
        this.changes.next({
            draggable,
            mouseEvent,
            target: this.lastTarget,
            type: 'drop'
        });
        this.lastTarget = null;
    }
    targetFor(element) {
        const comparer = contains.bind(null, element);
        return this.register.find(({ element: { nativeElement } }) => comparer(nativeElement));
    }
}
DragAndDropService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DragAndDropService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DragAndDropService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DragAndDropService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DragAndDropService, decorators: [{
            type: Injectable
        }] });
