import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
import { getValueInRange, isNumber } from '../util/util';
import { NgbProgressbarConfig } from './progressbar-config';
/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */
export class NgbProgressbar {
    constructor(config) {
        /**
         * The current value for the progress bar.
         *
         * Should be in the `[0, max]` range.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.textType = config.textType;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
    }
    /**
     * The maximal value to be displayed in the progress bar.
     *
     * Should be a positive number. Will default to 100 otherwise.
     */
    set max(max) {
        this._max = !isNumber(max) || max <= 0 ? 100 : max;
    }
    get max() { return this._max; }
    getValue() { return getValueInRange(this.value, this.max); }
    getPercentValue() { return 100 * this.getValue() / this.max; }
}
NgbProgressbar.decorators = [
    { type: Component, args: [{
                selector: 'ngb-progressbar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: { class: 'progress' },
                template: `
    <div class="progress-bar{{type ? ' bg-' + type : ''}}{{textType ? ' text-' + textType : ''}}
    {{animated ? ' progress-bar-animated' : ''}}{{striped ? ' progress-bar-striped' : ''}}"
    role="progressbar" [style.width.%]="getPercentValue()"
    [attr.aria-valuenow]="getValue()" aria-valuemin="0" [attr.aria-valuemax]="max">
      <span *ngIf="showValue" i18n="@@ngb.progressbar.value">{{getValue() / max | percent}}</span><ng-content></ng-content>
    </div>
  `
            },] }
];
NgbProgressbar.ctorParameters = () => [
    { type: NgbProgressbarConfig }
];
NgbProgressbar.propDecorators = {
    max: [{ type: Input }],
    animated: [{ type: Input }],
    striped: [{ type: Input }],
    showValue: [{ type: Input }],
    textType: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }],
    height: [{ type: Input }, { type: HostBinding, args: ['style.height',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRTFEOztHQUVHO0FBZUgsTUFBTSxPQUFPLGNBQWM7SUFnRXpCLFlBQVksTUFBNEI7UUFkeEM7Ozs7V0FJRztRQUNNLFVBQUssR0FBRyxDQUFDLENBQUM7UUFVakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFyRUQ7Ozs7T0FJRztJQUNILElBQ0ksR0FBRyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBSSxHQUFHLEtBQWEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQTZEdkMsUUFBUSxLQUFLLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1RCxlQUFlLEtBQUssT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7WUExRi9ELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUM7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2FBQ0Y7OztZQWxCTyxvQkFBb0I7OztrQkEyQnpCLEtBQUs7dUJBWUwsS0FBSztzQkFLTCxLQUFLO3dCQUtMLEtBQUs7dUJBVUwsS0FBSzttQkFRTCxLQUFLO29CQU9MLEtBQUs7cUJBT0wsS0FBSyxZQUFJLFdBQVcsU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RCaW5kaW5nfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Z2V0VmFsdWVJblJhbmdlLCBpc051bWJlcn0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7TmdiUHJvZ3Jlc3NiYXJDb25maWd9IGZyb20gJy4vcHJvZ3Jlc3NiYXItY29uZmlnJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHByb3ZpZGVzIGZlZWRiYWNrIG9uIHRoZSBwcm9ncmVzcyBvZiBhIHdvcmtmbG93IG9yIGFuIGFjdGlvbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdiLXByb2dyZXNzYmFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtjbGFzczogJ3Byb2dyZXNzJ30sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhcnt7dHlwZSA/ICcgYmctJyArIHR5cGUgOiAnJ319e3t0ZXh0VHlwZSA/ICcgdGV4dC0nICsgdGV4dFR5cGUgOiAnJ319XG4gICAge3thbmltYXRlZCA/ICcgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyA6ICcnfX17e3N0cmlwZWQgPyAnIHByb2dyZXNzLWJhci1zdHJpcGVkJyA6ICcnfX1cIlxuICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiIFtzdHlsZS53aWR0aC4lXT1cImdldFBlcmNlbnRWYWx1ZSgpXCJcbiAgICBbYXR0ci5hcmlhLXZhbHVlbm93XT1cImdldFZhbHVlKClcIiBhcmlhLXZhbHVlbWluPVwiMFwiIFthdHRyLmFyaWEtdmFsdWVtYXhdPVwibWF4XCI+XG4gICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWx1ZVwiIGkxOG49XCJAQG5nYi5wcm9ncmVzc2Jhci52YWx1ZVwiPnt7Z2V0VmFsdWUoKSAvIG1heCB8IHBlcmNlbnR9fTwvc3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTmdiUHJvZ3Jlc3NiYXIge1xuICBwcml2YXRlIF9tYXg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG1heGltYWwgdmFsdWUgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqXG4gICAqIFNob3VsZCBiZSBhIHBvc2l0aXZlIG51bWJlci4gV2lsbCBkZWZhdWx0IHRvIDEwMCBvdGhlcndpc2UuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbWF4KG1heDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gIWlzTnVtYmVyKG1heCkgfHwgbWF4IDw9IDAgPyAxMDAgOiBtYXg7XG4gIH1cblxuICBnZXQgbWF4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9tYXg7IH1cblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc3RyaXBlcyBvbiB0aGUgcHJvZ3Jlc3MgYmFyIGFyZSBhbmltYXRlZC5cbiAgICpcbiAgICogVGFrZXMgZWZmZWN0IG9ubHkgZm9yIGJyb3dzZXJzIHN1cHBvcnRpbmcgQ1NTMyBhbmltYXRpb25zLCBhbmQgaWYgYHN0cmlwZWRgIGlzIGB0cnVlYC5cbiAgICovXG4gIEBJbnB1dCgpIGFuaW1hdGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwcm9ncmVzcyBiYXJzIHdpbGwgYmUgZGlzcGxheWVkIGFzIHN0cmlwZWQuXG4gICAqL1xuICBASW5wdXQoKSBzdHJpcGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjdXJyZW50IHBlcmNlbnRhZ2Ugd2lsbCBiZSBzaG93biBpbiB0aGUgYHh4JWAgZm9ybWF0LlxuICAgKi9cbiAgQElucHV0KCkgc2hvd1ZhbHVlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCB0ZXh0IHZhcmlhbnQgdHlwZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKlxuICAgKiBTdXBwb3J0cyB0eXBlcyBiYXNlZCBvbiBCb290c3RyYXAgYmFja2dyb3VuZCBjb2xvciB2YXJpYW50cywgbGlrZTpcbiAgICogIGBcInN1Y2Nlc3NcImAsIGBcImluZm9cImAsIGBcIndhcm5pbmdcImAsIGBcImRhbmdlclwiYCwgYFwicHJpbWFyeVwiYCwgYFwic2Vjb25kYXJ5XCJgLCBgXCJkYXJrXCJgIGFuZCBzbyBvbi5cbiAgICpcbiAgICogQHNpbmNlIDUuMi4wXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0VHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKlxuICAgKiBTdXBwb3J0cyB0eXBlcyBiYXNlZCBvbiBCb290c3RyYXAgYmFja2dyb3VuZCBjb2xvciB2YXJpYW50cywgbGlrZTpcbiAgICogIGBcInN1Y2Nlc3NcImAsIGBcImluZm9cImAsIGBcIndhcm5pbmdcImAsIGBcImRhbmdlclwiYCwgYFwicHJpbWFyeVwiYCwgYFwic2Vjb25kYXJ5XCJgLCBgXCJkYXJrXCJgIGFuZCBzbyBvbi5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqXG4gICAqIFNob3VsZCBiZSBpbiB0aGUgYFswLCBtYXhdYCByYW5nZS5cbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlID0gMDtcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKlxuICAgKiBBY2NlcHRzIGFueSB2YWxpZCBDU1MgaGVpZ2h0IHZhbHVlcywgZXguIGBcIjJyZW1cImBcbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBOZ2JQcm9ncmVzc2JhckNvbmZpZykge1xuICAgIHRoaXMubWF4ID0gY29uZmlnLm1heDtcbiAgICB0aGlzLmFuaW1hdGVkID0gY29uZmlnLmFuaW1hdGVkO1xuICAgIHRoaXMuc3RyaXBlZCA9IGNvbmZpZy5zdHJpcGVkO1xuICAgIHRoaXMudGV4dFR5cGUgPSBjb25maWcudGV4dFR5cGU7XG4gICAgdGhpcy50eXBlID0gY29uZmlnLnR5cGU7XG4gICAgdGhpcy5zaG93VmFsdWUgPSBjb25maWcuc2hvd1ZhbHVlO1xuICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcbiAgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gZ2V0VmFsdWVJblJhbmdlKHRoaXMudmFsdWUsIHRoaXMubWF4KTsgfVxuXG4gIGdldFBlcmNlbnRWYWx1ZSgpIHsgcmV0dXJuIDEwMCAqIHRoaXMuZ2V0VmFsdWUoKSAvIHRoaXMubWF4OyB9XG59XG4iXX0=