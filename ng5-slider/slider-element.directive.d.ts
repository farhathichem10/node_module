import { ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SliderElementDirective {
    protected elemRef: ElementRef;
    protected renderer: Renderer2;
    protected changeDetectionRef: ChangeDetectorRef;
    private _position;
    readonly position: number;
    private _dimension;
    readonly dimension: number;
    private _alwaysHide;
    readonly alwaysHide: boolean;
    private _vertical;
    readonly vertical: boolean;
    private _scale;
    readonly scale: number;
    opacity: number;
    visibility: string;
    left: string;
    bottom: string;
    height: string;
    width: string;
    private eventListenerHelper;
    private eventListeners;
    constructor(elemRef: ElementRef, renderer: Renderer2, changeDetectionRef: ChangeDetectorRef);
    setAlwaysHide(hide: boolean): void;
    hide(): void;
    show(): void;
    isVisible(): boolean;
    setVertical(vertical: boolean): void;
    setScale(scale: number): void;
    setPosition(pos: number): void;
    calculateDimension(): void;
    setDimension(dim: number): void;
    getBoundingClientRect(): ClientRect;
    on(eventName: string, callback: (event: any) => void, debounceInterval?: number): void;
    onPassive(eventName: string, callback: (event: any) => void, debounceInterval?: number): void;
    off(eventName?: string): void;
    private isRefDestroyed();
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SliderElementDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SliderElementDirective, "[ng5SliderElement]", never, {}, {}, never>;
}

//# sourceMappingURL=slider-element.directive.d.ts.map