/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, Optional, EventEmitter, isDevMode, Component, Input, Output, ViewChild, TemplateRef, NgModule } from '@angular/core';
import { siblingContainer, parents, addScroll, align, boundingOffset, offset, positionWithScroll, removeScroll, restrictToView, scrollPosition, getWindowViewPort } from '@progress/kendo-popup-common';
import * as i7 from '@progress/kendo-angular-common';
import { isDocumentAvailable, hasObservers, ResizeSensorComponent, ResizeSensorModule } from '@progress/kendo-angular-common';
import { fromEvent, merge, from } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import * as i1 from '@angular/animations';
import { style, animate } from '@angular/animations';
import { validatePackage } from '@progress/kendo-licensing';
import * as i8 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * @hidden
 */
const eitherRect = (rect, offset) => {
    if (!rect) {
        return { height: 0, left: offset.left, top: offset.top, width: 0 };
    }
    return rect;
};
/**
 * @hidden
 */
const replaceOffset = (rect, offset) => {
    if (!offset) {
        return rect;
    }
    const result = {
        height: rect.height,
        left: offset.left,
        top: offset.top,
        width: rect.width
    };
    return result;
};
/**
 * @hidden
 */
const removeStackingOffset = (rect, stackingOffset) => {
    if (!stackingOffset) {
        return rect;
    }
    const result = {
        height: rect.height,
        left: rect.left - stackingOffset.left,
        top: rect.top - stackingOffset.top,
        width: rect.width
    };
    return result;
};
/**
 * @hidden
 */
const isDifferentOffset = (oldOffset, newOffset) => {
    const { left: oldLeft, top: oldTop } = oldOffset;
    const { left: newLeft, top: newTop } = newOffset;
    return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
/**
 * @hidden
 */
const isWindowAvailable = () => {
    return typeof window !== 'undefined';
};
/**
 * @hidden
 */
const hasBoundingRect = (elem) => !!elem.getBoundingClientRect;
/**
 * @hidden
 */
const OVERFLOW_REGEXP = /auto|scroll/;
const overflowElementStyle = (element) => {
    return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
const overflowComputedStyle = (element) => {
    const styles = window.getComputedStyle(element);
    return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
const overflowStyle = (element) => {
    return overflowElementStyle(element) || overflowComputedStyle(element);
};
/**
 * @hidden
 */
const scrollableParents = (element) => {
    const parentElements = [];
    if (!isDocumentAvailable() || !isWindowAvailable()) {
        return parentElements;
    }
    let parent = element.parentElement;
    while (parent) {
        if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute('data-scrollable')) {
            parentElements.push(parent);
        }
        parent = parent.parentElement;
    }
    parentElements.push(window);
    return parentElements;
};
/**
 * @hidden
 */
const FRAME_DURATION = 1000 / 60; //1000ms divided by 60fps
function memoize(fun) {
    let result;
    let called = false;
    return (...args) => {
        if (called) {
            return result;
        }
        result = fun(...args);
        called = true;
        return result;
    };
}
/**
 * @hidden
 */
const hasRelativeStackingContext = memoize(() => {
    if (!isDocumentAvailable() && document.body !== null) {
        return false;
    }
    const top = 10;
    const parent = document.createElement("div");
    parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
    parent.innerHTML = `<div style="position: fixed; top: ${top}px;">child</div>`;
    document.body.appendChild(parent);
    const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
    document.body.removeChild(parent);
    return isDifferent;
});
/**
 * @hidden
 */
const zIndex = (anchor, container) => {
    if (!anchor || !isDocumentAvailable() || !isWindowAvailable()) {
        return null;
    }
    const sibling = siblingContainer(anchor, container);
    if (!sibling) {
        return null;
    }
    const result = [anchor].concat(parents(anchor, sibling)).reduce((index, p) => {
        const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
        const current = parseInt(zIndexStyle, 10);
        return current > index ? current : index;
    }, 0);
    return result ? (result + 1) : null;
};
/**
 * @hidden
 */
const scaleRect = (rect, scale) => {
    if (!rect || scale === 1) {
        return rect;
    }
    return {
        height: rect.height / scale,
        left: rect.left / scale,
        top: rect.top / scale,
        width: rect.width / scale
    };
};

/**
 * Used to set the document scale when using a [scale transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale).
 *
 * The document or container scale is required to compute the popup position correctly. Detecting the scale is not reliable and must be set by providing a value for SCALE. See [Support for Document Scale]({% slug documentscale_popup %}).
 *
 * > Using this token is not necessary for user-applied browser zoom.
 *
 * {% meta height:300 %}
 * {% embed_file scale/app.component.ts preview %}
 * {% embed_file shared/app.module.ts %}
 * {% embed_file shared/main.ts %}
 * {% endmeta %}
 *
 *
 */
const SCALE = new InjectionToken('Popup Document Scale');

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
class DOMService {
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

/**
 * @hidden
 */
class AlignService {
    constructor(_dom, scale = 1) {
        this._dom = _dom;
        this.scale = scale;
    }
    alignElement(settings) {
        const { anchor, element, anchorAlign, elementAlign, margin, offset, positionMode } = settings;
        const scale = this.scale || 1;
        const fixedMode = positionMode === 'fixed' || !this._dom.hasOffsetParent(element);
        const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset, scale) : this.relativeRect(anchor, element, offset, scale);
        const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
        const result = this._dom.align({
            anchorAlign: anchorAlign,
            anchorRect: anchorRect,
            elementAlign: elementAlign,
            elementRect: elementRect,
            margin
        });
        return result;
    }
    absoluteRect(anchor, element, offset, scale) {
        const scrollPos = this.elementScrollPosition(anchor, element);
        const rect = eitherRect(this._dom.offset(anchor), offset);
        const stackScale = 2 * scale;
        const stackScroll = this._dom.stackingElementScroll(element);
        if (scale !== 1 && stackScroll) {
            stackScroll.x /= stackScale;
            stackScroll.y /= stackScale;
        }
        const stackOffset = this._dom.stackingElementOffset(element);
        if (scale !== 1 && stackOffset) {
            stackOffset.left /= stackScale;
            stackOffset.top /= stackScale;
        }
        return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
    }
    elementScrollPosition(anchor, element) {
        return anchor ? { x: 0, y: 0 } : this._dom.scrollPosition(element);
    }
    relativeRect(anchor, element, offset, scale) {
        const rect = eitherRect(this._dom.position(anchor, element, scale), offset);
        return scaleRect(rect, scale);
    }
}
AlignService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AlignService, deps: [{ token: DOMService }, { token: SCALE, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
AlignService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AlignService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AlignService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: DOMService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SCALE]
                }, {
                    type: Optional
                }] }]; } });

