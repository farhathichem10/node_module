"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSource = void 0;
var DataSource;
(function (DataSource) {
    /**
     * An example data source will be added to the project with predefined column definitions.
     * The data and column definitions can not be modified.
     *
     * This is the default.
     */
    DataSource["Example"] = "Example";
    /**
     * The user is expected to provide column definitions.
     * A mock data will be generated out of the column definitions.
     */
    DataSource["Mock Data"] = "Mock Data";
    /**
     * The user can specify a basic module to bind to and provide column definitions,
     * but in general the user will have to author some code to connect the data.
     */
    DataSource["Existing App Data"] = "Existing App Data";
})(DataSource = exports.DataSource || (exports.DataSource = {}));
