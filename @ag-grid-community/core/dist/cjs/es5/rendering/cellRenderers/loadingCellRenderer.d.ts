// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Component } from "../../widgets/component";
import { ICellRendererParams } from "./iCellRenderer";
import { IComponent } from "../../interfaces/iComponent";
export interface ILoadingCellRendererParams<TData = any> extends ICellRendererParams<TData> {
}
export interface ILoadingCellRenderer {
}
export interface ILoadingCellRendererComp extends ILoadingCellRenderer, IComponent<ILoadingCellRendererParams> {
}
export declare class LoadingCellRenderer extends Component implements ILoadingCellRendererComp {
    private static TEMPLATE;
    private eLoadingIcon;
    private eLoadingText;
    constructor();
    init(params: ILoadingCellRendererParams): void;
    private setupFailed;
    private setupLoading;
    refresh(params: ILoadingCellRendererParams): boolean;
    destroy(): void;
}
