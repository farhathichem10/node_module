import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbToast, NgbToastHeader } from './toast';
export { NgbToast, NgbToastHeader } from './toast';
export { NgbToastConfig } from './toast-config';
export class NgbToastModule {
}
NgbToastModule.decorators = [
    { type: NgModule, args: [{ declarations: [NgbToast, NgbToastHeader], imports: [CommonModule], exports: [NgbToast, NgbToastHeader] },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RvYXN0L3RvYXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2QyxPQUFPLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVqRCxPQUFPLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUMsY0FBYyxFQUFrQixNQUFNLGdCQUFnQixDQUFDO0FBRy9ELE1BQU0sT0FBTyxjQUFjOzs7WUFEMUIsUUFBUSxTQUFDLEVBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TmdiVG9hc3QsIE5nYlRvYXN0SGVhZGVyfSBmcm9tICcuL3RvYXN0JztcblxuZXhwb3J0IHtOZ2JUb2FzdCwgTmdiVG9hc3RIZWFkZXJ9IGZyb20gJy4vdG9hc3QnO1xuZXhwb3J0IHtOZ2JUb2FzdENvbmZpZywgTmdiVG9hc3RPcHRpb25zfSBmcm9tICcuL3RvYXN0LWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7ZGVjbGFyYXRpb25zOiBbTmdiVG9hc3QsIE5nYlRvYXN0SGVhZGVyXSwgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sIGV4cG9ydHM6IFtOZ2JUb2FzdCwgTmdiVG9hc3RIZWFkZXJdfSlcbmV4cG9ydCBjbGFzcyBOZ2JUb2FzdE1vZHVsZSB7XG59XG4iXX0=