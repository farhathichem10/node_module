"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNgbModuleToAppModule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const ts = require("@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript");
const project_1 = require("../../utils/project");
const workspace_1 = require("@schematics/angular/utility/workspace");
const messages = require("../messages");
const NG_BOOTSTRAP_MODULE_NAME = 'NgbModule';
const NG_BOOTSTRAP_PACKAGE_NAME = '@ng-bootstrap/ng-bootstrap';
/**
 * Patches main application module by adding 'NgbModule' import
 */
function addNgbModuleToAppModule(options) {
    return (host) => __awaiter(this, void 0, void 0, function* () {
        const workspace = yield workspace_1.getWorkspace(host);
        const projectName = options.project || workspace.extensions.defaultProject;
        const project = workspace.projects.get(projectName);
        if (!project) {
            throw new schematics_1.SchematicsException(messages.noProject(projectName));
        }
        const buildOptions = project_1.getProjectTargetOptions(project, 'build');
        const modulePath = ng_ast_utils_1.getAppModulePath(host, buildOptions.main);
        const text = host.read(modulePath);
        if (text === null) {
            throw new schematics_1.SchematicsException(`File '${modulePath}' does not exist.`);
        }
        const source = ts.createSourceFile(modulePath, text.toString('utf-8'), ts.ScriptTarget.Latest, true);
        const changes = ast_utils_1.addImportToModule(source, modulePath, NG_BOOTSTRAP_MODULE_NAME, NG_BOOTSTRAP_PACKAGE_NAME);
        const recorder = host.beginUpdate(modulePath);
        for (const change of changes) {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(recorder);
    });
}
exports.addNgbModuleToAppModule = addNgbModuleToAppModule;
//# sourceMappingURL=add-ngb-module.js.map