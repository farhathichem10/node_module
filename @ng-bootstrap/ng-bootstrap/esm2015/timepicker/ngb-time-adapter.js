import { Injectable } from '@angular/core';
import { isInteger } from '../util/util';
import * as i0 from "@angular/core";
export function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
    return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * @since 2.2.0
 */
export class NgbTimeAdapter {
}
NgbTimeAdapter.ɵprov = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY, token: NgbTimeAdapter, providedIn: "root" });
NgbTimeAdapter.decorators = [
    { type: Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY },] }
];
export class NgbTimeStructAdapter extends NgbTimeAdapter {
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    fromModel(time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    }
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    toModel(time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    }
}
NgbTimeStructAdapter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRpbWUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aW1lcGlja2VyL25nYi10aW1lLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDOztBQUV2QyxNQUFNLFVBQVUsbUNBQW1DO0lBQ2pELE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFFSCxNQUFNLE9BQWdCLGNBQWM7Ozs7WUFEbkMsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUM7O0FBY2pGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxjQUE2QjtJQUNyRTs7T0FFRztJQUNILFNBQVMsQ0FBQyxJQUEwQjtRQUNsQyxPQUFPLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sSUFBSSxFQUFDLENBQUMsQ0FBQztZQUNsRyxJQUFJLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsSUFBMEI7UUFDaEMsT0FBTyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLElBQUksRUFBQyxDQUFDLENBQUM7WUFDbEcsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7O1lBbEJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JUaW1lU3RydWN0fSBmcm9tICcuL25nYi10aW1lLXN0cnVjdCc7XG5pbXBvcnQge2lzSW50ZWdlcn0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSX1RJTUVfQURBUFRFUl9GQUNUT1JZKCkge1xuICByZXR1cm4gbmV3IE5nYlRpbWVTdHJ1Y3RBZGFwdGVyKCk7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3Qgc2VydmljZSB0aGF0IGRvZXMgdGhlIGNvbnZlcnNpb24gYmV0d2VlbiB0aGUgaW50ZXJuYWwgdGltZXBpY2tlciBgTmdiVGltZVN0cnVjdGAgbW9kZWwgYW5kXG4gKiBhbnkgcHJvdmlkZWQgdXNlciB0aW1lIG1vZGVsIGBUYCwgZXguIGEgc3RyaW5nLCBhIG5hdGl2ZSBkYXRlLCBldGMuXG4gKlxuICogVGhlIGFkYXB0ZXIgaXMgdXNlZCAqKm9ubHkqKiBmb3IgY29udmVyc2lvbiB3aGVuIGJpbmRpbmcgdGltZXBpY2tlciB0byBhIGZvcm0gY29udHJvbCxcbiAqIGV4LiBgWyhuZ01vZGVsKV09XCJ1c2VyVGltZU1vZGVsXCJgLiBIZXJlIGB1c2VyVGltZU1vZGVsYCBjYW4gYmUgb2YgYW55IHR5cGUuXG4gKlxuICogVGhlIGRlZmF1bHQgdGltZXBpY2tlciBpbXBsZW1lbnRhdGlvbiBhc3N1bWVzIHdlIHVzZSBgTmdiVGltZVN0cnVjdGAgYXMgYSB1c2VyIG1vZGVsLlxuICpcbiAqIFNlZSB0aGUgW2N1c3RvbSB0aW1lIGFkYXB0ZXIgZGVtb10oIy9jb21wb25lbnRzL3RpbWVwaWNrZXIvZXhhbXBsZXMjYWRhcHRlcikgZm9yIGFuIGV4YW1wbGUuXG4gKlxuICogQHNpbmNlIDIuMi4wXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCcsIHVzZUZhY3Rvcnk6IE5HQl9EQVRFUElDS0VSX1RJTUVfQURBUFRFUl9GQUNUT1JZfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ2JUaW1lQWRhcHRlcjxUPiB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHVzZXItbW9kZWwgdGltZSBvZiB0eXBlIGBUYCB0byBhbiBgTmdiVGltZVN0cnVjdGAgZm9yIGludGVybmFsIHVzZS5cbiAgICovXG4gIGFic3RyYWN0IGZyb21Nb2RlbCh2YWx1ZTogVCB8IG51bGwpOiBOZ2JUaW1lU3RydWN0IHwgbnVsbDtcblxuICAvKipcbiAgICogQ29udmVydHMgYW4gaW50ZXJuYWwgYE5nYlRpbWVTdHJ1Y3RgIHRpbWUgdG8gYSB1c2VyLW1vZGVsIHRpbWUgb2YgdHlwZSBgVGAuXG4gICAqL1xuICBhYnN0cmFjdCB0b01vZGVsKHRpbWU6IE5nYlRpbWVTdHJ1Y3QgfCBudWxsKTogVCB8IG51bGw7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ2JUaW1lU3RydWN0QWRhcHRlciBleHRlbmRzIE5nYlRpbWVBZGFwdGVyPE5nYlRpbWVTdHJ1Y3Q+IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTmdiVGltZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYlRpbWVTdHJ1Y3QgdmFsdWVcbiAgICovXG4gIGZyb21Nb2RlbCh0aW1lOiBOZ2JUaW1lU3RydWN0IHwgbnVsbCk6IE5nYlRpbWVTdHJ1Y3QgfCBudWxsIHtcbiAgICByZXR1cm4gKHRpbWUgJiYgaXNJbnRlZ2VyKHRpbWUuaG91cikgJiYgaXNJbnRlZ2VyKHRpbWUubWludXRlKSkgP1xuICAgICAgICB7aG91cjogdGltZS5ob3VyLCBtaW51dGU6IHRpbWUubWludXRlLCBzZWNvbmQ6IGlzSW50ZWdlcih0aW1lLnNlY29uZCkgPyB0aW1lLnNlY29uZCA6IDxhbnk+bnVsbH0gOlxuICAgICAgICBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTmdiVGltZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYlRpbWVTdHJ1Y3QgdmFsdWVcbiAgICovXG4gIHRvTW9kZWwodGltZTogTmdiVGltZVN0cnVjdCB8IG51bGwpOiBOZ2JUaW1lU3RydWN0IHwgbnVsbCB7XG4gICAgcmV0dXJuICh0aW1lICYmIGlzSW50ZWdlcih0aW1lLmhvdXIpICYmIGlzSW50ZWdlcih0aW1lLm1pbnV0ZSkpID9cbiAgICAgICAge2hvdXI6IHRpbWUuaG91ciwgbWludXRlOiB0aW1lLm1pbnV0ZSwgc2Vjb25kOiBpc0ludGVnZXIodGltZS5zZWNvbmQpID8gdGltZS5zZWNvbmQgOiA8YW55Pm51bGx9IDpcbiAgICAgICAgbnVsbDtcbiAgfVxufVxuIl19