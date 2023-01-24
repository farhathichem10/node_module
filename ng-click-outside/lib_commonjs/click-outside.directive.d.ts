import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, NgZone } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ClickOutsideDirective implements OnInit, OnChanges, OnDestroy {
    private _el;
    private _ngZone;
    private platformId;
    clickOutsideEnabled: boolean;
    attachOutsideOnClick: boolean;
    delayClickOutsideInit: boolean;
    emitOnBlur: boolean;
    exclude: string;
    excludeBeforeClick: boolean;
    clickOutsideEvents: string;
    clickOutside: EventEmitter<Event>;
    private _nodesExcluded;
    private _events;
    constructor(_el: ElementRef, _ngZone: NgZone, platformId: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _init;
    private _initOnClickBody;
    private _excludeCheck;
    private _onClickBody;
    private _onWindowBlur;
    private _emit;
    private _shouldExclude;
    private _initClickOutsideListener;
    private _removeClickOutsideListener;
    private _initAttachOutsideOnClickListener;
    private _removeAttachOutsideOnClickListener;
    private _initWindowBlurListener;
    private _removeWindowBlurListener;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ClickOutsideDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<ClickOutsideDirective, "[clickOutside]", never, { "clickOutsideEnabled": "clickOutsideEnabled"; "attachOutsideOnClick": "attachOutsideOnClick"; "delayClickOutsideInit": "delayClickOutsideInit"; "emitOnBlur": "emitOnBlur"; "exclude": "exclude"; "excludeBeforeClick": "excludeBeforeClick"; "clickOutsideEvents": "clickOutsideEvents"; }, { "clickOutside": "clickOutside"; }, never>;
}

//# sourceMappingURL=click-outside.directive.d.ts.map