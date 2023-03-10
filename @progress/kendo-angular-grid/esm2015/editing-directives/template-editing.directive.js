/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive, Input } from '@angular/core';
import { RowEditingDirectiveBase } from './row-editing-directive-base';
import * as i0 from "@angular/core";
import * as i1 from "../grid.component";
import * as i2 from "../editing/local-data-changes.service";
/**
 * A directive which encapsulates the editing operations of the Grid when using
 * the Template-Driven Angular Forms ([see example]({% slug editing_directives_grid %}#toc-the-template-directive)).
 */
export class TemplateEditingDirective extends RowEditingDirectiveBase {
    constructor(grid, localDataChangesService) {
        super(grid, localDataChangesService);
        this.grid = grid;
        this.localDataChangesService = localDataChangesService;
    }
    editHandler(args) {
        super.editHandler(args);
        this.dataItem = args.dataItem;
        this.originalValues = {};
        this.editService.assignValues(this.originalValues, this.dataItem);
    }
    closeEditor(rowIndex) {
        if (this.dataItem) {
            this.editService.assignValues(this.dataItem, this.originalValues);
        }
        super.closeEditor(rowIndex);
    }
    createModel(args) {
        if (args.isNew) {
            return this.createNewItem();
        }
    }
    saveModel(args) {
        return args.dataItem;
    }
    clean() {
        super.clean();
        delete this.dataItem;
    }
}
TemplateEditingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TemplateEditingDirective, deps: [{ token: i1.GridComponent }, { token: i2.LocalDataChangesService }], target: i0.ɵɵFactoryTarget.Directive });
TemplateEditingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: TemplateEditingDirective, selector: "[kendoGridTemplateEditing]", inputs: { createNewItem: ["kendoGridTemplateEditing", "createNewItem"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TemplateEditingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoGridTemplateEditing]'
                }]
        }], ctorParameters: function () { return [{ type: i1.GridComponent }, { type: i2.LocalDataChangesService }]; }, propDecorators: { createNewItem: [{
                type: Input,
                args: ['kendoGridTemplateEditing']
            }] } });
