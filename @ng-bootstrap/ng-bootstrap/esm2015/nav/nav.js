import { Attribute, ChangeDetectorRef, ContentChildren, Directive, ElementRef, EventEmitter, forwardRef, Inject, Input, Output, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isDefined } from '../util/util';
import { NgbNavConfig } from './nav-config';
import { Key } from '../util/key';
const isValidNavId = (id) => isDefined(id) && id !== '';
const ɵ0 = isValidNavId;
let navCounter = 0;
/**
 * This directive must be used to wrap content to be displayed in the nav.
 *
 * @since 5.2.0
 */
export class NgbNavContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbNavContent.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[ngbNavContent]' },] }
];
NgbNavContent.ctorParameters = () => [
    { type: TemplateRef }
];
/**
 * The directive used to group nav link and related nav content. As well as set nav identifier and some options.
 *
 * @since 5.2.0
 */
export class NgbNavItem {
    constructor(nav, elementRef) {
        this.elementRef = elementRef;
        /**
         * If `true`, the current nav item is disabled and can't be toggled by user.
         *
         * Nevertheless disabled nav can be selected programmatically via the `.select()` method and the `[activeId]` binding.
         */
        this.disabled = false;
        /**
         * An event emitted when the fade in transition is finished on the related nav content
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the fade out transition is finished on the related nav content
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        // TODO: cf https://github.com/angular/angular/issues/30106
        this._nav = nav;
    }
    ngAfterContentChecked() {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.contentTpl = this.contentTpls.first;
    }
    ngOnInit() {
        if (!isDefined(this.domId)) {
            this.domId = `ngb-nav-${navCounter++}`;
        }
    }
    get active() { return this._nav.activeId === this.id; }
    get id() { return isValidNavId(this._id) ? this._id : this.domId; }
    get panelDomId() { return `${this.domId}-panel`; }
    isPanelInDom() {
        return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
    }
}
NgbNavItem.decorators = [
    { type: Directive, args: [{ selector: '[ngbNavItem]', exportAs: 'ngbNavItem', host: { '[class.nav-item]': 'true' } },] }
];
NgbNavItem.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgbNav),] }] },
    { type: ElementRef }
];
NgbNavItem.propDecorators = {
    destroyOnHide: [{ type: Input }],
    disabled: [{ type: Input }],
    domId: [{ type: Input }],
    _id: [{ type: Input, args: ['ngbNavItem',] }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }],
    contentTpls: [{ type: ContentChildren, args: [NgbNavContent, { descendants: false },] }]
};
/**
 * A nav directive that helps with implementing tabbed navigation components.
 *
 * @since 5.2.0
 */
export class NgbNav {
    constructor(role, config, _cd, _document) {
        this.role = role;
        this._cd = _cd;
        this._document = _document;
        /**
         * The event emitted after the active nav changes
         * The payload of the event is the newly active nav id
         *
         * If you want to prevent nav change, you should use `(navChange)` event
         */
        this.activeIdChange = new EventEmitter();
        /**
         * An event emitted when the fade in transition is finished for one of the items.
         *
         * Payload of the event is the nav id that was just shown.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the fade out transition is finished for one of the items.
         *
         * Payload of the event is the nav id that was just hidden.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        this.destroy$ = new Subject();
        this.navItemChange$ = new Subject();
        /**
         * The nav change event emitted right before the nav change happens on user click.
         *
         * This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
         *
         * See [`NgbNavChangeEvent`](#/components/nav/api#NgbNavChangeEvent) for payload details.
         */
        this.navChange = new EventEmitter();
        this.animation = config.animation;
        this.destroyOnHide = config.destroyOnHide;
        this.orientation = config.orientation;
        this.roles = config.roles;
        this.keyboard = config.keyboard;
    }
    click(item) {
        if (!item.disabled) {
            this._updateActiveId(item.id);
        }
    }
    onKeyDown(event) {
        if (this.roles !== 'tablist' || !this.keyboard) {
            return;
        }
        // tslint:disable-next-line: deprecation
        const key = event.which;
        const enabledLinks = this.links.filter(link => !link.navItem.disabled);
        const { length } = enabledLinks;
        let position = -1;
        enabledLinks.forEach((link, index) => {
            if (link.elRef.nativeElement === this._document.activeElement) {
                position = index;
            }
        });
        if (length) {
            switch (key) {
                case Key.ArrowLeft:
                    if (this.orientation === 'vertical') {
                        return;
                    }
                    position = (position - 1 + length) % length;
                    break;
                case Key.ArrowRight:
                    if (this.orientation === 'vertical') {
                        return;
                    }
                    position = (position + 1) % length;
                    break;
                case Key.ArrowDown:
                    if (this.orientation === 'horizontal') {
                        return;
                    }
                    position = (position + 1) % length;
                    break;
                case Key.ArrowUp:
                    if (this.orientation === 'horizontal') {
                        return;
                    }
                    position = (position - 1 + length) % length;
                    break;
                case Key.Home:
                    position = 0;
                    break;
                case Key.End:
                    position = length - 1;
                    break;
            }
            if (this.keyboard === 'changeWithArrows') {
                this.select(enabledLinks[position].navItem.id);
            }
            enabledLinks[position].elRef.nativeElement.focus();
            event.preventDefault();
        }
    }
    /**
     * Selects the nav with the given id and shows its associated pane.
     * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
     */
    select(id) { this._updateActiveId(id, false); }
    ngAfterContentInit() {
        if (!isDefined(this.activeId)) {
            const nextId = this.items.first ? this.items.first.id : null;
            if (isValidNavId(nextId)) {
                this._updateActiveId(nextId, false);
                this._cd.detectChanges();
            }
        }
        this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this._notifyItemChanged(this.activeId));
    }
    ngOnChanges({ activeId }) {
        if (activeId && !activeId.firstChange) {
            this._notifyItemChanged(activeId.currentValue);
        }
    }
    ngOnDestroy() { this.destroy$.next(); }
    _updateActiveId(nextId, emitNavChange = true) {
        if (this.activeId !== nextId) {
            let defaultPrevented = false;
            if (emitNavChange) {
                this.navChange.emit({ activeId: this.activeId, nextId, preventDefault: () => { defaultPrevented = true; } });
            }
            if (!defaultPrevented) {
                this.activeId = nextId;
                this.activeIdChange.emit(nextId);
                this._notifyItemChanged(nextId);
            }
        }
    }
    _notifyItemChanged(nextItemId) { this.navItemChange$.next(this._getItemById(nextItemId)); }
    _getItemById(itemId) {
        return this.items && this.items.find(item => item.id === itemId) || null;
    }
}
NgbNav.decorators = [
    { type: Directive, args: [{
                selector: '[ngbNav]',
                exportAs: 'ngbNav',
                host: {
                    '[class.nav]': 'true',
                    '[class.flex-column]': `orientation === 'vertical'`,
                    '[attr.aria-orientation]': `orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined`,
                    '[attr.role]': `role ? role : roles ? 'tablist' : undefined`,
                    '(keydown.arrowLeft)': 'onKeyDown($event)',
                    '(keydown.arrowRight)': 'onKeyDown($event)',
                    '(keydown.arrowDown)': 'onKeyDown($event)',
                    '(keydown.arrowUp)': 'onKeyDown($event)',
                    '(keydown.Home)': 'onKeyDown($event)',
                    '(keydown.End)': 'onKeyDown($event)'
                }
            },] }
];
NgbNav.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: NgbNavConfig },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NgbNav.propDecorators = {
    activeId: [{ type: Input }],
    activeIdChange: [{ type: Output }],
    animation: [{ type: Input }],
    destroyOnHide: [{ type: Input }],
    orientation: [{ type: Input }],
    roles: [{ type: Input }],
    keyboard: [{ type: Input }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }],
    items: [{ type: ContentChildren, args: [NgbNavItem,] }],
    links: [{ type: ContentChildren, args: [forwardRef(() => NgbNavLink), { descendants: true },] }],
    navChange: [{ type: Output }]
};
/**
 * A directive to put on the nav link.
 *
 * @since 5.2.0
 */
