/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable, Inject, Optional } from '@angular/core';
import { eitherRect, removeStackingOffset, scaleRect } from '../util';
import { SCALE } from '../scale';
import * as i0 from "@angular/core";
import * as i1 from "./dom.service";
/**
 * @hidden
 */
export class AlignService {
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
AlignService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AlignService, deps: [{ token: i1.DOMService }, { token: SCALE, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
AlignService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AlignService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AlignService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DOMService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SCALE]
                }, {
                    type: Optional
                }] }]; } });
