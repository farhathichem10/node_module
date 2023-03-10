import offsetParent from './offset-parent';
import elementScrollPosition from './element-scroll-position';

export default function parentScrollPosition(element) {
    var parent = offsetParent(element);

    return parent ? elementScrollPosition(parent) : { x: 0, y: 0 };
}
