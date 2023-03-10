// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IHeaderColumn } from "./iHeaderColumn";
import { ColGroupDef } from "./colDef";
import { Column, ColumnPinnedType } from "./column";
import { AbstractColDef } from "./colDef";
import { ProvidedColumnGroup } from "./providedColumnGroup";
import { GridOptionsWrapper } from "../gridOptionsWrapper";
export declare class ColumnGroup implements IHeaderColumn {
    static HEADER_GROUP_SHOW_OPEN: string;
    static HEADER_GROUP_SHOW_CLOSED: string;
    static EVENT_LEFT_CHANGED: string;
    static EVENT_DISPLAYED_CHILDREN_CHANGED: string;
    static createUniqueId(groupId: string, instanceId: number): string;
    gridOptionsWrapper: GridOptionsWrapper;
    private children;
    private displayedChildren;
    private readonly groupId;
    private readonly instanceId;
    private readonly providedColumnGroup;
    private readonly pinned;
    private left;
    private oldLeft;
    private localEventService;
    private parent;
    constructor(providedColumnGroup: ProvidedColumnGroup, groupId: string, instanceId: number, pinned: ColumnPinnedType);
    reset(): void;
    getParent(): ColumnGroup;
    setParent(parent: ColumnGroup): void;
    getUniqueId(): string;
    isEmptyGroup(): boolean;
    isMoving(): boolean;
    checkLeft(): void;
    getLeft(): number | null;
    getOldLeft(): number | null;
    setLeft(left: number | null): void;
    getPinned(): ColumnPinnedType;
    private createAgEvent;
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    getGroupId(): string;
    getInstanceId(): number;
    isChildInThisGroupDeepSearch(wantedChild: IHeaderColumn): boolean;
    getActualWidth(): number;
    isResizable(): boolean;
    getMinWidth(): number;
    addChild(child: IHeaderColumn): void;
    getDisplayedChildren(): IHeaderColumn[] | null;
    getLeafColumns(): Column[];
    getDisplayedLeafColumns(): Column[];
    getDefinition(): AbstractColDef | null;
    getColGroupDef(): ColGroupDef | null;
    isPadding(): boolean;
    isExpandable(): boolean;
    isExpanded(): boolean;
    setExpanded(expanded: boolean): void;
    private addDisplayedLeafColumns;
    private addLeafColumns;
    getChildren(): IHeaderColumn[] | null;
    getColumnGroupShow(): string | undefined;
    getProvidedColumnGroup(): ProvidedColumnGroup;
    /** @deprecated getOriginalColumnGroup is deprecated, use getOriginalColumnGroup. */
    getOriginalColumnGroup(): ProvidedColumnGroup;
    getPaddingLevel(): number;
    calculateDisplayedColumns(): void;
}
