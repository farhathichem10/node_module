import { workspaces } from '@angular-devkit/core';
import { Tree } from '@angular-devkit/schematics';
export declare type WorkspaceSchema = workspaces.WorkspaceDefinition;
export declare type WorkspaceProject = workspaces.ProjectDefinition;
export declare function getWorkspace(host: Tree): WorkspaceSchema;
export declare function getWorkspacePath(host: Tree): string;
/**
 * Gets a project from the Angular CLI workspace. If no project name is given, the first project
 * will be retrieved.
 */
export declare function getProjectFromWorkspace(config: WorkspaceSchema, projectName?: string): any;
export declare function resolveProject(host: Tree, projectName?: string): any;
