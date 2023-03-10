/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v28.2.1
 * @link https://www.ag-grid.com/
 * @license MIT
 */
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
import { doOnce } from "../../utils/function";
import { TextCellEditor } from "./textCellEditor";
var PopupTextCellEditor = /** @class */ (function (_super) {
    __extends(PopupTextCellEditor, _super);
    function PopupTextCellEditor() {
        var _this = _super.call(this) || this;
        doOnce(function () { return console.warn('AG Grid: The PopupTextCellEditor (agPopupTextCellEditor) is deprecated. Instead use {cellEditor: "agTextCellEditor", cellEditorPopup: true} '); }, 'PopupTextCellEditor.deprecated');
        return _this;
    }
    PopupTextCellEditor.prototype.isPopup = function () {
        return true;
    };
    return PopupTextCellEditor;
}(TextCellEditor));
export { PopupTextCellEditor };
