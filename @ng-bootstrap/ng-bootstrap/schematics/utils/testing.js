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
exports.createTestApp = void 0;
function createWorkspace(runner) {
    return runner
        .runExternalSchematicAsync('@schematics/angular', 'workspace', {
        name: 'workspace',
        version: '10.0.0',
        newProjectRoot: 'projects',
    })
        .toPromise();
}
/**
 * Creates a sample workspace with two applications: 'app' (default) and 'second-app'
 */
function createTestApp(runner, appOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let tree = yield createWorkspace(runner);
        tree =
            yield runner.runExternalSchematicAsync('@schematics/angular', 'application', Object.assign({ name: 'app' }, appOptions), tree)
                .toPromise();
        return runner
            .runExternalSchematicAsync('@schematics/angular', 'application', Object.assign({ name: 'second-app' }, appOptions), tree)
            .toPromise();
    });
}
exports.createTestApp = createTestApp;
//# sourceMappingURL=testing.js.map