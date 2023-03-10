import HasObservers from '../core/has-observers';
import withAccessors from '../mixins/with-accessors';
import { defined, round } from '../util';


class Size extends withAccessors(HasObservers, [ "width", "height" ]) {
    constructor(width, height) {
        super();

        this.width = width || 0;
        this.height = height || 0;
    }

    equals(other) {
        return other && other.width === this.width && other.height === this.height;
    }

    clone() {
        return new Size(this.width, this.height);
    }

    toArray(digits) {
        const doRound = defined(digits);
        const width = doRound ? round(this.width, digits) : this.width;
        const height = doRound ? round(this.height, digits) : this.height;

        return [ width, height ];
    }

    static create(arg0, arg1) {
        if (defined(arg0)) {
            if (arg0 instanceof Size) {
                return arg0;
            } else if (arguments.length === 1 && arg0.length === 2) {
                return new Size(arg0[0], arg0[1]);
            }

            return new Size(arg0, arg1);
        }
    }

    static get ZERO() {
        return new Size(0, 0);
    }
}

export default Size;
