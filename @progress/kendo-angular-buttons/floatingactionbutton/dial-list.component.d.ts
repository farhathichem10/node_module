/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChangeDetectorRef, OnDestroy, TemplateRef } from "@angular/core";
import { FocusService } from '../focusable/focus.service';
import { FabAlign } from './models/align';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class DialListComponent implements OnDestroy {
    private focusService;
    private cdr;
    hostClass: boolean;
    get bottomClass(): boolean;
    get topClass(): boolean;
    dialItems: any[];
    dialItemTemplate: TemplateRef<any>;
    align: FabAlign;
    private subscriptions;
    constructor(focusService: FocusService, cdr: ChangeDetectorRef);
    isFocused(index: number): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialListComponent, "[kendoDialList]", never, { "dialItems": "dialItems"; "dialItemTemplate": "dialItemTemplate"; "align": "align"; }, {}, never, never>;
}
