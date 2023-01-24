/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive, Input } from '@angular/core';
import { isChanged } from '@progress/kendo-angular-common';
import { FlatDataBindingDirective } from '@progress/kendo-angular-treeview';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-treeview";
/**
 * A directive which encapsulates the retrieval of the child nodes when flat data is provided.
 */
export class DropDownTreeFlatBindingDirective extends FlatDataBindingDirective {
    constructor(dropDownTree) {
        super(dropDownTree);
        this.dropDownTree = dropDownTree;
    }
    /**
     * @hidden
     */
    set filter(term) {
        super.filter = term;
    }
    ngOnChanges(changes) {
        if (isChanged('nodes', changes, false)) {
            this.dropDownTree.nodes = changes.nodes.currentValue;
            super.nodes = changes.nodes.currentValue;
        }
        super.ngOnChanges(changes);
    }
}
DropDownTreeFlatBindingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownTreeFlatBindingDirective, deps: [{ token: i1.DataBoundComponent }], target: i0.ɵɵFactoryTarget.Directive });
DropDownTreeFlatBindingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: DropDownTreeFlatBindingDirective, selector: "[kendoDropDownTreeFlatBinding]", inputs: { nodes: ["kendoDropDownTreeFlatBinding", "nodes"], idField: ["valueField", "idField"] }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DropDownTreeFlatBindingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoDropDownTreeFlatBinding]'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataBoundComponent }]; }, propDecorators: { nodes: [{
                type: Input,
                args: ['kendoDropDownTreeFlatBinding']
            }], idField: [{
                type: Input,
                args: ['valueField']
            }] } });
