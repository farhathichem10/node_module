import firebase from '@firebase/app';
import '@firebase/util';
import '@firebase/logger';
import '@firebase/webchannel-wrapper';
import { q as qa, D as Du, O, a as Oa, K as Ka, j as ja, G as Ga, Y as Ya, Z as Za, X as Xa, e as eh, n as nh, i as ih, r as rh, Q as Qa, p as pu, E as Eu, L as La } from './prebuilt-4d572f93.js';
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
    Firestore: qa,
    GeoPoint: Du,
    Timestamp: O,
    Blob: Oa,
    Transaction: Ka,
    WriteBatch: ja,
    DocumentReference: Ga,
    DocumentSnapshot: Ya,
    Query: Za,
    QueryDocumentSnapshot: Xa,
    QuerySnapshot: eh,
    CollectionReference: nh,
    FieldPath: ih,
    FieldValue: rh,
    setLogLevel: Qa,
    CACHE_SIZE_UNLIMITED: pu
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
function registerFirestore(instance) {
    configureForFirebase(instance, (app, auth) => new qa(app, new Eu(app, auth), new La()));
    instance.registerVersion(name, version);
}
registerFirestore(firebase);

export { registerFirestore };
//# sourceMappingURL=index.js.map
