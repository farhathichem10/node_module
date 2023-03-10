import { NgModule } from '@angular/core';
import { NgbModal } from './modal';
import { NgbModalBackdrop } from './modal-backdrop';
import { NgbModalWindow } from './modal-window';
export { NgbModal } from './modal';
export { NgbModalConfig } from './modal-config';
export { NgbModalRef, NgbActiveModal } from './modal-ref';
export { ModalDismissReasons } from './modal-dismiss-reasons';
export class NgbModalModule {
}
NgbModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgbModalBackdrop, NgbModalWindow],
                entryComponents: [NgbModalBackdrop, NgbModalWindow],
                providers: [NgbModal]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUFDLGNBQWMsRUFBa0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQU81RCxNQUFNLE9BQU8sY0FBYzs7O1lBTDFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7Z0JBQ2hELGVBQWUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHtOZ2JNb2RhbEJhY2tkcm9wfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wJztcbmltcG9ydCB7TmdiTW9kYWxXaW5kb3d9IGZyb20gJy4vbW9kYWwtd2luZG93JztcblxuZXhwb3J0IHtOZ2JNb2RhbH0gZnJvbSAnLi9tb2RhbCc7XG5leHBvcnQge05nYk1vZGFsQ29uZmlnLCBOZ2JNb2RhbE9wdGlvbnN9IGZyb20gJy4vbW9kYWwtY29uZmlnJztcbmV4cG9ydCB7TmdiTW9kYWxSZWYsIE5nYkFjdGl2ZU1vZGFsfSBmcm9tICcuL21vZGFsLXJlZic7XG5leHBvcnQge01vZGFsRGlzbWlzc1JlYXNvbnN9IGZyb20gJy4vbW9kYWwtZGlzbWlzcy1yZWFzb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmdiTW9kYWxCYWNrZHJvcCwgTmdiTW9kYWxXaW5kb3ddLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOZ2JNb2RhbEJhY2tkcm9wLCBOZ2JNb2RhbFdpbmRvd10sXG4gIHByb3ZpZGVyczogW05nYk1vZGFsXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2JNb2RhbE1vZHVsZSB7XG59XG4iXX0=