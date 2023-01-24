/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/image-cropper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, isDevMode, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MoveTypes } from '../interfaces/move-start.interface';
import { CropService } from '../services/crop.service';
import { CropperSettings } from '../interfaces/cropper.settings';
import { LoadImageService } from '../services/load-image.service';
import { CropperPositionService } from '../services/cropper-position.service';
import { getEventForKey, getInvertedPositionForKey, getPositionForKey } from '../utils/keyboard.utils';
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
        this.imageCropped = new EventEmitter();
        this.startCropImage = new EventEmitter();
        this.imageLoaded = new EventEmitter();
        this.cropperReady = new EventEmitter();
        this.loadImageFailed = new EventEmitter();
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
            this.cropperReady.emit(tslib_1.__assign({}, this.maxSize));
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
        else if (isDevMode()) {
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
        this.moveStart = tslib_1.__assign({ active: true, type: moveType, position: position, clientX: this.cropperPositionService.getClientX(event), clientY: this.cropperPositionService.getClientY(event) }, this.cropper);
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
        this.moveStart = tslib_1.__assign({ active: true, type: MoveTypes.Pinch, position: 'center', clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2, clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2 }, this.cropper);
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
        { type: Component, args: [{
                    selector: 'image-cropper',
                    template: "<div [style.background]=\"imageVisible && backgroundColor\"\n     #wrapper\n>\n    <img\n      #sourceImage\n      class=\"source-image\"\n      *ngIf=\"safeImgDataUrl\"\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      [style.transform]=\"safeTransformStyle\"\n      (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n            (mousedown)=\"startMove($event, moveTypes.Move)\"\n            (touchstart)=\"startMove($event, moveTypes.Move)\"\n            class=\"move\">\n        </div>\n        <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"resize topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize top\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize topright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize right\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottom\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize left\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize-bar top\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n            <span class=\"resize-bar right\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n            <span class=\"resize-bar bottom\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n            <span class=\"resize-bar left\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n        </ng-container>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
                }] }
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: CropService },
        { type: CropperPositionService },
        { type: LoadImageService },
        { type: DomSanitizer },
        { type: ChangeDetectorRef }
    ]; };
    ImageCropperComponent.propDecorators = {
        wrapper: [{ type: ViewChild, args: ['wrapper', { static: true },] }],
        sourceImage: [{ type: ViewChild, args: ['sourceImage', { static: false },] }],
        imageChangedEvent: [{ type: Input }],
        imageURL: [{ type: Input }],
        imageBase64: [{ type: Input }],
        imageFile: [{ type: Input }],
        format: [{ type: Input }],
        transform: [{ type: Input }],
        maintainAspectRatio: [{ type: Input }],
        aspectRatio: [{ type: Input }],
        resizeToWidth: [{ type: Input }],
        resizeToHeight: [{ type: Input }],
        cropperMinWidth: [{ type: Input }],
        cropperMinHeight: [{ type: Input }],
        cropperMaxHeight: [{ type: Input }],
        cropperMaxWidth: [{ type: Input }],
        cropperStaticWidth: [{ type: Input }],
        cropperStaticHeight: [{ type: Input }],
        canvasRotation: [{ type: Input }],
        initialStepSize: [{ type: Input }],
        roundCropper: [{ type: Input }],
        onlyScaleDown: [{ type: Input }],
        imageQuality: [{ type: Input }],
        autoCrop: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        containWithinAspectRatio: [{ type: Input }],
        hideResizeSquares: [{ type: Input }],
        cropper: [{ type: Input }],
        alignImage: [{ type: HostBinding, args: ['style.text-align',] }, { type: Input }],
        disabled: [{ type: HostBinding, args: ['class.disabled',] }, { type: Input }],
        imageCropped: [{ type: Output }],
        startCropImage: [{ type: Output }],
        imageLoaded: [{ type: Output }],
        cropperReady: [{ type: Output }],
        loadImageFailed: [{ type: Output }],
        onResize: [{ type: HostListener, args: ['window:resize',] }],
        moveImg: [{ type: HostListener, args: ['document:mousemove', ['$event'],] }, { type: HostListener, args: ['document:touchmove', ['$event'],] }],
        moveStop: [{ type: HostListener, args: ['document:mouseup',] }, { type: HostListener, args: ['document:touchend',] }]
    };
    return ImageCropperComponent;
}());
export { ImageCropperComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW1hZ2UtY3JvcHBlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW1hZ2UtY3JvcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUdULE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBc0IsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkc7SUFvRUUsK0JBQ1UsV0FBd0IsRUFDeEIsc0JBQThDLEVBQzlDLGdCQUFrQyxFQUNsQyxTQUF1QixFQUN2QixFQUFxQjtRQUpyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWxFdkIsV0FBTSxHQUFpQixPQUFPLE1BQU0sS0FBSyxX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d0NBQTBFOztJQUMxRSw0Q0FBbUY7O0lBRW5GLGtEQUFnQzs7SUFDaEMseUNBQTBCOztJQUMxQiw0Q0FBNkI7O0lBQzdCLDBDQUF5Qjs7SUFFekIsdUNBQXFEOztJQUNyRCwwQ0FBd0M7O0lBQ3hDLG9EQUFpRTs7SUFDakUsNENBQWlEOztJQUNqRCw4Q0FBcUQ7O0lBQ3JELCtDQUF1RDs7SUFDdkQsZ0RBQXlEOztJQUN6RCxpREFBMkQ7O0lBQzNELGlEQUEyRDs7SUFDM0QsZ0RBQXlEOztJQUN6RCxtREFBK0Q7O0lBQy9ELG9EQUFpRTs7SUFDakUsK0NBQXVEOztJQUN2RCxnREFBeUQ7O0lBQ3pELDZDQUFtRDs7SUFDbkQsOENBQXFEOztJQUNyRCw2Q0FBbUQ7O0lBQ25ELHlDQUEyQzs7SUFDM0MsZ0RBQXlEOztJQUN6RCx5REFBMkU7O0lBQzNFLGtEQUE2RDs7SUFDN0Qsd0NBS0U7O0lBQ0YsMkNBQ2tFOztJQUNsRSx5Q0FDMEI7O0lBRTFCLDZDQUErRDs7SUFDL0QsK0NBQW9EOztJQUNwRCw0Q0FBd0Q7O0lBQ3hELDZDQUF3RDs7SUFDeEQsZ0RBQXFEOzs7OztJQUduRCw0Q0FBZ0M7Ozs7O0lBQ2hDLHVEQUFzRDs7Ozs7SUFDdEQsaURBQTBDOzs7OztJQUMxQywwQ0FBK0I7Ozs7O0lBQy9CLG1DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDcm9wcGVyUG9zaXRpb24sIERpbWVuc2lvbnMsIEltYWdlQ3JvcHBlZEV2ZW50LCBJbWFnZVRyYW5zZm9ybSwgTG9hZGVkSW1hZ2UsIE1vdmVTdGFydCB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTW92ZVR5cGVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb3ZlLXN0YXJ0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBIYW1tZXJTdGF0aWMgfSBmcm9tICcuLi91dGlscy9oYW1tZXIudXRpbHMnO1xuaW1wb3J0IHsgQ3JvcFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JvcHBlclNldHRpbmdzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jcm9wcGVyLnNldHRpbmdzJztcbmltcG9ydCB7IExvYWRJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkLWltYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3V0cHV0Rm9ybWF0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jcm9wcGVyLW9wdGlvbnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IENyb3BwZXJQb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jcm9wcGVyLXBvc2l0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0RXZlbnRGb3JLZXksIGdldEludmVydGVkUG9zaXRpb25Gb3JLZXksIGdldFBvc2l0aW9uRm9yS2V5IH0gZnJvbSAnLi4vdXRpbHMva2V5Ym9hcmQudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZS1jcm9wcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ3JvcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSBIYW1tZXI6IEhhbW1lclN0YXRpYyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyAod2luZG93IGFzIGFueSkuSGFtbWVyIGFzIEhhbW1lclN0YXRpY1xuICAgIDogbnVsbDtcbiAgcHJpdmF0ZSBzZXR0aW5ncyA9IG5ldyBDcm9wcGVyU2V0dGluZ3MoKTtcbiAgcHJpdmF0ZSBzZXRJbWFnZU1heFNpemVSZXRyaWVzID0gMDtcbiAgcHJpdmF0ZSBtb3ZlU3RhcnQ6IE1vdmVTdGFydDtcbiAgcHJpdmF0ZSBsb2FkZWRJbWFnZTogTG9hZGVkSW1hZ2U7XG5cbiAgc2FmZUltZ0RhdGFVcmw6IFNhZmVVcmwgfCBzdHJpbmc7XG4gIHNhZmVUcmFuc2Zvcm1TdHlsZTogU2FmZVN0eWxlIHwgc3RyaW5nO1xuICBtYXJnaW5MZWZ0OiBTYWZlU3R5bGUgfCBzdHJpbmcgPSAnMHB4JztcbiAgbWF4U2l6ZTogRGltZW5zaW9ucztcbiAgbW92ZVR5cGVzID0gTW92ZVR5cGVzO1xuICBpbWFnZVZpc2libGUgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCd3cmFwcGVyJywge3N0YXRpYzogdHJ1ZX0pIHdyYXBwZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdzb3VyY2VJbWFnZScsIHtzdGF0aWM6IGZhbHNlfSkgc291cmNlSW1hZ2U6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGltYWdlQ2hhbmdlZEV2ZW50OiBhbnk7XG4gIEBJbnB1dCgpIGltYWdlVVJMOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlQmFzZTY0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlRmlsZTogRmlsZTtcblxuICBASW5wdXQoKSBmb3JtYXQ6IE91dHB1dEZvcm1hdCA9IHRoaXMuc2V0dGluZ3MuZm9ybWF0O1xuICBASW5wdXQoKSB0cmFuc2Zvcm06IEltYWdlVHJhbnNmb3JtID0ge307XG4gIEBJbnB1dCgpIG1haW50YWluQXNwZWN0UmF0aW8gPSB0aGlzLnNldHRpbmdzLm1haW50YWluQXNwZWN0UmF0aW87XG4gIEBJbnB1dCgpIGFzcGVjdFJhdGlvID0gdGhpcy5zZXR0aW5ncy5hc3BlY3RSYXRpbztcbiAgQElucHV0KCkgcmVzaXplVG9XaWR0aCA9IHRoaXMuc2V0dGluZ3MucmVzaXplVG9XaWR0aDtcbiAgQElucHV0KCkgcmVzaXplVG9IZWlnaHQgPSB0aGlzLnNldHRpbmdzLnJlc2l6ZVRvSGVpZ2h0O1xuICBASW5wdXQoKSBjcm9wcGVyTWluV2lkdGggPSB0aGlzLnNldHRpbmdzLmNyb3BwZXJNaW5XaWR0aDtcbiAgQElucHV0KCkgY3JvcHBlck1pbkhlaWdodCA9IHRoaXMuc2V0dGluZ3MuY3JvcHBlck1pbkhlaWdodDtcbiAgQElucHV0KCkgY3JvcHBlck1heEhlaWdodCA9IHRoaXMuc2V0dGluZ3MuY3JvcHBlck1heEhlaWdodDtcbiAgQElucHV0KCkgY3JvcHBlck1heFdpZHRoID0gdGhpcy5zZXR0aW5ncy5jcm9wcGVyTWF4V2lkdGg7XG4gIEBJbnB1dCgpIGNyb3BwZXJTdGF0aWNXaWR0aCA9IHRoaXMuc2V0dGluZ3MuY3JvcHBlclN0YXRpY1dpZHRoO1xuICBASW5wdXQoKSBjcm9wcGVyU3RhdGljSGVpZ2h0ID0gdGhpcy5zZXR0aW5ncy5jcm9wcGVyU3RhdGljSGVpZ2h0O1xuICBASW5wdXQoKSBjYW52YXNSb3RhdGlvbiA9IHRoaXMuc2V0dGluZ3MuY2FudmFzUm90YXRpb247XG4gIEBJbnB1dCgpIGluaXRpYWxTdGVwU2l6ZSA9IHRoaXMuc2V0dGluZ3MuaW5pdGlhbFN0ZXBTaXplO1xuICBASW5wdXQoKSByb3VuZENyb3BwZXIgPSB0aGlzLnNldHRpbmdzLnJvdW5kQ3JvcHBlcjtcbiAgQElucHV0KCkgb25seVNjYWxlRG93biA9IHRoaXMuc2V0dGluZ3Mub25seVNjYWxlRG93bjtcbiAgQElucHV0KCkgaW1hZ2VRdWFsaXR5ID0gdGhpcy5zZXR0aW5ncy5pbWFnZVF1YWxpdHk7XG4gIEBJbnB1dCgpIGF1dG9Dcm9wID0gdGhpcy5zZXR0aW5ncy5hdXRvQ3JvcDtcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yID0gdGhpcy5zZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3I7XG4gIEBJbnB1dCgpIGNvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpbyA9IHRoaXMuc2V0dGluZ3MuY29udGFpbldpdGhpbkFzcGVjdFJhdGlvO1xuICBASW5wdXQoKSBoaWRlUmVzaXplU3F1YXJlcyA9IHRoaXMuc2V0dGluZ3MuaGlkZVJlc2l6ZVNxdWFyZXM7XG4gIEBJbnB1dCgpIGNyb3BwZXI6IENyb3BwZXJQb3NpdGlvbiA9IHtcbiAgICB4MTogLTEwMCxcbiAgICB5MTogLTEwMCxcbiAgICB4MjogMTAwMDAsXG4gICAgeTI6IDEwMDAwXG4gIH07XG4gIEBIb3N0QmluZGluZygnc3R5bGUudGV4dC1hbGlnbicpXG4gIEBJbnB1dCgpIGFsaWduSW1hZ2U6ICdsZWZ0JyB8ICdjZW50ZXInID0gdGhpcy5zZXR0aW5ncy5hbGlnbkltYWdlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgaW1hZ2VDcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZUNyb3BwZWRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHN0YXJ0Q3JvcEltYWdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgaW1hZ2VMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExvYWRlZEltYWdlPigpO1xuICBAT3V0cHV0KCkgY3JvcHBlclJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxEaW1lbnNpb25zPigpO1xuICBAT3V0cHV0KCkgbG9hZEltYWdlRmFpbGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3JvcFNlcnZpY2U6IENyb3BTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3JvcHBlclBvc2l0aW9uU2VydmljZTogQ3JvcHBlclBvc2l0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxvYWRJbWFnZVNlcnZpY2U6IExvYWRJbWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZXNVcGRhdGVTZXR0aW5ncyhjaGFuZ2VzKTtcbiAgICB0aGlzLm9uQ2hhbmdlc0lucHV0SW1hZ2UoY2hhbmdlcyk7XG5cbiAgICBpZiAodGhpcy5sb2FkZWRJbWFnZSAmJiB0aGlzLmxvYWRlZEltYWdlLm9yaWdpbmFsLmltYWdlLmNvbXBsZXRlXG4gICAgICAmJiAoY2hhbmdlcy5jb250YWluV2l0aGluQXNwZWN0UmF0aW8gfHwgY2hhbmdlcy5jYW52YXNSb3RhdGlvbikpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlU2VydmljZVxuICAgICAgICAudHJhbnNmb3JtTG9hZGVkSW1hZ2UodGhpcy5sb2FkZWRJbWFnZSwgdGhpcy5zZXR0aW5ncylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5zZXRMb2FkZWRJbWFnZShyZXMpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gdGhpcy5sb2FkSW1hZ2VFcnJvcihlcnIpKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY3JvcHBlcikge1xuICAgICAgdGhpcy5zZXRNYXhTaXplKCk7XG4gICAgICB0aGlzLnNldENyb3BwZXJTY2FsZWRNaW5TaXplKCk7XG4gICAgICB0aGlzLnNldENyb3BwZXJTY2FsZWRNYXhTaXplKCk7XG4gICAgICB0aGlzLmNoZWNrQ3JvcHBlclBvc2l0aW9uKGZhbHNlKTtcbiAgICAgIHRoaXMuZG9BdXRvQ3JvcCgpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuYXNwZWN0UmF0aW8gJiYgdGhpcy5pbWFnZVZpc2libGUpIHtcbiAgICAgIHRoaXMucmVzZXRDcm9wcGVyUG9zaXRpb24oKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtIHx8IHt9O1xuICAgICAgdGhpcy5zZXRDc3NUcmFuc2Zvcm0oKTtcbiAgICAgIHRoaXMuZG9BdXRvQ3JvcCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25DaGFuZ2VzVXBkYXRlU2V0dGluZ3MoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuc2V0dGluZ3Muc2V0T3B0aW9uc0Zyb21DaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY3JvcHBlclN0YXRpY0hlaWdodCAmJiB0aGlzLnNldHRpbmdzLmNyb3BwZXJTdGF0aWNXaWR0aCkge1xuICAgICAgdGhpcy5zZXR0aW5ncy5zZXRPcHRpb25zKHtcbiAgICAgICAgaGlkZVJlc2l6ZVNxdWFyZXM6IHRydWUsXG4gICAgICAgIGNyb3BwZXJNaW5XaWR0aDogdGhpcy5zZXR0aW5ncy5jcm9wcGVyU3RhdGljV2lkdGgsXG4gICAgICAgIGNyb3BwZXJNaW5IZWlnaHQ6IHRoaXMuc2V0dGluZ3MuY3JvcHBlclN0YXRpY0hlaWdodCxcbiAgICAgICAgY3JvcHBlck1heEhlaWdodDogdGhpcy5zZXR0aW5ncy5jcm9wcGVyU3RhdGljSGVpZ2h0LFxuICAgICAgICBjcm9wcGVyTWF4V2lkdGg6IHRoaXMuc2V0dGluZ3MuY3JvcHBlclN0YXRpY1dpZHRoLFxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZXNJbnB1dEltYWdlKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5pbWFnZUNoYW5nZWRFdmVudCB8fCBjaGFuZ2VzLmltYWdlVVJMIHx8IGNoYW5nZXMuaW1hZ2VCYXNlNjQgfHwgY2hhbmdlcy5pbWFnZUZpbGUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaW1hZ2VDaGFuZ2VkRXZlbnQgJiYgdGhpcy5pc1ZhbGlkSW1hZ2VDaGFuZ2VkRXZlbnQoKSkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2VGaWxlKHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaW1hZ2VVUkwgJiYgdGhpcy5pbWFnZVVSTCkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2VGcm9tVVJMKHRoaXMuaW1hZ2VVUkwpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5pbWFnZUJhc2U2NCAmJiB0aGlzLmltYWdlQmFzZTY0KSB7XG4gICAgICB0aGlzLmxvYWRCYXNlNjRJbWFnZSh0aGlzLmltYWdlQmFzZTY0KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaW1hZ2VGaWxlICYmIHRoaXMuaW1hZ2VGaWxlKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZUZpbGUodGhpcy5pbWFnZUZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNWYWxpZEltYWdlQ2hhbmdlZEV2ZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50XG4gICAgICAmJiB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50LnRhcmdldFxuICAgICAgJiYgdGhpcy5pbWFnZUNoYW5nZWRFdmVudC50YXJnZXQuZmlsZXNcbiAgICAgICYmIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBwcml2YXRlIHNldENzc1RyYW5zZm9ybSgpIHtcbiAgICB0aGlzLnNhZmVUcmFuc2Zvcm1TdHlsZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShcbiAgICAgICdzY2FsZVgoJyArICh0aGlzLnRyYW5zZm9ybS5zY2FsZSB8fCAxKSAqICh0aGlzLnRyYW5zZm9ybS5mbGlwSCA/IC0xIDogMSkgKyAnKScgK1xuICAgICAgJ3NjYWxlWSgnICsgKHRoaXMudHJhbnNmb3JtLnNjYWxlIHx8IDEpICogKHRoaXMudHJhbnNmb3JtLmZsaXBWID8gLTEgOiAxKSArICcpJyArXG4gICAgICAncm90YXRlKCcgKyAodGhpcy50cmFuc2Zvcm0ucm90YXRlIHx8IDApICsgJ2RlZyknXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3Muc3RlcFNpemUgPSB0aGlzLmluaXRpYWxTdGVwU2l6ZTtcbiAgICB0aGlzLmFjdGl2YXRlUGluY2hHZXN0dXJlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkZWRJbWFnZSA9IG51bGw7XG4gICAgdGhpcy5zYWZlSW1nRGF0YVVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZydcbiAgICAgICsgJ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVlBQUFBZkZjU0pBQUFBQzBsRVFWUVlWMk5nQUFJQUFBVSdcbiAgICAgICsgJ0FBYXJWeUZFQUFBQUFTVVZPUks1Q1lJST0nO1xuICAgIHRoaXMubW92ZVN0YXJ0ID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICBwb3NpdGlvbjogbnVsbCxcbiAgICAgIHgxOiAwLFxuICAgICAgeTE6IDAsXG4gICAgICB4MjogMCxcbiAgICAgIHkyOiAwLFxuICAgICAgY2xpZW50WDogMCxcbiAgICAgIGNsaWVudFk6IDBcbiAgICB9O1xuICAgIHRoaXMubWF4U2l6ZSA9IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB0aGlzLmNyb3BwZXIueDEgPSAtMTAwO1xuICAgIHRoaXMuY3JvcHBlci55MSA9IC0xMDA7XG4gICAgdGhpcy5jcm9wcGVyLngyID0gMTAwMDA7XG4gICAgdGhpcy5jcm9wcGVyLnkyID0gMTAwMDA7XG4gIH1cblxuICBwcml2YXRlIGxvYWRJbWFnZUZpbGUoZmlsZTogRmlsZSk6IHZvaWQge1xuICAgIHRoaXMubG9hZEltYWdlU2VydmljZVxuICAgICAgLmxvYWRJbWFnZUZpbGUoZmlsZSwgdGhpcy5zZXR0aW5ncylcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuc2V0TG9hZGVkSW1hZ2UocmVzKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB0aGlzLmxvYWRJbWFnZUVycm9yKGVycikpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQmFzZTY0SW1hZ2UoaW1hZ2VCYXNlNjQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9hZEltYWdlU2VydmljZVxuICAgICAgLmxvYWRCYXNlNjRJbWFnZShpbWFnZUJhc2U2NCwgdGhpcy5zZXR0aW5ncylcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuc2V0TG9hZGVkSW1hZ2UocmVzKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB0aGlzLmxvYWRJbWFnZUVycm9yKGVycikpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkSW1hZ2VGcm9tVVJMKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkSW1hZ2VTZXJ2aWNlXG4gICAgICAubG9hZEltYWdlRnJvbVVSTCh1cmwsIHRoaXMuc2V0dGluZ3MpXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLnNldExvYWRlZEltYWdlKHJlcykpXG4gICAgICAuY2F0Y2goKGVycikgPT4gdGhpcy5sb2FkSW1hZ2VFcnJvcihlcnIpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9hZGVkSW1hZ2UobG9hZGVkSW1hZ2U6IExvYWRlZEltYWdlKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZWRJbWFnZSA9IGxvYWRlZEltYWdlO1xuICAgIHRoaXMuc2FmZUltZ0RhdGFVcmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwobG9hZGVkSW1hZ2UudHJhbnNmb3JtZWQuYmFzZTY0KTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkSW1hZ2VFcnJvcihlcnJvcjogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgdGhpcy5sb2FkSW1hZ2VGYWlsZWQuZW1pdCgpO1xuICB9XG5cbiAgaW1hZ2VMb2FkZWRJblZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGVkSW1hZ2UgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pbWFnZUxvYWRlZC5lbWl0KHRoaXMubG9hZGVkSW1hZ2UpO1xuICAgICAgdGhpcy5zZXRJbWFnZU1heFNpemVSZXRyaWVzID0gMDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja0ltYWdlTWF4U2l6ZVJlY3Vyc2l2ZWx5KCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tJbWFnZU1heFNpemVSZWN1cnNpdmVseSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXRJbWFnZU1heFNpemVSZXRyaWVzID4gNDApIHtcbiAgICAgIHRoaXMubG9hZEltYWdlRmFpbGVkLmVtaXQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlSW1hZ2VMb2FkZWQoKSkge1xuICAgICAgdGhpcy5zZXRNYXhTaXplKCk7XG4gICAgICB0aGlzLnNldENyb3BwZXJTY2FsZWRNaW5TaXplKCk7XG4gICAgICB0aGlzLnNldENyb3BwZXJTY2FsZWRNYXhTaXplKCk7XG4gICAgICB0aGlzLnJlc2V0Q3JvcHBlclBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNyb3BwZXJSZWFkeS5lbWl0KHsuLi50aGlzLm1heFNpemV9KTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0SW1hZ2VNYXhTaXplUmV0cmllcysrO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrSW1hZ2VNYXhTaXplUmVjdXJzaXZlbHkoKSwgNTApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc291cmNlSW1hZ2VMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlSW1hZ2UgJiYgdGhpcy5zb3VyY2VJbWFnZS5uYXRpdmVFbGVtZW50ICYmIHRoaXMuc291cmNlSW1hZ2UubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA+IDA7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25SZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxvYWRlZEltYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVzaXplQ3JvcHBlclBvc2l0aW9uKCk7XG4gICAgdGhpcy5zZXRNYXhTaXplKCk7XG4gICAgdGhpcy5zZXRDcm9wcGVyU2NhbGVkTWluU2l6ZSgpO1xuICAgIHRoaXMuc2V0Q3JvcHBlclNjYWxlZE1heFNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGVQaW5jaEdlc3R1cmUoKSB7XG4gICAgaWYgKHRoaXMuSGFtbWVyKSB7XG4gICAgICBjb25zdCBoYW1tZXIgPSBuZXcgdGhpcy5IYW1tZXIodGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaGFtbWVyLmdldCgncGluY2gnKS5zZXQoe2VuYWJsZTogdHJ1ZX0pO1xuICAgICAgaGFtbWVyLm9uKCdwaW5jaG1vdmUnLCB0aGlzLm9uUGluY2guYmluZCh0aGlzKSk7XG4gICAgICBoYW1tZXIub24oJ3BpbmNoZW5kJywgdGhpcy5waW5jaFN0b3AuYmluZCh0aGlzKSk7XG4gICAgICBoYW1tZXIub24oJ3BpbmNoc3RhcnQnLCB0aGlzLnN0YXJ0UGluY2guYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKCdbTmd4SW1hZ2VDcm9wcGVyXSBDb3VsZCBub3QgZmluZCBIYW1tZXJKUyAtIFBpbmNoIEdlc3R1cmUgd29uXFwndCB3b3JrJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNpemVDcm9wcGVyUG9zaXRpb24oKTogdm9pZCB7XG4gICAgY29uc3Qgc291cmNlSW1hZ2VFbGVtZW50ID0gdGhpcy5zb3VyY2VJbWFnZS5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLm1heFNpemUud2lkdGggIT09IHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCB0aGlzLm1heFNpemUuaGVpZ2h0ICE9PSBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICB0aGlzLmNyb3BwZXIueDEgPSB0aGlzLmNyb3BwZXIueDEgKiBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0V2lkdGggLyB0aGlzLm1heFNpemUud2lkdGg7XG4gICAgICB0aGlzLmNyb3BwZXIueDIgPSB0aGlzLmNyb3BwZXIueDIgKiBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0V2lkdGggLyB0aGlzLm1heFNpemUud2lkdGg7XG4gICAgICB0aGlzLmNyb3BwZXIueTEgPSB0aGlzLmNyb3BwZXIueTEgKiBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gdGhpcy5tYXhTaXplLmhlaWdodDtcbiAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMuY3JvcHBlci55MiAqIHNvdXJjZUltYWdlRWxlbWVudC5vZmZzZXRIZWlnaHQgLyB0aGlzLm1heFNpemUuaGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Q3JvcHBlclBvc2l0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuY3JvcHBlclBvc2l0aW9uU2VydmljZS5yZXNldENyb3BwZXJQb3NpdGlvbih0aGlzLnNvdXJjZUltYWdlLCB0aGlzLmNyb3BwZXIsIHRoaXMuc2V0dGluZ3MpO1xuICAgIHRoaXMuZG9BdXRvQ3JvcCgpO1xuICAgIHRoaXMuaW1hZ2VWaXNpYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGtleWJvYXJkQWNjZXNzKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmNoYW5nZUtleWJvYXJkU3RlcFNpemUoZXZlbnQpO1xuICAgIHRoaXMua2V5Ym9hcmRNb3ZlQ3JvcHBlcihldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUtleWJvYXJkU3RlcFNpemUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPj0gJzEnICYmIGV2ZW50LmtleSA8PSAnOScpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3RlcFNpemUgPSArZXZlbnQua2V5O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUga2V5Ym9hcmRNb3ZlQ3JvcHBlcihldmVudCkge1xuICAgIGNvbnN0IGtleWJvYXJkV2hpdGVMaXN0OiBzdHJpbmdbXSA9IFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnQXJyb3dSaWdodCcsICdBcnJvd0xlZnQnXTtcbiAgICBpZiAoIShrZXlib2FyZFdoaXRlTGlzdC5pbmNsdWRlcyhldmVudC5rZXkpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb3ZlVHlwZSA9IGV2ZW50LnNoaWZ0S2V5ID8gTW92ZVR5cGVzLlJlc2l6ZSA6IE1vdmVUeXBlcy5Nb3ZlO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZXZlbnQuYWx0S2V5ID8gZ2V0SW52ZXJ0ZWRQb3NpdGlvbkZvcktleShldmVudC5rZXkpIDogZ2V0UG9zaXRpb25Gb3JLZXkoZXZlbnQua2V5KTtcbiAgICBjb25zdCBtb3ZlRXZlbnQgPSBnZXRFdmVudEZvcktleShldmVudC5rZXksIHRoaXMuc2V0dGluZ3Muc3RlcFNpemUpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zdGFydE1vdmUoe2NsaWVudFg6IDAsIGNsaWVudFk6IDB9LCBtb3ZlVHlwZSwgcG9zaXRpb24pO1xuICAgIHRoaXMubW92ZUltZyhtb3ZlRXZlbnQpO1xuICAgIHRoaXMubW92ZVN0b3AoKTtcbiAgfVxuXG4gIHN0YXJ0TW92ZShldmVudDogYW55LCBtb3ZlVHlwZTogTW92ZVR5cGVzLCBwb3NpdGlvbjogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb3ZlU3RhcnQgJiYgdGhpcy5tb3ZlU3RhcnQuYWN0aXZlICYmIHRoaXMubW92ZVN0YXJ0LnR5cGUgPT09IE1vdmVUeXBlcy5QaW5jaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMubW92ZVN0YXJ0ID0ge1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgdHlwZTogbW92ZVR5cGUsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGNsaWVudFg6IHRoaXMuY3JvcHBlclBvc2l0aW9uU2VydmljZS5nZXRDbGllbnRYKGV2ZW50KSxcbiAgICAgIGNsaWVudFk6IHRoaXMuY3JvcHBlclBvc2l0aW9uU2VydmljZS5nZXRDbGllbnRZKGV2ZW50KSxcbiAgICAgIC4uLnRoaXMuY3JvcHBlclxuICAgIH07XG4gIH1cblxuICBzdGFydFBpbmNoKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuc2FmZUltZ0RhdGFVcmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLm1vdmVTdGFydCA9IHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIHR5cGU6IE1vdmVUeXBlcy5QaW5jaCxcbiAgICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIGNsaWVudFg6IHRoaXMuY3JvcHBlci54MSArICh0aGlzLmNyb3BwZXIueDIgLSB0aGlzLmNyb3BwZXIueDEpIC8gMixcbiAgICAgIGNsaWVudFk6IHRoaXMuY3JvcHBlci55MSArICh0aGlzLmNyb3BwZXIueTIgLSB0aGlzLmNyb3BwZXIueTEpIC8gMixcbiAgICAgIC4uLnRoaXMuY3JvcHBlclxuICAgIH07XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaG1vdmUnLCBbJyRldmVudCddKVxuICBtb3ZlSW1nKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb3ZlU3RhcnQuYWN0aXZlKSB7XG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tb3ZlU3RhcnQudHlwZSA9PT0gTW92ZVR5cGVzLk1vdmUpIHtcbiAgICAgICAgdGhpcy5jcm9wcGVyUG9zaXRpb25TZXJ2aWNlLm1vdmUoZXZlbnQsIHRoaXMubW92ZVN0YXJ0LCB0aGlzLmNyb3BwZXIpO1xuICAgICAgICB0aGlzLmNoZWNrQ3JvcHBlclBvc2l0aW9uKHRydWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVTdGFydC50eXBlID09PSBNb3ZlVHlwZXMuUmVzaXplKSB7XG4gICAgICAgIGlmICghdGhpcy5jcm9wcGVyU3RhdGljV2lkdGggJiYgIXRoaXMuY3JvcHBlclN0YXRpY0hlaWdodCkge1xuICAgICAgICAgIHRoaXMuY3JvcHBlclBvc2l0aW9uU2VydmljZS5yZXNpemUoZXZlbnQsIHRoaXMubW92ZVN0YXJ0LCB0aGlzLmNyb3BwZXIsIHRoaXMubWF4U2l6ZSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja0Nyb3BwZXJQb3NpdGlvbihmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBvblBpbmNoKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5tb3ZlU3RhcnQuYWN0aXZlKSB7XG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tb3ZlU3RhcnQudHlwZSA9PT0gTW92ZVR5cGVzLlBpbmNoKSB7XG4gICAgICAgIHRoaXMuY3JvcHBlclBvc2l0aW9uU2VydmljZS5yZXNpemUoZXZlbnQsIHRoaXMubW92ZVN0YXJ0LCB0aGlzLmNyb3BwZXIsIHRoaXMubWF4U2l6ZSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuY2hlY2tDcm9wcGVyUG9zaXRpb24oZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRNYXhTaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNvdXJjZUltYWdlKSB7XG4gICAgICBjb25zdCBzb3VyY2VJbWFnZUVsZW1lbnQgPSB0aGlzLnNvdXJjZUltYWdlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLm1heFNpemUud2lkdGggPSBzb3VyY2VJbWFnZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLm1heFNpemUuaGVpZ2h0ID0gc291cmNlSW1hZ2VFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIHRoaXMubWFyZ2luTGVmdCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnY2FsYyg1MCUgLSAnICsgdGhpcy5tYXhTaXplLndpZHRoIC8gMiArICdweCknKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENyb3BwZXJTY2FsZWRNaW5TaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvYWRlZEltYWdlICYmIHRoaXMubG9hZGVkSW1hZ2UudHJhbnNmb3JtZWQgJiYgdGhpcy5sb2FkZWRJbWFnZS50cmFuc2Zvcm1lZC5pbWFnZSkge1xuICAgICAgdGhpcy5zZXRDcm9wcGVyU2NhbGVkTWluV2lkdGgoKTtcbiAgICAgIHRoaXMuc2V0Q3JvcHBlclNjYWxlZE1pbkhlaWdodCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHRpbmdzLmNyb3BwZXJTY2FsZWRNaW5XaWR0aCA9IDIwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5jcm9wcGVyU2NhbGVkTWluSGVpZ2h0ID0gMjA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDcm9wcGVyU2NhbGVkTWluV2lkdGgoKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5jcm9wcGVyU2NhbGVkTWluV2lkdGggPSB0aGlzLmNyb3BwZXJNaW5XaWR0aCA+IDBcbiAgICAgID8gTWF0aC5tYXgoMjAsIHRoaXMuY3JvcHBlck1pbldpZHRoIC8gdGhpcy5sb2FkZWRJbWFnZS50cmFuc2Zvcm1lZC5pbWFnZS53aWR0aCAqIHRoaXMubWF4U2l6ZS53aWR0aClcbiAgICAgIDogMjA7XG4gIH1cblxuICBwcml2YXRlIHNldENyb3BwZXJTY2FsZWRNaW5IZWlnaHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFpbnRhaW5Bc3BlY3RSYXRpbykge1xuICAgICAgdGhpcy5zZXR0aW5ncy5jcm9wcGVyU2NhbGVkTWluSGVpZ2h0ID0gTWF0aC5tYXgoMjAsIHRoaXMuc2V0dGluZ3MuY3JvcHBlclNjYWxlZE1pbldpZHRoIC8gdGhpcy5hc3BlY3RSYXRpbyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNyb3BwZXJNaW5IZWlnaHQgPiAwKSB7XG4gICAgICB0aGlzLnNldHRpbmdzLmNyb3BwZXJTY2FsZWRNaW5IZWlnaHQgPSBNYXRoLm1heChcbiAgICAgICAgMjAsXG4gICAgICAgIHRoaXMuY3JvcHBlck1pbkhlaWdodCAvIHRoaXMubG9hZGVkSW1hZ2UudHJhbnNmb3JtZWQuaW1hZ2UuaGVpZ2h0ICogdGhpcy5tYXhTaXplLmhlaWdodFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXR0aW5ncy5jcm9wcGVyU2NhbGVkTWluSGVpZ2h0ID0gMjA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDcm9wcGVyU2NhbGVkTWF4U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2FkZWRJbWFnZSAmJiB0aGlzLmxvYWRlZEltYWdlLnRyYW5zZm9ybWVkICYmIHRoaXMubG9hZGVkSW1hZ2UudHJhbnNmb3JtZWQuaW1hZ2UpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5sb2FkZWRJbWFnZS50cmFuc2Zvcm1lZC5zaXplLndpZHRoIC8gdGhpcy5tYXhTaXplLndpZHRoO1xuICAgICAgdGhpcy5zZXR0aW5ncy5jcm9wcGVyU2NhbGVkTWF4V2lkdGggPSB0aGlzLmNyb3BwZXJNYXhXaWR0aCA+IDIwID8gdGhpcy5jcm9wcGVyTWF4V2lkdGggLyByYXRpbyA6IHRoaXMubWF4U2l6ZS53aWR0aDtcbiAgICAgIHRoaXMuc2V0dGluZ3MuY3JvcHBlclNjYWxlZE1heEhlaWdodCA9IHRoaXMuY3JvcHBlck1heEhlaWdodCA+IDIwID8gdGhpcy5jcm9wcGVyTWF4SGVpZ2h0IC8gcmF0aW8gOiB0aGlzLm1heFNpemUuaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMubWFpbnRhaW5Bc3BlY3RSYXRpbykge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5jcm9wcGVyU2NhbGVkTWF4V2lkdGggPiB0aGlzLnNldHRpbmdzLmNyb3BwZXJTY2FsZWRNYXhIZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5jcm9wcGVyU2NhbGVkTWF4V2lkdGggPSB0aGlzLnNldHRpbmdzLmNyb3BwZXJTY2FsZWRNYXhIZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuY3JvcHBlclNjYWxlZE1heFdpZHRoIDwgdGhpcy5zZXR0aW5ncy5jcm9wcGVyU2NhbGVkTWF4SGVpZ2h0ICogdGhpcy5hc3BlY3RSYXRpbykge1xuICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY3JvcHBlclNjYWxlZE1heEhlaWdodCA9IHRoaXMuc2V0dGluZ3MuY3JvcHBlclNjYWxlZE1heFdpZHRoIC8gdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHRpbmdzLmNyb3BwZXJTY2FsZWRNYXhXaWR0aCA9IHRoaXMubWF4U2l6ZS53aWR0aDtcbiAgICAgIHRoaXMuc2V0dGluZ3MuY3JvcHBlclNjYWxlZE1heEhlaWdodCA9IHRoaXMubWF4U2l6ZS5oZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0Nyb3BwZXJQb3NpdGlvbihtYWludGFpblNpemUgPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNyb3BwZXIueDEgPCAwKSB7XG4gICAgICB0aGlzLmNyb3BwZXIueDIgLT0gbWFpbnRhaW5TaXplID8gdGhpcy5jcm9wcGVyLngxIDogMDtcbiAgICAgIHRoaXMuY3JvcHBlci54MSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmNyb3BwZXIueTEgPCAwKSB7XG4gICAgICB0aGlzLmNyb3BwZXIueTIgLT0gbWFpbnRhaW5TaXplID8gdGhpcy5jcm9wcGVyLnkxIDogMDtcbiAgICAgIHRoaXMuY3JvcHBlci55MSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmNyb3BwZXIueDIgPiB0aGlzLm1heFNpemUud2lkdGgpIHtcbiAgICAgIHRoaXMuY3JvcHBlci54MSAtPSBtYWludGFpblNpemUgPyAodGhpcy5jcm9wcGVyLngyIC0gdGhpcy5tYXhTaXplLndpZHRoKSA6IDA7XG4gICAgICB0aGlzLmNyb3BwZXIueDIgPSB0aGlzLm1heFNpemUud2lkdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLmNyb3BwZXIueTIgPiB0aGlzLm1heFNpemUuaGVpZ2h0KSB7XG4gICAgICB0aGlzLmNyb3BwZXIueTEgLT0gbWFpbnRhaW5TaXplID8gKHRoaXMuY3JvcHBlci55MiAtIHRoaXMubWF4U2l6ZS5oZWlnaHQpIDogMDtcbiAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMubWF4U2l6ZS5oZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcpXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNoZW5kJylcbiAgbW92ZVN0b3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW92ZVN0YXJ0LmFjdGl2ZSkge1xuICAgICAgdGhpcy5tb3ZlU3RhcnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmRvQXV0b0Nyb3AoKTtcbiAgICB9XG4gIH1cblxuICBwaW5jaFN0b3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW92ZVN0YXJ0LmFjdGl2ZSkge1xuICAgICAgdGhpcy5tb3ZlU3RhcnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmRvQXV0b0Nyb3AoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRvQXV0b0Nyb3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuY3JvcCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyb3AoKTogSW1hZ2VDcm9wcGVkRXZlbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5zb3VyY2VJbWFnZSAmJiB0aGlzLnNvdXJjZUltYWdlLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5sb2FkZWRJbWFnZS50cmFuc2Zvcm1lZC5pbWFnZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnN0YXJ0Q3JvcEltYWdlLmVtaXQoKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuY3JvcFNlcnZpY2UuY3JvcCh0aGlzLnNvdXJjZUltYWdlLCB0aGlzLmxvYWRlZEltYWdlLCB0aGlzLmNyb3BwZXIsIHRoaXMuc2V0dGluZ3MpO1xuICAgICAgaWYgKG91dHB1dCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VDcm9wcGVkLmVtaXQob3V0cHV0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=