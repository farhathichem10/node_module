/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Component, Input, Output, EventEmitter, HostBinding, ViewChild, Inject, InjectionToken, QueryList, ViewChildren } from '@angular/core';
import { Subject, fromEvent, merge } from 'rxjs';
import { delay, map, filter, tap, take, switchMapTo } from 'rxjs/operators';
import { RowHeightService } from '../scrolling/row-height.service';
import { ScrollerService, PageAction, ScrollAction, ScrollBottomAction } from '../scrolling/scroller.service';
import { ColumnBase } from '../columns/column-base';
import { isChanged, isPresent, isUniversal, anyChanged, isNumber, requestAnimationFrame, cancelAnimationFrame } from '../utils';
import { ColumnsContainer } from '../columns/columns-container';
import { syncRowsHeight } from '../layout/row-sync';
import { expandColumns, sumColumnWidths } from "../columns/column-common";
import { ResizeSensorComponent } from "@progress/kendo-angular-common";
import { Keys } from '@progress/kendo-angular-common';
import { GROUP_CELL_WIDTH } from '../constants';
import { defaultTrackBy } from '../common/default-track-by';
import { hasClasses, rtlScrollPosition } from './common/dom-queries';
import { NON_DATA_CELL_CLASSES } from './constants';
import * as i0 from "@angular/core";
import * as i1 from "./details/details.service";
import * as i2 from "../data/change-notification.service";
import * as i3 from "../scrolling/suspend.service";
import * as i4 from "../grouping/groups.service";
import * as i5 from "../scrolling/scroll-sync.service";
import * as i6 from "../layout/resize.service";
import * as i7 from "../editing/edit.service";
import * as i8 from "../layout/browser-support.service";
import * as i9 from "../navigation/navigation.service";
import * as i10 from "../scrolling/scroll-request.service";
import * as i11 from "@progress/kendo-angular-l10n";
import * as i12 from "../column-resizing/column-resizing.service";
import * as i13 from "../pdf/pdf.service";
import * as i14 from "../common/column-info.service";
import * as i15 from "./common/col-group.component";
import * as i16 from "./table-body.component";
import * as i17 from "@progress/kendo-angular-common";
import * as i18 from "@angular/common";
import * as i19 from "../column-resizing/table.directive";
import * as i20 from "../layout/resizable.directive";
const elementAt = (index, elements, elementOffset) => {
    for (let idx = 0, elementIdx = 0; idx < elements.length; idx++) {
        const offset = elementOffset(elements[idx]);
        if (elementIdx <= index && index <= elementIdx + offset - 1) {
            return elements[idx];
        }
        elementIdx += offset;
    }
};
const rowAt = (index, rows) => elementAt(index, rows, row => row.hasAttribute('data-kendo-grid-item-index') ? 1 : 0);
const cellAt = (index, cells) => elementAt(index, cells, cell => !hasClasses(cell, NON_DATA_CELL_CLASSES) ? parseInt(cell.getAttribute('colSpan'), 10) || 1 : 0);
const EMPTY_OBJECT = {};
/**
 * @hidden
 */
export const SCROLLER_FACTORY_TOKEN = new InjectionToken('grid-scroll-service-factory');
/**
 * @hidden
 */
export function DEFAULT_SCROLLER_FACTORY(observable) {
    return new ScrollerService(observable);
}
const wheelDeltaY = (e) => {
    const deltaY = e.wheelDeltaY;
    if (e.wheelDelta && (deltaY === undefined || deltaY)) {
        return e.wheelDelta;
    }
    else if (e.detail && e.axis === e.VERTICAL_AXIS) {
        return (-e.detail) * 10;
    }
    return 0;
};
const preventLockedScroll = (args, element) => {
    const delta = wheelDeltaY(args);
    const scrollTop = element.scrollTop;
    const allowScroll = (scrollTop === 0 && 0 < delta) || (element.scrollHeight <= element.offsetHeight + scrollTop && delta < 0);
    if (!allowScroll) {
        event.preventDefault();
    }
};
const translateY = (renderer, value) => el => renderer.setStyle(el, "transform", `translateY(${value}px)`);
const maybeNativeElement = el => el ? el.nativeElement : null;
const hasScrollbar = (el, parent) => el.nativeElement.offsetWidth > parent.nativeElement.clientWidth;
const setHeight = renderer => ({ el, height }) => renderer.setStyle(el, "height", `${height}px`);
const bufferSize = 1;
/**
 * @hidden
 */
