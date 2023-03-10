import * as i0 from '@angular/core';
import { Injectable, Directive, TemplateRef, EventEmitter, Input, Output, ContentChildren, Component, ViewEncapsulation, ElementRef, NgZone, ChangeDetectorRef, Optional, Host, NgModule, ChangeDetectionStrategy, Renderer2, forwardRef, Inject, PLATFORM_ID, LOCALE_ID, ViewChild, ContentChild, ViewContainerRef, ComponentFactoryResolver, Injector, ApplicationRef, RendererFactory2, Attribute, ViewChildren, HostBinding, InjectionToken } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, isPlatformBrowser, getLocaleMonthNames, FormStyle, TranslationWidth, getLocaleDayNames, formatDate, DOCUMENT, getLocaleDayPeriods } from '@angular/common';
import { Observable, EMPTY, of, Subject, fromEvent, timer, race, BehaviorSubject, combineLatest, NEVER, zip, merge } from 'rxjs';
import { endWith, takeUntil, filter, take, map, startWith, distinctUntilChanged, switchMap, tap, withLatestFrom, delay, mergeMap, skip, share } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

function NgbAccordion_ng_template_0_ng_template_2_Template(rf, ctx) { }
function NgbAccordion_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, NgbAccordion_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngbPanelToggle", panel_r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", panel_r3.title, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", panel_r3.titleTpl == null ? null : panel_r3.titleTpl.templateRef);
} }
function NgbAccordion_ng_template_2_ng_template_2_Template(rf, ctx) { }
function NgbAccordion_ng_template_2_div_3_ng_template_2_Template(rf, ctx) { }
function NgbAccordion_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵtemplate(2, NgbAccordion_ng_template_2_div_3_ng_template_2_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("id", panel_r5.id);
    ɵngcc0.ɵɵattribute("aria-labelledby", panel_r5.id + "-header");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (panel_r5.contentTpl == null ? null : panel_r5.contentTpl.templateRef) || null);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, opened: a1 }; };
function NgbAccordion_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, NgbAccordion_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NgbAccordion_ng_template_2_div_3_Template, 3, 3, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r5 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassMap("card " + (panel_r5.cardClass || ""));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("card-header " + (panel_r5.type ? "bg-" + panel_r5.type : ctx_r2.type ? "bg-" + ctx_r2.type : ""));
    ɵngcc0.ɵɵpropertyInterpolate1("id", "", panel_r5.id, "-header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (panel_r5.headerTpl == null ? null : panel_r5.headerTpl.templateRef) || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(8, _c0, panel_r5, panel_r5.isOpen));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.destroyOnHide || panel_r5.isOpen || panel_r5.transitionRunning);
} }
function NgbAlert_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 1);
    ɵngcc0.ɵɵlistener("click", function NgbAlert_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.close(); });
    ɵngcc0.ɵɵelementStart(1, "span", 2);
    ɵngcc0.ɵɵtext(2, "\u00D7");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
const _c3 = ["*"];
function NgbCarousel_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵlistener("click", function NgbCarousel_li_1_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r6); const slide_r4 = restoredCtx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(); ctx_r5.focus(); return ctx_r5.select(slide_r4.id, ctx_r5.NgbSlideEventSource.INDICATOR); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", slide_r4.id === ctx_r0.activeId);
    ɵngcc0.ɵɵattribute("aria-labelledby", "slide-" + slide_r4.id)("aria-controls", "slide-" + slide_r4.id)("aria-selected", slide_r4.id === ctx_r0.activeId);
} }
function NgbCarousel_div_3_ng_template_3_Template(rf, ctx) { }
function NgbCarousel_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "span", 8);
    ɵngcc0.ɵɵi18n(2, 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NgbCarousel_div_3_ng_template_3_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const c_r9 = ctx.count;
    ɵngcc0.ɵɵproperty("id", "slide-" + slide_r7.id);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵi18nExp(i_r8 + 1)(c_r9);
    ɵngcc0.ɵɵi18nApply(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", slide_r7.tplRef);
} }
function NgbCarousel_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 11);
    ɵngcc0.ɵɵlistener("click", function NgbCarousel_a_4_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.arrowLeft(); });
    ɵngcc0.ɵɵelement(1, "span", 12);
    ɵngcc0.ɵɵelementStart(2, "span", 8);
    ɵngcc0.ɵɵi18n(3, 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function NgbCarousel_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 14);
    ɵngcc0.ɵɵlistener("click", function NgbCarousel_a_5_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.arrowRight(); });
    ɵngcc0.ɵɵelement(1, "span", 15);
    ɵngcc0.ɵɵelementStart(2, "span", 8);
    ɵngcc0.ɵɵi18n(3, 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
const _c10 = ["defaultDayTemplate"];
const _c11 = ["content"];
function NgbDatepicker_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const date_r8 = ctx.date;
    const currentMonth_r9 = ctx.currentMonth;
    const selected_r10 = ctx.selected;
    const disabled_r11 = ctx.disabled;
    const focused_r12 = ctx.focused;
    ɵngcc0.ɵɵproperty("date", date_r8)("currentMonth", currentMonth_r9)("selected", selected_r10)("disabled", disabled_r11)("focused", focused_r12);
} }
function NgbDatepicker_ng_template_2_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r14 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r16 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r16.i18n.getMonthLabel(month_r14.firstDate), " ");
} }
function NgbDatepicker_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NgbDatepicker_ng_template_2_div_0_div_1_Template, 2, 1, "div", 10);
    ɵngcc0.ɵɵelement(2, "ngb-datepicker-month", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r14 = ctx.$implicit;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r13.navigation === "none" || ctx_r13.displayMonths > 1 && ctx_r13.navigation === "select");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("month", month_r14.firstDate);
} }
function NgbDatepicker_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgbDatepicker_ng_template_2_div_0_Template, 3, 2, "div", 8);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.model.months);
} }
function NgbDatepicker_ngb_datepicker_navigation_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngb-datepicker-navigation", 13);
    ɵngcc0.ɵɵlistener("navigate", function NgbDatepicker_ngb_datepicker_navigation_5_Template_ngb_datepicker_navigation_navigate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onNavigateEvent($event); })("select", function NgbDatepicker_ngb_datepicker_navigation_5_Template_ngb_datepicker_navigation_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onNavigateDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("date", ctx_r4.model.firstDate)("months", ctx_r4.model.months)("disabled", ctx_r4.model.disabled)("showSelect", ctx_r4.model.navigation === "select")("prevDisabled", ctx_r4.model.prevDisabled)("nextDisabled", ctx_r4.model.nextDisabled)("selectBoxes", ctx_r4.model.selectBoxes);
} }
function NgbDatepicker_ng_template_8_Template(rf, ctx) { }
function NgbDatepicker_ng_template_9_Template(rf, ctx) { }
function NgbDatepickerMonth_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.i18n.getWeekLabel());
} }
function NgbDatepickerMonth_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const weekday_r4 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(weekday_r4);
} }
function NgbDatepickerMonth_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, NgbDatepickerMonth_div_0_div_1_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵtemplate(2, NgbDatepickerMonth_div_0_div_2_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.datepicker.showWeekNumbers);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.viewModel.weekdays);
} }
function NgbDatepickerMonth_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.i18n.getWeekNumerals(week_r5.number));
} }
function NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_ng_template_0_Template(rf, ctx) { }
function NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const day_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r11.datepicker.dayTemplate)("ngTemplateOutletContext", day_r10.context);
} }
function NgbDatepickerMonth_ng_template_1_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("click", function NgbDatepickerMonth_ng_template_1_div_0_div_2_Template_div_click_0_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r15); const day_r10 = restoredCtx.$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(3); ctx_r14.doSelect(day_r10); return $event.preventDefault(); });
    ɵngcc0.ɵɵtemplate(1, NgbDatepickerMonth_ng_template_1_div_0_div_2_ng_template_1_Template, 1, 2, "ng-template", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r10 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("disabled", day_r10.context.disabled)("hidden", day_r10.hidden)("ngb-dp-today", day_r10.context.today);
    ɵngcc0.ɵɵproperty("tabindex", day_r10.tabindex);
    ɵngcc0.ɵɵattribute("aria-label", day_r10.ariaLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !day_r10.hidden);
} }
function NgbDatepickerMonth_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, NgbDatepickerMonth_ng_template_1_div_0_div_1_Template, 2, 1, "div", 9);
    ɵngcc0.ɵɵtemplate(2, NgbDatepickerMonth_ng_template_1_div_0_div_2_Template, 2, 9, "div", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.datepicker.showWeekNumbers);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", week_r5.days);
} }
function NgbDatepickerMonth_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgbDatepickerMonth_ng_template_1_div_0_Template, 3, 2, "div", 7);
} if (rf & 2) {
    const week_r5 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", !week_r5.collapsed);
} }
function NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngb-datepicker-navigation-select", 7);
    ɵngcc0.ɵɵlistener("select", function NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template_ngb_datepicker_navigation_select_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.select.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("date", ctx_r0.date)("disabled", ctx_r0.disabled)("months", ctx_r0.selectBoxes.months)("years", ctx_r0.selectBoxes.years);
} }
function NgbDatepickerNavigation_4_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 0);
} }
function NgbDatepickerNavigation_4_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 0);
} }
function NgbDatepickerNavigation_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgbDatepickerNavigation_4_ng_template_0_div_0_Template, 1, 0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NgbDatepickerNavigation_4_ng_template_0_div_3_Template, 1, 0, "div", 9);
} if (rf & 2) {
    const month_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", i_r6 > 0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.i18n.getMonthLabel(month_r5.firstDate), " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", i_r6 !== ctx_r4.months.length - 1);
} }
function NgbDatepickerNavigation_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgbDatepickerNavigation_4_ng_template_0_Template, 4, 3, "ng-template", 8);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.months);
} }
const _c20 = ["ngbDatepickerDayView", ""];
const _c21 = ["month"];
const _c22 = ["year"];
function NgbDatepickerNavigationSelect_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "option", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", m_r4);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r1.i18n.getMonthFullName(m_r4, ctx_r1.date == null ? null : ctx_r1.date.year));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.i18n.getMonthShortName(m_r4, ctx_r1.date == null ? null : ctx_r1.date.year));
} }
function NgbDatepickerNavigationSelect_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "option", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const y_r5 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", y_r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.i18n.getYearNumerals(y_r5));
} }
const _c31 = ["dialog"];
const _c32 = ["ngbNavOutlet", ""];
function NgbNavOutlet_ng_template_0_div_0_ng_template_1_Template(rf, ctx) { }
const _c33 = function (a0) { return { $implicit: a0 }; };
function NgbNavOutlet_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, NgbNavOutlet_ng_template_0_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("item", item_r1)("nav", ctx_r2.nav)("role", ctx_r2.paneRole);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (item_r1.contentTpl == null ? null : item_r1.contentTpl.templateRef) || null)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c33, item_r1.active || ctx_r2.isPanelTransitioning(item_r1)));
} }
function NgbNavOutlet_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgbNavOutlet_ng_template_0_div_0_Template, 2, 7, "div", 1);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", item_r1.isPanelInDom() || ctx_r0.isPanelTransitioning(item_r1));
} }
function NgbPagination_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵi18n(1, 10);
    ɵngcc0.ɵɵelementEnd();
} }
function NgbPagination_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵi18n(1, 11);
    ɵngcc0.ɵɵelementEnd();
} }
function NgbPagination_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵi18n(1, 12);
    ɵngcc0.ɵɵelementEnd();
} }
function NgbPagination_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵi18n(1, 13);
    ɵngcc0.ɵɵelementEnd();
} }
function NgbPagination_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0, "...");
} }
function NgbPagination_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1, "(current)");
    ɵngcc0.ɵɵelementEnd();
} }
function NgbPagination_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
    ɵngcc0.ɵɵtemplate(1, NgbPagination_ng_template_10_span_1_Template, 2, 0, "span", 14);
} if (rf & 2) {
    const page_r19 = ctx.$implicit;
    const currentPage_r20 = ctx.currentPage;
    ɵngcc0.ɵɵtextInterpolate1(" ", page_r19, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", page_r19 === currentPage_r20);
} }
function NgbPagination_ng_template_12_li_0_a_1_ng_template_1_Template(rf, ctx) { }
const _c42 = function (a1) { return { disabled: true, currentPage: a1 }; };
function NgbPagination_ng_template_12_li_0_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 20);
    ɵngcc0.ɵɵtemplate(1, NgbPagination_ng_template_12_li_0_a_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r22 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r27 = ɵngcc0.ɵɵnextContext();
    const _r8 = ɵngcc0.ɵɵreference(9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (ctx_r27.tplEllipsis == null ? null : ctx_r27.tplEllipsis.templateRef) || _r8)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c42, page_r22));
} }
function NgbPagination_ng_template_12_li_0_a_2_ng_template_1_Template(rf, ctx) { }
const _c43 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function NgbPagination_ng_template_12_li_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 21);
    ɵngcc0.ɵɵlistener("click", function NgbPagination_ng_template_12_li_0_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); const pageNumber_r26 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r32 = ɵngcc0.ɵɵnextContext(2); ctx_r32.selectPage(pageNumber_r26); return $event.preventDefault(); });
    ɵngcc0.ɵɵtemplate(1, NgbPagination_ng_template_12_li_0_a_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r26 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r35 = ɵngcc0.ɵɵnextContext();
    const disabled_r24 = ctx_r35.disabled;
    const page_r22 = ctx_r35.$implicit;
    const ctx_r28 = ɵngcc0.ɵɵnextContext();
    const _r10 = ɵngcc0.ɵɵreference(11);
    ɵngcc0.ɵɵattribute("tabindex", disabled_r24 ? "-1" : null)("aria-disabled", disabled_r24 ? "true" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (ctx_r28.tplNumber == null ? null : ctx_r28.tplNumber.templateRef) || _r10)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(4, _c43, disabled_r24, pageNumber_r26, page_r22));
} }
function NgbPagination_ng_template_12_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵtemplate(1, NgbPagination_ng_template_12_li_0_a_1_Template, 2, 4, "a", 18);
    ɵngcc0.ɵɵtemplate(2, NgbPagination_ng_template_12_li_0_a_2_Template, 2, 8, "a", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r26 = ctx.$implicit;
    const ctx_r37 = ɵngcc0.ɵɵnextContext();
    const page_r22 = ctx_r37.$implicit;
    const disabled_r24 = ctx_r37.disabled;
    const ctx_r25 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", pageNumber_r26 === page_r22)("disabled", ctx_r25.isEllipsis(pageNumber_r26) || disabled_r24);
    ɵngcc0.ɵɵattribute("aria-current", pageNumber_r26 === page_r22 ? "page" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r25.isEllipsis(pageNumber_r26));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r25.isEllipsis(pageNumber_r26));
} }
function NgbPagination_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgbPagination_ng_template_12_li_0_Template, 3, 7, "li", 16);
} if (rf & 2) {
    const pages_r23 = ctx.pages;
    ɵngcc0.ɵɵproperty("ngForOf", pages_r23);
} }
function NgbPagination_li_15_ng_template_2_Template(rf, ctx) { }
const _c46 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function NgbPagination_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r40 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵelementStart(1, "a", 22);
    ɵngcc0.ɵɵlistener("click", function NgbPagination_li_15_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); const ctx_r39 = ɵngcc0.ɵɵnextContext(); ctx_r39.selectPage(1); return $event.preventDefault(); });
    ɵngcc0.ɵɵtemplate(2, NgbPagination_li_15_ng_template_2_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("disabled", ctx_r14.previousDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r14.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r14.previousDisabled() ? "true" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (ctx_r14.tplFirst == null ? null : ctx_r14.tplFirst.templateRef) || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(6, _c46, ctx_r14.previousDisabled(), ctx_r14.page));
} }
function NgbPagination_li_16_ng_template_2_Template(rf, ctx) { }
const _c49 = function (a0) { return { disabled: a0 }; };
function NgbPagination_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵelementStart(1, "a", 23);
    ɵngcc0.ɵɵlistener("click", function NgbPagination_li_16_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r43); const ctx_r42 = ɵngcc0.ɵɵnextContext(); ctx_r42.selectPage(ctx_r42.page - 1); return $event.preventDefault(); });
    ɵngcc0.ɵɵtemplate(2, NgbPagination_li_16_ng_template_2_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵclassProp("disabled", ctx_r15.previousDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r15.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r15.previousDisabled() ? "true" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (ctx_r15.tplPrevious == null ? null : ctx_r15.tplPrevious.templateRef) || _r2)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(6, _c49, ctx_r15.previousDisabled()));
} }
function NgbPagination_ng_template_17_Template(rf, ctx) { }
function NgbPagination_li_18_ng_template_2_Template(rf, ctx) { }
function NgbPagination_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r46 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵelementStart(1, "a", 24);
    ɵngcc0.ɵɵlistener("click", function NgbPagination_li_18_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r46); const ctx_r45 = ɵngcc0.ɵɵnextContext(); ctx_r45.selectPage(ctx_r45.page + 1); return $event.preventDefault(); });
    ɵngcc0.ɵɵtemplate(2, NgbPagination_li_18_ng_template_2_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext();
    const _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵclassProp("disabled", ctx_r17.nextDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r17.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r17.nextDisabled() ? "true" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (ctx_r17.tplNext == null ? null : ctx_r17.tplNext.templateRef) || _r4)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(6, _c46, ctx_r17.nextDisabled(), ctx_r17.page));
} }
function NgbPagination_li_19_ng_template_2_Template(rf, ctx) { }
function NgbPagination_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r49 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵelementStart(1, "a", 25);
    ɵngcc0.ɵɵlistener("click", function NgbPagination_li_19_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r49); const ctx_r48 = ɵngcc0.ɵɵnextContext(); ctx_r48.selectPage(ctx_r48.pageCount); return $event.preventDefault(); });
    ɵngcc0.ɵɵtemplate(2, NgbPagination_li_19_ng_template_2_Template, 0, 0, "ng-template", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext();
    const _r6 = ɵngcc0.ɵɵreference(7);
    ɵngcc0.ɵɵclassProp("disabled", ctx_r18.nextDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r18.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r18.nextDisabled() ? "true" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", (ctx_r18.tplLast == null ? null : ctx_r18.tplLast.templateRef) || _r6)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(6, _c46, ctx_r18.nextDisabled(), ctx_r18.page));
} }
const _c54 = function (a0, a1, a2) { return { $implicit: a0, pages: a1, disabled: a2 }; };
function NgbPopoverWindow_h3_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.title);
} }
function NgbPopoverWindow_h3_1_ng_template_3_Template(rf, ctx) { }
function NgbPopoverWindow_h3_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h3", 3);
    ɵngcc0.ɵɵtemplate(1, NgbPopoverWindow_h3_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, NgbPopoverWindow_h3_1_ng_template_3_Template, 0, 0, "ng-template", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r1 = ɵngcc0.ɵɵreference(2);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.isTitleTemplate() ? ctx_r0.title : _r1)("ngTemplateOutletContext", ctx_r0.context);
} }
function NgbProgressbar_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵi18n(1, 2);
    ɵngcc0.ɵɵpipe(2, "percent");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵi18nExp(ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r0.getValue() / ctx_r0.max));
    ɵngcc0.ɵɵi18nApply(1);
} }
function NgbRating_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const fill_r3 = ctx.fill;
    ɵngcc0.ɵɵtextInterpolate(fill_r3 === 100 ? "\u2605" : "\u2606");
} }
function NgbRating_ng_template_2_ng_template_3_Template(rf, ctx) { }
function NgbRating_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "span", 3);
    ɵngcc0.ɵɵlistener("mouseenter", function NgbRating_ng_template_2_Template_span_mouseenter_2_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r7); const index_r4 = restoredCtx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.enter(index_r4 + 1); })("click", function NgbRating_ng_template_2_Template_span_click_2_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r7); const index_r4 = restoredCtx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.handleClick(index_r4 + 1); });
    ɵngcc0.ɵɵtemplate(3, NgbRating_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r4 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("(", index_r4 < ctx_r2.nextRate ? "*" : " ", ")");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("cursor", ctx_r2.isInteractive() ? "pointer" : "default");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.starTemplate || ctx_r2.starTemplateFromContent || _r0)("ngTemplateOutletContext", ctx_r2.contexts[index_r4]);
} }
function NgbTimepicker_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgbTimepicker_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.changeHour(ctx_r8.hourStep); });
    ɵngcc0.ɵɵelement(1, "span", 12);
    ɵngcc0.ɵɵelementStart(2, "span", 13);
    ɵngcc0.ɵɵi18n(3, 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("btn-sm", ctx_r0.isSmallSize)("btn-lg", ctx_r0.isLargeSize)("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
} }
function NgbTimepicker_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgbTimepicker_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.changeHour(-ctx_r10.hourStep); });
    ɵngcc0.ɵɵelement(1, "span", 15);
    ɵngcc0.ɵɵelementStart(2, "span", 13);
    ɵngcc0.ɵɵi18n(3, 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.disabled);
} }
function NgbTimepicker_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgbTimepicker_button_9_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.changeMinute(ctx_r12.minuteStep); });
    ɵngcc0.ɵɵelement(1, "span", 12);
    ɵngcc0.ɵɵelementStart(2, "span", 13);
    ɵngcc0.ɵɵi18n(3, 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("btn-sm", ctx_r2.isSmallSize)("btn-lg", ctx_r2.isLargeSize)("disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled);
} }
function NgbTimepicker_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgbTimepicker_button_11_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.changeMinute(-ctx_r14.minuteStep); });
    ɵngcc0.ɵɵelement(1, "span", 15);
    ɵngcc0.ɵɵelementStart(2, "span", 13);
    ɵngcc0.ɵɵi18n(3, 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("btn-sm", ctx_r3.isSmallSize)("btn-lg", ctx_r3.isLargeSize)("disabled", ctx_r3.disabled);
    ɵngcc0.ɵɵproperty("disabled", ctx_r3.disabled);
} }
function NgbTimepicker_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtext(1, ":");
    ɵngcc0.ɵɵelementEnd();
} }
function NgbTimepicker_div_13_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgbTimepicker_div_13_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18.changeSecond(ctx_r18.secondStep); });
    ɵngcc0.ɵɵelement(1, "span", 12);
    ɵngcc0.ɵɵelementStart(2, "span", 13);
    ɵngcc0.ɵɵi18n(3, 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("btn-sm", ctx_r16.isSmallSize)("btn-lg", ctx_r16.isLargeSize)("disabled", ctx_r16.disabled);
    ɵngcc0.ɵɵproperty("disabled", ctx_r16.disabled);
} }
function NgbTimepicker_div_13_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NgbTimepicker_div_13_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(2); return ctx_r20.changeSecond(-ctx_r20.secondStep); });
    ɵngcc0.ɵɵelement(1, "span", 15);
    ɵngcc0.ɵɵelementStart(2, "span", 13);
    ɵngcc0.ɵɵi18n(3, 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("btn-sm", ctx_r17.isSmallSize)("btn-lg", ctx_r17.isLargeSize)("disabled", ctx_r17.disabled);
    ɵngcc0.ɵɵproperty("disabled", ctx_r17.disabled);
} }
function NgbTimepicker_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵtemplate(1, NgbTimepicker_div_13_button_1_Template, 4, 7, "button", 3);
    ɵngcc0.ɵɵelementStart(2, "input", 20);
    ɵngcc0.ɵɵlistener("change", function NgbTimepicker_div_13_Template_input_change_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.updateSecond($event.target.value); })("blur", function NgbTimepicker_div_13_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.handleBlur(); })("input", function NgbTimepicker_div_13_Template_input_input_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.formatInput($event.target); })("keydown.ArrowUp", function NgbTimepicker_div_13_Template_input_keydown_ArrowUp_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r26 = ɵngcc0.ɵɵnextContext(); ctx_r26.changeSecond(ctx_r26.secondStep); return $event.preventDefault(); })("keydown.ArrowDown", function NgbTimepicker_div_13_Template_input_keydown_ArrowDown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r27 = ɵngcc0.ɵɵnextContext(); ctx_r27.changeSecond(-ctx_r27.secondStep); return $event.preventDefault(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NgbTimepicker_div_13_button_3_Template, 4, 7, "button", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.spinners);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("form-control-sm", ctx_r5.isSmallSize)("form-control-lg", ctx_r5.isLargeSize);
    ɵngcc0.ɵɵproperty("value", ctx_r5.formatMinSec(ctx_r5.model == null ? null : ctx_r5.model.second))("readOnly", ctx_r5.readonlyInputs)("disabled", ctx_r5.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.spinners);
} }
function NgbTimepicker_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 5);
} }
function NgbTimepicker_div_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵi18n(1, 27);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r28 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵi18nExp(ctx_r28.i18n.getAfternoonPeriod());
    ɵngcc0.ɵɵi18nApply(1);
} }
function NgbTimepicker_div_15_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵi18n(0, 28);
} if (rf & 2) {
    const ctx_r30 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵi18nExp(ctx_r30.i18n.getMorningPeriod());
    ɵngcc0.ɵɵi18nApply(0);
} }
function NgbTimepicker_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵelementStart(1, "button", 24);
    ɵngcc0.ɵɵlistener("click", function NgbTimepicker_div_15_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.toggleMeridian(); });
    ɵngcc0.ɵɵtemplate(2, NgbTimepicker_div_15_ng_container_2_Template, 2, 1, "ng-container", 25);
    ɵngcc0.ɵɵtemplate(3, NgbTimepicker_div_15_ng_template_3_Template, 1, 1, "ng-template", null, 26, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r29 = ɵngcc0.ɵɵreference(4);
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("btn-sm", ctx_r7.isSmallSize)("btn-lg", ctx_r7.isLargeSize)("disabled", ctx_r7.disabled);
    ɵngcc0.ɵɵproperty("disabled", ctx_r7.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.model && ctx_r7.model.hour >= 12)("ngIfElse", _r29);
} }
function NgbToast_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "strong", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.header);
} }
function NgbToast_ng_template_2_ng_template_1_Template(rf, ctx) { }
function NgbToast_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtemplate(1, NgbToast_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵngcc0.ɵɵelementStart(2, "button", 6);
    ɵngcc0.ɵɵlistener("click", function NgbToast_ng_template_2_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.hide(); });
    ɵngcc0.ɵɵelementStart(3, "span", 7);
    ɵngcc0.ɵɵtext(4, "\u00D7");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contentHeaderTpl || _r0);
} }
function NgbHighlight_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const part_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r3.highlightClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(part_r1);
} }
function NgbHighlight_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const part_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵtextInterpolate(part_r1);
} }
function NgbHighlight_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgbHighlight_ng_template_0_span_0_Template, 2, 3, "span", 1);
    ɵngcc0.ɵɵtemplate(1, NgbHighlight_ng_template_0_ng_template_1_Template, 1, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const isOdd_r2 = ctx.odd;
    const _r4 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵproperty("ngIf", isOdd_r2)("ngIfElse", _r4);
} }
function NgbTypeaheadWindow_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngb-highlight", 2);
} if (rf & 2) {
    const result_r3 = ctx.result;
    const term_r4 = ctx.term;
    const formatter_r5 = ctx.formatter;
    ɵngcc0.ɵɵproperty("result", formatter_r5(result_r3))("term", term_r4);
} }
function NgbTypeaheadWindow_ng_template_2_ng_template_1_Template(rf, ctx) { }
const _c87 = function (a0, a1, a2) { return { result: a0, term: a1, formatter: a2 }; };
function NgbTypeaheadWindow_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 3);
    ɵngcc0.ɵɵlistener("mouseenter", function NgbTypeaheadWindow_ng_template_2_Template_button_mouseenter_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r10); const idx_r7 = restoredCtx.index; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.markActive(idx_r7); })("click", function NgbTypeaheadWindow_ng_template_2_Template_button_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r10); const result_r6 = restoredCtx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.select(result_r6); });
    ɵngcc0.ɵɵtemplate(1, NgbTypeaheadWindow_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const result_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("active", idx_r7 === ctx_r2.activeIdx);
    ɵngcc0.ɵɵproperty("id", ctx_r2.id + "-" + idx_r7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.resultTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(5, _c87, result_r6, ctx_r2.term, ctx_r2.formatter));
} }
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? `${value}` : '';
}
function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    }
    else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
function hasClassName(element, className) {
    return element && element.className && element.className.split &&
        element.className.split(/\s+/).indexOf(className) >= 0;
}
if (typeof Element !== 'undefined' && !Element.prototype.closest) {
    // Polyfill for ie10+
    if (!Element.prototype.matches) {
        // IE uses the non-standard name: msMatchesSelector
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
        let el = this;
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (el.matches(s)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}
function closest(element, selector) {
    if (!selector) {
        return null;
    }
    /*
     * In certain browsers (e.g. Edge 44.18362.449.0) HTMLDocument does
     * not support `Element.prototype.closest`. To emulate the correct behaviour
     * we return null when the method is missing.
     *
     * Note that in evergreen browsers `closest(document.documentElement, 'html')`
     * will return the document element whilst in Edge null will be returned. This
     * compromise was deemed good enough.
     */
    if (typeof element.closest === 'undefined') {
        return null;
    }
    return element.closest(selector);
}
/**
 * Force a browser reflow
 * @param element element where to apply the reflow
 */
function reflow(element) {
    return (element || document.body).getBoundingClientRect();
}
/**
 * Creates an observable where all callbacks are executed inside a given zone
 *
 * @param zone
 */
function runInZone(zone) {
    return (source) => {
        return new Observable(observer => {
            const onNext = (value) => zone.run(() => observer.next(value));
            const onError = (e) => zone.run(() => observer.error(e));
            const onComplete = () => zone.run(() => observer.complete());
            return source.subscribe(onNext, onError, onComplete);
        });
    };
}
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const environment = {
    animation: true,
    transitionTimerDelayMs: 5,
};

/**
 * Global ng-bootstrap config
 *
 * @since 8.0.0
 */
class NgbConfig {
    constructor() {
        this.animation = environment.animation;
    }
}
NgbConfig.ɵfac = function NgbConfig_Factory(t) { return new (t || NgbConfig)(); };
NgbConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbConfig_Factory() { return new NgbConfig(); }, token: NgbConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */
class NgbAccordionConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.closeOthers = false;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbAccordionConfig.ɵfac = function NgbAccordionConfig_Factory(t) { return new (t || NgbAccordionConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbAccordionConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbAccordionConfig_Factory() { return new NgbAccordionConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbAccordionConfig, providedIn: "root" });
NgbAccordionConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbAccordionConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

function getTransitionDurationMs(element) {
    const { transitionDelay, transitionDuration } = window.getComputedStyle(element);
    const transitionDelaySec = parseFloat(transitionDelay);
    const transitionDurationSec = parseFloat(transitionDuration);
    return (transitionDelaySec + transitionDurationSec) * 1000;
}

const noopFn = () => { };
const ɵ0$5 = noopFn;
const { transitionTimerDelayMs } = environment;
const runningTransitions = new Map();
const ngbRunTransition = (zone, element, startFn, options) => {
    // Getting initial context from options
    let context = options.context || {};
    // Checking if there are already running transitions on the given element.
    const running = runningTransitions.get(element);
    if (running) {
        switch (options.runningTransition) {
            // If there is one running and we want for it to 'continue' to run, we have to cancel the new one.
            // We're not emitting any values, but simply completing the observable (EMPTY).
            case 'continue':
                return EMPTY;
            // If there is one running and we want for it to 'stop', we have to complete the running one.
            // We're simply completing the running one and not emitting any values and merging newly provided context
            // with the one coming from currently running transition.
            case 'stop':
                zone.run(() => running.transition$.complete());
                context = Object.assign(running.context, context);
                runningTransitions.delete(element);
        }
    }
    // Running the start function
    const endFn = startFn(element, options.animation, context) || noopFn;
    // If 'prefer-reduced-motion' is enabled, the 'transition' will be set to 'none'.
    // If animations are disabled, we have to emit a value and complete the observable
    // In this case we have to call the end function, but can finish immediately by emitting a value,
    // completing the observable and executing end functions synchronously.
    if (!options.animation || window.getComputedStyle(element).transitionProperty === 'none') {
        zone.run(() => endFn());
        return of(undefined).pipe(runInZone(zone));
    }
    // Starting a new transition
    const transition$ = new Subject();
    const finishTransition$ = new Subject();
    const stop$ = transition$.pipe(endWith(true));
    runningTransitions.set(element, {
        transition$,
        complete: () => {
            finishTransition$.next();
            finishTransition$.complete();
        },
        context
    });
    const transitionDurationMs = getTransitionDurationMs(element);
    // 1. We have to both listen for the 'transitionend' event and have a 'just-in-case' timer,
    // because 'transitionend' event might not be fired in some browsers, if the transitioning
    // element becomes invisible (ex. when scrolling, making browser tab inactive, etc.). The timer
    // guarantees, that we'll release the DOM element and complete 'ngbRunTransition'.
    // 2. We need to filter transition end events, because they might bubble from shorter transitions
    // on inner DOM elements. We're only interested in the transition on the 'element' itself.
    zone.runOutsideAngular(() => {
        const transitionEnd$ = fromEvent(element, 'transitionend').pipe(takeUntil(stop$), filter(({ target }) => target === element));
        const timer$ = timer(transitionDurationMs + transitionTimerDelayMs).pipe(takeUntil(stop$));
        race(timer$, transitionEnd$, finishTransition$).pipe(takeUntil(stop$)).subscribe(() => {
            runningTransitions.delete(element);
            zone.run(() => {
                endFn();
                transition$.next();
                transition$.complete();
            });
        });
    });
    return transition$.asObservable();
};
const ngbCompleteTransition = (element) => {
    var _a;
    (_a = runningTransitions.get(element)) === null || _a === void 0 ? void 0 : _a.complete();
};

function measureCollapsingElementHeightPx(element) {
    // SSR fix for without injecting the PlatformId
    if (typeof navigator === 'undefined') {
        return '0px';
    }
    const { classList } = element;
    const hasShownClass = classList.contains('show');
    if (!hasShownClass) {
        classList.add('show');
    }
    element.style.height = '';
    const height = element.getBoundingClientRect().height + 'px';
    if (!hasShownClass) {
        classList.remove('show');
    }
    return height;
}
const ngbCollapsingTransition = (element, animation, context) => {
    let { direction, maxHeight } = context;
    const { classList } = element;
    function setInitialClasses() {
        classList.add('collapse');
        if (direction === 'show') {
            classList.add('show');
        }
        else {
            classList.remove('show');
        }
    }
    // without animations we just need to set initial classes
    if (!animation) {
        setInitialClasses();
        return;
    }
    // No maxHeight -> running the transition for the first time
    if (!maxHeight) {
        maxHeight = measureCollapsingElementHeightPx(element);
        context.maxHeight = maxHeight;
        // Fix the height before starting the animation
        element.style.height = direction !== 'show' ? maxHeight : '0px';
        classList.remove('collapse');
        classList.remove('collapsing');
        classList.remove('show');
        reflow(element);
        // Start the animation
        classList.add('collapsing');
    }
    // Start or revert the animation
    element.style.height = direction === 'show' ? maxHeight : '0px';
    return () => {
        setInitialClasses();
        classList.remove('collapsing');
        element.style.height = '';
    };
};

let nextId$4 = 0;
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */
class NgbPanelHeader {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelHeader.ɵfac = function NgbPanelHeader_Factory(t) { return new (t || NgbPanelHeader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPanelHeader.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPanelHeader, selectors: [["ng-template", "ngbPanelHeader", ""]] });
NgbPanelHeader.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPanelHeader, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPanelHeader]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
class NgbPanelTitle {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelTitle.ɵfac = function NgbPanelTitle_Factory(t) { return new (t || NgbPanelTitle)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPanelTitle.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPanelTitle, selectors: [["ng-template", "ngbPanelTitle", ""]] });
NgbPanelTitle.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPanelTitle, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPanelTitle]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive that wraps the accordion panel content.
 */
class NgbPanelContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelContent.ɵfac = function NgbPanelContent_Factory(t) { return new (t || NgbPanelContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPanelContent.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPanelContent, selectors: [["ng-template", "ngbPanelContent", ""]] });
NgbPanelContent.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPanelContent, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPanelContent]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
class NgbPanel {
    constructor() {
        /**
         *  If `true`, the panel is disabled an can't be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel that must be unique on the page.
         *
         *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
         */
        this.id = `ngb-panel-${nextId$4++}`;
        this.isOpen = false;
        /* A flag to specified that the transition panel classes have been initialized */
        this.initClassDone = false;
        /* A flag to specified if the panel is currently being animated, to ensure its presence in the dom */
        this.transitionRunning = false;
        /**
         * An event emitted when the panel is shown, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the panel is hidden, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
    }
    ngAfterContentChecked() {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.headerTpl = this.headerTpls.first;
        this.contentTpl = this.contentTpls.first;
    }
}
NgbPanel.ɵfac = function NgbPanel_Factory(t) { return new (t || NgbPanel)(); };
NgbPanel.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPanel, selectors: [["ngb-panel"]], contentQueries: function NgbPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPanelTitle, 4);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPanelHeader, 4);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPanelContent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.titleTpls = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerTpls = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentTpls = _t);
    } }, inputs: { disabled: "disabled", id: "id", title: "title", type: "type", cardClass: "cardClass" }, outputs: { shown: "shown", hidden: "hidden" } });
NgbPanel.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    title: [{ type: Input }],
    type: [{ type: Input }],
    cardClass: [{ type: Input }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }],
    titleTpls: [{ type: ContentChildren, args: [NgbPanelTitle, { descendants: false },] }],
    headerTpls: [{ type: ContentChildren, args: [NgbPanelHeader, { descendants: false },] }],
    contentTpls: [{ type: ContentChildren, args: [NgbPanelContent, { descendants: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPanel, [{
        type: Directive,
        args: [{ selector: 'ngb-panel' }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], id: [{
            type: Input
        }], shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }], title: [{
            type: Input
        }], type: [{
            type: Input
        }], cardClass: [{
            type: Input
        }], titleTpls: [{
            type: ContentChildren,
            args: [NgbPanelTitle, { descendants: false }]
        }], headerTpls: [{
            type: ContentChildren,
            args: [NgbPanelHeader, { descendants: false }]
        }], contentTpls: [{
            type: ContentChildren,
            args: [NgbPanelContent, { descendants: false }]
        }] }); })();
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
class NgbAccordion {
    constructor(config, _element, _ngZone, _changeDetector) {
        this._element = _element;
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        /**
         * An array or comma separated strings of panel ids that should be opened **initially**.
         *
         * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
         * the `(panelChange)` event.
         */
        this.activeIds = [];
        /**
         * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
         */
        this.destroyOnHide = true;
        /**
         * Event emitted right before the panel toggle happens.
         *
         * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
         */
        this.panelChange = new EventEmitter();
        /**
         * An event emitted when the expanding animation is finished on the panel. The payload is the panel id.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the collapsing animation is finished on the panel, and before the panel element is removed.
         * The payload is the panel id.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        this.animation = config.animation;
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Checks if a panel with a given id is expanded.
     */
    isExpanded(panelId) { return this.activeIds.indexOf(panelId) > -1; }
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     */
    expand(panelId) { this._changeOpenState(this._findPanelById(panelId), true); }
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     */
    expandAll() {
        if (this.closeOtherPanels) {
            if (this.activeIds.length === 0 && this.panels.length) {
                this._changeOpenState(this.panels.first, true);
            }
        }
        else {
            this.panels.forEach(panel => this._changeOpenState(panel, true));
        }
    }
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     */
    collapse(panelId) { this._changeOpenState(this._findPanelById(panelId), false); }
    /**
     * Collapses all opened panels.
     */
    collapseAll() {
        this.panels.forEach((panel) => { this._changeOpenState(panel, false); });
    }
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     */
    toggle(panelId) {
        const panel = this._findPanelById(panelId);
        if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
        }
    }
    ngAfterContentChecked() {
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach(panel => { panel.isOpen = !panel.disabled && this.activeIds.indexOf(panel.id) > -1; });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0], false);
            this._updateActiveIds();
        }
        // Setup the initial classes here
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.panels.forEach(panel => {
                const panelElement = this._getPanelElement(panel.id);
                if (panelElement) {
                    if (!panel.initClassDone) {
                        panel.initClassDone = true;
                        ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
                            animation: false,
                            runningTransition: 'continue',
                            context: { direction: panel.isOpen ? 'show' : 'hide' }
                        });
                    }
                }
                else {
                    // Classes must be initialized next time it will be in the dom
                    panel.initClassDone = false;
                }
            });
        });
    }
    _changeOpenState(panel, nextState) {
        if (panel != null && !panel.disabled && panel.isOpen !== nextState) {
            let defaultPrevented = false;
            this.panelChange.emit({ panelId: panel.id, nextState: nextState, preventDefault: () => { defaultPrevented = true; } });
            if (!defaultPrevented) {
                panel.isOpen = nextState;
                panel.transitionRunning = true;
                if (nextState && this.closeOtherPanels) {
                    this._closeOthers(panel.id);
                }
                this._updateActiveIds();
                this._runTransitions(this.animation);
            }
        }
    }
    _closeOthers(panelId, enableTransition = true) {
        this.panels.forEach(panel => {
            if (panel.id !== panelId && panel.isOpen) {
                panel.isOpen = false;
                panel.transitionRunning = enableTransition;
            }
        });
    }
    _findPanelById(panelId) { return this.panels.find(p => p.id === panelId) || null; }
    _updateActiveIds() {
        this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
    }
    _runTransitions(animation) {
        // detectChanges is performed to ensure that all panels are in the dom (via transitionRunning = true)
        // before starting the animation
        this._changeDetector.detectChanges();
        this.panels.forEach(panel => {
            // When panel.transitionRunning is true, the transition needs to be started OR reversed,
            // The direction (show or hide) is choosen by each panel.isOpen state
            if (panel.transitionRunning) {
                const panelElement = this._getPanelElement(panel.id);
                ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
                    animation,
                    runningTransition: 'stop',
                    context: { direction: panel.isOpen ? 'show' : 'hide' }
                }).subscribe(() => {
                    panel.transitionRunning = false;
                    const { id } = panel;
                    if (panel.isOpen) {
                        panel.shown.emit();
                        this.shown.emit(id);
                    }
                    else {
                        panel.hidden.emit();
                        this.hidden.emit(id);
                    }
                });
            }
        });
    }
    _getPanelElement(panelId) {
        return this._element.nativeElement.querySelector('#' + panelId);
    }
}
NgbAccordion.ɵfac = function NgbAccordion_Factory(t) { return new (t || NgbAccordion)(ɵngcc0.ɵɵdirectiveInject(NgbAccordionConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgbAccordion.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbAccordion, selectors: [["ngb-accordion"]], contentQueries: function NgbAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPanel, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panels = _t);
    } }, hostAttrs: ["role", "tablist", 1, "accordion"], hostVars: 1, hostBindings: function NgbAccordion_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-multiselectable", !ctx.closeOtherPanels);
    } }, inputs: { activeIds: "activeIds", destroyOnHide: "destroyOnHide", animation: "animation", type: "type", closeOtherPanels: ["closeOthers", "closeOtherPanels"] }, outputs: { panelChange: "panelChange", shown: "shown", hidden: "hidden" }, exportAs: ["ngbAccordion"], decls: 3, vars: 1, consts: [["ngbPanelHeader", ""], ["t", ""], ["ngFor", "", 3, "ngForOf"], [1, "btn", "btn-link", 3, "ngbPanelToggle"], [3, "ngTemplateOutlet"], ["role", "tab", 3, "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "tabpanel", 3, "id", 4, "ngIf"], ["role", "tabpanel", 3, "id"], [1, "card-body"]], template: function NgbAccordion_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgbAccordion_ng_template_0_Template, 3, 3, "ng-template", 0, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NgbAccordion_ng_template_2_Template, 4, 11, "ng-template", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.panels);
    } }, directives: function () { return [NgbPanelHeader, ɵngcc1.NgForOf, NgbPanelToggle, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf]; }, encapsulation: 2 });
NgbAccordion.ctorParameters = () => [
    { type: NgbAccordionConfig },
    { type: ElementRef },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
NgbAccordion.propDecorators = {
    panels: [{ type: ContentChildren, args: [NgbPanel,] }],
    animation: [{ type: Input }],
    activeIds: [{ type: Input }],
    closeOtherPanels: [{ type: Input, args: ['closeOthers',] }],
    destroyOnHide: [{ type: Input }],
    type: [{ type: Input }],
    panelChange: [{ type: Output }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbAccordion, [{
        type: Component,
        args: [{
                selector: 'ngb-accordion',
                exportAs: 'ngbAccordion',
                encapsulation: ViewEncapsulation.None,
                host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                template: `
    <ng-template #t ngbPanelHeader let-panel>
      <button class="btn btn-link" [ngbPanelToggle]="panel">
        {{panel.title}}<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
      </button>
    </ng-template>
    <ng-template ngFor let-panel [ngForOf]="panels">
      <div [class]="'card ' + (panel.cardClass || '')">
        <div role="tab" id="{{panel.id}}-header" [class]="'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')">
          <ng-template [ngTemplateOutlet]="panel.headerTpl?.templateRef || t"
                       [ngTemplateOutletContext]="{$implicit: panel, opened: panel.isOpen}"></ng-template>
        </div>
        <div id="{{panel.id}}" role="tabpanel" [attr.aria-labelledby]="panel.id + '-header'"
             *ngIf="!destroyOnHide || panel.isOpen || panel.transitionRunning">
          <div class="card-body">
               <ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef || null"></ng-template>
          </div>
        </div>
      </div>
    </ng-template>
  `
            }]
    }], function () { return [{ type: NgbAccordionConfig }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { activeIds: [{
            type: Input
        }], destroyOnHide: [{
            type: Input
        }], panelChange: [{
            type: Output
        }], shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }], animation: [{
            type: Input
        }], type: [{
            type: Input
        }], closeOtherPanels: [{
            type: Input,
            args: ['closeOthers']
        }], panels: [{
            type: ContentChildren,
            args: [NgbPanel]
        }] }); })();
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * @since 4.1.0
 */
class NgbPanelToggle {
    constructor(accordion, panel) {
        this.accordion = accordion;
        this.panel = panel;
    }
    set ngbPanelToggle(panel) {
        if (panel) {
            this.panel = panel;
        }
    }
}
NgbPanelToggle.ɵfac = function NgbPanelToggle_Factory(t) { return new (t || NgbPanelToggle)(ɵngcc0.ɵɵdirectiveInject(NgbAccordion), ɵngcc0.ɵɵdirectiveInject(NgbPanel, 9)); };
NgbPanelToggle.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPanelToggle, selectors: [["button", "ngbPanelToggle", ""]], hostAttrs: ["type", "button"], hostVars: 5, hostBindings: function NgbPanelToggle_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgbPanelToggle_click_HostBindingHandler() { return ctx.accordion.toggle(ctx.panel.id); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("disabled", ctx.panel.disabled);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.panel.isOpen)("aria-controls", ctx.panel.id);
        ɵngcc0.ɵɵclassProp("collapsed", !ctx.panel.isOpen);
    } }, inputs: { ngbPanelToggle: "ngbPanelToggle" } });
NgbPanelToggle.ctorParameters = () => [
    { type: NgbAccordion },
    { type: NgbPanel, decorators: [{ type: Optional }, { type: Host }] }
];
NgbPanelToggle.propDecorators = {
    ngbPanelToggle: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPanelToggle, [{
        type: Directive,
        args: [{
                selector: 'button[ngbPanelToggle]',
                host: {
                    'type': 'button',
                    '[disabled]': 'panel.disabled',
                    '[class.collapsed]': '!panel.isOpen',
                    '[attr.aria-expanded]': 'panel.isOpen',
                    '[attr.aria-controls]': 'panel.id',
                    '(click)': 'accordion.toggle(panel.id)'
                }
            }]
    }], function () { return [{ type: NgbAccordion }, { type: NgbPanel, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { ngbPanelToggle: [{
            type: Input
        }] }); })();

const NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];
class NgbAccordionModule {
}
NgbAccordionModule.ɵfac = function NgbAccordionModule_Factory(t) { return new (t || NgbAccordionModule)(); };
NgbAccordionModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbAccordionModule });
NgbAccordionModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbAccordionModule, [{
        type: NgModule,
        args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [CommonModule] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbAccordionModule, { declarations: function () { return [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle]; } }); })();

/**
 * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all alerts used in the application.
 */
class NgbAlertConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.dismissible = true;
        this.type = 'warning';
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbAlertConfig.ɵfac = function NgbAlertConfig_Factory(t) { return new (t || NgbAlertConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbAlertConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbAlertConfig_Factory() { return new NgbAlertConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbAlertConfig, providedIn: "root" });
NgbAlertConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbAlertConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

const ngbAlertFadingTransition = ({ classList }) => {
    classList.remove('show');
};

/**
 * Alert is a component to provide contextual feedback messages for user.
 *
 * It supports several alert types and can be dismissed.
 */
class NgbAlert {
    constructor(config, _renderer, _element, _zone) {
        this._renderer = _renderer;
        this._element = _element;
        this._zone = _zone;
        /**
         * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
         *
         * @since 8.0.0
         */
        this.closed = new EventEmitter();
        this.dismissible = config.dismissible;
        this.type = config.type;
        this.animation = config.animation;
    }
    /**
     * Triggers alert closing programmatically (same as clicking on the close button (×)).
     *
     * The returned observable will emit and be completed once the closing transition has finished.
     * If the animations are turned off this happens synchronously.
     *
     * Alternatively you could listen or subscribe to the `(closed)` output
     *
     * @since 8.0.0
     */
    close() {
        const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbAlertFadingTransition, { animation: this.animation, runningTransition: 'continue' });
        transition.subscribe(() => this.closed.emit());
        return transition;
    }
    ngOnChanges(changes) {
        const typeChange = changes['type'];
        if (typeChange && !typeChange.firstChange) {
            this._renderer.removeClass(this._element.nativeElement, `alert-${typeChange.previousValue}`);
            this._renderer.addClass(this._element.nativeElement, `alert-${typeChange.currentValue}`);
        }
    }
    ngOnInit() { this._renderer.addClass(this._element.nativeElement, `alert-${this.type}`); }
}
NgbAlert.ɵfac = function NgbAlert_Factory(t) { return new (t || NgbAlert)(ɵngcc0.ɵɵdirectiveInject(NgbAlertConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NgbAlert.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbAlert, selectors: [["ngb-alert"]], hostAttrs: ["role", "alert", 1, "alert", "show"], hostVars: 4, hostBindings: function NgbAlert_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("fade", ctx.animation)("alert-dismissible", ctx.dismissible);
    } }, inputs: { dismissible: "dismissible", type: "type", animation: "animation" }, outputs: { closed: "closed" }, exportAs: ["ngbAlert"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 2, vars: 1, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_alert_close$$FESM2015_NG_BOOTSTRAP_JS_2 = goog.getMsg("Close");
        i18n_1 = MSG_EXTERNAL_ngb_alert_close$$FESM2015_NG_BOOTSTRAP_JS_2;
    }
    else {
        i18n_1 = $localize `:@@ngb.alert.close␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
    } return [["type", "button", "class", "close", "aria-label", i18n_1, 3, "click", 4, "ngIf"], ["type", "button", "aria-label", i18n_1, 1, "close", 3, "click"], ["aria-hidden", "true"]]; }, template: function NgbAlert_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NgbAlert_button_1_Template, 3, 0, "button", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dismissible);
    } }, directives: [ɵngcc1.NgIf], styles: ["ngb-alert{display:block}"], encapsulation: 2, changeDetection: 0 });
NgbAlert.ctorParameters = () => [
    { type: NgbAlertConfig },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone }
];
NgbAlert.propDecorators = {
    animation: [{ type: Input }],
    dismissible: [{ type: Input }],
    type: [{ type: Input }],
    closed: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbAlert, [{
        type: Component,
        args: [{
                selector: 'ngb-alert',
                exportAs: 'ngbAlert',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: { 'role': 'alert', 'class': 'alert show', '[class.fade]': 'animation', '[class.alert-dismissible]': 'dismissible' },
                template: `
    <ng-content></ng-content>
    <button *ngIf="dismissible" type="button" class="close" aria-label="Close" i18n-aria-label="@@ngb.alert.close"
      (click)="close()">
      <span aria-hidden="true">&times;</span>
    </button>
    `,
                styles: ["ngb-alert{display:block}"]
            }]
    }], function () { return [{ type: NgbAlertConfig }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { closed: [{
            type: Output
        }], dismissible: [{
            type: Input
        }], type: [{
            type: Input
        }], animation: [{
            type: Input
        }] }); })();

class NgbAlertModule {
}
NgbAlertModule.ɵfac = function NgbAlertModule_Factory(t) { return new (t || NgbAlertModule)(); };
NgbAlertModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbAlertModule });
NgbAlertModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbAlertModule, [{
        type: NgModule,
        args: [{ declarations: [NgbAlert], exports: [NgbAlert], imports: [CommonModule], entryComponents: [NgbAlert] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbAlertModule, { declarations: function () { return [NgbAlert]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbAlert]; } }); })();

class NgbButtonLabel {
}
NgbButtonLabel.ɵfac = function NgbButtonLabel_Factory(t) { return new (t || NgbButtonLabel)(); };
NgbButtonLabel.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbButtonLabel, selectors: [["", "ngbButtonLabel", ""]], hostVars: 8, hostBindings: function NgbButtonLabel_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("btn", true)("active", ctx.active)("disabled", ctx.disabled)("focus", ctx.focused);
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbButtonLabel, [{
        type: Directive,
        args: [{
                selector: '[ngbButtonLabel]',
                host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
            }]
    }], null, null); })();

/**
 * Allows to easily create Bootstrap-style checkbox buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
class NgbCheckBox {
    constructor(_label, _cd) {
        this._label = _label;
        this._cd = _cd;
        /**
         * If `true`, the checkbox button will be disabled
         */
        this.disabled = false;
        /**
         * The form control value when the checkbox is checked.
         */
        this.valueChecked = true;
        /**
         * The form control value when the checkbox is unchecked.
         */
        this.valueUnChecked = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    set focused(isFocused) {
        this._label.focused = isFocused;
        if (!isFocused) {
            this.onTouched();
        }
    }
    onInputChange($event) {
        const modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
        this.onChange(modelToPropagate);
        this.onTouched();
        this.writeValue(modelToPropagate);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._label.disabled = isDisabled;
    }
    writeValue(value) {
        this.checked = value === this.valueChecked;
        this._label.active = this.checked;
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        this._cd.markForCheck();
    }
}
NgbCheckBox.ɵfac = function NgbCheckBox_Factory(t) { return new (t || NgbCheckBox)(ɵngcc0.ɵɵdirectiveInject(NgbButtonLabel), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgbCheckBox.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbCheckBox, selectors: [["", "ngbButton", "", "type", "checkbox"]], hostVars: 2, hostBindings: function NgbCheckBox_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("change", function NgbCheckBox_change_HostBindingHandler($event) { return ctx.onInputChange($event); })("focus", function NgbCheckBox_focus_HostBindingHandler() { return ctx.focused = true; })("blur", function NgbCheckBox_blur_HostBindingHandler() { return ctx.focused = false; });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("checked", ctx.checked)("disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", valueChecked: "valueChecked", valueUnChecked: "valueUnChecked" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbCheckBox), multi: true }])] });
NgbCheckBox.ctorParameters = () => [
    { type: NgbButtonLabel },
    { type: ChangeDetectorRef }
];
NgbCheckBox.propDecorators = {
    disabled: [{ type: Input }],
    valueChecked: [{ type: Input }],
    valueUnChecked: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCheckBox, [{
        type: Directive,
        args: [{
                selector: '[ngbButton][type=checkbox]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '(change)': 'onInputChange($event)',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbCheckBox), multi: true }]
            }]
    }], function () { return [{ type: NgbButtonLabel }, { type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: Input
        }], valueChecked: [{
            type: Input
        }], valueUnChecked: [{
            type: Input
        }] }); })();

let nextId$3 = 0;
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
class NgbRadioGroup {
    constructor() {
        this._radios = new Set();
        this._value = null;
        /**
         * Name of the radio group applied to radio input elements.
         *
         * Will be applied to all radio input elements inside the group,
         * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
         *
         * If not provided, will be generated in the `ngb-radio-xx` format.
         */
        this.name = `ngb-radio-${nextId$3++}`;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get disabled() { return this._disabled; }
    set disabled(isDisabled) { this.setDisabledState(isDisabled); }
    onRadioChange(radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    }
    onRadioValueUpdate() { this._updateRadiosValue(); }
    register(radio) { this._radios.add(radio); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    }
    unregister(radio) { this._radios.delete(radio); }
    writeValue(value) {
        this._value = value;
        this._updateRadiosValue();
    }
    _updateRadiosValue() { this._radios.forEach((radio) => radio.updateValue(this._value)); }
    _updateRadiosDisabled() { this._radios.forEach((radio) => radio.updateDisabled()); }
}
NgbRadioGroup.ɵfac = function NgbRadioGroup_Factory(t) { return new (t || NgbRadioGroup)(); };
NgbRadioGroup.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbRadioGroup, selectors: [["", "ngbRadioGroup", ""]], hostAttrs: ["role", "radiogroup"], inputs: { name: "name" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbRadioGroup), multi: true }])] });
NgbRadioGroup.propDecorators = {
    name: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbRadioGroup, [{
        type: Directive,
        args: [{
                selector: '[ngbRadioGroup]',
                host: { 'role': 'radiogroup' },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbRadioGroup), multi: true }]
            }]
    }], function () { return []; }, { name: [{
            type: Input
        }] }); })();
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 */
class NgbRadio {
    constructor(_group, _label, _renderer, _element, _cd) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._cd = _cd;
        this._value = null;
        this._group.register(this);
        this.updateDisabled();
    }
    /**
     * The form control value when current radio button is checked.
     */
    set value(value) {
        this._value = value;
        const stringValue = value ? value.toString() : '';
        this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
        this._group.onRadioValueUpdate();
    }
    /**
     * If `true`, current radio button will be disabled.
     */
    set disabled(isDisabled) {
        this._disabled = isDisabled !== false;
        this.updateDisabled();
    }
    set focused(isFocused) {
        if (this._label) {
            this._label.focused = isFocused;
        }
        if (!isFocused) {
            this._group.onTouched();
        }
    }
    get checked() { return this._checked; }
    get disabled() { return this._group.disabled || this._disabled; }
    get value() { return this._value; }
    get nameAttr() { return this.name || this._group.name; }
    ngOnDestroy() { this._group.unregister(this); }
    onChange() { this._group.onRadioChange(this); }
    updateValue(value) {
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        if (this.value !== value) {
            this._cd.markForCheck();
        }
        this._checked = this.value === value;
        this._label.active = this._checked;
    }
    updateDisabled() { this._label.disabled = this.disabled; }
}
NgbRadio.ɵfac = function NgbRadio_Factory(t) { return new (t || NgbRadio)(ɵngcc0.ɵɵdirectiveInject(NgbRadioGroup), ɵngcc0.ɵɵdirectiveInject(NgbButtonLabel), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgbRadio.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbRadio, selectors: [["", "ngbButton", "", "type", "radio"]], hostVars: 3, hostBindings: function NgbRadio_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("change", function NgbRadio_change_HostBindingHandler() { return ctx.onChange(); })("focus", function NgbRadio_focus_HostBindingHandler() { return ctx.focused = true; })("blur", function NgbRadio_blur_HostBindingHandler() { return ctx.focused = false; });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.nameAttr);
    } }, inputs: { value: "value", disabled: "disabled", name: "name" } });
NgbRadio.ctorParameters = () => [
    { type: NgbRadioGroup },
    { type: NgbButtonLabel },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NgbRadio.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input, args: ['value',] }],
    disabled: [{ type: Input, args: ['disabled',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbRadio, [{
        type: Directive,
        args: [{
                selector: '[ngbButton][type=radio]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '[name]': 'nameAttr',
                    '(change)': 'onChange()',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                }
            }]
    }], function () { return [{ type: NgbRadioGroup }, { type: NgbButtonLabel }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { value: [{
            type: Input,
            args: ['value']
        }], disabled: [{
            type: Input,
            args: ['disabled']
        }], name: [{
            type: Input
        }] }); })();

const NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];
class NgbButtonsModule {
}
NgbButtonsModule.ɵfac = function NgbButtonsModule_Factory(t) { return new (t || NgbButtonsModule)(); };
NgbButtonsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbButtonsModule });
NgbButtonsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbButtonsModule, [{
        type: NgModule,
        args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbButtonsModule, { declarations: [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio], exports: [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio] }); })();

/**
 * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */
class NgbCarouselConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbCarouselConfig.ɵfac = function NgbCarouselConfig_Factory(t) { return new (t || NgbCarouselConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbCarouselConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbCarouselConfig_Factory() { return new NgbCarouselConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbCarouselConfig, providedIn: "root" });
NgbCarouselConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCarouselConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

/**
 * Defines the carousel slide transition direction.
 */
var NgbSlideEventDirection;
(function (NgbSlideEventDirection) {
    NgbSlideEventDirection["LEFT"] = "left";
    NgbSlideEventDirection["RIGHT"] = "right";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
const isBeingAnimated = ({ classList }) => {
    return classList.contains('carousel-item-left') || classList.contains('carousel-item-right');
};
const ɵ0$4 = isBeingAnimated;
const removeDirectionClasses = (classList) => {
    classList.remove('carousel-item-left');
    classList.remove('carousel-item-right');
};
const ɵ1$1 = removeDirectionClasses;
const removeClasses = (classList) => {
    removeDirectionClasses(classList);
    classList.remove('carousel-item-prev');
    classList.remove('carousel-item-next');
};
const ɵ2$1 = removeClasses;
const ngbCarouselTransitionIn = (element, animation, { direction }) => {
    const { classList } = element;
    if (!animation) {
        removeDirectionClasses(classList);
        removeClasses(classList);
        classList.add('active');
        return;
    }
    if (isBeingAnimated(element)) {
        // Revert the transition
        removeDirectionClasses(classList);
    }
    else {
        // For the 'in' transition, a 'pre-class' is applied to the element to ensure its visibility
        classList.add('carousel-item-' + (direction === NgbSlideEventDirection.LEFT ? 'next' : 'prev'));
        reflow(element);
        classList.add('carousel-item-' + direction);
    }
    return () => {
        removeClasses(classList);
        classList.add('active');
    };
};
const ngbCarouselTransitionOut = (element, animation, { direction }) => {
    const { classList } = element;
    if (!animation) {
        removeDirectionClasses(classList);
        removeClasses(classList);
        classList.remove('active');
        return;
    }
    //  direction is left or right, depending on the way the slide goes out.
    if (isBeingAnimated(element)) {
        // Revert the transition
        removeDirectionClasses(classList);
    }
    else {
        classList.add('carousel-item-' + direction);
    }
    return () => {
        removeClasses(classList);
        classList.remove('active');
    };
};

let nextId$2 = 0;
/**
 * A directive that wraps the individual carousel slide.
 */
class NgbSlide {
    constructor(tplRef) {
        this.tplRef = tplRef;
        /**
         * Slide id that must be unique for the entire document.
         *
         * If not provided, will be generated in the `ngb-slide-xx` format.
         */
        this.id = `ngb-slide-${nextId$2++}`;
        /**
         * An event emitted when the slide transition is finished
         *
         * @since 8.0.0
         */
        this.slid = new EventEmitter();
    }
}
NgbSlide.ɵfac = function NgbSlide_Factory(t) { return new (t || NgbSlide)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbSlide.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbSlide, selectors: [["ng-template", "ngbSlide", ""]], inputs: { id: "id" }, outputs: { slid: "slid" } });
NgbSlide.ctorParameters = () => [
    { type: TemplateRef }
];
NgbSlide.propDecorators = {
    id: [{ type: Input }],
    slid: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbSlide, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbSlide]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { id: [{
            type: Input
        }], slid: [{
            type: Output
        }] }); })();
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */
class NgbCarousel {
    constructor(config, _platformId, _ngZone, _cd, _container) {
        this._platformId = _platformId;
        this._ngZone = _ngZone;
        this._cd = _cd;
        this._container = _container;
        this.NgbSlideEventSource = NgbSlideEventSource;
        this._destroy$ = new Subject();
        this._interval$ = new BehaviorSubject(0);
        this._mouseHover$ = new BehaviorSubject(false);
        this._focused$ = new BehaviorSubject(false);
        this._pauseOnHover$ = new BehaviorSubject(false);
        this._pauseOnFocus$ = new BehaviorSubject(false);
        this._pause$ = new BehaviorSubject(false);
        this._wrap$ = new BehaviorSubject(false);
        /**
         * An event emitted just before the slide transition starts.
         *
         * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
         */
        this.slide = new EventEmitter();
        /**
         * An event emitted right after the slide transition is completed.
         *
         * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
         *
         * @since 8.0.0
         */
        this.slid = new EventEmitter();
        /*
         * Keep the ids of the panels currently transitionning
         * in order to allow only the transition revertion
         */
        this._transitionIds = null;
        this.animation = config.animation;
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
        this.pauseOnHover = config.pauseOnHover;
        this.pauseOnFocus = config.pauseOnFocus;
        this.showNavigationArrows = config.showNavigationArrows;
        this.showNavigationIndicators = config.showNavigationIndicators;
    }
    /**
     * Time in milliseconds before the next slide is shown.
     */
    set interval(value) {
        this._interval$.next(value);
    }
    get interval() { return this._interval$.value; }
    /**
     * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
     */
    set wrap(value) {
        this._wrap$.next(value);
    }
    get wrap() { return this._wrap$.value; }
    /**
     * If `true`, will pause slide switching when mouse cursor hovers the slide.
     *
     * @since 2.2.0
     */
    set pauseOnHover(value) {
        this._pauseOnHover$.next(value);
    }
    get pauseOnHover() { return this._pauseOnHover$.value; }
    /**
     * If `true`, will pause slide switching when the focus is inside the carousel.
     */
    set pauseOnFocus(value) {
        this._pauseOnFocus$.next(value);
    }
    get pauseOnFocus() { return this._pauseOnFocus$.value; }
    set mouseHover(value) { this._mouseHover$.next(value); }
    get mouseHover() { return this._mouseHover$.value; }
    set focused(value) { this._focused$.next(value); }
    get focused() { return this._focused$.value; }
    arrowLeft() {
        this.focus();
        this.prev(NgbSlideEventSource.ARROW_LEFT);
    }
    arrowRight() {
        this.focus();
        this.next(NgbSlideEventSource.ARROW_RIGHT);
    }
    ngAfterContentInit() {
        // setInterval() doesn't play well with SSR and protractor,
        // so we should run it in the browser and outside Angular
        if (isPlatformBrowser(this._platformId)) {
            this._ngZone.runOutsideAngular(() => {
                const hasNextSlide$ = combineLatest([
                    this.slide.pipe(map(slideEvent => slideEvent.current), startWith(this.activeId)),
                    this._wrap$, this.slides.changes.pipe(startWith(null))
                ])
                    .pipe(map(([currentSlideId, wrap]) => {
                    const slideArr = this.slides.toArray();
                    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
                    return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
                }), distinctUntilChanged());
                combineLatest([
                    this._pause$, this._pauseOnHover$, this._mouseHover$, this._pauseOnFocus$, this._focused$, this._interval$,
                    hasNextSlide$
                ])
                    .pipe(map(([pause, pauseOnHover, mouseHover, pauseOnFocus, focused, interval, hasNextSlide]) => ((pause || (pauseOnHover && mouseHover) || (pauseOnFocus && focused) || !hasNextSlide) ?
                    0 :
                    interval)), distinctUntilChanged(), switchMap(interval => interval > 0 ? timer(interval, interval) : NEVER), takeUntil(this._destroy$))
                    .subscribe(() => this._ngZone.run(() => this.next(NgbSlideEventSource.TIMER)));
            });
        }
        this.slides.changes.pipe(takeUntil(this._destroy$)).subscribe(() => {
            var _a;
            (_a = this._transitionIds) === null || _a === void 0 ? void 0 : _a.forEach(id => ngbCompleteTransition(this._getSlideElement(id)));
            this._transitionIds = null;
            this._cd.markForCheck();
            // The following code need to be done asynchronously, after the dom becomes stable,
            // otherwise all changes will be undone.
            this._ngZone.onStable.pipe(take(1)).subscribe(() => {
                for (const { id } of this.slides) {
                    const element = this._getSlideElement(id);
                    if (id === this.activeId) {
                        element.classList.add('active');
                    }
                    else {
                        element.classList.remove('active');
                    }
                }
            });
        });
    }
    ngAfterContentChecked() {
        let activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : '');
    }
    ngAfterViewInit() {
        // Initialize the 'active' class (not managed by the template)
        if (this.activeId) {
            const element = this._getSlideElement(this.activeId);
            if (element) {
                element.classList.add('active');
            }
        }
    }
    ngOnDestroy() { this._destroy$.next(); }
    /**
     * Navigates to a slide with the specified identifier.
     */
    select(slideId, source) {
        this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
    }
    /**
     * Navigates to the previous slide.
     */
    prev(source) {
        this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT, source);
    }
    /**
     * Navigates to the next slide.
     */
    next(source) {
        this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT, source);
    }
    /**
     * Pauses cycling through the slides.
     */
    pause() { this._pause$.next(true); }
    /**
     * Restarts cycling through the slides from left to right.
     */
    cycle() { this._pause$.next(false); }
    /**
     * Set the focus on the carousel.
     */
    focus() { this._container.nativeElement.focus(); }
    _cycleToSelected(slideIdx, direction, source) {
        const transitionIds = this._transitionIds;
        if (transitionIds && (transitionIds[0] !== slideIdx || transitionIds[1] !== this.activeId)) {
            // Revert prevented
            return;
        }
        let selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide && selectedSlide.id !== this.activeId) {
            this._transitionIds = [this.activeId, slideIdx];
            this.slide.emit({ prev: this.activeId, current: selectedSlide.id, direction: direction, paused: this._pause$.value, source });
            const options = {
                animation: this.animation,
                runningTransition: 'stop',
                context: { direction },
            };
            const transitions = [];
            const activeSlide = this._getSlideById(this.activeId);
            if (activeSlide) {
                const activeSlideTransition = ngbRunTransition(this._ngZone, this._getSlideElement(activeSlide.id), ngbCarouselTransitionOut, options);
                activeSlideTransition.subscribe(() => { activeSlide.slid.emit({ isShown: false, direction, source }); });
                transitions.push(activeSlideTransition);
            }
            const previousId = this.activeId;
            this.activeId = selectedSlide.id;
            const nextSlide = this._getSlideById(this.activeId);
            const transition = ngbRunTransition(this._ngZone, this._getSlideElement(selectedSlide.id), ngbCarouselTransitionIn, options);
            transition.subscribe(() => { nextSlide === null || nextSlide === void 0 ? void 0 : nextSlide.slid.emit({ isShown: true, direction, source }); });
            transitions.push(transition);
            zip(...transitions).pipe(take(1)).subscribe(() => {
                this._transitionIds = null;
                this.slid.emit({ prev: previousId, current: selectedSlide.id, direction: direction, paused: this._pause$.value, source });
            });
        }
        // we get here after the interval fires or any external API call like next(), prev() or select()
        this._cd.markForCheck();
    }
    _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
        const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
        const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
        return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
    }
    _getSlideById(slideId) {
        return this.slides.find(slide => slide.id === slideId) || null;
    }
    _getSlideIdxById(slideId) {
        const slide = this._getSlideById(slideId);
        return slide != null ? this.slides.toArray().indexOf(slide) : -1;
    }
    _getNextSlide(currentSlideId) {
        const slideArr = this.slides.toArray();
        const currentSlideIdx = this._getSlideIdxById(currentSlideId);
        const isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    }
    _getPrevSlide(currentSlideId) {
        const slideArr = this.slides.toArray();
        const currentSlideIdx = this._getSlideIdxById(currentSlideId);
        const isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    }
    _getSlideElement(slideId) {
        return this._container.nativeElement.querySelector(`#slide-${slideId}`);
    }
}
NgbCarousel.ɵfac = function NgbCarousel_Factory(t) { return new (t || NgbCarousel)(ɵngcc0.ɵɵdirectiveInject(NgbCarouselConfig), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbCarousel.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbCarousel, selectors: [["ngb-carousel"]], contentQueries: function NgbCarousel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbSlide, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slides = _t);
    } }, hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"], hostVars: 3, hostBindings: function NgbCarousel_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown.arrowLeft", function NgbCarousel_keydown_arrowLeft_HostBindingHandler() { return ctx.keyboard && ctx.arrowLeft(); })("keydown.arrowRight", function NgbCarousel_keydown_arrowRight_HostBindingHandler() { return ctx.keyboard && ctx.arrowRight(); })("mouseenter", function NgbCarousel_mouseenter_HostBindingHandler() { return ctx.mouseHover = true; })("mouseleave", function NgbCarousel_mouseleave_HostBindingHandler() { return ctx.mouseHover = false; })("focusin", function NgbCarousel_focusin_HostBindingHandler() { return ctx.focused = true; })("focusout", function NgbCarousel_focusout_HostBindingHandler() { return ctx.focused = false; });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-activedescendant", "slide-" + ctx.activeId);
        ɵngcc0.ɵɵstyleProp("display", "block");
    } }, inputs: { animation: "animation", interval: "interval", wrap: "wrap", keyboard: "keyboard", pauseOnHover: "pauseOnHover", pauseOnFocus: "pauseOnFocus", showNavigationArrows: "showNavigationArrows", showNavigationIndicators: "showNavigationIndicators", activeId: "activeId" }, outputs: { slide: "slide", slid: "slid" }, exportAs: ["ngbCarousel"], decls: 6, vars: 6, consts: function () { let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Currently selected slide number read by screen reader
         */
        const MSG_EXTERNAL_ngb_carousel_slide_number$$FESM2015_NG_BOOTSTRAP_JS__5 = goog.getMsg(" Slide {$interpolation} of {$interpolation_1} ", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_4 = MSG_EXTERNAL_ngb_carousel_slide_number$$FESM2015_NG_BOOTSTRAP_JS__5;
    }
    else {
        i18n_4 = $localize `:Currently selected slide number read by screen reader@@ngb.carousel.slide-number␟a65b1b49aa7dd8c4f3004da6a8c2241814dae621␟783273603869937627: Slide ${"\uFFFD0\uFFFD"}:INTERPOLATION: of ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_carousel_previous$$FESM2015_NG_BOOTSTRAP_JS__7 = goog.getMsg("Previous");
        i18n_6 = MSG_EXTERNAL_ngb_carousel_previous$$FESM2015_NG_BOOTSTRAP_JS__7;
    }
    else {
        i18n_6 = $localize `:@@ngb.carousel.previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_carousel_next$$FESM2015_NG_BOOTSTRAP_JS__9 = goog.getMsg("Next");
        i18n_8 = MSG_EXTERNAL_ngb_carousel_next$$FESM2015_NG_BOOTSTRAP_JS__9;
    }
    else {
        i18n_8 = $localize `:@@ngb.carousel.next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } return [["role", "tablist", 1, "carousel-indicators"], ["role", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], ["class", "carousel-control-prev", "role", "button", 3, "click", 4, "ngIf"], ["class", "carousel-control-next", "role", "button", 3, "click", 4, "ngIf"], ["role", "tab", 3, "click"], ["role", "tabpanel", 1, "carousel-item", 3, "id"], [1, "sr-only"], i18n_4, [3, "ngTemplateOutlet"], ["role", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], i18n_6, ["role", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], i18n_8]; }, template: function NgbCarousel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ol", 0);
        ɵngcc0.ɵɵtemplate(1, NgbCarousel_li_1_Template, 1, 5, "li", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NgbCarousel_div_3_Template, 4, 4, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NgbCarousel_a_4_Template, 4, 0, "a", 4);
        ɵngcc0.ɵɵtemplate(5, NgbCarousel_a_5_Template, 4, 0, "a", 5);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("sr-only", !ctx.showNavigationIndicators);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.slides);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.slides);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showNavigationArrows);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showNavigationArrows);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NgbCarousel.ctorParameters = () => [
    { type: NgbCarouselConfig },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NgbCarousel.propDecorators = {
    slides: [{ type: ContentChildren, args: [NgbSlide,] }],
    animation: [{ type: Input }],
    activeId: [{ type: Input }],
    interval: [{ type: Input }],
    wrap: [{ type: Input }],
    keyboard: [{ type: Input }],
    pauseOnHover: [{ type: Input }],
    pauseOnFocus: [{ type: Input }],
    showNavigationArrows: [{ type: Input }],
    showNavigationIndicators: [{ type: Input }],
    slide: [{ type: Output }],
    slid: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCarousel, [{
        type: Component,
        args: [{
                selector: 'ngb-carousel',
                exportAs: 'ngbCarousel',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'carousel slide',
                    '[style.display]': '"block"',
                    'tabIndex': '0',
                    '(keydown.arrowLeft)': 'keyboard && arrowLeft()',
                    '(keydown.arrowRight)': 'keyboard && arrowRight()',
                    '(mouseenter)': 'mouseHover = true',
                    '(mouseleave)': 'mouseHover = false',
                    '(focusin)': 'focused = true',
                    '(focusout)': 'focused = false',
                    '[attr.aria-activedescendant]': `'slide-' + activeId`
                },
                template: `
    <ol class="carousel-indicators" [class.sr-only]="!showNavigationIndicators" role="tablist">
      <li *ngFor="let slide of slides" [class.active]="slide.id === activeId"
          role="tab" [attr.aria-labelledby]="'slide-' + slide.id" [attr.aria-controls]="'slide-' + slide.id"
          [attr.aria-selected]="slide.id === activeId"
          (click)="focus();select(slide.id, NgbSlideEventSource.INDICATOR);"></li>
    </ol>
    <div class="carousel-inner">
      <div *ngFor="let slide of slides; index as i; count as c" class="carousel-item" [id]="'slide-' + slide.id" role="tabpanel">
        <span class="sr-only" i18n="Currently selected slide number read by screen reader@@ngb.carousel.slide-number">
          Slide {{i + 1}} of {{c}}
        </span>
        <ng-template [ngTemplateOutlet]="slide.tplRef"></ng-template>
      </div>
    </div>
    <a class="carousel-control-prev" role="button" (click)="arrowLeft()" *ngIf="showNavigationArrows">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only" i18n="@@ngb.carousel.previous">Previous</span>
    </a>
    <a class="carousel-control-next" role="button" (click)="arrowRight()" *ngIf="showNavigationArrows">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only" i18n="@@ngb.carousel.next">Next</span>
    </a>
  `
            }]
    }], function () { return [{ type: NgbCarouselConfig }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { slide: [{
            type: Output
        }], slid: [{
            type: Output
        }], animation: [{
            type: Input
        }], interval: [{
            type: Input
        }], wrap: [{
            type: Input
        }], keyboard: [{
            type: Input
        }], pauseOnHover: [{
            type: Input
        }], pauseOnFocus: [{
            type: Input
        }], showNavigationArrows: [{
            type: Input
        }], showNavigationIndicators: [{
            type: Input
        }], activeId: [{
            type: Input
        }], slides: [{
            type: ContentChildren,
            args: [NgbSlide]
        }] }); })();
var NgbSlideEventSource;
(function (NgbSlideEventSource) {
    NgbSlideEventSource["TIMER"] = "timer";
    NgbSlideEventSource["ARROW_LEFT"] = "arrowLeft";
    NgbSlideEventSource["ARROW_RIGHT"] = "arrowRight";
    NgbSlideEventSource["INDICATOR"] = "indicator";
})(NgbSlideEventSource || (NgbSlideEventSource = {}));
const NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];

class NgbCarouselModule {
}
NgbCarouselModule.ɵfac = function NgbCarouselModule_Factory(t) { return new (t || NgbCarouselModule)(); };
NgbCarouselModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbCarouselModule });
NgbCarouselModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCarouselModule, [{
        type: NgModule,
        args: [{ declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [CommonModule] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbCarouselModule, { declarations: function () { return [NgbCarousel, NgbSlide]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbCarousel, NgbSlide]; } }); })();

/**
 * A configuration service for the [NgbCollapse](#/components/collapse/api#NgbCollapse) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all collapses used in the application.
 */
class NgbCollapseConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbCollapseConfig.ɵfac = function NgbCollapseConfig_Factory(t) { return new (t || NgbCollapseConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbCollapseConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbCollapseConfig_Factory() { return new NgbCollapseConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbCollapseConfig, providedIn: "root" });
NgbCollapseConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCollapseConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

/**
 * A directive to provide a simple way of hiding and showing elements on the page.
 */
class NgbCollapse {
    constructor(_element, config, _zone) {
        this._element = _element;
        this._zone = _zone;
        /**
         * If `true`, will collapse the element or show it otherwise.
         */
        this.collapsed = false;
        this.ngbCollapseChange = new EventEmitter();
        /**
         * An event emitted when the collapse element is shown, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the collapse element is hidden, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        this.animation = config.animation;
    }
    ngOnInit() { this._runTransition(this.collapsed, false); }
    ngOnChanges({ collapsed }) {
        if (!collapsed.firstChange) {
            this._runTransitionWithEvents(this.collapsed, this.animation);
        }
    }
    /**
     * Triggers collapsing programmatically.
     *
     * If there is a collapsing transition running already, it will be reversed.
     * If the animations are turned off this happens synchronously.
     *
     * @since 8.0.0
     */
    toggle(open = this.collapsed) {
        this.collapsed = !open;
        this.ngbCollapseChange.next(this.collapsed);
        this._runTransitionWithEvents(this.collapsed, this.animation);
    }
    _runTransition(collapsed, animation) {
        return ngbRunTransition(this._zone, this._element.nativeElement, ngbCollapsingTransition, { animation, runningTransition: 'stop', context: { direction: collapsed ? 'hide' : 'show' } });
    }
    _runTransitionWithEvents(collapsed, animation) {
        this._runTransition(collapsed, animation).subscribe(() => {
            if (collapsed) {
                this.hidden.emit();
            }
            else {
                this.shown.emit();
            }
        });
    }
}
NgbCollapse.ɵfac = function NgbCollapse_Factory(t) { return new (t || NgbCollapse)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgbCollapseConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NgbCollapse.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbCollapse, selectors: [["", "ngbCollapse", ""]], inputs: { collapsed: ["ngbCollapse", "collapsed"], animation: "animation" }, outputs: { ngbCollapseChange: "ngbCollapseChange", shown: "shown", hidden: "hidden" }, exportAs: ["ngbCollapse"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NgbCollapse.ctorParameters = () => [
    { type: ElementRef },
    { type: NgbCollapseConfig },
    { type: NgZone }
];
NgbCollapse.propDecorators = {
    animation: [{ type: Input }],
    collapsed: [{ type: Input, args: ['ngbCollapse',] }],
    ngbCollapseChange: [{ type: Output }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCollapse, [{
        type: Directive,
        args: [{ selector: '[ngbCollapse]', exportAs: 'ngbCollapse' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NgbCollapseConfig }, { type: ɵngcc0.NgZone }]; }, { collapsed: [{
            type: Input,
            args: ['ngbCollapse']
        }], ngbCollapseChange: [{
            type: Output
        }], shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }], animation: [{
            type: Input
        }] }); })();

class NgbCollapseModule {
}
NgbCollapseModule.ɵfac = function NgbCollapseModule_Factory(t) { return new (t || NgbCollapseModule)(); };
NgbCollapseModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbCollapseModule });
NgbCollapseModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCollapseModule, [{
        type: NgModule,
        args: [{ declarations: [NgbCollapse], exports: [NgbCollapse] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbCollapseModule, { declarations: [NgbCollapse], exports: [NgbCollapse] }); })();

/**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * @since 3.0.0
 */
class NgbDate {
    constructor(year, month, day) {
        this.year = isInteger(year) ? year : null;
        this.month = isInteger(month) ? month : null;
        this.day = isInteger(day) ? day : null;
    }
    /**
     * A **static method** that creates a new date object from the `NgbDateStruct`,
     *
     * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
     *
     * If the `date` is already of `NgbDate` type, the method will return the same object.
     */
    static from(date) {
        if (date instanceof NgbDate) {
            return date;
        }
        return date ? new NgbDate(date.year, date.month, date.day) : null;
    }
    /**
     * Checks if the current date is equal to another date.
     */
    equals(other) {
        return other != null && this.year === other.year && this.month === other.month && this.day === other.day;
    }
    /**
     * Checks if the current date is before another date.
     */
    before(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    }
    /**
     * Checks if the current date is after another date.
     */
    after(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    }
}

function fromJSDate(jsDate) {
    return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
function NGB_DATEPICKER_CALENDAR_FACTORY() {
    return new NgbCalendarGregorian();
}
/**
 * A service that represents the calendar used by the datepicker.
 *
 * The default implementation uses the Gregorian calendar. You can inject it in your own
 * implementations if necessary to simplify `NgbDate` calculations.
 */
class NgbCalendar {
}
NgbCalendar.ɵfac = function NgbCalendar_Factory(t) { return new (t || NgbCalendar)(); };
NgbCalendar.ɵprov = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_CALENDAR_FACTORY, token: NgbCalendar, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCalendar, [{
        type: Injectable,
        args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_CALENDAR_FACTORY }]
    }], null, null); })();
class NgbCalendarGregorian extends NgbCalendar {
    getDaysPerWeek() { return 7; }
    getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    getWeeksPerMonth() { return 6; }
    getNext(date, period = 'd', number = 1) {
        let jsDate = toJSDate(date);
        let checkMonth = true;
        let expectedMonth = jsDate.getMonth();
        switch (period) {
            case 'y':
                jsDate.setFullYear(jsDate.getFullYear() + number);
                break;
            case 'm':
                expectedMonth += number;
                jsDate.setMonth(expectedMonth);
                expectedMonth = expectedMonth % 12;
                if (expectedMonth < 0) {
                    expectedMonth = expectedMonth + 12;
                }
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                checkMonth = false;
                break;
            default:
                return date;
        }
        if (checkMonth && jsDate.getMonth() !== expectedMonth) {
            // this means the destination month has less days than the initial month
            // let's go back to the end of the previous month:
            jsDate.setDate(0);
        }
        return fromJSDate(jsDate);
    }
    getPrev(date, period = 'd', number = 1) { return this.getNext(date, period, -number); }
    getWeekday(date) {
        let jsDate = toJSDate(date);
        let day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    }
    getWeekNumber(week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        let date = week[thursdayIndex];
        const jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        const time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    }
    getToday() { return fromJSDate(new Date()); }
    isValid(date) {
        if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
            return false;
        }
        // year 0 doesn't exist in Gregorian calendar
        if (date.year === 0) {
            return false;
        }
        const jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    }
}
NgbCalendarGregorian.ɵfac = /*@__PURE__*/ function () { let ɵNgbCalendarGregorian_BaseFactory; return function NgbCalendarGregorian_Factory(t) { return (ɵNgbCalendarGregorian_BaseFactory || (ɵNgbCalendarGregorian_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbCalendarGregorian)))(t || NgbCalendarGregorian); }; }();
NgbCalendarGregorian.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbCalendarGregorian, factory: NgbCalendarGregorian.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCalendarGregorian, [{
        type: Injectable
    }], null, null); })();

function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
function isChangedMonth(prev, next) {
    return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
    }
}
function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return minDate;
    }
    if (date && maxDate && date.after(maxDate)) {
        return maxDate;
    }
    return date || null;
}
function isDateSelectable(date, state) {
    const { minDate, maxDate, disabled, markDisabled } = state;
    // clang-format off
    return !(date === null ||
        date === undefined ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    let months = calendar.getMonths(date.year);
    if (minDate && date.year === minDate.year) {
        const index = months.findIndex(month => month === minDate.month);
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        const index = months.findIndex(month => month === maxDate.month);
        months = months.slice(0, index + 1);
    }
    return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    const start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
    const end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
    const length = end - start + 1;
    const numbers = Array(length);
    for (let i = 0; i < length; i++) {
        numbers[i] = start + i;
    }
    return numbers;
}
function nextMonthDisabled(calendar, date, maxDate) {
    const nextDate = Object.assign(calendar.getNext(date, 'm'), { day: 1 });
    return maxDate != null && nextDate.after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
    const prevDate = Object.assign(calendar.getPrev(date, 'm'), { day: 1 });
    return minDate != null && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
    const { displayMonths, months } = state;
    // move old months to a temporary array
    const monthsToReuse = months.splice(0, months.length);
    // generate new first dates, nullify or reuse months
    const firstDates = Array.from({ length: displayMonths }, (_, i) => {
        const firstDate = Object.assign(calendar.getNext(date, 'm', i), { day: 1 });
        months[i] = null;
        if (!force) {
            const reusedIndex = monthsToReuse.findIndex(month => month.firstDate.equals(firstDate));
            // move reused month back to months
            if (reusedIndex !== -1) {
                months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
            }
        }
        return firstDate;
    });
    // rebuild nullified months
    firstDates.forEach((firstDate, i) => {
        if (months[i] === null) {
            months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || {});
        }
    });
    return months;
}
function buildMonth(calendar, date, state, i18n, month = {}) {
    const { dayTemplateData, minDate, maxDate, firstDayOfWeek, markDisabled, outsideDays, weekdayWidth, weekdaysVisible } = state;
    const calendarToday = calendar.getToday();
    month.firstDate = null;
    month.lastDate = null;
    month.number = date.month;
    month.year = date.year;
    month.weeks = month.weeks || [];
    month.weekdays = month.weekdays || [];
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // clearing weekdays, if not visible
    if (!weekdaysVisible) {
        month.weekdays.length = 0;
    }
    // month has weeks
    for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
        let weekObject = month.weeks[week];
        if (!weekObject) {
            weekObject = month.weeks[week] = { number: 0, days: [], collapsed: true };
        }
        const days = weekObject.days;
        // week has days
        for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0 && weekdaysVisible) {
                month.weekdays[day] = i18n.getWeekdayLabel(calendar.getWeekday(date), weekdayWidth);
            }
            const newDate = new NgbDate(date.year, date.month, date.day);
            const nextDate = calendar.getNext(newDate);
            const ariaLabel = i18n.getDayAriaLabel(newDate);
            // marking date as disabled
            let disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // today
            let today = newDate.equals(calendarToday);
            // adding user-provided data to the context
            let contextUserData = dayTemplateData ? dayTemplateData(newDate, { month: month.number, year: month.year }) : undefined;
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            let dayObject = days[day];
            if (!dayObject) {
                dayObject = days[day] = {};
            }
            dayObject.date = newDate;
            dayObject.context = Object.assign(dayObject.context || {}, {
                $implicit: newDate,
                date: newDate,
                data: contextUserData,
                currentMonth: month.number,
                currentYear: month.year, disabled,
                focused: false,
                selected: false, today
            });
            dayObject.tabindex = -1;
            dayObject.ariaLabel = ariaLabel;
            dayObject.hidden = false;
            date = nextDate;
        }
        weekObject.number = calendar.getWeekNumber(days.map(day => day.date), firstDayOfWeek);
        // marking week as collapsed
        weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number &&
            days[days.length - 1].date.month !== month.number;
    }
    return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    const daysPerWeek = calendar.getDaysPerWeek();
    const firstMonthDate = new NgbDate(date.year, date.month, 1);
    const dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}

function NGB_DATEPICKER_18N_FACTORY(locale) {
    return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 */
class NgbDatepickerI18n {
    /**
     * Returns the text label to display above the day view.
     *
     * @since 9.1.0
     */
    getMonthLabel(date) {
        return `${this.getMonthFullName(date.month, date.year)} ${this.getYearNumerals(date.year)}`;
    }
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * @since 3.0.0
     */
    getDayNumerals(date) { return `${date.day}`; }
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * @since 3.0.0
     */
    getWeekNumerals(weekNumber) { return `${weekNumber}`; }
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * @since 3.0.0
     */
    getYearNumerals(year) { return `${year}`; }
    /**
     * Returns the week label to display in the heading of the month view.
     *
     * @since 9.1.0
     */
    getWeekLabel() { return ''; }
}
NgbDatepickerI18n.ɵfac = function NgbDatepickerI18n_Factory(t) { return new (t || NgbDatepickerI18n)(); };
NgbDatepickerI18n.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbDatepickerI18n_Factory() { return NGB_DATEPICKER_18N_FACTORY(i0.ɵɵinject(i0.LOCALE_ID)); }, token: NgbDatepickerI18n, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerI18n, [{
        type: Injectable,
        args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [LOCALE_ID] }]
    }], null, null); })();
/**
 * A service providing default implementation for the datepicker i18n.
 * It can be used as a base implementation if necessary.
 *
 * @since 9.1.0
 */
class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
    constructor(_locale) {
        super();
        this._locale = _locale;
        this._monthsShort = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
        this._monthsFull = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Wide);
    }
    getWeekdayLabel(weekday, width) {
        const weekdaysStartingOnSunday = getLocaleDayNames(this._locale, FormStyle.Standalone, width === undefined ? TranslationWidth.Short : width);
        const weekdays = weekdaysStartingOnSunday.map((day, index) => weekdaysStartingOnSunday[(index + 1) % 7]);
        return weekdays[weekday - 1] || '';
    }
    getMonthShortName(month) { return this._monthsShort[month - 1] || ''; }
    getMonthFullName(month) { return this._monthsFull[month - 1] || ''; }
    getDayAriaLabel(date) {
        const jsDate = new Date(date.year, date.month - 1, date.day);
        return formatDate(jsDate, 'fullDate', this._locale);
    }
}
NgbDatepickerI18nDefault.ɵfac = function NgbDatepickerI18nDefault_Factory(t) { return new (t || NgbDatepickerI18nDefault)(ɵngcc0.ɵɵinject(LOCALE_ID)); };
NgbDatepickerI18nDefault.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbDatepickerI18nDefault, factory: NgbDatepickerI18nDefault.ɵfac });
NgbDatepickerI18nDefault.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerI18nDefault, [{
        type: Injectable
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();

class NgbDatepickerService {
    constructor(_calendar, _i18n) {
        this._calendar = _calendar;
        this._i18n = _i18n;
        this._VALIDATORS = {
            dayTemplateData: (dayTemplateData) => {
                if (this._state.dayTemplateData !== dayTemplateData) {
                    return { dayTemplateData };
                }
            },
            displayMonths: (displayMonths) => {
                displayMonths = toInteger(displayMonths);
                if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                    return { displayMonths };
                }
            },
            disabled: (disabled) => {
                if (this._state.disabled !== disabled) {
                    return { disabled };
                }
            },
            firstDayOfWeek: (firstDayOfWeek) => {
                firstDayOfWeek = toInteger(firstDayOfWeek);
                if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                    return { firstDayOfWeek };
                }
            },
            focusVisible: (focusVisible) => {
                if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                    return { focusVisible };
                }
            },
            markDisabled: (markDisabled) => {
                if (this._state.markDisabled !== markDisabled) {
                    return { markDisabled };
                }
            },
            maxDate: (date) => {
                const maxDate = this.toValidDate(date, null);
                if (isChangedDate(this._state.maxDate, maxDate)) {
                    return { maxDate };
                }
            },
            minDate: (date) => {
                const minDate = this.toValidDate(date, null);
                if (isChangedDate(this._state.minDate, minDate)) {
                    return { minDate };
                }
            },
            navigation: (navigation) => {
                if (this._state.navigation !== navigation) {
                    return { navigation };
                }
            },
            outsideDays: (outsideDays) => {
                if (this._state.outsideDays !== outsideDays) {
                    return { outsideDays };
                }
            },
            weekdays: (weekdays) => {
                const weekdayWidth = weekdays === true || weekdays === false ? TranslationWidth.Short : weekdays;
                const weekdaysVisible = weekdays === true || weekdays === false ? weekdays : true;
                if (this._state.weekdayWidth !== weekdayWidth || this._state.weekdaysVisible !== weekdaysVisible) {
                    return { weekdayWidth, weekdaysVisible };
                }
            }
        };
        this._model$ = new Subject();
        this._dateSelect$ = new Subject();
        this._state = {
            dayTemplateData: null,
            markDisabled: null,
            maxDate: null,
            minDate: null,
            disabled: false,
            displayMonths: 1,
            firstDate: null,
            firstDayOfWeek: 1,
            lastDate: null,
            focusDate: null,
            focusVisible: false,
            months: [],
            navigation: 'select',
            outsideDays: 'visible',
            prevDisabled: false,
            nextDisabled: false,
            selectedDate: null,
            selectBoxes: { years: [], months: [] },
            weekdayWidth: TranslationWidth.Short,
            weekdaysVisible: true
        };
    }
    get model$() { return this._model$.pipe(filter(model => model.months.length > 0)); }
    get dateSelect$() { return this._dateSelect$.pipe(filter(date => date !== null)); }
    set(options) {
        let patch = Object.keys(options)
            .map(key => this._VALIDATORS[key](options[key]))
            .reduce((obj, part) => (Object.assign(Object.assign({}, obj), part)), {});
        if (Object.keys(patch).length > 0) {
            this._nextState(patch);
        }
    }
    focus(date) {
        const focusedDate = this.toValidDate(date, null);
        if (focusedDate != null && !this._state.disabled && isChangedDate(this._state.focusDate, focusedDate)) {
            this._nextState({ focusDate: date });
        }
    }
    focusSelect() {
        if (isDateSelectable(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, { emitEvent: true });
        }
    }
    open(date) {
        const firstDate = this.toValidDate(date, this._calendar.getToday());
        if (firstDate != null && !this._state.disabled &&
            (!this._state.firstDate || isChangedMonth(this._state.firstDate, firstDate))) {
            this._nextState({ firstDate });
        }
    }
    select(date, options = {}) {
        const selectedDate = this.toValidDate(date, null);
        if (selectedDate != null && !this._state.disabled) {
            if (isChangedDate(this._state.selectedDate, selectedDate)) {
                this._nextState({ selectedDate });
            }
            if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
                this._dateSelect$.next(selectedDate);
            }
        }
    }
    toValidDate(date, defaultValue) {
        const ngbDate = NgbDate.from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    }
    getMonth(struct) {
        for (let month of this._state.months) {
            if (struct.month === month.number && struct.year === month.year) {
                return month;
            }
        }
        throw new Error(`month ${struct.month} of year ${struct.year} not found`);
    }
    _nextState(patch) {
        const newState = this._updateState(patch);
        this._patchContexts(newState);
        this._state = newState;
        this._model$.next(this._state);
    }
    _patchContexts(state) {
        const { months, displayMonths, selectedDate, focusDate, focusVisible, disabled, outsideDays } = state;
        state.months.forEach(month => {
            month.weeks.forEach(week => {
                week.days.forEach(day => {
                    // patch focus flag
                    if (focusDate) {
                        day.context.focused = focusDate.equals(day.date) && focusVisible;
                    }
                    // calculating tabindex
                    day.tabindex =
                        !disabled && focusDate && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
                    // override context disabled
                    if (disabled === true) {
                        day.context.disabled = true;
                    }
                    // patch selection flag
                    if (selectedDate !== undefined) {
                        day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
                    }
                    // visibility
                    if (month.number !== day.date.month) {
                        day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' ||
                            (displayMonths > 1 && day.date.after(months[0].firstDate) &&
                                day.date.before(months[displayMonths - 1].lastDate));
                    }
                });
            });
        });
    }
    _updateState(patch) {
        // patching fields
        const state = Object.assign({}, this._state, patch);
        let startDate = state.firstDate;
        // min/max dates changed
        if ('minDate' in patch || 'maxDate' in patch) {
            checkMinBeforeMax(state.minDate, state.maxDate);
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // initial rebuild via 'select()'
        if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
        }
        // terminate early if only focus visibility was changed
        if ('focusVisible' in patch) {
            return state;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && state.focusDate && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            const forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch ||
                'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch ||
                'weekdaysVisible' in patch;
            const months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months[0].firstDate;
            state.lastDate = months[months.length - 1].lastDate;
            // reset selected date if 'markDisabled' returns true
            if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
                state.selectedDate = null;
            }
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (!state.focusDate || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
            // adjusting months/years for the select box navigation
            const yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            const monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
            if (state.navigation === 'select') {
                // years ->  boundaries (min/max were changed)
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                    state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
                }
                // months -> when current year or boundaries change
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                    state.selectBoxes.months =
                        generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
                }
            }
            else {
                state.selectBoxes = { years: [], months: [] };
            }
            // updating navigation arrows -> boundaries change (min/max) or month/year changes
            if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
                state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
            }
        }
        return state;
    }
}
NgbDatepickerService.ɵfac = function NgbDatepickerService_Factory(t) { return new (t || NgbDatepickerService)(ɵngcc0.ɵɵinject(NgbCalendar), ɵngcc0.ɵɵinject(NgbDatepickerI18n)); };
NgbDatepickerService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbDatepickerService, factory: NgbDatepickerService.ɵfac });
NgbDatepickerService.ctorParameters = () => [
    { type: NgbCalendar },
    { type: NgbDatepickerI18n }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerService, [{
        type: Injectable
    }], function () { return [{ type: NgbCalendar }, { type: NgbDatepickerI18n }]; }, null); })();

// clang-format on
var NavigationEvent;
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));

/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
class NgbDatepickerConfig {
    constructor() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekNumbers = false;
        this.weekdays = TranslationWidth.Short;
    }
}
NgbDatepickerConfig.ɵfac = function NgbDatepickerConfig_Factory(t) { return new (t || NgbDatepickerConfig)(); };
NgbDatepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbDatepickerConfig_Factory() { return new NgbDatepickerConfig(); }, token: NgbDatepickerConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
    return new NgbDateStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 */
class NgbDateAdapter {
}
NgbDateAdapter.ɵfac = function NgbDateAdapter_Factory(t) { return new (t || NgbDateAdapter)(); };
NgbDateAdapter.ɵprov = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY, token: NgbDateAdapter, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDateAdapter, [{
        type: Injectable,
        args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY }]
    }], null, null); })();
class NgbDateStructAdapter extends NgbDateAdapter {
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    fromModel(date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    toModel(date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    }
}
NgbDateStructAdapter.ɵfac = /*@__PURE__*/ function () { let ɵNgbDateStructAdapter_BaseFactory; return function NgbDateStructAdapter_Factory(t) { return (ɵNgbDateStructAdapter_BaseFactory || (ɵNgbDateStructAdapter_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbDateStructAdapter)))(t || NgbDateStructAdapter); }; }();
NgbDateStructAdapter.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbDateStructAdapter, factory: NgbDateStructAdapter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDateStructAdapter, [{
        type: Injectable
    }], null, null); })();

/**
 * A directive that marks the content template that customizes the way datepicker months are displayed
 *
 * @since 5.3.0
 */
class NgbDatepickerContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbDatepickerContent.ɵfac = function NgbDatepickerContent_Factory(t) { return new (t || NgbDatepickerContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbDatepickerContent.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbDatepickerContent, selectors: [["ng-template", "ngbDatepickerContent", ""]] });
NgbDatepickerContent.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerContent, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbDatepickerContent]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
class NgbDatepicker {
    constructor(_service, _calendar, i18n, config, cd, _elementRef, _ngbDateAdapter, _ngZone) {
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._ngZone = _ngZone;
        this._controlValue = null;
        this._destroyed$ = new Subject();
        this._publicState = {};
        /**
         * An event emitted right before the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new EventEmitter();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * @since 5.2.0
         */
        this.dateSelect = new EventEmitter();
        this.onChange = (_) => { };
        this.onTouched = () => { };
        ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
            'maxDate', 'navigation', 'outsideDays', 'showWeekNumbers', 'startDate', 'weekdays']
            .forEach(input => this[input] = config[input]);
        _service.dateSelect$.pipe(takeUntil(this._destroyed$)).subscribe(date => { this.dateSelect.emit(date); });
        _service.model$.pipe(takeUntil(this._destroyed$)).subscribe(model => {
            const newDate = model.firstDate;
            const oldDate = this.model ? this.model.firstDate : null;
            // update public state
            this._publicState = {
                maxDate: model.maxDate,
                minDate: model.minDate,
                firstDate: model.firstDate,
                lastDate: model.lastDate,
                focusedDate: model.focusDate,
                months: model.months.map(viewModel => viewModel.firstDate)
            };
            let navigationPrevented = false;
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month },
                    preventDefault: () => navigationPrevented = true
                });
                // can't prevent the very first navigation
                if (navigationPrevented && oldDate !== null) {
                    this._service.open(oldDate);
                    return;
                }
            }
            const newSelectedDate = model.selectedDate;
            const newFocusedDate = model.focusDate;
            const oldFocusedDate = this.model ? this.model.focusDate : null;
            this.model = model;
            // handling selection change
            if (isChangedDate(newSelectedDate, this._controlValue)) {
                this._controlValue = newSelectedDate;
                this.onTouched();
                this.onChange(this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // handling focus change
            if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                this.focus();
            }
            cd.markForCheck();
        });
    }
    /**
     *  Returns the readonly public state of the datepicker
     *
     * @since 5.2.0
     */
    get state() { return this._publicState; }
    /**
     *  Returns the calendar service used in the specific datepicker instance.
     *
     *  @since 5.3.0
     */
    get calendar() { return this._calendar; }
    /**
     *  Focuses on given date.
     */
    focusDate(date) { this._service.focus(NgbDate.from(date)); }
    /**
     *  Selects focused date.
     */
    focusSelect() { this._service.focusSelect(); }
    focus() {
        this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            const elementToFocus = this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
            if (elementToFocus) {
                elementToFocus.focus();
            }
        });
    }
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    navigateTo(date) {
        this._service.open(NgbDate.from(date ? date.day ? date : Object.assign(Object.assign({}, date), { day: 1 }) : null));
    }
    ngAfterViewInit() {
        this._ngZone.runOutsideAngular(() => {
            const focusIns$ = fromEvent(this._contentEl.nativeElement, 'focusin');
            const focusOuts$ = fromEvent(this._contentEl.nativeElement, 'focusout');
            const { nativeElement } = this._elementRef;
            // we're changing 'focusVisible' only when entering or leaving months view
            // and ignoring all focus events where both 'target' and 'related' target are day cells
            merge(focusIns$, focusOuts$)
                .pipe(filter(({ target, relatedTarget }) => !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day') &&
                nativeElement.contains(target) && nativeElement.contains(relatedTarget))), takeUntil(this._destroyed$))
                .subscribe(({ type }) => this._ngZone.run(() => this._service.set({ focusVisible: type === 'focusin' })));
        });
    }
    ngOnDestroy() { this._destroyed$.next(); }
    ngOnInit() {
        if (this.model === undefined) {
            const inputs = {};
            ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
                'outsideDays', 'weekdays']
                .forEach(name => inputs[name] = this[name]);
            this._service.set(inputs);
            this.navigateTo(this.startDate);
        }
        if (!this.dayTemplate) {
            this.dayTemplate = this._defaultDayTemplate;
        }
    }
    ngOnChanges(changes) {
        const inputs = {};
        ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
            'outsideDays', 'weekdays']
            .filter(name => name in changes)
            .forEach(name => inputs[name] = this[name]);
        this._service.set(inputs);
        if ('startDate' in changes) {
            const { currentValue, previousValue } = changes.startDate;
            if (isChangedMonth(previousValue, currentValue)) {
                this.navigateTo(this.startDate);
            }
        }
    }
    onDateSelect(date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    }
    onNavigateDateSelect(date) { this._service.open(date); }
    onNavigateEvent(event) {
        switch (event) {
            case NavigationEvent.PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case NavigationEvent.NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(disabled) { this._service.set({ disabled }); }
    writeValue(value) {
        this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
        this._service.select(this._controlValue);
    }
}
NgbDatepicker.ɵfac = function NgbDatepicker_Factory(t) { return new (t || NgbDatepicker)(ɵngcc0.ɵɵdirectiveInject(NgbDatepickerService), ɵngcc0.ɵɵdirectiveInject(NgbCalendar), ɵngcc0.ɵɵdirectiveInject(NgbDatepickerI18n), ɵngcc0.ɵɵdirectiveInject(NgbDatepickerConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgbDateAdapter), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NgbDatepicker.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbDatepicker, selectors: [["ngb-datepicker"]], contentQueries: function NgbDatepicker_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbDatepickerContent, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, viewQuery: function NgbDatepicker_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c10, 7);
        ɵngcc0.ɵɵviewQuery(_c11, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._defaultDayTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentEl = _t.first);
    } }, inputs: { dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", maxDate: "maxDate", minDate: "minDate", navigation: "navigation", outsideDays: "outsideDays", showWeekNumbers: "showWeekNumbers", startDate: "startDate", weekdays: "weekdays" }, outputs: { navigate: "navigate", dateSelect: "dateSelect" }, exportAs: ["ngbDatepicker"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbDatepicker), multi: true }, NgbDatepickerService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 10, vars: 5, consts: [["defaultDayTemplate", ""], ["defaultContentTemplate", ""], [1, "ngb-dp-header"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select", 4, "ngIf"], [1, "ngb-dp-content"], ["content", ""], [3, "ngTemplateOutlet"], ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"], ["class", "ngb-dp-month", 4, "ngFor", "ngForOf"], [1, "ngb-dp-month"], ["class", "ngb-dp-month-name", 4, "ngIf"], [3, "month"], [1, "ngb-dp-month-name"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select"]], template: function NgbDatepicker_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgbDatepicker_ng_template_0_Template, 1, 5, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NgbDatepicker_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(4, "div", 2);
        ɵngcc0.ɵɵtemplate(5, NgbDatepicker_ngb_datepicker_navigation_5_Template, 1, 7, "ngb-datepicker-navigation", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 4, 5);
        ɵngcc0.ɵɵtemplate(8, NgbDatepicker_ng_template_8_Template, 0, 0, "ng-template", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, NgbDatepicker_ng_template_9_Template, 0, 0, "ng-template", 6);
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngIf", ctx.navigation !== "none");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ngb-dp-months", !ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", (ctx.contentTemplate == null ? null : ctx.contentTemplate.templateRef) || _r2);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.footerTemplate);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, NgbDatepickerDayView, ɵngcc1.NgForOf, NgbDatepickerMonth, NgbDatepickerNavigation]; }, styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"], encapsulation: 2, changeDetection: 0 });
NgbDatepicker.ctorParameters = () => [
    { type: NgbDatepickerService },
    { type: NgbCalendar },
    { type: NgbDatepickerI18n },
    { type: NgbDatepickerConfig },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgbDateAdapter },
    { type: NgZone }
];
NgbDatepicker.propDecorators = {
    _defaultDayTemplate: [{ type: ViewChild, args: ['defaultDayTemplate', { static: true },] }],
    _contentEl: [{ type: ViewChild, args: ['content', { static: true },] }],
    contentTemplate: [{ type: ContentChild, args: [NgbDatepickerContent, { static: true },] }],
    dayTemplate: [{ type: Input }],
    dayTemplateData: [{ type: Input }],
    displayMonths: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    footerTemplate: [{ type: Input }],
    markDisabled: [{ type: Input }],
    maxDate: [{ type: Input }],
    minDate: [{ type: Input }],
    navigation: [{ type: Input }],
    outsideDays: [{ type: Input }],
    showWeekNumbers: [{ type: Input }],
    startDate: [{ type: Input }],
    weekdays: [{ type: Input }],
    navigate: [{ type: Output }],
    dateSelect: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepicker, [{
        type: Component,
        args: [{
                exportAs: 'ngbDatepicker',
                selector: 'ngb-datepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-template #defaultDayTemplate let-date="date" let-currentMonth="currentMonth" let-selected="selected"
                 let-disabled="disabled" let-focused="focused">
      <div ngbDatepickerDayView
        [date]="date"
        [currentMonth]="currentMonth"
        [selected]="selected"
        [disabled]="disabled"
        [focused]="focused">
      </div>
    </ng-template>

    <ng-template #defaultContentTemplate>
      <div *ngFor="let month of model.months; let i = index;" class="ngb-dp-month">
        <div *ngIf="navigation === 'none' || (displayMonths > 1 && navigation === 'select')" class="ngb-dp-month-name">
          {{ i18n.getMonthLabel(month.firstDate) }}
        </div>
        <ngb-datepicker-month [month]="month.firstDate"></ngb-datepicker-month>
      </div>
    </ng-template>

    <div class="ngb-dp-header">
      <ngb-datepicker-navigation *ngIf="navigation !== 'none'"
        [date]="model.firstDate!"
        [months]="model.months"
        [disabled]="model.disabled"
        [showSelect]="model.navigation === 'select'"
        [prevDisabled]="model.prevDisabled"
        [nextDisabled]="model.nextDisabled"
        [selectBoxes]="model.selectBoxes"
        (navigate)="onNavigateEvent($event)"
        (select)="onNavigateDateSelect($event)">
      </ngb-datepicker-navigation>
    </div>

    <div class="ngb-dp-content" [class.ngb-dp-months]="!contentTemplate" #content>
      <ng-template [ngTemplateOutlet]="contentTemplate?.templateRef || defaultContentTemplate"></ng-template>
    </div>

    <ng-template [ngTemplateOutlet]="footerTemplate"></ng-template>
  `,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbDatepicker), multi: true }, NgbDatepickerService],
                styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"]
            }]
    }], function () { return [{ type: NgbDatepickerService }, { type: NgbCalendar }, { type: NgbDatepickerI18n }, { type: NgbDatepickerConfig }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: NgbDateAdapter }, { type: ɵngcc0.NgZone }]; }, { navigate: [{
            type: Output
        }], dateSelect: [{
            type: Output
        }], dayTemplate: [{
            type: Input
        }], _defaultDayTemplate: [{
            type: ViewChild,
            args: ['defaultDayTemplate', { static: true }]
        }], _contentEl: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }], contentTemplate: [{
            type: ContentChild,
            args: [NgbDatepickerContent, { static: true }]
        }], dayTemplateData: [{
            type: Input
        }], displayMonths: [{
            type: Input
        }], firstDayOfWeek: [{
            type: Input
        }], footerTemplate: [{
            type: Input
        }], markDisabled: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], minDate: [{
            type: Input
        }], navigation: [{
            type: Input
        }], outsideDays: [{
            type: Input
        }], showWeekNumbers: [{
            type: Input
        }], startDate: [{
            type: Input
        }], weekdays: [{
            type: Input
        }] }); })();

var Key;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["PageUp"] = 33] = "PageUp";
    Key[Key["PageDown"] = 34] = "PageDown";
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));

/**
 * A service that represents the keyboard navigation.
 *
 * Default keyboard shortcuts [are documented in the overview](#/components/datepicker/overview#keyboard-shortcuts)
 *
 * @since 5.2.0
 */
class NgbDatepickerKeyboardService {
    /**
     * Processes a keyboard event.
     */
    processKey(event, datepicker) {
        const { state, calendar } = datepicker;
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.PageUp:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
                break;
            case Key.PageDown:
                datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
                break;
            case Key.End:
                datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
                break;
            case Key.Home:
                datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
                break;
            case Key.ArrowLeft:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', 1));
                break;
            case Key.ArrowUp:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', calendar.getDaysPerWeek()));
                break;
            case Key.ArrowRight:
                datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', 1));
                break;
            case Key.ArrowDown:
                datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', calendar.getDaysPerWeek()));
                break;
            case Key.Enter:
            case Key.Space:
                datepicker.focusSelect();
                break;
            default:
                return;
        }
        event.preventDefault();
        event.stopPropagation();
    }
}
NgbDatepickerKeyboardService.ɵfac = function NgbDatepickerKeyboardService_Factory(t) { return new (t || NgbDatepickerKeyboardService)(); };
NgbDatepickerKeyboardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbDatepickerKeyboardService_Factory() { return new NgbDatepickerKeyboardService(); }, token: NgbDatepickerKeyboardService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerKeyboardService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * A component that renders one month including all the days, weekdays and week numbers. Can be used inside
 * the `<ng-template ngbDatepickerMonths></ng-template>` when you want to customize months layout.
 *
 * For a usage example, see [custom month layout demo](#/components/datepicker/examples#custommonth)
 *
 * @since 5.3.0
 */
class NgbDatepickerMonth {
    constructor(i18n, datepicker, _keyboardService, _service) {
        this.i18n = i18n;
        this.datepicker = datepicker;
        this._keyboardService = _keyboardService;
        this._service = _service;
    }
    /**
     * The first date of month to be rendered.
     *
     * This month must one of the months present in the
     * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
     */
    set month(month) {
        this.viewModel = this._service.getMonth(month);
    }
    onKeyDown(event) { this._keyboardService.processKey(event, this.datepicker); }
    doSelect(day) {
        if (!day.context.disabled && !day.hidden) {
            this.datepicker.onDateSelect(day.date);
        }
    }
}
NgbDatepickerMonth.ɵfac = function NgbDatepickerMonth_Factory(t) { return new (t || NgbDatepickerMonth)(ɵngcc0.ɵɵdirectiveInject(NgbDatepickerI18n), ɵngcc0.ɵɵdirectiveInject(NgbDatepicker), ɵngcc0.ɵɵdirectiveInject(NgbDatepickerKeyboardService), ɵngcc0.ɵɵdirectiveInject(NgbDatepickerService)); };
NgbDatepickerMonth.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbDatepickerMonth, selectors: [["ngb-datepicker-month"]], hostAttrs: ["role", "grid"], hostBindings: function NgbDatepickerMonth_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function NgbDatepickerMonth_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { month: "month" }, decls: 2, vars: 2, consts: [["class", "ngb-dp-week ngb-dp-weekdays", "role", "row", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["role", "row", 1, "ngb-dp-week", "ngb-dp-weekdays"], ["class", "ngb-dp-weekday ngb-dp-showweek small", 4, "ngIf"], ["class", "ngb-dp-weekday small", "role", "columnheader", 4, "ngFor", "ngForOf"], [1, "ngb-dp-weekday", "ngb-dp-showweek", "small"], ["role", "columnheader", 1, "ngb-dp-weekday", "small"], ["class", "ngb-dp-week", "role", "row", 4, "ngIf"], ["role", "row", 1, "ngb-dp-week"], ["class", "ngb-dp-week-number small text-muted", 4, "ngIf"], ["class", "ngb-dp-day", "role", "gridcell", 3, "disabled", "tabindex", "hidden", "ngb-dp-today", "click", 4, "ngFor", "ngForOf"], [1, "ngb-dp-week-number", "small", "text-muted"], ["role", "gridcell", 1, "ngb-dp-day", 3, "tabindex", "click"], [3, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NgbDatepickerMonth_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgbDatepickerMonth_div_0_Template, 3, 2, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NgbDatepickerMonth_ng_template_1_Template, 1, 1, "ng-template", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.viewModel.weekdays.length > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.viewModel.weeks);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], styles: ["ngb-datepicker-month{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}"], encapsulation: 2 });
NgbDatepickerMonth.ctorParameters = () => [
    { type: NgbDatepickerI18n },
    { type: NgbDatepicker },
    { type: NgbDatepickerKeyboardService },
    { type: NgbDatepickerService }
];
NgbDatepickerMonth.propDecorators = {
    month: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerMonth, [{
        type: Component,
        args: [{
                selector: 'ngb-datepicker-month',
                host: { 'role': 'grid', '(keydown)': 'onKeyDown($event)' },
                encapsulation: ViewEncapsulation.None,
                template: `
    <div *ngIf="viewModel.weekdays.length > 0" class="ngb-dp-week ngb-dp-weekdays" role="row">
      <div *ngIf="datepicker.showWeekNumbers" class="ngb-dp-weekday ngb-dp-showweek small">{{ i18n.getWeekLabel() }}</div>
      <div *ngFor="let weekday of viewModel.weekdays" class="ngb-dp-weekday small" role="columnheader">{{ weekday }}</div>
    </div>
    <ng-template ngFor let-week [ngForOf]="viewModel.weeks">
      <div *ngIf="!week.collapsed" class="ngb-dp-week" role="row">
        <div *ngIf="datepicker.showWeekNumbers" class="ngb-dp-week-number small text-muted">{{ i18n.getWeekNumerals(week.number) }}</div>
        <div *ngFor="let day of week.days" (click)="doSelect(day); $event.preventDefault()" class="ngb-dp-day" role="gridcell"
             [class.disabled]="day.context.disabled"
             [tabindex]="day.tabindex"
             [class.hidden]="day.hidden"
             [class.ngb-dp-today]="day.context.today"
             [attr.aria-label]="day.ariaLabel">
          <ng-template [ngIf]="!day.hidden">
            <ng-template [ngTemplateOutlet]="datepicker.dayTemplate" [ngTemplateOutletContext]="day.context"></ng-template>
          </ng-template>
        </div>
      </div>
    </ng-template>
  `,
                styles: ["ngb-datepicker-month{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}"]
            }]
    }], function () { return [{ type: NgbDatepickerI18n }, { type: NgbDatepicker }, { type: NgbDatepickerKeyboardService }, { type: NgbDatepickerService }]; }, { month: [{
            type: Input
        }] }); })();

class NgbDatepickerNavigation {
    constructor(i18n) {
        this.i18n = i18n;
        this.navigation = NavigationEvent;
        this.months = [];
        this.navigate = new EventEmitter();
        this.select = new EventEmitter();
    }
    onClickPrev(event) {
        event.currentTarget.focus();
        this.navigate.emit(this.navigation.PREV);
    }
    onClickNext(event) {
        event.currentTarget.focus();
        this.navigate.emit(this.navigation.NEXT);
    }
}
NgbDatepickerNavigation.ɵfac = function NgbDatepickerNavigation_Factory(t) { return new (t || NgbDatepickerNavigation)(ɵngcc0.ɵɵdirectiveInject(NgbDatepickerI18n)); };
NgbDatepickerNavigation.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbDatepickerNavigation, selectors: [["ngb-datepicker-navigation"]], inputs: { months: "months", date: "date", disabled: "disabled", showSelect: "showSelect", prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", selectBoxes: "selectBoxes" }, outputs: { navigate: "navigate", select: "select" }, decls: 8, vars: 4, consts: function () { let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_datepicker_previous_month$$FESM2015_NG_BOOTSTRAP_JS_13 = goog.getMsg("Previous month");
        i18n_12 = MSG_EXTERNAL_ngb_datepicker_previous_month$$FESM2015_NG_BOOTSTRAP_JS_13;
    }
    else {
        i18n_12 = $localize `:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_datepicker_previous_month$$FESM2015_NG_BOOTSTRAP_JS_15 = goog.getMsg("Previous month");
        i18n_14 = MSG_EXTERNAL_ngb_datepicker_previous_month$$FESM2015_NG_BOOTSTRAP_JS_15;
    }
    else {
        i18n_14 = $localize `:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_datepicker_next_month$$FESM2015_NG_BOOTSTRAP_JS_17 = goog.getMsg("Next month");
        i18n_16 = MSG_EXTERNAL_ngb_datepicker_next_month$$FESM2015_NG_BOOTSTRAP_JS_17;
    }
    else {
        i18n_16 = $localize `:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_datepicker_next_month$$FESM2015_NG_BOOTSTRAP_JS_19 = goog.getMsg("Next month");
        i18n_18 = MSG_EXTERNAL_ngb_datepicker_next_month$$FESM2015_NG_BOOTSTRAP_JS_19;
    }
    else {
        i18n_18 = $localize `:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`;
    } return [[1, "ngb-dp-arrow"], ["type", "button", "aria-label", i18n_12, "title", i18n_14, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "disabled", "click"], [1, "ngb-dp-navigation-chevron"], ["class", "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select", 4, "ngIf"], [4, "ngIf"], [1, "ngb-dp-arrow", "right"], ["type", "button", "aria-label", i18n_16, "title", i18n_18, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "disabled", "click"], [1, "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select"], ["ngFor", "", 3, "ngForOf"], ["class", "ngb-dp-arrow", 4, "ngIf"], [1, "ngb-dp-month-name"]]; }, template: function NgbDatepickerNavigation_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵlistener("click", function NgbDatepickerNavigation_Template_button_click_1_listener($event) { return ctx.onClickPrev($event); });
        ɵngcc0.ɵɵelement(2, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NgbDatepickerNavigation_ngb_datepicker_navigation_select_3_Template, 1, 4, "ngb-datepicker-navigation-select", 3);
        ɵngcc0.ɵɵtemplate(4, NgbDatepickerNavigation_4_Template, 1, 1, undefined, 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "button", 6);
        ɵngcc0.ɵɵlistener("click", function NgbDatepickerNavigation_Template_button_click_6_listener($event) { return ctx.onClickNext($event); });
        ɵngcc0.ɵɵelement(7, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.prevDisabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSelect);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.showSelect);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.nextDisabled);
    } }, directives: function () { return [ɵngcc1.NgIf, NgbDatepickerNavigationSelect, ɵngcc1.NgForOf]; }, styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{justify-content:flex-end}.ngb-dp-arrow.right .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}"], encapsulation: 2, changeDetection: 0 });
NgbDatepickerNavigation.ctorParameters = () => [
    { type: NgbDatepickerI18n }
];
NgbDatepickerNavigation.propDecorators = {
    date: [{ type: Input }],
    disabled: [{ type: Input }],
    months: [{ type: Input }],
    showSelect: [{ type: Input }],
    prevDisabled: [{ type: Input }],
    nextDisabled: [{ type: Input }],
    selectBoxes: [{ type: Input }],
    navigate: [{ type: Output }],
    select: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerNavigation, [{
        type: Component,
        args: [{
                selector: 'ngb-datepicker-navigation',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="ngb-dp-arrow">
      <button type="button" class="btn btn-link ngb-dp-arrow-btn" (click)="onClickPrev($event)" [disabled]="prevDisabled"
              i18n-aria-label="@@ngb.datepicker.previous-month" aria-label="Previous month"
              i18n-title="@@ngb.datepicker.previous-month" title="Previous month">
        <span class="ngb-dp-navigation-chevron"></span>
      </button>
    </div>
    <ngb-datepicker-navigation-select *ngIf="showSelect" class="ngb-dp-navigation-select"
      [date]="date"
      [disabled] = "disabled"
      [months]="selectBoxes.months"
      [years]="selectBoxes.years"
      (select)="select.emit($event)">
    </ngb-datepicker-navigation-select>

    <ng-template *ngIf="!showSelect" ngFor let-month [ngForOf]="months" let-i="index">
      <div class="ngb-dp-arrow" *ngIf="i > 0"></div>
      <div class="ngb-dp-month-name">
        {{ i18n.getMonthLabel(month.firstDate) }}
      </div>
      <div class="ngb-dp-arrow" *ngIf="i !== months.length - 1"></div>
    </ng-template>
    <div class="ngb-dp-arrow right">
      <button type="button" class="btn btn-link ngb-dp-arrow-btn" (click)="onClickNext($event)" [disabled]="nextDisabled"
              i18n-aria-label="@@ngb.datepicker.next-month" aria-label="Next month"
              i18n-title="@@ngb.datepicker.next-month" title="Next month">
        <span class="ngb-dp-navigation-chevron"></span>
      </button>
    </div>
    `,
                styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{justify-content:flex-end}.ngb-dp-arrow.right .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}"]
            }]
    }], function () { return [{ type: NgbDatepickerI18n }]; }, { months: [{
            type: Input
        }], navigate: [{
            type: Output
        }], select: [{
            type: Output
        }], date: [{
            type: Input
        }], disabled: [{
            type: Input
        }], showSelect: [{
            type: Input
        }], prevDisabled: [{
            type: Input
        }], nextDisabled: [{
            type: Input
        }], selectBoxes: [{
            type: Input
        }] }); })();

const isContainedIn = (element, array) => array ? array.some(item => item.contains(element)) : false;
const ɵ0$3 = isContainedIn;
const matchesSelectorIfAny = (element, selector) => !selector || closest(element, selector) != null;
const ɵ1 = matchesSelectorIfAny;
const ɵ2 = () => {
    const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    const isAndroid = () => /Android/.test(navigator.userAgent);
    return typeof navigator !== 'undefined' ? !!navigator.userAgent && (isIOS() || isAndroid()) : false;
};
// we have to add a more significant delay to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
const isMobile = (ɵ2)();
// setting 'ngbAutoClose' synchronously on mobile results in immediate popup closing
// when tapping on the triggering element
const wrapAsyncForMobile = fn => isMobile ? () => setTimeout(() => fn(), 100) : fn;
const ɵ3 = wrapAsyncForMobile;
function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
    // closing on ESC and outside clicks
    if (type) {
        zone.runOutsideAngular(wrapAsyncForMobile(() => {
            const shouldCloseOnClick = (event) => {
                const element = event.target;
                if (event.button === 2 || isContainedIn(element, ignoreElements)) {
                    return false;
                }
                if (type === 'inside') {
                    return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
                }
                else if (type === 'outside') {
                    return !isContainedIn(element, insideElements);
                }
                else /* if (type === true) */ {
                    return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
                }
            };
            const escapes$ = fromEvent(document, 'keydown')
                .pipe(takeUntil(closed$), 
            // tslint:disable-next-line:deprecation
            filter(e => e.which === Key.Escape), tap(e => e.preventDefault()));
            // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown',
            // because on 'mouseup' DOM nodes might be detached
            const mouseDowns$ = fromEvent(document, 'mousedown').pipe(map(shouldCloseOnClick), takeUntil(closed$));
            const closeableClicks$ = fromEvent(document, 'mouseup')
                .pipe(withLatestFrom(mouseDowns$), filter(([_, shouldClose]) => shouldClose), delay(0), takeUntil(closed$));
            race([
                escapes$.pipe(map(_ => 0 /* ESCAPE */)), closeableClicks$.pipe(map(_ => 1 /* CLICK */))
            ]).subscribe((source) => zone.run(() => close(source)));
        }));
    }
}

const FOCUSABLE_ELEMENTS_SELECTOR = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])',
    'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'
].join(', ');
/**
 * Returns first and last focusable elements inside of a given element based on specific CSS selector
 */
function getFocusableBoundaryElements(element) {
    const list = Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR))
        .filter(el => el.tabIndex !== -1);
    return [list[0], list[list.length - 1]];
}
/**
 * Function that enforces browser focus to be trapped inside a DOM element.
 *
 * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
 *
 * @param zone Angular zone
 * @param element The element around which focus will be trapped inside
 * @param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
 * and free internal resources
 * @param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
 * false)
 */
const ngbFocusTrap = (zone, element, stopFocusTrap$, refocusOnClick = false) => {
    zone.runOutsideAngular(() => {
        // last focused element
        const lastFocusedElement$ = fromEvent(element, 'focusin').pipe(takeUntil(stopFocusTrap$), map(e => e.target));
        // 'tab' / 'shift+tab' stream
        fromEvent(element, 'keydown')
            .pipe(takeUntil(stopFocusTrap$), 
        // tslint:disable:deprecation
        filter(e => e.which === Key.Tab), 
        // tslint:enable:deprecation
        withLatestFrom(lastFocusedElement$))
            .subscribe(([tabEvent, focusedElement]) => {
            const [first, last] = getFocusableBoundaryElements(element);
            if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
                last.focus();
                tabEvent.preventDefault();
            }
            if (focusedElement === last && !tabEvent.shiftKey) {
                first.focus();
                tabEvent.preventDefault();
            }
        });
        // inside click
        if (refocusOnClick) {
            fromEvent(element, 'click')
                .pipe(takeUntil(stopFocusTrap$), withLatestFrom(lastFocusedElement$), map(arr => arr[1]))
                .subscribe(lastFocusedElement => lastFocusedElement.focus());
        }
    });
};

// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
class Positioning {
    getAllStyles(element) { return window.getComputedStyle(element); }
    getStyle(element, prop) { return this.getAllStyles(element)[prop]; }
    isStaticPositioned(element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    }
    offsetParent(element) {
        let offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    }
    position(element, round = true) {
        let elPosition;
        let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
                top: elPosition.top,
                bottom: elPosition.bottom,
                left: elPosition.left,
                right: elPosition.right,
                height: elPosition.height,
                width: elPosition.width
            };
        }
        else {
            const offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    }
    offset(element, round = true) {
        const elBcr = element.getBoundingClientRect();
        const viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        let elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    }
    /*
      Return false if the element to position is outside the viewport
    */
    positionElements(hostElement, targetElement, placement, appendToBody) {
        const [placementPrimary = 'top', placementSecondary = 'center'] = placement.split('-');
        const hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        const targetElStyles = this.getAllStyles(targetElement);
        const marginTop = parseFloat(targetElStyles.marginTop);
        const marginBottom = parseFloat(targetElStyles.marginBottom);
        const marginLeft = parseFloat(targetElStyles.marginLeft);
        const marginRight = parseFloat(targetElStyles.marginRight);
        let topPosition = 0;
        let leftPosition = 0;
        switch (placementPrimary) {
            case 'top':
                topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                break;
            case 'bottom':
                topPosition = (hostElPosition.top + hostElPosition.height);
                break;
            case 'left':
                leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                break;
            case 'right':
                leftPosition = (hostElPosition.left + hostElPosition.width);
                break;
        }
        switch (placementSecondary) {
            case 'top':
                topPosition = hostElPosition.top;
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                leftPosition = hostElPosition.left;
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                }
                else {
                    topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                }
                break;
        }
        /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
        targetElement.style.transform = `translate(${Math.round(leftPosition)}px, ${Math.round(topPosition)}px)`;
        // Check if the targetElement is inside the viewport
        const targetElBCR = targetElement.getBoundingClientRect();
        const html = document.documentElement;
        const windowHeight = window.innerHeight || html.clientHeight;
        const windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
            targetElBCR.bottom <= windowHeight;
    }
}
const placementSeparator = /\s+/;
const positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
    let placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
    const allowedPlacements = [
        'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
        'right-top', 'right-bottom'
    ];
    const classList = targetElement.classList;
    const addClassesToTarget = (targetPlacement) => {
        const [primary, secondary] = targetPlacement.split('-');
        const classes = [];
        if (baseClass) {
            classes.push(`${baseClass}-${primary}`);
            if (secondary) {
                classes.push(`${baseClass}-${primary}-${secondary}`);
            }
            classes.forEach((classname) => { classList.add(classname); });
        }
        return classes;
    };
    // Remove old placement classes to avoid issues
    if (baseClass) {
        allowedPlacements.forEach((placementToRemove) => { classList.remove(`${baseClass}-${placementToRemove}`); });
    }
    // replace auto placement with other placements
    let hasAuto = placementVals.findIndex(val => val === 'auto');
    if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
            if (placementVals.find(val => val.search('^' + obj) !== -1) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    // Required for transform:
    const style = targetElement.style;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style['will-change'] = 'transform';
    let testPlacement = null;
    let isInViewport = false;
    for (testPlacement of placementVals) {
        let addedClasses = addClassesToTarget(testPlacement);
        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
        }
        // Remove the baseClasses for further calculation
        if (baseClass) {
            addedClasses.forEach((classname) => { classList.remove(classname); });
        }
    }
    if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
    }
    return testPlacement;
}

function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
    return new NgbDateISOParserFormatter();
}
/**
 * An abstract service for parsing and formatting dates for the
 * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
 * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 */
class NgbDateParserFormatter {
}
NgbDateParserFormatter.ɵfac = function NgbDateParserFormatter_Factory(t) { return new (t || NgbDateParserFormatter)(); };
NgbDateParserFormatter.ɵprov = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY, token: NgbDateParserFormatter, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDateParserFormatter, [{
        type: Injectable,
        args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY }]
    }], null, null); })();
class NgbDateISOParserFormatter extends NgbDateParserFormatter {
    parse(value) {
        if (value != null) {
            const dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
            }
        }
        return null;
    }
    format(date) {
        return date ?
            `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ''}-${isNumber(date.day) ? padNumber(date.day) : ''}` :
            '';
    }
}
NgbDateISOParserFormatter.ɵfac = /*@__PURE__*/ function () { let ɵNgbDateISOParserFormatter_BaseFactory; return function NgbDateISOParserFormatter_Factory(t) { return (ɵNgbDateISOParserFormatter_BaseFactory || (ɵNgbDateISOParserFormatter_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbDateISOParserFormatter)))(t || NgbDateISOParserFormatter); }; }();
NgbDateISOParserFormatter.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbDateISOParserFormatter, factory: NgbDateISOParserFormatter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDateISOParserFormatter, [{
        type: Injectable
    }], null, null); })();

/**
 * A configuration service for the [`NgbDatepickerInput`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepicker inputs used in the application.
 *
 * @since 5.2.0
 */
class NgbInputDatepickerConfig extends NgbDatepickerConfig {
    constructor() {
        super(...arguments);
        this.autoClose = true;
        this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        this.restoreFocus = true;
    }
}
NgbInputDatepickerConfig.ɵfac = /*@__PURE__*/ function () { let ɵNgbInputDatepickerConfig_BaseFactory; return function NgbInputDatepickerConfig_Factory(t) { return (ɵNgbInputDatepickerConfig_BaseFactory || (ɵNgbInputDatepickerConfig_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbInputDatepickerConfig)))(t || NgbInputDatepickerConfig); }; }();
NgbInputDatepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbInputDatepickerConfig_Factory() { return new NgbInputDatepickerConfig(); }, token: NgbInputDatepickerConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbInputDatepickerConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * A directive that allows to stick a datepicker popup to an input field.
 *
 * Manages interaction with the input field itself, does value formatting and provides forms integration.
 */
class NgbInputDatepicker {
    constructor(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, _ngZone, _calendar, _dateAdapter, _document, _changeDetector, config) {
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._ngZone = _ngZone;
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._document = _document;
        this._changeDetector = _changeDetector;
        this._cRef = null;
        this._disabled = false;
        this._elWithFocus = null;
        this._model = null;
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * @since 1.1.1
         */
        this.dateSelect = new EventEmitter();
        /**
         * Event emitted right after the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new EventEmitter();
        /**
         * An event fired after closing datepicker window.
         *
         * @since 4.2.0
         */
        this.closed = new EventEmitter();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this._validatorChange = () => { };
        ['autoClose', 'container', 'positionTarget', 'placement'].forEach(input => this[input] = config[input]);
        this._zoneSubscription = _ngZone.onStable.subscribe(() => this._updatePopupPosition());
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value === '' || (value && value !== 'false');
        if (this.isOpen()) {
            this._cRef.instance.setDisabledState(this._disabled);
        }
    }
    registerOnChange(fn) { this._onChange = fn; }
    registerOnTouched(fn) { this._onTouched = fn; }
    registerOnValidatorChange(fn) { this._validatorChange = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    validate(c) {
        const { value } = c;
        if (value != null) {
            const ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
            if (!ngbDate) {
                return { 'ngbDate': { invalid: value } };
            }
            if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
                return { 'ngbDate': { minDate: { minDate: this.minDate, actual: value } } };
            }
            if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
                return { 'ngbDate': { maxDate: { maxDate: this.maxDate, actual: value } } };
            }
        }
        return null;
    }
    writeValue(value) {
        this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
        this._writeModelValue(this._model);
    }
    manualDateChange(value, updateView = false) {
        const inputValueChanged = value !== this._inputValue;
        if (inputValueChanged) {
            this._inputValue = value;
            this._model = this._fromDateStruct(this._parserFormatter.parse(value));
        }
        if (inputValueChanged || !updateView) {
            this._onChange(this._model ? this._dateAdapter.toModel(this._model) : (value === '' ? null : value));
        }
        if (updateView && this._model) {
            this._writeModelValue(this._model);
        }
    }
    isOpen() { return !!this._cRef; }
    /**
     * Opens the datepicker popup.
     *
     * If the related form control contains a valid date, the corresponding month will be opened.
     */
    open() {
        if (!this.isOpen()) {
            const cf = this._cfr.resolveComponentFactory(NgbDatepicker);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
            // date selection event handling
            this._cRef.instance.registerOnChange((selectedDate) => {
                this.writeValue(selectedDate);
                this._onChange(selectedDate);
                this._onTouched();
            });
            this._cRef.changeDetectorRef.detectChanges();
            this._cRef.instance.setDisabledState(this.disabled);
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
            }
            // focus handling
            this._elWithFocus = this._document.activeElement;
            ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);
            this._cRef.instance.focus();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.closed, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
        }
    }
    /**
     * Closes the datepicker popup.
     */
    close() {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
            this.closed.emit();
            this._changeDetector.markForCheck();
            // restore focus
            let elementToFocus = this._elWithFocus;
            if (isString(this.restoreFocus)) {
                elementToFocus = this._document.querySelector(this.restoreFocus);
            }
            else if (this.restoreFocus !== undefined) {
                elementToFocus = this.restoreFocus;
            }
            // in IE document.activeElement can contain an object without 'focus()' sometimes
            if (elementToFocus && elementToFocus['focus']) {
                elementToFocus.focus();
            }
            else {
                this._document.body.focus();
            }
        }
    }
    /**
     * Toggles the datepicker popup.
     */
    toggle() {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    navigateTo(date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    }
    onBlur() { this._onTouched(); }
    onFocus() { this._elWithFocus = this._elRef.nativeElement; }
    ngOnChanges(changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
            if (this.isOpen()) {
                if (changes['minDate']) {
                    this._cRef.instance.minDate = this.minDate;
                }
                if (changes['maxDate']) {
                    this._cRef.instance.maxDate = this.maxDate;
                }
                this._cRef.instance.ngOnChanges(changes);
            }
        }
        if (changes['datepickerClass']) {
            const { currentValue, previousValue } = changes['datepickerClass'];
            this._applyPopupClass(currentValue, previousValue);
        }
    }
    ngOnDestroy() {
        this.close();
        this._zoneSubscription.unsubscribe();
    }
    _applyDatepickerInputs(datepickerInstance) {
        ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
            'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekNumbers', 'weekdays']
            .forEach((optionName) => {
            if (this[optionName] !== undefined) {
                datepickerInstance[optionName] = this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    }
    _applyPopupClass(newClass, oldClass) {
        var _a;
        const popupEl = (_a = this._cRef) === null || _a === void 0 ? void 0 : _a.location.nativeElement;
        if (popupEl) {
            if (newClass) {
                this._renderer.addClass(popupEl, newClass);
            }
            if (oldClass) {
                this._renderer.removeClass(popupEl, oldClass);
            }
        }
    }
    _applyPopupStyling(nativeElement) {
        this._renderer.addClass(nativeElement, 'dropdown-menu');
        this._renderer.addClass(nativeElement, 'show');
        if (this.container === 'body') {
            this._renderer.addClass(nativeElement, 'ngb-dp-body');
        }
        this._applyPopupClass(this.datepickerClass);
    }
    _subscribeForDatepickerOutputs(datepickerInstance) {
        datepickerInstance.navigate.subscribe(navigateEvent => this.navigate.emit(navigateEvent));
        datepickerInstance.dateSelect.subscribe(date => {
            this.dateSelect.emit(date);
            if (this.autoClose === true || this.autoClose === 'inside') {
                this.close();
            }
        });
    }
    _writeModelValue(model) {
        const value = this._parserFormatter.format(model);
        this._inputValue = value;
        this._renderer.setProperty(this._elRef.nativeElement, 'value', value);
        if (this.isOpen()) {
            this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
            this._onTouched();
        }
    }
    _fromDateStruct(date) {
        const ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
        return this._calendar.isValid(ngbDate) ? ngbDate : null;
    }
    _updatePopupPosition() {
        if (!this._cRef) {
            return;
        }
        let hostElement;
        if (isString(this.positionTarget)) {
            hostElement = this._document.querySelector(this.positionTarget);
        }
        else if (this.positionTarget instanceof HTMLElement) {
            hostElement = this.positionTarget;
        }
        else {
            hostElement = this._elRef.nativeElement;
        }
        if (this.positionTarget && !hostElement) {
            throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
        }
        positionElements(hostElement, this._cRef.location.nativeElement, this.placement, this.container === 'body');
    }
}
NgbInputDatepicker.ɵfac = function NgbInputDatepicker_Factory(t) { return new (t || NgbInputDatepicker)(ɵngcc0.ɵɵdirectiveInject(NgbDateParserFormatter), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(NgbCalendar), ɵngcc0.ɵɵdirectiveInject(NgbDateAdapter), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NgbInputDatepickerConfig)); };
NgbInputDatepicker.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbInputDatepicker, selectors: [["input", "ngbDatepicker", ""]], hostVars: 1, hostBindings: function NgbInputDatepicker_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function NgbInputDatepicker_input_HostBindingHandler($event) { return ctx.manualDateChange($event.target.value); })("change", function NgbInputDatepicker_change_HostBindingHandler($event) { return ctx.manualDateChange($event.target.value, true); })("focus", function NgbInputDatepicker_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function NgbInputDatepicker_blur_HostBindingHandler() { return ctx.onBlur(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", autoClose: "autoClose", datepickerClass: "datepickerClass", dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", minDate: "minDate", maxDate: "maxDate", navigation: "navigation", outsideDays: "outsideDays", placement: "placement", restoreFocus: "restoreFocus", showWeekNumbers: "showWeekNumbers", startDate: "startDate", container: "container", positionTarget: "positionTarget", weekdays: "weekdays" }, outputs: { dateSelect: "dateSelect", navigate: "navigate", closed: "closed" }, exportAs: ["ngbDatepicker"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbInputDatepicker), multi: true },
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgbInputDatepicker), multi: true },
            { provide: NgbDatepickerConfig, useExisting: NgbInputDatepickerConfig }
        ]), ɵngcc0.ɵɵNgOnChangesFeature] });
NgbInputDatepicker.ctorParameters = () => [
    { type: NgbDateParserFormatter },
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: ComponentFactoryResolver },
    { type: NgZone },
    { type: NgbCalendar },
    { type: NgbDateAdapter },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: NgbInputDatepickerConfig }
];
NgbInputDatepicker.propDecorators = {
    autoClose: [{ type: Input }],
    datepickerClass: [{ type: Input }],
    dayTemplate: [{ type: Input }],
    dayTemplateData: [{ type: Input }],
    displayMonths: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    footerTemplate: [{ type: Input }],
    markDisabled: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    navigation: [{ type: Input }],
    outsideDays: [{ type: Input }],
    placement: [{ type: Input }],
    restoreFocus: [{ type: Input }],
    showWeekNumbers: [{ type: Input }],
    startDate: [{ type: Input }],
    container: [{ type: Input }],
    positionTarget: [{ type: Input }],
    weekdays: [{ type: Input }],
    dateSelect: [{ type: Output }],
    navigate: [{ type: Output }],
    closed: [{ type: Output }],
    disabled: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbInputDatepicker, [{
        type: Directive,
        args: [{
                selector: 'input[ngbDatepicker]',
                exportAs: 'ngbDatepicker',
                host: {
                    '(input)': 'manualDateChange($event.target.value)',
                    '(change)': 'manualDateChange($event.target.value, true)',
                    '(focus)': 'onFocus()',
                    '(blur)': 'onBlur()',
                    '[disabled]': 'disabled'
                },
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbInputDatepicker), multi: true },
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgbInputDatepicker), multi: true },
                    { provide: NgbDatepickerConfig, useExisting: NgbInputDatepickerConfig }
                ]
            }]
    }], function () { return [{ type: NgbDateParserFormatter }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.NgZone }, { type: NgbCalendar }, { type: NgbDateAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: NgbInputDatepickerConfig }]; }, { dateSelect: [{
            type: Output
        }], navigate: [{
            type: Output
        }], closed: [{
            type: Output
        }], disabled: [{
            type: Input
        }], autoClose: [{
            type: Input
        }], datepickerClass: [{
            type: Input
        }], dayTemplate: [{
            type: Input
        }], dayTemplateData: [{
            type: Input
        }], displayMonths: [{
            type: Input
        }], firstDayOfWeek: [{
            type: Input
        }], footerTemplate: [{
            type: Input
        }], markDisabled: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], navigation: [{
            type: Input
        }], outsideDays: [{
            type: Input
        }], placement: [{
            type: Input
        }], restoreFocus: [{
            type: Input
        }], showWeekNumbers: [{
            type: Input
        }], startDate: [{
            type: Input
        }], container: [{
            type: Input
        }], positionTarget: [{
            type: Input
        }], weekdays: [{
            type: Input
        }] }); })();

class NgbDatepickerDayView {
    constructor(i18n) {
        this.i18n = i18n;
    }
    isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
}
NgbDatepickerDayView.ɵfac = function NgbDatepickerDayView_Factory(t) { return new (t || NgbDatepickerDayView)(ɵngcc0.ɵɵdirectiveInject(NgbDatepickerI18n)); };
NgbDatepickerDayView.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbDatepickerDayView, selectors: [["", "ngbDatepickerDayView", ""]], hostAttrs: [1, "btn-light"], hostVars: 10, hostBindings: function NgbDatepickerDayView_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("bg-primary", ctx.selected)("text-white", ctx.selected)("text-muted", ctx.isMuted())("outside", ctx.isMuted())("active", ctx.focused);
    } }, inputs: { currentMonth: "currentMonth", date: "date", disabled: "disabled", focused: "focused", selected: "selected" }, attrs: _c20, decls: 1, vars: 1, template: function NgbDatepickerDayView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtext(0);
    } if (rf & 2) {
        ɵngcc0.ɵɵtextInterpolate(ctx.i18n.getDayNumerals(ctx.date));
    } }, styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView].outside{opacity:.5}"], encapsulation: 2, changeDetection: 0 });
NgbDatepickerDayView.ctorParameters = () => [
    { type: NgbDatepickerI18n }
];
NgbDatepickerDayView.propDecorators = {
    currentMonth: [{ type: Input }],
    date: [{ type: Input }],
    disabled: [{ type: Input }],
    focused: [{ type: Input }],
    selected: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerDayView, [{
        type: Component,
        args: [{
                selector: '[ngbDatepickerDayView]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'btn-light',
                    '[class.bg-primary]': 'selected',
                    '[class.text-white]': 'selected',
                    '[class.text-muted]': 'isMuted()',
                    '[class.outside]': 'isMuted()',
                    '[class.active]': 'focused'
                },
                template: `{{ i18n.getDayNumerals(date) }}`,
                styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView].outside{opacity:.5}"]
            }]
    }], function () { return [{ type: NgbDatepickerI18n }]; }, { currentMonth: [{
            type: Input
        }], date: [{
            type: Input
        }], disabled: [{
            type: Input
        }], focused: [{
            type: Input
        }], selected: [{
            type: Input
        }] }); })();

class NgbDatepickerNavigationSelect {
    constructor(i18n, _renderer) {
        this.i18n = i18n;
        this._renderer = _renderer;
        this.select = new EventEmitter();
        this._month = -1;
        this._year = -1;
    }
    changeMonth(month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); }
    changeYear(year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); }
    ngAfterViewChecked() {
        if (this.date) {
            if (this.date.month !== this._month) {
                this._month = this.date.month;
                this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
            }
            if (this.date.year !== this._year) {
                this._year = this.date.year;
                this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
            }
        }
    }
}
NgbDatepickerNavigationSelect.ɵfac = function NgbDatepickerNavigationSelect_Factory(t) { return new (t || NgbDatepickerNavigationSelect)(ɵngcc0.ɵɵdirectiveInject(NgbDatepickerI18n), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NgbDatepickerNavigationSelect.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbDatepickerNavigationSelect, selectors: [["ngb-datepicker-navigation-select"]], viewQuery: function NgbDatepickerNavigationSelect_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c21, 7, ElementRef);
        ɵngcc0.ɵɵviewQuery(_c22, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.monthSelect = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.yearSelect = _t.first);
    } }, inputs: { date: "date", disabled: "disabled", months: "months", years: "years" }, outputs: { select: "select" }, decls: 6, vars: 4, consts: function () { let i18n_23; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_datepicker_select_month$$FESM2015_NG_BOOTSTRAP_JS_24 = goog.getMsg("Select month");
        i18n_23 = MSG_EXTERNAL_ngb_datepicker_select_month$$FESM2015_NG_BOOTSTRAP_JS_24;
    }
    else {
        i18n_23 = $localize `:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`;
    } let i18n_25; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_datepicker_select_month$$FESM2015_NG_BOOTSTRAP_JS_26 = goog.getMsg("Select month");
        i18n_25 = MSG_EXTERNAL_ngb_datepicker_select_month$$FESM2015_NG_BOOTSTRAP_JS_26;
    }
    else {
        i18n_25 = $localize `:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`;
    } let i18n_27; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_datepicker_select_year$$FESM2015_NG_BOOTSTRAP_JS_28 = goog.getMsg("Select year");
        i18n_27 = MSG_EXTERNAL_ngb_datepicker_select_year$$FESM2015_NG_BOOTSTRAP_JS_28;
    }
    else {
        i18n_27 = $localize `:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`;
    } let i18n_29; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_datepicker_select_year$$FESM2015_NG_BOOTSTRAP_JS_30 = goog.getMsg("Select year");
        i18n_29 = MSG_EXTERNAL_ngb_datepicker_select_year$$FESM2015_NG_BOOTSTRAP_JS_30;
    }
    else {
        i18n_29 = $localize `:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`;
    } return [["aria-label", i18n_23, "title", i18n_25, 1, "custom-select", 3, "disabled", "change"], ["month", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", i18n_27, "title", i18n_29, 1, "custom-select", 3, "disabled", "change"], ["year", ""], [3, "value"]]; }, template: function NgbDatepickerNavigationSelect_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "select", 0, 1);
        ɵngcc0.ɵɵlistener("change", function NgbDatepickerNavigationSelect_Template_select_change_0_listener($event) { return ctx.changeMonth($event.target.value); });
        ɵngcc0.ɵɵtemplate(2, NgbDatepickerNavigationSelect_option_2_Template, 2, 3, "option", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "select", 3, 4);
        ɵngcc0.ɵɵlistener("change", function NgbDatepickerNavigationSelect_Template_select_change_3_listener($event) { return ctx.changeYear($event.target.value); });
        ɵngcc0.ɵɵtemplate(5, NgbDatepickerNavigationSelect_option_5_Template, 2, 2, "option", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.months);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.years);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc2.NgSelectOption, ɵngcc2.ɵNgSelectMultipleOption], styles: ["ngb-datepicker-navigation-select>.custom-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}"], encapsulation: 2, changeDetection: 0 });
NgbDatepickerNavigationSelect.ctorParameters = () => [
    { type: NgbDatepickerI18n },
    { type: Renderer2 }
];
NgbDatepickerNavigationSelect.propDecorators = {
    date: [{ type: Input }],
    disabled: [{ type: Input }],
    months: [{ type: Input }],
    years: [{ type: Input }],
    select: [{ type: Output }],
    monthSelect: [{ type: ViewChild, args: ['month', { static: true, read: ElementRef },] }],
    yearSelect: [{ type: ViewChild, args: ['year', { static: true, read: ElementRef },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerNavigationSelect, [{
        type: Component,
        args: [{
                selector: 'ngb-datepicker-navigation-select',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <select #month
      [disabled]="disabled"
      class="custom-select"
      i18n-aria-label="@@ngb.datepicker.select-month" aria-label="Select month"
      i18n-title="@@ngb.datepicker.select-month" title="Select month"
      (change)="changeMonth($any($event).target.value)">
        <option *ngFor="let m of months" [attr.aria-label]="i18n.getMonthFullName(m, date?.year)"
                [value]="m">{{ i18n.getMonthShortName(m, date?.year) }}</option>
    </select><select #year
      [disabled]="disabled"
      class="custom-select"
      i18n-aria-label="@@ngb.datepicker.select-year" aria-label="Select year"
      i18n-title="@@ngb.datepicker.select-year" title="Select year"
      (change)="changeYear($any($event).target.value)">
        <option *ngFor="let y of years" [value]="y">{{ i18n.getYearNumerals(y) }}</option>
    </select>
  `,
                styles: ["ngb-datepicker-navigation-select>.custom-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}"]
            }]
    }], function () { return [{ type: NgbDatepickerI18n }, { type: ɵngcc0.Renderer2 }]; }, { select: [{
            type: Output
        }], date: [{
            type: Input
        }], disabled: [{
            type: Input
        }], months: [{
            type: Input
        }], years: [{
            type: Input
        }], monthSelect: [{
            type: ViewChild,
            args: ['month', { static: true, read: ElementRef }]
        }], yearSelect: [{
            type: ViewChild,
            args: ['year', { static: true, read: ElementRef }]
        }] }); })();

class NgbCalendarHijri extends NgbCalendar {
    getDaysPerWeek() { return 7; }
    getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    getWeeksPerMonth() { return 6; }
    getNext(date, period = 'd', number = 1) {
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date = this._setYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = this._setMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return this._setDay(date, date.day + number);
            default:
                return date;
        }
    }
    getPrev(date, period = 'd', number = 1) { return this.getNext(date, period, -number); }
    getWeekday(date) {
        const day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    }
    getWeekNumber(week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        const date = week[thursdayIndex];
        const jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        const time = jsDate.getTime();
        const MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    }
    getToday() { return this.fromGregorian(new Date()); }
    isValid(date) {
        return date != null && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
            !isNaN(this.toGregorian(date).getTime());
    }
    _setDay(date, day) {
        day = +day;
        let mDays = this.getDaysPerMonth(date.month, date.year);
        if (day <= 0) {
            while (day <= 0) {
                date = this._setMonth(date, date.month - 1);
                mDays = this.getDaysPerMonth(date.month, date.year);
                day += mDays;
            }
        }
        else if (day > mDays) {
            while (day > mDays) {
                day -= mDays;
                date = this._setMonth(date, date.month + 1);
                mDays = this.getDaysPerMonth(date.month, date.year);
            }
        }
        date.day = day;
        return date;
    }
    _setMonth(date, month) {
        month = +month;
        date.year = date.year + Math.floor((month - 1) / 12);
        date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
        return date;
    }
    _setYear(date, year) {
        date.year = +year;
        return date;
    }
}
NgbCalendarHijri.ɵfac = /*@__PURE__*/ function () { let ɵNgbCalendarHijri_BaseFactory; return function NgbCalendarHijri_Factory(t) { return (ɵNgbCalendarHijri_BaseFactory || (ɵNgbCalendarHijri_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbCalendarHijri)))(t || NgbCalendarHijri); }; }();
NgbCalendarHijri.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbCalendarHijri, factory: NgbCalendarHijri.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCalendarHijri, [{
        type: Injectable
    }], null, null); })();

/**
 * Checks if islamic year is a leap year
 */
function isIslamicLeapYear(hYear) {
    return (14 + 11 * hYear) % 30 < 11;
}
/**
 * Checks if gregorian years is a leap year
 */
function isGregorianLeapYear$1(gDate) {
    const year = gDate.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * Returns the start of Hijri Month.
 * `hMonth` is 0 for Muharram, 1 for Safar, etc.
 * `hYear` is any Hijri hYear.
 */
function getIslamicMonthStart(hYear, hMonth) {
    return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
}
/**
 * Returns the start of Hijri year.
 * `year` is any Hijri year.
 */
function getIslamicYearStart(year) {
    return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
}
function mod$1(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 */
const GREGORIAN_EPOCH$1 = 1721425.5;
const ISLAMIC_EPOCH = 1948439.5;
class NgbCalendarIslamicCivil extends NgbCalendarHijri {
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     */
    fromGregorian(gDate) {
        const gYear = gDate.getFullYear(), gMonth = gDate.getMonth(), gDay = gDate.getDate();
        let julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gDate) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        const days = julianDay - ISLAMIC_EPOCH;
        const hYear = Math.floor((30 * days + 10646) / 10631.0);
        let hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        const hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
        return new NgbDate(hYear, hMonth + 1, hDay);
    }
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     */
    toGregorian(hDate) {
        const hYear = hDate.year;
        const hMonth = hDate.month - 1;
        const hDay = hDate.day;
        const julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        const wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH$1, quadricent = Math.floor(depoch / 146097), dqc = mod$1(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod$1(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod$1(dcent, 1461), yindex = Math.floor(dquad / 365);
        let year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        const gYearStart = GREGORIAN_EPOCH$1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        const yearday = wjd - gYearStart;
        const tjd = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear$1(new Date(year, 3, 1)) ? -1 : -2) + 1);
        const leapadj = wjd < tjd ? 0 : isGregorianLeapYear$1(new Date(year, 3, 1)) ? 1 : 2;
        const month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        const tjd2 = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear$1(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        const day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    }
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    getDaysPerMonth(month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        let length = 29 + month % 2;
        if (month === 12 && isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    }
}
NgbCalendarIslamicCivil.ɵfac = /*@__PURE__*/ function () { let ɵNgbCalendarIslamicCivil_BaseFactory; return function NgbCalendarIslamicCivil_Factory(t) { return (ɵNgbCalendarIslamicCivil_BaseFactory || (ɵNgbCalendarIslamicCivil_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbCalendarIslamicCivil)))(t || NgbCalendarIslamicCivil); }; }();
NgbCalendarIslamicCivil.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbCalendarIslamicCivil, factory: NgbCalendarIslamicCivil.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCalendarIslamicCivil, [{
        type: Injectable
    }], null, null); })();

/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 */
const GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
const GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
const HIJRI_BEGIN = 1300;
const HIJRI_END = 1600;
const ONE_DAY = 1000 * 60 * 60 * 24;
const MONTH_LENGTH = [
    // 1300-1304
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
    // 1305-1309
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
    // 1310-1314
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
    // 1315-1319
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
    // 1320-1324
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
    // 1325-1329
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
    // 1330-1334
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
    // 1335-1339
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
    // 1340-1344
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
    // 1345-1349
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
    // 1350-1354
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
    // 1355-1359
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
    // 1360-1364
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
    // 1365-1369
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
    // 1370-1374
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
    // 1375-1379
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
    // 1380-1384
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
    // 1385-1389
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
    // 1390-1394
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
    // 1395-1399
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
    // 1400-1404
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
    // 1405-1409
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
    // 1410-1414
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
    // 1415-1419
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
    // 1420-1424
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
    // 1425-1429
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
    // 1430-1434
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
    // 1435-1439
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
    // 1440-1444
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
    // 1445-1449
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
    // 1450-1454
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
    // 1455-1459
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
    // 1460-1464
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
    // 1465-1469
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
    // 1470-1474
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
    // 1475-1479
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
    // 1480-1484
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
    // 1485-1489
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
    // 1490-1494
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
    // 1495-1499
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
    // 1500-1504
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
    // 1505-1509
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
    // 1510-1514
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
    // 1515-1519
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
    // 1520-1524
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
    // 1525-1529
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
    // 1530-1534
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
    // 1535-1539
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
    // 1540-1544
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
    // 1545-1549
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
    // 1550-1554
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
    // 1555-1559
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
    // 1560-1564
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
    // 1565-1569
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
    // 1570-1574
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
    // 1575-1579
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
    // 1580-1584
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
    // 1585-1589
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
    // 1590-1594
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
    // 1595-1599
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
    // 1600
    '001010011101'
];
function getDaysDiff(date1, date2) {
    // Ignores the time part in date1 and date2:
    const time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const diff = Math.abs(time1 - time2);
    return Math.round(diff / ONE_DAY);
}
class NgbCalendarIslamicUmalqura extends NgbCalendarIslamicCivil {
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    fromGregorian(gDate) {
        let hDay = 1, hMonth = 0, hYear = 1300;
        let daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
        if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            let year = 1300;
            for (let i = 0; i < MONTH_LENGTH.length; i++, year++) {
                for (let j = 0; j < 12; j++) {
                    let numOfDays = +MONTH_LENGTH[i][j] + 29;
                    if (daysDiff <= numOfDays) {
                        hDay = daysDiff + 1;
                        if (hDay > numOfDays) {
                            hDay = 1;
                            j++;
                        }
                        if (j > 11) {
                            j = 0;
                            year++;
                        }
                        hMonth = j;
                        hYear = year;
                        return new NgbDate(hYear, hMonth + 1, hDay);
                    }
                    daysDiff = daysDiff - numOfDays;
                }
            }
            return null;
        }
        else {
            return super.fromGregorian(gDate);
        }
    }
    /**
    * Converts the current Hijri date to Gregorian.
    */
    toGregorian(hDate) {
        const hYear = hDate.year;
        const hMonth = hDate.month - 1;
        const hDay = hDate.day;
        let gDate = new Date(GREGORIAN_FIRST_DATE);
        let dayDiff = hDay - 1;
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (let y = 0; y < hYear - HIJRI_BEGIN; y++) {
                for (let m = 0; m < 12; m++) {
                    dayDiff += +MONTH_LENGTH[y][m] + 29;
                }
            }
            for (let m = 0; m < hMonth; m++) {
                dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
            }
            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
        }
        else {
            gDate = super.toGregorian(hDate);
        }
        return gDate;
    }
    /**
    * Returns the number of days in a specific Hijri hMonth.
    * `hMonth` is 1 for Muharram, 2 for Safar, etc.
    * `hYear` is any Hijri hYear.
    */
    getDaysPerMonth(hMonth, hYear) {
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            const pos = hYear - HIJRI_BEGIN;
            return +MONTH_LENGTH[pos][hMonth - 1] + 29;
        }
        return super.getDaysPerMonth(hMonth, hYear);
    }
}
NgbCalendarIslamicUmalqura.ɵfac = /*@__PURE__*/ function () { let ɵNgbCalendarIslamicUmalqura_BaseFactory; return function NgbCalendarIslamicUmalqura_Factory(t) { return (ɵNgbCalendarIslamicUmalqura_BaseFactory || (ɵNgbCalendarIslamicUmalqura_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbCalendarIslamicUmalqura)))(t || NgbCalendarIslamicUmalqura); }; }();
NgbCalendarIslamicUmalqura.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbCalendarIslamicUmalqura, factory: NgbCalendarIslamicUmalqura.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCalendarIslamicUmalqura, [{
        type: Injectable
    }], null, null); })();

/**
 * Returns the equivalent JS date value for a give input Jalali date.
 * `jalaliDate` is an Jalali date to be converted to Gregorian.
 */
function toGregorian$2(jalaliDate) {
    let jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
    let date = julianToGregorian(jdn);
    date.setHours(6, 30, 3, 200);
    return date;
}
/**
 * Returns the equivalent jalali date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to jalali.
 * utc to local
 */
function fromGregorian$2(gdate) {
    let g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
    return julianToJalali(g2d);
}
function setJalaliYear(date, yearValue) {
    date.year = +yearValue;
    return date;
}
function setJalaliMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
}
function setJalaliDay(date, day) {
    let mDays = getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
        while (day <= 0) {
            date = setJalaliMonth(date, date.month - 1);
            mDays = getDaysPerMonth(date.month, date.year);
            day += mDays;
        }
    }
    else if (day > mDays) {
        while (day > mDays) {
            day -= mDays;
            date = setJalaliMonth(date, date.month + 1);
            mDays = getDaysPerMonth(date.month, date.year);
        }
    }
    date.day = day;
    return date;
}
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
function div(a, b) {
    return Math.trunc(a / b);
}
/*
 This function determines if the Jalali (Persian) year is
 leap (366-day long) or is the common year (365 days), and
 finds the day in March (Gregorian calendar) of the first
 day of the Jalali year (jalaliYear).
 @param jalaliYear Jalali calendar year (-61 to 3177)
 @return
 leap: number of years since the last leap year (0 to 4)
 gYear: Gregorian year of the beginning of Jalali year
 march: the March day of Farvardin the 1st (1st day of jalaliYear)
 @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
 @see: http://www.fourmilab.ch/documents/calendar/
 */
function jalCal(jalaliYear) {
    // Jalali years starting the 33-year rule.
    let breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
    const breaksLength = breaks.length;
    const gYear = jalaliYear + 621;
    let leapJ = -14;
    let jp = breaks[0];
    if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
        throw new Error('Invalid Jalali year ' + jalaliYear);
    }
    // Find the limiting years for the Jalali year jalaliYear.
    let jump;
    for (let i = 1; i < breaksLength; i += 1) {
        const jm = breaks[i];
        jump = jm - jp;
        if (jalaliYear < jm) {
            break;
        }
        leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
        jp = jm;
    }
    let n = jalaliYear - jp;
    // Find the number of leap years from AD 621 to the beginning
    // of the current Jalali year in the Persian calendar.
    leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
    if (mod(jump, 33) === 4 && jump - n === 4) {
        leapJ += 1;
    }
    // And the same in the Gregorian calendar (until the year gYear).
    const leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
    // Determine the Gregorian date of Farvardin the 1st.
    const march = 20 + leapJ - leapG;
    // Find how many years have passed since the last leap year.
    if (jump - n < 6) {
        n = n - jump + div(jump + 4, 33) * 33;
    }
    let leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
        leap = 4;
    }
    return { leap: leap, gy: gYear, march: march };
}
/*
 Calculates Gregorian and Julian calendar dates from the Julian Day number
 (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
 calendars) to some millions years ahead of the present.
 @param jdn Julian Day number
 @return
 gYear: Calendar year (years BC numbered 0, -1, -2, ...)
 gMonth: Calendar month (1 to 12)
 gDay: Calendar day of the month M (1 to 28/29/30/31)
 */
function julianToGregorian(julianDayNumber) {
    let j = 4 * julianDayNumber + 139361631;
    j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
    const i = div(mod(j, 1461), 4) * 5 + 308;
    const gDay = div(mod(i, 153), 5) + 1;
    const gMonth = mod(div(i, 153), 12) + 1;
    const gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
    return new Date(gYear, gMonth - 1, gDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jy Jalali year (1 to 3100)
 @param jm Jalali month (1 to 12)
 @param jd Jalali day (1 to 29/31)
 @return Julian Day number
 */
function gregorianToJulian(gy, gm, gd) {
    let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
}
/*
 Converts the Julian Day number to a date in the Jalali calendar.
 @param julianDayNumber Julian Day number
 @return
 jalaliYear: Jalali year (1 to 3100)
 jalaliMonth: Jalali month (1 to 12)
 jalaliDay: Jalali day (1 to 29/31)
 */
function julianToJalali(julianDayNumber) {
    let gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
    , jalaliYear = gy - 621, r = jalCal(jalaliYear), gregorianDay = gregorianToJulian(gy, 3, r.march), jalaliDay, jalaliMonth, numberOfDays;
    // Find number of days that passed since 1 Farvardin.
    numberOfDays = julianDayNumber - gregorianDay;
    if (numberOfDays >= 0) {
        if (numberOfDays <= 185) {
            // The first 6 months.
            jalaliMonth = 1 + div(numberOfDays, 31);
            jalaliDay = mod(numberOfDays, 31) + 1;
            return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
        }
        else {
            // The remaining months.
            numberOfDays -= 186;
        }
    }
    else {
        // Previous Jalali year.
        jalaliYear -= 1;
        numberOfDays += 179;
        if (r.leap === 1) {
            numberOfDays += 1;
        }
    }
    jalaliMonth = 7 + div(numberOfDays, 30);
    jalaliDay = mod(numberOfDays, 30) + 1;
    return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jYear Jalali year (1 to 3100)
 @param jMonth Jalali month (1 to 12)
 @param jDay Jalali day (1 to 29/31)
 @return Julian Day number
 */
function jalaliToJulian(jYear, jMonth, jDay) {
    let r = jalCal(jYear);
    return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
/**
 * Returns the number of days in a specific jalali month.
 */
function getDaysPerMonth(month, year) {
    if (month <= 6) {
        return 31;
    }
    if (month <= 11) {
        return 30;
    }
    if (jalCal(year).leap === 0) {
        return 30;
    }
    return 29;
}

class NgbCalendarPersian extends NgbCalendar {
    getDaysPerWeek() { return 7; }
    getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    getWeeksPerMonth() { return 6; }
    getNext(date, period = 'd', number = 1) {
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date = setJalaliYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = setJalaliMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return setJalaliDay(date, date.day + number);
            default:
                return date;
        }
    }
    getPrev(date, period = 'd', number = 1) { return this.getNext(date, period, -number); }
    getWeekday(date) {
        const day = toGregorian$2(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    }
    getWeekNumber(week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        const date = week[thursdayIndex];
        const jsDate = toGregorian$2(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        const time = jsDate.getTime();
        const startDate = toGregorian$2(new NgbDate(date.year, 1, 1));
        return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
    }
    getToday() { return fromGregorian$2(new Date()); }
    isValid(date) {
        return date != null && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) &&
            !isNaN(toGregorian$2(date).getTime());
    }
}
NgbCalendarPersian.ɵfac = /*@__PURE__*/ function () { let ɵNgbCalendarPersian_BaseFactory; return function NgbCalendarPersian_Factory(t) { return (ɵNgbCalendarPersian_BaseFactory || (ɵNgbCalendarPersian_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbCalendarPersian)))(t || NgbCalendarPersian); }; }();
NgbCalendarPersian.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbCalendarPersian, factory: NgbCalendarPersian.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCalendarPersian, [{
        type: Injectable
    }], null, null); })();

const PARTS_PER_HOUR = 1080;
const PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
const PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
const PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
const BAHARAD = 11 * PARTS_PER_HOUR + 204;
const HEBREW_DAY_ON_JAN_1_1970 = 2092591;
const GREGORIAN_EPOCH = 1721425.5;
function isGregorianLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function numberOfFirstDayInYear(year) {
    let monthsBeforeYear = Math.floor((235 * year - 234) / 19);
    let fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
    let dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
    let timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
    let dayOfWeek = dayNumber % 7; // 0 == Monday
    if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
        dayNumber++;
        dayOfWeek = dayNumber % 7;
    }
    if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
        dayNumber += 2;
    }
    else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
        dayNumber++;
    }
    return dayNumber;
}
function getDaysInGregorianMonth(month, year) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isGregorianLeapYear(year)) {
        days[1]++;
    }
    return days[month - 1];
}
function getHebrewMonths(year) {
    return isHebrewLeapYear(year) ? 13 : 12;
}
/**
 * Returns the number of days in a specific Hebrew year.
 * `year` is any Hebrew year.
 */
function getDaysInHebrewYear(year) {
    return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}
function isHebrewLeapYear(year) {
    if (year != null) {
        let b = (year * 12 + 17) % 19;
        return b >= ((b < 0) ? -7 : 12);
    }
    return false;
}
/**
 * Returns the number of days in a specific Hebrew month.
 * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
 * `year` is any Hebrew year.
 */
function getDaysInHebrewMonth(month, year) {
    let yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
    let yearType = (yearLength <= 380 ? yearLength : (yearLength - 30)) - 353;
    let leapYear = isHebrewLeapYear(year);
    let daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] :
        [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
    if (yearType > 0) {
        daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
    }
    if (yearType > 1) {
        daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
    }
    return daysInMonth[month - 1];
}
function getDayNumberInHebrewYear(date) {
    let numberOfDay = 0;
    for (let i = 1; i < date.month; i++) {
        numberOfDay += getDaysInHebrewMonth(i, date.year);
    }
    return numberOfDay + date.day;
}
function setHebrewMonth(date, val) {
    let after = val >= 0;
    if (!after) {
        val = -val;
    }
    while (val > 0) {
        if (after) {
            if (val > getHebrewMonths(date.year) - date.month) {
                val -= getHebrewMonths(date.year) - date.month + 1;
                date.year++;
                date.month = 1;
            }
            else {
                date.month += val;
                val = 0;
            }
        }
        else {
            if (val >= date.month) {
                date.year--;
                val -= date.month;
                date.month = getHebrewMonths(date.year);
            }
            else {
                date.month -= val;
                val = 0;
            }
        }
    }
    return date;
}
function setHebrewDay(date, val) {
    let after = val >= 0;
    if (!after) {
        val = -val;
    }
    while (val > 0) {
        if (after) {
            if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
                val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
                date.year++;
                date.month = 1;
                date.day = 1;
            }
            else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
                val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
                date.month++;
                date.day = 1;
            }
            else {
                date.day += val;
                val = 0;
            }
        }
        else {
            if (val >= date.day) {
                val -= date.day;
                date.month--;
                if (date.month === 0) {
                    date.year--;
                    date.month = getHebrewMonths(date.year);
                }
                date.day = getDaysInHebrewMonth(date.month, date.year);
            }
            else {
                date.day -= val;
                val = 0;
            }
        }
    }
    return date;
}
/**
 * Returns the equivalent Hebrew date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Hebrew date.
 */
function fromGregorian$1(gdate) {
    const date = new Date(gdate);
    const gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
    let julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) -
        Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
        Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gYear) ? -1 : -2) + gDay);
    julianDay = Math.floor(julianDay + 0.5);
    let daysSinceHebEpoch = julianDay - 347997;
    let monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
    let hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
    let firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    let dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
    while (dayOfYear < 1) {
        hYear--;
        firstDayOfThisYear = numberOfFirstDayInYear(hYear);
        dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
    }
    let hMonth = 1;
    let hDay = dayOfYear;
    while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
        hDay -= getDaysInHebrewMonth(hMonth, hYear);
        hMonth++;
    }
    return new NgbDate(hYear, hMonth, hDay);
}
/**
 * Returns the equivalent JS date value for a given Hebrew date.
 * `hebrewDate` is an Hebrew date to be converted to Gregorian.
 */
function toGregorian$1(hebrewDate) {
    const hYear = hebrewDate.year;
    const hMonth = hebrewDate.month;
    const hDay = hebrewDate.day;
    let days = numberOfFirstDayInYear(hYear);
    for (let i = 1; i < hMonth; i++) {
        days += getDaysInHebrewMonth(i, hYear);
    }
    days += hDay;
    let diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
    let after = diffDays >= 0;
    if (!after) {
        diffDays = -diffDays;
    }
    let gYear = 1970;
    let gMonth = 1;
    let gDay = 1;
    while (diffDays > 0) {
        if (after) {
            if (diffDays >= (isGregorianLeapYear(gYear) ? 366 : 365)) {
                diffDays -= isGregorianLeapYear(gYear) ? 366 : 365;
                gYear++;
            }
            else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                gMonth++;
            }
            else {
                gDay += diffDays;
                diffDays = 0;
            }
        }
        else {
            if (diffDays >= (isGregorianLeapYear(gYear - 1) ? 366 : 365)) {
                diffDays -= isGregorianLeapYear(gYear - 1) ? 366 : 365;
                gYear--;
            }
            else {
                if (gMonth > 1) {
                    gMonth--;
                }
                else {
                    gMonth = 12;
                    gYear--;
                }
                if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                    diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                }
                else {
                    gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
                    diffDays = 0;
                }
            }
        }
    }
    return new Date(gYear, gMonth - 1, gDay);
}
function hebrewNumerals(numerals) {
    if (!numerals) {
        return '';
    }
    const hArray0_9 = ['', '\u05d0', '\u05d1', '\u05d2', '\u05d3', '\u05d4', '\u05d5', '\u05d6', '\u05d7', '\u05d8'];
    const hArray10_19 = [
        '\u05d9', '\u05d9\u05d0', '\u05d9\u05d1', '\u05d9\u05d2', '\u05d9\u05d3', '\u05d8\u05d5', '\u05d8\u05d6',
        '\u05d9\u05d6', '\u05d9\u05d7', '\u05d9\u05d8'
    ];
    const hArray20_90 = ['', '', '\u05db', '\u05dc', '\u05de', '\u05e0', '\u05e1', '\u05e2', '\u05e4', '\u05e6'];
    const hArray100_900 = [
        '', '\u05e7', '\u05e8', '\u05e9', '\u05ea', '\u05ea\u05e7', '\u05ea\u05e8', '\u05ea\u05e9', '\u05ea\u05ea',
        '\u05ea\u05ea\u05e7'
    ];
    const hArray1000_9000 = [
        '', '\u05d0', '\u05d1', '\u05d1\u05d0', '\u05d1\u05d1', '\u05d4', '\u05d4\u05d0', '\u05d4\u05d1',
        '\u05d4\u05d1\u05d0', '\u05d4\u05d1\u05d1'
    ];
    const geresh = '\u05f3', gershaim = '\u05f4';
    let mem = 0;
    let result = [];
    let step = 0;
    while (numerals > 0) {
        let m = numerals % 10;
        if (step === 0) {
            mem = m;
        }
        else if (step === 1) {
            if (m !== 1) {
                result.unshift(hArray20_90[m], hArray0_9[mem]);
            }
            else {
                result.unshift(hArray10_19[mem]);
            }
        }
        else if (step === 2) {
            result.unshift(hArray100_900[m]);
        }
        else {
            if (m !== 5) {
                result.unshift(hArray1000_9000[m], geresh, ' ');
            }
            break;
        }
        numerals = Math.floor(numerals / 10);
        if (step === 0 && numerals === 0) {
            result.unshift(hArray0_9[m]);
        }
        step++;
    }
    result = result.join('').split('');
    if (result.length === 1) {
        result.push(geresh);
    }
    else if (result.length > 1) {
        result.splice(result.length - 1, 0, gershaim);
    }
    return result.join('');
}

/**
 * @since 3.2.0
 */
class NgbCalendarHebrew extends NgbCalendar {
    getDaysPerWeek() { return 7; }
    getMonths(year) {
        if (year && isHebrewLeapYear(year)) {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        }
        else {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
    }
    getWeeksPerMonth() { return 6; }
    isValid(date) {
        if (date != null) {
            let b = isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
            b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
            b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
            return b && !isNaN(toGregorian$1(date).getTime());
        }
        return false;
    }
    getNext(date, period = 'd', number = 1) {
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date.year += number;
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = setHebrewMonth(date, number);
                date.day = 1;
                return date;
            case 'd':
                return setHebrewDay(date, number);
            default:
                return date;
        }
    }
    getPrev(date, period = 'd', number = 1) { return this.getNext(date, period, -number); }
    getWeekday(date) {
        const day = toGregorian$1(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    }
    getWeekNumber(week, firstDayOfWeek) {
        const date = week[week.length - 1];
        return Math.ceil(getDayNumberInHebrewYear(date) / 7);
    }
    getToday() { return fromGregorian$1(new Date()); }
    /**
     * @since 3.4.0
     */
    toGregorian(date) { return fromJSDate(toGregorian$1(date)); }
    /**
     * @since 3.4.0
     */
    fromGregorian(date) { return fromGregorian$1(toJSDate(date)); }
}
NgbCalendarHebrew.ɵfac = /*@__PURE__*/ function () { let ɵNgbCalendarHebrew_BaseFactory; return function NgbCalendarHebrew_Factory(t) { return (ɵNgbCalendarHebrew_BaseFactory || (ɵNgbCalendarHebrew_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbCalendarHebrew)))(t || NgbCalendarHebrew); }; }();
NgbCalendarHebrew.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbCalendarHebrew, factory: NgbCalendarHebrew.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCalendarHebrew, [{
        type: Injectable
    }], null, null); })();

const WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
const MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
const MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * @since 3.2.0
 */
class NgbDatepickerI18nHebrew extends NgbDatepickerI18n {
    getMonthShortName(month, year) { return this.getMonthFullName(month, year); }
    getMonthFullName(month, year) {
        return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] || '' : MONTHS[month - 1] || '';
    }
    getWeekdayLabel(weekday, width) { return WEEKDAYS[weekday - 1] || ''; }
    getDayAriaLabel(date) {
        return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
    }
    getDayNumerals(date) { return hebrewNumerals(date.day); }
    getWeekNumerals(weekNumber) { return hebrewNumerals(weekNumber); }
    getYearNumerals(year) { return hebrewNumerals(year); }
}
NgbDatepickerI18nHebrew.ɵfac = /*@__PURE__*/ function () { let ɵNgbDatepickerI18nHebrew_BaseFactory; return function NgbDatepickerI18nHebrew_Factory(t) { return (ɵNgbDatepickerI18nHebrew_BaseFactory || (ɵNgbDatepickerI18nHebrew_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbDatepickerI18nHebrew)))(t || NgbDatepickerI18nHebrew); }; }();
NgbDatepickerI18nHebrew.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbDatepickerI18nHebrew, factory: NgbDatepickerI18nHebrew.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerI18nHebrew, [{
        type: Injectable
    }], null, null); })();

/**
 * Returns the equivalent JS date value for a give input Buddhist date.
 * `date` is an Buddhist date to be converted to Gregorian.
 */
function toGregorian(date) {
    return new Date(date.year - 543, date.month - 1, date.day);
}
/**
 * Returns the equivalent Buddhist date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Buddhist.
 * utc to local
 */
function fromGregorian(gdate) {
    return new NgbDate(gdate.getFullYear() + 543, gdate.getMonth() + 1, gdate.getDate());
}

/**
 * @since 9.1.0
 */
class NgbCalendarBuddhist extends NgbCalendarGregorian {
    getToday() { return fromGregorian(new Date()); }
    getNext(date, period = 'd', number = 1) {
        let jsDate = toGregorian(date);
        let checkMonth = true;
        let expectedMonth = jsDate.getMonth();
        switch (period) {
            case 'y':
                jsDate.setFullYear(jsDate.getFullYear() + number);
                break;
            case 'm':
                expectedMonth += number;
                jsDate.setMonth(expectedMonth);
                expectedMonth = expectedMonth % 12;
                if (expectedMonth < 0) {
                    expectedMonth = expectedMonth + 12;
                }
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                checkMonth = false;
                break;
            default:
                return date;
        }
        if (checkMonth && jsDate.getMonth() !== expectedMonth) {
            // this means the destination month has less days than the initial month
            // let's go back to the end of the previous month:
            jsDate.setDate(0);
        }
        return fromGregorian(jsDate);
    }
    getPrev(date, period = 'd', number = 1) { return this.getNext(date, period, -number); }
    getWeekday(date) {
        let jsDate = toGregorian(date);
        let day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    }
    getWeekNumber(week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        let date = week[thursdayIndex];
        const jsDate = toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        const time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    }
    isValid(date) {
        if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
            return false;
        }
        // year 0 doesn't exist in Gregorian calendar
        if (date.year === 0) {
            return false;
        }
        const jsDate = toGregorian(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year - 543 &&
            jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
    }
}
NgbCalendarBuddhist.ɵfac = /*@__PURE__*/ function () { let ɵNgbCalendarBuddhist_BaseFactory; return function NgbCalendarBuddhist_Factory(t) { return (ɵNgbCalendarBuddhist_BaseFactory || (ɵNgbCalendarBuddhist_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbCalendarBuddhist)))(t || NgbCalendarBuddhist); }; }();
NgbCalendarBuddhist.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbCalendarBuddhist, factory: NgbCalendarBuddhist.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbCalendarBuddhist, [{
        type: Injectable
    }], null, null); })();

/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
class NgbDateNativeAdapter extends NgbDateAdapter {
    /**
     * Converts a native `Date` to a `NgbDateStruct`.
     */
    fromModel(date) {
        return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
    }
    /**
     * Converts a `NgbDateStruct` to a native `Date`.
     */
    toModel(date) {
        return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) :
            null;
    }
    _fromNativeDate(date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    _toNativeDate(date) {
        const jsDate = new Date(date.year, date.month - 1, date.day, 12);
        // avoid 30 -> 1930 conversion
        jsDate.setFullYear(date.year);
        return jsDate;
    }
}
NgbDateNativeAdapter.ɵfac = /*@__PURE__*/ function () { let ɵNgbDateNativeAdapter_BaseFactory; return function NgbDateNativeAdapter_Factory(t) { return (ɵNgbDateNativeAdapter_BaseFactory || (ɵNgbDateNativeAdapter_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbDateNativeAdapter)))(t || NgbDateNativeAdapter); }; }();
NgbDateNativeAdapter.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbDateNativeAdapter, factory: NgbDateNativeAdapter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDateNativeAdapter, [{
        type: Injectable
    }], null, null); })();

/**
 * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
 *
 * @since 3.2.0
 */
class NgbDateNativeUTCAdapter extends NgbDateNativeAdapter {
    _fromNativeDate(date) {
        return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
    }
    _toNativeDate(date) {
        const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
        // avoid 30 -> 1930 conversion
        jsDate.setUTCFullYear(date.year);
        return jsDate;
    }
}
NgbDateNativeUTCAdapter.ɵfac = /*@__PURE__*/ function () { let ɵNgbDateNativeUTCAdapter_BaseFactory; return function NgbDateNativeUTCAdapter_Factory(t) { return (ɵNgbDateNativeUTCAdapter_BaseFactory || (ɵNgbDateNativeUTCAdapter_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbDateNativeUTCAdapter)))(t || NgbDateNativeUTCAdapter); }; }();
NgbDateNativeUTCAdapter.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbDateNativeUTCAdapter, factory: NgbDateNativeUTCAdapter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDateNativeUTCAdapter, [{
        type: Injectable
    }], null, null); })();

class NgbDatepickerModule {
}
NgbDatepickerModule.ɵfac = function NgbDatepickerModule_Factory(t) { return new (t || NgbDatepickerModule)(); };
NgbDatepickerModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbDatepickerModule });
NgbDatepickerModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDatepickerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgbDatepicker, NgbDatepickerContent, NgbDatepickerMonth, NgbDatepickerNavigation, NgbDatepickerNavigationSelect,
                    NgbDatepickerDayView, NgbInputDatepicker
                ],
                exports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth],
                imports: [CommonModule, FormsModule],
                entryComponents: [NgbDatepicker]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbDatepickerModule, { declarations: function () { return [NgbDatepicker, NgbDatepickerContent, NgbDatepickerMonth, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView, NgbInputDatepicker]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth]; } }); })();

/**
 * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
class NgbDropdownConfig {
    constructor() {
        this.autoClose = true;
        this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    }
}
NgbDropdownConfig.ɵfac = function NgbDropdownConfig_Factory(t) { return new (t || NgbDropdownConfig)(); };
NgbDropdownConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbDropdownConfig_Factory() { return new NgbDropdownConfig(); }, token: NgbDropdownConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDropdownConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

class NgbNavbar {
}
NgbNavbar.ɵfac = function NgbNavbar_Factory(t) { return new (t || NgbNavbar)(); };
NgbNavbar.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbNavbar, selectors: [["", 8, "navbar"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNavbar, [{
        type: Directive,
        args: [{ selector: '.navbar' }]
    }], null, null); })();
/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * @since 4.1.0
 */
class NgbDropdownItem {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
    }
    set disabled(value) {
        this._disabled = value === '' || value === true; // accept an empty attribute as true
    }
    get disabled() { return this._disabled; }
}
NgbDropdownItem.ɵfac = function NgbDropdownItem_Factory(t) { return new (t || NgbDropdownItem)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbDropdownItem.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbDropdownItem, selectors: [["", "ngbDropdownItem", ""]], hostAttrs: [1, "dropdown-item"], hostVars: 2, hostBindings: function NgbDropdownItem_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" } });
NgbDropdownItem.ctorParameters = () => [
    { type: ElementRef }
];
NgbDropdownItem.propDecorators = {
    disabled: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDropdownItem, [{
        type: Directive,
        args: [{ selector: '[ngbDropdownItem]', host: { 'class': 'dropdown-item', '[class.disabled]': 'disabled' } }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { disabled: [{
            type: Input
        }] }); })();
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */
class NgbDropdownMenu {
    constructor(dropdown, _elementRef) {
        this.dropdown = dropdown;
        this.placement = 'bottom';
        this.isOpen = false;
        this.nativeElement = _elementRef.nativeElement;
    }
}
NgbDropdownMenu.ɵfac = function NgbDropdownMenu_Factory(t) { return new (t || NgbDropdownMenu)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => NgbDropdown)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbDropdownMenu.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbDropdownMenu, selectors: [["", "ngbDropdownMenu", ""]], contentQueries: function NgbDropdownMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbDropdownItem, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menuItems = _t);
    } }, hostVars: 5, hostBindings: function NgbDropdownMenu_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown.ArrowUp", function NgbDropdownMenu_keydown_ArrowUp_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.ArrowDown", function NgbDropdownMenu_keydown_ArrowDown_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.Home", function NgbDropdownMenu_keydown_Home_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.End", function NgbDropdownMenu_keydown_End_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.Enter", function NgbDropdownMenu_keydown_Enter_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.Space", function NgbDropdownMenu_keydown_Space_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.Tab", function NgbDropdownMenu_keydown_Tab_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.Shift.Tab", function NgbDropdownMenu_keydown_Shift_Tab_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("x-placement", ctx.placement);
        ɵngcc0.ɵɵclassProp("dropdown-menu", true)("show", ctx.dropdown.isOpen());
    } } });
NgbDropdownMenu.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgbDropdown),] }] },
    { type: ElementRef }
];
NgbDropdownMenu.propDecorators = {
    menuItems: [{ type: ContentChildren, args: [NgbDropdownItem,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDropdownMenu, [{
        type: Directive,
        args: [{
                selector: '[ngbDropdownMenu]',
                host: {
                    '[class.dropdown-menu]': 'true',
                    '[class.show]': 'dropdown.isOpen()',
                    '[attr.x-placement]': 'placement',
                    '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                    '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                    '(keydown.Home)': 'dropdown.onKeyDown($event)',
                    '(keydown.End)': 'dropdown.onKeyDown($event)',
                    '(keydown.Enter)': 'dropdown.onKeyDown($event)',
                    '(keydown.Space)': 'dropdown.onKeyDown($event)',
                    '(keydown.Tab)': 'dropdown.onKeyDown($event)',
                    '(keydown.Shift.Tab)': 'dropdown.onKeyDown($event)'
                }
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgbDropdown)]
            }] }, { type: ɵngcc0.ElementRef }]; }, { menuItems: [{
            type: ContentChildren,
            args: [NgbDropdownItem]
        }] }); })();
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * @since 1.1.0
 */
class NgbDropdownAnchor {
    constructor(dropdown, _elementRef) {
        this.dropdown = dropdown;
        this.nativeElement = _elementRef.nativeElement;
    }
}
NgbDropdownAnchor.ɵfac = function NgbDropdownAnchor_Factory(t) { return new (t || NgbDropdownAnchor)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => NgbDropdown)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbDropdownAnchor.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbDropdownAnchor, selectors: [["", "ngbDropdownAnchor", ""]], hostAttrs: [1, "dropdown-toggle"], hostVars: 1, hostBindings: function NgbDropdownAnchor_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.dropdown.isOpen());
    } } });
NgbDropdownAnchor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgbDropdown),] }] },
    { type: ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDropdownAnchor, [{
        type: Directive,
        args: [{ selector: '[ngbDropdownAnchor]', host: { 'class': 'dropdown-toggle', '[attr.aria-expanded]': 'dropdown.isOpen()' } }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgbDropdown)]
            }] }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */
class NgbDropdownToggle extends NgbDropdownAnchor {
    constructor(dropdown, elementRef) {
        super(dropdown, elementRef);
    }
}
NgbDropdownToggle.ɵfac = function NgbDropdownToggle_Factory(t) { return new (t || NgbDropdownToggle)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => NgbDropdown)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbDropdownToggle.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbDropdownToggle, selectors: [["", "ngbDropdownToggle", ""]], hostAttrs: [1, "dropdown-toggle"], hostVars: 1, hostBindings: function NgbDropdownToggle_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgbDropdownToggle_click_HostBindingHandler() { return ctx.dropdown.toggle(); })("keydown.ArrowUp", function NgbDropdownToggle_keydown_ArrowUp_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.ArrowDown", function NgbDropdownToggle_keydown_ArrowDown_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.Home", function NgbDropdownToggle_keydown_Home_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.End", function NgbDropdownToggle_keydown_End_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.Tab", function NgbDropdownToggle_keydown_Tab_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); })("keydown.Shift.Tab", function NgbDropdownToggle_keydown_Shift_Tab_HostBindingHandler($event) { return ctx.dropdown.onKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.dropdown.isOpen());
    } }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NgbDropdownAnchor, useExisting: forwardRef(() => NgbDropdownToggle) }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
NgbDropdownToggle.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgbDropdown),] }] },
    { type: ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDropdownToggle, [{
        type: Directive,
        args: [{
                selector: '[ngbDropdownToggle]',
                host: {
                    'class': 'dropdown-toggle',
                    '[attr.aria-expanded]': 'dropdown.isOpen()',
                    '(click)': 'dropdown.toggle()',
                    '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                    '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                    '(keydown.Home)': 'dropdown.onKeyDown($event)',
                    '(keydown.End)': 'dropdown.onKeyDown($event)',
                    '(keydown.Tab)': 'dropdown.onKeyDown($event)',
                    '(keydown.Shift.Tab)': 'dropdown.onKeyDown($event)'
                },
                providers: [{ provide: NgbDropdownAnchor, useExisting: forwardRef(() => NgbDropdownToggle) }]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgbDropdown)]
            }] }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */
class NgbDropdown {
    constructor(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, ngbNavbar) {
        this._changeDetector = _changeDetector;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._closed$ = new Subject();
        this._bodyContainer = null;
        /**
         * Defines whether or not the dropdown menu is opened initially.
         */
        this._open = false;
        /**
         * An event fired when the dropdown is opened or closed.
         *
         * The event payload is a `boolean`:
         * * `true` - the dropdown was opened
         * * `false` - the dropdown was closed
         */
        this.openChange = new EventEmitter();
        this.placement = config.placement;
        this.container = config.container;
        this.autoClose = config.autoClose;
        this.display = ngbNavbar ? 'static' : 'dynamic';
        this._zoneSubscription = _ngZone.onStable.subscribe(() => { this._positionMenu(); });
    }
    ngAfterContentInit() {
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this._applyPlacementClasses();
            if (this._open) {
                this._setCloseHandlers();
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.container && this._open) {
            this._applyContainer(this.container);
        }
        if (changes.placement && !changes.placement.isFirstChange) {
            this._applyPlacementClasses();
        }
        if (changes.dropdownClass) {
            const { currentValue, previousValue } = changes.dropdownClass;
            this._applyCustomDropdownClass(currentValue, previousValue);
        }
    }
    /**
     * Checks if the dropdown menu is open.
     */
    isOpen() { return this._open; }
    /**
     * Opens the dropdown menu.
     */
    open() {
        if (!this._open) {
            this._open = true;
            this._applyContainer(this.container);
            this.openChange.emit(true);
            this._setCloseHandlers();
            if (this._anchor) {
                this._anchor.nativeElement.focus();
            }
        }
    }
    _setCloseHandlers() {
        ngbAutoClose(this._ngZone, this._document, this.autoClose, (source) => {
            this.close();
            if (source === 0 /* ESCAPE */) {
                this._anchor.nativeElement.focus();
            }
        }, this._closed$, this._menu ? [this._menu.nativeElement] : [], this._anchor ? [this._anchor.nativeElement] : [], '.dropdown-item,.dropdown-divider');
    }
    /**
     * Closes the dropdown menu.
     */
    close() {
        if (this._open) {
            this._open = false;
            this._resetContainer();
            this._closed$.next();
            this.openChange.emit(false);
            this._changeDetector.markForCheck();
        }
    }
    /**
     * Toggles the dropdown menu.
     */
    toggle() {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    }
    ngOnDestroy() {
        this._resetContainer();
        this._closed$.next();
        this._zoneSubscription.unsubscribe();
    }
    onKeyDown(event) {
        // tslint:disable-next-line:deprecation
        const key = event.which;
        const itemElements = this._getMenuElements();
        let position = -1;
        let itemElement = null;
        const isEventFromToggle = this._isEventFromToggle(event);
        if (!isEventFromToggle && itemElements.length) {
            itemElements.forEach((item, index) => {
                if (item.contains(event.target)) {
                    itemElement = item;
                }
                if (item === this._document.activeElement) {
                    position = index;
                }
            });
        }
        // closing on Enter / Space
        if (key === Key.Space || key === Key.Enter) {
            if (itemElement && (this.autoClose === true || this.autoClose === 'inside')) {
                // Item is either a button or a link, so click will be triggered by the browser on Enter or Space.
                // So we have to register a one-time click handler that will fire after any user defined click handlers
                // to close the dropdown
                fromEvent(itemElement, 'click').pipe(take(1)).subscribe(() => this.close());
            }
            return;
        }
        if (key === Key.Tab) {
            if (event.target && this.isOpen() && this.autoClose) {
                if (this._anchor.nativeElement === event.target) {
                    if (this.container === 'body' && !event.shiftKey) {
                        /* This case is special: user is using [Tab] from the anchor/toggle.
                           User expects the next focusable element in the dropdown menu to get focus.
                           But the menu is not a sibling to anchor/toggle, it is at the end of the body.
                           Trick is to synchronously focus the menu element, and let the [keydown.Tab] go
                           so that browser will focus the proper element (first one focusable in the menu) */
                        this._renderer.setAttribute(this._menu.nativeElement, 'tabindex', '0');
                        this._menu.nativeElement.focus();
                        this._renderer.removeAttribute(this._menu.nativeElement, 'tabindex');
                    }
                    else if (event.shiftKey) {
                        this.close();
                    }
                    return;
                }
                else if (this.container === 'body') {
                    const focusableElements = this._menu.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
                    if (event.shiftKey && event.target === focusableElements[0]) {
                        this._anchor.nativeElement.focus();
                        event.preventDefault();
                    }
                    else if (!event.shiftKey && event.target === focusableElements[focusableElements.length - 1]) {
                        this._anchor.nativeElement.focus();
                        this.close();
                    }
                }
                else {
                    fromEvent(event.target, 'focusout').pipe(take(1)).subscribe(({ relatedTarget }) => {
                        if (!this._elementRef.nativeElement.contains(relatedTarget)) {
                            this.close();
                        }
                    });
                }
            }
            return;
        }
        // opening / navigating
        if (isEventFromToggle || itemElement) {
            this.open();
            if (itemElements.length) {
                switch (key) {
                    case Key.ArrowDown:
                        position = Math.min(position + 1, itemElements.length - 1);
                        break;
                    case Key.ArrowUp:
                        if (this._isDropup() && position === -1) {
                            position = itemElements.length - 1;
                            break;
                        }
                        position = Math.max(position - 1, 0);
                        break;
                    case Key.Home:
                        position = 0;
                        break;
                    case Key.End:
                        position = itemElements.length - 1;
                        break;
                }
                itemElements[position].focus();
            }
            event.preventDefault();
        }
    }
    _isDropup() { return this._elementRef.nativeElement.classList.contains('dropup'); }
    _isEventFromToggle(event) {
        return this._anchor.nativeElement.contains(event.target);
    }
    _getMenuElements() {
        const menu = this._menu;
        if (menu == null) {
            return [];
        }
        return menu.menuItems.filter(item => !item.disabled).map(item => item.elementRef.nativeElement);
    }
    _positionMenu() {
        const menu = this._menu;
        if (this.isOpen() && menu) {
            this._applyPlacementClasses(this.display === 'dynamic' ? positionElements(this._anchor.nativeElement, this._bodyContainer || this._menu.nativeElement, this.placement, this.container === 'body') :
                this._getFirstPlacement(this.placement));
        }
    }
    _getFirstPlacement(placement) {
        return Array.isArray(placement) ? placement[0] : placement.split(' ')[0];
    }
    _resetContainer() {
        const renderer = this._renderer;
        if (this._menu) {
            const dropdownElement = this._elementRef.nativeElement;
            const dropdownMenuElement = this._menu.nativeElement;
            renderer.appendChild(dropdownElement, dropdownMenuElement);
            renderer.removeStyle(dropdownMenuElement, 'position');
            renderer.removeStyle(dropdownMenuElement, 'transform');
        }
        if (this._bodyContainer) {
            renderer.removeChild(this._document.body, this._bodyContainer);
            this._bodyContainer = null;
        }
    }
    _applyContainer(container = null) {
        this._resetContainer();
        if (container === 'body') {
            const renderer = this._renderer;
            const dropdownMenuElement = this._menu.nativeElement;
            const bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div');
            // Override some styles to have the positioning working
            renderer.setStyle(bodyContainer, 'position', 'absolute');
            renderer.setStyle(dropdownMenuElement, 'position', 'static');
            renderer.setStyle(bodyContainer, 'z-index', '1050');
            renderer.appendChild(bodyContainer, dropdownMenuElement);
            renderer.appendChild(this._document.body, bodyContainer);
        }
        this._applyCustomDropdownClass(this.dropdownClass);
    }
    _applyCustomDropdownClass(newClass, oldClass) {
        const targetElement = this.container === 'body' ? this._bodyContainer : this._elementRef.nativeElement;
        if (targetElement) {
            if (oldClass) {
                this._renderer.removeClass(targetElement, oldClass);
            }
            if (newClass) {
                this._renderer.addClass(targetElement, newClass);
            }
        }
    }
    _applyPlacementClasses(placement) {
        const menu = this._menu;
        if (menu) {
            if (!placement) {
                placement = this._getFirstPlacement(this.placement);
            }
            const renderer = this._renderer;
            const dropdownElement = this._elementRef.nativeElement;
            // remove the current placement classes
            renderer.removeClass(dropdownElement, 'dropup');
            renderer.removeClass(dropdownElement, 'dropdown');
            menu.placement = this.display === 'static' ? null : placement;
            /*
            * apply the new placement
            * in case of top use up-arrow or down-arrow otherwise
            */
            const dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
            renderer.addClass(dropdownElement, dropdownClass);
            const bodyContainer = this._bodyContainer;
            if (bodyContainer) {
                renderer.removeClass(bodyContainer, 'dropup');
                renderer.removeClass(bodyContainer, 'dropdown');
                renderer.addClass(bodyContainer, dropdownClass);
            }
        }
    }
}
NgbDropdown.ɵfac = function NgbDropdown_Factory(t) { return new (t || NgbDropdown)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NgbDropdownConfig), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NgbNavbar, 8)); };
NgbDropdown.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbDropdown, selectors: [["", "ngbDropdown", ""]], contentQueries: function NgbDropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbDropdownMenu, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbDropdownAnchor, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._menu = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._anchor = _t.first);
    } }, hostVars: 2, hostBindings: function NgbDropdown_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("show", ctx.isOpen());
    } }, inputs: { _open: ["open", "_open"], placement: "placement", container: "container", autoClose: "autoClose", display: "display", dropdownClass: "dropdownClass" }, outputs: { openChange: "openChange" }, exportAs: ["ngbDropdown"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NgbDropdown.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgbDropdownConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgbNavbar, decorators: [{ type: Optional }] }
];
NgbDropdown.propDecorators = {
    _menu: [{ type: ContentChild, args: [NgbDropdownMenu, { static: false },] }],
    _anchor: [{ type: ContentChild, args: [NgbDropdownAnchor, { static: false },] }],
    autoClose: [{ type: Input }],
    dropdownClass: [{ type: Input }],
    _open: [{ type: Input, args: ['open',] }],
    placement: [{ type: Input }],
    container: [{ type: Input }],
    display: [{ type: Input }],
    openChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDropdown, [{
        type: Directive,
        args: [{ selector: '[ngbDropdown]', exportAs: 'ngbDropdown', host: { '[class.show]': 'isOpen()' } }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: NgbDropdownConfig }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: NgbNavbar, decorators: [{
                type: Optional
            }] }]; }, { _open: [{
            type: Input,
            args: ['open']
        }], openChange: [{
            type: Output
        }], placement: [{
            type: Input
        }], container: [{
            type: Input
        }], autoClose: [{
            type: Input
        }], display: [{
            type: Input
        }], _menu: [{
            type: ContentChild,
            args: [NgbDropdownMenu, { static: false }]
        }], _anchor: [{
            type: ContentChild,
            args: [NgbDropdownAnchor, { static: false }]
        }], dropdownClass: [{
            type: Input
        }] }); })();

const NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar];
class NgbDropdownModule {
}
NgbDropdownModule.ɵfac = function NgbDropdownModule_Factory(t) { return new (t || NgbDropdownModule)(); };
NgbDropdownModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbDropdownModule });
NgbDropdownModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbDropdownModule, [{
        type: NgModule,
        args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbDropdownModule, { declarations: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar], exports: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar] }); })();

/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
*
* @since 3.1.0
*/
class NgbModalConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.backdrop = true;
        this.keyboard = true;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbModalConfig.ɵfac = function NgbModalConfig_Factory(t) { return new (t || NgbModalConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbModalConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbModalConfig_Factory() { return new NgbModalConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbModalConfig, providedIn: "root" });
NgbModalConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbModalConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

class ContentRef {
    constructor(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}
class PopupService {
    constructor(_type, _injector, _viewContainerRef, _renderer, _ngZone, _componentFactoryResolver, _applicationRef) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
        this._windowRef = null;
        this._contentRef = null;
    }
    open(content, context, animation = false) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), this._viewContainerRef.length, this._injector, this._contentRef.nodes);
        }
        const { nativeElement } = this._windowRef.location;
        const transition$ = this._ngZone.onStable.pipe(take(1), mergeMap(() => ngbRunTransition(this._ngZone, nativeElement, ({ classList }) => classList.add('show'), { animation, runningTransition: 'continue' })));
        return { windowRef: this._windowRef, transition$ };
    }
    close(animation = false) {
        if (!this._windowRef) {
            return of(undefined);
        }
        return ngbRunTransition(this._ngZone, this._windowRef.location.nativeElement, ({ classList }) => classList.remove('show'), { animation, runningTransition: 'stop' })
            .pipe(tap(() => {
            var _a;
            if (this._windowRef) {
                // this is required because of the container='body' option
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
                this._windowRef = null;
            }
            if ((_a = this._contentRef) === null || _a === void 0 ? void 0 : _a.viewRef) {
                this._applicationRef.detachView(this._contentRef.viewRef);
                this._contentRef.viewRef.destroy();
                this._contentRef = null;
            }
        }));
    }
    _getContentRef(content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            const viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText(`${content}`)]]);
        }
    }
}

const noop = () => { };
const ɵ0$2 = noop;
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */
class ScrollBar {
    constructor(_document) {
        this._document = _document;
    }
    /**
     * To be called right before a potential vertical scrollbar would be removed:
     *
     * - if there was a scrollbar, adds some compensation padding to the body
     * to keep the same layout as when the scrollbar is there
     * - if there was none, there is nothing to do
     *
     * @return a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    compensate() {
        const width = this._getWidth();
        return !this._isPresent(width) ? noop : this._adjustBody(width);
    }
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @return a callback used to revert the padding to its previous value
     */
    _adjustBody(scrollbarWidth) {
        const body = this._document.body;
        const userSetPaddingStyle = body.style.paddingRight;
        const actualPadding = parseFloat(window.getComputedStyle(body)['padding-right']);
        body.style['padding-right'] = `${actualPadding + scrollbarWidth}px`;
        return () => body.style['padding-right'] = userSetPaddingStyle;
    }
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @return true if scrollbar is present, false otherwise
     */
    _isPresent(scrollbarWidth) {
        const rect = this._document.body.getBoundingClientRect();
        const bodyToViewportGap = window.innerWidth - (rect.left + rect.right);
        const uncertainty = 0.1 * scrollbarWidth;
        return bodyToViewportGap >= scrollbarWidth - uncertainty;
    }
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @return the width of a scrollbar on this page
     */
    _getWidth() {
        const measurer = this._document.createElement('div');
        measurer.className = 'modal-scrollbar-measure';
        const body = this._document.body;
        body.appendChild(measurer);
        const width = measurer.getBoundingClientRect().width - measurer.clientWidth;
        body.removeChild(measurer);
        return width;
    }
}
ScrollBar.ɵfac = function ScrollBar_Factory(t) { return new (t || ScrollBar)(ɵngcc0.ɵɵinject(DOCUMENT)); };
ScrollBar.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollBar_Factory() { return new ScrollBar(i0.ɵɵinject(i1.DOCUMENT)); }, token: ScrollBar, providedIn: "root" });
ScrollBar.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ScrollBar, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

class NgbModalBackdrop {
    constructor(_el, _zone) {
        this._el = _el;
        this._zone = _zone;
    }
    ngOnInit() {
        this._zone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            ngbRunTransition(this._zone, this._el.nativeElement, (element, animation) => {
                if (animation) {
                    reflow(element);
                }
                element.classList.add('show');
            }, { animation: this.animation, runningTransition: 'continue' });
        });
    }
    hide() {
        return ngbRunTransition(this._zone, this._el.nativeElement, ({ classList }) => classList.remove('show'), { animation: this.animation, runningTransition: 'stop' });
    }
}
NgbModalBackdrop.ɵfac = function NgbModalBackdrop_Factory(t) { return new (t || NgbModalBackdrop)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NgbModalBackdrop.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbModalBackdrop, selectors: [["ngb-modal-backdrop"]], hostAttrs: [2, "z-index", "1050"], hostVars: 6, hostBindings: function NgbModalBackdrop_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassMap("modal-backdrop" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
        ɵngcc0.ɵɵclassProp("show", !ctx.animation)("fade", ctx.animation);
    } }, inputs: { animation: "animation", backdropClass: "backdropClass" }, decls: 0, vars: 0, template: function NgbModalBackdrop_Template(rf, ctx) { }, encapsulation: 2 });
NgbModalBackdrop.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
NgbModalBackdrop.propDecorators = {
    animation: [{ type: Input }],
    backdropClass: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbModalBackdrop, [{
        type: Component,
        args: [{
                selector: 'ngb-modal-backdrop',
                encapsulation: ViewEncapsulation.None,
                template: '',
                host: {
                    '[class]': '"modal-backdrop" + (backdropClass ? " " + backdropClass : "")',
                    '[class.show]': '!animation',
                    '[class.fade]': 'animation',
                    'style': 'z-index: 1050'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { animation: [{
            type: Input
        }], backdropClass: [{
            type: Input
        }] }); })();

/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
class NgbActiveModal {
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbModalRef.result` promise will be resolved with the provided value.
     */
    close(result) { }
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    dismiss(reason) { }
}
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
class NgbModalRef {
    constructor(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        this._closed = new Subject();
        this._dismissed = new Subject();
        this._hidden = new Subject();
        _windowCmptRef.instance.dismissEvent.subscribe((reason) => { this.dismiss(reason); });
        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this.result.then(null, () => { });
    }
    /**
     * The instance of a component used for the modal content.
     *
     * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
     */
    get componentInstance() {
        if (this._contentRef && this._contentRef.componentRef) {
            return this._contentRef.componentRef.instance;
        }
    }
    /**
     * The observable that emits when the modal is closed via the `.close()` method.
     *
     * It will emit the result passed to the `.close()` method.
     *
     * @since 8.0.0
     */
    get closed() { return this._closed.asObservable().pipe(takeUntil(this._hidden)); }
    /**
     * The observable that emits when the modal is dismissed via the `.dismiss()` method.
     *
     * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
     * reasons like backdrop click or ESC key press.
     *
     * @since 8.0.0
     */
    get dismissed() { return this._dismissed.asObservable().pipe(takeUntil(this._hidden)); }
    /**
     * The observable that emits when both modal window and backdrop are closed and animations were finished.
     * At this point modal and backdrop elements will be removed from the DOM tree.
     *
     * This observable will be completed after emitting.
     *
     * @since 8.0.0
     */
    get hidden() { return this._hidden.asObservable(); }
    /**
     * The observable that emits when modal is fully visible and animation was finished.
     * Modal DOM element is always available synchronously after calling 'modal.open()' service.
     *
     * This observable will be completed after emitting.
     * It will not emit, if modal is closed before open animation is finished.
     *
     * @since 8.0.0
     */
    get shown() { return this._windowCmptRef.instance.shown.asObservable(); }
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    close(result) {
        if (this._windowCmptRef) {
            this._closed.next(result);
            this._resolve(result);
            this._removeModalElements();
        }
    }
    _dismiss(reason) {
        this._dismissed.next(reason);
        this._reject(reason);
        this._removeModalElements();
    }
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    dismiss(reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss) {
                this._dismiss(reason);
            }
            else {
                const dismiss = this._beforeDismiss();
                if (dismiss && dismiss.then) {
                    dismiss.then(result => {
                        if (result !== false) {
                            this._dismiss(reason);
                        }
                    }, () => { });
                }
                else if (dismiss !== false) {
                    this._dismiss(reason);
                }
            }
        }
    }
    _removeModalElements() {
        const windowTransition$ = this._windowCmptRef.instance.hide();
        const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : of(undefined);
        // hiding window
        windowTransition$.subscribe(() => {
            const { nativeElement } = this._windowCmptRef.location;
            nativeElement.parentNode.removeChild(nativeElement);
            this._windowCmptRef.destroy();
            if (this._contentRef && this._contentRef.viewRef) {
                this._contentRef.viewRef.destroy();
            }
            this._windowCmptRef = null;
            this._contentRef = null;
        });
        // hiding backdrop
        backdropTransition$.subscribe(() => {
            if (this._backdropCmptRef) {
                const { nativeElement } = this._backdropCmptRef.location;
                nativeElement.parentNode.removeChild(nativeElement);
                this._backdropCmptRef.destroy();
                this._backdropCmptRef = null;
            }
        });
        // all done
        zip(windowTransition$, backdropTransition$).subscribe(() => {
            this._hidden.next();
            this._hidden.complete();
        });
    }
}

var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));

class NgbModalWindow {
    constructor(_document, _elRef, _zone) {
        this._document = _document;
        this._elRef = _elRef;
        this._zone = _zone;
        this._closed$ = new Subject();
        this._elWithFocus = null; // element that is focused prior to modal opening
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new EventEmitter();
        this.shown = new Subject();
        this.hidden = new Subject();
    }
    dismiss(reason) { this.dismissEvent.emit(reason); }
    ngOnInit() {
        this._elWithFocus = this._document.activeElement;
        this._zone.onStable.asObservable().pipe(take(1)).subscribe(() => { this._show(); });
    }
    ngOnDestroy() { this._disableEventHandling(); }
    hide() {
        const { nativeElement } = this._elRef;
        const context = { animation: this.animation, runningTransition: 'stop' };
        const windowTransition$ = ngbRunTransition(this._zone, nativeElement, () => nativeElement.classList.remove('show'), context);
        const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => { }, context);
        const transitions$ = zip(windowTransition$, dialogTransition$);
        transitions$.subscribe(() => {
            this.hidden.next();
            this.hidden.complete();
        });
        this._disableEventHandling();
        this._restoreFocus();
        return transitions$;
    }
    _show() {
        const context = { animation: this.animation, runningTransition: 'continue' };
        const windowTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element, animation) => {
            if (animation) {
                reflow(element);
            }
            element.classList.add('show');
        }, context);
        const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => { }, context);
        zip(windowTransition$, dialogTransition$).subscribe(() => {
            this.shown.next();
            this.shown.complete();
        });
        this._enableEventHandling();
        this._setFocus();
    }
    _enableEventHandling() {
        const { nativeElement } = this._elRef;
        this._zone.runOutsideAngular(() => {
            fromEvent(nativeElement, 'keydown')
                .pipe(takeUntil(this._closed$), 
            // tslint:disable-next-line:deprecation
            filter(e => e.which === Key.Escape))
                .subscribe(event => {
                if (this.keyboard) {
                    requestAnimationFrame(() => {
                        if (!event.defaultPrevented) {
                            this._zone.run(() => this.dismiss(ModalDismissReasons.ESC));
                        }
                    });
                }
                else if (this.backdrop === 'static') {
                    this._bumpBackdrop();
                }
            });
            // We're listening to 'mousedown' and 'mouseup' to prevent modal from closing when pressing the mouse
            // inside the modal dialog and releasing it outside
            let preventClose = false;
            fromEvent(this._dialogEl.nativeElement, 'mousedown')
                .pipe(takeUntil(this._closed$), tap(() => preventClose = false), switchMap(() => fromEvent(nativeElement, 'mouseup').pipe(takeUntil(this._closed$), take(1))), filter(({ target }) => nativeElement === target))
                .subscribe(() => { preventClose = true; });
            // We're listening to 'click' to dismiss modal on modal window click, except when:
            // 1. clicking on modal dialog itself
            // 2. closing was prevented by mousedown/up handlers
            // 3. clicking on scrollbar when the viewport is too small and modal doesn't fit (click is not triggered at all)
            fromEvent(nativeElement, 'click').pipe(takeUntil(this._closed$)).subscribe(({ target }) => {
                if (nativeElement === target) {
                    if (this.backdrop === 'static') {
                        this._bumpBackdrop();
                    }
                    else if (this.backdrop === true && !preventClose) {
                        this._zone.run(() => this.dismiss(ModalDismissReasons.BACKDROP_CLICK));
                    }
                }
                preventClose = false;
            });
        });
    }
    _disableEventHandling() { this._closed$.next(); }
    _setFocus() {
        const { nativeElement } = this._elRef;
        if (!nativeElement.contains(document.activeElement)) {
            const autoFocusable = nativeElement.querySelector(`[ngbAutofocus]`);
            const firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
            const elementToFocus = autoFocusable || firstFocusable || nativeElement;
            elementToFocus.focus();
        }
    }
    _restoreFocus() {
        const body = this._document.body;
        const elWithFocus = this._elWithFocus;
        let elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        this._zone.runOutsideAngular(() => {
            setTimeout(() => elementToFocus.focus());
            this._elWithFocus = null;
        });
    }
    _bumpBackdrop() {
        if (this.backdrop === 'static') {
            ngbRunTransition(this._zone, this._elRef.nativeElement, ({ classList }) => {
                classList.add('modal-static');
                return () => classList.remove('modal-static');
            }, { animation: this.animation, runningTransition: 'continue' });
        }
    }
}
NgbModalWindow.ɵfac = function NgbModalWindow_Factory(t) { return new (t || NgbModalWindow)(ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NgbModalWindow.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbModalWindow, selectors: [["ngb-modal-window"]], viewQuery: function NgbModalWindow_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c31, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._dialogEl = _t.first);
    } }, hostAttrs: ["role", "dialog", "tabindex", "-1"], hostVars: 7, hostBindings: function NgbModalWindow_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy);
        ɵngcc0.ɵɵclassMap("modal d-block" + (ctx.windowClass ? " " + ctx.windowClass : ""));
        ɵngcc0.ɵɵclassProp("fade", ctx.animation);
    } }, inputs: { backdrop: "backdrop", keyboard: "keyboard", animation: "animation", ariaLabelledBy: "ariaLabelledBy", ariaDescribedBy: "ariaDescribedBy", centered: "centered", scrollable: "scrollable", size: "size", windowClass: "windowClass", modalDialogClass: "modalDialogClass" }, outputs: { dismissEvent: "dismiss" }, ngContentSelectors: _c3, decls: 4, vars: 2, consts: [["role", "document"], ["dialog", ""], [1, "modal-content"]], template: function NgbModalWindow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap("modal-dialog" + (ctx.size ? " modal-" + ctx.size : "") + (ctx.centered ? " modal-dialog-centered" : "") + (ctx.scrollable ? " modal-dialog-scrollable" : "") + (ctx.modalDialogClass ? " " + ctx.modalDialogClass : ""));
    } }, styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}"], encapsulation: 2 });
NgbModalWindow.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef },
    { type: NgZone }
];
NgbModalWindow.propDecorators = {
    _dialogEl: [{ type: ViewChild, args: ['dialog', { static: true },] }],
    animation: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    ariaDescribedBy: [{ type: Input }],
    backdrop: [{ type: Input }],
    centered: [{ type: Input }],
    keyboard: [{ type: Input }],
    scrollable: [{ type: Input }],
    size: [{ type: Input }],
    windowClass: [{ type: Input }],
    modalDialogClass: [{ type: Input }],
    dismissEvent: [{ type: Output, args: ['dismiss',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbModalWindow, [{
        type: Component,
        args: [{
                selector: 'ngb-modal-window',
                host: {
                    '[class]': '"modal d-block" + (windowClass ? " " + windowClass : "")',
                    '[class.fade]': 'animation',
                    'role': 'dialog',
                    'tabindex': '-1',
                    '[attr.aria-modal]': 'true',
                    '[attr.aria-labelledby]': 'ariaLabelledBy',
                    '[attr.aria-describedby]': 'ariaDescribedBy'
                },
                template: `
    <div #dialog [class]="'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '') +
     (scrollable ? ' modal-dialog-scrollable' : '') + (modalDialogClass ? ' ' + modalDialogClass : '')" role="document">
        <div class="modal-content"><ng-content></ng-content></div>
    </div>
    `,
                encapsulation: ViewEncapsulation.None,
                styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { backdrop: [{
            type: Input
        }], keyboard: [{
            type: Input
        }], dismissEvent: [{
            type: Output,
            args: ['dismiss']
        }], _dialogEl: [{
            type: ViewChild,
            args: ['dialog', { static: true }]
        }], animation: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], ariaDescribedBy: [{
            type: Input
        }], centered: [{
            type: Input
        }], scrollable: [{
            type: Input
        }], size: [{
            type: Input
        }], windowClass: [{
            type: Input
        }], modalDialogClass: [{
            type: Input
        }] }); })();

class NgbModalStack {
    constructor(_applicationRef, _injector, _document, _scrollBar, _rendererFactory, _ngZone) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._document = _document;
        this._scrollBar = _scrollBar;
        this._rendererFactory = _rendererFactory;
        this._ngZone = _ngZone;
        this._activeWindowCmptHasChanged = new Subject();
        this._ariaHiddenValues = new Map();
        this._backdropAttributes = ['animation', 'backdropClass'];
        this._modalRefs = [];
        this._windowAttributes = [
            'animation', 'ariaLabelledBy', 'ariaDescribedBy', 'backdrop', 'centered', 'keyboard', 'scrollable', 'size',
            'windowClass', 'modalDialogClass'
        ];
        this._windowCmpts = [];
        this._activeInstances = new EventEmitter();
        // Trap focus on active WindowCmpt
        this._activeWindowCmptHasChanged.subscribe(() => {
            if (this._windowCmpts.length) {
                const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
                ngbFocusTrap(this._ngZone, activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);
                this._revertAriaHidden();
                this._setAriaHidden(activeWindowCmpt.location.nativeElement);
            }
        });
    }
    open(moduleCFR, contentInjector, content, options) {
        const containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ?
            this._document.querySelector(options.container) :
            this._document.body;
        const renderer = this._rendererFactory.createRenderer(null, null);
        const revertPaddingForScrollBar = this._scrollBar.compensate();
        const removeBodyClass = () => {
            if (!this._modalRefs.length) {
                renderer.removeClass(this._document.body, 'modal-open');
                this._revertAriaHidden();
            }
        };
        if (!containerEl) {
            throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
        }
        const activeModal = new NgbActiveModal();
        const contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal, options);
        let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : undefined;
        let windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
        let ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        this._registerModalRef(ngbModalRef);
        this._registerWindowCmpt(windowCmptRef);
        ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
        ngbModalRef.result.then(removeBodyClass, removeBodyClass);
        activeModal.close = (result) => { ngbModalRef.close(result); };
        activeModal.dismiss = (reason) => { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        if (this._modalRefs.length === 1) {
            renderer.addClass(this._document.body, 'modal-open');
        }
        if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
            backdropCmptRef.changeDetectorRef.detectChanges();
        }
        windowCmptRef.changeDetectorRef.detectChanges();
        return ngbModalRef;
    }
    get activeInstances() { return this._activeInstances; }
    dismissAll(reason) { this._modalRefs.forEach(ngbModalRef => ngbModalRef.dismiss(reason)); }
    hasOpenModals() { return this._modalRefs.length > 0; }
    _attachBackdrop(moduleCFR, containerEl) {
        let backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
        let backdropCmptRef = backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    }
    _attachWindowComponent(moduleCFR, containerEl, contentRef) {
        let windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
        let windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    }
    _applyWindowOptions(windowInstance, options) {
        this._windowAttributes.forEach((optionName) => {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    }
    _applyBackdropOptions(backdropInstance, options) {
        this._backdropAttributes.forEach((optionName) => {
            if (isDefined(options[optionName])) {
                backdropInstance[optionName] = options[optionName];
            }
        });
    }
    _getContentRef(moduleCFR, contentInjector, content, activeModal, options) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            return this._createFromTemplateRef(content, activeModal);
        }
        else if (isString(content)) {
            return this._createFromString(content);
        }
        else {
            return this._createFromComponent(moduleCFR, contentInjector, content, activeModal, options);
        }
    }
    _createFromTemplateRef(content, activeModal) {
        const context = {
            $implicit: activeModal,
            close(result) { activeModal.close(result); },
            dismiss(reason) { activeModal.dismiss(reason); }
        };
        const viewRef = content.createEmbeddedView(context);
        this._applicationRef.attachView(viewRef);
        return new ContentRef([viewRef.rootNodes], viewRef);
    }
    _createFromString(content) {
        const component = this._document.createTextNode(`${content}`);
        return new ContentRef([[component]]);
    }
    _createFromComponent(moduleCFR, contentInjector, content, context, options) {
        const contentCmptFactory = moduleCFR.resolveComponentFactory(content);
        const modalContentInjector = Injector.create({ providers: [{ provide: NgbActiveModal, useValue: context }], parent: contentInjector });
        const componentRef = contentCmptFactory.create(modalContentInjector);
        const componentNativeEl = componentRef.location.nativeElement;
        if (options.scrollable) {
            componentNativeEl.classList.add('component-host-scrollable');
        }
        this._applicationRef.attachView(componentRef.hostView);
        // FIXME: we should here get rid of the component nativeElement
        // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.
        return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
    }
    _setAriaHidden(element) {
        const parent = element.parentElement;
        if (parent && element !== this._document.body) {
            Array.from(parent.children).forEach(sibling => {
                if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
                    this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            });
            this._setAriaHidden(parent);
        }
    }
    _revertAriaHidden() {
        this._ariaHiddenValues.forEach((value, element) => {
            if (value) {
                element.setAttribute('aria-hidden', value);
            }
            else {
                element.removeAttribute('aria-hidden');
            }
        });
        this._ariaHiddenValues.clear();
    }
    _registerModalRef(ngbModalRef) {
        const unregisterModalRef = () => {
            const index = this._modalRefs.indexOf(ngbModalRef);
            if (index > -1) {
                this._modalRefs.splice(index, 1);
                this._activeInstances.emit(this._modalRefs);
            }
        };
        this._modalRefs.push(ngbModalRef);
        this._activeInstances.emit(this._modalRefs);
        ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
    }
    _registerWindowCmpt(ngbWindowCmpt) {
        this._windowCmpts.push(ngbWindowCmpt);
        this._activeWindowCmptHasChanged.next();
        ngbWindowCmpt.onDestroy(() => {
            const index = this._windowCmpts.indexOf(ngbWindowCmpt);
            if (index > -1) {
                this._windowCmpts.splice(index, 1);
                this._activeWindowCmptHasChanged.next();
            }
        });
    }
}
NgbModalStack.ɵfac = function NgbModalStack_Factory(t) { return new (t || NgbModalStack)(ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(DOCUMENT), ɵngcc0.ɵɵinject(ScrollBar), ɵngcc0.ɵɵinject(ɵngcc0.RendererFactory2), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
NgbModalStack.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbModalStack_Factory() { return new NgbModalStack(i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(ScrollBar), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.NgZone)); }, token: NgbModalStack, providedIn: "root" });
NgbModalStack.ctorParameters = () => [
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ScrollBar },
    { type: RendererFactory2 },
    { type: NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbModalStack, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ScrollBar }, { type: ɵngcc0.RendererFactory2 }, { type: ɵngcc0.NgZone }]; }, null); })();

/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */
class NgbModal {
    constructor(_moduleCFR, _injector, _modalStack, _config) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
        this._config = _config;
    }
    /**
     * Opens a new modal window with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
     * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
     *
     * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
     */
    open(content, options = {}) {
        const combinedOptions = Object.assign(Object.assign(Object.assign({}, this._config), { animation: this._config.animation }), options);
        return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
    }
    /**
     * Returns an observable that holds the active modal instances.
     */
    get activeInstances() { return this._modalStack.activeInstances; }
    /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * @since 3.1.0
     */
    dismissAll(reason) { this._modalStack.dismissAll(reason); }
    /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * @since 3.3.0
     */
    hasOpenModals() { return this._modalStack.hasOpenModals(); }
}
NgbModal.ɵfac = function NgbModal_Factory(t) { return new (t || NgbModal)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(NgbModalStack), ɵngcc0.ɵɵinject(NgbModalConfig)); };
NgbModal.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbModal_Factory() { return new NgbModal(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(NgbModalStack), i0.ɵɵinject(NgbModalConfig)); }, token: NgbModal, providedIn: "root" });
NgbModal.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: NgbModalStack },
    { type: NgbModalConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbModal, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Injector }, { type: NgbModalStack }, { type: NgbModalConfig }]; }, null); })();

class NgbModalModule {
}
NgbModalModule.ɵfac = function NgbModalModule_Factory(t) { return new (t || NgbModalModule)(); };
NgbModalModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbModalModule });
NgbModalModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [NgbModal] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbModalModule, [{
        type: NgModule,
        args: [{
                declarations: [NgbModalBackdrop, NgbModalWindow],
                entryComponents: [NgbModalBackdrop, NgbModalWindow],
                providers: [NgbModal]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbModalModule, { declarations: [NgbModalBackdrop, NgbModalWindow] }); })();

/**
 * A configuration service for the [`NgbNav`](#/components/nav/api#NgbNav) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the navs used in the application.
 *
 * @since 5.2.0
 */
class NgbNavConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.destroyOnHide = true;
        this.orientation = 'horizontal';
        this.roles = 'tablist';
        this.keyboard = false;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbNavConfig.ɵfac = function NgbNavConfig_Factory(t) { return new (t || NgbNavConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbNavConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbNavConfig_Factory() { return new NgbNavConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbNavConfig, providedIn: "root" });
NgbNavConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNavConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

const isValidNavId = (id) => isDefined(id) && id !== '';
const ɵ0$1 = isValidNavId;
let navCounter = 0;
/**
 * This directive must be used to wrap content to be displayed in the nav.
 *
 * @since 5.2.0
 */
class NgbNavContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbNavContent.ɵfac = function NgbNavContent_Factory(t) { return new (t || NgbNavContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbNavContent.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbNavContent, selectors: [["ng-template", "ngbNavContent", ""]] });
NgbNavContent.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNavContent, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbNavContent]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * The directive used to group nav link and related nav content. As well as set nav identifier and some options.
 *
 * @since 5.2.0
 */
class NgbNavItem {
    constructor(nav, elementRef) {
        this.elementRef = elementRef;
        /**
         * If `true`, the current nav item is disabled and can't be toggled by user.
         *
         * Nevertheless disabled nav can be selected programmatically via the `.select()` method and the `[activeId]` binding.
         */
        this.disabled = false;
        /**
         * An event emitted when the fade in transition is finished on the related nav content
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the fade out transition is finished on the related nav content
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        // TODO: cf https://github.com/angular/angular/issues/30106
        this._nav = nav;
    }
    ngAfterContentChecked() {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.contentTpl = this.contentTpls.first;
    }
    ngOnInit() {
        if (!isDefined(this.domId)) {
            this.domId = `ngb-nav-${navCounter++}`;
        }
    }
    get active() { return this._nav.activeId === this.id; }
    get id() { return isValidNavId(this._id) ? this._id : this.domId; }
    get panelDomId() { return `${this.domId}-panel`; }
    isPanelInDom() {
        return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
    }
}
NgbNavItem.ɵfac = function NgbNavItem_Factory(t) { return new (t || NgbNavItem)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => NgbNav)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbNavItem.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbNavItem, selectors: [["", "ngbNavItem", ""]], contentQueries: function NgbNavItem_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbNavContent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentTpls = _t);
    } }, hostVars: 2, hostBindings: function NgbNavItem_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("nav-item", true);
    } }, inputs: { disabled: "disabled", domId: "domId", destroyOnHide: "destroyOnHide", _id: ["ngbNavItem", "_id"] }, outputs: { shown: "shown", hidden: "hidden" }, exportAs: ["ngbNavItem"] });
NgbNavItem.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => NgbNav),] }] },
    { type: ElementRef }
];
NgbNavItem.propDecorators = {
    destroyOnHide: [{ type: Input }],
    disabled: [{ type: Input }],
    domId: [{ type: Input }],
    _id: [{ type: Input, args: ['ngbNavItem',] }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }],
    contentTpls: [{ type: ContentChildren, args: [NgbNavContent, { descendants: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNavItem, [{
        type: Directive,
        args: [{ selector: '[ngbNavItem]', exportAs: 'ngbNavItem', host: { '[class.nav-item]': 'true' } }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgbNav)]
            }] }, { type: ɵngcc0.ElementRef }]; }, { disabled: [{
            type: Input
        }], shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }], domId: [{
            type: Input
        }], destroyOnHide: [{
            type: Input
        }], _id: [{
            type: Input,
            args: ['ngbNavItem']
        }], contentTpls: [{
            type: ContentChildren,
            args: [NgbNavContent, { descendants: false }]
        }] }); })();
/**
 * A nav directive that helps with implementing tabbed navigation components.
 *
 * @since 5.2.0
 */
class NgbNav {
    constructor(role, config, _cd, _document) {
        this.role = role;
        this._cd = _cd;
        this._document = _document;
        /**
         * The event emitted after the active nav changes
         * The payload of the event is the newly active nav id
         *
         * If you want to prevent nav change, you should use `(navChange)` event
         */
        this.activeIdChange = new EventEmitter();
        /**
         * An event emitted when the fade in transition is finished for one of the items.
         *
         * Payload of the event is the nav id that was just shown.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the fade out transition is finished for one of the items.
         *
         * Payload of the event is the nav id that was just hidden.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        this.destroy$ = new Subject();
        this.navItemChange$ = new Subject();
        /**
         * The nav change event emitted right before the nav change happens on user click.
         *
         * This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
         *
         * See [`NgbNavChangeEvent`](#/components/nav/api#NgbNavChangeEvent) for payload details.
         */
        this.navChange = new EventEmitter();
        this.animation = config.animation;
        this.destroyOnHide = config.destroyOnHide;
        this.orientation = config.orientation;
        this.roles = config.roles;
        this.keyboard = config.keyboard;
    }
    click(item) {
        if (!item.disabled) {
            this._updateActiveId(item.id);
        }
    }
    onKeyDown(event) {
        if (this.roles !== 'tablist' || !this.keyboard) {
            return;
        }
        // tslint:disable-next-line: deprecation
        const key = event.which;
        const enabledLinks = this.links.filter(link => !link.navItem.disabled);
        const { length } = enabledLinks;
        let position = -1;
        enabledLinks.forEach((link, index) => {
            if (link.elRef.nativeElement === this._document.activeElement) {
                position = index;
            }
        });
        if (length) {
            switch (key) {
                case Key.ArrowLeft:
                    if (this.orientation === 'vertical') {
                        return;
                    }
                    position = (position - 1 + length) % length;
                    break;
                case Key.ArrowRight:
                    if (this.orientation === 'vertical') {
                        return;
                    }
                    position = (position + 1) % length;
                    break;
                case Key.ArrowDown:
                    if (this.orientation === 'horizontal') {
                        return;
                    }
                    position = (position + 1) % length;
                    break;
                case Key.ArrowUp:
                    if (this.orientation === 'horizontal') {
                        return;
                    }
                    position = (position - 1 + length) % length;
                    break;
                case Key.Home:
                    position = 0;
                    break;
                case Key.End:
                    position = length - 1;
                    break;
            }
            if (this.keyboard === 'changeWithArrows') {
                this.select(enabledLinks[position].navItem.id);
            }
            enabledLinks[position].elRef.nativeElement.focus();
            event.preventDefault();
        }
    }
    /**
     * Selects the nav with the given id and shows its associated pane.
     * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
     */
    select(id) { this._updateActiveId(id, false); }
    ngAfterContentInit() {
        if (!isDefined(this.activeId)) {
            const nextId = this.items.first ? this.items.first.id : null;
            if (isValidNavId(nextId)) {
                this._updateActiveId(nextId, false);
                this._cd.detectChanges();
            }
        }
        this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this._notifyItemChanged(this.activeId));
    }
    ngOnChanges({ activeId }) {
        if (activeId && !activeId.firstChange) {
            this._notifyItemChanged(activeId.currentValue);
        }
    }
    ngOnDestroy() { this.destroy$.next(); }
    _updateActiveId(nextId, emitNavChange = true) {
        if (this.activeId !== nextId) {
            let defaultPrevented = false;
            if (emitNavChange) {
                this.navChange.emit({ activeId: this.activeId, nextId, preventDefault: () => { defaultPrevented = true; } });
            }
            if (!defaultPrevented) {
                this.activeId = nextId;
                this.activeIdChange.emit(nextId);
                this._notifyItemChanged(nextId);
            }
        }
    }
    _notifyItemChanged(nextItemId) { this.navItemChange$.next(this._getItemById(nextItemId)); }
    _getItemById(itemId) {
        return this.items && this.items.find(item => item.id === itemId) || null;
    }
}
NgbNav.ɵfac = function NgbNav_Factory(t) { return new (t || NgbNav)(ɵngcc0.ɵɵinjectAttribute('role'), ɵngcc0.ɵɵdirectiveInject(NgbNavConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
NgbNav.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbNav, selectors: [["", "ngbNav", ""]], contentQueries: function NgbNav_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbNavItem, 4);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbNavLink, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.items = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.links = _t);
    } }, hostVars: 6, hostBindings: function NgbNav_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown.arrowLeft", function NgbNav_keydown_arrowLeft_HostBindingHandler($event) { return ctx.onKeyDown($event); })("keydown.arrowRight", function NgbNav_keydown_arrowRight_HostBindingHandler($event) { return ctx.onKeyDown($event); })("keydown.arrowDown", function NgbNav_keydown_arrowDown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("keydown.arrowUp", function NgbNav_keydown_arrowUp_HostBindingHandler($event) { return ctx.onKeyDown($event); })("keydown.Home", function NgbNav_keydown_Home_HostBindingHandler($event) { return ctx.onKeyDown($event); })("keydown.End", function NgbNav_keydown_End_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-orientation", ctx.orientation === "vertical" && ctx.roles === "tablist" ? "vertical" : undefined)("role", ctx.role ? ctx.role : ctx.roles ? "tablist" : undefined);
        ɵngcc0.ɵɵclassProp("nav", true)("flex-column", ctx.orientation === "vertical");
    } }, inputs: { animation: "animation", destroyOnHide: "destroyOnHide", orientation: "orientation", roles: "roles", keyboard: "keyboard", activeId: "activeId" }, outputs: { activeIdChange: "activeIdChange", shown: "shown", hidden: "hidden", navChange: "navChange" }, exportAs: ["ngbNav"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NgbNav.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: NgbNavConfig },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NgbNav.propDecorators = {
    activeId: [{ type: Input }],
    activeIdChange: [{ type: Output }],
    animation: [{ type: Input }],
    destroyOnHide: [{ type: Input }],
    orientation: [{ type: Input }],
    roles: [{ type: Input }],
    keyboard: [{ type: Input }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }],
    items: [{ type: ContentChildren, args: [NgbNavItem,] }],
    links: [{ type: ContentChildren, args: [forwardRef(() => NgbNavLink), { descendants: true },] }],
    navChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNav, [{
        type: Directive,
        args: [{
                selector: '[ngbNav]',
                exportAs: 'ngbNav',
                host: {
                    '[class.nav]': 'true',
                    '[class.flex-column]': `orientation === 'vertical'`,
                    '[attr.aria-orientation]': `orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined`,
                    '[attr.role]': `role ? role : roles ? 'tablist' : undefined`,
                    '(keydown.arrowLeft)': 'onKeyDown($event)',
                    '(keydown.arrowRight)': 'onKeyDown($event)',
                    '(keydown.arrowDown)': 'onKeyDown($event)',
                    '(keydown.arrowUp)': 'onKeyDown($event)',
                    '(keydown.Home)': 'onKeyDown($event)',
                    '(keydown.End)': 'onKeyDown($event)'
                }
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Attribute,
                args: ['role']
            }] }, { type: NgbNavConfig }, { type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { activeIdChange: [{
            type: Output
        }], shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }], navChange: [{
            type: Output
        }], animation: [{
            type: Input
        }], destroyOnHide: [{
            type: Input
        }], orientation: [{
            type: Input
        }], roles: [{
            type: Input
        }], keyboard: [{
            type: Input
        }], activeId: [{
            type: Input
        }], items: [{
            type: ContentChildren,
            args: [NgbNavItem]
        }], links: [{
            type: ContentChildren,
            args: [forwardRef(() => NgbNavLink), { descendants: true }]
        }] }); })();
/**
 * A directive to put on the nav link.
 *
 * @since 5.2.0
 */
class NgbNavLink {
    constructor(role, navItem, nav, elRef) {
        this.role = role;
        this.navItem = navItem;
        this.nav = nav;
        this.elRef = elRef;
    }
    hasNavItemClass() {
        // with alternative markup we have to add `.nav-item` class, because `ngbNavItem` is on the ng-container
        return this.navItem.elementRef.nativeElement.nodeType === Node.COMMENT_NODE;
    }
}
NgbNavLink.ɵfac = function NgbNavLink_Factory(t) { return new (t || NgbNavLink)(ɵngcc0.ɵɵinjectAttribute('role'), ɵngcc0.ɵɵdirectiveInject(NgbNavItem), ɵngcc0.ɵɵdirectiveInject(NgbNav), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbNavLink.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbNavLink, selectors: [["a", "ngbNavLink", ""]], hostAttrs: ["href", ""], hostVars: 14, hostBindings: function NgbNavLink_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgbNavLink_click_HostBindingHandler($event) { ctx.nav.click(ctx.navItem); return $event.preventDefault(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.navItem.domId);
        ɵngcc0.ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tab" : undefined)("tabindex", ctx.navItem.disabled ? -1 : undefined)("aria-controls", ctx.navItem.isPanelInDom() ? ctx.navItem.panelDomId : null)("aria-selected", ctx.navItem.active)("aria-disabled", ctx.navItem.disabled);
        ɵngcc0.ɵɵclassProp("nav-link", true)("nav-item", ctx.hasNavItemClass())("active", ctx.navItem.active)("disabled", ctx.navItem.disabled);
    } } });
NgbNavLink.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: NgbNavItem },
    { type: NgbNav },
    { type: ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNavLink, [{
        type: Directive,
        args: [{
                selector: 'a[ngbNavLink]',
                host: {
                    '[id]': 'navItem.domId',
                    '[class.nav-link]': 'true',
                    '[class.nav-item]': 'hasNavItemClass()',
                    '[attr.role]': `role ? role : nav.roles ? 'tab' : undefined`,
                    'href': '',
                    '[class.active]': 'navItem.active',
                    '[class.disabled]': 'navItem.disabled',
                    '[attr.tabindex]': 'navItem.disabled ? -1 : undefined',
                    '[attr.aria-controls]': 'navItem.isPanelInDom() ? navItem.panelDomId : null',
                    '[attr.aria-selected]': 'navItem.active',
                    '[attr.aria-disabled]': 'navItem.disabled',
                    '(click)': 'nav.click(navItem); $event.preventDefault()'
                }
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Attribute,
                args: ['role']
            }] }, { type: NgbNavItem }, { type: NgbNav }, { type: ɵngcc0.ElementRef }]; }, null); })();

const ngbNavFadeOutTransition = ({ classList }) => {
    classList.remove('show');
    return () => classList.remove('active');
};
const ngbNavFadeInTransition = (element, animation) => {
    if (animation) {
        reflow(element);
    }
    element.classList.add('show');
};

class NgbNavPane {
    constructor(elRef) {
        this.elRef = elRef;
    }
}
NgbNavPane.ɵfac = function NgbNavPane_Factory(t) { return new (t || NgbNavPane)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbNavPane.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbNavPane, selectors: [["", "ngbNavPane", ""]], hostAttrs: [1, "tab-pane"], hostVars: 5, hostBindings: function NgbNavPane_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.item.panelDomId);
        ɵngcc0.ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tabpanel" : undefined)("aria-labelledby", ctx.item.domId);
        ɵngcc0.ɵɵclassProp("fade", ctx.nav.animation);
    } }, inputs: { item: "item", nav: "nav", role: "role" } });
NgbNavPane.ctorParameters = () => [
    { type: ElementRef }
];
NgbNavPane.propDecorators = {
    item: [{ type: Input }],
    nav: [{ type: Input }],
    role: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNavPane, [{
        type: Directive,
        args: [{
                selector: '[ngbNavPane]',
                host: {
                    '[id]': 'item.panelDomId',
                    'class': 'tab-pane',
                    '[class.fade]': 'nav.animation',
                    '[attr.role]': 'role ? role : nav.roles ? "tabpanel" : undefined',
                    '[attr.aria-labelledby]': 'item.domId'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { item: [{
            type: Input
        }], nav: [{
            type: Input
        }], role: [{
            type: Input
        }] }); })();
/**
 * The outlet where currently active nav content will be displayed.
 *
 * @since 5.2.0
 */
class NgbNavOutlet {
    constructor(_cd, _ngZone) {
        this._cd = _cd;
        this._ngZone = _ngZone;
        this._activePane = null;
    }
    isPanelTransitioning(item) { var _a; return ((_a = this._activePane) === null || _a === void 0 ? void 0 : _a.item) === item; }
    ngAfterViewInit() {
        var _a;
        // initial display
        this._updateActivePane();
        // this will be emitted for all 3 types of nav changes: .select(), [activeId] or (click)
        this.nav.navItemChange$
            .pipe(takeUntil(this.nav.destroy$), startWith(((_a = this._activePane) === null || _a === void 0 ? void 0 : _a.item) || null), distinctUntilChanged(), skip(1))
            .subscribe(nextItem => {
            const options = { animation: this.nav.animation, runningTransition: 'stop' };
            // next panel we're switching to will only appear in DOM after the change detection is done
            // and `this._panes` will be updated
            this._cd.detectChanges();
            // fading out
            if (this._activePane) {
                ngbRunTransition(this._ngZone, this._activePane.elRef.nativeElement, ngbNavFadeOutTransition, options)
                    .subscribe(() => {
                    var _a;
                    const activeItem = (_a = this._activePane) === null || _a === void 0 ? void 0 : _a.item;
                    this._activePane = this._getPaneForItem(nextItem);
                    // mark for check when transition finishes as outlet or parent containers might be OnPush
                    // without this the panes that have "faded out" will stay in DOM
                    this._cd.markForCheck();
                    // fading in
                    if (this._activePane) {
                        // we have to add the '.active' class before running the transition,
                        // because it should be in place before `ngbRunTransition` does `reflow()`
                        this._activePane.elRef.nativeElement.classList.add('active');
                        ngbRunTransition(this._ngZone, this._activePane.elRef.nativeElement, ngbNavFadeInTransition, options)
                            .subscribe(() => {
                            if (nextItem) {
                                nextItem.shown.emit();
                                this.nav.shown.emit(nextItem.id);
                            }
                        });
                    }
                    if (activeItem) {
                        activeItem.hidden.emit();
                        this.nav.hidden.emit(activeItem.id);
                    }
                });
            }
            else {
                this._updateActivePane();
            }
        });
    }
    _updateActivePane() {
        var _a, _b;
        this._activePane = this._getActivePane();
        (_a = this._activePane) === null || _a === void 0 ? void 0 : _a.elRef.nativeElement.classList.add('show');
        (_b = this._activePane) === null || _b === void 0 ? void 0 : _b.elRef.nativeElement.classList.add('active');
    }
    _getPaneForItem(item) {
        return this._panes && this._panes.find(pane => pane.item === item) || null;
    }
    _getActivePane() {
        return this._panes && this._panes.find(pane => pane.item.active) || null;
    }
}
NgbNavOutlet.ɵfac = function NgbNavOutlet_Factory(t) { return new (t || NgbNavOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NgbNavOutlet.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbNavOutlet, selectors: [["", "ngbNavOutlet", ""]], viewQuery: function NgbNavOutlet_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgbNavPane, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._panes = _t);
    } }, hostVars: 2, hostBindings: function NgbNavOutlet_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("tab-content", true);
    } }, inputs: { paneRole: "paneRole", nav: ["ngbNavOutlet", "nav"] }, attrs: _c32, decls: 1, vars: 1, consts: [["ngFor", "", 3, "ngForOf"], ["ngbNavPane", "", 3, "item", "nav", "role", 4, "ngIf"], ["ngbNavPane", "", 3, "item", "nav", "role"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NgbNavOutlet_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgbNavOutlet_ng_template_0_Template, 1, 1, "ng-template", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.nav.items);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, NgbNavPane, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NgbNavOutlet.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NgbNavOutlet.propDecorators = {
    _panes: [{ type: ViewChildren, args: [NgbNavPane,] }],
    paneRole: [{ type: Input }],
    nav: [{ type: Input, args: ['ngbNavOutlet',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNavOutlet, [{
        type: Component,
        args: [{
                selector: '[ngbNavOutlet]',
                host: { '[class.tab-content]': 'true' },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template ngFor let-item [ngForOf]="nav.items">
      <div ngbNavPane *ngIf="item.isPanelInDom() || isPanelTransitioning(item)" [item]="item" [nav]="nav" [role]="paneRole">
        <ng-template [ngTemplateOutlet]="item.contentTpl?.templateRef || null"
                     [ngTemplateOutletContext]="{$implicit: item.active || isPanelTransitioning(item)}"></ng-template>
      </div>
    </ng-template>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { _panes: [{
            type: ViewChildren,
            args: [NgbNavPane]
        }], paneRole: [{
            type: Input
        }], nav: [{
            type: Input,
            args: ['ngbNavOutlet']
        }] }); })();

const NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane];
class NgbNavModule {
}
NgbNavModule.ɵfac = function NgbNavModule_Factory(t) { return new (t || NgbNavModule)(); };
NgbNavModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbNavModule });
NgbNavModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbNavModule, [{
        type: NgModule,
        args: [{ declarations: NGB_NAV_DIRECTIVES, exports: NGB_NAV_DIRECTIVES, imports: [CommonModule] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbNavModule, { declarations: function () { return [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane]; } }); })();

/**
 * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
class NgbPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
}
NgbPaginationConfig.ɵfac = function NgbPaginationConfig_Factory(t) { return new (t || NgbPaginationConfig)(); };
NgbPaginationConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbPaginationConfig_Factory() { return new NgbPaginationConfig(); }, token: NgbPaginationConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
class NgbPaginationEllipsis {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPaginationEllipsis.ɵfac = function NgbPaginationEllipsis_Factory(t) { return new (t || NgbPaginationEllipsis)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPaginationEllipsis.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPaginationEllipsis, selectors: [["ng-template", "ngbPaginationEllipsis", ""]] });
NgbPaginationEllipsis.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationEllipsis, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPaginationEllipsis]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
class NgbPaginationFirst {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPaginationFirst.ɵfac = function NgbPaginationFirst_Factory(t) { return new (t || NgbPaginationFirst)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPaginationFirst.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPaginationFirst, selectors: [["ng-template", "ngbPaginationFirst", ""]] });
NgbPaginationFirst.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationFirst, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPaginationFirst]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
class NgbPaginationLast {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPaginationLast.ɵfac = function NgbPaginationLast_Factory(t) { return new (t || NgbPaginationLast)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPaginationLast.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPaginationLast, selectors: [["ng-template", "ngbPaginationLast", ""]] });
NgbPaginationLast.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationLast, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPaginationLast]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
class NgbPaginationNext {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPaginationNext.ɵfac = function NgbPaginationNext_Factory(t) { return new (t || NgbPaginationNext)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPaginationNext.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPaginationNext, selectors: [["ng-template", "ngbPaginationNext", ""]] });
NgbPaginationNext.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationNext, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPaginationNext]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
class NgbPaginationNumber {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPaginationNumber.ɵfac = function NgbPaginationNumber_Factory(t) { return new (t || NgbPaginationNumber)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPaginationNumber.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPaginationNumber, selectors: [["ng-template", "ngbPaginationNumber", ""]] });
NgbPaginationNumber.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationNumber, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPaginationNumber]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
class NgbPaginationPrevious {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPaginationPrevious.ɵfac = function NgbPaginationPrevious_Factory(t) { return new (t || NgbPaginationPrevious)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPaginationPrevious.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPaginationPrevious, selectors: [["ng-template", "ngbPaginationPrevious", ""]] });
NgbPaginationPrevious.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationPrevious, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPaginationPrevious]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A directive to match the 'pages' whole content
 *
 * @since 9.1.0
 */
class NgbPaginationPages {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPaginationPages.ɵfac = function NgbPaginationPages_Factory(t) { return new (t || NgbPaginationPages)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NgbPaginationPages.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPaginationPages, selectors: [["ng-template", "ngbPaginationPages", ""]] });
NgbPaginationPages.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationPages, [{
        type: Directive,
        args: [{ selector: 'ng-template[ngbPaginationPages]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
class NgbPagination {
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new EventEmitter(true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    hasPrevious() { return this.page > 1; }
    hasNext() { return this.page < this.pageCount; }
    nextDisabled() { return !this.hasNext() || this.disabled; }
    previousDisabled() { return !this.hasPrevious() || this.disabled; }
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    ngOnChanges(changes) { this._updatePages(this.page); }
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    _applyRotation() {
        let start = 0;
        let end = this.pageCount;
        let leftOffset = Math.floor(this.maxSize / 2);
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    _applyPagination() {
        let page = Math.ceil(this.page / this.maxSize) - 1;
        let start = page * this.maxSize;
        let end = start + this.maxSize;
        return [start, end];
    }
    _setPageInRange(newPageNo) {
        const prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    }
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let start = 0;
            let end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
}
NgbPagination.ɵfac = function NgbPagination_Factory(t) { return new (t || NgbPagination)(ɵngcc0.ɵɵdirectiveInject(NgbPaginationConfig)); };
NgbPagination.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbPagination, selectors: [["ngb-pagination"]], contentQueries: function NgbPagination_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPaginationEllipsis, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPaginationFirst, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPaginationLast, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPaginationNext, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPaginationNumber, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPaginationPrevious, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbPaginationPages, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tplEllipsis = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tplFirst = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tplLast = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tplNext = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tplNumber = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tplPrevious = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tplPages = _t.first);
    } }, hostAttrs: ["role", "navigation"], inputs: { page: "page", disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", maxSize: "maxSize", pageSize: "pageSize", rotate: "rotate", size: "size", collectionSize: "collectionSize" }, outputs: { pageChange: "pageChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 20, vars: 12, consts: function () { let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_pagination_first$$FESM2015_NG_BOOTSTRAP_JS__35 = goog.getMsg("\u00AB\u00AB");
        i18n_34 = MSG_EXTERNAL_ngb_pagination_first$$FESM2015_NG_BOOTSTRAP_JS__35;
    }
    else {
        i18n_34 = $localize `:@@ngb.pagination.first␟656506dfd46380956a655f919f1498d018f75ca0␟6867721956102594380:««`;
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_pagination_previous$$FESM2015_NG_BOOTSTRAP_JS__37 = goog.getMsg("\u00AB");
        i18n_36 = MSG_EXTERNAL_ngb_pagination_previous$$FESM2015_NG_BOOTSTRAP_JS__37;
    }
    else {
        i18n_36 = $localize `:@@ngb.pagination.previous␟6e52b6ee77a4848d899dd21b591c6fd499e3aef3␟6479320895410098858:«`;
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_pagination_next$$FESM2015_NG_BOOTSTRAP_JS__39 = goog.getMsg("\u00BB");
        i18n_38 = MSG_EXTERNAL_ngb_pagination_next$$FESM2015_NG_BOOTSTRAP_JS__39;
    }
    else {
        i18n_38 = $localize `:@@ngb.pagination.next␟ba9cbb4ff311464308a3627e4f1c3345d9fe6d7d␟5458177150283468089:»`;
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_pagination_last$$FESM2015_NG_BOOTSTRAP_JS__41 = goog.getMsg("\u00BB\u00BB");
        i18n_40 = MSG_EXTERNAL_ngb_pagination_last$$FESM2015_NG_BOOTSTRAP_JS__41;
    }
    else {
        i18n_40 = $localize `:@@ngb.pagination.last␟49f27a460bc97e7e00be5b37098bfa79884fc7d9␟5277020320267646988:»»`;
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_pagination_first_aria$$FESM2015_NG_BOOTSTRAP_JS__45 = goog.getMsg("First");
        i18n_44 = MSG_EXTERNAL_ngb_pagination_first_aria$$FESM2015_NG_BOOTSTRAP_JS__45;
    }
    else {
        i18n_44 = $localize `:@@ngb.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`;
    } let i18n_47; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_pagination_previous_aria$$FESM2015_NG_BOOTSTRAP_JS__48 = goog.getMsg("Previous");
        i18n_47 = MSG_EXTERNAL_ngb_pagination_previous_aria$$FESM2015_NG_BOOTSTRAP_JS__48;
    }
    else {
        i18n_47 = $localize `:@@ngb.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_pagination_next_aria$$FESM2015_NG_BOOTSTRAP_JS__51 = goog.getMsg("Next");
        i18n_50 = MSG_EXTERNAL_ngb_pagination_next_aria$$FESM2015_NG_BOOTSTRAP_JS__51;
    }
    else {
        i18n_50 = $localize `:@@ngb.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_pagination_last_aria$$FESM2015_NG_BOOTSTRAP_JS__53 = goog.getMsg("Last");
        i18n_52 = MSG_EXTERNAL_ngb_pagination_last_aria$$FESM2015_NG_BOOTSTRAP_JS__53;
    }
    else {
        i18n_52 = $localize `:@@ngb.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`;
    } return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["defaultPages", ""], ["class", "page-item", 3, "disabled", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], i18n_34, i18n_36, i18n_38, i18n_40, ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["class", "page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], [1, "page-item"], ["class", "page-link", "tabindex", "-1", "aria-disabled", "true", 4, "ngIf"], ["class", "page-link", "href", "", 3, "click", 4, "ngIf"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link"], ["href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_44, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_47, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_50, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_52, "href", "", 1, "page-link", 3, "click"]]; }, template: function NgbPagination_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgbPagination_ng_template_0_Template, 2, 0, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NgbPagination_ng_template_2_Template, 2, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, NgbPagination_ng_template_4_Template, 2, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, NgbPagination_ng_template_6_Template, 2, 0, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(8, NgbPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(10, NgbPagination_ng_template_10_Template, 2, 2, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(12, NgbPagination_ng_template_12_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(14, "ul");
        ɵngcc0.ɵɵtemplate(15, NgbPagination_li_15_Template, 3, 9, "li", 7);
        ɵngcc0.ɵɵtemplate(16, NgbPagination_li_16_Template, 3, 8, "li", 7);
        ɵngcc0.ɵɵtemplate(17, NgbPagination_ng_template_17_Template, 0, 0, "ng-template", 8);
        ɵngcc0.ɵɵtemplate(18, NgbPagination_li_18_Template, 3, 9, "li", 7);
        ɵngcc0.ɵɵtemplate(19, NgbPagination_li_19_Template, 3, 9, "li", 7);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r12 = ɵngcc0.ɵɵreference(13);
        ɵngcc0.ɵɵadvance(14);
        ɵngcc0.ɵɵclassMap("pagination" + (ctx.size ? " pagination-" + ctx.size : ""));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.boundaryLinks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.directionLinks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", (ctx.tplPages == null ? null : ctx.tplPages.templateRef) || _r12)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(8, _c54, ctx.page, ctx.pages, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.directionLinks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.boundaryLinks);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
NgbPagination.ctorParameters = () => [
    { type: NgbPaginationConfig }
];
NgbPagination.propDecorators = {
    tplEllipsis: [{ type: ContentChild, args: [NgbPaginationEllipsis, { static: false },] }],
    tplFirst: [{ type: ContentChild, args: [NgbPaginationFirst, { static: false },] }],
    tplLast: [{ type: ContentChild, args: [NgbPaginationLast, { static: false },] }],
    tplNext: [{ type: ContentChild, args: [NgbPaginationNext, { static: false },] }],
    tplNumber: [{ type: ContentChild, args: [NgbPaginationNumber, { static: false },] }],
    tplPrevious: [{ type: ContentChild, args: [NgbPaginationPrevious, { static: false },] }],
    tplPages: [{ type: ContentChild, args: [NgbPaginationPages, { static: false },] }],
    disabled: [{ type: Input }],
    boundaryLinks: [{ type: Input }],
    directionLinks: [{ type: Input }],
    ellipses: [{ type: Input }],
    rotate: [{ type: Input }],
    collectionSize: [{ type: Input }],
    maxSize: [{ type: Input }],
    page: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageChange: [{ type: Output }],
    size: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPagination, [{
        type: Component,
        args: [{
                selector: 'ngb-pagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'role': 'navigation' },
                template: `
    <ng-template #first><span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span></ng-template>
    <ng-template #previous><span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span></ng-template>
    <ng-template #next><span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span></ng-template>
    <ng-template #last><span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span></ng-template>
    <ng-template #ellipsis>...</ng-template>
    <ng-template #defaultNumber let-page let-currentPage="currentPage">
      {{ page }}
      <span *ngIf="page === currentPage" class="sr-only">(current)</span>
    </ng-template>
    <ng-template #defaultPages let-page let-pages="pages" let-disabled="disabled">
      <li *ngFor="let pageNumber of pages" class="page-item" [class.active]="pageNumber === page"
        [class.disabled]="isEllipsis(pageNumber) || disabled" [attr.aria-current]="(pageNumber === page ? 'page' : null)">
        <a *ngIf="isEllipsis(pageNumber)" class="page-link" tabindex="-1" aria-disabled="true">
          <ng-template [ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
                      [ngTemplateOutletContext]="{disabled: true, currentPage: page}"></ng-template>
        </a>
        <a *ngIf="!isEllipsis(pageNumber)" class="page-link" href (click)="selectPage(pageNumber); $event.preventDefault()"
          [attr.tabindex]="disabled ? '-1' : null" [attr.aria-disabled]="disabled ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
                      [ngTemplateOutletContext]="{disabled: disabled, $implicit: pageNumber, currentPage: page}"></ng-template>
        </a>
      </li>
    </ng-template>
    <ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
      <li *ngIf="boundaryLinks" class="page-item"
        [class.disabled]="previousDisabled()">
        <a aria-label="First" i18n-aria-label="@@ngb.pagination.first-aria" class="page-link" href
          (click)="selectPage(1); $event.preventDefault()" [attr.tabindex]="previousDisabled() ? '-1' : null"
          [attr.aria-disabled]="previousDisabled() ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplFirst?.templateRef || first"
                       [ngTemplateOutletContext]="{disabled: previousDisabled(), currentPage: page}"></ng-template>
        </a>
      </li>

      <li *ngIf="directionLinks" class="page-item"
        [class.disabled]="previousDisabled()">
        <a aria-label="Previous" i18n-aria-label="@@ngb.pagination.previous-aria" class="page-link" href
          (click)="selectPage(page-1); $event.preventDefault()" [attr.tabindex]="previousDisabled() ? '-1' : null"
          [attr.aria-disabled]="previousDisabled() ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplPrevious?.templateRef || previous"
                       [ngTemplateOutletContext]="{disabled: previousDisabled()}"></ng-template>
        </a>
      </li>
      <ng-template
        [ngTemplateOutlet]="tplPages?.templateRef || defaultPages"
        [ngTemplateOutletContext]="{ $implicit: page, pages: pages, disabled: disabled }"
      >
      </ng-template>
      <li *ngIf="directionLinks" class="page-item" [class.disabled]="nextDisabled()">
        <a aria-label="Next" i18n-aria-label="@@ngb.pagination.next-aria" class="page-link" href
          (click)="selectPage(page+1); $event.preventDefault()" [attr.tabindex]="nextDisabled() ? '-1' : null"
          [attr.aria-disabled]="nextDisabled() ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplNext?.templateRef || next"
                       [ngTemplateOutletContext]="{disabled: nextDisabled(), currentPage: page}"></ng-template>
        </a>
      </li>

      <li *ngIf="boundaryLinks" class="page-item" [class.disabled]="nextDisabled()">
        <a aria-label="Last" i18n-aria-label="@@ngb.pagination.last-aria" class="page-link" href
          (click)="selectPage(pageCount); $event.preventDefault()" [attr.tabindex]="nextDisabled() ? '-1' : null"
          [attr.aria-disabled]="nextDisabled() ? 'true' : null">
          <ng-template [ngTemplateOutlet]="tplLast?.templateRef || last"
                       [ngTemplateOutletContext]="{disabled: nextDisabled(), currentPage: page}"></ng-template>
        </a>
      </li>
    </ul>
  `
            }]
    }], function () { return [{ type: NgbPaginationConfig }]; }, { page: [{
            type: Input
        }], pageChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], boundaryLinks: [{
            type: Input
        }], directionLinks: [{
            type: Input
        }], ellipses: [{
            type: Input
        }], maxSize: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], rotate: [{
            type: Input
        }], size: [{
            type: Input
        }], tplEllipsis: [{
            type: ContentChild,
            args: [NgbPaginationEllipsis, { static: false }]
        }], tplFirst: [{
            type: ContentChild,
            args: [NgbPaginationFirst, { static: false }]
        }], tplLast: [{
            type: ContentChild,
            args: [NgbPaginationLast, { static: false }]
        }], tplNext: [{
            type: ContentChild,
            args: [NgbPaginationNext, { static: false }]
        }], tplNumber: [{
            type: ContentChild,
            args: [NgbPaginationNumber, { static: false }]
        }], tplPrevious: [{
            type: ContentChild,
            args: [NgbPaginationPrevious, { static: false }]
        }], tplPages: [{
            type: ContentChild,
            args: [NgbPaginationPages, { static: false }]
        }], collectionSize: [{
            type: Input
        }] }); })();

const DIRECTIVES = [
    NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber,
    NgbPaginationPrevious, NgbPaginationPages
];
class NgbPaginationModule {
}
NgbPaginationModule.ɵfac = function NgbPaginationModule_Factory(t) { return new (t || NgbPaginationModule)(); };
NgbPaginationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbPaginationModule });
NgbPaginationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPaginationModule, [{
        type: NgModule,
        args: [{ declarations: DIRECTIVES, exports: DIRECTIVES, imports: [CommonModule] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbPaginationModule, { declarations: function () { return [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages]; } }); })();

class Trigger {
    constructor(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    isManual() { return this.open === 'manual' || this.close === 'manual'; }
}
const DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave'],
    'focus': ['focusin', 'focusout'],
};
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    const trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    const parsedTriggers = trimmedTriggers.split(/\s+/).map(trigger => trigger.split(':')).map((triggerPair) => {
        let alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    const manualTriggers = parsedTriggers.filter(triggerPair => triggerPair.isManual());
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
    return new Observable(subscriber => {
        const listeners = [];
        const openFn = () => subscriber.next(true);
        const closeFn = () => subscriber.next(false);
        const toggleFn = () => subscriber.next(!isOpenedFn());
        triggers.forEach((trigger) => {
            if (trigger.open === trigger.close) {
                listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
            }
            else {
                listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
            }
        });
        return () => { listeners.forEach(unsubscribeFn => unsubscribeFn()); };
    });
}
const delayOrNoop = (time) => time > 0 ? delay(time) : (a) => a;
const ɵ0 = delayOrNoop;
function triggerDelay(openDelay, closeDelay, isOpenedFn) {
    return (input$) => {
        let pending = null;
        const filteredInput$ = input$.pipe(map(open => ({ open })), filter(event => {
            const currentlyOpen = isOpenedFn();
            if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
                pending = event;
                return true;
            }
            if (pending && pending.open !== event.open) {
                pending = null;
            }
            return false;
        }), share());
        const delayedOpen$ = filteredInput$.pipe(filter(event => event.open), delayOrNoop(openDelay));
        const delayedClose$ = filteredInput$.pipe(filter(event => !event.open), delayOrNoop(closeDelay));
        return merge(delayedOpen$, delayedClose$)
            .pipe(filter(event => {
            if (event === pending) {
                pending = null;
                return event.open !== isOpenedFn();
            }
            return false;
        }), map(event => event.open));
    };
}
function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay = 0, closeDelay = 0) {
    const parsedTriggers = parseTriggers(triggers);
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return () => { };
    }
    const subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn)
        .pipe(triggerDelay(openDelay, closeDelay, isOpenedFn))
        .subscribe(open => (open ? openFn() : closeFn()));
    return () => subscription.unsubscribe();
}

/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
class NgbPopoverConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'click';
        this.disablePopover = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbPopoverConfig.ɵfac = function NgbPopoverConfig_Factory(t) { return new (t || NgbPopoverConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbPopoverConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbPopoverConfig_Factory() { return new NgbPopoverConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbPopoverConfig, providedIn: "root" });
NgbPopoverConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPopoverConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

let nextId$1 = 0;
class NgbPopoverWindow {
    isTitleTemplate() { return this.title instanceof TemplateRef; }
}
NgbPopoverWindow.ɵfac = function NgbPopoverWindow_Factory(t) { return new (t || NgbPopoverWindow)(); };
NgbPopoverWindow.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbPopoverWindow, selectors: [["ngb-popover-window"]], hostAttrs: ["role", "tooltip"], hostVars: 5, hostBindings: function NgbPopoverWindow_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
        ɵngcc0.ɵɵclassMap("popover" + (ctx.popoverClass ? " " + ctx.popoverClass : ""));
        ɵngcc0.ɵɵclassProp("fade", ctx.animation);
    } }, inputs: { animation: "animation", title: "title", id: "id", popoverClass: "popoverClass", context: "context" }, ngContentSelectors: _c3, decls: 4, vars: 1, consts: [[1, "arrow"], ["class", "popover-header", 4, "ngIf"], [1, "popover-body"], [1, "popover-header"], ["simpleTitle", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NgbPopoverWindow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NgbPopoverWindow_h3_1_Template, 4, 2, "h3", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: ["ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}"], encapsulation: 2, changeDetection: 0 });
NgbPopoverWindow.propDecorators = {
    animation: [{ type: Input }],
    title: [{ type: Input }],
    id: [{ type: Input }],
    popoverClass: [{ type: Input }],
    context: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPopoverWindow, [{
        type: Component,
        args: [{
                selector: 'ngb-popover-window',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")',
                    '[class.fade]': 'animation',
                    'role': 'tooltip',
                    '[id]': 'id'
                },
                template: `
    <div class="arrow"></div>
    <h3 class="popover-header" *ngIf="title">
      <ng-template #simpleTitle>{{title}}</ng-template>
      <ng-template [ngTemplateOutlet]="isTitleTemplate() ? $any(title) : simpleTitle" [ngTemplateOutletContext]="context"></ng-template>
    </h3>
    <div class="popover-body"><ng-content></ng-content></div>`,
                styles: ["ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}"]
            }]
    }], null, { animation: [{
            type: Input
        }], title: [{
            type: Input
        }], id: [{
            type: Input
        }], popoverClass: [{
            type: Input
        }], context: [{
            type: Input
        }] }); })();
/**
 * A lightweight and extensible directive for fancy popover creation.
 */
class NgbPopover {
    constructor(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._document = _document;
        this._changeDetector = _changeDetector;
        /**
         * An event emitted when the popover opening animation has finished. Contains no payload.
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the popover closing animation has finished. Contains no payload.
         *
         * At this point popover is not in the DOM anymore.
         */
        this.hidden = new EventEmitter();
        this._ngbPopoverWindowId = `ngb-popover-${nextId$1++}`;
        this._windowRef = null;
        this.animation = config.animation;
        this.autoClose = config.autoClose;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disablePopover = config.disablePopover;
        this.popoverClass = config.popoverClass;
        this.openDelay = config.openDelay;
        this.closeDelay = config.closeDelay;
        this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, this._ngZone, componentFactoryResolver, applicationRef);
        this._zoneSubscription = _ngZone.onStable.subscribe(() => {
            if (this._windowRef) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body', 'bs-popover');
            }
        });
    }
    _isDisabled() {
        if (this.disablePopover) {
            return true;
        }
        if (!this.ngbPopover && !this.popoverTitle) {
            return true;
        }
        return false;
    }
    /**
     * Opens the popover.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the popover template when it is created.
     */
    open(context) {
        if (!this._windowRef && !this._isDisabled()) {
            // this type assertion is safe because otherwise _isDisabled would return true
            const { windowRef, transition$ } = this._popupService.open(this.ngbPopover, context, this.animation);
            this._windowRef = windowRef;
            this._windowRef.instance.animation = this.animation;
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.context = context;
            this._windowRef.instance.popoverClass = this.popoverClass;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // We need to detect changes, because we don't know where .open() might be called from.
            // Ex. opening popover from one of lifecycle hooks that run after the CD
            // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
            this._windowRef.changeDetectorRef.detectChanges();
            // We need to mark for check, because popover won't work inside the OnPush component.
            // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
            // inside the template of an OnPush component and we change the popover from
            // open -> closed, the expression in question won't be updated unless we explicitly
            // mark the parent component to be checked.
            this._windowRef.changeDetectorRef.markForCheck();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
            transition$.subscribe(() => this.shown.emit());
        }
    }
    /**
     * Closes the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     */
    close() {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close(this.animation).subscribe(() => {
                this._windowRef = null;
                this.hidden.emit();
                this._changeDetector.markForCheck();
            });
        }
    }
    /**
     * Toggles the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     */
    toggle() {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Returns `true`, if the popover is currently shown.
     */
    isOpen() { return this._windowRef != null; }
    ngOnInit() {
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
    }
    ngOnChanges({ ngbPopover, popoverTitle, disablePopover, popoverClass }) {
        if (popoverClass && this.isOpen()) {
            this._windowRef.instance.popoverClass = popoverClass.currentValue;
        }
        // close popover if title and content become empty, or disablePopover set to true
        if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
            this.close();
        }
    }
    ngOnDestroy() {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    }
}
NgbPopover.ɵfac = function NgbPopover_Factory(t) { return new (t || NgbPopover)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(NgbPopoverConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ApplicationRef)); };
NgbPopover.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbPopover, selectors: [["", "ngbPopover", ""]], inputs: { animation: "animation", autoClose: "autoClose", placement: "placement", triggers: "triggers", container: "container", disablePopover: "disablePopover", popoverClass: "popoverClass", openDelay: "openDelay", closeDelay: "closeDelay", ngbPopover: "ngbPopover", popoverTitle: "popoverTitle" }, outputs: { shown: "shown", hidden: "hidden" }, exportAs: ["ngbPopover"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NgbPopover.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: NgbPopoverConfig },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: ApplicationRef }
];
NgbPopover.propDecorators = {
    animation: [{ type: Input }],
    autoClose: [{ type: Input }],
    ngbPopover: [{ type: Input }],
    popoverTitle: [{ type: Input }],
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    disablePopover: [{ type: Input }],
    popoverClass: [{ type: Input }],
    openDelay: [{ type: Input }],
    closeDelay: [{ type: Input }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPopover, [{
        type: Directive,
        args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }, { type: NgbPopoverConfig }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ApplicationRef }]; }, { shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }], animation: [{
            type: Input
        }], autoClose: [{
            type: Input
        }], placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }], disablePopover: [{
            type: Input
        }], popoverClass: [{
            type: Input
        }], openDelay: [{
            type: Input
        }], closeDelay: [{
            type: Input
        }], ngbPopover: [{
            type: Input
        }], popoverTitle: [{
            type: Input
        }] }); })();

class NgbPopoverModule {
}
NgbPopoverModule.ɵfac = function NgbPopoverModule_Factory(t) { return new (t || NgbPopoverModule)(); };
NgbPopoverModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbPopoverModule });
NgbPopoverModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbPopoverModule, [{
        type: NgModule,
        args: [{
                declarations: [NgbPopover, NgbPopoverWindow],
                exports: [NgbPopover],
                imports: [CommonModule],
                entryComponents: [NgbPopoverWindow]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbPopoverModule, { declarations: function () { return [NgbPopover, NgbPopoverWindow]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbPopover]; } }); })();

/**
 * A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
class NgbProgressbarConfig {
    constructor() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
}
NgbProgressbarConfig.ɵfac = function NgbProgressbarConfig_Factory(t) { return new (t || NgbProgressbarConfig)(); };
NgbProgressbarConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbProgressbarConfig_Factory() { return new NgbProgressbarConfig(); }, token: NgbProgressbarConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbProgressbarConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */
class NgbProgressbar {
    constructor(config) {
        /**
         * The current value for the progress bar.
         *
         * Should be in the `[0, max]` range.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.textType = config.textType;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
    }
    /**
     * The maximal value to be displayed in the progress bar.
     *
     * Should be a positive number. Will default to 100 otherwise.
     */
    set max(max) {
        this._max = !isNumber(max) || max <= 0 ? 100 : max;
    }
    get max() { return this._max; }
    getValue() { return getValueInRange(this.value, this.max); }
    getPercentValue() { return 100 * this.getValue() / this.max; }
}
NgbProgressbar.ɵfac = function NgbProgressbar_Factory(t) { return new (t || NgbProgressbar)(ɵngcc0.ɵɵdirectiveInject(NgbProgressbarConfig)); };
NgbProgressbar.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbProgressbar, selectors: [["ngb-progressbar"]], hostAttrs: [1, "progress"], hostVars: 2, hostBindings: function NgbProgressbar_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("height", ctx.height);
    } }, inputs: { value: "value", max: "max", animated: "animated", striped: "striped", textType: "textType", type: "type", showValue: "showValue", height: "height" }, ngContentSelectors: _c3, decls: 3, vars: 11, consts: function () { let i18n_55; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_progressbar_value$$FESM2015_NG_BOOTSTRAP_JS__56 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_55 = MSG_EXTERNAL_ngb_progressbar_value$$FESM2015_NG_BOOTSTRAP_JS__56;
    }
    else {
        i18n_55 = $localize `:@@ngb.progressbar.value␟f8e9a947b9db4252c0e9905765338712f2fd032f␟3720830768741091151:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } return [["role", "progressbar", "aria-valuemin", "0"], [4, "ngIf"], i18n_55]; }, template: function NgbProgressbar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NgbProgressbar_span_1_Template, 3, 3, "span", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate4("progress-bar", ctx.type ? " bg-" + ctx.type : "", "", ctx.textType ? " text-" + ctx.textType : "", "\n    ", ctx.animated ? " progress-bar-animated" : "", "", ctx.striped ? " progress-bar-striped" : "", "");
        ɵngcc0.ɵɵstyleProp("width", ctx.getPercentValue(), "%");
        ɵngcc0.ɵɵattribute("aria-valuenow", ctx.getValue())("aria-valuemax", ctx.max);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showValue);
    } }, directives: [ɵngcc1.NgIf], pipes: [ɵngcc1.PercentPipe], encapsulation: 2, changeDetection: 0 });
NgbProgressbar.ctorParameters = () => [
    { type: NgbProgressbarConfig }
];
NgbProgressbar.propDecorators = {
    max: [{ type: Input }],
    animated: [{ type: Input }],
    striped: [{ type: Input }],
    showValue: [{ type: Input }],
    textType: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }],
    height: [{ type: Input }, { type: HostBinding, args: ['style.height',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbProgressbar, [{
        type: Component,
        args: [{
                selector: 'ngb-progressbar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: { class: 'progress' },
                template: `
    <div class="progress-bar{{type ? ' bg-' + type : ''}}{{textType ? ' text-' + textType : ''}}
    {{animated ? ' progress-bar-animated' : ''}}{{striped ? ' progress-bar-striped' : ''}}"
    role="progressbar" [style.width.%]="getPercentValue()"
    [attr.aria-valuenow]="getValue()" aria-valuemin="0" [attr.aria-valuemax]="max">
      <span *ngIf="showValue" i18n="@@ngb.progressbar.value">{{getValue() / max | percent}}</span><ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return [{ type: NgbProgressbarConfig }]; }, { value: [{
            type: Input
        }], max: [{
            type: Input
        }], animated: [{
            type: Input
        }], striped: [{
            type: Input
        }], textType: [{
            type: Input
        }], type: [{
            type: Input
        }], showValue: [{
            type: Input
        }], height: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['style.height']
        }] }); })();

class NgbProgressbarModule {
}
NgbProgressbarModule.ɵfac = function NgbProgressbarModule_Factory(t) { return new (t || NgbProgressbarModule)(); };
NgbProgressbarModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbProgressbarModule });
NgbProgressbarModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbProgressbarModule, [{
        type: NgModule,
        args: [{ declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [CommonModule] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbProgressbarModule, { declarations: function () { return [NgbProgressbar]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbProgressbar]; } }); })();

/**
 * A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
class NgbRatingConfig {
    constructor() {
        this.max = 10;
        this.readonly = false;
        this.resettable = false;
    }
}
NgbRatingConfig.ɵfac = function NgbRatingConfig_Factory(t) { return new (t || NgbRatingConfig)(); };
NgbRatingConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbRatingConfig_Factory() { return new NgbRatingConfig(); }, token: NgbRatingConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbRatingConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * A directive that helps visualising and interacting with a star rating bar.
 */
class NgbRating {
    constructor(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload equals to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload equals to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event emitted when the user selects a new rating.
         *
         * Event payload equals to the newly selected rating.
         */
        this.rateChange = new EventEmitter(true);
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.max = config.max;
        this.readonly = config.readonly;
    }
    ariaValueText() { return `${this.nextRate} out of ${this.max}`; }
    isInteractive() { return !this.readonly && !this.disabled; }
    enter(value) {
        if (this.isInteractive()) {
            this._updateState(value);
        }
        this.hover.emit(value);
    }
    handleBlur() { this.onTouched(); }
    handleClick(value) {
        if (this.isInteractive()) {
            this.update(this.resettable && this.rate === value ? 0 : value);
        }
    }
    handleKeyDown(event) {
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.ArrowDown:
            case Key.ArrowLeft:
                this.update(this.rate - 1);
                break;
            case Key.ArrowUp:
            case Key.ArrowRight:
                this.update(this.rate + 1);
                break;
            case Key.Home:
                this.update(0);
                break;
            case Key.End:
                this.update(this.max);
                break;
            default:
                return;
        }
        // note 'return' in default case
        event.preventDefault();
    }
    ngOnChanges(changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    }
    ngOnInit() {
        this.contexts = Array.from({ length: this.max }, (v, k) => ({ fill: 0, index: k }));
        this._updateState(this.rate);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    reset() {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    update(value, internalChange = true) {
        const newRate = getValueInRange(value, this.max, 0);
        if (this.isInteractive() && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this._updateState(this.rate);
    }
    writeValue(value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    }
    _updateState(nextValue) {
        this.nextRate = nextValue;
        this.contexts.forEach((context, index) => context.fill = Math.round(getValueInRange(nextValue - index, 1, 0) * 100));
    }
}
NgbRating.ɵfac = function NgbRating_Factory(t) { return new (t || NgbRating)(ɵngcc0.ɵɵdirectiveInject(NgbRatingConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgbRating.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbRating, selectors: [["ngb-rating"]], contentQueries: function NgbRating_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.starTemplateFromContent = _t.first);
    } }, hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex"], hostVars: 5, hostBindings: function NgbRating_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function NgbRating_blur_HostBindingHandler() { return ctx.handleBlur(); })("keydown", function NgbRating_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); })("mouseleave", function NgbRating_mouseleave_HostBindingHandler() { return ctx.reset(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("tabindex", ctx.disabled ? -1 : 0);
        ɵngcc0.ɵɵattribute("aria-valuemax", ctx.max)("aria-valuenow", ctx.nextRate)("aria-valuetext", ctx.ariaValueText())("aria-disabled", ctx.readonly ? true : null);
    } }, inputs: { max: "max", readonly: "readonly", rate: "rate", resettable: "resettable", starTemplate: "starTemplate" }, outputs: { hover: "hover", leave: "leave", rateChange: "rateChange" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbRating), multi: true }]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [["t", ""], ["ngFor", "", 3, "ngForOf"], [1, "sr-only"], [3, "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NgbRating_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgbRating_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NgbRating_ng_template_2_Template, 4, 5, "ng-template", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.contexts);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NgbRating.ctorParameters = () => [
    { type: NgbRatingConfig },
    { type: ChangeDetectorRef }
];
NgbRating.propDecorators = {
    max: [{ type: Input }],
    rate: [{ type: Input }],
    readonly: [{ type: Input }],
    resettable: [{ type: Input }],
    starTemplate: [{ type: Input }],
    starTemplateFromContent: [{ type: ContentChild, args: [TemplateRef, { static: false },] }],
    hover: [{ type: Output }],
    leave: [{ type: Output }],
    rateChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbRating, [{
        type: Component,
        args: [{
                selector: 'ngb-rating',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'd-inline-flex',
                    '[tabindex]': 'disabled ? -1 : 0',
                    'role': 'slider',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuenow]': 'nextRate',
                    '[attr.aria-valuetext]': 'ariaValueText()',
                    '[attr.aria-disabled]': 'readonly ? true : null',
                    '(blur)': 'handleBlur()',
                    '(keydown)': 'handleKeyDown($event)',
                    '(mouseleave)': 'reset()'
                },
                template: `
    <ng-template #t let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>
    <ng-template ngFor [ngForOf]="contexts" let-index="index">
      <span class="sr-only">({{ index < nextRate ? '*' : ' ' }})</span>
      <span (mouseenter)="enter(index + 1)" (click)="handleClick(index + 1)" [style.cursor]="isInteractive() ? 'pointer' : 'default'">
        <ng-template [ngTemplateOutlet]="starTemplate || starTemplateFromContent || t" [ngTemplateOutletContext]="contexts[index]">
        </ng-template>
      </span>
    </ng-template>
  `,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbRating), multi: true }]
            }]
    }], function () { return [{ type: NgbRatingConfig }, { type: ɵngcc0.ChangeDetectorRef }]; }, { hover: [{
            type: Output
        }], leave: [{
            type: Output
        }], rateChange: [{
            type: Output
        }], max: [{
            type: Input
        }], readonly: [{
            type: Input
        }], rate: [{
            type: Input
        }], resettable: [{
            type: Input
        }], starTemplate: [{
            type: Input
        }], starTemplateFromContent: [{
            type: ContentChild,
            args: [TemplateRef, { static: false }]
        }] }); })();

class NgbRatingModule {
}
NgbRatingModule.ɵfac = function NgbRatingModule_Factory(t) { return new (t || NgbRatingModule)(); };
NgbRatingModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbRatingModule });
NgbRatingModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbRatingModule, [{
        type: NgModule,
        args: [{ declarations: [NgbRating], exports: [NgbRating], imports: [CommonModule] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbRatingModule, { declarations: function () { return [NgbRating]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbRating]; } }); })();

class NgbTime {
    constructor(hour, minute, second) {
        this.hour = toInteger(hour);
        this.minute = toInteger(minute);
        this.second = toInteger(second);
    }
    changeHour(step = 1) { this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step); }
    updateHour(hour) {
        if (isNumber(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    }
    changeMinute(step = 1) { this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step); }
    updateMinute(minute) {
        if (isNumber(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    }
    changeSecond(step = 1) { this.updateSecond((isNaN(this.second) ? 0 : this.second) + step); }
    updateSecond(second) {
        if (isNumber(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    }
    isValid(checkSecs = true) {
        return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
    }
    toString() { return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`; }
}

/**
 * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
class NgbTimepickerConfig {
    constructor() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
}
NgbTimepickerConfig.ɵfac = function NgbTimepickerConfig_Factory(t) { return new (t || NgbTimepickerConfig)(); };
NgbTimepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbTimepickerConfig_Factory() { return new NgbTimepickerConfig(); }, token: NgbTimepickerConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTimepickerConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
    return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * @since 2.2.0
 */
class NgbTimeAdapter {
}
NgbTimeAdapter.ɵfac = function NgbTimeAdapter_Factory(t) { return new (t || NgbTimeAdapter)(); };
NgbTimeAdapter.ɵprov = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY, token: NgbTimeAdapter, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTimeAdapter, [{
        type: Injectable,
        args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY }]
    }], null, null); })();
class NgbTimeStructAdapter extends NgbTimeAdapter {
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    fromModel(time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    }
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    toModel(time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    }
}
NgbTimeStructAdapter.ɵfac = /*@__PURE__*/ function () { let ɵNgbTimeStructAdapter_BaseFactory; return function NgbTimeStructAdapter_Factory(t) { return (ɵNgbTimeStructAdapter_BaseFactory || (ɵNgbTimeStructAdapter_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NgbTimeStructAdapter)))(t || NgbTimeStructAdapter); }; }();
NgbTimeStructAdapter.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbTimeStructAdapter, factory: NgbTimeStructAdapter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTimeStructAdapter, [{
        type: Injectable
    }], null, null); })();

function NGB_TIMEPICKER_I18N_FACTORY(locale) {
    return new NgbTimepickerI18nDefault(locale);
}
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 */
class NgbTimepickerI18n {
}
NgbTimepickerI18n.ɵfac = function NgbTimepickerI18n_Factory(t) { return new (t || NgbTimepickerI18n)(); };
NgbTimepickerI18n.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbTimepickerI18n_Factory() { return NGB_TIMEPICKER_I18N_FACTORY(i0.ɵɵinject(i0.LOCALE_ID)); }, token: NgbTimepickerI18n, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTimepickerI18n, [{
        type: Injectable,
        args: [{ providedIn: 'root', useFactory: NGB_TIMEPICKER_I18N_FACTORY, deps: [LOCALE_ID] }]
    }], null, null); })();
class NgbTimepickerI18nDefault extends NgbTimepickerI18n {
    constructor(locale) {
        super();
        this._periods = getLocaleDayPeriods(locale, FormStyle.Standalone, TranslationWidth.Narrow);
    }
    getMorningPeriod() { return this._periods[0]; }
    getAfternoonPeriod() { return this._periods[1]; }
}
NgbTimepickerI18nDefault.ɵfac = function NgbTimepickerI18nDefault_Factory(t) { return new (t || NgbTimepickerI18nDefault)(ɵngcc0.ɵɵinject(LOCALE_ID)); };
NgbTimepickerI18nDefault.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: NgbTimepickerI18nDefault, factory: NgbTimepickerI18nDefault.ɵfac });
NgbTimepickerI18nDefault.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTimepickerI18nDefault, [{
        type: Injectable
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();

const FILTER_REGEX = /[^0-9]/g;
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */
class NgbTimepicker {
    constructor(_config, _ngbTimeAdapter, _cd, i18n) {
        this._config = _config;
        this._ngbTimeAdapter = _ngbTimeAdapter;
        this._cd = _cd;
        this.i18n = i18n;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.meridian = _config.meridian;
        this.spinners = _config.spinners;
        this.seconds = _config.seconds;
        this.hourStep = _config.hourStep;
        this.minuteStep = _config.minuteStep;
        this.secondStep = _config.secondStep;
        this.disabled = _config.disabled;
        this.readonlyInputs = _config.readonlyInputs;
        this.size = _config.size;
    }
    /**
     * The number of hours to add/subtract when clicking hour spinners.
     */
    set hourStep(step) {
        this._hourStep = isInteger(step) ? step : this._config.hourStep;
    }
    get hourStep() { return this._hourStep; }
    /**
     * The number of minutes to add/subtract when clicking minute spinners.
     */
    set minuteStep(step) {
        this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
    }
    get minuteStep() { return this._minuteStep; }
    /**
     * The number of seconds to add/subtract when clicking second spinners.
     */
    set secondStep(step) {
        this._secondStep = isInteger(step) ? step : this._config.secondStep;
    }
    get secondStep() { return this._secondStep; }
    writeValue(value) {
        const structValue = this._ngbTimeAdapter.fromModel(value);
        this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
        if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
            this.model.second = 0;
        }
        this._cd.markForCheck();
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    changeHour(step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    }
    changeMinute(step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    }
    changeSecond(step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    }
    updateHour(newVal) {
        const isPM = this.model.hour >= 12;
        const enteredHour = toInteger(newVal);
        if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
            this.model.updateHour(enteredHour + 12);
        }
        else {
            this.model.updateHour(enteredHour);
        }
        this.propagateModelChange();
    }
    updateMinute(newVal) {
        this.model.updateMinute(toInteger(newVal));
        this.propagateModelChange();
    }
    updateSecond(newVal) {
        this.model.updateSecond(toInteger(newVal));
        this.propagateModelChange();
    }
    toggleMeridian() {
        if (this.meridian) {
            this.changeHour(12);
        }
    }
    formatInput(input) { input.value = input.value.replace(FILTER_REGEX, ''); }
    formatHour(value) {
        if (isNumber(value)) {
            if (this.meridian) {
                return padNumber(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return padNumber(value % 24);
            }
        }
        else {
            return padNumber(NaN);
        }
    }
    formatMinSec(value) { return padNumber(isNumber(value) ? value : NaN); }
    handleBlur() { this.onTouched(); }
    get isSmallSize() { return this.size === 'small'; }
    get isLargeSize() { return this.size === 'large'; }
    ngOnChanges(changes) {
        if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    }
    propagateModelChange(touched = true) {
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange(this._ngbTimeAdapter.toModel({ hour: this.model.hour, minute: this.model.minute, second: this.model.second }));
        }
        else {
            this.onChange(this._ngbTimeAdapter.toModel(null));
        }
    }
}
NgbTimepicker.ɵfac = function NgbTimepicker_Factory(t) { return new (t || NgbTimepicker)(ɵngcc0.ɵɵdirectiveInject(NgbTimepickerConfig), ɵngcc0.ɵɵdirectiveInject(NgbTimeAdapter), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NgbTimepickerI18n)); };
NgbTimepicker.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbTimepicker, selectors: [["ngb-timepicker"]], inputs: { meridian: "meridian", spinners: "spinners", seconds: "seconds", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", readonlyInputs: "readonlyInputs", size: "size" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbTimepicker), multi: true }]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 16, vars: 25, consts: function () { let i18n_57; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_HH$$FESM2015_NG_BOOTSTRAP_JS_58 = goog.getMsg("HH");
        i18n_57 = MSG_EXTERNAL_ngb_timepicker_HH$$FESM2015_NG_BOOTSTRAP_JS_58;
    }
    else {
        i18n_57 = $localize `:@@ngb.timepicker.HH␟ce676ab1d6d98f85c836381cf100a4a91ef95a1f␟4043638465245303811:HH`;
    } let i18n_59; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_hours$$FESM2015_NG_BOOTSTRAP_JS_60 = goog.getMsg("Hours");
        i18n_59 = MSG_EXTERNAL_ngb_timepicker_hours$$FESM2015_NG_BOOTSTRAP_JS_60;
    }
    else {
        i18n_59 = $localize `:@@ngb.timepicker.hours␟3bbce5fef7e1151da052a4e529453edb340e3912␟8070396816726827304:Hours`;
    } let i18n_61; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_MM$$FESM2015_NG_BOOTSTRAP_JS_62 = goog.getMsg("MM");
        i18n_61 = MSG_EXTERNAL_ngb_timepicker_MM$$FESM2015_NG_BOOTSTRAP_JS_62;
    }
    else {
        i18n_61 = $localize `:@@ngb.timepicker.MM␟72c8edf6a50068a05bde70991e36b1e881f4ca54␟1647282246509919852:MM`;
    } let i18n_63; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_minutes$$FESM2015_NG_BOOTSTRAP_JS_64 = goog.getMsg("Minutes");
        i18n_63 = MSG_EXTERNAL_ngb_timepicker_minutes$$FESM2015_NG_BOOTSTRAP_JS_64;
    }
    else {
        i18n_63 = $localize `:@@ngb.timepicker.minutes␟41e62daa962947c0d23ded0981975d1bddf0bf38␟5531237363767747080:Minutes`;
    } let i18n_65; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_increment_hours$$FESM2015_NG_BOOTSTRAP_JS__66 = goog.getMsg("Increment hours");
        i18n_65 = MSG_EXTERNAL_ngb_timepicker_increment_hours$$FESM2015_NG_BOOTSTRAP_JS__66;
    }
    else {
        i18n_65 = $localize `:@@ngb.timepicker.increment-hours␟cb74bc1d625a6c1742f0d7d47306cf495780c218␟5939278348542933629:Increment hours`;
    } let i18n_67; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_decrement_hours$$FESM2015_NG_BOOTSTRAP_JS__68 = goog.getMsg("Decrement hours");
        i18n_67 = MSG_EXTERNAL_ngb_timepicker_decrement_hours$$FESM2015_NG_BOOTSTRAP_JS__68;
    }
    else {
        i18n_67 = $localize `:@@ngb.timepicker.decrement-hours␟147c7a19429da7d999e247d22e33fee370b1691b␟3651829882940481818:Decrement hours`;
    } let i18n_69; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_increment_minutes$$FESM2015_NG_BOOTSTRAP_JS__70 = goog.getMsg("Increment minutes");
        i18n_69 = MSG_EXTERNAL_ngb_timepicker_increment_minutes$$FESM2015_NG_BOOTSTRAP_JS__70;
    }
    else {
        i18n_69 = $localize `:@@ngb.timepicker.increment-minutes␟f5a4a3bc05e053f6732475d0e74875ec01c3a348␟180147720391025024:Increment minutes`;
    } let i18n_71; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_decrement_minutes$$FESM2015_NG_BOOTSTRAP_JS__72 = goog.getMsg("Decrement minutes");
        i18n_71 = MSG_EXTERNAL_ngb_timepicker_decrement_minutes$$FESM2015_NG_BOOTSTRAP_JS__72;
    }
    else {
        i18n_71 = $localize `:@@ngb.timepicker.decrement-minutes␟c1a6899e529c096da5b660385d4e77fe1f7ad271␟7447789825403243588:Decrement minutes`;
    } let i18n_73; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_SS$$FESM2015_NG_BOOTSTRAP_JS__74 = goog.getMsg("SS");
        i18n_73 = MSG_EXTERNAL_ngb_timepicker_SS$$FESM2015_NG_BOOTSTRAP_JS__74;
    }
    else {
        i18n_73 = $localize `:@@ngb.timepicker.SS␟ebe38d36a40a2383c5fefa9b4608ffbda08bd4a3␟3628127143071124194:SS`;
    } let i18n_75; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_seconds$$FESM2015_NG_BOOTSTRAP_JS__76 = goog.getMsg("Seconds");
        i18n_75 = MSG_EXTERNAL_ngb_timepicker_seconds$$FESM2015_NG_BOOTSTRAP_JS__76;
    }
    else {
        i18n_75 = $localize `:@@ngb.timepicker.seconds␟4f2ed9e71a7c981db3e50ae2fedb28aff2ec4e6c␟8874012390997067175:Seconds`;
    } let i18n_77; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_increment_seconds$$FESM2015_NG_BOOTSTRAP_JS___78 = goog.getMsg("Increment seconds");
        i18n_77 = MSG_EXTERNAL_ngb_timepicker_increment_seconds$$FESM2015_NG_BOOTSTRAP_JS___78;
    }
    else {
        i18n_77 = $localize `:@@ngb.timepicker.increment-seconds␟912322ecee7d659d04dcf494a70e22e49d334b26␟5364772110539092174:Increment seconds`;
    } let i18n_79; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_decrement_seconds$$FESM2015_NG_BOOTSTRAP_JS___80 = goog.getMsg("Decrement seconds");
        i18n_79 = MSG_EXTERNAL_ngb_timepicker_decrement_seconds$$FESM2015_NG_BOOTSTRAP_JS___80;
    }
    else {
        i18n_79 = $localize `:@@ngb.timepicker.decrement-seconds␟5db47ac104294243a70eb9124fbea9d0004ddf69␟753633511487974857:Decrement seconds`;
    } let i18n_81; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_PM$$FESM2015_NG_BOOTSTRAP_JS___82 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_81 = MSG_EXTERNAL_ngb_timepicker_PM$$FESM2015_NG_BOOTSTRAP_JS___82;
    }
    else {
        i18n_81 = $localize `:@@ngb.timepicker.PM␟8d6e691e10306c1b34c6b26805151aaea320ef7f␟3564199131264287502:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_83; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_timepicker_AM$$FESM2015_NG_BOOTSTRAP_JS___84 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_83 = MSG_EXTERNAL_ngb_timepicker_AM$$FESM2015_NG_BOOTSTRAP_JS___84;
    }
    else {
        i18n_83 = $localize `:@@ngb.timepicker.AM␟69a1f176a93998876952adac57c3bc3863b6105e␟4592818992509942761:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } return [[3, "disabled"], [1, "ngb-tp"], [1, "ngb-tp-input-container", "ngb-tp-hour"], ["tabindex", "-1", "type", "button", "class", "btn btn-link", 3, "btn-sm", "btn-lg", "disabled", "click", 4, "ngIf"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_57, "aria-label", i18n_59, 1, "ngb-tp-input", "form-control", 3, "value", "readOnly", "disabled", "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown"], [1, "ngb-tp-spacer"], [1, "ngb-tp-input-container", "ngb-tp-minute"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_61, "aria-label", i18n_63, 1, "ngb-tp-input", "form-control", 3, "value", "readOnly", "disabled", "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown"], ["class", "ngb-tp-spacer", 4, "ngIf"], ["class", "ngb-tp-input-container ngb-tp-second", 4, "ngIf"], ["class", "ngb-tp-meridian", 4, "ngIf"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "disabled", "click"], [1, "chevron", "ngb-tp-chevron"], [1, "sr-only"], i18n_65, [1, "chevron", "ngb-tp-chevron", "bottom"], i18n_67, i18n_69, i18n_71, [1, "ngb-tp-input-container", "ngb-tp-second"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_73, "aria-label", i18n_75, 1, "ngb-tp-input", "form-control", 3, "value", "readOnly", "disabled", "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown"], i18n_77, i18n_79, [1, "ngb-tp-meridian"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["am", ""], i18n_81, i18n_83]; }, template: function NgbTimepicker_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "fieldset", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NgbTimepicker_button_3_Template, 4, 7, "button", 3);
        ɵngcc0.ɵɵelementStart(4, "input", 4);
        ɵngcc0.ɵɵlistener("change", function NgbTimepicker_Template_input_change_4_listener($event) { return ctx.updateHour($event.target.value); })("blur", function NgbTimepicker_Template_input_blur_4_listener() { return ctx.handleBlur(); })("input", function NgbTimepicker_Template_input_input_4_listener($event) { return ctx.formatInput($event.target); })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_4_listener($event) { ctx.changeHour(ctx.hourStep); return $event.preventDefault(); })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_4_listener($event) { ctx.changeHour(-ctx.hourStep); return $event.preventDefault(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, NgbTimepicker_button_5_Template, 4, 7, "button", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵtext(7, ":");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵtemplate(9, NgbTimepicker_button_9_Template, 4, 7, "button", 3);
        ɵngcc0.ɵɵelementStart(10, "input", 7);
        ɵngcc0.ɵɵlistener("change", function NgbTimepicker_Template_input_change_10_listener($event) { return ctx.updateMinute($event.target.value); })("blur", function NgbTimepicker_Template_input_blur_10_listener() { return ctx.handleBlur(); })("input", function NgbTimepicker_Template_input_input_10_listener($event) { return ctx.formatInput($event.target); })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_10_listener($event) { ctx.changeMinute(ctx.minuteStep); return $event.preventDefault(); })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_10_listener($event) { ctx.changeMinute(-ctx.minuteStep); return $event.preventDefault(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, NgbTimepicker_button_11_Template, 4, 7, "button", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(12, NgbTimepicker_div_12_Template, 2, 0, "div", 8);
        ɵngcc0.ɵɵtemplate(13, NgbTimepicker_div_13_Template, 4, 9, "div", 9);
        ɵngcc0.ɵɵtemplate(14, NgbTimepicker_div_14_Template, 1, 0, "div", 8);
        ɵngcc0.ɵɵtemplate(15, NgbTimepicker_div_15_Template, 5, 9, "div", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled", ctx.disabled);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.spinners);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
        ɵngcc0.ɵɵproperty("value", ctx.formatHour(ctx.model == null ? null : ctx.model.hour))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.spinners);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.spinners);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
        ɵngcc0.ɵɵproperty("value", ctx.formatMinSec(ctx.model == null ? null : ctx.model.minute))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.spinners);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.seconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.seconds);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.meridian);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.meridian);
    } }, directives: [ɵngcc1.NgIf], styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"], encapsulation: 2 });
NgbTimepicker.ctorParameters = () => [
    { type: NgbTimepickerConfig },
    { type: NgbTimeAdapter },
    { type: ChangeDetectorRef },
    { type: NgbTimepickerI18n }
];
NgbTimepicker.propDecorators = {
    meridian: [{ type: Input }],
    spinners: [{ type: Input }],
    seconds: [{ type: Input }],
    hourStep: [{ type: Input }],
    minuteStep: [{ type: Input }],
    secondStep: [{ type: Input }],
    readonlyInputs: [{ type: Input }],
    size: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTimepicker, [{
        type: Component,
        args: [{
                selector: 'ngb-timepicker',
                encapsulation: ViewEncapsulation.None,
                template: `
    <fieldset [disabled]="disabled" [class.disabled]="disabled">
      <div class="ngb-tp">
        <div class="ngb-tp-input-container ngb-tp-hour">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeHour(hourStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="sr-only" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
          </button>
          <input type="text" class="ngb-tp-input form-control" [class.form-control-sm]="isSmallSize"
            [class.form-control-lg]="isLargeSize"
            maxlength="2" inputmode="numeric" placeholder="HH" i18n-placeholder="@@ngb.timepicker.HH"
            [value]="formatHour(model?.hour)" (change)="updateHour($any($event).target.value)"
            [readOnly]="readonlyInputs" [disabled]="disabled" aria-label="Hours" i18n-aria-label="@@ngb.timepicker.hours"
            (blur)="handleBlur()"
            (input)="formatInput($any($event).target)"
            (keydown.ArrowUp)="changeHour(hourStep); $event.preventDefault()"
            (keydown.ArrowDown)="changeHour(-hourStep); $event.preventDefault()">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeHour(-hourStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="sr-only" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
          </button>
        </div>
        <div class="ngb-tp-spacer">:</div>
        <div class="ngb-tp-input-container ngb-tp-minute">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeMinute(minuteStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="sr-only" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
          </button>
          <input type="text" class="ngb-tp-input form-control" [class.form-control-sm]="isSmallSize" [class.form-control-lg]="isLargeSize"
            maxlength="2" inputmode="numeric" placeholder="MM" i18n-placeholder="@@ngb.timepicker.MM"
            [value]="formatMinSec(model?.minute)" (change)="updateMinute($any($event).target.value)"
            [readOnly]="readonlyInputs" [disabled]="disabled" aria-label="Minutes" i18n-aria-label="@@ngb.timepicker.minutes"
            (blur)="handleBlur()"
            (input)="formatInput($any($event).target)"
            (keydown.ArrowUp)="changeMinute(minuteStep); $event.preventDefault()"
            (keydown.ArrowDown)="changeMinute(-minuteStep); $event.preventDefault()">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeMinute(-minuteStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize"  [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="sr-only"  i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
          </button>
        </div>
        <div *ngIf="seconds" class="ngb-tp-spacer">:</div>
        <div *ngIf="seconds" class="ngb-tp-input-container ngb-tp-second">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeSecond(secondStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize" [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron"></span>
            <span class="sr-only" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
          </button>
          <input type="text" class="ngb-tp-input form-control" [class.form-control-sm]="isSmallSize" [class.form-control-lg]="isLargeSize"
            maxlength="2" inputmode="numeric" placeholder="SS" i18n-placeholder="@@ngb.timepicker.SS"
            [value]="formatMinSec(model?.second)" (change)="updateSecond($any($event).target.value)"
            [readOnly]="readonlyInputs" [disabled]="disabled" aria-label="Seconds" i18n-aria-label="@@ngb.timepicker.seconds"
            (blur)="handleBlur()"
            (input)="formatInput($any($event).target)"
            (keydown.ArrowUp)="changeSecond(secondStep); $event.preventDefault()"
            (keydown.ArrowDown)="changeSecond(-secondStep); $event.preventDefault()">
          <button *ngIf="spinners" tabindex="-1" type="button" (click)="changeSecond(-secondStep)"
            class="btn btn-link" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize"  [class.disabled]="disabled"
            [disabled]="disabled">
            <span class="chevron ngb-tp-chevron bottom"></span>
            <span class="sr-only" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
          </button>
        </div>
        <div *ngIf="meridian" class="ngb-tp-spacer"></div>
        <div *ngIf="meridian" class="ngb-tp-meridian">
          <button type="button" class="btn btn-outline-primary" [class.btn-sm]="isSmallSize" [class.btn-lg]="isLargeSize"
            [disabled]="disabled" [class.disabled]="disabled"
                  (click)="toggleMeridian()">
            <ng-container *ngIf="model && model.hour >= 12; else am"
                          i18n="@@ngb.timepicker.PM">{{ i18n.getAfternoonPeriod() }}</ng-container>
            <ng-template #am i18n="@@ngb.timepicker.AM">{{ i18n.getMorningPeriod() }}</ng-template>
          </button>
        </div>
      </div>
    </fieldset>
  `,
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbTimepicker), multi: true }],
                styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"]
            }]
    }], function () { return [{ type: NgbTimepickerConfig }, { type: NgbTimeAdapter }, { type: ɵngcc0.ChangeDetectorRef }, { type: NgbTimepickerI18n }]; }, { meridian: [{
            type: Input
        }], spinners: [{
            type: Input
        }], seconds: [{
            type: Input
        }], hourStep: [{
            type: Input
        }], minuteStep: [{
            type: Input
        }], secondStep: [{
            type: Input
        }], readonlyInputs: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

class NgbTimepickerModule {
}
NgbTimepickerModule.ɵfac = function NgbTimepickerModule_Factory(t) { return new (t || NgbTimepickerModule)(); };
NgbTimepickerModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbTimepickerModule });
NgbTimepickerModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTimepickerModule, [{
        type: NgModule,
        args: [{ declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [CommonModule] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbTimepickerModule, { declarations: function () { return [NgbTimepicker]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbTimepicker]; } }); })();

/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * @since 5.0.0
 */
class NgbToastConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.autohide = true;
        this.delay = 500;
        this.ariaLive = 'polite';
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbToastConfig.ɵfac = function NgbToastConfig_Factory(t) { return new (t || NgbToastConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbToastConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbToastConfig_Factory() { return new NgbToastConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbToastConfig, providedIn: "root" });
NgbToastConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbToastConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

const ngbToastFadeInTransition = (element, animation) => {
    const { classList } = element;
    if (!animation) {
        classList.add('show');
        return;
    }
    classList.remove('hide');
    reflow(element);
    classList.add('showing');
    return () => {
        classList.remove('showing');
        classList.add('show');
    };
};
const ngbToastFadeOutTransition = ({ classList }) => {
    classList.remove('show');
    return () => { classList.add('hide'); };
};

/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * @since 5.0.0
 */
class NgbToastHeader {
}
NgbToastHeader.ɵfac = function NgbToastHeader_Factory(t) { return new (t || NgbToastHeader)(); };
NgbToastHeader.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbToastHeader, selectors: [["", "ngbToastHeader", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbToastHeader, [{
        type: Directive,
        args: [{ selector: '[ngbToastHeader]' }]
    }], null, null); })();
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * @since 5.0.0
 */
class NgbToast {
    constructor(ariaLive, config, _zone, _element) {
        this.ariaLive = ariaLive;
        this._zone = _zone;
        this._element = _element;
        /**
         * A template like `<ng-template ngbToastHeader></ng-template>` can be
         * used in the projected content to allow markup usage.
         */
        this.contentHeaderTpl = null;
        /**
         * An event fired after the animation triggered by calling `.show()` method has finished.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event fired after the animation triggered by calling `.hide()` method has finished.
         *
         * It can only occur in 2 different scenarios:
         * - `autohide` timeout fires
         * - user clicks on a closing cross
         *
         * Additionally this output is purely informative. The toast won't be removed from DOM automatically, it's up
         * to the user to take care of that.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        if (this.ariaLive == null) {
            this.ariaLive = config.ariaLive;
        }
        this.delay = config.delay;
        this.autohide = config.autohide;
        this.animation = config.animation;
    }
    ngAfterContentInit() {
        this._zone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            this._init();
            this.show();
        });
    }
    ngOnChanges(changes) {
        if ('autohide' in changes) {
            this._clearTimeout();
            this._init();
        }
    }
    /**
     * Triggers toast closing programmatically.
     *
     * The returned observable will emit and be completed once the closing transition has finished.
     * If the animations are turned off this happens synchronously.
     *
     * Alternatively you could listen or subscribe to the `(hidden)` output
     *
     * @since 8.0.0
     */
    hide() {
        this._clearTimeout();
        const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeOutTransition, { animation: this.animation, runningTransition: 'stop' });
        transition.subscribe(() => { this.hidden.emit(); });
        return transition;
    }
    /**
     * Triggers toast opening programmatically.
     *
     * The returned observable will emit and be completed once the opening transition has finished.
     * If the animations are turned off this happens synchronously.
     *
     * Alternatively you could listen or subscribe to the `(shown)` output
     *
     * @since 8.0.0
     */
    show() {
        const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeInTransition, {
            animation: this.animation,
            runningTransition: 'continue',
        });
        transition.subscribe(() => { this.shown.emit(); });
        return transition;
    }
    _init() {
        if (this.autohide && !this._timeoutID) {
            this._timeoutID = setTimeout(() => this.hide(), this.delay);
        }
    }
    _clearTimeout() {
        if (this._timeoutID) {
            clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    }
}
NgbToast.ɵfac = function NgbToast_Factory(t) { return new (t || NgbToast)(ɵngcc0.ɵɵinjectAttribute('aria-live'), ɵngcc0.ɵɵdirectiveInject(NgbToastConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgbToast.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbToast, selectors: [["ngb-toast"]], contentQueries: function NgbToast_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgbToastHeader, 7, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentHeaderTpl = _t.first);
    } }, hostAttrs: ["role", "alert", "aria-atomic", "true", 1, "toast"], hostVars: 3, hostBindings: function NgbToast_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-live", ctx.ariaLive);
        ɵngcc0.ɵɵclassProp("fade", ctx.animation);
    } }, inputs: { delay: "delay", autohide: "autohide", animation: "animation", header: "header" }, outputs: { shown: "shown", hidden: "hidden" }, exportAs: ["ngbToast"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 5, vars: 1, consts: function () { let i18n_85; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ngb_toast_close_aria$$FESM2015_NG_BOOTSTRAP_JS__86 = goog.getMsg("Close");
        i18n_85 = MSG_EXTERNAL_ngb_toast_close_aria$$FESM2015_NG_BOOTSTRAP_JS__86;
    }
    else {
        i18n_85 = $localize `:@@ngb.toast.close-aria␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
    } return [["headerTpl", ""], [3, "ngIf"], [1, "toast-body"], [1, "mr-auto"], [1, "toast-header"], [3, "ngTemplateOutlet"], ["type", "button", "aria-label", i18n_85, 1, "close", 3, "click"], ["aria-hidden", "true"]]; }, template: function NgbToast_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NgbToast_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NgbToast_ng_template_2_Template, 5, 1, "ng-template", 1);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.contentHeaderTpl || ctx.header);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"], encapsulation: 2 });
NgbToast.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['aria-live',] }] },
    { type: NgbToastConfig },
    { type: NgZone },
    { type: ElementRef }
];
NgbToast.propDecorators = {
    animation: [{ type: Input }],
    delay: [{ type: Input }],
    autohide: [{ type: Input }],
    header: [{ type: Input }],
    contentHeaderTpl: [{ type: ContentChild, args: [NgbToastHeader, { read: TemplateRef, static: true },] }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbToast, [{
        type: Component,
        args: [{
                selector: 'ngb-toast',
                exportAs: 'ngbToast',
                encapsulation: ViewEncapsulation.None,
                host: {
                    'role': 'alert',
                    '[attr.aria-live]': 'ariaLive',
                    'aria-atomic': 'true',
                    'class': 'toast',
                    '[class.fade]': 'animation'
                },
                template: `
    <ng-template #headerTpl>
      <strong class="mr-auto">{{header}}</strong>
    </ng-template>
    <ng-template [ngIf]="contentHeaderTpl || header">
      <div class="toast-header">
        <ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl"></ng-template>
        <button type="button" class="close" aria-label="Close" i18n-aria-label="@@ngb.toast.close-aria" (click)="hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </ng-template>
    <div class="toast-body">
      <ng-content></ng-content>
    </div>
  `,
                styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Attribute,
                args: ['aria-live']
            }] }, { type: NgbToastConfig }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }]; }, { contentHeaderTpl: [{
            type: ContentChild,
            args: [NgbToastHeader, { read: TemplateRef, static: true }]
        }], shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }], delay: [{
            type: Input
        }], autohide: [{
            type: Input
        }], animation: [{
            type: Input
        }], header: [{
            type: Input
        }] }); })();

class NgbToastModule {
}
NgbToastModule.ɵfac = function NgbToastModule_Factory(t) { return new (t || NgbToastModule)(); };
NgbToastModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbToastModule });
NgbToastModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbToastModule, [{
        type: NgModule,
        args: [{ declarations: [NgbToast, NgbToastHeader], imports: [CommonModule], exports: [NgbToast, NgbToastHeader] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbToastModule, { declarations: function () { return [NgbToast, NgbToastHeader]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbToast, NgbToastHeader]; } }); })();

/**
 * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
class NgbTooltipConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'hover focus';
        this.disableTooltip = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbTooltipConfig.ɵfac = function NgbTooltipConfig_Factory(t) { return new (t || NgbTooltipConfig)(ɵngcc0.ɵɵinject(NgbConfig)); };
NgbTooltipConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbTooltipConfig_Factory() { return new NgbTooltipConfig(i0.ɵɵinject(NgbConfig)); }, token: NgbTooltipConfig, providedIn: "root" });
NgbTooltipConfig.ctorParameters = () => [
    { type: NgbConfig }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTooltipConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgbConfig }]; }, null); })();

let nextId = 0;
class NgbTooltipWindow {
}
NgbTooltipWindow.ɵfac = function NgbTooltipWindow_Factory(t) { return new (t || NgbTooltipWindow)(); };
NgbTooltipWindow.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbTooltipWindow, selectors: [["ngb-tooltip-window"]], hostAttrs: ["role", "tooltip"], hostVars: 5, hostBindings: function NgbTooltipWindow_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
        ɵngcc0.ɵɵclassMap("tooltip" + (ctx.tooltipClass ? " " + ctx.tooltipClass : ""));
        ɵngcc0.ɵɵclassProp("fade", ctx.animation);
    } }, inputs: { animation: "animation", id: "id", tooltipClass: "tooltipClass" }, ngContentSelectors: _c3, decls: 3, vars: 0, consts: [[1, "arrow"], [1, "tooltip-inner"]], template: function NgbTooltipWindow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["ngb-tooltip-window{pointer-events:none}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"], encapsulation: 2, changeDetection: 0 });
NgbTooltipWindow.propDecorators = {
    animation: [{ type: Input }],
    id: [{ type: Input }],
    tooltipClass: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTooltipWindow, [{
        type: Component,
        args: [{
                selector: 'ngb-tooltip-window',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class]': '"tooltip" + (tooltipClass ? " " + tooltipClass : "")',
                    '[class.fade]': 'animation',
                    'role': 'tooltip',
                    '[id]': 'id'
                },
                template: `<div class="arrow"></div><div class="tooltip-inner"><ng-content></ng-content></div>`,
                styles: ["ngb-tooltip-window{pointer-events:none}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"]
            }]
    }], null, { animation: [{
            type: Input
        }], id: [{
            type: Input
        }], tooltipClass: [{
            type: Input
        }] }); })();
/**
 * A lightweight and extensible directive for fancy tooltip creation.
 */
class NgbTooltip {
    constructor(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._document = _document;
        this._changeDetector = _changeDetector;
        /**
         * An event emitted when the tooltip opening animation has finished. Contains no payload.
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the tooltip closing animation has finished. Contains no payload.
         */
        this.hidden = new EventEmitter();
        this._ngbTooltipWindowId = `ngb-tooltip-${nextId++}`;
        this._windowRef = null;
        this.animation = config.animation;
        this.autoClose = config.autoClose;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disableTooltip = config.disableTooltip;
        this.tooltipClass = config.tooltipClass;
        this.openDelay = config.openDelay;
        this.closeDelay = config.closeDelay;
        this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, this._ngZone, componentFactoryResolver, applicationRef);
        this._zoneSubscription = _ngZone.onStable.subscribe(() => {
            if (this._windowRef) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body', 'bs-tooltip');
            }
        });
    }
    /**
     * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
     *
     * If the content if falsy, the tooltip won't open.
     */
    set ngbTooltip(value) {
        this._ngbTooltip = value;
        if (!value && this._windowRef) {
            this.close();
        }
    }
    get ngbTooltip() { return this._ngbTooltip; }
    /**
     * Opens the tooltip.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the tooltip template when it is created.
     */
    open(context) {
        if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
            const { windowRef, transition$ } = this._popupService.open(this._ngbTooltip, context, this.animation);
            this._windowRef = windowRef;
            this._windowRef.instance.animation = this.animation;
            this._windowRef.instance.tooltipClass = this.tooltipClass;
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // We need to detect changes, because we don't know where .open() might be called from.
            // Ex. opening tooltip from one of lifecycle hooks that run after the CD
            // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
            this._windowRef.changeDetectorRef.detectChanges();
            // We need to mark for check, because tooltip won't work inside the OnPush component.
            // Ex. when we use expression like `{{ tooltip.isOpen() : 'opened' : 'closed' }}`
            // inside the template of an OnPush component and we change the tooltip from
            // open -> closed, the expression in question won't be updated unless we explicitly
            // mark the parent component to be checked.
            this._windowRef.changeDetectorRef.markForCheck();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
            transition$.subscribe(() => this.shown.emit());
        }
    }
    /**
     * Closes the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    close() {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close(this.animation).subscribe(() => {
                this._windowRef = null;
                this.hidden.emit();
                this._changeDetector.markForCheck();
            });
        }
    }
    /**
     * Toggles the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    toggle() {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Returns `true`, if the popover is currently shown.
     */
    isOpen() { return this._windowRef != null; }
    ngOnInit() {
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
    }
    ngOnChanges({ tooltipClass }) {
        if (tooltipClass && this.isOpen()) {
            this._windowRef.instance.tooltipClass = tooltipClass.currentValue;
        }
    }
    ngOnDestroy() {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    }
}
NgbTooltip.ɵfac = function NgbTooltip_Factory(t) { return new (t || NgbTooltip)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(NgbTooltipConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ApplicationRef)); };
NgbTooltip.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbTooltip, selectors: [["", "ngbTooltip", ""]], inputs: { animation: "animation", autoClose: "autoClose", placement: "placement", triggers: "triggers", container: "container", disableTooltip: "disableTooltip", tooltipClass: "tooltipClass", openDelay: "openDelay", closeDelay: "closeDelay", ngbTooltip: "ngbTooltip" }, outputs: { shown: "shown", hidden: "hidden" }, exportAs: ["ngbTooltip"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NgbTooltip.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: NgbTooltipConfig },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: ApplicationRef }
];
NgbTooltip.propDecorators = {
    animation: [{ type: Input }],
    autoClose: [{ type: Input }],
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    disableTooltip: [{ type: Input }],
    tooltipClass: [{ type: Input }],
    openDelay: [{ type: Input }],
    closeDelay: [{ type: Input }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }],
    ngbTooltip: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTooltip, [{
        type: Directive,
        args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }, { type: NgbTooltipConfig }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ApplicationRef }]; }, { shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }], animation: [{
            type: Input
        }], autoClose: [{
            type: Input
        }], placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }], disableTooltip: [{
            type: Input
        }], tooltipClass: [{
            type: Input
        }], openDelay: [{
            type: Input
        }], closeDelay: [{
            type: Input
        }], ngbTooltip: [{
            type: Input
        }] }); })();

class NgbTooltipModule {
}
NgbTooltipModule.ɵfac = function NgbTooltipModule_Factory(t) { return new (t || NgbTooltipModule)(); };
NgbTooltipModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbTooltipModule });
NgbTooltipModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTooltipModule, [{
        type: NgModule,
        args: [{ declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow] }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbTooltipModule, { declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip] }); })();

/**
 * A component that helps with text highlighting.
 *
 * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */
class NgbHighlight {
    constructor() {
        /**
         * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
         */
        this.highlightClass = 'ngb-highlight';
        /**
         * Boolean option to determine if the highlighting should be sensitive to accents or not.
         *
         * This feature is only available for browsers that implement the `String.normalize` function
         * (typically not Internet Explorer).
         * If you want to use this feature in a browser that does not implement `String.normalize`,
         * you will have to include a polyfill in your application (`unorm` for example).
         *
         * @since 9.1.0
         */
        this.accentSensitive = true;
    }
    ngOnChanges(changes) {
        if (!this.accentSensitive && !String.prototype.normalize) {
            console.warn('The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser ' +
                'that does not implement the `String.normalize` function. ' +
                'You will have to include a polyfill in your application to use this feature in the current browser.');
            this.accentSensitive = true;
        }
        const result = toString(this.result);
        const terms = Array.isArray(this.term) ? this.term : [this.term];
        const prepareTerm = term => this.accentSensitive ? term : removeAccents(term);
        const escapedTerms = terms.map(term => regExpEscape(prepareTerm(toString(term)))).filter(term => term);
        const toSplit = this.accentSensitive ? result : removeAccents(result);
        const parts = escapedTerms.length ? toSplit.split(new RegExp(`(${escapedTerms.join('|')})`, 'gmi')) : [result];
        if (this.accentSensitive) {
            this.parts = parts;
        }
        else {
            let offset = 0;
            this.parts = parts.map(part => result.substring(offset, offset += part.length));
        }
    }
}
NgbHighlight.ɵfac = function NgbHighlight_Factory(t) { return new (t || NgbHighlight)(); };
NgbHighlight.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbHighlight, selectors: [["ngb-highlight"]], inputs: { highlightClass: "highlightClass", accentSensitive: "accentSensitive", result: "result", term: "term" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["ngFor", "", 3, "ngForOf"], [3, "class", 4, "ngIf", "ngIfElse"], ["even", ""]], template: function NgbHighlight_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgbHighlight_ng_template_0_Template, 3, 2, "ng-template", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.parts);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf], styles: [".ngb-highlight{font-weight:700}"], encapsulation: 2, changeDetection: 0 });
NgbHighlight.propDecorators = {
    highlightClass: [{ type: Input }],
    result: [{ type: Input }],
    term: [{ type: Input }],
    accentSensitive: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbHighlight, [{
        type: Component,
        args: [{
                selector: 'ngb-highlight',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `<ng-template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` +
                    `<span *ngIf="isOdd; else even" [class]="highlightClass">{{part}}</span><ng-template #even>{{part}}</ng-template>` +
                    `</ng-template>`,
                styles: [".ngb-highlight{font-weight:700}"]
            }]
    }], function () { return []; }, { highlightClass: [{
            type: Input
        }], accentSensitive: [{
            type: Input
        }], result: [{
            type: Input
        }], term: [{
            type: Input
        }] }); })();

class NgbTypeaheadWindow {
    constructor() {
        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */
        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */
        this.formatter = toString;
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new EventEmitter();
        this.activeChangeEvent = new EventEmitter();
    }
    hasActive() { return this.activeIdx > -1 && this.activeIdx < this.results.length; }
    getActive() { return this.results[this.activeIdx]; }
    markActive(activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    }
    next() {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    }
    prev() {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    }
    resetActive() {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    }
    select(item) { this.selectEvent.emit(item); }
    ngOnInit() { this.resetActive(); }
    _activeChanged() {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    }
}
NgbTypeaheadWindow.ɵfac = function NgbTypeaheadWindow_Factory(t) { return new (t || NgbTypeaheadWindow)(); };
NgbTypeaheadWindow.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgbTypeaheadWindow, selectors: [["ngb-typeahead-window"]], hostAttrs: ["role", "listbox"], hostVars: 3, hostBindings: function NgbTypeaheadWindow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function NgbTypeaheadWindow_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
        ɵngcc0.ɵɵclassMap("dropdown-menu show" + (ctx.popupClass ? " " + ctx.popupClass : ""));
    } }, inputs: { focusFirst: "focusFirst", formatter: "formatter", id: "id", results: "results", term: "term", resultTemplate: "resultTemplate", popupClass: "popupClass" }, outputs: { selectEvent: "select", activeChangeEvent: "activeChange" }, exportAs: ["ngbTypeaheadWindow"], decls: 3, vars: 1, consts: [["rt", ""], ["ngFor", "", 3, "ngForOf"], [3, "result", "term"], ["type", "button", "role", "option", 1, "dropdown-item", 3, "id", "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NgbTypeaheadWindow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgbTypeaheadWindow_ng_template_0_Template, 1, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NgbTypeaheadWindow_ng_template_2_Template, 2, 9, "ng-template", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results);
    } }, directives: [ɵngcc1.NgForOf, NgbHighlight, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
NgbTypeaheadWindow.propDecorators = {
    id: [{ type: Input }],
    focusFirst: [{ type: Input }],
    results: [{ type: Input }],
    term: [{ type: Input }],
    formatter: [{ type: Input }],
    resultTemplate: [{ type: Input }],
    popupClass: [{ type: Input }],
    selectEvent: [{ type: Output, args: ['select',] }],
    activeChangeEvent: [{ type: Output, args: ['activeChange',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTypeaheadWindow, [{
        type: Component,
        args: [{
                selector: 'ngb-typeahead-window',
                exportAs: 'ngbTypeaheadWindow',
                encapsulation: ViewEncapsulation.None,
                host: {
                    '(mousedown)': '$event.preventDefault()',
                    '[class]': '"dropdown-menu show" + (popupClass ? " " + popupClass : "")',
                    'role': 'listbox',
                    '[id]': 'id'
                },
                template: `
    <ng-template #rt let-result="result" let-term="term" let-formatter="formatter">
      <ngb-highlight [result]="formatter(result)" [term]="term"></ngb-highlight>
    </ng-template>
    <ng-template ngFor [ngForOf]="results" let-result let-idx="index">
      <button type="button" class="dropdown-item" role="option"
        [id]="id + '-' + idx"
        [class.active]="idx === activeIdx"
        (mouseenter)="markActive(idx)"
        (click)="select(result)">
          <ng-template [ngTemplateOutlet]="resultTemplate || rt"
          [ngTemplateOutletContext]="{result: result, term: term, formatter: formatter}"></ng-template>
      </button>
    </ng-template>
  `
            }]
    }], function () { return []; }, { focusFirst: [{
            type: Input
        }], formatter: [{
            type: Input
        }], selectEvent: [{
            type: Output,
            args: ['select']
        }], activeChangeEvent: [{
            type: Output,
            args: ['activeChange']
        }], id: [{
            type: Input
        }], results: [{
            type: Input
        }], term: [{
            type: Input
        }], resultTemplate: [{
            type: Input
        }], popupClass: [{
            type: Input
        }] }); })();

const ARIA_LIVE_DELAY = new InjectionToken('live announcer delay', { providedIn: 'root', factory: ARIA_LIVE_DELAY_FACTORY });
function ARIA_LIVE_DELAY_FACTORY() {
    return 100;
}
function getLiveElement(document, lazyCreate = false) {
    let element = document.body.querySelector('#ngb-live');
    if (element == null && lazyCreate) {
        element = document.createElement('div');
        element.setAttribute('id', 'ngb-live');
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-atomic', 'true');
        element.classList.add('sr-only');
        document.body.appendChild(element);
    }
    return element;
}
class Live {
    constructor(_document, _delay) {
        this._document = _document;
        this._delay = _delay;
    }
    ngOnDestroy() {
        const element = getLiveElement(this._document);
        if (element) {
            // if exists, it will always be attached to the <body>
            element.parentElement.removeChild(element);
        }
    }
    say(message) {
        const element = getLiveElement(this._document, true);
        const delay = this._delay;
        if (element != null) {
            element.textContent = '';
            const setText = () => element.textContent = message;
            if (delay === null) {
                setText();
            }
            else {
                setTimeout(setText, delay);
            }
        }
    }
}
Live.ɵfac = function Live_Factory(t) { return new (t || Live)(ɵngcc0.ɵɵinject(DOCUMENT), ɵngcc0.ɵɵinject(ARIA_LIVE_DELAY)); };
Live.ɵprov = i0.ɵɵdefineInjectable({ factory: function Live_Factory() { return new Live(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(ARIA_LIVE_DELAY)); }, token: Live, providedIn: "root" });
Live.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ARIA_LIVE_DELAY,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(Live, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [ARIA_LIVE_DELAY]
            }] }]; }, null); })();

/**
 * A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
class NgbTypeaheadConfig {
    constructor() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
        this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    }
}
NgbTypeaheadConfig.ɵfac = function NgbTypeaheadConfig_Factory(t) { return new (t || NgbTypeaheadConfig)(); };
NgbTypeaheadConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbTypeaheadConfig_Factory() { return new NgbTypeaheadConfig(); }, token: NgbTypeaheadConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTypeaheadConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

let nextWindowId = 0;
/**
 * A directive providing a simple way of creating powerful typeaheads from any text input.
 */
class NgbTypeahead {
    constructor(_elementRef, viewContainerRef, _renderer, injector, componentFactoryResolver, config, ngZone, _live, _document, _ngZone, _changeDetector, applicationRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._live = _live;
        this._document = _document;
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        this._subscription = null;
        this._closed$ = new Subject();
        this._inputValueBackup = null;
        this._windowRef = null;
        /**
         * The value for the `autocomplete` attribute for the `<input>` element.
         *
         * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
         *
         * @since 2.1.0
         */
        this.autocomplete = 'off';
        /**
         * The preferred placement of the typeahead.
         *
         * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
         * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
         * `"right-bottom"`
         *
         * Accepts an array of strings or a string with space separated possible values.
         *
         * The default order of preference is `"bottom-left bottom-right top-left top-right"`
         *
         * Please see the [positioning overview](#/positioning) for more details.
         */
        this.placement = 'bottom-left';
        /**
         * An event emitted right before an item is selected from the result list.
         *
         * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
         */
        this.selectItem = new EventEmitter();
        this.activeDescendant = null;
        this.popupId = `ngb-typeahead-${nextWindowId++}`;
        this._onTouched = () => { };
        this._onChange = (_) => { };
        this.container = config.container;
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this.placement = config.placement;
        this._valueChanges = fromEvent(_elementRef.nativeElement, 'input')
            .pipe(map($event => $event.target.value));
        this._resubscribeTypeahead = new BehaviorSubject(null);
        this._popupService = new PopupService(NgbTypeaheadWindow, injector, viewContainerRef, _renderer, this._ngZone, componentFactoryResolver, applicationRef);
        this._zoneSubscription = ngZone.onStable.subscribe(() => {
            if (this.isPopupOpen()) {
                positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body');
            }
        });
    }
    ngOnInit() { this._subscribeToUserInput(); }
    ngOnChanges({ ngbTypeahead }) {
        if (ngbTypeahead && !ngbTypeahead.firstChange) {
            this._unsubscribeFromUserInput();
            this._subscribeToUserInput();
        }
    }
    ngOnDestroy() {
        this._closePopup();
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    }
    registerOnChange(fn) { this._onChange = fn; }
    registerOnTouched(fn) { this._onTouched = fn; }
    writeValue(value) {
        this._writeInputValue(this._formatItemForInput(value));
        if (this.showHint) {
            this._inputValueBackup = value;
        }
    }
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * Dismisses typeahead popup window
     */
    dismissPopup() {
        if (this.isPopupOpen()) {
            this._resubscribeTypeahead.next(null);
            this._closePopup();
            if (this.showHint && this._inputValueBackup !== null) {
                this._writeInputValue(this._inputValueBackup);
            }
            this._changeDetector.markForCheck();
        }
    }
    /**
     * Returns true if the typeahead popup window is displayed
     */
    isPopupOpen() { return this._windowRef != null; }
    handleBlur() {
        this._resubscribeTypeahead.next(null);
        this._onTouched();
    }
    handleKeyDown(event) {
        if (!this.isPopupOpen()) {
            return;
        }
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.ArrowDown:
                event.preventDefault();
                this._windowRef.instance.next();
                this._showHint();
                break;
            case Key.ArrowUp:
                event.preventDefault();
                this._windowRef.instance.prev();
                this._showHint();
                break;
            case Key.Enter:
            case Key.Tab:
                const result = this._windowRef.instance.getActive();
                if (isDefined(result)) {
                    event.preventDefault();
                    event.stopPropagation();
                    this._selectResult(result);
                }
                this._closePopup();
                break;
        }
    }
    _openPopup() {
        if (!this.isPopupOpen()) {
            this._inputValueBackup = this._elementRef.nativeElement.value;
            const { windowRef } = this._popupService.open();
            this._windowRef = windowRef;
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe((result) => this._selectResultClosePopup(result));
            this._windowRef.instance.activeChangeEvent.subscribe((activeId) => this.activeDescendant = activeId);
            this._windowRef.instance.popupClass = this.popupClass;
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._changeDetector.markForCheck();
            ngbAutoClose(this._ngZone, this._document, 'outside', () => this.dismissPopup(), this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
        }
    }
    _closePopup() {
        this._popupService.close().subscribe(() => {
            this._closed$.next();
            this._windowRef = null;
            this.activeDescendant = null;
        });
    }
    _selectResult(result) {
        let defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: () => { defaultPrevented = true; } });
        this._resubscribeTypeahead.next(null);
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    }
    _selectResultClosePopup(result) {
        this._selectResult(result);
        this._closePopup();
    }
    _showHint() {
        var _a;
        if (this.showHint && ((_a = this._windowRef) === null || _a === void 0 ? void 0 : _a.instance.hasActive()) && this._inputValueBackup != null) {
            const userInputLowerCase = this._inputValueBackup.toLowerCase();
            const formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
                this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));
                this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
            }
            else {
                this._writeInputValue(formattedVal);
            }
        }
    }
    _formatItemForInput(item) {
        return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
    }
    _writeInputValue(value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
    }
    _subscribeToUserInput() {
        const results$ = this._valueChanges.pipe(tap(value => {
            this._inputValueBackup = this.showHint ? value : null;
            this._onChange(this.editable ? value : undefined);
        }), this.ngbTypeahead ? this.ngbTypeahead : () => of([]));
        this._subscription = this._resubscribeTypeahead.pipe(switchMap(() => results$)).subscribe(results => {
            if (!results || results.length === 0) {
                this._closePopup();
            }
            else {
                this._openPopup();
                this._windowRef.instance.focusFirst = this.focusFirst;
                this._windowRef.instance.results = results;
                this._windowRef.instance.term = this._elementRef.nativeElement.value;
                if (this.resultFormatter) {
                    this._windowRef.instance.formatter = this.resultFormatter;
                }
                if (this.resultTemplate) {
                    this._windowRef.instance.resultTemplate = this.resultTemplate;
                }
                this._windowRef.instance.resetActive();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                this._windowRef.changeDetectorRef.detectChanges();
                this._showHint();
            }
            // live announcer
            const count = results ? results.length : 0;
            this._live.say(count === 0 ? 'No results available' : `${count} result${count === 1 ? '' : 's'} available`);
        });
    }
    _unsubscribeFromUserInput() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    }
}
NgbTypeahead.ɵfac = function NgbTypeahead_Factory(t) { return new (t || NgbTypeahead)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(NgbTypeaheadConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(Live), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ApplicationRef)); };
NgbTypeahead.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NgbTypeahead, selectors: [["input", "ngbTypeahead", ""]], hostAttrs: ["autocapitalize", "off", "autocorrect", "off", "role", "combobox", "aria-multiline", "false"], hostVars: 7, hostBindings: function NgbTypeahead_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function NgbTypeahead_blur_HostBindingHandler() { return ctx.handleBlur(); })("keydown", function NgbTypeahead_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("autocomplete", ctx.autocomplete);
        ɵngcc0.ɵɵattribute("aria-autocomplete", ctx.showHint ? "both" : "list")("aria-activedescendant", ctx.activeDescendant)("aria-owns", ctx.isPopupOpen() ? ctx.popupId : null)("aria-expanded", ctx.isPopupOpen());
        ɵngcc0.ɵɵclassProp("open", ctx.isPopupOpen());
    } }, inputs: { autocomplete: "autocomplete", placement: "placement", container: "container", editable: "editable", focusFirst: "focusFirst", showHint: "showHint", inputFormatter: "inputFormatter", ngbTypeahead: "ngbTypeahead", resultFormatter: "resultFormatter", resultTemplate: "resultTemplate", popupClass: "popupClass" }, outputs: { selectItem: "selectItem" }, exportAs: ["ngbTypeahead"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbTypeahead), multi: true }]), ɵngcc0.ɵɵNgOnChangesFeature] });
NgbTypeahead.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: NgbTypeaheadConfig },
    { type: NgZone },
    { type: Live },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ApplicationRef }
];
NgbTypeahead.propDecorators = {
    autocomplete: [{ type: Input }],
    container: [{ type: Input }],
    editable: [{ type: Input }],
    focusFirst: [{ type: Input }],
    inputFormatter: [{ type: Input }],
    ngbTypeahead: [{ type: Input }],
    resultFormatter: [{ type: Input }],
    resultTemplate: [{ type: Input }],
    showHint: [{ type: Input }],
    placement: [{ type: Input }],
    popupClass: [{ type: Input }],
    selectItem: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTypeahead, [{
        type: Directive,
        args: [{
                selector: 'input[ngbTypeahead]',
                exportAs: 'ngbTypeahead',
                host: {
                    '(blur)': 'handleBlur()',
                    '[class.open]': 'isPopupOpen()',
                    '(keydown)': 'handleKeyDown($event)',
                    '[autocomplete]': 'autocomplete',
                    'autocapitalize': 'off',
                    'autocorrect': 'off',
                    'role': 'combobox',
                    'aria-multiline': 'false',
                    '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                    '[attr.aria-activedescendant]': 'activeDescendant',
                    '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                    '[attr.aria-expanded]': 'isPopupOpen()'
                },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbTypeahead), multi: true }]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ComponentFactoryResolver }, { type: NgbTypeaheadConfig }, { type: ɵngcc0.NgZone }, { type: Live }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ApplicationRef }]; }, { autocomplete: [{
            type: Input
        }], placement: [{
            type: Input
        }], selectItem: [{
            type: Output
        }], container: [{
            type: Input
        }], editable: [{
            type: Input
        }], focusFirst: [{
            type: Input
        }], showHint: [{
            type: Input
        }], inputFormatter: [{
            type: Input
        }], ngbTypeahead: [{
            type: Input
        }], resultFormatter: [{
            type: Input
        }], resultTemplate: [{
            type: Input
        }], popupClass: [{
            type: Input
        }] }); })();

class NgbTypeaheadModule {
}
NgbTypeaheadModule.ɵfac = function NgbTypeaheadModule_Factory(t) { return new (t || NgbTypeaheadModule)(); };
NgbTypeaheadModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbTypeaheadModule });
NgbTypeaheadModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbTypeaheadModule, [{
        type: NgModule,
        args: [{
                declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
                exports: [NgbTypeahead, NgbHighlight],
                imports: [CommonModule],
                entryComponents: [NgbTypeaheadWindow]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbTypeaheadModule, { declarations: function () { return [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgbTypeahead, NgbHighlight]; } }); })();

const NGB_MODULES = [
    NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
    NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule,
    NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule
];
class NgbModule {
}
NgbModule.ɵfac = function NgbModule_Factory(t) { return new (t || NgbModule)(); };
NgbModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgbModule });
NgbModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [NGB_MODULES, NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgbModule, [{
        type: NgModule,
        args: [{ imports: NGB_MODULES, exports: NGB_MODULES }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgbModule, { imports: [NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule], exports: [NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ModalDismissReasons, NgbAccordion, NgbAccordionConfig, NgbAccordionModule, NgbActiveModal, NgbAlert, NgbAlertConfig, NgbAlertModule, NgbButtonLabel, NgbButtonsModule, NgbCalendar, NgbCalendarBuddhist, NgbCalendarGregorian, NgbCalendarHebrew, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbCalendarPersian, NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbCheckBox, NgbCollapse, NgbCollapseConfig, NgbCollapseModule, NgbConfig, NgbDate, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter, NgbDateParserFormatter, NgbDatepicker, NgbDatepickerConfig, NgbDatepickerContent, NgbDatepickerI18n, NgbDatepickerI18nDefault, NgbDatepickerI18nHebrew, NgbDatepickerKeyboardService, NgbDatepickerModule, NgbDatepickerMonth, NgbDropdown, NgbDropdownAnchor, NgbDropdownConfig, NgbDropdownItem, NgbDropdownMenu, NgbDropdownModule, NgbDropdownToggle, NgbHighlight, NgbInputDatepicker, NgbInputDatepickerConfig, NgbModal, NgbModalConfig, NgbModalModule, NgbModalRef, NgbModule, NgbNav, NgbNavConfig, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavModule, NgbNavOutlet, NgbNavPane, NgbNavbar, NgbPagination, NgbPaginationConfig, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationModule, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPages, NgbPaginationPrevious, NgbPanel, NgbPanelContent, NgbPanelHeader, NgbPanelTitle, NgbPanelToggle, NgbPopover, NgbPopoverConfig, NgbPopoverModule, NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule, NgbRadio, NgbRadioGroup, NgbRating, NgbRatingConfig, NgbRatingModule, NgbSlide, NgbSlideEventDirection, NgbSlideEventSource, NgbTimeAdapter, NgbTimepicker, NgbTimepickerConfig, NgbTimepickerI18n, NgbTimepickerModule, NgbToast, NgbToastConfig, NgbToastHeader, NgbToastModule, NgbTooltip, NgbTooltipConfig, NgbTooltipModule, NgbTypeahead, NgbTypeaheadConfig, NgbTypeaheadModule, NGB_CAROUSEL_DIRECTIVES as ɵa, NGB_DATEPICKER_CALENDAR_FACTORY as ɵb, ContentRef as ɵba, NgbDatepickerDayView as ɵc, NgbDatepickerNavigation as ɵd, NgbDatepickerNavigationSelect as ɵe, NGB_DATEPICKER_18N_FACTORY as ɵf, NGB_DATEPICKER_DATE_ADAPTER_FACTORY as ɵg, NgbDateStructAdapter as ɵh, NGB_DATEPICKER_PARSER_FORMATTER_FACTORY as ɵi, NgbDateISOParserFormatter as ɵj, NgbPopoverWindow as ɵk, NGB_DATEPICKER_TIME_ADAPTER_FACTORY as ɵl, NgbTimeStructAdapter as ɵm, NGB_TIMEPICKER_I18N_FACTORY as ɵn, NgbTimepickerI18nDefault as ɵo, NgbTooltipWindow as ɵp, NgbTypeaheadWindow as ɵq, NgbDatepickerService as ɵr, NgbModalBackdrop as ɵs, NgbModalWindow as ɵt, NgbModalStack as ɵu, ScrollBar as ɵv, ARIA_LIVE_DELAY as ɵw, ARIA_LIVE_DELAY_FACTORY as ɵx, Live as ɵy, NgbCalendarHijri as ɵz };

//# sourceMappingURL=ng-bootstrap.js.map