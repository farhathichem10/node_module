import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NgbModalWindow implements OnInit, OnDestroy {
    private _document;
    private _elRef;
    private _zone;
    private _closed$;
    private _elWithFocus;
    private _dialogEl;
    animation: boolean;
    ariaLabelledBy: string;
    ariaDescribedBy: string;
    backdrop: boolean | string;
    centered: string;
    keyboard: boolean;
    scrollable: string;
    size: string;
    windowClass: string;
    modalDialogClass: string;
    dismissEvent: EventEmitter<any>;
    shown: Subject<void>;
    hidden: Subject<void>;
    constructor(_document: any, _elRef: ElementRef<HTMLElement>, _zone: NgZone);
    dismiss(reason: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    hide(): Observable<any>;
    private _show;
    private _enableEventHandling;
    private _disableEventHandling;
    private _setFocus;
    private _restoreFocus;
    private _bumpBackdrop;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbModalWindow, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgbModalWindow, "ngb-modal-window", never, { "backdrop": "backdrop"; "keyboard": "keyboard"; "animation": "animation"; "ariaLabelledBy": "ariaLabelledBy"; "ariaDescribedBy": "ariaDescribedBy"; "centered": "centered"; "scrollable": "scrollable"; "size": "size"; "windowClass": "windowClass"; "modalDialogClass": "modalDialogClass"; }, { "dismissEvent": "dismiss"; }, never, ["*"]>;
}

//# sourceMappingURL=modal-window.d.ts.map