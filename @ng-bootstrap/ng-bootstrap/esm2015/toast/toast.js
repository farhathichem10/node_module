import { Attribute, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, ElementRef, NgZone, } from '@angular/core';
import { take } from 'rxjs/operators';
import { NgbToastConfig } from './toast-config';
import { ngbRunTransition } from '../util/transition/ngbTransition';
import { ngbToastFadeInTransition, ngbToastFadeOutTransition } from './toast-transition';
/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * @since 5.0.0
 */
export class NgbToastHeader {
}
NgbToastHeader.decorators = [
    { type: Directive, args: [{ selector: '[ngbToastHeader]' },] }
];
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * @since 5.0.0
 */
export class NgbToast {
    constructor(ariaLive, config, _zone, _element) {
        this.ariaLive = ariaLive;
        this._zone = _zone;
        this._element = _element;
        /**
         * A template like `<ng-template ngbToastHeader></ng-template>` can be
         * used in the projected content to allow markup usage.
         */
        this.contentHeaderTpl = null;
        /**
         * An event fired after the animation triggered by calling `.show()` method has finished.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event fired after the animation triggered by calling `.hide()` method has finished.
         *
         * It can only occur in 2 different scenarios:
         * - `autohide` timeout fires
         * - user clicks on a closing cross
         *
         * Additionally this output is purely informative. The toast won't be removed from DOM automatically, it's up
         * to the user to take care of that.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        if (this.ariaLive == null) {
            this.ariaLive = config.ariaLive;
        }
        this.delay = config.delay;
        this.autohide = config.autohide;
        this.animation = config.animation;
    }
    ngAfterContentInit() {
        this._zone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            this._init();
            this.show();
        });
    }
    ngOnChanges(changes) {
        if ('autohide' in changes) {
            this._clearTimeout();
            this._init();
        }
    }
    /**
     * Triggers toast closing programmatically.
     *
     * The returned observable will emit and be completed once the closing transition has finished.
     * If the animations are turned off this happens synchronously.
     *
     * Alternatively you could listen or subscribe to the `(hidden)` output
     *
     * @since 8.0.0
     */
    hide() {
        this._clearTimeout();
        const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeOutTransition, { animation: this.animation, runningTransition: 'stop' });
        transition.subscribe(() => { this.hidden.emit(); });
        return transition;
    }
    /**
     * Triggers toast opening programmatically.
     *
     * The returned observable will emit and be completed once the opening transition has finished.
     * If the animations are turned off this happens synchronously.
     *
     * Alternatively you could listen or subscribe to the `(shown)` output
     *
     * @since 8.0.0
     */
    show() {
        const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeInTransition, {
            animation: this.animation,
            runningTransition: 'continue',
        });
        transition.subscribe(() => { this.shown.emit(); });
        return transition;
    }
    _init() {
        if (this.autohide && !this._timeoutID) {
            this._timeoutID = setTimeout(() => this.hide(), this.delay);
        }
    }
    _clearTimeout() {
        if (this._timeoutID) {
            clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    }
}
NgbToast.decorators = [
    { type: Component, args: [{
                selector: 'ngb-toast',
                exportAs: 'ngbToast',
                encapsulation: ViewEncapsulation.None,
                host: {
                    'role': 'alert',
                    '[attr.aria-live]': 'ariaLive',
                    'aria-atomic': 'true',
                    'class': 'toast',
                    '[class.fade]': 'animation',
                },
                template: `
    <ng-template #headerTpl>
      <strong class="mr-auto">{{header}}</strong>
    </ng-template>
    <ng-template [ngIf]="contentHeaderTpl || header">
      <div class="toast-header">
        <ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl"></ng-template>
        <button type="button" class="close" aria-label="Close" i18n-aria-label="@@ngb.toast.close-aria" (click)="hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </ng-template>
    <div class="toast-body">
      <ng-content></ng-content>
    </div>
  `,
                styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
            },] }
];
NgbToast.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['aria-live',] }] },
    { type: NgbToastConfig },
    { type: NgZone },
    { type: ElementRef }
];
NgbToast.propDecorators = {
    animation: [{ type: Input }],
    delay: [{ type: Input }],
    autohide: [{ type: Input }],
    header: [{ type: Input }],
    contentHeaderTpl: [{ type: ContentChild, args: [NgbToastHeader, { read: TemplateRef, static: true },] }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdG9hc3QvdG9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUd2Rjs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyxjQUFjOzs7WUFEMUIsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFDOztBQUl6Qzs7Ozs7R0FLRztBQThCSCxNQUFNLE9BQU8sUUFBUTtJQTBEbkIsWUFDbUMsUUFBZ0IsRUFBRSxNQUFzQixFQUFVLEtBQWEsRUFDdEYsUUFBb0I7UUFERyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQWtDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDdEYsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQTdCaEM7OztXQUdHO1FBQzhELHFCQUFnQixHQUEyQixJQUFJLENBQUM7UUFFakg7Ozs7V0FJRztRQUNPLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTNDOzs7Ozs7Ozs7OztXQVdHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFLMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsUUFB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QVc7WUE3R3BCLGNBQWM7WUFOcEIsTUFBTTtZQUROLFVBQVU7Ozt3QkFrRVQsS0FBSztvQkFRTCxLQUFLO3VCQU1MLEtBQUs7cUJBTUwsS0FBSzsrQkFNTCxZQUFZLFNBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO29CQU85RCxNQUFNO3FCQWNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBdHRyaWJ1dGUsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtOZ2JUb2FzdENvbmZpZ30gZnJvbSAnLi90b2FzdC1jb25maWcnO1xuaW1wb3J0IHtuZ2JSdW5UcmFuc2l0aW9ufSBmcm9tICcuLi91dGlsL3RyYW5zaXRpb24vbmdiVHJhbnNpdGlvbic7XG5pbXBvcnQge25nYlRvYXN0RmFkZUluVHJhbnNpdGlvbiwgbmdiVG9hc3RGYWRlT3V0VHJhbnNpdGlvbn0gZnJvbSAnLi90b2FzdC10cmFuc2l0aW9uJztcblxuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIGFsbG93cyB0aGUgdXNhZ2Ugb2YgSFRNTCBtYXJrdXAgb3Igb3RoZXIgZGlyZWN0aXZlc1xuICogaW5zaWRlIG9mIHRoZSB0b2FzdCdzIGhlYWRlci5cbiAqXG4gKiBAc2luY2UgNS4wLjBcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbmdiVG9hc3RIZWFkZXJdJ30pXG5leHBvcnQgY2xhc3MgTmdiVG9hc3RIZWFkZXIge1xufVxuXG4vKipcbiAqIFRvYXN0cyBwcm92aWRlIGZlZWRiYWNrIG1lc3NhZ2VzIGFzIG5vdGlmaWNhdGlvbnMgdG8gdGhlIHVzZXIuXG4gKiBHb2FsIGlzIHRvIG1pbWljIHRoZSBwdXNoIG5vdGlmaWNhdGlvbnMgYXZhaWxhYmxlIGJvdGggb24gbW9iaWxlIGFuZCBkZXNrdG9wIG9wZXJhdGluZyBzeXN0ZW1zLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItdG9hc3QnLFxuICBleHBvcnRBczogJ25nYlRvYXN0JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ2FsZXJ0JyxcbiAgICAnW2F0dHIuYXJpYS1saXZlXSc6ICdhcmlhTGl2ZScsXG4gICAgJ2FyaWEtYXRvbWljJzogJ3RydWUnLFxuICAgICdjbGFzcyc6ICd0b2FzdCcsXG4gICAgJ1tjbGFzcy5mYWRlXSc6ICdhbmltYXRpb24nLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjaGVhZGVyVHBsPlxuICAgICAgPHN0cm9uZyBjbGFzcz1cIm1yLWF1dG9cIj57e2hlYWRlcn19PC9zdHJvbmc+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiY29udGVudEhlYWRlclRwbCB8fCBoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1oZWFkZXJcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRIZWFkZXJUcGwgfHwgaGVhZGVyVHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLnRvYXN0LmNsb3NlLWFyaWFcIiAoY2xpY2spPVwiaGlkZSgpXCI+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1ib2R5XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2JUb2FzdCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsXG4gICAgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdG9hc3Qgb3BlbmluZyBhbmQgY2xvc2luZyB3aWxsIGJlIGFuaW1hdGVkLlxuICAgKlxuICAgKiBBbmltYXRpb24gaXMgdHJpZ2dlcmVkIG9ubHkgd2hlbiB0aGUgYC5oaWRlKClgIG9yIGAuc2hvdygpYCBmdW5jdGlvbnMgYXJlIGNhbGxlZFxuICAgKlxuICAgKiBAc2luY2UgOC4wLjBcbiAgICovXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogYm9vbGVhbjtcblxuICBwcml2YXRlIF90aW1lb3V0SUQ7XG5cbiAgLyoqXG4gICAqIERlbGF5IGFmdGVyIHdoaWNoIHRoZSB0b2FzdCB3aWxsIGhpZGUgKG1zKS5cbiAgICogZGVmYXVsdDogYDUwMGAgKG1zKSAoaW5oZXJpdGVkIGZyb20gTmdiVG9hc3RDb25maWcpXG4gICAqL1xuICBASW5wdXQoKSBkZWxheTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBdXRvIGhpZGUgdGhlIHRvYXN0IGFmdGVyIGEgZGVsYXkgaW4gbXMuXG4gICAqIGRlZmF1bHQ6IGB0cnVlYCAoaW5oZXJpdGVkIGZyb20gTmdiVG9hc3RDb25maWcpXG4gICAqL1xuICBASW5wdXQoKSBhdXRvaGlkZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGV4dCB0byBiZSB1c2VkIGFzIHRvYXN0J3MgaGVhZGVyLlxuICAgKiBJZ25vcmVkIGlmIGEgQ29udGVudENoaWxkIHRlbXBsYXRlIGlzIHNwZWNpZmllZCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKi9cbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgdGVtcGxhdGUgbGlrZSBgPG5nLXRlbXBsYXRlIG5nYlRvYXN0SGVhZGVyPjwvbmctdGVtcGxhdGU+YCBjYW4gYmVcbiAgICogdXNlZCBpbiB0aGUgcHJvamVjdGVkIGNvbnRlbnQgdG8gYWxsb3cgbWFya3VwIHVzYWdlLlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChOZ2JUb2FzdEhlYWRlciwge3JlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWV9KSBjb250ZW50SGVhZGVyVHBsOiBUZW1wbGF0ZVJlZjxhbnk+fCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQW4gZXZlbnQgZmlyZWQgYWZ0ZXIgdGhlIGFuaW1hdGlvbiB0cmlnZ2VyZWQgYnkgY2FsbGluZyBgLnNob3coKWAgbWV0aG9kIGhhcyBmaW5pc2hlZC5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBAT3V0cHV0KCkgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IGZpcmVkIGFmdGVyIHRoZSBhbmltYXRpb24gdHJpZ2dlcmVkIGJ5IGNhbGxpbmcgYC5oaWRlKClgIG1ldGhvZCBoYXMgZmluaXNoZWQuXG4gICAqXG4gICAqIEl0IGNhbiBvbmx5IG9jY3VyIGluIDIgZGlmZmVyZW50IHNjZW5hcmlvczpcbiAgICogLSBgYXV0b2hpZGVgIHRpbWVvdXQgZmlyZXNcbiAgICogLSB1c2VyIGNsaWNrcyBvbiBhIGNsb3NpbmcgY3Jvc3NcbiAgICpcbiAgICogQWRkaXRpb25hbGx5IHRoaXMgb3V0cHV0IGlzIHB1cmVseSBpbmZvcm1hdGl2ZS4gVGhlIHRvYXN0IHdvbid0IGJlIHJlbW92ZWQgZnJvbSBET00gYXV0b21hdGljYWxseSwgaXQncyB1cFxuICAgKiB0byB0aGUgdXNlciB0byB0YWtlIGNhcmUgb2YgdGhhdC5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBAT3V0cHV0KCkgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgQEF0dHJpYnV0ZSgnYXJpYS1saXZlJykgcHVibGljIGFyaWFMaXZlOiBzdHJpbmcsIGNvbmZpZzogTmdiVG9hc3RDb25maWcsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAodGhpcy5hcmlhTGl2ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFyaWFMaXZlID0gY29uZmlnLmFyaWFMaXZlO1xuICAgIH1cbiAgICB0aGlzLmRlbGF5ID0gY29uZmlnLmRlbGF5O1xuICAgIHRoaXMuYXV0b2hpZGUgPSBjb25maWcuYXV0b2hpZGU7XG4gICAgdGhpcy5hbmltYXRpb24gPSBjb25maWcuYW5pbWF0aW9uO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCdhdXRvaGlkZScgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRvYXN0IGNsb3NpbmcgcHJvZ3JhbW1hdGljYWxseS5cbiAgICpcbiAgICogVGhlIHJldHVybmVkIG9ic2VydmFibGUgd2lsbCBlbWl0IGFuZCBiZSBjb21wbGV0ZWQgb25jZSB0aGUgY2xvc2luZyB0cmFuc2l0aW9uIGhhcyBmaW5pc2hlZC5cbiAgICogSWYgdGhlIGFuaW1hdGlvbnMgYXJlIHR1cm5lZCBvZmYgdGhpcyBoYXBwZW5zIHN5bmNocm9ub3VzbHkuXG4gICAqXG4gICAqIEFsdGVybmF0aXZlbHkgeW91IGNvdWxkIGxpc3RlbiBvciBzdWJzY3JpYmUgdG8gdGhlIGAoaGlkZGVuKWAgb3V0cHV0XG4gICAqXG4gICAqIEBzaW5jZSA4LjAuMFxuICAgKi9cbiAgaGlkZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gbmdiUnVuVHJhbnNpdGlvbihcbiAgICAgICAgdGhpcy5fem9uZSwgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBuZ2JUb2FzdEZhZGVPdXRUcmFuc2l0aW9uLFxuICAgICAgICB7YW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbiwgcnVubmluZ1RyYW5zaXRpb246ICdzdG9wJ30pO1xuICAgIHRyYW5zaXRpb24uc3Vic2NyaWJlKCgpID0+IHsgdGhpcy5oaWRkZW4uZW1pdCgpOyB9KTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0b2FzdCBvcGVuaW5nIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqXG4gICAqIFRoZSByZXR1cm5lZCBvYnNlcnZhYmxlIHdpbGwgZW1pdCBhbmQgYmUgY29tcGxldGVkIG9uY2UgdGhlIG9wZW5pbmcgdHJhbnNpdGlvbiBoYXMgZmluaXNoZWQuXG4gICAqIElmIHRoZSBhbmltYXRpb25zIGFyZSB0dXJuZWQgb2ZmIHRoaXMgaGFwcGVucyBzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5IHlvdSBjb3VsZCBsaXN0ZW4gb3Igc3Vic2NyaWJlIHRvIHRoZSBgKHNob3duKWAgb3V0cHV0XG4gICAqXG4gICAqIEBzaW5jZSA4LjAuMFxuICAgKi9cbiAgc2hvdygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gbmdiUnVuVHJhbnNpdGlvbih0aGlzLl96b25lLCB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG5nYlRvYXN0RmFkZUluVHJhbnNpdGlvbiwge1xuICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbixcbiAgICAgIHJ1bm5pbmdUcmFuc2l0aW9uOiAnY29udGludWUnLFxuICAgIH0pO1xuICAgIHRyYW5zaXRpb24uc3Vic2NyaWJlKCgpID0+IHsgdGhpcy5zaG93bi5lbWl0KCk7IH0pO1xuICAgIHJldHVybiB0cmFuc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvaGlkZSAmJiAhdGhpcy5fdGltZW91dElEKSB7XG4gICAgICB0aGlzLl90aW1lb3V0SUQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSgpLCB0aGlzLmRlbGF5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX3RpbWVvdXRJRCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRJRCk7XG4gICAgICB0aGlzLl90aW1lb3V0SUQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19