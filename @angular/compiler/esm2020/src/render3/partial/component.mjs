/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as core from '../../core';
import { DEFAULT_INTERPOLATION_CONFIG } from '../../ml_parser/interpolation_config';
import * as o from '../../output/output_ast';
import { ParseLocation, ParseSourceFile, ParseSourceSpan } from '../../parse_util';
import { Identifiers as R3 } from '../r3_identifiers';
import { generateForwardRef } from '../util';
import { createComponentType } from '../view/compiler';
import { DefinitionMap } from '../view/util';
import { createDirectiveDefinitionMap } from './directive';
import { toOptionalLiteralArray } from './util';
/**
 * Compile a component declaration defined by the `R3ComponentMetadata`.
 */
export function compileDeclareComponentFromMetadata(meta, template, additionalTemplateInfo) {
    const definitionMap = createComponentDefinitionMap(meta, template, additionalTemplateInfo);
    const expression = o.importExpr(R3.declareComponent).callFn([definitionMap.toLiteralMap()]);
    const type = createComponentType(meta);
    return { expression, type, statements: [] };
}
/**
 * Gathers the declaration fields for a component into a `DefinitionMap`.
 */
export function createComponentDefinitionMap(meta, template, templateInfo) {
    const definitionMap = createDirectiveDefinitionMap(meta);
    definitionMap.set('template', getTemplateExpression(template, templateInfo));
    if (templateInfo.isInline) {
        definitionMap.set('isInline', o.literal(true));
    }
    definitionMap.set('styles', toOptionalLiteralArray(meta.styles, o.literal));
    definitionMap.set('components', compileUsedDirectiveMetadata(meta, directive => directive.isComponent === true));
    definitionMap.set('directives', compileUsedDirectiveMetadata(meta, directive => directive.isComponent !== true));
    definitionMap.set('pipes', compileUsedPipeMetadata(meta));
    definitionMap.set('viewProviders', meta.viewProviders);
    definitionMap.set('animations', meta.animations);
    if (meta.changeDetection !== undefined) {
        definitionMap.set('changeDetection', o.importExpr(R3.ChangeDetectionStrategy)
            .prop(core.ChangeDetectionStrategy[meta.changeDetection]));
    }
    if (meta.encapsulation !== core.ViewEncapsulation.Emulated) {
        definitionMap.set('encapsulation', o.importExpr(R3.ViewEncapsulation).prop(core.ViewEncapsulation[meta.encapsulation]));
    }
    if (meta.interpolation !== DEFAULT_INTERPOLATION_CONFIG) {
        definitionMap.set('interpolation', o.literalArr([o.literal(meta.interpolation.start), o.literal(meta.interpolation.end)]));
    }
    if (template.preserveWhitespaces === true) {
        definitionMap.set('preserveWhitespaces', o.literal(true));
    }
    return definitionMap;
}
function getTemplateExpression(template, templateInfo) {
    // If the template has been defined using a direct literal, we use that expression directly
    // without any modifications. This is ensures proper source mapping from the partially
    // compiled code to the source file declaring the template. Note that this does not capture
    // template literals referenced indirectly through an identifier.
    if (templateInfo.inlineTemplateLiteralExpression !== null) {
        return templateInfo.inlineTemplateLiteralExpression;
    }
    // If the template is defined inline but not through a literal, the template has been resolved
    // through static interpretation. We create a literal but cannot provide any source span. Note
    // that we cannot use the expression defining the template because the linker expects the template
    // to be defined as a literal in the declaration.
    if (templateInfo.isInline) {
        return o.literal(templateInfo.content, null, null);
    }
    // The template is external so we must synthesize an expression node with
    // the appropriate source-span.
    const contents = templateInfo.content;
    const file = new ParseSourceFile(contents, templateInfo.sourceUrl);
    const start = new ParseLocation(file, 0, 0, 0);
    const end = computeEndLocation(file, contents);
    const span = new ParseSourceSpan(start, end);
    return o.literal(contents, null, span);
}
function computeEndLocation(file, contents) {
    const length = contents.length;
    let lineStart = 0;
    let lastLineStart = 0;
    let line = 0;
    do {
        lineStart = contents.indexOf('\n', lastLineStart);
        if (lineStart !== -1) {
            lastLineStart = lineStart + 1;
            line++;
        }
    } while (lineStart !== -1);
    return new ParseLocation(file, length, line, length - lastLineStart);
}
/**
 * Compiles the directives as registered in the component metadata into an array literal of the
 * individual directives. If the component does not use any directives, then null is returned.
 */
