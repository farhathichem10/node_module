import { Injectable } from '@angular/core';
import { NgbConfig } from '../ngb-config';
import * as i0 from "@angular/core";
import * as i1 from "../ngb-config";
/**
 * A configuration service for the [NgbCollapse](#/components/collapse/api#NgbCollapse) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all collapses used in the application.
 */
export class NgbCollapseConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbCollapseConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbCollapseConfig_Factory() { return new NgbCollapseConfig(i0.ɵɵinject(i1.NgbConfig)); }, token: NgbCollapseConfig, providedIn: "root" });
NgbCollapseConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
NgbCollapseConfig.ctorParameters = () => [
    { type: NgbConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbGxhcHNlL2NvbGxhcHNlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUFHLENBQUM7SUFFN0MsSUFBSSxTQUFTLEtBQWMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsSCxJQUFJLFNBQVMsQ0FBQyxTQUFrQixJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQzs7OztZQVBuRSxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7WUFSeEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nYkNvbmZpZ30gZnJvbSAnLi4vbmdiLWNvbmZpZyc7XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBbTmdiQ29sbGFwc2VdKCMvY29tcG9uZW50cy9jb2xsYXBzZS9hcGkjTmdiQ29sbGFwc2UpIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplIGl0cyBwcm9wZXJ0aWVzXG4gKiB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgY29sbGFwc2VzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOZ2JDb2xsYXBzZUNvbmZpZyB7XG4gIHByaXZhdGUgX2FuaW1hdGlvbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ2JDb25maWc6IE5nYkNvbmZpZykge31cblxuICBnZXQgYW5pbWF0aW9uKCk6IGJvb2xlYW4geyByZXR1cm4gKHRoaXMuX2FuaW1hdGlvbiA9PT0gdW5kZWZpbmVkKSA/IHRoaXMuX25nYkNvbmZpZy5hbmltYXRpb24gOiB0aGlzLl9hbmltYXRpb247IH1cbiAgc2V0IGFuaW1hdGlvbihhbmltYXRpb246IGJvb2xlYW4pIHsgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uOyB9XG59XG4iXX0=