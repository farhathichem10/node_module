/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { AnimationBuilder } from '@angular/animations';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, Renderer2, OnDestroy, TemplateRef } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PopupService } from '@progress/kendo-angular-popup';
import { FocusService } from '../focusable/focus.service';
import { KeyEvents } from '../navigation/key-events';
import { NavigationService } from '../navigation/navigation.service';
import { FabAlign } from './models/align';
import { FabOffset } from './models/offset';
import { DialItemAnimation } from './models/item-animation.interface';
import { FabPositionMode } from './models/position-mode';
import { DialItemClickEvent } from './models/item-click.event';
import { ButtonSize } from '../common/models/size';
import { ButtonThemeColor } from '../common/models/theme-color';
import { PreventableEvent } from '../preventable-event';
import { DialItemTemplateDirective } from './templates/dial-item-template.directive';
import { FloatingActionButtonTemplateDirective } from './templates/fab-template.directive';
import { ButtonRounded } from '../common/models';
import * as i0 from "@angular/core";
/**
 *
 * Represents the [Kendo UI FloatingActionButton component for Angular]({% slug overview_floatingactionbutton %}).
 * Used to specify the primary or the most common action in an application.
 *
 */
export declare class FloatingActionButtonComponent implements AfterViewInit, OnDestroy {
    renderer: Renderer2;
    private element;
    private focusService;
    private navigationService;
    private ngZone;
    private popupService;
    private builder;
    private localizationService;
    get fixedClass(): boolean;
    get absoluteClass(): boolean;
    direction: string;
    button: ElementRef<HTMLButtonElement>;
    popupTemplate: TemplateRef<any>;
    dialItemTemplate: DialItemTemplateDirective;
    fabTemplate: FloatingActionButtonTemplateDirective;
    /**
     * Specifies the theme color of the FloatingActionButton
     * ([see example]({% slug appearance_floatingactionbutton %}#toc-themeColor)).
     * The theme color will be applied as background color of the component.
     *
     * The possible values are:
     * * `primary` (Default)&mdash;Applies coloring based on the `primary` theme color.
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
    set themeColor(themeColor: ButtonThemeColor);
    get themeColor(): ButtonThemeColor;
    /**
     * Specifies the size of the FloatingActionButton
     * ([see example]({% slug appearance_floatingactionbutton %}#toc-size)).
     *
     * The possible values are:
     * * `small`
     * * `medium` (Default)
     * * `large`
     * * `none`
     */
    set size(size: ButtonSize);
    get size(): ButtonSize;
    /**
     * The rounded property specifies the border radius of the FloatingActionButton.
     *
     * The possible values are:
     * * `small`
     * * `medium`
     * * `large`
     * * `full` (default)
     * * `none`
     */
    set rounded(rounded: ButtonRounded);
    get rounded(): ButtonRounded;
    /**
     * Specifies whether the FloatingActionButton is disabled.
     */
    set disabled(disabled: boolean);
    get disabled(): boolean;
    /**
     * Specifies the horizontal and vertical alignment of the FloatingActionButton
     * ([see example]({% slug positioning_floatingactionbutton %}#toc-align)).
     *
     * The possible values are:
     * * `{ horizontal: 'start'|'center'|'end', vertical: 'top'|'middle'|'bottom' }`
     *
     * The default value is:
     * * `{ horizontal: 'end', vertical: 'bottom' }`
     *
     */
    set align(align: FabAlign);
    get align(): FabAlign;
    /**
     * Specifies the horizontal and vertical offset position of the FloatingActionButton
     * ([see example]({% slug positioning_floatingactionbutton %}#toc-offset)).
     *
     * * The default value is:
     * * `{ x: '16px', y: '16px' }`
     */
    set offset(offset: FabOffset);
    get offset(): FabOffset;
    /**
     * Specifies the positionMode of the FloatingActionButton
     * ([see example]({% slug positioning_floatingactionbutton %}#toc-positionMode)).
     *
     * * The possible values are:
     * * `absolute`&mdash;Positions the FloatingActionButton absolutely to its first positioned parent element.
     * * `fixed` (Default)&mdash;Positions the FloatingActionButton relative to the viewport. It always stays in the same place even if the page is scrolled.
     */
    positionMode: FabPositionMode;
    /**
     * Defines the name of an existing icon in a Kendo UI theme.
     * If provided, the icon will be rendered inside the FloatingActionButton by a `span.k-icon` element.
     */
    icon: string;
    /**
     * Defines a CSS class or multiple classes separated by spaces which are applied to a `span` element.
     * Allows the usage of custom icons, rendered inside the FloatingActionButton by a `span` element.
     */
    iconClass: string;
    /**
     * The CSS classes that will be rendered on the main button.
     * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
     */
    buttonClass: any;
    /**
     * The CSS classes that will be rendered on the dial items `ul` element.
     * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
     */
    dialClass: any;
    /**
     * Specifies the text content of the FloatingActionButton.
     */
    text: string;
    /**
     * Specifies the animation settings of the FloatingActionButton dial items.
     * ([see example]({% slug dialitems_floatingactionbutton %}#toc-animation)).
     *
     * The possible values are:
     * * Boolean
     *    * (Default) `true`&mdash;Applies the default [`DialItemAnimation`]({% slug api_buttons_dialitemanimation %}) settings.
     *    * `false`
     * * `DialItemAnimation`
     *    * `duration`&mdash;Specifies the animation duration in milliseconds for each dial item. Defaults to `180ms`.
     *    * `gap`&mdash;Specifies the animation duration gap in milliseconds after each dial item is animated. Defaults to `90ms`.
     */
    dialItemAnimation: boolean | DialItemAnimation;
    /**
     * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the FloatingActionButton.
     */
    tabIndex: number;
    /**
     * Specifies the collection of the dial items that will be rendered in the FloatingActionButton popup.
     */
    dialItems: any[];
    /**
     * Fires each time the FloatingActionButton gets blurred.
     */
    onBlur: EventEmitter<any>;
    /**
     * Fires each time the FloatingActionButton gets focused.
     */
    onFocus: EventEmitter<any>;
    /**
     * Fires each time a dial item is clicked.
     */
    dialItemClick: EventEmitter<DialItemClickEvent>;
    /**
     * Fires each time the popup is about to open.
     * This event is preventable. If you cancel the event, the popup will remain closed
     * ([more information and example]({% slug overview_floatingactionbutton %}#toc-events)).
     */
    open: EventEmitter<PreventableEvent>;
    /**
     * Fires each time the popup is about to close.
     * This event is preventable. If you cancel the event, the popup will remain open
     * ([more information and example]({% slug overview_floatingactionbutton %}#toc-events)).
     */
    close: EventEmitter<PreventableEvent>;
    /**
     * @hidden
     */
    get componentTabIndex(): number;
    /**
     * @hidden
     */
    id: string;
    /**
     * @hidden
     */
    dialListId: string;
    private _themeColor;
    private _size;
    private _rounded;
    private _disabled;
    private _align;
    private _offset;
    private subscriptions;
    private popupMouseDownListener;
    private rtl;
    private animationEnd;
    private popupRef;
    private initialSetup;
    constructor(renderer: Renderer2, element: ElementRef, focusService: FocusService, navigationService: NavigationService, ngZone: NgZone, popupService: PopupService, builder: AnimationBuilder, localizationService: LocalizationService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Indicates whether the FloatingActionButton is currently open.
     */
    get isOpen(): boolean;
    /**
     * Focuses the FloatingActionButton.
     */
    focus(): void;
    /**
     * Blurs the FloatingActionButton.
     */
    blur(): void;
    /**
     * Toggles the visibility of the FloatingActionButton dial items popup.
     *
     * If you use the `toggleDial` method to open or close the dial items,
     * the `open` and `close` events do not fire ([more information and examples]({% slug openstate_floatingactionbutton %}#toc-events)).
     *
     * @param open - The state of dial items popup.
     */
    toggleDial(open?: boolean): void;
    /**
     * @hidden
     */
    get ariaExpanded(): boolean;
    /**
     * @hidden
     */
    get ariaHasPopup(): string;
    /**
     * @hidden
     */
    get ariaControls(): string;
    /**
     * @hidden
     */
    get iconClasses(): string[];
    /**
     * @hidden
     */
    clickHandler(): void;
    /**
     * @hidden
     */
    keyDownHandler(event: any): void;
    /**
     * @hidden
     */
    keyHandler(event: KeyboardEvent, keyEvent?: KeyEvents): void;
    /**
     * @hidden
     */
    onItemClick(event: MouseEvent): void;
    /**
     * @hidden
     */
    focusHandler(): void;
    /**
     * @hidden
     */
    blurHandler(): void;
    private handleClasses;
    private onEnterPressed;
    private emitItemClick;
    private subscribeNavigationEvents;
    private onArrowKeyNavigate;
    private onNavigationEnterPress;
    private onNavigationClose;
    private alignClass;
    private toggleDialWithEvents;
    private openPopup;
    private closePopup;
    private openDial;
    private closeDial;
    private isValidAnimation;
    private positionPopup;
    private offsetStyles;
    private get hasDialItems();
    /**
     * Gets the CSS prop name of the selected vertical position (`top`/`bottom`);
     */
    private get verticalPosition();
    /**
     * Gets the offset according to the selected vertical position.
     */
    private get verticalOffset();
    /**
     * Gets the CSS prop name of the selected horizontal position (`left`/`right`);
     */
    private get horizontalPosition();
    /**
     * Gets the offset according to the selected horizontal position.
     */
    private get horizontalOffset();
    private playerFor;
    private playAnimation;
    private durationSettings;
    private animationGap;
    private animationDuration;
    static ɵfac: i0.ɵɵFactoryDeclaration<FloatingActionButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FloatingActionButtonComponent, "kendo-floatingactionbutton", never, { "themeColor": "themeColor"; "size": "size"; "rounded": "rounded"; "disabled": "disabled"; "align": "align"; "offset": "offset"; "positionMode": "positionMode"; "icon": "icon"; "iconClass": "iconClass"; "buttonClass": "buttonClass"; "dialClass": "dialClass"; "text": "text"; "dialItemAnimation": "dialItemAnimation"; "tabIndex": "tabIndex"; "dialItems": "dialItems"; }, { "onBlur": "blur"; "onFocus": "focus"; "dialItemClick": "dialItemClick"; "open": "open"; "close": "close"; }, ["dialItemTemplate", "fabTemplate"], never>;
}