export class ListComponent {
    constructor(scrollerFactory, detailsService, changeNotification, suspendService, groupsService, ngZone, renderer, scrollSyncService, resizeService, editService, supportService, navigationService, scrollRequestService, localization, columnResizingService, changeDetector, pdfService, columnInfo) {
        this.changeNotification = changeNotification;
        this.suspendService = suspendService;
        this.groupsService = groupsService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollSyncService = scrollSyncService;
        this.resizeService = resizeService;
        this.editService = editService;
        this.supportService = supportService;
        this.navigationService = navigationService;
        this.localization = localization;
        this.columnResizingService = columnResizingService;
        this.changeDetector = changeDetector;
        this.pdfService = pdfService;
        this.columnInfo = columnInfo;
        this.groups = [];
        this.skip = 0;
        this.columns = new ColumnsContainer(() => []);
        this.selectable = false;
        this.groupable = false;
        this.trackBy = defaultTrackBy;
        this.sort = new Array();
        this.contentScroll = new EventEmitter();
        this.pageChange = new EventEmitter();
        this.scrollBottom = new EventEmitter();
        this.columnsStartIdx = 0;
        this.resizeSensors = new QueryList();
        this.dispatcher = new Subject();
        this.containerScrollTop = 0;
        this.scrollLeft = 0;
        this.rtl = false;
        this.scroller = scrollerFactory(this.dispatcher);
        this.subscriptions = detailsService.changes.subscribe(x => this.detailExpand(x));
        this.subscriptions.add(scrollRequestService.requests.subscribe(x => this.scrollTo(x)));
    }
    get hostClass() {
        return true;
    }
    get hostRole() {
        return 'presentation';
    }
    get showFooter() {
        return this.groupable && this.groupable.showFooter;
    }
    get totalWidth() {
        if (this.virtualColumns && this.columns.unlockedWidth) {
            return this.columns.unlockedWidth;
        }
    }
    get lockedLeafColumns() {
        return this.columns.lockedLeafColumns;
    }
    get nonLockedLeafColumns() {
        return this.columns.nonLockedLeafColumns;
    }
    get nonLockedColumnsToRender() {
        if (this.virtualColumns && !this.pdfService.exporting) {
            return this.viewportColumns;
        }
        return this.nonLockedLeafColumns;
    }
    get leafColumns() {
        return this.columns.leafColumnsToRender;
    }
    get lockedWidth() {
        const groupCellsWidth = this.groups.length * GROUP_CELL_WIDTH;
        return expandColumns(this.lockedLeafColumns.toArray()).reduce((prev, curr) => prev + (curr.width || 0), groupCellsWidth);
    }
    get nonLockedWidth() {
        if ((!this.rtl && this.lockedLeafColumns.length) || this.virtualColumns) {
            return sumColumnWidths(expandColumns(this.nonLockedColumnsToRender.toArray()));
        }
        return undefined;
    }
    get isLocked() {
        return this.lockedLeafColumns.length > 0;
    }
    ngOnInit() {
        this.init();
        this.subscriptions.add(this.ngZone.runOutsideAngular(this.handleRowSync.bind(this)));
        this.subscriptions.add(this.ngZone.runOutsideAngular(this.handleRowNavigationLocked.bind(this)));
        this.subscriptions.add(merge(this.columns.changes, this.resizeService.changes).subscribe(() => {
            if (this.virtualColumns) {
                this.ngZone.run(() => {
                    this.updateViewportColumns();
                    this.changeDetector.markForCheck();
                });
            }
        }));
        this.subscriptions.add(this.localization.changes.subscribe(({ rtl }) => this.rtl = rtl));
    }
    ngOnChanges(changes) {
        const hasInitialSkip = changes.skip && changes.skip.firstChange && changes.skip.currentValue > 0;
        if (hasInitialSkip) {
            this.handleInitialScrollToSkip();
        }
        if (isChanged("skip", changes) && !this.rebind) {
            this.skipScroll = true;
            this.container.nativeElement.scrollTop = this.rowHeightService.offset(this.skip);
        }
        if (anyChanged(["total", "take"], changes)) {
            this.init();
        }
        this.rebind = false;
    }
    ngDoCheck() {
        if (this.virtualColumns && (!this.viewportColumns || this.viewportWidthChange())) {
            this.updateViewportColumns();
        }
    }
    ngAfterViewInit() {
        if (this.skip && this.isVirtual) {
            this.container.nativeElement.scrollTop = this.rowHeightService.offset(this.skip);
        }
        this.resetNavigationViewport();
        this.attachContainerScroll();
        this.initResizeService();
    }
    ngAfterViewChecked() {
        const isLocked = this.isLocked;
        if (isLocked && !this.hasLockedContainer) {
            this.syncRowsHeight();
        }
        this.hasLockedContainer = isLocked;
    }
    syncRowsHeight() {
        if (this.lockedContainer) {
            syncRowsHeight(this.lockedTable.nativeElement, this.table.nativeElement);
        }
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        if (this.resizeService) {
            this.resizeService.destroy();
        }
        this.cleanupScroller();
    }
    init() {
        if (this.suspendService.scroll) {
            return;
        }
        this.rowHeightService = new RowHeightService(this.total, this.rowHeight, this.detailRowHeight);
        this.totalHeight = this.rowHeightService.totalHeight();
        if (!isUniversal()) {
            this.ngZone.runOutsideAngular(this.createScroller.bind(this));
        }
    }
    lockedScroll() {
        if (!this.suspendService.scroll) {
            const lockedScrollTop = this.lockedContainer.nativeElement.scrollTop;
            if (lockedScrollTop !== this.containerScrollTop) {
                this.container.nativeElement.scrollTop = this.containerScrollTop = lockedScrollTop;
            }
        }
    }
    lockedMousewheel(args) {
        if (!args.ctrlKey) {
            preventLockedScroll(args, this.container.nativeElement);
            const scrollDelta = wheelDeltaY(args);
            this.container.nativeElement.scrollTop -= scrollDelta;
        }
    }
    lockedKeydown(args) {
        if (args.keyCode === Keys.PageDown || args.keyCode === Keys.PageUp) {
            const dir = args.keyCode === Keys.PageDown ? 1 : -1;
            const element = this.container.nativeElement;
            element.scrollTop += element.offsetHeight * dir * 0.8;
            args.preventDefault();
        }
    }
    detailExpand({ index, expand }) {
        if (expand) {
            this.rowHeightService.expandDetail(index);
        }
        else {
            this.rowHeightService.collapseDetail(index);
        }
        this.totalHeight = this.rowHeightService.totalHeight();
        this.resetNavigationViewport();
    }
    attachContainerScroll() {
        if (isUniversal()) {
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this.subscriptions.add(fromEvent(this.container.nativeElement, 'scroll').pipe(map((event) => event.target), filter(() => !this.suspendService.scroll), tap((target) => {
                this.onContainerScroll(target);
                this.resetNavigationViewport();
                if (this.virtualColumns) {
                    this.handleColumnScroll();
                }
                const rowViewport = this.navigationService.viewport || EMPTY_OBJECT;
                const columnViewport = this.navigationService.columnViewport || EMPTY_OBJECT;
                this.contentScroll.emit({
                    scrollLeft: target.scrollLeft,
                    scrollTop: target.scrollTop,
                    startRow: rowViewport.firstItemIndex,
                    endRow: rowViewport.lastItemIndex,
                    startColumn: columnViewport.firstItemIndex,
                    endColumn: columnViewport.lastItemIndex
                });
            })).subscribe(this.dispatcher));
        });
        this.scrollSyncService.registerEmitter(this.container.nativeElement, "body");
    }
    createScroller() {
        this.cleanupScroller();
        const observable = this.scroller
            .create(this.rowHeightService, this.skip, this.take, this.total);
        this.skipScroll = false;
        this.scrollerSubscription = observable.pipe(filter((x) => x instanceof PageAction), filter(() => {
            const temp = this.skipScroll;
            this.skipScroll = false;
            return !temp;
        }), tap(() => this.rebind = true))
            .subscribe((x) => this.ngZone.run(() => this.pageChange.emit(x)));
        this.scrollerSubscription.add(observable.pipe(filter((x) => x instanceof ScrollAction))
            .subscribe(this.scroll.bind(this)));
        this.scrollerSubscription.add(observable.pipe(filter((x) => x instanceof ScrollBottomAction))
            .subscribe(() => this.scrollBottom.emit()));
    }
    scroll({ offset = 0 }) {
        if (this.isVirtual) {
            [
                maybeNativeElement(this.table),
                maybeNativeElement(this.lockedTable)
            ].filter(isPresent).forEach(translateY(this.renderer, offset));
        }
        this.resetNavigationViewport();
    }
    onContainerScroll({ scrollTop }) {
        this.containerScrollTop = scrollTop;
        if (this.lockedContainer) {
            this.lockedContainer.nativeElement.scrollTop = scrollTop;
        }
    }
    handleInitialScrollToSkip() {
        const shouldScroll = () => this.isVirtual && this.skip > 0 && this.total > 0;
        const sub = this.changeNotification.changes
            .pipe(filter(shouldScroll))
            .subscribe(_ => {
            this.scrollTo({ row: this.skip });
            sub.unsubscribe();
        });
    }
    handleRowSync() {
        const isLocked = () => isPresent(this.lockedContainer);
        const onStable = () => this.ngZone.onStable.asObservable().pipe(take(1));
        return merge(this.changeNotification.changes, this.groupsService.changes
            .pipe(filter(isLocked), switchMapTo(onStable())), this.editService.changed, this.resizeService.changes, this.columnResizingService.changes
            .pipe(filter(change => change.type === 'end')), this.supportService.changes)
            .pipe(tap(() => this.resetNavigationViewport()), filter(isLocked))
            .subscribe(() => {
            const scrollTop = this.container.nativeElement.scrollTop;
            const scrollLeft = this.container.nativeElement.scrollLeft;
            this.syncRowsHeight();
            this.syncContainerHeight();
            this.lockedContainer.nativeElement.scrollTop = this.container.nativeElement.scrollTop = scrollTop;
            // fixes scroll left position in IE when editing
            this.container.nativeElement.scrollLeft = scrollLeft;
            this.resizeSensors.forEach(sensor => sensor.acceptSize());
        });
    }
    handleRowNavigationLocked() {
        return this.navigationService.changes.pipe(filter(() => isPresent(this.lockedContainer)), delay(10)).subscribe((args) => {
            if (this.lockedLeafColumns.length <= args.prevColIndex && args.colIndex < this.lockedLeafColumns.length) {
                const cell = this.navigationService.activeCell;
                if (cell && cell.colIndex + cell.colSpan < args.prevColIndex) {
                    this.container.nativeElement.scrollLeft = 0;
                }
            }
        });
    }
    scrollToVirtualRow(itemIndex) {
        if (isPresent(this.detailTemplate)) {
            itemIndex = Math.floor(itemIndex / 2);
        }
        const offset = this.rowHeightService.offset(itemIndex);
        this.container.nativeElement.scrollTop = offset;
        this.resetNavigationViewport();
    }
    scrollTo({ row, column }) {
        if (isNumber(row)) {
            if (this.isVirtual) {
                this.scrollToVirtualRow(row);
            }
            else {
                const element = rowAt(row, this.table.nativeElement.rows);
                if (element) {
                    this.container.nativeElement.scrollTop = element.offsetTop;
                }
            }
        }
        if (isNumber(column)) {
            column -= this.lockedLeafColumns.length;
            if (this.virtualColumns) {
                const columns = this.columns.leafColumnsToRender;
                let offset = 0;
                for (let idx = 0; idx < column; idx++) {
                    offset += columns[idx].width || 0;
                }
                const startOffset = this.lockedLeafColumns.length ? 0 : this.groups.length * GROUP_CELL_WIDTH + (this.detailTemplate && column > 0 ? GROUP_CELL_WIDTH : 0);
                this.container.nativeElement.scrollLeft = this.normalizeScrollLeft(offset + startOffset);
            }
            else if (column === 0 && this.detailTemplate) {
                this.container.nativeElement.scrollLeft = this.normalizeScrollLeft(0);
            }
            else {
                const firstRow = rowAt(0, this.table.nativeElement.rows);
                if (firstRow) {
                    const element = cellAt(column, firstRow.cells);
                    if (element) {
                        this.container.nativeElement.scrollLeft = this.elementScrollLeft(element);
                    }
                }
            }
        }
    }
    resetNavigationViewport() {
        if (!this.container || !this.navigationService.tableEnabled ||
            !this.navigationService.needsViewport() || this.data.length === 0) {
            return;
        }
        const { scrollTop, offsetHeight } = this.container.nativeElement;
        const scrollBottom = scrollTop + offsetHeight;
        const firstItemIndex = this.rowHeightService.index(scrollTop);
        let lastItemIndex = this.rowHeightService.index(scrollBottom);
        const lastItemOffset = this.rowHeightService.offset(lastItemIndex);
        const lastItemOverflows = lastItemOffset + this.rowHeight > scrollBottom;
        if (lastItemIndex > 0 && lastItemOverflows) {
            lastItemIndex--;
        }
        let viewportStart = firstItemIndex;
        let viewportEnd = lastItemIndex;
        if (isPresent(this.detailTemplate)) {
            viewportStart *= 2;
            viewportEnd *= 2;
            const firstItemHeight = this.rowHeightService.offset(firstItemIndex);
            if (firstItemHeight + this.rowHeight < scrollTop) {
                viewportStart++;
            }
            const lastItemHeight = this.rowHeightService.height(lastItemIndex);
            const lastItemExpanded = this.rowHeightService.isExpanded(lastItemIndex);
            const lastItemDetailOverflows = lastItemOffset + lastItemHeight > scrollBottom;
            if (lastItemExpanded && !lastItemDetailOverflows) {
                viewportEnd++;
            }
        }
        this.navigationService.setViewport(viewportStart, viewportEnd);
    }
    cleanupScroller() {
        if (this.scrollerSubscription) {
            this.scrollerSubscription.unsubscribe();
        }
        if (this.scroller) {
            this.scroller.destroy();
        }
    }
    initResizeService() {
        this.resizeService.connect(merge(...this.resizeSensors.map(sensor => sensor.resize)));
    }
    syncContainerHeight() {
        [maybeNativeElement(this.lockedContainer)]
            .filter(isPresent)
            .map(el => {
            el.style.height = '';
            let height = this.container.nativeElement.offsetHeight;
            if (hasScrollbar(this.table, this.container)) {
                height -= this.supportService.scrollbarWidth;
            }
            return { el, height };
        })
            .forEach(setHeight(this.renderer));
    }
    updateViewportColumns(range) {
        const columns = this.columns.nonLockedLeafColumns.toArray();
        let { startIdx, endIdx, offset } = range || this.calculateViewportColumns();
        const start = Math.max(0, startIdx - bufferSize);
        const end = Math.min(endIdx + bufferSize, columns.length - 1);
        if (start < startIdx) {
            for (let idx = startIdx - 1; idx >= start; idx--) {
                offset -= columns[idx].width;
            }
        }
        let currentColumns = columns.slice(start, end + 1);
        this.viewportColumnsWidth = currentColumns.reduce((total, column) => total + column.width, 0);
        if (start > 0) {
            const offsetColumn = new ColumnBase();
            offsetColumn.width = offset;
            currentColumns.unshift(offsetColumn);
        }
        this.viewportColumns = new QueryList();
        this.viewportColumns.reset(currentColumns);
        this.columnsStartIdx = start;
        this.columnsEndIdx = end;
        this.columnInfo.columnRangeChange.emit({ start, end, offset });
        if (!range) {
            this.updateColumnViewport(startIdx, endIdx);
        }
    }
    handleColumnScroll() {
        const container = this.container.nativeElement;
        const scrollLeft = container.scrollLeft;
        if (this.scrollLeft !== scrollLeft) {
            this.scrollLeft = scrollLeft;
            const range = this.calculateViewportColumns();
            this.updateColumnViewport(range.startIdx, range.endIdx);
            if (range.startIdx < this.columnsStartIdx || this.columnsEndIdx < range.endIdx) {
                cancelAnimationFrame(this.columnUpdateFrame);
                this.columnUpdateFrame = requestAnimationFrame(() => {
                    this.ngZone.run(() => {
                        this.updateViewportColumns(range);
                        this.changeDetector.markForCheck();
                    });
                });
            }
        }
    }
    updateColumnViewport(startIdx, endIdx) {
        const lockedCount = this.lockedLeafColumns.length;
        const leafColumns = this.nonLockedLeafColumns.toArray();
        const viewportStart = lockedCount + startIdx + (this.detailTemplate && startIdx > 0 ? 1 : 0);
        let viewportEnd = lockedCount + endIdx + (this.detailTemplate ? 1 : 0);
        for (let idx = 0; idx < leafColumns.length; idx++) {
            const column = leafColumns[idx];
            if (column.isSpanColumn) {
                viewportEnd += column.childColumns.length;
            }
        }
        this.navigationService.setColumnViewport(viewportStart, viewportEnd);
    }
    calculateViewportColumns() {
        const { scrollLeft, clientWidth } = this.container.nativeElement;
        const columns = this.columns.nonLockedLeafColumns.toArray();
        const normalizedScrollLeft = this.normalizeScrollLeft(scrollLeft);
        const viewportEnd = normalizedScrollLeft + clientWidth;
        let startIdx;
        let endIdx = 0;
        let current = 0;
        let offset = 0;
        let idx;
        for (idx = 0; idx < columns.length; idx++) {
            const column = columns[idx];
            current += column.width || 0;
            if (startIdx === undefined && current > normalizedScrollLeft) {
                startIdx = idx;
                offset = current - (column.width || 0);
            }
            if (current >= viewportEnd) {
                endIdx = idx;
                break;
            }
        }
        if (!endIdx && idx > 0) {
            endIdx = columns.length - 1;
        }
        return { startIdx, endIdx, offset };
    }
    viewportWidthChange() {
        const currentWidth = this.viewportColumns.toArray().reduce((total, column) => total + column.width, 0);
        return currentWidth !== this.viewportColumnsWidth;
    }
    normalizeScrollLeft(position) {
        return this.rtl ? rtlScrollPosition(position, this.container.nativeElement, this.supportService.rtlScrollLeft) : position;
    }
    elementScrollLeft(element) {
        if (this.rtl) {
            return this.normalizeScrollLeft(this.container.nativeElement.scrollWidth - element.offsetLeft - element.offsetWidth);
        }
        return element.offsetLeft;
    }
}
ListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListComponent, deps: [{ token: SCROLLER_FACTORY_TOKEN }, { token: i1.DetailsService }, { token: i2.ChangeNotificationService }, { token: i3.SuspendService }, { token: i4.GroupsService }, { token: i0.NgZone }, { token: i0.Renderer2 }, { token: i5.ScrollSyncService }, { token: i6.ResizeService }, { token: i7.EditService }, { token: i8.BrowserSupportService }, { token: i9.NavigationService }, { token: i10.ScrollRequestService }, { token: i11.LocalizationService }, { token: i12.ColumnResizingService }, { token: i0.ChangeDetectorRef }, { token: i13.PDFService }, { token: i14.ColumnInfoService }], target: i0.ɵɵFactoryTarget.Component });
ListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ListComponent, selector: "kendo-grid-list", inputs: { data: "data", groups: "groups", total: "total", rowHeight: "rowHeight", stickyRowHeight: "stickyRowHeight", detailRowHeight: "detailRowHeight", take: "take", skip: "skip", columns: "columns", detailTemplate: "detailTemplate", noRecordsTemplate: "noRecordsTemplate", selectable: "selectable", groupable: "groupable", filterable: "filterable", rowClass: "rowClass", rowSticky: "rowSticky", loading: "loading", trackBy: "trackBy", virtualColumns: "virtualColumns", isVirtual: "isVirtual", cellLoadingTemplate: "cellLoadingTemplate", loadingTemplate: "loadingTemplate", sort: "sort" }, outputs: { contentScroll: "contentScroll", pageChange: "pageChange", scrollBottom: "scrollBottom" }, host: { properties: { "class.k-grid-container": "this.hostClass", "attr.role": "this.hostRole" } }, providers: [
        {
            provide: SCROLLER_FACTORY_TOKEN,
            useValue: DEFAULT_SCROLLER_FACTORY
        }
    ], viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, static: true }, { propertyName: "lockedContainer", first: true, predicate: ["lockedContainer"], descendants: true }, { propertyName: "lockedTable", first: true, predicate: ["lockedTable"], descendants: true }, { propertyName: "table", first: true, predicate: ["table"], descendants: true, static: true }, { propertyName: "resizeSensors", predicate: ResizeSensorComponent, descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div #lockedContainer class="k-grid-content-locked" role="presentation"
        *ngIf="isLocked" [style.width.px]="lockedWidth" tabindex="-1"
        [kendoEventsOutsideAngular]="{
            keydown: lockedKeydown,
            scroll: lockedScroll,
            mousewheel: lockedMousewheel,
            DOMMouseScroll: lockedMousewheel
        }"
        [scope]="this"
        >
        <div role="presentation" class="k-grid-table-wrap">
            <table [locked]="true" #lockedTable class="k-grid-table" role="presentation" [style.width.px]="lockedWidth">
                <colgroup kendoGridColGroup
                    role="presentation"
                    [groups]="groups"
                    [columns]="$any(lockedLeafColumns)"
                    [detailTemplate]="detailTemplate"
                    [sort]="sort">
                </colgroup>
                <tbody kendoGridTableBody
                    role="presentation"
                    [groups]="groups"
                    [isLocked]="true"
                    [data]="data"
                    [noRecordsText]="''"
                    [columns]="$any(lockedLeafColumns)"
                    [totalColumnsCount]="leafColumns.length"
                    [detailTemplate]="detailTemplate"
                    [showGroupFooters]="showFooter"
                    [skip]="skip"
                    [selectable]="selectable"
                    [trackBy]="trackBy"
                    [filterable]="filterable"
                    [rowClass]="rowClass"
                    [isLoading]="loading"
                    [isVirtual]="isVirtual"
                    [cellLoadingTemplate]="cellLoadingTemplate">
                </tbody>
            </table>
            <kendo-resize-sensor></kendo-resize-sensor>
        </div>
        <div class="k-height-container" role="presentation">
            <div [style.height.px]="totalHeight"></div>
        </div>
    </div><div #container
               class="k-grid-content k-virtual-content"
               role="presentation" tabindex="-1"
               [kendoGridResizableContainer]="lockedLeafColumns.length > 0"
               [lockedWidth]="lockedWidth + 1">
        <div role="presentation" class="k-grid-table-wrap">
            <table [style.width.px]="nonLockedWidth" #table [virtualColumns]="virtualColumns"
              class="k-grid-table" role="presentation">
                <colgroup kendoGridColGroup
                    role="presentation"
                    [groups]="isLocked ? [] : groups"
                    [columns]="$any(nonLockedColumnsToRender)"
                    [detailTemplate]="detailTemplate"
                    [sort]="sort">
                </colgroup>
                <tbody kendoGridTableBody
                    role="presentation"
                    [skipGroupDecoration]="isLocked"
                    [data]="data"
                    [groups]="groups"
                    [showGroupFooters]="showFooter"
                    [columns]="$any(nonLockedColumnsToRender)"
                    [allColumns]="$any(nonLockedLeafColumns)"
                    [detailTemplate]="detailTemplate"
                    [noRecordsTemplate]="noRecordsTemplate"
                    [lockedColumnsCount]="lockedLeafColumns.length"
                    [totalColumnsCount]="leafColumns.length"
                    [skip]="skip"
                    [selectable]="selectable"
                    [trackBy]="trackBy"
                    [filterable]="filterable"
                    [rowClass]="rowClass"
                    [rowSticky]="rowSticky"
                    [virtualColumns]="virtualColumns"
                    [isLoading]="loading"
                    [isVirtual]="isVirtual"
                    [cellLoadingTemplate]="cellLoadingTemplate">
                </tbody>
            </table>
            <kendo-resize-sensor *ngIf="isLocked"></kendo-resize-sensor>
        </div>
        <kendo-resize-sensor *ngIf="isLocked || virtualColumns"></kendo-resize-sensor>
        <div class="k-height-container" role="presentation">
            <div [style.height.px]="totalHeight"></div>
        </div>
        <div *ngIf="virtualColumns" class="k-width-container" role="presentation">
            <div [style.width.px]="totalWidth"></div>
        </div>
    </div>
    `, isInline: true, components: [{ type: i15.ColGroupComponent, selector: "[kendoGridColGroup]", inputs: ["columns", "groups", "detailTemplate", "sort"] }, { type: i16.TableBodyComponent, selector: "[kendoGridTableBody]", inputs: ["columns", "allColumns", "groups", "detailTemplate", "noRecordsTemplate", "data", "skip", "selectable", "filterable", "noRecordsText", "isLocked", "isLoading", "isVirtual", "cellLoadingTemplate", "skipGroupDecoration", "showGroupFooters", "lockedColumnsCount", "totalColumnsCount", "virtualColumns", "trackBy", "rowSticky", "rowClass"] }, { type: i17.ResizeSensorComponent, selector: "kendo-resize-sensor", inputs: ["rateLimit"], outputs: ["resize"] }], directives: [{ type: i18.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i17.EventsOutsideAngularDirective, selector: "[kendoEventsOutsideAngular]", inputs: ["kendoEventsOutsideAngular", "scope"] }, { type: i19.TableDirective, selector: "table", inputs: ["locked", "virtualColumns"] }, { type: i20.ResizableContainerDirective, selector: "[kendoGridResizableContainer]", inputs: ["lockedWidth", "kendoGridResizableContainer"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{
                    providers: [
                        {
                            provide: SCROLLER_FACTORY_TOKEN,
                            useValue: DEFAULT_SCROLLER_FACTORY
                        }
                    ],
                    selector: 'kendo-grid-list',
                    template: `
    <div #lockedContainer class="k-grid-content-locked" role="presentation"
        *ngIf="isLocked" [style.width.px]="lockedWidth" tabindex="-1"
        [kendoEventsOutsideAngular]="{
            keydown: lockedKeydown,
            scroll: lockedScroll,
            mousewheel: lockedMousewheel,
            DOMMouseScroll: lockedMousewheel
        }"
        [scope]="this"
        >
        <div role="presentation" class="k-grid-table-wrap">
            <table [locked]="true" #lockedTable class="k-grid-table" role="presentation" [style.width.px]="lockedWidth">
                <colgroup kendoGridColGroup
                    role="presentation"
                    [groups]="groups"
                    [columns]="$any(lockedLeafColumns)"
                    [detailTemplate]="detailTemplate"
                    [sort]="sort">
                </colgroup>
                <tbody kendoGridTableBody
                    role="presentation"
                    [groups]="groups"
                    [isLocked]="true"
                    [data]="data"
                    [noRecordsText]="''"
                    [columns]="$any(lockedLeafColumns)"
                    [totalColumnsCount]="leafColumns.length"
                    [detailTemplate]="detailTemplate"
                    [showGroupFooters]="showFooter"
                    [skip]="skip"
                    [selectable]="selectable"
                    [trackBy]="trackBy"
                    [filterable]="filterable"
                    [rowClass]="rowClass"
                    [isLoading]="loading"
                    [isVirtual]="isVirtual"
                    [cellLoadingTemplate]="cellLoadingTemplate">
                </tbody>
            </table>
            <kendo-resize-sensor></kendo-resize-sensor>
        </div>
        <div class="k-height-container" role="presentation">
            <div [style.height.px]="totalHeight"></div>
        </div>
    </div><div #container
               class="k-grid-content k-virtual-content"
               role="presentation" tabindex="-1"
               [kendoGridResizableContainer]="lockedLeafColumns.length > 0"
               [lockedWidth]="lockedWidth + 1">
        <div role="presentation" class="k-grid-table-wrap">
            <table [style.width.px]="nonLockedWidth" #table [virtualColumns]="virtualColumns"
              class="k-grid-table" role="presentation">
                <colgroup kendoGridColGroup
                    role="presentation"
                    [groups]="isLocked ? [] : groups"
                    [columns]="$any(nonLockedColumnsToRender)"
                    [detailTemplate]="detailTemplate"
                    [sort]="sort">
                </colgroup>
                <tbody kendoGridTableBody
                    role="presentation"
                    [skipGroupDecoration]="isLocked"
                    [data]="data"
                    [groups]="groups"
                    [showGroupFooters]="showFooter"
                    [columns]="$any(nonLockedColumnsToRender)"
                    [allColumns]="$any(nonLockedLeafColumns)"
                    [detailTemplate]="detailTemplate"
                    [noRecordsTemplate]="noRecordsTemplate"
                    [lockedColumnsCount]="lockedLeafColumns.length"
                    [totalColumnsCount]="leafColumns.length"
                    [skip]="skip"
                    [selectable]="selectable"
                    [trackBy]="trackBy"
                    [filterable]="filterable"
                    [rowClass]="rowClass"
                    [rowSticky]="rowSticky"
                    [virtualColumns]="virtualColumns"
                    [isLoading]="loading"
                    [isVirtual]="isVirtual"
                    [cellLoadingTemplate]="cellLoadingTemplate">
                </tbody>
            </table>
            <kendo-resize-sensor *ngIf="isLocked"></kendo-resize-sensor>
        </div>
        <kendo-resize-sensor *ngIf="isLocked || virtualColumns"></kendo-resize-sensor>
        <div class="k-height-container" role="presentation">
            <div [style.height.px]="totalHeight"></div>
        </div>
        <div *ngIf="virtualColumns" class="k-width-container" role="presentation">
            <div [style.width.px]="totalWidth"></div>
        </div>
    </div>
    `
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [SCROLLER_FACTORY_TOKEN]
                }] }, { type: i1.DetailsService }, { type: i2.ChangeNotificationService }, { type: i3.SuspendService }, { type: i4.GroupsService }, { type: i0.NgZone }, { type: i0.Renderer2 }, { type: i5.ScrollSyncService }, { type: i6.ResizeService }, { type: i7.EditService }, { type: i8.BrowserSupportService }, { type: i9.NavigationService }, { type: i10.ScrollRequestService }, { type: i11.LocalizationService }, { type: i12.ColumnResizingService }, { type: i0.ChangeDetectorRef }, { type: i13.PDFService }, { type: i14.ColumnInfoService }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ["class.k-grid-container"]
            }], hostRole: [{
                type: HostBinding,
                args: ["attr.role"]
            }], data: [{
                type: Input
            }], groups: [{
                type: Input
            }], total: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], stickyRowHeight: [{
                type: Input
            }], detailRowHeight: [{
                type: Input
            }], take: [{
                type: Input
            }], skip: [{
                type: Input
            }], columns: [{
                type: Input
            }], detailTemplate: [{
                type: Input
            }], noRecordsTemplate: [{
                type: Input
            }], selectable: [{
                type: Input
            }], groupable: [{
                type: Input
            }], filterable: [{
                type: Input
            }], rowClass: [{
                type: Input
            }], rowSticky: [{
                type: Input
            }], loading: [{
                type: Input
            }], trackBy: [{
                type: Input
            }], virtualColumns: [{
                type: Input
            }], isVirtual: [{
                type: Input
            }], cellLoadingTemplate: [{
                type: Input
            }], loadingTemplate: [{
                type: Input
            }], sort: [{
                type: Input
            }], contentScroll: [{
                type: Output
            }], pageChange: [{
                type: Output
            }], scrollBottom: [{
                type: Output
            }], container: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], lockedContainer: [{
                type: ViewChild,
                args: ['lockedContainer', { static: false }]
            }], lockedTable: [{
                type: ViewChild,
                args: ['lockedTable', { static: false }]
            }], table: [{
                type: ViewChild,
                args: ['table', { static: true }]
            }], resizeSensors: [{
                type: ViewChildren,
                args: [ResizeSensorComponent]
            }] } });
