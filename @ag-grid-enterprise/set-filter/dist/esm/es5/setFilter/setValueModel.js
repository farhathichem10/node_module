import { Constants, AgPromise, TextFilter, EventService, _ } from '@ag-grid-community/core';
import { ClientSideValuesExtractor } from '../clientSideValueExtractor';
export var SetFilterModelValuesType;
(function (SetFilterModelValuesType) {
    SetFilterModelValuesType[SetFilterModelValuesType["PROVIDED_LIST"] = 0] = "PROVIDED_LIST";
    SetFilterModelValuesType[SetFilterModelValuesType["PROVIDED_CALLBACK"] = 1] = "PROVIDED_CALLBACK";
    SetFilterModelValuesType[SetFilterModelValuesType["TAKEN_FROM_GRID_VALUES"] = 2] = "TAKEN_FROM_GRID_VALUES";
})(SetFilterModelValuesType || (SetFilterModelValuesType = {}));
var NULL_SUBSTITUTE = '__<ag-grid-pseudo-null>__';
var SetValueModel = /** @class */ (function () {
    function SetValueModel(filterParams, setIsLoading, valueFormatterService, translate, caseFormat) {
        var _this = this;
        this.filterParams = filterParams;
        this.setIsLoading = setIsLoading;
        this.valueFormatterService = valueFormatterService;
        this.translate = translate;
        this.caseFormat = caseFormat;
        this.localEventService = new EventService();
        this.miniFilterText = null;
        // The lookup for a set is much faster than the lookup for an array, especially when the length of the array is
        // thousands of records long, so where lookups are important we use a set.
        /** Values provided to the filter for use. */
        this.providedValues = null;
        /** All possible values for the filter, sorted if required. */
        this.allValues = [];
        /** Remaining values when filters from other columns have been applied. */
        this.availableValues = new Set();
        /** All values that are currently displayed, after the mini-filter has been applied. */
        this.displayedValues = [];
        /** Values that have been selected for this filter. */
        this.selectedValues = new Set();
        this.initialised = false;
        var column = filterParams.column, colDef = filterParams.colDef, textFormatter = filterParams.textFormatter, doesRowPassOtherFilter = filterParams.doesRowPassOtherFilter, suppressSorting = filterParams.suppressSorting, comparator = filterParams.comparator, rowModel = filterParams.rowModel, values = filterParams.values, caseSensitive = filterParams.caseSensitive;
        this.column = column;
        this.formatter = textFormatter || TextFilter.DEFAULT_FORMATTER;
        this.doesRowPassOtherFilters = doesRowPassOtherFilter;
        this.suppressSorting = suppressSorting || false;
        this.comparator = comparator || colDef.comparator || _.defaultComparator;
        if (rowModel.getType() === Constants.ROW_MODEL_TYPE_CLIENT_SIDE) {
            this.clientSideValuesExtractor = new ClientSideValuesExtractor(rowModel, this.filterParams, this.caseFormat);
        }
        if (values == null) {
            this.valuesType = SetFilterModelValuesType.TAKEN_FROM_GRID_VALUES;
        }
        else {
            this.valuesType = Array.isArray(values) ?
                SetFilterModelValuesType.PROVIDED_LIST :
                SetFilterModelValuesType.PROVIDED_CALLBACK;
            this.providedValues = values;
        }
        this.updateAllValues().then(function (updatedValues) { return _this.resetSelectionState(updatedValues || []); });
    }
    SetValueModel.prototype.addEventListener = function (eventType, listener, async) {
        this.localEventService.addEventListener(eventType, listener, async);
    };
    SetValueModel.prototype.removeEventListener = function (eventType, listener, async) {
        this.localEventService.removeEventListener(eventType, listener, async);
    };
    /**
     * Re-fetches the values used in the filter from the value source.
     * If keepSelection is false, the filter selection will be reset to everything selected,
     * otherwise the current selection will be preserved.
     */
    SetValueModel.prototype.refreshValues = function () {
        var currentModel = this.getModel();
        this.updateAllValues();
        // ensure model is updated for new values
        return this.setModel(currentModel);
    };
    /**
     * Overrides the current values being used for the set filter.
     * If keepSelection is false, the filter selection will be reset to everything selected,
     * otherwise the current selection will be preserved.
     */
    SetValueModel.prototype.overrideValues = function (valuesToUse) {
        var _this = this;
        return new AgPromise(function (resolve) {
            // wait for any existing values to be populated before overriding
            _this.allValuesPromise.then(function () {
                _this.valuesType = SetFilterModelValuesType.PROVIDED_LIST;
                _this.providedValues = valuesToUse;
                _this.refreshValues().then(function () { return resolve(); });
            });
        });
    };
    SetValueModel.prototype.refreshAfterAnyFilterChanged = function () {
        var _this = this;
        return this.showAvailableOnly() ?
            this.allValuesPromise.then(function (values) { return _this.updateAvailableValues(values || []); }) :
            AgPromise.resolve();
    };
    SetValueModel.prototype.isInitialised = function () {
        return this.initialised;
    };
    SetValueModel.prototype.updateAllValues = function () {
        var _this = this;
        this.allValuesPromise = new AgPromise(function (resolve) {
            switch (_this.valuesType) {
                case SetFilterModelValuesType.TAKEN_FROM_GRID_VALUES:
                case SetFilterModelValuesType.PROVIDED_LIST: {
                    var values = _this.valuesType === SetFilterModelValuesType.TAKEN_FROM_GRID_VALUES ?
                        _this.getValuesFromRows(false) : _this.uniqueUnsortedStringArray(_this.providedValues);
                    var sortedValues = _this.sortValues(values || []);
                    _this.allValues = sortedValues;
                    resolve(sortedValues);
                    break;
                }
                case SetFilterModelValuesType.PROVIDED_CALLBACK: {
                    _this.setIsLoading(true);
                    var callback_1 = _this.providedValues;
                    var _a = _this.filterParams, columnApi = _a.columnApi, api = _a.api, context = _a.context, column = _a.column, colDef = _a.colDef;
                    var params_1 = {
                        success: function (values) {
                            var processedValues = _this.uniqueUnsortedStringArray(values || []);
                            _this.setIsLoading(false);
                            var sortedValues = _this.sortValues(processedValues || []);
                            _this.allValues = sortedValues;
                            resolve(sortedValues);
                        },
                        colDef: colDef,
                        column: column,
                        columnApi: columnApi,
                        api: api,
                        context: context,
                    };
                    window.setTimeout(function () { return callback_1(params_1); }, 0);
                    break;
                }
                default:
                    throw new Error('Unrecognised valuesType');
            }
        });
        this.allValuesPromise.then(function (values) { return _this.updateAvailableValues(values || []); }).then(function () { return _this.initialised = true; });
        return this.allValuesPromise;
    };
    SetValueModel.prototype.setValuesType = function (value) {
        this.valuesType = value;
    };
    SetValueModel.prototype.getValuesType = function () {
        return this.valuesType;
    };
    SetValueModel.prototype.isValueAvailable = function (value) {
        return this.availableValues.has(value);
    };
    SetValueModel.prototype.showAvailableOnly = function () {
        return this.valuesType === SetFilterModelValuesType.TAKEN_FROM_GRID_VALUES;
    };
    SetValueModel.prototype.updateAvailableValues = function (allValues) {
        var availableValues = this.showAvailableOnly() ? this.sortValues(this.getValuesFromRows(true)) : allValues;
        this.availableValues = _.convertToSet(availableValues);
        this.localEventService.dispatchEvent({ type: SetValueModel.EVENT_AVAILABLE_VALUES_CHANGED });
        this.updateDisplayedValues();
    };
    SetValueModel.prototype.sortValues = function (values) {
        if (this.suppressSorting) {
            return values;
        }
        if (!this.filterParams.excelMode || values.indexOf(null) < 0) {
            return values.sort(this.comparator);
        }
        // ensure the blank value always appears last
        return values.filter(function (v) { return v != null; }).sort(this.comparator).concat(null);
    };
    SetValueModel.prototype.getValuesFromRows = function (removeUnavailableValues) {
        var _this = this;
        if (removeUnavailableValues === void 0) { removeUnavailableValues = false; }
        if (!this.clientSideValuesExtractor) {
            console.error('AG Grid: Set Filter cannot initialise because you are using a row model that does not contain all rows in the browser. Either use a different filter type, or configure Set Filter such that you provide it with values');
            return [];
        }
        var predicate = function (node) { return (!removeUnavailableValues || _this.doesRowPassOtherFilters(node)); };
        return this.clientSideValuesExtractor.extractUniqueValues(predicate);
    };
    /** Sets mini filter value. Returns true if it changed from last value, otherwise false. */
    SetValueModel.prototype.setMiniFilter = function (value) {
        value = _.makeNull(value);
        if (this.miniFilterText === value) {
            //do nothing if filter has not changed
            return false;
        }
        this.miniFilterText = value;
        this.updateDisplayedValues();
        return true;
    };
    SetValueModel.prototype.getMiniFilter = function () {
        return this.miniFilterText;
    };
    SetValueModel.prototype.updateDisplayedValues = function () {
        var _this = this;
        // if no filter, just display all available values
        if (this.miniFilterText == null) {
            this.displayedValues = _.values(this.availableValues);
            return;
        }
        // if filter present, we filter down the list
        this.displayedValues = [];
        // to allow for case insensitive searches, upper-case both filter text and value
        var formattedFilterText = this.caseFormat(this.formatter(this.miniFilterText) || '');
        var matchesFilter = function (valueToCheck) {
            return valueToCheck != null && _this.caseFormat(valueToCheck).indexOf(formattedFilterText) >= 0;
        };
        this.availableValues.forEach(function (value) {
            if (value == null) {
                if (_this.filterParams.excelMode && matchesFilter(_this.translate('blanks'))) {
                    _this.displayedValues.push(value);
                }
            }
            else {
                var textFormatterValue = _this.formatter(value);
                // TODO: should this be applying the text formatter *after* the value formatter?
                var valueFormatterValue = _this.valueFormatterService.formatValue(_this.column, null, textFormatterValue, _this.filterParams.valueFormatter, false);
                if (matchesFilter(textFormatterValue) || matchesFilter(valueFormatterValue)) {
                    _this.displayedValues.push(value);
                }
            }
        });
    };
    SetValueModel.prototype.getDisplayedValueCount = function () {
        return this.displayedValues.length;
    };
    SetValueModel.prototype.getDisplayedValue = function (index) {
        return this.displayedValues[index];
    };
    SetValueModel.prototype.hasSelections = function () {
        return this.filterParams.defaultToNothingSelected ?
            this.selectedValues.size > 0 :
            this.allValues.length !== this.selectedValues.size;
    };
    SetValueModel.prototype.getValues = function () {
        return this.allValues.slice();
    };
    SetValueModel.prototype.selectAllMatchingMiniFilter = function (clearExistingSelection) {
        var _this = this;
        if (clearExistingSelection === void 0) { clearExistingSelection = false; }
        if (this.miniFilterText == null) {
            // ensure everything is selected
            this.selectedValues = _.convertToSet(this.allValues);
        }
        else {
            // ensure everything that matches the mini filter is selected
            if (clearExistingSelection) {
                this.selectedValues.clear();
            }
            this.displayedValues.forEach(function (value) { return _this.selectedValues.add(value); });
        }
    };
    SetValueModel.prototype.deselectAllMatchingMiniFilter = function () {
        var _this = this;
        if (this.miniFilterText == null) {
            // ensure everything is deselected
            this.selectedValues.clear();
        }
        else {
            // ensure everything that matches the mini filter is deselected
            this.displayedValues.forEach(function (value) { return _this.selectedValues.delete(value); });
        }
    };
    SetValueModel.prototype.selectValue = function (value) {
        this.selectedValues.add(value);
    };
    SetValueModel.prototype.deselectValue = function (value) {
        if (this.filterParams.excelMode && this.isEverythingVisibleSelected()) {
            // ensure we're starting from the correct "everything selected" state
            this.resetSelectionState(this.displayedValues);
        }
        this.selectedValues.delete(value);
    };
    SetValueModel.prototype.isValueSelected = function (value) {
        return this.selectedValues.has(value);
    };
    SetValueModel.prototype.isEverythingVisibleSelected = function () {
        var _this = this;
        return this.displayedValues.filter(function (it) { return _this.isValueSelected(it); }).length === this.displayedValues.length;
    };
    SetValueModel.prototype.isNothingVisibleSelected = function () {
        var _this = this;
        return this.displayedValues.filter(function (it) { return _this.isValueSelected(it); }).length === 0;
    };
    SetValueModel.prototype.getModel = function () {
        return this.hasSelections() ? _.values(this.selectedValues) : null;
    };
    SetValueModel.prototype.setModel = function (model) {
        var _this = this;
        return this.allValuesPromise.then(function (values) {
            if (model == null) {
                _this.resetSelectionState(values || []);
            }
            else {
                // select all values from the model that exist in the filter
                _this.selectedValues.clear();
                var allValues_1 = _this.uniqueValues(values || []);
                model.forEach(function (value) {
                    var allValue = allValues_1[_this.uniqueKey(value)];
                    if (allValue !== undefined) {
                        _this.selectedValues.add(allValue);
                    }
                });
            }
        });
    };
    SetValueModel.prototype.uniqueUnsortedStringArray = function (values) {
        var _this = this;
        var stringifiedResults = _.toStrings(values);
        if (!stringifiedResults) {
            return [];
        }
        var uniqueValues = this.uniqueValues(stringifiedResults);
        /*
        * It is not possible to simply use Object.values(uniqueValues) here as the keys inside uniqueValues could be numeric.
        * Javascript objects sort numeric keys and do not fully respect the insert order, as such to trust the results are unsorted
        * we need to reference the order of the original array as done here.
        */
        return stringifiedResults.map(_.makeNull).filter(function (value) {
            var key = _this.uniqueKey(value);
            if (key in uniqueValues) {
                delete uniqueValues[key];
                return true;
            }
            return false;
        });
    };
    SetValueModel.prototype.uniqueValues = function (values) {
        var _this = this;
        // Honour case-sensitivity setting for matching purposes here, preserving original casing
        // in the selectedValues output.
        var uniqueValues = {};
        (values || []).forEach(function (rawValue) {
            var value = _.makeNull(rawValue);
            var key = _this.uniqueKey(value);
            if (uniqueValues[key] === undefined) {
                uniqueValues[key] = value;
            }
        });
        return uniqueValues;
    };
    SetValueModel.prototype.uniqueKey = function (v) {
        return v == null ? NULL_SUBSTITUTE : this.caseFormat(v);
    };
    SetValueModel.prototype.resetSelectionState = function (values) {
        if (this.filterParams.defaultToNothingSelected) {
            this.selectedValues.clear();
        }
        else {
            this.selectedValues = _.convertToSet(values || []);
        }
    };
    SetValueModel.EVENT_AVAILABLE_VALUES_CHANGED = 'availableValuesChanged';
    return SetValueModel;
}());
export { SetValueModel };
