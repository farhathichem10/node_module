import { ControlValueAccessor, FormControl, ValidationErrors, Validator } from '@angular/forms';
import { OnChanges, SimpleChanges } from '@angular/core';
import { CustomKeyboardEvent } from './custom-keyboard-event';
import { IConfig } from './config';
import { MaskService } from './mask.service';
import * as ɵngcc0 from '@angular/core';
export declare class MaskDirective implements ControlValueAccessor, OnChanges, Validator {
    private document;
    private _maskService;
    protected _config: IConfig;
    maskExpression: string;
    specialCharacters: IConfig['specialCharacters'];
    patterns: IConfig['patterns'];
    prefix: IConfig['prefix'];
    suffix: IConfig['suffix'];
    thousandSeparator: IConfig['thousandSeparator'];
    decimalMarker: IConfig['decimalMarker'];
    dropSpecialCharacters: IConfig['dropSpecialCharacters'] | null;
    hiddenInput: IConfig['hiddenInput'] | null;
    showMaskTyped: IConfig['showMaskTyped'] | null;
    placeHolderCharacter: IConfig['placeHolderCharacter'] | null;
    shownMaskExpression: IConfig['shownMaskExpression'] | null;
    showTemplate: IConfig['showTemplate'] | null;
    clearIfNotMatch: IConfig['clearIfNotMatch'] | null;
    validation: IConfig['validation'] | null;
    separatorLimit: IConfig['separatorLimit'] | null;
    allowNegativeNumbers: IConfig['allowNegativeNumbers'] | null;
    leadZeroDateTime: IConfig['leadZeroDateTime'] | null;
    private _maskValue;
    private _inputValue;
    private _position;
    private _start;
    private _end;
    private _code;
    private _maskExpressionArray;
    private _justPasted;
    constructor(document: any, _maskService: MaskService, _config: IConfig);
    onChange: (_: any) => void;
    onTouch: () => void;
    ngOnChanges(changes: SimpleChanges): void;
    validate({ value }: FormControl): ValidationErrors | null;
    onPaste(): void;
    onInput(e: CustomKeyboardEvent): void;
    onBlur(): void;
    onFocus(e: MouseEvent | CustomKeyboardEvent): void;
    onKeyDown(e: CustomKeyboardEvent): void;
    /** It writes the value in the input */
    writeValue(inputValue: string | number | {
        value: string | number;
        disable?: boolean;
    }): Promise<void>;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    suffixCheckOnPressDelete(keyCode: number, el: HTMLInputElement): void;
    /** It disables the input element */
    setDisabledState(isDisabled: boolean): void;
    private _repeatPatternSymbols;
    private _applyMask;
    private _validateTime;
    private _getActualInputLength;
    private _createValidationError;
    private _setMask;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MaskDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<MaskDirective, "input[mask], textarea[mask]", never, { "maskExpression": "mask"; "specialCharacters": "specialCharacters"; "patterns": "patterns"; "prefix": "prefix"; "suffix": "suffix"; "thousandSeparator": "thousandSeparator"; "decimalMarker": "decimalMarker"; "dropSpecialCharacters": "dropSpecialCharacters"; "hiddenInput": "hiddenInput"; "showMaskTyped": "showMaskTyped"; "placeHolderCharacter": "placeHolderCharacter"; "shownMaskExpression": "shownMaskExpression"; "showTemplate": "showTemplate"; "clearIfNotMatch": "clearIfNotMatch"; "validation": "validation"; "separatorLimit": "separatorLimit"; "allowNegativeNumbers": "allowNegativeNumbers"; "leadZeroDateTime": "leadZeroDateTime"; }, {}, never>;
}

//# sourceMappingURL=mask.directive.d.ts.map