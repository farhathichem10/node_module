var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { _, Autowired, Column, Component, Events, KeyCode, PostConstruct, RefSelector } from "@ag-grid-community/core";
var ToolPanelFilterComp = /** @class */ (function (_super) {
    __extends(ToolPanelFilterComp, _super);
    function ToolPanelFilterComp(hideHeader) {
        if (hideHeader === void 0) { hideHeader = false; }
        var _this = _super.call(this, ToolPanelFilterComp.TEMPLATE) || this;
        _this.expanded = false;
        _this.hideHeader = hideHeader;
        return _this;
    }
    ToolPanelFilterComp.prototype.postConstruct = function () {
        this.eExpandChecked = _.createIconNoSpan('columnSelectOpen', this.gridOptionsWrapper);
        this.eExpandUnchecked = _.createIconNoSpan('columnSelectClosed', this.gridOptionsWrapper);
        this.eExpand.appendChild(this.eExpandChecked);
        this.eExpand.appendChild(this.eExpandUnchecked);
    };
    ToolPanelFilterComp.prototype.setColumn = function (column) {
        var _this = this;
        this.column = column;
        this.eFilterName.innerText = this.columnModel.getDisplayNameForColumn(this.column, 'filterToolPanel', false) || '';
        this.addManagedListener(this.eFilterToolPanelHeader, 'click', this.toggleExpanded.bind(this));
        this.addManagedListener(this.eFilterToolPanelHeader, 'keydown', function (e) {
            if (e.key === KeyCode.ENTER) {
                _this.toggleExpanded();
            }
        });
        this.addManagedListener(this.eventService, Events.EVENT_FILTER_OPENED, this.onFilterOpened.bind(this));
        this.addInIcon('filter', this.eFilterIcon, this.column);
        this.eFilterIcon.classList.toggle('ag-hidden', !this.isFilterActive());
        this.eExpandChecked.classList.add('ag-hidden');
        if (this.hideHeader) {
            this.eFilterToolPanelHeader.classList.toggle('ag-hidden', true);
            this.eFilterToolPanelHeader.removeAttribute('tabindex');
        }
        else {
            this.eFilterToolPanelHeader.setAttribute('tabindex', '0');
        }
        this.addManagedListener(this.column, Column.EVENT_FILTER_CHANGED, this.onFilterChanged.bind(this));
    };
    ToolPanelFilterComp.prototype.getColumn = function () {
        return this.column;
    };
    ToolPanelFilterComp.prototype.getColumnFilterName = function () {
        return this.columnModel.getDisplayNameForColumn(this.column, 'filterToolPanel', false);
    };
    ToolPanelFilterComp.prototype.addCssClassToTitleBar = function (cssClass) {
        this.eFilterToolPanelHeader.classList.add(cssClass);
    };
    ToolPanelFilterComp.prototype.addInIcon = function (iconName, eParent, column) {
        if (eParent == null) {
            return;
        }
        var eIcon = _.createIconNoSpan(iconName, this.gridOptionsWrapper, column);
        eParent.appendChild(eIcon);
    };
    ToolPanelFilterComp.prototype.isFilterActive = function () {
        return this.filterManager.isFilterActive(this.column);
    };
    ToolPanelFilterComp.prototype.onFilterChanged = function () {
        this.eFilterIcon.classList.toggle('ag-hidden', !this.isFilterActive());
        this.dispatchEvent({ type: Column.EVENT_FILTER_CHANGED });
    };
    ToolPanelFilterComp.prototype.toggleExpanded = function () {
        this.expanded ? this.collapse() : this.expand();
    };
    ToolPanelFilterComp.prototype.expand = function () {
        var _this = this;
        var _a;
        if (this.expanded) {
            return;
        }
        this.expanded = true;
        _.setAriaExpanded(this.eFilterToolPanelHeader, true);
        var container = _.loadTemplate(/* html */ "<div class=\"ag-filter-toolpanel-instance-filter\"></div>");
        var filterPromise = (_a = this.filterManager.getOrCreateFilterWrapper(this.column, 'TOOLBAR')) === null || _a === void 0 ? void 0 : _a.filterPromise;
        if (filterPromise) {
            filterPromise.then(function (filter) {
                _this.underlyingFilter = filter;
                if (!filter) {
                    return;
                }
                container.appendChild(filter.getGui());
                _this.agFilterToolPanelBody.appendChild(container);
                if (filter.afterGuiAttached) {
                    filter.afterGuiAttached({ container: 'toolPanel' });
                }
            });
        }
        _.setDisplayed(this.eExpandChecked, true);
        _.setDisplayed(this.eExpandUnchecked, false);
    };
    ToolPanelFilterComp.prototype.collapse = function () {
        if (!this.expanded) {
            return;
        }
        this.expanded = false;
        _.setAriaExpanded(this.eFilterToolPanelHeader, false);
        this.agFilterToolPanelBody.removeChild(this.agFilterToolPanelBody.children[0]);
        _.setDisplayed(this.eExpandChecked, false);
        _.setDisplayed(this.eExpandUnchecked, true);
    };
    ToolPanelFilterComp.prototype.refreshFilter = function () {
        if (!this.expanded) {
            return;
        }
        var filter = this.underlyingFilter;
        if (!filter) {
            return;
        }
        // set filters should be updated when the filter has been changed elsewhere, i.e. via api. Note that we can't
        // use 'afterGuiAttached' to refresh the virtual list as it also focuses on the mini filter which changes the
        // scroll position in the filter list panel
        if (typeof filter.refreshVirtualList === 'function') {
            filter.refreshVirtualList();
        }
    };
    ToolPanelFilterComp.prototype.onFilterOpened = function (event) {
        if (event.source !== 'COLUMN_MENU') {
            return;
        }
        if (event.column !== this.column) {
            return;
        }
        if (!this.expanded) {
            return;
        }
        this.collapse();
    };
    ToolPanelFilterComp.TEMPLATE = "\n        <div class=\"ag-filter-toolpanel-instance\">\n            <div class=\"ag-filter-toolpanel-header ag-filter-toolpanel-instance-header\" ref=\"eFilterToolPanelHeader\" role=\"button\" aria-expanded=\"false\">\n                <div ref=\"eExpand\" class=\"ag-filter-toolpanel-expand\"></div>\n                <span ref=\"eFilterName\" class=\"ag-header-cell-text\"></span>\n                <span ref=\"eFilterIcon\" class=\"ag-header-icon ag-filter-icon ag-filter-toolpanel-instance-header-icon\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"ag-filter-toolpanel-instance-body ag-filter\" ref=\"agFilterToolPanelBody\"></div>\n        </div>";
    __decorate([
        RefSelector('eFilterToolPanelHeader')
    ], ToolPanelFilterComp.prototype, "eFilterToolPanelHeader", void 0);
    __decorate([
        RefSelector('eFilterName')
    ], ToolPanelFilterComp.prototype, "eFilterName", void 0);
    __decorate([
        RefSelector('agFilterToolPanelBody')
    ], ToolPanelFilterComp.prototype, "agFilterToolPanelBody", void 0);
    __decorate([
        RefSelector('eFilterIcon')
    ], ToolPanelFilterComp.prototype, "eFilterIcon", void 0);
    __decorate([
        RefSelector('eExpand')
    ], ToolPanelFilterComp.prototype, "eExpand", void 0);
    __decorate([
        Autowired('filterManager')
    ], ToolPanelFilterComp.prototype, "filterManager", void 0);
    __decorate([
        Autowired('columnModel')
    ], ToolPanelFilterComp.prototype, "columnModel", void 0);
    __decorate([
        PostConstruct
    ], ToolPanelFilterComp.prototype, "postConstruct", null);
    return ToolPanelFilterComp;
}(Component));
export { ToolPanelFilterComp };
