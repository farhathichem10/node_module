/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { WorkbookSheetRowCellBorderBottom, WorkbookSheetRowCellBorderLeft, WorkbookSheetRowCellBorderTop, WorkbookSheetRowCellBorderRight } from '@progress/kendo-ooxml';
/**
 * The options for the Excel Export cell.
 */
export interface CellOptions {
    /**
     * Sets the background color of the cell.
     * Supports hex CSS-like values that start with `"#"`. For example, `"#ff00ff"`.
     */
    background?: string;
    /**
     * The style information for the bottom border of the cell.
     */
    borderBottom?: WorkbookSheetRowCellBorderBottom;
    /**
     * The style information for the left border of the cell.
     */
    borderLeft?: WorkbookSheetRowCellBorderLeft;
    /**
     * The style information for the top border of the cell.
     */
    borderTop?: WorkbookSheetRowCellBorderTop;
    /**
     * The style information for the right border of the cell.
     */
    borderRight?: WorkbookSheetRowCellBorderRight;
    /**
     * If set to `true`, renders the cell value in bold.
     */
    bold?: boolean;
    /**
     * The text color of the cell.
     * Supports hex CSS-like values that start with `"#"`. For example, `"#ff00ff"`.
     */
    color?: string;
    /**
     * Sets the font that is used to display the cell value.
     */
    fontFamily?: string;
    /**
     * Sets the font size in pixels.
     */
    fontSize?: number;
    /**
     * Sets the format that Excel uses to display the cell value.
     * For more information, refer to the page on
     * [supported Excel formats](https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4?ui=en-US&rs=en-US&ad=US).
     */
    format?: string;
    /**
     * If `italics` is set to `true`, the cell value is rendered in italics.
     */
    italic?: boolean;
    /**
     * Sets the horizontal alignment of the cell value.
     *
     * The supported values are:
     * * `"left"`
     * * `"center"`
     * * `"right"`
     */
    textAlign?: 'left' | 'center' | 'right';
    /**
     * If `underline` is set to `true`, the cell value is underlined.
     */
    underline?: boolean;
    /**
     * If `wrap` is set to `true`, the cell value is wrapped.
     */
    wrap?: boolean;
    /**
     * Sets the vertical alignment of the cell value.
     *
     * The supported values are:
     * * `"top"`
     * * `"center"`
     * * `"bottom"`
     */
    verticalAlign?: 'top' | 'center' | 'bottom';
}
