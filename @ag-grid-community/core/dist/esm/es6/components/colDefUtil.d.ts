// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ColDef, ColGroupDef } from "../main";
declare type ColKey = keyof (ColDef) | (keyof ColGroupDef);
export declare class ColDefUtil {
    static STRING_PROPERTIES: ColKey[];
    static OBJECT_PROPERTIES: ColKey[];
    static ARRAY_PROPERTIES: ColKey[];
    static NUMBER_PROPERTIES: ColKey[];
    static BOOLEAN_PROPERTIES: ColKey[];
    static FUNCTION_PROPERTIES: ColKey[];
    static ALL_PROPERTIES: ColKey[];
    static FRAMEWORK_PROPERTIES: string[];
}
export {};