/**
 * @hidden
 */
class PositionService {
    constructor(_dom, scale = 1) {
        this._dom = _dom;
        this.scale = scale;
    }
    positionElement(settings) {
        const { anchor, currentLocation, element, anchorAlign, elementAlign, collisions, margin } = settings;
        const dom = this._dom;
        const scale = this.scale || 1;
        const elementOffset = dom.offsetAtPoint(element, currentLocation);
        const elementRect = scaleRect(elementOffset, scale);
        const anchorOffset = scaleRect(dom.offset(anchor), scale);
        const anchorRect = eitherRect(anchorOffset, currentLocation);
        const viewPort = settings.viewPort || dom.windowViewPort(element);
        viewPort.width = viewPort.width / scale;
        viewPort.height = viewPort.height / scale;
        const result = dom.restrictToView({
            anchorAlign,
            anchorRect,
            collisions,
            elementAlign,
            elementRect,
            margin,
            viewPort
        });
        const offset = dom.addOffset(currentLocation, result.offset);
        return {
            flip: result.flip,
            flipped: result.flipped,
            offset: offset
        };
    }
}
PositionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PositionService, deps: [{ token: DOMService }, { token: SCALE, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
PositionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PositionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PositionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: DOMService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SCALE]
                }, {
                    type: Optional
                }] }]; } });

/**
 * @hidden
 */
