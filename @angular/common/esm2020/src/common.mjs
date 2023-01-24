/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
export * from './private_export';
export * from './location/index';
export { formatDate } from './i18n/format_date';
export { formatCurrency, formatNumber, formatPercent } from './i18n/format_number';
export { NgLocaleLocalization, NgLocalization } from './i18n/localization';
export { registerLocaleData } from './i18n/locale_data';
export { Plural, NumberFormatStyle, FormStyle, TranslationWidth, FormatWidth, NumberSymbol, WeekDay, getNumberOfCurrencyDigits, getCurrencySymbol, getLocaleDayPeriods, getLocaleDayNames, getLocaleMonthNames, getLocaleId, getLocaleEraNames, getLocaleWeekEndRange, getLocaleFirstDayOfWeek, getLocaleDateFormat, getLocaleDateTimeFormat, getLocaleExtraDayPeriodRules, getLocaleExtraDayPeriods, getLocalePluralCase, getLocaleTimeFormat, getLocaleNumberSymbol, getLocaleNumberFormat, getLocaleCurrencyCode, getLocaleCurrencyName, getLocaleCurrencySymbol, getLocaleDirection } from './i18n/locale_data_api';
export { parseCookieValue as ɵparseCookieValue } from './cookie';
export { CommonModule } from './common_module';
export { NgClass, NgForOf, NgForOfContext, NgIf, NgIfContext, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NgComponentOutlet } from './directives/index';
export { DOCUMENT } from './dom_tokens';
export { AsyncPipe, DatePipe, DATE_PIPE_DEFAULT_TIMEZONE, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, UpperCasePipe, TitleCasePipe, KeyValuePipe } from './pipes/index';
export { PLATFORM_BROWSER_ID as ɵPLATFORM_BROWSER_ID, PLATFORM_SERVER_ID as ɵPLATFORM_SERVER_ID, PLATFORM_WORKER_APP_ID as ɵPLATFORM_WORKER_APP_ID, PLATFORM_WORKER_UI_ID as ɵPLATFORM_WORKER_UI_ID, isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi } from './platform_id';
export { VERSION } from './version';
export { ViewportScroller, NullViewportScroller as ɵNullViewportScroller } from './viewport_scroller';
export { XhrFactory } from './xhr';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7R0FJRztBQUNILGNBQWMsa0JBQWtCLENBQUM7QUFDakMsY0FBYyxrQkFBa0IsQ0FBQztBQUNqQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakYsT0FBTyxFQUFDLG9CQUFvQixFQUFFLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFRLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzVsQixPQUFPLEVBQUMsZ0JBQWdCLElBQUksaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDL0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDdE0sT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ2hQLE9BQU8sRUFBQyxtQkFBbUIsSUFBSSxvQkFBb0IsRUFBRSxrQkFBa0IsSUFBSSxtQkFBbUIsRUFBRSxzQkFBc0IsSUFBSSx1QkFBdUIsRUFBRSxxQkFBcUIsSUFBSSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2UyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsSUFBSSxxQkFBcUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVudHJ5IHBvaW50IGZvciBhbGwgcHVibGljIEFQSXMgb2YgdGhlIGNvbW1vbiBwYWNrYWdlLlxuICovXG5leHBvcnQgKiBmcm9tICcuL3ByaXZhdGVfZXhwb3J0JztcbmV4cG9ydCAqIGZyb20gJy4vbG9jYXRpb24vaW5kZXgnO1xuZXhwb3J0IHtmb3JtYXREYXRlfSBmcm9tICcuL2kxOG4vZm9ybWF0X2RhdGUnO1xuZXhwb3J0IHtmb3JtYXRDdXJyZW5jeSwgZm9ybWF0TnVtYmVyLCBmb3JtYXRQZXJjZW50fSBmcm9tICcuL2kxOG4vZm9ybWF0X251bWJlcic7XG5leHBvcnQge05nTG9jYWxlTG9jYWxpemF0aW9uLCBOZ0xvY2FsaXphdGlvbn0gZnJvbSAnLi9pMThuL2xvY2FsaXphdGlvbic7XG5leHBvcnQge3JlZ2lzdGVyTG9jYWxlRGF0YX0gZnJvbSAnLi9pMThuL2xvY2FsZV9kYXRhJztcbmV4cG9ydCB7UGx1cmFsLCBOdW1iZXJGb3JtYXRTdHlsZSwgRm9ybVN0eWxlLCBUaW1lLCBUcmFuc2xhdGlvbldpZHRoLCBGb3JtYXRXaWR0aCwgTnVtYmVyU3ltYm9sLCBXZWVrRGF5LCBnZXROdW1iZXJPZkN1cnJlbmN5RGlnaXRzLCBnZXRDdXJyZW5jeVN5bWJvbCwgZ2V0TG9jYWxlRGF5UGVyaW9kcywgZ2V0TG9jYWxlRGF5TmFtZXMsIGdldExvY2FsZU1vbnRoTmFtZXMsIGdldExvY2FsZUlkLCBnZXRMb2NhbGVFcmFOYW1lcywgZ2V0TG9jYWxlV2Vla0VuZFJhbmdlLCBnZXRMb2NhbGVGaXJzdERheU9mV2VlaywgZ2V0TG9jYWxlRGF0ZUZvcm1hdCwgZ2V0TG9jYWxlRGF0ZVRpbWVGb3JtYXQsIGdldExvY2FsZUV4dHJhRGF5UGVyaW9kUnVsZXMsIGdldExvY2FsZUV4dHJhRGF5UGVyaW9kcywgZ2V0TG9jYWxlUGx1cmFsQ2FzZSwgZ2V0TG9jYWxlVGltZUZvcm1hdCwgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sLCBnZXRMb2NhbGVOdW1iZXJGb3JtYXQsIGdldExvY2FsZUN1cnJlbmN5Q29kZSwgZ2V0TG9jYWxlQ3VycmVuY3lOYW1lLCBnZXRMb2NhbGVDdXJyZW5jeVN5bWJvbCwgZ2V0TG9jYWxlRGlyZWN0aW9ufSBmcm9tICcuL2kxOG4vbG9jYWxlX2RhdGFfYXBpJztcbmV4cG9ydCB7cGFyc2VDb29raWVWYWx1ZSBhcyDJtXBhcnNlQ29va2llVmFsdWV9IGZyb20gJy4vY29va2llJztcbmV4cG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICcuL2NvbW1vbl9tb2R1bGUnO1xuZXhwb3J0IHtOZ0NsYXNzLCBOZ0Zvck9mLCBOZ0Zvck9mQ29udGV4dCwgTmdJZiwgTmdJZkNvbnRleHQsIE5nUGx1cmFsLCBOZ1BsdXJhbENhc2UsIE5nU3R5bGUsIE5nU3dpdGNoLCBOZ1N3aXRjaENhc2UsIE5nU3dpdGNoRGVmYXVsdCwgTmdUZW1wbGF0ZU91dGxldCwgTmdDb21wb25lbnRPdXRsZXR9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5leHBvcnQge0RPQ1VNRU5UfSBmcm9tICcuL2RvbV90b2tlbnMnO1xuZXhwb3J0IHtBc3luY1BpcGUsIERhdGVQaXBlLCBEQVRFX1BJUEVfREVGQVVMVF9USU1FWk9ORSwgSTE4blBsdXJhbFBpcGUsIEkxOG5TZWxlY3RQaXBlLCBKc29uUGlwZSwgTG93ZXJDYXNlUGlwZSwgQ3VycmVuY3lQaXBlLCBEZWNpbWFsUGlwZSwgUGVyY2VudFBpcGUsIFNsaWNlUGlwZSwgVXBwZXJDYXNlUGlwZSwgVGl0bGVDYXNlUGlwZSwgS2V5VmFsdWVQaXBlLCBLZXlWYWx1ZX0gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5leHBvcnQge1BMQVRGT1JNX0JST1dTRVJfSUQgYXMgybVQTEFURk9STV9CUk9XU0VSX0lELCBQTEFURk9STV9TRVJWRVJfSUQgYXMgybVQTEFURk9STV9TRVJWRVJfSUQsIFBMQVRGT1JNX1dPUktFUl9BUFBfSUQgYXMgybVQTEFURk9STV9XT1JLRVJfQVBQX0lELCBQTEFURk9STV9XT1JLRVJfVUlfSUQgYXMgybVQTEFURk9STV9XT1JLRVJfVUlfSUQsIGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyLCBpc1BsYXRmb3JtV29ya2VyQXBwLCBpc1BsYXRmb3JtV29ya2VyVWl9IGZyb20gJy4vcGxhdGZvcm1faWQnO1xuZXhwb3J0IHtWRVJTSU9OfSBmcm9tICcuL3ZlcnNpb24nO1xuZXhwb3J0IHtWaWV3cG9ydFNjcm9sbGVyLCBOdWxsVmlld3BvcnRTY3JvbGxlciBhcyDJtU51bGxWaWV3cG9ydFNjcm9sbGVyfSBmcm9tICcuL3ZpZXdwb3J0X3Njcm9sbGVyJztcbmV4cG9ydCB7WGhyRmFjdG9yeX0gZnJvbSAnLi94aHInO1xuIl19