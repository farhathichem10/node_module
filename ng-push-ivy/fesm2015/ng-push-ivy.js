import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

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
PushNotificationsService.decorators = [
    { type: Injectable }
];
PushNotificationsService.ctorParameters = () => [];

class PushNotificationsModule {
}
PushNotificationsModule.decorators = [
    { type: NgModule, args: [{
                providers: [PushNotificationsService],
            },] }
];

export { PushNotificationsModule, PushNotificationsService };
//# sourceMappingURL=ng-push-ivy.js.map
