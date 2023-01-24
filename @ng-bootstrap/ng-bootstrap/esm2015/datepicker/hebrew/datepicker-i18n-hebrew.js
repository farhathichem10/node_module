import { NgbDatepickerI18n } from '../datepicker-i18n';
import { hebrewNumerals, isHebrewLeapYear } from './hebrew';
import { Injectable } from '@angular/core';
const WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
const MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
const MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * @since 3.2.0
 */
export class NgbDatepickerI18nHebrew extends NgbDatepickerI18n {
    getMonthShortName(month, year) { return this.getMonthFullName(month, year); }
    getMonthFullName(month, year) {
        return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] || '' : MONTHS[month - 1] || '';
    }
    getWeekdayLabel(weekday, width) { return WEEKDAYS[weekday - 1] || ''; }
    getDayAriaLabel(date) {
        return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
    }
    getDayNumerals(date) { return hebrewNumerals(date.day); }
    getWeekNumerals(weekNumber) { return hebrewNumerals(weekNumber); }
    getYearNumerals(year) { return hebrewNumerals(year); }
}
NgbDatepickerI18nHebrew.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLWhlYnJldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL2hlYnJldy9kYXRlcGlja2VyLWkxOG4taGVicmV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDMUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl6QyxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVFLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzRyxNQUFNLFdBQVcsR0FDYixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTdHOztHQUVHO0FBRUgsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGlCQUFpQjtJQUM1RCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsSUFBYSxJQUFZLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEcsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLElBQWE7UUFDM0MsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pGLENBQUM7SUFFRCxlQUFlLENBQUMsT0FBZSxFQUFFLEtBQXdCLElBQUksT0FBTyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFbEcsZUFBZSxDQUFDLElBQW1CO1FBQ2pDLE9BQU8sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDcEgsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFtQixJQUFZLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEYsZUFBZSxDQUFDLFVBQWtCLElBQVksT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxGLGVBQWUsQ0FBQyxJQUFZLElBQVksT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7WUFsQnZFLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nYkRhdGVwaWNrZXJJMThufSBmcm9tICcuLi9kYXRlcGlja2VyLWkxOG4nO1xuaW1wb3J0IHtOZ2JEYXRlU3RydWN0fSBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQge2hlYnJld051bWVyYWxzLCBpc0hlYnJld0xlYXBZZWFyfSBmcm9tICcuL2hlYnJldyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGlvbldpZHRofSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cbmNvbnN0IFdFRUtEQVlTID0gWyfXqdeg15knLCAn16nXnNeZ16nXmScsICfXqNeR15nXoteZJywgJ9eX157Xmdep15knLCAn16nXmdep15knLCAn16nXkdeqJywgJ9eo15DXqdeV158nXTtcbmNvbnN0IE1PTlRIUyA9IFsn16rXqdeo15knLCAn15fXqdeV158nLCAn15vXodec15UnLCAn15jXkdeqJywgJ9ep15HXmCcsICfXkNeT16gnLCAn16DXmdeh158nLCAn15DXmdeZ16gnLCAn16HXmdeV158nLCAn16rXnteV15YnLCAn15DXkScsICfXkNec15XXnCddO1xuY29uc3QgTU9OVEhTX0xFQVAgPVxuICAgIFsn16rXqdeo15knLCAn15fXqdeV158nLCAn15vXodec15UnLCAn15jXkdeqJywgJ9ep15HXmCcsICfXkNeT16gg15DXsycsICfXkNeT16gg15HXsycsICfXoNeZ16HXnycsICfXkNeZ15nXqCcsICfXodeZ15XXnycsICfXqtee15XXlicsICfXkNeRJywgJ9eQ15zXldecJ107XG5cbi8qKlxuICogQHNpbmNlIDMuMi4wXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VySTE4bkhlYnJldyBleHRlbmRzIE5nYkRhdGVwaWNrZXJJMThuIHtcbiAgZ2V0TW9udGhTaG9ydE5hbWUobW9udGg6IG51bWJlciwgeWVhcj86IG51bWJlcik6IHN0cmluZyB7IHJldHVybiB0aGlzLmdldE1vbnRoRnVsbE5hbWUobW9udGgsIHllYXIpOyB9XG5cbiAgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNIZWJyZXdMZWFwWWVhcih5ZWFyKSA/IE1PTlRIU19MRUFQW21vbnRoIC0gMV0gfHwgJycgOiBNT05USFNbbW9udGggLSAxXSB8fCAnJztcbiAgfVxuXG4gIGdldFdlZWtkYXlMYWJlbCh3ZWVrZGF5OiBudW1iZXIsIHdpZHRoPzogVHJhbnNsYXRpb25XaWR0aCkgeyByZXR1cm4gV0VFS0RBWVNbd2Vla2RheSAtIDFdIHx8ICcnOyB9XG5cbiAgZ2V0RGF5QXJpYUxhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtoZWJyZXdOdW1lcmFscyhkYXRlLmRheSl9ICR7dGhpcy5nZXRNb250aEZ1bGxOYW1lKGRhdGUubW9udGgsIGRhdGUueWVhcil9ICR7aGVicmV3TnVtZXJhbHMoZGF0ZS55ZWFyKX1gO1xuICB9XG5cbiAgZ2V0RGF5TnVtZXJhbHMoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7IHJldHVybiBoZWJyZXdOdW1lcmFscyhkYXRlLmRheSk7IH1cblxuICBnZXRXZWVrTnVtZXJhbHMod2Vla051bWJlcjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIGhlYnJld051bWVyYWxzKHdlZWtOdW1iZXIpOyB9XG5cbiAgZ2V0WWVhck51bWVyYWxzKHllYXI6IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBoZWJyZXdOdW1lcmFscyh5ZWFyKTsgfVxufVxuIl19