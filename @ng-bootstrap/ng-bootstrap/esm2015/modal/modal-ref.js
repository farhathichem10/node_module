import { of, Subject, zip } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
export class NgbActiveModal {
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbModalRef.result` promise will be resolved with the provided value.
     */
    close(result) { }
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    dismiss(reason) { }
}
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
export class NgbModalRef {
    constructor(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        this._closed = new Subject();
        this._dismissed = new Subject();
        this._hidden = new Subject();
        _windowCmptRef.instance.dismissEvent.subscribe((reason) => { this.dismiss(reason); });
        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this.result.then(null, () => { });
    }
    /**
     * The instance of a component used for the modal content.
     *
     * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
     */
    get componentInstance() {
        if (this._contentRef && this._contentRef.componentRef) {
            return this._contentRef.componentRef.instance;
        }
    }
    /**
     * The observable that emits when the modal is closed via the `.close()` method.
     *
     * It will emit the result passed to the `.close()` method.
     *
     * @since 8.0.0
     */
    get closed() { return this._closed.asObservable().pipe(takeUntil(this._hidden)); }
    /**
     * The observable that emits when the modal is dismissed via the `.dismiss()` method.
     *
     * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
     * reasons like backdrop click or ESC key press.
     *
     * @since 8.0.0
     */
    get dismissed() { return this._dismissed.asObservable().pipe(takeUntil(this._hidden)); }
    /**
     * The observable that emits when both modal window and backdrop are closed and animations were finished.
     * At this point modal and backdrop elements will be removed from the DOM tree.
     *
     * This observable will be completed after emitting.
     *
     * @since 8.0.0
     */
    get hidden() { return this._hidden.asObservable(); }
    /**
     * The observable that emits when modal is fully visible and animation was finished.
     * Modal DOM element is always available synchronously after calling 'modal.open()' service.
     *
     * This observable will be completed after emitting.
     * It will not emit, if modal is closed before open animation is finished.
     *
     * @since 8.0.0
     */
    get shown() { return this._windowCmptRef.instance.shown.asObservable(); }
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    close(result) {
        if (this._windowCmptRef) {
            this._closed.next(result);
            this._resolve(result);
            this._removeModalElements();
        }
    }
    _dismiss(reason) {
        this._dismissed.next(reason);
        this._reject(reason);
        this._removeModalElements();
    }
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    dismiss(reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss) {
                this._dismiss(reason);
            }
            else {
                const dismiss = this._beforeDismiss();
                if (dismiss && dismiss.then) {
                    dismiss.then(result => {
                        if (result !== false) {
                            this._dismiss(reason);
                        }
                    }, () => { });
                }
                else if (dismiss !== false) {
                    this._dismiss(reason);
                }
            }
        }
    }
    _removeModalElements() {
        const windowTransition$ = this._windowCmptRef.instance.hide();
        const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : of(undefined);
        // hiding window
        windowTransition$.subscribe(() => {
            const { nativeElement } = this._windowCmptRef.location;
            nativeElement.parentNode.removeChild(nativeElement);
            this._windowCmptRef.destroy();
            if (this._contentRef && this._contentRef.viewRef) {
                this._contentRef.viewRef.destroy();
            }
            this._windowCmptRef = null;
            this._contentRef = null;
        });
        // hiding backdrop
        backdropTransition$.subscribe(() => {
            if (this._backdropCmptRef) {
                const { nativeElement } = this._backdropCmptRef.location;
                nativeElement.parentNode.removeChild(nativeElement);
                this._backdropCmptRef.destroy();
                this._backdropCmptRef = null;
            }
        });
        // all done
        zip(windowTransition$, backdropTransition$).subscribe(() => {
            this._hidden.next();
            this._hidden.complete();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGFsL21vZGFsLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3pDOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7SUFDekI7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUFZLElBQVMsQ0FBQztJQUU1Qjs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLE1BQVksSUFBUyxDQUFDO0NBQy9CO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sV0FBVztJQStEdEIsWUFDWSxjQUE0QyxFQUFVLFdBQXVCLEVBQzdFLGdCQUFpRCxFQUFVLGNBQXlCO1FBRHBGLG1CQUFjLEdBQWQsY0FBYyxDQUE4QjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQzdFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBVztRQWhFeEYsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDaEMsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUErRHBDLGNBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIs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WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgemlwfSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7TmdiTW9kYWxCYWNrZHJvcH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcCc7XG5pbXBvcnQge05nYk1vZGFsV2luZG93fSBmcm9tICcuL21vZGFsLXdpbmRvdyc7XG5cbmltcG9ydCB7Q29udGVudFJlZn0gZnJvbSAnLi4vdXRpbC9wb3B1cCc7XG5cbi8qKlxuICogQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBvcGVuZWQgKGFjdGl2ZSkgbW9kYWwuXG4gKlxuICogSW5zdGFuY2VzIG9mIHRoaXMgY2xhc3MgY2FuIGJlIGluamVjdGVkIGludG8geW91ciBjb21wb25lbnQgcGFzc2VkIGFzIG1vZGFsIGNvbnRlbnQuXG4gKiBTbyB5b3UgY2FuIGAuY2xvc2UoKWAgb3IgYC5kaXNtaXNzKClgIHRoZSBtb2RhbCB3aW5kb3cgZnJvbSB5b3VyIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5nYkFjdGl2ZU1vZGFsIHtcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2l0aCBhbiBvcHRpb25hbCBgcmVzdWx0YCB2YWx1ZS5cbiAgICpcbiAgICogVGhlIGBOZ2JNb2RhbFJlZi5yZXN1bHRgIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAgICovXG4gIGNsb3NlKHJlc3VsdD86IGFueSk6IHZvaWQge31cblxuICAvKipcbiAgICogRGlzbWlzc2VzIHRoZSBtb2RhbCB3aXRoIGFuIG9wdGlvbmFsIGByZWFzb25gIHZhbHVlLlxuICAgKlxuICAgKiBUaGUgYE5nYk1vZGFsUmVmLnJlc3VsdGAgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuICAgKi9cbiAgZGlzbWlzcyhyZWFzb24/OiBhbnkpOiB2b2lkIHt9XG59XG5cbi8qKlxuICogQSByZWZlcmVuY2UgdG8gdGhlIG5ld2x5IG9wZW5lZCBtb2RhbCByZXR1cm5lZCBieSB0aGUgYE5nYk1vZGFsLm9wZW4oKWAgbWV0aG9kLlxuICovXG5leHBvcnQgY2xhc3MgTmdiTW9kYWxSZWYge1xuICBwcml2YXRlIF9jbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgX2Rpc21pc3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfaGlkZGVuID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfcmVzb2x2ZTogKHJlc3VsdD86IGFueSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5zdGFuY2Ugb2YgYSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIG1vZGFsIGNvbnRlbnQuXG4gICAqXG4gICAqIFdoZW4gYSBgVGVtcGxhdGVSZWZgIGlzIHVzZWQgYXMgdGhlIGNvbnRlbnQgb3Igd2hlbiB0aGUgbW9kYWwgaXMgY2xvc2VkLCB3aWxsIHJldHVybiBgdW5kZWZpbmVkYC5cbiAgICovXG4gIGdldCBjb21wb25lbnRJbnN0YW5jZSgpOiBhbnkge1xuICAgIGlmICh0aGlzLl9jb250ZW50UmVmICYmIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgbW9kYWwgaXMgY2xvc2VkIGFuZCByZWplY3RlZCB3aGVuIHRoZSBtb2RhbCBpcyBkaXNtaXNzZWQuXG4gICAqL1xuICByZXN1bHQ6IFByb21pc2U8YW55PjtcblxuICAvKipcbiAgICogVGhlIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIHRoZSBtb2RhbCBpcyBjbG9zZWQgdmlhIHRoZSBgLmNsb3NlKClgIG1ldGhvZC5cbiAgICpcbiAgICogSXQgd2lsbCBlbWl0IHRoZSByZXN1bHQgcGFzc2VkIHRvIHRoZSBgLmNsb3NlKClgIG1ldGhvZC5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBnZXQgY2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB0aGlzLl9jbG9zZWQuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlVW50aWwodGhpcy5faGlkZGVuKSk7IH1cblxuICAvKipcbiAgICogVGhlIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIHRoZSBtb2RhbCBpcyBkaXNtaXNzZWQgdmlhIHRoZSBgLmRpc21pc3MoKWAgbWV0aG9kLlxuICAgKlxuICAgKiBJdCB3aWxsIGVtaXQgdGhlIHJlYXNvbiBwYXNzZWQgdG8gdGhlIGAuZGlzbWlzc2VkKClgIG1ldGhvZCBieSB0aGUgdXNlciwgb3Igb25lIG9mIHRoZSBpbnRlcm5hbFxuICAgKiByZWFzb25zIGxpa2UgYmFja2Ryb3AgY2xpY2sgb3IgRVNDIGtleSBwcmVzcy5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBnZXQgZGlzbWlzc2VkKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB0aGlzLl9kaXNtaXNzZWQuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlVW50aWwodGhpcy5faGlkZGVuKSk7IH1cblxuICAvKipcbiAgICogVGhlIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIGJvdGggbW9kYWwgd2luZG93IGFuZCBiYWNrZHJvcCBhcmUgY2xvc2VkIGFuZCBhbmltYXRpb25zIHdlcmUgZmluaXNoZWQuXG4gICAqIEF0IHRoaXMgcG9pbnQgbW9kYWwgYW5kIGJhY2tkcm9wIGVsZW1lbnRzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS5cbiAgICpcbiAgICogVGhpcyBvYnNlcnZhYmxlIHdpbGwgYmUgY29tcGxldGVkIGFmdGVyIGVtaXR0aW5nLlxuICAgKlxuICAgKiBAc2luY2UgOC4wLjBcbiAgICovXG4gIGdldCBoaWRkZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7IHJldHVybiB0aGlzLl9oaWRkZW4uYXNPYnNlcnZhYmxlKCk7IH1cblxuICAvKipcbiAgICogVGhlIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIG1vZGFsIGlzIGZ1bGx5IHZpc2libGUgYW5kIGFuaW1hdGlvbiB3YXMgZmluaXNoZWQuXG4gICAqIE1vZGFsIERPTSBlbGVtZW50IGlzIGFsd2F5cyBhdmFpbGFibGUgc3luY2hyb25vdXNseSBhZnRlciBjYWxsaW5nICdtb2RhbC5vcGVuKCknIHNlcnZpY2UuXG4gICAqXG4gICAqIFRoaXMgb2JzZXJ2YWJsZSB3aWxsIGJlIGNvbXBsZXRlZCBhZnRlciBlbWl0dGluZy5cbiAgICogSXQgd2lsbCBub3QgZW1pdCwgaWYgbW9kYWwgaXMgY2xvc2VkIGJlZm9yZSBvcGVuIGFuaW1hdGlvbiBpcyBmaW5pc2hlZC5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBnZXQgc2hvd24oKTogT2JzZXJ2YWJsZTx2b2lkPiB7IHJldHVybiB0aGlzLl93aW5kb3dDbXB0UmVmLmluc3RhbmNlLnNob3duLmFzT2JzZXJ2YWJsZSgpOyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF93aW5kb3dDbXB0UmVmOiBDb21wb25lbnRSZWY8TmdiTW9kYWxXaW5kb3c+LCBwcml2YXRlIF9jb250ZW50UmVmOiBDb250ZW50UmVmLFxuICAgICAgcHJpdmF0ZSBfYmFja2Ryb3BDbXB0UmVmPzogQ29tcG9uZW50UmVmPE5nYk1vZGFsQmFja2Ryb3A+LCBwcml2YXRlIF9iZWZvcmVEaXNtaXNzPzogRnVuY3Rpb24pIHtcbiAgICBfd2luZG93Q21wdFJlZi5pbnN0YW5jZS5kaXNtaXNzRXZlbnQuc3Vic2NyaWJlKChyZWFzb246IGFueSkgPT4geyB0aGlzLmRpc21pc3MocmVhc29uKTsgfSk7XG5cbiAgICB0aGlzLnJlc3VsdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIHRoaXMucmVzdWx0LnRoZW4obnVsbCwgKCkgPT4ge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2l0aCBhbiBvcHRpb25hbCBgcmVzdWx0YCB2YWx1ZS5cbiAgICpcbiAgICogVGhlIGBOZ2JNb2JhbFJlZi5yZXN1bHRgIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAgICovXG4gIGNsb3NlKHJlc3VsdD86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl93aW5kb3dDbXB0UmVmKSB7XG4gICAgICB0aGlzLl9jbG9zZWQubmV4dChyZXN1bHQpO1xuICAgICAgdGhpcy5fcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgdGhpcy5fcmVtb3ZlTW9kYWxFbGVtZW50cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Rpc21pc3MocmVhc29uPzogYW55KSB7XG4gICAgdGhpcy5fZGlzbWlzc2VkLm5leHQocmVhc29uKTtcbiAgICB0aGlzLl9yZWplY3QocmVhc29uKTtcbiAgICB0aGlzLl9yZW1vdmVNb2RhbEVsZW1lbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzbWlzc2VzIHRoZSBtb2RhbCB3aXRoIGFuIG9wdGlvbmFsIGByZWFzb25gIHZhbHVlLlxuICAgKlxuICAgKiBUaGUgYE5nYk1vZGFsUmVmLnJlc3VsdGAgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuICAgKi9cbiAgZGlzbWlzcyhyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fd2luZG93Q21wdFJlZikge1xuICAgICAgaWYgKCF0aGlzLl9iZWZvcmVEaXNtaXNzKSB7XG4gICAgICAgIHRoaXMuX2Rpc21pc3MocmVhc29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRpc21pc3MgPSB0aGlzLl9iZWZvcmVEaXNtaXNzKCk7XG4gICAgICAgIGlmIChkaXNtaXNzICYmIGRpc21pc3MudGhlbikge1xuICAgICAgICAgIGRpc21pc3MudGhlbihcbiAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzcyhyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKCkgPT4ge30pO1xuICAgICAgICB9IGVsc2UgaWYgKGRpc21pc3MgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5fZGlzbWlzcyhyZWFzb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlTW9kYWxFbGVtZW50cygpIHtcbiAgICBjb25zdCB3aW5kb3dUcmFuc2l0aW9uJCA9IHRoaXMuX3dpbmRvd0NtcHRSZWYuaW5zdGFuY2UuaGlkZSgpO1xuICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbiQgPSB0aGlzLl9iYWNrZHJvcENtcHRSZWYgPyB0aGlzLl9iYWNrZHJvcENtcHRSZWYuaW5zdGFuY2UuaGlkZSgpIDogb2YodW5kZWZpbmVkKTtcblxuICAgIC8vIGhpZGluZyB3aW5kb3dcbiAgICB3aW5kb3dUcmFuc2l0aW9uJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qge25hdGl2ZUVsZW1lbnR9ID0gdGhpcy5fd2luZG93Q21wdFJlZi5sb2NhdGlvbjtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuX3dpbmRvd0NtcHRSZWYuZGVzdHJveSgpO1xuXG4gICAgICBpZiAodGhpcy5fY29udGVudFJlZiAmJiB0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fY29udGVudFJlZi52aWV3UmVmLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fd2luZG93Q21wdFJlZiA9IDxhbnk+bnVsbDtcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYgPSA8YW55Pm51bGw7XG4gICAgfSk7XG5cbiAgICAvLyBoaWRpbmcgYmFja2Ryb3BcbiAgICBiYWNrZHJvcFRyYW5zaXRpb24kLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fYmFja2Ryb3BDbXB0UmVmKSB7XG4gICAgICAgIGNvbnN0IHtuYXRpdmVFbGVtZW50fSA9IHRoaXMuX2JhY2tkcm9wQ21wdFJlZi5sb2NhdGlvbjtcbiAgICAgICAgbmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcENtcHRSZWYuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcENtcHRSZWYgPSA8YW55Pm51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhbGwgZG9uZVxuICAgIHppcCh3aW5kb3dUcmFuc2l0aW9uJCwgYmFja2Ryb3BUcmFuc2l0aW9uJCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGRlbi5uZXh0KCk7XG4gICAgICB0aGlzLl9oaWRkZW4uY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19