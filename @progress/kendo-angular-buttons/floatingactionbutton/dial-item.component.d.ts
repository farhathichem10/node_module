/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { AfterViewInit, ElementRef, Renderer2, TemplateRef } from "@angular/core";
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { FabAlign } from './models/align';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class DialItemComponent implements AfterViewInit {
    private element;
    private renderer;
    private localisationService;
    hostClass: boolean;
    role: string;
    get disabledClass(): boolean;
    get title(): string;
    get indexAttr(): string;
    cssClass: any;
    cssStyle: any;
    isFocused: boolean;
    index: any;
    item: any;
    dialItemTemplate: TemplateRef<any>;
    align: FabAlign;
    constructor(element: ElementRef, renderer: Renderer2, localisationService: LocalizationService);
    get iconClasses(): string[];
    get itemTitle(): boolean;
    ngAfterViewInit(): void;
    private getTextDirectionClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialItemComponent, "[kendoDialItem]", never, { "cssClass": "cssClass"; "cssStyle": "cssStyle"; "isFocused": "isFocused"; "index": "index"; "item": "item"; "dialItemTemplate": "dialItemTemplate"; "align": "align"; }, {}, never, never>;
}
