import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbDatepickerI18n } from './datepicker-i18n';
export class NgbDatepickerDayView {
    constructor(i18n) {
        this.i18n = i18n;
    }
    isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
}
NgbDatepickerDayView.decorators = [
    { type: Component, args: [{
                selector: '[ngbDatepickerDayView]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'btn-light',
                    '[class.bg-primary]': 'selected',
                    '[class.text-white]': 'selected',
                    '[class.text-muted]': 'isMuted()',
                    '[class.outside]': 'isMuted()',
                    '[class.active]': 'focused'
                },
                template: `{{ i18n.getDayNumerals(date) }}`,
                styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView].outside{opacity:.5}"]
            },] }
];
NgbDatepickerDayView.ctorParameters = () => [
    { type: NgbDatepickerI18n }
];
NgbDatepickerDayView.propDecorators = {
    currentMonth: [{ type: Input }],
    date: [{ type: Input }],
    disabled: [{ type: Input }],
    focused: [{ type: Input }],
    selected: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXktdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXItZGF5LXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFM0YsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFpQnBELE1BQU0sT0FBTyxvQkFBb0I7SUFPL0IsWUFBbUIsSUFBdUI7UUFBdkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7SUFBRyxDQUFDO0lBRTlDLE9BQU8sS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1lBeEJqRyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUVyQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLG9CQUFvQixFQUFFLFVBQVU7b0JBQ2hDLG9CQUFvQixFQUFFLFVBQVU7b0JBQ2hDLG9CQUFvQixFQUFFLFdBQVc7b0JBQ2pDLGlCQUFpQixFQUFFLFdBQVc7b0JBQzlCLGdCQUFnQixFQUFFLFNBQVM7aUJBQzVCO2dCQUNELFFBQVEsRUFBRSxpQ0FBaUM7O2FBQzVDOzs7WUFoQk8saUJBQWlCOzs7MkJBa0J0QixLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nYkRhdGV9IGZyb20gJy4vbmdiLWRhdGUnO1xuaW1wb3J0IHtOZ2JEYXRlcGlja2VySTE4bn0gZnJvbSAnLi9kYXRlcGlja2VyLWkxOG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmdiRGF0ZXBpY2tlckRheVZpZXddJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogWycuL2RhdGVwaWNrZXItZGF5LXZpZXcuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2J0bi1saWdodCcsXG4gICAgJ1tjbGFzcy5iZy1wcmltYXJ5XSc6ICdzZWxlY3RlZCcsXG4gICAgJ1tjbGFzcy50ZXh0LXdoaXRlXSc6ICdzZWxlY3RlZCcsXG4gICAgJ1tjbGFzcy50ZXh0LW11dGVkXSc6ICdpc011dGVkKCknLFxuICAgICdbY2xhc3Mub3V0c2lkZV0nOiAnaXNNdXRlZCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnZm9jdXNlZCdcbiAgfSxcbiAgdGVtcGxhdGU6IGB7eyBpMThuLmdldERheU51bWVyYWxzKGRhdGUpIH19YFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VyRGF5VmlldyB7XG4gIEBJbnB1dCgpIGN1cnJlbnRNb250aDogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRlOiBOZ2JEYXRlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9jdXNlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGkxOG46IE5nYkRhdGVwaWNrZXJJMThuKSB7fVxuXG4gIGlzTXV0ZWQoKSB7IHJldHVybiAhdGhpcy5zZWxlY3RlZCAmJiAodGhpcy5kYXRlLm1vbnRoICE9PSB0aGlzLmN1cnJlbnRNb250aCB8fCB0aGlzLmRpc2FibGVkKTsgfVxufVxuIl19