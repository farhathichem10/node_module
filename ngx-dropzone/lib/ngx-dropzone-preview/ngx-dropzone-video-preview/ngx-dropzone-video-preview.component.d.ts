import { OnInit, OnDestroy } from '@angular/core';
import { NgxDropzonePreviewComponent } from '../ngx-dropzone-preview.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent implements OnInit, OnDestroy {
    constructor(sanitizer: DomSanitizer);
    /** The video data source. */
    sanitizedVideoSrc: SafeUrl;
    private videoSrc;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgxDropzoneVideoPreviewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgxDropzoneVideoPreviewComponent, "ngx-dropzone-video-preview", never, {}, {}, never, ["ngx-dropzone-label"]>;
}

//# sourceMappingURL=ngx-dropzone-video-preview.component.d.ts.map