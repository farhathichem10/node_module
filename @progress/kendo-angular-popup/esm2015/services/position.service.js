/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Inject, Injectable, Optional } from '@angular/core';
import { eitherRect, scaleRect } from '../util';
import { SCALE } from '../scale';
import * as i0 from "@angular/core";
import * as i1 from "./dom.service";
/**
 * @hidden
 */
export class PositionService {
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
PositionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PositionService, deps: [{ token: i1.DOMService }, { token: SCALE, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
PositionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PositionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PositionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DOMService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SCALE]
                }, {
                    type: Optional
                }] }]; } });
