import { AfterViewChecked, ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NgOptionComponent implements OnChanges, AfterViewChecked, OnDestroy {
    elementRef: ElementRef<HTMLElement>;
    value: any;
    get disabled(): any;
    set disabled(value: any);
    readonly stateChange$: Subject<{
        value: any;
        disabled: boolean;
        label?: string;
    }>;
    private _disabled;
    private _previousLabel;
    constructor(elementRef: ElementRef<HTMLElement>);
    get label(): string;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    private _isDisabled;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgOptionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgOptionComponent, "ng-option", never, { "disabled": "disabled"; "value": "value"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=ng-option.component.d.ts.map