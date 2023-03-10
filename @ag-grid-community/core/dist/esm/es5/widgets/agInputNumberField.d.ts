// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { AgInputTextField, ITextInputField } from "./agInputTextField";
export declare class AgInputNumberField extends AgInputTextField {
    private precision?;
    private step?;
    private min?;
    private max?;
    constructor(config?: ITextInputField);
    postConstruct(): void;
    private onWheel;
    normalizeValue(value: string): string;
    private adjustPrecision;
    setMin(min: number | undefined): this;
    setMax(max: number | undefined): this;
    setPrecision(precision: number): this;
    setStep(step?: number): this;
    setValue(value: string, silent?: boolean): this;
}