class ResizeService {
    constructor(_dom, _zone) {
        this._dom = _dom;
        this._zone = _zone;
    }
    subscribe(callback) {
        if (!isDocumentAvailable()) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            this.subscription = fromEvent(this._dom.getWindow(), "resize")
                .pipe(auditTime(FRAME_DURATION))
                .subscribe(() => callback());
        });
    }
    unsubscribe() {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
    isUnsubscribed() {
        return this.subscription && this.subscription.closed;
    }
}
ResizeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeService, deps: [{ token: DOMService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
ResizeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ResizeService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: DOMService }, { type: i0.NgZone }]; } });

/**
 * @hidden
 */
const THRESHOLD_DIFF = 1;
/**
 * @hidden
 */
class ScrollableService {
    constructor(_dom, _zone) {
        this._dom = _dom;
        this._zone = _zone;
    }
    forElement(element) {
        this.unsubscribe();
        this.element = element;
        return this;
    }
    subscribe(callback) {
        if (!callback || !isDocumentAvailable() || !this.element) {
            return;
        }
        const parents = this._dom.scrollableParents(this.element);
        this._zone.runOutsideAngular(() => {
            const observables = parents.map(p => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
            const subscriber = (e) => {
                const target = e.target;
                const isParent = parents.filter(p => p === target).length > 0;
                const isDocument = target === document;
                const isWindow = target === window;
                if (isParent || isDocument || isWindow) {
                    callback(this.isVisible(this.element, target));
                }
            };
            this.subscription = merge(...observables).subscribe(subscriber);
        });
    }
    unsubscribe() {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
    isVisible(elem, container) {
        const elemRect = this._dom.boundingOffset(elem);
        const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
        if (THRESHOLD_DIFF < (containerRect.top - elemRect.bottom)) {
            return false;
        }
        if (THRESHOLD_DIFF < (elemRect.top - containerRect.bottom)) {
            return false;
        }
        if (THRESHOLD_DIFF < (elemRect.left - containerRect.right)) {
            return false;
        }
        if (THRESHOLD_DIFF < (containerRect.left - elemRect.right)) {
            return false;
        }
        return true;
    }
}
ScrollableService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ScrollableService, deps: [{ token: DOMService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
ScrollableService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ScrollableService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ScrollableService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: DOMService }, { type: i0.NgZone }]; } });

const LEFT = 'left';
const RIGHT = 'right';
const DOWN = 'down';
const UP = 'up';
const DEFAULT_TYPE = 'slide';
const DEFAULT_DURATION = 100;
const animationTypes = {};
animationTypes.expand = (direction) => {
    const scale = direction === UP || direction === DOWN ? 'scaleY' : 'scaleX';
    const startScale = 0;
    const endScale = 1;
    let origin;
    if (direction === DOWN) {
        origin = 'top';
    }
    else if (direction === LEFT) {
        origin = RIGHT;
    }
    else if (direction === RIGHT) {
        origin = LEFT;
    }
    else {
        origin = 'bottom';
    }
    return {
        start: { transform: `${scale}(${startScale})`, transformOrigin: origin },
        end: { transform: `${scale}(${endScale})` }
    };
};
animationTypes.slide = (direction) => {
    const translate = direction === LEFT || direction === RIGHT ? 'translateX' : 'translateY';
    const start = direction === RIGHT || direction === DOWN ? -100 : 100;
    const end = 0;
    return {
        start: { transform: `${translate}(${start}%)` },
        end: { transform: `${translate}(${end}%)` }
    };
};
animationTypes.fade = () => {
    return {
        start: { opacity: 0 },
        end: { opacity: 1 }
    };
};
animationTypes.zoom = () => {
    const start = 0;
    const end = 1;
    return {
        start: { transform: `scale(${start})` },
        end: { transform: `scale(${end})` }
    };
};
/**
 * @hidden
 */
