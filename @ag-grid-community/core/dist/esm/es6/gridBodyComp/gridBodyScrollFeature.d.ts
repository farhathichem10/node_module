// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../context/beanStub";
import { CtrlsService } from "../ctrlsService";
import { RowNode } from "../entities/rowNode";
export declare class GridBodyScrollFeature extends BeanStub {
    ctrlsService: CtrlsService;
    private animationFrameService;
    private paginationProxy;
    private rowModel;
    private heightScaler;
    private rowRenderer;
    private columnModel;
    private enableRtl;
    private lastHorizontalScrollElement;
    private eBodyViewport;
    private scrollLeft;
    private nextScrollTop;
    private scrollTop;
    private scrollTimer;
    private readonly resetLastHorizontalScrollElementDebounced;
    private centerRowContainerCtrl;
    constructor(eBodyViewport: HTMLElement);
    private postConstruct;
    private addScrollListener;
    private onDisplayedColumnsWidthChanged;
    horizontallyScrollHeaderCenterAndFloatingCenter(scrollLeft?: number): void;
    private isControllingScroll;
    private onFakeHorizontalScroll;
    private onCenterViewportScroll;
    private onBodyHorizontalScroll;
    private onVerticalScroll;
    private resetLastHorizontalScrollElement;
    private doHorizontalScroll;
    private fireScrollEvent;
    private shouldBlockScrollUpdate;
    private redrawRowsAfterScroll;
    private onHorizontalViewportChanged;
    checkScrollLeft(): void;
    executeAnimationFrameScroll(): boolean;
    setHorizontalScrollPosition(hScrollPosition: number): void;
    setVerticalScrollPosition(vScrollPosition: number): void;
    getVScrollPosition(): {
        top: number;
        bottom: number;
    };
    getHScrollPosition(): {
        left: number;
        right: number;
    };
    isHorizontalScrollShowing(): boolean;
    scrollHorizontally(pixels: number): number;
    scrollToTop(): void;
    ensureNodeVisible<TData = any>(comparator: TData | RowNode<TData> | ((row: RowNode<TData>) => boolean), position?: 'top' | 'bottom' | 'middle' | null): void;
    ensureIndexVisible(index: number, position?: 'top' | 'bottom' | 'middle' | null): void;
    ensureColumnVisible(key: any, position?: 'auto' | 'start' | 'middle' | 'end'): void;
    private getPositionedHorizontalScroll;
    private isColumnOutsideViewport;
    private getColumnBounds;
    private getViewportBounds;
}
