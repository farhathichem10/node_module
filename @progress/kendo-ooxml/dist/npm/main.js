'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var JSZip = _interopDefault(require('@progress/jszip-esm'));

var current = {
    compile: function(template) {
        return template;
    }
};

var TemplateService = function TemplateService () {};

TemplateService.register = function register (userImplementation) {
    current = userImplementation;
};

TemplateService.compile = function compile (template) {
    return current.compile(template);
};

var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
var getterCache = {};
var UNDEFINED = 'undefined';

getterCache[UNDEFINED] = function(obj) {
    return obj;
};

function getter(field) {
    if (getterCache[field]) {
        return getterCache[field];
    }

    var fields = [];
    field.replace(FIELD_REGEX, function(match, index, indexAccessor, field) {
        fields.push(typeof index !== UNDEFINED ? index : (indexAccessor || field));
    });

    getterCache[field] = function(obj) {
        var result = obj;
        for (var idx = 0; idx < fields.length && result; idx++) {
            result = result[fields[idx]];
        }

        return result;
    };

    return getterCache[field];
}

function map(array, func) {
    return array.reduce(function (result, el, i) {
        var val = func(el, i);
        if (val != null) {
            result.push(val);
        }
        return result;
    }, []);
}

function defaultGroupHeaderTemplate(data) {
    return ((data.title) + ": " + (data.value));
}

function createArray(length, callback) {
    var result = [];

    for (var idx = 0; idx < length; idx++) {
        result.push(callback(idx));
    }

    return result;
}

function defaultItemId(item) {
    return item.id;
}

var ExcelExporter = function ExcelExporter(options) {
    options.columns = this._trimColumns(options.columns || []);

    this.allColumns = map(this._leafColumns(options.columns || []), this._prepareColumn);

    this.columns = this._visibleColumns(this.allColumns);

    this.options = options;
    this.data = options.data || [];
    this.aggregates = options.aggregates || {};
    this.groups = [].concat(options.groups || []);
    this.hasGroups = this.groups.length > 0;
    this.hierarchy = options.hierarchy;
    this.hasGroupHeaderColumn = this.columns.some(function (column) { return column.groupHeaderColumnTemplate; });
    this.collapsible = this.options.collapsible;
};

ExcelExporter.prototype.workbook = function workbook () {
    var workbook = {
        sheets: [ {
            columns: this._columns(),
            rows: this.hierarchy ? this._hierarchyRows() : this._rows(),
            freezePane: this._freezePane(),
            filter: this._filter()
        } ]
    };

    return workbook;
};

ExcelExporter.prototype._trimColumns = function _trimColumns (columns) {
        var this$1 = this;

    return columns.filter(function (column) {
        var result = Boolean(column.field);

        if (!result && column.columns) {
            result = this$1._trimColumns(column.columns).length > 0;
        }

        return result;
    });
};

ExcelExporter.prototype._leafColumns = function _leafColumns (columns) {
        var this$1 = this;

    var result = [];

    for (var idx = 0; idx < columns.length; idx++) {
        if (!columns[idx].columns) {
            result.push(columns[idx]);
        } else {
            result = result.concat(this$1._leafColumns(columns[idx].columns));
        }
    }

    return result;
};

ExcelExporter.prototype._prepareColumn = function _prepareColumn (column) {
    if (!column.field) {
        return null;
    }

    var value = function(dataItem) {
        return getter(column.field, true)(dataItem);
    };

    var values = null;

    if (column.values) {
        values = {};

        column.values.forEach(function(item) {
            values[item.value] = item.text;
        });

        value = function(dataItem) {
            return values[getter(column.field, true)(dataItem)];
        };
    }

    return Object.assign({}, column, {
        value: value,
        values: values,
        groupHeaderTemplate: column.groupHeaderTemplate ? TemplateService.compile(column.groupHeaderTemplate) : defaultGroupHeaderTemplate,
        groupHeaderColumnTemplate: column.groupHeaderColumnTemplate ? TemplateService.compile(column.groupHeaderColumnTemplate) : null,
        groupFooterTemplate: column.groupFooterTemplate ? TemplateService.compile(column.groupFooterTemplate) : null,
        footerTemplate: column.footerTemplate ? TemplateService.compile(column.footerTemplate) : null
    });
};

ExcelExporter.prototype._filter = function _filter () {
    if (!this.options.filterable) {
        return null;
    }

    var depth = this._depth();

    return {
        from: depth,
        to: depth + this.columns.length - 1
    };
};

ExcelExporter.prototype._createPaddingCells = function _createPaddingCells (length) {
        var this$1 = this;

    return createArray(length, function () { return Object.assign({
        background: "#dfdfdf",
        color: "#333"
    }, this$1.options.paddingCellOptions); });
};

ExcelExporter.prototype._dataRow = function _dataRow (dataItem, level, depth) {
        var this$1 = this;

    var cells = this._createPaddingCells(level);

    // grouped
    if (this.hasGroups && depth && dataItem.items) {
        cells = cells.concat(this._groupHeaderCells(dataItem, level, depth));
        var rows = this._dataRows(dataItem.items, level + 1);

        rows.unshift({
            type: "group-header",
            cells: cells,
            level: this.collapsible ? level : null
        });

        return rows.concat(this._footer(dataItem, level));
    }

    var dataCells = [];

    for (var cellIdx = 0; cellIdx < this.columns.length; cellIdx++) {
        dataCells[cellIdx] = this$1._cell(dataItem, this$1.columns[cellIdx]);
    }

    if (this.hierarchy) {
        dataCells[0].colSpan = depth - level + 1;
    }

    return [ {
        type: "data",
        cells: cells.concat(dataCells),
        level: this.collapsible ? level : null
    } ];
};

ExcelExporter.prototype._groupHeaderCells = function _groupHeaderCells (dataItem, level, depth) {
    var cells = [];

    var column = this.allColumns.filter(function(column) {
        return column.field === dataItem.field;
    })[0] || {};

    var title = column && column.title ? column.title : dataItem.field;
    var template = column ? column.groupHeaderTemplate || column.groupHeaderColumnTemplate : null;
    var group = Object.assign({
        title: title,
        field: dataItem.field,
        value: column && column.values ? column.values[dataItem.value] : dataItem.value,
        aggregates: dataItem.aggregates,
        items: dataItem.items
    }, dataItem.aggregates[dataItem.field]);

    var value = template ? template(group) : (title + ": " + (dataItem.value));

    cells.push(Object.assign({
        value: value,
        background: "#dfdfdf",
        color: "#333",
        colSpan: (this.hasGroupHeaderColumn ? 1 : this.columns.length) + depth - level
    }, column.groupHeaderCellOptions));

    if (this.hasGroupHeaderColumn) {
        this.columns.forEach(function(column, index) {
            if (index > 0) {
                cells.push(Object.assign({
                    background: "#dfdfdf",
                    color: "#333",
                    value: column.groupHeaderColumnTemplate ?
                        column.groupHeaderColumnTemplate(Object.assign({ group: group }, group, dataItem.aggregates[column.field])) :
                        undefined
                }, column.groupHeaderCellOptions));
            }
        });
    }

    return cells;
};

ExcelExporter.prototype._dataRows = function _dataRows (dataItems, level) {
        var this$1 = this;

    var depth = this._depth();
    var rows = [];

    for (var idx = 0; idx < dataItems.length; idx++) {
        rows.push.apply(rows, this$1._dataRow(dataItems[idx], level, depth));
    }

    return rows;
};

ExcelExporter.prototype._hierarchyRows = function _hierarchyRows () {
        var this$1 = this;

    var depth = this._depth();
    var data = this.data;
    var itemLevel = this.hierarchy.itemLevel;
    var itemId = this.hierarchy.itemId || defaultItemId;
    var hasFooter = this._hasFooterTemplate();
    var rows = [];
    var parents = [];
    var previousLevel = 0;
    var previousItemId;

    if (!hasFooter) {
        this.collapsible = false;
    }

    for (var idx = 0; idx < data.length; idx++) {
        var item = data[idx];
        var level = itemLevel(item, idx);

        if (hasFooter) {
            if (level > previousLevel) {
                parents.push({ id: previousItemId, level: previousLevel });
            } else if (level < previousLevel) {
                rows.push.apply(rows, this$1._hierarchyFooterRows(parents, level, depth));
            }

            previousLevel = level;
            previousItemId = itemId(item, idx);
        }

        rows.push.apply(rows, this$1._dataRow(item, level + 1, depth));
    }

    if (hasFooter) {
        rows.push.apply(rows, this._hierarchyFooterRows(parents, 0, depth));

        var rootAggregate = data.length ? this.aggregates[data[0].parentId] : {};
        rows.push(this._hierarchyFooter(rootAggregate, 0, depth));
    }

    this._prependHeaderRows(rows);

    return rows;
};

ExcelExporter.prototype._hierarchyFooterRows = function _hierarchyFooterRows (parents, currentLevel, depth) {
        var this$1 = this;

    var rows = [];
    while (parents.length && parents[parents.length - 1].level >= currentLevel) {
        var parent = parents.pop();
        rows.push(this$1._hierarchyFooter(this$1.aggregates[parent.id], parent.level + 1, depth));
    }

    return rows;
};

ExcelExporter.prototype._hasFooterTemplate = function _hasFooterTemplate () {
    var columns = this.columns;
    for (var idx = 0; idx < columns.length; idx++) {
        if (columns[idx].footerTemplate) {
            return true;
        }
    }
};

ExcelExporter.prototype._hierarchyFooter = function _hierarchyFooter (aggregates, level, depth) {
    var cells = this.columns.map(function(column, index) {
        var colSpan = index ? 1 : depth - level + 1;
        if (column.footerTemplate) {
            var fieldAggregates = (aggregates || {})[column.field];
            return Object.assign({
                background: "#dfdfdf",
                color: "#333",
                colSpan: colSpan,
                value: column.footerTemplate(Object.assign({ aggregates: aggregates }, fieldAggregates))
            }, column.footerCellOptions);
        }

        return Object.assign({
            background: "#dfdfdf",
            color: "#333",
            colSpan: colSpan
        }, column.footerCellOptions);
    });

    return {
        type: "footer",
        cells: this._createPaddingCells(level).concat(cells),
        level: this.collapsible ? level : null
    };
};

ExcelExporter.prototype._footer = function _footer (dataItem, level) {
    var rows = [];
    var footer = this.columns.some(function (column) { return column.groupFooterTemplate; });

    var templateData, group;
    if (footer) {
        group = {
            group: { items: dataItem.items,
                     field: dataItem.field,
                     value: dataItem.value }
        };
        templateData = {};
        Object.keys(dataItem.aggregates).forEach(function (key) {
            templateData[key] = Object.assign({}, dataItem.aggregates[key], group);
        });
    }

    var cells = this.columns.map(function (column) {
        if (column.groupFooterTemplate) {
            var data = Object.assign({}, templateData, dataItem.aggregates[column.field], group);
            return Object.assign({
                background: "#dfdfdf",
                color: "#333",
                value: column.groupFooterTemplate(data)
            }, column.groupFooterCellOptions);
        }

        return Object.assign({
            background: "#dfdfdf",
            color: "#333"
        }, column.groupFooterCellOptions);
    });

    if (footer) {
        rows.push({
            type: "group-footer",
            cells: this._createPaddingCells(this.groups.length).concat(cells),
            level: this.collapsible ? level : null
        });
    }

    return rows;
};

ExcelExporter.prototype._isColumnVisible = function _isColumnVisible (column) {
    return this._visibleColumns([ column ]).length > 0 && (column.field || column.columns);
};

ExcelExporter.prototype._visibleColumns = function _visibleColumns (columns) {
        var this$1 = this;

    return columns.filter(function (column) {
        var exportable = column.exportable;
        if (typeof exportable === 'object') {
            exportable = column.exportable.excel;
        }

        var visibleInExport = !column.hidden && exportable !== false;
        var visibleInExportOnly = column.hidden && exportable === true;
        var visible = visibleInExport || visibleInExportOnly;
        if (visible && column.columns) {
            visible = this$1._visibleColumns(column.columns).length > 0;
        }
        return visible;
    });
};

ExcelExporter.prototype._headerRow = function _headerRow (row, groups) {
        var this$1 = this;

    var headers = row.cells.map(function(cell) {
        return Object.assign(cell, {
            colSpan: cell.colSpan > 1 ? cell.colSpan : 1,
            rowSpan: row.rowSpan > 1 && !cell.colSpan ? row.rowSpan : 1
        });
    });

    if (this.hierarchy && headers[0].firstCell) {
        headers[0].colSpan += this._depth();
    }

    return {
        type: "header",
        cells: createArray(groups.length, function () { return Object.assign({
            background: "#7a7a7a",
            color: "#fff"
        }, this$1.options.headerPaddingCellOptions); }).concat(headers)
    };
};

ExcelExporter.prototype._prependHeaderRows = function _prependHeaderRows (rows) {
        var this$1 = this;

    var groups = this.groups;

    var headerRows = [ { rowSpan: 1, cells: [], index: 0 } ];

    this._prepareHeaderRows(headerRows, this.options.columns);

    for (var idx = headerRows.length - 1; idx >= 0; idx--) {
        rows.unshift(this$1._headerRow(headerRows[idx], groups));
    }
};

ExcelExporter.prototype._prepareHeaderRows = function _prepareHeaderRows (rows, columns, parentCell, parentRow) {
        var this$1 = this;

    var row = parentRow || rows[rows.length - 1];
    var childRow = rows[row.index + 1];
    var totalColSpan = 0;

    for (var idx = 0; idx < columns.length; idx++) {
        var column = columns[idx];
        if (this$1._isColumnVisible(column)) {

            var cell = Object.assign({
                background: "#7a7a7a",
                color: "#fff",
                value: column.title || column.field,
                colSpan: 0,
                firstCell: idx === 0 && (!parentCell || parentCell.firstCell)
            }, column.headerCellOptions);
            row.cells.push(cell);

            if (column.columns && column.columns.length) {
                if (!childRow) {
                    childRow = { rowSpan: 0, cells: [], index: rows.length };
                    rows.push(childRow);
                }
                cell.colSpan = this$1._trimColumns(this$1._visibleColumns(column.columns)).length;
                this$1._prepareHeaderRows(rows, column.columns, cell, childRow);
                totalColSpan += cell.colSpan - 1;
                row.rowSpan = rows.length - row.index;
            }
        }
    }

    if (parentCell) {
        parentCell.colSpan += totalColSpan;
    }
};

ExcelExporter.prototype._rows = function _rows () {
        var this$1 = this;

    var rows = this._dataRows(this.data, 0);

    if (this.columns.length) {
        this._prependHeaderRows(rows);
        var footer = false;

        var cells = this.columns.map(function (column) {
            if (column.footerTemplate) {
                footer = true;

                return Object.assign({
                    background: "#dfdfdf",
                    color: "#333",
                    value: column.footerTemplate(Object.assign({}, this$1.aggregates, this$1.aggregates[column.field]))
                }, column.footerCellOptions);
            }

            return Object.assign({
                background: "#dfdfdf",
                color: "#333"
            }, column.footerCellOptions);
        });

        if (footer) {
            rows.push({
                type: "footer",
                cells: this._createPaddingCells(this.groups.length).concat(cells)
            });
        }
    }

    return rows;
};

ExcelExporter.prototype._headerDepth = function _headerDepth (columns) {
        var this$1 = this;

    var result = 1;
    var max = 0;

    for (var idx = 0; idx < columns.length; idx++) {
        if (columns[idx].columns) {
            var temp = this$1._headerDepth(columns[idx].columns);
            if (temp > max) {
                max = temp;
            }
        }
    }
    return result + max;
};

ExcelExporter.prototype._freezePane = function _freezePane () {
    var columns = this._visibleColumns(this.options.columns || []);

    var colSplit = this._visibleColumns(this._trimColumns(this._leafColumns(columns.filter(function(column) {
        return column.locked;
    })))).length;

    return {
        rowSplit: this._headerDepth(columns),
        colSplit: colSplit ? colSplit + this.groups.length : 0
    };
};

ExcelExporter.prototype._cell = function _cell (dataItem, column) {
    return Object.assign({
        value: column.value(dataItem)
    }, column.cellOptions);
};

ExcelExporter.prototype._depth = function _depth () {
    var depth = 0;

    if (this.hierarchy) {
        depth = this.hierarchy.depth;
    } else {
        depth = this.groups.length;
    }

    return depth;
};

ExcelExporter.prototype._columns = function _columns () {
    var depth = this._depth();
    var columns = createArray(depth, function () { return ({ width: 20 }); });

    return columns.concat(this.columns.map(function(column) {
        return {
            width: parseInt(column.width, 10),
            autoWidth: column.width ? false : true
        };
    }));
};

var current$1 = {
    toString: function (value) { return value; }
};

var IntlService = function IntlService () {};

IntlService.register = function register (userImplementation) {
    current$1 = userImplementation;
};

IntlService.toString = function toString (value, format) {
    return current$1.toString(value, format);
};

function createZip() {
    return new JSZip();
}

// date packing utilities from Kendo Spreadsheet

// Julian days algorithms from http://www.hermetic.ch/cal_stud/jdn.htm#comp
function dateToJulianDays(y, m, d) {
    return ((1461 * (y + 4800 + ((m - 13) / 12 | 0))) / 4 | 0) +
        ((367 * (m - 1 - 12 * ((m - 13) / 12 | 0))) / 12 | 0) -
        ((3 * (((y + 4900 + ((m - 13) / 12 | 0)) / 100 | 0))) / 4 | 0) +
        d - 32075;
}

// This uses the Google Spreadsheet approach: treat 1899-12-31 as day 1, allowing to avoid
// implementing the "Leap Year Bug" yet still be Excel compatible for dates starting 1900-03-01.
var BASE_DATE = dateToJulianDays(1900, 0, -1);

function packDate(year, month, date) {
    return dateToJulianDays(year, month, date) - BASE_DATE;
}

function packTime(hh, mm, ss, ms) {
    return (hh + (mm + (ss + ms / 1000) / 60) / 60) / 24;
}

function dateToSerial(date) {
    var time = packTime(date.getHours(),
                          date.getMinutes(),
                          date.getSeconds(),
                          date.getMilliseconds());
    var serial = packDate(date.getFullYear(),
                            date.getMonth(),
                            date.getDate());
    return serial < 0 ? serial - 1 + time : serial + time;
}

var MIME_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
var DATA_URL_PREFIX = "data:" + MIME_TYPE + ";base64,";
var DATA_URL_OPTIONS = { compression: "DEFLATE", type: "base64" };
var BLOB_OPTIONS = { compression: "DEFLATE", type: "blob" };
var ARRAYBUFFER_OPTIONS = { compression: "DEFLATE", type: "arraybuffer" };

/* eslint-disable key-spacing, no-confusing-arrow, no-constant-condition, indent, no-nested-ternary, consistent-return */

function toDataURI(content) {
    return DATA_URL_PREFIX + content;
}

function indexOf(thing, array) {
    return array.indexOf(thing);
}

var parseJSON = JSON.parse.bind(JSON);

function ESC(val) {
    return String(val)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/\'/g, "&#39;");
}

function repeat(count, func) {
    var str = "";
    for (var i = 0; i < count; ++i) {
        str += func(i);
    }
    return str;
}

function foreach(arr, func) {
    var str = "";
    if (arr != null) {
        if (Array.isArray(arr)) {
            for (var i = 0; i < arr.length; ++i) {
                str += func(arr[i], i);
            }
        } else if (typeof arr == "object") {
            Object.keys(arr).forEach(function (key, i) {
                str += func(arr[key], key, i);
            });
        }
    }
    return str;
}

var XMLHEAD = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r';

var RELS = XMLHEAD + "\n            <Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n               <Relationship Id=\"rId3\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties\" Target=\"docProps/app.xml\"/>\n               <Relationship Id=\"rId2\" Type=\"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties\" Target=\"docProps/core.xml\"/>\n               <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"xl/workbook.xml\"/>\n            </Relationships>";

var CORE = function (ref) {
  var creator = ref.creator;
  var lastModifiedBy = ref.lastModifiedBy;
  var created = ref.created;
  var modified = ref.modified;

  return (XMLHEAD + "\n <cp:coreProperties xmlns:cp=\"http://schemas.openxmlformats.org/package/2006/metadata/core-properties\"\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:dcterms=\"http://purl.org/dc/terms/\"\n   xmlns:dcmitype=\"http://purl.org/dc/dcmitype/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n   <dc:creator>" + (ESC(creator)) + "</dc:creator>\n   <cp:lastModifiedBy>" + (ESC(lastModifiedBy)) + "</cp:lastModifiedBy>\n   <dcterms:created xsi:type=\"dcterms:W3CDTF\">" + (ESC(created)) + "</dcterms:created>\n   <dcterms:modified xsi:type=\"dcterms:W3CDTF\">" + (ESC(modified)) + "</dcterms:modified>\n</cp:coreProperties>");
};

var APP = function (ref) {
  var sheets = ref.sheets;

  return (XMLHEAD + "\n<Properties xmlns=\"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties\" xmlns:vt=\"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes\">\n  <Application>Microsoft Excel</Application>\n  <DocSecurity>0</DocSecurity>\n  <ScaleCrop>false</ScaleCrop>\n  <HeadingPairs>\n    <vt:vector size=\"2\" baseType=\"variant\">\n      <vt:variant>\n        <vt:lpstr>Worksheets</vt:lpstr>\n      </vt:variant>\n      <vt:variant>\n        <vt:i4>" + (sheets.length) + "</vt:i4>\n      </vt:variant>\n    </vt:vector>\n  </HeadingPairs>\n  <TitlesOfParts>\n    <vt:vector size=\"" + (sheets.length) + "\" baseType=\"lpstr\">" + (foreach(sheets, function (sheet, i) { return sheet.options.title
          ? ("<vt:lpstr>" + (ESC(sheet.options.title)) + "</vt:lpstr>")
          : ("<vt:lpstr>Sheet" + (i + 1) + "</vt:lpstr>"); }
      )) + "</vt:vector>\n  </TitlesOfParts>\n  <LinksUpToDate>false</LinksUpToDate>\n  <SharedDoc>false</SharedDoc>\n  <HyperlinksChanged>false</HyperlinksChanged>\n  <AppVersion>14.0300</AppVersion>\n</Properties>");
};

var CONTENT_TYPES = function (ref) {
  var sheetCount = ref.sheetCount;
  var commentFiles = ref.commentFiles;
  var drawingFiles = ref.drawingFiles;

  return (XMLHEAD + "\n<Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\">\n  <Default Extension=\"png\" ContentType=\"image/png\"/>\n  <Default Extension=\"gif\" ContentType=\"image/gif\"/>\n  <Default Extension=\"jpg\" ContentType=\"image/jpeg\"/>\n  <Default Extension=\"rels\" ContentType=\"application/vnd.openxmlformats-package.relationships+xml\" />\n  <Default Extension=\"xml\" ContentType=\"application/xml\" />\n  <Default Extension=\"vml\" ContentType=\"application/vnd.openxmlformats-officedocument.vmlDrawing\"/>\n  <Override PartName=\"/xl/workbook.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml\" />\n  <Override PartName=\"/xl/styles.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml\"/>\n  <Override PartName=\"/xl/sharedStrings.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml\"/>\n  " + (repeat(sheetCount, function (idx) { return ("<Override PartName=\"/xl/worksheets/sheet" + (idx + 1) + ".xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\" />"); })) + "\n  " + (foreach(commentFiles, function (filename) { return ("<Override PartName=\"/xl/" + filename + "\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml\"/>"); })) + "\n  " + (foreach(drawingFiles, function (filename) { return ("<Override PartName=\"/xl/drawings/" + filename + "\" ContentType=\"application/vnd.openxmlformats-officedocument.drawing+xml\"/>"); })) + "\n  <Override PartName=\"/docProps/core.xml\" ContentType=\"application/vnd.openxmlformats-package.core-properties+xml\" />\n  <Override PartName=\"/docProps/app.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.extended-properties+xml\" />\n</Types>");
};

var WORKBOOK = function (ref) {
  var sheets = ref.sheets;
  var filterNames = ref.filterNames;
  var userNames = ref.userNames;

  return (XMLHEAD + "\n<workbook xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\">\n  <fileVersion appName=\"xl\" lastEdited=\"5\" lowestEdited=\"5\" rupBuild=\"9303\" />\n  <workbookPr defaultThemeVersion=\"124226\" />\n  <bookViews>\n    <workbookView xWindow=\"240\" yWindow=\"45\" windowWidth=\"18195\" windowHeight=\"7995\" />\n  </bookViews>\n  <sheets>\n  " + (foreach(sheets, function (ref, i) {
    var options = ref.options;

    var name = options.name || options.title || ("Sheet" + (i + 1));
    return ("<sheet name=\"" + (ESC(name)) + "\" sheetId=\"" + (i + 1) + "\" r:id=\"rId" + (i + 1) + "\" />");
  })) + "\n  </sheets>\n  " + (filterNames.length || userNames.length ? ("\n    <definedNames>\n      " + (foreach(filterNames, function (f) { return ("\n         <definedName name=\"_xlnm._FilterDatabase\" hidden=\"1\" localSheetId=\"" + (f.localSheetId) + "\">" + (ESC(quoteSheet(f.name))) + "!" + (ESC(f.from)) + ":" + (ESC(f.to)) + "</definedName>"); })) + "\n      " + (foreach(userNames, function (f) { return ("\n         <definedName name=\"" + (f.name) + "\" hidden=\"" + (f.hidden ? 1 : 0) + "\" " + (f.localSheetId != null ? ("localSheetId=\"" + (f.localSheetId) + "\"") : '') + ">" + (ESC(f.value)) + "</definedName>"); })) + "\n    </definedNames>") : '') + "\n  <calcPr fullCalcOnLoad=\"1\" calcId=\"145621\" />\n</workbook>");
};