class AnimationService {
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
        this.start = new EventEmitter();
        this.end = new EventEmitter();
    }
    play(element, options, flip) {
        if (!this.flip || this.flip.horizontal !== flip.horizontal ||
            this.flip.vertical !== flip.vertical) {
            this.flip = flip;
            const type = options.type || DEFAULT_TYPE;
            const statesFn = animationTypes[type];
            if (statesFn) {
                const direction = this.getDirection(flip, options);
                const states = statesFn(direction);
                this.playStates(element, states, options);
            }
            else if (isDevMode()) {
                throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
            }
        }
    }
    ngOnDestroy() {
        this.stopPlayer();
    }
    playStates(element, states, options) {
        this.stopPlayer();
        const duration = options.duration || DEFAULT_DURATION;
        const factory = this.animationBuilder.build([
            style(states.start),
            animate(`${duration}ms ease-in`, style(states.end))
        ]);
        const player = this.player = factory.create(element);
        player.onDone(() => {
            this.end.emit();
            this.stopPlayer();
        });
        this.start.emit();
        player.play();
    }
    getDirection(flip, options) {
        let direction = options.direction || DOWN;
        if (flip.horizontal) {
            if (direction === LEFT) {
                direction = RIGHT;
            }
            else if (direction === RIGHT) {
                direction = LEFT;
            }
        }
        if (flip.vertical) {
            if (direction === DOWN) {
                direction = UP;
            }
            else if (direction === UP) {
                direction = DOWN;
            }
        }
        return direction;
    }
    stopPlayer() {
        if (this.player) {
            this.player.destroy();
            this.player = null;
        }
    }
}
AnimationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnimationService, deps: [{ token: i1.AnimationBuilder }], target: i0.ɵɵFactoryTarget.Injectable });
AnimationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnimationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnimationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AnimationBuilder }]; } });

/**
 * @hidden
 */
const packageMetadata = {
    name: '@progress/kendo-angular-popup',
    productName: 'Kendo UI for Angular',
    productCodes: ['KENDOUIANGULAR', 'KENDOUICOMPLETE'],
    publishDate: 1668698035,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning'
};

const DEFAULT_OFFSET = { left: -10000, top: 0 };
const ANIMATION_CONTAINER = 'k-animation-container';
const ANIMATION_CONTAINER_FIXED = 'k-animation-container-fixed';
/**
 * Represents the [Kendo UI Popup component for Angular]({% slug overview_popup %}).
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <button #anchor (click)="show=!show">Toggle</button>
 *  <kendo-popup *ngIf="show" [anchor]="anchor">
 *      <strong>Popup content!</strong>
 *  </kendo-popup>
 * `
 * })
 * class AppComponent {
 *   public show: boolean = false;
 * }
 * ```
 */
