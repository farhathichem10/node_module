/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ApplicationRef, ComponentFactoryResolver, ElementRef, InjectionToken, Injector } from '@angular/core';
import { PopupSettings } from './models/popup-settings';
import { PopupRef } from './models/popup-ref';
import * as i0 from "@angular/core";
/**
 * Used to inject the Popup container. If not provided, the first root component of
 * the application is used.
 *
 * > The `POPUP_CONTAINER` can be used only with the [`PopupService`]({% slug service_popup %}) class.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Popup module
 * import { PopupModule, POPUP_CONTAINER } from '@progress/kendo-angular-popup';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { ElementRef, NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, PopupModule], // import Popup module
 *     bootstrap:    [AppComponent],
 *     providers: [{
 *       provide: POPUP_CONTAINER,
 *       useFactory: () => {
 *          //return the container ElementRef, where the popup will be injected
 *          return { nativeElement: document.body } as ElementRef;
 *       }
 *     }]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 * ```
 */
export declare const POPUP_CONTAINER: InjectionToken<ElementRef<any>>;
/**
 * A service for opening Popup components dynamically
 * ([see example]({% slug service_popup %})).
 *
 * @export
 * @class PopupService
 */
export declare class PopupService {
    private applicationRef;
    private componentFactoryResolver;
    private injector;
    private container;
    /**
     * Gets the root view container into which the component will be injected.
     *
     * @returns {ComponentRef<any>}
     */
    private get rootViewContainer();
    /**
     * Sets or gets the HTML element of the root component container.
     *
     * @returns {HTMLElement}
     */
    get rootViewContainerNode(): HTMLElement;
    constructor(applicationRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector, container: ElementRef);
    /**
     * Opens a Popup component. Created Popups are mounted
     * in the DOM directly in the root application component.
     *
     * @param {PopupSettings} options - The options which define the Popup.
     * @returns {ComponentRef<PopupComponent>} - A reference to the Popup object.
     *
     * @example
     *
     * ```ts-no-run
     * _@Component({
     *   selector: 'my-app',
     *   template: `
     *     <ng-template #template>
     *      Popup content
     *     </ng-template>
     *     <button #anchor kendoButton (click)="open(anchor, template)">Open</button>
     *   `
     * })
     * export class AppComponent {
     *     public popupRef: PopupRef;
     *
     *     constructor( private popupService: PopupService ) {}
     *
     *     public open(anchor: ElementRef, template: TemplateRef<any>): void {
     *         if (this.popupRef) {
     *              this.popupRef.close();
     *              this.popupRef = null;
     *              return;
     *         }
     *
     *         this.popupRef = this.popupService.open({
     *           anchor: anchor,
     *           content: template
     *         });
     *     }
     * }
     * ```
     */
    open(options?: PopupSettings): PopupRef;
    private appendPopup;
    /**
     * Gets the HTML element for a component reference.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     */
    private getComponentRootNode;
    /**
     * Gets the `ComponentFactory` instance by its type.
     *
     * @param {*} componentClass
     * @param {*} nodes
     * @returns {ComponentRef<any>}
     */
    private getComponentFactory;
    /**
     * Creates a component reference from a `Component` type class.
     *
     * @param {*} componentClass
     * @param {*} nodes
     * @returns {ComponentRef<any>}
     */
    private createComponent;
    /**
     * Projects the inputs on the component.
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     */
    private projectComponentInputs;
    /**
     * Gets the component and the nodes to append from the `content` option.
     *
     * @param {*} content
     * @returns {any}
     */
    private contentFrom;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopupService, [null, null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PopupService>;
}
