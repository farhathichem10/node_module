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
import { AppCheckProvider } from '@firebase/app-check-types';
import { FirebaseApp } from '@firebase/app-types';
/**
 *
 * @param app
 * @param siteKeyOrProvider - optional custom attestation provider
 * or reCAPTCHA siteKey
 * @param isTokenAutoRefreshEnabled - if true, enables auto refresh
 * of appCheck token.
 */
export declare function activate(app: FirebaseApp, siteKeyOrProvider: string | AppCheckProvider, isTokenAutoRefreshEnabled?: boolean): void;
export declare function setTokenAutoRefreshEnabled(app: FirebaseApp, isTokenAutoRefreshEnabled: boolean): void;
