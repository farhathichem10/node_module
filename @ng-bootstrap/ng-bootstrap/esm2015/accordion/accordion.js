import { ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, TemplateRef, ViewEncapsulation, NgZone, } from '@angular/core';
import { isString } from '../util/util';
import { NgbAccordionConfig } from './accordion-config';
import { ngbRunTransition } from '../util/transition/ngbTransition';
import { ngbCollapsingTransition } from '../util/transition/ngbCollapseTransition';
import { take } from 'rxjs/operators';
let nextId = 0;
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */
export class NgbPanelHeader {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelHeader.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[ngbPanelHeader]' },] }
];
NgbPanelHeader.ctorParameters = () => [
    { type: TemplateRef }
];
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
export class NgbPanelTitle {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelTitle.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[ngbPanelTitle]' },] }
];
NgbPanelTitle.ctorParameters = () => [
    { type: TemplateRef }
];
/**
 * A directive that wraps the accordion panel content.
 */
export class NgbPanelContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelContent.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[ngbPanelContent]' },] }
];
NgbPanelContent.ctorParameters = () => [
    { type: TemplateRef }
];
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
export class NgbPanel {
    constructor() {
        /**
         *  If `true`, the panel is disabled an can't be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel that must be unique on the page.
         *
         *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
         */
        this.id = `ngb-panel-${nextId++}`;
        this.isOpen = false;
        /* A flag to specified that the transition panel classes have been initialized */
        this.initClassDone = false;
        /* A flag to specified if the panel is currently being animated, to ensure its presence in the dom */
        this.transitionRunning = false;
        /**
         * An event emitted when the panel is shown, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the panel is hidden, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
    }
    ngAfterContentChecked() {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.headerTpl = this.headerTpls.first;
        this.contentTpl = this.contentTpls.first;
    }
}
NgbPanel.decorators = [
    { type: Directive, args: [{ selector: 'ngb-panel' },] }
];
NgbPanel.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    title: [{ type: Input }],
    type: [{ type: Input }],
    cardClass: [{ type: Input }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }],
    titleTpls: [{ type: ContentChildren, args: [NgbPanelTitle, { descendants: false },] }],
    headerTpls: [{ type: ContentChildren, args: [NgbPanelHeader, { descendants: false },] }],
    contentTpls: [{ type: ContentChildren, args: [NgbPanelContent, { descendants: false },] }]
};
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
export class NgbAccordion {
    constructor(config, _element, _ngZone, _changeDetector) {
        this._element = _element;
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        /**
         * An array or comma separated strings of panel ids that should be opened **initially**.
         *
         * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
         * the `(panelChange)` event.
         */
        this.activeIds = [];
        /**
         * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
         */
        this.destroyOnHide = true;
        /**
         * Event emitted right before the panel toggle happens.
         *
         * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
         */
        this.panelChange = new EventEmitter();
        /**
         * An event emitted when the expanding animation is finished on the panel. The payload is the panel id.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the collapsing animation is finished on the panel, and before the panel element is removed.
         * The payload is the panel id.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        this.animation = config.animation;
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Checks if a panel with a given id is expanded.
     */
    isExpanded(panelId) { return this.activeIds.indexOf(panelId) > -1; }
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     */
    expand(panelId) { this._changeOpenState(this._findPanelById(panelId), true); }
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     */
    expandAll() {
        if (this.closeOtherPanels) {
            if (this.activeIds.length === 0 && this.panels.length) {
                this._changeOpenState(this.panels.first, true);
            }
        }
        else {
            this.panels.forEach(panel => this._changeOpenState(panel, true));
        }
    }
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     */
    collapse(panelId) { this._changeOpenState(this._findPanelById(panelId), false); }
    /**
     * Collapses all opened panels.
     */
    collapseAll() {
        this.panels.forEach((panel) => { this._changeOpenState(panel, false); });
    }
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     */
    toggle(panelId) {
        const panel = this._findPanelById(panelId);
        if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
        }
    }
    ngAfterContentChecked() {
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach(panel => { panel.isOpen = !panel.disabled && this.activeIds.indexOf(panel.id) > -1; });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0], false);
            this._updateActiveIds();
        }
        // Setup the initial classes here
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.panels.forEach(panel => {
                const panelElement = this._getPanelElement(panel.id);
                if (panelElement) {
                    if (!panel.initClassDone) {
                        panel.initClassDone = true;
                        ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
                            animation: false,
                            runningTransition: 'continue',
                            context: { direction: panel.isOpen ? 'show' : 'hide' }
                        });
                    }
                }
                else {
                    // Classes must be initialized next time it will be in the dom
                    panel.initClassDone = false;
                }
            });
        });
    }
    _changeOpenState(panel, nextState) {
        if (panel != null && !panel.disabled && panel.isOpen !== nextState) {
            let defaultPrevented = false;
            this.panelChange.emit({ panelId: panel.id, nextState: nextState, preventDefault: () => { defaultPrevented = true; } });
            if (!defaultPrevented) {
                panel.isOpen = nextState;
                panel.transitionRunning = true;
                if (nextState && this.closeOtherPanels) {
                    this._closeOthers(panel.id);
                }
                this._updateActiveIds();
                this._runTransitions(this.animation);
            }
        }
    }
    _closeOthers(panelId, enableTransition = true) {
        this.panels.forEach(panel => {
            if (panel.id !== panelId && panel.isOpen) {
                panel.isOpen = false;
                panel.transitionRunning = enableTransition;
            }
        });
    }
    _findPanelById(panelId) { return this.panels.find(p => p.id === panelId) || null; }
    _updateActiveIds() {
        this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
    }
    _runTransitions(animation) {
        // detectChanges is performed to ensure that all panels are in the dom (via transitionRunning = true)
        // before starting the animation
        this._changeDetector.detectChanges();
        this.panels.forEach(panel => {
            // When panel.transitionRunning is true, the transition needs to be started OR reversed,
            // The direction (show or hide) is choosen by each panel.isOpen state
            if (panel.transitionRunning) {
                const panelElement = this._getPanelElement(panel.id);
                ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
                    animation,
                    runningTransition: 'stop',
                    context: { direction: panel.isOpen ? 'show' : 'hide' }
                }).subscribe(() => {
                    panel.transitionRunning = false;
                    const { id } = panel;
                    if (panel.isOpen) {
                        panel.shown.emit();
                        this.shown.emit(id);
                    }
                    else {
                        panel.hidden.emit();
                        this.hidden.emit(id);
                    }
                });
            }
        });
    }
    _getPanelElement(panelId) {
        return this._element.nativeElement.querySelector('#' + panelId);
    }
}
NgbAccordion.decorators = [
    { type: Component, args: [{
                selector: 'ngb-accordion',
                exportAs: 'ngbAccordion',
                encapsulation: ViewEncapsulation.None,
                host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                template: `
    <ng-template #t ngbPanelHeader let-panel>
      <button class="btn btn-link" [ngbPanelToggle]="panel">
        {{panel.title}}<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
      </button>
    </ng-template>
    <ng-template ngFor let-panel [ngForOf]="panels">
      <div [class]="'card ' + (panel.cardClass || '')">
        <div role="tab" id="{{panel.id}}-header" [class]="'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')">
          <ng-template [ngTemplateOutlet]="panel.headerTpl?.templateRef || t"
                       [ngTemplateOutletContext]="{$implicit: panel, opened: panel.isOpen}"></ng-template>
        </div>
        <div id="{{panel.id}}" role="tabpanel" [attr.aria-labelledby]="panel.id + '-header'"
             *ngIf="!destroyOnHide || panel.isOpen || panel.transitionRunning">
          <div class="card-body">
               <ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef || null"></ng-template>
          </div>
        </div>
      </div>
    </ng-template>
  `
            },] }
];
NgbAccordion.ctorParameters = () => [
    { type: NgbAccordionConfig },
    { type: ElementRef },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
NgbAccordion.propDecorators = {
    panels: [{ type: ContentChildren, args: [NgbPanel,] }],
    animation: [{ type: Input }],
    activeIds: [{ type: Input }],
    closeOtherPanels: [{ type: Input, args: ['closeOthers',] }],
    destroyOnHide: [{ type: Input }],
    type: [{ type: Input }],
    panelChange: [{ type: Output }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }]
};
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * @since 4.1.0
 */
