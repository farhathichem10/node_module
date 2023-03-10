import firebase from '@firebase/app';
import '@firebase/util';
import '@firebase/logger';
import '@firebase/webchannel-wrapper';
import { U as Ua, N as Nu, M, a as Ma, j as ja, W as Wa, z as za, X as Xa, t as th, Z as Za, n as nh, s as sh, r as rh, o as oh, K as Ka, T as Tu, I as Iu, q as qa } from './prebuilt.rn-7aa88c27.js';
import { Component } from '@firebase/component';

const name = "@firebase/firestore";
const version = "2.3.7";

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
    Firestore: Ua,
    GeoPoint: Nu,
    Timestamp: M,
    Blob: Ma,
    Transaction: ja,
    WriteBatch: Wa,
    DocumentReference: za,
    DocumentSnapshot: Xa,
    Query: th,
    QueryDocumentSnapshot: Za,
    QuerySnapshot: nh,
    CollectionReference: sh,
    FieldPath: rh,
    FieldValue: oh,
    setLogLevel: Ka,
    CACHE_SIZE_UNLIMITED: Tu
};
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
function configureForFirebase(firebase, firestoreFactory) {
    firebase.INTERNAL.registerComponent(new Component('firestore', container => {
        const app = container.getProvider('app').getImmediate();
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
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function registerFirestore(instance) {
    configureForFirebase(instance, (app, auth) => new Ua(app, new Iu(app, auth), new qa()));
    instance.registerVersion(name, version);
}
registerFirestore(firebase);

export { registerFirestore };
//# sourceMappingURL=index.js.map