var WORKSHEET = function (ref$1) {
  var frozenColumns = ref$1.frozenColumns;
  var frozenRows = ref$1.frozenRows;
  var columns = ref$1.columns;
  var defaults = ref$1.defaults;
  var data = ref$1.data;
  var index = ref$1.index;
  var mergeCells = ref$1.mergeCells;
  var autoFilter = ref$1.autoFilter;
  var filter = ref$1.filter;
  var showGridLines = ref$1.showGridLines;
  var hyperlinks = ref$1.hyperlinks;
  var validations = ref$1.validations;
  var defaultCellStyleId = ref$1.defaultCellStyleId;
  var rtl = ref$1.rtl;
  var legacyDrawing = ref$1.legacyDrawing;
  var drawing = ref$1.drawing;
  var lastRow = ref$1.lastRow;
  var lastCol = ref$1.lastCol;

  return (XMLHEAD + "\n<worksheet xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\" xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\" xmlns:x14ac=\"http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac\" mc:Ignorable=\"x14ac\">\n   " + (lastRow && lastCol ? ("<dimension ref=\"A1:" + (ref(lastRow - 1, lastCol - 1)) + "\" />") : "") + "\n\n   <sheetViews>\n     <sheetView " + (rtl ? 'rightToLeft="1"' : '') + " " + (index === 0 ? 'tabSelected="1"' : '') + " workbookViewId=\"0\" " + (showGridLines === false ? 'showGridLines="0"' : '') + ">\n     " + (frozenRows || frozenColumns ? ("\n       <pane state=\"frozen\"\n         " + (frozenColumns ? ("xSplit=\"" + frozenColumns + "\"") : '') + "\n         " + (frozenRows ? ("ySplit=\"" + frozenRows + "\"") : '') + "\n         topLeftCell=\"" + (String.fromCharCode(65 + (frozenColumns || 0)) + ((frozenRows || 0) + 1)) + "\"\n       />") : '') + "\n     </sheetView>\n   </sheetViews>\n\n   <sheetFormatPr x14ac:dyDescent=\"0.25\" " + (!defaults.skipCustomHeight ? 'customHeight="1"' : '') + " defaultRowHeight=\"" + (defaults.rowHeight ? defaults.rowHeight * 0.75 : 15) + "\"\n     " + (defaults.columnWidth ? ("defaultColWidth=\"" + (toWidth(defaults.columnWidth)) + "\"") : '') + " />\n\n   " + (defaultCellStyleId != null || (columns && columns.length > 0) ? ("\n     <cols>\n       " + (!columns || !columns.length ? ("\n         <col min=\"1\" max=\"16384\" style=\"" + defaultCellStyleId + "\"\n              " + (defaults.columnWidth ? ("width=\"" + (toWidth(defaults.columnWidth)) + "\"") : '') + " /> ") : '') + "\n       " + (foreach(columns, function (column, ci) {
         var columnIndex = typeof column.index === "number" ? column.index + 1 : (ci + 1);
         if (column.width === 0) {
           return ("<col " + (defaultCellStyleId != null ? ("style=\"" + defaultCellStyleId + "\"") : '') + "\n                        min=\"" + columnIndex + "\" max=\"" + columnIndex + "\" hidden=\"1\" customWidth=\"1\" />");
         }
         return ("<col " + (defaultCellStyleId != null ? ("style=\"" + defaultCellStyleId + "\"") : '') + "\n                      min=\"" + columnIndex + "\" max=\"" + columnIndex + "\" customWidth=\"1\"\n                      " + (column.autoWidth
                          ? ("width=\"" + (((column.width * 7 + 5) / 7 * 256) / 256) + "\" bestFit=\"1\"")
                          : ("width=\"" + (toWidth(column.width)) + "\"")) + " />");
       })) + "\n     </cols>") : '') + "\n\n   <sheetData>\n     " + (foreach(data, function (row, ri) {
       var rowIndex = typeof row.index === "number" ? row.index + 1 : (ri + 1);
       return ("\n         <row r=\"" + rowIndex + "\" x14ac:dyDescent=\"0.25\"\n              " + (row.level ? ("outlineLevel=\"" + (row.level) + "\"") : '') + "\n              " + (row.height === 0 ? 'hidden="1"'
                                 : row.height ? ("ht=\"" + (toHeight(row.height)) + "\" customHeight=\"1\"") : "") + ">\n           " + (foreach(row.data, function (cell) { return ("\n             <c r=\"" + (cell.ref) + "\" " + (cell.style ? ("s=\"" + (cell.style) + "\"") : '') + " " + (cell.type ? ("t=\"" + (cell.type) + "\"") : '') + ">\n               " + (cell.formula != null ? writeFormula(cell.formula) : '') + "\n               " + (cell.value != null ? ("<v>" + (ESC(cell.value)) + "</v>") : '') + "\n             </c>"); })) + "\n         </row>\n       ");})) + "\n   </sheetData>\n\n   " + (autoFilter ? ("<autoFilter ref=\"" + (autoFilter.from) + ":" + (autoFilter.to) + "\"/>")
                : filter ? spreadsheetFilters(filter) : '') + "\n\n   " + (mergeCells.length ? ("\n     <mergeCells count=\"" + (mergeCells.length) + "\">\n       " + (foreach(mergeCells, function (ref) { return ("<mergeCell ref=\"" + ref + "\"/>"); })) + "\n     </mergeCells>") : '') + "\n\n   " + (validations.length ? ("\n     <dataValidations>\n       " + (foreach(validations, function (val) { return ("\n         <dataValidation sqref=\"" + (val.sqref.join(" ")) + "\"\n                         showErrorMessage=\"" + (val.showErrorMessage) + "\"\n                         type=\"" + (ESC(val.type)) + "\"\n                         " + (val.type !== "list" ? ("operator=\"" + (ESC(val.operator)) + "\"") : '') + "\n                         allowBlank=\"" + (val.allowBlank) + "\"\n                         showDropDown=\"" + (val.showDropDown) + "\"\n                         " + (val.error ? ("error=\"" + (ESC(val.error)) + "\"") : '') + "\n                         " + (val.errorTitle ? ("errorTitle=\"" + (ESC(val.errorTitle)) + "\"") : '') + ">\n           " + (val.formula1 ? ("<formula1>" + (ESC(val.formula1)) + "</formula1>") : '') + "\n           " + (val.formula2 ? ("<formula2>" + (ESC(val.formula2)) + "</formula2>") : '') + "\n         </dataValidation>"); })) + "\n     </dataValidations>") : '') + "\n\n   " + (hyperlinks.length ? ("\n     <hyperlinks>\n       " + (foreach(hyperlinks, function (link) { return ("\n         <hyperlink ref=\"" + (link.ref) + "\" r:id=\"" + (link.rId) + "\"/>"); })) + "\n     </hyperlinks>") : '') + "\n\n   <pageMargins left=\"0.7\" right=\"0.7\" top=\"0.75\" bottom=\"0.75\" header=\"0.3\" footer=\"0.3\" />\n   " + (drawing ? ("<drawing r:id=\"" + drawing + "\"/>") : '') + "\n   " + (legacyDrawing ? ("<legacyDrawing r:id=\"" + legacyDrawing + "\"/>") : '') + "\n</worksheet>");
};

var WORKBOOK_RELS = function (ref) {
  var count = ref.count;

  return (XMLHEAD + "\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n  " + (repeat(count, function (idx) { return ("\n    <Relationship Id=\"rId" + (idx + 1) + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet\" Target=\"worksheets/sheet" + (idx + 1) + ".xml\" />"); })) + "\n  <Relationship Id=\"rId" + (count + 1) + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles\" Target=\"styles.xml\" />\n  <Relationship Id=\"rId" + (count + 2) + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings\" Target=\"sharedStrings.xml\" />\n</Relationships>");
};

var WORKSHEET_RELS = function (ref) {
  var hyperlinks = ref.hyperlinks;
  var comments = ref.comments;
  var sheetIndex = ref.sheetIndex;
  var drawings = ref.drawings;

  return (XMLHEAD + "\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n  " + (foreach(hyperlinks, function (link) { return ("\n    <Relationship Id=\"" + (link.rId) + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink\" Target=\"" + (ESC(link.target)) + "\" TargetMode=\"External\" />"); })) + "\n  " + (!comments.length ? '' : ("\n    <Relationship Id=\"comment" + sheetIndex + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments\" Target=\"../comments" + sheetIndex + ".xml\"/>\n    <Relationship Id=\"vml" + sheetIndex + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing\" Target=\"../drawings/vmlDrawing" + sheetIndex + ".vml\"/>")) + "\n  " + (!drawings.length ? '' : ("\n    <Relationship Id=\"drw" + sheetIndex + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing\" Target=\"../drawings/drawing" + sheetIndex + ".xml\"/>")) + "\n</Relationships>");
};

var COMMENTS_XML = function (ref) {
  var comments = ref.comments;

  return (XMLHEAD + "\n<comments xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\">\n  <authors>\n    <author></author>\n  </authors>\n  <commentList>\n    " + (foreach(comments, function (comment) { return ("\n      <comment ref=\"" + (comment.ref) + "\" authorId=\"0\">\n        <text>\n          <r>\n            <rPr>\n              <sz val=\"8\"/>\n              <color indexed=\"81\"/>\n              <rFont val=\"Tahoma\"/>\n              <charset val=\"1\"/>\n            </rPr>\n            <t>" + (ESC(comment.text)) + "</t>\n          </r>\n        </text>\n      </comment>"); })) + "\n  </commentList>\n</comments>");
};

var LEGACY_DRAWING = function (ref) {
  var comments = ref.comments;

  return ("<xml xmlns:v=\"urn:schemas-microsoft-com:vml\"\n     xmlns:o=\"urn:schemas-microsoft-com:office:office\"\n     xmlns:x=\"urn:schemas-microsoft-com:office:excel\">\n  <v:shapetype coordsize=\"21600,21600\" id=\"_x0000_t202\" path=\"m,l,21600r21600,l21600,xe\">\n    <v:stroke joinstyle=\"miter\"/>\n    <v:path gradientshapeok=\"t\" o:connecttype=\"rect\"/>\n  </v:shapetype>\n  " + (foreach(comments, function (comment) { return ("\n    <v:shape type=\"#_x0000_t202\" style=\"visibility: hidden\" fillcolor=\"#ffffe1\" o:insetmode=\"auto\">\n      <v:shadow on=\"t\" color=\"black\" obscured=\"t\"/>\n      <x:ClientData ObjectType=\"Note\">\n        <x:MoveWithCells/>\n        <x:SizeWithCells/>\n        <x:Anchor>" + (comment.anchor) + "</x:Anchor>\n        <x:AutoFill>False</x:AutoFill>\n        <x:Row>" + (comment.row) + "</x:Row>\n        <x:Column>" + (comment.col) + "</x:Column>\n      </x:ClientData>\n    </v:shape>"); })) + "\n</xml>");
};

var DRAWINGS_XML = function (drawings) { return (XMLHEAD + "\n<xdr:wsDr xmlns:xdr=\"http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing\"\n          xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\"\n          xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\">\n  " + (foreach(drawings, function (drawing, index) { return ("\n    <xdr:oneCellAnchor editAs=\"oneCell\">\n      <xdr:from>\n        <xdr:col>" + (drawing.col) + "</xdr:col>\n        <xdr:colOff>" + (drawing.colOffset) + "</xdr:colOff>\n        <xdr:row>" + (drawing.row) + "</xdr:row>\n        <xdr:rowOff>" + (drawing.rowOffset) + "</xdr:rowOff>\n      </xdr:from>\n      <xdr:ext cx=\"" + (drawing.width) + "\" cy=\"" + (drawing.height) + "\" />\n      <xdr:pic>\n        <xdr:nvPicPr>\n          <xdr:cNvPr id=\"" + (index + 1) + "\" name=\"Picture " + (index + 1) + "\"/>\n          <xdr:cNvPicPr/>\n        </xdr:nvPicPr>\n        <xdr:blipFill>\n          <a:blip r:embed=\"" + (drawing.imageId) + "\"/>\n          <a:stretch>\n            <a:fillRect/>\n          </a:stretch>\n        </xdr:blipFill>\n        <xdr:spPr>\n          <a:prstGeom prst=\"rect\">\n            <a:avLst/>\n          </a:prstGeom>\n        </xdr:spPr>\n      </xdr:pic>\n      <xdr:clientData/>\n    </xdr:oneCellAnchor>"); })) + "\n</xdr:wsDr>"); };

var DRAWINGS_RELS_XML = function (rels) { return (XMLHEAD + "\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n  " + (foreach(rels, function (rel) { return ("\n    <Relationship Id=\"" + (rel.rId) + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image\" Target=\"" + (rel.target) + "\"/>"); })) + "\n</Relationships>"); };

var SHARED_STRINGS = function (ref) {
  var count = ref.count;
  var uniqueCount = ref.uniqueCount;
  var indexes = ref.indexes;

  return (XMLHEAD + "\n<sst xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" count=\"" + count + "\" uniqueCount=\"" + uniqueCount + "\">\n  " + (foreach(Object.keys(indexes), function (index) { return ("\n    <si><t xml:space=\"preserve\">" + (ESC(index.substring(1))) + "</t></si>"); })) + "\n</sst>");
};

var STYLES = function (ref) {
  var formats = ref.formats;
  var fonts = ref.fonts;
  var fills = ref.fills;
  var borders = ref.borders;
  var styles = ref.styles;

  return (XMLHEAD + "\n<styleSheet\n    xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\"\n    xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\"\n    mc:Ignorable=\"x14ac\"\n    xmlns:x14ac=\"http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac\">\n  <numFmts count=\"" + (formats.length) + "\">\n  " + (foreach(formats, function (format, fi) { return ("\n    <numFmt formatCode=\"" + (ESC(format.format)) + "\" numFmtId=\"" + (165 + fi) + "\" />"); })) + "\n  </numFmts>\n  <fonts count=\"" + (fonts.length + 1) + "\" x14ac:knownFonts=\"1\">\n    <font>\n       <sz val=\"11\" />\n       <color theme=\"1\" />\n       <name val=\"Calibri\" />\n       <family val=\"2\" />\n       <scheme val=\"minor\" />\n    </font>\n    " + (foreach(fonts, function (font) { return ("\n    <font>\n      " + (font.bold ? '<b/>' : '') + "\n      " + (font.italic ? '<i/>' : '') + "\n      " + (font.underline ? '<u/>' : '') + "\n      <sz val=\"" + (font.fontSize || 11) + "\" />\n      " + (font.color ? ("<color rgb=\"" + (ESC(font.color)) + "\" />") : '<color theme="1" />') + "\n      " + (font.fontFamily ? ("\n        <name val=\"" + (ESC(font.fontFamily)) + "\" />\n        <family val=\"2\" />\n      ") : "\n        <name val=\"Calibri\" />\n        <family val=\"2\" />\n        <scheme val=\"minor\" />\n      ") + "\n    </font>"); })) + "\n  </fonts>\n  <fills count=\"" + (fills.length + 2) + "\">\n      <fill><patternFill patternType=\"none\"/></fill>\n      <fill><patternFill patternType=\"gray125\"/></fill>\n    " + (foreach(fills, function (fill) { return ("\n      " + (fill.background ? ("\n        <fill>\n          <patternFill patternType=\"solid\">\n              <fgColor rgb=\"" + (ESC(fill.background)) + "\"/>\n          </patternFill>\n        </fill>\n      ") : '')); })) + "\n  </fills>\n  <borders count=\"" + (borders.length + 1) + "\">\n    <border><left/><right/><top/><bottom/><diagonal/></border>\n    " + (foreach(borders, borderTemplate)) + "\n  </borders>\n  <cellStyleXfs count=\"1\">\n    <xf borderId=\"0\" fillId=\"0\" fontId=\"0\" />\n  </cellStyleXfs>\n  <cellXfs count=\"" + (styles.length + 1) + "\">\n    <xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"0\" xfId=\"0\" />\n    " + (foreach(styles, function (style) { return ("\n      <xf xfId=\"0\"\n          " + (style.fontId ? ("fontId=\"" + (style.fontId) + "\" applyFont=\"1\"") : '') + "\n          " + (style.fillId ? ("fillId=\"" + (style.fillId) + "\" applyFill=\"1\"") : '') + "\n          " + (style.numFmtId ? ("numFmtId=\"" + (style.numFmtId) + "\" applyNumberFormat=\"1\"") : '') + "\n          " + (style.textAlign || style.verticalAlign || style.wrap ? 'applyAlignment="1"' : '') + "\n          " + (style.borderId ? ("borderId=\"" + (style.borderId) + "\" applyBorder=\"1\"") : '') + ">\n        " + (style.textAlign || style.verticalAlign || style.wrap ? ("\n        <alignment\n          " + (style.textAlign ? ("horizontal=\"" + (ESC(style.textAlign)) + "\"") : '') + "\n          " + (style.verticalAlign ? ("vertical=\"" + (ESC(style.verticalAlign)) + "\"") : '') + "\n          " + (style.indent ? ("indent=\"" + (ESC(style.indent)) + "\"") : '') + "\n          " + (style.wrap ? 'wrapText="1"' : '') + " />\n        ") : '') + "\n      </xf>\n    "); })) + "\n  </cellXfs>\n  <cellStyles count=\"1\">\n    <cellStyle name=\"Normal\" xfId=\"0\" builtinId=\"0\"/>\n  </cellStyles>\n  <dxfs count=\"0\" />\n  <tableStyles count=\"0\" defaultTableStyle=\"TableStyleMedium2\" defaultPivotStyle=\"PivotStyleMedium9\" />\n</styleSheet>");
};

function writeFormula(formula) {
    if (typeof formula == "string") {
        return ("<f>" + (ESC(formula)) + "</f>");
    }
    // array formulas
    return ("<f t=\"array\" ref=\"" + (formula.ref) + "\">" + (ESC(formula.src)) + "</f>");
}

function numChar(colIndex) {
   var letter = Math.floor(colIndex / 26) - 1;

   return (letter >= 0 ? numChar(letter) : "") + String.fromCharCode(65 + (colIndex % 26));
}

function ref(rowIndex, colIndex) {
    return numChar(colIndex) + (rowIndex + 1);
}

function $ref(rowIndex, colIndex) {
    return "$" + numChar(colIndex) + "$" + (rowIndex + 1);
}

function filterRowIndex(options) {
    var frozenRows = options.frozenRows || (options.freezePane || {}).rowSplit || 1;
    return frozenRows - 1;
}

function toWidth(px) {
    var maximumDigitWidth = 7;
    return (px / maximumDigitWidth) - (Math.floor(128 / maximumDigitWidth) / 256);
}

function toHeight(px) {
    return px * 0.75;
}

function stripFunnyChars(value) {
    return String(value)
        .replace(/[\x00-\x09\x0B\x0C\x0E-\x1F]/g, "") // leave CRLF in
        .replace(/\r?\n/g, "\r\n");                   // make sure LF is preceded by CR
}

var Worksheet = function Worksheet(options, sharedStrings, styles, borders) {
      this.options = options;
      this._strings = sharedStrings;
      this._styles = styles;
      this._borders = borders;
      this._validations = {};
      this._comments = [];
      this._drawings = options.drawings || [];
      this._hyperlinks = (this.options.hyperlinks || []).map(
          function (link, i) { return Object.assign({}, link, { rId: ("link" + i) }); });
  };

  Worksheet.prototype.relsToXML = function relsToXML () {
      var hyperlinks = this._hyperlinks;
      var comments = this._comments;
        var drawings = this._drawings;

      if (hyperlinks.length || comments.length || drawings.length) {
          return WORKSHEET_RELS({
              hyperlinks : hyperlinks,
              comments : comments,
              sheetIndex : this.options.sheetIndex,
              drawings : drawings
          });
      }
  };

  Worksheet.prototype.toXML = function toXML (index) {
        var this$1 = this;

      var mergeCells = this.options.mergedCells || [];
      var rows = this.options.rows || [];
      var data = inflate(rows, mergeCells);

      this._readCells(data);

      var autoFilter = this.options.filter;
      var filter;
      if (autoFilter && (typeof autoFilter.from === "number") && (typeof autoFilter.to === "number")) {
          // Grid enables auto filter
          autoFilter = {
              from: ref(filterRowIndex(this.options), autoFilter.from),
              to: ref(filterRowIndex(this.options), autoFilter.to)
          };
      } else if (autoFilter && autoFilter.ref && autoFilter.columns) {
          // this is probably from the Spreadsheet
          filter = autoFilter;
          autoFilter = null;
      }

      var validations = [];
      for (var i in this._validations) {
          if (Object.prototype.hasOwnProperty.call(this$1._validations, i)) {
              validations.push(this$1._validations[i]);
          }
      }

      var defaultCellStyleId = null;
      if (this.options.defaultCellStyle) {
          defaultCellStyleId = this._lookupStyle(this.options.defaultCellStyle);
      }

      var freezePane = this.options.freezePane || {};
      var defaults = this.options.defaults || {};
      var lastRow = this.options.rows ? this._getLastRow() : 1;
      var lastCol = this.options.rows ? this._getLastCol() : 1;

      return WORKSHEET({
          frozenColumns: this.options.frozenColumns || freezePane.colSplit,
          frozenRows: this.options.frozenRows || freezePane.rowSplit,
          columns: this.options.columns,
          defaults: defaults,
          data: data,
          index: index,
          mergeCells: mergeCells,
          autoFilter: autoFilter,
          filter: filter,
          showGridLines: this.options.showGridLines,
          hyperlinks: this._hyperlinks,
          validations: validations,
          defaultCellStyleId: defaultCellStyleId,
          rtl: this.options.rtl !== undefined ? this.options.rtl : defaults.rtl,
          legacyDrawing: this._comments.length ? ("vml" + (this.options.sheetIndex)) : null,
          drawing: this._drawings.length ? ("drw" + (this.options.sheetIndex)) : null,
          lastRow: lastRow,
          lastCol: lastCol
      });
  };

  Worksheet.prototype.commentsXML = function commentsXML () {
      if (this._comments.length) {
            return COMMENTS_XML({ comments: this._comments });
        }
    };

    Worksheet.prototype.drawingsXML = function drawingsXML (images) {
        if (this._drawings.length) {
            var rels = {};
            var main = this._drawings.map(function (drw) {
                var ref = parseRef(drw.topLeftCell);
                var img = rels[drw.image];
                if (!img) {
                    img = rels[drw.image] = {
                        rId: ("img" + (drw.image)),
                        target: images[drw.image].target
                    };
                }
                return {
                    col       : ref.col,
                  colOffset : pixelsToExcel(drw.offsetX),
                  row     : ref.row,
                  rowOffset : pixelsToExcel(drw.offsetY),
                  width   : pixelsToExcel(drw.width),
                  height  : pixelsToExcel(drw.height),
                  imageId : img.rId
              };
          });
          return {
              main: DRAWINGS_XML(main),
              rels: DRAWINGS_RELS_XML(rels)
          };
      }
  };

  Worksheet.prototype.legacyDrawing = function legacyDrawing () {
      if (this._comments.length) {
          return LEGACY_DRAWING({ comments: this._comments });
      }
  };

  Worksheet.prototype._lookupString = function _lookupString (value) {
      var key = "$" + value;
      var index = this._strings.indexes[key];
      var result;

        if (index !== undefined) {
            result = index;
        } else {
            result = this._strings.indexes[key] = this._strings.uniqueCount;
            this._strings.uniqueCount ++;
        }

        this._strings.count ++;

        return result;
    };

    Worksheet.prototype._lookupStyle = function _lookupStyle (style) {
      var json = JSON.stringify(style);

      if (json === "{}") {
          return 0;
      }

      var index = indexOf(json, this._styles);

      if (index < 0) {
          index = this._styles.push(json) - 1;
      }

      // There is one default style
      return index + 1;
  };

  Worksheet.prototype._lookupBorder = function _lookupBorder (border) {
        var json = JSON.stringify(border);
      if (json === "{}") {
          return;
      }

      var index = indexOf(json, this._borders);
        if (index < 0) {
          index = this._borders.push(json) - 1;
      }

      // There is one default border
        return index + 1;
    };

    Worksheet.prototype._readCells = function _readCells (rowData) {
        var this$1 = this;

        for (var i = 0; i < rowData.length; i++) {
          var row = rowData[i];
          var cells = row.cells;

            row.data = [];

          for (var j = 0; j < cells.length; j++) {
              var cellData = this$1._cell(cells[j], row.index, j);
                if (cellData) {
                    row.data.push(cellData);
                }
            }
        }
    };

    Worksheet.prototype._cell = function _cell (data, rowIndex, cellIndex) {
        if (!data || data === EMPTY_CELL) {
            return null;
        }

        var value = data.value;

        var border = {};

        if (data.borderLeft) {
            border.left = data.borderLeft;
        }

        if (data.borderRight) {
            border.right = data.borderRight;
      }

      if (data.borderTop) {
          border.top = data.borderTop;
      }

      if (data.borderBottom) {
          border.bottom = data.borderBottom;
      }

      if (data.dBorders) {
          border.diagonal = data.dBorders;
      }

      border = this._lookupBorder(border);

      var defStyle = this.options.defaultCellStyle || {};
      var style = { borderId: border };

      (function(add) {
          add("color");
          add("background");
            add("bold");
            add("italic");
            add("underline");
          if (!add("fontFamily")) { add("fontName", "fontFamily"); }
          add("fontSize");
          add("format");
            if (!add("textAlign")) { add("hAlign", "textAlign"); }
          if (!add("verticalAlign")) { add("vAlign", "verticalAlign"); }
          add("wrap");
          add("indent");
      })(
            function(prop, target) {
              var val = data[prop];
              if (val === undefined) {
                    val = defStyle[prop];
              }
              if (val !== undefined) {
                    style[target || prop] = val;
                    return true;
                }
            }
        );

        var columns = this.options.columns || [];

        var column = columns[cellIndex];
      var type = typeof value;

      if (column && column.autoWidth && (!data.colSpan || data.colSpan === 1)) {
          var displayValue = value;

          // XXX: let's not bring kendo.toString in only for this.
          //    better wait until the spreadsheet engine is available as a separate
          //    component, then we can use a real Excel-like formatter.
            //
            if (type === "number") {
                // kendo.toString will not behave exactly like the Excel format
                // Still, it's the best we have available for estimating the character count.
                displayValue = IntlService.toString(value, data.format);
            }

            column.width = Math.max(column.width || 0, String(displayValue).length);
        }

        if (type === "string") {
            value = stripFunnyChars(value);
            value = this._lookupString(value);
            type = "s";
        } else if (type === "number") {
            type = "n";
        } else if (type === "boolean") {
            type = "b";
            value = Number(value);
        } else if (value && value.getTime) {
            type = null;
            value = dateToSerial(value);
            if (!style.format) {
              style.format = "mm-dd-yy";
          }
      } else {
          type = null;
          value = null;
      }

      style = this._lookupStyle(style);

      var cellName = ref(rowIndex, cellIndex);

      if (data.validation) {
          this._addValidation(data.validation, cellName);
      }

      if (data.comment) {
          var anchor = [
              cellIndex + 1,// start column
              15,           // start column offset
              rowIndex,     // start row
              10,           // start row offset
              cellIndex + 3,// end column
              15,           // end column offset
              rowIndex + 3, // end row
              4             // end row offset
          ];
          this._comments.push({
              ref  : cellName,
              text : data.comment,
              row  : rowIndex,
              col    : cellIndex,
                anchor : anchor.join(", ")
          });
      }

      return {
            value: value,
            formula: data.formula,
            type: type,
          style: style,
          ref: cellName
      };
  };

  Worksheet.prototype._addValidation = function _addValidation (v, ref) {
      var tmp = {
          showErrorMessage : v.type === "reject" ? 1 : 0,
          formula1         : v.from,
          formula2       : v.to,
            type             : MAP_EXCEL_TYPE[v.dataType] || v.dataType,
            operator       : MAP_EXCEL_OPERATOR[v.comparerType] || v.comparerType,
          allowBlank     : v.allowNulls ? 1 : 0,
          showDropDown   : v.showButton ? 0 : 1, // LOL, Excel!
            error            : v.messageTemplate,
          errorTitle     : v.titleTemplate
        };
        var json = JSON.stringify(tmp);
        if (!this._validations[json]) {
          this._validations[json] = tmp;
          tmp.sqref = [];
        }
        this._validations[json].sqref.push(ref);
    };

    Worksheet.prototype._getLastRow = function _getLastRow () {
        return countData(this.options.rows);
    };

    Worksheet.prototype._getLastCol = function _getLastCol () {
        var last = 0;
        this.options.rows.forEach(function(row) {
            if (row.cells) {
              last = Math.max(last, countData(row.cells));
          }
      });
      return last;
  };

function countData(data) {
    var last = data.length;
    data.forEach(function(el) {
        if (el.index && el.index >= last) {
            last = el.index + 1;
        }
    });
    return last;
}

var MAP_EXCEL_OPERATOR = {
    // includes only what differs; key is our operator, value is Excel
    // operator.
    greaterThanOrEqualTo : "greaterThanOrEqual",
    lessThanOrEqualTo    : "lessThanOrEqual"
};

var MAP_EXCEL_TYPE = {
    // eslint-disable-next-line id-denylist
    number: "decimal"
};

var defaultFormats = {
    "General": 0,
    "0": 1,
    "0.00": 2,
    "#,##0": 3,
    "#,##0.00": 4,
    "0%": 9,
    "0.00%": 10,
    "0.00E+00": 11,
    "# ?/?": 12,
    "# ??/??": 13,
    "mm-dd-yy": 14,
    "d-mmm-yy": 15,
    "d-mmm": 16,
    "mmm-yy": 17,
    "h:mm AM/PM": 18,
    "h:mm:ss AM/PM": 19,
    "h:mm": 20,
    "h:mm:ss": 21,
    "m/d/yy h:mm": 22,
    "#,##0 ;(#,##0)": 37,
    "#,##0 ;[Red](#,##0)": 38,
    "#,##0.00;(#,##0.00)": 39,
    "#,##0.00;[Red](#,##0.00)": 40,
    "mm:ss": 45,
    "[h]:mm:ss": 46,
    "mmss.0": 47,
    "##0.0E+0": 48,
    "@": 49,
    "[$-404]e/m/d": 27,
    "m/d/yy": 30,
    "t0": 59,
    "t0.00": 60,
    "t#,##0": 61,
    "t#,##0.00": 62,
    "t0%": 67,
    "t0.00%": 68,
    "t# ?/?": 69,
    "t# ??/??": 70
};

function maybeRGB(value) {
    function hex(val) {
        var x = parseInt(val, 10).toString(16);
        return x.length < 2 ? "0" + x : x;
    }

    var m = /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+)\s*)?\)/i.exec(value.trim());
    if (m) {
        var opacity = (m[4] ? parseFloat(m[4]) : 1) * 255 | 0;
        return "#" + hex(opacity) + hex(m[1]) + hex(m[2]) + hex(m[3]);
    }
    return value;
}

function convertColor(value) {
    var color = maybeRGB(value);
    if (color.length < 6) {
        color = color.replace(/(\w)/g, function($0, $1) {
            return $1 + $1;
        });
    }

    color = color.substring(1).toUpperCase();

    if (color.length < 8) {
        color = "FF" + color;
    }

    return color;
}