export class NgbPanelToggle {
    constructor(accordion, panel) {
        this.accordion = accordion;
        this.panel = panel;
    }
    set ngbPanelToggle(panel) {
        if (panel) {
            this.panel = panel;
        }
    }
}
NgbPanelToggle.decorators = [
    { type: Directive, args: [{
                selector: 'button[ngbPanelToggle]',
                host: {
                    'type': 'button',
                    '[disabled]': 'panel.disabled',
                    '[class.collapsed]': '!panel.isOpen',
                    '[attr.aria-expanded]': 'panel.isOpen',
                    '[attr.aria-controls]': 'panel.id',
                    '(click)': 'accordion.toggle(panel.id)'
                }
            },] }
];
NgbPanelToggle.ctorParameters = () => [
    { type: NgbAccordion },
    { type: NgbPanel, decorators: [{ type: Optional }, { type: Host }] }
];
NgbPanelToggle.propDecorators = {
    ngbPanelToggle: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FjY29yZGlvbi9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXRDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFjZjs7Ozs7Ozs7R0FRRztBQUVILE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7OztZQUZyRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsNkJBQTZCLEVBQUM7OztZQW5DbEQsV0FBVzs7QUF3Q2I7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7OztZQUZyRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUM7OztZQTdDakQsV0FBVzs7QUFrRGI7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFtQixXQUE2QjtRQUE3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T3hCLEtBQUs7d0JBUUwsS0FBSzsrQkFPTCxLQUFLLFNBQUMsYUFBYTs0QkFLbkIsS0FBSzttQkFRTCxLQUFLOzBCQU9MLE1BQU07b0JBT04sTUFBTTtxQkFRTixNQUFNOztBQXdLVDs7Ozs7O0dBTUc7QUFZSCxNQUFNLE9BQU8sY0FBYztJQVV6QixZQUFtQixTQUF1QixFQUE2QixLQUFlO1FBQW5FLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBNkIsVUFBSyxHQUFMLEtBQUssQ0FBVTtJQUFHLENBQUM7SUFQMUYsSUFDSSxjQUFjLENBQUMsS0FBZTtRQUNoQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxJQUFJLEVBQUU7b0JBQ0osTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLFlBQVksRUFBRSxnQkFBZ0I7b0JBQzlCLG1CQUFtQixFQUFFLGVBQWU7b0JBQ3BDLHNCQUFzQixFQUFFLGNBQWM7b0JBQ3RDLHNCQUFzQixFQUFFLFVBQVU7b0JBQ2xDLFNBQVMsRUFBRSw0QkFBNEI7aUJBQ3hDO2FBQ0Y7OztZQVcrQixZQUFZO1lBQW9DLFFBQVEsdUJBQXpDLFFBQVEsWUFBSSxJQUFJOzs7NkJBUDVELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7aXNTdHJpbmd9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbmltcG9ydCB7TmdiQWNjb3JkaW9uQ29uZmlnfSBmcm9tICcuL2FjY29yZGlvbi1jb25maWcnO1xuaW1wb3J0IHtuZ2JSdW5UcmFuc2l0aW9ufSBmcm9tICcuLi91dGlsL3RyYW5zaXRpb24vbmdiVHJhbnNpdGlvbic7XG5pbXBvcnQge25nYkNvbGxhcHNpbmdUcmFuc2l0aW9ufSBmcm9tICcuLi91dGlsL3RyYW5zaXRpb24vbmdiQ29sbGFwc2VUcmFuc2l0aW9uJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuLyoqXG4gKiBUaGUgY29udGV4dCBmb3IgdGhlIFtOZ2JQYW5lbEhlYWRlcl0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxIZWFkZXIpIHRlbXBsYXRlXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiUGFuZWxIZWFkZXJDb250ZXh0IHtcbiAgLyoqXG4gICAqIGBUcnVlYCBpZiBjdXJyZW50IHBhbmVsIGlzIG9wZW5lZFxuICAgKi9cbiAgb3BlbmVkOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgd3JhcHMgYW4gYWNjb3JkaW9uIHBhbmVsIGhlYWRlciB3aXRoIGFueSBIVE1MIG1hcmt1cCBhbmQgYSB0b2dnbGluZyBidXR0b25cbiAqIG1hcmtlZCB3aXRoIFtgTmdiUGFuZWxUb2dnbGVgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbFRvZ2dsZSkuXG4gKiBTZWUgdGhlIFtoZWFkZXIgY3VzdG9taXphdGlvbiBkZW1vXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2V4YW1wbGVzI2hlYWRlcikgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIFtgTmdiUGFuZWxUaXRsZWBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsVGl0bGUpIHRvIGN1c3RvbWl6ZSBvbmx5IHRoZSBwYW5lbCB0aXRsZS5cbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuZ2JQYW5lbEhlYWRlcl0nfSlcbmV4cG9ydCBjbGFzcyBOZ2JQYW5lbEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIG9ubHkgdGhlIHBhbmVsIHRpdGxlIHdpdGggSFRNTCBtYXJrdXAgaW5zaWRlLlxuICpcbiAqIFlvdSBjYW4gYWxzbyB1c2UgW2BOZ2JQYW5lbEhlYWRlcmBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsSGVhZGVyKSB0byBjdXN0b21pemUgdGhlIGZ1bGwgcGFuZWwgaGVhZGVyLlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW25nYlBhbmVsVGl0bGVdJ30pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWxUaXRsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIHRoZSBhY2NvcmRpb24gcGFuZWwgY29udGVudC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuZ2JQYW5lbENvbnRlbnRdJ30pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWxDb250ZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgd3JhcHMgYW4gaW5kaXZpZHVhbCBhY2NvcmRpb24gcGFuZWwgd2l0aCB0aXRsZSBhbmQgY29sbGFwc2libGUgY29udGVudC5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZ2ItcGFuZWwnfSlcbmV4cG9ydCBjbGFzcyBOZ2JQYW5lbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICAvKipcbiAgICogIElmIGB0cnVlYCwgdGhlIHBhbmVsIGlzIGRpc2FibGVkIGFuIGNhbid0IGJlIHRvZ2dsZWQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiAgQW4gb3B0aW9uYWwgaWQgZm9yIHRoZSBwYW5lbCB0aGF0IG11c3QgYmUgdW5pcXVlIG9uIHRoZSBwYWdlLlxuICAgKlxuICAgKiAgSWYgbm90IHByb3ZpZGVkLCBpdCB3aWxsIGJlIGF1dG8tZ2VuZXJhdGVkIGluIHRoZSBgbmdiLXBhbmVsLXh4eGAgZm9ybWF0LlxuICAgKi9cbiAgQElucHV0KCkgaWQgPSBgbmdiLXBhbmVsLSR7bmV4dElkKyt9YDtcblxuICBpc09wZW4gPSBmYWxzZTtcblxuICAvKiBBIGZsYWcgdG8gc3BlY2lmaWVkIHRoYXQgdGhlIHRyYW5zaXRpb24gcGFuZWwgY2xhc3NlcyBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgKi9cbiAgaW5pdENsYXNzRG9uZSA9IGZhbHNlO1xuXG4gIC8qIEEgZmxhZyB0byBzcGVjaWZpZWQgaWYgdGhlIHBhbmVsIGlzIGN1cnJlbnRseSBiZWluZyBhbmltYXRlZCwgdG8gZW5zdXJlIGl0cyBwcmVzZW5jZSBpbiB0aGUgZG9tICovXG4gIHRyYW5zaXRpb25SdW5uaW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqICBUaGUgcGFuZWwgdGl0bGUuXG4gICAqXG4gICAqICBZb3UgY2FuIGFsdGVybmF0aXZlbHkgdXNlIFtgTmdiUGFuZWxUaXRsZWBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsVGl0bGUpIHRvIHNldCBwYW5lbCB0aXRsZS5cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGN1cnJlbnQgcGFuZWwuXG4gICAqXG4gICAqIEJvb3RzdHJhcCBwcm92aWRlcyBzdHlsZXMgZm9yIHRoZSBmb2xsb3dpbmcgdHlwZXM6IGAnc3VjY2VzcydgLCBgJ2luZm8nYCwgYCd3YXJuaW5nJ2AsIGAnZGFuZ2VyJ2AsIGAncHJpbWFyeSdgLFxuICAgKiBgJ3NlY29uZGFyeSdgLCBgJ2xpZ2h0J2AgYW5kIGAnZGFyaydgLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBjbGFzcyBhcHBsaWVkIHRvIHRoZSBhY2NvcmRpb24gY2FyZCBlbGVtZW50IHRoYXQgd3JhcHMgYm90aCBwYW5lbCB0aXRsZSBhbmQgY29udGVudC5cbiAgICpcbiAgICogQHNpbmNlIDUuMy4wXG4gICAqL1xuICBASW5wdXQoKSBjYXJkQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwYW5lbCBpcyBzaG93biwgYWZ0ZXIgdGhlIHRyYW5zaXRpb24uIEl0IGhhcyBubyBwYXlsb2FkLlxuICAgKlxuICAgKiBAc2luY2UgOC4wLjBcbiAgICovXG4gIEBPdXRwdXQoKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwYW5lbCBpcyBoaWRkZW4sIGFmdGVyIHRoZSB0cmFuc2l0aW9uLiBJdCBoYXMgbm8gcGF5bG9hZC5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBAT3V0cHV0KCkgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cbiAgdGl0bGVUcGw6IE5nYlBhbmVsVGl0bGU7XG4gIGhlYWRlclRwbDogTmdiUGFuZWxIZWFkZXI7XG4gIGNvbnRlbnRUcGw6IE5nYlBhbmVsQ29udGVudDtcblxuICBAQ29udGVudENoaWxkcmVuKE5nYlBhbmVsVGl0bGUsIHtkZXNjZW5kYW50czogZmFsc2V9KSB0aXRsZVRwbHM6IFF1ZXJ5TGlzdDxOZ2JQYW5lbFRpdGxlPjtcbiAgQENvbnRlbnRDaGlsZHJlbihOZ2JQYW5lbEhlYWRlciwge2Rlc2NlbmRhbnRzOiBmYWxzZX0pIGhlYWRlclRwbHM6IFF1ZXJ5TGlzdDxOZ2JQYW5lbEhlYWRlcj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiUGFuZWxDb250ZW50LCB7ZGVzY2VuZGFudHM6IGZhbHNlfSkgY29udGVudFRwbHM6IFF1ZXJ5TGlzdDxOZ2JQYW5lbENvbnRlbnQ+O1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvLyBXZSBhcmUgdXNpbmcgQENvbnRlbnRDaGlsZHJlbiBpbnN0ZWFkIG9mIEBDb250ZW50Q2hpbGQgYXMgaW4gdGhlIEFuZ3VsYXIgdmVyc2lvbiBiZWluZyB1c2VkXG4gICAgLy8gb25seSBAQ29udGVudENoaWxkcmVuIGFsbG93cyB1cyB0byBzcGVjaWZ5IHRoZSB7ZGVzY2VuZGFudHM6IGZhbHNlfSBvcHRpb24uXG4gICAgLy8gV2l0aG91dCB7ZGVzY2VuZGFudHM6IGZhbHNlfSB3ZSBhcmUgaGl0dGluZyBidWdzIGRlc2NyaWJlZCBpbjpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC9pc3N1ZXMvMjI0MFxuICAgIHRoaXMudGl0bGVUcGwgPSB0aGlzLnRpdGxlVHBscy5maXJzdDtcbiAgICB0aGlzLmhlYWRlclRwbCA9IHRoaXMuaGVhZGVyVHBscy5maXJzdDtcbiAgICB0aGlzLmNvbnRlbnRUcGwgPSB0aGlzLmNvbnRlbnRUcGxzLmZpcnN0O1xuICB9XG59XG5cbi8qKlxuICogQW4gZXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgdG9nZ2xpbmcgYW4gYWNjb3JkaW9uIHBhbmVsLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlBhbmVsQ2hhbmdlRXZlbnQge1xuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBhY2NvcmRpb24gcGFuZWwgYmVpbmcgdG9nZ2xlZC5cbiAgICovXG4gIHBhbmVsSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5leHQgc3RhdGUgb2YgdGhlIHBhbmVsLlxuICAgKlxuICAgKiBgdHJ1ZWAgaWYgaXQgd2lsbCBiZSBvcGVuZWQsIGBmYWxzZWAgaWYgY2xvc2VkLlxuICAgKi9cbiAgbmV4dFN0YXRlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBwcmV2ZW50IHBhbmVsIHRvZ2dsaW5nLlxuICAgKi9cbiAgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQWNjb3JkaW9uIGlzIGEgY29sbGVjdGlvbiBvZiBjb2xsYXBzaWJsZSBwYW5lbHMgKGJvb3RzdHJhcCBjYXJkcykuXG4gKlxuICogSXQgY2FuIGVuc3VyZSBvbmx5IG9uZSBwYW5lbCBpcyBvcGVuZWQgYXQgYSB0aW1lIGFuZCBhbGxvd3MgdG8gY3VzdG9taXplIHBhbmVsXG4gKiBoZWFkZXJzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItYWNjb3JkaW9uJyxcbiAgZXhwb3J0QXM6ICduZ2JBY2NvcmRpb24nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7J2NsYXNzJzogJ2FjY29yZGlvbicsICdyb2xlJzogJ3RhYmxpc3QnLCAnW2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGVdJzogJyFjbG9zZU90aGVyUGFuZWxzJ30sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0IG5nYlBhbmVsSGVhZGVyIGxldC1wYW5lbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBbbmdiUGFuZWxUb2dnbGVdPVwicGFuZWxcIj5cbiAgICAgICAge3twYW5lbC50aXRsZX19PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhbmVsLnRpdGxlVHBsPy50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtcGFuZWwgW25nRm9yT2ZdPVwicGFuZWxzXCI+XG4gICAgICA8ZGl2IFtjbGFzc109XCInY2FyZCAnICsgKHBhbmVsLmNhcmRDbGFzcyB8fCAnJylcIj5cbiAgICAgICAgPGRpdiByb2xlPVwidGFiXCIgaWQ9XCJ7e3BhbmVsLmlkfX0taGVhZGVyXCIgW2NsYXNzXT1cIidjYXJkLWhlYWRlciAnICsgKHBhbmVsLnR5cGUgPyAnYmctJytwYW5lbC50eXBlOiB0eXBlID8gJ2JnLScrdHlwZSA6ICcnKVwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwYW5lbC5oZWFkZXJUcGw/LnRlbXBsYXRlUmVmIHx8IHRcIlxuICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogcGFuZWwsIG9wZW5lZDogcGFuZWwuaXNPcGVufVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwie3twYW5lbC5pZH19XCIgcm9sZT1cInRhYnBhbmVsXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cInBhbmVsLmlkICsgJy1oZWFkZXInXCJcbiAgICAgICAgICAgICAqbmdJZj1cIiFkZXN0cm95T25IaWRlIHx8IHBhbmVsLmlzT3BlbiB8fCBwYW5lbC50cmFuc2l0aW9uUnVubmluZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwYW5lbC5jb250ZW50VHBsPy50ZW1wbGF0ZVJlZiB8fCBudWxsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE5nYkFjY29yZGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBAQ29udGVudENoaWxkcmVuKE5nYlBhbmVsKSBwYW5lbHM6IFF1ZXJ5TGlzdDxOZ2JQYW5lbD47XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYWNjb3JkaW9uIHdpbGwgYmUgYW5pbWF0ZWQuXG4gICAqXG4gICAqIEBzaW5jZSA4LjAuMFxuICAgKi9cbiAgQElucHV0KCkgYW5pbWF0aW9uO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvciBjb21tYSBzZXBhcmF0ZWQgc3RyaW5ncyBvZiBwYW5lbCBpZHMgdGhhdCBzaG91bGQgYmUgb3BlbmVkICoqaW5pdGlhbGx5KiouXG4gICAqXG4gICAqIEZvciBzdWJzZXF1ZW50IGNoYW5nZXMgdXNlIG1ldGhvZHMgbGlrZSBgZXhwYW5kKClgLCBgY29sbGFwc2UoKWAsIGV0Yy4gYW5kXG4gICAqIHRoZSBgKHBhbmVsQ2hhbmdlKWAgZXZlbnQuXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVJZHM6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqICBJZiBgdHJ1ZWAsIG9ubHkgb25lIHBhbmVsIGNvdWxkIGJlIG9wZW5lZCBhdCBhIHRpbWUuXG4gICAqXG4gICAqICBPcGVuaW5nIGEgbmV3IHBhbmVsIHdpbGwgY2xvc2Ugb3RoZXJzLlxuICAgKi9cbiAgQElucHV0KCdjbG9zZU90aGVycycpIGNsb3NlT3RoZXJQYW5lbHM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgcGFuZWwgY29udGVudCB3aWxsIGJlIGRldGFjaGVkIGZyb20gRE9NIGFuZCBub3Qgc2ltcGx5IGhpZGRlbiB3aGVuIHRoZSBwYW5lbCBpcyBjb2xsYXBzZWQuXG4gICAqL1xuICBASW5wdXQoKSBkZXN0cm95T25IaWRlID0gdHJ1ZTtcblxuICAvKipcbiAgICogVHlwZSBvZiBwYW5lbHMuXG4gICAqXG4gICAqIEJvb3RzdHJhcCBwcm92aWRlcyBzdHlsZXMgZm9yIHRoZSBmb2xsb3dpbmcgdHlwZXM6IGAnc3VjY2VzcydgLCBgJ2luZm8nYCwgYCd3YXJuaW5nJ2AsIGAnZGFuZ2VyJ2AsIGAncHJpbWFyeSdgLFxuICAgKiBgJ3NlY29uZGFyeSdgLCBgJ2xpZ2h0J2AgYW5kIGAnZGFyaydgLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSB0aGUgcGFuZWwgdG9nZ2xlIGhhcHBlbnMuXG4gICAqXG4gICAqIFNlZSBbTmdiUGFuZWxDaGFuZ2VFdmVudF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxDaGFuZ2VFdmVudCkgZm9yIHBheWxvYWQgZGV0YWlscy5cbiAgICovXG4gIEBPdXRwdXQoKSBwYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiUGFuZWxDaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBleHBhbmRpbmcgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIG9uIHRoZSBwYW5lbC4gVGhlIHBheWxvYWQgaXMgdGhlIHBhbmVsIGlkLlxuICAgKlxuICAgKiBAc2luY2UgOC4wLjBcbiAgICovXG4gIEBPdXRwdXQoKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGNvbGxhcHNpbmcgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIG9uIHRoZSBwYW5lbCwgYW5kIGJlZm9yZSB0aGUgcGFuZWwgZWxlbWVudCBpcyByZW1vdmVkLlxuICAgKiBUaGUgcGF5bG9hZCBpcyB0aGUgcGFuZWwgaWQuXG4gICAqXG4gICAqIEBzaW5jZSA4LjAuMFxuICAgKi9cbiAgQE91dHB1dCgpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgY29uZmlnOiBOZ2JBY2NvcmRpb25Db25maWcsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBjb25maWcuYW5pbWF0aW9uO1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuY2xvc2VPdGhlclBhbmVscyA9IGNvbmZpZy5jbG9zZU90aGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBwYW5lbCB3aXRoIGEgZ2l2ZW4gaWQgaXMgZXhwYW5kZWQuXG4gICAqL1xuICBpc0V4cGFuZGVkKHBhbmVsSWQ6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hY3RpdmVJZHMuaW5kZXhPZihwYW5lbElkKSA+IC0xOyB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZHMgYSBwYW5lbCB3aXRoIGEgZ2l2ZW4gaWQuXG4gICAqXG4gICAqIEhhcyBubyBlZmZlY3QgaWYgdGhlIHBhbmVsIGlzIGFscmVhZHkgZXhwYW5kZWQgb3IgZGlzYWJsZWQuXG4gICAqL1xuICBleHBhbmQocGFuZWxJZDogc3RyaW5nKTogdm9pZCB7IHRoaXMuX2NoYW5nZU9wZW5TdGF0ZSh0aGlzLl9maW5kUGFuZWxCeUlkKHBhbmVsSWQpLCB0cnVlKTsgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmRzIGFsbCBwYW5lbHMsIGlmIGBbY2xvc2VPdGhlcnNdYCBpcyBgZmFsc2VgLlxuICAgKlxuICAgKiBJZiBgW2Nsb3NlT3RoZXJzXWAgaXMgYHRydWVgLCBpdCB3aWxsIGV4cGFuZCB0aGUgZmlyc3QgcGFuZWwsIHVubGVzcyB0aGVyZSBpcyBhbHJlYWR5IGEgcGFuZWwgb3BlbmVkLlxuICAgKi9cbiAgZXhwYW5kQWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NlT3RoZXJQYW5lbHMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUlkcy5sZW5ndGggPT09IDAgJiYgdGhpcy5wYW5lbHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZU9wZW5TdGF0ZSh0aGlzLnBhbmVscy5maXJzdCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFuZWxzLmZvckVhY2gocGFuZWwgPT4gdGhpcy5fY2hhbmdlT3BlblN0YXRlKHBhbmVsLCB0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlcyBhIHBhbmVsIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgKlxuICAgKiBIYXMgbm8gZWZmZWN0IGlmIHRoZSBwYW5lbCBpcyBhbHJlYWR5IGNvbGxhcHNlZCBvciBkaXNhYmxlZC5cbiAgICovXG4gIGNvbGxhcHNlKHBhbmVsSWQ6IHN0cmluZykgeyB0aGlzLl9jaGFuZ2VPcGVuU3RhdGUodGhpcy5fZmluZFBhbmVsQnlJZChwYW5lbElkKSwgZmFsc2UpOyB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlcyBhbGwgb3BlbmVkIHBhbmVscy5cbiAgICovXG4gIGNvbGxhcHNlQWxsKCkge1xuICAgIHRoaXMucGFuZWxzLmZvckVhY2goKHBhbmVsKSA9PiB7IHRoaXMuX2NoYW5nZU9wZW5TdGF0ZShwYW5lbCwgZmFsc2UpOyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGEgcGFuZWwgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAqXG4gICAqIEhhcyBubyBlZmZlY3QgaWYgdGhlIHBhbmVsIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgdG9nZ2xlKHBhbmVsSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5fZmluZFBhbmVsQnlJZChwYW5lbElkKTtcbiAgICBpZiAocGFuZWwpIHtcbiAgICAgIHRoaXMuX2NoYW5nZU9wZW5TdGF0ZShwYW5lbCwgIXBhbmVsLmlzT3Blbik7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8vIGFjdGl2ZSBpZCB1cGRhdGVzXG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuYWN0aXZlSWRzKSkge1xuICAgICAgdGhpcy5hY3RpdmVJZHMgPSB0aGlzLmFjdGl2ZUlkcy5zcGxpdCgvXFxzKixcXHMqLyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHBhbmVscyBvcGVuIHN0YXRlc1xuICAgIHRoaXMucGFuZWxzLmZvckVhY2gocGFuZWwgPT4geyBwYW5lbC5pc09wZW4gPSAhcGFuZWwuZGlzYWJsZWQgJiYgdGhpcy5hY3RpdmVJZHMuaW5kZXhPZihwYW5lbC5pZCkgPiAtMTsgfSk7XG5cbiAgICAvLyBjbG9zZU90aGVycyB1cGRhdGVzXG4gICAgaWYgKHRoaXMuYWN0aXZlSWRzLmxlbmd0aCA+IDEgJiYgdGhpcy5jbG9zZU90aGVyUGFuZWxzKSB7XG4gICAgICB0aGlzLl9jbG9zZU90aGVycyh0aGlzLmFjdGl2ZUlkc1swXSwgZmFsc2UpO1xuICAgICAgdGhpcy5fdXBkYXRlQWN0aXZlSWRzKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgdGhlIGluaXRpYWwgY2xhc3NlcyBoZXJlXG4gICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucGFuZWxzLmZvckVhY2gocGFuZWwgPT4ge1xuICAgICAgICBjb25zdCBwYW5lbEVsZW1lbnQgPSB0aGlzLl9nZXRQYW5lbEVsZW1lbnQocGFuZWwuaWQpO1xuICAgICAgICBpZiAocGFuZWxFbGVtZW50KSB7XG4gICAgICAgICAgaWYgKCFwYW5lbC5pbml0Q2xhc3NEb25lKSB7XG4gICAgICAgICAgICBwYW5lbC5pbml0Q2xhc3NEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIG5nYlJ1blRyYW5zaXRpb24odGhpcy5fbmdab25lLCBwYW5lbEVsZW1lbnQsIG5nYkNvbGxhcHNpbmdUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgIHJ1bm5pbmdUcmFuc2l0aW9uOiAnY29udGludWUnLFxuICAgICAgICAgICAgICBjb250ZXh0OiB7ZGlyZWN0aW9uOiBwYW5lbC5pc09wZW4gPyAnc2hvdycgOiAnaGlkZSd9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ2xhc3NlcyBtdXN0IGJlIGluaXRpYWxpemVkIG5leHQgdGltZSBpdCB3aWxsIGJlIGluIHRoZSBkb21cbiAgICAgICAgICBwYW5lbC5pbml0Q2xhc3NEb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlT3BlblN0YXRlKHBhbmVsOiBOZ2JQYW5lbCB8IG51bGwsIG5leHRTdGF0ZTogYm9vbGVhbikge1xuICAgIGlmIChwYW5lbCAhPSBudWxsICYmICFwYW5lbC5kaXNhYmxlZCAmJiBwYW5lbC5pc09wZW4gIT09IG5leHRTdGF0ZSkge1xuICAgICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5wYW5lbENoYW5nZS5lbWl0KFxuICAgICAgICAgIHtwYW5lbElkOiBwYW5lbC5pZCwgbmV4dFN0YXRlOiBuZXh0U3RhdGUsIHByZXZlbnREZWZhdWx0OiAoKSA9PiB7IGRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlOyB9fSk7XG5cbiAgICAgIGlmICghZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBwYW5lbC5pc09wZW4gPSBuZXh0U3RhdGU7XG4gICAgICAgIHBhbmVsLnRyYW5zaXRpb25SdW5uaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAobmV4dFN0YXRlICYmIHRoaXMuY2xvc2VPdGhlclBhbmVscykge1xuICAgICAgICAgIHRoaXMuX2Nsb3NlT3RoZXJzKHBhbmVsLmlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVBY3RpdmVJZHMoKTtcbiAgICAgICAgdGhpcy5fcnVuVHJhbnNpdGlvbnModGhpcy5hbmltYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlT3RoZXJzKHBhbmVsSWQ6IHN0cmluZywgZW5hYmxlVHJhbnNpdGlvbiA9IHRydWUpIHtcbiAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgIGlmIChwYW5lbC5pZCAhPT0gcGFuZWxJZCAmJiBwYW5lbC5pc09wZW4pIHtcbiAgICAgICAgcGFuZWwuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHBhbmVsLnRyYW5zaXRpb25SdW5uaW5nID0gZW5hYmxlVHJhbnNpdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmRQYW5lbEJ5SWQocGFuZWxJZDogc3RyaW5nKTogTmdiUGFuZWwgfCBudWxsIHsgcmV0dXJuIHRoaXMucGFuZWxzLmZpbmQocCA9PiBwLmlkID09PSBwYW5lbElkKSB8fCBudWxsOyB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQWN0aXZlSWRzKCkge1xuICAgIHRoaXMuYWN0aXZlSWRzID0gdGhpcy5wYW5lbHMuZmlsdGVyKHBhbmVsID0+IHBhbmVsLmlzT3BlbiAmJiAhcGFuZWwuZGlzYWJsZWQpLm1hcChwYW5lbCA9PiBwYW5lbC5pZCk7XG4gIH1cblxuICBwcml2YXRlIF9ydW5UcmFuc2l0aW9ucyhhbmltYXRpb246IGJvb2xlYW4pIHtcbiAgICAvLyBkZXRlY3RDaGFuZ2VzIGlzIHBlcmZvcm1lZCB0byBlbnN1cmUgdGhhdCBhbGwgcGFuZWxzIGFyZSBpbiB0aGUgZG9tICh2aWEgdHJhbnNpdGlvblJ1bm5pbmcgPSB0cnVlKVxuICAgIC8vIGJlZm9yZSBzdGFydGluZyB0aGUgYW5pbWF0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgdGhpcy5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAvLyBXaGVuIHBhbmVsLnRyYW5zaXRpb25SdW5uaW5nIGlzIHRydWUsIHRoZSB0cmFuc2l0aW9uIG5lZWRzIHRvIGJlIHN0YXJ0ZWQgT1IgcmV2ZXJzZWQsXG4gICAgICAvLyBUaGUgZGlyZWN0aW9uIChzaG93IG9yIGhpZGUpIGlzIGNob29zZW4gYnkgZWFjaCBwYW5lbC5pc09wZW4gc3RhdGVcbiAgICAgIGlmIChwYW5lbC50cmFuc2l0aW9uUnVubmluZykge1xuICAgICAgICBjb25zdCBwYW5lbEVsZW1lbnQgPSB0aGlzLl9nZXRQYW5lbEVsZW1lbnQocGFuZWwuaWQpO1xuICAgICAgICBuZ2JSdW5UcmFuc2l0aW9uKHRoaXMuX25nWm9uZSwgcGFuZWxFbGVtZW50ICEsIG5nYkNvbGxhcHNpbmdUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgYW5pbWF0aW9uLFxuICAgICAgICAgIHJ1bm5pbmdUcmFuc2l0aW9uOiAnc3RvcCcsXG4gICAgICAgICAgY29udGV4dDoge2RpcmVjdGlvbjogcGFuZWwuaXNPcGVuID8gJ3Nob3cnIDogJ2hpZGUnfVxuICAgICAgICB9KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHBhbmVsLnRyYW5zaXRpb25SdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgY29uc3Qge2lkfSA9IHBhbmVsO1xuICAgICAgICAgIGlmIChwYW5lbC5pc09wZW4pIHtcbiAgICAgICAgICAgIHBhbmVsLnNob3duLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd24uZW1pdChpZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhbmVsLmhpZGRlbi5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLmhpZGRlbi5lbWl0KGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFuZWxFbGVtZW50KHBhbmVsSWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHBhbmVsSWQpO1xuICB9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gcHV0IG9uIGEgYnV0dG9uIHRoYXQgdG9nZ2xlcyBwYW5lbCBvcGVuaW5nIGFuZCBjbG9zaW5nLlxuICpcbiAqIFRvIGJlIHVzZWQgaW5zaWRlIHRoZSBbYE5nYlBhbmVsSGVhZGVyYF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxIZWFkZXIpXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltuZ2JQYW5lbFRvZ2dsZV0nLFxuICBob3N0OiB7XG4gICAgJ3R5cGUnOiAnYnV0dG9uJyxcbiAgICAnW2Rpc2FibGVkXSc6ICdwYW5lbC5kaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5jb2xsYXBzZWRdJzogJyFwYW5lbC5pc09wZW4nLFxuICAgICdbYXR0ci5hcmlhLWV4cGFuZGVkXSc6ICdwYW5lbC5pc09wZW4nLFxuICAgICdbYXR0ci5hcmlhLWNvbnRyb2xzXSc6ICdwYW5lbC5pZCcsXG4gICAgJyhjbGljayknOiAnYWNjb3JkaW9uLnRvZ2dsZShwYW5lbC5pZCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWxUb2dnbGUge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbmdiUGFuZWxUb2dnbGU6IE5nYlBhbmVsIHwgJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IG5nYlBhbmVsVG9nZ2xlKHBhbmVsOiBOZ2JQYW5lbCkge1xuICAgIGlmIChwYW5lbCkge1xuICAgICAgdGhpcy5wYW5lbCA9IHBhbmVsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY2NvcmRpb246IE5nYkFjY29yZGlvbiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgcGFuZWw6IE5nYlBhbmVsKSB7fVxufVxuIl19