/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { SearchBarComponent } from '../common/searchbar.component';
import { Renderer2, ViewContainerRef, ElementRef, TemplateRef, OnDestroy, OnChanges, DoCheck, EventEmitter, AfterContentChecked, AfterViewInit, ChangeDetectorRef, KeyValueDiffers, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectionService, SelectionEvent } from '../common/selection/selection.service';
import { PopupSettings } from '../common/models/popup-settings';
import { NavigationService } from '../common/navigation/navigation.service';
import { DisabledItemsService } from '../common/disabled-items/disabled-items.service';
import { ItemDisabledFn } from '../common/disabled-items/item-disabled';
import { ItemTemplateDirective } from '../common/templates/item-template.directive';
import { CustomItemTemplateDirective } from '../common/templates/custom-item-template.directive';
import { GroupTemplateDirective } from '../common/templates/group-template.directive';
import { FixedGroupTemplateDirective } from '../common/templates/fixed-group-template.directive';
import { HeaderTemplateDirective } from '../common/templates/header-template.directive';
import { FooterTemplateDirective } from '../common/templates/footer-template.directive';
import { TagTemplateDirective } from '../common/templates/tag-template.directive';
import { GroupTagTemplateDirective } from '../common/templates/group-tag-template.directive';
import { NoDataTemplateDirective } from '../common/templates/no-data-template.directive';
import { PreventableEvent } from '../common/models/preventable-event';
import { RemoveTagEvent } from '../common/models/remove-tag-event';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PopupService, PopupRef } from '@progress/kendo-angular-popup';
import { FilterableComponent } from '../common/filtering/filterable-component';
import { DataService } from '../common/data.service';
import { ListComponent } from '../common/list.component';
import { MultiSelectCheckableSettings } from '../common/models/checkboxes-settings';
import { VirtualizationSettings } from '../common/models/virtualization-settings';
import { PageChangeEvent } from '../common/models/page-change-event';
import { DropDownSize } from '../common/models/size';
import { DropDownRounded } from '../common/models/rounded';
import { DropDownFillMode } from '../common/models/fillmode';
import * as i0 from "@angular/core";
/**
 * Represents the [Kendo UI MultiSelect component for Angular]({% slug overview_multiselect %}).
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-multiselect [data]="listItems">
 *  </kendo-multiselect>
 * `
 * })
 * class AppComponent {
 *   public listItems: Array<string> = ["Item 1", "Item 2", "Item 3", "Item 4"];
 * }
 * ```
 */
