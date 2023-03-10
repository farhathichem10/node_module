"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsupportedStyles = exports.noProject = void 0;
function noProject(project) {
    return `Unable to find project '${project}' in the workspace`;
}
exports.noProject = noProject;
function unsupportedStyles(styleFilePath) {
    return `Project style file found has unsupported extension: '${styleFilePath}'\nAdding 'bootstrap.min.css' to 'angular.json'`;
}
exports.unsupportedStyles = unsupportedStyles;
//# sourceMappingURL=messages.js.map