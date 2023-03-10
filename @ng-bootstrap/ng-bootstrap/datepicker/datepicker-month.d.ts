import { NgbDatepicker } from './datepicker';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
import { NgbDatepickerService } from './datepicker-service';
import { MonthViewModel, DayViewModel } from './datepicker-view-model';
import { NgbDateStruct } from './ngb-date-struct';
/**
 * A component that renders one month including all the days, weekdays and week numbers. Can be used inside
 * the `<ng-template ngbDatepickerMonths></ng-template>` when you want to customize months layout.
 *
 * For a usage example, see [custom month layout demo](#/components/datepicker/examples#custommonth)
 *
 * @since 5.3.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbDatepickerMonth {
    i18n: NgbDatepickerI18n;
    datepicker: NgbDatepicker;
    private _keyboardService;
    private _service;
    /**
     * The first date of month to be rendered.
     *
     * This month must one of the months present in the
     * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
     */
    set month(month: NgbDateStruct);
    viewModel: MonthViewModel;
    constructor(i18n: NgbDatepickerI18n, datepicker: NgbDatepicker, _keyboardService: NgbDatepickerKeyboardService, _service: NgbDatepickerService);
    onKeyDown(event: KeyboardEvent): void;
    doSelect(day: DayViewModel): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgbDatepickerMonth, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgbDatepickerMonth, "ngb-datepicker-month", never, { "month": "month"; }, {}, never, never>;
}

//# sourceMappingURL=datepicker-month.d.ts.map