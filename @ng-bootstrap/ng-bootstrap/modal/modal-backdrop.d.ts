import { ElementRef, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NgbModalBackdrop implements OnInit {
    private _el;
    private _zone;
    animation: boolean;
    backdropClass: string;
    constructor(_el: ElementRef<HTMLElement>, _zone: NgZone);
    ngOnInit(): void;
    hide(): Observable<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbModalBackdrop, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgbModalBackdrop, "ngb-modal-backdrop", never, { "animation": "animation"; "backdropClass": "backdropClass"; }, {}, never, never>;
}

//# sourceMappingURL=modal-backdrop.d.ts.map