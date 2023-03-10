/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ElementRef, TemplateRef, EventEmitter, ViewContainerRef, AfterViewInit, OnChanges, SimpleChanges, NgZone, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { Align, PopupService, PopupRef } from '@progress/kendo-angular-popup';
import { ListButton } from './../listbutton/list-button';
import { PopupSettings } from './../listbutton/popup-settings';
import { ButtonItemTemplateDirective } from './../listbutton/button-item-template.directive';
import { FocusService } from './../focusable/focus.service';
import { NavigationService } from './../navigation/navigation.service';
import { PreventableEvent } from '../preventable-event';
import { ButtonFillMode, ButtonRounded, ButtonSize, ButtonThemeColor } from '../common/models';
import { PopupContainerService } from '../listbutton/container.service';
import * as i0 from "@angular/core";
/**
 * Represents the Kendo UI SplitButton component for Angular.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="data" icon="clipboard"
 *      (itemClick)="onSplitButtonItemClick($event)"
 *      (buttonClick)="onSplitButtonClick()">Paste</kendo-splitbutton>
 * `
 * })
 *
 * class AppComponent {
 *   public data: Array<any> = [{
 *       text: 'Keep Text Only',
 *       icon: 'clipboard-text',
 *       click: () => { console.log('Keep Text Only click handler'); }
 *   }, {
 *       text: 'Paste as HTML',
 *       icon: 'clipboard-code'
 *   }, {
 *       text: 'Paste Markdown',
 *       icon: 'clipboard-markdown'
 *   }, {
 *       text: 'Set Default Paste'
 *   }];
 *
 *   public onSplitButtonClick(dataItem: any): void {
 *       console.log('Paste');
 *   }
 *
 *   public onSplitButtonItemClick(dataItem: any): void {
 *       if (dataItem) {
 *           console.log(dataItem.text);
 *       }
 *   }
 * }
 * ```
 */
