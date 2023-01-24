/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) { var b = typeof a; b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; return "array" == b || "object" == b && "number" == typeof a.length; }
function n(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function ca(a) { return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea); }
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b, c) { return a.call.apply(a.bind, arguments); }
function ha(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function p(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = fa : p = ha; return p.apply(null, arguments); }
function ia(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
function q() { return Date.now(); }
function r(a, b) { function c() { } c.prototype = b.prototype; a.X = b.prototype; a.prototype = new c; a.prototype.constructor = a; a.Pb = function (d, e, f) { for (var h = Array(arguments.length - 2), m = 2; m < arguments.length; m++)
    h[m - 2] = arguments[m]; return b.prototype[e].apply(d, h); }; }
function t() { this.j = this.j; this.i = this.i; }
var ka = 0;
t.prototype.j = !1;
t.prototype.ka = function () { if (!this.j && (this.j = !0, this.H(), 0 != ka)) {
    var a = ca(this);
} };
t.prototype.H = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var ma = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, na = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function oa(a) { a: {
    var b = pa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function qa(a) { return Array.prototype.concat.apply([], arguments); }
function ra(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function sa(a) { return /^[\s\xa0]*$/.test(a); }
var ta = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function u(a, b) { return -1 != a.indexOf(b); }
function ua(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var w;
a: {
    var va = k.navigator;
    if (va) {
        var wa = va.userAgent;
        if (wa) {
            w = wa;
            break a;
        }
    }
    w = "";
}
function xa(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function ya(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ca(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < za.length; f++)
        c = za[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Da(a) { Da[" "](a); return a; }
Da[" "] = aa;
function Ea(a, b) { var c = Fa; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ga = u(w, "Opera"), x = u(w, "Trident") || u(w, "MSIE"), Ha = u(w, "Edge"), Ia = Ha || x, Ja = u(w, "Gecko") && !(u(w.toLowerCase(), "webkit") && !u(w, "Edge")) && !(u(w, "Trident") || u(w, "MSIE")) && !u(w, "Edge"), Ka = u(w.toLowerCase(), "webkit") && !u(w, "Edge");
function La() { var a = k.document; return a ? a.documentMode : void 0; }
var Ma;
a: {
    var Na = "", Oa = function () { var a = w; if (Ja)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ha)
        return /Edge\/([\d\.]+)/.exec(a); if (x)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Ka)
        return /WebKit\/(\S+)/.exec(a); if (Ga)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Oa && (Na = Oa ? Oa[1] : "");
    if (x) {
        var Pa = La();
        if (null != Pa && Pa > parseFloat(Na)) {
            Ma = String(Pa);
            break a;
        }
    }
    Ma = Na;
}
var Fa = {};
function Qa(a) { return Ea(a, function () { {
    var b = 0;
    var e = ta(String(Ma)).split("."), f = ta(String(a)).split("."), h = Math.max(e.length, f.length);
    for (var m = 0; 0 == b && m < h; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = ua(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ua(0 == c[2].length, 0 == d[2].length) || ua(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Ra;
if (k.document && x) {
    var Sa = La();
    Ra = Sa ? Sa : parseInt(Ma, 10) || void 0;
}
else
    Ra = void 0;
var Ta = Ra;
var Ua = !x || 9 <= Number(Ta), Va = x && !Qa("9"), Wa = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function y(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
y.prototype.b = function () { this.defaultPrevented = !0; };
function z(a, b) {
    y.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Ja) {
                a: {
                    try {
                        Da(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Xa[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(z, y);
var Xa = { 2: "touch", 3: "pen", 4: "mouse" };
z.prototype.b = function () { z.X.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Va)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var A = "closure_listenable_" + (1E6 * Math.random() | 0), Ya = 0;
function Za(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.da = e; this.key = ++Ya; this.Y = this.Z = !1; }
function $a(a) { a.Y = !0; a.listener = null; a.proxy = null; a.src = null; a.da = null; }
function ab(a) { this.src = a; this.a = {}; this.b = 0; }
ab.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var h = bb(a, b, d, e); -1 < h ? (b = a[h], c || (b.Z = !1)) : (b = new Za(b, this.src, f, !!d, e), b.Z = c, a.push(b)); return b; };
function cb(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = ma(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && ($a(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function bb(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.da == d)
        return e;
} return -1; }
var db = "closure_lm_" + (1E6 * Math.random() | 0), eb = {};
function gb(a, b, c, d, e) { if (d && d.once)
    return hb(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        gb(a, b[f], c, d, e);
    return null;
} c = ib(c); return a && a[A] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !1, d, e); }
function jb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h = n(e) ? !!e.capture : !!e;
    if (h && !Ua)
        return null;
    var m = kb(a);
    m || (a[db] = m = new ab(a));
    c = m.add(b, c, d, h, f);
    if (c.proxy)
        return c;
    d = lb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Wa || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(mb(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function lb() { var a = nb, b = Ua ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function hb(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        hb(a, b[f], c, d, e);
    return null;
} c = ib(c); return a && a[A] ? a.xa(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !0, d, e); }
function ob(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        ob(a, b[f], c, d, e);
else
    (d = n(d) ? !!d.capture : !!d, c = ib(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = bb(f, c, d, e), -1 < c && ($a(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = kb(a)) && (b = a.a[b.toString()], a = -1, b && (a = bb(b, c, d, e)), (c = -1 < a ? b[a] : null) && pb(c)); }
function pb(a) { if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[A])
        cb(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(mb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = kb(b)) ? (cb(c, a), 0 == c.b && (c.src = null, b[db] = null)) : $a(a);
    }
} }
function mb(a) { return a in eb ? eb[a] : eb[a] = "on" + a; }
function qb(a, b) { var c = a.listener, d = a.da || a.src; a.Z && pb(a); return c.call(d, b); }
function nb(a, b) { if (a.Y)
    return !0; if (!Ua) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new z(b, this);
    return qb(a, b);
} return qb(a, new z(b, this)); }
function kb(a) { a = a[db]; return a instanceof ab ? a : null; }
var rb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function ib(a) { if ("function" === typeof a)
    return a; a[rb] || (a[rb] = function (b) { return a.handleEvent(b); }); return a[rb]; }
function D() { t.call(this); this.c = new ab(this); this.J = this; this.D = null; }
r(D, t);
D.prototype[A] = !0;
g = D.prototype;
g.addEventListener = function (a, b, c, d) { gb(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { ob(this, a, b, c, d); };
function E(a, b) { var c, d = a.D; if (d)
    for (c = []; d; d = d.D)
        c.push(d); a = a.J; d = b.type || b; if ("string" === typeof b)
    b = new y(b, a);
else if (b instanceof y)
    b.target = b.target || a;
else {
    var e = b;
    b = new y(d, a);
    Ca(b, e);
} e = !0; if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
        var h = b.a = c[f];
        e = sb(h, d, !0, b) && e;
    } h = b.a = a; e = sb(h, d, !0, b) && e; e = sb(h, d, !1, b) && e; if (c)
    for (f = 0; f < c.length; f++)
        h = b.a = c[f], e = sb(h, d, !1, b) && e; }
g.H = function () { D.X.H.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            $a(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.D = null; };
g.wa = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
g.xa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function sb(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.Y && h.capture == c) {
        var m = h.listener, l = h.da || h.src;
        h.Z && cb(a.c, h);
        e = !1 !== m.call(l, d) && e;
    }
} return e && !d.defaultPrevented; }
var tb = k.JSON.stringify;
function ub() { this.b = this.a = null; }
var wb = new /** @class */ (function () {
    function class_1(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new vb; }, function (a) { a.reset(); });
ub.prototype.add = function (a, b) { var c = wb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function xb() { var a = zb, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function vb() { this.next = this.b = this.a = null; }
vb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
vb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Ab(a) { k.setTimeout(function () { throw a; }, 0); }
function Bb(a, b) { Cb || Db(); Eb || (Cb(), Eb = !0); zb.add(a, b); }
var Cb;
function Db() { var a = k.Promise.resolve(void 0); Cb = function () { a.then(Fb); }; }
var Eb = !1, zb = new ub;
function Fb() { for (var a; a = xb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Ab(c);
    }
    var b = wb;
    b.f(a);
    100 > b.b && (b.b++, a.next = b.a, b.a = a);
} Eb = !1; }
function Gb(a, b) { D.call(this); this.b = a || 1; this.a = b || k; this.f = p(this.eb, this); this.g = q(); }
r(Gb, D);
g = Gb.prototype;
g.aa = !1;
g.M = null;
g.eb = function () { if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), E(this, "tick"), this.aa && (Hb(this), this.start()));
} };
g.start = function () { this.aa = !0; this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Hb(a) { a.aa = !1; a.M && (a.a.clearTimeout(a.M), a.M = null); }
g.H = function () { Gb.X.H.call(this); Hb(this); delete this.a; };
function Ib(a, b, c) { if ("function" === typeof a)
    c && (a = p(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Jb(a) { a.a = Ib(function () { a.a = null; a.c && (a.c = !1, Jb(a)); }, a.h); var b = a.b; a.b = null; a.g.apply(null, b); }
var Kb = /** @class */ (function (_super) {
    __extends(Kb, _super);
    function Kb(a, b) {
        var _this = _super.call(this) || this;
        _this.g = a;
        _this.h = b;
        _this.b = null;
        _this.c = !1;
        _this.a = null;
        return _this;
    }
    Kb.prototype.f = function (a) { this.b = arguments; this.a ? this.c = !0 : Jb(this); };
    Kb.prototype.H = function () { _super.prototype.H.call(this); this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null); };
    return Kb;
}(t));
function F(a) { t.call(this); this.b = a; this.a = {}; }
r(F, t);
var Lb = [];
function Mb(a, b, c, d) { Array.isArray(c) || (c && (Lb[0] = c.toString()), c = Lb); for (var e = 0; e < c.length; e++) {
    var f = gb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Nb(a) { xa(a.a, function (b, c) { this.a.hasOwnProperty(c) && pb(b); }, a); a.a = {}; }
F.prototype.H = function () { F.X.H.call(this); Nb(this); };
F.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Ob() { this.a = !0; }
function Pb(a, b, c, d, e, f) { a.info(function () { if (a.a)
    if (f) {
        var h = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
            var v = m[l].split("=");
            if (1 < v.length) {
                var C = v[0];
                v = v[1];
                var B = C.split("_");
                h = 2 <= B.length && "type" == B[1] ? h + (C + "=" + v + "&") : h + (C + "=redacted&");
            }
        }
    }
    else
        h = null;
else
    h = f; return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h; }); }
function Qb(a, b, c, d, e, f, h) { a.info(function () { return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h; }); }
function G(a, b, c, d) { a.info(function () { return "XMLHTTP TEXT (" + b + "): " + Rb(a, c) + (d ? " " + d : ""); }); }
function Sb(a, b) { a.info(function () { return "TIMEOUT: " + b; }); }
Ob.prototype.info = function () { };
function Rb(a, b) { if (!a.a)
    return b; if (!b)
    return null; try {
    var c = JSON.parse(b);
    if (c)
        for (a = 0; a < c.length; a++)
            if (Array.isArray(c[a])) {
                var d = c[a];
                if (!(2 > d.length)) {
                    var e = d[1];
                    if (Array.isArray(e) && !(1 > e.length)) {
                        var f = e[0];
                        if ("noop" != f && "stop" != f && "close" != f)
                            for (var h = 1; h < e.length; h++)
                                e[h] = "";
                    }
                }
            }
    return tb(c);
}
catch (m) {
    return b;
} }
var H = {}, Tb = null;
function Ub() { return Tb = Tb || new D; }
H.Ga = "serverreachability";
function Vb(a) { y.call(this, H.Ga, a); }
r(Vb, y);
function I(a) { var b = Ub(); E(b, new Vb(b, a)); }
H.STAT_EVENT = "statevent";
function Wb(a, b) { y.call(this, H.STAT_EVENT, a); this.stat = b; }
r(Wb, y);
function J(a) { var b = Ub(); E(b, new Wb(b, a)); }
H.Ha = "timingevent";
function Xb(a) { y.call(this, H.Ha, a); }
r(Xb, y);
function K(a, b) { if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Yb = { NO_ERROR: 0, fb: 1, sb: 2, rb: 3, mb: 4, qb: 5, tb: 6, Ea: 7, TIMEOUT: 8, wb: 9 };
var Zb = { kb: "complete", Gb: "success", Fa: "error", Ea: "abort", yb: "ready", zb: "readystatechange", TIMEOUT: "timeout", ub: "incrementaldata", xb: "progress", nb: "downloadprogress", Ob: "uploadprogress" };
function $b() { }
$b.prototype.b = null;
function ac(a) { return a.b || (a.b = a.c()); }
function bc() { }
var L = { OPEN: "a", jb: "b", Fa: "c", vb: "d" };
function cc() { y.call(this, "d"); }
r(cc, y);
function dc() { y.call(this, "c"); }
r(dc, y);
var ec;
function fc() { }
r(fc, $b);
fc.prototype.a = function () { return new XMLHttpRequest; };
fc.prototype.c = function () { return {}; };
ec = new fc;
function M(a, b, c, d) { this.g = a; this.c = b; this.f = c; this.S = d || 1; this.J = new F(this); this.P = gc; a = Ia ? 125 : void 0; this.R = new Gb(a); this.B = null; this.b = !1; this.j = this.l = this.i = this.G = this.u = this.T = this.o = null; this.s = []; this.a = null; this.D = 0; this.h = this.m = null; this.N = -1; this.A = !1; this.O = 0; this.F = null; this.V = this.C = this.U = this.I = !1; }
var gc = 45E3, hc = {}, ic = {};
g = M.prototype;
g.setTimeout = function (a) { this.P = a; };
function jc(a, b, c) { a.G = 1; a.i = kc(N(b)); a.j = c; a.I = !0; lc(a, null); }
function lc(a, b) { a.u = q(); mc(a); a.l = N(a.i); var c = a.l, d = a.S; Array.isArray(d) || (d = [String(d)]); nc(c.b, "t", d); a.D = 0; a.a = oc(a.g, a.g.C ? b : null); 0 < a.O && (a.F = new Kb(p(a.Da, a, a.a), a.O)); Mb(a.J, a.a, "readystatechange", a.bb); b = a.B ? ya(a.B) : {}; a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b)); I(1); Pb(a.c, a.m, a.l, a.f, a.S, a.j); }
g.bb = function (a) { a = a.target; var b = this.F; b && 3 == O(a) ? b.f() : this.Da(a); };
g.Da = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = O(this.a), c = this.a.va(), d = this.a.W();
                if (!(3 > b || 3 == b && !Ia && !this.a.$())) {
                    this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? I(3) : I(2));
                    pc(this);
                    var e = this.a.W();
                    this.N = e;
                    var f = this.a.$();
                    this.b = 200 == e;
                    Qb(this.c, this.m, this.l, this.f, this.S, b, e);
                    if (this.b) {
                        if (this.U && !this.C) {
                            b: {
                                if (this.a) {
                                    var h, m = this.a;
                                    if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(h)) {
                                        var l = h;
                                        break b;
                                    }
                                }
                                l = null;
                            }
                            if (l)
                                G(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.C = !0, qc(this, l);
                            else {
                                this.b = !1;
                                this.h = 3;
                                J(12);
                                P(this);
                                rc(this);
                                break a;
                            }
                        }
                        this.I ? (sc(this, b, f), Ia && this.b && 3 == b && (Mb(this.J, this.R, "tick", this.ab), this.R.start())) : (G(this.c, this.f, f, null), qc(this, f));
                        4 == b && P(this);
                        this.b && !this.A && (4 == b ? tc(this.g, this) : (this.b = !1, mc(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, J(12)) : (this.h = 0, J(13)), P(this), rc(this);
                }
            }
    }
    catch (v) { }
    finally { }
};
function sc(a, b, c) { for (var d = !0; !a.A && a.D < c.length;) {
    var e = uc(a, c);
    if (e == ic) {
        4 == b && (a.h = 4, J(14), d = !1);
        G(a.c, a.f, null, "[Incomplete Response]");
        break;
    }
    else if (e == hc) {
        a.h = 4;
        J(15);
        G(a.c, a.f, c, "[Invalid Chunk]");
        d = !1;
        break;
    }
    else
        G(a.c, a.f, e, null), qc(a, e);
} 4 == b && 0 == c.length && (a.h = 1, J(16), d = !1); a.b = a.b && d; d ? 0 < c.length && !a.V && (a.V = !0, b = a.g, b.a == a && b.U && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), vc(b), b.F = !0, J(11))) : (G(a.c, a.f, c, "[Invalid Chunked Response]"), P(a), rc(a)); }
g.ab = function () { if (this.a) {
    var a = O(this.a), b = this.a.$();
    this.D < b.length && (pc(this), sc(this, a, b), this.b && 4 != a && mc(this));
} };
function uc(a, b) { var c = a.D, d = b.indexOf("\n", c); if (-1 == d)
    return ic; c = Number(b.substring(c, d)); if (isNaN(c))
    return hc; d += 1; if (d + c > b.length)
    return ic; b = b.substr(d, c); a.D = d + c; return b; }
g.cancel = function () { this.A = !0; P(this); };
function mc(a) { a.T = q() + a.P; wc(a, a.P); }
function wc(a, b) { if (null != a.o)
    throw Error("WatchDog timer not null"); a.o = K(p(a.$a, a), b); }
function pc(a) { a.o && (k.clearTimeout(a.o), a.o = null); }
g.$a = function () { this.o = null; var a = q(); 0 <= a - this.T ? (Sb(this.c, this.l), 2 != this.G && (I(3), J(17)), P(this), this.h = 2, rc(this)) : wc(this, this.T - a); };
function rc(a) { 0 == a.g.v || a.A || tc(a.g, a); }
function P(a) { pc(a); var b = a.F; b && "function" == typeof b.ka && b.ka(); a.F = null; Hb(a.R); Nb(a.J); a.a && (b = a.a, a.a = null, b.abort(), b.ka()); }
function qc(a, b) {
    try {
        var c = a.g;
        if (0 != c.v && (c.a == a || xc(c.b, a)))
            if (c.I = a.N, !a.C && xc(c.b, a) && 3 == c.v) {
                try {
                    var d = c.la.a.parse(b);
                }
                catch (yc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.j) {
                                if (c.a)
                                    if (c.a.u + 3E3 < a.u)
                                        zc(c), Ac(c);
                                    else
                                        break a;
                                Bc(c);
                                J(18);
                            }
                        }
                    else
                        c.pa = e[1], 0 < c.pa - c.P && 37500 > e[2] && c.G && 0 == c.o && !c.m && (c.m = K(p(c.Xa, c), 6E3));
                    if (1 >= Dc(c.b) && c.fa) {
                        try {
                            c.fa();
                        }
                        catch (yc) { }
                        c.fa = void 0;
                    }
                }
                else
                    Q(c, 11);
            }
            else if ((a.C || c.a == a) && zc(c), !sa(b))
                for (b = d = c.la.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.P = e[0], e = e[1], 2 == c.v)
                        if ("c" == e[0]) {
                            c.J = e[1];
                            c.ha = e[2];
                            var f = e[3];
                            null != f && (c.ia = f, c.c.info("VER=" + c.ia));
                            var h = e[4];
                            null != h && (c.qa = h, c.c.info("SVER=" + c.qa));
                            var m = e[5];
                            if (null != m && "number" === typeof m && 0 < m) {
                                var l = 1.5 * m;
                                c.D = l;
                                c.c.info("backChannelRequestTimeoutMs_=" + l);
                            }
                            l = c;
                            var v = a.a;
                            if (v) {
                                var C = v.a ? v.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (C) {
                                    var B = l.b;
                                    !B.a && (u(C, "spdy") || u(C, "quic") || u(C, "h2")) && (B.f = B.g, B.a = new Set, B.b && (Ec(B, B.b), B.b = null));
                                }
                                if (l.A) {
                                    var yb = v.a ? v.a.getResponseHeader("X-HTTP-Session-Id") :
                                        null;
                                    yb && (l.oa = yb, R(l.B, l.A, yb));
                                }
                            }
                            c.v = 3;
                            c.f && c.f.ua();
                            c.U && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                            l = c;
                            var Aa = a;
                            l.ma = Fc(l, l.C ? l.ha : null, l.ga);
                            if (Aa.C) {
                                Gc(l.b, Aa);
                                var Ba = Aa, Cc = l.D;
                                Cc && Ba.setTimeout(Cc);
                                Ba.o && (pc(Ba), mc(Ba));
                                l.a = Aa;
                            }
                            else
                                Hc(l);
                            0 < c.g.length && Ic(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || Q(c, 7);
                    else
                        3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? Q(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.ta(e), c.o = 0);
        I(4);
    }
    catch (yc) { }
}
function Kc(a) { if (a.K && "function" == typeof a.K)
    return a.K(); if ("string" === typeof a)
    return a.split(""); if (ba(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Lc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (ba(a) || "string" === typeof a)
    na(a, b, void 0);
else {
    if (a.L && "function" == typeof a.L)
        var c = a.L();
    else if (a.K && "function" == typeof a.K)
        c = void 0;
    else if (ba(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function S(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof S)
        for (c = a.L(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
g = S.prototype;
g.K = function () { Mc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
g.L = function () { Mc(this); return this.a.concat(); };
function Mc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        T(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], T(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
g.get = function (a, b) { return T(this.b, a) ? this.b[a] : b; };
g.set = function (a, b) { T(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
g.forEach = function (a, b) { for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function T(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function U(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof U) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new Sc;
    c.c = b.c;
    b.a && (c.a = new S(b.a), c.b = b.b);
    Tc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Uc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Uc(c[5] || "", !0), Tc(this, c[6] || "", !0), this.i = Uc(c[7] || "")) : (this.a = !!b, this.b = new Sc(null, this.a)); }
U.prototype.toString = function () { var a = [], b = this.f; b && a.push(Vc(b, Wc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(Vc(b, Wc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Vc(c, "/" == c.charAt(0) ? Xc : Yc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", Vc(c, Zc)); return a.join(""); };
function N(a) { return new U(a); }
function Pc(a, b, c) { a.f = c ? Uc(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Qc(a, b, c) { a.c = c ? Uc(b, !0) : b; }
function Rc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Tc(a, b, c) { b instanceof Sc ? (a.b = b, $c(a.b, a.a)) : (c || (b = Vc(b, ad)), a.b = new Sc(b, a.a)); }
function R(a, b, c) { a.b.set(b, c); }
function kc(a) { R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function bd(a) { return a instanceof U ? N(a) : new U(a, void 0); }
function cd(a, b, c, d) { var e = new U(null, void 0); a && Pc(e, a); b && Qc(e, b); c && Rc(e, c); d && (e.g = d); return e; }
function Uc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function Vc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, dd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function dd(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Wc = /[#\/\?@]/g, Yc = /[#\?:]/g, Xc = /[#\?]/g, ad = /[#\?@]/g, Zc = /#/g;
function Sc(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function V(a) { a.a || (a.a = new S, a.b = 0, a.c && Oc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
g = Sc.prototype;
g.add = function (a, b) { V(this); this.c = null; a = W(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function ed(a, b) { V(a); b = W(a, b); T(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, T(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a))); }
function fd(a, b) { V(a); b = W(a, b); return T(a.a.b, b); }
g.forEach = function (a, b) { V(this); this.a.forEach(function (c, d) { na(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
g.L = function () { V(this); for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
g.K = function (a) { V(this); var b = []; if ("string" === typeof a)
    fd(this, a) && (b = qa(b, this.a.get(W(this, a))));
else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
        b = qa(b, a[c]);
} return b; };
g.set = function (a, b) { V(this); this.c = null; a = W(this, a); fd(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
g.get = function (a, b) { if (!a)
    return b; a = this.K(a); return 0 < a.length ? String(a[0]) : b; };
function nc(a, b, c) { ed(a, b); 0 < c.length && (a.c = null, a.a.set(W(a, b), ra(c)), a.b += c.length); }
g.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
    }
} return this.c = a.join("&"); };
function W(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function $c(a, b) { b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (ed(this, d), nc(this, e, c)); }, a)); a.f = b; }
var gd = /** @class */ (function () {
    function gd(a, b) {
        this.b = a;
        this.a = b;
    }
    return gd;
}());
function hd(a) { this.g = a || id; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ja && k.ja.za && k.ja.za() && k.ja.za().Qb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var id = 10;
function jd(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function Dc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function xc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function Ec(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Gc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
hd.prototype.cancel = function () {
    var e_1, _a;
    this.c = kd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function kd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.s);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.s);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return ra(a.c);
}
function ld() { }
ld.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
ld.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function md() { this.a = new ld; }
function nd(a, b, c) { var d = c || ""; try {
    Lc(a, function (e, f) { var h = e; n(e) && (h = tb(e)); b.push(d + f + "=" + encodeURIComponent(h)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function od(a, b) { var c = new Ob; if (k.Image) {
    var d = new Image;
    d.onload = ia(pd, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ia(pd, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ia(pd, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ia(pd, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function pd(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var qd = k.JSON.parse;
function X(a) { D.call(this); this.headers = new S; this.l = a || null; this.b = !1; this.u = this.a = null; this.C = ""; this.h = 0; this.f = ""; this.g = this.B = this.m = this.A = !1; this.s = 0; this.o = null; this.I = rd; this.F = this.G = !1; }
r(X, D);
var rd = "", sd = /^https?$/i, td = ["POST", "PUT"];
g = X.prototype;
g.ba = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.C + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.C = a;
    this.f = "";
    this.h = 0;
    this.A = !1;
    this.b = !0;
    this.a = this.l ? this.l.a() : ec.a();
    this.u = this.l ? ac(this.l) : ac(ec);
    this.a.onreadystatechange = p(this.Aa, this);
    try {
        this.B = !0, this.a.open(b, String(a), !0), this.B = !1;
    }
    catch (f) {
        ud(this, f);
        return;
    }
    a = c || "";
    var e = new S(this.headers);
    d && Lc(d, function (f, h) { e.set(h, f); });
    d = oa(e.L());
    c = k.FormData && a instanceof k.FormData;
    !(0 <= ma(td, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) { this.a.setRequestHeader(h, f); }, this);
    this.I && (this.a.responseType = this.I);
    "withCredentials" in this.a && this.a.withCredentials !== this.G && (this.a.withCredentials = this.G);
    try {
        vd(this), 0 < this.s && ((this.F = wd(this.a)) ? (this.a.timeout = this.s, this.a.ontimeout = p(this.ya, this)) : this.o = Ib(this.ya, this.s, this)), this.m = !0, this.a.send(a), this.m = !1;
    }
    catch (f) {
        ud(this, f);
    }
};
function wd(a) { return x && Qa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function pa(a) { return "content-type" == a.toLowerCase(); }
g.ya = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.s + "ms, aborting", this.h = 8, E(this, "timeout"), this.abort(8)); };
function ud(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; xd(a); yd(a); }
function xd(a) { a.A || (a.A = !0, E(a, "complete"), E(a, "error")); }
g.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, E(this, "complete"), E(this, "abort"), yd(this)); };
g.H = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), yd(this, !0)); X.X.H.call(this); };
g.Aa = function () { this.j || (this.B || this.m || this.g ? zd(this) : this.Za()); };
g.Za = function () { zd(this); };
function zd(a) {
    if (a.b && "undefined" != typeof goog && (!a.u[1] || 4 != O(a) || 2 != a.W()))
        if (a.m && 4 == O(a))
            Ib(a.Aa, 0, a);
        else if (E(a, "readystatechange"), 4 == O(a)) {
            a.b = !1;
            try {
                {
                    var l = a.W();
                    a: switch (l) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var b = !0;
                            break a;
                        default: b = !1;
                    }
                    var c;
                    if (!(c = b)) {
                        var d;
                        if (d = 0 === l) {
                            var e = String(a.C).match(Nc)[1] || null;
                            if (!e && k.self && k.self.location) {
                                var f = k.self.location.protocol;
                                e = f.substr(0, f.length - 1);
                            }
                            d = !sd.test(e ? e.toLowerCase() : "");
                        }
                        c = d;
                    }
                    var h = c;
                }
                if (h)
                    E(a, "complete"),
                        E(a, "success");
                else {
                    a.h = 6;
                    try {
                        var m = 2 < O(a) ? a.a.statusText : "";
                    }
                    catch (l) {
                        m = "";
                    }
                    a.f = m + " [" + a.W() + "]";
                    xd(a);
                }
            }
            finally {
                yd(a);
            }
        }
}
function yd(a, b) { if (a.a) {
    vd(a);
    var c = a.a, d = a.u[0] ? aa : null;
    a.a = null;
    a.u = null;
    b || E(a, "ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function vd(a) { a.a && a.F && (a.a.ontimeout = null); a.o && (k.clearTimeout(a.o), a.o = null); }
function O(a) { return a.a ? a.a.readyState : 0; }
g.W = function () { try {
    return 2 < O(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
g.$ = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
g.Qa = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return qd(b);
} };
g.va = function () { return this.h; };
g.Ra = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function Ad(a) { var b = ""; xa(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function Bd(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = Ad(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : R(a, b, c)); }
function Cd(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function Dd(a) {
    this.qa = 0;
    this.g = [];
    this.c = new Ob;
    this.ha = this.ma = this.B = this.ga = this.a = this.oa = this.A = this.V = this.i = this.O = this.l = null;
    this.Pa = this.R = 0;
    this.Ma = Cd("failFast", !1, a);
    this.G = this.m = this.j = this.h = this.f = null;
    this.S = !0;
    this.I = this.pa = this.P = -1;
    this.T = this.o = this.u = 0;
    this.Ia = Cd("baseRetryDelayMs", 5E3, a);
    this.Sa = Cd("retryDelaySeedMs", 1E4, a);
    this.Na = Cd("forwardChannelMaxRetries", 2, a);
    this.na = Cd("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Oa = a && a.xmlHttpFactory || void 0;
    this.D = void 0;
    this.C =
        a && a.supportsCrossDomainXhr || !1;
    this.J = "";
    this.b = new hd(a && a.concurrentRequestLimit);
    this.la = new md;
    this.ea = a && a.fastHandshake || !1;
    this.Ja = a && a.b || !1;
    a && a.f && (this.c.a = !1);
    a && a.forceLongPolling && (this.S = !1);
    this.U = !this.ea && this.S && a && a.detectBufferingProxy || !1;
    this.fa = void 0;
    this.N = 0;
    this.F = !1;
    this.s = null;
    (this.La = a && a.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.");
}
g = Dd.prototype;
g.ia = 8;
g.v = 1;
function Jc(a) { Ed(a); if (3 == a.v) {
    var b = a.R++, c = N(a.B);
    R(c, "SID", a.J);
    R(c, "RID", b);
    R(c, "TYPE", "terminate");
    Fd(a, c);
    b = new M(a, a.c, b, void 0);
    b.G = 2;
    b.i = kc(N(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && ((new Image).src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    mc(b);
} Gd(a); }
function Ac(a) { a.a && (vc(a), a.a.cancel(), a.a = null); }
function Ed(a) { Ac(a); a.j && (k.clearTimeout(a.j), a.j = null); zc(a); a.b.cancel(); a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null); }
function Hd(a, b) { a.g.push(new gd(a.Pa++, b)); 3 == a.v && Ic(a); }
function Ic(a) { jd(a.b) || a.h || (a.h = !0, Bb(a.Ca, a), a.u = 0); }
function Id(a, b) { if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return !1; if (a.h)
    return a.g = b.s.concat(a.g), !0; if (1 == a.v || 2 == a.v || a.u >= (a.Ma ? 0 : a.Na))
    return !1; a.h = K(p(a.Ca, a, b), Jd(a, a.u)); a.u++; return !0; }
g.Ca = function (a) {
    if (this.h)
        if (this.h = null, 1 == this.v) {
            if (!a) {
                this.R = Math.floor(1E5 * Math.random());
                a = this.R++;
                var b = new M(this, this.c, a, void 0), c = this.l;
                this.O && (c ? (c = ya(c), Ca(c, this.O)) : c = this.O);
                null === this.i && (b.B = c);
                var d;
                if (this.ea)
                    a: {
                        for (var e = d = 0; e < this.g.length; e++) {
                            b: {
                                var f = this.g[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.g.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Kd(this, b, d);
                e = N(this.B);
                R(e, "RID", a);
                R(e, "CVER", 22);
                this.A && R(e, "X-HTTP-Session-Id", this.A);
                Fd(this, e);
                this.i && c && Bd(e, this.i, c);
                Ec(this.b, b);
                this.Ja && R(e, "TYPE", "init");
                this.ea ? (R(e, "$req", d), R(e, "SID", "null"), b.U = !0, jc(b, e, null)) : jc(b, e, d);
                this.v = 2;
            }
        }
        else
            3 == this.v && (a ? Ld(this, a) : 0 == this.g.length || jd(this.b) || Ld(this));
};
function Ld(a, b) { var c; b ? c = b.f : c = a.R++; var d = N(a.B); R(d, "SID", a.J); R(d, "RID", c); R(d, "AID", a.P); Fd(a, d); a.i && a.l && Bd(d, a.i, a.l); c = new M(a, a.c, c, a.u + 1); null === a.i && (c.B = a.l); b && (a.g = b.s.concat(a.g)); b = Kd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.na) + Math.round(.5 * a.na * Math.random())); Ec(a.b, c); jc(c, d, b); }
function Fd(a, b) { a.f && Lc({}, function (c, d) { R(b, d, c); }); }
function Kd(a, b, c) { c = Math.min(a.g.length, c); var d = a.f ? p(a.f.Ka, a.f, a) : null; a: for (var e = a.g, f = -1;;) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
    for (var m = !0, l = 0; l < c; l++) {
        var v = e[l].b, C = e[l].a;
        v -= f;
        if (0 > v)
            f = Math.max(0, e[l].b - 100), m = !1;
        else
            try {
                nd(C, h, "req" + v + "_");
            }
            catch (B) {
                d && d(C);
            }
    }
    if (m) {
        d = h.join("&");
        break a;
    }
} a = a.g.splice(0, c); b.s = a; return d; }
function Hc(a) { a.a || a.j || (a.T = 1, Bb(a.Ba, a), a.o = 0); }
function Bc(a) { if (a.a || a.j || 3 <= a.o)
    return !1; a.T++; a.j = K(p(a.Ba, a), Jd(a, a.o)); a.o++; return !0; }
g.Ba = function () { this.j = null; Md(this); if (this.U && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = K(p(this.Ya, this), a);
} };
g.Ya = function () { this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.G = !1, this.F = !0, J(10), Ac(this), Md(this)); };
function vc(a) { null != a.s && (k.clearTimeout(a.s), a.s = null); }
function Md(a) { a.a = new M(a, a.c, "rpc", a.T); null === a.i && (a.a.B = a.l); a.a.O = 0; var b = N(a.ma); R(b, "RID", "rpc"); R(b, "SID", a.J); R(b, "CI", a.G ? "0" : "1"); R(b, "AID", a.P); Fd(a, b); R(b, "TYPE", "xmlhttp"); a.i && a.l && Bd(b, a.i, a.l); a.D && a.a.setTimeout(a.D); var c = a.a; a = a.ha; c.G = 1; c.i = kc(N(b)); c.j = null; c.I = !0; lc(c, a); }
g.Xa = function () { null != this.m && (this.m = null, Ac(this), Bc(this), J(19)); };
function zc(a) { null != a.m && (k.clearTimeout(a.m), a.m = null); }
function tc(a, b) { var c = null; if (a.a == b) {
    zc(a);
    vc(a);
    a.a = null;
    var d = 2;
}
else if (xc(a.b, b))
    c = b.s, Gc(a.b, b), d = 1;
else
    return; a.I = b.N; if (0 != a.v)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Ub();
            E(d, new Xb(d, c, b, e));
            Ic(a);
        }
        else
            Hc(a);
    else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Id(a, b) || 2 == d && Bc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                Q(a, 5);
                break;
            case 4:
                Q(a, 10);
                break;
            case 3:
                Q(a, 6);
                break;
            default: Q(a, 2);
        } }
function Jd(a, b) { var c = a.Ia + Math.floor(Math.random() * a.Sa); a.f || (c *= 2); return c * b; }
function Q(a, b) { a.c.info("Error code " + b); if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.cb, a);
    c || (c = new U("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), kc(c));
    od(c.toString(), d);
}
else
    J(2); a.v = 0; a.f && a.f.sa(b); Gd(a); Ed(a); }
g.cb = function (a) { a ? (this.c.info("Successfully pinged google.com"), J(2)) : (this.c.info("Failed to ping google.com"), J(1)); };
function Gd(a) { a.v = 0; a.I = -1; if (a.f) {
    if (0 != kd(a.b).length || 0 != a.g.length)
        a.b.c.length = 0, ra(a.g), a.g.length = 0;
    a.f.ra();
} }
function Fc(a, b, c) { var d = bd(c); if ("" != d.c)
    b && Qc(d, b + "." + d.c), Rc(d, d.h);
else {
    var e = k.location;
    d = cd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.V && xa(a.V, function (f, h) { R(d, h, f); }); b = a.A; c = a.oa; b && c && R(d, b, c); R(d, "VER", a.ia); Fd(a, d); return d; }
function oc(a, b) { if (b && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new X(a.Oa); b.G = a.C; return b; }
function Nd() { }
g = Nd.prototype;
g.ua = function () { };
g.ta = function () { };
g.sa = function () { };
g.ra = function () { };
g.Ka = function () { };
function Od() { if (x && !(10 <= Number(Ta)))
    throw Error("Environmental error: no available transport."); }
Od.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    D.call(this);
    this.a = new Dd(b);
    this.g = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.l = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = { "X-WebChannel-Client-Profile": b.a });
    this.a.O =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !sa(a) && (this.a.i = a);
    this.o = b && b.supportsCrossDomainXhr || !1;
    this.m = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !sa(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, D);
Y.prototype.h = function () { this.a.f = this.f; this.o && (this.a.C = !0); var a = this.a, b = this.g, c = this.b || void 0; J(0); a.ga = b; a.V = c || {}; a.G = a.S; a.B = Fc(a, null, a.ga); Ic(a); };
Y.prototype.close = function () { Jc(this.a); };
Y.prototype.l = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Hd(this.a, b);
}
else
    this.m ? (b = {}, b.__data__ = tb(a), Hd(this.a, b)) : Hd(this.a, a); };
Y.prototype.H = function () { this.a.f = null; delete this.f; Jc(this.a); delete this.a; Y.X.H.call(this); };
function Pd(a) { cc.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Pd, cc);
function Qd() { dc.call(this); this.status = 1; }
r(Qd, dc);
function Z(a) { this.a = a; }
r(Z, Nd);
Z.prototype.ua = function () { E(this.a, "a"); };
Z.prototype.ta = function (a) { E(this.a, new Pd(a)); };
Z.prototype.sa = function (a) { E(this.a, new Qd(a)); };
Z.prototype.ra = function () { E(this.a, "b"); };
function Rd(a) { this.f = a; }
r(Rd, $b);
Rd.prototype.a = function () { return new Sd(this.f); };
Rd.prototype.c = function (a) { return function () { return a; }; }({});
function Sd(a) { D.call(this); this.u = a; this.h = void 0; this.readyState = Td; this.status = 0; this.responseType = this.responseText = this.statusText = ""; this.onreadystatechange = null; this.l = new Headers; this.b = null; this.s = "GET"; this.o = ""; this.a = !1; this.m = this.f = this.g = null; }
r(Sd, D);
var Td = 0;
g = Sd.prototype;
g.open = function (a, b) { if (this.readyState != Td)
    throw this.abort(), Error("Error reopening a connection"); this.s = a; this.o = b; this.readyState = 1; Ud(this); };
g.send = function (a) { if (1 != this.readyState)
    throw this.abort(), Error("need to call open() first. "); this.a = !0; var b = { headers: this.l, method: this.s, credentials: this.h, cache: void 0 }; a && (b.body = a); this.u.fetch(new Request(this.o, b)).then(this.Wa.bind(this), this.ca.bind(this)); };
g.abort = function () { this.responseText = ""; this.l = new Headers; this.status = 0; this.f && this.f.cancel("Request was aborted."); 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, Vd(this)); this.readyState = Td; };
g.Wa = function (a) { this.a && (this.g = a, this.b || (this.status = this.g.status, this.statusText = this.g.statusText, this.b = a.headers, this.readyState = 2, Ud(this)), this.a && (this.readyState = 3, Ud(this), this.a && ("arraybuffer" === this.responseType ? a.arrayBuffer().then(this.Ua.bind(this), this.ca.bind(this)) : "undefined" !== typeof k.ReadableStream && "body" in a ? (this.responseText = "", this.f = a.body.getReader(), this.m = new TextDecoder, Wd(this)) : a.text().then(this.Va.bind(this), this.ca.bind(this))))); };
function Wd(a) { a.f.read().then(a.Ta.bind(a)).catch(a.ca.bind(a)); }
g.Ta = function (a) { if (this.a) {
    var b = this.m.decode(a.value ? a.value : new Uint8Array(0), { stream: !a.done });
    b && (this.responseText += b);
    a.done ? Vd(this) : Ud(this);
    3 == this.readyState && Wd(this);
} };
g.Va = function (a) { this.a && (this.responseText = a, Vd(this)); };
g.Ua = function () { this.a && Vd(this); };
g.ca = function () { this.a && Vd(this); };
function Vd(a) { a.readyState = 4; a.g = null; a.f = null; a.m = null; Ud(a); }
g.setRequestHeader = function (a, b) { this.l.append(a, b); };
g.getResponseHeader = function (a) { return this.b ? this.b.get(a.toLowerCase()) || "" : ""; };
g.getAllResponseHeaders = function () { if (!this.b)
    return ""; var a = [], b = this.b.entries(); for (var c = b.next(); !c.done;)
    c = c.value, a.push(c[0] + ": " + c[1]), c = b.next(); return a.join("\r\n"); };
function Ud(a) { a.onreadystatechange && a.onreadystatechange.call(a); }
Object.defineProperty(Sd.prototype, "withCredentials", { get: function () { return "include" === this.h; }, set: function (a) { this.h = a ? "include" : "same-origin"; } }); /*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Od.prototype.createWebChannel = Od.prototype.a;
Y.prototype.send = Y.prototype.l;
Y.prototype.open = Y.prototype.h;
Y.prototype.close = Y.prototype.close;
Yb.NO_ERROR = 0;
Yb.TIMEOUT = 8;
Yb.HTTP_ERROR = 6;
Zb.COMPLETE = "complete";
bc.EventType = L;
L.OPEN = "a";
L.CLOSE = "b";
L.ERROR = "c";
L.MESSAGE = "d";
D.prototype.listen = D.prototype.wa;
X.prototype.listenOnce = X.prototype.xa;
X.prototype.getLastError = X.prototype.Ra;
X.prototype.getLastErrorCode = X.prototype.va;
X.prototype.getStatus = X.prototype.W;
X.prototype.getResponseJson = X.prototype.Qa;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var createWebChannelTransport = function () { return new Od; };
var getStatEventTarget = function () { return Ub(); };
var ErrorCode = Yb;
var EventType = Zb;
var Event = H;
var Stat = { lb: 0, ob: 1, pb: 2, Ib: 3, Nb: 4, Kb: 5, Lb: 6, Jb: 7, Hb: 8, Mb: 9, PROXY: 10, NOPROXY: 11, Fb: 12, Bb: 13, Cb: 14, Ab: 15, Db: 16, Eb: 17, hb: 18, gb: 19, ib: 20 };
var FetchXmlHttpFactory = Rd;
var WebChannel = bc;
var XhrIo = X;

var esm = {
    createWebChannelTransport: createWebChannelTransport,
    getStatEventTarget: getStatEventTarget,
    ErrorCode: ErrorCode,
    EventType: EventType,
    Event: Event,
    Stat: Stat,
    FetchXmlHttpFactory: FetchXmlHttpFactory,
    WebChannel: WebChannel,
    XhrIo: XhrIo
};

export default esm;
export { ErrorCode, Event, EventType, FetchXmlHttpFactory, Stat, WebChannel, XhrIo, createWebChannelTransport, getStatEventTarget };
//# sourceMappingURL=index.esm.js.map
