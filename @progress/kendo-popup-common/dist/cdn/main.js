!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.KendoPopupCommon=e():t.KendoPopupCommon=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"align",(function(){return r})),n.d(e,"addScroll",(function(){return i})),n.d(e,"applyLocationOffset",(function(){return l})),n.d(e,"boundingOffset",(function(){return h})),n.d(e,"isBodyOffset",(function(){return g})),n.d(e,"offsetParent",(function(){return p})),n.d(e,"offset",(function(){return m})),n.d(e,"parents",(function(){return v})),n.d(e,"parentScrollPosition",(function(){return b})),n.d(e,"position",(function(){return x})),n.d(e,"positionWithScroll",(function(){return P})),n.d(e,"removeScroll",(function(){return S})),n.d(e,"restrictToView",(function(){return C})),n.d(e,"scrollPosition",(function(){return w})),n.d(e,"siblingContainer",(function(){return A})),n.d(e,"siblings",(function(){return E})),n.d(e,"zIndex",(function(){return M})),n.d(e,"alignElement",(function(){return X})),n.d(e,"domUtils",(function(){return F})),n.d(e,"utils",(function(){return I})),n.d(e,"positionElement",(function(){return Y})),n.d(e,"getDocumentElement",(function(){return c})),n.d(e,"getWindow",(function(){return u})),n.d(e,"getWindowViewPort",(function(){return s})),n.d(e,"AlignPoint",(function(){return o})),n.d(e,"Collision",(function(){return z}));var o={bottom:"bottom",center:"center",middle:"middle",left:"left",right:"right",top:"top"},r=function(t){var e=t.anchorRect,n=t.anchorAlign,r=t.elementRect,i=t.elementAlign,l=t.margin;void 0===l&&(l={});var f=n.horizontal,u=n.vertical,c=i.horizontal,a=i.vertical,d=l.horizontal||0,s=l.vertical||0,h=e.top,p=e.left;return u===o.bottom&&(h+=e.height),u!==o.center&&u!==o.middle||(h+=Math.round(e.height/2)),a===o.bottom&&(h-=r.height,s*=-1),a!==o.center&&a!==o.middle||(h-=Math.round(r.height/2),s*=-1),f===o.right&&(p+=e.width),f!==o.center&&f!==o.middle||(p+=Math.round(e.width/2)),c===o.right&&(p-=r.width,d*=-1),c!==o.center&&c!==o.middle||(p-=Math.round(r.width/2),d*=-1),{top:h+s,left:p+d}};function i(t,e){return{top:t.top+e.y,left:t.left+e.x,height:t.height,width:t.width}}function l(t,e,n){var o=t.top,r=t.left;return n&&(r=0,o=0),{top:o+e.top,left:r+e.left,height:t.height,width:t.width}}function f(t){return t.ownerDocument||t.document||t}var u=function(t){return f(t).defaultView},c=function(t){return f(t).documentElement},a=0;function d(){if(!a&&"undefined"!=typeof document){var t=document.createElement("div");t.style.cssText="overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block",t.innerHTML="&nbsp;",document.body.appendChild(t),a=t.offsetWidth-t.scrollWidth,document.body.removeChild(t)}return a}function s(t){var e=u(t),n=c(t),o={height:e.innerHeight,width:e.innerWidth};return n.scrollHeight-n.clientHeight>0&&(o.width-=d()),o}var h=function(t){if(!t.getBoundingClientRect){var e=s(t);return{bottom:e.height,left:0,right:e.width,top:0}}var n=t.getBoundingClientRect();return{bottom:n.bottom,left:n.left,right:n.right,top:n.top}},p=function(t){for(var e=t.offsetParent;e&&"static"===e.style.position;)e=e.offsetParent;return e||c(t)},g=function(t){return p(t)===t.ownerDocument.body},m=function(t){var e=t.getBoundingClientRect(),n=e.left,o=e.top;return e.height||e.width||(e=function(t){var e=t.style,n=e.display,o=e.left,r=e.position;t.style.display="",t.style.left="-10000px",t.style.position="absolute";var i=t.getBoundingClientRect();return t.style.display=n,t.style.left=o,t.style.position=r,i}(t)),{top:o,left:n,height:e.height,width:e.width}},v=function(t,e){for(var n=[],o=t.parentNode;o&&(n.push(o),o!==e);)o=o.parentNode;return n};function w(t){var e=c(t),n=u(t);return{x:n.pageXOffset||e.scrollLeft||0,y:n.pageYOffset||e.scrollTop||0}}var y=function(t){return t===(t.ownerDocument||{}).body?w(t):{x:t.scrollLeft,y:t.scrollTop}};function b(t){var e=p(t);return e?y(e):{x:0,y:0}}var x=function(t,e){var n=u(t),o=n.getComputedStyle(t),r=m(t),i=e||p(t),l=t.ownerDocument,f=i!==l.body&&i!==l.documentElement,c={top:0,left:0};if("fixed"!==o.position&&f){var a=n.getComputedStyle(i);(c=m(i)).top+=parseInt(a.borderTopWidth,10),c.left+=parseInt(a.borderLeftWidth,10)}return{top:r.top-c.top,left:r.left-c.left,height:r.height,width:r.width}},P=function(t,e,n){void 0===n&&(n=1);var o=e?p(e):null,r=x(t,o),i=r.top,l=r.left,f=r.height,u=r.width,c=function(t,e){return t?y(t):b(e)}(o,t),a=c.x,d=c.y,s=t.ownerDocument,h=o===s.body||o===s.documentElement?1:n;return{top:i+d*h,left:l+a*h,height:f,width:u}};function S(t,e){return{top:t.top-e.y,left:t.left-e.x,height:t.height,width:t.width}}var z={fit:"fit",flip:"flip",none:"none"},R=function(t,e,n){var o=0;return t+e>n&&(o=n-(t+e)),t<0&&(o=-t),o},O=function(t){var e=t.offset,n=t.size,r=t.anchorSize,i=t.viewPortSize,l=t.anchorAlignPoint,f=t.elementAlignPoint,u=t.margin,c=0,a=f===o.center||f===o.middle,d=l===o.center||l===o.middle,s=2*u;if(f!==l&&!a&&!d){var h=l===o.top||l===o.left;e<0&&h?e+(c=n+r+s)+n>i&&(c=0):e>=0&&!h&&(e+n>i&&(c+=-(r+n+s)),e+c<0&&(c=0))}return c},C=function(t){var e=t.anchorRect,n=t.anchorAlign,o=t.elementRect,r=t.elementAlign,i=t.collisions,l=t.viewPort,f=t.margin;void 0===f&&(f={});var u=o.top,c=o.left,a=o.height,d=o.width,s=l.height,h=l.width,p=f.horizontal||0,g=f.vertical||0,m=0,v=0,w=i.vertical===z.fit,y=i.horizontal===z.fit,b=i.vertical===z.flip,x=i.horizontal===z.flip;w&&(v+=R(u,a,s)),y&&(m+=R(c,d,h)),b&&(v+=O({margin:g,offset:u,size:a,anchorSize:e.height,viewPortSize:s,anchorAlignPoint:n.vertical,elementAlignPoint:r.vertical})),x&&(m+=O({margin:p,offset:c,size:d,anchorSize:e.width,viewPortSize:h,anchorAlignPoint:n.horizontal,elementAlignPoint:r.horizontal}));var P=b&&0!==v,S=x&&0!==m,C=w&&0!==v,E=y&&0!==m;return{flipped:S||P,fitted:C||E,flip:{horizontal:S,vertical:P},fit:{horizontal:E,vertical:C},offset:{left:m,top:v}}},E=function(t){for(var e=[],n=t.parentNode.firstElementChild;n;)n!==t&&e.push(n),n=n.nextElementSibling;return e},A=function(t,e){for(var n,o,r=v(t),i=e;i&&(n=E(i),!(o=r.reduce((function(t,e){return t.concat(n.filter((function(t){return t===e})))}),[])[0]));)i=i.parentElement;return o};function M(t,e){if(!t||!e)return null;var n=A(t,e);if(!n)return null;var o=[t].concat(v(t,n)).reduce((function(t,e){var n=e.style.zIndex||window.getComputedStyle(e).zIndex,o=parseInt(n,10);return o>t?o:t}),0);return o?o+1:null}var D,T,W,k=(D=function(t){if(!j())return!1;var e=t?t.ownerDocument:document;if(!e||!e.body)return!1;var n=e.createElement("div");n.style.transform="matrix(10, 0, 0, 10, 0, 0)",n.innerHTML='<div style="position: fixed; top: 10px;">child</div>',e.body.appendChild(n);var o=10!==n.children[0].getBoundingClientRect().top;return e.body.removeChild(n),o},W=!1,function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return W||(T=D.apply(void 0,t),W=!0),T}),j=function(){return Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)},I={eitherRect:function(t,e){return t||{height:0,left:e.left,top:e.top,width:0}},scaleRect:function(t,e){return t&&1!==e?{height:t.height/e,left:t.left/e,top:t.top/e,width:t.width/e}:t},removeStackingOffset:function(t,e){return e?{height:t.height,left:t.left-e.left,top:t.top-e.top,width:t.width}:t},hasRelativeStackingContext:k,canUseDOM:j},B=["font-size","font-family","font-stretch","font-style","font-weight","line-height"],L=function(){return I.canUseDOM()?window:null},V=/auto|scroll/,H=function(t){return function(t){return""+t.style.overflow+t.style.overflowX+t.style.overflowY}(t)||function(t){var e=window.getComputedStyle(t);return""+e.overflow+e.overflowX+e.overflowY}(t)},U=function(t){if(!t||!I.hasRelativeStackingContext())return null;for(var e=t.parentElement;e;){if("none"!==window.getComputedStyle(e).transform)return e;e=e.parentElement}return null},_=function(){return I.canUseDOM()&&parseFloat((document.documentElement.clientWidth/window.innerWidth).toFixed(2))||1},F={addOffset:function(t,e){return{left:t.left+e.left,top:t.top+e.top}},addScroll:i,align:r,boundingOffset:h,getFontStyles:function(t){var e=L();if(!e||!t)return[];var n=e.getComputedStyle(t);return B.map((function(t){return{key:t,value:n[t]}}))},getWindow:L,hasOffsetParent:function(t){return!!t&&Boolean(t.offsetParent)},offset:function(t){return t?m(t):null},offsetAtPoint:function(t,e){if(!t)return null;var n=t.style,o=n.left,r=n.top,i=n.transition;t.style.transition="none",t.style.left=e.left+"px",t.style.top=e.top+"px";var l=m(t);return t.style.left=o,t.style.top=r,t.offsetHeight,t.style.transition=i,l},position:function(t,e,n){return t&&e?P(t,e,n||1):null},removeScroll:S,restrictToView:C,scrollPosition:w,scrollableParents:function(t){var e=[];if(!I.canUseDOM())return e;for(var n=t.parentElement;n;)(V.test(H(n))||n.hasAttribute("data-scrollable"))&&e.push(n),n=n.parentElement;return e.push(window),e},getRelativeContextElement:U,stackingElementOffset:function(t){var e=U(t);return e?m(e):null},stackingElementScroll:function(t){var e=U(t);return e?{x:e.scrollLeft,y:e.scrollTop}:{x:0,y:0}},stackingElementViewPort:function(t){var e=U(t);return e?{height:e.scrollHeight,width:e.scrollWidth}:null},useRelativePosition:function(t){return Boolean(U(t))},windowViewPort:s,zoomLevel:_,isZoomed:function(){return _()>1},zIndex:function(t,e){if(!t||!I.canUseDOM())return null;var n=A(t,e);if(!n)return null;var o=[t].concat(v(t,n)).reduce((function(t,e){var n=e.style.zIndex||window.getComputedStyle(e).zIndex,o=parseInt(n,10);return o>t?o:t}),0);return o?o+1:null}},N=function(t,e){return t?{x:0,y:0}:F.scrollPosition(e)},X=function(t){var e=t.anchor,n=t.element,o=t.anchorAlign,r=t.elementAlign,i=t.margin,l=t.offset,f=t.positionMode,u=t.scale||1,c="fixed"===f||!F.hasOffsetParent(n)?function(t,e,n,o){var r=N(t,e),i=I.eitherRect(F.offset(t),n),l=2*o,f=F.stackingElementScroll(e);1!==o&&f&&(f.x/=l,f.y/=l);var u=F.stackingElementOffset(e);return 1!==o&&u&&(u.left/=l,u.top/=l),F.removeScroll(F.addScroll(I.removeStackingOffset(I.scaleRect(i,o),u),f),r)}(e,n,l,u):function(t,e,n,o){var r=I.eitherRect(F.position(t,e,o),n);return I.scaleRect(r,o)}(e,n,l,u),a=I.scaleRect(F.offset(n),u);return F.align({anchorAlign:o,anchorRect:c,elementAlign:r,elementRect:a,margin:i})},Y=function(t){var e=t.anchor,n=t.currentLocation,o=t.element,r=t.anchorAlign,i=t.elementAlign,l=t.collisions,f=t.margin,u=t.scale||1,c=F.offsetAtPoint(o,n),a=I.scaleRect(c,u),d=I.scaleRect(F.offset(e),u),s=I.eitherRect(d,n),h=t.viewPort||F.windowViewPort(o);h.width=h.width/u,h.height=h.height/u;var p=F.restrictToView({anchorAlign:r,anchorRect:s,collisions:l,elementAlign:i,elementRect:a,margin:f,viewPort:h}),g=F.addOffset(n,p.offset);return{flip:p.flip,flipped:p.flipped,fit:p.fit,fitted:p.fitted,offset:g}}}])}));