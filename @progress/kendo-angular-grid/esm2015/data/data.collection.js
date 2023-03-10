/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { iterator } from '../utils';
import { getIterator, itemAt } from './data.iterators';
/**
 * @hidden
 */
export class DataResultIterator {
    constructor(source, skip = 0, groupFooters = false) {
        this.source = source;
        this.skip = skip;
        this.groupFooters = groupFooters;
        this.source = this.source ? this.source : [];
        this.isObject = this.isGridDataResult(this.source);
    }
    isGridDataResult(source) {
        return source.total !== undefined && source.data !== undefined;
    }
    get total() {
        return this.isObject ? this.source.total : this.source.length;
    }
    get data() {
        return this.isObject ? this.source.data : this.source;
    }
    map(fn) {
        return this.data.map(fn);
    }
    filter(fn) {
        return this.data.filter(fn);
    }
    reduce(fn, init) {
        return this.data.reduce(fn, init);
    }
    forEach(fn) {
        this.data.forEach(fn);
    }
    some(fn) {
        return this.data.some(fn);
    }
    [iterator]() {
        return getIterator(this.data, {
            dataIndex: this.skip,
            footers: this.groupFooters,
            groupIndex: this.skip
        });
    }
    toString() { return this.data.toString(); }
}
/**
 * @hidden
 */
export class DataCollection {
    constructor(accessor) {
        this.accessor = accessor;
    }
    get total() { return this.accessor().total; }
    get length() { return this.accessor().data.length; }
    get first() { return this.accessor().data[0]; }
    get last() { return this.accessor().data[this.length - 1]; }
    at(index) {
        return itemAt(this.accessor().data, index);
    }
    map(fn) { return this.accessor().map(fn); }
    filter(fn) {
        return this.accessor().filter(fn);
    }
    reduce(fn, init) {
        return this.accessor().reduce(fn, init);
    }
    forEach(fn) {
        this.accessor().forEach(fn);
    }
    some(fn) {
        return this.accessor().some(fn);
    }
    [iterator]() {
        return this.accessor()[iterator]();
    }
    toString() { return this.accessor().toString(); }
}