function compileUsedDirectiveMetadata(meta, predicate) {
    const wrapType = meta.declarationListEmitMode !== 0 /* Direct */ ?
        generateForwardRef :
        (expr) => expr;
    const directives = meta.directives.filter(predicate);
    return toOptionalLiteralArray(directives, directive => {
        const dirMeta = new DefinitionMap();
        dirMeta.set('type', wrapType(directive.type));
        dirMeta.set('selector', o.literal(directive.selector));
        dirMeta.set('inputs', toOptionalLiteralArray(directive.inputs, o.literal));
        dirMeta.set('outputs', toOptionalLiteralArray(directive.outputs, o.literal));
        dirMeta.set('exportAs', toOptionalLiteralArray(directive.exportAs, o.literal));
        return dirMeta.toLiteralMap();
    });
}
/**
 * Compiles the pipes as registered in the component metadata into an object literal, where the
 * pipe's name is used as key and a reference to its type as value. If the component does not use
 * any pipes, then null is returned.
 */
function compileUsedPipeMetadata(meta) {
    if (meta.pipes.size === 0) {
        return null;
    }
    const wrapType = meta.declarationListEmitMode !== 0 /* Direct */ ?
        generateForwardRef :
        (expr) => expr;
    const entries = [];
    for (const [name, pipe] of meta.pipes) {
        entries.push({ key: name, value: wrapType(pipe), quoted: true });
    }
    return o.literalMap(entries);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvcGFydGlhbC9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxLQUFLLENBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxJQUFJLEVBQUUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxrQkFBa0IsRUFBdUIsTUFBTSxTQUFTLENBQUM7QUFFakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUczQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBK0I5Qzs7R0FFRztBQUNILE1BQU0sVUFBVSxtQ0FBbUMsQ0FDL0MsSUFBeUIsRUFBRSxRQUF3QixFQUNuRCxzQkFBb0Q7SUFDdEQsTUFBTSxhQUFhLEdBQUcsNEJBQTRCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBRTNGLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RixNQUFNLElB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QUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvRSxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUyx1QkFBdUIsQ0FBQyxJQUF5QjtJQUN4RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixtQkFBbUMsQ0FBQyxDQUFDO1FBQzlFLGtCQUFrQixDQUFDLENBQUM7UUFDcEIsQ0FBQyxJQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFakMsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7S0FDaEU7SUFDRCxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgY29yZSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR30gZnJvbSAnLi4vLi4vbWxfcGFyc2VyL2ludGVycG9sYXRpb25fY29uZmlnJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHtQYXJzZUxvY2F0aW9uLCBQYXJzZVNvdXJjZUZpbGUsIFBhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vLi4vcGFyc2VfdXRpbCc7XG5pbXBvcnQge0lkZW50aWZpZXJzIGFzIFIzfSBmcm9tICcuLi9yM19pZGVudGlmaWVycyc7XG5pbXBvcnQge2dlbmVyYXRlRm9yd2FyZFJlZiwgUjNDb21waWxlZEV4cHJlc3Npb259IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHtEZWNsYXJhdGlvbkxpc3RFbWl0TW9kZSwgUjNDb21wb25lbnRNZXRhZGF0YSwgUjNVc2VkRGlyZWN0aXZlTWV0YWRhdGF9IGZyb20gJy4uL3ZpZXcvYXBpJztcbmltcG9ydCB7Y3JlYXRlQ29tcG9uZW50VHlwZX0gZnJvbSAnLi4vdmlldy9jb21waWxlcic7XG5pbXBvcnQge1BhcnNlZFRlbXBsYXRlfSBmcm9tICcuLi92aWV3L3RlbXBsYXRlJztcbmltcG9ydCB7RGVmaW5pdGlvbk1hcH0gZnJvbSAnLi4vdmlldy91dGlsJztcblxuaW1wb3J0IHtSM0RlY2xhcmVDb21wb25lbnRNZXRhZGF0YSwgUjNEZWNsYXJlVXNlZERpcmVjdGl2ZU1ldGFkYXRhfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NyZWF0ZURpcmVjdGl2ZURlZmluaXRpb25NYXB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7dG9PcHRpb25hbExpdGVyYWxBcnJheX0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWNsYXJlQ29tcG9uZW50VGVtcGxhdGVJbmZvIHtcbiAgLyoqXG4gICAqIFRoZSBzdHJpbmcgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGlzIGlzIHRoZSBcImxvZ2ljYWxcIiB0ZW1wbGF0ZSBzdHJpbmcsIGFmdGVyIGV4cGFuc2lvbiBvZiBhbnkgZXNjYXBlZCBjaGFyYWN0ZXJzIChmb3IgaW5saW5lXG4gICAqIHRlbXBsYXRlcykuIFRoaXMgbWF5IGRpZmZlciBmcm9tIHRoZSBhY3R1YWwgdGVtcGxhdGUgYnl0ZXMgYXMgdGhleSBhcHBlYXIgaW4gdGhlIC50cyBmaWxlLlxuICAgKi9cbiAgY29udGVudDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGZ1bGwgcGF0aCB0byB0aGUgZmlsZSB3aGljaCBjb250YWlucyB0aGUgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIGVpdGhlciB0aGUgb3JpZ2luYWwgLnRzIGZpbGUgaWYgdGhlIHRlbXBsYXRlIGlzIGlubGluZSwgb3IgdGhlIC5odG1sIGZpbGUgaWYgYW5cbiAgICogZXh0ZXJuYWwgZmlsZSB3YXMgdXNlZC5cbiAgICovXG4gIHNvdXJjZVVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSB0ZW1wbGF0ZSB3YXMgaW5saW5lICh1c2luZyBgdGVtcGxhdGVgKSBvciBleHRlcm5hbCAodXNpbmcgYHRlbXBsYXRlVXJsYCkuXG4gICAqL1xuICBpc0lubGluZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgdGhlIHRlbXBsYXRlIHdhcyBkZWZpbmVkIGlubGluZSBieSBhIGRpcmVjdCBzdHJpbmcgbGl0ZXJhbCwgdGhlbiB0aGlzIGlzIHRoYXQgbGl0ZXJhbFxuICAgKiBleHByZXNzaW9uLiBPdGhlcndpc2UgYG51bGxgLCBpZiB0aGUgdGVtcGxhdGUgd2FzIG5vdCBkZWZpbmVkIGlubGluZSBvciB3YXMgbm90IGEgbGl0ZXJhbC5cbiAgICovXG4gIGlubGluZVRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb246IG8uRXhwcmVzc2lvbnxudWxsO1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBjb21wb25lbnQgZGVjbGFyYXRpb24gZGVmaW5lZCBieSB0aGUgYFIzQ29tcG9uZW50TWV0YWRhdGFgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZURlY2xhcmVDb21wb25lbnRGcm9tTWV0YWRhdGEoXG4gICAgbWV0YTogUjNDb21wb25lbnRNZXRhZGF0YSwgdGVtcGxhdGU6IFBhcnNlZFRlbXBsYXRlLFxuICAgIGFkZGl0aW9uYWxUZW1wbGF0ZUluZm86IERlY2xhcmVDb21wb25lbnRUZW1wbGF0ZUluZm8pOiBSM0NvbXBpbGVkRXhwcmVzc2lvbiB7XG4gIGNvbnN0IGRlZmluaXRpb25NYXAgPSBjcmVhdGVDb21wb25lbnREZWZpbml0aW9uTWFwKG1ldGEsIHRlbXBsYXRlLCBhZGRpdGlvbmFsVGVtcGxhdGVJbmZvKTtcblxuICBjb25zdCBleHByZXNzaW9uID0gby5pbXBvcnRFeHByKFIzLmRlY2xhcmVDb21wb25lbnQpLmNhbGxGbihbZGVmaW5pdGlvbk1hcC50b0xpdGVyYWxNYXAoKV0pO1xuICBjb25zdCB0eXBlID0gY3JlYXRlQ29tcG9uZW50VHlwZShtZXRhKTtcblxuICByZXR1cm4ge2V4cHJlc3Npb24sIHR5cGUsIHN0YXRlbWVudHM6IFtdfTtcbn1cblxuLyoqXG4gKiBHYXRoZXJzIHRoZSBkZWNsYXJhdGlvbiBmaWVsZHMgZm9yIGEgY29tcG9uZW50IGludG8gYSBgRGVmaW5pdGlvbk1hcGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnREZWZpbml0aW9uTWFwKFxuICAgIG1ldGE6IFIzQ29tcG9uZW50TWV0YWRhdGEsIHRlbXBsYXRlOiBQYXJzZWRUZW1wbGF0ZSxcbiAgICB0ZW1wbGF0ZUluZm86IERlY2xhcmVDb21wb25lbnRUZW1wbGF0ZUluZm8pOiBEZWZpbml0aW9uTWFwPFIzRGVjbGFyZUNvbXBvbmVudE1ldGFkYXRhPiB7XG4gIGNvbnN0IGRlZmluaXRpb25NYXA6IERlZmluaXRpb25NYXA8UjNEZWNsYXJlQ29tcG9uZW50TWV0YWRhdGE+ID1cbiAgICAgIGNyZWF0ZURpcmVjdGl2ZURlZmluaXRpb25NYXAobWV0YSk7XG5cbiAgZGVmaW5pdGlvbk1hcC5zZXQoJ3RlbXBsYXRlJywgZ2V0VGVtcGxhdGVFeHByZXNzaW9uKHRlbXBsYXRlLCB0ZW1wbGF0ZUluZm8pKTtcbiAgaWYgKHRlbXBsYXRlSW5mby5pc0lubGluZSkge1xuICAgIGRlZmluaXRpb25NYXAuc2V0KCdpc0lubGluZScsIG8ubGl0ZXJhbCh0cnVlKSk7XG4gIH1cblxuICBkZWZpbml0aW9uTWFwLnNldCgnc3R5bGVzJywgdG9PcHRpb25hbExpdGVyYWxBcnJheShtZXRhLnN0eWxlcywgby5saXRlcmFsKSk7XG4gIGRlZmluaXRpb25NYXAuc2V0KFxuICAgICAgJ2NvbXBvbmVudHMnLFxuICAgICAgY29tcGlsZVVzZWREaXJlY3RpdmVNZXRhZGF0YShtZXRhLCBkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLmlzQ29tcG9uZW50ID09PSB0cnVlKSk7XG4gIGRlZmluaXRpb25NYXAuc2V0KFxuICAgICAgJ2RpcmVjdGl2ZXMnLFxuICAgICAgY29tcGlsZVVzZWREaXJlY3RpdmVNZXRhZGF0YShtZXRhLCBkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLmlzQ29tcG9uZW50ICE9PSB0cnVlKSk7XG4gIGRlZmluaXRpb25NYXAuc2V0KCdwaXBlcycsIGNvbXBpbGVVc2VkUGlwZU1ldGFkYXRhKG1ldGEpKTtcbiAgZGVmaW5pdGlvbk1hcC5zZXQoJ3ZpZXdQcm92aWRlcnMnLCBtZXRhLnZpZXdQcm92aWRlcnMpO1xuICBkZWZpbml0aW9uTWFwLnNldCgnYW5pbWF0aW9ucycsIG1ldGEuYW5pbWF0aW9ucyk7XG5cbiAgaWYgKG1ldGEuY2hhbmdlRGV0ZWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZpbml0aW9uTWFwLnNldChcbiAgICAgICAgJ2NoYW5nZURldGVjdGlvbicsXG4gICAgICAgIG8uaW1wb3J0RXhwcihSMy5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSlcbiAgICAgICAgICAgIC5wcm9wKGNvcmUuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lbbWV0YS5jaGFuZ2VEZXRlY3Rpb25dKSk7XG4gIH1cbiAgaWYgKG1ldGEuZW5jYXBzdWxhdGlvbiAhPT0gY29yZS5WaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCkge1xuICAgIGRlZmluaXRpb25NYXAuc2V0KFxuICAgICAgICAnZW5jYXBzdWxhdGlvbicsXG4gICAgICAgIG8uaW1wb3J0RXhwcihSMy5WaWV3RW5jYXBzdWxhdGlvbikucHJvcChjb3JlLlZpZXdFbmNhcHN1bGF0aW9uW21ldGEuZW5jYXBzdWxhdGlvbl0pKTtcbiAgfVxuICBpZiAobWV0YS5pbnRlcnBvbGF0aW9uICE9PSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHKSB7XG4gICAgZGVmaW5pdGlvbk1hcC5zZXQoXG4gICAgICAgICdpbnRlcnBvbGF0aW9uJyxcbiAgICAgICAgby5saXRlcmFsQXJyKFtvLmxpdGVyYWwobWV0YS5pbnRlcnBvbGF0aW9uLnN0YXJ0KSwgby5saXRlcmFsKG1ldGEuaW50ZXJwb2xhdGlvbi5lbmQpXSkpO1xuICB9XG5cbiAgaWYgKHRlbXBsYXRlLnByZXNlcnZlV2hpdGVzcGFjZXMgPT09IHRydWUpIHtcbiAgICBkZWZpbml0aW9uTWFwLnNldCgncHJlc2VydmVXaGl0ZXNwYWNlcycsIG8ubGl0ZXJhbCh0cnVlKSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5pdGlvbk1hcDtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGxhdGVFeHByZXNzaW9uKFxuICAgIHRlbXBsYXRlOiBQYXJzZWRUZW1wbGF0ZSwgdGVtcGxhdGVJbmZvOiBEZWNsYXJlQ29tcG9uZW50VGVtcGxhdGVJbmZvKTogby5FeHByZXNzaW9uIHtcbiAgLy8gSWYgdGhlIHRlbXBsYXRlIGhhcyBiZWVuIGRlZmluZWQgdXNpbmcgYSBkaXJlY3QgbGl0ZXJhbCwgd2UgdXNlIHRoYXQgZXhwcmVzc2lvbiBkaXJlY3RseVxuICAvLyB3aXRob3V0IGFueSBtb2RpZmljYXRpb25zLiBUaGlzIGlzIGVuc3VyZXMgcHJvcGVyIHNvdXJjZSBtYXBwaW5nIGZyb20gdGhlIHBhcnRpYWxseVxuICAvLyBjb21waWxlZCBjb2RlIHRvIHRoZSBzb3VyY2UgZmlsZSBkZWNsYXJpbmcgdGhlIHRlbXBsYXRlLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBjYXB0dXJlXG4gIC8vIHRlbXBsYXRlIGxpdGVyYWxzIHJlZmVyZW5jZWQgaW5kaXJlY3RseSB0aHJvdWdoIGFuIGlkZW50aWZpZXIuXG4gIGlmICh0ZW1wbGF0ZUluZm8uaW5saW5lVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZUluZm8uaW5saW5lVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8vIElmIHRoZSB0ZW1wbGF0ZSBpcyBkZWZpbmVkIGlubGluZSBidXQgbm90IHRocm91Z2ggYSBsaXRlcmFsLCB0aGUgdGVtcGxhdGUgaGFzIGJlZW4gcmVzb2x2ZWRcbiAgLy8gdGhyb3VnaCBzdGF0aWMgaW50ZXJwcmV0YXRpb24uIFdlIGNyZWF0ZSBhIGxpdGVyYWwgYnV0IGNhbm5vdCBwcm92aWRlIGFueSBzb3VyY2Ugc3Bhbi4gTm90ZVxuICAvLyB0aGF0IHdlIGNhbm5vdCB1c2UgdGhlIGV4cHJlc3Npb24gZGVmaW5pbmcgdGhlIHRlbXBsYXRlIGJlY2F1c2UgdGhlIGxpbmtlciBleHBlY3RzIHRoZSB0ZW1wbGF0ZVxuICAvLyB0byBiZSBkZWZpbmVkIGFzIGEgbGl0ZXJhbCBpbiB0aGUgZGVjbGFyYXRpb24uXG4gIGlmICh0ZW1wbGF0ZUluZm8uaXNJbmxpbmUpIHtcbiAgICByZXR1cm4gby5saXRlcmFsKHRlbXBsYXRlSW5mby5jb250ZW50LCBudWxsLCBudWxsKTtcbiAgfVxuXG4gIC8vIFRoZSB0ZW1wbGF0ZSBpcyBleHRlcm5hbCBzbyB3ZSBtdXN0IHN5bnRoZXNpemUgYW4gZXhwcmVzc2lvbiBub2RlIHdpdGhcbiAgLy8gdGhlIGFwcHJvcHJpYXRlIHNvdXJjZS1zcGFuLlxuICBjb25zdCBjb250ZW50cyA9IHRlbXBsYXRlSW5mby5jb250ZW50O1xuICBjb25zdCBmaWxlID0gbmV3IFBhcnNlU291cmNlRmlsZShjb250ZW50cywgdGVtcGxhdGVJbmZvLnNvdXJjZVVybCk7XG4gIGNvbnN0IHN0YXJ0ID0gbmV3IFBhcnNlTG9jYXRpb24oZmlsZSwgMCwgMCwgMCk7XG4gIGNvbnN0IGVuZCA9IGNvbXB1dGVFbmRMb2NhdGlvbihmaWxlLCBjb250ZW50cyk7XG4gIGNvbnN0IHNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0LCBlbmQpO1xuICByZXR1cm4gby5saXRlcmFsKGNvbnRlbnRzLCBudWxsLCBzcGFuKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUVuZExvY2F0aW9uKGZpbGU6IFBhcnNlU291cmNlRmlsZSwgY29udGVudHM6IHN0cmluZyk6IFBhcnNlTG9jYXRpb24ge1xuICBjb25zdCBsZW5ndGggPSBjb250ZW50cy5sZW5ndGg7XG4gIGxldCBsaW5lU3RhcnQgPSAwO1xuICBsZXQgbGFzdExpbmVTdGFydCA9IDA7XG4gIGxldCBsaW5lID0gMDtcbiAgZG8ge1xuICAgIGxpbmVTdGFydCA9IGNvbnRlbnRzLmluZGV4T2YoJ1xcbicsIGxhc3RMaW5lU3RhcnQpO1xuICAgIGlmIChsaW5lU3RhcnQgIT09IC0xKSB7XG4gICAgICBsYXN0TGluZVN0YXJ0ID0gbGluZVN0YXJ0ICsgMTtcbiAgICAgIGxpbmUrKztcbiAgICB9XG4gIH0gd2hpbGUgKGxpbmVTdGFydCAhPT0gLTEpO1xuXG4gIHJldHVybiBuZXcgUGFyc2VMb2NhdGlvbihmaWxlLCBsZW5ndGgsIGxpbmUsIGxlbmd0aCAtIGxhc3RMaW5lU3RhcnQpO1xufVxuXG4vKipcbiAqIENvbXBpbGVzIHRoZSBkaXJlY3RpdmVzIGFzIHJlZ2lzdGVyZWQgaW4gdGhlIGNvbXBvbmVudCBtZXRhZGF0YSBpbnRvIGFuIGFycmF5IGxpdGVyYWwgb2YgdGhlXG4gKiBpbmRpdmlkdWFsIGRpcmVjdGl2ZXMuIElmIHRoZSBjb21wb25lbnQgZG9lcyBub3QgdXNlIGFueSBkaXJlY3RpdmVzLCB0aGVuIG51bGwgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVVc2VkRGlyZWN0aXZlTWV0YWRhdGEoXG4gICAgbWV0YTogUjNDb21wb25lbnRNZXRhZGF0YSxcbiAgICBwcmVkaWNhdGU6IChkaXJlY3RpdmU6IFIzVXNlZERpcmVjdGl2ZU1ldGFkYXRhKSA9PiBib29sZWFuKTogby5MaXRlcmFsQXJyYXlFeHByfG51bGwge1xuICBjb25zdCB3cmFwVHlwZSA9IG1ldGEuZGVjbGFyYXRpb25MaXN0RW1pdE1vZGUgIT09IERlY2xhcmF0aW9uTGlzdEVtaXRNb2RlLkRpcmVjdCA/XG4gICAgICBnZW5lcmF0ZUZvcndhcmRSZWYgOlxuICAgICAgKGV4cHI6IG8uRXhwcmVzc2lvbikgPT4gZXhwcjtcblxuICBjb25zdCBkaXJlY3RpdmVzID0gbWV0YS5kaXJlY3RpdmVzLmZpbHRlcihwcmVkaWNhdGUpO1xuICByZXR1cm4gdG9PcHRpb25hbExpdGVyYWxBcnJheShkaXJlY3RpdmVzLCBkaXJlY3RpdmUgPT4ge1xuICAgIGNvbnN0IGRpck1ldGEgPSBuZXcgRGVmaW5pdGlvbk1hcDxSM0RlY2xhcmVVc2VkRGlyZWN0aXZlTWV0YWRhdGE+KCk7XG4gICAgZGlyTWV0YS5zZXQoJ3R5cGUnLCB3cmFwVHlwZShkaXJlY3RpdmUudHlwZSkpO1xuICAgIGRpck1ldGEuc2V0KCdzZWxlY3RvcicsIG8ubGl0ZXJhbChkaXJlY3RpdmUuc2VsZWN0b3IpKTtcbiAgICBkaXJNZXRhLnNldCgnaW5wdXRzJywgdG9PcHRpb25hbExpdGVyYWxBcnJheShkaXJlY3RpdmUuaW5wdXRzLCBvLmxpdGVyYWwpKTtcbiAgICBkaXJNZXRhLnNldCgnb3V0cHV0cycsIHRvT3B0aW9uYWxMaXRlcmFsQXJyYXkoZGlyZWN0aXZlLm91dHB1dHMsIG8ubGl0ZXJhbCkpO1xuICAgIGRpck1ldGEuc2V0KCdleHBvcnRBcycsIHRvT3B0aW9uYWxMaXRlcmFsQXJyYXkoZGlyZWN0aXZlLmV4cG9ydEFzLCBvLmxpdGVyYWwpKTtcbiAgICByZXR1cm4gZGlyTWV0YS50b0xpdGVyYWxNYXAoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29tcGlsZXMgdGhlIHBpcGVzIGFzIHJlZ2lzdGVyZWQgaW4gdGhlIGNvbXBvbmVudCBtZXRhZGF0YSBpbnRvIGFuIG9iamVjdCBsaXRlcmFsLCB3aGVyZSB0aGVcbiAqIHBpcGUncyBuYW1lIGlzIHVzZWQgYXMga2V5IGFuZCBhIHJlZmVyZW5jZSB0byBpdHMgdHlwZSBhcyB2YWx1ZS4gSWYgdGhlIGNvbXBvbmVudCBkb2VzIG5vdCB1c2VcbiAqIGFueSBwaXBlcywgdGhlbiBudWxsIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBjb21waWxlVXNlZFBpcGVNZXRhZGF0YShtZXRhOiBSM0NvbXBvbmVudE1ldGFkYXRhKTogby5MaXRlcmFsTWFwRXhwcnxudWxsIHtcbiAgaWYgKG1ldGEucGlwZXMuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgd3JhcFR5cGUgPSBtZXRhLmRlY2xhcmF0aW9uTGlzdEVtaXRNb2RlICE9PSBEZWNsYXJhdGlvbkxpc3RFbWl0TW9kZS5EaXJlY3QgP1xuICAgICAgZ2VuZXJhdGVGb3J3YXJkUmVmIDpcbiAgICAgIChleHByOiBvLkV4cHJlc3Npb24pID0+IGV4cHI7XG5cbiAgY29uc3QgZW50cmllcyA9IFtdO1xuICBmb3IgKGNvbnN0IFtuYW1lLCBwaXBlXSBvZiBtZXRhLnBpcGVzKSB7XG4gICAgZW50cmllcy5wdXNoKHtrZXk6IG5hbWUsIHZhbHVlOiB3cmFwVHlwZShwaXBlKSwgcXVvdGVkOiB0cnVlfSk7XG4gIH1cbiAgcmV0dXJuIG8ubGl0ZXJhbE1hcChlbnRyaWVzKTtcbn1cbiJdfQ==