/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class TemplateContextDirective {
    set templateContext(context: any);
    private insertedViewRef;
    private viewContainerRef;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateContextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TemplateContextDirective, "[templateContext]", never, { "templateContext": "templateContext"; }, {}, never>;
}
