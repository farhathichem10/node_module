(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-image-cropper', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-image-cropper'] = {}, global.ng.core, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, core, platformBrowser, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/interfaces/move-start.interface.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MoveStart() { }
    if (false) {
        /** @type {?} */
        MoveStart.prototype.active;
        /** @type {?} */
        MoveStart.prototype.type;
        /** @type {?} */
        MoveStart.prototype.position;
        /** @type {?} */
        MoveStart.prototype.x1;
        /** @type {?} */
        MoveStart.prototype.y1;
        /** @type {?} */
        MoveStart.prototype.x2;
        /** @type {?} */
        MoveStart.prototype.y2;
        /** @type {?} */
        MoveStart.prototype.clientX;
        /** @type {?} */
        MoveStart.prototype.clientY;
    }
    /** @enum {string} */
    var MoveTypes = {
        Move: "move",
        Resize: "resize",
        Pinch: "pinch",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/resize.utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
     * Hermite resize - fast image resize/resample using Hermite filter.
     * https://github.com/viliusle/Hermite-resize
     */
    /**
     * @param {?} canvas
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function resizeCanvas(canvas, width, height) {
        /** @type {?} */
        var width_source = canvas.width;
        /** @type {?} */
        var height_source = canvas.height;
        width = Math.round(width);
        height = Math.round(height);
        /** @type {?} */
        var ratio_w = width_source / width;
        /** @type {?} */
        var ratio_h = height_source / height;
        /** @type {?} */
        var ratio_w_half = Math.ceil(ratio_w / 2);
        /** @type {?} */
        var ratio_h_half = Math.ceil(ratio_h / 2);
        /** @type {?} */
        var ctx = canvas.getContext('2d');
        if (ctx) {
            /** @type {?} */
            var img = ctx.getImageData(0, 0, width_source, height_source);
            /** @type {?} */
            var img2 = ctx.createImageData(width, height);
            /** @type {?} */
            var data = img.data;
            /** @type {?} */
            var data2 = img2.data;
            for (var j = 0; j < height; j++) {
                for (var i = 0; i < width; i++) {
                    /** @type {?} */
                    var x2 = (i + j * width) * 4;
                    /** @type {?} */
                    var center_y = j * ratio_h;
                    /** @type {?} */
                    var weight = 0;
                    /** @type {?} */
                    var weights = 0;
                    /** @type {?} */
                    var weights_alpha = 0;
                    /** @type {?} */
                    var gx_r = 0;
                    /** @type {?} */
                    var gx_g = 0;
                    /** @type {?} */
                    var gx_b = 0;
                    /** @type {?} */
                    var gx_a = 0;
                    /** @type {?} */
                    var xx_start = Math.floor(i * ratio_w);
                    /** @type {?} */
                    var yy_start = Math.floor(j * ratio_h);
                    /** @type {?} */
                    var xx_stop = Math.ceil((i + 1) * ratio_w);
                    /** @type {?} */
                    var yy_stop = Math.ceil((j + 1) * ratio_h);
                    xx_stop = Math.min(xx_stop, width_source);
                    yy_stop = Math.min(yy_stop, height_source);
                    for (var yy = yy_start; yy < yy_stop; yy++) {
                        /** @type {?} */
                        var dy = Math.abs(center_y - yy) / ratio_h_half;
                        /** @type {?} */
                        var center_x = i * ratio_w;
                        /** @type {?} */
                        var w0 = dy * dy;
                        for (var xx = xx_start; xx < xx_stop; xx++) {
                            /** @type {?} */
                            var dx = Math.abs(center_x - xx) / ratio_w_half;
                            /** @type {?} */
                            var w = Math.sqrt(w0 + dx * dx);
                            if (w >= 1) {
                                //pixel too far
                                continue;
                            }
                            //hermite filter
                            weight = 2 * w * w * w - 3 * w * w + 1;
                            /** @type {?} */
                            var pos_x = 4 * (xx + yy * width_source);
                            //alpha
                            gx_a += weight * data[pos_x + 3];
                            weights_alpha += weight;
                            //colors
                            if (data[pos_x + 3] < 255)
                                weight = weight * data[pos_x + 3] / 250;
                            gx_r += weight * data[pos_x];
                            gx_g += weight * data[pos_x + 1];
                            gx_b += weight * data[pos_x + 2];
                            weights += weight;
                        }
                    }
                    data2[x2] = gx_r / weights;
                    data2[x2 + 1] = gx_g / weights;
                    data2[x2 + 2] = gx_b / weights;
                    data2[x2 + 3] = gx_a / weights_alpha;
                }
            }
            canvas.width = width;
            canvas.height = height;
            //draw
            ctx.putImageData(img2, 0, 0);
        }
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/crop.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CropService = /** @class */ (function () {
        function CropService() {
        }
        /**
         * @param {?} sourceImage
         * @param {?} loadedImage
         * @param {?} cropper
         * @param {?} settings
         * @return {?}
         */
        CropService.prototype.crop = /**
         * @param {?} sourceImage
         * @param {?} loadedImage
         * @param {?} cropper
         * @param {?} settings
         * @return {?}
         */
        function (sourceImage, loadedImage, cropper, settings) {
            /** @type {?} */
            var imagePosition = this.getImagePosition(sourceImage, loadedImage, cropper, settings);
            /** @type {?} */
            var width = imagePosition.x2 - imagePosition.x1;
            /** @type {?} */
            var height = imagePosition.y2 - imagePosition.y1;
            /** @type {?} */
            var cropCanvas = (/** @type {?} */ (document.createElement('canvas')));
            cropCanvas.width = width;
            cropCanvas.height = height;
            /** @type {?} */
            var ctx = cropCanvas.getContext('2d');
            if (!ctx) {
                return;
            }
            if (settings.backgroundColor != null) {
                ctx.fillStyle = settings.backgroundColor;
                ctx.fillRect(0, 0, width, height);
            }
            /** @type {?} */
            var scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
            /** @type {?} */
            var scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
            /** @type {?} */
            var transformedImage = loadedImage.transformed;
            ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2, transformedImage.size.height / 2);
            ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
            ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
            ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
            /** @type {?} */
            var output = {
                width: width, height: height,
                imagePosition: imagePosition,
                cropperPosition: __assign({}, cropper)
            };
            if (settings.containWithinAspectRatio) {
                output.offsetImagePosition = this.getOffsetImagePosition(sourceImage, loadedImage, cropper, settings);
            }
            /** @type {?} */
            var resizeRatio = this.getResizeRatio(width, height, settings);
            if (resizeRatio !== 1) {
                output.width = Math.round(width * resizeRatio);
                output.height = settings.maintainAspectRatio
                    ? Math.round(output.width / settings.aspectRatio)
                    : Math.round(height * resizeRatio);
                resizeCanvas(cropCanvas, output.width, output.height);
            }
            output.base64 = cropCanvas.toDataURL('image/' + settings.format, this.getQuality(settings));
            return output;
        };
        /**
         * @private
         * @param {?} sourceImage
         * @param {?} loadedImage
         * @param {?} cropper
         * @param {?} settings
         * @return {?}
         */
        CropService.prototype.getImagePosition = /**
         * @private
         * @param {?} sourceImage
         * @param {?} loadedImage
         * @param {?} cropper
         * @param {?} settings
         * @return {?}
         */
        function (sourceImage, loadedImage, cropper, settings) {
            /** @type {?} */
            var sourceImageElement = sourceImage.nativeElement;
            /** @type {?} */
            var ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
            /** @type {?} */
            var out = {
                x1: Math.round(cropper.x1 * ratio),
                y1: Math.round(cropper.y1 * ratio),
                x2: Math.round(cropper.x2 * ratio),
                y2: Math.round(cropper.y2 * ratio)
            };
            if (!settings.containWithinAspectRatio) {
                out.x1 = Math.max(out.x1, 0);
                out.y1 = Math.max(out.y1, 0);
                out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
                out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
            }
            return out;
        };
        /**
         * @private
         * @param {?} sourceImage
         * @param {?} loadedImage
         * @param {?} cropper
         * @param {?} settings
         * @return {?}
         */
        CropService.prototype.getOffsetImagePosition = /**
         * @private
         * @param {?} sourceImage
         * @param {?} loadedImage
         * @param {?} cropper
         * @param {?} settings
         * @return {?}
         */
        function (sourceImage, loadedImage, cropper, settings) {
            /** @type {?} */
            var canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
            /** @type {?} */
            var sourceImageElement = sourceImage.nativeElement;
            /** @type {?} */
            var ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
            /** @type {?} */
            var offsetX;
            /** @type {?} */
            var offsetY;
            if (canvasRotation % 2) {
                offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
                offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
            }
            else {
                offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
                offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
            }
            /** @type {?} */
            var out = {
                x1: Math.round(cropper.x1 * ratio) - offsetX,
                y1: Math.round(cropper.y1 * ratio) - offsetY,
                x2: Math.round(cropper.x2 * ratio) - offsetX,
                y2: Math.round(cropper.y2 * ratio) - offsetY
            };
            if (!settings.containWithinAspectRatio) {
                out.x1 = Math.max(out.x1, 0);
                out.y1 = Math.max(out.y1, 0);
                out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
                out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
            }
            return out;
        };
        /**
         * @param {?} width
         * @param {?} height
         * @param {?} settings
         * @return {?}
         */
        CropService.prototype.getResizeRatio = /**
         * @param {?} width
         * @param {?} height
         * @param {?} settings
         * @return {?}
         */
        function (width, height, settings) {
            /** @type {?} */
            var ratioWidth = settings.resizeToWidth / width;
            /** @type {?} */
            var ratioHeight = settings.resizeToHeight / height;
            /** @type {?} */
            var ratios = new Array();
            if (settings.resizeToWidth > 0) {
                ratios.push(ratioWidth);
            }
            if (settings.resizeToHeight > 0) {
                ratios.push(ratioHeight);
            }
            /** @type {?} */
            var result = ratios.length === 0 ? 1 : Math.min.apply(Math, __spread(ratios));
            if (result > 1 && !settings.onlyScaleDown) {
                return result;
            }
            return Math.min(result, 1);
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        CropService.prototype.getQuality = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
            return Math.min(1, Math.max(0, settings.imageQuality / 100));
        };
        CropService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ CropService.ngInjectableDef = core.????defineInjectable({ factory: function CropService_Factory() { return new CropService(); }, token: CropService, providedIn: "root" });
        return CropService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/interfaces/cropper.settings.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CropperSettings = /** @class */ (function () {
        function CropperSettings() {
            // From options
            this.format = 'png';
            this.maintainAspectRatio = true;
            this.transform = {};
            this.aspectRatio = 1;
            this.resizeToWidth = 0;
            this.resizeToHeight = 0;
            this.cropperMinWidth = 0;
            this.cropperMinHeight = 0;
            this.cropperMaxHeight = 0;
            this.cropperMaxWidth = 0;
            this.cropperStaticWidth = 0;
            this.cropperStaticHeight = 0;
            this.canvasRotation = 0;
            this.initialStepSize = 3;
            this.roundCropper = false;
            this.onlyScaleDown = false;
            this.imageQuality = 92;
            this.autoCrop = true;
            this.backgroundColor = undefined;
            this.containWithinAspectRatio = false;
            this.hideResizeSquares = false;
            this.alignImage = 'center';
            // Internal
            this.cropperScaledMinWidth = 20;
            this.cropperScaledMinHeight = 20;
            this.cropperScaledMaxWidth = 20;
            this.cropperScaledMaxHeight = 20;
            this.stepSize = this.initialStepSize;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        CropperSettings.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            Object.keys(options)
                .filter((/**
             * @param {?} k
             * @return {?}
             */
            function (k) { return k in _this; }))
                .forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) { return _this[k] = options[k]; }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        CropperSettings.prototype.setOptionsFromChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            Object.keys(changes)
                .filter((/**
             * @param {?} k
             * @return {?}
             */
            function (k) { return k in _this; }))
                .forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) { return _this[k] = changes[k].currentValue; }));
        };
        return CropperSettings;
    }());
    if (false) {
        /** @type {?} */
        CropperSettings.prototype.format;
        /** @type {?} */
        CropperSettings.prototype.maintainAspectRatio;
        /** @type {?} */
        CropperSettings.prototype.transform;
        /** @type {?} */
        CropperSettings.prototype.aspectRatio;
        /** @type {?} */
        CropperSettings.prototype.resizeToWidth;
        /** @type {?} */
        CropperSettings.prototype.resizeToHeight;
        /** @type {?} */
        CropperSettings.prototype.cropperMinWidth;
        /** @type {?} */
        CropperSettings.prototype.cropperMinHeight;
        /** @type {?} */
        CropperSettings.prototype.cropperMaxHeight;
        /** @type {?} */
        CropperSettings.prototype.cropperMaxWidth;
        /** @type {?} */
        CropperSettings.prototype.cropperStaticWidth;
        /** @type {?} */
        CropperSettings.prototype.cropperStaticHeight;
        /** @type {?} */
        CropperSettings.prototype.canvasRotation;
        /** @type {?} */
        CropperSettings.prototype.initialStepSize;
        /** @type {?} */
        CropperSettings.prototype.roundCropper;
        /** @type {?} */
        CropperSettings.prototype.onlyScaleDown;
        /** @type {?} */
        CropperSettings.prototype.imageQuality;
        /** @type {?} */
        CropperSettings.prototype.autoCrop;
        /** @type {?} */
        CropperSettings.prototype.backgroundColor;
        /** @type {?} */
        CropperSettings.prototype.containWithinAspectRatio;
        /** @type {?} */
        CropperSettings.prototype.hideResizeSquares;
        /** @type {?} */
        CropperSettings.prototype.alignImage;
        /** @type {?} */
        CropperSettings.prototype.cropperScaledMinWidth;
        /** @type {?} */
        CropperSettings.prototype.cropperScaledMinHeight;
        /** @type {?} */
        CropperSettings.prototype.cropperScaledMaxWidth;
        /** @type {?} */
        CropperSettings.prototype.cropperScaledMaxHeight;
        /** @type {?} */
        CropperSettings.prototype.stepSize;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/exif.utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Black 2x1 JPEG, with the following meta information set:
    // - EXIF Orientation: 6 (Rotated 90?? CCW)
    // Source: https://github.com/blueimp/JavaScript-Load-Image
    /** @type {?} */
    var testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
        'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
        'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
        'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
        'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
        'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
    /**
     * @return {?}
     */
    function supportsAutomaticRotation() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            /** @type {?} */
            var img = new Image();
            img.onload = (/**
             * @return {?}
             */
            function () {
                // Check if browser supports automatic image orientation:
                /** @type {?} */
                var supported = img.width === 1 && img.height === 2;
                resolve(supported);
            });
            img.src = testAutoOrientationImageURL;
        }));
    }
    /**
     * @param {?} exifRotationOrBase64Image
     * @return {?}
     */
    function getTransformationsFromExifData(exifRotationOrBase64Image) {
        if (typeof exifRotationOrBase64Image === 'string') {
            exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
        }
        switch (exifRotationOrBase64Image) {
            case 2:
                return { rotate: 0, flip: true };
            case 3:
                return { rotate: 2, flip: false };
            case 4:
                return { rotate: 2, flip: true };
            case 5:
                return { rotate: 1, flip: true };
            case 6:
                return { rotate: 1, flip: false };
            case 7:
                return { rotate: 3, flip: true };
            case 8:
                return { rotate: 3, flip: false };
            default:
                return { rotate: 0, flip: false };
        }
    }
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    function getExifRotation(imageBase64) {
        /** @type {?} */
        var view = new DataView(base64ToArrayBuffer(imageBase64));
        if (view.getUint16(0, false) != 0xFFD8) {
            return -2;
        }
        /** @type {?} */
        var length = view.byteLength;
        /** @type {?} */
        var offset = 2;
        while (offset < length) {
            if (view.getUint16(offset + 2, false) <= 8)
                return -1;
            /** @type {?} */
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) {
                    return -1;
                }
                /** @type {?} */
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                /** @type {?} */
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++) {
                    if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                        return view.getUint16(offset + (i * 12) + 8, little);
                    }
                }
            }
            else if ((marker & 0xFF00) != 0xFF00) {
                break;
            }
            else {
                offset += view.getUint16(offset, false);
            }
        }
        return -1;
    }
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    function base64ToArrayBuffer(imageBase64) {
        imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        /** @type {?} */
        var binaryString = atob(imageBase64);
        /** @type {?} */
        var len = binaryString.length;
        /** @type {?} */
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/load-image.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function LoadImageBase64() { }
    if (false) {
        /** @type {?} */
        LoadImageBase64.prototype.originalImage;
        /** @type {?} */
        LoadImageBase64.prototype.originalBase64;
    }
    var LoadImageService = /** @class */ (function () {
        function LoadImageService() {
            this.autoRotateSupported = supportsAutomaticRotation();
        }
        /**
         * @param {?} file
         * @param {?} cropperSettings
         * @return {?}
         */
        LoadImageService.prototype.loadImageFile = /**
         * @param {?} file
         * @param {?} cropperSettings
         * @return {?}
         */
        function (file, cropperSettings) {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var fileReader = new FileReader();
                fileReader.onload = (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.loadImage(event.target.result, file.type, cropperSettings)
                        .then(resolve)
                        .catch(reject);
                });
                fileReader.readAsDataURL(file);
            }));
        };
        /**
         * @private
         * @param {?} imageBase64
         * @param {?} imageType
         * @param {?} cropperSettings
         * @return {?}
         */
        LoadImageService.prototype.loadImage = /**
         * @private
         * @param {?} imageBase64
         * @param {?} imageType
         * @param {?} cropperSettings
         * @return {?}
         */
        function (imageBase64, imageType, cropperSettings) {
            if (!this.isValidImageType(imageType)) {
                return Promise.reject(new Error('Invalid image type'));
            }
            return this.loadBase64Image(imageBase64, cropperSettings);
        };
        /**
         * @private
         * @param {?} type
         * @return {?}
         */
        LoadImageService.prototype.isValidImageType = /**
         * @private
         * @param {?} type
         * @return {?}
         */
        function (type) {
            return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
        };
        /**
         * @param {?} url
         * @param {?} cropperSettings
         * @return {?}
         */
        LoadImageService.prototype.loadImageFromURL = /**
         * @param {?} url
         * @param {?} cropperSettings
         * @return {?}
         */
        function (url, cropperSettings) {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var img = new Image();
                img.onerror = (/**
                 * @return {?}
                 */
                function () { return reject; });
                img.onload = (/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var canvas = document.createElement('canvas');
                    /** @type {?} */
                    var context = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context.drawImage(img, 0, 0);
                    _this.loadBase64Image(canvas.toDataURL(), cropperSettings).then(resolve);
                });
                img.crossOrigin = 'anonymous';
                img.src = url;
            }));
        };
        /**
         * @param {?} imageBase64
         * @param {?} cropperSettings
         * @return {?}
         */
        LoadImageService.prototype.loadBase64Image = /**
         * @param {?} imageBase64
         * @param {?} cropperSettings
         * @return {?}
         */
        function (imageBase64, cropperSettings) {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var originalImage = new Image();
                originalImage.onload = (/**
                 * @return {?}
                 */
                function () { return resolve({
                    originalImage: originalImage,
                    originalBase64: imageBase64
                }); });
                originalImage.onerror = reject;
                originalImage.src = imageBase64;
            })).then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.transformImageBase64(res, cropperSettings); }));
        };
        /**
         * @private
         * @param {?} res
         * @param {?} cropperSettings
         * @return {?}
         */
        LoadImageService.prototype.transformImageBase64 = /**
         * @private
         * @param {?} res
         * @param {?} cropperSettings
         * @return {?}
         */
        function (res, cropperSettings) {
            return __awaiter(this, void 0, void 0, function () {
                var autoRotate, exifTransform, loadedImage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.autoRotateSupported];
                        case 1:
                            autoRotate = _a.sent();
                            return [4 /*yield*/, getTransformationsFromExifData(autoRotate ? -1 : res.originalBase64)];
                        case 2:
                            exifTransform = _a.sent();
                            if (!res.originalImage || !res.originalImage.complete) {
                                return [2 /*return*/, Promise.reject(new Error('No image loaded'))];
                            }
                            loadedImage = {
                                original: {
                                    base64: res.originalBase64,
                                    image: res.originalImage,
                                    size: {
                                        width: res.originalImage.naturalWidth,
                                        height: res.originalImage.naturalHeight
                                    }
                                },
                                exifTransform: exifTransform
                            };
                            return [2 /*return*/, this.transformLoadedImage(loadedImage, cropperSettings)];
                    }
                });
            });
        };
        /**
         * @param {?} loadedImage
         * @param {?} cropperSettings
         * @return {?}
         */
        LoadImageService.prototype.transformLoadedImage = /**
         * @param {?} loadedImage
         * @param {?} cropperSettings
         * @return {?}
         */
        function (loadedImage, cropperSettings) {
            return __awaiter(this, void 0, void 0, function () {
                var canvasRotation, originalSize, transformedSize, canvas, ctx, transformedBase64, transformedImage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
                            originalSize = {
                                width: loadedImage.original.image.naturalWidth,
                                height: loadedImage.original.image.naturalHeight
                            };
                            if (canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
                                return [2 /*return*/, {
                                        original: {
                                            base64: loadedImage.original.base64,
                                            image: loadedImage.original.image,
                                            size: __assign({}, originalSize)
                                        },
                                        transformed: {
                                            base64: loadedImage.original.base64,
                                            image: loadedImage.original.image,
                                            size: __assign({}, originalSize)
                                        },
                                        exifTransform: loadedImage.exifTransform
                                    }];
                            }
                            transformedSize = this.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
                            canvas = document.createElement('canvas');
                            canvas.width = transformedSize.width;
                            canvas.height = transformedSize.height;
                            ctx = canvas.getContext('2d');
                            ctx.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
                            ctx.rotate(Math.PI * (canvasRotation / 2));
                            ctx.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
                            transformedBase64 = canvas.toDataURL();
                            return [4 /*yield*/, this.loadImageFromBase64(transformedBase64)];
                        case 1:
                            transformedImage = _a.sent();
                            return [2 /*return*/, {
                                    original: {
                                        base64: loadedImage.original.base64,
                                        image: loadedImage.original.image,
                                        size: __assign({}, originalSize)
                                    },
                                    transformed: {
                                        base64: transformedBase64,
                                        image: transformedImage,
                                        size: {
                                            width: transformedImage.width,
                                            height: transformedImage.height
                                        }
                                    },
                                    exifTransform: loadedImage.exifTransform
                                }];
                    }
                });
            });
        };
        /**
         * @private
         * @param {?} imageBase64
         * @return {?}
         */
        LoadImageService.prototype.loadImageFromBase64 = /**
         * @private
         * @param {?} imageBase64
         * @return {?}
         */
        function (imageBase64) {
            return new Promise(((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var image = new Image();
                image.onload = (/**
                 * @return {?}
                 */
                function () { return resolve(image); });
                image.onerror = reject;
                image.src = imageBase64;
            })));
        };
        /**
         * @private
         * @param {?} originalSize
         * @param {?} exifTransform
         * @param {?} cropperSettings
         * @return {?}
         */
        LoadImageService.prototype.getTransformedSize = /**
         * @private
         * @param {?} originalSize
         * @param {?} exifTransform
         * @param {?} cropperSettings
         * @return {?}
         */
        function (originalSize, exifTransform, cropperSettings) {
            /** @type {?} */
            var canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
            if (cropperSettings.containWithinAspectRatio) {
                if (canvasRotation % 2) {
                    /** @type {?} */
                    var minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
                    /** @type {?} */
                    var minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
                    return {
                        width: Math.max(originalSize.height, minWidthToContain),
                        height: Math.max(originalSize.width, minHeightToContain)
                    };
                }
                else {
                    /** @type {?} */
                    var minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
                    /** @type {?} */
                    var minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
                    return {
                        width: Math.max(originalSize.width, minWidthToContain),
                        height: Math.max(originalSize.height, minHeightToContain)
                    };
                }
            }
            if (canvasRotation % 2) {
                return {
                    height: originalSize.width,
                    width: originalSize.height
                };
            }
            return {
                width: originalSize.width,
                height: originalSize.height
            };
        };
        LoadImageService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ LoadImageService.ngInjectableDef = core.????defineInjectable({ factory: function LoadImageService_Factory() { return new LoadImageService(); }, token: LoadImageService, providedIn: "root" });
        return LoadImageService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LoadImageService.prototype.autoRotateSupported;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/cropper-position.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CropperPositionService = /** @class */ (function () {
        function CropperPositionService() {
        }
        /**
         * @param {?} sourceImage
         * @param {?} cropperPosition
         * @param {?} settings
         * @return {?}
         */
        CropperPositionService.prototype.resetCropperPosition = /**
         * @param {?} sourceImage
         * @param {?} cropperPosition
         * @param {?} settings
         * @return {?}
         */
        function (sourceImage, cropperPosition, settings) {
            /** @type {?} */
            var sourceImageElement = sourceImage.nativeElement;
            if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
                cropperPosition.x1 = 0;
                cropperPosition.x2 = sourceImageElement.offsetWidth > settings.cropperStaticWidth ?
                    settings.cropperStaticWidth : sourceImageElement.offsetWidth;
                cropperPosition.y1 = 0;
                cropperPosition.y2 = sourceImageElement.offsetHeight > settings.cropperStaticHeight ?
                    settings.cropperStaticHeight : sourceImageElement.offsetHeight;
            }
            else {
                /** @type {?} */
                var cropperWidth = Math.min(settings.cropperScaledMaxWidth, sourceImageElement.offsetWidth);
                /** @type {?} */
                var cropperHeight = Math.min(settings.cropperScaledMaxHeight, sourceImageElement.offsetHeight);
                if (!settings.maintainAspectRatio) {
                    cropperPosition.x1 = 0;
                    cropperPosition.x2 = cropperWidth;
                    cropperPosition.y1 = 0;
                    cropperPosition.y2 = cropperHeight;
                }
                else if (cropperWidth / settings.aspectRatio < cropperHeight) {
                    cropperPosition.x1 = 0;
                    cropperPosition.x2 = cropperWidth;
                    /** @type {?} */
                    var cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
                    cropperPosition.y1 = (sourceImageElement.offsetHeight - cropperHeightWithAspectRatio) / 2;
                    cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
                }
                else {
                    cropperPosition.y1 = 0;
                    cropperPosition.y2 = cropperHeight;
                    /** @type {?} */
                    var cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
                    cropperPosition.x1 = (sourceImageElement.offsetWidth - cropperWidthWithAspectRatio) / 2;
                    cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
                }
            }
        };
        /**
         * @param {?} event
         * @param {?} moveStart
         * @param {?} cropperPosition
         * @return {?}
         */
        CropperPositionService.prototype.move = /**
         * @param {?} event
         * @param {?} moveStart
         * @param {?} cropperPosition
         * @return {?}
         */
        function (event, moveStart, cropperPosition) {
            /** @type {?} */
            var diffX = this.getClientX(event) - moveStart.clientX;
            /** @type {?} */
            var diffY = this.getClientY(event) - moveStart.clientY;
            cropperPosition.x1 = moveStart.x1 + diffX;
            cropperPosition.y1 = moveStart.y1 + diffY;
            cropperPosition.x2 = moveStart.x2 + diffX;
            cropperPosition.y2 = moveStart.y2 + diffY;
        };
        /**
         * @param {?} event
         * @param {?} moveStart
         * @param {?} cropperPosition
         * @param {?} maxSize
         * @param {?} settings
         * @return {?}
         */
        CropperPositionService.prototype.resize = /**
         * @param {?} event
         * @param {?} moveStart
         * @param {?} cropperPosition
         * @param {?} maxSize
         * @param {?} settings
         * @return {?}
         */
        function (event, moveStart, cropperPosition, maxSize, settings) {
            /** @type {?} */
            var moveX = this.getClientX(event) - moveStart.clientX;
            /** @type {?} */
            var moveY = this.getClientY(event) - moveStart.clientY;
            switch (moveStart.position) {
                case 'left':
                    cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                    break;
                case 'topleft':
                    cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                    cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                    break;
                case 'top':
                    cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                    break;
                case 'topright':
                    cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                    cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                    break;
                case 'right':
                    cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                    break;
                case 'bottomright':
                    cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                    cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                    break;
                case 'bottom':
                    cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                    break;
                case 'bottomleft':
                    cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                    cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                    break;
                case 'center':
                    /** @type {?} */
                    var scale = event.scale;
                    /** @type {?} */
                    var newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, (Math.abs(moveStart.x2 - moveStart.x1)) * scale), settings.cropperScaledMaxWidth);
                    /** @type {?} */
                    var newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, (Math.abs(moveStart.y2 - moveStart.y1)) * scale), settings.cropperScaledMaxHeight);
                    cropperPosition.x1 = moveStart.clientX - newWidth / 2;
                    cropperPosition.x2 = moveStart.clientX + newWidth / 2;
                    cropperPosition.y1 = moveStart.clientY - newHeight / 2;
                    cropperPosition.y2 = moveStart.clientY + newHeight / 2;
                    if (cropperPosition.x1 < 0) {
                        cropperPosition.x2 -= cropperPosition.x1;
                        cropperPosition.x1 = 0;
                    }
                    else if (cropperPosition.x2 > maxSize.width) {
                        cropperPosition.x1 -= (cropperPosition.x2 - maxSize.width);
                        cropperPosition.x2 = maxSize.width;
                    }
                    if (cropperPosition.y1 < 0) {
                        cropperPosition.y2 -= cropperPosition.y1;
                        cropperPosition.y1 = 0;
                    }
                    else if (cropperPosition.y2 > maxSize.height) {
                        cropperPosition.y1 -= (cropperPosition.y2 - maxSize.height);
                        cropperPosition.y2 = maxSize.height;
                    }
                    break;
            }
            if (settings.maintainAspectRatio) {
                this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
            }
        };
        /**
         * @param {?} position
         * @param {?} cropperPosition
         * @param {?} maxSize
         * @param {?} settings
         * @return {?}
         */
        CropperPositionService.prototype.checkAspectRatio = /**
         * @param {?} position
         * @param {?} cropperPosition
         * @param {?} maxSize
         * @param {?} settings
         * @return {?}
         */
        function (position, cropperPosition, maxSize, settings) {
            /** @type {?} */
            var overflowX = 0;
            /** @type {?} */
            var overflowY = 0;
            switch (position) {
                case 'top':
                    cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                    overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                    overflowY = Math.max(0 - cropperPosition.y1, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                        cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                    }
                    break;
                case 'bottom':
                    cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                    overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                    overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                        cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : (overflowX / settings.aspectRatio);
                    }
                    break;
                case 'topleft':
                    cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                    overflowX = Math.max(0 - cropperPosition.x1, 0);
                    overflowY = Math.max(0 - cropperPosition.y1, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        cropperPosition.x1 += (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                        cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                    }
                    break;
                case 'topright':
                    cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                    overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                    overflowY = Math.max(0 - cropperPosition.y1, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                        cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                    }
                    break;
                case 'right':
                case 'bottomright':
                    cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                    overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                    overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                        cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                    }
                    break;
                case 'left':
                case 'bottomleft':
                    cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                    overflowX = Math.max(0 - cropperPosition.x1, 0);
                    overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                    if (overflowX > 0 || overflowY > 0) {
                        cropperPosition.x1 += (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                        cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                    }
                    break;
                case 'center':
                    cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                    cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                    /** @type {?} */
                    var overflowX1 = Math.max(0 - cropperPosition.x1, 0);
                    /** @type {?} */
                    var overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
                    /** @type {?} */
                    var overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
                    /** @type {?} */
                    var overflowY2 = Math.max(0 - cropperPosition.y1, 0);
                    if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                        cropperPosition.x1 += (overflowY1 * settings.aspectRatio) > overflowX1 ? (overflowY1 * settings.aspectRatio) : overflowX1;
                        cropperPosition.x2 -= (overflowY2 * settings.aspectRatio) > overflowX2 ? (overflowY2 * settings.aspectRatio) : overflowX2;
                        cropperPosition.y1 += (overflowY2 * settings.aspectRatio) > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
                        cropperPosition.y2 -= (overflowY1 * settings.aspectRatio) > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
                    }
                    break;
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        CropperPositionService.prototype.getClientX = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        CropperPositionService.prototype.getClientY = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
        };
        CropperPositionService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ CropperPositionService.ngInjectableDef = core.????defineInjectable({ factory: function CropperPositionService_Factory() { return new CropperPositionService(); }, token: CropperPositionService, providedIn: "root" });
        return CropperPositionService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/keyboard.utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} key
     * @return {?}
     */
    function getPositionForKey(key) {
        switch (key) {
            case 'ArrowUp':
                return 'top';
            case 'ArrowRight':
                return 'right';
            case 'ArrowDown':
                return 'bottom';
            case 'ArrowLeft':
            default:
                return 'left';
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    function getInvertedPositionForKey(key) {
        switch (key) {
            case 'ArrowUp':
                return 'bottom';
            case 'ArrowRight':
                return 'left';
            case 'ArrowDown':
                return 'top';
            case 'ArrowLeft':
            default:
                return 'right';
        }
    }
    /**
     * @param {?} key
     * @param {?} stepSize
     * @return {?}
     */
    function getEventForKey(key, stepSize) {
        switch (key) {
            case 'ArrowUp':
                return { clientX: 0, clientY: stepSize * -1 };
            case 'ArrowRight':
                return { clientX: stepSize, clientY: 0 };
            case 'ArrowDown':
                return { clientX: 0, clientY: stepSize };
            case 'ArrowLeft':
            default:
                return { clientX: stepSize * -1, clientY: 0 };
        }
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/component/image-cropper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageCropperComponent = /** @class */ (function () {
        function ImageCropperComponent(cropService, cropperPositionService, loadImageService, sanitizer, cd) {
            this.cropService = cropService;
            this.cropperPositionService = cropperPositionService;
            this.loadImageService = loadImageService;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.Hammer = typeof window !== 'undefined'
                ? (/** @type {?} */ (((/** @type {?} */ (window))).Hammer))
                : null;
            this.settings = new CropperSettings();
            this.setImageMaxSizeRetries = 0;
            this.marginLeft = '0px';
            this.moveTypes = MoveTypes;
            this.imageVisible = false;
            this.format = this.settings.format;
            this.transform = {};
            this.maintainAspectRatio = this.settings.maintainAspectRatio;
            this.aspectRatio = this.settings.aspectRatio;
            this.resizeToWidth = this.settings.resizeToWidth;
            this.resizeToHeight = this.settings.resizeToHeight;
            this.cropperMinWidth = this.settings.cropperMinWidth;
            this.cropperMinHeight = this.settings.cropperMinHeight;
            this.cropperMaxHeight = this.settings.cropperMaxHeight;
            this.cropperMaxWidth = this.settings.cropperMaxWidth;
            this.cropperStaticWidth = this.settings.cropperStaticWidth;
            this.cropperStaticHeight = this.settings.cropperStaticHeight;
            this.canvasRotation = this.settings.canvasRotation;
            this.initialStepSize = this.settings.initialStepSize;
            this.roundCropper = this.settings.roundCropper;
            this.onlyScaleDown = this.settings.onlyScaleDown;
            this.imageQuality = this.settings.imageQuality;
            this.autoCrop = this.settings.autoCrop;
            this.backgroundColor = this.settings.backgroundColor;
            this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
            this.hideResizeSquares = this.settings.hideResizeSquares;
            this.cropper = {
                x1: -100,
                y1: -100,
                x2: 10000,
                y2: 10000
            };
            this.alignImage = this.settings.alignImage;
            this.disabled = false;
            this.imageCropped = new core.EventEmitter();
            this.startCropImage = new core.EventEmitter();
            this.imageLoaded = new core.EventEmitter();
            this.cropperReady = new core.EventEmitter();
            this.loadImageFailed = new core.EventEmitter();
            this.reset();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ImageCropperComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            this.onChangesUpdateSettings(changes);
            this.onChangesInputImage(changes);
            if (this.loadedImage && this.loadedImage.original.image.complete
                && (changes.containWithinAspectRatio || changes.canvasRotation)) {
                this.loadImageService
                    .transformLoadedImage(this.loadedImage, this.settings)
                    .then((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return _this.setLoadedImage(res); }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return _this.loadImageError(err); }));
            }
            if (changes.cropper) {
                this.setMaxSize();
                this.setCropperScaledMinSize();
                this.setCropperScaledMaxSize();
                this.checkCropperPosition(false);
                this.doAutoCrop();
                this.cd.markForCheck();
            }
            if (changes.aspectRatio && this.imageVisible) {
                this.resetCropperPosition();
            }
            if (changes.transform) {
                this.transform = this.transform || {};
                this.setCssTransform();
                this.doAutoCrop();
            }
        };
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */
        ImageCropperComponent.prototype.onChangesUpdateSettings = /**
         * @private
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.settings.setOptionsFromChanges(changes);
            if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
                this.settings.setOptions({
                    hideResizeSquares: true,
                    cropperMinWidth: this.settings.cropperStaticWidth,
                    cropperMinHeight: this.settings.cropperStaticHeight,
                    cropperMaxHeight: this.settings.cropperStaticHeight,
                    cropperMaxWidth: this.settings.cropperStaticWidth,
                    maintainAspectRatio: false
                });
            }
        };
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */
        ImageCropperComponent.prototype.onChangesInputImage = /**
         * @private
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
                this.reset();
            }
            if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
                this.loadImageFile(this.imageChangedEvent.target.files[0]);
            }
            if (changes.imageURL && this.imageURL) {
                this.loadImageFromURL(this.imageURL);
            }
            if (changes.imageBase64 && this.imageBase64) {
                this.loadBase64Image(this.imageBase64);
            }
            if (changes.imageFile && this.imageFile) {
                this.loadImageFile(this.imageFile);
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.isValidImageChangedEvent = /**
         * @private
         * @return {?}
         */
        function () {
            return this.imageChangedEvent
                && this.imageChangedEvent.target
                && this.imageChangedEvent.target.files
                && this.imageChangedEvent.target.files.length > 0;
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.setCssTransform = /**
         * @private
         * @return {?}
         */
        function () {
            this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' +
                'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' +
                'rotate(' + (this.transform.rotate || 0) + 'deg)');
        };
        /**
         * @return {?}
         */
        ImageCropperComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.settings.stepSize = this.initialStepSize;
            this.activatePinchGesture();
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.reset = /**
         * @private
         * @return {?}
         */
        function () {
            this.imageVisible = false;
            this.loadedImage = null;
            this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
                + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
                + 'AAarVyFEAAAAASUVORK5CYII=';
            this.moveStart = {
                active: false,
                type: null,
                position: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                clientX: 0,
                clientY: 0
            };
            this.maxSize = {
                width: 0,
                height: 0
            };
            this.cropper.x1 = -100;
            this.cropper.y1 = -100;
            this.cropper.x2 = 10000;
            this.cropper.y2 = 10000;
        };
        /**
         * @private
         * @param {?} file
         * @return {?}
         */
        ImageCropperComponent.prototype.loadImageFile = /**
         * @private
         * @param {?} file
         * @return {?}
         */
        function (file) {
            var _this = this;
            this.loadImageService
                .loadImageFile(file, this.settings)
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.setLoadedImage(res); }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.loadImageError(err); }));
        };
        /**
         * @private
         * @param {?} imageBase64
         * @return {?}
         */
        ImageCropperComponent.prototype.loadBase64Image = /**
         * @private
         * @param {?} imageBase64
         * @return {?}
         */
        function (imageBase64) {
            var _this = this;
            this.loadImageService
                .loadBase64Image(imageBase64, this.settings)
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.setLoadedImage(res); }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.loadImageError(err); }));
        };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        ImageCropperComponent.prototype.loadImageFromURL = /**
         * @private
         * @param {?} url
         * @return {?}
         */
        function (url) {
            var _this = this;
            this.loadImageService
                .loadImageFromURL(url, this.settings)
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.setLoadedImage(res); }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.loadImageError(err); }));
        };
        /**
         * @private
         * @param {?} loadedImage
         * @return {?}
         */
        ImageCropperComponent.prototype.setLoadedImage = /**
         * @private
         * @param {?} loadedImage
         * @return {?}
         */
        function (loadedImage) {
            this.loadedImage = loadedImage;
            this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.base64);
            this.cd.markForCheck();
        };
        /**
         * @private
         * @param {?} error
         * @return {?}
         */
        ImageCropperComponent.prototype.loadImageError = /**
         * @private
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.error(error);
            this.loadImageFailed.emit();
        };
        /**
         * @return {?}
         */
        ImageCropperComponent.prototype.imageLoadedInView = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.loadedImage != null) {
                this.imageLoaded.emit(this.loadedImage);
                this.setImageMaxSizeRetries = 0;
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.checkImageMaxSizeRecursively(); }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.checkImageMaxSizeRecursively = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.setImageMaxSizeRetries > 40) {
                this.loadImageFailed.emit();
            }
            else if (this.sourceImageLoaded()) {
                this.setMaxSize();
                this.setCropperScaledMinSize();
                this.setCropperScaledMaxSize();
                this.resetCropperPosition();
                this.cropperReady.emit(__assign({}, this.maxSize));
                this.cd.markForCheck();
            }
            else {
                this.setImageMaxSizeRetries++;
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.checkImageMaxSizeRecursively(); }), 50);
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.sourceImageLoaded = /**
         * @private
         * @return {?}
         */
        function () {
            return this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0;
        };
        /**
         * @return {?}
         */
        ImageCropperComponent.prototype.onResize = /**
         * @return {?}
         */
        function () {
            if (!this.loadedImage) {
                return;
            }
            this.resizeCropperPosition();
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.setCropperScaledMaxSize();
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.activatePinchGesture = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.Hammer) {
                /** @type {?} */
                var hammer = new this.Hammer(this.wrapper.nativeElement);
                hammer.get('pinch').set({ enable: true });
                hammer.on('pinchmove', this.onPinch.bind(this));
                hammer.on('pinchend', this.pinchStop.bind(this));
                hammer.on('pinchstart', this.startPinch.bind(this));
            }
            else if (core.isDevMode()) {
                console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.resizeCropperPosition = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;
            if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
                this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
                this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
                this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
                this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
            }
        };
        /**
         * @return {?}
         */
        ImageCropperComponent.prototype.resetCropperPosition = /**
         * @return {?}
         */
        function () {
            this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings);
            this.doAutoCrop();
            this.imageVisible = true;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ImageCropperComponent.prototype.keyboardAccess = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.changeKeyboardStepSize(event);
            this.keyboardMoveCropper(event);
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        ImageCropperComponent.prototype.changeKeyboardStepSize = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.key >= '1' && event.key <= '9') {
                this.settings.stepSize = +event.key;
                return;
            }
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        ImageCropperComponent.prototype.keyboardMoveCropper = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
            if (!(keyboardWhiteList.includes(event.key))) {
                return;
            }
            /** @type {?} */
            var moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
            /** @type {?} */
            var position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
            /** @type {?} */
            var moveEvent = getEventForKey(event.key, this.settings.stepSize);
            event.preventDefault();
            event.stopPropagation();
            this.startMove({ clientX: 0, clientY: 0 }, moveType, position);
            this.moveImg(moveEvent);
            this.moveStop();
        };
        /**
         * @param {?} event
         * @param {?} moveType
         * @param {?=} position
         * @return {?}
         */
        ImageCropperComponent.prototype.startMove = /**
         * @param {?} event
         * @param {?} moveType
         * @param {?=} position
         * @return {?}
         */
        function (event, moveType, position) {
            if (position === void 0) { position = null; }
            if (this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
                return;
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            this.moveStart = __assign({ active: true, type: moveType, position: position, clientX: this.cropperPositionService.getClientX(event), clientY: this.cropperPositionService.getClientY(event) }, this.cropper);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ImageCropperComponent.prototype.startPinch = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!this.safeImgDataUrl) {
                return;
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            this.moveStart = __assign({ active: true, type: MoveTypes.Pinch, position: 'center', clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2, clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2 }, this.cropper);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ImageCropperComponent.prototype.moveImg = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.moveStart.active) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                if (event.preventDefault) {
                    event.preventDefault();
                }
                if (this.moveStart.type === MoveTypes.Move) {
                    this.cropperPositionService.move(event, this.moveStart, this.cropper);
                    this.checkCropperPosition(true);
                }
                else if (this.moveStart.type === MoveTypes.Resize) {
                    if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
                        this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
                    }
                    this.checkCropperPosition(false);
                }
                this.cd.detectChanges();
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ImageCropperComponent.prototype.onPinch = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.moveStart.active) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                if (event.preventDefault) {
                    event.preventDefault();
                }
                if (this.moveStart.type === MoveTypes.Pinch) {
                    this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
                    this.checkCropperPosition(false);
                }
                this.cd.detectChanges();
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.setMaxSize = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.sourceImage) {
                /** @type {?} */
                var sourceImageElement = this.sourceImage.nativeElement;
                this.maxSize.width = sourceImageElement.offsetWidth;
                this.maxSize.height = sourceImageElement.offsetHeight;
                this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.setCropperScaledMinSize = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.loadedImage && this.loadedImage.transformed && this.loadedImage.transformed.image) {
                this.setCropperScaledMinWidth();
                this.setCropperScaledMinHeight();
            }
            else {
                this.settings.cropperScaledMinWidth = 20;
                this.settings.cropperScaledMinHeight = 20;
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.setCropperScaledMinWidth = /**
         * @private
         * @return {?}
         */
        function () {
            this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0
                ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width)
                : 20;
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.setCropperScaledMinHeight = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.maintainAspectRatio) {
                this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
            }
            else if (this.cropperMinHeight > 0) {
                this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
            }
            else {
                this.settings.cropperScaledMinHeight = 20;
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.setCropperScaledMaxSize = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.loadedImage && this.loadedImage.transformed && this.loadedImage.transformed.image) {
                /** @type {?} */
                var ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
                this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
                this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
                if (this.maintainAspectRatio) {
                    if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
                        this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
                    }
                    else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
                        this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
                    }
                }
            }
            else {
                this.settings.cropperScaledMaxWidth = this.maxSize.width;
                this.settings.cropperScaledMaxHeight = this.maxSize.height;
            }
        };
        /**
         * @private
         * @param {?=} maintainSize
         * @return {?}
         */
        ImageCropperComponent.prototype.checkCropperPosition = /**
         * @private
         * @param {?=} maintainSize
         * @return {?}
         */
        function (maintainSize) {
            if (maintainSize === void 0) { maintainSize = false; }
            if (this.cropper.x1 < 0) {
                this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
                this.cropper.x1 = 0;
            }
            if (this.cropper.y1 < 0) {
                this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
                this.cropper.y1 = 0;
            }
            if (this.cropper.x2 > this.maxSize.width) {
                this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
                this.cropper.x2 = this.maxSize.width;
            }
            if (this.cropper.y2 > this.maxSize.height) {
                this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
                this.cropper.y2 = this.maxSize.height;
            }
        };
        /**
         * @return {?}
         */
        ImageCropperComponent.prototype.moveStop = /**
         * @return {?}
         */
        function () {
            if (this.moveStart.active) {
                this.moveStart.active = false;
                this.doAutoCrop();
            }
        };
        /**
         * @return {?}
         */
        ImageCropperComponent.prototype.pinchStop = /**
         * @return {?}
         */
        function () {
            if (this.moveStart.active) {
                this.moveStart.active = false;
                this.doAutoCrop();
            }
        };
        /**
         * @private
         * @return {?}
         */
        ImageCropperComponent.prototype.doAutoCrop = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.autoCrop) {
                this.crop();
            }
        };
        /**
         * @return {?}
         */
        ImageCropperComponent.prototype.crop = /**
         * @return {?}
         */
        function () {
            if (this.sourceImage && this.sourceImage.nativeElement && this.loadedImage.transformed.image != null) {
                this.startCropImage.emit();
                /** @type {?} */
                var output = this.cropService.crop(this.sourceImage, this.loadedImage, this.cropper, this.settings);
                if (output != null) {
                    this.imageCropped.emit(output);
                }
                return output;
            }
            return null;
        };
        ImageCropperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'image-cropper',
                        template: "<div [style.background]=\"imageVisible && backgroundColor\"\n     #wrapper\n>\n    <img\n      #sourceImage\n      class=\"source-image\"\n      *ngIf=\"safeImgDataUrl\"\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      [style.transform]=\"safeTransformStyle\"\n      (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n            (mousedown)=\"startMove($event, moveTypes.Move)\"\n            (touchstart)=\"startMove($event, moveTypes.Move)\"\n            class=\"move\">\n        </div>\n        <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"resize topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize top\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize topright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize right\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottom\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize left\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize-bar top\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n            <span class=\"resize-bar right\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n            <span class=\"resize-bar bottom\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n            <span class=\"resize-bar left\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n        </ng-container>\n    </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        ImageCropperComponent.ctorParameters = function () { return [
            { type: CropService },
            { type: CropperPositionService },
            { type: LoadImageService },
            { type: platformBrowser.DomSanitizer },
            { type: core.ChangeDetectorRef }
        ]; };
        ImageCropperComponent.propDecorators = {
            wrapper: [{ type: core.ViewChild, args: ['wrapper', { static: true },] }],
            sourceImage: [{ type: core.ViewChild, args: ['sourceImage', { static: false },] }],
            imageChangedEvent: [{ type: core.Input }],
            imageURL: [{ type: core.Input }],
            imageBase64: [{ type: core.Input }],
            imageFile: [{ type: core.Input }],
            format: [{ type: core.Input }],
            transform: [{ type: core.Input }],
            maintainAspectRatio: [{ type: core.Input }],
            aspectRatio: [{ type: core.Input }],
            resizeToWidth: [{ type: core.Input }],
            resizeToHeight: [{ type: core.Input }],
            cropperMinWidth: [{ type: core.Input }],
            cropperMinHeight: [{ type: core.Input }],
            cropperMaxHeight: [{ type: core.Input }],
            cropperMaxWidth: [{ type: core.Input }],
            cropperStaticWidth: [{ type: core.Input }],
            cropperStaticHeight: [{ type: core.Input }],
            canvasRotation: [{ type: core.Input }],
            initialStepSize: [{ type: core.Input }],
            roundCropper: [{ type: core.Input }],
            onlyScaleDown: [{ type: core.Input }],
            imageQuality: [{ type: core.Input }],
            autoCrop: [{ type: core.Input }],
            backgroundColor: [{ type: core.Input }],
            containWithinAspectRatio: [{ type: core.Input }],
            hideResizeSquares: [{ type: core.Input }],
            cropper: [{ type: core.Input }],
            alignImage: [{ type: core.HostBinding, args: ['style.text-align',] }, { type: core.Input }],
            disabled: [{ type: core.HostBinding, args: ['class.disabled',] }, { type: core.Input }],
            imageCropped: [{ type: core.Output }],
            startCropImage: [{ type: core.Output }],
            imageLoaded: [{ type: core.Output }],
            cropperReady: [{ type: core.Output }],
            loadImageFailed: [{ type: core.Output }],
            onResize: [{ type: core.HostListener, args: ['window:resize',] }],
            moveImg: [{ type: core.HostListener, args: ['document:mousemove', ['$event'],] }, { type: core.HostListener, args: ['document:touchmove', ['$event'],] }],
            moveStop: [{ type: core.HostListener, args: ['document:mouseup',] }, { type: core.HostListener, args: ['document:touchend',] }]
        };
        return ImageCropperComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.Hammer;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.settings;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.setImageMaxSizeRetries;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.moveStart;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.loadedImage;
        /** @type {?} */
        ImageCropperComponent.prototype.safeImgDataUrl;
        /** @type {?} */
        ImageCropperComponent.prototype.safeTransformStyle;
        /** @type {?} */
        ImageCropperComponent.prototype.marginLeft;
        /** @type {?} */
        ImageCropperComponent.prototype.maxSize;
        /** @type {?} */
        ImageCropperComponent.prototype.moveTypes;
        /** @type {?} */
        ImageCropperComponent.prototype.imageVisible;
        /** @type {?} */
        ImageCropperComponent.prototype.wrapper;
        /** @type {?} */
        ImageCropperComponent.prototype.sourceImage;
        /** @type {?} */
        ImageCropperComponent.prototype.imageChangedEvent;
        /** @type {?} */
        ImageCropperComponent.prototype.imageURL;
        /** @type {?} */
        ImageCropperComponent.prototype.imageBase64;
        /** @type {?} */
        ImageCropperComponent.prototype.imageFile;
        /** @type {?} */
        ImageCropperComponent.prototype.format;
        /** @type {?} */
        ImageCropperComponent.prototype.transform;
        /** @type {?} */
        ImageCropperComponent.prototype.maintainAspectRatio;
        /** @type {?} */
        ImageCropperComponent.prototype.aspectRatio;
        /** @type {?} */
        ImageCropperComponent.prototype.resizeToWidth;
        /** @type {?} */
        ImageCropperComponent.prototype.resizeToHeight;
        /** @type {?} */
        ImageCropperComponent.prototype.cropperMinWidth;
        /** @type {?} */
        ImageCropperComponent.prototype.cropperMinHeight;
        /** @type {?} */
        ImageCropperComponent.prototype.cropperMaxHeight;
        /** @type {?} */
        ImageCropperComponent.prototype.cropperMaxWidth;
        /** @type {?} */
        ImageCropperComponent.prototype.cropperStaticWidth;
        /** @type {?} */
        ImageCropperComponent.prototype.cropperStaticHeight;
        /** @type {?} */
        ImageCropperComponent.prototype.canvasRotation;
        /** @type {?} */
        ImageCropperComponent.prototype.initialStepSize;
        /** @type {?} */
        ImageCropperComponent.prototype.roundCropper;
        /** @type {?} */
        ImageCropperComponent.prototype.onlyScaleDown;
        /** @type {?} */
        ImageCropperComponent.prototype.imageQuality;
        /** @type {?} */
        ImageCropperComponent.prototype.autoCrop;
        /** @type {?} */
        ImageCropperComponent.prototype.backgroundColor;
        /** @type {?} */
        ImageCropperComponent.prototype.containWithinAspectRatio;
        /** @type {?} */
        ImageCropperComponent.prototype.hideResizeSquares;
        /** @type {?} */
        ImageCropperComponent.prototype.cropper;
        /** @type {?} */
        ImageCropperComponent.prototype.alignImage;
        /** @type {?} */
        ImageCropperComponent.prototype.disabled;
        /** @type {?} */
        ImageCropperComponent.prototype.imageCropped;
        /** @type {?} */
        ImageCropperComponent.prototype.startCropImage;
        /** @type {?} */
        ImageCropperComponent.prototype.imageLoaded;
        /** @type {?} */
        ImageCropperComponent.prototype.cropperReady;
        /** @type {?} */
        ImageCropperComponent.prototype.loadImageFailed;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.cropService;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.cropperPositionService;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.loadImageService;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.sanitizer;
        /**
         * @type {?}
         * @private
         */
        ImageCropperComponent.prototype.cd;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/image-cropper.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageCropperModule = /** @class */ (function () {
        function ImageCropperModule() {
        }
        ImageCropperModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            ImageCropperComponent
                        ],
                        exports: [
                            ImageCropperComponent
                        ]
                    },] }
        ];
        return ImageCropperModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/interfaces/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/blob.utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} base64Image
     * @return {?}
     */
    function base64ToFile(base64Image) {
        /** @type {?} */
        var split = base64Image.split(',');
        /** @type {?} */
        var type = split[0].replace('data:', '').replace(';base64', '');
        /** @type {?} */
        var byteString = atob(split[1]);
        /** @type {?} */
        var ab = new ArrayBuffer(byteString.length);
        /** @type {?} */
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i += 1) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: type });
    }

    exports.ImageCropperComponent = ImageCropperComponent;
    exports.ImageCropperModule = ImageCropperModule;
    exports.base64ToFile = base64ToFile;
    exports.resizeCanvas = resizeCanvas;
    exports.??a = CropService;
    exports.??b = CropperPositionService;
    exports.??c = LoadImageService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-image-cropper.umd.js.map
