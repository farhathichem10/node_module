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
import { Component, Property, ChildProperty, Event, append, compile } from '@syncfusion/ej2-base';
import { EventHandler, Touch, Browser, Animation as PopupAnimation } from '@syncfusion/ej2-base';
import { isNullOrUndefined, getUniqueID, formatUnit, select, selectAll } from '@syncfusion/ej2-base';
import { attributes, closest, removeClass, addClass, remove } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, Complex, SanitizeHtmlHelper } from '@syncfusion/ej2-base';
import { Popup } from '../popup/popup';
import { calculatePosition } from '../common/position';
import { isCollide, fit } from '../common/collision';
var TOUCHEND_HIDE_DELAY = 1500;
var TAPHOLD_THRESHOLD = 500;
var SHOW_POINTER_TIP_GAP = 0;
var HIDE_POINTER_TIP_GAP = 8;
var MOUSE_TRAIL_GAP = 2;
var POINTER_ADJUST = 2;
var ROOT = 'e-tooltip';
var RTL = 'e-rtl';
var DEVICE = 'e-bigger';
var ICON = 'e-icons';
var CLOSE = 'e-tooltip-close';
var TOOLTIP_WRAP = 'e-tooltip-wrap';
var CONTENT = 'e-tip-content';
var ARROW_TIP = 'e-arrow-tip';
var ARROW_TIP_OUTER = 'e-arrow-tip-outer';
var ARROW_TIP_INNER = 'e-arrow-tip-inner';
var TIP_BOTTOM = 'e-tip-bottom';
var TIP_TOP = 'e-tip-top';
var TIP_LEFT = 'e-tip-left';
var TIP_RIGHT = 'e-tip-right';
var POPUP_ROOT = 'e-popup';
var POPUP_OPEN = 'e-popup-open';
var POPUP_CLOSE = 'e-popup-close';
var POPUP_LIB = 'e-lib';
var HIDE_POPUP = 'e-hidden';
var POPUP_CONTAINER = 'e-tooltip-popup-container';
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property({ effect: 'FadeIn', duration: 150, delay: 0 })
    ], Animation.prototype, "open", void 0);
    __decorate([
        Property({ effect: 'FadeOut', duration: 150, delay: 0 })
    ], Animation.prototype, "close", void 0);
    return Animation;
}(ChildProperty));
export { Animation };
/**
 * Represents the Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <div id="tooltip">Show Tooltip</div>
 * ```
 * ```typescript
 * <script>
 *   var tooltipObj = new Tooltip({ content: 'Tooltip text' });
 *   tooltipObj.appendTo("#tooltip");
 * </script>
 * ```
 */
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    /* eslint-enable */
    /**
     * Constructor for creating the Tooltip Component
     *
     * @param {TooltipModel} options - specifies the options for the constructor
     * @param {string| HTMLElement} element - specifies the element for the constructor
     *
     */
    function Tooltip(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseMoveEvent = null;
        _this.mouseMoveTarget = null;
        _this.containerElement = null;
        _this.isBodyContainer = true;
        return _this;
    }
    Tooltip.prototype.initialize = function () {
        this.formatPosition();
        addClass([this.element], ROOT);
        this.element.setAttribute('tabindex', '0');
    };
    Tooltip.prototype.formatPosition = function () {
        var _a, _b;
        if (this.position.indexOf('Top') === 0 || this.position.indexOf('Bottom') === 0) {
            _a = this.position.split(/(?=[A-Z])/), this.tooltipPositionY = _a[0], this.tooltipPositionX = _a[1];
        }
        else {
            _b = this.position.split(/(?=[A-Z])/), this.tooltipPositionX = _b[0], this.tooltipPositionY = _b[1];
        }
    };
    Tooltip.prototype.renderArrow = function () {
        this.setTipClass(this.position);
        var tip = this.createElement('div', { className: ARROW_TIP + ' ' + this.tipClass });
        tip.appendChild(this.createElement('div', { className: ARROW_TIP_OUTER + ' ' + this.tipClass }));
        tip.appendChild(this.createElement('div', { className: ARROW_TIP_INNER + ' ' + this.tipClass }));
        this.tooltipEle.appendChild(tip);
    };
    Tooltip.prototype.setTipClass = function (position) {
        if (position.indexOf('Right') === 0) {
            this.tipClass = TIP_LEFT;
        }
        else if (position.indexOf('Bottom') === 0) {
            this.tipClass = TIP_TOP;
        }
        else if (position.indexOf('Left') === 0) {
            this.tipClass = TIP_RIGHT;
        }
        else {
            this.tipClass = TIP_BOTTOM;
        }
    };
    Tooltip.prototype.renderPopup = function (target) {
        var elePos = this.mouseTrail ? { top: 0, left: 0 } : this.getTooltipPosition(target);
        this.tooltipEle.classList.remove(POPUP_LIB);
        this.popupObj = new Popup(this.tooltipEle, {
            height: this.height,
            width: this.width,
            position: { X: elePos.left, Y: elePos.top },
            enableRtl: this.enableRtl,
            open: this.openPopupHandler.bind(this),
            close: this.closePopupHandler.bind(this)
        });
    };
    Tooltip.prototype.getTooltipPosition = function (target) {
        this.tooltipEle.style.display = 'block';
        var pos = calculatePosition(target, this.tooltipPositionX, this.tooltipPositionY, !this.isBodyContainer, this.isBodyContainer ? null : this.containerElement.getBoundingClientRect());
        var offsetPos = this.calculateTooltipOffset(this.position);
        var collisionPosition = this.calculateElementPosition(pos, offsetPos);
        var collisionLeft = collisionPosition[0];
        var collisionTop = collisionPosition[1];
        var elePos = this.collisionFlipFit(target, collisionLeft, collisionTop);
        this.tooltipEle.style.display = '';
        return elePos;
    };
    Tooltip.prototype.windowResize = function () {
        this.reposition(this.findTarget());
    };
    Tooltip.prototype.reposition = function (target) {
        if (this.popupObj && target) {
            var elePos = this.getTooltipPosition(target);
            this.popupObj.position = { X: elePos.left, Y: elePos.top };
            this.popupObj.dataBind();
        }
    };
    Tooltip.prototype.openPopupHandler = function () {
        if (!this.mouseTrail && this.needTemplateReposition()) {
            this.reposition(this.findTarget());
        }
        this.trigger('afterOpen', this.tooltipEventArgs);
        this.tooltipEventArgs = null;
    };
    Tooltip.prototype.closePopupHandler = function () {
        if (this.isReact && !(this.opensOn === "Click" && typeof (this.content) === 'function')) {
            this.clearTemplate(['content']);
        }
        this.clear();
        this.trigger('afterClose', this.tooltipEventArgs);
        this.tooltipEventArgs = null;
    };
    Tooltip.prototype.calculateTooltipOffset = function (position) {
        var pos = { top: 0, left: 0 };
        var tooltipEleWidth = this.tooltipEle.offsetWidth;
        var tooltipEleHeight = this.tooltipEle.offsetHeight;
        var arrowEle = select('.' + ARROW_TIP, this.tooltipEle);
        var tipWidth = arrowEle ? arrowEle.offsetWidth : 0;
        var tipHeight = arrowEle ? arrowEle.offsetHeight : 0;
        var tipAdjust = (this.showTipPointer ? SHOW_POINTER_TIP_GAP : HIDE_POINTER_TIP_GAP);
        var tipHeightAdjust = (tipHeight / 2) + POINTER_ADJUST + (this.tooltipEle.offsetHeight - this.tooltipEle.clientHeight);
        var tipWidthAdjust = (tipWidth / 2) + POINTER_ADJUST + (this.tooltipEle.offsetWidth - this.tooltipEle.clientWidth);
        if (this.mouseTrail) {
            tipAdjust += MOUSE_TRAIL_GAP;
        }
        switch (position) {
            case 'RightTop':
                pos.left += tipWidth + tipAdjust;
                pos.top -= tooltipEleHeight - tipHeightAdjust;
                break;
            case 'RightCenter':
                pos.left += tipWidth + tipAdjust;
                pos.top -= (tooltipEleHeight / 2);
                break;
            case 'RightBottom':
                pos.left += tipWidth + tipAdjust;
                pos.top -= (tipHeightAdjust);
                break;
            case 'BottomRight':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tipWidthAdjust);
                break;
            case 'BottomCenter':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth / 2);
                break;
            case 'BottomLeft':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth - tipWidthAdjust);
                break;
            case 'LeftBottom':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tipHeightAdjust);
                break;
            case 'LeftCenter':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tooltipEleHeight / 2);
                break;
            case 'LeftTop':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tooltipEleHeight - tipHeightAdjust);
                break;
            case 'TopLeft':
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth - tipWidthAdjust);
                break;
            case 'TopRight':
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tipWidthAdjust);
                break;
            default:
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth / 2);
                break;
        }
        pos.left += this.offsetX;
        pos.top += this.offsetY;
        return pos;
    };
    Tooltip.prototype.updateTipPosition = function (position) {
        var selEle = selectAll('.' + ARROW_TIP + ',.' + ARROW_TIP_OUTER + ',.' + ARROW_TIP_INNER, this.tooltipEle);
        var removeList = [TIP_BOTTOM, TIP_TOP, TIP_LEFT, TIP_RIGHT];
        removeClass(selEle, removeList);
        this.setTipClass(position);
        addClass(selEle, this.tipClass);
    };
    Tooltip.prototype.adjustArrow = function (target, position, tooltipPositionX, tooltipPositionY) {
        if (this.showTipPointer === false) {
            return;
        }
        this.updateTipPosition(position);
        var leftValue;
        var topValue;
        this.tooltipEle.style.display = 'block';
        var tooltipWidth = this.tooltipEle.clientWidth;
        var tooltipHeight = this.tooltipEle.clientHeight;
        var arrowEle = select('.' + ARROW_TIP, this.tooltipEle);
        var arrowInnerELe = select('.' + ARROW_TIP_INNER, this.tooltipEle);
        var tipWidth = arrowEle.offsetWidth;
        var tipHeight = arrowEle.offsetHeight;
        this.tooltipEle.style.display = '';
        if (this.tipClass === TIP_BOTTOM || this.tipClass === TIP_TOP) {
            if (this.tipClass === TIP_BOTTOM) {
                topValue = '99.9%';
                // Arrow icon aligned -2px height from ArrowOuterTip div
                arrowInnerELe.style.top = '-' + (tipHeight - 2) + 'px';
            }
            else {
                topValue = -(tipHeight - 1) + 'px';
                // Arrow icon aligned -6px height from ArrowOuterTip div
                arrowInnerELe.style.top = '-' + (tipHeight - 6) + 'px';
            }
            if (target) {
                var tipPosExclude = tooltipPositionX !== 'Center' || (tooltipWidth > target.offsetWidth) || this.mouseTrail;
                if ((tipPosExclude && tooltipPositionX === 'Left') || (!tipPosExclude && this.tipPointerPosition === 'End')) {
                    leftValue = (tooltipWidth - tipWidth - POINTER_ADJUST) + 'px';
                }
                else if ((tipPosExclude && tooltipPositionX === 'Right') || (!tipPosExclude && this.tipPointerPosition === 'Start')) {
                    leftValue = POINTER_ADJUST + 'px';
                }
                else if ((tipPosExclude) && (this.tipPointerPosition === 'End' || this.tipPointerPosition === 'Start')) {
                    leftValue = (this.tipPointerPosition === 'End') ? ((target.offsetWidth + ((this.tooltipEle.offsetWidth - target.offsetWidth) / 2)) - (tipWidth / 2)) - POINTER_ADJUST + 'px'
                        : ((this.tooltipEle.offsetWidth - target.offsetWidth) / 2) - (tipWidth / 2) + POINTER_ADJUST + 'px';
                }
                else {
                    leftValue = ((tooltipWidth / 2) - (tipWidth / 2)) + 'px';
                }
            }
        }
        else {
            if (this.tipClass === TIP_RIGHT) {
                leftValue = '99.9%';
                // Arrow icon aligned -2px left from ArrowOuterTip div
                arrowInnerELe.style.left = '-' + (tipWidth - 2) + 'px';
            }
            else {
                leftValue = -(tipWidth - 1) + 'px';
                // Arrow icon aligned -2px from ArrowOuterTip width
                arrowInnerELe.style.left = (-(tipWidth) + (tipWidth - 2)) + 'px';
            }
            var tipPosExclude = tooltipPositionY !== 'Center' || (tooltipHeight > target.offsetHeight) || this.mouseTrail;
            if ((tipPosExclude && tooltipPositionY === 'Top') || (!tipPosExclude && this.tipPointerPosition === 'End')) {
                topValue = (tooltipHeight - tipHeight - POINTER_ADJUST) + 'px';
            }
            else if ((tipPosExclude && tooltipPositionY === 'Bottom') || (!tipPosExclude && this.tipPointerPosition === 'Start')) {
                topValue = POINTER_ADJUST + 'px';
            }
            else {
                topValue = ((tooltipHeight / 2) - (tipHeight / 2)) + 'px';
            }
        }
        arrowEle.style.top = topValue;
        arrowEle.style.left = leftValue;
    };
    Tooltip.prototype.renderContent = function (target) {
        var tooltipContent = select('.' + CONTENT, this.tooltipEle);
        if (this.cssClass) {
            addClass([this.tooltipEle], this.cssClass.split(' '));
        }
        if (target && !isNullOrUndefined(target.getAttribute('title'))) {
            target.setAttribute('data-content', target.getAttribute('title'));
            target.removeAttribute('title');
        }
        if (!isNullOrUndefined(this.content)) {
            tooltipContent.innerHTML = '';
            if (this.content instanceof HTMLElement) {
                tooltipContent.appendChild(this.content);
            }
            else if (typeof this.content === 'string') {
                if (this.enableHtmlSanitizer) {
                    this.setProperties({ content: SanitizeHtmlHelper.sanitize(this.content) }, true);
                }
                // eslint-disable-next-line
                var tempFunction = compile(this.content);
                var tempArr = tempFunction({}, this, 'content', this.element.id + 'content', undefined, undefined, tooltipContent);
                if (tempArr) {
                    if (this.enableHtmlParse) {
                        var nodeList = tempArr.length;
                        for (var i = 0; i < nodeList; i++) {
                            tooltipContent[append(tempArr, tooltipContent), 'innerHTML'] = this.content;
                        }
                    }
                    else {
                        tooltipContent['textContent'] = this.content;
                    }
                }
            }
            else {
                // eslint-disable-next-line
                var templateFunction = compile(this.content);
                var tempArr = templateFunction({}, this, 'content', this.element.id + 'content', undefined, undefined, tooltipContent);
                if (tempArr) {
                    append(tempArr, tooltipContent);
                }
                this.renderReactTemplates();
            }
        }
        else {
            if (target && !isNullOrUndefined(target.getAttribute('data-content'))) {
                tooltipContent.innerHTML = target.getAttribute('data-content');
            }
        }
    };
    Tooltip.prototype.renderCloseIcon = function () {
        if (!this.isSticky) {
            return;
        }
        var tipClose = this.createElement('div', { className: ICON + ' ' + CLOSE });
        this.tooltipEle.appendChild(tipClose);
        EventHandler.add(tipClose, Browser.touchStartEvent, this.onStickyClose, this);
    };
    Tooltip.prototype.addDescribedBy = function (target, id) {
        var describedby = (target.getAttribute('aria-describedby') || '').split(/\s+/);
        if (describedby.indexOf(id) < 0) {
            describedby.push(id);
        }
        attributes(target, { 'aria-describedby': describedby.join(' ').trim(), 'data-tooltip-id': id });
    };
    Tooltip.prototype.removeDescribedBy = function (target) {
        var id = target.getAttribute('data-tooltip-id');
        var describedby = (target.getAttribute('aria-describedby') || '').split(/\s+/);
        var index = describedby.indexOf(id);
        if (index !== -1) {
            describedby.splice(index, 1);
        }
        target.removeAttribute('data-tooltip-id');
        var orgdescribedby = describedby.join(' ').trim();
        if (orgdescribedby) {
            target.setAttribute('aria-describedby', orgdescribedby);
        }
        else {
            target.removeAttribute('aria-describedby');
        }
    };
    Tooltip.prototype.tapHoldHandler = function (evt) {
        clearTimeout(this.autoCloseTimer);
        this.targetHover(evt.originalEvent);
    };
    Tooltip.prototype.touchEndHandler = function (e) {
        var _this = this;
        if (this.isSticky) {
            return;
        }
        // eslint-disable-next-line
        var close = function () {
            _this.close();
        };
        this.autoCloseTimer = setTimeout(close, TOUCHEND_HIDE_DELAY);
    };
    Tooltip.prototype.targetClick = function (e) {
        var target;
        if (this.target) {
            target = closest(e.target, this.target);
        }
        else {
            target = this.element;
        }
        if (isNullOrUndefined(target)) {
            return;
        }
        if (target.getAttribute('data-tooltip-id') === null) {
            this.targetHover(e);
        }
        else if (!this.isSticky) {
            this.hideTooltip(this.animation.close, e, target);
        }
    };
    Tooltip.prototype.targetHover = function (e) {
        var target;
        if (this.target) {
            target = closest(e.target, this.target);
        }
        else {
            target = this.element;
        }
        if (isNullOrUndefined(target) || (target.getAttribute('data-tooltip-id') !== null && this.closeDelay === 0)) {
            return;
        }
        var targetList = [].slice.call(selectAll('[data-tooltip-id= "' + this.ctrlId + '_content"]', document));
        for (var _i = 0, targetList_1 = targetList; _i < targetList_1.length; _i++) {
            var target_1 = targetList_1[_i];
            this.restoreElement(target_1);
        }
        // eslint-disable-next-line security/detect-non-literal-fs-filename -- Safe as no value holds user input
        this.showTooltip(target, this.animation.open, e);
    };
    Tooltip.prototype.mouseMoveBeforeOpen = function (e) {
        this.mouseMoveEvent = e;
    };
    Tooltip.prototype.mouseMoveBeforeRemove = function () {
        if (this.mouseMoveTarget) {
            EventHandler.remove(this.mouseMoveTarget, 'mousemove touchstart', this.mouseMoveBeforeOpen);
        }
    };
    Tooltip.prototype.showTooltip = function (target, showAnimation, e) {
        var _this = this;
        clearTimeout(this.showTimer);
        clearTimeout(this.hideTimer);
        if (this.openDelay && this.mouseTrail) {
            this.mouseMoveBeforeRemove();
            this.mouseMoveTarget = target;
            EventHandler.add(this.mouseMoveTarget, 'mousemove touchstart', this.mouseMoveBeforeOpen, this);
        }
        this.tooltipEventArgs = {
            type: e ? e.type : null, cancel: false, target: target, event: e ? e : null,
            element: this.tooltipEle, isInteracted: !isNullOrUndefined(e)
        };
        // eslint-disable-next-line
        var observeCallback = function (beforeRenderArgs) {
            _this.beforeRenderCallback(beforeRenderArgs, target, e, showAnimation);
        };
        this.trigger('beforeRender', this.tooltipEventArgs, observeCallback.bind(this));
    };
    Tooltip.prototype.beforeRenderCallback = function (beforeRenderArgs, target, e, showAnimation) {
        if (beforeRenderArgs.cancel) {
            this.isHidden = true;
            this.clear();
            this.mouseMoveBeforeRemove();
        }
        else {
            this.isHidden = false;
            if (isNullOrUndefined(this.tooltipEle)) {
                this.ctrlId = this.element.getAttribute('id') ?
                    getUniqueID(this.element.getAttribute('id')) : getUniqueID('tooltip');
                this.tooltipEle = this.createElement('div', {
                    className: TOOLTIP_WRAP + ' ' + POPUP_ROOT + ' ' + POPUP_LIB, attrs: {
                        role: 'tooltip', 'aria-hidden': 'false', 'id': this.ctrlId + '_content'
                    }, styles: 'width:' +
                        formatUnit(this.width) + ';height:' + formatUnit(this.height) + ';position:absolute;'
                });
                this.tooltipBeforeRender(target, this);
                this.tooltipAfterRender(target, e, showAnimation, this);
            }
            else {
                if (target) {
                    this.adjustArrow(target, this.position, this.tooltipPositionX, this.tooltipPositionY);
                    this.addDescribedBy(target, this.ctrlId + '_content');
                    this.renderContent(target);
                    PopupAnimation.stop(this.tooltipEle);
                    this.reposition(target);
                    this.tooltipAfterRender(target, e, showAnimation, this);
                }
            }
        }
    };
    Tooltip.prototype.appendContainer = function (ctrlObj) {
        if (typeof this.container == 'string') {
            if (this.container === 'body') {
                this.containerElement = document.body;
            }
            else {
                this.isBodyContainer = false;
                this.containerElement = select(this.container, document);
            }
        }
        else if (this.container instanceof HTMLElement) {
            this.containerElement = this.container;
            this.isBodyContainer = this.containerElement.tagName === 'BODY';
        }
        if (!this.isBodyContainer) {
            addClass([this.containerElement], POPUP_CONTAINER);
        }
        this.containerElement.appendChild(ctrlObj.tooltipEle);
    };
    Tooltip.prototype.tooltipBeforeRender = function (target, ctrlObj) {
        if (target) {
            if (Browser.isDevice) {
                addClass([ctrlObj.tooltipEle], DEVICE);
            }
            if (ctrlObj.width !== 'auto') {
                ctrlObj.tooltipEle.style.maxWidth = formatUnit(ctrlObj.width);
            }
            ctrlObj.tooltipEle.appendChild(ctrlObj.createElement('div', { className: CONTENT }));
            this.appendContainer(ctrlObj);
            removeClass([ctrlObj.tooltipEle], HIDE_POPUP);
            ctrlObj.addDescribedBy(target, ctrlObj.ctrlId + '_content');
            ctrlObj.renderContent(target);
            addClass([ctrlObj.tooltipEle], POPUP_OPEN);
            if (ctrlObj.showTipPointer) {
                ctrlObj.renderArrow();
            }
            ctrlObj.renderCloseIcon();
            ctrlObj.renderPopup(target);
            ctrlObj.adjustArrow(target, ctrlObj.position, ctrlObj.tooltipPositionX, ctrlObj.tooltipPositionY);
            PopupAnimation.stop(ctrlObj.tooltipEle);
            ctrlObj.reposition(target);
        }
    };
    Tooltip.prototype.tooltipAfterRender = function (target, e, showAnimation, ctrlObj) {
        if (target) {
            removeClass([ctrlObj.tooltipEle], POPUP_OPEN);
            addClass([ctrlObj.tooltipEle], POPUP_CLOSE);
            ctrlObj.tooltipEventArgs = {
                type: e ? e.type : null, cancel: false, target: target, event: e ? e : null,
                element: ctrlObj.tooltipEle, isInteracted: !isNullOrUndefined(e)
            };
            if (ctrlObj.needTemplateReposition() && !ctrlObj.mouseTrail) {
                ctrlObj.tooltipEle.style.display = 'none';
            }
            // eslint-disable-next-line
            var observeCallback = function (observedArgs) {
                ctrlObj.beforeOpenCallback(observedArgs, target, showAnimation, e);
            };
            ctrlObj.trigger('beforeOpen', ctrlObj.tooltipEventArgs, observeCallback.bind(ctrlObj));
        }
    };
    Tooltip.prototype.beforeOpenCallback = function (observedArgs, target, showAnimation, e) {
        var _this = this;
        if (observedArgs.cancel) {
            this.isHidden = true;
            this.clear();
            this.mouseMoveBeforeRemove();
            this.restoreElement(target);
        }
        else {
            // eslint-disable-next-line
            var openAnimation_1 = {
                name: showAnimation.effect,
                duration: showAnimation.duration,
                delay: showAnimation.delay,
                timingFunction: 'easeOut'
            };
            if (showAnimation.effect === 'None') {
                openAnimation_1 = undefined;
            }
            if (this.openDelay > 0) {
                // eslint-disable-next-line
                var show = function () {
                    if (_this.mouseTrail) {
                        EventHandler.add(target, 'mousemove touchstart mouseenter', _this.onMouseMove, _this);
                    }
                    if (_this.popupObj) {
                        _this.popupObj.show(openAnimation_1, target);
                        if (_this.mouseMoveEvent && _this.mouseTrail) {
                            _this.onMouseMove(_this.mouseMoveEvent);
                        }
                    }
                };
                this.showTimer = setTimeout(show, this.openDelay);
            }
            else {
                if (this.popupObj) {
                    this.popupObj.show(openAnimation_1, target);
                }
            }
        }
        if (e) {
            this.wireMouseEvents(e, target);
        }
    };
    Tooltip.prototype.needTemplateReposition = function () {
        // eslint-disable-next-line
        var tooltip = this;
        return !isNullOrUndefined(tooltip.viewContainerRef)
            && typeof tooltip.viewContainerRef !== 'string';
    };
    Tooltip.prototype.checkCollision = function (target, x, y) {
        var elePos = {
            left: x, top: y, position: this.position,
            horizontal: this.tooltipPositionX, vertical: this.tooltipPositionY
        };
        var affectedPos = isCollide(this.tooltipEle, this.checkCollideTarget(), x, y);
        if (affectedPos.length > 0) {
            elePos.horizontal = affectedPos.indexOf('left') >= 0 ? 'Right' : affectedPos.indexOf('right') >= 0 ? 'Left' :
                this.tooltipPositionX;
            elePos.vertical = affectedPos.indexOf('top') >= 0 ? 'Bottom' : affectedPos.indexOf('bottom') >= 0 ? 'Top' :
                this.tooltipPositionY;
        }
        return elePos;
    };
    Tooltip.prototype.calculateElementPosition = function (pos, offsetPos) {
        return [this.isBodyContainer ? pos.left + offsetPos.left :
                (pos.left - this.containerElement.offsetLeft) + offsetPos.left + window.pageXOffset + this.containerElement.scrollLeft,
            this.isBodyContainer ? pos.top + offsetPos.top :
                (pos.top - this.containerElement.offsetTop) + offsetPos.top + window.pageYOffset + this.containerElement.scrollTop];
    };
    Tooltip.prototype.collisionFlipFit = function (target, x, y) {
        var elePos = this.checkCollision(target, x, y);
        var newpos = elePos.position;
        if (this.tooltipPositionY !== elePos.vertical) {
            newpos = ((this.position.indexOf('Bottom') === 0 || this.position.indexOf('Top') === 0) ?
                elePos.vertical + this.tooltipPositionX : this.tooltipPositionX + elePos.vertical);
        }
        if (this.tooltipPositionX !== elePos.horizontal) {
            if (newpos.indexOf('Left') === 0) {
                elePos.vertical = (newpos === 'LeftTop' || newpos === 'LeftCenter') ? 'Top' : 'Bottom';
                newpos = (elePos.vertical + 'Left');
            }
            if (newpos.indexOf('Right') === 0) {
                elePos.vertical = (newpos === 'RightTop' || newpos === 'RightCenter') ? 'Top' : 'Bottom';
                newpos = (elePos.vertical + 'Right');
            }
            elePos.horizontal = this.tooltipPositionX;
        }
        this.tooltipEventArgs = {
            type: null, cancel: false, target: target, event: null,
            element: this.tooltipEle, collidedPosition: newpos
        };
        this.trigger('beforeCollision', this.tooltipEventArgs);
        var elePosVertical = elePos.vertical;
        var elePosHorizontal = elePos.horizontal;
        if (elePos.position !== newpos) {
            var pos = calculatePosition(target, elePosHorizontal, elePosVertical, !this.isBodyContainer, this.isBodyContainer ? null : this.containerElement.getBoundingClientRect());
            this.adjustArrow(target, newpos, elePosHorizontal, elePosVertical);
            var offsetPos = this.calculateTooltipOffset(newpos);
            offsetPos.top -= this.getOffSetPosition('TopBottom', newpos, this.offsetY);
            offsetPos.left -= this.getOffSetPosition('RightLeft', newpos, this.offsetX);
            elePos.position = newpos;
            var elePosition = this.calculateElementPosition(pos, offsetPos);
            elePos.left = elePosition[0];
            elePos.top = elePosition[1];
        }
        else {
            this.adjustArrow(target, newpos, elePosHorizontal, elePosVertical);
        }
        var eleOffset = { left: elePos.left, top: elePos.top };
        var left = this.isBodyContainer ?
            fit(this.tooltipEle, this.checkCollideTarget(), { X: true, Y: false }, eleOffset).left : eleOffset.left;
        this.tooltipEle.style.display = 'block';
        if (this.showTipPointer && (newpos.indexOf('Bottom') === 0 || newpos.indexOf('Top') === 0)) {
            var arrowEle = select('.' + ARROW_TIP, this.tooltipEle);
            var arrowleft = parseInt(arrowEle.style.left, 10) - (left - elePos.left);
            if (arrowleft < 0) {
                arrowleft = 0;
            }
            else if ((arrowleft + arrowEle.offsetWidth) > this.tooltipEle.clientWidth) {
                arrowleft = this.tooltipEle.clientWidth - arrowEle.offsetWidth;
            }
            arrowEle.style.left = arrowleft.toString() + 'px';
        }
        this.tooltipEle.style.display = '';
        eleOffset.left = left;
        return eleOffset;
    };
    Tooltip.prototype.getOffSetPosition = function (positionString, newPos, offsetType) {
        return ((positionString.indexOf(this.position.split(/(?=[A-Z])/)[0]) !== -1) &&
            (positionString.indexOf(newPos.split(/(?=[A-Z])/)[0]) !== -1)) ? (2 * offsetType) : 0;
    };
    Tooltip.prototype.checkCollideTarget = function () {
        return !this.windowCollision && this.target ? this.element : null;
    };
    Tooltip.prototype.hideTooltip = function (hideAnimation, e, targetElement) {
        var _this = this;
        if (this.closeDelay > 0) {
            clearTimeout(this.hideTimer);
            clearTimeout(this.showTimer);
            // eslint-disable-next-line
            var hide = function () {
                if (_this.closeDelay && _this.tooltipEle && _this.isTooltipOpen) {
                    return;
                }
                _this.tooltipHide(hideAnimation, e, targetElement);
            };
            this.hideTimer = setTimeout(hide, this.closeDelay);
        }
        else {
            this.tooltipHide(hideAnimation, e, targetElement);
        }
    };
    Tooltip.prototype.tooltipHide = function (hideAnimation, e, targetElement) {
        var _this = this;
        var target;
        if (e) {
            target = this.target ? (targetElement || e.target) : this.element;
        }
        else {
            target = select('[data-tooltip-id= "' + this.ctrlId + '_content"]', document);
        }
        this.tooltipEventArgs = {
            type: e ? e.type : null, cancel: false, target: target, event: e ? e : null,
            element: this.tooltipEle, isInteracted: !isNullOrUndefined(e)
        };
        // this line commented for close the tooltip popup element even the target element destroyed in a page.
        //if (isNullOrUndefined(target)) { return; }
        this.trigger('beforeClose', this.tooltipEventArgs, function (observedArgs) {
            if (!observedArgs.cancel) {
                _this.mouseMoveBeforeRemove();
                _this.popupHide(hideAnimation, target);
            }
            else {
                _this.isHidden = false;
            }
        });
        this.tooltipEventArgs = null;
    };
    Tooltip.prototype.popupHide = function (hideAnimation, target) {
        if (target) {
            this.restoreElement(target);
        }
        this.isHidden = true;
        // eslint-disable-next-line
        var closeAnimation = {
            name: hideAnimation.effect,
            duration: hideAnimation.duration,
            delay: hideAnimation.delay,
            timingFunction: 'easeIn'
        };
        if (hideAnimation.effect === 'None') {
            closeAnimation = undefined;
        }
        if (this.popupObj) {
            this.popupObj.hide(closeAnimation);
        }
    };
    Tooltip.prototype.restoreElement = function (target) {
        this.unwireMouseEvents(target);
        if (!isNullOrUndefined(target.getAttribute('data-content'))) {
            target.setAttribute('title', target.getAttribute('data-content'));
            target.removeAttribute('data-content');
        }
        this.removeDescribedBy(target);
    };
    Tooltip.prototype.clear = function () {
        if (this.tooltipEle) {
            removeClass([this.tooltipEle], POPUP_CLOSE);
            addClass([this.tooltipEle], POPUP_OPEN);
        }
        if (this.isHidden) {
            if (this.popupObj) {
                this.popupObj.destroy();
            }
            if (this.tooltipEle) {
                remove(this.tooltipEle);
            }
            this.tooltipEle = null;
            this.popupObj = null;
        }
    };
    Tooltip.prototype.tooltipHover = function (e) {
        if (this.tooltipEle) {
            this.isTooltipOpen = true;
        }
    };
    Tooltip.prototype.tooltipMouseOut = function (e) {
        this.isTooltipOpen = false;
        this.hideTooltip(this.animation.close, e, this.findTarget());
    };
    Tooltip.prototype.onMouseOut = function (e) {
        var enteredElement = e.relatedTarget;
        // don't close the tooltip only if it is tooltip content element
        if (enteredElement && !this.mouseTrail) {
            var checkForTooltipElement = closest(enteredElement, "." + TOOLTIP_WRAP + "." + POPUP_LIB + "." + POPUP_ROOT);
            if (checkForTooltipElement) {
                EventHandler.add(checkForTooltipElement, 'mouseleave', this.tooltipElementMouseOut, this);
            }
            else {
                this.hideTooltip(this.animation.close, e, this.findTarget());
                if (this.closeDelay === 0) {
                    this.clear();
                }
            }
        }
        else {
            this.hideTooltip(this.animation.close, e, this.findTarget());
            this.clear();
        }
    };
    Tooltip.prototype.tooltipElementMouseOut = function (e) {
        this.hideTooltip(this.animation.close, e, this.findTarget());
        EventHandler.remove(this.element, 'mouseleave', this.tooltipElementMouseOut);
        this.clear();
    };
    Tooltip.prototype.onStickyClose = function (e) {
        this.close();
    };
    Tooltip.prototype.onMouseMove = function (event) {
        var eventPageX = 0;
        var eventPageY = 0;
        if (event.type.indexOf('touch') > -1) {
            event.preventDefault();
            eventPageX = event.touches[0].pageX;
            eventPageY = event.touches[0].pageY;
        }
        else {
            eventPageX = event.pageX;
            eventPageY = event.pageY;
        }
        PopupAnimation.stop(this.tooltipEle);
        removeClass([this.tooltipEle], POPUP_CLOSE);
        addClass([this.tooltipEle], POPUP_OPEN);
        this.adjustArrow(event.target, this.position, this.tooltipPositionX, this.tooltipPositionY);
        var pos = this.calculateTooltipOffset(this.position);
        var x = eventPageX + pos.left + this.offsetX;
        var y = eventPageY + pos.top + this.offsetY;
        var elePos = this.checkCollision(event.target, x, y);
        if (this.tooltipPositionX !== elePos.horizontal || this.tooltipPositionY !== elePos.vertical) {
            var newpos = (this.position.indexOf('Bottom') === 0 || this.position.indexOf('Top') === 0) ?
                elePos.vertical + elePos.horizontal : elePos.horizontal + elePos.vertical;
            elePos.position = newpos;
            this.adjustArrow(event.target, elePos.position, elePos.horizontal, elePos.vertical);
            var colpos = this.calculateTooltipOffset(elePos.position);
            elePos.left = eventPageX + colpos.left - this.offsetX;
            elePos.top = eventPageY + colpos.top - this.offsetY;
        }
        this.tooltipEle.style.left = elePos.left + 'px';
        this.tooltipEle.style.top = elePos.top + 'px';
    };
    Tooltip.prototype.keyDown = function (event) {
        if (this.tooltipEle && event.keyCode === 27) {
            this.close();
        }
    };
    Tooltip.prototype.touchEnd = function (e) {
        if (this.tooltipEle && closest(e.target, '.' + ROOT) === null && !this.isSticky) {
            this.close();
        }
    };
    Tooltip.prototype.scrollHandler = function (e) {
        if (this.tooltipEle) {
            if (!(closest(e.target, "." + TOOLTIP_WRAP + "." + POPUP_LIB + "." + POPUP_ROOT))) {
                this.close();
            }
        }
    };
    /**
     * Core method that initializes the control rendering.
     *
     * @private
     * @returns {void}
     */
    Tooltip.prototype.render = function () {
        this.initialize();
        this.wireEvents(this.opensOn);
        this.renderComplete();
    };
    /**
     * Initializes the values of private members.
     *
     * @private
     * @returns {void}
     */
    Tooltip.prototype.preRender = function () {
        this.tipClass = TIP_BOTTOM;
        this.tooltipPositionX = 'Center';
        this.tooltipPositionY = 'Top';
        this.isHidden = true;
    };
    /**
     * Binding events to the Tooltip element.
     *
     * @hidden
     * @param {string} trigger - specify the trigger string to the function
     * @returns {void}
     *
     */
    Tooltip.prototype.wireEvents = function (trigger) {
        var triggerList = this.getTriggerList(trigger);
        for (var _i = 0, triggerList_1 = triggerList; _i < triggerList_1.length; _i++) {
            var opensOn = triggerList_1[_i];
            if (opensOn === 'Custom') {
                return;
            }
            if (opensOn === 'Focus') {
                this.wireFocusEvents();
                EventHandler.add(this.element, 'DOMNodeInserted', this.updateTarget, this);
            }
            if (opensOn === 'Click') {
                EventHandler.add(this.element, Browser.touchStartEvent, this.targetClick, this);
            }
            if (opensOn === 'Hover') {
                if (Browser.isDevice) {
                    this.touchModule = new Touch(this.element, {
                        tapHoldThreshold: TAPHOLD_THRESHOLD,
                        tapHold: this.tapHoldHandler.bind(this)
                    });
                    EventHandler.add(this.element, Browser.touchEndEvent, this.touchEndHandler, this);
                }
                else {
                    EventHandler.add(this.element, 'mouseover', this.targetHover, this);
                }
            }
        }
        EventHandler.add(document, 'touchend', this.touchEnd, this);
        EventHandler.add(document, 'scroll wheel', this.scrollHandler, this);
        EventHandler.add(window, 'resize', this.windowResize, this);
        EventHandler.add(document, 'keydown', this.keyDown, this);
    };
    Tooltip.prototype.updateTarget = function (e) {
        if (!isNullOrUndefined(this.targetsList) && !isNullOrUndefined(this.target)) {
            var target = [].slice.call(selectAll(this.target, this.element));
            if (target.length !== this.targetsList.length) {
                this.unwireEvents(this.opensOn);
                this.wireEvents(this.opensOn);
            }
        }
    };
    Tooltip.prototype.getTriggerList = function (trigger) {
        if (trigger === 'Auto') {
            trigger = (Browser.isDevice) ? 'Hover' : 'Hover Focus';
        }
        return trigger.split(' ');
    };
    Tooltip.prototype.wireFocusEvents = function () {
        if (!isNullOrUndefined(this.target)) {
            var targetList = [].slice.call(selectAll(this.target, this.element));
            this.targetsList = targetList;
            for (var _i = 0, targetList_2 = targetList; _i < targetList_2.length; _i++) {
                var target = targetList_2[_i];
                target.setAttribute('tabindex', '0');
                EventHandler.add(target, 'focus', this.targetHover, this);
            }
        }
        else {
            EventHandler.add(this.element, 'focus', this.targetHover, this);
        }
    };
    Tooltip.prototype.wireMouseEvents = function (e, target) {
        if (this.tooltipEle) {
            if (!this.isSticky) {
                if (e.type === 'focus') {
                    EventHandler.add(target, 'blur', this.onMouseOut, this);
                }
                if (e.type === 'mouseover') {
                    EventHandler.add(target, 'mouseleave', this.onMouseOut, this);
                }
                if (this.closeDelay) {
                    EventHandler.add(this.tooltipEle, 'mouseenter', this.tooltipHover, this);
                    EventHandler.add(this.tooltipEle, 'mouseleave', this.tooltipMouseOut, this);
                }
            }
            if (this.mouseTrail && this.openDelay === 0) {
                EventHandler.add(target, 'mousemove touchstart mouseenter', this.onMouseMove, this);
            }
            target.setAttribute("tabindex", "0");
        }
    };
    /**
     * Unbinding events from the element on widget destroy.
     *
     * @hidden
     *
     * @param {string} trigger - specify the trigger string to the function
     * @returns {void}
     *
     */
    Tooltip.prototype.unwireEvents = function (trigger) {
        var triggerList = this.getTriggerList(trigger);
        for (var _i = 0, triggerList_2 = triggerList; _i < triggerList_2.length; _i++) {
            var opensOn = triggerList_2[_i];
            if (opensOn === 'Custom') {
                return;
            }
            if (opensOn === 'Focus') {
                this.unwireFocusEvents();
                EventHandler.remove(this.element, 'DOMNodeInserted', this.updateTarget);
            }
            if (opensOn === 'Click') {
                EventHandler.remove(this.element, Browser.touchStartEvent, this.targetClick);
            }
            if (opensOn === 'Hover') {
                if (Browser.isDevice) {
                    if (this.touchModule) {
                        this.touchModule.destroy();
                    }
                    EventHandler.remove(this.element, Browser.touchEndEvent, this.touchEndHandler);
                }
                else {
                    EventHandler.remove(this.element, 'mouseover', this.targetHover);
                }
            }
        }
        EventHandler.remove(document, 'touchend', this.touchEnd);
        EventHandler.remove(document, 'scroll wheel', this.scrollHandler);
        EventHandler.remove(window, 'resize', this.windowResize);
        EventHandler.remove(document, 'keydown', this.keyDown);
    };
    Tooltip.prototype.unwireFocusEvents = function () {
        if (!isNullOrUndefined(this.target)) {
            var targetList = [].slice.call(selectAll(this.target, this.element));
            for (var _i = 0, targetList_3 = targetList; _i < targetList_3.length; _i++) {
                var target = targetList_3[_i];
                target.removeAttribute('tabindex');
                EventHandler.remove(target, 'focus', this.targetHover);
            }
        }
        else {
            EventHandler.remove(this.element, 'focus', this.targetHover);
        }
    };
    Tooltip.prototype.unwireMouseEvents = function (target) {
        if (!this.isSticky) {
            var triggerList = this.getTriggerList(this.opensOn);
            for (var _i = 0, triggerList_3 = triggerList; _i < triggerList_3.length; _i++) {
                var opensOn = triggerList_3[_i];
                if (opensOn === 'Focus') {
                    EventHandler.remove(target, 'blur', this.onMouseOut);
                }
                if (opensOn === 'Hover' && !Browser.isDevice) {
                    EventHandler.remove(target, 'mouseleave', this.onMouseOut);
                }
            }
            if (this.closeDelay) {
                EventHandler.remove(target, 'mouseenter', this.tooltipHover);
                EventHandler.remove(target, 'mouseleave', this.tooltipMouseOut);
            }
        }
        if (this.mouseTrail) {
            EventHandler.remove(target, 'mousemove touchstart mouseenter', this.onMouseMove);
        }
    };
    Tooltip.prototype.findTarget = function () {
        var target = select('[data-tooltip-id= "' + this.ctrlId + '_content"]', document);
        return target;
    };
    /**
     * Core method to return the component name.
     *
     * @private
     *
     * @returns {string} - this method returns module name.
     */
    Tooltip.prototype.getModuleName = function () {
        return 'tooltip';
    };
    /**
     * Returns the properties to be maintained in the persisted state.
     *
     * @private
     *
     * @returns {string} - this method returns persisted data.
     */
    Tooltip.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * Called internally, if any of the property value changed.
     *
     * @private
     *
     * @param {TooltipModel} newProp - this param gives new property values to the method
     * @param {TooltipModel} oldProp - this param gives old property values to the method
     * @returns {void}
     *
     */
    Tooltip.prototype.onPropertyChanged = function (newProp, oldProp) {
        var targetElement = this.findTarget();
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                    if (this.tooltipEle && targetElement) {
                        this.tooltipEle.style.width = this.tooltipEle.style.maxWidth = formatUnit(newProp.width);
                        this.reposition(targetElement);
                    }
                    break;
                case 'height':
                    if (this.tooltipEle && targetElement) {
                        this.tooltipEle.style.height = formatUnit(newProp.height);
                        this.reposition(targetElement);
                    }
                    break;
                case 'content':
                    if (this.tooltipEle) {
                        this.renderContent();
                    }
                    break;
                case 'opensOn':
                    this.unwireEvents(oldProp.opensOn);
                    this.wireEvents(newProp.opensOn);
                    break;
                case 'position':
                    this.formatPosition();
                    if (this.tooltipEle && targetElement) {
                        var arrowInnerELe = select('.' + ARROW_TIP_INNER, this.tooltipEle);
                        arrowInnerELe.style.top = arrowInnerELe.style.left = null;
                        this.reposition(targetElement);
                    }
                    break;
                case 'tipPointerPosition':
                    if (this.tooltipEle && targetElement) {
                        this.reposition(targetElement);
                    }
                    break;
                case 'offsetX':
                    if (this.tooltipEle) {
                        var x = newProp.offsetX - oldProp.offsetX;
                        this.tooltipEle.style.left = (parseInt(this.tooltipEle.style.left, 10) + (x)).toString() + 'px';
                    }
                    break;
                case 'offsetY':
                    if (this.tooltipEle) {
                        var y = newProp.offsetY - oldProp.offsetY;
                        this.tooltipEle.style.top = (parseInt(this.tooltipEle.style.top, 10) + (y)).toString() + 'px';
                    }
                    break;
                case 'cssClass':
                    if (this.tooltipEle) {
                        if (oldProp.cssClass) {
                            removeClass([this.tooltipEle], oldProp.cssClass.split(' '));
                        }
                        if (newProp.cssClass) {
                            addClass([this.tooltipEle], newProp.cssClass.split(' '));
                        }
                    }
                    break;
                case 'enableRtl':
                    if (this.tooltipEle) {
                        if (this.enableRtl) {
                            addClass([this.tooltipEle], RTL);
                        }
                        else {
                            removeClass([this.tooltipEle], RTL);
                        }
                    }
                    break;
                case 'container':
                    if (!isNullOrUndefined(this.containerElement)) {
                        removeClass([this.containerElement], POPUP_CONTAINER);
                    }
                    this.container = newProp.container;
                    if (this.tooltipEle && targetElement) {
                        this.appendContainer(this);
                        this.reposition(targetElement);
                    }
            }
        }
    };
    /**
     * It is used to show the Tooltip on the specified target with specific animation settings.
     *
     * @param {HTMLElement} element - Target element where the Tooltip is to be displayed. (It is an optional parameter)
     * @param {TooltipAnimationSettings} animation - Sets the specific animation, while showing the Tooltip on the screen. (It is an optional parameter)
     * @returns {void}
     */
    Tooltip.prototype.open = function (element, animation) {
        if (isNullOrUndefined(animation)) {
            animation = this.animation.open;
        }
        if (isNullOrUndefined(element)) {
            element = this.element;
        }
        if (element.style.display === 'none') {
            return;
        }
        this.showTooltip(element, animation);
    };
    /**
     * It is used to hide the Tooltip with specific animation effect.
     *
     * @param {TooltipAnimationSettings} animation - Sets the specific animation when hiding Tooltip from the screen. (It is an optional parameter)
     * @returns {void}
     */
    Tooltip.prototype.close = function (animation) {
        if (!animation) {
            animation = this.animation.close;
        }
        this.hideTooltip(animation);
    };
    /**
     * It is used to refresh the Tooltip content and its position.
     *
     * @param {HTMLElement} target - Target element where the Tooltip content or position needs to be refreshed.
     * @returns {void}
     */
    Tooltip.prototype.refresh = function (target) {
        if (this.tooltipEle) {
            this.renderContent(target);
        }
        if (this.popupObj && target) {
            this.reposition(target);
        }
    };
    /**
     * It is used to destroy the Tooltip component.
     * @method destroy
     * @returns {void}
     * @memberof Tooltip
     */
    Tooltip.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.tooltipEle) {
            remove(this.tooltipEle);
        }
        if (this.popupObj) {
            this.popupObj.destroy();
        }
        removeClass([this.element], ROOT);
        this.unwireEvents(this.opensOn);
        this.unwireMouseEvents(this.element);
        this.tooltipEle = null;
        this.popupObj = null;
    };
    __decorate([
        Property('auto')
    ], Tooltip.prototype, "width", void 0);
    __decorate([
        Property('auto')
    ], Tooltip.prototype, "height", void 0);
    __decorate([
        Property()
    ], Tooltip.prototype, "content", void 0);
    __decorate([
        Property('body')
    ], Tooltip.prototype, "container", void 0);
    __decorate([
        Property()
    ], Tooltip.prototype, "target", void 0);
    __decorate([
        Property('TopCenter')
    ], Tooltip.prototype, "position", void 0);
    __decorate([
        Property(0)
    ], Tooltip.prototype, "offsetX", void 0);
    __decorate([
        Property(0)
    ], Tooltip.prototype, "offsetY", void 0);
    __decorate([
        Property(true)
    ], Tooltip.prototype, "showTipPointer", void 0);
    __decorate([
        Property(true)
    ], Tooltip.prototype, "enableHtmlParse", void 0);
    __decorate([
        Property(false)
    ], Tooltip.prototype, "windowCollision", void 0);
    __decorate([
        Property('Auto')
    ], Tooltip.prototype, "tipPointerPosition", void 0);
    __decorate([
        Property('Auto')
    ], Tooltip.prototype, "opensOn", void 0);
    __decorate([
        Property(false)
    ], Tooltip.prototype, "mouseTrail", void 0);
    __decorate([
        Property(false)
    ], Tooltip.prototype, "isSticky", void 0);
    __decorate([
        Complex({}, Animation)
    ], Tooltip.prototype, "animation", void 0);
    __decorate([
        Property(0)
    ], Tooltip.prototype, "openDelay", void 0);
    __decorate([
        Property(0)
    ], Tooltip.prototype, "closeDelay", void 0);
    __decorate([
        Property()
    ], Tooltip.prototype, "cssClass", void 0);
    __decorate([
        Property(false)
    ], Tooltip.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Event()
    ], Tooltip.prototype, "beforeRender", void 0);
    __decorate([
        Event()
    ], Tooltip.prototype, "beforeOpen", void 0);
    __decorate([
        Event()
    ], Tooltip.prototype, "afterOpen", void 0);
    __decorate([
        Event()
    ], Tooltip.prototype, "beforeClose", void 0);
    __decorate([
        Event()
    ], Tooltip.prototype, "afterClose", void 0);
    __decorate([
        Event()
    ], Tooltip.prototype, "beforeCollision", void 0);
    __decorate([
        Event()
    ], Tooltip.prototype, "created", void 0);
    __decorate([
        Event()
    ], Tooltip.prototype, "destroyed", void 0);
    Tooltip = __decorate([
        NotifyPropertyChanges
    ], Tooltip);
    return Tooltip;
}(Component));
export { Tooltip };
