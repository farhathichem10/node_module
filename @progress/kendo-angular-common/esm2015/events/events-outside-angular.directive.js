/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class EventsOutsideAngularDirective {
    constructor(element, ngZone, renderer) {
        this.element = element;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.events = {};
    }
    ngOnInit() {
        if (!this.element || !this.element.nativeElement) {
            return;
        }
        const events = this.events;
        this.subscriptions = [];
        this.ngZone.runOutsideAngular(() => {
            for (let name in events) {
                if (events.hasOwnProperty(name)) {
                    this.subscriptions.push(this.renderer.listen(this.element.nativeElement, name, this.scope ? events[name].bind(this.scope) : events[name]));
                }
            }
        });
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            for (let idx = 0; idx < this.subscriptions.length; idx++) {
                this.subscriptions[idx]();
            }
            this.subscriptions = null;
        }
    }
}
EventsOutsideAngularDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EventsOutsideAngularDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
EventsOutsideAngularDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: EventsOutsideAngularDirective, selector: "[kendoEventsOutsideAngular]", inputs: { events: ["kendoEventsOutsideAngular", "events"], scope: "scope" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EventsOutsideAngularDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[kendoEventsOutsideAngular]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.Renderer2 }]; }, propDecorators: { events: [{
                type: Input,
                args: ['kendoEventsOutsideAngular']
            }], scope: [{
                type: Input
            }] } });
