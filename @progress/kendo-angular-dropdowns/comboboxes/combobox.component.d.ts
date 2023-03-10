/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ElementRef, TemplateRef, EventEmitter, ViewContainerRef, OnDestroy, OnChanges, ChangeDetectorRef, NgZone, Renderer2, SimpleChanges, AfterContentChecked } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SearchBarComponent } from '../common/searchbar.component';
import { ItemTemplateDirective } from '../common/templates/item-template.directive';
import { HeaderTemplateDirective } from '../common/templates/header-template.directive';
import { FooterTemplateDirective } from '../common/templates/footer-template.directive';
import { GroupTemplateDirective } from '../common/templates/group-template.directive';
import { FixedGroupTemplateDirective } from '../common/templates/fixed-group-template.directive';
import { PopupSettings } from '../common/models/popup-settings';
import { NoDataTemplateDirective } from '../common/templates/no-data-template.directive';
import { SelectionService } from '../common/selection/selection.service';
import { NavigationService } from '../common/navigation/navigation.service';
import { DisabledItemsService } from '../common/disabled-items/disabled-items.service';
import { ItemDisabledFn } from '../common/disabled-items/item-disabled';
import { Observable } from 'rxjs';
import { PreventableEvent } from '../common/models/preventable-event';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PopupService, PopupRef } from '@progress/kendo-angular-popup';
import { FilterableComponent } from '../common/filtering/filterable-component';
import { DataService } from '../common/data.service';
import { ListComponent } from '../common/list.component';
import { VirtualizationSettings } from '../common/models/virtualization-settings';
import { PageChangeEvent } from '../common/models/page-change-event';
import { DropDownSize } from '../common/models/size';
import { DropDownRounded } from '../common/models/rounded';
import { DropDownFillMode } from '../common/models/fillmode';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare const COMBOBOX_VALUE_ACCESSOR: any;
/**
 * Represents the [Kendo UI ComboBox component for Angular]({% slug overview_combobox %}).
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-combobox [data]="listItems">
 *  </kendo-combobox>
 * `
 * })
 * class AppComponent {
 *   public listItems: Array<string> = ["Item 1", "Item 2", "Item 3", "Item 4"];
 * }
 * ```
 */