export class NgbNavLink {
    constructor(role, navItem, nav, elRef) {
        this.role = role;
        this.navItem = navItem;
        this.nav = nav;
        this.elRef = elRef;
    }
    hasNavItemClass() {
        // with alternative markup we have to add `.nav-item` class, because `ngbNavItem` is on the ng-container
        return this.navItem.elementRef.nativeElement.nodeType === Node.COMMENT_NODE;
    }
}
NgbNavLink.decorators = [
    { type: Directive, args: [{
                selector: 'a[ngbNavLink]',
                host: {
                    '[id]': 'navItem.domId',
                    '[class.nav-link]': 'true',
                    '[class.nav-item]': 'hasNavItemClass()',
                    '[attr.role]': `role ? role : nav.roles ? 'tab' : undefined`,
                    'href': '',
                    '[class.active]': 'navItem.active',
                    '[class.disabled]': 'navItem.disabled',
                    '[attr.tabindex]': 'navItem.disabled ? -1 : undefined',
                    '[attr.aria-controls]': 'navItem.isPanelInDom() ? navItem.panelDomId : null',
                    '[attr.aria-selected]': 'navItem.active',
                    '[attr.aria-disabled]': 'navItem.disabled',
                    '(click)': 'nav.click(navItem); $event.preventDefault()'
                }
            },] }
];
NgbNavLink.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: NgbNavItem },
    { type: NgbNav },
    { type: ElementRef }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25hdi9uYXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFHTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWhDLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7QUFFN0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBaUJuQjs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLGFBQWE7SUFDeEIsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7O1lBRnJELFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBQzs7O1lBbkNqRCxXQUFXOztBQXlDYjs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLFVBQVU7SUFtRHJCLFlBQThDLEdBQUcsRUFBUyxVQUEyQjtRQUEzQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQTFDckY7Ozs7V0FJRztRQUNNLGFBQVEsR0FBRyxLQUFL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bUNBQW1DO29CQUN0RCxzQkFBc0IsRUFBRSxvREFBb0Q7b0JBQzVFLHNCQUFzQixFQUFFLGdCQUFnQjtvQkFDeEMsc0JBQXNCLEVBQUUsa0JBQWtCO29CQUMxQyxTQUFTLEVBQUUsNkNBQTZDO2lCQUN6RDthQUNGOzs7eUNBR00sU0FBUyxTQUFDLE1BQU07WUFBdUMsVUFBVTtZQUFjLE1BQU07WUFsWjFGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7aXNEZWZpbmVkfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHtOZ2JOYXZDb25maWd9IGZyb20gJy4vbmF2LWNvbmZpZyc7XG5pbXBvcnQge0tleX0gZnJvbSAnLi4vdXRpbC9rZXknO1xuXG5jb25zdCBpc1ZhbGlkTmF2SWQgPSAoaWQ6IGFueSkgPT4gaXNEZWZpbmVkKGlkKSAmJiBpZCAhPT0gJyc7XG5cbmxldCBuYXZDb3VudGVyID0gMDtcblxuLyoqXG4gKiBDb250ZXh0IHBhc3NlZCB0byB0aGUgbmF2IGNvbnRlbnQgdGVtcGxhdGUuXG4gKlxuICogU2VlIFt0aGlzIGRlbW9dKCMvY29tcG9uZW50cy9uYXYvZXhhbXBsZXMja2VlcC1jb250ZW50KSBhcyB0aGUgZXhhbXBsZS5cbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JOYXZDb250ZW50Q29udGV4dCB7XG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGN1cnJlbnQgbmF2IGNvbnRlbnQgaXMgdmlzaWJsZSBhbmQgYWN0aXZlXG4gICAqL1xuICAkaW1wbGljaXQ6IGJvb2xlYW47XG59XG5cblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBtdXN0IGJlIHVzZWQgdG8gd3JhcCBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbmF2LlxuICpcbiAqIEBzaW5jZSA1LjIuMFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW25nYk5hdkNvbnRlbnRdJ30pXG5leHBvcnQgY2xhc3MgTmdiTmF2Q29udGVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuXG4vKipcbiAqIFRoZSBkaXJlY3RpdmUgdXNlZCB0byBncm91cCBuYXYgbGluayBhbmQgcmVsYXRlZCBuYXYgY29udGVudC4gQXMgd2VsbCBhcyBzZXQgbmF2IGlkZW50aWZpZXIgYW5kIHNvbWUgb3B0aW9ucy5cbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbmdiTmF2SXRlbV0nLCBleHBvcnRBczogJ25nYk5hdkl0ZW0nLCBob3N0OiB7J1tjbGFzcy5uYXYtaXRlbV0nOiAndHJ1ZSd9fSlcbmV4cG9ydCBjbGFzcyBOZ2JOYXZJdGVtIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25Jbml0IHtcbiAgcHJpdmF0ZSBfbmF2OiBOZ2JOYXY7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgbm9uLWFjdGl2ZSBjdXJyZW50IG5hdiBpdGVtIGNvbnRlbnQgd2lsbCBiZSByZW1vdmVkIGZyb20gRE9NXG4gICAqIE90aGVyd2lzZSBpdCB3aWxsIGp1c3QgYmUgaGlkZGVuXG4gICAqL1xuICBASW5wdXQoKSBkZXN0cm95T25IaWRlO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjdXJyZW50IG5hdiBpdGVtIGlzIGRpc2FibGVkIGFuZCBjYW4ndCBiZSB0b2dnbGVkIGJ5IHVzZXIuXG4gICAqXG4gICAqIE5ldmVydGhlbGVzcyBkaXNhYmxlZCBuYXYgY2FuIGJlIHNlbGVjdGVkIHByb2dyYW1tYXRpY2FsbHkgdmlhIHRoZSBgLnNlbGVjdCgpYCBtZXRob2QgYW5kIHRoZSBgW2FjdGl2ZUlkXWAgYmluZGluZy5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBpZCB1c2VkIGZvciB0aGUgRE9NIGVsZW1lbnRzLlxuICAgKiBNdXN0IGJlIHVuaXF1ZSBpbnNpZGUgdGhlIGRvY3VtZW50IGluIGNhc2UgeW91IGhhdmUgbXVsdGlwbGUgYG5nYk5hdmBzIG9uIHRoZSBwYWdlLlxuICAgKlxuICAgKiBBdXRvZ2VuZXJhdGVkIGFzIGBuZ2ItbmF2LVhYWGAgaWYgbm90IHByb3ZpZGVkLlxuICAgKi9cbiAgQElucHV0KCkgZG9tSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGlkIHVzZWQgYXMgYSBtb2RlbCBmb3IgYWN0aXZlIG5hdi5cbiAgICogSXQgY2FuIGJlIGFueXRoaW5nLCBidXQgbXVzdCBiZSB1bmlxdWUgaW5zaWRlIG9uZSBgbmdiTmF2YC5cbiAgICpcbiAgICogVGhlIG9ubHkgbGltaXRhdGlvbiBpcyB0aGF0IGl0IGlzIG5vdCBwb3NzaWJsZSB0byBoYXZlIHRoZSBgJydgIChlbXB0eSBzdHJpbmcpIGFzIGlkLFxuICAgKiBiZWNhdXNlIGAgbmdiTmF2SXRlbSBgLCBgbmdiTmF2SXRlbT0nJ2AgYW5kIGBbbmdiTmF2SXRlbV09XCInJ1wiYCBhcmUgaW5kaXN0aW5ndWlzaGFibGVcbiAgICovXG4gIEBJbnB1dCgnbmdiTmF2SXRlbScpIF9pZDogYW55O1xuXG4gIC8qKlxuICAgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGZhZGUgaW4gdHJhbnNpdGlvbiBpcyBmaW5pc2hlZCBvbiB0aGUgcmVsYXRlZCBuYXYgY29udGVudFxuICAgKlxuICAgKiBAc2luY2UgOC4wLjBcbiAgICovXG4gIEBPdXRwdXQoKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBmYWRlIG91dCB0cmFuc2l0aW9uIGlzIGZpbmlzaGVkIG9uIHRoZSByZWxhdGVkIG5hdiBjb250ZW50XG4gICAqXG4gICAqIEBzaW5jZSA4LjAuMFxuICAgKi9cbiAgQE91dHB1dCgpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb250ZW50VHBsOiBOZ2JOYXZDb250ZW50IHwgbnVsbDtcblxuICBAQ29udGVudENoaWxkcmVuKE5nYk5hdkNvbnRlbnQsIHtkZXNjZW5kYW50czogZmFsc2V9KSBjb250ZW50VHBsczogUXVlcnlMaXN0PE5nYk5hdkNvbnRlbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ2JOYXYpKSBuYXYsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPGFueT4pIHtcbiAgICAvLyBUT0RPOiBjZiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zMDEwNlxuICAgIHRoaXMuX25hdiA9IG5hdjtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvLyBXZSBhcmUgdXNpbmcgQENvbnRlbnRDaGlsZHJlbiBpbnN0ZWFkIG9mIEBDb250ZW50Q2hpbGQgYXMgaW4gdGhlIEFuZ3VsYXIgdmVyc2lvbiBiZWluZyB1c2VkXG4gICAgLy8gb25seSBAQ29udGVudENoaWxkcmVuIGFsbG93cyB1cyB0byBzcGVjaWZ5IHRoZSB7ZGVzY2VuZGFudHM6IGZhbHNlfSBvcHRpb24uXG4gICAgLy8gV2l0aG91dCB7ZGVzY2VuZGFudHM6IGZhbHNlfSB3ZSBhcmUgaGl0dGluZyBidWdzIGRlc2NyaWJlZCBpbjpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC9pc3N1ZXMvMjI0MFxuICAgIHRoaXMuY29udGVudFRwbCA9IHRoaXMuY29udGVudFRwbHMuZmlyc3Q7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIWlzRGVmaW5lZCh0aGlzLmRvbUlkKSkge1xuICAgICAgdGhpcy5kb21JZCA9IGBuZ2ItbmF2LSR7bmF2Q291bnRlcisrfWA7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpIHsgcmV0dXJuIHRoaXMuX25hdi5hY3RpdmVJZCA9PT0gdGhpcy5pZDsgfVxuXG4gIGdldCBpZCgpIHsgcmV0dXJuIGlzVmFsaWROYXZJZCh0aGlzLl9pZCkgPyB0aGlzLl9pZCA6IHRoaXMuZG9tSWQ7IH1cblxuICBnZXQgcGFuZWxEb21JZCgpIHsgcmV0dXJuIGAke3RoaXMuZG9tSWR9LXBhbmVsYDsgfVxuXG4gIGlzUGFuZWxJbkRvbSgpIHtcbiAgICByZXR1cm4gKGlzRGVmaW5lZCh0aGlzLmRlc3Ryb3lPbkhpZGUpID8gIXRoaXMuZGVzdHJveU9uSGlkZSA6ICF0aGlzLl9uYXYuZGVzdHJveU9uSGlkZSkgfHwgdGhpcy5hY3RpdmU7XG4gIH1cbn1cblxuXG4vKipcbiAqIEEgbmF2IGRpcmVjdGl2ZSB0aGF0IGhlbHBzIHdpdGggaW1wbGVtZW50aW5nIHRhYmJlZCBuYXZpZ2F0aW9uIGNvbXBvbmVudHMuXG4gKlxuICogQHNpbmNlIDUuMi4wXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2JOYXZdJyxcbiAgZXhwb3J0QXM6ICduZ2JOYXYnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5uYXZdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZmxleC1jb2x1bW5dJzogYG9yaWVudGF0aW9uID09PSAndmVydGljYWwnYCxcbiAgICAnW2F0dHIuYXJpYS1vcmllbnRhdGlvbl0nOiBgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiYgcm9sZXMgPT09ICd0YWJsaXN0JyA/ICd2ZXJ0aWNhbCcgOiB1bmRlZmluZWRgLFxuICAgICdbYXR0ci5yb2xlXSc6IGByb2xlID8gcm9sZSA6IHJvbGVzID8gJ3RhYmxpc3QnIDogdW5kZWZpbmVkYCxcbiAgICAnKGtleWRvd24uYXJyb3dMZWZ0KSc6ICdvbktleURvd24oJGV2ZW50KScsXG4gICAgJyhrZXlkb3duLmFycm93UmlnaHQpJzogJ29uS2V5RG93bigkZXZlbnQpJyxcbiAgICAnKGtleWRvd24uYXJyb3dEb3duKSc6ICdvbktleURvd24oJGV2ZW50KScsXG4gICAgJyhrZXlkb3duLmFycm93VXApJzogJ29uS2V5RG93bigkZXZlbnQpJyxcbiAgICAnKGtleWRvd24uSG9tZSknOiAnb25LZXlEb3duKCRldmVudCknLFxuICAgICcoa2V5ZG93bi5FbmQpJzogJ29uS2V5RG93bigkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE5nYk5hdiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsXG4gICAgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29yaWVudGF0aW9uOiBzdHJpbmc7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yb2xlczogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBuYXYgdGhhdCBzaG91bGQgYmUgYWN0aXZlXG4gICAqXG4gICAqIFlvdSBjb3VsZCBhbHNvIHVzZSB0aGUgYC5zZWxlY3QoKWAgbWV0aG9kIGFuZCB0aGUgYChuYXZDaGFuZ2UpYCBldmVudFxuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlSWQ6IGFueTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGFjdGl2ZSBuYXYgY2hhbmdlc1xuICAgKiBUaGUgcGF5bG9hZCBvZiB0aGUgZXZlbnQgaXMgdGhlIG5ld2x5IGFjdGl2ZSBuYXYgaWRcbiAgICpcbiAgICogSWYgeW91IHdhbnQgdG8gcHJldmVudCBuYXYgY2hhbmdlLCB5b3Ugc2hvdWxkIHVzZSBgKG5hdkNoYW5nZSlgIGV2ZW50XG4gICAqL1xuICBAT3V0cHV0KCkgYWN0aXZlSWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBuYXYgY2hhbmdlIHdpbGwgYmUgYW5pbWF0ZWQuXG4gICAqXG4gICAqIEBzaW5jZSA4LjAuMFxuICAgKi9cbiAgQElucHV0KCkgYW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIG5vbi1hY3RpdmUgbmF2IGNvbnRlbnQgd2lsbCBiZSByZW1vdmVkIGZyb20gRE9NXG4gICAqIE90aGVyd2lzZSBpdCB3aWxsIGp1c3QgYmUgaGlkZGVuXG4gICAqL1xuICBASW5wdXQoKSBkZXN0cm95T25IaWRlO1xuXG4gIC8qKlxuICAgKiBUaGUgb3JpZW50YXRpb24gb2YgbmF2cy5cbiAgICpcbiAgICogVXNpbmcgYHZlcnRpY2FsYCB3aWxsIGFsc28gYWRkIHRoZSBgYXJpYS1vcmllbnRhdGlvbmAgYXR0cmlidXRlXG4gICAqL1xuICBASW5wdXQoKSBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcblxuICAvKipcbiAgICogUm9sZSBhdHRyaWJ1dGUgZ2VuZXJhdGluZyBzdHJhdGVneTpcbiAgICogLSBgZmFsc2VgIC0gbm8gcm9sZSBhdHRyaWJ1dGVzIHdpbGwgYmUgZ2VuZXJhdGVkXG4gICAqIC0gYCd0YWJsaXN0J2AgLSAndGFibGlzdCcsICd0YWInIGFuZCAndGFicGFuZWwnIHdpbGwgYmUgZ2VuZXJhdGVkIChkZWZhdWx0KVxuICAgKi9cbiAgQElucHV0KCkgcm9sZXM6ICd0YWJsaXN0JyB8IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBLZXlib2FyZCBzdXBwb3J0IGZvciBuYXYgZm9jdXMvc2VsZWN0aW9uIHVzaW5nIGFycm93IGtleXMuXG4gICAqXG4gICAqICogYGZhbHNlYCAtIG5vIGtleWJvYXJkIHN1cHBvcnQuXG4gICAqICogYHRydWVgIC0gbmF2cyB3aWxsIGJlIGZvY3VzZWQgdXNpbmcga2V5Ym9hcmQgYXJyb3cga2V5c1xuICAgKiAqIGAnY2hhbmdlV2l0aEFycm93cydgIC0gIG5hdiB3aWxsIGJlIHNlbGVjdGVkIHVzaW5nIGtleWJvYXJkIGFycm93IGtleXNcbiAgICpcbiAgICogU2VlIHRoZSBbbGlzdCBvZiBhdmFpbGFibGUga2V5Ym9hcmQgc2hvcnRjdXRzXSgjL2NvbXBvbmVudHMvbmF2L292ZXJ2aWV3I2tleWJvYXJkLXNob3J0Y3V0cykuXG4gICAqXG4gICAqIEBzaW5jZSA2LjEuMFxuICovXG4gIEBJbnB1dCgpIGtleWJvYXJkOiBib29sZWFuIHwgJ2NoYW5nZVdpdGhBcnJvd3MnO1xuXG4gIC8qKlxuICAgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGZhZGUgaW4gdHJhbnNpdGlvbiBpcyBmaW5pc2hlZCBmb3Igb25lIG9mIHRoZSBpdGVtcy5cbiAgICpcbiAgICogUGF5bG9hZCBvZiB0aGUgZXZlbnQgaXMgdGhlIG5hdiBpZCB0aGF0IHdhcyBqdXN0IHNob3duLlxuICAgKlxuICAgKiBAc2luY2UgOC4wLjBcbiAgICovXG4gIEBPdXRwdXQoKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGZhZGUgb3V0IHRyYW5zaXRpb24gaXMgZmluaXNoZWQgZm9yIG9uZSBvZiB0aGUgaXRlbXMuXG4gICAqXG4gICAqIFBheWxvYWQgb2YgdGhlIGV2ZW50IGlzIHRoZSBuYXYgaWQgdGhhdCB3YXMganVzdCBoaWRkZW4uXG4gICAqXG4gICAqIEBzaW5jZSA4LjAuMFxuICAgKi9cbiAgQE91dHB1dCgpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiTmF2SXRlbSkgaXRlbXM6IFF1ZXJ5TGlzdDxOZ2JOYXZJdGVtPjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IE5nYk5hdkxpbmspLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBsaW5rczogUXVlcnlMaXN0PE5nYk5hdkxpbms+O1xuXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbmF2SXRlbUNoYW5nZSQgPSBuZXcgU3ViamVjdDxOZ2JOYXZJdGVtIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBBdHRyaWJ1dGUoJ3JvbGUnKSBwdWJsaWMgcm9sZTogc3RyaW5nLCBjb25maWc6IE5nYk5hdkNvbmZpZywgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuYW5pbWF0aW9uID0gY29uZmlnLmFuaW1hdGlvbjtcbiAgICB0aGlzLmRlc3Ryb3lPbkhpZGUgPSBjb25maWcuZGVzdHJveU9uSGlkZTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gY29uZmlnLm9yaWVudGF0aW9uO1xuICAgIHRoaXMucm9sZXMgPSBjb25maWcucm9sZXM7XG4gICAgdGhpcy5rZXlib2FyZCA9IGNvbmZpZy5rZXlib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2IGNoYW5nZSBldmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSB0aGUgbmF2IGNoYW5nZSBoYXBwZW5zIG9uIHVzZXIgY2xpY2suXG4gICAqXG4gICAqIFRoaXMgZXZlbnQgd29uJ3QgYmUgZW1pdHRlZCBpZiBuYXYgaXMgY2hhbmdlZCBwcm9ncmFtbWF0aWNhbGx5IHZpYSBgW2FjdGl2ZUlkXWAgb3IgYC5zZWxlY3QoKWAuXG4gICAqXG4gICAqIFNlZSBbYE5nYk5hdkNoYW5nZUV2ZW50YF0oIy9jb21wb25lbnRzL25hdi9hcGkjTmdiTmF2Q2hhbmdlRXZlbnQpIGZvciBwYXlsb2FkIGRldGFpbHMuXG4gICAqL1xuICBAT3V0cHV0KCkgbmF2Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2JOYXZDaGFuZ2VFdmVudD4oKTtcblxuICBjbGljayhpdGVtOiBOZ2JOYXZJdGVtKSB7XG4gICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl91cGRhdGVBY3RpdmVJZChpdGVtLmlkKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5yb2xlcyAhPT0gJ3RhYmxpc3QnIHx8ICF0aGlzLmtleWJvYXJkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICBjb25zdCBrZXkgPSBldmVudC53aGljaDtcbiAgICBjb25zdCBlbmFibGVkTGlua3MgPSB0aGlzLmxpbmtzLmZpbHRlcihsaW5rID0+ICFsaW5rLm5hdkl0ZW0uZGlzYWJsZWQpO1xuICAgIGNvbnN0IHtsZW5ndGh9ID0gZW5hYmxlZExpbmtzO1xuXG4gICAgbGV0IHBvc2l0aW9uID0gLTE7XG5cbiAgICBlbmFibGVkTGlua3MuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChsaW5rLmVsUmVmLm5hdGl2ZUVsZW1lbnQgPT09IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgS2V5LkFycm93TGVmdDpcbiAgICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb3NpdGlvbiA9IChwb3NpdGlvbiAtIDEgKyBsZW5ndGgpICUgbGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleS5BcnJvd1JpZ2h0OlxuICAgICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uID0gKHBvc2l0aW9uICsgMSkgJSBsZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS2V5LkFycm93RG93bjpcbiAgICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uID0gKHBvc2l0aW9uICsgMSkgJSBsZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS2V5LkFycm93VXA6XG4gICAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb3NpdGlvbiA9IChwb3NpdGlvbiAtIDEgKyBsZW5ndGgpICUgbGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleS5Ib21lOlxuICAgICAgICAgIHBvc2l0aW9uID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLZXkuRW5kOlxuICAgICAgICAgIHBvc2l0aW9uID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmtleWJvYXJkID09PSAnY2hhbmdlV2l0aEFycm93cycpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoZW5hYmxlZExpbmtzW3Bvc2l0aW9uXS5uYXZJdGVtLmlkKTtcbiAgICAgIH1cbiAgICAgIGVuYWJsZWRMaW5rc1twb3NpdGlvbl0uZWxSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBuYXYgd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIHNob3dzIGl0cyBhc3NvY2lhdGVkIHBhbmUuXG4gICAqIEFueSBvdGhlciBuYXYgdGhhdCB3YXMgcHJldmlvdXNseSBzZWxlY3RlZCBiZWNvbWVzIHVuc2VsZWN0ZWQgYW5kIGl0cyBhc3NvY2lhdGVkIHBhbmUgaXMgaGlkZGVuLlxuICAgKi9cbiAgc2VsZWN0KGlkOiBhbnkpIHsgdGhpcy5fdXBkYXRlQWN0aXZlSWQoaWQsIGZhbHNlKTsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIWlzRGVmaW5lZCh0aGlzLmFjdGl2ZUlkKSkge1xuICAgICAgY29uc3QgbmV4dElkID0gdGhpcy5pdGVtcy5maXJzdCA/IHRoaXMuaXRlbXMuZmlyc3QuaWQgOiBudWxsO1xuICAgICAgaWYgKGlzVmFsaWROYXZJZChuZXh0SWQpKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZUlkKG5leHRJZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVtcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbm90aWZ5SXRlbUNoYW5nZWQodGhpcy5hY3RpdmVJZCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoe2FjdGl2ZUlkfTogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChhY3RpdmVJZCAmJiAhYWN0aXZlSWQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuX25vdGlmeUl0ZW1DaGFuZ2VkKGFjdGl2ZUlkLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7IHRoaXMuZGVzdHJveSQubmV4dCgpOyB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQWN0aXZlSWQobmV4dElkOiBhbnksIGVtaXROYXZDaGFuZ2UgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlSWQgIT09IG5leHRJZCkge1xuICAgICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGVtaXROYXZDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5uYXZDaGFuZ2UuZW1pdCh7YWN0aXZlSWQ6IHRoaXMuYWN0aXZlSWQsIG5leHRJZCwgcHJldmVudERlZmF1bHQ6ICgpID0+IHsgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7IH19KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSWQgPSBuZXh0SWQ7XG4gICAgICAgIHRoaXMuYWN0aXZlSWRDaGFuZ2UuZW1pdChuZXh0SWQpO1xuICAgICAgICB0aGlzLl9ub3RpZnlJdGVtQ2hhbmdlZChuZXh0SWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vdGlmeUl0ZW1DaGFuZ2VkKG5leHRJdGVtSWQ6IGFueSkgeyB0aGlzLm5hdkl0ZW1DaGFuZ2UkLm5leHQodGhpcy5fZ2V0SXRlbUJ5SWQobmV4dEl0ZW1JZCkpOyB9XG5cbiAgcHJpdmF0ZSBfZ2V0SXRlbUJ5SWQoaXRlbUlkOiBhbnkpOiBOZ2JOYXZJdGVtIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaXRlbUlkKSB8fCBudWxsO1xuICB9XG59XG5cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byBwdXQgb24gdGhlIG5hdiBsaW5rLlxuICpcbiAqIEBzaW5jZSA1LjIuMFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhW25nYk5hdkxpbmtdJyxcbiAgaG9zdDoge1xuICAgICdbaWRdJzogJ25hdkl0ZW0uZG9tSWQnLFxuICAgICdbY2xhc3MubmF2LWxpbmtdJzogJ3RydWUnLFxuICAgICdbY2xhc3MubmF2LWl0ZW1dJzogJ2hhc05hdkl0ZW1DbGFzcygpJyxcbiAgICAnW2F0dHIucm9sZV0nOiBgcm9sZSA/IHJvbGUgOiBuYXYucm9sZXMgPyAndGFiJyA6IHVuZGVmaW5lZGAsXG4gICAgJ2hyZWYnOiAnJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnbmF2SXRlbS5hY3RpdmUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ25hdkl0ZW0uZGlzYWJsZWQnLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnbmF2SXRlbS5kaXNhYmxlZCA/IC0xIDogdW5kZWZpbmVkJyxcbiAgICAnW2F0dHIuYXJpYS1jb250cm9sc10nOiAnbmF2SXRlbS5pc1BhbmVsSW5Eb20oKSA/IG5hdkl0ZW0ucGFuZWxEb21JZCA6IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLXNlbGVjdGVkXSc6ICduYXZJdGVtLmFjdGl2ZScsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ25hdkl0ZW0uZGlzYWJsZWQnLFxuICAgICcoY2xpY2spJzogJ25hdi5jbGljayhuYXZJdGVtKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTmdiTmF2TGluayB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgQEF0dHJpYnV0ZSgncm9sZScpIHB1YmxpYyByb2xlOiBzdHJpbmcsIHB1YmxpYyBuYXZJdGVtOiBOZ2JOYXZJdGVtLCBwdWJsaWMgbmF2OiBOZ2JOYXYsXG4gICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgaGFzTmF2SXRlbUNsYXNzKCkge1xuICAgIC8vIHdpdGggYWx0ZXJuYXRpdmUgbWFya3VwIHdlIGhhdmUgdG8gYWRkIGAubmF2LWl0ZW1gIGNsYXNzLCBiZWNhdXNlIGBuZ2JOYXZJdGVtYCBpcyBvbiB0aGUgbmctY29udGFpbmVyXG4gICAgcmV0dXJuIHRoaXMubmF2SXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFO1xuICB9XG59XG5cblxuLyoqXG4gKiBUaGUgcGF5bG9hZCBvZiB0aGUgY2hhbmdlIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRoZSBuYXYgY2hhbmdlIGhhcHBlbnMgb24gdXNlciBjbGljay5cbiAqXG4gKiBUaGlzIGV2ZW50IHdvbid0IGJlIGVtaXR0ZWQgaWYgbmF2IGlzIGNoYW5nZWQgcHJvZ3JhbW1hdGljYWxseSB2aWEgYFthY3RpdmVJZF1gIG9yIGAuc2VsZWN0KClgLlxuICpcbiAqIEBzaW5jZSA1LjIuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYk5hdkNoYW5nZUV2ZW50PFQgPSBhbnk+IHtcbiAgLyoqXG4gICAqIElkIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIG5hdi5cbiAgICovXG4gIGFjdGl2ZUlkOiBUO1xuXG4gIC8qKlxuICAgKiBJZCBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgbmF2LlxuICAgKi9cbiAgbmV4dElkOiBUO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgcHJldmVudCBuYXYgY2hhbmdlIGlmIGNhbGxlZC5cbiAgICovXG4gIHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkO1xufVxuIl19