// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
export class Positioning {
    getAllStyles(element) { return window.getComputedStyle(element); }
    getStyle(element, prop) { return this.getAllStyles(element)[prop]; }
    isStaticPositioned(element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    }
    offsetParent(element) {
        let offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    }
    position(element, round = true) {
        let elPosition;
        let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
                top: elPosition.top,
                bottom: elPosition.bottom,
                left: elPosition.left,
                right: elPosition.right,
                height: elPosition.height,
                width: elPosition.width
            };
        }
        else {
            const offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    }
    offset(element, round = true) {
        const elBcr = element.getBoundingClientRect();
        const viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        let elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    }
    /*
      Return false if the element to position is outside the viewport
    */
    positionElements(hostElement, targetElement, placement, appendToBody) {
        const [placementPrimary = 'top', placementSecondary = 'center'] = placement.split('-');
        const hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        const targetElStyles = this.getAllStyles(targetElement);
        const marginTop = parseFloat(targetElStyles.marginTop);
        const marginBottom = parseFloat(targetElStyles.marginBottom);
        const marginLeft = parseFloat(targetElStyles.marginLeft);
        const marginRight = parseFloat(targetElStyles.marginRight);
        let topPosition = 0;
        let leftPosition = 0;
        switch (placementPrimary) {
            case 'top':
                topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                break;
            case 'bottom':
                topPosition = (hostElPosition.top + hostElPosition.height);
                break;
            case 'left':
                leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                break;
            case 'right':
                leftPosition = (hostElPosition.left + hostElPosition.width);
                break;
        }
        switch (placementSecondary) {
            case 'top':
                topPosition = hostElPosition.top;
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                leftPosition = hostElPosition.left;
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                }
                else {
                    topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                }
                break;
        }
        /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
        targetElement.style.transform = `translate(${Math.round(leftPosition)}px, ${Math.round(topPosition)}px)`;
        // Check if the targetElement is inside the viewport
        const targetElBCR = targetElement.getBoundingClientRect();
        const html = document.documentElement;
        const windowHeight = window.innerHeight || html.clientHeight;
        const windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
            targetElBCR.bottom <= windowHeight;
    }
}
const placementSeparator = /\s+/;
export const positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
export function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
    let placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
    const allowedPlacements = [
        'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
        'right-top', 'right-bottom'
    ];
    const classList = targetElement.classList;
    const addClassesToTarget = (targetPlacement) => {
        const [primary, secondary] = targetPlacement.split('-');
        const classes = [];
        if (baseClass) {
            classes.push(`${baseClass}-${primary}`);
            if (secondary) {
                classes.push(`${baseClass}-${primary}-${secondary}`);
            }
            classes.forEach((classname) => { classList.add(classname); });
        }
        return classes;
    };
    // Remove old placement classes to avoid issues
    if (baseClass) {
        allowedPlacements.forEach((placementToRemove) => { classList.remove(`${baseClass}-${placementToRemove}`); });
    }
    // replace auto placement with other placements
    let hasAuto = placementVals.findIndex(val => val === 'auto');
    if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
            if (placementVals.find(val => val.search('^' + obj) !== -1) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    // Required for transform:
    const style = targetElement.style;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style['will-change'] = 'transform';
    let testPlacement = null;
    let isInViewport = false;
    for (testPlacement of placementVals) {
        let addedClasses = addClassesToTarget(testPlacement);
        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
        }
        // Remove the baseClasses for further calculation
        if (baseClass) {
            addedClasses.forEach((classname) => { classList.remove(classname); });
        }
    }
    if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
    }
    return testPlacement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC9wb3NpdGlvbmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsaUhBQWlIO0FBQ2pILE1BQU0sT0FBTyxXQUFXO0lBQ2QsWUFBWSxDQUFDLE9BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9FLFFBQVEsQ0FBQyxPQUFvQixFQUFFLElBQVksSUFBWSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpHLGtCQUFrQixDQUFDLE9BQW9CO1FBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDdkUsQ0FBQztJQUVPLFlBQVksQ0FBQyxPQUFvQjtRQUN2QyxJQUFJLGNBQWMsR0FBZ0IsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDO1FBRW5GLE9BQU8sY0FBYyxJQUFJLGNBQWMsS0FBSyxRQUFRLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMvRyxjQUFjLEdBQWdCLGNBQWMsQ0FBQyxZQUFZLENBQUM7U0FDM0Q7UUFFRCxPQUFPLGNBQWMsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQ3BELENBQUM7SUFFRCxRQUFRLENBQUMsT0FBb0IsRUFBRSxLQUFLLEdBQUcsSUFBSTtRQUN6QyxJQUFJLFVBQXNCLENBQUM7UUFDM0IsSUFBSSxZQUFZLEdBQWUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FB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QUFHLENBQUM7SUFDakIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLFdBQVcsQ0FBQztJQUVuQyxJQUFJLGFBQWEsR0FBcUIsSUFBSSxDQUFDO0lBQzNDLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztJQUN6QixLQUFLLGFBQWEsSUFBSSxhQUFhLEVBQUU7UUFDbkMsSUFBSSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckQsSUFBSSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDN0YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNO1NBQ1A7UUFFRCxpREFBaUQ7UUFDakQsSUFBSSxTQUFTLEVBQUU7WUFDYixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkU7S0FDRjtJQUVELElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsMkRBQTJEO1FBQzNELGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQzNGO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHByZXZpb3VzIHZlcnNpb246XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS9ib290c3RyYXAvYmxvYi8wN2MzMWQwNzMxZjdjYjA2OGExOTMyYjhlMDFkMjMxMmI3OTZiNGVjL3NyYy9wb3NpdGlvbi9wb3NpdGlvbi5qc1xuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nIHtcbiAgcHJpdmF0ZSBnZXRBbGxTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHsgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpOyB9XG5cbiAgcHJpdmF0ZSBnZXRTdHlsZShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcDogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZ2V0QWxsU3R5bGVzKGVsZW1lbnQpW3Byb3BdOyB9XG5cbiAgcHJpdmF0ZSBpc1N0YXRpY1Bvc2l0aW9uZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0U3R5bGUoZWxlbWVudCwgJ3Bvc2l0aW9uJykgfHwgJ3N0YXRpYycpID09PSAnc3RhdGljJztcbiAgfVxuXG4gIHByaXZhdGUgb2Zmc2V0UGFyZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBvZmZzZXRQYXJlbnRFbCA9IDxIVE1MRWxlbWVudD5lbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAob2Zmc2V0UGFyZW50RWwgJiYgb2Zmc2V0UGFyZW50RWwgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiB0aGlzLmlzU3RhdGljUG9zaXRpb25lZChvZmZzZXRQYXJlbnRFbCkpIHtcbiAgICAgIG9mZnNldFBhcmVudEVsID0gPEhUTUxFbGVtZW50Pm9mZnNldFBhcmVudEVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50RWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgcG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IENsaWVudFJlY3Qge1xuICAgIGxldCBlbFBvc2l0aW9uOiBDbGllbnRSZWN0O1xuICAgIGxldCBwYXJlbnRPZmZzZXQ6IENsaWVudFJlY3QgPSB7d2lkdGg6IDAsIGhlaWdodDogMCwgdG9wOiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwfTtcblxuICAgIGlmICh0aGlzLmdldFN0eWxlKGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgICBlbFBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGVsUG9zaXRpb24gPSB7XG4gICAgICAgIHRvcDogZWxQb3NpdGlvbi50b3AsXG4gICAgICAgIGJvdHRvbTogZWxQb3NpdGlvbi5ib3R0b20sXG4gICAgICAgIGxlZnQ6IGVsUG9zaXRpb24ubGVmdCxcbiAgICAgICAgcmlnaHQ6IGVsUG9zaXRpb24ucmlnaHQsXG4gICAgICAgIGhlaWdodDogZWxQb3NpdGlvbi5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBlbFBvc2l0aW9uLndpZHRoXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvZmZzZXRQYXJlbnRFbCA9IHRoaXMub2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gICAgICBlbFBvc2l0aW9uID0gdGhpcy5vZmZzZXQoZWxlbWVudCwgZmFsc2UpO1xuXG4gICAgICBpZiAob2Zmc2V0UGFyZW50RWwgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBwYXJlbnRPZmZzZXQgPSB0aGlzLm9mZnNldChvZmZzZXRQYXJlbnRFbCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnRPZmZzZXQudG9wICs9IG9mZnNldFBhcmVudEVsLmNsaWVudFRvcDtcbiAgICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IG9mZnNldFBhcmVudEVsLmNsaWVudExlZnQ7XG4gICAgfVxuXG4gICAgZWxQb3NpdGlvbi50b3AgLT0gcGFyZW50T2Zmc2V0LnRvcDtcbiAgICBlbFBvc2l0aW9uLmJvdHRvbSAtPSBwYXJlbnRPZmZzZXQudG9wO1xuICAgIGVsUG9zaXRpb24ubGVmdCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcbiAgICBlbFBvc2l0aW9uLnJpZ2h0IC09IHBhcmVudE9mZnNldC5sZWZ0O1xuXG4gICAgaWYgKHJvdW5kKSB7XG4gICAgICBlbFBvc2l0aW9uLnRvcCA9IE1hdGgucm91bmQoZWxQb3NpdGlvbi50b3ApO1xuICAgICAgZWxQb3NpdGlvbi5ib3R0b20gPSBNYXRoLnJvdW5kKGVsUG9zaXRpb24uYm90dG9tKTtcbiAgICAgIGVsUG9zaXRpb24ubGVmdCA9IE1hdGgucm91bmQoZWxQb3NpdGlvbi5sZWZ0KTtcbiAgICAgIGVsUG9zaXRpb24ucmlnaHQgPSBNYXRoLnJvdW5kKGVsUG9zaXRpb24ucmlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbFBvc2l0aW9uO1xuICB9XG5cbiAgb2Zmc2V0KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBDbGllbnRSZWN0IHtcbiAgICBjb25zdCBlbEJjciA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgdmlld3BvcnRPZmZzZXQgPSB7XG4gICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXG4gICAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuICAgIH07XG5cbiAgICBsZXQgZWxPZmZzZXQgPSB7XG4gICAgICBoZWlnaHQ6IGVsQmNyLmhlaWdodCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHdpZHRoOiBlbEJjci53aWR0aCB8fCBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgdG9wOiBlbEJjci50b3AgKyB2aWV3cG9ydE9mZnNldC50b3AsXG4gICAgICBib3R0b206IGVsQmNyLmJvdHRvbSArIHZpZXdwb3J0T2Zmc2V0LnRvcCxcbiAgICAgIGxlZnQ6IGVsQmNyLmxlZnQgKyB2aWV3cG9ydE9mZnNldC5sZWZ0LFxuICAgICAgcmlnaHQ6IGVsQmNyLnJpZ2h0ICsgdmlld3BvcnRPZmZzZXQubGVmdFxuICAgIH07XG5cbiAgICBpZiAocm91bmQpIHtcbiAgICAgIGVsT2Zmc2V0LmhlaWdodCA9IE1hdGgucm91bmQoZWxPZmZzZXQuaGVpZ2h0KTtcbiAgICAgIGVsT2Zmc2V0LndpZHRoID0gTWF0aC5yb3VuZChlbE9mZnNldC53aWR0aCk7XG4gICAgICBlbE9mZnNldC50b3AgPSBNYXRoLnJvdW5kKGVsT2Zmc2V0LnRvcCk7XG4gICAgICBlbE9mZnNldC5ib3R0b20gPSBNYXRoLnJvdW5kKGVsT2Zmc2V0LmJvdHRvbSk7XG4gICAgICBlbE9mZnNldC5sZWZ0ID0gTWF0aC5yb3VuZChlbE9mZnNldC5sZWZ0KTtcbiAgICAgIGVsT2Zmc2V0LnJpZ2h0ID0gTWF0aC5yb3VuZChlbE9mZnNldC5yaWdodCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsT2Zmc2V0O1xuICB9XG5cbiAgLypcbiAgICBSZXR1cm4gZmFsc2UgaWYgdGhlIGVsZW1lbnQgdG8gcG9zaXRpb24gaXMgb3V0c2lkZSB0aGUgdmlld3BvcnRcbiAgKi9cbiAgcG9zaXRpb25FbGVtZW50cyhob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwbGFjZW1lbnQ6IHN0cmluZywgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbik6XG4gICAgICBib29sZWFuIHtcbiAgICBjb25zdFtwbGFjZW1lbnRQcmltYXJ5ID0gJ3RvcCcsIHBsYWNlbWVudFNlY29uZGFyeSA9ICdjZW50ZXInXSA9IHBsYWNlbWVudC5zcGxpdCgnLScpO1xuXG4gICAgY29uc3QgaG9zdEVsUG9zaXRpb24gPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWxlbWVudCwgZmFsc2UpIDogdGhpcy5wb3NpdGlvbihob3N0RWxlbWVudCwgZmFsc2UpO1xuICAgIGNvbnN0IHRhcmdldEVsU3R5bGVzID0gdGhpcy5nZXRBbGxTdHlsZXModGFyZ2V0RWxlbWVudCk7XG5cbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUZsb2F0KHRhcmdldEVsU3R5bGVzLm1hcmdpblRvcCk7XG4gICAgY29uc3QgbWFyZ2luQm90dG9tID0gcGFyc2VGbG9hdCh0YXJnZXRFbFN0eWxlcy5tYXJnaW5Cb3R0b20pO1xuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHRhcmdldEVsU3R5bGVzLm1hcmdpbkxlZnQpO1xuICAgIGNvbnN0IG1hcmdpblJpZ2h0ID0gcGFyc2VGbG9hdCh0YXJnZXRFbFN0eWxlcy5tYXJnaW5SaWdodCk7XG5cbiAgICBsZXQgdG9wUG9zaXRpb24gPSAwO1xuICAgIGxldCBsZWZ0UG9zaXRpb24gPSAwO1xuXG4gICAgc3dpdGNoIChwbGFjZW1lbnRQcmltYXJ5KSB7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICB0b3BQb3NpdGlvbiA9IChob3N0RWxQb3NpdGlvbi50b3AgLSAodGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgKyBtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b20pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0b3BQb3NpdGlvbiA9IChob3N0RWxQb3NpdGlvbi50b3AgKyBob3N0RWxQb3NpdGlvbi5oZWlnaHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBsZWZ0UG9zaXRpb24gPSAoaG9zdEVsUG9zaXRpb24ubGVmdCAtICh0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBsZWZ0UG9zaXRpb24gPSAoaG9zdEVsUG9zaXRpb24ubGVmdCArIGhvc3RFbFBvc2l0aW9uLndpZHRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoIChwbGFjZW1lbnRTZWNvbmRhcnkpIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHRvcFBvc2l0aW9uID0gaG9zdEVsUG9zaXRpb24udG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRvcFBvc2l0aW9uID0gaG9zdEVsUG9zaXRpb24udG9wICsgaG9zdEVsUG9zaXRpb24uaGVpZ2h0IC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGxlZnRQb3NpdGlvbiA9IGhvc3RFbFBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBsZWZ0UG9zaXRpb24gPSBob3N0RWxQb3NpdGlvbi5sZWZ0ICsgaG9zdEVsUG9zaXRpb24ud2lkdGggLSB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGlmIChwbGFjZW1lbnRQcmltYXJ5ID09PSAndG9wJyB8fCBwbGFjZW1lbnRQcmltYXJ5ID09PSAnYm90dG9tJykge1xuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IChob3N0RWxQb3NpdGlvbi5sZWZ0ICsgaG9zdEVsUG9zaXRpb24ud2lkdGggLyAyIC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvcFBvc2l0aW9uID0gKGhvc3RFbFBvc2l0aW9uLnRvcCArIGhvc3RFbFBvc2l0aW9uLmhlaWdodCAvIDIgLSB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vLyBUaGUgdHJhbnNsYXRlM2QvZ3B1IGFjY2VsZXJhdGlvbiByZW5kZXIgYSBibHVycnkgdGV4dCBvbiBjaHJvbWUsIHRoZSBuZXh0IGxpbmUgaXMgY29tbWVudGVkIHVudGlsIGEgYnJvd3NlciBmaXhcbiAgICAvLyB0YXJnZXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke01hdGgucm91bmQobGVmdFBvc2l0aW9uKX1weCwgJHtNYXRoLmZsb29yKHRvcFBvc2l0aW9uKX1weCwgMHB4KWA7XG4gICAgdGFyZ2V0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7TWF0aC5yb3VuZChsZWZ0UG9zaXRpb24pfXB4LCAke01hdGgucm91bmQodG9wUG9zaXRpb24pfXB4KWA7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgdGFyZ2V0RWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0XG4gICAgY29uc3QgdGFyZ2V0RWxCQ1IgPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGh0bWwuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgaHRtbC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB0YXJnZXRFbEJDUi5sZWZ0ID49IDAgJiYgdGFyZ2V0RWxCQ1IudG9wID49IDAgJiYgdGFyZ2V0RWxCQ1IucmlnaHQgPD0gd2luZG93V2lkdGggJiZcbiAgICAgICAgdGFyZ2V0RWxCQ1IuYm90dG9tIDw9IHdpbmRvd0hlaWdodDtcbiAgfVxufVxuXG5jb25zdCBwbGFjZW1lbnRTZXBhcmF0b3IgPSAvXFxzKy87XG5leHBvcnQgY29uc3QgcG9zaXRpb25TZXJ2aWNlID0gbmV3IFBvc2l0aW9uaW5nKCk7XG5cbi8qXG4gKiBBY2NlcHQgdGhlIHBsYWNlbWVudCBhcnJheSBhbmQgYXBwbGllcyB0aGUgYXBwcm9wcmlhdGUgcGxhY2VtZW50IGRlcGVuZGVudCBvbiB0aGUgdmlld3BvcnQuXG4gKiBSZXR1cm5zIHRoZSBhcHBsaWVkIHBsYWNlbWVudC5cbiAqIEluIGNhc2Ugb2YgYXV0byBwbGFjZW1lbnQsIHBsYWNlbWVudHMgYXJlIHNlbGVjdGVkIGluIG9yZGVyXG4gKiAgICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLFxuICogICAndG9wLWxlZnQnLCAndG9wLXJpZ2h0JyxcbiAqICAgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsXG4gKiAgICdsZWZ0LXRvcCcsICdsZWZ0LWJvdHRvbScsXG4gKiAgICdyaWdodC10b3AnLCAncmlnaHQtYm90dG9tJy5cbiAqICovXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwbGFjZW1lbnQ6IHN0cmluZyB8IFBsYWNlbWVudCB8IFBsYWNlbWVudEFycmF5LFxuICAgIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sIGJhc2VDbGFzcz86IHN0cmluZyk6IFBsYWNlbWVudCB8XG4gICAgbnVsbCB7XG4gIGxldCBwbGFjZW1lbnRWYWxzOiBBcnJheTxQbGFjZW1lbnQ+ID1cbiAgICAgIEFycmF5LmlzQXJyYXkocGxhY2VtZW50KSA/IHBsYWNlbWVudCA6IHBsYWNlbWVudC5zcGxpdChwbGFjZW1lbnRTZXBhcmF0b3IpIGFzIEFycmF5PFBsYWNlbWVudD47XG5cbiAgY29uc3QgYWxsb3dlZFBsYWNlbWVudHMgPSBbXG4gICAgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2xlZnQtdG9wJywgJ2xlZnQtYm90dG9tJyxcbiAgICAncmlnaHQtdG9wJywgJ3JpZ2h0LWJvdHRvbSdcbiAgXTtcblxuICBjb25zdCBjbGFzc0xpc3QgPSB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdDtcbiAgY29uc3QgYWRkQ2xhc3Nlc1RvVGFyZ2V0ID0gKHRhcmdldFBsYWNlbWVudDogUGxhY2VtZW50KTogQXJyYXk8c3RyaW5nPiA9PiB7XG4gICAgY29uc3RbcHJpbWFyeSwgc2Vjb25kYXJ5XSA9IHRhcmdldFBsYWNlbWVudC5zcGxpdCgnLScpO1xuICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKGJhc2VDbGFzcykge1xuICAgICAgY2xhc3Nlcy5wdXNoKGAke2Jhc2VDbGFzc30tJHtwcmltYXJ5fWApO1xuICAgICAgaWYgKHNlY29uZGFyeSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goYCR7YmFzZUNsYXNzfS0ke3ByaW1hcnl9LSR7c2Vjb25kYXJ5fWApO1xuICAgICAgfVxuXG4gICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzbmFtZSkgPT4geyBjbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfTtcblxuICAvLyBSZW1vdmUgb2xkIHBsYWNlbWVudCBjbGFzc2VzIHRvIGF2b2lkIGlzc3Vlc1xuICBpZiAoYmFzZUNsYXNzKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMuZm9yRWFjaCgocGxhY2VtZW50VG9SZW1vdmUpID0+IHsgY2xhc3NMaXN0LnJlbW92ZShgJHtiYXNlQ2xhc3N9LSR7cGxhY2VtZW50VG9SZW1vdmV9YCk7IH0pO1xuICB9XG5cbiAgLy8gcmVwbGFjZSBhdXRvIHBsYWNlbWVudCB3aXRoIG90aGVyIHBsYWNlbWVudHNcbiAgbGV0IGhhc0F1dG8gPSBwbGFjZW1lbnRWYWxzLmZpbmRJbmRleCh2YWwgPT4gdmFsID09PSAnYXV0bycpO1xuICBpZiAoaGFzQXV0byA+PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmIChwbGFjZW1lbnRWYWxzLmZpbmQodmFsID0+IHZhbC5zZWFyY2goJ14nICsgb2JqKSAhPT0gLTEpID09IG51bGwpIHtcbiAgICAgICAgcGxhY2VtZW50VmFscy5zcGxpY2UoaGFzQXV0bysrLCAxLCBvYmogYXMgUGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvb3JkaW5hdGVzIHdoZXJlIHRvIHBvc2l0aW9uXG5cbiAgLy8gUmVxdWlyZWQgZm9yIHRyYW5zZm9ybTpcbiAgY29uc3Qgc3R5bGUgPSB0YXJnZXRFbGVtZW50LnN0eWxlO1xuICBzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHN0eWxlLnRvcCA9ICcwJztcbiAgc3R5bGUubGVmdCA9ICcwJztcbiAgc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAndHJhbnNmb3JtJztcblxuICBsZXQgdGVzdFBsYWNlbWVudDogUGxhY2VtZW50IHwgbnVsbCA9IG51bGw7XG4gIGxldCBpc0luVmlld3BvcnQgPSBmYWxzZTtcbiAgZm9yICh0ZXN0UGxhY2VtZW50IG9mIHBsYWNlbWVudFZhbHMpIHtcbiAgICBsZXQgYWRkZWRDbGFzc2VzID0gYWRkQ2xhc3Nlc1RvVGFyZ2V0KHRlc3RQbGFjZW1lbnQpO1xuXG4gICAgaWYgKHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCB0ZXN0UGxhY2VtZW50LCBhcHBlbmRUb0JvZHkpKSB7XG4gICAgICBpc0luVmlld3BvcnQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSBiYXNlQ2xhc3NlcyBmb3IgZnVydGhlciBjYWxjdWxhdGlvblxuICAgIGlmIChiYXNlQ2xhc3MpIHtcbiAgICAgIGFkZGVkQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc25hbWUpID0+IHsgY2xhc3NMaXN0LnJlbW92ZShjbGFzc25hbWUpOyB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWlzSW5WaWV3cG9ydCkge1xuICAgIC8vIElmIG5vdGhpbmcgbWF0Y2gsIHRoZSBmaXJzdCBwbGFjZW1lbnQgaXMgdGhlIGRlZmF1bHQgb25lXG4gICAgdGVzdFBsYWNlbWVudCA9IHBsYWNlbWVudFZhbHNbMF07XG4gICAgYWRkQ2xhc3Nlc1RvVGFyZ2V0KHRlc3RQbGFjZW1lbnQpO1xuICAgIHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCB0ZXN0UGxhY2VtZW50LCBhcHBlbmRUb0JvZHkpO1xuICB9XG5cbiAgcmV0dXJuIHRlc3RQbGFjZW1lbnQ7XG59XG5cbmV4cG9ydCB0eXBlIFBsYWNlbWVudCA9ICdhdXRvJyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8XG4gICAgJ2JvdHRvbS1yaWdodCcgfCAnbGVmdC10b3AnIHwgJ2xlZnQtYm90dG9tJyB8ICdyaWdodC10b3AnIHwgJ3JpZ2h0LWJvdHRvbSc7XG5cbmV4cG9ydCB0eXBlIFBsYWNlbWVudEFycmF5ID0gUGxhY2VtZW50IHwgQXJyYXk8UGxhY2VtZW50Pnwgc3RyaW5nO1xuIl19