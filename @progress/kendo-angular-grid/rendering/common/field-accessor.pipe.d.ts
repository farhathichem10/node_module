/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { PipeTransform } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class FieldAccessorPipe implements PipeTransform {
    private intlService;
    constructor(intlService: IntlService);
    transform(dataItem: any, fieldName: string, format?: any): any;
    private formatValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldAccessorPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FieldAccessorPipe, "valueOf">;
}
