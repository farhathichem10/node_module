/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter, ElementRef, OnDestroy, OnInit, OnChanges, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DraggableDirective implements OnInit, OnChanges, OnDestroy {
    private element;
    private ngZone;
    enableDrag: boolean;
    kendoPress: EventEmitter<any>;
    kendoDrag: EventEmitter<any>;
    kendoRelease: EventEmitter<any>;
    private draggable;
    constructor(element: ElementRef, ngZone: NgZone);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    private toggleDraggable;
    private destroyDraggable;
    static ɵfac: i0.ɵɵFactoryDeclaration<DraggableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DraggableDirective, "[kendoDraggable]", never, { "enableDrag": "enableDrag"; }, { "kendoPress": "kendoPress"; "kendoDrag": "kendoDrag"; "kendoRelease": "kendoRelease"; }, never>;
}
