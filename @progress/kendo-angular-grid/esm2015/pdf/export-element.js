/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { GridQuery, HEADER_CLASS, FOOTER_CLASS } from './grid-query';
const FIRST_CLASS = 'k-first';
const INPUTS = ['input', 'select', 'textarea', 'option'];
/** @hidden */
export const cloneNode = (node) => {
    const clone = node.cloneNode(false);
    if (node._kendoExportVisual) {
        clone._kendoExportVisual = node._kendoExportVisual;
    }
    if (INPUTS.indexOf(String(node.nodeName).toLowerCase()) >= 0) {
        clone.removeAttribute("id");
        clone.removeAttribute("name");
        clone.value = node.value;
        clone.checked = node.checked;
        clone.selected = node.selected;
    }
    let child = node.firstChild;
    while (child) {
        clone.appendChild(cloneNode(child));
        child = child.nextSibling;
    }
    return clone;
};
const appendNodes = (element, nodes) => {
    const length = nodes.length;
    for (let idx = 0; idx < length; idx++) {
        element.appendChild(cloneNode(nodes[idx]));
    }
};
const wrapTable = (table) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'k-grid';
    wrapper.appendChild(table);
    return wrapper;
};
const createTableElement = (sources) => {
    const sourceCount = sources.length;
    const element = cloneNode(sources[0]);
    const rowsCount = element.rows.length;
    if (sourceCount > 1) {
        for (let rowIdx = 0; rowIdx < rowsCount; rowIdx++) {
            for (let sourceIdx = 1; sourceIdx < sourceCount; sourceIdx++) {
                appendNodes(element.rows[rowIdx], sources[sourceIdx].rows[rowIdx].cells);
            }
        }
    }
    return element;
};
const setFirstCellClass = (header, headers) => {
    if (headers.length > 1 && header.rows.length > 1) {
        for (let idx = 1; idx < header.rows.length; idx++) {
            const firstCellIndex = headers[0].rows[idx].cells.length;
            const cell = header.rows[idx].cells[firstCellIndex];
            if (String(cell.className).indexOf(FIRST_CLASS) === -1) {
                cell.className += ` ${FIRST_CLASS}`;
            }
        }
    }
};
const createTable = (colGroups, headers, bodies, footers) => {
    const table = document.createElement('table');
    const colGroup = colGroups[0].cloneNode(true);
    for (let idx = 1; idx < colGroups.length; idx++) {
        appendNodes(colGroup, colGroups[idx].querySelectorAll('col'));
    }
    const header = createTableElement(headers);
    const body = createTableElement(bodies);
    header.className = HEADER_CLASS;
    setFirstCellClass(header, headers);
    table.appendChild(colGroup);
    table.appendChild(header);
    table.appendChild(body);
    if (footers.length) {
        const footer = createTableElement(footers);
        footer.className = FOOTER_CLASS;
        table.appendChild(footer);
    }
    return wrapTable(table);
};
/**
 * @hidden
 */
export const exportElement = (wrapper) => {
    const query = new GridQuery(wrapper);
    const content = query.content();
    let result;
    if (content) {
        const colGroups = [content.querySelector('colgroup')];
        const headers = [query.header().querySelector('thead')];
        const bodies = [content.querySelector('tbody')];
        const footer = query.footer();
        const footers = [];
        if (footer) {
            footers.push(footer.querySelector('tfoot'));
        }
        const lockedContent = query.content(true);
        if (lockedContent) {
            colGroups.unshift(lockedContent.querySelector('colgroup'));
            headers.unshift(query.header(true).querySelector('thead'));
            bodies.unshift(lockedContent.querySelector('tbody'));
            if (footer) {
                footers.unshift(query.footer(true).querySelector('tfoot'));
            }
        }
        result = createTable(colGroups, headers, bodies, footers);
    }
    else {
        result = wrapTable(query.table().cloneNode(true));
    }
    return result;
};
