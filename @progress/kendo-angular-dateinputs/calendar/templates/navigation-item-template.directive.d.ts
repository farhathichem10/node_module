/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Used for rendering the navigation item of the Calendar. To define the navigation item template, nest an `<ng-template>`
 * tag with the `kendoCalendarNavigationItemTemplate` directive inside the component tag. The template context is set to the
 * current component. To get a reference to the current item value, use the `let-title` directive. To provide more details
 * about the current title, get a reference to the current `date` by using the `let-date='date'` directive or get a reference
 * to the current active view by using the `let-activeView='activeView'` directive.
 *
 * For more examples, refer to the article on [templates]({% slug templates_calendar %}).
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * styles: ['.custom { color: red; }'],
 * template: `
 *  <kendo-calendar>
 *    <ng-template kendoCalendarNavigationItemTemplate let-title>
 *      <span class="custom">{{title}}</span>
 *    </ng-template>
 *  </kendo-calendar>
 * `
 * })
 * export class AppComponent { }
 * ```
 */
export declare class NavigationItemTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationItemTemplateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NavigationItemTemplateDirective, "[kendoCalendarNavigationItemTemplate]", never, {}, {}, never>;
}
