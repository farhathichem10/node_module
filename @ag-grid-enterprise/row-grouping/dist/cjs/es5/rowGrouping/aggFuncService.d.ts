import { BeanStub, Column, IAggFunc, IAggFuncService } from '@ag-grid-community/core';
export declare class AggFuncService extends BeanStub implements IAggFuncService {
    private static AGG_SUM;
    private static AGG_FIRST;
    private static AGG_LAST;
    private static AGG_MIN;
    private static AGG_MAX;
    private static AGG_COUNT;
    private static AGG_AVG;
    private aggFuncsMap;
    private initialised;
    private init;
    private initialiseWithDefaultAggregations;
    private isAggFuncPossible;
    getDefaultAggFunc(column: Column): string | null;
    addAggFuncs(aggFuncs?: {
        [key: string]: IAggFunc;
    }): void;
    addAggFunc(key: string, aggFunc: IAggFunc): void;
    getAggFunc(name: string): IAggFunc;
    getFuncNames(column: Column): string[];
    clear(): void;
}
