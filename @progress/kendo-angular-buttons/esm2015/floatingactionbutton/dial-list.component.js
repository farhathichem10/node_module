/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, HostBinding, Input } from "@angular/core";
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../focusable/focus.service";
import * as i2 from "./dial-item.component";
import * as i3 from "@angular/common";
import * as i4 from "../focusable/focusable.directive";
/**
 * @hidden
 */
export class DialListComponent {
    constructor(focusService, cdr) {
        this.focusService = focusService;
        this.cdr = cdr;
        this.hostClass = true;
        this.subscriptions = new Subscription();
        this.subscriptions.add(this.focusService.onFocus.subscribe(() => this.cdr.detectChanges()));
    }
    get bottomClass() {
        return this.align.vertical === 'top' || this.align.vertical === 'middle';
    }
    get topClass() {
        return this.align.vertical === 'bottom';
    }
    isFocused(index) {
        return this.focusService.isFocused(index);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
DialListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialListComponent, deps: [{ token: i1.FocusService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
DialListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialListComponent, selector: "[kendoDialList]", inputs: { dialItems: "dialItems", dialItemTemplate: "dialItemTemplate", align: "align" }, host: { properties: { "class.k-fab-items": "this.hostClass", "class.k-fab-items-bottom": "this.bottomClass", "class.k-fab-items-top": "this.topClass" } }, ngImport: i0, template: `
        <ng-container *ngFor='let item of dialItems; let idx = index'>
            <li
                kendoButtonFocusable
                kendoDialItem
                [item]="dialItems[idx]"
                [index]="idx"
                [dialItemTemplate]="dialItemTemplate"
                [isFocused]="isFocused(idx)"
                [ngClass]='item.cssClass'
                [ngStyle]='item.cssStyle'
                [align]="align"
            >
            </li>
        </ng-container>
    `, isInline: true, components: [{ type: i2.DialItemComponent, selector: "[kendoDialItem]", inputs: ["cssClass", "cssStyle", "isFocused", "index", "item", "dialItemTemplate", "align"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.FocusableDirective, selector: "[kendoButtonFocusable]", inputs: ["index"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialListComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: '[kendoDialList]',
                    template: `
        <ng-container *ngFor='let item of dialItems; let idx = index'>
            <li
                kendoButtonFocusable
                kendoDialItem
                [item]="dialItems[idx]"
                [index]="idx"
                [dialItemTemplate]="dialItemTemplate"
                [isFocused]="isFocused(idx)"
                [ngClass]='item.cssClass'
                [ngStyle]='item.cssStyle'
                [align]="align"
            >
            </li>
        </ng-container>
    `
                }]
        }], ctorParameters: function () { return [{ type: i1.FocusService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.k-fab-items']
            }], bottomClass: [{
                type: HostBinding,
                args: ['class.k-fab-items-bottom']
            }], topClass: [{
                type: HostBinding,
                args: ['class.k-fab-items-top']
            }], dialItems: [{
                type: Input
            }], dialItemTemplate: [{
                type: Input
            }], align: [{
                type: Input
            }] } });