var Workbook = function Workbook(options) {
      var this$1 = this;

      this.options = options || {};
      this._strings = {
          indexes: {},
          count: 0,
          uniqueCount: 0
      };
      this._styles = [];
      this._borders = [];
      this._images = this.options.images;
      this._imgId = 0;

      this._sheets = map(this.options.sheets || [], function (options, i) {
          options.defaults = this$1.options;
          options.sheetIndex = i + 1;
          return new Worksheet(options, this$1._strings, this$1._styles, this$1._borders);
      });
    };

  Workbook.prototype.imageFilename = function imageFilename (mimeType) {
      var id = ++this._imgId;
      switch (mimeType) {
        case "image/jpg":
        case "image/jpeg":
          return ("image" + id + ".jpg");
        case "image/png":
          return ("image" + id + ".png");
        case "image/gif":
          return ("image" + id + ".gif");
        default:
          return ("image" + id + ".bin"); // XXX: anything better to do here?
      }
  };

  Workbook.prototype.toZIP = function toZIP () {
        var this$1 = this;

      var zip = createZip();

      var docProps = zip.folder("docProps");

      docProps.file("core.xml", CORE({
          creator: this.options.creator || "Kendo UI",
          lastModifiedBy: this.options.creator || "Kendo UI",
          created: this.options.date || new Date().toJSON(),
          modified: this.options.date || new Date().toJSON()
      }));

      var sheetCount = this._sheets.length;

      docProps.file("app.xml", APP({ sheets: this._sheets }));

      var rels = zip.folder("_rels");
      rels.file(".rels", RELS);

      var xl = zip.folder("xl");

      var xlRels = xl.folder("_rels");
      xlRels.file("workbook.xml.rels", WORKBOOK_RELS({ count: sheetCount }));

      if (this._images) {
          var media = xl.folder("media");
          Object.keys(this._images).forEach(function (id) {
              var img = this$1._images[id];
              var filename = this$1.imageFilename(img.type);
              media.file(filename, img.data);
              img.target = "../media/" + filename;
          });
      }

      var sheetIds = {};
      xl.file("workbook.xml", WORKBOOK({
          sheets: this._sheets,
          filterNames: map(this._sheets, function(sheet, index) {
              var options = sheet.options;
              var sheetName = (options.name || options.title || "Sheet" + (index + 1));
              sheetIds[sheetName.toLowerCase()] = index;
              var filter = options.filter;
              if (filter) {
                  if (filter.ref) {
                      // spreadsheet provides `ref`
                      var a = filter.ref.split(":");
                      var from = parseRef(a[0]);
                      var to = parseRef(a[1]);
                      return {
                          localSheetId: index,
                          name: sheetName,
                          from: $ref(from.row, from.col),
                          to: $ref(to.row, to.col)
                      };
                  } else if (typeof filter.from !== "undefined" && typeof filter.to !== "undefined") {
                      // grid does this
                      return {
                          localSheetId: index,
                          name: sheetName,
                            from: $ref(filterRowIndex(options), filter.from),
                            to: $ref(filterRowIndex(options), filter.to)
                        };
                    }
                }
            }),
            userNames: map(this.options.names || [], function(def) {
                return {
                    name: def.localName,
                    localSheetId: def.sheet ? sheetIds[def.sheet.toLowerCase()] : null,
                    value: def.value,
                    hidden: def.hidden
                };
            })
        }));

        var worksheets = xl.folder("worksheets");
      var drawings = xl.folder("drawings");
      var drawingsRels = drawings.folder("_rels");
      var sheetRels = worksheets.folder("_rels");
      var commentFiles = [];
      var drawingFiles = [];

      for (var idx = 0; idx < sheetCount; idx++) {
          var sheet = this$1._sheets[idx];
          var sheetName = "sheet" + (idx + 1) + ".xml";
          var sheetXML = sheet.toXML(idx); // must be called before relsToXML
          var relsXML = sheet.relsToXML();
          var commentsXML = sheet.commentsXML();
          var legacyDrawing = sheet.legacyDrawing();
          var drawingsXML = sheet.drawingsXML(this$1._images);

          if (relsXML) {
              sheetRels.file(sheetName + ".rels", relsXML);
            }
            if (commentsXML) {
                var name = "comments" + (sheet.options.sheetIndex) + ".xml";
                xl.file(name, commentsXML);
                commentFiles.push(name);
            }
            if (legacyDrawing) {
                drawings.file(("vmlDrawing" + (sheet.options.sheetIndex) + ".vml"), legacyDrawing);
          }
          if (drawingsXML) {
              var name$1 = "drawing" + (sheet.options.sheetIndex) + ".xml";
              drawings.file(name$1, drawingsXML.main);
              drawingsRels.file((name$1 + ".rels"), drawingsXML.rels);
              drawingFiles.push(name$1);
            }

            worksheets.file(sheetName, sheetXML);
      }

      var borders = map(this._borders, parseJSON);

        var styles = map(this._styles, parseJSON);

      var hasFont = function(style) {
          return style.underline || style.bold || style.italic || style.color || style.fontFamily || style.fontSize;
      };

      var convertFontSize = function(value) {
          var fontInPx = Number(value);
            var fontInPt;

          if (fontInPx) {
              fontInPt = fontInPx * 3 / 4;
          }

          return fontInPt;
      };

        var fonts = map(styles, function(style) {
            if (style.fontSize) {
                style.fontSize = convertFontSize(style.fontSize);
            }

            if (style.color) {
                style.color = convertColor(style.color);
            }

            if (hasFont(style)) {
                return style;
            }
        });

        var formats = map(styles, function(style) {
            if (style.format && defaultFormats[style.format] === undefined) {
              return style;
          }
      });

      var fills = map(styles, function(style) {
          if (style.background) {
              style.background = convertColor(style.background);
              return style;
          }
      });

      xl.file("styles.xml", STYLES({
          fonts: fonts,
          fills: fills,
          formats: formats,
          borders: borders,
          styles: map(styles, function(style) {
                var result = {};

                if (hasFont(style)) {
                  result.fontId = indexOf(style, fonts) + 1;
              }

              if (style.background) {
                  result.fillId = indexOf(style, fills) + 2;
              }

              result.textAlign = style.textAlign;
              result.indent = style.indent;
              result.verticalAlign = style.verticalAlign;
              result.wrap = style.wrap;
              result.borderId = style.borderId;

              if (style.format) {
                  if (defaultFormats[style.format] !== undefined) {
                        result.numFmtId = defaultFormats[style.format];
                    } else {
                        result.numFmtId = 165 + indexOf(style, formats);
                    }
              }

              return result;
          })
      }));

      xl.file("sharedStrings.xml", SHARED_STRINGS(this._strings));

      zip.file("[Content_Types].xml", CONTENT_TYPES({
          sheetCount: sheetCount,
          commentFiles: commentFiles,
          drawingFiles: drawingFiles
      }));

      return zip;
  };

  Workbook.prototype.toDataURL = function toDataURL () {
        var zip = this.toZIP();

        return zip.generateAsync ? zip.generateAsync(DATA_URL_OPTIONS).then(toDataURI) : toDataURI(zip.generate(DATA_URL_OPTIONS));
    };

    Workbook.prototype.toBlob = function toBlob () {
        var zip = this.toZIP();
        if (zip.generateAsync) {
            return zip.generateAsync(BLOB_OPTIONS);
        }
        return new Blob([ zip.generate(ARRAYBUFFER_OPTIONS) ], { type: MIME_TYPE });
    };

function borderStyle(width) {
    var alias = "thin";

    if (width === 2) {
        alias = "medium";
    } else if (width === 3) {
        alias = "thick";
    }

    return alias;
}

function borderSideTemplate(name, style) {
    var result = "";

    if (style) {
        result += "<" + name + " style=\"" + borderStyle(style.size) + "\">";
        if (style.color) {
            result += "<color rgb=\"" + convertColor(style.color) + "\"/>";
        }
        result += "</" + name + ">";
    }

    return result;
}

function borderTemplate(border) {
    var diag = border.diagonal ? border.diagonal.type : 0;
    return ("<border " + (diag & 2 ? 'diagonalUp="true"' : '') + " " + (diag & 1 ? 'diagonalDown="true"' : '') + ">\n      " + (borderSideTemplate("left", border.left)) + "\n      " + (borderSideTemplate("right", border.right)) + "\n      " + (borderSideTemplate("top", border.top)) + "\n      " + (borderSideTemplate("bottom", border.bottom)) + "\n      " + (borderSideTemplate("diagonal", border.diagonal)) + "\n    </border>");
}

var EMPTY_CELL = {};
function inflate(rows, mergedCells) {
    var rowData = [];
    var rowsByIndex = [];

    indexRows(rows, function(row, index) {
        var data = {
            _source: row,
            index: index,
            height: row.height,
            level: row.level,
            cells: []
        };

        rowData.push(data);
        rowsByIndex[index] = data;
    });

    var sorted = sortByIndex(rowData).slice(0);
    var ctx = {
        rowData: rowData,
        rowsByIndex: rowsByIndex,
        mergedCells: mergedCells
    };

    for (var i = 0; i < sorted.length; i++) {
        fillCells(sorted[i], ctx);
        delete sorted[i]._source;
    }

    return sortByIndex(rowData);
}

function indexRows(rows, callback) {
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (!row) {
            continue;
        }

        var index = row.index;
        if (typeof index !== "number") {
            index = i;
        }

        callback(row, index);
    }
}

function sortByIndex(items) {
    return items.sort(function(a, b) {
        return a.index - b.index;
    });
}

function pushUnique(array, el) {
    if (array.indexOf(el) < 0) {
        array.push(el);
    }
}

function getSpan(mergedCells, ref) {
    for (var i = 0; i < mergedCells.length; ++i) {
        var range = mergedCells[i];
        var a = range.split(":");
        var topLeft = a[0];
        if (topLeft === ref) {
            var bottomRight = a[1];
            topLeft = parseRef(topLeft);
            bottomRight = parseRef(bottomRight);
            return {
                rowSpan: bottomRight.row - topLeft.row + 1,
                colSpan: bottomRight.col - topLeft.col + 1
            };
        }
    }
}

function parseRef(ref) {
    function getcol(str) {
        var upperStr = str.toUpperCase();
        var col = 0;
        for (var i = 0; i < upperStr.length; ++i) {
            col = col * 26 + upperStr.charCodeAt(i) - 64;
        }
        return col - 1;
    }

    function getrow(str) {
        return parseInt(str, 10) - 1;
    }

    var m = /^([a-z]+)(\d+)$/i.exec(ref);
    return {
        row: getrow(m[2]),
        col: getcol(m[1])
    };
}

function pixelsToExcel(px) {
    return Math.round(px * 9525);
}

function fillCells(data, ctx) {
    var row = data._source;
    var rowIndex = data.index;
    var cells = row.cells;
    var cellData = data.cells;

    if (!cells) {
        return;
    }

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i] || EMPTY_CELL;

        var rowSpan = cell.rowSpan || 1;
        var colSpan = cell.colSpan || 1;

        var cellIndex = insertCell(cellData, cell);
        var topLeftRef = ref(rowIndex, cellIndex);

        if (rowSpan === 1 && colSpan === 1) {
            // could still be merged: the spreadsheet does not send
            // rowSpan/colSpan, but mergedCells is already populated.
            // https://github.com/telerik/kendo-ui-core/issues/2401
            var tmp = getSpan(ctx.mergedCells, topLeftRef);
            if (tmp) {
                colSpan = tmp.colSpan;
                rowSpan = tmp.rowSpan;
            }
        }

        spanCell(cell, cellData, cellIndex, colSpan);

        if (rowSpan > 1 || colSpan > 1) {
            pushUnique(ctx.mergedCells,
                       topLeftRef + ":" + ref(rowIndex + rowSpan - 1,
                                              cellIndex + colSpan - 1));
        }

        if (rowSpan > 1) {
            for (var ri = rowIndex + 1; ri < rowIndex + rowSpan; ri++) {
                var nextRow = ctx.rowsByIndex[ri];
                if (!nextRow) {
                    nextRow = ctx.rowsByIndex[ri] = { index: ri, cells: [] };
                    ctx.rowData.push(nextRow);
                }

                spanCell(cell, nextRow.cells, cellIndex - 1, colSpan + 1);
            }
        }
    }
}

function insertCell(data, cell) {
    var index;

    if (typeof cell.index === "number") {
        index = cell.index;
        insertCellAt(data, cell, cell.index);
    } else {
        index = appendCell(data, cell);
    }

    return index;
}

function insertCellAt(data, cell, index) {
    data[index] = cell;
}

function appendCell(data, cell) {
    var index = data.length;

    for (var i = 0; i < data.length + 1; i++) {
        if (!data[i]) {
            data[i] = cell;
            index = i;
            break;
        }
    }

    return index;
}

function spanCell(cell, row, startIndex, colSpan) {
    for (var i = 1; i < colSpan; i++) {
        var tmp = {
            borderTop    : cell.borderTop,
            borderRight  : cell.borderRight,
            borderBottom : cell.borderBottom,
            borderLeft   : cell.borderLeft
        };
        insertCellAt(row, tmp, startIndex + i);
    }
}

var SPREADSHEET_FILTERS = function (ref$1) {
  var ref = ref$1.ref;
  var columns = ref$1.columns;
  var generators = ref$1.generators;

  return ("\n<autoFilter ref=\"" + ref + "\">\n  " + (foreach(columns, function (col) { return ("\n    <filterColumn colId=\"" + (col.index) + "\">\n      " + (generators[col.filter](col)) + "\n    </filterColumn>\n  "); })) + "\n</autoFilter>");
};

var SPREADSHEET_CUSTOM_FILTER = function (ref) {
  var logic = ref.logic;
  var criteria = ref.criteria;

  return ("\n<customFilters " + (logic === 'and' ? 'and="1"' : '') + ">\n" + (foreach(criteria, function (f) {
    var op = spreadsheetFilters.customOperator(f);
    var val = spreadsheetFilters.customValue(f);
    return ("<customFilter " + (op ? ("operator=\"" + op + "\"") : '') + " val=\"" + val + "\"/>");
})) + "\n</customFilters>");
};

var SPREADSHEET_DYNAMIC_FILTER = function (ref) {
  var type = ref.type;

  return ("<dynamicFilter type=\"" + (spreadsheetFilters.dynamicFilterType(type)) + "\" />");
};

var SPREADSHEET_TOP_FILTER = function (ref) {
  var type = ref.type;
  var value = ref.value;

  return ("<top10 percent=\"" + (/percent$/i.test(type) ? 1 : 0) + "\"\n       top=\"" + (/^top/i.test(type) ? 1 : 0) + "\"\n       val=\"" + value + "\" />");
};

var SPREADSHEET_VALUE_FILTER = function (ref) {
    var blanks = ref.blanks;
    var values = ref.values;

    return ("<filters " + (blanks ? 'blank="1"' : '') + ">\n    " + (foreach(values, function (value) { return ("\n      <filter val=\"" + value + "\" />"); })) + "\n  </filters>");
};

function spreadsheetFilters(filter) {
    return SPREADSHEET_FILTERS({
        ref: filter.ref,
        columns: filter.columns,
        generators: {
            custom  : SPREADSHEET_CUSTOM_FILTER,
            dynamic : SPREADSHEET_DYNAMIC_FILTER,
            top     : SPREADSHEET_TOP_FILTER,
            value   : SPREADSHEET_VALUE_FILTER
        }
    });
}

spreadsheetFilters.customOperator = function(f) {
    return {
        eq  : "equal",
        gt  : "greaterThan",
        gte : "greaterThanOrEqual",
        lt  : "lessThan",
        lte : "lessThanOrEqual",
        ne  : "notEqual",

        // These are not in the spec, but seems to be how Excel does
        // it (see customValue below).  For the non-negated versions,
        // the operator attribute is missing completely.
        doesnotstartwith: "notEqual",
        doesnotendwith: "notEqual",
        doesnotcontain: "notEqual",
        doesnotmatch: "notEqual"
    }[f.operator.toLowerCase()];
};

function quoteSheet(name) {
    if (/^\'/.test(name)) { // assume already quoted, the Spreadsheet does it.
        return name;
    }
    if (/^[a-z_][a-z0-9_]*$/i.test(name)) {
        return name;        // no need to quote it
    }
    return "'" + name.replace(/\x27/g, "\\'") + "'";
}

spreadsheetFilters.customValue = function(f) {
    function esc(str) {
        return str.replace(/([*?])/g, "~$1");
    }

    switch (f.operator.toLowerCase()) {
        case "startswith":
        case "doesnotstartwith":
            return esc(f.value) + "*";

        case "endswith":
        case "doesnotendwith":
            return "*" + esc(f.value);

        case "contains":
        case "doesnotcontain":
            return "*" + esc(f.value) + "*";

        default:
            return f.value;
    }
};

spreadsheetFilters.dynamicFilterType = function(type) {
    return {
        quarter1  : "Q1",
        quarter2  : "Q2",
        quarter3  : "Q3",
        quarter4  : "Q4",
        january   : "M1",
        february  : "M2",
        march     : "M3",
        april     : "M4",
        may       : "M5",
        june      : "M6",
        july      : "M7",
        august    : "M8",
        september : "M9",
        october   : "M10",
        november  : "M11",
        december  : "M12"
    }[type.toLowerCase()] || type;
};

