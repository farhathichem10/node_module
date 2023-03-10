/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter } from '@angular/core';
import { ListItemModel } from './list-item-model';
import { ButtonItemTemplateDirective } from './button-item-template.directive';
import { ButtonSize } from '../common/models';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class ListComponent {
    data: Array<ListItemModel>;
    textField: string;
    itemTemplate: ButtonItemTemplateDirective;
    onItemClick: EventEmitter<number>;
    onItemBlur: EventEmitter<any>;
    set size(size: ButtonSize);
    sizeClass: string;
    constructor();
    getText(dataItem: any): any;
    getIconClasses(dataItem: ListItemModel): any;
    onClick(index: number): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListComponent, "kendo-button-list", never, { "data": "data"; "textField": "textField"; "itemTemplate": "itemTemplate"; "size": "size"; }, { "onItemClick": "onItemClick"; "onItemBlur": "onItemBlur"; }, never, never>;
}
