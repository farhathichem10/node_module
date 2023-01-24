(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ng-push-ivy', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-push-ivy'] = {}, global.ng.core, global.rxjs));
}(this, (function (exports, core, rxjs) { 'use strict';

    var PushNotificationsService = /** @class */ (function () {
        function PushNotificationsService() {
            this.permission = this.isSupported() ? Notification.permission : 'denied';
        }
        PushNotificationsService.prototype.isSupported = function () {
            return 'Notification' in window;
        };
        PushNotificationsService.prototype.requestPermission = function () {
            var _this = this;
            if ('Notification' in window) {
                Notification.requestPermission(function (status) { return _this.permission = status; });
            }
        };
        PushNotificationsService.prototype.create = function (title, options) {
            var _this = this;
            return new rxjs.Observable(function (obs) {
                if (!('Notification' in window)) {
                    obs.error('Notifications are not available in this environment');
                    obs.complete();
                }
                if (_this.permission !== 'granted') {
                    obs.error("The user hasn't granted you permission to send push notifications");
                    obs.complete();
                }
                var n = new Notification(title, options);
                n.onshow = function (e) { return obs.next({ notification: n, event: e }); };
                n.onclick = function (e) { return obs.next({ notification: n, event: e }); };
                n.onerror = function (e) { return obs.error({ notification: n, event: e }); };
                n.onclose = function () { return obs.complete(); };
            });
        };
        return PushNotificationsService;
    }());
    PushNotificationsService.decorators = [
        { type: core.Injectable }
    ];
    PushNotificationsService.ctorParameters = function () { return []; };

    var PushNotificationsModule = /** @class */ (function () {
        function PushNotificationsModule() {
        }
        return PushNotificationsModule;
    }());
    PushNotificationsModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [PushNotificationsService],
                },] }
    ];

    exports.PushNotificationsModule = PushNotificationsModule;
    exports.PushNotificationsService = PushNotificationsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-push-ivy.umd.js.map
