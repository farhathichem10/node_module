import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { KeysPipe } from '../../pipes/keys.pipe';
import { Config } from '../../models/config';
import * as ɵngcc0 from '@angular/core';
export declare class NgOtpInputComponent implements OnInit, AfterViewInit {
    private keysPipe;
    config: Config;
    onInputChange: EventEmitter<string>;
    otpForm: FormGroup;
    inputControls: FormControl[];
    componentKey: string;
    inputType: string;
    constructor(keysPipe: KeysPipe);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private getControlName;
    ifLeftArrow(event: any): boolean;
    ifRightArrow(event: any): boolean;
    ifBackspaceOrDelete(event: any): boolean;
    ifKeyCode(event: any, targetCode: any): boolean;
    onKeyDown($event: any): boolean;
    onKeyUp($event: any, inputIdx: any): void;
    appendKey(id: any): string;
    setSelected(eleId: any): void;
    ifValidEntry(event: any): boolean;
    focusTo(eleId: any): void;
    setValue(value: any): void;
    rebuildValue(): void;
    getInputType(): string;
    handlePaste(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgOtpInputComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgOtpInputComponent, "ng-otp-input", never, { "config": "config"; }, { "onInputChange": "onInputChange"; }, never, never>;
}

//# sourceMappingURL=ng-otp-input.component.d.ts.map