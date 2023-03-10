/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { RowArgs } from '../common/row-args';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class DetailsService implements OnDestroy {
    userCallback: (args: RowArgs) => boolean;
    changes: Subject<{
        dataItem: any;
        expand: boolean;
        index: number;
    }>;
    private rowState;
    ngOnDestroy(): void;
    isExpanded(index: number, dataItem: object): boolean;
    toggleRow(index: number, dataItem: object): void;
    private expandRow;
    private collapseRow;
    private emitEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<DetailsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DetailsService>;
}