export declare class SplitButtonComponent extends ListButton implements AfterViewInit, OnChanges {
    private localization;
    private renderer;
    /**
     * Sets the text of the SplitButton.
     */
    text: string;
    /**
     * Defines an icon to be rendered next to the button text
     * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
     */
    icon: string;
    /**
     * Defines an icon with a custom CSS class to be rendered next to the button text
     * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
     */
    iconClass: string;
    /**
     * Defines the type attribute of the main button
     */
    type: string;
    /**
     * Defines the location of an image to be displayed next to the button text
     * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
     */
    imageUrl: string;
    /**
     * The size property specifies the padding of the SplitButton
     * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-size)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `none`
     */
    size: ButtonSize;
    /**
     * The rounded property specifies the border radius of the SplitButton
     * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-rounded)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (default)
     * * `large`
     * * `full`
     * * `none`
     */
    set rounded(rounded: ButtonRounded);
    get rounded(): ButtonRounded;
    /**
     * The fillMode property specifies the background and border styles of the SplitButton
     * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-fillMode)).
     *
     * The available values are:
     * * `solid` (default)
     * * `flat`
     * * `outline`
     * * `link`
     */
    set fillMode(fillMode: ButtonFillMode);
    get fillMode(): ButtonFillMode;
    /**
     * The SplitButton allows you to specify predefined theme colors.
     * The theme color will be applied as a background and border color while also amending the text color accordingly
     * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-themeColor)).
     *
     * The possible values are:
     * * `base` &mdash;Applies coloring based on the `base` theme color. (default)
     * * `primary` &mdash;Applies coloring based on the `primary` theme color.
     * * `secondary`&mdash;Applies coloring based on the `secondary` theme color.
     * * `tertiary`&mdash; Applies coloring based on the `tertiary` theme color.
     * * `info`&mdash;Applies coloring based on the `info` theme color.
     * * `success`&mdash; Applies coloring based on the `success` theme color.
     * * `warning`&mdash; Applies coloring based on the `warning` theme color.
     * * `error`&mdash; Applies coloring based on the `error` theme color.
     * * `dark`&mdash; Applies coloring based on the `dark` theme color.
     * * `light`&mdash; Applies coloring based on the `light` theme color.
     * * `inverse`&mdash; Applies coloring based on the `inverse` theme color.
     * * `none`&mdash; Removes the built in theme color.
     */
    themeColor: ButtonThemeColor;
    /**
     * When set to `true`, disables a SplitButton item
     * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    /**
     * Configures the popup of the SplitButton.
     *
     * The available options are:
     * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
     * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
     * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
     * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
     */
    set popupSettings(settings: PopupSettings);
    get popupSettings(): PopupSettings;
    /**
     * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
     */
    tabIndex: number;
    /**
     * Configures the text field of the button-list popup.
     */
    textField: string;
    /**
     * Sets the data of the SplitButton.
     *
     * > The data has to be provided in an array-like list.
     */
    set data(data: any);
    get data(): any;
    /**
     * The CSS classes that will be rendered on the main button.
     * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
     */
    buttonClass: any;
    /**
     * The CSS classes that will be rendered on the button which opens the popup.
     * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
     */
    arrowButtonClass: any;
    /**
     * Specifies the name of the [font icon]({% slug icons %}#toc-list-of-font-icons) that will
     * be rendered for the button which opens the popup.
     */
    arrowButtonIcon: string;
    /**
     * Fires each time the user clicks the main button.
     *
     * @example
     * ```ts
     * _@Component({
     *    selector: 'my-app',
     *    template: `
     *        <kendo-splitbutton (buttonClick)="onSplitButtonClick()" [data]="data">
     *            Reply
     *        </kendo-splitbutton>
     *    `
     * })
     * class AppComponent {
     *    public data: Array<any> = ['Reply All', 'Forward', 'Reply & Delete'];
     *
     *    public onSplitButtonClick(): void {
     *      console.log('SplitButton click');
     *    }
     * }
     * ```
     *
     */
    buttonClick: EventEmitter<any>;
    /**
     * Fires each time the user clicks on the drop-down list. The event data contains the data item bound to the clicked list item.
     *
     * @example
     * ```ts
     * _@Component({
     *     selector: 'my-app',
     *    template: `
     *        <kendo-splitbutton (itemClick)="onSplitButtonItemClick($event)" [data]="data">
     *          Reply
     *      </kendo-splitbutton>
     *    `
     * })
     * class AppComponent {
     *    public data: Array<any> = ['Reply All', 'Forward', 'Reply & Delete'];
     *
     *   public onSplitButtonItemClick(dataItem?: string): void {
     *        if (dataItem) {
     *            console.log(dataItem);
     *       }
     *    }
     * }
     * ```
     *
     */
    itemClick: EventEmitter<any>;
    /**
     * Fires each time the SplitButton gets focused.
     */
    onFocus: EventEmitter<any>;
    /**
     * Fires each time the SplitButton gets blurred.
     */
    onBlur: EventEmitter<any>;
    /**
     * Fires each time the popup is about to open.
     * This event is preventable. If you cancel the event, the popup will remain closed.
     */
    open: EventEmitter<PreventableEvent>;
    /**
     * Fires each time the popup is about to close.
     * This event is preventable. If you cancel the event, the popup will remain open.
     */
    close: EventEmitter<PreventableEvent>;
    /**
     * An item template that helps to customize the item content.
     */
    itemTemplate: ButtonItemTemplateDirective;
    button: ElementRef<HTMLButtonElement>;
    arrowButton: ElementRef<HTMLButtonElement>;
    popupTemplate: TemplateRef<any>;
    containerRef: ViewContainerRef;
    /**
     * @hidden
     */
    activeArrow: boolean;
    popupRef: PopupRef;
    listId: string;
    /**
     * @hidden
     */
    get active(): boolean;
    /**
     * @hidden
     */
    get componentTabIndex(): number;
    private buttonText;
    private arrowButtonClicked;
    private _rounded;
    private _fillMode;
    set isFocused(value: boolean);
    get isFocused(): boolean;
    get widgetClasses(): boolean;
    get dir(): string;
    /**
     * @hidden
     */
    get ariaLabel(): string;
    /**
     * @hidden
     */
    onButtonFocus(event: FocusEvent): void;
    /**
     * @hidden
     */
    onArrowButtonClick(): void;
    /**
     * @hidden
     */
    toggleButtonActiveState(enable: boolean): void;
    /**
     * @hidden
     */
    toggleArrowButtonActiveState(enable: boolean): void;
    /**
     * @hidden
     */
    onButtonClick(): void;
    /**
     * @hidden
     */
    onButtonBlur(): void;
    /**
     * @hidden
     */
    keydown(event: any): void;
    /**
     * @hidden
     */
    keyup(event: any): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @hidden
     */
    protected onNavigationEnterUp(args?: any): void;
    /**
     * @hidden
     */
    togglePopupVisibility(): void;
    /**
     * @hidden
     */
    wrapperContains(element: any): boolean;
    /**
     * @hidden
     */
    get anchorAlign(): Align;
    /**
     * @hidden
     */
    get popupAlign(): Align;
    /**
     * Focuses the SplitButton component.
     */
    focus(): void;
    /**
     * Blurs the SplitButton component.
     */
    blur(): void;
    constructor(focusService: FocusService, navigationService: NavigationService, wrapperRef: ElementRef, zone: NgZone, popupService: PopupService, elRef: ElementRef, localization: LocalizationService, cdr: ChangeDetectorRef, renderer: Renderer2, containerService: PopupContainerService);
    /**
     * Returns the current open state of the popup.
     */
    get isOpen(): boolean;
    private updateButtonText;
    private handleClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitButtonComponent, "kendo-splitbutton", ["kendoSplitButton"], { "text": "text"; "icon": "icon"; "iconClass": "iconClass"; "type": "type"; "imageUrl": "imageUrl"; "size": "size"; "rounded": "rounded"; "fillMode": "fillMode"; "themeColor": "themeColor"; "disabled": "disabled"; "popupSettings": "popupSettings"; "tabIndex": "tabIndex"; "textField": "textField"; "data": "data"; "buttonClass": "buttonClass"; "arrowButtonClass": "arrowButtonClass"; "arrowButtonIcon": "arrowButtonIcon"; }, { "buttonClick": "buttonClick"; "itemClick": "itemClick"; "onFocus": "focus"; "onBlur": "blur"; "open": "open"; "close": "close"; }, ["itemTemplate"], ["*"]>;
}
