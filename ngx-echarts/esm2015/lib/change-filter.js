import { of, EMPTY } from 'rxjs';
export class ChangeFilter {
    constructor(changes) {
        this.changes = changes;
    }
    static of(changes) {
        return new ChangeFilter(changes);
    }
    notEmpty(key) {
        if (this.changes[key]) {
            const value = this.changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return of(value);
            }
        }
        return EMPTY;
    }
    has(key) {
        if (this.changes[key]) {
            const value = this.changes[key].currentValue;
            return of(value);
        }
        return EMPTY;
    }
    notFirst(key) {
        if (this.changes[key] && !this.changes[key].isFirstChange()) {
            const value = this.changes[key].currentValue;
            return of(value);
        }
        return EMPTY;
    }
    notFirstAndEmpty(key) {
        if (this.changes[key] && !this.changes[key].isFirstChange()) {
            const value = this.changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return of(value);
            }
        }
        return EMPTY;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvenhpZS9Eb2N1bWVudHMvR2l0SHViL25neC1lY2hhcnRzL3Byb2plY3RzL25neC1lY2hhcnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jaGFuZ2UtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBSSxDQUFDO0lBRS9DLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBc0I7UUFDOUIsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUSxDQUFJLEdBQVc7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sS0FBSyxHQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBRWhELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsR0FBRyxDQUFJLEdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sS0FBSyxHQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ2hELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUSxDQUFJLEdBQVc7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMzRCxNQUFNLEtBQUssR0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNoRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGdCQUFnQixDQUFJLEdBQVc7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMzRCxNQUFNLEtBQUssR0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUVoRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDekMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEVNUFRZIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VGaWx0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxuXG4gIHN0YXRpYyBvZihjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VGaWx0ZXIoY2hhbmdlcyk7XG4gIH1cblxuICBub3RFbXB0eTxUPihrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICh0aGlzLmNoYW5nZXNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWU6IFQgPSB0aGlzLmNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvZih2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBFTVBUWTtcbiAgfVxuXG4gIGhhczxUPihrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICh0aGlzLmNoYW5nZXNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWU6IFQgPSB0aGlzLmNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICByZXR1cm4gb2YodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cblxuICBub3RGaXJzdDxUPihrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICh0aGlzLmNoYW5nZXNba2V5XSAmJiAhdGhpcy5jaGFuZ2VzW2tleV0uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICBjb25zdCB2YWx1ZTogVCA9IHRoaXMuY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHJldHVybiBvZih2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBFTVBUWTtcbiAgfVxuXG4gIG5vdEZpcnN0QW5kRW1wdHk8VD4oa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAodGhpcy5jaGFuZ2VzW2tleV0gJiYgIXRoaXMuY2hhbmdlc1trZXldLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgY29uc3QgdmFsdWU6IFQgPSB0aGlzLmNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvZih2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBFTVBUWTtcbiAgfVxufVxuIl19