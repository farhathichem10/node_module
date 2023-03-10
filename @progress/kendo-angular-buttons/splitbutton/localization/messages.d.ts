/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ComponentMessages } from '@progress/kendo-angular-l10n';
import * as i0 from "@angular/core";
/**
 * @hidden
 */
export declare class Messages extends ComponentMessages {
    /**
     * The text for the SplitButton aria-label.
     *
     * The text for the aria-label consists of a two-part message - the text of the SplitButton and a localizable string.
     * For a SplitButton with text 'Reply', the default aria-label will be 'Reply splitbutton'.
     *
     * To allow reordering of the SplitButton text and the localizable part, the splitButtonLabel accepts a string with a
     * placeholder for the button text - e.g. 'splitbutton for {buttonText}'. The '{buttonText}' placeholder will be replaced
     * internally with the current SplitButton text, and the resulting aria-label will be rendered as 'splitbutton for Reply'.
     *
     * @example
     *
     * ```ts-no-run
     *      <kendo-splitbutton>
     *          <kendo-splitbutton-messages
     *              splitButtonLabel="splitbutton for {buttonText}"
     *          >
     *          </kendo-splitbutton-messages>
     *      </kendo-splitbutton>
     *  ```
     */
    splitButtonLabel: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<Messages, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Messages, "kendo-splitbutton-messages-base", never, { "splitButtonLabel": "splitButtonLabel"; }, {}, never>;
}
