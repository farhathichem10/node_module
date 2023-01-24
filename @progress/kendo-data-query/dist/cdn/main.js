!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("tslib")):"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.KendoDataQuery=t(require("tslib")):e.KendoDataQuery=t(e.self)}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isPresent=function(e){return null!=e},t.isBlank=function(e){return null==e},t.isArray=function(e){return Array.isArray(e)},t.isFunction=function(e){return"function"==typeof e},t.isString=function(e){return"string"==typeof e},t.isTruthy=function(e){return!!e},t.isNullOrEmptyString=function(e){return t.isBlank(e)||0===e.trim().length},t.isNotNullOrEmptyString=function(e){return!t.isNullOrEmptyString(e)},t.isNumeric=function(e){return!isNaN(e-parseFloat(e))},t.isDate=function(e){return e&&e.getTime}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.isCompositeFilterDescriptor=function(e){return n.isPresent(e.filters)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={},o=/\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;i[void 0]=function(e){return e},t.getter=function(e,t){var r=e+t;if(i[r])return i[r];var u=[];return e.replace(o,(function(e,t,r,i){u.push(n.isPresent(t)?t:r||i)})),i[r]=function(e){for(var r=e,i=0;i<u.length;i++)if(r=r[u[i]],!n.isPresent(r)&&t)return r;return r},i[r]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ifElse=function(e,t,r){return function(n){return e(n)?t(n):r(n)}},t.compose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){return e.reduceRight((function(e,t){return t(e)}),t)}},t.constant=function(e){return function(){return e}},t.identity=function(e){return e}},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(1),o=function(e){e.filters&&(e.filters=e.filters.map((function(e){var t,r=Object.assign({},e);return!i.isCompositeFilterDescriptor(e)&&n.isString(e.operator)&&(r.operator={"!=":"neq","<":"lt","<=":"lte","==":"eq",">":"gt",">=":"gte",equal:"eq",equals:"eq",equalto:"eq",ge:"gte",greater:"gt",greaterthan:"gt",greaterthanequal:"gte",isempty:"isempty",isequalto:"eq",isgreaterthan:"gt",isgreaterthanorequalto:"gte",islessthan:"lt",islessthanorequalto:"lte",isnotempty:"isnotempty",isnotequalto:"neq",isnull:"isnull",le:"lte",less:"lt",lessthan:"lt",lessthanequal:"lte",ne:"neq",notequal:"neq",notequals:"neq",notequalto:"neq",notsubstringof:"doesnotcontain"}[(t=e.operator).toLowerCase()]||t),i.isCompositeFilterDescriptor(e)&&o(r),r})))};t.normalizeFilters=function(e){return n.isPresent(e)&&(e=function(e){return i.isCompositeFilterDescriptor(e)?Object.assign({},e):{filters:n.isArray(e)?e:[e],logic:"and"}}(e),o(e)),e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),i=r(0),o=r(11),u=r(8);t.normalizeGroups=function(e){return(e=i.isArray(e)?e:[e]).map((function(e){return Object.assign({dir:"asc"},e)}))};var s=n.map((function(e){return e}));t.groupBy=function(e,r,a,c){if(void 0===r&&(r=[]),void 0===a&&(a=s),void 0===c&&(c=e),!(r=t.normalizeGroups(r)).length)return e;var l=r[0],f=n.exec(a(n.groupCombinator(l.field)),{},e),g=[];return Object.keys(f).forEach((function(e){Object.keys(f[e]).forEach((function(n){var a=f[e][n],p={},d=c;i.isPresent(l.aggregates)&&(d=u.filterBy(c,{field:l.field,ignoreCase:!1,operator:"eq",value:a.value}),p=o.aggregateBy(d,l.aggregates)),g[a.__position]={aggregates:p,field:e,items:r.length>1?t.groupBy(a.items,r.slice(1),s,d):a.items,value:a.value}}))})),g}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(2);t.groupCombinator=function(e){var t=i.getter(e,!0),r=0;return function(i,o){i[e]=i[e]||{};var u=t(o),s=function(e){return(e=n.isPresent(e)&&e.getTime?e.getTime():e)+""}(u),a=i[e][s]||{__position:r++,aggregates:{},items:[],value:u};return a.items.push(o),i[e][s]=a,i}},t.expandAggregates=function(e){return void 0===e&&(e={}),Object.keys(e).forEach((function(t){var r=e[t];Object.keys(r).forEach((function(e){r[e]=r[e].result()}))})),e};t.aggregatesCombinator=function(e){var t=e.map((function(e){var t=i.getter(e.field,!0),r=(e.aggregate||"").toLowerCase(),o=i.getter(r,!0);return function(i,u){var s=i[e.field]||{},a=o(s)||{average:function(){var e=0,t=0;return{calc:function(r){n.isNumeric(r)?(e+=r,t++):e=r},result:function(){return n.isNumeric(e)?e/t:e}}},count:function(){var e=0;return{calc:function(){return e++},result:function(){return e}}},max:function(){var e=Number.NEGATIVE_INFINITY;return{calc:function(t){(e=n.isNumeric(e)||n.isDate(e)?e:t)<t&&(n.isNumeric(t)||n.isDate(t))&&(e=t)},result:function(){return e}}},min:function(){var e=Number.POSITIVE_INFINITY;return{calc:function(t){(e=n.isNumeric(e)||n.isDate(e)?e:t)>t&&(n.isNumeric(t)||n.isDate(t))&&(e=t)},result:function(){return e}}},sum:function(){var e=0;return{calc:function(t){t=n.isPresent(t)?t:0,e+=t},result:function(){return e}}}}[r]();return a.calc(t(u)),s[e.aggregate]=a,i[e.field]=s,i}}));return function(e,r){return t.reduce((function(e,t){return t(e,r)}),e)}},t.concat=function(e,t){return e.push(t),e},t.map=function(e){return function(t){return function(r,n,i){return t(r,e(n,i))}}},t.filter=function(e){return function(t){return function(r,n){return e(n)?t(r,n):r}}},t.isTransformerResult=function(e){return n.isPresent(e.__value)};var o=function(e){return t.isTransformerResult(e)?e:{__value:e,reduced:!0}};t.take=function(e){return function(t){return function(r,n){return e-- >0?t(r,n):o(r)}}},t.takeWhile=function(e){return function(t){return function(r,n){return e(n)?t(r,n):o(r)}}},t.skip=function(e){return function(t){return function(r,n){return e--<=0?t(r,n):r}}},t.exec=function(e,r,n){for(var i=r,o=0,u=n.length;o<u;o++)if(i=e(i,n[o],o),t.isTransformerResult(i)){i=i.__value;break}return i}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(1),o=r(5),u=r(18);t.compileFilter=function(e){return e&&0!==e.filters.length?u.transformCompositeFilter(e):function(){return!0}},t.filterBy=function(e,r){return!n.isPresent(r)||i.isCompositeFilterDescriptor(r)&&0===r.filters.length?e:e.filter(t.compileFilter(o.normalizeFilters(r)))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i,o=r(4),u=r(0);t.wrapIf=function(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return e()?""+t[0]+r[0]+t[1]:r[0]}},t.toUTC=function(e){return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))},t.quote=function(e){var t=e.field,r=e.value,n=e.ignoreCase,i=e.operator;return{value:"'"+r.replace(/'/g,"''")+"'",field:t,ignoreCase:n,operator:i}},t.encodeValue=function(e){var t=e.field,r=e.value,n=e.ignoreCase,i=e.operator;return{value:""+encodeURIComponent(r),field:t,ignoreCase:n,operator:i}},t.toLower=function(e){var r=e.field,i=e.value,u=e.ignoreCase,s=e.operator;return{field:t.wrapIf((function(){return u}))(n||(n=o.__makeTemplateObject(["tolower(",")"],["tolower(",")"])),r),value:i,ignoreCase:u,operator:s}},t.normalizeField=function(e){var t=e.field,r=e.value,n=e.ignoreCase,i=e.operator;return{value:r,field:t.replace(/\./g,"/"),ignoreCase:n,operator:i}},t.isStringValue=function(e){return u.isString(e.value)},t.isDateValue=function(e){return u.isDate(e.value)},t.serializeFilters=function(e,r){return function(n){return t.wrapIf((function(){return n.filters.length>1}))(i||(i=o.__makeTemplateObject(["(",")"],["(",")"])),n.filters.map(e).join(r(n)))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(2),o=function(e,t){return n.isBlank(e)?e===t?0:-1:n.isBlank(t)?1:e.localeCompare?e.localeCompare(t):e>t?1:e<t?-1:0},u=function(e,t){return o(t,e)},s=function(e){var t=i.getter(e.field,!0);return function(r,n){return("asc"===e.dir?o:u)(t(r),t(n))}},a=function(e,t){return 0};t.composeSortDescriptors=function(e){return e.filter((function(e){return n.isPresent(e.dir)})).map((function(e){return s(e)})).reduce((function(e,t){return function(r,n){return e(r,n)||t(r,n)}}),a)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),i=n.map((function(e){return e}));t.aggregateBy=function(e,t,r){void 0===t&&(t=[]),void 0===r&&(r=i);var o={};if(!t.length)return o;var u=n.exec(r(n.aggregatesCombinator(t)),o,e);return n.expandAggregates(u)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.isCompositeFilterDescriptor=n.isCompositeFilterDescriptor;var i=r(13);t.toODataString=i.toODataString;var o=r(15);t.toDataSourceRequestString=o.toDataSourceRequestString,t.toDataSourceRequest=o.toDataSourceRequest;var u=r(16);t.translateDataSourceResultGroups=u.translateDataSourceResultGroups,t.translateAggregateResults=u.translateAggregateResults;var s=r(17);t.orderBy=s.orderBy,t.process=s.process,t.distinct=s.distinct;var a=r(2);t.getter=a.getter;var c=r(8);t.filterBy=c.filterBy,t.compileFilter=c.compileFilter;var l=r(6);t.groupBy=l.groupBy;var f=r(10);t.composeSortDescriptors=f.composeSortDescriptors;var g=r(5);t.normalizeFilters=g.normalizeFilters;var p=r(6);t.normalizeGroups=p.normalizeGroups;var d=r(11);t.aggregateBy=d.aggregateBy;var v=r(20);t.FilterOperator=v.FilterOperator},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i,o=r(4),u=r(0),s=r(14),a=r(3),c=a.constant(""),l=function(e,t){return a.ifElse(u.isPresent,(r=e[0],function(e){return r+e}),c)(t);var r};t.toODataString=function(e,t){return void 0===t&&(t={}),Object.keys(e).map(function(e,t){return function(r){return{filter:s.serializeFilter(t.filter||{},e),skip:l(n||(n=o.__makeTemplateObject(["$skip=",""],["$skip=",""])),t.skip),sort:(a=t.sort||[],c=a.filter((function(e){return u.isPresent(e.dir)})).map((function(e){var t=e.field.replace(/\./g,"/");return"desc"===e.dir?t+" desc":t})).join(","),c?"$orderby="+c:c),take:l(i||(i=o.__makeTemplateObject(["$top=",""],["$top=",""])),t.take)}[r];var a,c}}(t,e)).filter(u.isNotNullOrEmptyString).join("&")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),i=r(1),o=r(3),u=r(9),s=r(5),a=function(e){var t=e.operator;return function(e){var r=e.field,n=e.value;return r+" "+t+" "+n}},c=function(e){return o.compose(e,u.encodeValue,u.quote,u.toLower,u.normalizeField)},l=function(e){return c((t=e.operator,function(e){var r=e.field,n=e.value;return t+"("+r+","+n+")"}));var t},f=function(e){return o.compose(a(e),u.normalizeField,(t=e.utcDates,function(e){var r=e.field,n=e.value,i=e.ignoreCase,o=e.operator;return{value:JSON.stringify(t?n:u.toUTC(n)).replace(/"/g,""),field:r,ignoreCase:i,operator:o}}));var t},g=function(e){return o.ifElse(u.isDateValue,f(e),function(e){return o.compose(a(e),u.normalizeField)}(e))},p=function(e){return o.ifElse(u.isStringValue,function(e){return c(a(e))}(e),g(e))},d=function(e){return e+" eq -1"},v=function(e){return o.compose(e,u.normalizeField)},m=function(e){return" "+e.logic+" "},y=function(e){return function(t){return function(e,t){return{contains:l(n.__assign({},t,{operator:"contains"})),doesnotcontain:o.compose(d,l(n.__assign({},t,{operator:"indexof"}))),endswith:l(n.__assign({},t,{operator:"endswith"})),eq:p(n.__assign({},t,{operator:"eq"})),gt:p(n.__assign({},t,{operator:"gt"})),gte:p(n.__assign({},t,{operator:"ge"})),isempty:v((function(e){return e.field+" eq ''"})),isnotempty:v((function(e){return e.field+" ne ''"})),isnotnull:v((function(e){return e.field+" ne null"})),isnull:v((function(e){return e.field+" eq null"})),lt:p(n.__assign({},t,{operator:"lt"})),lte:p(n.__assign({},t,{operator:"le"})),neq:p(n.__assign({},t,{operator:"ne"})),startswith:l(n.__assign({},t,{operator:"startswith"}))}[e]}(t.operator,e)(t)}},_=function(e){return u.serializeFilters((function(t){return o.ifElse(i.isCompositeFilterDescriptor,_(e),y(e))(t)}),m)};t.serializeFilter=function(e,t){return void 0===t&&(t={}),e.filters&&e.filters.length?"$filter="+_(t)(s.normalizeFilters(e)):""}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i,o=r(4),u=r(1),s=r(0),a=r(2),c=r(3),l=r(9),f=function(e){return function(t){return[e,t]}},g=function(){return null},p=function(e){return function(t){return s.isPresent(e(t))}},d=function(e){return function(t){return function(e){return s.isPresent(e)&&s.isArray(e)&&e.length>0}(e(t))}},v=function(e,t){return c.ifElse(e,t,g)},m=function(e,t){return function(r){return e(r).map(t).join("~")}},y=(n=[['"',""],[":","-"]],c.compose.apply(void 0,n.map((function(e){var t=e[0],r=e[1];return function(e){return e.replace(new RegExp(t,"g"),r)}})))),_=(i=".",function(e){return e.slice(0,e.indexOf(i))}),h=function(e){var t=e.field,r=e.dir;return t+"-"+(void 0===r?"asc":r)},b=a.getter("take"),O=a.getter("aggregates"),P=a.getter("skip"),j=a.getter("group"),D=a.getter("sort",!0),S=m(D,h),q=m(j,h),C=m(O,(function(e){return e.field+"-"+e.aggregate})),F=c.compose((function(e){return"datetime'"+e+"'"}),_,y,JSON.stringify,l.toUTC),k=c.compose(f("page"),(function(e){var t=e.skip,r=e.take;return Math.floor((t||0)/r)+1})),N=c.compose(f("pageSize"),b),w=c.compose(f("group"),q),E=c.compose(f("sort"),S),M=c.compose(f("aggregate"),C),T=v(p(P),k),x=v(p(b),N),B=v(d(j),w),z=v(p(O),M),I=c.compose(v(d(D),E),(function(e){return Object.assign({},e,{sort:(D(e)||[]).filter((function(e){var t=e.dir;return s.isNotNullOrEmptyString(t)}))})})),R=function(e){var t=e.field;return s.isNotNullOrEmptyString(t)},A=function(e){return e.field+"~"+e.operator+"~"+e.value},V=c.ifElse(l.isDateValue,c.compose(A,(function(e){var t=e.field,r=e.value,n=e.ignoreCase,i=e.operator;return{value:F(r),field:t,ignoreCase:n,operator:i}})),A),G=function(e){return"~"+e.logic+"~"},L=function(e){return l.serializeFilters((function(t){return c.ifElse(u.isCompositeFilterDescriptor,L(e),function(e){return v(R,c.ifElse(l.isStringValue,c.compose(A,l.quote,e?l.encodeValue:c.identity),V))}(e))(t)}),G)},$=function(e,t){var r=e.filter;if(r&&r.filters){var n=L(t)(r);if(n.length)return["filter",n]}return null},U=function(e,t){return void 0===t&&(t=!0),function(r){return{aggregates:z(e),filter:$(e,t),group:B(e),skip:T(e),sort:I(e),take:x(e)}[r]}};t.toDataSourceRequestString=function(e){return(t=Object.keys(e).map(U(e)).filter(s.isPresent),t.reduce((function(e,t){var r=t[0],n=t[1];return e.concat([r+"="+n])}),[])).join("&");var t},t.toDataSourceRequest=function(e){return Object.keys(e).map(U(e,!1)).filter(s.isPresent).reduce((function(e,t){var r,n=t[0],i=t[1];return o.__assign({},e,((r={})[n]=i,r))}),{})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(3),o=function(e,t,r){return t[e]=r,t},u=function(e){return function(t){var r,i=t[e];return n.isPresent(i)?i:t[(r=e,r.replace(/(^[A-Z])/g,(function(e,t){return t.toLowerCase()})))]}},s=u("Member"),a=u("AggregateMethodName"),c=u("Value"),l=function(e){return function(t){return Object.keys(t).reduce(e.bind(null,t),{})}},f=l((function(e,t,r){return o(r.toLowerCase(),t,e[r])})),g=l((function(e,t,r){return o(r,t,f(e[r]))})),p=function(e,t){return n.isPresent(e)?e:t},d=i.compose((function(e){var t=e.field,r=e.hasSubgroups,n=e.value,i=e.aggregates,o=e.items;return{aggregates:g(i),field:t,items:r?o.map(d):o,value:n}}),(function(e){return{aggregates:e.Aggregates||e.aggregates,field:e.Member||e.member||e.field,hasSubgroups:e.HasSubgroups||e.hasSubgroups||!1,items:e.Items||e.items,value:p(e.Key,p(e.key,e.value))}}));t.translateDataSourceResultGroups=function(e){return e.map(d)},t.translateAggregateResults=function(e){return(e||[]).reduce((function(e,t){return o(s(t),e,o(a(t).toLowerCase(),e[s(t)]||{},c(t)))}),{})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(10),o=r(6),u=r(5),s=r(8),a=r(7),c=r(2),l=r(3),f=r(19);t.orderBy=function(e,t){if(t.some((function(e){return n.isPresent(e.dir)}))){e=e.slice(0);var r=i.composeSortDescriptors(t);f.sort(e,0,e.length,r)}return e};var g=function(e,t){return e===t};t.distinct=function(e,t){return void 0===t&&(t=g),function(e,t){return e.filter((function(e,r,n){return n.findIndex(t.bind(null,e))===r}))}(e,function(e){if(n.isString(e)){var t=c.getter(e);e=function(e,r){return t(e)===t(r)}}return e}(t))},t.count=function(e,t){for(var r=0,n=0,i=e.length;n<i;n++)t(e[n])&&r++;return r},t.limit=function(e,t){return t?e.filter(t):e},t.process=function(e,r){var i=r.skip,c=r.take,f=r.filter,g=r.sort,p=r.group,d=o.normalizeGroups(p||[]).concat(g||[]);d.length&&(e=t.orderBy(e,d));var v,m=n.isPresent(f)&&a.filter.length,y=n.isPresent(p)&&p.length;if(!m&&!y)return{data:c?e.slice(i,i+c):e,total:e.length};var _,h=[];if(m?(_=s.compileFilter(u.normalizeFilters(f)),v=t.count(e,_),h.push(a.filter(_))):v=e.length,n.isPresent(i)&&n.isPresent(c)&&(h.push(a.skip(i)),h.push(a.take(c))),h.length){var b=l.compose.apply(void 0,h);return{data:y?o.groupBy(e,p,b,t.limit(e,_)):a.exec(b(a.concat),[],e),total:v}}return{data:y?o.groupBy(e,p):e,total:v}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=r(2),o=r(0),u={or:{concat:function(e,t){return function(r){return e(r)||t(r)}},identity:function(){return!1}},and:{concat:function(e,t){return function(r){return e(r)&&t(r)}},identity:function(){return!0}}},s={contains:function(e,t){return(e||"").indexOf(t)>=0},doesnotcontain:function(e,t){return-1===(e||"").indexOf(t)},doesnotendwith:function(e,t){return(e||"").indexOf(t,(e||"").length-(t||"").length)<0},doesnotstartwith:function(e,t){return-1===(e||"").lastIndexOf(t,0)},endswith:function(e,t){return(e||"").indexOf(t,(e||"").length-(t||"").length)>=0},eq:function(e,t){return e===t},gt:function(e,t){return e>t},gte:function(e,t){return e>=t},isempty:function(e){return""===e},isnotempty:function(e){return""!==e},isnotnull:function(e){return o.isPresent(e)},isnull:function(e){return o.isBlank(e)},lt:function(e,t){return e<t},lte:function(e,t){return e<=t},neq:function(e,t){return e!=t},startswith:function(e,t){return 0===(e||"").lastIndexOf(t,0)}},a=/^\/Date\((.*?)\)\/$/,c=function(e){var t=e.field,r=e.ignoreCase,n=e.value,u=e.operator;t=o.isPresent(t)?t:function(e){return e},r=!o.isPresent(r)||r;var c=function(e,t,r){if(!o.isPresent(t))return e;var n=e;if(o.isString(t)){var i=a.exec(t);i?t=new Date(+i[1]):n=function(t){var n=e(t);return"string"==typeof n&&r?n.toLowerCase():o.isNumeric(n)?n+"":n}}return o.isDate(t)?function(e){var t=n(e);return o.isDate(t)?t.getTime():t}:n}(o.isFunction(t)?t:i.getter(t,!0),n,r);n=function(e,t){if(null!=e&&o.isString(e)){var r=a.exec(e);if(r)return new Date(+r[1]).getTime();if(t)return e.toLowerCase()}else if(null!=e&&o.isDate(e))return e.getTime();return e}(n,r);var l=o.isFunction(u)?u:s[u];return function(e){return l(c(e),n,r)}};t.transformCompositeFilter=function(e){var r=u[e.logic];return e.filters.filter(o.isPresent).map((function(e){return n.isCompositeFilterDescriptor(e)?t.transformCompositeFilter(e):c(e)})).reduce(r.concat,r.identity)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sort=function(e,r,n,i){if(!(n-r<2)){var o=r+n>>>1;t.sort(e,r,o,i),t.sort(e,o,n,i),function(e,t,r,n,i){for(var o=r-t,u=n-r,s=[],a=0;a<o;a++)s.push(e[t+a]);var c=0,l=r,f=t;do{i(e[l],s[c])<0?(e[f++]=e[l++],u--):(e[f++]=s[c++],o--)}while(u>0&&o>0);for(;o;)e[f++]=s[c++],o--;for(;u;)e[f++]=e[l++],u--}(e,r,o,n,i)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Contains="contains",e.DoesNotContain="doesnotcontain",e.DoesNotEndWith="doesnotendwith",e.DoesNotStartWith="doesnotstartwith",e.EndsWith="endswith",e.EqualTo="eq",e.GreaterThan="gt",e.GreaterThanOrEqual="gte",e.IsEmpty="isempty",e.IsNotEmpty="isnotempty",e.IsNotNull="isnotnull",e.IsNull="isnull",e.LessThan="lt",e.LessThanOrEqual="lte",e.NotEqualTo="neq",e.StartsWith="startswith"}(t.FilterOperator||(t.FilterOperator={}))}])}));