import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken, LOCALE_ID, Optional } from '@angular/core';
import { DocumentRef, WindowRef } from '../../utils/browser-globals';
import { MapsAPILoader } from './maps-api-loader';
export var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
export var LAZY_MAPS_API_CONFIG = new InjectionToken('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = /** @class */ (function (_super) {
    tslib_1.__extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d, localeId) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this.localeId = localeId;
        _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this.callbackName = "agmLazyMapsAPILoader";
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
        var _this = this;
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                resolve();
            };
            scriptElem.onerror = function (error) {
                reject(error);
            };
        });
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null,
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LAZY_MAPS_API_CONFIG,] }] },
        { type: WindowRef },
        { type: DocumentRef },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    LazyMapsAPILoader = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(LAZY_MAPS_API_CONFIG)),
        tslib_1.__param(3, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [Object, WindowRef, DocumentRef, String])
    ], LazyMapsAPILoader);
    return LazyMapsAPILoader;
}(MapsAPILoader));
export { LazyMapsAPILoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tYXBzLWFwaS1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdtL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbGF6eS1tYXBzLWFwaS1sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE1BQU0sQ0FBTixJQUFZLHdCQUlYO0FBSkQsV0FBWSx3QkFBd0I7SUFDbEMsdUVBQVEsQ0FBQTtJQUNSLHlFQUFTLENBQUE7SUFDVCx1RUFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFJbkM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FBaUMsMENBQTBDLENBQUMsQ0FBQztBQWlFbkk7SUFBdUMsNkNBQWE7SUFRbEQsMkJBQXNELE1BQWtCLEVBQUUsQ0FBWSxFQUFFLENBQWMsRUFDMUUsUUFBZ0I7UUFEVSx1QkFBQSxFQUFBLGFBQWtCO1FBQXhFLFlBRUUsaUJBQU8sU0FJUjtRQUwyQixjQUFRLEdBQVIsUUFBUSxDQUFRO1FBSnpCLGdCQUFVLEdBQVcsd0JBQXdCLENBQUM7UUFDOUMsa0JBQVksR0FBVyxzQkFBc0IsQ0FBQztRQUsvRCxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDNUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7O0lBQ3hCLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0Us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T0FBTyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFDLEtBQW1DO1lBQ3ZDLE9BQVUsS0FBSyxDQUFDLEdBQUcsU0FBSSxLQUFLLENBQUMsS0FBTyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxPQUFVLFFBQVEsVUFBSyxXQUFXLFNBQUksTUFBUSxDQUFDO0lBQ2pELENBQUM7O2dEQWpHWSxRQUFRLFlBQUksTUFBTSxTQUFDLG9CQUFvQjtnQkFBeUIsU0FBUztnQkFBSyxXQUFXOzZDQUNwRyxNQUFNLFNBQUMsU0FBUzs7SUFUUCxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO1FBU0UsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNuRCxtQkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eURBRDBELFNBQVMsRUFBSyxXQUFXO09BUjNGLGlCQUFpQixDQTBHN0I7SUFBRCx3QkFBQztDQUFBLEFBMUdELENBQXVDLGFBQWEsR0EwR25EO1NBMUdZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIExPQ0FMRV9JRCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9jdW1lbnRSZWYsIFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3V0aWxzL2Jyb3dzZXItZ2xvYmFscyc7XG5cbmltcG9ydCB7IE1hcHNBUElMb2FkZXIgfSBmcm9tICcuL21hcHMtYXBpLWxvYWRlcic7XG5cbmV4cG9ydCBlbnVtIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbCB7XG4gIEhUVFAgPSAxLFxuICBIVFRQUyA9IDIsXG4gIEFVVE8gPSAzLFxufVxuXG4vKipcbiAqIFRva2VuIGZvciB0aGUgY29uZmlnIG9mIHRoZSBMYXp5TWFwc0FQSUxvYWRlci4gUGxlYXNlIHByb3ZpZGUgYW4gb2JqZWN0IG9mIHR5cGUge0BsaW5rXG4gKiBMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ30uXG4gKi9cbmV4cG9ydCBjb25zdCBMQVpZX01BUFNfQVBJX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ0xpdGVyYWw+KCdhbmd1bGFyLWdvb2dsZS1tYXBzIExBWllfTUFQU19BUElfQ09ORklHJyk7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIHtAbGluayBMYXp5TWFwc0FQSUxvYWRlcn0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGF6eU1hcHNBUElMb2FkZXJDb25maWdMaXRlcmFsIHtcbiAgLyoqXG4gICAqIFRoZSBHb29nbGUgTWFwcyBBUEkgS2V5IChzZWU6XG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2dldC1hcGkta2V5KVxuICAgKi9cbiAgYXBpS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgR29vZ2xlIE1hcHMgY2xpZW50IElEIChmb3IgcHJlbWl1bSBwbGFucykuXG4gICAqIFdoZW4geW91IGhhdmUgYSBHb29nbGUgTWFwcyBBUElzIFByZW1pdW0gUGxhbiBsaWNlbnNlLCB5b3UgbXVzdCBhdXRoZW50aWNhdGVcbiAgICogeW91ciBhcHBsaWNhdGlvbiB3aXRoIGVpdGhlciBhbiBBUEkga2V5IG9yIGEgY2xpZW50IElELlxuICAgKiBUaGUgR29vZ2xlIE1hcHMgQVBJIHdpbGwgZmFpbCB0byBsb2FkIGlmIGJvdGggYSBjbGllbnQgSUQgYW5kIGFuIEFQSSBrZXkgYXJlIGluY2x1ZGVkLlxuICAgKi9cbiAgY2xpZW50SWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBHb29nbGUgTWFwcyBjaGFubmVsIG5hbWUgKGZvciBwcmVtaXVtIHBsYW5zKS5cbiAgICogQSBjaGFubmVsIHBhcmFtZXRlciBpcyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBhbGxvd3MgeW91IHRvIHRyYWNrIHVzYWdlIHVuZGVyIHlvdXIgY2xpZW50XG4gICAqIElEIGJ5IGFzc2lnbmluZyBhIGRpc3RpbmN0IGNoYW5uZWwgdG8gZWFjaCBvZiB5b3VyIGFwcGxpY2F0aW9ucy5cbiAgICovXG4gIGNoYW5uZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdvb2dsZSBNYXBzIEFQSSB2ZXJzaW9uLlxuICAgKi9cbiAgYXBpVmVyc2lvbj86IHN0cmluZztcblxuICAvKipcbiAgICogSG9zdCBhbmQgUGF0aCB1c2VkIGZvciB0aGUgYDxzY3JpcHQ+YCB0YWcuXG4gICAqL1xuICBob3N0QW5kUGF0aD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvdG9jb2wgdXNlZCBmb3IgdGhlIGA8c2NyaXB0PmAgdGFnLlxuICAgKi9cbiAgcHJvdG9jb2w/OiBHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2w7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgd2hpY2ggR29vZ2xlIE1hcHMgbGlicmFyaWVzIHNob3VsZCBnZXQgbG9hZGVkLlxuICAgKi9cbiAgbGlicmFyaWVzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGJpYXMgZm9yIHRoZSBtYXAgYmVoYXZpb3IgaXMgVVMuXG4gICAqIElmIHlvdSB3aXNoIHRvIGFsdGVyIHlvdXIgYXBwbGljYXRpb24gdG8gc2VydmUgZGlmZmVyZW50IG1hcCB0aWxlcyBvciBiaWFzIHRoZVxuICAgKiBhcHBsaWNhdGlvbiwgeW91IGNhbiBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgYmVoYXZpb3IgKFVTKSBieSBkZWZpbmluZyBhIGByZWdpb25gLlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvYmFzaWNzI1JlZ2lvblxuICAgKi9cbiAgcmVnaW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgR29vZ2xlIE1hcHMgQVBJIHVzZXMgdGhlIGJyb3dzZXIncyBwcmVmZXJyZWQgbGFuZ3VhZ2Ugd2hlbiBkaXNwbGF5aW5nXG4gICAqIHRleHR1YWwgaW5mb3JtYXRpb24uIElmIHlvdSB3aXNoIHRvIG92ZXJ3cml0ZSB0aGlzIGJlaGF2aW9yIGFuZCBmb3JjZSB0aGUgQVBJXG4gICAqIHRvIHVzZSBhIGdpdmVuIGxhbmd1YWdlLCB5b3UgY2FuIHVzZSB0aGlzIHNldHRpbmcuXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9iYXNpY3MjTGFuZ3VhZ2VcbiAgICovXG4gIGxhbmd1YWdlPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF6eU1hcHNBUElMb2FkZXIgZXh0ZW5kcyBNYXBzQVBJTG9hZGVyIHtcbiAgcHJvdGVjdGVkIF9zY3JpcHRMb2FkaW5nUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcbiAgcHJvdGVjdGVkIF9jb25maWc6IExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbDtcbiAgcHJvdGVjdGVkIF93aW5kb3dSZWY6IFdpbmRvd1JlZjtcbiAgcHJvdGVjdGVkIF9kb2N1bWVudFJlZjogRG9jdW1lbnRSZWY7XG4gIHByb3RlY3RlZCByZWFkb25seSBfU0NSSVBUX0lEOiBzdHJpbmcgPSAnYWdtR29vZ2xlTWFwc0FwaVNjcmlwdCc7XG4gIHByb3RlY3RlZCByZWFkb25seSBjYWxsYmFja05hbWU6IHN0cmluZyA9IGBhZ21MYXp5TWFwc0FQSUxvYWRlcmA7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChMQVpZX01BUFNfQVBJX0NPTkZJRykgY29uZmlnOiBhbnkgPSBudWxsLCB3OiBXaW5kb3dSZWYsIGQ6IERvY3VtZW50UmVmLFxuICAgQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlSWQ6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIHRoaXMuX3dpbmRvd1JlZiA9IHc7XG4gICAgdGhpcy5fZG9jdW1lbnRSZWYgPSBkO1xuICB9XG5cbiAgbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB3aW5kb3cgPSB0aGlzLl93aW5kb3dSZWYuZ2V0TmF0aXZlV2luZG93KCkgYXMgYW55O1xuICAgIGlmICh3aW5kb3cuZ29vZ2xlICYmIHdpbmRvdy5nb29nbGUubWFwcykge1xuICAgICAgLy8gR29vZ2xlIG1hcHMgYWxyZWFkeSBsb2FkZWQgb24gdGhlIHBhZ2UuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NjcmlwdExvYWRpbmdQcm9taXNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2NyaXB0TG9hZGluZ1Byb21pc2U7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBjYW4gaGFwcGVuIGluIEhNUiBzaXR1YXRpb25zIG9yIFN0YWNrYmxpdHouaW8gZWRpdG9ycy5cbiAgICBjb25zdCBzY3JpcHRPblBhZ2UgPSB0aGlzLl9kb2N1bWVudFJlZi5nZXROYXRpdmVEb2N1bWVudCgpLmdldEVsZW1lbnRCeUlkKHRoaXMuX1NDUklQVF9JRCk7XG4gICAgaWYgKHNjcmlwdE9uUGFnZSkge1xuICAgICAgdGhpcy5fYXNzaWduU2NyaXB0TG9hZGluZ1Byb21pc2Uoc2NyaXB0T25QYWdlKTtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JpcHRMb2FkaW5nUHJvbWlzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JpcHQgPSB0aGlzLl9kb2N1bWVudFJlZi5nZXROYXRpdmVEb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgIHNjcmlwdC5pZCA9IHRoaXMuX1NDUklQVF9JRDtcbiAgICBzY3JpcHQuc3JjID0gdGhpcy5fZ2V0U2NyaXB0U3JjKHRoaXMuY2FsbGJhY2tOYW1lKTtcbiAgICB0aGlzLl9hc3NpZ25TY3JpcHRMb2FkaW5nUHJvbWlzZShzY3JpcHQpO1xuICAgIHRoaXMuX2RvY3VtZW50UmVmLmdldE5hdGl2ZURvY3VtZW50KCkuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIHJldHVybiB0aGlzLl9zY3JpcHRMb2FkaW5nUHJvbWlzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2Fzc2lnblNjcmlwdExvYWRpbmdQcm9taXNlKHNjcmlwdEVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fc2NyaXB0TG9hZGluZ1Byb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgICh0aGlzLl93aW5kb3dSZWYuZ2V0TmF0aXZlV2luZG93KCkgYXMgYW55KVt0aGlzLmNhbGxiYWNrTmFtZV0gPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG5cbiAgICAgIHNjcmlwdEVsZW0ub25lcnJvciA9IChlcnJvcjogRXZlbnQpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFNjcmlwdFNyYyhjYWxsYmFja05hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHByb3RvY29sVHlwZTogR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sID1cbiAgICAgICAgKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcucHJvdG9jb2wpIHx8IEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbC5IVFRQUztcbiAgICBsZXQgcHJvdG9jb2w6IHN0cmluZztcblxuICAgIHN3aXRjaCAocHJvdG9jb2xUeXBlKSB7XG4gICAgICBjYXNlIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbC5BVVRPOlxuICAgICAgICBwcm90b2NvbCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sLkhUVFA6XG4gICAgICAgIHByb3RvY29sID0gJ2h0dHA6JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbC5IVFRQUzpcbiAgICAgICAgcHJvdG9jb2wgPSAnaHR0cHM6JztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgaG9zdEFuZFBhdGg6IHN0cmluZyA9IHRoaXMuX2NvbmZpZy5ob3N0QW5kUGF0aCB8fCAnbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcyc7XG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSA9IHtcbiAgICAgIHY6IHRoaXMuX2NvbmZpZy5hcGlWZXJzaW9uIHx8ICdxdWFydGVybHknLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrTmFtZSxcbiAgICAgIGtleTogdGhpcy5fY29uZmlnLmFwaUtleSxcbiAgICAgIGNsaWVudDogdGhpcy5fY29uZmlnLmNsaWVudElkLFxuICAgICAgY2hhbm5lbDogdGhpcy5fY29uZmlnLmNoYW5uZWwsXG4gICAgICBsaWJyYXJpZXM6IHRoaXMuX2NvbmZpZy5saWJyYXJpZXMsXG4gICAgICByZWdpb246IHRoaXMuX2NvbmZpZy5yZWdpb24sXG4gICAgICBsYW5ndWFnZTogdGhpcy5fY29uZmlnLmxhbmd1YWdlIHx8IHRoaXMubG9jYWxlSWQgIT09ICdlbi1VUycgPyB0aGlzLmxvY2FsZUlkIDogbnVsbCxcbiAgICB9O1xuICAgIGNvbnN0IHBhcmFtczogc3RyaW5nID0gT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoazogc3RyaW5nKSA9PiBxdWVyeVBhcmFtc1trXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGs6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGVtcHR5IGFycmF5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KHF1ZXJ5UGFyYW1zW2tdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHF1ZXJ5UGFyYW1zW2tdKSAmJiBxdWVyeVBhcmFtc1trXS5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGs6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gam9pbiBhcnJheXMgYXMgY29tbWEgc2VwZXJhdGVkIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gcXVlcnlQYXJhbXNba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2tleTogaywgdmFsdWU6IGkuam9pbignLCcpfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7a2V5OiBrLCB2YWx1ZTogcXVlcnlQYXJhbXNba119O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZW50cnk6IHtrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZ30pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtlbnRyeS5rZXl9PSR7ZW50cnkudmFsdWV9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcmJyk7XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0QW5kUGF0aH0/JHtwYXJhbXN9YDtcbiAgfVxufVxuIl19