export declare class ComboBoxComponent implements ControlValueAccessor, OnDestroy, OnChanges, AfterContentChecked, FilterableComponent {
    wrapper: ElementRef<HTMLElement>;
    protected localization: LocalizationService;
    protected popupService: PopupService;
    protected selectionService: SelectionService;
    protected navigationService: NavigationService;
    protected disabledItemsService: DisabledItemsService;
    protected dataService: DataService;
    protected zone: NgZone;
    protected cdr: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected touchEnabled: boolean;
    set text(text: any);
    get text(): any;
    /**
     * @hidden
     */
    togglePopup(open: boolean): void;
    get activeDescendant(): string;
    get appendTo(): ViewContainerRef;
    dataItem: any;
    selected: any[];
    /**
     * @hidden
     */
    focusableId: string;
    /**
     * Specifies whether the ComboBox allows user-defined values that are not present in the dataset
     * ([more information and examples]({% slug custom_values_combobox %})).
     * Defaults to `false`.
     */
    allowCustom: boolean;
    /**
     * Sets the data of the ComboBox.
     *
     * > The data has to be provided in an array-like list.
     */
    set data(data: any);
    get data(): any;
    /**
     * Sets the value of the ComboBox.
     * It can either be of the primitive (string, numbers) or of the complex (objects) type.
     * To define the type, use the `valuePrimitive` option.
     *
     * > All selected values which are not present in the dataset are considered custom values.
     * > When the `Enter` key is pressed or the component loses focus, custom values get dismissed unless `allowCustom` is set to `true`.
     */
    set value(newValue: any);
    get value(): any;
    /**
     * Sets the data item field that represents the item text.
     * If the data contains only primitive values, do not define it.
     *
     * > The `textField` property can be set to point to a nested property value - e.g. `category.name`.
     */
    textField: string;
    /**
     * Sets the data item field that represents the item value.
     * If the data contains only primitive values, do not define it.
     *
     * > The `valueField` property can be set to point to a nested property value - e.g. `category.id`.
     */
    valueField: string;
    /**
     * Specifies the type of the selected value.
     * If set to `true`, the selected value has to be of the primitive type
     * ([more information and example]({% slug valuebinding_combobox %}#toc-primitive-values-from-object-fields)).
     */
    set valuePrimitive(isPrimitive: boolean);
    get valuePrimitive(): boolean;
    /**
     * A user-defined callback which returns normalized custom values.
     * Typically used when the data items are different from type `string`.
     * @param { Any } value - The custom value defined by the user.
     * @returns { Any }
     *
     * @example
     * ```ts
     * import { map } from 'rxjs/operators';
     *
     * _@Component({
     * selector: 'my-app',
     * template: `
     *   <kendo-combobox
     *       [allowCustom]="true"
     *       [data]="listItems"
     *       textField="text"
     *       valueField="value"
     *       [valueNormalizer]="valueNormalizer"
     *       (valueChange)="onValueChange($event)"
     *   >
     *   </kendo-combobox>
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
     *      return { ProductID: null, ProductName: text };
     *   }));
     *
     * }
     * ```
     */
    valueNormalizer: (text: Observable<string>) => Observable<any>;
    /**
     * The hint that is displayed when the component is empty.
     *
     */
    placeholder: string;
    /**
     * Configures the popup of the ComboBox.
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
     * @hidden
     */
    iconClass: string;
    /**
     * Sets and gets the loading state of the ComboBox.
     */
    loading: boolean;
    /**
     * Enables the auto-completion of the text based on the first data item.
     */
    suggest: boolean;
    /**
     * If set to `true`, renders a button on hovering over the component.
     * Clicking this button resets the value of the component to `undefined` and triggers the `change` event.
     */
    clearButton: boolean;
    /**
     * Sets the disabled state of the component.
     */
    disabled: boolean;
    /**
     * Defines a Boolean function that is executed for each data item in the component
     * ([see examples]({% slug disableditems_combobox %})). Determines whether the item will be disabled.
     */
    set itemDisabled(fn: ItemDisabledFn);
    /**
     * Sets the read-only state of the component.
     */
    readonly: boolean;
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
     * Enables the [filtering]({% slug filtering_combobox %}) functionality.
     * If set to `true`, the component emits the `filterChange` event.
     */
    filterable: boolean;
    /**
     * Enables the [virtualization]({% slug virtualization_combobox %}) functionality.
     */
    set virtual(settings: boolean | VirtualizationSettings);
    get virtual(): VirtualizationSettings;
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
     * Fires each time the value is changed&mdash;
     * when the component is blurred or the value is cleared through the **Clear** button
     * ([see example]({% slug overview_combobox %}#toc-events)).
     * When the value of the component is programmatically changed to `ngModel` or `formControl`
     * through its API or form binding, the `valueChange` event is not triggered because it
     * might cause a mix-up with the built-in `valueChange` mechanisms of the `ngModel` or `formControl` bindings.
     */
    valueChange: EventEmitter<any>;
    /**
     * Fires each time an item selection is changed
     * ([see example]({% slug overview_combobox %}#toc-events)).
     */
    selectionChange: EventEmitter<any>;
    /**
     * Fires each time the user types in the input field.
     * You can filter the source based on the passed filtration value
     * ([see example]({% slug overview_combobox %}#toc-events)).
     */
    filterChange: EventEmitter<any>;
    /**
     * Fires each time the popup is about to open.
     * This event is preventable. If you cancel it, the popup will remain closed.
     */
    open: EventEmitter<PreventableEvent>;
    /**
     * Fires after the popup has been opened.
     */
    opened: EventEmitter<any>;
    /**
     * Fires each time the popup is about to close.
     * This event is preventable. If you cancel it, the popup will remain open.
     */
    close: EventEmitter<PreventableEvent>;
    /**
     * Fires after the popup has been closed.
     */
    closed: EventEmitter<any>;
    /**
     * Fires each time the user focuses the ComboBox.
     */
    onFocus: EventEmitter<any>;
    /**
     * Fires each time the ComboBox gets blurred.
     */
    onBlur: EventEmitter<any>;
    template: ItemTemplateDirective;
    headerTemplate: HeaderTemplateDirective;
    footerTemplate: FooterTemplateDirective;
    noDataTemplate: NoDataTemplateDirective;
    groupTemplate: GroupTemplateDirective;
    fixedGroupTemplate: FixedGroupTemplateDirective;
    container: ViewContainerRef;
    popupTemplate: TemplateRef<any>;
    searchbar: SearchBarComponent;
    optionsList: ListComponent;
    protected select: ElementRef<HTMLElement>;
    widgetClasses: boolean;
    get isDisabled(): boolean;
    get isLoading(): boolean;
    get dir(): any;
    private _isFocused;
    get isFocused(): boolean;
    set isFocused(value: boolean);
    get clearButtonVisiblity(): string;
    listBoxId: string;
    optionPrefix: string;
    popupRef: PopupRef;
    protected get popupWidth(): {
        min: string;
        max: string;
    };
    protected get popupHeight(): string;
    protected onChangeCallback: Function;
    protected onTouchedCallback: Function;
    /**
     * Used for the default virtualization settings config.
     */
    protected defaultVirtualItemHeight: number;
    /**
     * Used for the default virtualization settings config.
     */
    protected defaultVirtualPageSize: number;
    private valueSubscription;
    private _filtering;
    private _text;
    private filterText;
    private _open;
    private _value;
    private _valuePrimitive;
    private _previousDataItem;
    private suggestedText;
    private backspacePressed;
    private _popupSettings;
    private _virtualSettings;
    private popupMouseDownHandler;
    private customValueSubject;
    private valueSubject;
    private clearValueSubject;
    private direction;
    private subs;
    private touchstartDisposeHandler;
    private selectClickDisposeHandler;
    private _size;
    private _rounded;
    private _fillMode;
    constructor(wrapper: ElementRef<HTMLElement>, localization: LocalizationService, popupService: PopupService, selectionService: SelectionService, navigationService: NavigationService, disabledItemsService: DisabledItemsService, dataService: DataService, zone: NgZone, cdr: ChangeDetectorRef, renderer: Renderer2, touchEnabled: boolean);
    ngOnInit(): void;
    private createValueStream;
    private attachStreams;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentChecked(): void;
    /**
     * Focuses a specific item of the ComboBox based on a provided index.
     * If null or invalid index is provided the focus will be removed.
     */
    focusItemAt(index: number): void;
    /**
     * Focuses the ComboBox.
     */
    focus(): void;
    /**
     * Blurs the ComboBox.
     */
    blur(): void;
    /**
     * Toggles the visibility of the popup. If you use the `toggle` method to open or close the popup,
     * the `open` and `close` events will not be fired.
     *
     * @param open - The state of the popup.
     */
    toggle(open?: boolean): void;
    /**
     * Returns the current open state of the popup.
     */
    get isOpen(): boolean;
    /**
     * Resets the value of the ComboBox.
     * If you use the `reset` method to clear the value of the component,
     * the model will not update automatically and the `selectionChange` and `valueChange` events will not be fired.
     */
    reset(): void;
    /**
     * @hidden
     *
     * Used by the TextBoxContainer to determine if the floating label
     * should be rendered in the input when the component is not focused.
     */
    isEmpty(): boolean;
    /**
     * @hidden
     */
    messageFor(key: string): string;
    /**
     * @hidden
     */
    clearValue(event?: any): void;
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
    get buttonClasses(): any;
    /**
     * @hidden
     */
    get selectButtonClasses(): any;
    /**
     * @hidden
     */
    onResize(): void;
    protected verifySettings(): void;
    protected setState(): void;
    private updateState;
    private clearState;
    private resetSelection;
    private firstFocusableIndex;
    private findIndexPredicate;
    protected findDataItem({ valueField, value }: {
        valueField: string;
        value: any;
    }): {
        dataItem: any;
        index: number;
    };
    protected search(text: any, startFrom?: number): void;
    /**
     * @hidden
     */
    getSuggestion(): string;
    protected navigate(index: number): void;
    /**
     * @hidden
     */
    handleNavigate(event: any): void;
    protected handleEnter(): void;
    /**
     * @hidden
     */
    handleBlur(): void;
    /**
     * @hidden
     */
    handleEscape(): void;
    /**
     * @hidden
     */
    handleNavigationOpen(): void;
    /**
     * @hidden
     */
    searchBarChange(text: string): void;
    /**
     * @hidden
     */
    handleFocus(): void;
    /**
     * @hidden
     */
    pageChange(event: PageChangeEvent): void;
    protected change(candidate: any, isCustom?: boolean): void;
    protected emitValueChange(): void;
    /**
     * @hidden
     */
    selectClick(): void;
    protected get listContainerClasses(): string[];
    /**
     * @hidden
     */
    preventEventDefault(event: Event): void;
    private get focusedItemText();
    /**
     * Focuses the first match when there's text in the input field, but no focused item.
     */
    private restoreItemFocus;
    private useSuggestion;
    private destroyPopup;
    private createPopup;
    private _toggle;
    private triggerPopupEvents;
    private clearFilter;
    private subscribeTouchEvents;
    private attachSelectClickHandler;
    private setComponentClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboBoxComponent, [null, null, null, null, null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboBoxComponent, "kendo-combobox", ["kendoComboBox"], { "focusableId": "focusableId"; "allowCustom": "allowCustom"; "data": "data"; "value": "value"; "textField": "textField"; "valueField": "valueField"; "valuePrimitive": "valuePrimitive"; "valueNormalizer": "valueNormalizer"; "placeholder": "placeholder"; "popupSettings": "popupSettings"; "listHeight": "listHeight"; "iconClass": "iconClass"; "loading": "loading"; "suggest": "suggest"; "clearButton": "clearButton"; "disabled": "disabled"; "itemDisabled": "itemDisabled"; "readonly": "readonly"; "tabindex": "tabindex"; "tabIndex": "tabIndex"; "filterable": "filterable"; "virtual": "virtual"; "size": "size"; "rounded": "rounded"; "fillMode": "fillMode"; }, { "valueChange": "valueChange"; "selectionChange": "selectionChange"; "filterChange": "filterChange"; "open": "open"; "opened": "opened"; "close": "close"; "closed": "closed"; "onFocus": "focus"; "onBlur": "blur"; }, ["template", "headerTemplate", "footerTemplate", "noDataTemplate", "groupTemplate", "fixedGroupTemplate"], never>;
}