exports.ExcelExporter = ExcelExporter;
exports.IntlService = IntlService;
exports.TemplateService = TemplateService;
exports.Workbook = Workbook;
exports.Worksheet = Worksheet;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9hY3Rpb25zLXJ1bm5lci9fd29yay9rZW5kby1vb3htbC9rZW5kby1vb3htbC9zcmMvc2VydmljZXMvdGVtcGxhdGUtc2VydmljZS5qcyIsIi9ob21lL3VidW50dS9hY3Rpb25zLXJ1bm5lci9fd29yay9rZW5kby1vb3htbC9rZW5kby1vb3htbC9zcmMvdXRpbHMvZ2V0dGVyLmpzIiwiL2hvbWUvdWJ1bnR1L2FjdGlvbnMtcnVubmVyL193b3JrL2tlbmRvLW9veG1sL2tlbmRvLW9veG1sL3NyYy91dGlscy9tYXAuanMiLCIvaG9tZS91YnVudHUvYWN0aW9ucy1ydW5uZXIvX3dvcmsva2VuZG8tb294bWwva2VuZG8tb294bWwvc3JjL2V4Y2VsLWV4cG9ydGVyLmpzIiwiL2hvbWUvdWJ1bnR1L2FjdGlvbnMtcnVubmVyL193b3JrL2tlbmRvLW9veG1sL2tlbmRvLW9veG1sL3NyYy9zZXJ2aWNlcy9pbnRsLXNlcnZpY2UuanMiLCIvaG9tZS91YnVudHUvYWN0aW9ucy1ydW5uZXIvX3dvcmsva2VuZG8tb294bWwva2VuZG8tb294bWwvc3JjL3V0aWxzL2NyZWF0ZS16aXAuanMiLCIvaG9tZS91YnVudHUvYWN0aW9ucy1ydW5uZXIvX3dvcmsva2VuZG8tb294bWwva2VuZG8tb294bWwvc3JjL3V0aWxzL3RpbWUuanMiLCIvaG9tZS91YnVudHUvYWN0aW9ucy1ydW5uZXIvX3dvcmsva2VuZG8tb294bWwva2VuZG8tb294bWwvc3JjL29veG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjdXJyZW50ID0ge1xuICAgIGNvbXBpbGU6IGZ1bmN0aW9uKHRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59O1xuXG5jbGFzcyBUZW1wbGF0ZVNlcnZpY2Uge1xuICAgIHN0YXRpYyByZWdpc3Rlcih1c2VySW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgY3VycmVudCA9IHVzZXJJbXBsZW1lbnRhdGlvbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcGlsZSh0ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gY3VycmVudC5jb21waWxlKHRlbXBsYXRlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlU2VydmljZTsiLCJjb25zdCBGSUVMRF9SRUdFWCA9IC9cXFsoPzooXFxkKyl8WydcIl0oLio/KVsnXCJdKVxcXXwoKD86KD8hXFxbLio/XFxdfFxcLikuKSspL2c7XG5jb25zdCBnZXR0ZXJDYWNoZSA9IHt9O1xuY29uc3QgVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCc7XG5cbmdldHRlckNhY2hlW1VOREVGSU5FRF0gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0dGVyKGZpZWxkKSB7XG4gICAgaWYgKGdldHRlckNhY2hlW2ZpZWxkXSkge1xuICAgICAgICByZXR1cm4gZ2V0dGVyQ2FjaGVbZmllbGRdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xuICAgIGZpZWxkLnJlcGxhY2UoRklFTERfUkVHRVgsIGZ1bmN0aW9uKG1hdGNoLCBpbmRleCwgaW5kZXhBY2Nlc3NvciwgZmllbGQpIHtcbiAgICAgICAgZmllbGRzLnB1c2godHlwZW9mIGluZGV4ICE9PSBVTkRFRklORUQgPyBpbmRleCA6IChpbmRleEFjY2Vzc29yIHx8IGZpZWxkKSk7XG4gICAgfSk7XG5cbiAgICBnZXR0ZXJDYWNoZVtmaWVsZF0gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZmllbGRzLmxlbmd0aCAmJiByZXN1bHQ7IGlkeCsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbZmllbGRzW2lkeF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdldHRlckNhY2hlW2ZpZWxkXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAoYXJyYXksIGZ1bmMpIHtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChyZXN1bHQsIGVsLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGZ1bmMoZWwsIGkpO1xuICAgICAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBbXSk7XG59IiwiaW1wb3J0IFRlbXBsYXRlU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL3RlbXBsYXRlLXNlcnZpY2UnO1xuaW1wb3J0IGdldHRlciBmcm9tICcuL3V0aWxzL2dldHRlcic7XG5pbXBvcnQgbWFwIGZyb20gJy4vdXRpbHMvbWFwJztcblxuZnVuY3Rpb24gZGVmYXVsdEdyb3VwSGVhZGVyVGVtcGxhdGUoZGF0YSkge1xuICAgIHJldHVybiBgJHsgZGF0YS50aXRsZSB9OiAkeyBkYXRhLnZhbHVlIH1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJheShsZW5ndGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNhbGxiYWNrKGlkeCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJdGVtSWQoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmlkO1xufVxuXG5jbGFzcyBFeGNlbEV4cG9ydGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMuY29sdW1ucyA9IHRoaXMuX3RyaW1Db2x1bW5zKG9wdGlvbnMuY29sdW1ucyB8fCBbXSk7XG5cbiAgICAgICAgdGhpcy5hbGxDb2x1bW5zID0gbWFwKHRoaXMuX2xlYWZDb2x1bW5zKG9wdGlvbnMuY29sdW1ucyB8fCBbXSksIHRoaXMuX3ByZXBhcmVDb2x1bW4pO1xuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuX3Zpc2libGVDb2x1bW5zKHRoaXMuYWxsQ29sdW1ucyk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhIHx8IFtdO1xuICAgICAgICB0aGlzLmFnZ3JlZ2F0ZXMgPSBvcHRpb25zLmFnZ3JlZ2F0ZXMgfHwge307XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW10uY29uY2F0KG9wdGlvbnMuZ3JvdXBzIHx8IFtdKTtcbiAgICAgICAgdGhpcy5oYXNHcm91cHMgPSB0aGlzLmdyb3Vwcy5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmhpZXJhcmNoeSA9IG9wdGlvbnMuaGllcmFyY2h5O1xuICAgICAgICB0aGlzLmhhc0dyb3VwSGVhZGVyQ29sdW1uID0gdGhpcy5jb2x1bW5zLnNvbWUoY29sdW1uID0+IGNvbHVtbi5ncm91cEhlYWRlckNvbHVtblRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzaWJsZSA9IHRoaXMub3B0aW9ucy5jb2xsYXBzaWJsZTtcbiAgICB9XG5cbiAgICB3b3JrYm9vaygpIHtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSB7XG4gICAgICAgICAgICBzaGVldHM6IFsge1xuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMoKSxcbiAgICAgICAgICAgICAgICByb3dzOiB0aGlzLmhpZXJhcmNoeSA/IHRoaXMuX2hpZXJhcmNoeVJvd3MoKSA6IHRoaXMuX3Jvd3MoKSxcbiAgICAgICAgICAgICAgICBmcmVlemVQYW5lOiB0aGlzLl9mcmVlemVQYW5lKCksXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0aGlzLl9maWx0ZXIoKVxuICAgICAgICAgICAgfSBdXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHdvcmtib29rO1xuICAgIH1cblxuICAgIF90cmltQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gQm9vbGVhbihjb2x1bW4uZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCAmJiBjb2x1bW4uY29sdW1ucykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyaW1Db2x1bW5zKGNvbHVtbi5jb2x1bW5zKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbGVhZkNvbHVtbnMoY29sdW1ucykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgY29sdW1ucy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBpZiAoIWNvbHVtbnNbaWR4XS5jb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29sdW1uc1tpZHhdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLl9sZWFmQ29sdW1ucyhjb2x1bW5zW2lkeF0uY29sdW1ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfcHJlcGFyZUNvbHVtbihjb2x1bW4pIHtcbiAgICAgICAgaWYgKCFjb2x1bW4uZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gZnVuY3Rpb24oZGF0YUl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBnZXR0ZXIoY29sdW1uLmZpZWxkLCB0cnVlKShkYXRhSXRlbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHZhbHVlcyA9IG51bGw7XG5cbiAgICAgICAgaWYgKGNvbHVtbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICBjb2x1bW4udmFsdWVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpdGVtLnZhbHVlXSA9IGl0ZW0udGV4dDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IGZ1bmN0aW9uKGRhdGFJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1tnZXR0ZXIoY29sdW1uLmZpZWxkLCB0cnVlKShkYXRhSXRlbSldO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb2x1bW4sIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgZ3JvdXBIZWFkZXJUZW1wbGF0ZTogY29sdW1uLmdyb3VwSGVhZGVyVGVtcGxhdGUgPyBUZW1wbGF0ZVNlcnZpY2UuY29tcGlsZShjb2x1bW4uZ3JvdXBIZWFkZXJUZW1wbGF0ZSkgOiBkZWZhdWx0R3JvdXBIZWFkZXJUZW1wbGF0ZSxcbiAgICAgICAgICAgIGdyb3VwSGVhZGVyQ29sdW1uVGVtcGxhdGU6IGNvbHVtbi5ncm91cEhlYWRlckNvbHVtblRlbXBsYXRlID8gVGVtcGxhdGVTZXJ2aWNlLmNvbXBpbGUoY29sdW1uLmdyb3VwSGVhZGVyQ29sdW1uVGVtcGxhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIGdyb3VwRm9vdGVyVGVtcGxhdGU6IGNvbHVtbi5ncm91cEZvb3RlclRlbXBsYXRlID8gVGVtcGxhdGVTZXJ2aWNlLmNvbXBpbGUoY29sdW1uLmdyb3VwRm9vdGVyVGVtcGxhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIGZvb3RlclRlbXBsYXRlOiBjb2x1bW4uZm9vdGVyVGVtcGxhdGUgPyBUZW1wbGF0ZVNlcnZpY2UuY29tcGlsZShjb2x1bW4uZm9vdGVyVGVtcGxhdGUpIDogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZmlsdGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5maWx0ZXJhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlcHRoID0gdGhpcy5fZGVwdGgoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJvbTogZGVwdGgsXG4gICAgICAgICAgICB0bzogZGVwdGggKyB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVQYWRkaW5nQ2VsbHMobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVBcnJheShsZW5ndGgsICgpID0+IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZGZkZmRmXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjMzMzXCJcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnBhZGRpbmdDZWxsT3B0aW9ucykpO1xuICAgIH1cblxuICAgIF9kYXRhUm93KGRhdGFJdGVtLCBsZXZlbCwgZGVwdGgpIHtcbiAgICAgICAgbGV0IGNlbGxzID0gdGhpcy5fY3JlYXRlUGFkZGluZ0NlbGxzKGxldmVsKTtcblxuICAgICAgICAvLyBncm91cGVkXG4gICAgICAgIGlmICh0aGlzLmhhc0dyb3VwcyAmJiBkZXB0aCAmJiBkYXRhSXRlbS5pdGVtcykge1xuICAgICAgICAgICAgY2VsbHMgPSBjZWxscy5jb25jYXQodGhpcy5fZ3JvdXBIZWFkZXJDZWxscyhkYXRhSXRlbSwgbGV2ZWwsIGRlcHRoKSk7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gdGhpcy5fZGF0YVJvd3MoZGF0YUl0ZW0uaXRlbXMsIGxldmVsICsgMSk7XG5cbiAgICAgICAgICAgIHJvd3MudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJncm91cC1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICBjZWxsczogY2VsbHMsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IHRoaXMuY29sbGFwc2libGUgPyBsZXZlbCA6IG51bGxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcm93cy5jb25jYXQodGhpcy5fZm9vdGVyKGRhdGFJdGVtLCBsZXZlbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YUNlbGxzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgY2VsbElkeCA9IDA7IGNlbGxJZHggPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBjZWxsSWR4KyspIHtcbiAgICAgICAgICAgIGRhdGFDZWxsc1tjZWxsSWR4XSA9IHRoaXMuX2NlbGwoZGF0YUl0ZW0sIHRoaXMuY29sdW1uc1tjZWxsSWR4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oaWVyYXJjaHkpIHtcbiAgICAgICAgICAgIGRhdGFDZWxsc1swXS5jb2xTcGFuID0gZGVwdGggLSBsZXZlbCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gWyB7XG4gICAgICAgICAgICB0eXBlOiBcImRhdGFcIixcbiAgICAgICAgICAgIGNlbGxzOiBjZWxscy5jb25jYXQoZGF0YUNlbGxzKSxcbiAgICAgICAgICAgIGxldmVsOiB0aGlzLmNvbGxhcHNpYmxlID8gbGV2ZWwgOiBudWxsXG4gICAgICAgIH0gXTtcbiAgICB9XG5cbiAgICBfZ3JvdXBIZWFkZXJDZWxscyhkYXRhSXRlbSwgbGV2ZWwsIGRlcHRoKSB7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gW107XG5cbiAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5hbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uZmllbGQgPT09IGRhdGFJdGVtLmZpZWxkO1xuICAgICAgICB9KVswXSB8fCB7fTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNvbHVtbiAmJiBjb2x1bW4udGl0bGUgPyBjb2x1bW4udGl0bGUgOiBkYXRhSXRlbS5maWVsZDtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBjb2x1bW4gPyBjb2x1bW4uZ3JvdXBIZWFkZXJUZW1wbGF0ZSB8fCBjb2x1bW4uZ3JvdXBIZWFkZXJDb2x1bW5UZW1wbGF0ZSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBmaWVsZDogZGF0YUl0ZW0uZmllbGQsXG4gICAgICAgICAgICB2YWx1ZTogY29sdW1uICYmIGNvbHVtbi52YWx1ZXMgPyBjb2x1bW4udmFsdWVzW2RhdGFJdGVtLnZhbHVlXSA6IGRhdGFJdGVtLnZhbHVlLFxuICAgICAgICAgICAgYWdncmVnYXRlczogZGF0YUl0ZW0uYWdncmVnYXRlcyxcbiAgICAgICAgICAgIGl0ZW1zOiBkYXRhSXRlbS5pdGVtc1xuICAgICAgICB9LCBkYXRhSXRlbS5hZ2dyZWdhdGVzW2RhdGFJdGVtLmZpZWxkXSk7XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0ZW1wbGF0ZSA/IHRlbXBsYXRlKGdyb3VwKSA6IGAkeyB0aXRsZSB9OiAkeyBkYXRhSXRlbS52YWx1ZSB9YDtcblxuICAgICAgICBjZWxscy5wdXNoKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZGZkZmRmXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICBjb2xTcGFuOiAodGhpcy5oYXNHcm91cEhlYWRlckNvbHVtbiA/IDEgOiB0aGlzLmNvbHVtbnMubGVuZ3RoKSArIGRlcHRoIC0gbGV2ZWxcbiAgICAgICAgfSwgY29sdW1uLmdyb3VwSGVhZGVyQ2VsbE9wdGlvbnMpKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNHcm91cEhlYWRlckNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHMucHVzaChPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2RmZGZkZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbHVtbi5ncm91cEhlYWRlckNvbHVtblRlbXBsYXRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uZ3JvdXBIZWFkZXJDb2x1bW5UZW1wbGF0ZShPYmplY3QuYXNzaWduKHsgZ3JvdXA6IGdyb3VwIH0sIGdyb3VwLCBkYXRhSXRlbS5hZ2dyZWdhdGVzW2NvbHVtbi5maWVsZF0pKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbHVtbi5ncm91cEhlYWRlckNlbGxPcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuXG4gICAgX2RhdGFSb3dzKGRhdGFJdGVtcywgbGV2ZWwpIHtcbiAgICAgICAgY29uc3QgZGVwdGggPSB0aGlzLl9kZXB0aCgpO1xuICAgICAgICBjb25zdCByb3dzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZGF0YUl0ZW1zLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgIHJvd3MucHVzaC5hcHBseShyb3dzLCB0aGlzLl9kYXRhUm93KGRhdGFJdGVtc1tpZHhdLCBsZXZlbCwgZGVwdGgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH1cblxuICAgIF9oaWVyYXJjaHlSb3dzKCkge1xuICAgICAgICBjb25zdCBkZXB0aCA9IHRoaXMuX2RlcHRoKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIGNvbnN0IGl0ZW1MZXZlbCA9IHRoaXMuaGllcmFyY2h5Lml0ZW1MZXZlbDtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gdGhpcy5oaWVyYXJjaHkuaXRlbUlkIHx8IGRlZmF1bHRJdGVtSWQ7XG4gICAgICAgIGNvbnN0IGhhc0Zvb3RlciA9IHRoaXMuX2hhc0Zvb3RlclRlbXBsYXRlKCk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICBsZXQgcHJldmlvdXNMZXZlbCA9IDA7XG4gICAgICAgIGxldCBwcmV2aW91c0l0ZW1JZDtcblxuICAgICAgICBpZiAoIWhhc0Zvb3Rlcikge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZGF0YS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZGF0YVtpZHhdO1xuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBpdGVtTGV2ZWwoaXRlbSwgaWR4KTtcblxuICAgICAgICAgICAgaWYgKGhhc0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA+IHByZXZpb3VzTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKHsgaWQ6IHByZXZpb3VzSXRlbUlkLCBsZXZlbDogcHJldmlvdXNMZXZlbCB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsIDwgcHJldmlvdXNMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2guYXBwbHkocm93cywgdGhpcy5faGllcmFyY2h5Rm9vdGVyUm93cyhwYXJlbnRzLCBsZXZlbCwgZGVwdGgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcmV2aW91c0xldmVsID0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNJdGVtSWQgPSBpdGVtSWQoaXRlbSwgaWR4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93cy5wdXNoLmFwcGx5KHJvd3MsIHRoaXMuX2RhdGFSb3coaXRlbSwgbGV2ZWwgKyAxLCBkZXB0aCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc0Zvb3Rlcikge1xuICAgICAgICAgICAgcm93cy5wdXNoLmFwcGx5KHJvd3MsIHRoaXMuX2hpZXJhcmNoeUZvb3RlclJvd3MocGFyZW50cywgMCwgZGVwdGgpKTtcblxuICAgICAgICAgICAgY29uc3Qgcm9vdEFnZ3JlZ2F0ZSA9IGRhdGEubGVuZ3RoID8gdGhpcy5hZ2dyZWdhdGVzW2RhdGFbMF0ucGFyZW50SWRdIDoge307XG4gICAgICAgICAgICByb3dzLnB1c2godGhpcy5faGllcmFyY2h5Rm9vdGVyKHJvb3RBZ2dyZWdhdGUsIDAsIGRlcHRoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcmVwZW5kSGVhZGVyUm93cyhyb3dzKTtcblxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9XG5cbiAgICBfaGllcmFyY2h5Rm9vdGVyUm93cyhwYXJlbnRzLCBjdXJyZW50TGV2ZWwsIGRlcHRoKSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgd2hpbGUgKHBhcmVudHMubGVuZ3RoICYmIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXS5sZXZlbCA+PSBjdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICByb3dzLnB1c2godGhpcy5faGllcmFyY2h5Rm9vdGVyKHRoaXMuYWdncmVnYXRlc1twYXJlbnQuaWRdLCBwYXJlbnQubGV2ZWwgKyAxLCBkZXB0aCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxuXG4gICAgX2hhc0Zvb3RlclRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb2x1bW5zO1xuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBjb2x1bW5zLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zW2lkeF0uZm9vdGVyVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oaWVyYXJjaHlGb290ZXIoYWdncmVnYXRlcywgbGV2ZWwsIGRlcHRoKSB7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBjb2xTcGFuID0gaW5kZXggPyAxIDogZGVwdGggLSBsZXZlbCArIDE7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmZvb3RlclRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRBZ2dyZWdhdGVzID0gKGFnZ3JlZ2F0ZXMgfHwge30pW2NvbHVtbi5maWVsZF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkZmRmZGZcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiBjb2xTcGFuLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29sdW1uLmZvb3RlclRlbXBsYXRlKE9iamVjdC5hc3NpZ24oeyBhZ2dyZWdhdGVzOiBhZ2dyZWdhdGVzIH0sIGZpZWxkQWdncmVnYXRlcykpXG4gICAgICAgICAgICAgICAgfSwgY29sdW1uLmZvb3RlckNlbGxPcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2RmZGZkZlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICBjb2xTcGFuOiBjb2xTcGFuXG4gICAgICAgICAgICB9LCBjb2x1bW4uZm9vdGVyQ2VsbE9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogXCJmb290ZXJcIixcbiAgICAgICAgICAgIGNlbGxzOiB0aGlzLl9jcmVhdGVQYWRkaW5nQ2VsbHMobGV2ZWwpLmNvbmNhdChjZWxscyksXG4gICAgICAgICAgICBsZXZlbDogdGhpcy5jb2xsYXBzaWJsZSA/IGxldmVsIDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9mb290ZXIoZGF0YUl0ZW0sIGxldmVsKSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gdGhpcy5jb2x1bW5zLnNvbWUoY29sdW1uID0+IGNvbHVtbi5ncm91cEZvb3RlclRlbXBsYXRlKTtcblxuICAgICAgICBsZXQgdGVtcGxhdGVEYXRhLCBncm91cDtcbiAgICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICAgICAgZ3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IHsgaXRlbXM6IGRhdGFJdGVtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBkYXRhSXRlbS5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YUl0ZW0udmFsdWUgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRlbXBsYXRlRGF0YSA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YUl0ZW0uYWdncmVnYXRlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlRGF0YVtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YUl0ZW0uYWdncmVnYXRlc1trZXldLCBncm91cCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5jb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmdyb3VwRm9vdGVyVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlRGF0YSwgZGF0YUl0ZW0uYWdncmVnYXRlc1tjb2x1bW4uZmllbGRdLCBncm91cCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkZmRmZGZcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29sdW1uLmdyb3VwRm9vdGVyVGVtcGxhdGUoZGF0YSlcbiAgICAgICAgICAgICAgICB9LCBjb2x1bW4uZ3JvdXBGb290ZXJDZWxsT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkZmRmZGZcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzMzXCJcbiAgICAgICAgICAgIH0sIGNvbHVtbi5ncm91cEZvb3RlckNlbGxPcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICAgICAgcm93cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImdyb3VwLWZvb3RlclwiLFxuICAgICAgICAgICAgICAgIGNlbGxzOiB0aGlzLl9jcmVhdGVQYWRkaW5nQ2VsbHModGhpcy5ncm91cHMubGVuZ3RoKS5jb25jYXQoY2VsbHMpLFxuICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmNvbGxhcHNpYmxlID8gbGV2ZWwgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH1cblxuICAgIF9pc0NvbHVtblZpc2libGUoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXNpYmxlQ29sdW1ucyhbIGNvbHVtbiBdKS5sZW5ndGggPiAwICYmIChjb2x1bW4uZmllbGQgfHwgY29sdW1uLmNvbHVtbnMpO1xuICAgIH1cblxuICAgIF92aXNpYmxlQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhwb3J0YWJsZSA9IGNvbHVtbi5leHBvcnRhYmxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBleHBvcnRhYmxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGV4cG9ydGFibGUgPSBjb2x1bW4uZXhwb3J0YWJsZS5leGNlbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZUluRXhwb3J0ID0gIWNvbHVtbi5oaWRkZW4gJiYgZXhwb3J0YWJsZSAhPT0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlSW5FeHBvcnRPbmx5ID0gY29sdW1uLmhpZGRlbiAmJiBleHBvcnRhYmxlID09PSB0cnVlO1xuICAgICAgICAgICAgbGV0IHZpc2libGUgPSB2aXNpYmxlSW5FeHBvcnQgfHwgdmlzaWJsZUluRXhwb3J0T25seTtcbiAgICAgICAgICAgIGlmICh2aXNpYmxlICYmIGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgdmlzaWJsZSA9IHRoaXMuX3Zpc2libGVDb2x1bW5zKGNvbHVtbi5jb2x1bW5zKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZpc2libGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oZWFkZXJSb3cocm93LCBncm91cHMpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHJvdy5jZWxscy5tYXAoZnVuY3Rpb24oY2VsbCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY2VsbCwge1xuICAgICAgICAgICAgICAgIGNvbFNwYW46IGNlbGwuY29sU3BhbiA+IDEgPyBjZWxsLmNvbFNwYW4gOiAxLFxuICAgICAgICAgICAgICAgIHJvd1NwYW46IHJvdy5yb3dTcGFuID4gMSAmJiAhY2VsbC5jb2xTcGFuID8gcm93LnJvd1NwYW4gOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGllcmFyY2h5ICYmIGhlYWRlcnNbMF0uZmlyc3RDZWxsKSB7XG4gICAgICAgICAgICBoZWFkZXJzWzBdLmNvbFNwYW4gKz0gdGhpcy5fZGVwdGgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBcImhlYWRlclwiLFxuICAgICAgICAgICAgY2VsbHM6IGNyZWF0ZUFycmF5KGdyb3Vwcy5sZW5ndGgsICgpID0+IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzdhN2E3YVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIlxuICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zLmhlYWRlclBhZGRpbmdDZWxsT3B0aW9ucykpLmNvbmNhdChoZWFkZXJzKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9wcmVwZW5kSGVhZGVyUm93cyhyb3dzKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IHRoaXMuZ3JvdXBzO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclJvd3MgPSBbIHsgcm93U3BhbjogMSwgY2VsbHM6IFtdLCBpbmRleDogMCB9IF07XG5cbiAgICAgICAgdGhpcy5fcHJlcGFyZUhlYWRlclJvd3MoaGVhZGVyUm93cywgdGhpcy5vcHRpb25zLmNvbHVtbnMpO1xuXG4gICAgICAgIGZvciAobGV0IGlkeCA9IGhlYWRlclJvd3MubGVuZ3RoIC0gMTsgaWR4ID49IDA7IGlkeC0tKSB7XG4gICAgICAgICAgICByb3dzLnVuc2hpZnQodGhpcy5faGVhZGVyUm93KGhlYWRlclJvd3NbaWR4XSwgZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcHJlcGFyZUhlYWRlclJvd3Mocm93cywgY29sdW1ucywgcGFyZW50Q2VsbCwgcGFyZW50Um93KSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcmVudFJvdyB8fCByb3dzW3Jvd3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBjaGlsZFJvdyA9IHJvd3Nbcm93LmluZGV4ICsgMV07XG4gICAgICAgIGxldCB0b3RhbENvbFNwYW4gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGNvbHVtbnMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tpZHhdO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ29sdW1uVmlzaWJsZShjb2x1bW4pKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzdhN2E3YVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb2x1bW4udGl0bGUgfHwgY29sdW1uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiAwLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGw6IGlkeCA9PT0gMCAmJiAoIXBhcmVudENlbGwgfHwgcGFyZW50Q2VsbC5maXJzdENlbGwpXG4gICAgICAgICAgICAgICAgfSwgY29sdW1uLmhlYWRlckNlbGxPcHRpb25zKTtcbiAgICAgICAgICAgICAgICByb3cuY2VsbHMucHVzaChjZWxsKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uY29sdW1ucyAmJiBjb2x1bW4uY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRSb3cgPSB7IHJvd1NwYW46IDAsIGNlbGxzOiBbXSwgaW5kZXg6IHJvd3MubGVuZ3RoIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goY2hpbGRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY29sU3BhbiA9IHRoaXMuX3RyaW1Db2x1bW5zKHRoaXMuX3Zpc2libGVDb2x1bW5zKGNvbHVtbi5jb2x1bW5zKSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmVwYXJlSGVhZGVyUm93cyhyb3dzLCBjb2x1bW4uY29sdW1ucywgY2VsbCwgY2hpbGRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbENvbFNwYW4gKz0gY2VsbC5jb2xTcGFuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgcm93LnJvd1NwYW4gPSByb3dzLmxlbmd0aCAtIHJvdy5pbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50Q2VsbCkge1xuICAgICAgICAgICAgcGFyZW50Q2VsbC5jb2xTcGFuICs9IHRvdGFsQ29sU3BhbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yb3dzKCkge1xuICAgICAgICBjb25zdCByb3dzID0gdGhpcy5fZGF0YVJvd3ModGhpcy5kYXRhLCAwKTtcblxuICAgICAgICBpZiAodGhpcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fcHJlcGVuZEhlYWRlclJvd3Mocm93cyk7XG4gICAgICAgICAgICBsZXQgZm9vdGVyID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5jb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5mb290ZXJUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb290ZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2RmZGZkZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbHVtbi5mb290ZXJUZW1wbGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFnZ3JlZ2F0ZXMsIHRoaXMuYWdncmVnYXRlc1tjb2x1bW4uZmllbGRdKSlcbiAgICAgICAgICAgICAgICAgICAgfSwgY29sdW1uLmZvb3RlckNlbGxPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2RmZGZkZlwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzMzXCJcbiAgICAgICAgICAgICAgICB9LCBjb2x1bW4uZm9vdGVyQ2VsbE9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgICBjZWxsczogdGhpcy5fY3JlYXRlUGFkZGluZ0NlbGxzKHRoaXMuZ3JvdXBzLmxlbmd0aCkuY29uY2F0KGNlbGxzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxuXG4gICAgX2hlYWRlckRlcHRoKGNvbHVtbnMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gMTtcbiAgICAgICAgbGV0IG1heCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgY29sdW1ucy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uc1tpZHhdLmNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy5faGVhZGVyRGVwdGgoY29sdW1uc1tpZHhdLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHRlbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQgKyBtYXg7XG4gICAgfVxuXG4gICAgX2ZyZWV6ZVBhbmUoKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLl92aXNpYmxlQ29sdW1ucyh0aGlzLm9wdGlvbnMuY29sdW1ucyB8fCBbXSk7XG5cbiAgICAgICAgY29uc3QgY29sU3BsaXQgPSB0aGlzLl92aXNpYmxlQ29sdW1ucyh0aGlzLl90cmltQ29sdW1ucyh0aGlzLl9sZWFmQ29sdW1ucyhjb2x1bW5zLmZpbHRlcihmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4ubG9ja2VkO1xuICAgICAgICB9KSkpKS5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd1NwbGl0OiB0aGlzLl9oZWFkZXJEZXB0aChjb2x1bW5zKSxcbiAgICAgICAgICAgIGNvbFNwbGl0OiBjb2xTcGxpdCA/IGNvbFNwbGl0ICsgdGhpcy5ncm91cHMubGVuZ3RoIDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9jZWxsKGRhdGFJdGVtLCBjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IGNvbHVtbi52YWx1ZShkYXRhSXRlbSlcbiAgICAgICAgfSwgY29sdW1uLmNlbGxPcHRpb25zKTtcbiAgICB9XG5cbiAgICBfZGVwdGgoKSB7XG4gICAgICAgIGxldCBkZXB0aCA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaGllcmFyY2h5KSB7XG4gICAgICAgICAgICBkZXB0aCA9IHRoaXMuaGllcmFyY2h5LmRlcHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVwdGggPSB0aGlzLmdyb3Vwcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVwdGg7XG4gICAgfVxuXG4gICAgX2NvbHVtbnMoKSB7XG4gICAgICAgIGNvbnN0IGRlcHRoID0gdGhpcy5fZGVwdGgoKTtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGNyZWF0ZUFycmF5KGRlcHRoLCAoKSA9PiAoeyB3aWR0aDogMjAgfSkpO1xuXG4gICAgICAgIHJldHVybiBjb2x1bW5zLmNvbmNhdCh0aGlzLmNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoY29sdW1uLndpZHRoLCAxMCksXG4gICAgICAgICAgICAgICAgYXV0b1dpZHRoOiBjb2x1bW4ud2lkdGggPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2VsRXhwb3J0ZXI7XG4iLCJsZXQgY3VycmVudCA9IHtcbiAgICB0b1N0cmluZzogKHZhbHVlKSA9PiB2YWx1ZVxufTtcblxuY2xhc3MgSW50bFNlcnZpY2Uge1xuICAgIHN0YXRpYyByZWdpc3Rlcih1c2VySW1wbGVtZW50YXRpb24pIHtcbiAgICAgICAgY3VycmVudCA9IHVzZXJJbXBsZW1lbnRhdGlvbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9TdHJpbmcodmFsdWUsIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gY3VycmVudC50b1N0cmluZyh2YWx1ZSwgZm9ybWF0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGxTZXJ2aWNlOyIsImltcG9ydCBKU1ppcCBmcm9tICdAcHJvZ3Jlc3MvanN6aXAtZXNtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlWmlwKCkge1xuICAgIHJldHVybiBuZXcgSlNaaXAoKTtcbn1cbiIsIi8vIGRhdGUgcGFja2luZyB1dGlsaXRpZXMgZnJvbSBLZW5kbyBTcHJlYWRzaGVldFxuXG4vLyBKdWxpYW4gZGF5cyBhbGdvcml0aG1zIGZyb20gaHR0cDovL3d3dy5oZXJtZXRpYy5jaC9jYWxfc3R1ZC9qZG4uaHRtI2NvbXBcbmZ1bmN0aW9uIGRhdGVUb0p1bGlhbkRheXMoeSwgbSwgZCkge1xuICAgIHJldHVybiAoKDE0NjEgKiAoeSArIDQ4MDAgKyAoKG0gLSAxMykgLyAxMiB8IDApKSkgLyA0IHwgMCkgK1xuICAgICAgICAoKDM2NyAqIChtIC0gMSAtIDEyICogKChtIC0gMTMpIC8gMTIgfCAwKSkpIC8gMTIgfCAwKSAtXG4gICAgICAgICgoMyAqICgoKHkgKyA0OTAwICsgKChtIC0gMTMpIC8gMTIgfCAwKSkgLyAxMDAgfCAwKSkpIC8gNCB8IDApICtcbiAgICAgICAgZCAtIDMyMDc1O1xufVxuXG4vLyBUaGlzIHVzZXMgdGhlIEdvb2dsZSBTcHJlYWRzaGVldCBhcHByb2FjaDogdHJlYXQgMTg5OS0xMi0zMSBhcyBkYXkgMSwgYWxsb3dpbmcgdG8gYXZvaWRcbi8vIGltcGxlbWVudGluZyB0aGUgXCJMZWFwIFllYXIgQnVnXCIgeWV0IHN0aWxsIGJlIEV4Y2VsIGNvbXBhdGlibGUgZm9yIGRhdGVzIHN0YXJ0aW5nIDE5MDAtMDMtMDEuXG5jb25zdCBCQVNFX0RBVEUgPSBkYXRlVG9KdWxpYW5EYXlzKDE5MDAsIDAsIC0xKTtcblxuZnVuY3Rpb24gcGFja0RhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZVRvSnVsaWFuRGF5cyh5ZWFyLCBtb250aCwgZGF0ZSkgLSBCQVNFX0RBVEU7XG59XG5cbmZ1bmN0aW9uIHBhY2tUaW1lKGhoLCBtbSwgc3MsIG1zKSB7XG4gICAgcmV0dXJuIChoaCArIChtbSArIChzcyArIG1zIC8gMTAwMCkgLyA2MCkgLyA2MCkgLyAyNDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZVRvU2VyaWFsKGRhdGUpIHtcbiAgICBjb25zdCB0aW1lID0gcGFja1RpbWUoZGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpO1xuICAgIGNvbnN0IHNlcmlhbCA9IHBhY2tEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5nZXREYXRlKCkpO1xuICAgIHJldHVybiBzZXJpYWwgPCAwID8gc2VyaWFsIC0gMSArIHRpbWUgOiBzZXJpYWwgKyB0aW1lO1xufVxuIiwiaW1wb3J0IG1hcCBmcm9tICcuL3V0aWxzL21hcCc7XG5pbXBvcnQgY3JlYXRlWmlwIGZyb20gJy4vdXRpbHMvY3JlYXRlLXppcCc7XG5pbXBvcnQgSW50bFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9pbnRsLXNlcnZpY2UnO1xuaW1wb3J0IGRhdGVUb1NlcmlhbCBmcm9tICcuL3V0aWxzL3RpbWUnO1xuXG5jb25zdCBNSU1FX1RZUEUgPSBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0XCI7XG5jb25zdCBEQVRBX1VSTF9QUkVGSVggPSBgZGF0YToke01JTUVfVFlQRX07YmFzZTY0LGA7XG5jb25zdCBEQVRBX1VSTF9PUFRJT05TID0geyBjb21wcmVzc2lvbjogXCJERUZMQVRFXCIsIHR5cGU6IFwiYmFzZTY0XCIgfTtcbmNvbnN0IEJMT0JfT1BUSU9OUyA9IHsgY29tcHJlc3Npb246IFwiREVGTEFURVwiLCB0eXBlOiBcImJsb2JcIiB9O1xuY29uc3QgQVJSQVlCVUZGRVJfT1BUSU9OUyA9IHsgY29tcHJlc3Npb246IFwiREVGTEFURVwiLCB0eXBlOiBcImFycmF5YnVmZmVyXCIgfTtcblxuLyogZXNsaW50LWRpc2FibGUga2V5LXNwYWNpbmcsIG5vLWNvbmZ1c2luZy1hcnJvdywgbm8tY29uc3RhbnQtY29uZGl0aW9uLCBpbmRlbnQsIG5vLW5lc3RlZC10ZXJuYXJ5LCBjb25zaXN0ZW50LXJldHVybiAqL1xuXG5mdW5jdGlvbiB0b0RhdGFVUkkoY29udGVudCkge1xuICAgIHJldHVybiBEQVRBX1VSTF9QUkVGSVggKyBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKHRoaW5nLCBhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5pbmRleE9mKHRoaW5nKTtcbn1cblxuY29uc3QgcGFyc2VKU09OID0gSlNPTi5wYXJzZS5iaW5kKEpTT04pO1xuXG5mdW5jdGlvbiBFU0ModmFsKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWwpXG4gICAgICAgIC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgICAgICAucmVwbGFjZSgvXFxcIi9nLCBcIiZxdW90O1wiKVxuICAgICAgICAucmVwbGFjZSgvXFwnL2csIFwiJiMzOTtcIik7XG59XG5cbmZ1bmN0aW9uIHJlcGVhdChjb3VudCwgZnVuYykge1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICBzdHIgKz0gZnVuYyhpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gZm9yZWFjaChhcnIsIGZ1bmMpIHtcbiAgICBsZXQgc3RyID0gXCJcIjtcbiAgICBpZiAoYXJyICE9IG51bGwpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gZnVuYyhhcnJbaV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcnIgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXJyKS5mb3JFYWNoKChrZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gZnVuYyhhcnJba2V5XSwga2V5LCBpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbmNvbnN0IFhNTEhFQUQgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwieWVzXCI/Plxccic7XG5cbmNvbnN0IFJFTFMgPSBgJHtYTUxIRUFEfVxuICAgICAgICAgICAgPFJlbGF0aW9uc2hpcHMgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L3JlbGF0aW9uc2hpcHNcIj5cbiAgICAgICAgICAgICAgIDxSZWxhdGlvbnNoaXAgSWQ9XCJySWQzXCIgVHlwZT1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L3JlbGF0aW9uc2hpcHMvZXh0ZW5kZWQtcHJvcGVydGllc1wiIFRhcmdldD1cImRvY1Byb3BzL2FwcC54bWxcIi8+XG4gICAgICAgICAgICAgICA8UmVsYXRpb25zaGlwIElkPVwicklkMlwiIFR5cGU9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L3JlbGF0aW9uc2hpcHMvbWV0YWRhdGEvY29yZS1wcm9wZXJ0aWVzXCIgVGFyZ2V0PVwiZG9jUHJvcHMvY29yZS54bWxcIi8+XG4gICAgICAgICAgICAgICA8UmVsYXRpb25zaGlwIElkPVwicklkMVwiIFR5cGU9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL29mZmljZURvY3VtZW50XCIgVGFyZ2V0PVwieGwvd29ya2Jvb2sueG1sXCIvPlxuICAgICAgICAgICAgPC9SZWxhdGlvbnNoaXBzPmA7XG5cbmNvbnN0IENPUkUgPSAoeyBjcmVhdG9yLCBsYXN0TW9kaWZpZWRCeSwgY3JlYXRlZCwgbW9kaWZpZWQgfSkgPT4gYCR7WE1MSEVBRH1cbiA8Y3A6Y29yZVByb3BlcnRpZXMgeG1sbnM6Y3A9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L21ldGFkYXRhL2NvcmUtcHJvcGVydGllc1wiXG4gICB4bWxuczpkYz1cImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXCIgeG1sbnM6ZGN0ZXJtcz1cImh0dHA6Ly9wdXJsLm9yZy9kYy90ZXJtcy9cIlxuICAgeG1sbnM6ZGNtaXR5cGU9XCJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvXCIgeG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIj5cbiAgIDxkYzpjcmVhdG9yPiR7RVNDKGNyZWF0b3IpfTwvZGM6Y3JlYXRvcj5cbiAgIDxjcDpsYXN0TW9kaWZpZWRCeT4ke0VTQyhsYXN0TW9kaWZpZWRCeSl9PC9jcDpsYXN0TW9kaWZpZWRCeT5cbiAgIDxkY3Rlcm1zOmNyZWF0ZWQgeHNpOnR5cGU9XCJkY3Rlcm1zOlczQ0RURlwiPiR7RVNDKGNyZWF0ZWQpfTwvZGN0ZXJtczpjcmVhdGVkPlxuICAgPGRjdGVybXM6bW9kaWZpZWQgeHNpOnR5cGU9XCJkY3Rlcm1zOlczQ0RURlwiPiR7RVNDKG1vZGlmaWVkKX08L2RjdGVybXM6bW9kaWZpZWQ+XG48L2NwOmNvcmVQcm9wZXJ0aWVzPmA7XG5cbmNvbnN0IEFQUCA9ICh7IHNoZWV0cyB9KSA9PiBgJHtYTUxIRUFEfVxuPFByb3BlcnRpZXMgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9leHRlbmRlZC1wcm9wZXJ0aWVzXCIgeG1sbnM6dnQ9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9kb2NQcm9wc1ZUeXBlc1wiPlxuICA8QXBwbGljYXRpb24+TWljcm9zb2Z0IEV4Y2VsPC9BcHBsaWNhdGlvbj5cbiAgPERvY1NlY3VyaXR5PjA8L0RvY1NlY3VyaXR5PlxuICA8U2NhbGVDcm9wPmZhbHNlPC9TY2FsZUNyb3A+XG4gIDxIZWFkaW5nUGFpcnM+XG4gICAgPHZ0OnZlY3RvciBzaXplPVwiMlwiIGJhc2VUeXBlPVwidmFyaWFudFwiPlxuICAgICAgPHZ0OnZhcmlhbnQ+XG4gICAgICAgIDx2dDpscHN0cj5Xb3Jrc2hlZXRzPC92dDpscHN0cj5cbiAgICAgIDwvdnQ6dmFyaWFudD5cbiAgICAgIDx2dDp2YXJpYW50PlxuICAgICAgICA8dnQ6aTQ+JHtzaGVldHMubGVuZ3RofTwvdnQ6aTQ+XG4gICAgICA8L3Z0OnZhcmlhbnQ+XG4gICAgPC92dDp2ZWN0b3I+XG4gIDwvSGVhZGluZ1BhaXJzPlxuICA8VGl0bGVzT2ZQYXJ0cz5cbiAgICA8dnQ6dmVjdG9yIHNpemU9XCIke3NoZWV0cy5sZW5ndGh9XCIgYmFzZVR5cGU9XCJscHN0clwiPiR7XG4gICAgICBmb3JlYWNoKHNoZWV0cywgKHNoZWV0LCBpKSA9PlxuICAgICAgICBzaGVldC5vcHRpb25zLnRpdGxlXG4gICAgICAgICAgPyBgPHZ0Omxwc3RyPiR7RVNDKHNoZWV0Lm9wdGlvbnMudGl0bGUpfTwvdnQ6bHBzdHI+YFxuICAgICAgICAgIDogYDx2dDpscHN0cj5TaGVldCR7aSArIDF9PC92dDpscHN0cj5gXG4gICAgICApXG4gICAgfTwvdnQ6dmVjdG9yPlxuICA8L1RpdGxlc09mUGFydHM+XG4gIDxMaW5rc1VwVG9EYXRlPmZhbHNlPC9MaW5rc1VwVG9EYXRlPlxuICA8U2hhcmVkRG9jPmZhbHNlPC9TaGFyZWREb2M+XG4gIDxIeXBlcmxpbmtzQ2hhbmdlZD5mYWxzZTwvSHlwZXJsaW5rc0NoYW5nZWQ+XG4gIDxBcHBWZXJzaW9uPjE0LjAzMDA8L0FwcFZlcnNpb24+XG48L1Byb3BlcnRpZXM+YDtcblxuY29uc3QgQ09OVEVOVF9UWVBFUyA9ICh7IHNoZWV0Q291bnQsIGNvbW1lbnRGaWxlcywgZHJhd2luZ0ZpbGVzIH0pID0+IGAke1hNTEhFQUR9XG48VHlwZXMgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L2NvbnRlbnQtdHlwZXNcIj5cbiAgPERlZmF1bHQgRXh0ZW5zaW9uPVwicG5nXCIgQ29udGVudFR5cGU9XCJpbWFnZS9wbmdcIi8+XG4gIDxEZWZhdWx0IEV4dGVuc2lvbj1cImdpZlwiIENvbnRlbnRUeXBlPVwiaW1hZ2UvZ2lmXCIvPlxuICA8RGVmYXVsdCBFeHRlbnNpb249XCJqcGdcIiBDb250ZW50VHlwZT1cImltYWdlL2pwZWdcIi8+XG4gIDxEZWZhdWx0IEV4dGVuc2lvbj1cInJlbHNcIiBDb250ZW50VHlwZT1cImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1wYWNrYWdlLnJlbGF0aW9uc2hpcHMreG1sXCIgLz5cbiAgPERlZmF1bHQgRXh0ZW5zaW9uPVwieG1sXCIgQ29udGVudFR5cGU9XCJhcHBsaWNhdGlvbi94bWxcIiAvPlxuICA8RGVmYXVsdCBFeHRlbnNpb249XCJ2bWxcIiBDb250ZW50VHlwZT1cImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC52bWxEcmF3aW5nXCIvPlxuICA8T3ZlcnJpZGUgUGFydE5hbWU9XCIveGwvd29ya2Jvb2sueG1sXCIgQ29udGVudFR5cGU9XCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldC5tYWluK3htbFwiIC8+XG4gIDxPdmVycmlkZSBQYXJ0TmFtZT1cIi94bC9zdHlsZXMueG1sXCIgQ29udGVudFR5cGU9XCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zdHlsZXMreG1sXCIvPlxuICA8T3ZlcnJpZGUgUGFydE5hbWU9XCIveGwvc2hhcmVkU3RyaW5ncy54bWxcIiBDb250ZW50VHlwZT1cImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoYXJlZFN0cmluZ3MreG1sXCIvPlxuICAke3JlcGVhdChzaGVldENvdW50LCBpZHggPT5cbiAgICBgPE92ZXJyaWRlIFBhcnROYW1lPVwiL3hsL3dvcmtzaGVldHMvc2hlZXQke2lkeCArIDF9LnhtbFwiIENvbnRlbnRUeXBlPVwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwud29ya3NoZWV0K3htbFwiIC8+YCl9XG4gICR7Zm9yZWFjaChjb21tZW50RmlsZXMsIGZpbGVuYW1lID0+XG4gICAgYDxPdmVycmlkZSBQYXJ0TmFtZT1cIi94bC8ke2ZpbGVuYW1lfVwiIENvbnRlbnRUeXBlPVwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuY29tbWVudHMreG1sXCIvPmApfVxuICAke2ZvcmVhY2goZHJhd2luZ0ZpbGVzLCBmaWxlbmFtZSA9PlxuICAgIGA8T3ZlcnJpZGUgUGFydE5hbWU9XCIveGwvZHJhd2luZ3MvJHtmaWxlbmFtZX1cIiBDb250ZW50VHlwZT1cImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5kcmF3aW5nK3htbFwiLz5gKX1cbiAgPE92ZXJyaWRlIFBhcnROYW1lPVwiL2RvY1Byb3BzL2NvcmUueG1sXCIgQ29udGVudFR5cGU9XCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtcGFja2FnZS5jb3JlLXByb3BlcnRpZXMreG1sXCIgLz5cbiAgPE92ZXJyaWRlIFBhcnROYW1lPVwiL2RvY1Byb3BzL2FwcC54bWxcIiBDb250ZW50VHlwZT1cImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5leHRlbmRlZC1wcm9wZXJ0aWVzK3htbFwiIC8+XG48L1R5cGVzPmA7XG5cbmNvbnN0IFdPUktCT09LID0gKHsgc2hlZXRzLCBmaWx0ZXJOYW1lcywgdXNlck5hbWVzIH0pID0+IGAke1hNTEhFQUR9XG48d29ya2Jvb2sgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIiB4bWxuczpyPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwc1wiPlxuICA8ZmlsZVZlcnNpb24gYXBwTmFtZT1cInhsXCIgbGFzdEVkaXRlZD1cIjVcIiBsb3dlc3RFZGl0ZWQ9XCI1XCIgcnVwQnVpbGQ9XCI5MzAzXCIgLz5cbiAgPHdvcmtib29rUHIgZGVmYXVsdFRoZW1lVmVyc2lvbj1cIjEyNDIyNlwiIC8+XG4gIDxib29rVmlld3M+XG4gICAgPHdvcmtib29rVmlldyB4V2luZG93PVwiMjQwXCIgeVdpbmRvdz1cIjQ1XCIgd2luZG93V2lkdGg9XCIxODE5NVwiIHdpbmRvd0hlaWdodD1cIjc5OTVcIiAvPlxuICA8L2Jvb2tWaWV3cz5cbiAgPHNoZWV0cz5cbiAgJHtmb3JlYWNoKHNoZWV0cywgKHsgb3B0aW9ucyB9LCBpKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IG9wdGlvbnMubmFtZSB8fCBvcHRpb25zLnRpdGxlIHx8IGBTaGVldCR7aSArIDF9YDtcbiAgICByZXR1cm4gYDxzaGVldCBuYW1lPVwiJHtFU0MobmFtZSl9XCIgc2hlZXRJZD1cIiR7aSArIDF9XCIgcjppZD1cInJJZCR7aSArIDF9XCIgLz5gO1xuICB9KX1cbiAgPC9zaGVldHM+XG4gICR7ZmlsdGVyTmFtZXMubGVuZ3RoIHx8IHVzZXJOYW1lcy5sZW5ndGggPyBgXG4gICAgPGRlZmluZWROYW1lcz5cbiAgICAgICR7Zm9yZWFjaChmaWx0ZXJOYW1lcywgKGYpID0+IGBcbiAgICAgICAgIDxkZWZpbmVkTmFtZSBuYW1lPVwiX3hsbm0uX0ZpbHRlckRhdGFiYXNlXCIgaGlkZGVuPVwiMVwiIGxvY2FsU2hlZXRJZD1cIiR7Zi5sb2NhbFNoZWV0SWR9XCI+JHtFU0MocXVvdGVTaGVldChmLm5hbWUpKX0hJHtFU0MoZi5mcm9tKX06JHtFU0MoZi50byl9PC9kZWZpbmVkTmFtZT5gKX1cbiAgICAgICR7Zm9yZWFjaCh1c2VyTmFtZXMsIChmKSA9PiBgXG4gICAgICAgICA8ZGVmaW5lZE5hbWUgbmFtZT1cIiR7Zi5uYW1lfVwiIGhpZGRlbj1cIiR7Zi5oaWRkZW4gPyAxIDogMH1cIiAke2YubG9jYWxTaGVldElkICE9IG51bGwgPyBgbG9jYWxTaGVldElkPVwiJHtmLmxvY2FsU2hlZXRJZH1cImAgOiAnJ30+JHtFU0MoZi52YWx1ZSl9PC9kZWZpbmVkTmFtZT5gKX1cbiAgICA8L2RlZmluZWROYW1lcz5gIDogJyd9XG4gIDxjYWxjUHIgZnVsbENhbGNPbkxvYWQ9XCIxXCIgY2FsY0lkPVwiMTQ1NjIxXCIgLz5cbjwvd29ya2Jvb2s+YDtcblxuY29uc3QgV09SS1NIRUVUID0gKHtcbiAgICBmcm96ZW5Db2x1bW5zLFxuICAgIGZyb3plblJvd3MsXG4gICAgY29sdW1ucyxcbiAgICBkZWZhdWx0cyxcbiAgICBkYXRhLFxuICAgIGluZGV4LFxuICAgIG1lcmdlQ2VsbHMsXG4gICAgYXV0b0ZpbHRlcixcbiAgICBmaWx0ZXIsXG4gICAgc2hvd0dyaWRMaW5lcyxcbiAgICBoeXBlcmxpbmtzLFxuICAgIHZhbGlkYXRpb25zLFxuICAgIGRlZmF1bHRDZWxsU3R5bGVJZCxcbiAgICBydGwsXG4gICAgbGVnYWN5RHJhd2luZyxcbiAgICBkcmF3aW5nLFxuICAgIGxhc3RSb3csXG4gICAgbGFzdENvbFxufSkgPT4gYCR7WE1MSEVBRH1cbjx3b3Jrc2hlZXQgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIiB4bWxuczptYz1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9tYXJrdXAtY29tcGF0aWJpbGl0eS8yMDA2XCIgeG1sbnM6cj1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L3JlbGF0aW9uc2hpcHNcIiB4bWxuczp4MTRhYz1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vb2ZmaWNlL3NwcmVhZHNoZWV0bWwvMjAwOS85L2FjXCIgbWM6SWdub3JhYmxlPVwieDE0YWNcIj5cbiAgICR7bGFzdFJvdyAmJiBsYXN0Q29sID8gYDxkaW1lbnNpb24gcmVmPVwiQTE6JHtyZWYobGFzdFJvdyAtIDEsIGxhc3RDb2wgLSAxKX1cIiAvPmAgOiBcIlwifVxuXG4gICA8c2hlZXRWaWV3cz5cbiAgICAgPHNoZWV0VmlldyAkeyBydGwgPyAncmlnaHRUb0xlZnQ9XCIxXCInIDogJycgfSAke2luZGV4ID09PSAwID8gJ3RhYlNlbGVjdGVkPVwiMVwiJyA6ICcnfSB3b3JrYm9va1ZpZXdJZD1cIjBcIiAke3Nob3dHcmlkTGluZXMgPT09IGZhbHNlID8gJ3Nob3dHcmlkTGluZXM9XCIwXCInIDogJyd9PlxuICAgICAke2Zyb3plblJvd3MgfHwgZnJvemVuQ29sdW1ucyA/IGBcbiAgICAgICA8cGFuZSBzdGF0ZT1cImZyb3plblwiXG4gICAgICAgICAke2Zyb3plbkNvbHVtbnMgPyBgeFNwbGl0PVwiJHtmcm96ZW5Db2x1bW5zfVwiYCA6ICcnfVxuICAgICAgICAgJHtmcm96ZW5Sb3dzID8gYHlTcGxpdD1cIiR7ZnJvemVuUm93c31cImAgOiAnJ31cbiAgICAgICAgIHRvcExlZnRDZWxsPVwiJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgKGZyb3plbkNvbHVtbnMgfHwgMCkpICsgKChmcm96ZW5Sb3dzIHx8IDApICsgMSl9XCJcbiAgICAgICAvPmAgOiAnJ31cbiAgICAgPC9zaGVldFZpZXc+XG4gICA8L3NoZWV0Vmlld3M+XG5cbiAgIDxzaGVldEZvcm1hdFByIHgxNGFjOmR5RGVzY2VudD1cIjAuMjVcIiAkeyFkZWZhdWx0cy5za2lwQ3VzdG9tSGVpZ2h0ID8gJ2N1c3RvbUhlaWdodD1cIjFcIicgOiAnJ30gZGVmYXVsdFJvd0hlaWdodD1cIiR7ZGVmYXVsdHMucm93SGVpZ2h0ID8gZGVmYXVsdHMucm93SGVpZ2h0ICogMC43NSA6IDE1fVwiXG4gICAgICR7ZGVmYXVsdHMuY29sdW1uV2lkdGggPyBgZGVmYXVsdENvbFdpZHRoPVwiJHt0b1dpZHRoKGRlZmF1bHRzLmNvbHVtbldpZHRoKX1cImAgOiAnJ30gLz5cblxuICAgJHtkZWZhdWx0Q2VsbFN0eWxlSWQgIT0gbnVsbCB8fCAoY29sdW1ucyAmJiBjb2x1bW5zLmxlbmd0aCA+IDApID8gYFxuICAgICA8Y29scz5cbiAgICAgICAkeyFjb2x1bW5zIHx8ICFjb2x1bW5zLmxlbmd0aCA/IGBcbiAgICAgICAgIDxjb2wgbWluPVwiMVwiIG1heD1cIjE2Mzg0XCIgc3R5bGU9XCIke2RlZmF1bHRDZWxsU3R5bGVJZH1cIlxuICAgICAgICAgICAgICAke2RlZmF1bHRzLmNvbHVtbldpZHRoID8gYHdpZHRoPVwiJHt0b1dpZHRoKGRlZmF1bHRzLmNvbHVtbldpZHRoKX1cImAgOiAnJ30gLz4gYCA6ICcnfVxuICAgICAgICR7Zm9yZWFjaChjb2x1bW5zLCAoY29sdW1uLCBjaSkgPT4ge1xuICAgICAgICAgY29uc3QgY29sdW1uSW5kZXggPSB0eXBlb2YgY29sdW1uLmluZGV4ID09PSBcIm51bWJlclwiID8gY29sdW1uLmluZGV4ICsgMSA6IChjaSArIDEpO1xuICAgICAgICAgaWYgKGNvbHVtbi53aWR0aCA9PT0gMCkge1xuICAgICAgICAgICByZXR1cm4gYDxjb2wgJHtkZWZhdWx0Q2VsbFN0eWxlSWQgIT0gbnVsbCA/IGBzdHlsZT1cIiR7ZGVmYXVsdENlbGxTdHlsZUlkfVwiYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiJHtjb2x1bW5JbmRleH1cIiBtYXg9XCIke2NvbHVtbkluZGV4fVwiIGhpZGRlbj1cIjFcIiBjdXN0b21XaWR0aD1cIjFcIiAvPmA7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gYDxjb2wgJHtkZWZhdWx0Q2VsbFN0eWxlSWQgIT0gbnVsbCA/IGBzdHlsZT1cIiR7ZGVmYXVsdENlbGxTdHlsZUlkfVwiYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIiR7Y29sdW1uSW5kZXh9XCIgbWF4PVwiJHtjb2x1bW5JbmRleH1cIiBjdXN0b21XaWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICR7Y29sdW1uLmF1dG9XaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGB3aWR0aD1cIiR7KChjb2x1bW4ud2lkdGggKiA3ICsgNSkgLyA3ICogMjU2KSAvIDI1Nn1cIiBiZXN0Rml0PVwiMVwiYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGB3aWR0aD1cIiR7dG9XaWR0aChjb2x1bW4ud2lkdGgpfVwiYH0gLz5gO1xuICAgICAgIH0pfVxuICAgICA8L2NvbHM+YCA6ICcnfVxuXG4gICA8c2hlZXREYXRhPlxuICAgICAke2ZvcmVhY2goZGF0YSwgKHJvdywgcmkpID0+IHtcbiAgICAgICBjb25zdCByb3dJbmRleCA9IHR5cGVvZiByb3cuaW5kZXggPT09IFwibnVtYmVyXCIgPyByb3cuaW5kZXggKyAxIDogKHJpICsgMSk7XG4gICAgICAgcmV0dXJuIGBcbiAgICAgICAgIDxyb3cgcj1cIiR7cm93SW5kZXh9XCIgeDE0YWM6ZHlEZXNjZW50PVwiMC4yNVwiXG4gICAgICAgICAgICAgICR7cm93LmxldmVsID8gYG91dGxpbmVMZXZlbD1cIiR7cm93LmxldmVsfVwiYCA6ICcnfVxuICAgICAgICAgICAgICAke3Jvdy5oZWlnaHQgPT09IDAgPyAnaGlkZGVuPVwiMVwiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiByb3cuaGVpZ2h0ID8gYGh0PVwiJHt0b0hlaWdodChyb3cuaGVpZ2h0KX1cIiBjdXN0b21IZWlnaHQ9XCIxXCJgIDogXCJcIn0+XG4gICAgICAgICAgICR7Zm9yZWFjaChyb3cuZGF0YSwgKGNlbGwpID0+IGBcbiAgICAgICAgICAgICA8YyByPVwiJHtjZWxsLnJlZn1cIiAke2NlbGwuc3R5bGUgPyBgcz1cIiR7Y2VsbC5zdHlsZX1cImAgOiAnJ30gJHtjZWxsLnR5cGUgPyBgdD1cIiR7Y2VsbC50eXBlfVwiYCA6ICcnfT5cbiAgICAgICAgICAgICAgICR7Y2VsbC5mb3JtdWxhICE9IG51bGwgPyB3cml0ZUZvcm11bGEoY2VsbC5mb3JtdWxhKSA6ICcnfVxuICAgICAgICAgICAgICAgJHtjZWxsLnZhbHVlICE9IG51bGwgPyBgPHY+JHtFU0MoY2VsbC52YWx1ZSl9PC92PmAgOiAnJ31cbiAgICAgICAgICAgICA8L2M+YCl9XG4gICAgICAgICA8L3Jvdz5cbiAgICAgICBgO30pfVxuICAgPC9zaGVldERhdGE+XG5cbiAgICR7YXV0b0ZpbHRlciA/IGA8YXV0b0ZpbHRlciByZWY9XCIke2F1dG9GaWx0ZXIuZnJvbX06JHthdXRvRmlsdGVyLnRvfVwiLz5gXG4gICAgICAgICAgICAgICAgOiBmaWx0ZXIgPyBzcHJlYWRzaGVldEZpbHRlcnMoZmlsdGVyKSA6ICcnfVxuXG4gICAke21lcmdlQ2VsbHMubGVuZ3RoID8gYFxuICAgICA8bWVyZ2VDZWxscyBjb3VudD1cIiR7bWVyZ2VDZWxscy5sZW5ndGh9XCI+XG4gICAgICAgJHtmb3JlYWNoKG1lcmdlQ2VsbHMsIChyZWYpID0+IGA8bWVyZ2VDZWxsIHJlZj1cIiR7cmVmfVwiLz5gKX1cbiAgICAgPC9tZXJnZUNlbGxzPmAgOiAnJ31cblxuICAgJHt2YWxpZGF0aW9ucy5sZW5ndGggPyBgXG4gICAgIDxkYXRhVmFsaWRhdGlvbnM+XG4gICAgICAgJHtmb3JlYWNoKHZhbGlkYXRpb25zLCAodmFsKSA9PiBgXG4gICAgICAgICA8ZGF0YVZhbGlkYXRpb24gc3FyZWY9XCIke3ZhbC5zcXJlZi5qb2luKFwiIFwiKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2U9XCIke3ZhbC5zaG93RXJyb3JNZXNzYWdlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIiR7RVNDKHZhbC50eXBlKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICR7IHZhbC50eXBlICE9PSBcImxpc3RcIiA/IGBvcGVyYXRvcj1cIiR7RVNDKHZhbC5vcGVyYXRvcil9XCJgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dCbGFuaz1cIiR7dmFsLmFsbG93Qmxhbmt9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RHJvcERvd249XCIke3ZhbC5zaG93RHJvcERvd259XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAke3ZhbC5lcnJvciA/IGBlcnJvcj1cIiR7RVNDKHZhbC5lcnJvcil9XCJgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgJHt2YWwuZXJyb3JUaXRsZSA/IGBlcnJvclRpdGxlPVwiJHtFU0ModmFsLmVycm9yVGl0bGUpfVwiYCA6ICcnfT5cbiAgICAgICAgICAgJHt2YWwuZm9ybXVsYTEgPyBgPGZvcm11bGExPiR7RVNDKHZhbC5mb3JtdWxhMSl9PC9mb3JtdWxhMT5gIDogJyd9XG4gICAgICAgICAgICR7dmFsLmZvcm11bGEyID8gYDxmb3JtdWxhMj4ke0VTQyh2YWwuZm9ybXVsYTIpfTwvZm9ybXVsYTI+YCA6ICcnfVxuICAgICAgICAgPC9kYXRhVmFsaWRhdGlvbj5gKX1cbiAgICAgPC9kYXRhVmFsaWRhdGlvbnM+YCA6ICcnfVxuXG4gICAke2h5cGVybGlua3MubGVuZ3RoID8gYFxuICAgICA8aHlwZXJsaW5rcz5cbiAgICAgICAke2ZvcmVhY2goaHlwZXJsaW5rcywgKGxpbmspID0+IGBcbiAgICAgICAgIDxoeXBlcmxpbmsgcmVmPVwiJHtsaW5rLnJlZn1cIiByOmlkPVwiJHtsaW5rLnJJZH1cIi8+YCl9XG4gICAgIDwvaHlwZXJsaW5rcz5gIDogJyd9XG5cbiAgIDxwYWdlTWFyZ2lucyBsZWZ0PVwiMC43XCIgcmlnaHQ9XCIwLjdcIiB0b3A9XCIwLjc1XCIgYm90dG9tPVwiMC43NVwiIGhlYWRlcj1cIjAuM1wiIGZvb3Rlcj1cIjAuM1wiIC8+XG4gICAke2RyYXdpbmcgPyBgPGRyYXdpbmcgcjppZD1cIiR7ZHJhd2luZ31cIi8+YCA6ICcnfVxuICAgJHtsZWdhY3lEcmF3aW5nID8gYDxsZWdhY3lEcmF3aW5nIHI6aWQ9XCIke2xlZ2FjeURyYXdpbmd9XCIvPmAgOiAnJ31cbjwvd29ya3NoZWV0PmA7XG5cbmNvbnN0IFdPUktCT09LX1JFTFMgPSAoeyBjb3VudCB9KSA9PiBgJHtYTUxIRUFEfVxuPFJlbGF0aW9uc2hpcHMgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L3JlbGF0aW9uc2hpcHNcIj5cbiAgJHtyZXBlYXQoY291bnQsIChpZHgpID0+IGBcbiAgICA8UmVsYXRpb25zaGlwIElkPVwicklkJHtpZHggKyAxfVwiIFR5cGU9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL3dvcmtzaGVldFwiIFRhcmdldD1cIndvcmtzaGVldHMvc2hlZXQke2lkeCArIDF9LnhtbFwiIC8+YCl9XG4gIDxSZWxhdGlvbnNoaXAgSWQ9XCJySWQke2NvdW50ICsgMX1cIiBUeXBlPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9zdHlsZXNcIiBUYXJnZXQ9XCJzdHlsZXMueG1sXCIgLz5cbiAgPFJlbGF0aW9uc2hpcCBJZD1cInJJZCR7Y291bnQgKyAyfVwiIFR5cGU9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL3NoYXJlZFN0cmluZ3NcIiBUYXJnZXQ9XCJzaGFyZWRTdHJpbmdzLnhtbFwiIC8+XG48L1JlbGF0aW9uc2hpcHM+YDtcblxuY29uc3QgV09SS1NIRUVUX1JFTFMgPSAoeyBoeXBlcmxpbmtzLCBjb21tZW50cywgc2hlZXRJbmRleCwgZHJhd2luZ3MgfSkgPT4gYCR7WE1MSEVBRH1cbjxSZWxhdGlvbnNoaXBzIHhtbG5zPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9yZWxhdGlvbnNoaXBzXCI+XG4gICR7Zm9yZWFjaChoeXBlcmxpbmtzLCAobGluaykgPT4gYFxuICAgIDxSZWxhdGlvbnNoaXAgSWQ9XCIke2xpbmsucklkfVwiIFR5cGU9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL2h5cGVybGlua1wiIFRhcmdldD1cIiR7RVNDKGxpbmsudGFyZ2V0KX1cIiBUYXJnZXRNb2RlPVwiRXh0ZXJuYWxcIiAvPmApfVxuICAkeyFjb21tZW50cy5sZW5ndGggPyAnJyA6IGBcbiAgICA8UmVsYXRpb25zaGlwIElkPVwiY29tbWVudCR7c2hlZXRJbmRleH1cIiBUeXBlPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9jb21tZW50c1wiIFRhcmdldD1cIi4uL2NvbW1lbnRzJHtzaGVldEluZGV4fS54bWxcIi8+XG4gICAgPFJlbGF0aW9uc2hpcCBJZD1cInZtbCR7c2hlZXRJbmRleH1cIiBUeXBlPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy92bWxEcmF3aW5nXCIgVGFyZ2V0PVwiLi4vZHJhd2luZ3Mvdm1sRHJhd2luZyR7c2hlZXRJbmRleH0udm1sXCIvPmB9XG4gICR7IWRyYXdpbmdzLmxlbmd0aCA/ICcnIDogYFxuICAgIDxSZWxhdGlvbnNoaXAgSWQ9XCJkcncke3NoZWV0SW5kZXh9XCIgVHlwZT1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L3JlbGF0aW9uc2hpcHMvZHJhd2luZ1wiIFRhcmdldD1cIi4uL2RyYXdpbmdzL2RyYXdpbmcke3NoZWV0SW5kZXh9LnhtbFwiLz5gfVxuPC9SZWxhdGlvbnNoaXBzPmA7XG5cbmNvbnN0IENPTU1FTlRTX1hNTCA9ICh7IGNvbW1lbnRzIH0pID0+IGAke1hNTEhFQUR9XG48Y29tbWVudHMgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIj5cbiAgPGF1dGhvcnM+XG4gICAgPGF1dGhvcj48L2F1dGhvcj5cbiAgPC9hdXRob3JzPlxuICA8Y29tbWVudExpc3Q+XG4gICAgJHtmb3JlYWNoKGNvbW1lbnRzLCBjb21tZW50ID0+IGBcbiAgICAgIDxjb21tZW50IHJlZj1cIiR7Y29tbWVudC5yZWZ9XCIgYXV0aG9ySWQ9XCIwXCI+XG4gICAgICAgIDx0ZXh0PlxuICAgICAgICAgIDxyPlxuICAgICAgICAgICAgPHJQcj5cbiAgICAgICAgICAgICAgPHN6IHZhbD1cIjhcIi8+XG4gICAgICAgICAgICAgIDxjb2xvciBpbmRleGVkPVwiODFcIi8+XG4gICAgICAgICAgICAgIDxyRm9udCB2YWw9XCJUYWhvbWFcIi8+XG4gICAgICAgICAgICAgIDxjaGFyc2V0IHZhbD1cIjFcIi8+XG4gICAgICAgICAgICA8L3JQcj5cbiAgICAgICAgICAgIDx0PiR7RVNDKGNvbW1lbnQudGV4dCl9PC90PlxuICAgICAgICAgIDwvcj5cbiAgICAgICAgPC90ZXh0PlxuICAgICAgPC9jb21tZW50PmApfVxuICA8L2NvbW1lbnRMaXN0PlxuPC9jb21tZW50cz5gO1xuXG5jb25zdCBMRUdBQ1lfRFJBV0lORyA9ICh7IGNvbW1lbnRzIH0pID0+IGBcXFxuPHhtbCB4bWxuczp2PVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWxcIlxuICAgICB4bWxuczpvPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTpvZmZpY2U6b2ZmaWNlXCJcbiAgICAgeG1sbnM6eD1cInVybjpzY2hlbWFzLW1pY3Jvc29mdC1jb206b2ZmaWNlOmV4Y2VsXCI+XG4gIDx2OnNoYXBldHlwZSBjb29yZHNpemU9XCIyMTYwMCwyMTYwMFwiIGlkPVwiX3gwMDAwX3QyMDJcIiBwYXRoPVwibSxsLDIxNjAwcjIxNjAwLGwyMTYwMCx4ZVwiPlxuICAgIDx2OnN0cm9rZSBqb2luc3R5bGU9XCJtaXRlclwiLz5cbiAgICA8djpwYXRoIGdyYWRpZW50c2hhcGVvaz1cInRcIiBvOmNvbm5lY3R0eXBlPVwicmVjdFwiLz5cbiAgPC92OnNoYXBldHlwZT5cbiAgJHtmb3JlYWNoKGNvbW1lbnRzLCBjb21tZW50ID0+IGBcbiAgICA8djpzaGFwZSB0eXBlPVwiI194MDAwMF90MjAyXCIgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW5cIiBmaWxsY29sb3I9XCIjZmZmZmUxXCIgbzppbnNldG1vZGU9XCJhdXRvXCI+XG4gICAgICA8djpzaGFkb3cgb249XCJ0XCIgY29sb3I9XCJibGFja1wiIG9ic2N1cmVkPVwidFwiLz5cbiAgICAgIDx4OkNsaWVudERhdGEgT2JqZWN0VHlwZT1cIk5vdGVcIj5cbiAgICAgICAgPHg6TW92ZVdpdGhDZWxscy8+XG4gICAgICAgIDx4OlNpemVXaXRoQ2VsbHMvPlxuICAgICAgICA8eDpBbmNob3I+JHtjb21tZW50LmFuY2hvcn08L3g6QW5jaG9yPlxuICAgICAgICA8eDpBdXRvRmlsbD5GYWxzZTwveDpBdXRvRmlsbD5cbiAgICAgICAgPHg6Um93PiR7Y29tbWVudC5yb3d9PC94OlJvdz5cbiAgICAgICAgPHg6Q29sdW1uPiR7Y29tbWVudC5jb2x9PC94OkNvbHVtbj5cbiAgICAgIDwveDpDbGllbnREYXRhPlxuICAgIDwvdjpzaGFwZT5gKX1cbjwveG1sPmA7XG5cbmNvbnN0IERSQVdJTkdTX1hNTCA9IChkcmF3aW5ncykgPT4gYCR7WE1MSEVBRH1cbjx4ZHI6d3NEciB4bWxuczp4ZHI9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvZHJhd2luZ21sLzIwMDYvc3ByZWFkc2hlZXREcmF3aW5nXCJcbiAgICAgICAgICB4bWxuczphPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL2RyYXdpbmdtbC8yMDA2L21haW5cIlxuICAgICAgICAgIHhtbG5zOnI9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzXCI+XG4gICR7Zm9yZWFjaChkcmF3aW5ncywgKGRyYXdpbmcsIGluZGV4KSA9PiBgXG4gICAgPHhkcjpvbmVDZWxsQW5jaG9yIGVkaXRBcz1cIm9uZUNlbGxcIj5cbiAgICAgIDx4ZHI6ZnJvbT5cbiAgICAgICAgPHhkcjpjb2w+JHtkcmF3aW5nLmNvbH08L3hkcjpjb2w+XG4gICAgICAgIDx4ZHI6Y29sT2ZmPiR7ZHJhd2luZy5jb2xPZmZzZXR9PC94ZHI6Y29sT2ZmPlxuICAgICAgICA8eGRyOnJvdz4ke2RyYXdpbmcucm93fTwveGRyOnJvdz5cbiAgICAgICAgPHhkcjpyb3dPZmY+JHtkcmF3aW5nLnJvd09mZnNldH08L3hkcjpyb3dPZmY+XG4gICAgICA8L3hkcjpmcm9tPlxuICAgICAgPHhkcjpleHQgY3g9XCIke2RyYXdpbmcud2lkdGh9XCIgY3k9XCIke2RyYXdpbmcuaGVpZ2h0fVwiIC8+XG4gICAgICA8eGRyOnBpYz5cbiAgICAgICAgPHhkcjpudlBpY1ByPlxuICAgICAgICAgIDx4ZHI6Y052UHIgaWQ9XCIke2luZGV4ICsgMX1cIiBuYW1lPVwiUGljdHVyZSAke2luZGV4ICsgMX1cIi8+XG4gICAgICAgICAgPHhkcjpjTnZQaWNQci8+XG4gICAgICAgIDwveGRyOm52UGljUHI+XG4gICAgICAgIDx4ZHI6YmxpcEZpbGw+XG4gICAgICAgICAgPGE6YmxpcCByOmVtYmVkPVwiJHtkcmF3aW5nLmltYWdlSWR9XCIvPlxuICAgICAgICAgIDxhOnN0cmV0Y2g+XG4gICAgICAgICAgICA8YTpmaWxsUmVjdC8+XG4gICAgICAgICAgPC9hOnN0cmV0Y2g+XG4gICAgICAgIDwveGRyOmJsaXBGaWxsPlxuICAgICAgICA8eGRyOnNwUHI+XG4gICAgICAgICAgPGE6cHJzdEdlb20gcHJzdD1cInJlY3RcIj5cbiAgICAgICAgICAgIDxhOmF2THN0Lz5cbiAgICAgICAgICA8L2E6cHJzdEdlb20+XG4gICAgICAgIDwveGRyOnNwUHI+XG4gICAgICA8L3hkcjpwaWM+XG4gICAgICA8eGRyOmNsaWVudERhdGEvPlxuICAgIDwveGRyOm9uZUNlbGxBbmNob3I+YCl9XG48L3hkcjp3c0RyPmA7XG5cbmNvbnN0IERSQVdJTkdTX1JFTFNfWE1MID0gKHJlbHMpID0+IGAke1hNTEhFQUR9XG48UmVsYXRpb25zaGlwcyB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9wYWNrYWdlLzIwMDYvcmVsYXRpb25zaGlwc1wiPlxuICAke2ZvcmVhY2gocmVscywgcmVsID0+IGBcbiAgICA8UmVsYXRpb25zaGlwIElkPVwiJHtyZWwucklkfVwiIFR5cGU9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL2ltYWdlXCIgVGFyZ2V0PVwiJHtyZWwudGFyZ2V0fVwiLz5gKX1cbjwvUmVsYXRpb25zaGlwcz5gO1xuXG5jb25zdCBTSEFSRURfU1RSSU5HUyA9ICh7IGNvdW50LCB1bmlxdWVDb3VudCwgaW5kZXhlcyB9KSA9PiBgJHtYTUxIRUFEfVxuPHNzdCB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9zcHJlYWRzaGVldG1sLzIwMDYvbWFpblwiIGNvdW50PVwiJHtjb3VudH1cIiB1bmlxdWVDb3VudD1cIiR7dW5pcXVlQ291bnR9XCI+XG4gICR7Zm9yZWFjaChPYmplY3Qua2V5cyhpbmRleGVzKSwgKGluZGV4KSA9PiBgXG4gICAgPHNpPjx0IHhtbDpzcGFjZT1cInByZXNlcnZlXCI+JHtFU0MoaW5kZXguc3Vic3RyaW5nKDEpKX08L3Q+PC9zaT5gKX1cbjwvc3N0PmA7XG5cbmNvbnN0IFNUWUxFUyA9ICh7XG4gICAgZm9ybWF0cyxcbiAgICBmb250cyxcbiAgICBmaWxscyxcbiAgICBib3JkZXJzLFxuICAgIHN0eWxlc1xufSkgPT4gYCR7WE1MSEVBRH1cbjxzdHlsZVNoZWV0XG4gICAgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW5cIlxuICAgIHhtbG5zOm1jPVwiaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL21hcmt1cC1jb21wYXRpYmlsaXR5LzIwMDZcIlxuICAgIG1jOklnbm9yYWJsZT1cIngxNGFjXCJcbiAgICB4bWxuczp4MTRhYz1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vb2ZmaWNlL3NwcmVhZHNoZWV0bWwvMjAwOS85L2FjXCI+XG4gIDxudW1GbXRzIGNvdW50PVwiJHtmb3JtYXRzLmxlbmd0aH1cIj5cbiAgJHtmb3JlYWNoKGZvcm1hdHMsIChmb3JtYXQsIGZpKSA9PiBgXG4gICAgPG51bUZtdCBmb3JtYXRDb2RlPVwiJHtFU0MoZm9ybWF0LmZvcm1hdCl9XCIgbnVtRm10SWQ9XCIkezE2NSArIGZpfVwiIC8+YCl9XG4gIDwvbnVtRm10cz5cbiAgPGZvbnRzIGNvdW50PVwiJHtmb250cy5sZW5ndGggKyAxfVwiIHgxNGFjOmtub3duRm9udHM9XCIxXCI+XG4gICAgPGZvbnQ+XG4gICAgICAgPHN6IHZhbD1cIjExXCIgLz5cbiAgICAgICA8Y29sb3IgdGhlbWU9XCIxXCIgLz5cbiAgICAgICA8bmFtZSB2YWw9XCJDYWxpYnJpXCIgLz5cbiAgICAgICA8ZmFtaWx5IHZhbD1cIjJcIiAvPlxuICAgICAgIDxzY2hlbWUgdmFsPVwibWlub3JcIiAvPlxuICAgIDwvZm9udD5cbiAgICAke2ZvcmVhY2goZm9udHMsIChmb250KSA9PiBgXG4gICAgPGZvbnQ+XG4gICAgICAke2ZvbnQuYm9sZCA/ICc8Yi8+JyA6ICcnfVxuICAgICAgJHtmb250Lml0YWxpYyA/ICc8aS8+JyA6ICcnfVxuICAgICAgJHtmb250LnVuZGVybGluZSA/ICc8dS8+JyA6ICcnfVxuICAgICAgPHN6IHZhbD1cIiR7Zm9udC5mb250U2l6ZSB8fCAxMX1cIiAvPlxuICAgICAgJHtmb250LmNvbG9yID8gYDxjb2xvciByZ2I9XCIke0VTQyhmb250LmNvbG9yKX1cIiAvPmAgOiAnPGNvbG9yIHRoZW1lPVwiMVwiIC8+J31cbiAgICAgICR7Zm9udC5mb250RmFtaWx5ID8gYFxuICAgICAgICA8bmFtZSB2YWw9XCIke0VTQyhmb250LmZvbnRGYW1pbHkpfVwiIC8+XG4gICAgICAgIDxmYW1pbHkgdmFsPVwiMlwiIC8+XG4gICAgICBgIDogYFxuICAgICAgICA8bmFtZSB2YWw9XCJDYWxpYnJpXCIgLz5cbiAgICAgICAgPGZhbWlseSB2YWw9XCIyXCIgLz5cbiAgICAgICAgPHNjaGVtZSB2YWw9XCJtaW5vclwiIC8+XG4gICAgICBgfVxuICAgIDwvZm9udD5gKX1cbiAgPC9mb250cz5cbiAgPGZpbGxzIGNvdW50PVwiJHtmaWxscy5sZW5ndGggKyAyfVwiPlxuICAgICAgPGZpbGw+PHBhdHRlcm5GaWxsIHBhdHRlcm5UeXBlPVwibm9uZVwiLz48L2ZpbGw+XG4gICAgICA8ZmlsbD48cGF0dGVybkZpbGwgcGF0dGVyblR5cGU9XCJncmF5MTI1XCIvPjwvZmlsbD5cbiAgICAke2ZvcmVhY2goZmlsbHMsIChmaWxsKSA9PiBgXG4gICAgICAke2ZpbGwuYmFja2dyb3VuZCA/IGBcbiAgICAgICAgPGZpbGw+XG4gICAgICAgICAgPHBhdHRlcm5GaWxsIHBhdHRlcm5UeXBlPVwic29saWRcIj5cbiAgICAgICAgICAgICAgPGZnQ29sb3IgcmdiPVwiJHtFU0MoZmlsbC5iYWNrZ3JvdW5kKX1cIi8+XG4gICAgICAgICAgPC9wYXR0ZXJuRmlsbD5cbiAgICAgICAgPC9maWxsPlxuICAgICAgYCA6ICcnfWApfVxuICA8L2ZpbGxzPlxuICA8Ym9yZGVycyBjb3VudD1cIiR7Ym9yZGVycy5sZW5ndGggKyAxfVwiPlxuICAgIDxib3JkZXI+PGxlZnQvPjxyaWdodC8+PHRvcC8+PGJvdHRvbS8+PGRpYWdvbmFsLz48L2JvcmRlcj5cbiAgICAke2ZvcmVhY2goYm9yZGVycywgYm9yZGVyVGVtcGxhdGUpfVxuICA8L2JvcmRlcnM+XG4gIDxjZWxsU3R5bGVYZnMgY291bnQ9XCIxXCI+XG4gICAgPHhmIGJvcmRlcklkPVwiMFwiIGZpbGxJZD1cIjBcIiBmb250SWQ9XCIwXCIgLz5cbiAgPC9jZWxsU3R5bGVYZnM+XG4gIDxjZWxsWGZzIGNvdW50PVwiJHtzdHlsZXMubGVuZ3RoICsgMX1cIj5cbiAgICA8eGYgbnVtRm10SWQ9XCIwXCIgZm9udElkPVwiMFwiIGZpbGxJZD1cIjBcIiBib3JkZXJJZD1cIjBcIiB4ZklkPVwiMFwiIC8+XG4gICAgJHtmb3JlYWNoKHN0eWxlcywgKHN0eWxlKSA9PiBgXG4gICAgICA8eGYgeGZJZD1cIjBcIlxuICAgICAgICAgICR7c3R5bGUuZm9udElkID8gYGZvbnRJZD1cIiR7c3R5bGUuZm9udElkfVwiIGFwcGx5Rm9udD1cIjFcImAgOiAnJ31cbiAgICAgICAgICAke3N0eWxlLmZpbGxJZCA/IGBmaWxsSWQ9XCIke3N0eWxlLmZpbGxJZH1cIiBhcHBseUZpbGw9XCIxXCJgIDogJyd9XG4gICAgICAgICAgJHtzdHlsZS5udW1GbXRJZCA/IGBudW1GbXRJZD1cIiR7c3R5bGUubnVtRm10SWR9XCIgYXBwbHlOdW1iZXJGb3JtYXQ9XCIxXCJgIDogJyd9XG4gICAgICAgICAgJHtzdHlsZS50ZXh0QWxpZ24gfHwgc3R5bGUudmVydGljYWxBbGlnbiB8fCBzdHlsZS53cmFwID8gJ2FwcGx5QWxpZ25tZW50PVwiMVwiJyA6ICcnfVxuICAgICAgICAgICR7c3R5bGUuYm9yZGVySWQgPyBgYm9yZGVySWQ9XCIke3N0eWxlLmJvcmRlcklkfVwiIGFwcGx5Qm9yZGVyPVwiMVwiYCA6ICcnfT5cbiAgICAgICAgJHtzdHlsZS50ZXh0QWxpZ24gfHwgc3R5bGUudmVydGljYWxBbGlnbiB8fCBzdHlsZS53cmFwID8gYFxuICAgICAgICA8YWxpZ25tZW50XG4gICAgICAgICAgJHtzdHlsZS50ZXh0QWxpZ24gPyBgaG9yaXpvbnRhbD1cIiR7RVNDKHN0eWxlLnRleHRBbGlnbil9XCJgIDogJyd9XG4gICAgICAgICAgJHtzdHlsZS52ZXJ0aWNhbEFsaWduID8gYHZlcnRpY2FsPVwiJHtFU0Moc3R5bGUudmVydGljYWxBbGlnbil9XCJgIDogJyd9XG4gICAgICAgICAgJHtzdHlsZS5pbmRlbnQgPyBgaW5kZW50PVwiJHtFU0Moc3R5bGUuaW5kZW50KX1cImAgOiAnJ31cbiAgICAgICAgICAke3N0eWxlLndyYXAgPyAnd3JhcFRleHQ9XCIxXCInIDogJyd9IC8+XG4gICAgICAgIGAgOiAnJ31cbiAgICAgIDwveGY+XG4gICAgYCl9XG4gIDwvY2VsbFhmcz5cbiAgPGNlbGxTdHlsZXMgY291bnQ9XCIxXCI+XG4gICAgPGNlbGxTdHlsZSBuYW1lPVwiTm9ybWFsXCIgeGZJZD1cIjBcIiBidWlsdGluSWQ9XCIwXCIvPlxuICA8L2NlbGxTdHlsZXM+XG4gIDxkeGZzIGNvdW50PVwiMFwiIC8+XG4gIDx0YWJsZVN0eWxlcyBjb3VudD1cIjBcIiBkZWZhdWx0VGFibGVTdHlsZT1cIlRhYmxlU3R5bGVNZWRpdW0yXCIgZGVmYXVsdFBpdm90U3R5bGU9XCJQaXZvdFN0eWxlTWVkaXVtOVwiIC8+XG48L3N0eWxlU2hlZXQ+YDtcblxuZnVuY3Rpb24gd3JpdGVGb3JtdWxhKGZvcm11bGEpIHtcbiAgICBpZiAodHlwZW9mIGZvcm11bGEgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYDxmPiR7RVNDKGZvcm11bGEpfTwvZj5gO1xuICAgIH1cbiAgICAvLyBhcnJheSBmb3JtdWxhc1xuICAgIHJldHVybiBgPGYgdD1cImFycmF5XCIgcmVmPVwiJHtmb3JtdWxhLnJlZn1cIj4ke0VTQyhmb3JtdWxhLnNyYyl9PC9mPmA7XG59XG5cbmZ1bmN0aW9uIG51bUNoYXIoY29sSW5kZXgpIHtcbiAgIGNvbnN0IGxldHRlciA9IE1hdGguZmxvb3IoY29sSW5kZXggLyAyNikgLSAxO1xuXG4gICByZXR1cm4gKGxldHRlciA+PSAwID8gbnVtQ2hhcihsZXR0ZXIpIDogXCJcIikgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgKGNvbEluZGV4ICUgMjYpKTtcbn1cblxuZnVuY3Rpb24gcmVmKHJvd0luZGV4LCBjb2xJbmRleCkge1xuICAgIHJldHVybiBudW1DaGFyKGNvbEluZGV4KSArIChyb3dJbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiAkcmVmKHJvd0luZGV4LCBjb2xJbmRleCkge1xuICAgIHJldHVybiBcIiRcIiArIG51bUNoYXIoY29sSW5kZXgpICsgXCIkXCIgKyAocm93SW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUm93SW5kZXgob3B0aW9ucykge1xuICAgIGNvbnN0IGZyb3plblJvd3MgPSBvcHRpb25zLmZyb3plblJvd3MgfHwgKG9wdGlvbnMuZnJlZXplUGFuZSB8fCB7fSkucm93U3BsaXQgfHwgMTtcbiAgICByZXR1cm4gZnJvemVuUm93cyAtIDE7XG59XG5cbmZ1bmN0aW9uIHRvV2lkdGgocHgpIHtcbiAgICBjb25zdCBtYXhpbXVtRGlnaXRXaWR0aCA9IDc7XG4gICAgcmV0dXJuIChweCAvIG1heGltdW1EaWdpdFdpZHRoKSAtIChNYXRoLmZsb29yKDEyOCAvIG1heGltdW1EaWdpdFdpZHRoKSAvIDI1Nik7XG59XG5cbmZ1bmN0aW9uIHRvSGVpZ2h0KHB4KSB7XG4gICAgcmV0dXJuIHB4ICogMC43NTtcbn1cblxuZnVuY3Rpb24gc3RyaXBGdW5ueUNoYXJzKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgICAgICAgLnJlcGxhY2UoL1tcXHgwMC1cXHgwOVxceDBCXFx4MENcXHgwRS1cXHgxRl0vZywgXCJcIikgLy8gbGVhdmUgQ1JMRiBpblxuICAgICAgICAucmVwbGFjZSgvXFxyP1xcbi9nLCBcIlxcclxcblwiKTsgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIExGIGlzIHByZWNlZGVkIGJ5IENSXG59XG5cbmNsYXNzIFdvcmtzaGVldCB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBzaGFyZWRTdHJpbmdzLCBzdHlsZXMsIGJvcmRlcnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5fc3RyaW5ncyA9IHNoYXJlZFN0cmluZ3M7XG4gICAgICAgIHRoaXMuX3N0eWxlcyA9IHN0eWxlcztcbiAgICAgICAgdGhpcy5fYm9yZGVycyA9IGJvcmRlcnM7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRpb25zID0ge307XG4gICAgICAgIHRoaXMuX2NvbW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuX2RyYXdpbmdzID0gb3B0aW9ucy5kcmF3aW5ncyB8fCBbXTtcbiAgICAgICAgdGhpcy5faHlwZXJsaW5rcyA9ICh0aGlzLm9wdGlvbnMuaHlwZXJsaW5rcyB8fCBbXSkubWFwKFxuICAgICAgICAgICAgKGxpbmssIGkpID0+IE9iamVjdC5hc3NpZ24oe30sIGxpbmssIHsgcklkOiBgbGluayR7aX1gIH0pKTtcbiAgICB9XG5cbiAgICByZWxzVG9YTUwoKSB7XG4gICAgICAgIGNvbnN0IGh5cGVybGlua3MgPSB0aGlzLl9oeXBlcmxpbmtzO1xuICAgICAgICBjb25zdCBjb21tZW50cyA9IHRoaXMuX2NvbW1lbnRzO1xuICAgICAgICBjb25zdCBkcmF3aW5ncyA9IHRoaXMuX2RyYXdpbmdzO1xuXG4gICAgICAgIGlmIChoeXBlcmxpbmtzLmxlbmd0aCB8fCBjb21tZW50cy5sZW5ndGggfHwgZHJhd2luZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gV09SS1NIRUVUX1JFTFMoe1xuICAgICAgICAgICAgICAgIGh5cGVybGlua3MgOiBoeXBlcmxpbmtzLFxuICAgICAgICAgICAgICAgIGNvbW1lbnRzICAgOiBjb21tZW50cyxcbiAgICAgICAgICAgICAgICBzaGVldEluZGV4IDogdGhpcy5vcHRpb25zLnNoZWV0SW5kZXgsXG4gICAgICAgICAgICAgICAgZHJhd2luZ3MgICA6IGRyYXdpbmdzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvWE1MKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1lcmdlQ2VsbHMgPSB0aGlzLm9wdGlvbnMubWVyZ2VkQ2VsbHMgfHwgW107XG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLm9wdGlvbnMucm93cyB8fCBbXTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGluZmxhdGUocm93cywgbWVyZ2VDZWxscyk7XG5cbiAgICAgICAgdGhpcy5fcmVhZENlbGxzKGRhdGEpO1xuXG4gICAgICAgIGxldCBhdXRvRmlsdGVyID0gdGhpcy5vcHRpb25zLmZpbHRlcjtcbiAgICAgICAgbGV0IGZpbHRlcjtcbiAgICAgICAgaWYgKGF1dG9GaWx0ZXIgJiYgKHR5cGVvZiBhdXRvRmlsdGVyLmZyb20gPT09IFwibnVtYmVyXCIpICYmICh0eXBlb2YgYXV0b0ZpbHRlci50byA9PT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgIC8vIEdyaWQgZW5hYmxlcyBhdXRvIGZpbHRlclxuICAgICAgICAgICAgYXV0b0ZpbHRlciA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiByZWYoZmlsdGVyUm93SW5kZXgodGhpcy5vcHRpb25zKSwgYXV0b0ZpbHRlci5mcm9tKSxcbiAgICAgICAgICAgICAgICB0bzogcmVmKGZpbHRlclJvd0luZGV4KHRoaXMub3B0aW9ucyksIGF1dG9GaWx0ZXIudG8pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGF1dG9GaWx0ZXIgJiYgYXV0b0ZpbHRlci5yZWYgJiYgYXV0b0ZpbHRlci5jb2x1bW5zKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHByb2JhYmx5IGZyb20gdGhlIFNwcmVhZHNoZWV0XG4gICAgICAgICAgICBmaWx0ZXIgPSBhdXRvRmlsdGVyO1xuICAgICAgICAgICAgYXV0b0ZpbHRlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuX3ZhbGlkYXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX3ZhbGlkYXRpb25zLCBpKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zLnB1c2godGhpcy5fdmFsaWRhdGlvbnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlZmF1bHRDZWxsU3R5bGVJZCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVmYXVsdENlbGxTdHlsZSkge1xuICAgICAgICAgICAgZGVmYXVsdENlbGxTdHlsZUlkID0gdGhpcy5fbG9va3VwU3R5bGUodGhpcy5vcHRpb25zLmRlZmF1bHRDZWxsU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZnJlZXplUGFuZSA9IHRoaXMub3B0aW9ucy5mcmVlemVQYW5lIHx8IHt9O1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cyB8fCB7fTtcbiAgICAgICAgY29uc3QgbGFzdFJvdyA9IHRoaXMub3B0aW9ucy5yb3dzID8gdGhpcy5fZ2V0TGFzdFJvdygpIDogMTtcbiAgICAgICAgY29uc3QgbGFzdENvbCA9IHRoaXMub3B0aW9ucy5yb3dzID8gdGhpcy5fZ2V0TGFzdENvbCgpIDogMTtcblxuICAgICAgICByZXR1cm4gV09SS1NIRUVUKHtcbiAgICAgICAgICAgIGZyb3plbkNvbHVtbnM6IHRoaXMub3B0aW9ucy5mcm96ZW5Db2x1bW5zIHx8IGZyZWV6ZVBhbmUuY29sU3BsaXQsXG4gICAgICAgICAgICBmcm96ZW5Sb3dzOiB0aGlzLm9wdGlvbnMuZnJvemVuUm93cyB8fCBmcmVlemVQYW5lLnJvd1NwbGl0LFxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5vcHRpb25zLmNvbHVtbnMsXG4gICAgICAgICAgICBkZWZhdWx0czogZGVmYXVsdHMsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgbWVyZ2VDZWxsczogbWVyZ2VDZWxscyxcbiAgICAgICAgICAgIGF1dG9GaWx0ZXI6IGF1dG9GaWx0ZXIsXG4gICAgICAgICAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICAgICAgICAgIHNob3dHcmlkTGluZXM6IHRoaXMub3B0aW9ucy5zaG93R3JpZExpbmVzLFxuICAgICAgICAgICAgaHlwZXJsaW5rczogdGhpcy5faHlwZXJsaW5rcyxcbiAgICAgICAgICAgIHZhbGlkYXRpb25zOiB2YWxpZGF0aW9ucyxcbiAgICAgICAgICAgIGRlZmF1bHRDZWxsU3R5bGVJZDogZGVmYXVsdENlbGxTdHlsZUlkLFxuICAgICAgICAgICAgcnRsOiB0aGlzLm9wdGlvbnMucnRsICE9PSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMucnRsIDogZGVmYXVsdHMucnRsLFxuICAgICAgICAgICAgbGVnYWN5RHJhd2luZzogdGhpcy5fY29tbWVudHMubGVuZ3RoID8gYHZtbCR7dGhpcy5vcHRpb25zLnNoZWV0SW5kZXh9YCA6IG51bGwsXG4gICAgICAgICAgICBkcmF3aW5nOiB0aGlzLl9kcmF3aW5ncy5sZW5ndGggPyBgZHJ3JHt0aGlzLm9wdGlvbnMuc2hlZXRJbmRleH1gIDogbnVsbCxcbiAgICAgICAgICAgIGxhc3RSb3c6IGxhc3RSb3csXG4gICAgICAgICAgICBsYXN0Q29sOiBsYXN0Q29sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbW1lbnRzWE1MKCkge1xuICAgICAgICBpZiAodGhpcy5fY29tbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ09NTUVOVFNfWE1MKHsgY29tbWVudHM6IHRoaXMuX2NvbW1lbnRzIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd2luZ3NYTUwoaW1hZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLl9kcmF3aW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCByZWxzID0ge307XG4gICAgICAgICAgICBsZXQgbWFpbiA9IHRoaXMuX2RyYXdpbmdzLm1hcChkcncgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZWYgPSBwYXJzZVJlZihkcncudG9wTGVmdENlbGwpO1xuICAgICAgICAgICAgICAgIGxldCBpbWcgPSByZWxzW2Rydy5pbWFnZV07XG4gICAgICAgICAgICAgICAgaWYgKCFpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gcmVsc1tkcncuaW1hZ2VdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcklkOiBgaW1nJHtkcncuaW1hZ2V9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogaW1hZ2VzW2Rydy5pbWFnZV0udGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCAgICAgICA6IHJlZi5jb2wsXG4gICAgICAgICAgICAgICAgICAgIGNvbE9mZnNldCA6IHBpeGVsc1RvRXhjZWwoZHJ3Lm9mZnNldFgpLFxuICAgICAgICAgICAgICAgICAgICByb3cgICAgICAgOiByZWYucm93LFxuICAgICAgICAgICAgICAgICAgICByb3dPZmZzZXQgOiBwaXhlbHNUb0V4Y2VsKGRydy5vZmZzZXRZKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgIDogcGl4ZWxzVG9FeGNlbChkcncud2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgICAgOiBwaXhlbHNUb0V4Y2VsKGRydy5oZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUlkICAgOiBpbWcucklkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYWluOiBEUkFXSU5HU19YTUwobWFpbiksXG4gICAgICAgICAgICAgICAgcmVsczogRFJBV0lOR1NfUkVMU19YTUwocmVscylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZWdhY3lEcmF3aW5nKCkge1xuICAgICAgICBpZiAodGhpcy5fY29tbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gTEVHQUNZX0RSQVdJTkcoeyBjb21tZW50czogdGhpcy5fY29tbWVudHMgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9va3VwU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IFwiJFwiICsgdmFsdWU7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc3RyaW5ncy5pbmRleGVzW2tleV07XG4gICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fc3RyaW5ncy5pbmRleGVzW2tleV0gPSB0aGlzLl9zdHJpbmdzLnVuaXF1ZUNvdW50O1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5ncy51bmlxdWVDb3VudCArKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0cmluZ3MuY291bnQgKys7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfbG9va3VwU3R5bGUoc3R5bGUpIHtcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHN0eWxlKTtcblxuICAgICAgICBpZiAoanNvbiA9PT0gXCJ7fVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IGluZGV4T2YoanNvbiwgdGhpcy5fc3R5bGVzKTtcblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuX3N0eWxlcy5wdXNoKGpzb24pIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZXJlIGlzIG9uZSBkZWZhdWx0IHN0eWxlXG4gICAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuXG4gICAgX2xvb2t1cEJvcmRlcihib3JkZXIpIHtcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KGJvcmRlcik7XG4gICAgICAgIGlmIChqc29uID09PSBcInt9XCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IGluZGV4T2YoanNvbiwgdGhpcy5fYm9yZGVycyk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5fYm9yZGVycy5wdXNoKGpzb24pIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZXJlIGlzIG9uZSBkZWZhdWx0IGJvcmRlclxuICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cblxuICAgIF9yZWFkQ2VsbHMocm93RGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd0RhdGFbaV07XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHJvdy5jZWxscztcblxuICAgICAgICAgICAgcm93LmRhdGEgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjZWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxEYXRhID0gdGhpcy5fY2VsbChjZWxsc1tqXSwgcm93LmluZGV4LCBqKTtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmRhdGEucHVzaChjZWxsRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NlbGwoZGF0YSwgcm93SW5kZXgsIGNlbGxJbmRleCkge1xuICAgICAgICBpZiAoIWRhdGEgfHwgZGF0YSA9PT0gRU1QVFlfQ0VMTCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgIGxldCBib3JkZXIgPSB7fTtcblxuICAgICAgICBpZiAoZGF0YS5ib3JkZXJMZWZ0KSB7XG4gICAgICAgICAgICBib3JkZXIubGVmdCA9IGRhdGEuYm9yZGVyTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmJvcmRlclJpZ2h0KSB7XG4gICAgICAgICAgICBib3JkZXIucmlnaHQgPSBkYXRhLmJvcmRlclJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYm9yZGVyVG9wKSB7XG4gICAgICAgICAgICBib3JkZXIudG9wID0gZGF0YS5ib3JkZXJUb3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5ib3JkZXJCb3R0b20pIHtcbiAgICAgICAgICAgIGJvcmRlci5ib3R0b20gPSBkYXRhLmJvcmRlckJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmRCb3JkZXJzKSB7XG4gICAgICAgICAgICBib3JkZXIuZGlhZ29uYWwgPSBkYXRhLmRCb3JkZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9yZGVyID0gdGhpcy5fbG9va3VwQm9yZGVyKGJvcmRlcik7XG5cbiAgICAgICAgY29uc3QgZGVmU3R5bGUgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdENlbGxTdHlsZSB8fCB7fTtcbiAgICAgICAgbGV0IHN0eWxlID0geyBib3JkZXJJZDogYm9yZGVyIH07XG5cbiAgICAgICAgKGZ1bmN0aW9uKGFkZCkge1xuICAgICAgICAgICAgYWRkKFwiY29sb3JcIik7XG4gICAgICAgICAgICBhZGQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgICAgICAgYWRkKFwiYm9sZFwiKTtcbiAgICAgICAgICAgIGFkZChcIml0YWxpY1wiKTtcbiAgICAgICAgICAgIGFkZChcInVuZGVybGluZVwiKTtcbiAgICAgICAgICAgIGlmICghYWRkKFwiZm9udEZhbWlseVwiKSkgeyBhZGQoXCJmb250TmFtZVwiLCBcImZvbnRGYW1pbHlcIik7IH1cbiAgICAgICAgICAgIGFkZChcImZvbnRTaXplXCIpO1xuICAgICAgICAgICAgYWRkKFwiZm9ybWF0XCIpO1xuICAgICAgICAgICAgaWYgKCFhZGQoXCJ0ZXh0QWxpZ25cIikpIHsgYWRkKFwiaEFsaWduXCIsIFwidGV4dEFsaWduXCIpOyB9XG4gICAgICAgICAgICBpZiAoIWFkZChcInZlcnRpY2FsQWxpZ25cIikpIHsgYWRkKFwidkFsaWduXCIsIFwidmVydGljYWxBbGlnblwiKTsgfVxuICAgICAgICAgICAgYWRkKFwid3JhcFwiKTtcbiAgICAgICAgICAgIGFkZChcImluZGVudFwiKTtcbiAgICAgICAgfSkoXG4gICAgICAgICAgICBmdW5jdGlvbihwcm9wLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gZGF0YVtwcm9wXTtcbiAgICAgICAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gZGVmU3R5bGVbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVt0YXJnZXQgfHwgcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5vcHRpb25zLmNvbHVtbnMgfHwgW107XG5cbiAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tjZWxsSW5kZXhdO1xuICAgICAgICBsZXQgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuICAgICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5hdXRvV2lkdGggJiYgKCFkYXRhLmNvbFNwYW4gfHwgZGF0YS5jb2xTcGFuID09PSAxKSkge1xuICAgICAgICAgICAgbGV0IGRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAvLyBYWFg6IGxldCdzIG5vdCBicmluZyBrZW5kby50b1N0cmluZyBpbiBvbmx5IGZvciB0aGlzLlxuICAgICAgICAgICAgLy8gICAgICBiZXR0ZXIgd2FpdCB1bnRpbCB0aGUgc3ByZWFkc2hlZXQgZW5naW5lIGlzIGF2YWlsYWJsZSBhcyBhIHNlcGFyYXRlXG4gICAgICAgICAgICAvLyAgICAgIGNvbXBvbmVudCwgdGhlbiB3ZSBjYW4gdXNlIGEgcmVhbCBFeGNlbC1saWtlIGZvcm1hdHRlci5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIC8vIGtlbmRvLnRvU3RyaW5nIHdpbGwgbm90IGJlaGF2ZSBleGFjdGx5IGxpa2UgdGhlIEV4Y2VsIGZvcm1hdFxuICAgICAgICAgICAgICAgIC8vIFN0aWxsLCBpdCdzIHRoZSBiZXN0IHdlIGhhdmUgYXZhaWxhYmxlIGZvciBlc3RpbWF0aW5nIHRoZSBjaGFyYWN0ZXIgY291bnQuXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlID0gSW50bFNlcnZpY2UudG9TdHJpbmcodmFsdWUsIGRhdGEuZm9ybWF0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29sdW1uLndpZHRoID0gTWF0aC5tYXgoY29sdW1uLndpZHRoIHx8IDAsIFN0cmluZyhkaXNwbGF5VmFsdWUpLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdmFsdWUgPSBzdHJpcEZ1bm55Q2hhcnModmFsdWUpO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9sb29rdXBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgdHlwZSA9IFwic1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHR5cGUgPSBcIm5cIjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdHlwZSA9IFwiYlwiO1xuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmdldFRpbWUpIHtcbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuICAgICAgICAgICAgdmFsdWUgPSBkYXRlVG9TZXJpYWwodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFzdHlsZS5mb3JtYXQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5mb3JtYXQgPSBcIm1tLWRkLXl5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlID0gdGhpcy5fbG9va3VwU3R5bGUoc3R5bGUpO1xuXG4gICAgICAgIGNvbnN0IGNlbGxOYW1lID0gcmVmKHJvd0luZGV4LCBjZWxsSW5kZXgpO1xuXG4gICAgICAgIGlmIChkYXRhLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFZhbGlkYXRpb24oZGF0YS52YWxpZGF0aW9uLCBjZWxsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5jb21tZW50KSB7XG4gICAgICAgICAgICBsZXQgYW5jaG9yID0gW1xuICAgICAgICAgICAgICAgIGNlbGxJbmRleCArIDEsICAvLyBzdGFydCBjb2x1bW5cbiAgICAgICAgICAgICAgICAxNSwgICAgICAgICAgICAgLy8gc3RhcnQgY29sdW1uIG9mZnNldFxuICAgICAgICAgICAgICAgIHJvd0luZGV4LCAgICAgICAvLyBzdGFydCByb3dcbiAgICAgICAgICAgICAgICAxMCwgICAgICAgICAgICAgLy8gc3RhcnQgcm93IG9mZnNldFxuICAgICAgICAgICAgICAgIGNlbGxJbmRleCArIDMsICAvLyBlbmQgY29sdW1uXG4gICAgICAgICAgICAgICAgMTUsICAgICAgICAgICAgIC8vIGVuZCBjb2x1bW4gb2Zmc2V0XG4gICAgICAgICAgICAgICAgcm93SW5kZXggKyAzLCAgIC8vIGVuZCByb3dcbiAgICAgICAgICAgICAgICA0ICAgICAgICAgICAgICAgLy8gZW5kIHJvdyBvZmZzZXRcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB0aGlzLl9jb21tZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICByZWYgICAgOiBjZWxsTmFtZSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiBkYXRhLmNvbW1lbnQsXG4gICAgICAgICAgICAgICAgcm93ICAgIDogcm93SW5kZXgsXG4gICAgICAgICAgICAgICAgY29sICAgIDogY2VsbEluZGV4LFxuICAgICAgICAgICAgICAgIGFuY2hvciA6IGFuY2hvci5qb2luKFwiLCBcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGZvcm11bGE6IGRhdGEuZm9ybXVsYSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgICByZWY6IGNlbGxOYW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2FkZFZhbGlkYXRpb24odiwgcmVmKSB7XG4gICAgICAgIGNvbnN0IHRtcCA9IHtcbiAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UgOiB2LnR5cGUgPT09IFwicmVqZWN0XCIgPyAxIDogMCxcbiAgICAgICAgICAgIGZvcm11bGExICAgICAgICAgOiB2LmZyb20sXG4gICAgICAgICAgICBmb3JtdWxhMiAgICAgICAgIDogdi50byxcbiAgICAgICAgICAgIHR5cGUgICAgICAgICAgICAgOiBNQVBfRVhDRUxfVFlQRVt2LmRhdGFUeXBlXSB8fCB2LmRhdGFUeXBlLFxuICAgICAgICAgICAgb3BlcmF0b3IgICAgICAgICA6IE1BUF9FWENFTF9PUEVSQVRPUlt2LmNvbXBhcmVyVHlwZV0gfHwgdi5jb21wYXJlclR5cGUsXG4gICAgICAgICAgICBhbGxvd0JsYW5rICAgICAgIDogdi5hbGxvd051bGxzID8gMSA6IDAsXG4gICAgICAgICAgICBzaG93RHJvcERvd24gICAgIDogdi5zaG93QnV0dG9uID8gMCA6IDEsIC8vIExPTCwgRXhjZWwhXG4gICAgICAgICAgICBlcnJvciAgICAgICAgICAgIDogdi5tZXNzYWdlVGVtcGxhdGUsXG4gICAgICAgICAgICBlcnJvclRpdGxlICAgICAgIDogdi50aXRsZVRlbXBsYXRlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh0bXApO1xuICAgICAgICBpZiAoIXRoaXMuX3ZhbGlkYXRpb25zW2pzb25dKSB7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0aW9uc1tqc29uXSA9IHRtcDtcbiAgICAgICAgICAgIHRtcC5zcXJlZiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRpb25zW2pzb25dLnNxcmVmLnB1c2gocmVmKTtcbiAgICB9XG5cbiAgICBfZ2V0TGFzdFJvdygpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50RGF0YSh0aGlzLm9wdGlvbnMucm93cyk7XG4gICAgfVxuXG4gICAgX2dldExhc3RDb2woKSB7XG4gICAgICAgIGxldCBsYXN0ID0gMDtcbiAgICAgICAgdGhpcy5vcHRpb25zLnJvd3MuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgICAgIGlmIChyb3cuY2VsbHMpIHtcbiAgICAgICAgICAgICAgICBsYXN0ID0gTWF0aC5tYXgobGFzdCwgY291bnREYXRhKHJvdy5jZWxscykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxhc3Q7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3VudERhdGEoZGF0YSkge1xuICAgIGxldCBsYXN0ID0gZGF0YS5sZW5ndGg7XG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGlmIChlbC5pbmRleCAmJiBlbC5pbmRleCA+PSBsYXN0KSB7XG4gICAgICAgICAgICBsYXN0ID0gZWwuaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxhc3Q7XG59XG5cbmNvbnN0IE1BUF9FWENFTF9PUEVSQVRPUiA9IHtcbiAgICAvLyBpbmNsdWRlcyBvbmx5IHdoYXQgZGlmZmVyczsga2V5IGlzIG91ciBvcGVyYXRvciwgdmFsdWUgaXMgRXhjZWxcbiAgICAvLyBvcGVyYXRvci5cbiAgICBncmVhdGVyVGhhbk9yRXF1YWxUbyA6IFwiZ3JlYXRlclRoYW5PckVxdWFsXCIsXG4gICAgbGVzc1RoYW5PckVxdWFsVG8gICAgOiBcImxlc3NUaGFuT3JFcXVhbFwiXG59O1xuXG5jb25zdCBNQVBfRVhDRUxfVFlQRSA9IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaWQtZGVueWxpc3RcbiAgICBudW1iZXI6IFwiZGVjaW1hbFwiXG59O1xuXG5jb25zdCBkZWZhdWx0Rm9ybWF0cyA9IHtcbiAgICBcIkdlbmVyYWxcIjogMCxcbiAgICBcIjBcIjogMSxcbiAgICBcIjAuMDBcIjogMixcbiAgICBcIiMsIyMwXCI6IDMsXG4gICAgXCIjLCMjMC4wMFwiOiA0LFxuICAgIFwiMCVcIjogOSxcbiAgICBcIjAuMDAlXCI6IDEwLFxuICAgIFwiMC4wMEUrMDBcIjogMTEsXG4gICAgXCIjID8vP1wiOiAxMixcbiAgICBcIiMgPz8vPz9cIjogMTMsXG4gICAgXCJtbS1kZC15eVwiOiAxNCxcbiAgICBcImQtbW1tLXl5XCI6IDE1LFxuICAgIFwiZC1tbW1cIjogMTYsXG4gICAgXCJtbW0teXlcIjogMTcsXG4gICAgXCJoOm1tIEFNL1BNXCI6IDE4LFxuICAgIFwiaDptbTpzcyBBTS9QTVwiOiAxOSxcbiAgICBcImg6bW1cIjogMjAsXG4gICAgXCJoOm1tOnNzXCI6IDIxLFxuICAgIFwibS9kL3l5IGg6bW1cIjogMjIsXG4gICAgXCIjLCMjMCA7KCMsIyMwKVwiOiAzNyxcbiAgICBcIiMsIyMwIDtbUmVkXSgjLCMjMClcIjogMzgsXG4gICAgXCIjLCMjMC4wMDsoIywjIzAuMDApXCI6IDM5LFxuICAgIFwiIywjIzAuMDA7W1JlZF0oIywjIzAuMDApXCI6IDQwLFxuICAgIFwibW06c3NcIjogNDUsXG4gICAgXCJbaF06bW06c3NcIjogNDYsXG4gICAgXCJtbXNzLjBcIjogNDcsXG4gICAgXCIjIzAuMEUrMFwiOiA0OCxcbiAgICBcIkBcIjogNDksXG4gICAgXCJbJC00MDRdZS9tL2RcIjogMjcsXG4gICAgXCJtL2QveXlcIjogMzAsXG4gICAgXCJ0MFwiOiA1OSxcbiAgICBcInQwLjAwXCI6IDYwLFxuICAgIFwidCMsIyMwXCI6IDYxLFxuICAgIFwidCMsIyMwLjAwXCI6IDYyLFxuICAgIFwidDAlXCI6IDY3LFxuICAgIFwidDAuMDAlXCI6IDY4LFxuICAgIFwidCMgPy8/XCI6IDY5LFxuICAgIFwidCMgPz8vPz9cIjogNzBcbn07XG5cbmZ1bmN0aW9uIG1heWJlUkdCKHZhbHVlKSB7XG4gICAgZnVuY3Rpb24gaGV4KHZhbCkge1xuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KHZhbCwgMTApLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIHgubGVuZ3RoIDwgMiA/IFwiMFwiICsgeCA6IHg7XG4gICAgfVxuXG4gICAgbGV0IG0gPSAvXnJnYmE/XFwoKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKig/OixcXHMqKFswLTkuXSspXFxzKik/XFwpL2kuZXhlYyh2YWx1ZS50cmltKCkpO1xuICAgIGlmIChtKSB7XG4gICAgICAgIGxldCBvcGFjaXR5ID0gKG1bNF0gPyBwYXJzZUZsb2F0KG1bNF0pIDogMSkgKiAyNTUgfCAwO1xuICAgICAgICByZXR1cm4gXCIjXCIgKyBoZXgob3BhY2l0eSkgKyBoZXgobVsxXSkgKyBoZXgobVsyXSkgKyBoZXgobVszXSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY29udmVydENvbG9yKHZhbHVlKSB7XG4gICAgbGV0IGNvbG9yID0gbWF5YmVSR0IodmFsdWUpO1xuICAgIGlmIChjb2xvci5sZW5ndGggPCA2KSB7XG4gICAgICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSgvKFxcdykvZywgZnVuY3Rpb24oJDAsICQxKSB7XG4gICAgICAgICAgICByZXR1cm4gJDEgKyAkMTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMSkudG9VcHBlckNhc2UoKTtcblxuICAgIGlmIChjb2xvci5sZW5ndGggPCA4KSB7XG4gICAgICAgIGNvbG9yID0gXCJGRlwiICsgY29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xufVxuXG5jbGFzcyBXb3JrYm9vayB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMuX3N0cmluZ3MgPSB7XG4gICAgICAgICAgICBpbmRleGVzOiB7fSxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgdW5pcXVlQ291bnQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc3R5bGVzID0gW107XG4gICAgICAgIHRoaXMuX2JvcmRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5faW1hZ2VzID0gdGhpcy5vcHRpb25zLmltYWdlcztcbiAgICAgICAgdGhpcy5faW1nSWQgPSAwO1xuXG4gICAgICAgIHRoaXMuX3NoZWV0cyA9IG1hcCh0aGlzLm9wdGlvbnMuc2hlZXRzIHx8IFtdLCAob3B0aW9ucywgaSkgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy5kZWZhdWx0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMuc2hlZXRJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3Jrc2hlZXQob3B0aW9ucywgdGhpcy5fc3RyaW5ncywgdGhpcy5fc3R5bGVzLCB0aGlzLl9ib3JkZXJzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW1hZ2VGaWxlbmFtZShtaW1lVHlwZSkge1xuICAgICAgICBjb25zdCBpZCA9ICsrdGhpcy5faW1nSWQ7XG4gICAgICAgIHN3aXRjaCAobWltZVR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiaW1hZ2UvanBnXCI6XG4gICAgICAgICAgY2FzZSBcImltYWdlL2pwZWdcIjpcbiAgICAgICAgICAgIHJldHVybiBgaW1hZ2Uke2lkfS5qcGdgO1xuICAgICAgICAgIGNhc2UgXCJpbWFnZS9wbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBgaW1hZ2Uke2lkfS5wbmdgO1xuICAgICAgICAgIGNhc2UgXCJpbWFnZS9naWZcIjpcbiAgICAgICAgICAgIHJldHVybiBgaW1hZ2Uke2lkfS5naWZgO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYGltYWdlJHtpZH0uYmluYDsgLy8gWFhYOiBhbnl0aGluZyBiZXR0ZXIgdG8gZG8gaGVyZT9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvWklQKCkge1xuICAgICAgICBjb25zdCB6aXAgPSBjcmVhdGVaaXAoKTtcblxuICAgICAgICBjb25zdCBkb2NQcm9wcyA9IHppcC5mb2xkZXIoXCJkb2NQcm9wc1wiKTtcblxuICAgICAgICBkb2NQcm9wcy5maWxlKFwiY29yZS54bWxcIiwgQ09SRSh7XG4gICAgICAgICAgICBjcmVhdG9yOiB0aGlzLm9wdGlvbnMuY3JlYXRvciB8fCBcIktlbmRvIFVJXCIsXG4gICAgICAgICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5vcHRpb25zLmNyZWF0b3IgfHwgXCJLZW5kbyBVSVwiLFxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5vcHRpb25zLmRhdGUgfHwgbmV3IERhdGUoKS50b0pTT04oKSxcbiAgICAgICAgICAgIG1vZGlmaWVkOiB0aGlzLm9wdGlvbnMuZGF0ZSB8fCBuZXcgRGF0ZSgpLnRvSlNPTigpXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBzaGVldENvdW50ID0gdGhpcy5fc2hlZXRzLmxlbmd0aDtcblxuICAgICAgICBkb2NQcm9wcy5maWxlKFwiYXBwLnhtbFwiLCBBUFAoeyBzaGVldHM6IHRoaXMuX3NoZWV0cyB9KSk7XG5cbiAgICAgICAgY29uc3QgcmVscyA9IHppcC5mb2xkZXIoXCJfcmVsc1wiKTtcbiAgICAgICAgcmVscy5maWxlKFwiLnJlbHNcIiwgUkVMUyk7XG5cbiAgICAgICAgY29uc3QgeGwgPSB6aXAuZm9sZGVyKFwieGxcIik7XG5cbiAgICAgICAgY29uc3QgeGxSZWxzID0geGwuZm9sZGVyKFwiX3JlbHNcIik7XG4gICAgICAgIHhsUmVscy5maWxlKFwid29ya2Jvb2sueG1sLnJlbHNcIiwgV09SS0JPT0tfUkVMUyh7IGNvdW50OiBzaGVldENvdW50IH0pKTtcblxuICAgICAgICBpZiAodGhpcy5faW1hZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCBtZWRpYSA9IHhsLmZvbGRlcihcIm1lZGlhXCIpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5faW1hZ2VzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSB0aGlzLl9pbWFnZXNbaWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gdGhpcy5pbWFnZUZpbGVuYW1lKGltZy50eXBlKTtcbiAgICAgICAgICAgICAgICBtZWRpYS5maWxlKGZpbGVuYW1lLCBpbWcuZGF0YSk7XG4gICAgICAgICAgICAgICAgaW1nLnRhcmdldCA9IGAuLi9tZWRpYS8ke2ZpbGVuYW1lfWA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoZWV0SWRzID0ge307XG4gICAgICAgIHhsLmZpbGUoXCJ3b3JrYm9vay54bWxcIiwgV09SS0JPT0soe1xuICAgICAgICAgICAgc2hlZXRzOiB0aGlzLl9zaGVldHMsXG4gICAgICAgICAgICBmaWx0ZXJOYW1lczogbWFwKHRoaXMuX3NoZWV0cywgZnVuY3Rpb24oc2hlZXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHNoZWV0Lm9wdGlvbnM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXROYW1lID0gKG9wdGlvbnMubmFtZSB8fCBvcHRpb25zLnRpdGxlIHx8IFwiU2hlZXRcIiArIChpbmRleCArIDEpKTtcbiAgICAgICAgICAgICAgICBzaGVldElkc1tzaGVldE5hbWUudG9Mb3dlckNhc2UoKV0gPSBpbmRleDtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIucmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzcHJlYWRzaGVldCBwcm92aWRlcyBgcmVmYFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBmaWx0ZXIucmVmLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcm9tID0gcGFyc2VSZWYoYVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG8gPSBwYXJzZVJlZihhWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTaGVldElkOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzaGVldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJHJlZihmcm9tLnJvdywgZnJvbS5jb2wpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAkcmVmKHRvLnJvdywgdG8uY29sKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlsdGVyLmZyb20gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGZpbHRlci50byAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JpZCBkb2VzIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTaGVldElkOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzaGVldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJHJlZihmaWx0ZXJSb3dJbmRleChvcHRpb25zKSwgZmlsdGVyLmZyb20pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAkcmVmKGZpbHRlclJvd0luZGV4KG9wdGlvbnMpLCBmaWx0ZXIudG8pXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB1c2VyTmFtZXM6IG1hcCh0aGlzLm9wdGlvbnMubmFtZXMgfHwgW10sIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRlZi5sb2NhbE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU2hlZXRJZDogZGVmLnNoZWV0ID8gc2hlZXRJZHNbZGVmLnNoZWV0LnRvTG93ZXJDYXNlKCldIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlZi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBkZWYuaGlkZGVuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCB3b3Jrc2hlZXRzID0geGwuZm9sZGVyKFwid29ya3NoZWV0c1wiKTtcbiAgICAgICAgY29uc3QgZHJhd2luZ3MgPSB4bC5mb2xkZXIoXCJkcmF3aW5nc1wiKTtcbiAgICAgICAgY29uc3QgZHJhd2luZ3NSZWxzID0gZHJhd2luZ3MuZm9sZGVyKFwiX3JlbHNcIik7XG4gICAgICAgIGNvbnN0IHNoZWV0UmVscyA9IHdvcmtzaGVldHMuZm9sZGVyKFwiX3JlbHNcIik7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRGaWxlcyA9IFtdO1xuICAgICAgICBjb25zdCBkcmF3aW5nRmlsZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBzaGVldENvdW50OyBpZHgrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSB0aGlzLl9zaGVldHNbaWR4XTtcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0TmFtZSA9IGBzaGVldCR7aWR4ICsgMX0ueG1sYDtcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0WE1MID0gc2hlZXQudG9YTUwoaWR4KTsgLy8gbXVzdCBiZSBjYWxsZWQgYmVmb3JlIHJlbHNUb1hNTFxuICAgICAgICAgICAgY29uc3QgcmVsc1hNTCA9IHNoZWV0LnJlbHNUb1hNTCgpO1xuICAgICAgICAgICAgY29uc3QgY29tbWVudHNYTUwgPSBzaGVldC5jb21tZW50c1hNTCgpO1xuICAgICAgICAgICAgY29uc3QgbGVnYWN5RHJhd2luZyA9IHNoZWV0LmxlZ2FjeURyYXdpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGRyYXdpbmdzWE1MID0gc2hlZXQuZHJhd2luZ3NYTUwodGhpcy5faW1hZ2VzKTtcblxuICAgICAgICAgICAgaWYgKHJlbHNYTUwpIHtcbiAgICAgICAgICAgICAgICBzaGVldFJlbHMuZmlsZShzaGVldE5hbWUgKyBcIi5yZWxzXCIsIHJlbHNYTUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbW1lbnRzWE1MKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBgY29tbWVudHMke3NoZWV0Lm9wdGlvbnMuc2hlZXRJbmRleH0ueG1sYDtcbiAgICAgICAgICAgICAgICB4bC5maWxlKG5hbWUsIGNvbW1lbnRzWE1MKTtcbiAgICAgICAgICAgICAgICBjb21tZW50RmlsZXMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZWdhY3lEcmF3aW5nKSB7XG4gICAgICAgICAgICAgICAgZHJhd2luZ3MuZmlsZShgdm1sRHJhd2luZyR7c2hlZXQub3B0aW9ucy5zaGVldEluZGV4fS52bWxgLCBsZWdhY3lEcmF3aW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcmF3aW5nc1hNTCkge1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gYGRyYXdpbmcke3NoZWV0Lm9wdGlvbnMuc2hlZXRJbmRleH0ueG1sYDtcbiAgICAgICAgICAgICAgICBkcmF3aW5ncy5maWxlKG5hbWUsIGRyYXdpbmdzWE1MLm1haW4pO1xuICAgICAgICAgICAgICAgIGRyYXdpbmdzUmVscy5maWxlKGAke25hbWV9LnJlbHNgLCBkcmF3aW5nc1hNTC5yZWxzKTtcbiAgICAgICAgICAgICAgICBkcmF3aW5nRmlsZXMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd29ya3NoZWV0cy5maWxlKHNoZWV0TmFtZSwgc2hlZXRYTUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9yZGVycyA9IG1hcCh0aGlzLl9ib3JkZXJzLCBwYXJzZUpTT04pO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IG1hcCh0aGlzLl9zdHlsZXMsIHBhcnNlSlNPTik7XG5cbiAgICAgICAgY29uc3QgaGFzRm9udCA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGUudW5kZXJsaW5lIHx8IHN0eWxlLmJvbGQgfHwgc3R5bGUuaXRhbGljIHx8IHN0eWxlLmNvbG9yIHx8IHN0eWxlLmZvbnRGYW1pbHkgfHwgc3R5bGUuZm9udFNpemU7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29udmVydEZvbnRTaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBmb250SW5QeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBsZXQgZm9udEluUHQ7XG5cbiAgICAgICAgICAgIGlmIChmb250SW5QeCkge1xuICAgICAgICAgICAgICAgIGZvbnRJblB0ID0gZm9udEluUHggKiAzIC8gNDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZvbnRJblB0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZvbnRzID0gbWFwKHN0eWxlcywgZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZS5mb250U2l6ZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlLmZvbnRTaXplID0gY29udmVydEZvbnRTaXplKHN0eWxlLmZvbnRTaXplKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0eWxlLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSBjb252ZXJ0Q29sb3Ioc3R5bGUuY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGFzRm9udChzdHlsZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdHMgPSBtYXAoc3R5bGVzLCBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgaWYgKHN0eWxlLmZvcm1hdCAmJiBkZWZhdWx0Rm9ybWF0c1tzdHlsZS5mb3JtYXRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZpbGxzID0gbWFwKHN0eWxlcywgZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZS5iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IGNvbnZlcnRDb2xvcihzdHlsZS5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHhsLmZpbGUoXCJzdHlsZXMueG1sXCIsIFNUWUxFUyh7XG4gICAgICAgICAgICBmb250czogZm9udHMsXG4gICAgICAgICAgICBmaWxsczogZmlsbHMsXG4gICAgICAgICAgICBmb3JtYXRzOiBmb3JtYXRzLFxuICAgICAgICAgICAgYm9yZGVyczogYm9yZGVycyxcbiAgICAgICAgICAgIHN0eWxlczogbWFwKHN0eWxlcywgZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNGb250KHN0eWxlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9udElkID0gaW5kZXhPZihzdHlsZSwgZm9udHMpICsgMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUuYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmlsbElkID0gaW5kZXhPZihzdHlsZSwgZmlsbHMpICsgMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQudGV4dEFsaWduID0gc3R5bGUudGV4dEFsaWduO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pbmRlbnQgPSBzdHlsZS5pbmRlbnQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZlcnRpY2FsQWxpZ24gPSBzdHlsZS52ZXJ0aWNhbEFsaWduO1xuICAgICAgICAgICAgICAgIHJlc3VsdC53cmFwID0gc3R5bGUud3JhcDtcbiAgICAgICAgICAgICAgICByZXN1bHQuYm9yZGVySWQgPSBzdHlsZS5ib3JkZXJJZDtcblxuICAgICAgICAgICAgICAgIGlmIChzdHlsZS5mb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRGb3JtYXRzW3N0eWxlLmZvcm1hdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm51bUZtdElkID0gZGVmYXVsdEZvcm1hdHNbc3R5bGUuZm9ybWF0XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5udW1GbXRJZCA9IDE2NSArIGluZGV4T2Yoc3R5bGUsIGZvcm1hdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pKTtcblxuICAgICAgICB4bC5maWxlKFwic2hhcmVkU3RyaW5ncy54bWxcIiwgU0hBUkVEX1NUUklOR1ModGhpcy5fc3RyaW5ncykpO1xuXG4gICAgICAgIHppcC5maWxlKFwiW0NvbnRlbnRfVHlwZXNdLnhtbFwiLCBDT05URU5UX1RZUEVTKHtcbiAgICAgICAgICAgIHNoZWV0Q291bnQ6IHNoZWV0Q291bnQsXG4gICAgICAgICAgICBjb21tZW50RmlsZXM6IGNvbW1lbnRGaWxlcyxcbiAgICAgICAgICAgIGRyYXdpbmdGaWxlczogZHJhd2luZ0ZpbGVzXG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gemlwO1xuICAgIH1cblxuICAgIHRvRGF0YVVSTCgpIHtcbiAgICAgICAgY29uc3QgemlwID0gdGhpcy50b1pJUCgpO1xuXG4gICAgICAgIHJldHVybiB6aXAuZ2VuZXJhdGVBc3luYyA/IHppcC5nZW5lcmF0ZUFzeW5jKERBVEFfVVJMX09QVElPTlMpLnRoZW4odG9EYXRhVVJJKSA6IHRvRGF0YVVSSSh6aXAuZ2VuZXJhdGUoREFUQV9VUkxfT1BUSU9OUykpO1xuICAgIH1cblxuICAgIHRvQmxvYigpIHtcbiAgICAgICAgY29uc3QgemlwID0gdGhpcy50b1pJUCgpO1xuICAgICAgICBpZiAoemlwLmdlbmVyYXRlQXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiB6aXAuZ2VuZXJhdGVBc3luYyhCTE9CX09QVElPTlMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbIHppcC5nZW5lcmF0ZShBUlJBWUJVRkZFUl9PUFRJT05TKSBdLCB7IHR5cGU6IE1JTUVfVFlQRSB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJvcmRlclN0eWxlKHdpZHRoKSB7XG4gICAgbGV0IGFsaWFzID0gXCJ0aGluXCI7XG5cbiAgICBpZiAod2lkdGggPT09IDIpIHtcbiAgICAgICAgYWxpYXMgPSBcIm1lZGl1bVwiO1xuICAgIH0gZWxzZSBpZiAod2lkdGggPT09IDMpIHtcbiAgICAgICAgYWxpYXMgPSBcInRoaWNrXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsaWFzO1xufVxuXG5mdW5jdGlvbiBib3JkZXJTaWRlVGVtcGxhdGUobmFtZSwgc3R5bGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcblxuICAgIGlmIChzdHlsZSkge1xuICAgICAgICByZXN1bHQgKz0gXCI8XCIgKyBuYW1lICsgXCIgc3R5bGU9XFxcIlwiICsgYm9yZGVyU3R5bGUoc3R5bGUuc2l6ZSkgKyBcIlxcXCI+XCI7XG4gICAgICAgIGlmIChzdHlsZS5jb2xvcikge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiPGNvbG9yIHJnYj1cXFwiXCIgKyBjb252ZXJ0Q29sb3Ioc3R5bGUuY29sb3IpICsgXCJcXFwiLz5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gXCI8L1wiICsgbmFtZSArIFwiPlwiO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGJvcmRlclRlbXBsYXRlKGJvcmRlcikge1xuICAgIGxldCBkaWFnID0gYm9yZGVyLmRpYWdvbmFsID8gYm9yZGVyLmRpYWdvbmFsLnR5cGUgOiAwO1xuICAgIHJldHVybiBgPGJvcmRlciAke2RpYWcgJiAyID8gJ2RpYWdvbmFsVXA9XCJ0cnVlXCInIDogJyd9ICR7ZGlhZyAmIDEgPyAnZGlhZ29uYWxEb3duPVwidHJ1ZVwiJyA6ICcnfT5cbiAgICAgICR7Ym9yZGVyU2lkZVRlbXBsYXRlKFwibGVmdFwiLCBib3JkZXIubGVmdCl9XG4gICAgICAke2JvcmRlclNpZGVUZW1wbGF0ZShcInJpZ2h0XCIsIGJvcmRlci5yaWdodCl9XG4gICAgICAke2JvcmRlclNpZGVUZW1wbGF0ZShcInRvcFwiLCBib3JkZXIudG9wKX1cbiAgICAgICR7Ym9yZGVyU2lkZVRlbXBsYXRlKFwiYm90dG9tXCIsIGJvcmRlci5ib3R0b20pfVxuICAgICAgJHtib3JkZXJTaWRlVGVtcGxhdGUoXCJkaWFnb25hbFwiLCBib3JkZXIuZGlhZ29uYWwpfVxuICAgIDwvYm9yZGVyPmA7XG59XG5cbmNvbnN0IEVNUFRZX0NFTEwgPSB7fTtcbmZ1bmN0aW9uIGluZmxhdGUocm93cywgbWVyZ2VkQ2VsbHMpIHtcbiAgICBjb25zdCByb3dEYXRhID0gW107XG4gICAgY29uc3Qgcm93c0J5SW5kZXggPSBbXTtcblxuICAgIGluZGV4Um93cyhyb3dzLCBmdW5jdGlvbihyb3csIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBfc291cmNlOiByb3csXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBoZWlnaHQ6IHJvdy5oZWlnaHQsXG4gICAgICAgICAgICBsZXZlbDogcm93LmxldmVsLFxuICAgICAgICAgICAgY2VsbHM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgcm93RGF0YS5wdXNoKGRhdGEpO1xuICAgICAgICByb3dzQnlJbmRleFtpbmRleF0gPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc29ydGVkID0gc29ydEJ5SW5kZXgocm93RGF0YSkuc2xpY2UoMCk7XG4gICAgY29uc3QgY3R4ID0ge1xuICAgICAgICByb3dEYXRhOiByb3dEYXRhLFxuICAgICAgICByb3dzQnlJbmRleDogcm93c0J5SW5kZXgsXG4gICAgICAgIG1lcmdlZENlbGxzOiBtZXJnZWRDZWxsc1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxsQ2VsbHMoc29ydGVkW2ldLCBjdHgpO1xuICAgICAgICBkZWxldGUgc29ydGVkW2ldLl9zb3VyY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvcnRCeUluZGV4KHJvd0RhdGEpO1xufVxuXG5mdW5jdGlvbiBpbmRleFJvd3Mocm93cywgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgaWYgKCFyb3cpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluZGV4ID0gcm93LmluZGV4O1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhyb3csIGluZGV4KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRCeUluZGV4KGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hVbmlxdWUoYXJyYXksIGVsKSB7XG4gICAgaWYgKGFycmF5LmluZGV4T2YoZWwpIDwgMCkge1xuICAgICAgICBhcnJheS5wdXNoKGVsKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFNwYW4obWVyZ2VkQ2VsbHMsIHJlZikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVyZ2VkQ2VsbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBtZXJnZWRDZWxsc1tpXTtcbiAgICAgICAgY29uc3QgYSA9IHJhbmdlLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgbGV0IHRvcExlZnQgPSBhWzBdO1xuICAgICAgICBpZiAodG9wTGVmdCA9PT0gcmVmKSB7XG4gICAgICAgICAgICBsZXQgYm90dG9tUmlnaHQgPSBhWzFdO1xuICAgICAgICAgICAgdG9wTGVmdCA9IHBhcnNlUmVmKHRvcExlZnQpO1xuICAgICAgICAgICAgYm90dG9tUmlnaHQgPSBwYXJzZVJlZihib3R0b21SaWdodCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJvd1NwYW46IGJvdHRvbVJpZ2h0LnJvdyAtIHRvcExlZnQucm93ICsgMSxcbiAgICAgICAgICAgICAgICBjb2xTcGFuOiBib3R0b21SaWdodC5jb2wgLSB0b3BMZWZ0LmNvbCArIDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUmVmKHJlZikge1xuICAgIGZ1bmN0aW9uIGdldGNvbChzdHIpIHtcbiAgICAgICAgbGV0IHVwcGVyU3RyID0gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBjb2wgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwcGVyU3RyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb2wgPSBjb2wgKiAyNiArIHVwcGVyU3RyLmNoYXJDb2RlQXQoaSkgLSA2NDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sIC0gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRyb3coc3RyKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChzdHIsIDEwKSAtIDE7XG4gICAgfVxuXG4gICAgY29uc3QgbSA9IC9eKFthLXpdKykoXFxkKykkL2kuZXhlYyhyZWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdzogZ2V0cm93KG1bMl0pLFxuICAgICAgICBjb2w6IGdldGNvbChtWzFdKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBpeGVsc1RvRXhjZWwocHgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChweCAqIDk1MjUpO1xufVxuXG5mdW5jdGlvbiBmaWxsQ2VsbHMoZGF0YSwgY3R4KSB7XG4gICAgY29uc3Qgcm93ID0gZGF0YS5fc291cmNlO1xuICAgIGNvbnN0IHJvd0luZGV4ID0gZGF0YS5pbmRleDtcbiAgICBjb25zdCBjZWxscyA9IHJvdy5jZWxscztcbiAgICBjb25zdCBjZWxsRGF0YSA9IGRhdGEuY2VsbHM7XG5cbiAgICBpZiAoIWNlbGxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1tpXSB8fCBFTVBUWV9DRUxMO1xuXG4gICAgICAgIGxldCByb3dTcGFuID0gY2VsbC5yb3dTcGFuIHx8IDE7XG4gICAgICAgIGxldCBjb2xTcGFuID0gY2VsbC5jb2xTcGFuIHx8IDE7XG5cbiAgICAgICAgY29uc3QgY2VsbEluZGV4ID0gaW5zZXJ0Q2VsbChjZWxsRGF0YSwgY2VsbCk7XG4gICAgICAgIGNvbnN0IHRvcExlZnRSZWYgPSByZWYocm93SW5kZXgsIGNlbGxJbmRleCk7XG5cbiAgICAgICAgaWYgKHJvd1NwYW4gPT09IDEgJiYgY29sU3BhbiA9PT0gMSkge1xuICAgICAgICAgICAgLy8gY291bGQgc3RpbGwgYmUgbWVyZ2VkOiB0aGUgc3ByZWFkc2hlZXQgZG9lcyBub3Qgc2VuZFxuICAgICAgICAgICAgLy8gcm93U3Bhbi9jb2xTcGFuLCBidXQgbWVyZ2VkQ2VsbHMgaXMgYWxyZWFkeSBwb3B1bGF0ZWQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGVsZXJpay9rZW5kby11aS1jb3JlL2lzc3Vlcy8yNDAxXG4gICAgICAgICAgICBjb25zdCB0bXAgPSBnZXRTcGFuKGN0eC5tZXJnZWRDZWxscywgdG9wTGVmdFJlZik7XG4gICAgICAgICAgICBpZiAodG1wKSB7XG4gICAgICAgICAgICAgICAgY29sU3BhbiA9IHRtcC5jb2xTcGFuO1xuICAgICAgICAgICAgICAgIHJvd1NwYW4gPSB0bXAucm93U3BhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW5DZWxsKGNlbGwsIGNlbGxEYXRhLCBjZWxsSW5kZXgsIGNvbFNwYW4pO1xuXG4gICAgICAgIGlmIChyb3dTcGFuID4gMSB8fCBjb2xTcGFuID4gMSkge1xuICAgICAgICAgICAgcHVzaFVuaXF1ZShjdHgubWVyZ2VkQ2VsbHMsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvcExlZnRSZWYgKyBcIjpcIiArIHJlZihyb3dJbmRleCArIHJvd1NwYW4gLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxJbmRleCArIGNvbFNwYW4gLSAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm93U3BhbiA+IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJpID0gcm93SW5kZXggKyAxOyByaSA8IHJvd0luZGV4ICsgcm93U3BhbjsgcmkrKykge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Um93ID0gY3R4LnJvd3NCeUluZGV4W3JpXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5leHRSb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFJvdyA9IGN0eC5yb3dzQnlJbmRleFtyaV0gPSB7IGluZGV4OiByaSwgY2VsbHM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgIGN0eC5yb3dEYXRhLnB1c2gobmV4dFJvdyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbkNlbGwoY2VsbCwgbmV4dFJvdy5jZWxscywgY2VsbEluZGV4IC0gMSwgY29sU3BhbiArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRDZWxsKGRhdGEsIGNlbGwpIHtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBpZiAodHlwZW9mIGNlbGwuaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaW5kZXggPSBjZWxsLmluZGV4O1xuICAgICAgICBpbnNlcnRDZWxsQXQoZGF0YSwgY2VsbCwgY2VsbC5pbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBhcHBlbmRDZWxsKGRhdGEsIGNlbGwpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Q2VsbEF0KGRhdGEsIGNlbGwsIGluZGV4KSB7XG4gICAgZGF0YVtpbmRleF0gPSBjZWxsO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDZWxsKGRhdGEsIGNlbGwpIHtcbiAgICBsZXQgaW5kZXggPSBkYXRhLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgICAgaWYgKCFkYXRhW2ldKSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gY2VsbDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiBzcGFuQ2VsbChjZWxsLCByb3csIHN0YXJ0SW5kZXgsIGNvbFNwYW4pIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNvbFNwYW47IGkrKykge1xuICAgICAgICBjb25zdCB0bXAgPSB7XG4gICAgICAgICAgICBib3JkZXJUb3AgICAgOiBjZWxsLmJvcmRlclRvcCxcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0ICA6IGNlbGwuYm9yZGVyUmlnaHQsXG4gICAgICAgICAgICBib3JkZXJCb3R0b20gOiBjZWxsLmJvcmRlckJvdHRvbSxcbiAgICAgICAgICAgIGJvcmRlckxlZnQgICA6IGNlbGwuYm9yZGVyTGVmdFxuICAgICAgICB9O1xuICAgICAgICBpbnNlcnRDZWxsQXQocm93LCB0bXAsIHN0YXJ0SW5kZXggKyBpKTtcbiAgICB9XG59XG5cbmNvbnN0IFNQUkVBRFNIRUVUX0ZJTFRFUlMgPSAoeyByZWYsIGNvbHVtbnMsIGdlbmVyYXRvcnMgfSkgPT4gYFxuPGF1dG9GaWx0ZXIgcmVmPVwiJHtyZWZ9XCI+XG4gICR7Zm9yZWFjaChjb2x1bW5zLCAoY29sKSA9PiBgXG4gICAgPGZpbHRlckNvbHVtbiBjb2xJZD1cIiR7Y29sLmluZGV4fVwiPlxuICAgICAgJHtnZW5lcmF0b3JzW2NvbC5maWx0ZXJdKGNvbCl9XG4gICAgPC9maWx0ZXJDb2x1bW4+XG4gIGApfVxuPC9hdXRvRmlsdGVyPmA7XG5cbmNvbnN0IFNQUkVBRFNIRUVUX0NVU1RPTV9GSUxURVIgPSAoeyBsb2dpYywgY3JpdGVyaWEgfSkgPT4gYFxuPGN1c3RvbUZpbHRlcnMgJHtsb2dpYyA9PT0gJ2FuZCcgPyAnYW5kPVwiMVwiJyA6ICcnfT5cbiR7Zm9yZWFjaChjcml0ZXJpYSwgKGYpID0+IHtcbiAgICBsZXQgb3AgPSBzcHJlYWRzaGVldEZpbHRlcnMuY3VzdG9tT3BlcmF0b3IoZik7XG4gICAgbGV0IHZhbCA9IHNwcmVhZHNoZWV0RmlsdGVycy5jdXN0b21WYWx1ZShmKTtcbiAgICByZXR1cm4gYDxjdXN0b21GaWx0ZXIgJHtvcCA/IGBvcGVyYXRvcj1cIiR7b3B9XCJgIDogJyd9IHZhbD1cIiR7dmFsfVwiLz5gO1xufSl9XG48L2N1c3RvbUZpbHRlcnM+YDtcblxuY29uc3QgU1BSRUFEU0hFRVRfRFlOQU1JQ19GSUxURVIgPSAoeyB0eXBlIH0pID0+XG5gPGR5bmFtaWNGaWx0ZXIgdHlwZT1cIiR7c3ByZWFkc2hlZXRGaWx0ZXJzLmR5bmFtaWNGaWx0ZXJUeXBlKHR5cGUpfVwiIC8+YDtcblxuY29uc3QgU1BSRUFEU0hFRVRfVE9QX0ZJTFRFUiA9ICh7IHR5cGUsIHZhbHVlIH0pID0+XG5gPHRvcDEwIHBlcmNlbnQ9XCIkey9wZXJjZW50JC9pLnRlc3QodHlwZSkgPyAxIDogMH1cIlxuICAgICAgIHRvcD1cIiR7L150b3AvaS50ZXN0KHR5cGUpID8gMSA6IDB9XCJcbiAgICAgICB2YWw9XCIke3ZhbHVlfVwiIC8+YDtcblxuY29uc3QgU1BSRUFEU0hFRVRfVkFMVUVfRklMVEVSID0gKHsgYmxhbmtzLCB2YWx1ZXMgfSkgPT5cbiAgYDxmaWx0ZXJzICR7YmxhbmtzID8gJ2JsYW5rPVwiMVwiJyA6ICcnfT5cbiAgICAke2ZvcmVhY2godmFsdWVzLCAodmFsdWUpID0+IGBcbiAgICAgIDxmaWx0ZXIgdmFsPVwiJHt2YWx1ZX1cIiAvPmApfVxuICA8L2ZpbHRlcnM+YDtcblxuZnVuY3Rpb24gc3ByZWFkc2hlZXRGaWx0ZXJzKGZpbHRlcikge1xuICAgIHJldHVybiBTUFJFQURTSEVFVF9GSUxURVJTKHtcbiAgICAgICAgcmVmOiBmaWx0ZXIucmVmLFxuICAgICAgICBjb2x1bW5zOiBmaWx0ZXIuY29sdW1ucyxcbiAgICAgICAgZ2VuZXJhdG9yczoge1xuICAgICAgICAgICAgY3VzdG9tICA6IFNQUkVBRFNIRUVUX0NVU1RPTV9GSUxURVIsXG4gICAgICAgICAgICBkeW5hbWljIDogU1BSRUFEU0hFRVRfRFlOQU1JQ19GSUxURVIsXG4gICAgICAgICAgICB0b3AgICAgIDogU1BSRUFEU0hFRVRfVE9QX0ZJTFRFUixcbiAgICAgICAgICAgIHZhbHVlICAgOiBTUFJFQURTSEVFVF9WQUxVRV9GSUxURVJcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5zcHJlYWRzaGVldEZpbHRlcnMuY3VzdG9tT3BlcmF0b3IgPSBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXEgIDogXCJlcXVhbFwiLFxuICAgICAgICBndCAgOiBcImdyZWF0ZXJUaGFuXCIsXG4gICAgICAgIGd0ZSA6IFwiZ3JlYXRlclRoYW5PckVxdWFsXCIsXG4gICAgICAgIGx0ICA6IFwibGVzc1RoYW5cIixcbiAgICAgICAgbHRlIDogXCJsZXNzVGhhbk9yRXF1YWxcIixcbiAgICAgICAgbmUgIDogXCJub3RFcXVhbFwiLFxuXG4gICAgICAgIC8vIFRoZXNlIGFyZSBub3QgaW4gdGhlIHNwZWMsIGJ1dCBzZWVtcyB0byBiZSBob3cgRXhjZWwgZG9lc1xuICAgICAgICAvLyBpdCAoc2VlIGN1c3RvbVZhbHVlIGJlbG93KS4gIEZvciB0aGUgbm9uLW5lZ2F0ZWQgdmVyc2lvbnMsXG4gICAgICAgIC8vIHRoZSBvcGVyYXRvciBhdHRyaWJ1dGUgaXMgbWlzc2luZyBjb21wbGV0ZWx5LlxuICAgICAgICBkb2Vzbm90c3RhcnR3aXRoOiBcIm5vdEVxdWFsXCIsXG4gICAgICAgIGRvZXNub3RlbmR3aXRoOiBcIm5vdEVxdWFsXCIsXG4gICAgICAgIGRvZXNub3Rjb250YWluOiBcIm5vdEVxdWFsXCIsXG4gICAgICAgIGRvZXNub3RtYXRjaDogXCJub3RFcXVhbFwiXG4gICAgfVtmLm9wZXJhdG9yLnRvTG93ZXJDYXNlKCldO1xufTtcblxuZnVuY3Rpb24gcXVvdGVTaGVldChuYW1lKSB7XG4gICAgaWYgKC9eXFwnLy50ZXN0KG5hbWUpKSB7IC8vIGFzc3VtZSBhbHJlYWR5IHF1b3RlZCwgdGhlIFNwcmVhZHNoZWV0IGRvZXMgaXQuXG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBpZiAoL15bYS16X11bYS16MC05X10qJC9pLnRlc3QobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7ICAgICAgICAvLyBubyBuZWVkIHRvIHF1b3RlIGl0XG4gICAgfVxuICAgIHJldHVybiBcIidcIiArIG5hbWUucmVwbGFjZSgvXFx4MjcvZywgXCJcXFxcJ1wiKSArIFwiJ1wiO1xufVxuXG5zcHJlYWRzaGVldEZpbHRlcnMuY3VzdG9tVmFsdWUgPSBmdW5jdGlvbihmKSB7XG4gICAgZnVuY3Rpb24gZXNjKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbKj9dKS9nLCBcIn4kMVwiKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGYub3BlcmF0b3IudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwic3RhcnRzd2l0aFwiOlxuICAgICAgICBjYXNlIFwiZG9lc25vdHN0YXJ0d2l0aFwiOlxuICAgICAgICAgICAgcmV0dXJuIGVzYyhmLnZhbHVlKSArIFwiKlwiO1xuXG4gICAgICAgIGNhc2UgXCJlbmRzd2l0aFwiOlxuICAgICAgICBjYXNlIFwiZG9lc25vdGVuZHdpdGhcIjpcbiAgICAgICAgICAgIHJldHVybiBcIipcIiArIGVzYyhmLnZhbHVlKTtcblxuICAgICAgICBjYXNlIFwiY29udGFpbnNcIjpcbiAgICAgICAgY2FzZSBcImRvZXNub3Rjb250YWluXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIqXCIgKyBlc2MoZi52YWx1ZSkgKyBcIipcIjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGYudmFsdWU7XG4gICAgfVxufTtcblxuc3ByZWFkc2hlZXRGaWx0ZXJzLmR5bmFtaWNGaWx0ZXJUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHF1YXJ0ZXIxICA6IFwiUTFcIixcbiAgICAgICAgcXVhcnRlcjIgIDogXCJRMlwiLFxuICAgICAgICBxdWFydGVyMyAgOiBcIlEzXCIsXG4gICAgICAgIHF1YXJ0ZXI0ICA6IFwiUTRcIixcbiAgICAgICAgamFudWFyeSAgIDogXCJNMVwiLFxuICAgICAgICBmZWJydWFyeSAgOiBcIk0yXCIsXG4gICAgICAgIG1hcmNoICAgICA6IFwiTTNcIixcbiAgICAgICAgYXByaWwgICAgIDogXCJNNFwiLFxuICAgICAgICBtYXkgICAgICAgOiBcIk01XCIsXG4gICAgICAgIGp1bmUgICAgICA6IFwiTTZcIixcbiAgICAgICAganVseSAgICAgIDogXCJNN1wiLFxuICAgICAgICBhdWd1c3QgICAgOiBcIk04XCIsXG4gICAgICAgIHNlcHRlbWJlciA6IFwiTTlcIixcbiAgICAgICAgb2N0b2JlciAgIDogXCJNMTBcIixcbiAgICAgICAgbm92ZW1iZXIgIDogXCJNMTFcIixcbiAgICAgICAgZGVjZW1iZXIgIDogXCJNMTJcIlxuICAgIH1bdHlwZS50b0xvd2VyQ2FzZSgpXSB8fCB0eXBlO1xufTtcblxuZXhwb3J0IHtcbiAgICBXb3JrYm9vayxcbiAgICBXb3Jrc2hlZXRcbn07XG4iXSwibmFtZXMiOlsibGV0IiwiY29uc3QiLCJ0aGlzIiwiY3VycmVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLElBQUksT0FBTyxHQUFHO0lBQ1YsT0FBTyxFQUFFLFNBQVMsUUFBUSxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDO0tBQ25CO0NBQ0os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