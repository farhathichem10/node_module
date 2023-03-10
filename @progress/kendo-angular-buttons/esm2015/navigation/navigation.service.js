/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { isPresent } from './../util';
import { KeyEvents } from './key-events';
import { Keys } from '@progress/kendo-angular-common';
import { NavigationAction } from './navigation-action';
import { NAVIGATION_CONFIG } from './navigation-config';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class NavigationService {
    constructor(config) {
        this.navigate = new EventEmitter();
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.enter = new EventEmitter();
        this.enterpress = new EventEmitter();
        this.enterup = new EventEmitter();
        this.tab = new EventEmitter();
        this.esc = new EventEmitter();
        this.useLeftRightArrows = config.useLeftRightArrows;
    }
    process(args) {
        const keyCode = args.keyCode;
        const keyEvent = args.keyEvent;
        let index;
        let action = NavigationAction.Undefined;
        if (keyEvent === KeyEvents.keyup) {
            if (this.isEnterOrSpace(keyCode)) {
                action = NavigationAction.EnterUp;
            }
        }
        else {
            if (args.altKey && keyCode === Keys.ArrowDown) {
                action = NavigationAction.Open;
            }
            else if (args.altKey && keyCode === Keys.ArrowUp) {
                action = NavigationAction.Close;
            }
            else if (this.isEnterOrSpace(keyCode)) {
                action = NavigationAction.Enter;
            }
            else if (keyCode === Keys.Escape) {
                action = NavigationAction.Esc;
            }
            else if (keyCode === Keys.Tab) {
                action = NavigationAction.Tab;
            }
            else if (keyCode === Keys.ArrowUp || (this.useLeftRightArrows && keyCode === Keys.ArrowLeft)) {
                const step = args.flipNavigation ? 1 : -1;
                const start = args.flipNavigation ? args.min : args.max;
                const end = args.flipNavigation ? args.max : args.min;
                index = this.next({
                    current: args.current,
                    start: start,
                    end: end,
                    step: step
                });
                action = NavigationAction.Navigate;
            }
            else if (keyCode === Keys.ArrowDown || (this.useLeftRightArrows && keyCode === Keys.ArrowRight)) {
                const step = args.flipNavigation ? -1 : 1;
                const start = args.flipNavigation ? args.max : args.min;
                const end = args.flipNavigation ? args.min : args.max;
                index = this.next({
                    current: args.current,
                    start: start,
                    end: end,
                    step: step
                });
                action = NavigationAction.Navigate;
            }
            else if (keyCode === Keys.Home) {
                index = args.min;
                action = NavigationAction.Navigate;
            }
            else if (keyCode === Keys.End) {
                index = args.max;
                action = NavigationAction.Navigate;
            }
        }
        if (action !== NavigationAction.Undefined) {
            this[NavigationAction[action].toLowerCase()].emit({ index, target: args.target });
        }
        return action;
    }
    isEnterOrSpace(keyCode) {
        return keyCode === Keys.Enter || keyCode === Keys.Space;
    }
    next(args) {
        if (!isPresent(args.current)) {
            return args.start;
        }
        else {
            return args.current !== args.end ? args.current + args.step : args.end;
        }
    }
}
NavigationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService, deps: [{ token: NAVIGATION_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
NavigationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NAVIGATION_CONFIG]
                }] }]; } });
