/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v28.2.1
 * @link https://www.ag-grid.com/
 * @license MIT
 */
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
import { BeanStub } from "../../context/beanStub";
import { Autowired, Bean, PostConstruct } from "../../context/context";
import { ReadOnlyFloatingFilter } from "../../filter/floating/provided/readOnlyFloatingFilter";
import { DateFilter } from "../../filter/provided/date/dateFilter";
import { DateFloatingFilter } from "../../filter/provided/date/dateFloatingFilter";
import { DefaultDateComponent } from "../../filter/provided/date/defaultDateComponent";
import { NumberFilter } from "../../filter/provided/number/numberFilter";
import { NumberFloatingFilter } from "../../filter/provided/number/numberFloatingFilter";
import { TextFilter } from "../../filter/provided/text/textFilter";
import { TextFloatingFilter } from "../../filter/provided/text/textFloatingFilter";
import { HeaderComp } from "../../headerRendering/cells/column/headerComp";
import { HeaderGroupComp } from "../../headerRendering/cells/columnGroup/headerGroupComp";
import { SortIndicatorComp } from "../../headerRendering/cells/column/sortIndicatorComp";
import { LargeTextCellEditor } from "../../rendering/cellEditors/largeTextCellEditor";
import { PopupSelectCellEditor } from "../../rendering/cellEditors/popupSelectCellEditor";
import { PopupTextCellEditor } from "../../rendering/cellEditors/popupTextCellEditor";
import { SelectCellEditor } from "../../rendering/cellEditors/selectCellEditor";
import { TextCellEditor } from "../../rendering/cellEditors/textCellEditor";
import { AnimateShowChangeCellRenderer } from "../../rendering/cellRenderers/animateShowChangeCellRenderer";
import { AnimateSlideCellRenderer } from "../../rendering/cellRenderers/animateSlideCellRenderer";
import { GroupCellRenderer } from "../../rendering/cellRenderers/groupCellRenderer";
import { LoadingCellRenderer } from "../../rendering/cellRenderers/loadingCellRenderer";
import { LoadingOverlayComponent } from "../../rendering/overlays/loadingOverlayComponent";
import { NoRowsOverlayComponent } from "../../rendering/overlays/noRowsOverlayComponent";
import { TooltipComponent } from "../../rendering/tooltipComponent";
import { doOnce } from "../../utils/function";
import { iterateObject } from '../../utils/object';
var UserComponentRegistry = /** @class */ (function (_super) {
    __extends(UserComponentRegistry, _super);
    function UserComponentRegistry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.agGridDefaults = {
            //date
            agDateInput: DefaultDateComponent,
            //header
            agColumnHeader: HeaderComp,
            agColumnGroupHeader: HeaderGroupComp,
            agSortIndicator: SortIndicatorComp,
            //floating filters
            agTextColumnFloatingFilter: TextFloatingFilter,
            agNumberColumnFloatingFilter: NumberFloatingFilter,
            agDateColumnFloatingFilter: DateFloatingFilter,
            agReadOnlyFloatingFilter: ReadOnlyFloatingFilter,
            // renderers
            agAnimateShowChangeCellRenderer: AnimateShowChangeCellRenderer,
            agAnimateSlideCellRenderer: AnimateSlideCellRenderer,
            agGroupCellRenderer: GroupCellRenderer,
            agGroupRowRenderer: GroupCellRenderer,
            agLoadingCellRenderer: LoadingCellRenderer,
            //editors
            agCellEditor: TextCellEditor,
            agTextCellEditor: TextCellEditor,
            agSelectCellEditor: SelectCellEditor,
            agPopupTextCellEditor: PopupTextCellEditor,
            agPopupSelectCellEditor: PopupSelectCellEditor,
            agLargeTextCellEditor: LargeTextCellEditor,
            //filter
            agTextColumnFilter: TextFilter,
            agNumberColumnFilter: NumberFilter,
            agDateColumnFilter: DateFilter,
            //overlays
            agLoadingOverlay: LoadingOverlayComponent,
            agNoRowsOverlay: NoRowsOverlayComponent,
            // tooltips
            agTooltipComponent: TooltipComponent
        };
        _this.agDeprecatedNames = {
            set: {
                newComponentName: 'agSetColumnFilter',
                propertyHolder: 'filter'
            },
            text: {
                newComponentName: 'agTextColumnFilter',
                propertyHolder: 'filter'
            },
            number: {
                newComponentName: 'agNumberColumnFilter',
                propertyHolder: 'filter'
            },
            date: {
                newComponentName: 'agDateColumnFilter',
                propertyHolder: 'filter'
            },
            group: {
                newComponentName: 'agGroupCellRenderer',
                propertyHolder: 'cellRenderer'
            },
            animateShowChange: {
                newComponentName: 'agAnimateShowChangeCellRenderer',
                propertyHolder: 'cellRenderer'
            },
            animateSlide: {
                newComponentName: 'agAnimateSlideCellRenderer',
                propertyHolder: 'cellRenderer'
            },
            select: {
                newComponentName: 'agSelectCellEditor',
                propertyHolder: 'cellEditor'
            },
            largeText: {
                newComponentName: 'agLargeTextCellEditor',
                propertyHolder: 'cellEditor'
            },
            popupSelect: {
                newComponentName: 'agPopupSelectCellEditor',
                propertyHolder: 'cellEditor'
            },
            popupText: {
                newComponentName: 'agPopupTextCellEditor',
                propertyHolder: 'cellEditor'
            },
            richSelect: {
                newComponentName: 'agRichSelectCellEditor',
                propertyHolder: 'cellEditor'
            },
            headerComponent: {
                newComponentName: 'agColumnHeader',
                propertyHolder: 'headerComponent'
            }
        };
        _this.jsComps = {};
        _this.fwComps = {};
        return _this;
    }
    UserComponentRegistry.prototype.init = function () {
        var _this = this;
        if (this.gridOptions.components != null) {
            iterateObject(this.gridOptions.components, function (key, component) { return _this.registerJsComponent(key, component); });
        }
        if (this.gridOptions.frameworkComponents != null) {
            iterateObject(this.gridOptions.frameworkComponents, function (key, component) { return _this.registerFwComponent(key, component); });
        }
    };
    UserComponentRegistry.prototype.registerDefaultComponent = function (rawName, component) {
        var name = this.translateIfDeprecated(rawName);
        if (this.agGridDefaults[name]) {
            console.error("Trying to overwrite a default component. You should call registerComponent");
            return;
        }
        this.agGridDefaults[name] = component;
    };
    UserComponentRegistry.prototype.registerJsComponent = function (rawName, component) {
        var name = this.translateIfDeprecated(rawName);
        if (this.fwComps[name]) {
            console.error("Trying to register a component that you have already registered for frameworks: " + name);
            return;
        }
        this.jsComps[name] = component;
    };
    /**
     * B the business interface (ie IHeader)
     * A the agGridComponent interface (ie IHeaderComp). The final object acceptable by ag-grid
     */
    UserComponentRegistry.prototype.registerFwComponent = function (rawName, component) {
        var warningMessage = "AG Grid: As of v27, registering components via grid property frameworkComponents is deprecated. Instead register both JavaScript AND Framework Components via the components property.";
        doOnce(function () { return console.warn(warningMessage); }, "UserComponentRegistry.frameworkComponentsDeprecated");
        var name = this.translateIfDeprecated(rawName);
        this.fwComps[name] = component;
    };
    UserComponentRegistry.prototype.retrieve = function (rawName) {
        var name = this.translateIfDeprecated(rawName);
        var createResult = function (component, componentFromFramework) { return ({ componentFromFramework: componentFromFramework, component: component }); };
        // FrameworkOverrides.frameworkComponent() is used in two locations:
        // 1) for Vue, user provided components get registered via a framework specific way.
        // 2) for React, it's how the React UI provides alternative default components (eg GroupCellRenderer and DetailCellRenderer)
        var registeredViaFrameworkComp = this.getFrameworkOverrides().frameworkComponent(name, this.gridOptions.components);
        if (registeredViaFrameworkComp != null) {
            return createResult(registeredViaFrameworkComp, true);
        }
        var frameworkComponent = this.fwComps[name];
        if (frameworkComponent) {
            return createResult(frameworkComponent, true);
        }
        var jsComponent = this.jsComps[name];
        if (jsComponent) {
            var isFwkComp = this.getFrameworkOverrides().isFrameworkComponent(jsComponent);
            return createResult(jsComponent, isFwkComp);
        }
        var defaultComponent = this.agGridDefaults[name];
        if (defaultComponent) {
            return createResult(defaultComponent, false);
        }
        if (Object.keys(this.agGridDefaults).indexOf(name) < 0) {
            console.warn("AG Grid: Looking for component [" + name + "] but it wasn't found.");
        }
        return null;
    };
    UserComponentRegistry.prototype.translateIfDeprecated = function (raw) {
        var deprecatedInfo = this.agDeprecatedNames[raw];
        if (deprecatedInfo != null) {
            doOnce(function () {
                console.warn("ag-grid. Since v15.0 component names have been renamed to be namespaced. You should rename " + deprecatedInfo.propertyHolder + ":" + raw + " to " + deprecatedInfo.propertyHolder + ":" + deprecatedInfo.newComponentName);
            }, 'DEPRECATE_COMPONENT_' + raw);
            return deprecatedInfo.newComponentName;
        }
        return raw;
    };
    __decorate([
        Autowired('gridOptions')
    ], UserComponentRegistry.prototype, "gridOptions", void 0);
    __decorate([
        Autowired('agComponentUtils')
    ], UserComponentRegistry.prototype, "agComponentUtils", void 0);
    __decorate([
        PostConstruct
    ], UserComponentRegistry.prototype, "init", null);
    UserComponentRegistry = __decorate([
        Bean('userComponentRegistry')
    ], UserComponentRegistry);
    return UserComponentRegistry;
}(BeanStub));
export { UserComponentRegistry };
