/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
const toClassList = (classNames) => String(classNames).trim().split(' ');
export const hasClasses = (element, classNames) => {
    const namesList = toClassList(classNames);
    return Boolean(toClassList(element.className).find((className) => namesList.indexOf(className) >= 0));
};
