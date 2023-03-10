/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { EventEmitter } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { DateInputComponent } from '../dateinput/dateinput.component';
import { TimeSelectorComponent } from '../timepicker/timeselector.component';
/**
 * @hidden
 */
export declare class PickerService {
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    sameDateSelected: EventEmitter<any>;
    dateCompletenessChange: EventEmitter<any>;
    calendar: CalendarComponent;
    input: DateInputComponent;
    timeSelector: TimeSelectorComponent;
}
