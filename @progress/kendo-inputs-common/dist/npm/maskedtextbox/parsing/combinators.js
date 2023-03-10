"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.greedy = exports.sequence = void 0;
var parsers_1 = require("./parsers");
var result_1 = require("./result");
/**
 * @hidden
 */
var always = function (value) { return new parsers_1.Parser(function (stream) { return new result_1.Result(value, stream); }); };
/**
 * @hidden
 */
var append = function (p1, p2) { return p1.chain(function (vs) { return p2.map(function (v) { return vs.concat([v]); }); }); };
/**
 * @hidden
 */
var sequence = function (list) { return list.reduce(function (acc, parser) { return append(acc, parser); }, always([])); };
exports.sequence = sequence;
/**
 * @hidden
 */
var greedy = function (parser) { return new parsers_1.Parser(function (stream) {
    var result = new result_1.Result([], stream);
    while (!stream.eof()) {
        result = result.concat(parser.run(stream));
    }
    return result;
}); };
exports.greedy = greedy;
