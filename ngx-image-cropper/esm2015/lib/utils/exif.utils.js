/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/exif.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
/** @type {?} */
const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
    'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
    'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
    'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
    'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
    'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
/**
 * @return {?}
 */
export function supportsAutomaticRotation() {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    (resolve) => {
        /** @type {?} */
        const img = new Image();
        img.onload = (/**
         * @return {?}
         */
        () => {
            // Check if browser supports automatic image orientation:
            /** @type {?} */
            const supported = img.width === 1 && img.height === 2;
            resolve(supported);
        });
        img.src = testAutoOrientationImageURL;
    }));
}
/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */
export function getTransformationsFromExifData(exifRotationOrBase64Image) {
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
    const view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    const length = view.byteLength;
    /** @type {?} */
    let offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            /** @type {?} */
            const little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
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
    const binaryString = atob(imageBase64);
    /** @type {?} */
    const len = binaryString.length;
    /** @type {?} */
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpZi51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbWFnZS1jcm9wcGVyLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2V4aWYudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O01BS00sMkJBQTJCLEdBQy9CLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMkRBQTJEOzs7O0FBRTdELE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsT0FBTyxJQUFJLE9BQU87Ozs7SUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFOztjQUN2QixHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDdkIsR0FBRyxDQUFDLE1BQU07OztRQUFHLEdBQUcsRUFBRTs7O2tCQUVWLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDckQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQSxDQUFDO1FBQ0YsR0FBRyxDQUFDLEdBQUcsR0FBRywyQkFBMkIsQ0FBQztJQUN4QyxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDhCQUE4QixDQUFDLHlCQUEwQztJQUN2RixJQUFJLE9BQU8seUJBQXlCLEtBQUssUUFBUSxFQUFFO1FBQ2pELHlCQUF5QixHQUFHLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQ3hFO0lBQ0QsUUFBUSx5QkFBeUIsRUFBRTtRQUNqQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQ2xDLEtBQUssQ0FBQztZQUNKLE9BQU8s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QyxDQUFDOztVQUMvRCxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7VUFDaEMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNOztVQUN6QixLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4aWZUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzL2V4aWYtdHJhbnNmb3JtLmludGVyZmFjZSc7XG5cbi8vIEJsYWNrIDJ4MSBKUEVHLCB3aXRoIHRoZSBmb2xsb3dpbmcgbWV0YSBpbmZvcm1hdGlvbiBzZXQ6XG4vLyAtIEVYSUYgT3JpZW50YXRpb246IDYgKFJvdGF0ZWQgOTDCsCBDQ1cpXG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTG9hZC1JbWFnZVxuY29uc3QgdGVzdEF1dG9PcmllbnRhdGlvbkltYWdlVVJMID1cbiAgJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRRQWlSWGhwWmdBQVRVMEFLZ0FBQUFnQUFRRVNBQU1BQUFBQkFBWUFBQUEnICtcbiAgJ0FBQUQvMndDRUFBRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkEnICtcbiAgJ1FFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUUnICtcbiAgJ0JBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQWYvQUFCRUlBQUVBQWdNQkVRQUNFUUVERVFIL3gnICtcbiAgJ0FCS0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFBTEVBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRRUFBQUFBQUFBQUFBQUFBQUEnICtcbiAgJ0FBQUFBRVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQURBTUJBQUlSQXhFQVB3QS84SC8vMlE9PSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0F1dG9tYXRpY1JvdGF0aW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgYnJvd3NlciBzdXBwb3J0cyBhdXRvbWF0aWMgaW1hZ2Ugb3JpZW50YXRpb246XG4gICAgICBjb25zdCBzdXBwb3J0ZWQgPSBpbWcud2lkdGggPT09IDEgJiYgaW1nLmhlaWdodCA9PT0gMjtcbiAgICAgIHJlc29sdmUoc3VwcG9ydGVkKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSB0ZXN0QXV0b09yaWVudGF0aW9uSW1hZ2VVUkw7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtYXRpb25zRnJvbUV4aWZEYXRhKGV4aWZSb3RhdGlvbk9yQmFzZTY0SW1hZ2U6IG51bWJlciB8IHN0cmluZyk6IEV4aWZUcmFuc2Zvcm0ge1xuICBpZiAodHlwZW9mIGV4aWZSb3RhdGlvbk9yQmFzZTY0SW1hZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgZXhpZlJvdGF0aW9uT3JCYXNlNjRJbWFnZSA9IGdldEV4aWZSb3RhdGlvbihleGlmUm90YXRpb25PckJhc2U2NEltYWdlKTtcbiAgfVxuICBzd2l0Y2ggKGV4aWZSb3RhdGlvbk9yQmFzZTY0SW1hZ2UpIHtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4ge3JvdGF0ZTogMCwgZmxpcDogdHJ1ZX07XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHtyb3RhdGU6IDIsIGZsaXA6IGZhbHNlfTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4ge3JvdGF0ZTogMiwgZmxpcDogdHJ1ZX07XG4gICAgY2FzZSA1OlxuICAgICAgcmV0dXJuIHtyb3RhdGU6IDEsIGZsaXA6IHRydWV9O1xuICAgIGNhc2UgNjpcbiAgICAgIHJldHVybiB7cm90YXRlOiAxLCBmbGlwOiBmYWxzZX07XG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIHtyb3RhdGU6IDMsIGZsaXA6IHRydWV9O1xuICAgIGNhc2UgODpcbiAgICAgIHJldHVybiB7cm90YXRlOiAzLCBmbGlwOiBmYWxzZX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7cm90YXRlOiAwLCBmbGlwOiBmYWxzZX07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXhpZlJvdGF0aW9uKGltYWdlQmFzZTY0OiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGJhc2U2NFRvQXJyYXlCdWZmZXIoaW1hZ2VCYXNlNjQpKTtcbiAgaWYgKHZpZXcuZ2V0VWludDE2KDAsIGZhbHNlKSAhPSAweEZGRDgpIHtcbiAgICByZXR1cm4gLTI7XG4gIH1cbiAgY29uc3QgbGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoO1xuICBsZXQgb2Zmc2V0ID0gMjtcbiAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xuICAgIGlmICh2aWV3LmdldFVpbnQxNihvZmZzZXQgKyAyLCBmYWxzZSkgPD0gOCkgcmV0dXJuIC0xO1xuICAgIGNvbnN0IG1hcmtlciA9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgZmFsc2UpO1xuICAgIG9mZnNldCArPSAyO1xuICAgIGlmIChtYXJrZXIgPT0gMHhGRkUxKSB7XG4gICAgICBpZiAodmlldy5nZXRVaW50MzIob2Zmc2V0ICs9IDIsIGZhbHNlKSAhPSAweDQ1Nzg2OTY2KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGl0dGxlID0gdmlldy5nZXRVaW50MTYob2Zmc2V0ICs9IDYsIGZhbHNlKSA9PSAweDQ5NDk7XG4gICAgICBvZmZzZXQgKz0gdmlldy5nZXRVaW50MzIob2Zmc2V0ICsgNCwgbGl0dGxlKTtcbiAgICAgIGNvbnN0IHRhZ3MgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGxpdHRsZSk7XG4gICAgICBvZmZzZXQgKz0gMjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFnczsgaSsrKSB7XG4gICAgICAgIGlmICh2aWV3LmdldFVpbnQxNihvZmZzZXQgKyAoaSAqIDEyKSwgbGl0dGxlKSA9PSAweDAxMTIpIHtcbiAgICAgICAgICByZXR1cm4gdmlldy5nZXRVaW50MTYob2Zmc2V0ICsgKGkgKiAxMikgKyA4LCBsaXR0bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgobWFya2VyICYgMHhGRjAwKSAhPSAweEZGMDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQgKz0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9BcnJheUJ1ZmZlcihpbWFnZUJhc2U2NDogc3RyaW5nKSB7XG4gIGltYWdlQmFzZTY0ID0gaW1hZ2VCYXNlNjQucmVwbGFjZSgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2dtaSwgJycpO1xuICBjb25zdCBiaW5hcnlTdHJpbmcgPSBhdG9iKGltYWdlQmFzZTY0KTtcbiAgY29uc3QgbGVuID0gYmluYXJ5U3RyaW5nLmxlbmd0aDtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYnl0ZXNbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnl0ZXMuYnVmZmVyO1xufVxuIl19