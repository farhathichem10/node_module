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
exports.addBootstrapStyles = void 0;
const path = require("path");
const schematics_1 = require("@angular-devkit/schematics");
const messages = require("../messages");
const project_1 = require("../../utils/project");
const workspace_1 = require("@schematics/angular/utility/workspace");
const BOOTSTRAP_CSS_FILEPATH = 'node_modules/bootstrap/dist/css/bootstrap.min.css';
const SUPPORTED_BOOTSTRAP_STYLE_IMPORTS = {
    '.sass': `
/* Importing Bootstrap SCSS file. */
@import '~bootstrap/scss/bootstrap'
`,
    '.scss': `
/* Importing Bootstrap SCSS file. */
@import '~bootstrap/scss/bootstrap';
`
};
/**
 * Adding bootstrap either to 'styles.scss' or 'styles.sass'
 * If not possible, we're simply adding 'bootstrap.css' to the 'angular.json'
 */
function addBootstrapStyles(options) {
    return (host, context) => __awaiter(this, void 0, void 0, function* () {
        const workspace = yield workspace_1.getWorkspace(host);
        const projectName = options.project || workspace.extensions.defaultProject.toString();
        const project = workspace.projects.get(projectName);
        if (!project) {
            throw new schematics_1.SchematicsException(messages.noProject(projectName));
        }
        const styleFilePath = project_1.getProjectStyleFile(project) || '';
        const styleFileExtension = path.extname(styleFilePath);
        const styleFilePatch = SUPPORTED_BOOTSTRAP_STYLE_IMPORTS[styleFileExtension];
        // found supported styles
        if (styleFilePatch) {
            return addBootstrapToStylesFile(styleFilePath, styleFilePatch);
        }
        else {
            // found some styles, but unsupported
            if (styleFileExtension !== '.css' && styleFileExtension !== '') {
                context.logger.warn(messages.unsupportedStyles(styleFilePath));
            }
            // just patching 'angular.json'
            return addBootstrapToAngularJson(workspace, project, host);
        }
    });
}
exports.addBootstrapStyles = addBootstrapStyles;
/**
 * Patches 'styles.scss' or 'styles.sass' to add Bootstrap snippet
 */
function addBootstrapToStylesFile(styleFilePath, styleFilePatch) {
    return (host) => {
        const styleContent = host.read(styleFilePath).toString('utf-8');
        const recorder = host.beginUpdate(styleFilePath);
        recorder.insertRight(styleContent.length, styleFilePatch);
        host.commitUpdate(recorder);
    };
}
/**
 * Patches 'angular.json' to add 'bootstrap.css' styles
 */
function addBootstrapToAngularJson(workspace, project, host) {
    const targetOptions = project_1.getProjectTargetOptions(project, 'build');
    const styles = targetOptions.styles;
    if (!styles) {
        targetOptions.styles = [BOOTSTRAP_CSS_FILEPATH];
    }
    else {
        const existingStyles = styles.map((s) => typeof s === 'string' ? s : s['input']);
        for (const [, stylePath] of existingStyles.entries()) {
            // If the given asset is already specified in the styles, we don't need to do anything.
            if (stylePath === BOOTSTRAP_CSS_FILEPATH) {
                return () => host;
            }
        }
        styles.unshift(BOOTSTRAP_CSS_FILEPATH);
    }
    return workspace_1.updateWorkspace(workspace);
}
//# sourceMappingURL=add-bootstrap.js.map