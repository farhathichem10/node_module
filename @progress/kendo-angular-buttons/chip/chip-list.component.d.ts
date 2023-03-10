/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { QueryList, EventEmitter, OnDestroy, OnInit, Renderer2, AfterContentInit, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { ChipComponent } from './chip.component';
import { ChipListSelection } from './models/selection';
import { ChipListRemoveEvent } from './chip-list-remove-event-args.interface';
import { ChipListSize } from '../common/models';
import * as i0 from "@angular/core";
export declare class ChipListComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
    private localizationService;
    private renderer;
    private element;
    private ngZone;
    hostClass: boolean;
    orientation: string;
    /**
     * @hidden
     */
    direction: string;
    /**
     * Sets the selection mode of the ChipList.
     *
     * The available values are:
     * * `none` (default)
     * * `single`
     * * `multiple`
     */
    selection: ChipListSelection;
    /**
     * The size property specifies the gap between the Chips in the ChipList
     * ([see example]({% slug appearance_chiplist %}#toc-size)).
     *
     * The possible values are:
     * * `'small'`
     * * `'medium'` (default)
     * * `'large'`
     * * `none`
     */
    set size(size: ChipListSize);
    get size(): ChipListSize;
    /**
     * Fires each time when the ChipList selection is changed.
     */
    selectedChange: EventEmitter<any[]>;
    /**
     * Fires each time the user clicks on the remove icon of the Chip.
     */
    remove: EventEmitter<ChipListRemoveEvent>;
    chips: QueryList<ChipComponent>;
    get single(): boolean;
    get multiple(): boolean;
    role: string;
    private dynamicRTLSubscription;
    private _size;
    private subs;
    /**
     * @hidden
     */
    onClick($event: any): void;
    constructor(localizationService: LocalizationService, renderer: Renderer2, element: ElementRef, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private selectedChips;
    /**
     * Updates the selection on click of a Chip. Emits events.
     */
    private setSelection;
    private clearSelection;
    private handleClasses;
    private attachElementEventHandlers;
    private keyDownHandler;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipListComponent, "kendo-chiplist, kendo-chip-list", never, { "selection": "selection"; "size": "size"; }, { "selectedChange": "selectedChange"; "remove": "remove"; }, ["chips"], ["*"]>;
}
