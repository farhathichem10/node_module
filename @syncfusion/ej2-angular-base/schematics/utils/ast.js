"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const ts = require("typescript");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
/**
 * Reads file given path and returns TypeScript source file.
 */
function getSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not find file for path: ${path}`);
    }
    const content = buffer.toString();
    return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}
exports.getSourceFile = getSourceFile;
/**
 * Import and add module to root app module.
 */
function addModuleImportToRootModule(host, moduleName, src, project) {
    const modulePath = ng_ast_utils_1.getAppModulePath(host, project.architect.build.options.main);
    addModuleImportToModule(host, modulePath, moduleName, src);
}
exports.addModuleImportToRootModule = addModuleImportToRootModule;
/**
 * Import and add module to specific module path.
 * @param host the tree we are updating
 * @param modulePath src location of the module to import
 * @param moduleName name of module to import
 * @param src src location to import
 */
function addModuleImportToModule(host, modulePath, moduleName, src) {
    const moduleSource = getSourceFile(host, modulePath);
    let modulesToBeAdded = [];
    if (!moduleSource) {
        throw new schematics_1.SchematicsException(`Module not found: ${modulePath}`);
    }
    moduleName.split(',').forEach((module) => {
        if (!ast_utils_1.isImported(moduleSource, module.trim(), src) && module !== '') {
            modulesToBeAdded.push(module);
        }
    });
    if (modulesToBeAdded.length) {
        const changes = ast_utils_1.addImportToModule(moduleSource, modulePath, modulesToBeAdded.toString().trim(), src);
        const recorder = host.beginUpdate(modulePath);
        changes.forEach((change) => {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        });
        host.commitUpdate(recorder);
    }
}
exports.addModuleImportToModule = addModuleImportToModule;
