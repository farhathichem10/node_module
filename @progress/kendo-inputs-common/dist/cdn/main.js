!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@progress/kendo-drawing")):"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.KendoInputsCommon=e(require("@progress/kendo-drawing")):t.KendoInputsCommon=e(t.KendoDrawing)}(self,(function(t){return(()=>{"use strict";var e={909:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.limitValue=e.elementOffset=void 0;var o=n(86).drawing.util,r=o.elementOffset,i=o.limitValue;e.elementOffset=r,e.limitValue=i},847:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.limitValue=e.elementOffset=void 0;var o=n(909);Object.defineProperty(e,"elementOffset",{enumerable:!0,get:function(){return o.elementOffset}}),Object.defineProperty(e,"limitValue",{enumerable:!0,get:function(){return o.limitValue}})},215:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MaskingService=void 0;var o=n(223),r=n(566),i=function(){function t(){this.rules={},this.prompt="_",this.mask="",this.promptPlaceholder=" ",this.includeLiterals=!1,this.maskTokens=[],this.unmaskTokens=[],this.rawTokens=[],this.validationTokens=[]}return t.prototype.update=function(t){var e=t.mask,n=void 0===e?"":e,o=t.prompt,r=void 0===o?"":o,i=t.promptPlaceholder,s=void 0===i?" ":i,a=t.rules,u=void 0===a?{}:a,p=t.includeLiterals,l=void 0!==p&&p;this.mask=n,this.prompt=r,this.promptPlaceholder=s,this.rules=u,this.includeLiterals=l,this.tokenize()},t.prototype.validationValue=function(t){void 0===t&&(t="");var e=t;return o.sequence(this.validationTokens).run(t).fold((function(t){e=t.join("")})),e},t.prototype.rawValue=function(t){void 0===t&&(t="");var e=t;return this.rawTokens.length?(o.sequence(this.rawTokens).run(t).fold((function(t){e=t.join("")})),e):e},t.prototype.maskRaw=function(t){void 0===t&&(t="");var e=t;return this.maskTokens.length?(o.sequence(this.maskTokens).run(t).fold((function(t){e=t.join("")})),e):e},t.prototype.maskInput=function(t,e,n){return t.length<e.length?this.maskRemoved(t,e,n):this.maskInserted(t,e,n)},t.prototype.maskInRange=function(t,e,n,r){var i="",s=r,a=e.split("").slice(0,n),u=e.split("").slice(r);return o.sequence(this.maskTokens.slice(n,r)).run(t).fold((function(t){i=a.concat(t).concat(u).join("")})),{selection:s,value:i}},t.prototype.maskRemoved=function(t,e,n){var r=this,i="",s=n,a=t.split("").slice(n),u=t.split("").slice(0,n).join(""),p=this.maskTokens.length-(t.length-n);return o.sequence(this.maskTokens.slice(0,p)).run(u,e).fold((function(t){s=r.adjustPosition(t,s),i=t.concat(a).join("")})),{selection:s,value:i}},t.prototype.adjustPosition=function(t,e){var n=t[e];return this.maskTokens[e].isLiteral(n)||n===this.prompt?e:e+1},t.prototype.maskInserted=function(t,e,n){var r=this,i="",s=n,a=t.slice(0,n);return o.sequence(this.unmaskTokens).run(a,e).chain((function(t){s=t.join("").length;var n=e.slice(s);return o.sequence(r.maskTokens).run(t.join("")+n,e)})).fold((function(t){i=t.join("")})),{selection:s,value:i}},Object.defineProperty(t.prototype,"maskTokenCreator",{get:function(){var t=this.prompt,e=this.promptPlaceholder;return{literal:function(t){return r.literal(t)},mask:function(n){return r.mask({prompt:t,promptPlaceholder:e})(n)}}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"unmaskTokenCreator",{get:function(){var t=this;return{literal:function(t){return r.unliteral(t)},mask:function(e){return r.unmask(t.prompt)(e)}}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rawTokenCreator",{get:function(){var t=this,e=t.prompt,n=t.promptPlaceholder,o=t.includeLiterals;return{literal:function(t){return r.rawLiteral(o)},mask:function(t){return r.rawMask({prompt:e,promptPlaceholder:n})}}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"validationTokenCreator",{get:function(){var t=this.prompt;return{literal:function(t){return r.rawLiteral(!1)},mask:function(e){return r.rawMask({prompt:t,promptPlaceholder:""})}}},enumerable:!1,configurable:!0}),t.prototype.tokenize=function(){var t=this;o.greedy(r.token(this.rules,this.maskTokenCreator)).run(this.mask).fold((function(e,n){t.maskTokens=e})),o.greedy(r.token(this.rules,this.unmaskTokenCreator)).run(this.mask).fold((function(e,n){t.unmaskTokens=e})),o.greedy(r.token(this.rules,this.rawTokenCreator)).run(this.mask).fold((function(e,n){t.rawTokens=e})),o.greedy(r.token(this.rules,this.validationTokenCreator)).run(this.mask).fold((function(e,n){t.validationTokens=e}))},t}();e.MaskingService=i},223:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.greedy=e.sequence=void 0;var o=n(566),r=n(262);e.sequence=function(t){return t.reduce((function(t,e){return n=e,t.chain((function(t){return n.map((function(e){return t.concat([e])}))}));var n}),(e=[],new o.Parser((function(t){return new r.Result(e,t)}))));var e},e.greedy=function(t){return new o.Parser((function(e){for(var n=new r.Result([],e);!e.eof();)n=n.concat(t.run(e));return n}))}},566:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.rawLiteral=e.rawMask=e.token=e.unliteral=e.unmask=e.literal=e.mask=e.Parser=void 0;var o=n(262),r=n(771),i=function(t){return(t||"").split("")},s=function(){function t(t){this.parse=t}return t.prototype.run=function(t,e){return void 0===e&&(e=""),t instanceof r.Stream?this.parse(t):this.parse(new r.Stream(i(t),i(e)))},t.prototype.map=function(e){var n=this;return new t((function(t){return n.parse(t).map(e)}))},t.prototype.chain=function(e){var n=this;return new t((function(t){return n.parse(t).chain((function(t,n){return e(t).run(n)}))}))},t.prototype.isLiteral=function(t){return this.run(t).type===o.ResultType.Literal},t}();e.Parser=s,e.mask=function(t){var e=t.prompt,n=t.promptPlaceholder;return function(t){return new s((function(r){for(;!r.eof();){var i=r.peek(),s=i.char,a=i.control;if(s===a&&a===e)return r.eat(),new o.Result(e,r,o.ResultType.Mask);if(t.test(s))return r.eat(),new o.Result(s,r,o.ResultType.Mask);if(s===n)return r.eat(),new o.Result(e,r,o.ResultType.Mask);r.eat_input()}return r.eat(),new o.Result(e,r,o.ResultType.Mask)}))}},e.literal=function(t){return new s((function(e){return e.peek().char===t?(e.eat(),new o.Result(t,e,o.ResultType.Literal)):new o.Result(t,e,o.ResultType.Literal)}))},e.unmask=function(t){return function(e){return new s((function(n){for(;!n.eof();){var r=n.peek(),i=r.char,s=r.control;if(i===t&&s===t)return n.eat(),new o.Result(i,n);if(e.test(i))return n.eat(),new o.Result(i,n);n.eat_input()}return n.eat(),new o.Result("",n)}))}},e.unliteral=function(t){return new s((function(e){return e.eof()?new o.Result("",e):(e.peek().char===t&&e.eat(),new o.Result(t,e))}))},e.token=function(t,e){return new s((function(n){var r=n.next().char,i=t[r];return"\\"===r?(r=n.next().char,new o.Result(e.literal(r),n)):i?new o.Result(e.mask(i),n):new o.Result(e.literal(r),n)}))},e.rawMask=function(t){var e=t.prompt,n=t.promptPlaceholder;return new s((function(t){var r=t.next().char;return r===e?new o.Result(n,t):new o.Result(r,t)}))},e.rawLiteral=function(t){return new s((function(e){var n=e.next().char;return t?new o.Result(n,e):new o.Result("",e)}))}},262:(t,e)=>{var n;Object.defineProperty(e,"__esModule",{value:!0}),e.Result=e.ResultType=void 0,function(t){t[t.Literal=0]="Literal",t[t.Mask=1]="Mask",t[t.Undefined=2]="Undefined"}(n=e.ResultType||(e.ResultType={}));var o=function(){function t(t,e,o){void 0===o&&(o=n.Undefined),this.value=t,this.rest=e,this.type=o}return t.prototype.map=function(e){return new t(e(this.value),this.rest)},t.prototype.chain=function(t){return t(this.value,this.rest)},t.prototype.fold=function(t,e){return t(this.value,this.rest)},t.prototype.concat=function(t){return this.map((function(e,n){return t.chain((function(t,n){return e.concat([t])}))}))},t.prototype.toString=function(){return"Result({ value: '"+this.value+"', rest: "+this.rest+" })"},t}();e.Result=o},771:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Stream=void 0;var n=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=[]),this.input=t,this.control=e,this.inputCursor=0,this.controlCursor=0}return t.prototype.eof=function(){return this.inputCursor>=this.input.length},t.prototype.next=function(){return{char:this.input[this.inputCursor++],control:this.control[this.controlCursor++]}},t.prototype.peek=function(){return{char:this.input[this.inputCursor],control:this.control[this.controlCursor]}},t.prototype.eat_input=function(){this.inputCursor++},t.prototype.eat_control=function(){this.controlCursor++},t.prototype.eat=function(){this.inputCursor++,this.controlCursor++},t}();e.Stream=n},887:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SignaturePad=void 0;var o=n(86),r=n(847),i=o.geometry.Point,s=o.geometry.Rect,a=o.geometry.transform,u=function(){},p=function(){function t(t,e){void 0===e&&(e={}),this.element=t,this.lastMoveTime=0,this.options=Object.assign({scale:1,precision:1,samplingRate:200,smooth:!1!==e.smooth,color:e.color||"#000",backgroundColor:e.backgroundColor||"#fff",strokeWidth:1,onChange:u,onDraw:u,onDrawEnd:u},e),this.pathOptions={stroke:{color:this.options.color,width:this.options.strokeWidth,lineCap:"round",lineJoin:"round"}},this.initSurface(),this.attachEvents()}return t.prototype.destroy=function(){this.detachEvents()},t.prototype.clear=function(){this.rootGroup.clear(),this.path=null},Object.defineProperty(t.prototype,"isDrawing",{get:function(){return Boolean(this.points)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pathData",{get:function(){var t;return null===(t=this.path)||void 0===t?void 0:t.toString(3)},set:function(t){this.clear(),this.path=o.MultiPath.parse(t,this.pathOptions),this.rootGroup.append(this.path)},enumerable:!1,configurable:!0}),t.prototype.loadImage=function(t,e){if(void 0===e&&(e=[]),t){var n=this.size,r=n[0],i=n[1],s=r/this.options.scale,u=i/this.options.scale,p=e[0]||6*s,l=e[1]||6*u,c=s/p,h=u/l,f=Math.min(c,h),d=new o.Image(t,new o.geometry.Rect([0,0],[p,l]));d.transform(a().scale(f,f)),this.clear(),this.rootGroup.append(d)}else this.clear()},t.prototype.exportImage=function(t){var e,n=this.size,r=n[0],i=n[1],u=r/this.options.scale,p=i/this.options.scale,l=(null==t?void 0:t.width)||6*u,c=(null==t?void 0:t.height)||6*p,h=l/u,f=c/p,d=Math.min(h,f),m=new s([0,0],[l,c]),v=new o.Group({clip:o.Path.fromRect(m)}),k=new o.Group({transform:a().scale(d,d)}),y=o.Path.fromRect(m,{fill:{color:this.options.backgroundColor}});return v.append(y),v.append(k),(e=k.children).push.apply(e,this.rootGroup.children),o.exportImage(v,Object.assign({width:l,height:c},t))},t.prototype.resize=function(){this.surface.resize(!0)},t.prototype.setOptions=function(t){Object.assign(this.options,t),this.pathOptions.stroke.color=this.options.color,this.pathOptions.stroke.width=this.options.strokeWidth,this.path&&(this.path.options.set("stroke.color",this.options.color),this.path.options.set("stroke.width",this.options.strokeWidth)),this.background.options.set("fill.color",this.options.backgroundColor)},t.prototype.initSurface=function(){this.surface=o.Surface.create(this.element,{type:"canvas"}),this.element.style.touchAction="none";var t=this.options.scale;this.rootGroup=new o.Group({transform:a().scale(t,t)});var e=this.element.offsetWidth||750,n=this.element.offsetHeight||250;this.size=[e,n],this.background=o.Path.fromRect(new s([0,0],this.size),{fill:{color:this.options.backgroundColor}}),this.surface.draw(this.background),this.surface.draw(this.rootGroup)},t.prototype.attachEvents=function(){this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.element.addEventListener("pointerdown",this.onPointerDown),this.element.addEventListener("pointermove",this.onPointerMove),this.element.addEventListener("pointerup",this.onPointerUp)},t.prototype.detachEvents=function(){this.element.removeEventListener("pointerdown",this.onPointerDown),this.element.removeEventListener("pointermove",this.onPointerMove),this.element.removeEventListener("pointerup",this.onPointerUp)},t.prototype.touchPoint=function(t){var e=r.elementOffset(this.element),n=t.pageX,o=t.pageY,s=1/this.options.scale;return new i(n-e.left,o-e.top).scale(s,s)},t.prototype.onPointerDown=function(t){if(!this.options.readonly&&t.isPrimary&&function(t){return"number"!=typeof t.button||0===t.button}(t)){this.path||(this.path=new o.MultiPath(this.pathOptions),this.rootGroup.append(this.path)),this.options.onDraw(),this.element.setPointerCapture(t.pointerId);var e=this.touchPoint(t);this.points=[e],this.path.moveTo(e)}},t.prototype.onPointerMove=function(t){if(this.points&&t.isPrimary){var e=(new Date).getTime();if(!(e-this.lastMoveTime<1e3/r.limitValue(this.options.samplingRate,1,1e4))){this.lastMoveTime=e;var n=this.touchPoint(t),o=this.points[this.points.length-1],i=1/r.limitValue(this.options.precision,.01,100);n.distanceTo(o)<i||(this.points.push(n),this.path.lineTo(n))}}},t.prototype.onPointerUp=function(t){if(t.isPrimary&&this.path&&this.points&&!this.options.readonly){if(this.options.smooth){var e=o.Path.curveFromPoints(this.points);this.path.paths.splice(this.path.paths.length-1,1,e)}this.points=null,this.options.onDrawEnd(),this.options.onChange(this.pathData)}},t}();e.SignaturePad=p},86:e=>{e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}var r={};return(()=>{var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.SignaturePad=t.MaskingService=void 0;var e=o(215);Object.defineProperty(t,"MaskingService",{enumerable:!0,get:function(){return e.MaskingService}});var n=o(887);Object.defineProperty(t,"SignaturePad",{enumerable:!0,get:function(){return n.SignaturePad}})})(),r})()}));