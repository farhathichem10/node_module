/** Type for the callback used to revert the scrollbar compensation. */
import * as ɵngcc0 from '@angular/core';
export declare type CompensationReverter = () => void;
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */
export declare class ScrollBar {
    private _document;
    constructor(_document: any);
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
    compensate(): CompensationReverter;
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @return a callback used to revert the padding to its previous value
     */
    private _adjustBody;
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @return true if scrollbar is present, false otherwise
     */
    private _isPresent;
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @return the width of a scrollbar on this page
     */
    private _getWidth;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ScrollBar, never>;
}

//# sourceMappingURL=scrollbar.d.ts.map