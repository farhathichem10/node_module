import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepicker, NgbDatepickerContent } from './datepicker';
import { NgbDatepickerMonth } from './datepicker-month';
import { NgbDatepickerNavigation } from './datepicker-navigation';
import { NgbInputDatepicker } from './datepicker-input';
import { NgbDatepickerDayView } from './datepicker-day-view';
import { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
export { NgbDatepicker, NgbDatepickerContent } from './datepicker';
export { NgbInputDatepicker } from './datepicker-input';
export { NgbCalendar, NgbCalendarGregorian } from './ngb-calendar';
export { NgbCalendarIslamicCivil } from './hijri/ngb-calendar-islamic-civil';
export { NgbCalendarIslamicUmalqura } from './hijri/ngb-calendar-islamic-umalqura';
export { NgbCalendarPersian } from './jalali/ngb-calendar-persian';
export { NgbCalendarHebrew } from './hebrew/ngb-calendar-hebrew';
export { NgbDatepickerI18nHebrew } from './hebrew/datepicker-i18n-hebrew';
export { NgbCalendarBuddhist } from './buddhist/ngb-calendar-buddhist';
export { NgbDatepickerMonth } from './datepicker-month';
export { NgbDatepickerDayView } from './datepicker-day-view';
export { NgbDatepickerNavigation } from './datepicker-navigation';
export { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
export { NgbDatepickerConfig } from './datepicker-config';
export { NgbInputDatepickerConfig } from './datepicker-input-config';
export { NgbDatepickerI18n, NgbDatepickerI18nDefault } from './datepicker-i18n';
export { NgbDate } from './ngb-date';
export { NgbDateAdapter } from './adapters/ngb-date-adapter';
export { NgbDateNativeAdapter } from './adapters/ngb-date-native-adapter';
export { NgbDateNativeUTCAdapter } from './adapters/ngb-date-native-utc-adapter';
export { NgbDateParserFormatter } from './ngb-date-parser-formatter';
export { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
export class NgbDatepickerModule {
}
NgbDatepickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgbDatepicker, NgbDatepickerContent, NgbDatepickerMonth, NgbDatepickerNavigation, NgbDatepickerNavigationSelect,
                    NgbDatepickerDayView, NgbInputDatepicker
                ],
                exports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth],
                imports: [CommonModule, FormsModule],
                entryComponents: [NgbDatepicker]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RSxPQUFPLEVBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFpRCxNQUFNLGNBQWMsQ0FBQztBQUNqSCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsV0FBVyxFQUFhLG9CQUFvQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFOUUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFXM0UsTUFBTSxPQUFPLG1CQUFtQjs7O1lBVC9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osYUFBYSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLDZCQUE2QjtvQkFDL0csb0JBQW9CLEVBQUUsa0JBQWtCO2lCQUN6QztnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ3RGLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7Z0JBQ3BDLGVBQWUsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05nYkRhdGVwaWNrZXIsIE5nYkRhdGVwaWNrZXJDb250ZW50fSBmcm9tICcuL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtOZ2JEYXRlcGlja2VyTW9udGh9IGZyb20gJy4vZGF0ZXBpY2tlci1tb250aCc7XG5pbXBvcnQge05nYkRhdGVwaWNrZXJOYXZpZ2F0aW9ufSBmcm9tICcuL2RhdGVwaWNrZXItbmF2aWdhdGlvbic7XG5pbXBvcnQge05nYklucHV0RGF0ZXBpY2tlcn0gZnJvbSAnLi9kYXRlcGlja2VyLWlucHV0JztcbmltcG9ydCB7TmdiRGF0ZXBpY2tlckRheVZpZXd9IGZyb20gJy4vZGF0ZXBpY2tlci1kYXktdmlldyc7XG5pbXBvcnQge05nYkRhdGVwaWNrZXJOYXZpZ2F0aW9uU2VsZWN0fSBmcm9tICcuL2RhdGVwaWNrZXItbmF2aWdhdGlvbi1zZWxlY3QnO1xuXG5leHBvcnQge05nYkRhdGVwaWNrZXIsIE5nYkRhdGVwaWNrZXJDb250ZW50LCBOZ2JEYXRlcGlja2VyTmF2aWdhdGVFdmVudCwgTmdiRGF0ZXBpY2tlclN0YXRlfSBmcm9tICcuL2RhdGVwaWNrZXInO1xuZXhwb3J0IHtOZ2JJbnB1dERhdGVwaWNrZXJ9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnB1dCc7XG5leHBvcnQge05nYkNhbGVuZGFyLCBOZ2JQZXJpb2QsIE5nYkNhbGVuZGFyR3JlZ29yaWFufSBmcm9tICcuL25nYi1jYWxlbmRhcic7XG5leHBvcnQge05nYkNhbGVuZGFySXNsYW1pY0NpdmlsfSBmcm9tICcuL2hpanJpL25nYi1jYWxlbmRhci1pc2xhbWljLWNpdmlsJztcbmV4cG9ydCB7TmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmF9IGZyb20gJy4vaGlqcmkvbmdiLWNhbGVuZGFyLWlzbGFtaWMtdW1hbHF1cmEnO1xuZXhwb3J0IHtOZ2JDYWxlbmRhclBlcnNpYW59IGZyb20gJy4vamFsYWxpL25nYi1jYWxlbmRhci1wZXJzaWFuJztcbmV4cG9ydCB7TmdiQ2FsZW5kYXJIZWJyZXd9IGZyb20gJy4vaGVicmV3L25nYi1jYWxlbmRhci1oZWJyZXcnO1xuZXhwb3J0IHtOZ2JEYXRlcGlja2VySTE4bkhlYnJld30gZnJvbSAnLi9oZWJyZXcvZGF0ZXBpY2tlci1pMThuLWhlYnJldyc7XG5leHBvcnQge05nYkNhbGVuZGFyQnVkZGhpc3R9IGZyb20gJy4vYnVkZGhpc3QvbmdiLWNhbGVuZGFyLWJ1ZGRoaXN0JztcbmV4cG9ydCB7TmdiRGF0ZXBpY2tlck1vbnRofSBmcm9tICcuL2RhdGVwaWNrZXItbW9udGgnO1xuZXhwb3J0IHtOZ2JEYXRlcGlja2VyRGF5Vmlld30gZnJvbSAnLi9kYXRlcGlja2VyLWRheS12aWV3JztcbmV4cG9ydCB7TmdiRGF0ZXBpY2tlck5hdmlnYXRpb259IGZyb20gJy4vZGF0ZXBpY2tlci1uYXZpZ2F0aW9uJztcbmV4cG9ydCB7TmdiRGF0ZXBpY2tlck5hdmlnYXRpb25TZWxlY3R9IGZyb20gJy4vZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdCc7XG5leHBvcnQge05nYkRhdGVwaWNrZXJDb25maWd9IGZyb20gJy4vZGF0ZXBpY2tlci1jb25maWcnO1xuZXhwb3J0IHtOZ2JJbnB1dERhdGVwaWNrZXJDb25maWd9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnB1dC1jb25maWcnO1xuZXhwb3J0IHtOZ2JEYXRlcGlja2VySTE4biwgTmdiRGF0ZXBpY2tlckkxOG5EZWZhdWx0fSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5leHBvcnQge05nYkRhdGVTdHJ1Y3R9IGZyb20gJy4vbmdiLWRhdGUtc3RydWN0JztcbmV4cG9ydCB7TmdiRGF0ZX0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5leHBvcnQge05nYkRhdGVBZGFwdGVyfSBmcm9tICcuL2FkYXB0ZXJzL25nYi1kYXRlLWFkYXB0ZXInO1xuZXhwb3J0IHtOZ2JEYXRlTmF0aXZlQWRhcHRlcn0gZnJvbSAnLi9hZGFwdGVycy9uZ2ItZGF0ZS1uYXRpdmUtYWRhcHRlcic7XG5leHBvcnQge05nYkRhdGVOYXRpdmVVVENBZGFwdGVyfSBmcm9tICcuL2FkYXB0ZXJzL25nYi1kYXRlLW5hdGl2ZS11dGMtYWRhcHRlcic7XG5leHBvcnQge05nYkRhdGVQYXJzZXJGb3JtYXR0ZXJ9IGZyb20gJy4vbmdiLWRhdGUtcGFyc2VyLWZvcm1hdHRlcic7XG5leHBvcnQge05nYkRhdGVwaWNrZXJLZXlib2FyZFNlcnZpY2V9IGZyb20gJy4vZGF0ZXBpY2tlci1rZXlib2FyZC1zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdiRGF0ZXBpY2tlciwgTmdiRGF0ZXBpY2tlckNvbnRlbnQsIE5nYkRhdGVwaWNrZXJNb250aCwgTmdiRGF0ZXBpY2tlck5hdmlnYXRpb24sIE5nYkRhdGVwaWNrZXJOYXZpZ2F0aW9uU2VsZWN0LFxuICAgIE5nYkRhdGVwaWNrZXJEYXlWaWV3LCBOZ2JJbnB1dERhdGVwaWNrZXJcbiAgXSxcbiAgZXhwb3J0czogW05nYkRhdGVwaWNrZXIsIE5nYkRhdGVwaWNrZXJDb250ZW50LCBOZ2JJbnB1dERhdGVwaWNrZXIsIE5nYkRhdGVwaWNrZXJNb250aF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTmdiRGF0ZXBpY2tlcl1cbn0pXG5leHBvcnQgY2xhc3MgTmdiRGF0ZXBpY2tlck1vZHVsZSB7XG59XG4iXX0=