export declare class MultiSelectComponent implements OnDestroy, OnChanges, OnInit, DoCheck, AfterContentChecked, AfterViewInit, FilterableComponent {
    wrapper: ElementRef;
    private localization;
    private popupService;
    private dataService;
    private selectionService;
    private navigationService;
    private disabledItemsService;
    private cdr;
    private differs;
    private renderer;
    private _zone;
    private touchEnabled;
    listBoxId: string;
    tagListId: string;
    tagPrefix: string;
    optionPrefix: string;
    popupRef: PopupRef;
    text: string;
    tags: any[];
    focusedTagIndex: number;
    /**
     * Focuses a specific item of the MultiSelect based on a provided index.
     * If there is a custom item it is positioned at index -1.
     * If null or invalid index is provided the focus will be removed.
     */
    focusItemAt(index: number): void;
    /**
     * Focuses the MultiSelect.
     */
    focus(): void;
    /**
     * @hidden
     */
    onSearchBarFocus(): void;
    /**
     * Blurs the MultiSelect.
     */
    blur(): void;
    /**
     * @hidden
     */
    onSearchBarBlur(): void;
    /**
     * @hidden
     */
    onMouseDown(event: any): void;
    /**
     * @hidden
     */
    onResize(): void;
    get appendTo(): ViewContainerRef;
    /**
     * @hidden
     */
    focusableId: string;
    /**
     * Determines whether to close the options list of the MultiSelect after the item selection is finished
     * ([see example]({% slug openstate_multiselect %}#toc-keeping-the-options-list-open-while-on-focus)).
     * @default true
     */
    autoClose: boolean;
    /**
     * Sets and gets the loading state of the MultiSelect.
     */
    loading: boolean;
    /**
     * Sets the data of the MultiSelect.
     *
     * > The data has to be provided in an array-like list of items.
     */
    set data(data: any[]);
    get data(): any[];
    /**
     * Sets the value of the MultiSelect. It can be either of the primitive (string, numbers) or of the complex (objects) type.
     * To define the type, use the `valuePrimitive` option.
     *
     * > All selected values which are not present in the source are ignored.
     */
    set value(values: any[]);
    get value(): any[];
    /**
     * Sets the data item field that represents the item value.
     * If the data contains only primitive values, do not define it.
     *
     * > The `valueField` property can be set to point to a nested property value - e.g. `category.id`.
     */
    valueField: string;
    /**
     * Sets the data item field that represents the item text.
     * If the data contains only primitive values, do not define it.
     *
     * > The `textField` property can be set to point to a nested property value - e.g. `category.name`.
     */
    textField: string;
    /**
     * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
     */
    tabindex: number;
    /**
     * @hidden
     */
    set tabIndex(tabIndex: number);
    get tabIndex(): number;
    /**
     * Sets the size of the component.
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     *
     */
    set size(size: DropDownSize);
    get size(): DropDownSize;
    /**
     * Sets the border radius of the component.
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `full`
     * * `none`
     *
     */
    set rounded(rounded: DropDownRounded);
    get rounded(): DropDownRounded;
    /**
     * Sets the fillMode of the component.
     *
     * The possible values are:
     * * `flat`
     * * `solid` (default)
     * * `outline`
     * * `none`
     *
     */
    set fillMode(fillMode: DropDownFillMode);
    get fillMode(): DropDownFillMode;
    /**
     * The hint which is displayed when the component is empty.
     * When the values are selected, it disappears.
     */
    set placeholder(text: string);
    get placeholder(): string;
    /**
     * Sets the disabled state of the component.
     */
    disabled: boolean;
    /**
     * Defines a Boolean function that is executed for each data item in the component
     * ([see examples]({% slug disableditems_multiselect %})). Determines whether the item will be disabled.
     */
    set itemDisabled(fn: ItemDisabledFn);
    /**
     * Specifies whether checkboxes will be rendered before each item in the popup list.
     */
    set checkboxes(settings: MultiSelectCheckableSettings | boolean);
    get checkboxes(): MultiSelectCheckableSettings;
    /**
     * Sets the read-only state of the component.
     */
    readonly: boolean;
    /**
     * Enables the [filtering]({% slug filtering_multiselect %}) functionality of the MultiSelect.
     */
    filterable: boolean;
    /**
     * Enables the [virtualization]({% slug virtualization_multiselect %}) functionality.
     */
    set virtual(settings: boolean | VirtualizationSettings);
    get virtual(): VirtualizationSettings;
    /**
     * Configures the popup of the MultiSelect.
     *
     * The available options are:
     * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
     * - `width: Number | String`&mdash;Sets the width of the popup container. By default, the width of the host element is used. If set to `auto`, the component automatically adjusts the width of the popup and no item labels are wrapped. The `auto` mode is not supported when virtual scrolling is enabled.
     * - `height: Number`&mdash;Sets the height of the popup container.
     * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
     * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
     */
    set popupSettings(settings: PopupSettings);
    get popupSettings(): PopupSettings;
    /**
     * Sets the height of the suggestions list. By default, `listHeight` is 200px.
     *
     * > The `listHeight` property affects only the list of suggestions and not the whole popup container.
     * > To set the height of the popup container, use `popupSettings.height`.
     */
    listHeight: number;
    /**
     * Specifies the type of the selected value.
     * If set to `true`, the selected value has to be of the primitive type
     * ([more information and example]({% slug valuebinding_multiselect %}#toc-primitive-values-from-object-fields)).
     */
    set valuePrimitive(isPrimitive: boolean);
    get valuePrimitive(): boolean;
    /**
     * If set to `true`, renders a button on hovering over the component.
     * Clicking this button resets the value of the component to an empty array and triggers the `change` event.
     */
    clearButton: boolean;
    /**
     * A user-defined callback function which receives an array of selected data items and maps them to an array of tags
     * ([see examples]({% slug summarytagmode_multiselect %}#toc-rendering-of-tags)).
     *
     * @param { Any[] } dataItems - The selected data items from the list.
     * @returns { Any[] } - The tags that will be rendered by the component.
     */
    tagMapper: (tags: any) => any;
    /**
     * Specifies whether the MultiSelect allows user-defined values that are not present in the dataset
     * ([more information and examples]({% slug custom_values_multiselect %})).
     * Defaults to `false`.
     */
    allowCustom: boolean;
    /**
     * A user-defined callback function which returns normalized custom values.
     * Typically used when the data items are different from type `string`.
     *
     * @param { Any } value - The custom value that is defined by the user.
     * @returns { Any }
     *
     * @example
     * ```ts
     * import { map } from 'rxjs/operators';
     *
     * _@Component({
     * selector: 'my-app',
     * template: `
     *   <kendo-multiselect
     *       [allowCustom]="true"
     *       [data]="listItems"
     *       textField="text"
     *       valueField="value"
     *       [valueNormalizer]="valueNormalizer"
     *       (valueChange)="onValueChange($event)"
     *   >
     *   </kendo-multiselect>
     * `
     * })
     *
     * class AppComponent {
     *   public listItems: Array<{ text: string, value: number }> = [
     *       { text: "Small", value: 1 },
     *       { text: "Medium", value: 2 },
     *       { text: "Large", value: 3 }
     *   ];
     *
     *   public onValueChange(value) {
     *       console.log("valueChange : ", value);
     *   }
     *
     *   public valueNormalizer = (text$: Observable<string>) => text$.pipe(map((text: string) => {
     *      return {
     *         value: Math.floor(Math.random() * (1000 - 100) + 1000), //generate unique valueField
     *         text: text };
     *   }));
     *
     * }
     * ```
     */
    valueNormalizer: (text: Observable<string>) => Observable<any>;
    /**
     * Fires each time the user types in the input field.
     * You can filter the source based on the passed filtration value.
     */
    filterChange: EventEmitter<string>;
    /**
     * Fires each time the value is changed&mdash;
     * when the component is blurred or the value is cleared through the **Clear** button
     * ([see example]({% slug overview_multiselect %}#toc-events)).
     * When the value of the component is programmatically changed to `ngModel` or `formControl`
     * through its API or form binding, the `valueChange` event is not triggered because it
     * might cause a mix-up with the built-in `valueChange` mechanisms of the `ngModel` or `formControl` bindings.
     */
    valueChange: EventEmitter<any[]>;
    /**
     * Fires each time the popup is about to open
     * ([see example]({% slug openstate_multiselect %}#toc-preventing-opening-and-closing)).
     * This event is preventable. If you cancel it, the popup will remain closed.
     */
    open: EventEmitter<PreventableEvent>;
    /**
     * Fires after the popup has been opened.
     */
    opened: EventEmitter<any>;
    /**
     * Fires each time the popup is about to close
     * ([see example]({% slug openstate_multiselect %}#toc-preventing-opening-and-closing)).
     * This event is preventable. If you cancel it, the popup will remain open.
     */
    close: EventEmitter<PreventableEvent>;
    /**
     * Fires after the popup has been closed.
     */
    closed: EventEmitter<any>;
    /**
     * Fires each time the user focuses the MultiSelect.
     */
    onFocus: EventEmitter<any>;
    /**
     * Fires each time the MultiSelect gets blurred.
     */
    onBlur: EventEmitter<any>;
    /**
     * Fires each time a tag is about to be removed([see examples]({% slug summarytagmode_multiselecttree %}#toc-notifying-on-removing-group-tags)).
     * This event is preventable. If you cancel it, the tag will not be removed.
     */
    removeTag: EventEmitter<RemoveTagEvent>;
    container: ViewContainerRef;
    searchbar: SearchBarComponent;
    popupTemplate: TemplateRef<any>;
    optionsList: ListComponent;
    template: ItemTemplateDirective;
    customItemTemplate: CustomItemTemplateDirective;
    groupTemplate: GroupTemplateDirective;
    fixedGroupTemplate: FixedGroupTemplateDirective;
    headerTemplate: HeaderTemplateDirective;
    footerTemplate: FooterTemplateDirective;
    tagTemplate: TagTemplateDirective;
    groupTagTemplate: GroupTagTemplateDirective;
    noDataTemplate: NoDataTemplateDirective;
    hostClasses: boolean;
    get dir(): string;
    get disabledClass(): boolean;
    get isLoading(): boolean;
    /**
     * @hidden
     */
    handleKeyboardEvent(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    hostMousedown(event: any): void;
    disabledIndices: Set<number>;
    private initialized;
    private _size;
    private _rounded;
    private _fillMode;
    constructor(wrapper: ElementRef, localization: LocalizationService, popupService: PopupService, dataService: DataService, selectionService: SelectionService, navigationService: NavigationService, disabledItemsService: DisabledItemsService, cdr: ChangeDetectorRef, differs: KeyValueDiffers, renderer: Renderer2, _zone: NgZone, touchEnabled: boolean);
    get listContainerClasses(): any[];
    /**
     * @hidden
     */
    get customItemSizeClass(): any;
    get width(): any;
    get height(): any;
    get activeDescendant(): string;
    get clearButtonVisiblity(): string;
    /**
     * @hidden
     */
    verifySettings(): void;
    /**
     * @hidden
     */
    change(event: SelectionEvent): void;
    /**
     * @hidden
     */
    setState(value: any[]): void;
    /**
     * @hidden
     */
    handleFilter(text: string): void;
    /**
     * @hidden
     */
    pageChange(event: PageChangeEvent): void;
    /**
     * @hidden
     */
    clearFilter(): void;
    /**
     * @hidden
     */
    handleNavigate(event: any): void;
    /**
     * @hidden
     */
    handleRemoveTag({ tag }: {
        tag: any;
        index?: number;
    }): void;
    /**
     * @hidden
     */
    clearAll(event?: any): void;
    /**
     * @hidden
     */
    protected addCustomValue(text: string): void;
    ngAfterContentChecked(): void;
    ngDoCheck(): void;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Toggles the visibility of the popup
     * ([see example]({% slug openstate_multiselect %}#toc-setting-the-initially-opened-component)).
     * If you use the `toggle` method to open or close the popup, the respective `open` and `close` events will not be fired.
     *
     * @param open - The state of the popup.
     */
    toggle(open?: boolean): void;
    /**
     * Returns the current open state of the popup.
     */
    get isOpen(): boolean;
    /**
     * Resets the value of the MultiSelect.
     * If you use the `reset` method to clear the value of the component,
     * the model will not update automatically and the `selectionChange` and `valueChange` events will not be fired.
     */
    reset(): void;
    /**
     * @hidden
     */
    messageFor(key: string): string;
    /**
     * @hidden
     */
    writeValue(value: any): void;
    /**
     * @hidden
     */
    registerOnChange(fn: any): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: any): void;
    /**
     * @hidden
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * @hidden
     */
    onTagMapperChange(): void;
    protected onChangeCallback: Function;
    protected onTouchedCallback: Function;
    private _placeholder;
    private _open;
    private _value;
    private _popupSettings;
    private _virtualSettings;
    private _valuePrimitive;
    private _checkboxes;
    private _isFocused;
    set isFocused(isFocused: boolean);
    get isFocused(): boolean;
    private selectedDataItems;
    private popupMouseDownHandler;
    private customValueSubject;
    private customValueSubscription;
    private observableSubscriptions;
    private localizationChangeSubscription;
    private touchstartDisposeHandler;
    private direction;
    private differ;
    private valueChangeDetected;
    private subscribeEvents;
    private subscribeTouchEvents;
    private unsubscribeEvents;
    private removeGroupTag;
    private removeSingleTag;
    /**
     * @hidden
     *
     * Determines which of the provided tags should be disabled and stores their position indices
     */
    private disabledItemsMapper;
    private createCustomValueStream;
    private handleItemChange;
    private handleEnter;
    private handleClose;
    private handleEnd;
    private handleHome;
    private sortSelectionAscending;
    private handleSelectAll;
    private handleSelectAllToBeginning;
    private handleSelectAllToEnd;
    private handleSelectUpDown;
    /**
     * Selects all items between the focused item and the last clicked item (index). Also removes all other selected items.
     */
    private selectRangeFromTo;
    private handleUp;
    private handleBackspace;
    private handleDelete;
    private handleLeftKey;
    private handleDownKey;
    private handleRightKey;
    private findIndex;
    private searchTextAndFocus;
    private closePopup;
    private openPopup;
    private togglePopup;
    private triggerPopupEvents;
    private _toggle;
    private destroyPopup;
    private createPopup;
    private emitValueChange;
    private resolveDataItemFromTags;
    private firstFocusableIndex;
    private nextTick;
    private setComponentClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiSelectComponent, [null, null, null, null, null, null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiSelectComponent, "kendo-multiselect", ["kendoMultiSelect"], { "focusableId": "focusableId"; "autoClose": "autoClose"; "loading": "loading"; "data": "data"; "value": "value"; "valueField": "valueField"; "textField": "textField"; "tabindex": "tabindex"; "tabIndex": "tabIndex"; "size": "size"; "rounded": "rounded"; "fillMode": "fillMode"; "placeholder": "placeholder"; "disabled": "disabled"; "itemDisabled": "itemDisabled"; "checkboxes": "checkboxes"; "readonly": "readonly"; "filterable": "filterable"; "virtual": "virtual"; "popupSettings": "popupSettings"; "listHeight": "listHeight"; "valuePrimitive": "valuePrimitive"; "clearButton": "clearButton"; "tagMapper": "tagMapper"; "allowCustom": "allowCustom"; "valueNormalizer": "valueNormalizer"; }, { "filterChange": "filterChange"; "valueChange": "valueChange"; "open": "open"; "opened": "opened"; "close": "close"; "closed": "closed"; "onFocus": "focus"; "onBlur": "blur"; "removeTag": "removeTag"; }, ["template", "customItemTemplate", "groupTemplate", "fixedGroupTemplate", "headerTemplate", "footerTemplate", "tagTemplate", "groupTagTemplate", "noDataTemplate"], never>;
}
