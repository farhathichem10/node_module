/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive } from '@angular/core';
import { skip } from "rxjs/operators";
import * as i0 from "@angular/core";
/**
 * Base class that acts as a component messages container.
 *
 * For internal use.
 * @hidden
 */
export class ComponentMessages {
    get override() {
        return false;
    }
    ngOnChanges(changes) {
        this.register(changes);
        if (Object.keys(changes).some(field => !changes[field].isFirstChange())) {
            this.service.notifyChanges();
        }
    }
    ngOnInit() {
        this.subscription = this.service.changes.pipe(skip(1)).subscribe(() => this.register(this));
    }
    register(changes) {
        const keys = Object.keys(changes);
        keys.forEach(key => this.service.register(key, this[key], this.override));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ComponentMessages.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ComponentMessages, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ComponentMessages.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ComponentMessages, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ComponentMessages, decorators: [{
            type: Directive,
            args: [{}]
        }] });
