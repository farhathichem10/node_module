/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { PositionElementSettings } from '../models/position-element-settings.interface';
import { Position } from '../models/position.interface';
import { DOMService } from './dom.service';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class PositionService {
    private _dom;
    private scale;
    constructor(_dom: DOMService, scale?: number);
    positionElement(settings: PositionElementSettings): Position;
    static ɵfac: i0.ɵɵFactoryDeclaration<PositionService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PositionService>;
}
