// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../context/beanStub";
export interface ITabGuard {
    setTabIndex(tabIndex?: string): void;
}
export declare class TabGuardCtrl extends BeanStub {
    private readonly focusService;
    private readonly comp;
    private readonly eTopGuard;
    private readonly eBottomGuard;
    private readonly eFocusableElement;
    private readonly providedFocusInnerElement?;
    private readonly providedFocusIn?;
    private readonly providedFocusOut?;
    private readonly providedShouldStopEventPropagation?;
    private readonly providedOnTabKeyDown?;
    private readonly providedHandleKeyDown?;
    private skipTabGuardFocus;
    constructor(params: {
        comp: ITabGuard;
        eTopGuard: HTMLElement;
        eBottomGuard: HTMLElement;
        eFocusableElement: HTMLElement;
        focusInnerElement?: (fromBottom: boolean) => void;
        onFocusIn?: (event: FocusEvent) => boolean;
        onFocusOut?: (event: FocusEvent) => boolean;
        shouldStopEventPropagation?: () => boolean;
        onTabKeyDown?: (e: KeyboardEvent) => void;
        handleKeyDown?: (e: KeyboardEvent) => void;
    });
    private postConstruct;
    private handleKeyDown;
    private tabGuardsAreActive;
    private shouldStopEventPropagation;
    private activateTabGuards;
    private deactivateTabGuards;
    private onFocus;
    private onFocusIn;
    private onFocusOut;
    onTabKeyDown(e: KeyboardEvent): void;
    getGridTabIndex(): string;
    focusInnerElement(fromBottom?: boolean): void;
    getNextFocusableElement(backwards?: boolean): HTMLElement | null;
    forceFocusOutOfContainer(up?: boolean): void;
}
