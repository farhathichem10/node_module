import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { NavigationEvent } from './datepicker-view-model';
import { NgbDatepickerI18n } from './datepicker-i18n';
export class NgbDatepickerNavigation {
    constructor(i18n) {
        this.i18n = i18n;
        this.navigation = NavigationEvent;
        this.months = [];
        this.navigate = new EventEmitter();
        this.select = new EventEmitter();
    }
    onClickPrev(event) {
        event.currentTarget.focus();
        this.navigate.emit(this.navigation.PREV);
    }
    onClickNext(event) {
        event.currentTarget.focus();
        this.navigate.emit(this.navigation.NEXT);
    }
}
NgbDatepickerNavigation.decorators = [
    { type: Component, args: [{
                selector: 'ngb-datepicker-navigation',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="ngb-dp-arrow">
      <button type="button" class="btn btn-link ngb-dp-arrow-btn" (click)="onClickPrev($event)" [disabled]="prevDisabled"
              i18n-aria-label="@@ngb.datepicker.previous-month" aria-label="Previous month"
              i18n-title="@@ngb.datepicker.previous-month" title="Previous month">
        <span class="ngb-dp-navigation-chevron"></span>
      </button>
    </div>
    <ngb-datepicker-navigation-select *ngIf="showSelect" class="ngb-dp-navigation-select"
      [date]="date"
      [disabled] = "disabled"
      [months]="selectBoxes.months"
      [years]="selectBoxes.years"
      (select)="select.emit($event)">
    </ngb-datepicker-navigation-select>

    <ng-template *ngIf="!showSelect" ngFor let-month [ngForOf]="months" let-i="index">
      <div class="ngb-dp-arrow" *ngIf="i > 0"></div>
      <div class="ngb-dp-month-name">
        {{ i18n.getMonthLabel(month.firstDate) }}
      </div>
      <div class="ngb-dp-arrow" *ngIf="i !== months.length - 1"></div>
    </ng-template>
    <div class="ngb-dp-arrow right">
      <button type="button" class="btn btn-link ngb-dp-arrow-btn" (click)="onClickNext($event)" [disabled]="nextDisabled"
              i18n-aria-label="@@ngb.datepicker.next-month" aria-label="Next month"
              i18n-title="@@ngb.datepicker.next-month" title="Next month">
        <span class="ngb-dp-navigation-chevron"></span>
      </button>
    </div>
    `,
                styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{justify-content:flex-end}.ngb-dp-arrow.right .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}"]
            },] }
];
NgbDatepickerNavigation.ctorParameters = () => [
    { type: NgbDatepickerI18n }
];
NgbDatepickerNavigation.propDecorators = {
    date: [{ type: Input }],
    disabled: [{ type: Input }],
    months: [{ type: Input }],
    showSelect: [{ type: Input }],
    prevDisabled: [{ type: Input }],
    nextDisabled: [{ type: Input }],
    selectBoxes: [{ type: Input }],
    navigate: [{ type: Output }],
    select: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFDLGVBQWUsRUFBaUIsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQXVDcEQsTUFBTSxPQUFPLHVCQUF1QjtJQWNsQyxZQUFtQixJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQWIxQyxlQUFVLEdBQUcsZUFBZSxDQUFDO1FBSXBCLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1FBTTdCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMvQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVGLENBQUM7SUFFOUMsV0FBVyxDQUFDLEtBQWlCO1FBQzFCLEtBQUssQ0FBQyxhQUE2QixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFpQjtRQUMxQixLQUFLLENBQUMsYUFBNkIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQTdERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUVyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThCUDs7YUFDSjs7O1lBdENPLGlCQUFpQjs7O21CQTBDdEIsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFFTCxNQUFNO3FCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uRXZlbnQsIE1vbnRoVmlld01vZGVsfSBmcm9tICcuL2RhdGVwaWNrZXItdmlldy1tb2RlbCc7XG5pbXBvcnQge05nYkRhdGV9IGZyb20gJy4vbmdiLWRhdGUnO1xuaW1wb3J0IHtOZ2JEYXRlcGlja2VySTE4bn0gZnJvbSAnLi9kYXRlcGlja2VyLWkxOG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogWycuL2RhdGVwaWNrZXItbmF2aWdhdGlvbi5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5nYi1kcC1hcnJvd1wiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgbmdiLWRwLWFycm93LWJ0blwiIChjbGljayk9XCJvbkNsaWNrUHJldigkZXZlbnQpXCIgW2Rpc2FibGVkXT1cInByZXZEaXNhYmxlZFwiXG4gICAgICAgICAgICAgIGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLmRhdGVwaWNrZXIucHJldmlvdXMtbW9udGhcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXMgbW9udGhcIlxuICAgICAgICAgICAgICBpMThuLXRpdGxlPVwiQEBuZ2IuZGF0ZXBpY2tlci5wcmV2aW91cy1tb250aFwiIHRpdGxlPVwiUHJldmlvdXMgbW9udGhcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuZ2ItZHAtbmF2aWdhdGlvbi1jaGV2cm9uXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPG5nYi1kYXRlcGlja2VyLW5hdmlnYXRpb24tc2VsZWN0ICpuZ0lmPVwic2hvd1NlbGVjdFwiIGNsYXNzPVwibmdiLWRwLW5hdmlnYXRpb24tc2VsZWN0XCJcbiAgICAgIFtkYXRlXT1cImRhdGVcIlxuICAgICAgW2Rpc2FibGVkXSA9IFwiZGlzYWJsZWRcIlxuICAgICAgW21vbnRoc109XCJzZWxlY3RCb3hlcy5tb250aHNcIlxuICAgICAgW3llYXJzXT1cInNlbGVjdEJveGVzLnllYXJzXCJcbiAgICAgIChzZWxlY3QpPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiPlxuICAgIDwvbmdiLWRhdGVwaWNrZXItbmF2aWdhdGlvbi1zZWxlY3Q+XG5cbiAgICA8bmctdGVtcGxhdGUgKm5nSWY9XCIhc2hvd1NlbGVjdFwiIG5nRm9yIGxldC1tb250aCBbbmdGb3JPZl09XCJtb250aHNcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibmdiLWRwLWFycm93XCIgKm5nSWY9XCJpID4gMFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5nYi1kcC1tb250aC1uYW1lXCI+XG4gICAgICAgIHt7IGkxOG4uZ2V0TW9udGhMYWJlbChtb250aC5maXJzdERhdGUpIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZ2ItZHAtYXJyb3dcIiAqbmdJZj1cImkgIT09IG1vbnRocy5sZW5ndGggLSAxXCI+PC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibmdiLWRwLWFycm93IHJpZ2h0XCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGluayBuZ2ItZHAtYXJyb3ctYnRuXCIgKGNsaWNrKT1cIm9uQ2xpY2tOZXh0KCRldmVudClcIiBbZGlzYWJsZWRdPVwibmV4dERpc2FibGVkXCJcbiAgICAgICAgICAgICAgaTE4bi1hcmlhLWxhYmVsPVwiQEBuZ2IuZGF0ZXBpY2tlci5uZXh0LW1vbnRoXCIgYXJpYS1sYWJlbD1cIk5leHQgbW9udGhcIlxuICAgICAgICAgICAgICBpMThuLXRpdGxlPVwiQEBuZ2IuZGF0ZXBpY2tlci5uZXh0LW1vbnRoXCIgdGl0bGU9XCJOZXh0IG1vbnRoXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmdiLWRwLW5hdmlnYXRpb24tY2hldnJvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTmdiRGF0ZXBpY2tlck5hdmlnYXRpb24ge1xuICBuYXZpZ2F0aW9uID0gTmF2aWdhdGlvbkV2ZW50O1xuXG4gIEBJbnB1dCgpIGRhdGU6IE5nYkRhdGU7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtb250aHM6IE1vbnRoVmlld01vZGVsW10gPSBbXTtcbiAgQElucHV0KCkgc2hvd1NlbGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJldkRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuZXh0RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdEJveGVzOiB7eWVhcnM6IG51bWJlcltdLCBtb250aHM6IG51bWJlcltdfTtcblxuICBAT3V0cHV0KCkgbmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPE5hdmlnYXRpb25FdmVudD4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiRGF0ZT4oKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG4pIHt9XG5cbiAgb25DbGlja1ByZXYoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgICB0aGlzLm5hdmlnYXRlLmVtaXQodGhpcy5uYXZpZ2F0aW9uLlBSRVYpO1xuICB9XG5cbiAgb25DbGlja05leHQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgICB0aGlzLm5hdmlnYXRlLmVtaXQodGhpcy5uYXZpZ2F0aW9uLk5FWFQpO1xuICB9XG59XG4iXX0=