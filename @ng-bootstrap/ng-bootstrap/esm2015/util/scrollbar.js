import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const noop = () => { };
const ɵ0 = noop;
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */
export class ScrollBar {
    constructor(_document) {
        this._document = _document;
    }
    /**
     * To be called right before a potential vertical scrollbar would be removed:
     *
     * - if there was a scrollbar, adds some compensation padding to the body
     * to keep the same layout as when the scrollbar is there
     * - if there was none, there is nothing to do
     *
     * @return a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    compensate() {
        const width = this._getWidth();
        return !this._isPresent(width) ? noop : this._adjustBody(width);
    }
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @return a callback used to revert the padding to its previous value
     */
    _adjustBody(scrollbarWidth) {
        const body = this._document.body;
        const userSetPaddingStyle = body.style.paddingRight;
        const actualPadding = parseFloat(window.getComputedStyle(body)['padding-right']);
        body.style['padding-right'] = `${actualPadding + scrollbarWidth}px`;
        return () => body.style['padding-right'] = userSetPaddingStyle;
    }
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @return true if scrollbar is present, false otherwise
     */
    _isPresent(scrollbarWidth) {
        const rect = this._document.body.getBoundingClientRect();
        const bodyToViewportGap = window.innerWidth - (rect.left + rect.right);
        const uncertainty = 0.1 * scrollbarWidth;
        return bodyToViewportGap >= scrollbarWidth - uncertainty;
    }
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @return the width of a scrollbar on this page
     */
    _getWidth() {
        const measurer = this._document.createElement('div');
        measurer.className = 'modal-scrollbar-measure';
        const body = this._document.body;
        body.appendChild(measurer);
        const width = measurer.getBoundingClientRect().width - measurer.clientWidth;
        body.removeChild(measurer);
        return width;
    }
}
ScrollBar.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollBar_Factory() { return new ScrollBar(i0.ɵɵinject(i1.DOCUMENT)); }, token: ScrollBar, providedIn: "root" });
ScrollBar.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ScrollBar.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvc2Nyb2xsYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBR3pDLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQzs7QUFTdEI7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sU0FBUztJQUNwQixZQUFzQyxTQUFjO1FBQWQsY0FBUyxHQUFULFNBQVMsQ0FBSztJQUFHLENBQUM7SUFFeEQ7Ozs7Ozs7OztPQVNHO0lBQ0gsVUFBVTtRQUNSLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssV0FBVyxDQUFDLGNBQXNCO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2pDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDcEQsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxhQUFhLEdBQUcsY0FBYyxJQUFJLENBQUM7UUFDcEUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssVUFBVSxDQUFDLGNBQXNCO1FBQ3ZDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDekQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsTUFBTSxXQUFXLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxPQUFPLGlCQUFpQixJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxTQUFTO1FBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsUUFBUSxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztRQUUvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzVFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7O1lBM0RGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs0Q0FFakIsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuXG5cbi8qKiBUeXBlIGZvciB0aGUgY2FsbGJhY2sgdXNlZCB0byByZXZlcnQgdGhlIHNjcm9sbGJhciBjb21wZW5zYXRpb24uICovXG5leHBvcnQgdHlwZSBDb21wZW5zYXRpb25SZXZlcnRlciA9ICgpID0+IHZvaWQ7XG5cblxuXG4vKipcbiAqIFV0aWxpdHkgdG8gaGFuZGxlIHRoZSBzY3JvbGxiYXIuXG4gKlxuICogSXQgYWxsb3dzIHRvIGNvbXBlbnNhdGUgdGhlIGxhY2sgb2YgYSB2ZXJ0aWNhbCBzY3JvbGxiYXIgYnkgYWRkaW5nIGFuXG4gKiBlcXVpdmFsZW50IHBhZGRpbmcgb24gdGhlIHJpZ2h0IG9mIHRoZSBib2R5LCBhbmQgdG8gcmVtb3ZlIHRoaXMgY29tcGVuc2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxCYXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBUbyBiZSBjYWxsZWQgcmlnaHQgYmVmb3JlIGEgcG90ZW50aWFsIHZlcnRpY2FsIHNjcm9sbGJhciB3b3VsZCBiZSByZW1vdmVkOlxuICAgKlxuICAgKiAtIGlmIHRoZXJlIHdhcyBhIHNjcm9sbGJhciwgYWRkcyBzb21lIGNvbXBlbnNhdGlvbiBwYWRkaW5nIHRvIHRoZSBib2R5XG4gICAqIHRvIGtlZXAgdGhlIHNhbWUgbGF5b3V0IGFzIHdoZW4gdGhlIHNjcm9sbGJhciBpcyB0aGVyZVxuICAgKiAtIGlmIHRoZXJlIHdhcyBub25lLCB0aGVyZSBpcyBub3RoaW5nIHRvIGRvXG4gICAqXG4gICAqIEByZXR1cm4gYSBjYWxsYmFjayB1c2VkIHRvIHJldmVydCB0aGUgY29tcGVuc2F0aW9uIChub29wIGlmIHRoZXJlIHdhcyBub25lLFxuICAgKiBvdGhlcndpc2UgYSBmdW5jdGlvbiByZW1vdmluZyB0aGUgcGFkZGluZylcbiAgICovXG4gIGNvbXBlbnNhdGUoKTogQ29tcGVuc2F0aW9uUmV2ZXJ0ZXIge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fZ2V0V2lkdGgoKTtcbiAgICByZXR1cm4gIXRoaXMuX2lzUHJlc2VudCh3aWR0aCkgPyBub29wIDogdGhpcy5fYWRqdXN0Qm9keSh3aWR0aCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBhZGRpbmcgb2YgdGhlIGdpdmVuIHdpZHRoIG9uIHRoZSByaWdodCBvZiB0aGUgYm9keS5cbiAgICpcbiAgICogQHJldHVybiBhIGNhbGxiYWNrIHVzZWQgdG8gcmV2ZXJ0IHRoZSBwYWRkaW5nIHRvIGl0cyBwcmV2aW91cyB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBfYWRqdXN0Qm9keShzY3JvbGxiYXJXaWR0aDogbnVtYmVyKTogQ29tcGVuc2F0aW9uUmV2ZXJ0ZXIge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9kb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IHVzZXJTZXRQYWRkaW5nU3R5bGUgPSBib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5KVsncGFkZGluZy1yaWdodCddKTtcbiAgICBib2R5LnN0eWxlWydwYWRkaW5nLXJpZ2h0J10gPSBgJHthY3R1YWxQYWRkaW5nICsgc2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIHJldHVybiAoKSA9PiBib2R5LnN0eWxlWydwYWRkaW5nLXJpZ2h0J10gPSB1c2VyU2V0UGFkZGluZ1N0eWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIHdoZXRoZXIgYSBzY3JvbGxiYXIgaXMgY3VycmVudGx5IHByZXNlbnQgb24gdGhlIGJvZHkuXG4gICAqXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiBzY3JvbGxiYXIgaXMgcHJlc2VudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBwcml2YXRlIF9pc1ByZXNlbnQoc2Nyb2xsYmFyV2lkdGg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9kb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvZHlUb1ZpZXdwb3J0R2FwID0gd2luZG93LmlubmVyV2lkdGggLSAocmVjdC5sZWZ0ICsgcmVjdC5yaWdodCk7XG4gICAgY29uc3QgdW5jZXJ0YWludHkgPSAwLjEgKiBzY3JvbGxiYXJXaWR0aDtcbiAgICByZXR1cm4gYm9keVRvVmlld3BvcnRHYXAgPj0gc2Nyb2xsYmFyV2lkdGggLSB1bmNlcnRhaW50eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIGFuZCByZXR1cm5zIHRoZSB3aWR0aCBvZiBhIHNjcm9sbGJhci5cbiAgICpcbiAgICogQHJldHVybiB0aGUgd2lkdGggb2YgYSBzY3JvbGxiYXIgb24gdGhpcyBwYWdlXG4gICAqL1xuICBwcml2YXRlIF9nZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IG1lYXN1cmVyID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVhc3VyZXIuY2xhc3NOYW1lID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJztcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9kb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVhc3VyZXIpO1xuICAgIGNvbnN0IHdpZHRoID0gbWVhc3VyZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBtZWFzdXJlci5jbGllbnRXaWR0aDtcbiAgICBib2R5LnJlbW92ZUNoaWxkKG1lYXN1cmVyKTtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxufVxuIl19