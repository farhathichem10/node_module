/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v28.2.1
 * @link https://www.ag-grid.com/
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = require("../context/context");
var beanStub_1 = require("../context/beanStub");
var CellPositionUtils = /** @class */ (function (_super) {
    __extends(CellPositionUtils, _super);
    function CellPositionUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellPositionUtils.prototype.createId = function (cellPosition) {
        var rowIndex = cellPosition.rowIndex, rowPinned = cellPosition.rowPinned, column = cellPosition.column;
        return this.createIdFromValues(rowIndex, column, rowPinned);
    };
    CellPositionUtils.prototype.createIdFromValues = function (rowIndex, column, rowPinned) {
        return rowIndex + "." + (rowPinned == null ? 'null' : rowPinned) + "." + column.getId();
    };
    CellPositionUtils.prototype.equals = function (cellA, cellB) {
        var colsMatch = cellA.column === cellB.column;
        var floatingMatch = cellA.rowPinned === cellB.rowPinned;
        var indexMatch = cellA.rowIndex === cellB.rowIndex;
        return colsMatch && floatingMatch && indexMatch;
    };
    CellPositionUtils = __decorate([
        context_1.Bean('cellPositionUtils')
    ], CellPositionUtils);
    return CellPositionUtils;
}(beanStub_1.BeanStub));
exports.CellPositionUtils = CellPositionUtils;
