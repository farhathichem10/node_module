/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { escapeIdentifier } from '../output/abstract_emitter';
import * as o from '../output/output_ast';
import { Identifiers } from './r3_identifiers';
export function typeWithParameters(type, numParams) {
    if (numParams === 0) {
        return o.expressionType(type);
    }
    const params = [];
    for (let i = 0; i < numParams; i++) {
        params.push(o.DYNAMIC_TYPE);
    }
    return o.expressionType(type, undefined, params);
}
const ANIMATE_SYMBOL_PREFIX = '@';
export function prepareSyntheticPropertyName(name) {
    return `${ANIMATE_SYMBOL_PREFIX}${name}`;
}
export function prepareSyntheticListenerName(name, phase) {
    return `${ANIMATE_SYMBOL_PREFIX}${name}.${phase}`;
}
export function getSafePropertyAccessString(accessor, name) {
    const escapedName = escapeIdentifier(name, false, false);
    return escapedName !== name ? `${accessor}[${escapedName}]` : `${accessor}.${name}`;
}
export function prepareSyntheticListenerFunctionName(name, phase) {
    return `animation_${name}_${phase}`;
}
export function jitOnlyGuardedExpression(expr) {
    return guardedExpression('ngJitMode', expr);
}
export function devOnlyGuardedExpression(expr) {
    return guardedExpression('ngDevMode', expr);
}
export function guardedExpression(guard, expr) {
    const guardExpr = new o.ExternalExpr({ name: guard, moduleName: null });
    const guardNotDefined = new o.BinaryOperatorExpr(o.BinaryOperator.Identical, new o.TypeofExpr(guardExpr), o.literal('undefined'));
    const guardUndefinedOrTrue = new o.BinaryOperatorExpr(o.BinaryOperator.Or, guardNotDefined, guardExpr, /* type */ undefined, 
    /* sourceSpan */ undefined, true);
    return new o.BinaryOperatorExpr(o.BinaryOperator.And, guardUndefinedOrTrue, expr);
}
export function wrapReference(value) {
    const wrapped = new o.WrappedNodeExpr(value);
    return { value: wrapped, type: wrapped };
}
export function refsToArray(refs, shouldForwardDeclare) {
    const values = o.literalArr(refs.map(ref => ref.value));
    return shouldForwardDeclare ? o.fn([], [new o.ReturnStatement(values)]) : values;
}
export function createMayBeForwardRefExpression(expression, forwardRef) {
    return { expression, forwardRef };
}
/**
 * Convert a `MaybeForwardRefExpression` to an `Expression`, possibly wrapping its expression in a
 * `forwardRef()` call.
 *
 * If `MaybeForwardRefExpression.forwardRef` is `ForwardRefHandling.Unwrapped` then the expression
 * was originally wrapped in a `forwardRef()` call to prevent the value from being eagerly evaluated
 * in the code.
 *
 * See `packages/compiler-cli/src/ngtsc/annotations/src/injectable.ts` and
 * `packages/compiler/src/jit_compiler_facade.ts` for more information.
 */
export function convertFromMaybeForwardRefExpression({ expression, forwardRef }) {
    switch (forwardRef) {
        case 0 /* None */:
        case 1 /* Wrapped */:
            return expression;
        case 2 /* Unwrapped */:
            return generateForwardRef(expression);
    }
}
/**
 * Generate an expression that has the given `expr` wrapped in the following form:
 *
 * ```
 * forwardRef(() => expr)
 * ```
 */
