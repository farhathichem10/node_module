/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter, ElementRef, OnDestroy, NgZone, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupSettings } from './popup-settings';
import { FocusService } from './../focusable/focus.service';
import { KeyEvents } from './../navigation/key-events';
import { NavigationService } from './../navigation/navigation.service';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { Direction } from '../direction';
import { PreventableEvent } from '../preventable-event';
import { Align, PopupRef, PopupService } from '@progress/kendo-angular-popup';
import { PopupContainerService } from './container.service';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class ListButton implements OnDestroy {
    protected focusService: FocusService;
    protected navigationService: NavigationService;
    protected wrapperRef: ElementRef;
    private _zone;
    private popupService;
    private elRef;
    protected cdr: ChangeDetectorRef;
    protected containerService: PopupContainerService;
    protected _data: any;
    protected _open: boolean;
    protected _disabled: boolean;
    protected _active: boolean;
    protected _popupSettings: PopupSettings;
    protected listId: string;
    protected _isFocused: boolean;
    protected _itemClick: EventEmitter<any>;
    protected _blur: EventEmitter<any>;
    protected wrapper: HTMLElement;
    protected button: ElementRef;
    protected subs: Subscription;
    protected direction: Direction;
    protected popupRef: PopupRef;
    private popupSubs;
    /**
     * Sets the disabled state of the DropDownButton.
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    /**
     * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
     */
    tabIndex: number;
    /**
     * The CSS classes that will be rendered on the main button.
     * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
     */
    buttonClass: any;
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
     * @hidden
     */
    get componentTabIndex(): number;
    private get appendTo();
    /**
     * Configures the popup of the DropDownButton.
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
     * @hidden
     */
    get anchorAlign(): Align;
    /**
     * @hidden
     */
    get popupAlign(): Align;
    protected isClosePrevented: boolean;
    constructor(focusService: FocusService, navigationService: NavigationService, wrapperRef: ElementRef, _zone: NgZone, popupService: PopupService, elRef: ElementRef, localization: LocalizationService, cdr: ChangeDetectorRef, containerService: PopupContainerService);
    ngOnChanges(changes: SimpleChanges): void;
    get popupClasses(): string;
    get openState(): boolean;
    /**
     * @hidden
     */
    set openState(open: boolean);
    /**
     * Returns the current open state of the popup.
     */
    get isOpen(): boolean;
    /**
     * @hidden
     */
    togglePopupVisibility(): void;
    /**
     * @hidden
     */
    onItemClick(index: number): void;
    ngOnDestroy(): void;
    protected subscribeEvents(): void;
    protected subscribeListItemFocusEvent(): void;
    protected subscribeComponentBlurredEvent(): void;
    protected subscribeNavigationEvents(): void;
    /**
     * Toggles the visibility of the popup.
     * If the `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
     *
     * @param open - The state of the popup.
     */
    toggle(open: boolean): void;
    /**
     * @hidden
     */
    keyDownHandler(event: any, isHost?: boolean): void;
    /**
     * @hidden
     */
    keyUpHandler(event: any): void;
    /**
     * @hidden
     */
    keyHandler(event: any, keyEvent?: KeyEvents, isHost?: boolean): void;
    protected emitItemClickHandler(index: number): void;
    protected focusWrapper(): void;
    protected wrapperContains(element: any): boolean;
    protected blurWrapper(emit?: boolean): void;
    protected focusButton(): void;
    protected handleTab(): void;
    protected onNavigationEnterUp(): void;
    protected onNavigationOpen(): void;
    protected onNavigationClose(): void;
    protected onArrowKeyNavigate({ index }: {
        index: any;
    }): void;
    private _toggle;
    private createPopup;
    private destroyPopup;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListButton, "ng-component", never, { "disabled": "disabled"; "tabIndex": "tabIndex"; "buttonClass": "buttonClass"; "popupSettings": "popupSettings"; }, { "open": "open"; "close": "close"; }, never, never>;
}
