/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Represents the group footer cell template of the Excel Export column component
 * ([see example]({% slug columns_excel-export %}#toc-group-footer-template)).
 * Enables you to customize the group footer cell of the column.
 */
export declare class GroupFooterTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupFooterTemplateDirective, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GroupFooterTemplateDirective, "[kendoExcelExportGroupFooterTemplate]", never, {}, {}, never>;
}
