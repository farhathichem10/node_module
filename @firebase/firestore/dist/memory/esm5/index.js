import e from "@firebase/app";

import "@firebase/util";

import "@firebase/logger";

import "@firebase/webchannel-wrapper";

import "tslib";

import { q as r, E as t, L as a, D as s, O as i, a as o, K as n, j as p, G as m, Y as c, Z as f, X as u, e as l, n as b, i as g, r as d, Q as h, p as v } from "./prebuilt-4d572f93-ec5ec72d.js";

import { Component as w } from "@firebase/component";

var I = {
    Firestore: r,
    GeoPoint: s,
    Timestamp: i,
    Blob: o,
    Transaction: n,
    WriteBatch: p,
    DocumentReference: m,
    DocumentSnapshot: c,
    Query: f,
    QueryDocumentSnapshot: u,
    QuerySnapshot: l,
    CollectionReference: b,
    FieldPath: g,
    FieldValue: d,
    setLogLevel: h,
    CACHE_SIZE_UNLIMITED: v
};

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the memory-only Firestore build with the components framework.
 */
function L(e) {
    !
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
    function(e, r) {
        e.INTERNAL.registerComponent(new w("firestore", (function(e) {
            var t = e.getProvider("app").getImmediate();
            return r(t, e.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, I)));
    }(e, (function(e, s) {
        return new r(e, new t(e, s), new a);
    })), e.registerVersion("@firebase/firestore", "2.3.7");
}

L(e);

export { L as registerFirestore };
//# sourceMappingURL=index.js.map
