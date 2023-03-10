import { OnInit, EventEmitter } from '@angular/core';
import { DropzoneDirective } from './dropzone.directive';
import { DropzoneConfigInterface } from './dropzone.interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class DropzoneComponent implements OnInit {
    private platformId;
    disabled: boolean;
    config?: DropzoneConfigInterface;
    message: string;
    placeholder: string;
    useDropzoneClass: boolean;
    DZ_INIT: EventEmitter<any>;
    DZ_ERROR: EventEmitter<any>;
    DZ_SUCCESS: EventEmitter<any>;
    DZ_SENDING: EventEmitter<any>;
    DZ_CANCELED: EventEmitter<any>;
    DZ_COMPLETE: EventEmitter<any>;
    DZ_PROCESSING: EventEmitter<any>;
    DZ_DROP: EventEmitter<any>;
    DZ_DRAGSTART: EventEmitter<any>;
    DZ_DRAGEND: EventEmitter<any>;
    DZ_DRAGENTER: EventEmitter<any>;
    DZ_DRAGOVER: EventEmitter<any>;
    DZ_DRAGLEAVE: EventEmitter<any>;
    DZ_THUMBNAIL: EventEmitter<any>;
    DZ_ADDEDFILE: EventEmitter<any>;
    DZ_ADDEDFILES: EventEmitter<any>;
    DZ_REMOVEDFILE: EventEmitter<any>;
    DZ_UPLOADPROGRESS: EventEmitter<any>;
    DZ_MAXFILESREACHED: EventEmitter<any>;
    DZ_MAXFILESEXCEEDED: EventEmitter<any>;
    DZ_ERRORMULTIPLE: EventEmitter<any>;
    DZ_SUCCESSMULTIPLE: EventEmitter<any>;
    DZ_SENDINGMULTIPLE: EventEmitter<any>;
    DZ_CANCELEDMULTIPLE: EventEmitter<any>;
    DZ_COMPLETEMULTIPLE: EventEmitter<any>;
    DZ_PROCESSINGMULTIPLE: EventEmitter<any>;
    DZ_RESET: EventEmitter<any>;
    DZ_QUEUECOMPLETE: EventEmitter<any>;
    DZ_TOTALUPLOADPROGRESS: EventEmitter<any>;
    directiveRef?: DropzoneDirective;
    constructor(platformId: Object);
    ngOnInit(): void;
    getPlaceholder(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropzoneComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DropzoneComponent, "dropzone", ["ngxDropzone"], { "disabled": "disabled"; "message": "message"; "placeholder": "placeholder"; "useDropzoneClass": "useDropzoneClass"; "config": "config"; }, { "DZ_INIT": "init"; "DZ_ERROR": "error"; "DZ_SUCCESS": "success"; "DZ_SENDING": "sending"; "DZ_CANCELED": "canceled"; "DZ_COMPLETE": "complete"; "DZ_PROCESSING": "processing"; "DZ_DROP": "drop"; "DZ_DRAGSTART": "dragStart"; "DZ_DRAGEND": "dragEnd"; "DZ_DRAGENTER": "dragEnter"; "DZ_DRAGOVER": "dragOver"; "DZ_DRAGLEAVE": "dragLeave"; "DZ_THUMBNAIL": "thumbnail"; "DZ_ADDEDFILE": "addedFile"; "DZ_ADDEDFILES": "addedFiles"; "DZ_REMOVEDFILE": "removedFile"; "DZ_UPLOADPROGRESS": "uploadProgress"; "DZ_MAXFILESREACHED": "maxFilesReached"; "DZ_MAXFILESEXCEEDED": "maxFilesExceeded"; "DZ_ERRORMULTIPLE": "errorMultiple"; "DZ_SUCCESSMULTIPLE": "successMultiple"; "DZ_SENDINGMULTIPLE": "sendingMultiple"; "DZ_CANCELEDMULTIPLE": "canceledMultiple"; "DZ_COMPLETEMULTIPLE": "completeMultiple"; "DZ_PROCESSINGMULTIPLE": "processingMultiple"; "DZ_RESET": "reset"; "DZ_QUEUECOMPLETE": "queueComplete"; "DZ_TOTALUPLOADPROGRESS": "totalUploadProgress"; }, never, ["*"]>;
}

//# sourceMappingURL=dropzone.component.d.ts.map