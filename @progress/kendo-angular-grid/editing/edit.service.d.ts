/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare type Entity = {
    index: number;
    group: any;
};
/**
 * @hidden
 */
export declare type CommandAction = 'edit' | 'remove' | 'cancel' | 'save' | 'add';
/**
 * @hidden
 */
export declare type CommandEvent = {
    action: CommandAction;
    formGroup?: FormGroup;
    isNew?: boolean;
    rowIndex?: number;
};
/**
 * @hidden
 */
export declare class EditService {
    ngZone: NgZone;
    changes: EventEmitter<CommandEvent>;
    changed: Observable<any>;
    private editedIndices;
    private newItemGroup;
    private keepEditCell;
    private keepCellTimeout;
    private column;
    private closingCell;
    private changedSource;
    constructor(ngZone: NgZone);
    editRow(index: number, group?: any): void;
    addRow(group: any): void;
    editCell(rowIndex: number, column: any, group?: any): void;
    isEditing(): boolean;
    isEditingCell(): boolean;
    get hasNewItem(): boolean;
    get newDataItem(): any;
    close(index?: number): void;
    closeCell(originalEvent?: any): boolean;
    cancelCell(): void;
    shouldCloseCell(): boolean;
    preventCellClose(): void;
    context(index?: number): Entity;
    columnContext(index: number, column: any): Entity;
    isEdited(index: number): boolean;
    hasEdited(index: number): boolean;
    isEditedColumn(index: number, column: any): boolean;
    beginEdit(rowIndex: number): void;
    beginAdd(): void;
    endEdit(rowIndex?: number): void;
    save(rowIndex?: number): void;
    remove(rowIndex: number): void;
    private findByIndex;
    private onChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EditService>;
}
