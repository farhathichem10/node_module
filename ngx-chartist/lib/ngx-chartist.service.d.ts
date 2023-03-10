import * as Chartist from 'chartist';
import * as ɵngcc0 from '@angular/core';
export declare type IChartistEscapeMap = Chartist.IChartistEscapeMap;
export declare type IChartistPieChart = Chartist.IChartistPieChart;
export declare type IChartistBarChart = Chartist.IChartistBarChart;
export declare type IChartistLineChart = Chartist.IChartistLineChart;
export declare type IChartistCandleChart = Chartist.IChartistCandleChart;
export declare type IFixedScaleAxisStatic = Chartist.IFixedScaleAxisStatic;
export declare type IAutoScaleAxisStatic = Chartist.IAutoScaleAxisStatic;
export declare type IStepAxisStatic = Chartist.IStepAxisStatic;
export declare type IChartistSvgStatic = Chartist.ChartistSvgStatic;
export declare type IChartistInterpolationStatic = Chartist.ChartistInterpolationStatic;
export declare class NgxChartistService {
    constructor();
    getPrecision(): number;
    getEscapingMap(): IChartistEscapeMap;
    getPie(): IChartistPieChart;
    getBar(): IChartistBarChart;
    getLine(): IChartistLineChart;
    getCandle(): IChartistCandleChart;
    getFixedScaleAxis(): IFixedScaleAxisStatic;
    getAutoScaleAxis(): IAutoScaleAxisStatic;
    getStepAxis(): IStepAxisStatic;
    getSvg(): IChartistSvgStatic;
    getInterpolation(): IChartistInterpolationStatic;
    getNoop(): Function;
    getPlugins(): any;
    alphaNumerate(n: number): string;
    extend(target: Object, ...sources: Object[]): Object;
    replaceAll(str: string, subStr: string, newSubStr: string): string;
    ensureUnit(value: number, unit: string): string;
    quantity(input: string | number): Object;
    query(query: Node | string): Node;
    times(length: number): Array<any>;
    sum(previous: number, current: number): number;
    mapMultiply(factor: number): (num: number) => number;
    mapAdd(addend: number): (num: number) => number;
    serialMap(arr: Array<any>, cb: Function): Array<any>;
    roundWithPrecision(value: number, digits?: number): number;
    getMultiValue(value: any, dimension?: any): number;
    serialize(data: Object | string | number): string;
    deserialize(data: string): Object | string | number;
    createSvg(container: Node, width: string, height: string, className: string): Object;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgxChartistService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NgxChartistService>;
}

//# sourceMappingURL=ngx-chartist.service.d.ts.map