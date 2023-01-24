/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable, EventEmitter } from '@angular/core';
import { isPresent } from '../util';
import { Keys } from '@progress/kendo-angular-common';
import { NavigationAction } from './navigation-action';
import * as i0 from "@angular/core";
import * as i1 from "../disabled-items/disabled-items.service";
import * as i2 from "../selection/selection.service";
const MIN_INDEX = 0;
/**
 * @hidden
 */
export class NavigationEvent {
    /**
     * The index of the item to which the user navigated.
     */
    constructor(index, originalEvent) {
        this.index = index;
        this.originalEvent = originalEvent;
    }
}
/**
 * @hidden
 */
export class NavigationService {
    constructor(disabledItemsService, selectionService) {
        this.disabledItemsService = disabledItemsService;
        this.selectionService = selectionService;
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.enter = new EventEmitter();
        this.tab = new EventEmitter();
        this.esc = new EventEmitter();
        this.up = new EventEmitter();
        this.right = new EventEmitter();
        this.down = new EventEmitter();
        this.left = new EventEmitter();
        this.delete = new EventEmitter();
        this.backspace = new EventEmitter();
        this.home = new EventEmitter();
        this.end = new EventEmitter();
        this.pagedown = new EventEmitter();
        this.pageup = new EventEmitter();
        this.selectnext = new EventEmitter();
        this.selectprevious = new EventEmitter();
        this.selectall = new EventEmitter();
        this.selectalltobeginning = new EventEmitter();
        this.selectalltoend = new EventEmitter();
    }
    process(args) {
        const keyCode = args.originalEvent.keyCode;
        const altKey = args.originalEvent.altKey;
        const shiftKey = args.originalEvent.shiftKey;
        const ctrlKey = args.originalEvent.ctrlKey || args.originalEvent.metaKey;
        let index;
        let action = NavigationAction.Undefined;
        if (altKey && keyCode === Keys.ArrowDown) {
            action = NavigationAction.Open;
        }
        else if (altKey && keyCode === Keys.ArrowUp) {
            action = NavigationAction.Close;
        }
        else if (shiftKey && keyCode === Keys.ArrowUp) {
            action = NavigationAction.SelectPrevious;
        }
        else if (shiftKey && keyCode === Keys.ArrowDown) {
            action = NavigationAction.SelectNext;
        }
        else if (ctrlKey && keyCode === Keys.KeyA) {
            action = NavigationAction.SelectAll;
        }
        else if (ctrlKey && shiftKey && keyCode === Keys.Home) {
            action = NavigationAction.SelectAllToBeginning;
        }
        else if (ctrlKey && shiftKey && keyCode === Keys.End) {
            action = NavigationAction.SelectAllToEnd;
        }
        else if (keyCode === Keys.Enter) {
            action = NavigationAction.Enter;
        }
        else if (keyCode === Keys.Escape) {
            action = NavigationAction.Esc;
        }
        else if (keyCode === Keys.Tab) {
            action = NavigationAction.Tab;
        }
        else if (keyCode === Keys.ArrowUp) {
            index = this.next({ current: args.current, start: args.min, end: args.max, step: -1 });
            action = NavigationAction.Up;
        }
        else if (keyCode === Keys.ArrowLeft) {
            index = this.next({ current: args.current, start: args.min, end: args.max, step: -1 });
            action = NavigationAction.Left;
        }
        else if (keyCode === Keys.ArrowDown) {
            index = this.next({ current: args.current, start: args.min, end: args.max, step: 1 });
            action = NavigationAction.Down;
        }
        else if (keyCode === Keys.ArrowRight) {
            index = this.next({ current: args.current, start: args.min, end: args.max, step: 1 });
            action = NavigationAction.Right;
        }
        else if (keyCode === Keys.Home) {
            index = this.isDisabled(MIN_INDEX) ? args.current : MIN_INDEX;
            action = NavigationAction.Home;
        }
        else if (keyCode === Keys.End) {
            index = this.isDisabled(args.max) ? args.current : args.max;
            action = NavigationAction.End;
        }
        else if (keyCode === Keys.Delete) {
            action = NavigationAction.Delete;
        }
        else if (keyCode === Keys.Backspace) {
            action = NavigationAction.Backspace;
        }
        else if (keyCode === Keys.PageDown) {
            action = NavigationAction.PageDown;
        }
        else if (keyCode === Keys.PageUp) {
            action = NavigationAction.PageUp;
        }
        const eventData = new NavigationEvent(index, args.originalEvent);
        if (action !== NavigationAction.Undefined) {
            this[NavigationAction[action].toLowerCase()].emit(eventData);
        }
        return action;
    }
    next(args) {
        const { current, start, end, step } = args;
        const nextIndex = !isPresent(current) ? start : this.clampIndex(current + step, start, end);
        const firstFocusableIndex = this.firstFocusableIndex(nextIndex, start, end, step);
        if (isPresent(firstFocusableIndex)) {
            return firstFocusableIndex;
        }
        if (this.selectionService.isSelected(current) && current >= start) {
            return current;
        }
        const inversedStep = -1 * step;
        return this.firstFocusableIndex(nextIndex, start, end, inversedStep);
    }
    clampIndex(index, min, max) {
        if (!isPresent(index) || index < min) {
            return min;
        }
        if (index > max) {
            return max;
        }
        return index;
    }
    firstFocusableIndex(startIndex, min, max, step) {
        while (min <= startIndex && startIndex <= max) {
            if (!this.isDisabled(startIndex)) {
                return startIndex;
            }
            startIndex += step;
        }
        return undefined;
    }
    isDisabled(index) {
        if (this.disabledItemsService) {
            return this.disabledItemsService.isIndexDisabled(index);
        }
    }
}
NavigationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService, deps: [{ token: i1.DisabledItemsService }, { token: i2.SelectionService }], target: i0.ɵɵFactoryTarget.Injectable });
NavigationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NavigationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DisabledItemsService }, { type: i2.SelectionService }]; } });
