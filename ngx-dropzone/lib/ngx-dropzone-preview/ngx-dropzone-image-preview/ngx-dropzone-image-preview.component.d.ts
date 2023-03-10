import { OnInit } from '@angular/core';
import { NgxDropzonePreviewComponent } from '../ngx-dropzone-preview.component';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent implements OnInit {
    constructor(sanitizer: DomSanitizer);
    /** The file to preview. */
    set file(value: File);
    get file(): File;
    /** The image data source. */
    defaultImgLoading: string;
    imageSrc: any;
    ngOnInit(): void;
    private renderImage;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgxDropzoneImagePreviewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgxDropzoneImagePreviewComponent, "ngx-dropzone-image-preview", never, { "file": "file"; }, {}, never, ["ngx-dropzone-label"]>;
}

//# sourceMappingURL=ngx-dropzone-image-preview.component.d.ts.map