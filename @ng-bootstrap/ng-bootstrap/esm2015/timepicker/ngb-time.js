import { isNumber, toInteger } from '../util/util';
export class NgbTime {
    constructor(hour, minute, second) {
        this.hour = toInteger(hour);
        this.minute = toInteger(minute);
        this.second = toInteger(second);
    }
    changeHour(step = 1) { this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step); }
    updateHour(hour) {
        if (isNumber(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    }
    changeMinute(step = 1) { this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step); }
    updateMinute(minute) {
        if (isNumber(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    }
    changeSecond(step = 1) { this.updateSecond((isNaN(this.second) ? 0 : this.second) + step); }
    updateSecond(second) {
        if (isNumber(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    }
    isValid(checkSecs = true) {
        return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
    }
    toString() { return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRpbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdGltZXBpY2tlci9uZ2ItdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVqRCxNQUFNLE9BQU8sT0FBTztJQUtsQixZQUFZLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBZTtRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRixVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVGLFlBQVksQ0FBQyxNQUFjO1FBQ3pCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1RixZQUFZLENBQUMsTUFBYztRQUN6QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJO1FBQ3RCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsUUFBUSxLQUFLLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNuRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNOdW1iZXIsIHRvSW50ZWdlcn0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuZXhwb3J0IGNsYXNzIE5nYlRpbWUge1xuICBob3VyOiBudW1iZXI7XG4gIG1pbnV0ZTogbnVtYmVyO1xuICBzZWNvbmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihob3VyPzogbnVtYmVyLCBtaW51dGU/OiBudW1iZXIsIHNlY29uZD86IG51bWJlcikge1xuICAgIHRoaXMuaG91ciA9IHRvSW50ZWdlcihob3VyKTtcbiAgICB0aGlzLm1pbnV0ZSA9IHRvSW50ZWdlcihtaW51dGUpO1xuICAgIHRoaXMuc2Vjb25kID0gdG9JbnRlZ2VyKHNlY29uZCk7XG4gIH1cblxuICBjaGFuZ2VIb3VyKHN0ZXAgPSAxKSB7IHRoaXMudXBkYXRlSG91cigoaXNOYU4odGhpcy5ob3VyKSA/IDAgOiB0aGlzLmhvdXIpICsgc3RlcCk7IH1cblxuICB1cGRhdGVIb3VyKGhvdXI6IG51bWJlcikge1xuICAgIGlmIChpc051bWJlcihob3VyKSkge1xuICAgICAgdGhpcy5ob3VyID0gKGhvdXIgPCAwID8gMjQgKyBob3VyIDogaG91cikgJSAyNDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3VyID0gTmFOO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1pbnV0ZShzdGVwID0gMSkgeyB0aGlzLnVwZGF0ZU1pbnV0ZSgoaXNOYU4odGhpcy5taW51dGUpID8gMCA6IHRoaXMubWludXRlKSArIHN0ZXApOyB9XG5cbiAgdXBkYXRlTWludXRlKG1pbnV0ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTnVtYmVyKG1pbnV0ZSkpIHtcbiAgICAgIHRoaXMubWludXRlID0gbWludXRlICUgNjAgPCAwID8gNjAgKyBtaW51dGUgJSA2MCA6IG1pbnV0ZSAlIDYwO1xuICAgICAgdGhpcy5jaGFuZ2VIb3VyKE1hdGguZmxvb3IobWludXRlIC8gNjApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taW51dGUgPSBOYU47XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU2Vjb25kKHN0ZXAgPSAxKSB7IHRoaXMudXBkYXRlU2Vjb25kKChpc05hTih0aGlzLnNlY29uZCkgPyAwIDogdGhpcy5zZWNvbmQpICsgc3RlcCk7IH1cblxuICB1cGRhdGVTZWNvbmQoc2Vjb25kOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOdW1iZXIoc2Vjb25kKSkge1xuICAgICAgdGhpcy5zZWNvbmQgPSBzZWNvbmQgPCAwID8gNjAgKyBzZWNvbmQgJSA2MCA6IHNlY29uZCAlIDYwO1xuICAgICAgdGhpcy5jaGFuZ2VNaW51dGUoTWF0aC5mbG9vcihzZWNvbmQgLyA2MCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZCA9IE5hTjtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkKGNoZWNrU2VjcyA9IHRydWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5ob3VyKSAmJiBpc051bWJlcih0aGlzLm1pbnV0ZSkgJiYgKGNoZWNrU2VjcyA/IGlzTnVtYmVyKHRoaXMuc2Vjb25kKSA6IHRydWUpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7IHJldHVybiBgJHt0aGlzLmhvdXIgfHwgMH06JHt0aGlzLm1pbnV0ZSB8fCAwfToke3RoaXMuc2Vjb25kIHx8IDB9YDsgfVxufVxuIl19