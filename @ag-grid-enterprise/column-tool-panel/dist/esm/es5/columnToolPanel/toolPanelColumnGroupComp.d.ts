import { Column, ColumnEventType, Component, ITooltipParams, WithoutGridCommon } from "@ag-grid-community/core";
import { ColumnModelItem } from "./columnModelItem";
export declare class ToolPanelColumnGroupComp extends Component {
    private readonly modelItem;
    private readonly allowDragging;
    private readonly eventType;
    private readonly focusWrapper;
    private static TEMPLATE;
    private columnModel;
    private dragAndDropService;
    private modelItemUtils;
    private cbSelect;
    private eLabel;
    private eGroupOpenedIcon;
    private eGroupClosedIcon;
    private eColumnGroupIcons;
    private eDragHandle;
    private readonly columnGroup;
    private readonly columnDept;
    private displayName;
    private processingColumnStateChange;
    constructor(modelItem: ColumnModelItem, allowDragging: boolean, eventType: ColumnEventType, focusWrapper: HTMLElement);
    init(): void;
    getColumns(): Column[];
    private setupTooltip;
    getTooltipParams(): WithoutGridCommon<ITooltipParams>;
    private handleKeyDown;
    private onContextMenu;
    private addVisibilityListenersToAllChildren;
    private setupDragging;
    private createDragItem;
    private setupExpandContract;
    private onLabelClicked;
    private onCheckboxChanged;
    private getVisibleLeafColumns;
    private onChangeCommon;
    private refreshAriaLabel;
    onColumnStateChanged(): void;
    private workOutSelectedValue;
    private workOutReadOnlyValue;
    private isColumnChecked;
    private onExpandOrContractClicked;
    private onExpandChanged;
    private setOpenClosedIcons;
    private refreshAriaExpanded;
    getDisplayName(): string | null;
    onSelectAllChanged(value: boolean): void;
    isSelected(): boolean | undefined;
    isSelectable(): boolean;
    setSelected(selected: boolean): void;
}
