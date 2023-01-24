import { Observable } from 'rxjs';
import { PushNotification, Permission } from '../interfaces/push-notification.type';
import * as ɵngcc0 from '@angular/core';
export declare class PushNotificationsService {
    permission: Permission;
    constructor();
    isSupported(): boolean;
    requestPermission(): void;
    create(title: string, options?: PushNotification): Observable<{
        notification: Notification;
        event: any;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<PushNotificationsService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<PushNotificationsService>;
}

//# sourceMappingURL=push-notifications.service.d.ts.map