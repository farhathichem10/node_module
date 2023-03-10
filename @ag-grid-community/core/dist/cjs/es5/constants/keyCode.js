/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v28.2.1
 * @link https://www.ag-grid.com/
 * @license MIT
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyCode = /** @class */ (function () {
    function KeyCode() {
    }
    KeyCode.BACKSPACE = 'Backspace';
    KeyCode.TAB = 'Tab';
    KeyCode.ENTER = 'Enter';
    KeyCode.ESCAPE = 'Escape';
    KeyCode.SPACE = ' ';
    KeyCode.LEFT = 'ArrowLeft';
    KeyCode.UP = 'ArrowUp';
    KeyCode.RIGHT = 'ArrowRight';
    KeyCode.DOWN = 'ArrowDown';
    KeyCode.DELETE = 'Delete';
    KeyCode.F2 = 'F2';
    KeyCode.PAGE_UP = 'PageUp';
    KeyCode.PAGE_DOWN = 'PageDown';
    KeyCode.PAGE_HOME = 'Home';
    KeyCode.PAGE_END = 'End';
    // these should be used with `event.code` instead of `event.key`
    // as `event.key` changes when non-latin keyboards are used
    KeyCode.A = 'KeyA';
    KeyCode.C = 'KeyC';
    KeyCode.V = 'KeyV';
    KeyCode.D = 'KeyD';
    KeyCode.Z = 'KeyZ';
    KeyCode.Y = 'KeyY';
    return KeyCode;
}());
exports.KeyCode = KeyCode;
