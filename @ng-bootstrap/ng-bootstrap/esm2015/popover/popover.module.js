import { NgModule } from '@angular/core';
import { NgbPopover, NgbPopoverWindow } from './popover';
import { CommonModule } from '@angular/common';
export { NgbPopover } from './popover';
export { NgbPopoverConfig } from './popover-config';
export class NgbPopoverModule {
}
NgbPopoverModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgbPopover, NgbPopoverWindow],
                exports: [NgbPopover],
                imports: [CommonModule],
                entryComponents: [NgbPopoverWindow]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFTbEQsTUFBTSxPQUFPLGdCQUFnQjs7O1lBTjVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzVDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDckIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05nYlBvcG92ZXIsIE5nYlBvcG92ZXJXaW5kb3d9IGZyb20gJy4vcG9wb3Zlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IHtOZ2JQb3BvdmVyfSBmcm9tICcuL3BvcG92ZXInO1xuZXhwb3J0IHtOZ2JQb3BvdmVyQ29uZmlnfSBmcm9tICcuL3BvcG92ZXItY29uZmlnJztcbmV4cG9ydCB7UGxhY2VtZW50fSBmcm9tICcuLi91dGlsL3Bvc2l0aW9uaW5nJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmdiUG9wb3ZlciwgTmdiUG9wb3ZlcldpbmRvd10sXG4gIGV4cG9ydHM6IFtOZ2JQb3BvdmVyXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW05nYlBvcG92ZXJXaW5kb3ddXG59KVxuZXhwb3J0IGNsYXNzIE5nYlBvcG92ZXJNb2R1bGUge1xufVxuIl19