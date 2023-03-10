/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
const set = value => pair => pair.forEach(x => x.style.height = value);
const clearHeight = pairs => pairs
    .filter(([left, right]) => left.style.height || right.style.height)
    .forEach(set(""));
const zip = (arr1, arr2) => {
    const result = [];
    for (let idx = 0, len = arr1.length; idx < len; idx++) {
        if (!arr2[idx]) {
            break;
        }
        result.push([arr1[idx], arr2[idx]]);
    }
    return result;
};
const setHeight = heights => (row, idx) => set(`${heights[idx] + 1}px`)(row);
const getHeights = rows => rows.map(([left, right]) => {
    const height = left.offsetHeight;
    const offsetHeight2 = right.offsetHeight;
    if (height < offsetHeight2) {
        return offsetHeight2;
    }
    return height;
});
/**
 * @hidden
 */
export const syncRowsHeight = (table1, table2) => {
    const activeElement = document.activeElement;
    const rows = zip(table1.rows, table2.rows);
    clearHeight(rows);
    const heights = getHeights(rows);
    [table1, table2].forEach(x => x.style.display = 'none');
    rows.forEach(setHeight(heights));
    [table1, table2].forEach(x => x.style.display = '');
    if (document.activeElement !== activeElement &&
        (table1.contains(activeElement) || table2.contains(activeElement))) {
        activeElement.focus();
    }
};
