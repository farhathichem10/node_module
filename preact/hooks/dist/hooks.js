var n,t,r,o=require("preact"),u=0,i=[],c=o.options.__b,e=o.options.__r,f=o.options.diffed,a=o.options.__c,v=o.options.unmount;function p(n,r){o.options.__h&&o.options.__h(t,n,u||r),u=0;var i=t.__H||(t.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function s(n){return u=1,x(A,n)}function x(r,o,u){var i=p(n++,2);return i.t=r,i.__c||(i.__=[u?u(o):A(void 0,o),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=t),i.__}function m(r,u){var i=p(n++,4);!o.options.__s&&q(i.__H,u)&&(i.__=r,i.__H=u,t.__h.push(i))}function l(t,r){var o=p(n++,7);return q(o.__H,r)&&(o.__=t(),o.__H=r,o.__h=t),o.__}function y(){i.forEach(function(n){if(n.__P)try{n.__H.__h.forEach(_),n.__H.__h.forEach(d),n.__H.__h=[]}catch(t){n.__H.__h=[],o.options.__e(t,n.__v)}}),i=[]}o.options.__b=function(n){t=null,c&&c(n)},o.options.__r=function(r){e&&e(r),n=0;var o=(t=r.__c).__H;o&&(o.__h.forEach(_),o.__h.forEach(d),o.__h=[])},o.options.diffed=function(n){f&&f(n);var u=n.__c;u&&u.__H&&u.__H.__h.length&&(1!==i.push(u)&&r===o.options.requestAnimationFrame||((r=o.options.requestAnimationFrame)||function(n){var t,r=function(){clearTimeout(o),h&&cancelAnimationFrame(t),setTimeout(n)},o=setTimeout(r,100);h&&(t=requestAnimationFrame(r))})(y)),t=void 0},o.options.__c=function(n,t){t.some(function(n){try{n.__h.forEach(_),n.__h=n.__h.filter(function(n){return!n.__||d(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],o.options.__e(r,n.__v)}}),a&&a(n,t)},o.options.unmount=function(n){v&&v(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(_)}catch(n){o.options.__e(n,t.__v)}};var h="function"==typeof requestAnimationFrame;function _(n){var r=t;"function"==typeof n.__c&&n.__c(),t=r}function d(n){var r=t;n.__c=n.__(),t=r}function q(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function A(n,t){return"function"==typeof t?t(n):t}exports.useState=s,exports.useReducer=x,exports.useEffect=function(r,u){var i=p(n++,3);!o.options.__s&&q(i.__H,u)&&(i.__=r,i.__H=u,t.__H.__h.push(i))},exports.useLayoutEffect=m,exports.useRef=function(n){return u=5,l(function(){return{current:n}},[])},exports.useImperativeHandle=function(n,t,r){u=6,m(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==r?r:r.concat(n))},exports.useMemo=l,exports.useCallback=function(n,t){return u=8,l(function(){return n},t)},exports.useContext=function(r){var o=t.context[r.__c],u=p(n++,9);return u.__c=r,o?(null==u.__&&(u.__=!0,o.sub(t)),o.props.value):r.__},exports.useDebugValue=function(n,t){o.options.useDebugValue&&o.options.useDebugValue(t?t(n):n)},exports.useErrorBoundary=function(r){var o=p(n++,10),u=s();return o.__=r,t.componentDidCatch||(t.componentDidCatch=function(n){o.__&&o.__(n),u[1](n)}),[u[0],function(){u[1](void 0)}]};
//# sourceMappingURL=hooks.js.map