export function generateForwardRef(expr) {
    return o.importExpr(Identifiers.forwardRef).callFn([o.fn([], [new o.ReturnStatement(expr)])]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxLQUFLLENBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFN0MsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQWtCLEVBQUUsU0FBaUI7SUFDdEUsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjtJQUNELE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQWdCRCxNQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztBQUNsQyxNQUFNLFVBQVUsNEJBQTRCLENBQUMsSUFBWTtJQUN2RCxPQUFPLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQUVELE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxJQUFZLEVBQUUsS0FBYTtJQUN0RSxPQUFPLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ3BELENBQUM7QUFFRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsUUFB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QUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQWtCO0lBQ25ELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ZXNjYXBlSWRlbnRpZmllcn0gZnJvbSAnLi4vb3V0cHV0L2Fic3RyYWN0X2VtaXR0ZXInO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge0lkZW50aWZpZXJzfSBmcm9tICcuL3IzX2lkZW50aWZpZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVXaXRoUGFyYW1ldGVycyh0eXBlOiBvLkV4cHJlc3Npb24sIG51bVBhcmFtczogbnVtYmVyKTogby5FeHByZXNzaW9uVHlwZSB7XG4gIGlmIChudW1QYXJhbXMgPT09IDApIHtcbiAgICByZXR1cm4gby5leHByZXNzaW9uVHlwZSh0eXBlKTtcbiAgfVxuICBjb25zdCBwYXJhbXM6IG8uVHlwZVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUGFyYW1zOyBpKyspIHtcbiAgICBwYXJhbXMucHVzaChvLkRZTkFNSUNfVFlQRSk7XG4gIH1cbiAgcmV0dXJuIG8uZXhwcmVzc2lvblR5cGUodHlwZSwgdW5kZWZpbmVkLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzUmVmZXJlbmNlIHtcbiAgdmFsdWU6IG8uRXhwcmVzc2lvbjtcbiAgdHlwZTogby5FeHByZXNzaW9uO1xufVxuXG4vKipcbiAqIFJlc3VsdCBvZiBjb21waWxhdGlvbiBvZiBhIHJlbmRlcjMgY29kZSB1bml0LCBlLmcuIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBwaXBlLCBldGMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUjNDb21waWxlZEV4cHJlc3Npb24ge1xuICBleHByZXNzaW9uOiBvLkV4cHJlc3Npb247XG4gIHR5cGU6IG8uVHlwZTtcbiAgc3RhdGVtZW50czogby5TdGF0ZW1lbnRbXTtcbn1cblxuY29uc3QgQU5JTUFURV9TWU1CT0xfUFJFRklYID0gJ0AnO1xuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVTeW50aGV0aWNQcm9wZXJ0eU5hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBgJHtBTklNQVRFX1NZTUJPTF9QUkVGSVh9JHtuYW1lfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlU3ludGhldGljTGlzdGVuZXJOYW1lKG5hbWU6IHN0cmluZywgcGhhc2U6IHN0cmluZykge1xuICByZXR1cm4gYCR7QU5JTUFURV9TWU1CT0xfUFJFRklYfSR7bmFtZX0uJHtwaGFzZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2FmZVByb3BlcnR5QWNjZXNzU3RyaW5nKGFjY2Vzc29yOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGVzY2FwZWROYW1lID0gZXNjYXBlSWRlbnRpZmllcihuYW1lLCBmYWxzZSwgZmFsc2UpO1xuICByZXR1cm4gZXNjYXBlZE5hbWUgIT09IG5hbWUgPyBgJHthY2Nlc3Nvcn1bJHtlc2NhcGVkTmFtZX1dYCA6IGAke2FjY2Vzc29yfS4ke25hbWV9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVTeW50aGV0aWNMaXN0ZW5lckZ1bmN0aW9uTmFtZShuYW1lOiBzdHJpbmcsIHBoYXNlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBhbmltYXRpb25fJHtuYW1lfV8ke3BoYXNlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqaXRPbmx5R3VhcmRlZEV4cHJlc3Npb24oZXhwcjogby5FeHByZXNzaW9uKTogby5FeHByZXNzaW9uIHtcbiAgcmV0dXJuIGd1YXJkZWRFeHByZXNzaW9uKCduZ0ppdE1vZGUnLCBleHByKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldk9ubHlHdWFyZGVkRXhwcmVzc2lvbihleHByOiBvLkV4cHJlc3Npb24pOiBvLkV4cHJlc3Npb24ge1xuICByZXR1cm4gZ3VhcmRlZEV4cHJlc3Npb24oJ25nRGV2TW9kZScsIGV4cHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmRlZEV4cHJlc3Npb24oZ3VhcmQ6IHN0cmluZywgZXhwcjogby5FeHByZXNzaW9uKTogby5FeHByZXNzaW9uIHtcbiAgY29uc3QgZ3VhcmRFeHByID0gbmV3IG8uRXh0ZXJuYWxFeHByKHtuYW1lOiBndWFyZCwgbW9kdWxlTmFtZTogbnVsbH0pO1xuICBjb25zdCBndWFyZE5vdERlZmluZWQgPSBuZXcgby5CaW5hcnlPcGVyYXRvckV4cHIoXG4gICAgICBvLkJpbmFyeU9wZXJhdG9yLklkZW50aWNhbCwgbmV3IG8uVHlwZW9mRXhwcihndWFyZEV4cHIpLCBvLmxpdGVyYWwoJ3VuZGVmaW5lZCcpKTtcbiAgY29uc3QgZ3VhcmRVbmRlZmluZWRPclRydWUgPSBuZXcgby5CaW5hcnlPcGVyYXRvckV4cHIoXG4gICAgICBvLkJpbmFyeU9wZXJhdG9yLk9yLCBndWFyZE5vdERlZmluZWQsIGd1YXJkRXhwciwgLyogdHlwZSAqLyB1bmRlZmluZWQsXG4gICAgICAvKiBzb3VyY2VTcGFuICovIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIHJldHVybiBuZXcgby5CaW5hcnlPcGVyYXRvckV4cHIoby5CaW5hcnlPcGVyYXRvci5BbmQsIGd1YXJkVW5kZWZpbmVkT3JUcnVlLCBleHByKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBSZWZlcmVuY2UodmFsdWU6IGFueSk6IFIzUmVmZXJlbmNlIHtcbiAgY29uc3Qgd3JhcHBlZCA9IG5ldyBvLldyYXBwZWROb2RlRXhwcih2YWx1ZSk7XG4gIHJldHVybiB7dmFsdWU6IHdyYXBwZWQsIHR5cGU6IHdyYXBwZWR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmc1RvQXJyYXkocmVmczogUjNSZWZlcmVuY2VbXSwgc2hvdWxkRm9yd2FyZERlY2xhcmU6IGJvb2xlYW4pOiBvLkV4cHJlc3Npb24ge1xuICBjb25zdCB2YWx1ZXMgPSBvLmxpdGVyYWxBcnIocmVmcy5tYXAocmVmID0+IHJlZi52YWx1ZSkpO1xuICByZXR1cm4gc2hvdWxkRm9yd2FyZERlY2xhcmUgPyBvLmZuKFtdLCBbbmV3IG8uUmV0dXJuU3RhdGVtZW50KHZhbHVlcyldKSA6IHZhbHVlcztcbn1cblxuXG4vKipcbiAqIERlc2NyaWJlcyBhbiBleHByZXNzaW9uIHRoYXQgbWF5IGhhdmUgYmVlbiB3cmFwcGVkIGluIGEgYGZvcndhcmRSZWYoKWAgZ3VhcmQuXG4gKlxuICogVGhpcyBpcyB1c2VkIHdoZW4gZGVzY3JpYmluZyBleHByZXNzaW9ucyB0aGF0IGNhbiByZWZlciB0byB0eXBlcyB0aGF0IG1heSBlYWdlcmx5IHJlZmVyZW5jZSB0eXBlc1xuICogdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiBkZWZpbmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1heWJlRm9yd2FyZFJlZkV4cHJlc3Npb248VCBleHRlbmRzIG8uRXhwcmVzc2lvbiA9IG8uRXhwcmVzc2lvbj4ge1xuICAvKipcbiAgICogVGhlIHVud3JhcHBlZCBleHByZXNzaW9uLlxuICAgKi9cbiAgZXhwcmVzc2lvbjogVDtcbiAgLyoqXG4gICAqIFNwZWNpZmllZCB3aGV0aGVyIHRoZSBgZXhwcmVzc2lvbmAgY29udGFpbnMgYSByZWZlcmVuY2UgdG8gc29tZXRoaW5nIHRoYXQgaGFzIG5vdCB5ZXQgYmVlblxuICAgKiBkZWZpbmVkLCBhbmQgd2hldGhlciB0aGUgZXhwcmVzc2lvbiBpcyBzdGlsbCB3cmFwcGVkIGluIGEgYGZvcndhcmRSZWYoKWAgY2FsbC5cbiAgICpcbiAgICogSWYgdGhpcyB2YWx1ZSBpcyBgRm9yd2FyZFJlZkhhbmRsaW5nLk5vbmVgIHRoZW4gdGhlIGBleHByZXNzaW9uYCBpcyBzYWZlIHRvIHVzZSBhcy1pcy5cbiAgICpcbiAgICogT3RoZXJ3aXNlIHRoZSBgZXhwcmVzc2lvbmAgd2FzIHdyYXBwZWQgaW4gYSBjYWxsIHRvIGBmb3J3YXJkUmVmKClgIGFuZCBtdXN0IG5vdCBiZSBlYWdlcmx5XG4gICAqIGV2YWx1YXRlZC4gSW5zdGVhZCBpdCBtdXN0IGJlIHdyYXBwZWQgaW4gYSBmdW5jdGlvbiBjbG9zdXJlIHRoYXQgd2lsbCBiZSBldmFsdWF0ZWQgbGF6aWx5IHRvXG4gICAqIGFsbG93IHRoZSBkZWZpbml0aW9uIG9mIHRoZSBleHByZXNzaW9uIHRvIGJlIGV2YWx1YXRlZCBmaXJzdC5cbiAgICpcbiAgICogSW4gZnVsbCBBT1QgY29tcGlsYXRpb24gaXQgY2FuIGJlIHNhZmUgdG8gdW53cmFwIHRoZSBgZm9yd2FyZFJlZigpYCBjYWxsIHVwIGZyb250IGlmIHRoZVxuICAgKiBleHByZXNzaW9uIHdpbGwgYWN0dWFsbHkgYmUgZXZhbHVhdGVkIGxhemlseSBpbnNpZGUgYSBmdW5jdGlvbiBjYWxsIGFmdGVyIHRoZSB2YWx1ZSBvZlxuICAgKiBgZXhwcmVzc2lvbmAgaGFzIGJlZW4gZGVmaW5lZC5cbiAgICpcbiAgICogQnV0IGluIG90aGVyIGNhc2VzLCBzdWNoIGFzIHBhcnRpYWwgQU9UIGNvbXBpbGF0aW9uIG9yIEpJVCBjb21waWxhdGlvbiB0aGUgZXhwcmVzc2lvbiB3aWxsIGJlXG4gICAqIGV2YWx1YXRlZCBlYWdlcmx5IGluIHRvcCBsZXZlbCBjb2RlIHNvIHdpbGwgbmVlZCB0byBjb250aW51ZSB0byBiZSB3cmFwcGVkIGluIGEgYGZvcndhcmRSZWYoKWBcbiAgICogY2FsbC5cbiAgICpcbiAgICovXG4gIGZvcndhcmRSZWY6IEZvcndhcmRSZWZIYW5kbGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1heUJlRm9yd2FyZFJlZkV4cHJlc3Npb248VCBleHRlbmRzIG8uRXhwcmVzc2lvbj4oXG4gICAgZXhwcmVzc2lvbjogVCwgZm9yd2FyZFJlZjogRm9yd2FyZFJlZkhhbmRsaW5nKTogTWF5YmVGb3J3YXJkUmVmRXhwcmVzc2lvbjxUPiB7XG4gIHJldHVybiB7ZXhwcmVzc2lvbiwgZm9yd2FyZFJlZn07XG59XG5cbi8qKlxuICogQ29udmVydCBhIGBNYXliZUZvcndhcmRSZWZFeHByZXNzaW9uYCB0byBhbiBgRXhwcmVzc2lvbmAsIHBvc3NpYmx5IHdyYXBwaW5nIGl0cyBleHByZXNzaW9uIGluIGFcbiAqIGBmb3J3YXJkUmVmKClgIGNhbGwuXG4gKlxuICogSWYgYE1heWJlRm9yd2FyZFJlZkV4cHJlc3Npb24uZm9yd2FyZFJlZmAgaXMgYEZvcndhcmRSZWZIYW5kbGluZy5VbndyYXBwZWRgIHRoZW4gdGhlIGV4cHJlc3Npb25cbiAqIHdhcyBvcmlnaW5hbGx5IHdyYXBwZWQgaW4gYSBgZm9yd2FyZFJlZigpYCBjYWxsIHRvIHByZXZlbnQgdGhlIHZhbHVlIGZyb20gYmVpbmcgZWFnZXJseSBldmFsdWF0ZWRcbiAqIGluIHRoZSBjb2RlLlxuICpcbiAqIFNlZSBgcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9hbm5vdGF0aW9ucy9zcmMvaW5qZWN0YWJsZS50c2AgYW5kXG4gKiBgcGFja2FnZXMvY29tcGlsZXIvc3JjL2ppdF9jb21waWxlcl9mYWNhZGUudHNgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEZyb21NYXliZUZvcndhcmRSZWZFeHByZXNzaW9uKFxuICAgIHtleHByZXNzaW9uLCBmb3J3YXJkUmVmfTogTWF5YmVGb3J3YXJkUmVmRXhwcmVzc2lvbik6IG8uRXhwcmVzc2lvbiB7XG4gIHN3aXRjaCAoZm9yd2FyZFJlZikge1xuICAgIGNhc2UgRm9yd2FyZFJlZkhhbmRsaW5nLk5vbmU6XG4gICAgY2FzZSBGb3J3YXJkUmVmSGFuZGxpbmcuV3JhcHBlZDpcbiAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgIGNhc2UgRm9yd2FyZFJlZkhhbmRsaW5nLlVud3JhcHBlZDpcbiAgICAgIHJldHVybiBnZW5lcmF0ZUZvcndhcmRSZWYoZXhwcmVzc2lvbik7XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBleHByZXNzaW9uIHRoYXQgaGFzIHRoZSBnaXZlbiBgZXhwcmAgd3JhcHBlZCBpbiB0aGUgZm9sbG93aW5nIGZvcm06XG4gKlxuICogYGBgXG4gKiBmb3J3YXJkUmVmKCgpID0+IGV4cHIpXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRm9yd2FyZFJlZihleHByOiBvLkV4cHJlc3Npb24pOiBvLkV4cHJlc3Npb24ge1xuICByZXR1cm4gby5pbXBvcnRFeHByKElkZW50aWZpZXJzLmZvcndhcmRSZWYpLmNhbGxGbihbby5mbihbXSwgW25ldyBvLlJldHVyblN0YXRlbWVudChleHByKV0pXSk7XG59XG5cbi8qKlxuICogU3BlY2lmaWVzIGhvdyBhIGZvcndhcmQgcmVmIGhhcyBiZWVuIGhhbmRsZWQgaW4gYSBNYXliZUZvcndhcmRSZWZFeHByZXNzaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEZvcndhcmRSZWZIYW5kbGluZyB7XG4gIC8qKiBUaGUgZXhwcmVzc2lvbiB3YXMgbm90IHdyYXBwZWQgaW4gYSBgZm9yd2FyZFJlZigpYCBjYWxsIGluIHRoZSBmaXJzdCBwbGFjZS4gKi9cbiAgTm9uZSxcbiAgLyoqIFRoZSBleHByZXNzaW9uIGlzIHN0aWxsIHdyYXBwZWQgaW4gYSBgZm9yd2FyZFJlZigpYCBjYWxsLiAqL1xuICBXcmFwcGVkLFxuICAvKiogVGhlIGV4cHJlc3Npb24gd2FzIHdyYXBwZWQgaW4gYSBgZm9yd2FyZFJlZigpYCBjYWxsIGJ1dCBoYXMgc2luY2UgYmVlbiB1bndyYXBwZWQuICovXG4gIFVud3JhcHBlZCxcbn1cbiJdfQ==