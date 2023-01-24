'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var databaseDda14c83 = require('./database-dda14c83-ae719f1d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

const name = "@firebase/firestore";
const version = "2.3.7";

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
    return new databaseDda14c83.DeleteFieldValueImpl('deleteField');
}
/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */
function serverTimestamp() {
    return new databaseDda14c83.ServerTimestampFieldValueImpl('serverTimestamp');
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
function arrayUnion(...elements) {
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new databaseDda14c83.ArrayUnionFieldValueImpl('arrayUnion', elements);
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
function arrayRemove(...elements) {
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new databaseDda14c83.ArrayRemoveFieldValueImpl('arrayRemove', elements);
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
    return new databaseDda14c83.NumericIncrementFieldValueImpl('increment', n);
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
class FieldPath {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...fieldNames) {
        this._delegate = new databaseDda14c83.FieldPath$1(...fieldNames);
    }
    static documentId() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new FieldPath(databaseDda14c83.FieldPath.keyField().canonicalString());
    }
    isEqual(other) {
        other = util.getModularInstance(other);
        if (!(other instanceof databaseDda14c83.FieldPath$1)) {
            return false;
        }
        return this._delegate._internalPath.isEqual(other._internalPath);
    }
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
class FieldValue {
    constructor(_delegate) {
        this._delegate = _delegate;
    }
    static serverTimestamp() {
        const delegate = serverTimestamp();
        delegate._methodName = 'FieldValue.serverTimestamp';
        return new FieldValue(delegate);
    }
    static delete() {
        const delegate = deleteField();
        delegate._methodName = 'FieldValue.delete';
        return new FieldValue(delegate);
    }
    static arrayUnion(...elements) {
        const delegate = arrayUnion(...elements);
        delegate._methodName = 'FieldValue.arrayUnion';
        return new FieldValue(delegate);
    }
    static arrayRemove(...elements) {
        const delegate = arrayRemove(...elements);
        delegate._methodName = 'FieldValue.arrayRemove';
        return new FieldValue(delegate);
    }
    static increment(n) {
        const delegate = increment(n);
        delegate._methodName = 'FieldValue.increment';
        return new FieldValue(delegate);
    }
    isEqual(other) {
        return this._delegate.isEqual(other._delegate);
    }
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
const firestoreNamespace = {
    Firestore: databaseDda14c83.Firestore,
    GeoPoint: databaseDda14c83.GeoPoint,
    Timestamp: databaseDda14c83.Timestamp,
    Blob: databaseDda14c83.Blob,
    Transaction: databaseDda14c83.Transaction$3,
    WriteBatch: databaseDda14c83.WriteBatch$1,
    DocumentReference: databaseDda14c83.DocumentReference$1,
    DocumentSnapshot: databaseDda14c83.DocumentSnapshot$2,
    Query: databaseDda14c83.Query$1,
    QueryDocumentSnapshot: databaseDda14c83.QueryDocumentSnapshot$2,
    QuerySnapshot: databaseDda14c83.QuerySnapshot$1,
    CollectionReference: databaseDda14c83.CollectionReference$1,
    FieldPath,
    FieldValue,
    setLogLevel: databaseDda14c83.setLogLevel$1,
    CACHE_SIZE_UNLIMITED: databaseDda14c83.CACHE_SIZE_UNLIMITED
};
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
function configureForFirebase(firebase, firestoreFactory) {
    firebase.INTERNAL.registerComponent(new component.Component('firestore', container => {
        const app = container.getProvider('app').getImmediate();
        return firestoreFactory(app, container.getProvider('auth-internal'));
    }, "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, firestoreNamespace)));
}

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
 * Registers the memory-only Firestore build for Node with the components
 * framework.
 */
function registerFirestore(instance) {
    configureForFirebase(instance, (app, auth) => new databaseDda14c83.Firestore(app, new databaseDda14c83.FirebaseFirestore$1(app, auth), new databaseDda14c83.MemoryPersistenceProvider()));
    instance.registerVersion(name, version, 'node');
}
registerFirestore(firebase__default['default']);

exports.registerFirestore = registerFirestore;
//# sourceMappingURL=index.js.map
