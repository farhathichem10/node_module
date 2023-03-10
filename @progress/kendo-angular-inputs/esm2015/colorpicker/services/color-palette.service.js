/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Injectable } from "@angular/core";
import { isPresent } from '../../common/utils';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export class ColorPaletteService {
    constructor() {
        this.colorRows = [];
    }
    setColorMatrix(palette, columns) {
        this.colorRows = [];
        if (!(isPresent(palette) && palette.length)) {
            return;
        }
        columns = columns || palette.length;
        for (let start = 0; start < palette.length; start += columns) {
            const row = palette.slice(start, columns + start);
            this.colorRows.push(row);
        }
    }
    getCellCoordsFor(color) {
        if (!isPresent(color)) {
            return;
        }
        for (let row = 0; row < this.colorRows.length; row++) {
            for (let col = 0; col < this.colorRows[row].length; col++) {
                if (this.colorRows[row][col] === color) {
                    return { row, col };
                }
            }
        }
    }
    getColorAt(cellCoords) {
        if (!(isPresent(cellCoords) && isPresent(this.colorRows[cellCoords.row]))) {
            return;
        }
        return this.colorRows[cellCoords.row][cellCoords.col];
    }
    getNextCell(current, horizontalStep, verticalStep) {
        if (!(isPresent(current) && isPresent(current.row) && isPresent(current.col))) {
            return { row: 0, col: 0 };
        }
        const row = this.clampIndex(current.row + verticalStep, this.colorRows.length - 1);
        const col = this.clampIndex(current.col + horizontalStep, this.colorRows[row].length - 1);
        return { row, col };
    }
    clampIndex(index, max) {
        const minArrayIndex = 0;
        if (index < minArrayIndex) {
            return minArrayIndex;
        }
        if (index > max) {
            return max;
        }
        return index;
    }
}
ColorPaletteService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ColorPaletteService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ColorPaletteService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ColorPaletteService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ColorPaletteService, decorators: [{
            type: Injectable
        }] });
