"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require('tslint/lib/lint');
var sprintf_js_1 = require('sprintf-js');
var SyntaxKind = require('./util/syntaxKind');
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new ClassMetadataWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_SINGLE = 'Implement lifecycle hook interfaces (https://goo.gl/w1Nwk3)';
    Rule.FAILURE_MANY = 'Implement lifecycle hook interfaces (https://goo.gl/w1Nwk3)';
    Rule.HOOKS_PREFIX = 'ng';
    Rule.LIFE_CYCLE_HOOKS_NAMES = [
        "OnChanges",
        "OnInit",
        "DoCheck",
        "AfterContentInit",
        "AfterContentChecked",
        "AfterViewInit",
        "AfterViewChecked",
        "OnDestroy"
    ];
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ClassMetadataWalker = (function (_super) {
    __extends(ClassMetadataWalker, _super);
    function ClassMetadataWalker() {
        _super.apply(this, arguments);
    }
    ClassMetadataWalker.prototype.visitClassDeclaration = function (node) {
        var syntaxKind = SyntaxKind.current();
        var className = node.name.text;
        var interfaces = [];
        if (node.heritageClauses) {
            var interfacesClause = node.heritageClauses.filter(function (h) { return h.token === syntaxKind.ImplementsKeyword; });
            if (interfacesClause.length !== 0) {
                interfaces = interfacesClause[0].types.map(function (t) { return t.expression.text; });
            }
        }
        var missing = this.extractMissing(node.members, syntaxKind, interfaces);
        if (missing.length !== 0) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), sprintf_js_1.sprintf.apply(this, this.formatFailure(className, missing))));
        }
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    ClassMetadataWalker.prototype.extractMissing = function (members, syntaxKind, interfaces) {
        var ngMembers = members.filter(function (m) { return m.kind === syntaxKind.MethodDeclaration; })
            .map(function (m) { return m.name.text; })
            .filter(function (n) { return (n && n.substr(0, 2) === Rule.HOOKS_PREFIX); })
            .map(function (n) { return n.substr(2, n.lenght); })
            .filter(function (n) { return Rule.LIFE_CYCLE_HOOKS_NAMES.indexOf(n) !== -1; });
        return ngMembers.filter(function (m) { return interfaces.indexOf(m) === -1; });
    };
    ClassMetadataWalker.prototype.formatFailure = function (className, missing) {
        var failureConfig;
        if (missing.length === 1) {
            failureConfig = [Rule.FAILURE_SINGLE, className, Rule.HOOKS_PREFIX + missing[0], missing[0]];
        }
        else {
            var joinedNgMissing = missing.map(function (m) { return Rule.HOOKS_PREFIX + m; }).join(', ');
            var joinedMissingInterfaces = missing.join(', ');
            failureConfig = [Rule.FAILURE_MANY, className, joinedNgMissing, joinedMissingInterfaces];
        }
        return failureConfig;
    };
    return ClassMetadataWalker;
}(Lint.RuleWalker));
exports.ClassMetadataWalker = ClassMetadataWalker;
