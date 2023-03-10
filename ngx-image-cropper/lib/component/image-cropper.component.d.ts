import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { CropperPosition, Dimensions, ImageCroppedEvent, ImageTransform, LoadedImage } from '../interfaces';
import { MoveTypes } from '../interfaces/move-start.interface';
import { CropService } from '../services/crop.service';
import { LoadImageService } from '../services/load-image.service';
import { OutputFormat } from '../interfaces/cropper-options.interface';
import { CropperPositionService } from '../services/cropper-position.service';
import * as ɵngcc0 from '@angular/core';
export declare class ImageCropperComponent implements OnChanges, OnInit {
    private cropService;
    private cropperPositionService;
    private loadImageService;
    private sanitizer;
    private cd;
    private Hammer;
    private settings;
    private setImageMaxSizeRetries;
    private moveStart;
    private loadedImage;
    safeImgDataUrl: SafeUrl | string;
    safeTransformStyle: SafeStyle | string;
    marginLeft: SafeStyle | string;
    maxSize: Dimensions;
    moveTypes: typeof MoveTypes;
    imageVisible: boolean;
    wrapper: ElementRef<HTMLDivElement>;
    sourceImage: ElementRef<HTMLDivElement>;
    imageChangedEvent: any;
    imageURL: string;
    imageBase64: string;
    imageFile: File;
    format: OutputFormat;
    transform: ImageTransform;
    maintainAspectRatio: boolean;
    aspectRatio: number;
    resizeToWidth: number;
    resizeToHeight: number;
    cropperMinWidth: number;
    cropperMinHeight: number;
    cropperMaxHeight: number;
    cropperMaxWidth: number;
    cropperStaticWidth: number;
    cropperStaticHeight: number;
    canvasRotation: number;
    initialStepSize: number;
    roundCropper: boolean;
    onlyScaleDown: boolean;
    imageQuality: number;
    autoCrop: boolean;
    backgroundColor: string;
    containWithinAspectRatio: boolean;
    hideResizeSquares: boolean;
    cropper: CropperPosition;
    alignImage: 'left' | 'center';
    disabled: boolean;
    imageCropped: EventEmitter<ImageCroppedEvent>;
    startCropImage: EventEmitter<void>;
    imageLoaded: EventEmitter<LoadedImage>;
    cropperReady: EventEmitter<Dimensions>;
    loadImageFailed: EventEmitter<void>;
    constructor(cropService: CropService, cropperPositionService: CropperPositionService, loadImageService: LoadImageService, sanitizer: DomSanitizer, cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    private onChangesUpdateSettings;
    private onChangesInputImage;
    private isValidImageChangedEvent;
    private setCssTransform;
    ngOnInit(): void;
    private reset;
    private loadImageFile;
    private loadBase64Image;
    private loadImageFromURL;
    private setLoadedImage;
    private loadImageError;
    imageLoadedInView(): void;
    private checkImageMaxSizeRecursively;
    private sourceImageLoaded;
    onResize(): void;
    private activatePinchGesture;
    private resizeCropperPosition;
    resetCropperPosition(): void;
    keyboardAccess(event: any): void;
    private changeKeyboardStepSize;
    private keyboardMoveCropper;
    startMove(event: any, moveType: MoveTypes, position?: string | null): void;
    startPinch(event: any): void;
    moveImg(event: any): void;
    onPinch(event: any): void;
    private setMaxSize;
    private setCropperScaledMinSize;
    private setCropperScaledMinWidth;
    private setCropperScaledMinHeight;
    private setCropperScaledMaxSize;
    private checkCropperPosition;
    moveStop(): void;
    pinchStop(): void;
    private doAutoCrop;
    crop(): ImageCroppedEvent | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ImageCropperComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ImageCropperComponent, "image-cropper", never, { "format": "format"; "transform": "transform"; "maintainAspectRatio": "maintainAspectRatio"; "aspectRatio": "aspectRatio"; "resizeToWidth": "resizeToWidth"; "resizeToHeight": "resizeToHeight"; "cropperMinWidth": "cropperMinWidth"; "cropperMinHeight": "cropperMinHeight"; "cropperMaxHeight": "cropperMaxHeight"; "cropperMaxWidth": "cropperMaxWidth"; "cropperStaticWidth": "cropperStaticWidth"; "cropperStaticHeight": "cropperStaticHeight"; "canvasRotation": "canvasRotation"; "initialStepSize": "initialStepSize"; "roundCropper": "roundCropper"; "onlyScaleDown": "onlyScaleDown"; "imageQuality": "imageQuality"; "autoCrop": "autoCrop"; "backgroundColor": "backgroundColor"; "containWithinAspectRatio": "containWithinAspectRatio"; "hideResizeSquares": "hideResizeSquares"; "cropper": "cropper"; "alignImage": "alignImage"; "disabled": "disabled"; "imageChangedEvent": "imageChangedEvent"; "imageURL": "imageURL"; "imageBase64": "imageBase64"; "imageFile": "imageFile"; }, { "imageCropped": "imageCropped"; "startCropImage": "startCropImage"; "imageLoaded": "imageLoaded"; "cropperReady": "cropperReady"; "loadImageFailed": "loadImageFailed"; }, never, never>;
}

//# sourceMappingURL=image-cropper.component.d.ts.map