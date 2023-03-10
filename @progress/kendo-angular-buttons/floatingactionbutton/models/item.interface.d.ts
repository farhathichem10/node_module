/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * An interface for the dial items of the FloatingActionButton
 * ([see example]({% slug dialitems_floatingactionbutton %}#toc-dial-items)).
 */
export interface DialItem {
    /**
     * The CSS classes that will be rendered on the item element of the FloatingActionButton dial.
     * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
     */
    cssClass?: string;
    /**
     * The CSS styles that will be rendered on the item element of the FloatingActionButton dial.
     * Supports the type of values that are supported by [`ngStyle`](link:site.data.urls.angular['ngstyleapi']).
     */
    cssStyle?: any;
    /**
     * Specifies whether the dial item is disabled.
     */
    disabled?: boolean;
    /**
     * Defines the name of an existing icon in a Kendo UI theme.
     * If provided, the icon will be rendered inside the dial item by a `span.k-icon` element, instead of the default numeric or text content.
     */
    icon?: string;
    /**
     * Defines a CSS class or multiple classes separated by spaces which are applied to a span element.
     * Allows the usage of custom icons, rendered inside the dial item instead of the default numeric or text content.
     */
    iconClass?: string;
    /**
     * Specifies the `title` attribute of the dial item.
     * If provided, the `title` value will be rendered in `aria-label` attribute on the element of the dial item.
     */
    itemTitle?: string;
    /**
     * Specifies the text content of the dial item label.
     */
    label?: string;
}
