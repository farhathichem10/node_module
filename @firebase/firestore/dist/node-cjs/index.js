'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var firebase = require('@firebase/app');
var util = require('@firebase/util');
var component = require('@firebase/component');
require('@firebase/logger');
require('util');
require('crypto');
require('@grpc/grpc-js');
require('@grpc/grpc-js/package.json');
require('path');
require('@grpc/proto-loader');
var databaseFaf39e5b = require('./database-faf39e5b-0bb5e962.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

var name = "@firebase/firestore";
var version = "2.3.7";
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
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */
function deleteField() {
    return new databaseFaf39e5b.DeleteFieldValueImpl('deleteField');
}
/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */
function serverTimestamp() {
    return new databaseFaf39e5b.ServerTimestampFieldValueImpl('serverTimestamp');
}
/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */
function arrayUnion() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new databaseFaf39e5b.ArrayUnionFieldValueImpl('arrayUnion', elements);
}
/**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */
function arrayRemove() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new databaseFaf39e5b.ArrayRemoveFieldValueImpl('arrayRemove', elements);
}
/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */
function increment(n) {
    return new databaseFaf39e5b.NumericIncrementFieldValueImpl('increment', n);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */
var FieldPath = /** @class */ (function () {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function FieldPath() {
        var fieldNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fieldNames[_i] = arguments[_i];
        }
        this._delegate = new (databaseFaf39e5b.FieldPath$1.bind.apply(databaseFaf39e5b.FieldPath$1, tslib.__spreadArray([void 0], fieldNames)))();
    }
    FieldPath.documentId = function () {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new FieldPath(databaseFaf39e5b.FieldPath.keyField().canonicalString());
    };
    FieldPath.prototype.isEqual = function (other) {
        other = util.getModularInstance(other);
        if (!(other instanceof databaseFaf39e5b.FieldPath$1)) {
            return false;
        }
        return this._delegate._internalPath.isEqual(other._internalPath);
    };
    return FieldPath;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var FieldValue = /** @class */ (function () {
    function FieldValue(_delegate) {
        this._delegate = _delegate;
    }
    FieldValue.serverTimestamp = function () {
        var delegate = serverTimestamp();
        delegate._methodName = 'FieldValue.serverTimestamp';
        return new FieldValue(delegate);
    };
    FieldValue.delete = function () {
        var delegate = deleteField();
        delegate._methodName = 'FieldValue.delete';
        return new FieldValue(delegate);
    };
    FieldValue.arrayUnion = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        var delegate = arrayUnion.apply(void 0, elements);
        delegate._methodName = 'FieldValue.arrayUnion';
        return new FieldValue(delegate);
    };
    FieldValue.arrayRemove = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        var delegate = arrayRemove.apply(void 0, elements);
        delegate._methodName = 'FieldValue.arrayRemove';
        return new FieldValue(delegate);
    };
    FieldValue.increment = function (n) {
        var delegate = increment(n);
        delegate._methodName = 'FieldValue.increment';
        return new FieldValue(delegate);
    };
    FieldValue.prototype.isEqual = function (other) {
        return this._delegate.isEqual(other._delegate);
    };
    return FieldValue;
}());
/**
 * @license
 * Copyright 2017 Google LLC
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
var firestoreNamespace = {
    Firestore: databaseFaf39e5b.Firestore,
    GeoPoint: databaseFaf39e5b.GeoPoint,
    Timestamp: databaseFaf39e5b.Timestamp,
    Blob: databaseFaf39e5b.Blob,
    Transaction: databaseFaf39e5b.Transaction$3,
    WriteBatch: databaseFaf39e5b.WriteBatch$1,
    DocumentReference: databaseFaf39e5b.DocumentReference$1,
    DocumentSnapshot: databaseFaf39e5b.DocumentSnapshot$2,
    Query: databaseFaf39e5b.Query$1,
    QueryDocumentSnapshot: databaseFaf39e5b.QueryDocumentSnapshot$2,
    QuerySnapshot: databaseFaf39e5b.QuerySnapshot$1,
    CollectionReference: databaseFaf39e5b.CollectionReference$1,
    FieldPath: FieldPath,
    FieldValue: FieldValue,
    setLogLevel: databaseFaf39e5b.setLogLevel$1,
    CACHE_SIZE_UNLIMITED: databaseFaf39e5b.CACHE_SIZE_UNLIMITED
};
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
function configureForFirebase(firebase, firestoreFactory) {
    firebase.INTERNAL.registerComponent(new component.Component('firestore', function (container) {
        var app = container.getProvider('app').getImmediate();
        return firestoreFactory(app, container.getProvider('auth-internal'));
    }, "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, firestoreNamespace)));
}
/**
 * @license
 * Copyright 2017 Google LLC
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
 * Registers the main Firestore Node build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function registerFirestore(instance) {
    configureForFirebase(instance, function (app, auth) { return new databaseFaf39e5b.Firestore(app, new databaseFaf39e5b.FirebaseFirestore$1(app, auth), new databaseFaf39e5b.IndexedDbPersistenceProvider()); });
    instance.registerVersion(name, version, 'node');
}
registerFirestore(firebase__default['default']);

exports.registerFirestore = registerFirestore;
//# sourceMappingURL=index.js.map
