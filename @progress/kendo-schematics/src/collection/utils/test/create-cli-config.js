"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCliConfig = void 0;
const __1 = require("..");
const config = {
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
        "demo": {
            "root": "",
            "sourceRoot": "src",
            "projectType": "application",
            "prefix": "app",
            "schematics": {},
            "architect": {
                "build": {
                    "builder": "@angular-devkit/build-angular:browser",
                    "options": {
                        "outputPath": "dist/demo",
                        "index": "src/index.html",
                        "main": "src/main.ts",
                        "polyfills": "src/polyfills.ts",
                        "tsConfig": "src/tsconfig.app.json",
                        "assets": [
                            "src/favicon.ico",
                            "src/assets"
                        ],
                        "styles": [
                            "src/styles.css"
                        ],
                        "scripts": []
                    },
                    "configurations": {
                        "production": {
                            "fileReplacements": [
                                {
                                    "replace": "src/environments/environment.ts",
                                    "with": "src/environments/environment.prod.ts"
                                }
                            ],
                            "optimization": true,
                            "outputHashing": "all",
                            "sourceMap": false,
                            "extractCss": true,
                            "namedChunks": false,
                            "aot": true,
                            "extractLicenses": true,
                            "vendorChunk": false,
                            "buildOptimizer": true
                        }
                    }
                },
                "serve": {
                    "builder": "@angular-devkit/build-angular:dev-server",
                    "options": {
                        "browserTarget": "demo:build"
                    },
                    "configurations": {
                        "production": {
                            "browserTarget": "demo:build:production"
                        }
                    }
                },
                "extract-i18n": {
                    "builder": "@angular-devkit/build-angular:extract-i18n",
                    "options": {
                        "browserTarget": "demo:build"
                    }
                },
                "test": {
                    "builder": "@angular-devkit/build-angular:karma",
                    "options": {
                        "main": "src/test.ts",
                        "polyfills": "src/polyfills.ts",
                        "tsConfig": "src/tsconfig.spec.json",
                        "karmaConfig": "src/karma.conf.js",
                        "styles": [
                            "styles.css"
                        ],
                        "scripts": [],
                        "assets": [
                            "src/favicon.ico",
                            "src/assets"
                        ]
                    }
                },
                "lint": {
                    "builder": "@angular-devkit/build-angular:tslint",
                    "options": {
                        "tsConfig": [
                            "src/tsconfig.app.json",
                            "src/tsconfig.spec.json"
                        ],
                        "exclude": [
                            "**/node_modules/**"
                        ]
                    }
                }
            }
        }
    },
    "defaultProject": "demo"
};
function createCliConfig(tree, options = {}) {
    if (options.skipTests) {
        delete config.projects.demo.architect.test;
    }
    let content = __1.stringify(config);
    if (options.useTargets) {
        content = content.replace(/architect/g, 'targets');
    }
    tree.create('/angular.json', content);
    return tree;
}
exports.createCliConfig = createCliConfig;
