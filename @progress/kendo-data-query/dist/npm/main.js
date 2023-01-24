"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_descriptor_interface_1 = require("./filtering/filter-descriptor.interface");
exports.isCompositeFilterDescriptor = filter_descriptor_interface_1.isCompositeFilterDescriptor;
var odata_operators_1 = require("./odata.operators");
exports.toODataString = odata_operators_1.toODataString;
var operators_1 = require("./mvc/operators");
exports.toDataSourceRequestString = operators_1.toDataSourceRequestString;
exports.toDataSourceRequest = operators_1.toDataSourceRequest;
var deserialization_1 = require("./mvc/deserialization");
exports.translateDataSourceResultGroups = deserialization_1.translateDataSourceResultGroups;
exports.translateAggregateResults = deserialization_1.translateAggregateResults;
var array_operators_1 = require("./array.operators");
exports.orderBy = array_operators_1.orderBy;
exports.process = array_operators_1.process;
exports.distinct = array_operators_1.distinct;
var accessor_1 = require("./accessor");
exports.getter = accessor_1.getter;
var filter_expression_factory_1 = require("./filtering/filter-expression.factory");
exports.filterBy = filter_expression_factory_1.filterBy;
exports.compileFilter = filter_expression_factory_1.compileFilter;
var group_operators_1 = require("./grouping/group.operators");
exports.groupBy = group_operators_1.groupBy;
var sort_array_operator_1 = require("./sorting/sort-array.operator");
exports.composeSortDescriptors = sort_array_operator_1.composeSortDescriptors;
var filter_operators_1 = require("./filtering/filter.operators");
exports.normalizeFilters = filter_operators_1.normalizeFilters;
var group_operators_2 = require("./grouping/group.operators");
exports.normalizeGroups = group_operators_2.normalizeGroups;
var aggregate_operators_1 = require("./grouping/aggregate.operators");
exports.aggregateBy = aggregate_operators_1.aggregateBy;
var operators_enum_1 = require("./filtering/operators.enum");
exports.FilterOperator = operators_enum_1.FilterOperator;
