/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { align, boundingOffset, getWindowViewPort, offset, positionWithScroll, restrictToView, addScroll, removeScroll, scrollPosition } from '@progress/kendo-popup-common';
import { isWindowAvailable, hasRelativeStackingContext, scrollableParents, zIndex } from '../util';
import { isDocumentAvailable } from '@progress/kendo-angular-common';
import * as i0 from "@angular/core";
const STYLES = [
    'font-size',
    'font-family',
    'font-stretch',
    'font-style',
    'font-weight',
    'line-height'
];
/**
 * @hidden
 */
export class DOMService {
    addOffset(current, addition) {
        return {
            left: current.left + addition.left,
            top: current.top + addition.top
        };
    }
    addScroll(rect, scroll) {
        return addScroll(rect, scroll);
    }
    align(settings) {
        return align(settings);
    }
    boundingOffset(el) {
        return boundingOffset(el);
    }
    getFontStyles(el) {
        const window = this.getWindow();
        if (!window || !el) {
            return [];
        }
        const computedStyles = window.getComputedStyle(el);
        return STYLES.map(font => ({ key: font, value: computedStyles[font] }));
    }
    getWindow() {
        return isWindowAvailable() ? window : null;
    }
    hasOffsetParent(el) {
        if (!el) {
            return false;
        }
        return !!this.nativeElement(el).offsetParent;
    }
    offset(el) {
        if (!el) {
            return null;
        }
        return offset(el);
    }
    offsetAtPoint(el, currentLocation) {
        if (!el) {
            return null;
        }
        const element = this.nativeElement(el);
        const { left, top, transition } = element.style;
        element.style.transition = 'none';
        element.style.left = `${currentLocation.left}px`;
        element.style.top = `${currentLocation.top}px`;
        const currentOffset = offset(element);
        element.style.left = left;
        element.style.top = top;
        // prevents elements with transition to be animated because of the change
        // eslint-disable-next-line no-unused-expressions
        element.offsetHeight;
        element.style.transition = transition;
        return currentOffset;
    }
    nativeElement(el) {
        if (!el) {
            return null;
        }
        return el.nativeElement || el;
    }
    position(element, popup, scale = 1) {
        if (!element || !popup) {
            return null;
        }
        return positionWithScroll(element, this.nativeElement(popup), scale);
    }
    removeScroll(rect, scroll) {
        return removeScroll(rect, scroll);
    }
    restrictToView(settings) {
        return restrictToView(settings);
    }
    scrollPosition(el) {
        return scrollPosition(this.nativeElement(el));
    }
    scrollableParents(el) {
        return scrollableParents(el);
    }
    stackingElementOffset(el) {
        const relativeContextElement = this.getRelativeContextElement(el);
        if (!relativeContextElement) {
            return null;
        }
        return offset(relativeContextElement);
    }
    stackingElementScroll(el) {
        const relativeContextElement = this.getRelativeContextElement(el);
        if (!relativeContextElement) {
            return { x: 0, y: 0 };
        }
        return {
            x: relativeContextElement.scrollLeft,
            y: relativeContextElement.scrollTop
        };
    }
    getRelativeContextElement(el) {
        if (!el || !hasRelativeStackingContext()) {
            return null;
        }
        let parent = this.nativeElement(el).parentElement;
        while (parent) {
            if (window.getComputedStyle(parent).transform !== 'none') {
                return parent;
            }
            parent = parent.parentElement;
        }
        return null;
    }
    useRelativePosition(el) {
        return !!this.getRelativeContextElement(el);
    }
    windowViewPort(el) {
        return getWindowViewPort(this.nativeElement(el));
    }
    zIndex(anchor, container) {
        return zIndex(anchor, this.nativeElement(container));
    }
    zoomLevel() {
        if (!isDocumentAvailable() || !isWindowAvailable()) {
            return 1;
        }
        return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
    }
    isZoomed() {
        return this.zoomLevel() > 1;
    }
}
DOMService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DOMService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DOMService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DOMService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DOMService, decorators: [{
            type: Injectable
        }] });
