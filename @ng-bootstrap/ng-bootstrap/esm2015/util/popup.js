import { TemplateRef } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';
import { ngbRunTransition } from './transition/ngbTransition';
export class ContentRef {
    constructor(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}
export class PopupService {
    constructor(_type, _injector, _viewContainerRef, _renderer, _ngZone, _componentFactoryResolver, _applicationRef) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
        this._windowRef = null;
        this._contentRef = null;
    }
    open(content, context, animation = false) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), this._viewContainerRef.length, this._injector, this._contentRef.nodes);
        }
        const { nativeElement } = this._windowRef.location;
        const transition$ = this._ngZone.onStable.pipe(take(1), mergeMap(() => ngbRunTransition(this._ngZone, nativeElement, ({ classList }) => classList.add('show'), { animation, runningTransition: 'continue' })));
        return { windowRef: this._windowRef, transition$ };
    }
    close(animation = false) {
        if (!this._windowRef) {
            return of(undefined);
        }
        return ngbRunTransition(this._ngZone, this._windowRef.location.nativeElement, ({ classList }) => classList.remove('show'), { animation, runningTransition: 'stop' })
            .pipe(tap(() => {
            var _a;
            if (this._windowRef) {
                // this is required because of the container='body' option
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
                this._windowRef = null;
            }
            if ((_a = this._contentRef) === null || _a === void 0 ? void 0 : _a.viewRef) {
                this._applicationRef.detachView(this._contentRef.viewRef);
                this._contentRef.viewRef.destroy();
                this._contentRef = null;
            }
        }));
    }
    _getContentRef(content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            const viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText(`${content}`)]]);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBT0wsV0FBVyxFQUdaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsTUFBTSxPQUFPLFVBQVU7SUFDckIsWUFBbUIsS0FBWSxFQUFTLE9BQWlCLEVBQVMsWUFBZ0M7UUFBL0UsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7SUFBRyxDQUFDO0NBQ3ZHO0FBRUQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFDWSxLQUFVLEVBQVUsU0FBbUIsRUFBVSxpQkFBbUMsRUFDcEYsU0FBb0IsRUFBVSxPQUFlLEVBQzdDLHlCQUFtRCxFQUFVLGVBQStCO1FBRjVGLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNwRixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUM3Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTmhHLGVBQVUsR0FBMEIsSUFBSSxDQUFDO1FBQ3pDLGdCQUFXLEdBQXNCLElBQUksQ0FBQztJQUs2RCxDQUFDO0lBRTVHLElBQUksQ0FBQyxPQUFtQyxFQUFFLE9BQWEsRUFBRSxTQUFTLEdBQUcsS0FBSztRQUV4RSxJQUFJLENBQUMsSUFBSSxDQUFDLFVB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Q0FBQztTQUNyRDthQUFNO1lBQ0wsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWVyZ2VNYXAsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge25nYlJ1blRyYW5zaXRpb259IGZyb20gJy4vdHJhbnNpdGlvbi9uZ2JUcmFuc2l0aW9uJztcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRSZWYge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbm9kZXM6IGFueVtdLCBwdWJsaWMgdmlld1JlZj86IFZpZXdSZWYsIHB1YmxpYyBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55Pikge31cbn1cblxuZXhwb3J0IGNsYXNzIFBvcHVwU2VydmljZTxUPiB7XG4gIHByaXZhdGUgX3dpbmRvd1JlZjogQ29tcG9uZW50UmVmPFQ+fCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfY29udGVudFJlZjogQ29udGVudFJlZiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfdHlwZTogYW55LCBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpIHt9XG5cbiAgb3Blbihjb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiwgY29udGV4dD86IGFueSwgYW5pbWF0aW9uID0gZmFsc2UpOlxuICAgICAge3dpbmRvd1JlZjogQ29tcG9uZW50UmVmPFQ+LCB0cmFuc2l0aW9uJDogT2JzZXJ2YWJsZTx2b2lkPn0ge1xuICAgIGlmICghdGhpcy5fd2luZG93UmVmKSB7XG4gICAgICB0aGlzLl9jb250ZW50UmVmID0gdGhpcy5fZ2V0Q29udGVudFJlZihjb250ZW50LCBjb250ZXh0KTtcbiAgICAgIHRoaXMuX3dpbmRvd1JlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPih0aGlzLl90eXBlKSwgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5sZW5ndGgsXG4gICAgICAgICAgdGhpcy5faW5qZWN0b3IsIHRoaXMuX2NvbnRlbnRSZWYubm9kZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHtuYXRpdmVFbGVtZW50fSA9IHRoaXMuX3dpbmRvd1JlZi5sb2NhdGlvbjtcbiAgICBjb25zdCB0cmFuc2l0aW9uJCA9IHRoaXMuX25nWm9uZS5vblN0YWJsZS5waXBlKFxuICAgICAgICB0YWtlKDEpLCBtZXJnZU1hcChcbiAgICAgICAgICAgICAgICAgICAgICgpID0+IG5nYlJ1blRyYW5zaXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmdab25lLCBuYXRpdmVFbGVtZW50LCAoe2NsYXNzTGlzdH0pID0+IGNsYXNzTGlzdC5hZGQoJ3Nob3cnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICB7YW5pbWF0aW9uLCBydW5uaW5nVHJhbnNpdGlvbjogJ2NvbnRpbnVlJ30pKSk7XG5cbiAgICByZXR1cm4ge3dpbmRvd1JlZjogdGhpcy5fd2luZG93UmVmLCB0cmFuc2l0aW9uJH07XG4gIH1cblxuICBjbG9zZShhbmltYXRpb24gPSBmYWxzZSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGlmICghdGhpcy5fd2luZG93UmVmKSB7XG4gICAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmdiUnVuVHJhbnNpdGlvbihcbiAgICAgICAgICAgICAgIHRoaXMuX25nWm9uZSwgdGhpcy5fd2luZG93UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsICh7Y2xhc3NMaXN0fSkgPT4gY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpLFxuICAgICAgICAgICAgICAge2FuaW1hdGlvbiwgcnVubmluZ1RyYW5zaXRpb246ICdzdG9wJ30pXG4gICAgICAgIC5waXBlKHRhcCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX3dpbmRvd1JlZikge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyByZXF1aXJlZCBiZWNhdXNlIG9mIHRoZSBjb250YWluZXI9J2JvZHknIG9wdGlvblxuICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5yZW1vdmUodGhpcy5fdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMuX3dpbmRvd1JlZi5ob3N0VmlldykpO1xuICAgICAgICAgICAgdGhpcy5fd2luZG93UmVmID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnRSZWY/LnZpZXdSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5fY29udGVudFJlZi52aWV3UmVmKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZi5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50UmVmID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvbnRlbnRSZWYoY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4sIGNvbnRleHQ/OiBhbnkpOiBDb250ZW50UmVmIHtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0KTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG4gICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW3ZpZXdSZWYucm9vdE5vZGVzXSwgdmlld1JlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbW3RoaXMuX3JlbmRlcmVyLmNyZWF0ZVRleHQoYCR7Y29udGVudH1gKV1dKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==