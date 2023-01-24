import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
class PushNotificationsService {
    constructor() {
        this.permission = this.isSupported() ? Notification.permission : 'denied';
    }
    isSupported() {
        return 'Notification' in window;
    }
    requestPermission() {
        if ('Notification' in window) {
            Notification.requestPermission((status) => this.permission = status);
        }
    }
    create(title, options) {
        return new Observable((obs) => {
            if (!('Notification' in window)) {
                obs.error('Notifications are not available in this environment');
                obs.complete();
            }
            if (this.permission !== 'granted') {
                obs.error(`The user hasn't granted you permission to send push notifications`);
                obs.complete();
            }
            const n = new Notification(title, options);
            n.onshow = (e) => obs.next({ notification: n, event: e });
            n.onclick = (e) => obs.next({ notification: n, event: e });
            n.onerror = (e) => obs.error({ notification: n, event: e });
            n.onclose = () => obs.complete();
        });
    }
}
PushNotificationsService.ɵfac = function PushNotificationsService_Factory(t) { return new (t || PushNotificationsService)(); };
PushNotificationsService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: PushNotificationsService, factory: PushNotificationsService.ɵfac });
PushNotificationsService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PushNotificationsService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class PushNotificationsModule {
}
PushNotificationsModule.ɵfac = function PushNotificationsModule_Factory(t) { return new (t || PushNotificationsModule)(); };
PushNotificationsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: PushNotificationsModule });
PushNotificationsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [PushNotificationsService] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PushNotificationsModule, [{
        type: NgModule,
        args: [{
                providers: [PushNotificationsService]
            }]
    }], null, null); })();

export { PushNotificationsModule, PushNotificationsService };

//# sourceMappingURL=ng-push-ivy.js.map