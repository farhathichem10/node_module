/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./intl.service";
/**
 * Formats a number value to a string based on the requested format.
 * This pipe uses the [`IntlService`]({% slug api_intl_intlservice %}).
 *
 * @example
 * ```ng-template-no-run
 *   <ul>
 *     <li>{{decimal | kendoNumber:'c' }}</li>
 *     <li>{{stringNumber | kendoNumber:'p' }}</li>
 *     <li>{{int | kendoNumber:'##.00' }}</li>
 *  </ul>
 * ```
 */
export class NumberPipe {
    /**
     * @hidden
     */
    constructor(intlService) {
        this.intlService = intlService;
    }
    /**
     * Converts a `Number` object into a string based on the specified format.
     * If no format is provided, the value is formatted as decimal number using the
     * [`"n"`](https://github.com/telerik/kendo-intl/blob/master/docs/num-formatting/index.md#standard) format.
     *
     * @param value - The numer that will be formatted.
     * @param format - The format string or options.
     * @param localeId - (Optional) The locale ID that will be used in place of the default one.
     * @return - The formatted number.
     */
    transform(value, format, localeId) {
        if (typeof value === 'string') {
            value = this.intlService.parseNumber(value);
        }
        if (value !== null && value !== undefined) {
            return this.intlService.formatNumber(value, format, localeId);
        }
        return value;
    }
}
NumberPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberPipe, deps: [{ token: i1.IntlService }], target: i0.ɵɵFactoryTarget.Pipe });
NumberPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberPipe, name: "kendoNumber" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'kendoNumber'
                }]
        }], ctorParameters: function () { return [{ type: i1.IntlService }]; } });