class PopupComponent {
    constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
        this.container = container;
        this._alignService = _alignService;
        this.domService = domService;
        this._positionService = _positionService;
        this._resizeService = _resizeService;
        this._scrollableService = _scrollableService;
        this.animationService = animationService;
        this._renderer = _renderer;
        this._zone = _zone;
        /**
         * Controls the Popup animation. By default, the opening and closing animations
         * are enabled ([see example]({% slug animations_popup %})).
         */
        this.animate = true;
        /**
         * Specifies the anchor pivot point
         * ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
         */
        this.anchorAlign = { horizontal: 'left', vertical: 'bottom' };
        /**
         * Configures the collision behavior of the Popup
         * ([see example]({% slug viewportboundarydetection_popup %})).
         */
        this.collision = { horizontal: 'fit', vertical: 'flip' };
        /**
         * Specifies the pivot point of the Popup
         * ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
         */
        this.popupAlign = { horizontal: 'left', vertical: 'top' };
        /**
         * Controls whether the component will copy the `anchor` font styles.
         */
        this.copyAnchorStyles = false;
        /**
         * Specifies the position mode of the component. By default, the Popup uses fixed positioning.
         * To make the Popup acquire absolute positioning, set this option to `absolute`.
         *
         * > If you need to support mobile browsers with the zoom option,
         * use the `absolute` positioning of the Popup.
         *
         * @example
         * ```html
         * <style>
         *  .parent-content {
         *     position: relative;
         *     width: 200px;
         *     height: 200px;
         *     overflow: auto;
         *     margin: 200px auto;
         *     border: 1px solid red;
         *  }
         *  .content {
         *     position: relative;
         *     width: 100px;
         *     height: 100px;
         *     overflow: auto;
         *     margin: 300px;
         *     border: 1px solid blue;
         *  }
         *  .anchor {
         *     position: absolute;
         *     top: 200px;
         *     left: 200px;
         *  }
         * </style>
         * ```
         * ```ts
         * _@Component({
         * selector: 'my-app',
         * template: `
         *   <div class="example-config">
         *      Position mode:
         *      <label><input type="radio" value="fixed" [(ngModel)]="mode" /> Fixed</label>
         *      <label><input type="radio" value="absolute" [(ngModel)]="mode" /> Absolute</label>
         *   </div>
         *   <div class="example-config">
         *       Append to
         *       <label>
         *           <input type="radio" name="place" [value]="1" [(ngModel)]="checked" />
         *           Root component
         *       </label>
         *       <label>
         *           <input type="radio" name="place" [value]="2" [(ngModel)]="checked" />
         *           <span style="color: red">Red Container</span>
         *       </label>
         *       <label>
         *           <input type="radio" name="place" [value]="3" [(ngModel)]="checked" />
         *           <span style="color: blue">Blue Container</span>
         *       </label>
         *   </div>
         *   <div class="example">
         *     <div class="parent-content" [scrollLeft]="250" [scrollTop]="230">
         *         <div class="content" [scrollLeft]="170" [scrollTop]="165">
         *           <button #anchor class="anchor" (click)="show = !show">Toggle</button>
         *           <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 3">
         *             <ul>
         *                 <li>Item1</li>
         *                 <li>Item2</li>
         *                 <li>Item3</li>
         *             </ul>
         *           </kendo-popup>
         *           <span style="position: absolute; top: 400px; left: 400px">Bottom/Right</span>
         *         </div>
         *         <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 2">
         *           <ul>
         *               <li>Item1</li>
         *               <li>Item2</li>
         *               <li>Item3</li>
         *           </ul>
         *         </kendo-popup>
         *         <span style="position: absolute; top: 600px; left: 600px">Bottom/Right</span>
         *     </div>
         *     <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 1">
         *       <ul>
         *           <li>Item1</li>
         *           <li>Item2</li>
         *           <li>Item3</li>
         *       </ul>
         *     </kendo-popup>
         *   </div>
         * `
         * })
         * class AppComponent {
         *   public checked: number = 3;
         *   public mode: string = 'absolute';
         *   public show: boolean = true;
         * }
         * ```
         */
        this.positionMode = 'fixed';
        /**
         * Specifies the absolute position of the element
         * ([see example]({% slug alignmentpositioning_popup %}#toc-aligning-to-absolute-points)).
         * The Popup opens next to that point. The Popup pivot point is defined by the `popupAlign` configuration option.
         * The boundary detection is applied by using the window viewport.
         */
        this.offset = DEFAULT_OFFSET;
        /**
         * Fires when the anchor is scrolled outside the screen boundaries.
         * ([see example]({% slug closing_popup %}#toc-after-leaving-the-viewport)).
         */
        this.anchorViewportLeave = new EventEmitter();
        /**
         * Fires after the component is closed.
         */
        this.close = new EventEmitter();
        /**
         * Fires after the component is opened and the opening animation ends.
         */
        this.open = new EventEmitter();
        /**
         * Fires after the component is opened and the Popup is positioned.
         */
        this.positionChange = new EventEmitter();
        this.resolvedPromise = Promise.resolve(null);
        this.initialCheck = true;
        validatePackage(packageMetadata);
        this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
        this.updateFixedClass();
    }
    ngOnInit() {
        this.reposition = this.reposition.bind(this);
        this._resizeService.subscribe(this.reposition);
        this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
        this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
        this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
        this.currentOffset = DEFAULT_OFFSET;
        this.setZIndex();
        this.copyFontStyles();
        this.updateFixedClass();
        this.reposition();
    }
    ngOnChanges(changes) {
        if (changes.copyAnchorStyles) {
            this.copyFontStyles();
        }
        if (changes.positionMode) {
            this.updateFixedClass();
        }
    }
    ngAfterViewInit() {
        if (!this.animate) {
            this.resolvedPromise.then(() => {
                this.onAnimationEnd();
            });
        }
    }
    ngAfterViewChecked() {
        if (this.initialCheck) {
            this.initialCheck = false;
            return;
        }
        this._zone.runOutsideAngular(() => {
            // workarounds https://github.com/angular/angular/issues/19094
            // uses promise because it is executed synchronously after the content is updated
            // does not use onStable in case the current zone is not the angular one.
            this.unsubscribeReposition();
            this.repositionSubscription = from(this.resolvedPromise)
                .subscribe(this.reposition);
        });
    }
    ngOnDestroy() {
        this.anchorViewportLeave.complete();
        this.positionChange.complete();
        this.close.emit();
        this.close.complete();
        this._resizeService.unsubscribe();
        this._scrollableService.unsubscribe();
        this.animationSubscriptions.unsubscribe();
        this.unsubscribeReposition();
    }
    /**
     * @hidden
     */
    onResize() {
        this.reposition();
    }
    onAnimationStart() {
        this._renderer.removeClass(this.container.nativeElement, 'k-animation-container-shown');
    }
    onAnimationEnd() {
        this._renderer.addClass(this.container.nativeElement, 'k-animation-container-shown');
        this.open.emit();
        this.open.complete();
    }
    get currentOffset() {
        return this._currentOffset;
    }
    set currentOffset(offset) {
        this.setContainerStyle('left', `${offset.left}px`);
        this.setContainerStyle('top', `${offset.top}px`);
        this._currentOffset = offset;
    }
    setZIndex() {
        if (this.anchor) {
            this.setContainerStyle('z-index', String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
        }
    }
    reposition() {
        if (!isDocumentAvailable()) {
            return;
        }
        const { flip, offset } = this.position();
        if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset)) {
            this.currentOffset = offset;
            if (hasObservers(this.positionChange)) {
                this._zone.run(() => this.positionChange.emit({ offset, flip }));
            }
        }
        if (this.animate) {
            this.animationService.play(this.contentContainer.nativeElement, this.animate, flip);
        }
        this.resizeSensor.acceptSize();
    }
    position() {
        const alignedOffset = this._alignService.alignElement({
            anchor: this.domService.nativeElement(this.anchor),
            anchorAlign: this.anchorAlign,
            element: this.container,
            elementAlign: this.popupAlign,
            margin: this.margin,
            offset: this.offset,
            positionMode: this.positionMode
        });
        return this._positionService.positionElement({
            anchor: this.domService.nativeElement(this.anchor),
            anchorAlign: this.anchorAlign,
            collisions: this.collision,
            currentLocation: alignedOffset,
            element: this.container,
            elementAlign: this.popupAlign,
            margin: this.margin
        });
    }
    onScroll(isInViewPort) {
        const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
        if (isInViewPort || !hasLeaveObservers) {
            this.reposition();
        }
        else if (hasLeaveObservers) {
            this._zone.run(() => {
                this.anchorViewportLeave.emit();
            });
        }
    }
    copyFontStyles() {
        if (!this.anchor || !this.copyAnchorStyles) {
            return;
        }
        this.domService.getFontStyles(this.domService.nativeElement(this.anchor))
            .forEach(s => this.setContainerStyle(s.key, s.value));
    }
    updateFixedClass() {
        const action = this.positionMode === 'fixed' ? 'addClass' : 'removeClass';
        this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
    }
    setContainerStyle(name, value) {
        this._renderer.setStyle(this.container.nativeElement, name, value);
    }
    unsubscribeReposition() {
        if (this.repositionSubscription) {
            this.repositionSubscription.unsubscribe();
        }
    }
}
PopupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupComponent, deps: [{ token: i0.ElementRef }, { token: AlignService }, { token: DOMService }, { token: PositionService }, { token: ResizeService }, { token: ScrollableService }, { token: AnimationService }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PopupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PopupComponent, selector: "kendo-popup", inputs: { animate: "animate", anchor: "anchor", anchorAlign: "anchorAlign", collision: "collision", popupAlign: "popupAlign", copyAnchorStyles: "copyAnchorStyles", popupClass: "popupClass", positionMode: "positionMode", offset: "offset", margin: "margin" }, outputs: { anchorViewportLeave: "anchorViewportLeave", close: "close", open: "open", positionChange: "positionChange" }, providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService], viewQueries: [{ propertyName: "contentContainer", first: true, predicate: ["container"], descendants: true, static: true }, { propertyName: "resizeSensor", first: true, predicate: ResizeSensorComponent, descendants: true, static: true }], exportAs: ["kendo-popup"], usesOnChanges: true, ngImport: i0, template: `
        <div class="k-popup" [ngClass]="popupClass" #container>
            <ng-content></ng-content>
            <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
            <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
            </kendo-resize-sensor>
        </div>
     `, isInline: true, components: [{ type: i7.ResizeSensorComponent, selector: "kendo-resize-sensor", inputs: ["rateLimit"], outputs: ["resize"] }], directives: [{ type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupComponent, decorators: [{
            type: Component,
            args: [{
                    exportAs: 'kendo-popup',
                    providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService],
                    selector: 'kendo-popup',
                    template: `
        <div class="k-popup" [ngClass]="popupClass" #container>
            <ng-content></ng-content>
            <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
            <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
            </kendo-resize-sensor>
        </div>
     `
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: AlignService }, { type: DOMService }, { type: PositionService }, { type: ResizeService }, { type: ScrollableService }, { type: AnimationService }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { animate: [{
                type: Input
            }], anchor: [{
                type: Input
            }], anchorAlign: [{
                type: Input
            }], collision: [{
                type: Input
            }], popupAlign: [{
                type: Input
            }], copyAnchorStyles: [{
                type: Input
            }], popupClass: [{
                type: Input
            }], positionMode: [{
                type: Input
            }], offset: [{
                type: Input
            }], margin: [{
                type: Input
            }], anchorViewportLeave: [{
                type: Output
            }], close: [{
                type: Output
            }], open: [{
                type: Output
            }], positionChange: [{
                type: Output
            }], contentContainer: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], resizeSensor: [{
                type: ViewChild,
                args: [ResizeSensorComponent, { static: true }]
            }] } });

const removeElement = (element) => {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
};
/**
 * Used to inject the Popup container. If not provided, the first root component of
 * the application is used.
 *
 * > The `POPUP_CONTAINER` can be used only with the [`PopupService`]({% slug service_popup %}) class.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Popup module
 * import { PopupModule, POPUP_CONTAINER } from '@progress/kendo-angular-popup';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { ElementRef, NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, PopupModule], // import Popup module
 *     bootstrap:    [AppComponent],
 *     providers: [{
 *       provide: POPUP_CONTAINER,
 *       useFactory: () => {
 *          //return the container ElementRef, where the popup will be injected
 *          return { nativeElement: document.body } as ElementRef;
 *       }
 *     }]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 * ```
 */
const POPUP_CONTAINER = new InjectionToken('Popup Container');
/**
 * A service for opening Popup components dynamically
 * ([see example]({% slug service_popup %})).
 *
 * @export
 * @class PopupService
 */
class PopupService {
    constructor(applicationRef, componentFactoryResolver, injector, container) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.container = container;
    }
    /**
     * Gets the root view container into which the component will be injected.
     *
     * @returns {ComponentRef<any>}
     */
    get rootViewContainer() {
        // https://github.com/angular/angular/blob/4.0.x/packages/core/src/application_ref.ts#L571
        const rootComponents = this.applicationRef.components || [];
        if (rootComponents[0]) {
            return rootComponents[0];
        }
        throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See http://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
    }
    /**
     * Sets or gets the HTML element of the root component container.
     *
     * @returns {HTMLElement}
     */
    get rootViewContainerNode() {
        return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
    }
    /**
     * Opens a Popup component. Created Popups are mounted
     * in the DOM directly in the root application component.
     *
     * @param {PopupSettings} options - The options which define the Popup.
     * @returns {ComponentRef<PopupComponent>} - A reference to the Popup object.
     *
     * @example
     *
     * ```ts-no-run
     * _@Component({
     *   selector: 'my-app',
     *   template: `
     *     <ng-template #template>
     *      Popup content
     *     </ng-template>
     *     <button #anchor kendoButton (click)="open(anchor, template)">Open</button>
     *   `
     * })
     * export class AppComponent {
     *     public popupRef: PopupRef;
     *
     *     constructor( private popupService: PopupService ) {}
     *
     *     public open(anchor: ElementRef, template: TemplateRef<any>): void {
     *         if (this.popupRef) {
     *              this.popupRef.close();
     *              this.popupRef = null;
     *              return;
     *         }
     *
     *         this.popupRef = this.popupService.open({
     *           anchor: anchor,
     *           content: template
     *         });
     *     }
     * }
     * ```
     */
    open(options = {}) {
        const { component, nodes } = this.contentFrom(options.content);
        const popupComponentRef = this.appendPopup(nodes, options.appendTo);
        const popupInstance = popupComponentRef.instance;
        this.projectComponentInputs(popupComponentRef, options);
        popupComponentRef.changeDetectorRef.detectChanges();
        if (component) {
            component.changeDetectorRef.detectChanges();
        }
        const popupElement = this.getComponentRootNode(popupComponentRef);
        return {
            close: () => {
                if (component) {
                    component.destroy();
                }
                popupComponentRef.destroy();
                // Angular will not remove the element unless the change detection is triggered
                removeElement(popupElement);
            },
            content: component,
            popup: popupComponentRef,
            popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
            popupClose: popupInstance.close,
            popupElement: popupElement,
            popupOpen: popupInstance.open,
            popupPositionChange: popupInstance.positionChange
        };
    }
    appendPopup(nodes, container) {
        const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
        if (!container) {
            this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
        }
        return popupComponentRef;
    }
    /**
     * Gets the HTML element for a component reference.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     */
    getComponentRootNode(componentRef) {
        return componentRef.location.nativeElement;
    }
    /**
     * Gets the `ComponentFactory` instance by its type.
     *
     * @param {*} componentClass
     * @param {*} nodes
     * @returns {ComponentRef<any>}
     */
    getComponentFactory(componentClass) {
        return this.componentFactoryResolver.resolveComponentFactory(componentClass);
    }
    /**
     * Creates a component reference from a `Component` type class.
     *
     * @param {*} componentClass
     * @param {*} nodes
     * @returns {ComponentRef<any>}
     */
    createComponent(componentClass, nodes, container) {
        const factory = this.getComponentFactory(componentClass);
        if (container) {
            return container.createComponent(factory, undefined, this.injector, nodes);
        }
        else {
            const component = factory.create(this.injector, nodes);
            this.applicationRef.attachView(component.hostView);
            return component;
        }
    }
    /**
     * Projects the inputs on the component.
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     */
    projectComponentInputs(component, options) {
        Object.getOwnPropertyNames(options)
            .filter(prop => prop !== 'content' || options.content instanceof TemplateRef)
            .map((prop) => {
            component.instance[prop] = options[prop];
        });
        return component;
    }
    /**
     * Gets the component and the nodes to append from the `content` option.
     *
     * @param {*} content
     * @returns {any}
     */
    contentFrom(content) {
        if (!content || content instanceof TemplateRef) {
            return { component: null, nodes: [[]] };
        }
        const component = this.createComponent(content);
        const nodes = component ? [component.location.nativeElement] : [];
        return {
            component: component,
            nodes: [
                nodes // <ng-content>
            ]
        };
    }
}
PopupService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupService, deps: [{ token: i0.ApplicationRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Injector }, { token: POPUP_CONTAINER, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
PopupService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [POPUP_CONTAINER]
                }, {
                    type: Optional
                }] }]; } });

const POPUP_DIRECTIVES = [PopupComponent];
/**
 * Represents the [NgModule](link:site.data.urls.angular['ngmoduleapi'])
 * definition for the Popup component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Popup module
 * import { PopupModule } from '@progress/kendo-angular-popup';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, PopupModule], // import Popup module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
class PopupModule {
}
PopupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PopupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupModule, declarations: [PopupComponent], imports: [CommonModule, ResizeSensorModule], exports: [PopupComponent] });
PopupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupModule, providers: [PopupService], imports: [[CommonModule, ResizeSensorModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PopupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [POPUP_DIRECTIVES],
                    entryComponents: [POPUP_DIRECTIVES],
                    exports: [POPUP_DIRECTIVES],
                    imports: [CommonModule, ResizeSensorModule],
                    providers: [PopupService]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { POPUP_CONTAINER, PopupComponent, PopupModule, PopupService, SCALE };

