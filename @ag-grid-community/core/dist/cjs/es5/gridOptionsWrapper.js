/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v28.2.1
 * @link https://www.ag-grid.com/
 * @license MIT
 */
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var colDefUtil_1 = require("./components/colDefUtil");
var componentUtil_1 = require("./components/componentUtil");
var constants_1 = require("./constants/constants");
var context_1 = require("./context/context");
var sideBar_1 = require("./entities/sideBar");
var eventKeys_1 = require("./eventKeys");
var eventService_1 = require("./eventService");
var moduleNames_1 = require("./modules/moduleNames");
var moduleRegistry_1 = require("./modules/moduleRegistry");
var propertyKeys_1 = require("./propertyKeys");
var browser_1 = require("./utils/browser");
var function_1 = require("./utils/function");
var fuzzyMatch_1 = require("./utils/fuzzyMatch");
var generic_1 = require("./utils/generic");
var number_1 = require("./utils/number");
var object_1 = require("./utils/object");
var string_1 = require("./utils/string");
var DEFAULT_ROW_HEIGHT = 25;
var DEFAULT_DETAIL_ROW_HEIGHT = 300;
var DEFAULT_VIEWPORT_ROW_MODEL_PAGE_SIZE = 5;
var DEFAULT_VIEWPORT_ROW_MODEL_BUFFER_SIZE = 5;
var DEFAULT_KEEP_DETAIL_ROW_COUNT = 10;
function isTrue(value) {
    return value === true || value === 'true';
}
function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (typeof value == 'string') {
        return parseInt(value, 10);
    }
}
function zeroOrGreater(value, defaultValue) {
    if (value >= 0) {
        return value;
    }
    // zero gets returned if number is missing or the wrong type
    return defaultValue;
}
function oneOrGreater(value, defaultValue) {
    var valueNumber = parseInt(value, 10);
    if (number_1.isNumeric(valueNumber) && valueNumber > 0) {
        return valueNumber;
    }
    return defaultValue;
}
var GridOptionsWrapper = /** @class */ (function () {
    function GridOptionsWrapper() {
        this.propertyEventService = new eventService_1.EventService();
        this.domDataKey = '__AG_' + Math.random().toString();
        this.destroyed = false;
    }
    GridOptionsWrapper_1 = GridOptionsWrapper;
    GridOptionsWrapper.prototype.agWire = function (gridApi, columnApi) {
        this.gridOptions.api = gridApi;
        this.gridOptions.columnApi = columnApi;
        this.checkForDeprecated();
        this.checkForViolations();
    };
    GridOptionsWrapper.prototype.destroy = function () {
        // need to remove these, as we don't own the lifecycle of the gridOptions, we need to
        // remove the references in case the user keeps the grid options, we want the rest
        // of the grid to be picked up by the garbage collector
        this.gridOptions.api = null;
        this.gridOptions.columnApi = null;
        this.destroyed = true;
    };
    GridOptionsWrapper.prototype.init = function () {
        var _this = this;
        if (this.gridOptions.suppressPropertyNamesCheck !== true) {
            this.checkGridOptionsProperties();
            this.checkColumnDefProperties();
        }
        // parse side bar options into correct format
        if (this.gridOptions.sideBar != null) {
            this.gridOptions.sideBar = sideBar_1.SideBarDefParser.parse(this.gridOptions.sideBar);
        }
        var async = this.useAsyncEvents();
        this.eventService.addGlobalListener(this.globalEventHandler.bind(this), async);
        if (this.isGroupSelectsChildren() && this.isSuppressParentsInRowNodes()) {
            console.warn("AG Grid: 'groupSelectsChildren' does not work with 'suppressParentsInRowNodes', this selection method needs the part in rowNode to work");
        }
        if (this.isGroupSelectsChildren()) {
            if (!this.isRowSelectionMulti()) {
                console.warn("AG Grid: rowSelection must be 'multiple' for groupSelectsChildren to make sense");
            }
            if (this.isRowModelServerSide()) {
                console.warn('AG Grid: group selects children is NOT support for Server Side Row Model. ' +
                    'This is because the rows are lazy loaded, so selecting a group is not possible as' +
                    'the grid has no way of knowing what the children are.');
            }
        }
        if (this.isGroupRemoveSingleChildren() && this.isGroupHideOpenParents()) {
            console.warn("AG Grid: groupRemoveSingleChildren and groupHideOpenParents do not work with each other, you need to pick one. And don't ask us how to use these together on our support forum either, you will get the same answer!");
        }
        if (this.isRowModelServerSide()) {
            var msg = function (prop) { return "AG Grid: '" + prop + "' is not supported on the Server-Side Row Model"; };
            if (generic_1.exists(this.gridOptions.groupDefaultExpanded)) {
                console.warn(msg('groupDefaultExpanded'));
            }
            if (generic_1.exists(this.gridOptions.groupDefaultExpanded)) {
                console.warn(msg('groupIncludeFooter'));
            }
            if (generic_1.exists(this.gridOptions.groupDefaultExpanded)) {
                console.warn(msg('groupIncludeTotalFooter'));
            }
        }
        if (isTrue(this.gridOptions.enableRangeSelection)) {
            moduleRegistry_1.ModuleRegistry.assertRegistered(moduleNames_1.ModuleNames.RangeSelectionModule, 'enableRangeSelection');
        }
        else if (this.isEnableRangeHandle() || this.isEnableFillHandle()) {
            console.warn("AG Grid: 'enableRangeHandle' or 'enableFillHandle' will not work unless 'enableRangeSelection' is set to true");
        }
        if (this.isGroupRowsSticky()) {
            if (this.isGroupHideOpenParents()) {
                console.warn("AG Grid: groupRowsSticky and groupHideOpenParents do not work with each other, you need to pick one.");
            }
            if (this.isMasterDetail()) {
                console.warn("AG Grid: groupRowsSticky and masterDetail do not work with each other, you need to pick one.");
            }
            if (this.isPagination()) {
                console.warn("AG Grid: groupRowsSticky and pagination do not work with each other, you need to pick one.");
            }
        }
        var warnOfDeprecaredIcon = function (name) {
            if (_this.gridOptions.icons && _this.gridOptions.icons[name]) {
                console.warn("gridOptions.icons." + name + " is no longer supported. For information on how to style checkboxes and radio buttons, see https://www.ag-grid.com/javascript-grid-icons/");
            }
        };
        warnOfDeprecaredIcon('radioButtonOff');
        warnOfDeprecaredIcon('radioButtonOn');
        warnOfDeprecaredIcon('checkboxChecked');
        warnOfDeprecaredIcon('checkboxUnchecked');
        warnOfDeprecaredIcon('checkboxIndeterminate');
        // sets an initial calculation for the scrollbar width
        this.getScrollbarWidth();
    };
    GridOptionsWrapper.prototype.checkColumnDefProperties = function () {
        var _this = this;
        if (this.gridOptions.columnDefs == null) {
            return;
        }
        this.gridOptions.columnDefs.forEach(function (colDef) {
            var userProperties = Object.getOwnPropertyNames(colDef);
            var validProperties = __spread(colDefUtil_1.ColDefUtil.ALL_PROPERTIES, colDefUtil_1.ColDefUtil.FRAMEWORK_PROPERTIES);
            _this.checkProperties(userProperties, validProperties, validProperties, 'colDef', 'https://www.ag-grid.com/javascript-grid-column-properties/');
        });
    };
    GridOptionsWrapper.prototype.checkGridOptionsProperties = function () {
        var userProperties = Object.getOwnPropertyNames(this.gridOptions);
        var validProperties = __spread(propertyKeys_1.PropertyKeys.ALL_PROPERTIES, propertyKeys_1.PropertyKeys.FRAMEWORK_PROPERTIES, generic_1.values(eventKeys_1.Events).map(function (event) { return componentUtil_1.ComponentUtil.getCallbackForEvent(event); }));
        var validPropertiesAndExceptions = __spread(validProperties, ['api', 'columnApi']);
        this.checkProperties(userProperties, validPropertiesAndExceptions, validProperties, 'gridOptions', 'https://www.ag-grid.com/javascript-data-grid/grid-options/');
    };
    GridOptionsWrapper.prototype.checkProperties = function (userProperties, validPropertiesAndExceptions, validProperties, containerName, docsUrl) {
        var invalidProperties = fuzzyMatch_1.fuzzyCheckStrings(userProperties, validPropertiesAndExceptions, validProperties);
        object_1.iterateObject(invalidProperties, function (key, value) {
            console.warn("ag-grid: invalid " + containerName + " property '" + key + "' did you mean any of these: " + value.slice(0, 8).join(", "));
        });
        if (Object.keys(invalidProperties).length > 0) {
            console.warn("ag-grid: to see all the valid " + containerName + " properties please check: " + docsUrl);
        }
    };
    /**
    * Wrap the user callback and attach the api, columnApi and context to the params object on the way through.
    * @param callback User provided callback
    * @returns Wrapped callback where the params object not require api, columnApi and context
    */
    GridOptionsWrapper.prototype.mergeGridCommonParams = function (callback) {
        var _this = this;
        if (callback) {
            var wrapped = function (callbackParams) {
                var mergedParams = __assign(__assign({}, callbackParams), { api: _this.getApi(), columnApi: _this.getColumnApi(), context: _this.getContext() });
                return callback(mergedParams);
            };
            return wrapped;
        }
        return callback;
    };
    GridOptionsWrapper.prototype.getDomDataKey = function () {
        return this.domDataKey;
    };
    // returns the dom data, or undefined if not found
    GridOptionsWrapper.prototype.getDomData = function (element, key) {
        var domData = element[this.getDomDataKey()];
        return domData ? domData[key] : undefined;
    };
    GridOptionsWrapper.prototype.setDomData = function (element, key, value) {
        var domDataKey = this.getDomDataKey();
        var domData = element[domDataKey];
        if (generic_1.missing(domData)) {
            domData = {};
            element[domDataKey] = domData;
        }
        domData[key] = value;
    };
    GridOptionsWrapper.prototype.isRowSelection = function () {
        return this.gridOptions.rowSelection === 'single' || this.gridOptions.rowSelection === 'multiple';
    };
    GridOptionsWrapper.prototype.isSuppressRowDeselection = function () {
        return isTrue(this.gridOptions.suppressRowDeselection);
    };
    GridOptionsWrapper.prototype.isRowSelectionMulti = function () {
        return this.gridOptions.rowSelection === 'multiple';
    };
    GridOptionsWrapper.prototype.isRowMultiSelectWithClick = function () {
        return isTrue(this.gridOptions.rowMultiSelectWithClick);
    };
    GridOptionsWrapper.prototype.getContext = function () {
        return this.gridOptions.context;
    };
    GridOptionsWrapper.prototype.isPivotMode = function () {
        return isTrue(this.gridOptions.pivotMode);
    };
    GridOptionsWrapper.prototype.isSuppressExpandablePivotGroups = function () {
        return isTrue(this.gridOptions.suppressExpandablePivotGroups);
    };
    GridOptionsWrapper.prototype.getPivotColumnGroupTotals = function () {
        return this.gridOptions.pivotColumnGroupTotals;
    };
    GridOptionsWrapper.prototype.getPivotRowTotals = function () {
        return this.gridOptions.pivotRowTotals;
    };
    GridOptionsWrapper.prototype.isRowModelInfinite = function () {
        return this.gridOptions.rowModelType === constants_1.Constants.ROW_MODEL_TYPE_INFINITE;
    };
    GridOptionsWrapper.prototype.isRowModelViewport = function () {
        return this.gridOptions.rowModelType === constants_1.Constants.ROW_MODEL_TYPE_VIEWPORT;
    };
    GridOptionsWrapper.prototype.isRowModelServerSide = function () {
        return this.gridOptions.rowModelType === constants_1.Constants.ROW_MODEL_TYPE_SERVER_SIDE;
    };
    GridOptionsWrapper.prototype.isRowModelDefault = function () {
        return (generic_1.missing(this.gridOptions.rowModelType) ||
            this.gridOptions.rowModelType === constants_1.Constants.ROW_MODEL_TYPE_CLIENT_SIDE);
    };
    GridOptionsWrapper.prototype.isFullRowEdit = function () {
        return this.gridOptions.editType === 'fullRow';
    };
    GridOptionsWrapper.prototype.isSuppressFocusAfterRefresh = function () {
        return isTrue(this.gridOptions.suppressFocusAfterRefresh);
    };
    GridOptionsWrapper.prototype.isSuppressBrowserResizeObserver = function () {
        return isTrue(this.gridOptions.suppressBrowserResizeObserver);
    };
    GridOptionsWrapper.prototype.isSuppressMaintainUnsortedOrder = function () {
        return isTrue(this.gridOptions.suppressMaintainUnsortedOrder);
    };
    GridOptionsWrapper.prototype.isSuppressClearOnFillReduction = function () {
        return isTrue(this.gridOptions.suppressClearOnFillReduction);
    };
    GridOptionsWrapper.prototype.isShowToolPanel = function () {
        return isTrue(this.gridOptions.sideBar && Array.isArray(this.getSideBar().toolPanels));
    };
    GridOptionsWrapper.prototype.getSideBar = function () {
        return this.gridOptions.sideBar;
    };
    GridOptionsWrapper.prototype.isSuppressTouch = function () {
        return isTrue(this.gridOptions.suppressTouch);
    };
    GridOptionsWrapper.prototype.isMaintainColumnOrder = function () {
        return isTrue(this.gridOptions.maintainColumnOrder);
    };
    GridOptionsWrapper.prototype.isSuppressRowTransform = function () {
        return isTrue(this.gridOptions.suppressRowTransform);
    };
    GridOptionsWrapper.prototype.isSuppressColumnStateEvents = function () {
        return isTrue(this.gridOptions.suppressColumnStateEvents);
    };
    GridOptionsWrapper.prototype.isAllowDragFromColumnsToolPanel = function () {
        return isTrue(this.gridOptions.allowDragFromColumnsToolPanel);
    };
    GridOptionsWrapper.prototype.useAsyncEvents = function () {
        return !isTrue(this.gridOptions.suppressAsyncEvents);
    };
    GridOptionsWrapper.prototype.isEnableCellChangeFlash = function () {
        return isTrue(this.gridOptions.enableCellChangeFlash);
    };
    GridOptionsWrapper.prototype.getCellFlashDelay = function () {
        return this.gridOptions.cellFlashDelay || 500;
    };
    GridOptionsWrapper.prototype.getCellFadeDelay = function () {
        return this.gridOptions.cellFadeDelay || 1000;
    };
    GridOptionsWrapper.prototype.isGroupSelectsChildren = function () {
        return isTrue(this.gridOptions.groupSelectsChildren);
    };
    GridOptionsWrapper.prototype.isSuppressRowHoverHighlight = function () {
        return isTrue(this.gridOptions.suppressRowHoverHighlight);
    };
    GridOptionsWrapper.prototype.isColumnHoverHighlight = function () {
        return isTrue(this.gridOptions.columnHoverHighlight);
    };
    GridOptionsWrapper.prototype.isGroupSelectsFiltered = function () {
        return isTrue(this.gridOptions.groupSelectsFiltered);
    };
    GridOptionsWrapper.prototype.isGroupHideOpenParents = function () {
        return isTrue(this.gridOptions.groupHideOpenParents);
    };
    GridOptionsWrapper.prototype.isGroupMaintainOrder = function () {
        return isTrue(this.gridOptions.groupMaintainOrder);
    };
    GridOptionsWrapper.prototype.getAutoGroupColumnDef = function () {
        return this.gridOptions.autoGroupColumnDef;
    };
    GridOptionsWrapper.prototype.isColumnsSortingCoupledToGroup = function () {
        var _a;
        var autoGroupColumnDef = this.getAutoGroupColumnDef();
        var isClientSideRowModel = this.isRowModelDefault();
        return isClientSideRowModel && !((_a = autoGroupColumnDef) === null || _a === void 0 ? void 0 : _a.comparator);
    };
    GridOptionsWrapper.prototype.isGroupMultiAutoColumn = function () {
        if (this.gridOptions.groupDisplayType) {
            return this.matchesGroupDisplayType('multipleColumns', this.gridOptions.groupDisplayType);
        }
        // if we are doing hideOpenParents we also show multiple columns, otherwise hideOpenParents would not work
        return isTrue(this.gridOptions.groupHideOpenParents);
    };
    GridOptionsWrapper.prototype.isGroupUseEntireRow = function (pivotMode) {
        // we never allow groupUseEntireRow if in pivot mode, otherwise we won't see the pivot values.
        if (pivotMode) {
            return false;
        }
        return this.gridOptions.groupDisplayType ?
            this.matchesGroupDisplayType('groupRows', this.gridOptions.groupDisplayType) : false;
    };
    GridOptionsWrapper.prototype.isRowGroupPanelSuppressSort = function () {
        return isTrue(this.gridOptions.rowGroupPanelSuppressSort);
    };
    GridOptionsWrapper.prototype.isGroupRowsSticky = function () {
        return isTrue(this.gridOptions.groupRowsSticky);
    };
    GridOptionsWrapper.prototype.isGroupSuppressAutoColumn = function () {
        var isCustomRowGroups = this.gridOptions.groupDisplayType ?
            this.matchesGroupDisplayType('custom', this.gridOptions.groupDisplayType) : false;
        if (isCustomRowGroups) {
            return true;
        }
        return this.gridOptions.treeDataDisplayType ?
            this.matchesTreeDataDisplayType('custom', this.gridOptions.treeDataDisplayType) : false;
    };
    GridOptionsWrapper.prototype.isGroupRemoveSingleChildren = function () {
        return isTrue(this.gridOptions.groupRemoveSingleChildren);
    };
    GridOptionsWrapper.prototype.isGroupRemoveLowestSingleChildren = function () {
        return isTrue(this.gridOptions.groupRemoveLowestSingleChildren);
    };
    GridOptionsWrapper.prototype.isGroupIncludeFooter = function () {
        return isTrue(this.gridOptions.groupIncludeFooter);
    };
    GridOptionsWrapper.prototype.isGroupIncludeTotalFooter = function () {
        return isTrue(this.gridOptions.groupIncludeTotalFooter);
    };
    GridOptionsWrapper.prototype.isGroupSuppressBlankHeader = function () {
        return isTrue(this.gridOptions.groupSuppressBlankHeader);
    };
    GridOptionsWrapper.prototype.isSuppressRowClickSelection = function () {
        return isTrue(this.gridOptions.suppressRowClickSelection);
    };
    GridOptionsWrapper.prototype.isSuppressCellFocus = function () {
        return isTrue(this.gridOptions.suppressCellFocus);
    };
    GridOptionsWrapper.prototype.isSuppressMultiSort = function () {
        return isTrue(this.gridOptions.suppressMultiSort);
    };
    GridOptionsWrapper.prototype.isAlwaysMultiSort = function () {
        return isTrue(this.gridOptions.alwaysMultiSort);
    };
    GridOptionsWrapper.prototype.isMultiSortKeyCtrl = function () {
        return this.gridOptions.multiSortKey === 'ctrl';
    };
    GridOptionsWrapper.prototype.isPivotSuppressAutoColumn = function () {
        return isTrue(this.gridOptions.pivotSuppressAutoColumn);
    };
    GridOptionsWrapper.prototype.isSuppressDragLeaveHidesColumns = function () {
        return isTrue(this.gridOptions.suppressDragLeaveHidesColumns);
    };
    GridOptionsWrapper.prototype.isSuppressRowGroupHidesColumns = function () {
        return isTrue(this.gridOptions.suppressRowGroupHidesColumns);
    };
    GridOptionsWrapper.prototype.isSuppressScrollOnNewData = function () {
        return isTrue(this.gridOptions.suppressScrollOnNewData);
    };
    GridOptionsWrapper.prototype.isSuppressScrollWhenPopupsAreOpen = function () {
        return isTrue(this.gridOptions.suppressScrollWhenPopupsAreOpen);
    };
    GridOptionsWrapper.prototype.isRowDragEntireRow = function () {
        return isTrue(this.gridOptions.rowDragEntireRow);
    };
    GridOptionsWrapper.prototype.getRowDragText = function (column) {
        if (column) {
            var colDef = column.getColDef();
            if (colDef.rowDragText) {
                return colDef.rowDragText;
            }
        }
        return this.gridOptions.rowDragText;
    };
    GridOptionsWrapper.prototype.isSuppressRowDrag = function () {
        return isTrue(this.gridOptions.suppressRowDrag);
    };
    GridOptionsWrapper.prototype.isRowDragManaged = function () {
        return isTrue(this.gridOptions.rowDragManaged);
    };
    GridOptionsWrapper.prototype.isSuppressMoveWhenRowDragging = function () {
        return isTrue(this.gridOptions.suppressMoveWhenRowDragging);
    };
    GridOptionsWrapper.prototype.isRowDragMultiRow = function () {
        return isTrue(this.gridOptions.rowDragMultiRow);
    };
    // returns either 'print', 'autoHeight' or 'normal' (normal is the default)
    GridOptionsWrapper.prototype.getDomLayout = function () {
        var domLayout = this.gridOptions.domLayout || constants_1.Constants.DOM_LAYOUT_NORMAL;
        var validLayouts = [
            constants_1.Constants.DOM_LAYOUT_PRINT,
            constants_1.Constants.DOM_LAYOUT_AUTO_HEIGHT,
            constants_1.Constants.DOM_LAYOUT_NORMAL
        ];
        if (validLayouts.indexOf(domLayout) === -1) {
            function_1.doOnce(function () {
                return console.warn("AG Grid: " + domLayout + " is not valid for DOM Layout, valid values are " + constants_1.Constants.DOM_LAYOUT_NORMAL + ", " + constants_1.Constants.DOM_LAYOUT_AUTO_HEIGHT + " and " + constants_1.Constants.DOM_LAYOUT_PRINT);
            }, 'warn about dom layout values');
            return constants_1.Constants.DOM_LAYOUT_NORMAL;
        }
        return domLayout;
    };
    GridOptionsWrapper.prototype.isSuppressHorizontalScroll = function () {
        return isTrue(this.gridOptions.suppressHorizontalScroll);
    };
    GridOptionsWrapper.prototype.isSuppressMaxRenderedRowRestriction = function () {
        return isTrue(this.gridOptions.suppressMaxRenderedRowRestriction);
    };
    GridOptionsWrapper.prototype.isExcludeChildrenWhenTreeDataFiltering = function () {
        return isTrue(this.gridOptions.excludeChildrenWhenTreeDataFiltering);
    };
    GridOptionsWrapper.prototype.isAlwaysShowHorizontalScroll = function () {
        return isTrue(this.gridOptions.alwaysShowHorizontalScroll);
    };
    GridOptionsWrapper.prototype.isAlwaysShowVerticalScroll = function () {
        return isTrue(this.gridOptions.alwaysShowVerticalScroll);
    };
    GridOptionsWrapper.prototype.isDebounceVerticalScrollbar = function () {
        return isTrue(this.gridOptions.debounceVerticalScrollbar);
    };
    GridOptionsWrapper.prototype.isSuppressLoadingOverlay = function () {
        return isTrue(this.gridOptions.suppressLoadingOverlay);
    };
    GridOptionsWrapper.prototype.isSuppressNoRowsOverlay = function () {
        return isTrue(this.gridOptions.suppressNoRowsOverlay);
    };
    GridOptionsWrapper.prototype.isSuppressFieldDotNotation = function () {
        return isTrue(this.gridOptions.suppressFieldDotNotation);
    };
    GridOptionsWrapper.prototype.getPinnedTopRowData = function () {
        return this.gridOptions.pinnedTopRowData;
    };
    GridOptionsWrapper.prototype.getPinnedBottomRowData = function () {
        return this.gridOptions.pinnedBottomRowData;
    };
    GridOptionsWrapper.prototype.isFunctionsPassive = function () {
        return isTrue(this.gridOptions.functionsPassive);
    };
    GridOptionsWrapper.prototype.isSuppressChangeDetection = function () {
        return isTrue(this.gridOptions.suppressChangeDetection);
    };
    GridOptionsWrapper.prototype.isSuppressAnimationFrame = function () {
        return isTrue(this.gridOptions.suppressAnimationFrame);
    };
    GridOptionsWrapper.prototype.getQuickFilterText = function () {
        return this.gridOptions.quickFilterText;
    };
    GridOptionsWrapper.prototype.isCacheQuickFilter = function () {
        return isTrue(this.gridOptions.cacheQuickFilter);
    };
    GridOptionsWrapper.prototype.isUnSortIcon = function () {
        return isTrue(this.gridOptions.unSortIcon);
    };
    GridOptionsWrapper.prototype.isSuppressMenuHide = function () {
        return isTrue(this.gridOptions.suppressMenuHide);
    };
    GridOptionsWrapper.prototype.isEnterMovesDownAfterEdit = function () {
        return isTrue(this.gridOptions.enterMovesDownAfterEdit);
    };
    GridOptionsWrapper.prototype.isEnterMovesDown = function () {
        return isTrue(this.gridOptions.enterMovesDown);
    };
    GridOptionsWrapper.prototype.isUndoRedoCellEditing = function () {
        return isTrue(this.gridOptions.undoRedoCellEditing);
    };
    GridOptionsWrapper.prototype.getUndoRedoCellEditingLimit = function () {
        return toNumber(this.gridOptions.undoRedoCellEditingLimit);
    };
    GridOptionsWrapper.prototype.isEnableCellEditingOnBackspace = function () {
        return isTrue(this.gridOptions.enableCellEditingOnBackspace);
    };
    GridOptionsWrapper.prototype.getRowStyle = function () {
        return this.gridOptions.rowStyle;
    };
    GridOptionsWrapper.prototype.getRowClass = function () {
        return this.gridOptions.rowClass;
    };
    GridOptionsWrapper.prototype.getRowStyleFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.getRowStyle);
    };
    GridOptionsWrapper.prototype.getRowClassFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.getRowClass);
    };
    GridOptionsWrapper.prototype.rowClassRules = function () {
        return this.gridOptions.rowClassRules;
    };
    GridOptionsWrapper.prototype.isServerSideInfiniteScroll = function () {
        return isTrue(this.gridOptions.serverSideInfiniteScroll);
    };
    GridOptionsWrapper.prototype.getServerSideGroupLevelParamsFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.getServerSideGroupLevelParams);
    };
    GridOptionsWrapper.prototype.getCreateChartContainerFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.createChartContainer);
    };
    GridOptionsWrapper.prototype.getPopupParent = function () {
        return this.gridOptions.popupParent;
    };
    GridOptionsWrapper.prototype.getBlockLoadDebounceMillis = function () {
        return this.gridOptions.blockLoadDebounceMillis;
    };
    GridOptionsWrapper.prototype.getPostProcessPopupFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.postProcessPopup);
    };
    GridOptionsWrapper.prototype.getPaginationNumberFormatterFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.paginationNumberFormatter);
    };
    GridOptionsWrapper.prototype.getChildCountFunc = function () {
        return this.gridOptions.getChildCount;
    };
    GridOptionsWrapper.prototype.getIsApplyServerSideTransactionFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.isApplyServerSideTransaction);
    };
    GridOptionsWrapper.prototype.getInitialGroupOrderComparator = function () {
        var _a = this.gridOptions, initialGroupOrderComparator = _a.initialGroupOrderComparator, defaultGroupOrderComparator = _a.defaultGroupOrderComparator;
        if (initialGroupOrderComparator) {
            return this.mergeGridCommonParams(initialGroupOrderComparator);
        }
        // this is the deprecated way, so provide a proxy to make it compatible
        if (defaultGroupOrderComparator) {
            return function (params) { return defaultGroupOrderComparator(params.nodeA, params.nodeB); };
        }
    };
    GridOptionsWrapper.prototype.getIsFullWidthCellFunc = function () {
        var _a = this.gridOptions, isFullWidthRow = _a.isFullWidthRow, isFullWidthCell = _a.isFullWidthCell;
        if (isFullWidthRow) {
            return this.mergeGridCommonParams(isFullWidthRow);
        }
        // this is the deprecated way, so provide a proxy to make it compatible
        if (isFullWidthCell) {
            return function (params) { return isFullWidthCell(params.rowNode); };
        }
    };
    GridOptionsWrapper.prototype.getFullWidthCellRendererParams = function () {
        return this.gridOptions.fullWidthCellRendererParams;
    };
    GridOptionsWrapper.prototype.isEmbedFullWidthRows = function () {
        return isTrue(this.gridOptions.embedFullWidthRows) || isTrue(this.gridOptions.deprecatedEmbedFullWidthRows);
    };
    GridOptionsWrapper.prototype.isDetailRowAutoHeight = function () {
        return isTrue(this.gridOptions.detailRowAutoHeight);
    };
    GridOptionsWrapper.prototype.getSuppressKeyboardEventFunc = function () {
        return this.gridOptions.suppressKeyboardEvent;
    };
    GridOptionsWrapper.prototype.getBusinessKeyForNodeFunc = function () {
        return this.gridOptions.getBusinessKeyForNode;
    };
    GridOptionsWrapper.prototype.getApi = function () {
        return this.gridOptions.api;
    };
    GridOptionsWrapper.prototype.getColumnApi = function () {
        return this.gridOptions.columnApi;
    };
    GridOptionsWrapper.prototype.isReadOnlyEdit = function () {
        return isTrue(this.gridOptions.readOnlyEdit);
    };
    GridOptionsWrapper.prototype.isImmutableData = function () {
        // we used to have a property immutableData for this. however this was deprecated
        // in favour of having Immutable Data on by default when getRowId is provided
        var getRowIdProvided = this.gridOptions.getRowId != null;
        var immutableData = isTrue(this.gridOptions.immutableData);
        // this property is a backwards compatibility property, for those who want
        // the old behaviour of Row ID's but NOT Immutable Data.
        var resetRowDataOnUpdate = isTrue(this.gridOptions.resetRowDataOnUpdate);
        if (resetRowDataOnUpdate) {
            return false;
        }
        return getRowIdProvided || immutableData;
    };
    GridOptionsWrapper.prototype.isEnsureDomOrder = function () {
        return isTrue(this.gridOptions.ensureDomOrder);
    };
    GridOptionsWrapper.prototype.isEnableCharts = function () {
        if (isTrue(this.gridOptions.enableCharts)) {
            return moduleRegistry_1.ModuleRegistry.assertRegistered(moduleNames_1.ModuleNames.GridChartsModule, 'enableCharts');
        }
        return false;
    };
    GridOptionsWrapper.prototype.isEnableChartToolPanelsButton = function () {
        return isTrue(this.gridOptions.enableChartToolPanelsButton);
    };
    GridOptionsWrapper.prototype.getColResizeDefault = function () {
        return this.gridOptions.colResizeDefault;
    };
    GridOptionsWrapper.prototype.isSingleClickEdit = function () {
        return isTrue(this.gridOptions.singleClickEdit);
    };
    GridOptionsWrapper.prototype.isSuppressClickEdit = function () {
        return isTrue(this.gridOptions.suppressClickEdit);
    };
    GridOptionsWrapper.prototype.isStopEditingWhenCellsLoseFocus = function () {
        return isTrue(this.gridOptions.stopEditingWhenCellsLoseFocus);
    };
    GridOptionsWrapper.prototype.getGroupDefaultExpanded = function () {
        return this.gridOptions.groupDefaultExpanded;
    };
    GridOptionsWrapper.prototype.getMaxConcurrentDatasourceRequests = function () {
        var res = toNumber(this.gridOptions.maxConcurrentDatasourceRequests);
        if (res == null) {
            return 2;
        } // 2 is the default
        if (res <= 0) {
            return;
        } // negative number, eg -1, means no max restriction
        return res;
    };
    GridOptionsWrapper.prototype.getMaxBlocksInCache = function () {
        return this.gridOptions.maxBlocksInCache;
    };
    GridOptionsWrapper.prototype.getCacheOverflowSize = function () {
        return this.gridOptions.cacheOverflowSize;
    };
    GridOptionsWrapper.prototype.getPaginationPageSize = function () {
        return toNumber(this.gridOptions.paginationPageSize);
    };
    GridOptionsWrapper.prototype.isPaginateChildRows = function () {
        var shouldPaginate = this.isGroupRemoveSingleChildren() || this.isGroupRemoveLowestSingleChildren();
        if (shouldPaginate) {
            return true;
        }
        return isTrue(this.gridOptions.paginateChildRows);
    };
    GridOptionsWrapper.prototype.getCacheBlockSize = function () {
        return oneOrGreater(this.gridOptions.cacheBlockSize);
    };
    GridOptionsWrapper.prototype.getInfiniteInitialRowCount = function () {
        return this.gridOptions.infiniteInitialRowCount;
    };
    GridOptionsWrapper.prototype.getServerSideInitialRowCount = function () {
        var rowCount = this.gridOptions.serverSideInitialRowCount;
        if (typeof rowCount === 'number' && rowCount > 0) {
            return rowCount;
        }
        return 1;
    };
    GridOptionsWrapper.prototype.isPurgeClosedRowNodes = function () {
        return isTrue(this.gridOptions.purgeClosedRowNodes);
    };
    GridOptionsWrapper.prototype.isSuppressPaginationPanel = function () {
        return isTrue(this.gridOptions.suppressPaginationPanel);
    };
    GridOptionsWrapper.prototype.getRowData = function () {
        return this.gridOptions.rowData;
    };
    GridOptionsWrapper.prototype.isEnableRtl = function () {
        return isTrue(this.gridOptions.enableRtl);
    };
    GridOptionsWrapper.prototype.getRowGroupPanelShow = function () {
        return this.gridOptions.rowGroupPanelShow;
    };
    GridOptionsWrapper.prototype.getPivotPanelShow = function () {
        return this.gridOptions.pivotPanelShow;
    };
    GridOptionsWrapper.prototype.isAngularCompileRows = function () {
        return isTrue(this.gridOptions.angularCompileRows);
    };
    GridOptionsWrapper.prototype.isAngularCompileFilters = function () {
        return isTrue(this.gridOptions.angularCompileFilters);
    };
    GridOptionsWrapper.prototype.isDebug = function () {
        return isTrue(this.gridOptions.debug);
    };
    GridOptionsWrapper.prototype.getColumnDefs = function () {
        return this.gridOptions.columnDefs;
    };
    GridOptionsWrapper.prototype.getColumnTypes = function () {
        return this.gridOptions.columnTypes;
    };
    GridOptionsWrapper.prototype.getDatasource = function () {
        return this.gridOptions.datasource;
    };
    GridOptionsWrapper.prototype.getViewportDatasource = function () {
        return this.gridOptions.viewportDatasource;
    };
    GridOptionsWrapper.prototype.getServerSideDatasource = function () {
        return this.gridOptions.serverSideDatasource;
    };
    GridOptionsWrapper.prototype.isAccentedSort = function () {
        return isTrue(this.gridOptions.accentedSort);
    };
    GridOptionsWrapper.prototype.isEnableBrowserTooltips = function () {
        return isTrue(this.gridOptions.enableBrowserTooltips);
    };
    GridOptionsWrapper.prototype.isEnableCellExpressions = function () {
        return isTrue(this.gridOptions.enableCellExpressions);
    };
    GridOptionsWrapper.prototype.isEnableGroupEdit = function () {
        return isTrue(this.gridOptions.enableGroupEdit);
    };
    GridOptionsWrapper.prototype.isSuppressMiddleClickScrolls = function () {
        return isTrue(this.gridOptions.suppressMiddleClickScrolls);
    };
    GridOptionsWrapper.prototype.isPreventDefaultOnContextMenu = function () {
        return isTrue(this.gridOptions.preventDefaultOnContextMenu);
    };
    GridOptionsWrapper.prototype.isSuppressPreventDefaultOnMouseWheel = function () {
        return isTrue(this.gridOptions.suppressPreventDefaultOnMouseWheel);
    };
    GridOptionsWrapper.prototype.isSuppressColumnVirtualisation = function () {
        return isTrue(this.gridOptions.suppressColumnVirtualisation);
    };
    GridOptionsWrapper.prototype.isSuppressRowVirtualisation = function () {
        return isTrue(this.gridOptions.suppressRowVirtualisation);
    };
    GridOptionsWrapper.prototype.isSuppressContextMenu = function () {
        return isTrue(this.gridOptions.suppressContextMenu);
    };
    GridOptionsWrapper.prototype.isAllowContextMenuWithControlKey = function () {
        return isTrue(this.gridOptions.allowContextMenuWithControlKey);
    };
    GridOptionsWrapper.prototype.isSuppressCopyRowsToClipboard = function () {
        return isTrue(this.gridOptions.suppressCopyRowsToClipboard);
    };
    GridOptionsWrapper.prototype.isSuppressCopySingleCellRanges = function () {
        return isTrue(this.gridOptions.suppressCopySingleCellRanges);
    };
    GridOptionsWrapper.prototype.isCopyHeadersToClipboard = function () {
        return isTrue(this.gridOptions.copyHeadersToClipboard);
    };
    GridOptionsWrapper.prototype.isCopyGroupHeadersToClipboard = function () {
        return isTrue(this.gridOptions.copyGroupHeadersToClipboard);
    };
    GridOptionsWrapper.prototype.isSuppressClipboardPaste = function () {
        return isTrue(this.gridOptions.suppressClipboardPaste);
    };
    GridOptionsWrapper.prototype.isSuppressLastEmptyLineOnPaste = function () {
        return isTrue(this.gridOptions.suppressLastEmptyLineOnPaste);
    };
    GridOptionsWrapper.prototype.isPagination = function () {
        return isTrue(this.gridOptions.pagination);
    };
    GridOptionsWrapper.prototype.isSuppressEnterpriseResetOnNewColumns = function () {
        return isTrue(this.gridOptions.suppressEnterpriseResetOnNewColumns);
    };
    GridOptionsWrapper.prototype.getProcessDataFromClipboardFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.processDataFromClipboard);
    };
    GridOptionsWrapper.prototype.getAsyncTransactionWaitMillis = function () {
        return generic_1.exists(this.gridOptions.asyncTransactionWaitMillis) ? this.gridOptions.asyncTransactionWaitMillis : constants_1.Constants.BATCH_WAIT_MILLIS;
    };
    GridOptionsWrapper.prototype.isSuppressMovableColumns = function () {
        return isTrue(this.gridOptions.suppressMovableColumns);
    };
    GridOptionsWrapper.prototype.isAnimateRows = function () {
        // never allow animating if enforcing the row order
        if (this.isEnsureDomOrder()) {
            return false;
        }
        return isTrue(this.gridOptions.animateRows);
    };
    GridOptionsWrapper.prototype.isSuppressColumnMoveAnimation = function () {
        return isTrue(this.gridOptions.suppressColumnMoveAnimation);
    };
    GridOptionsWrapper.prototype.isSuppressAggFuncInHeader = function () {
        return isTrue(this.gridOptions.suppressAggFuncInHeader);
    };
    GridOptionsWrapper.prototype.isSuppressAggAtRootLevel = function () {
        return isTrue(this.gridOptions.suppressAggAtRootLevel);
    };
    GridOptionsWrapper.prototype.isSuppressAggFilteredOnly = function () {
        var isGroupAggFiltering = this.getGroupAggFiltering() !== undefined;
        return isGroupAggFiltering || isTrue(this.gridOptions.suppressAggFilteredOnly);
    };
    GridOptionsWrapper.prototype.isRemovePivotHeaderRowWhenSingleValueColumn = function () {
        return isTrue(this.gridOptions.removePivotHeaderRowWhenSingleValueColumn);
    };
    GridOptionsWrapper.prototype.isShowOpenedGroup = function () {
        return isTrue(this.gridOptions.showOpenedGroup);
    };
    GridOptionsWrapper.prototype.isReactUi = function () {
        return isTrue(this.gridOptions.reactUi);
    };
    GridOptionsWrapper.prototype.isSuppressReactUi = function () {
        return isTrue(this.gridOptions.suppressReactUi);
    };
    GridOptionsWrapper.prototype.isEnableRangeSelection = function () {
        return moduleRegistry_1.ModuleRegistry.isRegistered(moduleNames_1.ModuleNames.RangeSelectionModule) && isTrue(this.gridOptions.enableRangeSelection);
    };
    GridOptionsWrapper.prototype.isEnableRangeHandle = function () {
        return isTrue(this.gridOptions.enableRangeHandle);
    };
    GridOptionsWrapper.prototype.isEnableFillHandle = function () {
        return isTrue(this.gridOptions.enableFillHandle);
    };
    GridOptionsWrapper.prototype.getFillHandleDirection = function () {
        var direction = this.gridOptions.fillHandleDirection;
        if (!direction) {
            return 'xy';
        }
        if (direction !== 'x' && direction !== 'y' && direction !== 'xy') {
            function_1.doOnce(function () { return console.warn("AG Grid: valid values for fillHandleDirection are 'x', 'y' and 'xy'. Default to 'xy'."); }, 'warn invalid fill direction');
            return 'xy';
        }
        return direction;
    };
    GridOptionsWrapper.prototype.getFillOperation = function () {
        return this.mergeGridCommonParams(this.gridOptions.fillOperation);
    };
    GridOptionsWrapper.prototype.isSuppressMultiRangeSelection = function () {
        return isTrue(this.gridOptions.suppressMultiRangeSelection);
    };
    GridOptionsWrapper.prototype.isPaginationAutoPageSize = function () {
        return isTrue(this.gridOptions.paginationAutoPageSize);
    };
    GridOptionsWrapper.prototype.isRememberGroupStateWhenNewData = function () {
        return isTrue(this.gridOptions.rememberGroupStateWhenNewData);
    };
    GridOptionsWrapper.prototype.getIcons = function () {
        return this.gridOptions.icons;
    };
    GridOptionsWrapper.prototype.getGroupAggFiltering = function () {
        var userValue = this.gridOptions.groupAggFiltering;
        if (typeof userValue === 'function') {
            return this.mergeGridCommonParams(userValue);
        }
        if (isTrue(userValue)) {
            return function () { return true; };
        }
        return undefined;
    };
    GridOptionsWrapper.prototype.getAggFuncs = function () {
        return this.gridOptions.aggFuncs;
    };
    GridOptionsWrapper.prototype.getSortingOrder = function () {
        return this.gridOptions.sortingOrder;
    };
    GridOptionsWrapper.prototype.getAlignedGrids = function () {
        return this.gridOptions.alignedGrids;
    };
    GridOptionsWrapper.prototype.isMasterDetail = function () {
        var masterDetail = isTrue(this.gridOptions.masterDetail);
        if (masterDetail) {
            return moduleRegistry_1.ModuleRegistry.assertRegistered(moduleNames_1.ModuleNames.MasterDetailModule, 'masterDetail');
        }
        else {
            return false;
        }
    };
    GridOptionsWrapper.prototype.isKeepDetailRows = function () {
        return isTrue(this.gridOptions.keepDetailRows);
    };
    GridOptionsWrapper.prototype.getKeepDetailRowsCount = function () {
        var keepDetailRowsCount = this.gridOptions.keepDetailRowsCount;
        if (generic_1.exists(keepDetailRowsCount) && keepDetailRowsCount > 0) {
            return this.gridOptions.keepDetailRowsCount;
        }
        return DEFAULT_KEEP_DETAIL_ROW_COUNT;
    };
    GridOptionsWrapper.prototype.getIsRowMasterFunc = function () {
        return this.gridOptions.isRowMaster;
    };
    GridOptionsWrapper.prototype.getIsRowSelectableFunc = function () {
        return this.gridOptions.isRowSelectable;
    };
    GridOptionsWrapper.prototype.getGroupRowRendererParams = function () {
        return this.gridOptions.groupRowRendererParams;
    };
    GridOptionsWrapper.prototype.getOverlayLoadingTemplate = function () {
        return this.gridOptions.overlayLoadingTemplate;
    };
    GridOptionsWrapper.prototype.getOverlayNoRowsTemplate = function () {
        return this.gridOptions.overlayNoRowsTemplate;
    };
    GridOptionsWrapper.prototype.isSuppressAutoSize = function () {
        return isTrue(this.gridOptions.suppressAutoSize);
    };
    GridOptionsWrapper.prototype.isEnableCellTextSelection = function () {
        return isTrue(this.gridOptions.enableCellTextSelection);
    };
    GridOptionsWrapper.prototype.isSuppressParentsInRowNodes = function () {
        return isTrue(this.gridOptions.suppressParentsInRowNodes);
    };
    GridOptionsWrapper.prototype.isSuppressClipboardApi = function () {
        return isTrue(this.gridOptions.suppressClipboardApi);
    };
    GridOptionsWrapper.prototype.isFunctionsReadOnly = function () {
        return isTrue(this.gridOptions.functionsReadOnly);
    };
    GridOptionsWrapper.prototype.isEnableCellTextSelect = function () {
        return isTrue(this.gridOptions.enableCellTextSelection);
    };
    GridOptionsWrapper.prototype.getDefaultColDef = function () {
        return this.gridOptions.defaultColDef;
    };
    GridOptionsWrapper.prototype.getDefaultColGroupDef = function () {
        return this.gridOptions.defaultColGroupDef;
    };
    GridOptionsWrapper.prototype.getDefaultExportParams = function (type) {
        if (this.gridOptions.defaultExportParams) {
            console.warn("AG Grid: Since v25.2 `defaultExportParams`  has been replaced by `default" + string_1.capitalise(type) + "ExportParams`'");
            if (type === 'csv') {
                return this.gridOptions.defaultExportParams;
            }
            return this.gridOptions.defaultExportParams;
        }
        if (type === 'csv' && this.gridOptions.defaultCsvExportParams) {
            return this.gridOptions.defaultCsvExportParams;
        }
        if (type === 'excel' && this.gridOptions.defaultExcelExportParams) {
            return this.gridOptions.defaultExcelExportParams;
        }
    };
    GridOptionsWrapper.prototype.isSuppressCsvExport = function () {
        return isTrue(this.gridOptions.suppressCsvExport);
    };
    GridOptionsWrapper.prototype.isAllowShowChangeAfterFilter = function () {
        return isTrue(this.gridOptions.allowShowChangeAfterFilter);
    };
    GridOptionsWrapper.prototype.isSuppressExcelExport = function () {
        return isTrue(this.gridOptions.suppressExcelExport);
    };
    GridOptionsWrapper.prototype.isSuppressMakeColumnVisibleAfterUnGroup = function () {
        return isTrue(this.gridOptions.suppressMakeColumnVisibleAfterUnGroup);
    };
    GridOptionsWrapper.prototype.getDataPathFunc = function () {
        return this.gridOptions.getDataPath;
    };
    GridOptionsWrapper.prototype.getIsServerSideGroupFunc = function () {
        return this.gridOptions.isServerSideGroup;
    };
    GridOptionsWrapper.prototype.getIsServerSideGroupOpenByDefaultFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.isServerSideGroupOpenByDefault);
    };
    GridOptionsWrapper.prototype.getIsGroupOpenByDefaultFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.isGroupOpenByDefault);
    };
    GridOptionsWrapper.prototype.getServerSideGroupKeyFunc = function () {
        return this.gridOptions.getServerSideGroupKey;
    };
    GridOptionsWrapper.prototype.getGroupRowAggFunc = function () {
        var _a = this.gridOptions, getGroupRowAgg = _a.getGroupRowAgg, groupRowAggNodes = _a.groupRowAggNodes;
        if (getGroupRowAgg) {
            return this.mergeGridCommonParams(getGroupRowAgg);
        }
        // this is the deprecated way, so provide a proxy to make it compatible
        if (groupRowAggNodes) {
            return function (params) { return groupRowAggNodes(params.nodes); };
        }
    };
    GridOptionsWrapper.prototype.getContextMenuItemsFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.getContextMenuItems);
    };
    GridOptionsWrapper.prototype.getMainMenuItemsFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.getMainMenuItems);
    };
    GridOptionsWrapper.prototype.getRowIdFunc = function () {
        var _a = this.gridOptions, getRowId = _a.getRowId, getRowNodeId = _a.getRowNodeId;
        if (getRowId) {
            return this.mergeGridCommonParams(getRowId);
        }
        // this is the deprecated way, so provide a proxy to make it compatible
        if (getRowNodeId) {
            return function (params) { return getRowNodeId(params.data); };
        }
    };
    GridOptionsWrapper.prototype.getNavigateToNextHeaderFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.navigateToNextHeader);
    };
    GridOptionsWrapper.prototype.getTabToNextHeaderFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.tabToNextHeader);
    };
    GridOptionsWrapper.prototype.getNavigateToNextCellFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.navigateToNextCell);
    };
    GridOptionsWrapper.prototype.getTabToNextCellFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.tabToNextCell);
    };
    GridOptionsWrapper.prototype.getGridTabIndex = function () {
        return (this.gridOptions.tabIndex || 0).toString();
    };
    GridOptionsWrapper.prototype.isTreeData = function () {
        var usingTreeData = isTrue(this.gridOptions.treeData);
        if (usingTreeData) {
            return moduleRegistry_1.ModuleRegistry.assertRegistered(moduleNames_1.ModuleNames.RowGroupingModule, 'Tree Data');
        }
        return false;
    };
    GridOptionsWrapper.prototype.isValueCache = function () {
        return isTrue(this.gridOptions.valueCache);
    };
    GridOptionsWrapper.prototype.isValueCacheNeverExpires = function () {
        return isTrue(this.gridOptions.valueCacheNeverExpires);
    };
    GridOptionsWrapper.prototype.isDeltaSort = function () {
        return isTrue(this.gridOptions.deltaSort);
    };
    GridOptionsWrapper.prototype.isAggregateOnlyChangedColumns = function () {
        return isTrue(this.gridOptions.aggregateOnlyChangedColumns);
    };
    GridOptionsWrapper.prototype.getProcessPivotResultColDefFunc = function () {
        return this.gridOptions.processPivotResultColDef || this.gridOptions.processSecondaryColDef;
    };
    GridOptionsWrapper.prototype.getProcessPivotResultColGroupDefFunc = function () {
        return this.gridOptions.processPivotResultColGroupDef || this.gridOptions.processSecondaryColGroupDef;
    };
    GridOptionsWrapper.prototype.getSendToClipboardFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.sendToClipboard);
    };
    GridOptionsWrapper.prototype.getProcessRowPostCreateFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.processRowPostCreate);
    };
    GridOptionsWrapper.prototype.getProcessCellForClipboardFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.processCellForClipboard);
    };
    GridOptionsWrapper.prototype.getProcessHeaderForClipboardFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.processHeaderForClipboard);
    };
    GridOptionsWrapper.prototype.getProcessGroupHeaderForClipboardFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.processGroupHeaderForClipboard);
    };
    GridOptionsWrapper.prototype.getProcessCellFromClipboardFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.processCellFromClipboard);
    };
    GridOptionsWrapper.prototype.getViewportRowModelPageSize = function () {
        return oneOrGreater(this.gridOptions.viewportRowModelPageSize, DEFAULT_VIEWPORT_ROW_MODEL_PAGE_SIZE);
    };
    GridOptionsWrapper.prototype.getViewportRowModelBufferSize = function () {
        return zeroOrGreater(this.gridOptions.viewportRowModelBufferSize, DEFAULT_VIEWPORT_ROW_MODEL_BUFFER_SIZE);
    };
    GridOptionsWrapper.prototype.isServerSideSortAllLevels = function () {
        var isEnabled = isTrue(this.gridOptions.serverSideSortAllLevels);
        if (!this.isRowModelServerSide() && isEnabled) {
            function_1.doOnce(function () { return console.warn('AG Grid: The `serverSideSortAllLevels` property can only be used with the server side row model.'); }, 'serverSideSortAllLevels');
            return false;
        }
        return isEnabled;
    };
    GridOptionsWrapper.prototype.isServerSideFilterAllLevels = function () {
        var isEnabled = isTrue(this.gridOptions.serverSideFilterAllLevels);
        if (!this.isRowModelServerSide() && isEnabled) {
            function_1.doOnce(function () { return console.warn('AG Grid: The `serverSideFilterAllLevels` property can only be used with the server side row model.'); }, 'serverSideFilterAllLevels');
            return false;
        }
        return isEnabled;
    };
    GridOptionsWrapper.prototype.isServerSideSortOnServer = function () {
        var isEnabled = isTrue(this.gridOptions.serverSideSortOnServer);
        if (!this.isRowModelServerSide() && isEnabled) {
            function_1.doOnce(function () { return console.warn('AG Grid: The `serverSideSortOnServer` property can only be used with the server side row model.'); }, 'serverSideSortOnServerRowModel');
            return false;
        }
        if (this.isTreeData() && isEnabled) {
            function_1.doOnce(function () { return console.warn('AG Grid: The `serverSideSortOnServer` property cannot be used while using tree data.'); }, 'serverSideSortOnServerTreeData');
            return false;
        }
        return isEnabled;
    };
    GridOptionsWrapper.prototype.isServerSideFilterOnServer = function () {
        var isEnabled = isTrue(this.gridOptions.serverSideFilterOnServer);
        if (!this.isRowModelServerSide() && isEnabled) {
            function_1.doOnce(function () { return console.warn('AG Grid: The `serverSideFilterOnServer` property can only be used with the server side row model.'); }, 'serverSideFilterOnServerRowModel');
            return false;
        }
        if (this.isTreeData() && isEnabled) {
            function_1.doOnce(function () { return console.warn('AG Grid: The `serverSideFilterOnServer` property cannot be used while using tree data.'); }, 'serverSideFilterOnServerTreeData');
            return false;
        }
        return isEnabled;
    };
    GridOptionsWrapper.prototype.getPostSortFunc = function () {
        var _a = this.gridOptions, postSortRows = _a.postSortRows, postSort = _a.postSort;
        if (postSortRows) {
            return this.mergeGridCommonParams(postSortRows);
        }
        // this is the deprecated way, so provide a proxy to make it compatible
        if (postSort) {
            return function (params) { return postSort(params.nodes); };
        }
    };
    GridOptionsWrapper.prototype.getChartToolbarItemsFunc = function () {
        return this.mergeGridCommonParams(this.gridOptions.getChartToolbarItems);
    };
    GridOptionsWrapper.prototype.getChartThemeOverrides = function () {
        return this.gridOptions.chartThemeOverrides;
    };
    GridOptionsWrapper.prototype.getCustomChartThemes = function () {
        return this.gridOptions.customChartThemes;
    };
    GridOptionsWrapper.prototype.getChartThemes = function () {
        // return default themes if user hasn't supplied any
        return this.gridOptions.chartThemes || ['ag-default', 'ag-material', 'ag-pastel', 'ag-vivid', 'ag-solar'];
    };
    GridOptionsWrapper.prototype.getChartToolPanelsDef = function () {
        return this.gridOptions.chartToolPanelsDef;
    };
    GridOptionsWrapper.prototype.getClipboardDelimiter = function () {
        return generic_1.exists(this.gridOptions.clipboardDelimiter) ? this.gridOptions.clipboardDelimiter : '\t';
    };
    GridOptionsWrapper.prototype.setProperty = function (key, value, force) {
        if (force === void 0) { force = false; }
        var previousValue = this.gridOptions[key];
        if (force || previousValue !== value) {
            this.gridOptions[key] = value;
            var event_1 = {
                type: key,
                currentValue: value,
                previousValue: previousValue
            };
            this.propertyEventService.dispatchEvent(event_1);
        }
    };
    GridOptionsWrapper.prototype.addEventListener = function (key, listener) {
        this.propertyEventService.addEventListener(key, listener);
    };
    GridOptionsWrapper.prototype.removeEventListener = function (key, listener) {
        this.propertyEventService.removeEventListener(key, listener);
    };
    GridOptionsWrapper.prototype.isSkipHeaderOnAutoSize = function () {
        return !!this.gridOptions.skipHeaderOnAutoSize;
    };
    GridOptionsWrapper.prototype.getAutoSizePadding = function () {
        var value = this.gridOptions.autoSizePadding;
        return value != null && value >= 0 ? value : 20;
    };
    // properties
    GridOptionsWrapper.prototype.getHeaderHeight = function () {
        if (typeof this.gridOptions.headerHeight === 'number') {
            return this.gridOptions.headerHeight;
        }
        return this.getFromTheme(25, 'headerHeight');
    };
    GridOptionsWrapper.prototype.getFloatingFiltersHeight = function () {
        if (typeof this.gridOptions.floatingFiltersHeight === 'number') {
            return this.gridOptions.floatingFiltersHeight;
        }
        return this.getFromTheme(25, 'headerHeight');
    };
    GridOptionsWrapper.prototype.getGroupHeaderHeight = function () {
        if (typeof this.gridOptions.groupHeaderHeight === 'number') {
            return this.gridOptions.groupHeaderHeight;
        }
        return this.getHeaderHeight();
    };
    GridOptionsWrapper.prototype.getPivotHeaderHeight = function () {
        if (typeof this.gridOptions.pivotHeaderHeight === 'number') {
            return this.gridOptions.pivotHeaderHeight;
        }
        return this.getHeaderHeight();
    };
    GridOptionsWrapper.prototype.getPivotGroupHeaderHeight = function () {
        if (typeof this.gridOptions.pivotGroupHeaderHeight === 'number') {
            return this.gridOptions.pivotGroupHeaderHeight;
        }
        return this.getGroupHeaderHeight();
    };
    GridOptionsWrapper.prototype.isExternalFilterPresent = function () {
        if (typeof this.gridOptions.isExternalFilterPresent === 'function') {
            return this.gridOptions.isExternalFilterPresent({ api: this.getApi(), columnApi: this.getColumnApi(), context: this.getContext() });
        }
        return false;
    };
    GridOptionsWrapper.prototype.doesExternalFilterPass = function (node) {
        if (typeof this.gridOptions.doesExternalFilterPass === 'function') {
            return this.gridOptions.doesExternalFilterPass(node);
        }
        return false;
    };
    GridOptionsWrapper.prototype.getTooltipDelay = function (type) {
        var _a = this.gridOptions, tooltipShowDelay = _a.tooltipShowDelay, tooltipHideDelay = _a.tooltipHideDelay;
        var delay = type === 'show' ? tooltipShowDelay : tooltipHideDelay;
        var capitalisedType = string_1.capitalise(type);
        if (generic_1.exists(delay)) {
            if (delay < 0) {
                function_1.doOnce(function () { return console.warn("ag-grid: tooltip" + capitalisedType + "Delay should not be lower than 0"); }, "tooltip" + capitalisedType + "DelayWarn");
            }
            return Math.max(200, delay);
        }
        return null;
    };
    GridOptionsWrapper.prototype.isTooltipMouseTrack = function () {
        return isTrue(this.gridOptions.tooltipMouseTrack);
    };
    GridOptionsWrapper.prototype.isSuppressModelUpdateAfterUpdateTransaction = function () {
        return isTrue(this.gridOptions.suppressModelUpdateAfterUpdateTransaction);
    };
    GridOptionsWrapper.prototype.getDocument = function () {
        // if user is providing document, we use the users one,
        // otherwise we use the document on the global namespace.
        var result = null;
        if (this.gridOptions.getDocument && generic_1.exists(this.gridOptions.getDocument)) {
            result = this.gridOptions.getDocument();
        }
        else if (this.eGridDiv) {
            result = this.eGridDiv.ownerDocument;
        }
        if (result && generic_1.exists(result)) {
            return result;
        }
        return document;
    };
    GridOptionsWrapper.prototype.getMinColWidth = function () {
        var minColWidth = this.gridOptions.minColWidth;
        if (generic_1.exists(minColWidth) && minColWidth > GridOptionsWrapper_1.MIN_COL_WIDTH) {
            return this.gridOptions.minColWidth;
        }
        var measuredMin = this.getFromTheme(null, 'headerCellMinWidth');
        return generic_1.exists(measuredMin) ? Math.max(measuredMin, GridOptionsWrapper_1.MIN_COL_WIDTH) : GridOptionsWrapper_1.MIN_COL_WIDTH;
    };
    GridOptionsWrapper.prototype.getMaxColWidth = function () {
        if (this.gridOptions.maxColWidth && this.gridOptions.maxColWidth > GridOptionsWrapper_1.MIN_COL_WIDTH) {
            return this.gridOptions.maxColWidth;
        }
        return null;
    };
    GridOptionsWrapper.prototype.getColWidth = function () {
        if (typeof this.gridOptions.colWidth !== 'number' || this.gridOptions.colWidth < GridOptionsWrapper_1.MIN_COL_WIDTH) {
            return 200;
        }
        return this.gridOptions.colWidth;
    };
    GridOptionsWrapper.prototype.getRowBuffer = function () {
        var rowBuffer = this.gridOptions.rowBuffer;
        if (typeof rowBuffer === 'number') {
            if (rowBuffer < 0) {
                function_1.doOnce(function () { return console.warn("AG Grid: rowBuffer should not be negative"); }, 'warn rowBuffer negative');
                this.gridOptions.rowBuffer = rowBuffer = 0;
            }
        }
        else {
            rowBuffer = constants_1.Constants.ROW_BUFFER_SIZE;
        }
        return rowBuffer;
    };
    GridOptionsWrapper.prototype.getRowBufferInPixels = function () {
        var rowsToBuffer = this.getRowBuffer();
        var defaultRowHeight = this.getRowHeightAsNumber();
        return rowsToBuffer * defaultRowHeight;
    };
    // the user might be using some non-standard scrollbar, eg a scrollbar that has zero
    // width and overlays (like the Safari scrollbar, but presented in Chrome). so we
    // allow the user to provide the scroll width before we work it out.
    GridOptionsWrapper.prototype.getScrollbarWidth = function () {
        if (this.scrollbarWidth == null) {
            var useGridOptions = typeof this.gridOptions.scrollbarWidth === 'number' && this.gridOptions.scrollbarWidth >= 0;
            var scrollbarWidth = useGridOptions ? this.gridOptions.scrollbarWidth : browser_1.getScrollbarWidth();
            if (scrollbarWidth != null) {
                this.scrollbarWidth = scrollbarWidth;
                this.eventService.dispatchEvent({
                    type: eventKeys_1.Events.EVENT_SCROLLBAR_WIDTH_CHANGED
                });
            }
        }
        return this.scrollbarWidth;
    };
    GridOptionsWrapper.prototype.checkForDeprecated = function () {
        // casting to generic object, so typescript compiles even though
        // we are looking for attributes that don't exist
        var options = this.gridOptions;
        if (options.deprecatedEmbedFullWidthRows) {
            console.warn("AG Grid: since v21.2, deprecatedEmbedFullWidthRows has been replaced with embedFullWidthRows.");
        }
        if (options.rowDeselection) {
            console.warn('AG Grid: since v24.x, rowDeselection is deprecated and the behaviour is true by default. Please use `suppressRowDeselection` to prevent rows from being deselected.');
        }
        if (options.enableMultiRowDragging) {
            options.rowDragMultiRow = true;
            delete options.enableMultiRowDragging;
            console.warn('AG Grid: since v26.1, `enableMultiRowDragging` is deprecated. Please use `rowDragMultiRow`.');
        }
        var checkRenamedProperty = function (oldProp, newProp, version) {
            if (options[oldProp] != null) {
                console.warn("AG Grid: since version " + version + ", '" + oldProp + "' is deprecated / renamed, please use the new property name '" + newProp + "' instead.");
                if (options[newProp] == null) {
                    options[newProp] = options[oldProp];
                }
            }
        };
        checkRenamedProperty('batchUpdateWaitMillis', 'asyncTransactionWaitMillis', '23.1.x');
        checkRenamedProperty('deltaRowDataMode', 'immutableData', '23.1.x');
        checkRenamedProperty('serverSideFilteringAlwaysResets', 'serverSideFilterAllLevels', '28.0.0');
        checkRenamedProperty('serverSideSortingAlwaysResets', 'serverSideSortAllLevels', '28.0.0');
        if (options.immutableColumns || options.deltaColumnMode) {
            console.warn('AG Grid: since v24.0, immutableColumns and deltaColumnMode properties are gone. The grid now works like this as default. To keep column order maintained, set grid property applyColumnDefOrder=true');
        }
        checkRenamedProperty('suppressSetColumnStateEvents', 'suppressColumnStateEvents', '24.0.x');
        if (options.groupRowInnerRenderer || options.groupRowInnerRendererParams || options.groupRowInnerRendererFramework) {
            console.warn('AG Grid: since v24.0, grid properties groupRowInnerRenderer, groupRowInnerRendererFramework and groupRowInnerRendererParams are no longer used.');
            console.warn('  Instead use the grid properties groupRowRendererParams.innerRenderer, groupRowRendererParams.innerRendererFramework and groupRowRendererParams.innerRendererParams.');
            console.warn('  For example instead of this:');
            console.warn('    groupRowInnerRenderer: "myRenderer"');
            console.warn('    groupRowInnerRendererParams: {x: a}');
            console.warn('  Replace with this:');
            console.warn('    groupRowRendererParams: {');
            console.warn('      innerRenderer: "myRenderer",');
            console.warn('      innerRendererParams: {x: a}');
            console.warn('    }');
            console.warn('  We have copied the properties over for you. However to stop this error message, please change your application code.');
            if (!options.groupRowRendererParams) {
                options.groupRowRendererParams = {};
            }
            var params = options.groupRowRendererParams;
            if (options.groupRowInnerRenderer) {
                params.innerRenderer = options.groupRowInnerRenderer;
            }
            if (options.groupRowInnerRendererParams) {
                params.innerRendererParams = options.groupRowInnerRendererParams;
            }
            if (options.groupRowInnerRendererFramework) {
                params.innerRendererFramework = options.groupRowInnerRendererFramework;
            }
        }
        if (options.rememberGroupStateWhenNewData) {
            console.warn('AG Grid: since v24.0, grid property rememberGroupStateWhenNewData is deprecated. This feature was provided before Transaction Updates worked (which keep group state). Now that transaction updates are possible and they keep group state, this feature is no longer needed.');
        }
        if (options.detailCellRendererParams && options.detailCellRendererParams.autoHeight) {
            console.warn('AG Grid: since v24.1, grid property detailCellRendererParams.autoHeight is replaced with grid property detailRowAutoHeight. This allows this feature to work when you provide a custom DetailCellRenderer');
            options.detailRowAutoHeight = true;
        }
        if (options.suppressKeyboardEvent) {
            console.warn("AG Grid: since v24.1 suppressKeyboardEvent in the gridOptions has been deprecated and will be removed in\n                 future versions of AG Grid. If you need this to be set for every column use the defaultColDef property.");
        }
        if (options.suppressEnterpriseResetOnNewColumns) {
            console.warn('AG Grid: since v25, grid property suppressEnterpriseResetOnNewColumns is deprecated. This was a temporary property to allow changing columns in Server Side Row Model without triggering a reload. Now that it is possible to dynamically change columns in the grid, this is no longer needed.');
        }
        if (options.suppressColumnStateEvents) {
            console.warn('AG Grid: since v25, grid property suppressColumnStateEvents no longer works due to a refactor that we did. It should be possible to achieve similar using event.source, which would be "api" if the event was due to setting column state via the API');
        }
        if (options.defaultExportParams) {
            console.warn('AG Grid: since v25.2, the grid property `defaultExportParams` has been replaced by `defaultCsvExportParams` and `defaultExcelExportParams`.');
        }
        if (options.stopEditingWhenGridLosesFocus) {
            console.warn('AG Grid: since v25.2.2, the grid property `stopEditingWhenGridLosesFocus` has been replaced by `stopEditingWhenCellsLoseFocus`.');
            options.stopEditingWhenCellsLoseFocus = true;
        }
        if (options.applyColumnDefOrder) {
            console.warn('AG Grid: since v26.0, the grid property `applyColumnDefOrder` is no longer needed, as this is the default behaviour. To turn this behaviour off, set maintainColumnOrder=true');
        }
        if (options.groupMultiAutoColumn) {
            console.warn("AG Grid: since v26.0, the grid property `groupMultiAutoColumn` has been replaced by `groupDisplayType = 'multipleColumns'`");
            options.groupDisplayType = 'multipleColumns';
        }
        if (options.groupUseEntireRow) {
            console.warn("AG Grid: since v26.0, the grid property `groupUseEntireRow` has been replaced by `groupDisplayType = 'groupRows'`");
            options.groupDisplayType = 'groupRows';
        }
        if (options.groupSuppressAutoColumn) {
            var propName = options.treeData ? 'treeDataDisplayType' : 'groupDisplayType';
            console.warn("AG Grid: since v26.0, the grid property `groupSuppressAutoColumn` has been replaced by `" + propName + " = 'custom'`");
            options.groupDisplayType = 'custom';
        }
        if (options.defaultGroupOrderComparator) {
            console.warn("AG Grid: since v27.2, the grid property `defaultGroupOrderComparator` is deprecated and has been replaced by `initialGroupOrderComparator` and now receives a single params object.");
        }
        if (options.defaultGroupSortComparator) {
            console.warn("AG Grid: since v26.0, the grid property `defaultGroupSortComparator` has been replaced by `initialGroupOrderComparator`");
            options.defaultGroupOrderComparator = options.defaultGroupSortComparator;
        }
        if (options.groupRowAggNodes) {
            console.warn("AG Grid: since v27.2, the grid property `groupRowAggNodes` is deprecated and has been replaced by `getGroupRowAgg` and now receives a single params object.");
        }
        if (options.postSort) {
            console.warn("AG Grid: since v27.2, the grid property `postSort` is deprecated and has been replaced by `postSortRows` and now receives a single params object.");
        }
        if (options.isFullWidthCell) {
            console.warn("AG Grid: since v27.2, the grid property `isFullWidthCell` is deprecated and has been replaced by `isFullWidthRow` and now receives a single params object.");
        }
        if (options.localeTextFunc) {
            console.warn("AG Grid: since v27.2, the grid property `localeTextFunc` is deprecated and has been replaced by `getLocaleText` and now receives a single params object.");
        }
        if (options.colWidth) {
            console.warn('AG Grid: since v26.1, the grid property `colWidth` is deprecated and should be set via `defaultColDef.width`.');
        }
        if (options.minColWidth) {
            console.warn('AG Grid: since v26.1, the grid property `minColWidth` is deprecated and should be set via `defaultColDef.minWidth`.');
        }
        if (options.maxColWidth) {
            console.warn('AG Grid: since v26.1, the grid property `maxColWidth` is deprecated and should be set via `defaultColDef.maxWidth`.');
        }
        if (options.reactUi) {
            console.warn('AG Grid: since v27.0, React UI is on by default, so no need for reactUi=true. To turn it off, set suppressReactUi=true.');
        }
        if (options.suppressReactUi) {
            console.warn('AG Grid: The legacy React rendering engine is deprecated and will be removed in the next major version of the grid.');
        }
        if (options.suppressCellSelection) {
            console.warn('AG Grid: since v27.0, `suppressCellSelection` has been replaced by `suppressCellFocus`.');
            options.suppressCellFocus = options.suppressCellSelection;
        }
        if (options.getRowNodeId) {
            console.warn('AG Grid: since v27.1, `getRowNodeId` is deprecated and has been replaced by `getRowId`. The difference: if getRowId() is implemented then immutable data is enabled by default.');
        }
        if (options.immutableData) {
            if (options.getRowId) {
                console.warn('AG Grid: since v27.1, `immutableData` is deprecated. With the `getRowId` callback implemented, immutable data is enabled by default so you can remove `immutableData=true`.');
            }
            else {
                console.warn('AG Grid: since v27.1, `immutableData` is deprecated. To enable immutable data you must implement the `getRowId()` callback.');
            }
        }
        if (options.clipboardDeliminator) {
            console.warn('AG Grid: since v27.1, `clipboardDeliminator` has been replaced by `clipboardDelimiter`.');
            options.clipboardDelimiter = options.clipboardDeliminator;
        }
        checkRenamedProperty('processSecondaryColDef', 'processPivotResultColDef', '28.0.x');
        checkRenamedProperty('processSecondaryColGroupDef', 'processPivotResultColGroupDef', '28.0.x');
        if (options.serverSideStoreType) {
            console.warn('AG Grid: since v28.0, `serverSideStoreType` has been replaced by `serverSideInfiniteScroll`. Set to true to use Partial Store, and false to use Full Store.');
            options.serverSideInfiniteScroll = options.serverSideStoreType === 'partial';
        }
        checkRenamedProperty('getServerSideStoreParams', 'getServerSideGroupLevelParams', '28.0.x');
    };
    GridOptionsWrapper.prototype.checkForViolations = function () {
        if (this.isTreeData()) {
            this.treeDataViolations();
        }
    };
    GridOptionsWrapper.prototype.treeDataViolations = function () {
        if (this.isRowModelDefault()) {
            if (generic_1.missing(this.getDataPathFunc())) {
                console.warn('AG Grid: property usingTreeData=true with rowModel=clientSide, but you did not ' +
                    'provide getDataPath function, please provide getDataPath function if using tree data.');
            }
        }
        if (this.isRowModelServerSide()) {
            if (generic_1.missing(this.getIsServerSideGroupFunc())) {
                console.warn('AG Grid: property usingTreeData=true with rowModel=serverSide, but you did not ' +
                    'provide isServerSideGroup function, please provide isServerSideGroup function if using tree data.');
            }
            if (generic_1.missing(this.getServerSideGroupKeyFunc())) {
                console.warn('AG Grid: property usingTreeData=true with rowModel=serverSide, but you did not ' +
                    'provide getServerSideGroupKey function, please provide getServerSideGroupKey function if using tree data.');
            }
        }
    };
    GridOptionsWrapper.prototype.getLocaleTextFunc = function () {
        var _this = this;
        var _a = this.gridOptions, localeText = _a.localeText, getLocaleText = _a.getLocaleText, localeTextFunc = _a.localeTextFunc;
        if (getLocaleText) {
            //key: string, defaultValue: string, variableValues?: string[]
            return function (key, defaultValue, variableValues) {
                var params = {
                    key: key,
                    defaultValue: defaultValue,
                    variableValues: variableValues,
                    api: _this.getApi(),
                    columnApi: _this.getColumnApi(),
                    context: _this.getContext()
                };
                return getLocaleText(params);
            };
        }
        if (localeTextFunc) {
            return localeTextFunc;
        }
        return function (key, defaultValue, variableValues) {
            var localisedText = localeText && localeText[key];
            if (localisedText && variableValues && variableValues.length) {
                var found = 0;
                while (true) {
                    if (found >= variableValues.length) {
                        break;
                    }
                    var idx = localisedText.indexOf('${variable}');
                    if (idx === -1) {
                        break;
                    }
                    localisedText = localisedText.replace('${variable}', variableValues[found++]);
                }
            }
            return (localisedText !== null && localisedText !== void 0 ? localisedText : defaultValue);
        };
    };
    // responsible for calling the onXXX functions on gridOptions
    GridOptionsWrapper.prototype.globalEventHandler = function (eventName, event) {
        // prevent events from being fired _after_ the grid has been destroyed
        if (this.destroyed) {
            return;
        }
        var callbackMethodName = componentUtil_1.ComponentUtil.getCallbackForEvent(eventName);
        if (typeof this.gridOptions[callbackMethodName] === 'function') {
            this.gridOptions[callbackMethodName](event);
        }
    };
    GridOptionsWrapper.prototype.setRowHeightVariable = function (height) {
        var oldRowHeight = this.eGridDiv.style.getPropertyValue('--ag-line-height').trim();
        var newRowHeight = height + "px";
        if (oldRowHeight != newRowHeight) {
            this.eGridDiv.style.setProperty('--ag-line-height', newRowHeight);
        }
    };
    // we don't allow dynamic row height for virtual paging
    GridOptionsWrapper.prototype.getRowHeightAsNumber = function () {
        if (!this.gridOptions.rowHeight || generic_1.missing(this.gridOptions.rowHeight)) {
            return this.getDefaultRowHeight();
        }
        var rowHeight = this.gridOptions.rowHeight;
        if (rowHeight && this.isNumeric(rowHeight)) {
            this.setRowHeightVariable(rowHeight);
            return rowHeight;
        }
        console.warn('AG Grid row height must be a number if not using standard row model');
        return this.getDefaultRowHeight();
    };
    GridOptionsWrapper.prototype.isGetRowHeightFunction = function () {
        return typeof this.gridOptions.getRowHeight === 'function';
    };
    GridOptionsWrapper.prototype.getRowHeightForNode = function (rowNode, allowEstimate, defaultRowHeight) {
        if (allowEstimate === void 0) { allowEstimate = false; }
        if (defaultRowHeight == null) {
            defaultRowHeight = this.getDefaultRowHeight();
        }
        // check the function first, in case use set both function and
        // number, when using virtual pagination then function can be
        // used for pinned rows and the number for the body rows.
        if (this.isGetRowHeightFunction()) {
            if (allowEstimate) {
                return { height: defaultRowHeight, estimated: true };
            }
            var params = {
                node: rowNode,
                data: rowNode.data
            };
            var height = this.mergeGridCommonParams(this.gridOptions.getRowHeight)(params);
            if (this.isNumeric(height)) {
                if (height === 0) {
                    function_1.doOnce(function () { return console.warn('AG Grid: The return of `getRowHeight` cannot be zero. If the intention is to hide rows, use a filter instead.'); }, 'invalidRowHeight');
                }
                return { height: Math.max(1, height), estimated: false };
            }
        }
        if (rowNode.detail && this.isMasterDetail()) {
            // if autoHeight, we want the height to grow to the new height starting at 1, as otherwise a flicker would happen,
            // as the detail goes to the default (eg 200px) and then immediately shrink up/down to the new measured height
            // (due to auto height) which looks bad, especially if doing row animation.
            if (this.isDetailRowAutoHeight()) {
                return { height: 1, estimated: false };
            }
            if (this.isNumeric(this.gridOptions.detailRowHeight)) {
                return { height: this.gridOptions.detailRowHeight, estimated: false };
            }
            return { height: DEFAULT_DETAIL_ROW_HEIGHT, estimated: false };
        }
        var rowHeight = this.gridOptions.rowHeight && this.isNumeric(this.gridOptions.rowHeight) ? this.gridOptions.rowHeight : defaultRowHeight;
        return { height: rowHeight, estimated: false };
    };
    GridOptionsWrapper.prototype.isDynamicRowHeight = function () {
        return typeof this.gridOptions.getRowHeight === 'function';
    };
    GridOptionsWrapper.prototype.getListItemHeight = function () {
        return this.getFromTheme(20, 'listItemHeight');
    };
    GridOptionsWrapper.prototype.chartMenuPanelWidth = function () {
        return this.environment.chartMenuPanelWidth();
    };
    GridOptionsWrapper.prototype.isNumeric = function (value) {
        return !isNaN(value) && typeof value === 'number' && isFinite(value);
    };
    GridOptionsWrapper.prototype.getFromTheme = function (defaultValue, sassVariableName) {
        var theme = this.environment.getTheme().theme;
        if (theme && theme.indexOf('ag-theme') === 0) {
            return this.environment.getSassVariable(theme, sassVariableName);
        }
        return defaultValue;
    };
    GridOptionsWrapper.prototype.getDefaultRowHeight = function () {
        return this.getFromTheme(DEFAULT_ROW_HEIGHT, 'rowHeight');
    };
    GridOptionsWrapper.prototype.matchesGroupDisplayType = function (toMatch, supplied) {
        var groupDisplayTypeValues = ['groupRows', 'multipleColumns', 'custom', 'singleColumn'];
        if (groupDisplayTypeValues.indexOf(supplied) < 0) {
            console.warn("AG Grid: '" + supplied + "' is not a valid groupDisplayType value - possible values are: '" + groupDisplayTypeValues.join("', '") + "'");
            return false;
        }
        return supplied === toMatch;
    };
    GridOptionsWrapper.prototype.matchesTreeDataDisplayType = function (toMatch, supplied) {
        var treeDataDisplayTypeValues = ['auto', 'custom'];
        if (treeDataDisplayTypeValues.indexOf(supplied) < 0) {
            console.warn("AG Grid: '" + supplied + "' is not a valid treeDataDisplayType value - possible values are: '" + treeDataDisplayTypeValues.join("', '") + "'");
            return false;
        }
        return supplied === toMatch;
    };
    var GridOptionsWrapper_1;
    GridOptionsWrapper.MIN_COL_WIDTH = 10;
    GridOptionsWrapper.PROP_HEADER_HEIGHT = 'headerHeight';
    GridOptionsWrapper.PROP_GROUP_REMOVE_SINGLE_CHILDREN = 'groupRemoveSingleChildren';
    GridOptionsWrapper.PROP_GROUP_REMOVE_LOWEST_SINGLE_CHILDREN = 'groupRemoveLowestSingleChildren';
    GridOptionsWrapper.PROP_GROUP_DISPLAY_TYPE = 'groupDisplayType';
    GridOptionsWrapper.PROP_PIVOT_HEADER_HEIGHT = 'pivotHeaderHeight';
    GridOptionsWrapper.PROP_SUPPRESS_CLIPBOARD_PASTE = 'suppressClipboardPaste';
    GridOptionsWrapper.PROP_GROUP_HEADER_HEIGHT = 'groupHeaderHeight';
    GridOptionsWrapper.PROP_PIVOT_GROUP_HEADER_HEIGHT = 'pivotGroupHeaderHeight';
    GridOptionsWrapper.PROP_NAVIGATE_TO_NEXT_CELL = 'navigateToNextCell';
    GridOptionsWrapper.PROP_TAB_TO_NEXT_CELL = 'tabToNextCell';
    GridOptionsWrapper.PROP_NAVIGATE_TO_NEXT_HEADER = 'navigateToNextHeader';
    GridOptionsWrapper.PROP_TAB_TO_NEXT_HEADER = 'tabToNextHeader';
    GridOptionsWrapper.PROP_IS_EXTERNAL_FILTER_PRESENT = 'isExternalFilterPresent';
    GridOptionsWrapper.PROP_DOES_EXTERNAL_FILTER_PASS = 'doesExternalFilterPass';
    GridOptionsWrapper.PROP_FLOATING_FILTERS_HEIGHT = 'floatingFiltersHeight';
    GridOptionsWrapper.PROP_SUPPRESS_ROW_CLICK_SELECTION = 'suppressRowClickSelection';
    GridOptionsWrapper.PROP_SUPPRESS_ROW_DRAG = 'suppressRowDrag';
    GridOptionsWrapper.PROP_SUPPRESS_MOVE_WHEN_ROW_DRAG = 'suppressMoveWhenRowDragging';
    GridOptionsWrapper.PROP_GET_ROW_CLASS = 'getRowClass';
    GridOptionsWrapper.PROP_GET_ROW_STYLE = 'getRowStyle';
    GridOptionsWrapper.PROP_GET_ROW_HEIGHT = 'getRowHeight';
    GridOptionsWrapper.PROP_POPUP_PARENT = 'popupParent';
    GridOptionsWrapper.PROP_DOM_LAYOUT = 'domLayout';
    GridOptionsWrapper.PROP_ROW_CLASS = 'rowClass';
    GridOptionsWrapper.PROP_FILL_HANDLE_DIRECTION = 'fillHandleDirection';
    GridOptionsWrapper.PROP_GROUP_ROW_AGG_NODES = 'groupRowAggNodes';
    GridOptionsWrapper.PROP_GET_GROUP_ROW_AGG = 'getGroupRowAgg';
    GridOptionsWrapper.PROP_GET_BUSINESS_KEY_FOR_NODE = 'getBusinessKeyForNode';
    GridOptionsWrapper.PROP_GET_CHILD_COUNT = 'getChildCount';
    GridOptionsWrapper.PROP_PROCESS_ROW_POST_CREATE = 'processRowPostCreate';
    GridOptionsWrapper.PROP_GET_ROW_NODE_ID = 'getRowNodeId';
    GridOptionsWrapper.PROP_GET_ROW_ID = 'getRowId';
    GridOptionsWrapper.PROP_IS_FULL_WIDTH_CELL = 'isFullWidthCell';
    GridOptionsWrapper.PROP_IS_FULL_WIDTH_ROW = 'isFullWidthRow';
    GridOptionsWrapper.PROP_IS_ROW_SELECTABLE = 'isRowSelectable';
    GridOptionsWrapper.PROP_IS_ROW_MASTER = 'isRowMaster';
    GridOptionsWrapper.PROP_POST_SORT = 'postSort';
    GridOptionsWrapper.PROP_POST_SORT_ROWS = 'postSortRows';
    GridOptionsWrapper.PROP_GET_DOCUMENT = 'getDocument';
    GridOptionsWrapper.PROP_POST_PROCESS_POPUP = 'postProcessPopup';
    GridOptionsWrapper.PROP_DEFAULT_GROUP_ORDER_COMPARATOR = 'defaultGroupOrderComparator';
    GridOptionsWrapper.PROP_INITIAL_GROUP_ORDER_COMPARATOR = 'initialGroupOrderComparator';
    GridOptionsWrapper.PROP_PAGINATION_NUMBER_FORMATTER = 'paginationNumberFormatter';
    GridOptionsWrapper.PROP_GET_CONTEXT_MENU_ITEMS = 'getContextMenuItems';
    GridOptionsWrapper.PROP_GET_MAIN_MENU_ITEMS = 'getMainMenuItems';
    GridOptionsWrapper.PROP_PROCESS_CELL_FOR_CLIPBOARD = 'processCellForClipboard';
    GridOptionsWrapper.PROP_PROCESS_CELL_FROM_CLIPBOARD = 'processCellFromClipboard';
    GridOptionsWrapper.PROP_SEND_TO_CLIPBOARD = 'sendToClipboard';
    GridOptionsWrapper.PROP_PROCESS_PIVOT_RESULT_COL_DEF = 'processPivotResultColDef';
    GridOptionsWrapper.PROP_PROCESS_PIVOT_RESULT_COL_GROUP_DEF = 'processPivotResultColGroupDef';
    GridOptionsWrapper.PROP_GET_CHART_TOOLBAR_ITEMS = 'getChartToolbarItems';
    GridOptionsWrapper.PROP_GET_SERVER_SIDE_GROUP_PARAMS = 'getServerSideGroupLevelParams';
    GridOptionsWrapper.PROP_IS_SERVER_SIDE_GROUPS_OPEN_BY_DEFAULT = 'isServerSideGroupOpenByDefault';
    GridOptionsWrapper.PROP_IS_APPLY_SERVER_SIDE_TRANSACTION = 'isApplyServerSideTransaction';
    GridOptionsWrapper.PROP_IS_SERVER_SIDE_GROUP = 'isServerSideGroup';
    GridOptionsWrapper.PROP_GET_SERVER_SIDE_GROUP_KEY = 'getServerSideGroupKey';
    GridOptionsWrapper.PROP_AUTO_GROUP_COLUMN_DEF = 'autoGroupColumnDef';
    GridOptionsWrapper.PROP_DEFAULT_COL_DEF = 'defaultColDef';
    __decorate([
        context_1.Autowired('gridOptions')
    ], GridOptionsWrapper.prototype, "gridOptions", void 0);
    __decorate([
        context_1.Autowired('eventService')
    ], GridOptionsWrapper.prototype, "eventService", void 0);
    __decorate([
        context_1.Autowired('environment')
    ], GridOptionsWrapper.prototype, "environment", void 0);
    __decorate([
        context_1.Autowired('eGridDiv')
    ], GridOptionsWrapper.prototype, "eGridDiv", void 0);
    __decorate([
        __param(0, context_1.Qualifier('gridApi')), __param(1, context_1.Qualifier('columnApi'))
    ], GridOptionsWrapper.prototype, "agWire", null);
    __decorate([
        context_1.PreDestroy
    ], GridOptionsWrapper.prototype, "destroy", null);
    __decorate([
        context_1.PostConstruct
    ], GridOptionsWrapper.prototype, "init", null);
    GridOptionsWrapper = GridOptionsWrapper_1 = __decorate([
        context_1.Bean('gridOptionsWrapper')
    ], GridOptionsWrapper);
    return GridOptionsWrapper;
}());
exports.GridOptionsWrapper = GridOptionsWrapper;
