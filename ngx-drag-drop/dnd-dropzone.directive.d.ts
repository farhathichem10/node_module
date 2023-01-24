import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2 } from "@angular/core";
import { DndEvent } from "./dnd-utils";
import { DropEffect, EffectAllowed } from "./dnd-types";
import * as ɵngcc0 from '@angular/core';
export interface DndDropEvent {
    event: DragEvent;
    dropEffect: DropEffect;
    isExternal: boolean;
    data?: any;
    index?: number;
    type?: any;
}
export declare class DndPlaceholderRefDirective {
    readonly elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DndPlaceholderRefDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<DndPlaceholderRefDirective, "[dndPlaceholderRef]", never, {}, {}, never>;
}
export declare class DndDropzoneDirective implements AfterViewInit, OnDestroy {
    private ngZone;
    private elementRef;
    private renderer;
    dndDropzone?: string[];
    dndEffectAllowed: EffectAllowed;
    dndAllowExternal: boolean;
    dndHorizontal: boolean;
    dndDragoverClass: string;
    dndDropzoneDisabledClass: string;
    readonly dndDragover: EventEmitter<DragEvent>;
    readonly dndDrop: EventEmitter<DndDropEvent>;
    private readonly dndPlaceholderRef?;
    private placeholder;
    private disabled;
    private readonly dragEnterEventHandler;
    private readonly dragOverEventHandler;
    private readonly dragLeaveEventHandler;
    dndDisableIf: boolean;
    dndDisableDropIf: boolean;
    constructor(ngZone: NgZone, elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDragEnter(event: DndEvent): void;
    onDragOver(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    onDragLeave(event: DndEvent): void;
    private isDropAllowed;
    private tryGetPlaceholder;
    private removePlaceholderFromDOM;
    private checkAndUpdatePlaceholderPosition;
    private getPlaceholderIndex;
    private cleanupDragoverState;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DndDropzoneDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<DndDropzoneDirective, "[dndDropzone]", never, { "dndAllowExternal": "dndAllowExternal"; "dndHorizontal": "dndHorizontal"; "dndDragoverClass": "dndDragoverClass"; "dndDropzoneDisabledClass": "dndDropzoneDisabledClass"; "dndDisableIf": "dndDisableIf"; "dndDisableDropIf": "dndDisableDropIf"; "dndDropzone": "dndDropzone"; "dndEffectAllowed": "dndEffectAllowed"; }, { "dndDragover": "dndDragover"; "dndDrop": "dndDrop"; }, ["dndPlaceholderRef"]>;
}

//# sourceMappingURL=dnd-dropzone.directive.d.ts.map