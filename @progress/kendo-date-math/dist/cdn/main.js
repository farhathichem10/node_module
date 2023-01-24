!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("tslib")):"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.KendoDateMath=t(require("tslib")):e.KendoDateMath=t(e.self)}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=25)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cloneDate=function(e){return e?new Date(e.getTime()):null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.createDate=function(e,t,r,o,u,i,a){void 0===o&&(o=0),void 0===u&&(u=0),void 0===i&&(i=0),void 0===a&&(a=0);var s=new Date(e,t,r,o,u,i,a);return e>-1&&e<100&&s.setFullYear(s.getFullYear()-1900),n.adjustDST(s,o)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.timezones={rules:{},titles:{},zones:{}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.adjustDST=function(e,t){var r=n.cloneDate(e);return 0===t&&23===r.getHours()&&r.setHours(r.getHours()+2),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),o=r(1);t.lastDayOfMonth=function(e){var t=o.createDate(e.getFullYear(),e.getMonth()+1,1,e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds());return n.addDays(t,-1)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(0);t.addDays=function(e,t){var r=o.cloneDate(e);return r.setDate(r.getDate()+t),n.adjustDST(r,e.getHours())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(t.Direction||(t.Direction={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(15);t.normalizeYear=function(e,t){return n.setYear(e,t(e.getFullYear()))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(15);t.addYears=function(e,t){return n.adjustDST(o.setYear(e,e.getFullYear()+t),e.getHours())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(0),u=r(4);t.addMonths=function(e,r){var i=o.cloneDate(e),a=(12+(i.getMonth()+r)%12)%12;return i.setMonth(i.getMonth()+r),function(e,r){return e.getMonth()!==r?u.lastDayOfMonth(t.addMonths(e,-1)):e}(n.adjustDST(i,e.getHours()),a)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MS_PER_MINUTE=6e4,t.MS_PER_HOUR=36e5,t.MS_PER_DAY=864e5},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),o=r(3),u=r(0);t.dayOfWeek=function(e,t,r){void 0===r&&(r=n.Direction.Forward);var i=u.cloneDate(e),a=(t-i.getDay()+7*r)%7;return i.setDate(i.getDate()+a),o.adjustDST(i,e.getHours())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(t.Day||(t.Day={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.getDate=function(e){return n.createDate(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NO_TZ_INFO="The required {0} timezone information is not provided!",t.INVALID_TZ_STRUCTURE="The provided timezone information has invalid stucture!";var n=/\{(\d+)}?\}/g,o=function(e){return e.reduce((function(e,t){return e.concat(t)}),[])};t.formatMessage=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var u=o(t);return e.replace(n,(function(e,t){return u[parseInt(t,10)]}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),o=r(1),u=r(4);t.setYear=function(e,t){var r=e.getMonth(),i=o.createDate(t,r,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds());return i.getMonth()===r?i:u.lastDayOfMonth(n.addMonths(i,-1))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7);t.firstDecadeOfCentury=function(e){return n.normalizeYear(e,(function(e){return e-e%100}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7);t.firstYearOfDecade=function(e){return n.normalizeYear(e,(function(e){return e-e%10}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),o=r(1),u=r(4);t.setMonth=function(e,t){var r=e.getDate(),i=o.createDate(e.getFullYear(),t,r,e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds());return i.getDate()===r?i:u.lastDayOfMonth(n.addMonths(i,-1))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEqual=function(e,t){return!e&&!t||e&&t&&e.getTime()===t.getTime()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),o=r(11);t.prevDayOfWeek=function(e,t){return o.dayOfWeek(e,t,n.Direction.Backward)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(22);t.abbrTimezone=function(e,t){if(void 0===t&&(t=new Date),"Etc/UTC"===e)return"UTC";if("Etc/GMT"===e)return"GMT";if(""===e)return"";var r=n.zoneAndRule(e,t),o=r.zone,u=r.rule,i=o[2];return i.indexOf("/")>=0?i.split("/")[u&&+u[6]?1:0]:i.indexOf("%s")>=0?i.replace("%s",u&&"-"!==u[7]?u[7]:""):i}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(42),o=r(44);t.zoneAndRule=function(e,t){var r=t.getTime(),u=o.findZone(e,r);return{rule:n.findRule(u[1],r,u[0]),zone:u}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(22);t.offset=function(e,t){if(void 0===t&&(t=new Date),"Etc/UTC"===e||"Etc/GMT"===e)return 0;if(""===e)return t.getTimezoneOffset();var r=n.zoneAndRule(e,t),o=r.rule,u=r.zone;return parseFloat(o?u[0]-o[6]:u[0])}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toLocalDate=function(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(26);n.__exportStar(r(27),t),n.__exportStar(r(5),t),n.__exportStar(r(28),t),n.__exportStar(r(9),t),n.__exportStar(r(29),t),n.__exportStar(r(8),t),n.__exportStar(r(3),t),n.__exportStar(r(0),t),n.__exportStar(r(10),t),n.__exportStar(r(1),t),n.__exportStar(r(11),t),n.__exportStar(r(12),t),n.__exportStar(r(6),t),n.__exportStar(r(30),t),n.__exportStar(r(31),t),n.__exportStar(r(32),t),n.__exportStar(r(33),t),n.__exportStar(r(34),t),n.__exportStar(r(35),t),n.__exportStar(r(16),t),n.__exportStar(r(36),t),n.__exportStar(r(17),t),n.__exportStar(r(13),t),n.__exportStar(r(19),t),n.__exportStar(r(37),t),n.__exportStar(r(4),t),n.__exportStar(r(38),t),n.__exportStar(r(39),t),n.__exportStar(r(40),t),n.__exportStar(r(41),t),n.__exportStar(r(20),t),n.__exportStar(r(21),t),n.__exportStar(r(46),t),n.__exportStar(r(23),t),n.__exportStar(r(47),t),n.__exportStar(r(48),t),n.__exportStar(r(49),t),n.__exportStar(r(24),t),n.__exportStar(r(50),t),n.__exportStar(r(51),t),n.__exportStar(r(52),t)},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8);t.addCenturies=function(e,t){return n.addYears(e,100*t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8);t.addDecades=function(e,t){return n.addYears(e,10*t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5);t.addWeeks=function(e,t){return n.addDays(e,7*t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(16);t.durationInCenturies=function(e,t){return(n.firstDecadeOfCentury(t).getFullYear()-n.firstDecadeOfCentury(e).getFullYear())/100}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(17);t.durationInDecades=function(e,t){return(n.firstYearOfDecade(t).getFullYear()-n.firstYearOfDecade(e).getFullYear())/10}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.durationInMonths=function(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.durationInYears=function(e,t){return t.getFullYear()-e.getFullYear()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(12);t.firstDayInWeek=function(e,t){void 0===t&&(t=o.Day.Sunday);for(var r=n.cloneDate(e);r.getDay()!==t;)r.setDate(r.getDate()-1);return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.firstDayOfMonth=function(e){return n.createDate(e.getFullYear(),e.getMonth(),1,e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(18);t.firstMonthOfYear=function(e){return n.setMonth(e,0)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(13),o=r(19);t.isEqualDate=function(e,t){return!e&&!t||e&&t&&o.isEqual(n.getDate(e),n.getDate(t))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7);t.lastDecadeOfCentury=function(e){return n.normalizeYear(e,(function(e){return e-e%100+90}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(18);t.lastMonthOfYear=function(e){return n.setMonth(e,11)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7);t.lastYearOfDecade=function(e){return n.normalizeYear(e,(function(e){return e-e%10+9}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),o=r(11);t.nextDayOfWeek=function(e,t){return o.dayOfWeek(e,t,n.Direction.Forward)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(43),u=(new Date).getTime();t.findRule=function(e,t,r){void 0===t&&(t=u),void 0===r&&(r=0);var i=n.timezones.rules[e];if(!i){var a=e.split(":"),s=0;return a.length>1&&(s=60*a[0]+Number(a[1])),[-1e6,"max","-","Jan",1,[0,0,0],s,"-"]}var c=new Date(t).getUTCFullYear();(i=i.filter((function(e){var t=e[0],r=e[1];return t<=c&&(r>=c||t===c&&"only"===r||"max"===r)}))).push(t),i.sort((function(e,t){return"number"!=typeof e&&(e=Number(o.ruleToDate(c,e,r))),"number"!=typeof t&&(t=Number(o.ruleToDate(c,t,r))),e-t}));var f=i[i.indexOf(t)-1]||i[i.length-1];return isNaN(f)?f:null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},o={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};t.ruleToDate=function(e,t,r){var u,i=t[3],a=t[4],s=t[5],c="u"===s[3]?6e4*-r:0;if(isNaN(a)){if(0===a.indexOf("last")){u=new Date(Date.UTC(e,n[i]+1,1,s[0]-24,s[1],s[2])+c);var f=o[a.substr(4,3)],l=u.getUTCDay();u.setUTCDate(u.getUTCDate()+f-l-(f>l?7:0))}else if(a.indexOf(">=")>=0){u=new Date(Date.UTC(e,n[i],a.substr(5),s[0],s[1],s[2],0)+c);f=o[a.substr(0,3)],l=u.getUTCDay();u.setUTCDate(u.getUTCDate()+f-l+(f<l?7:0))}}else u=new Date(Date.UTC(e,n[i],a,s[0],s[1],s[2])+c);return u}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),o=r(14);t.findZone=function(e,t){if(void 0===t&&(t=(new Date).getTime()),"Etc/UTC"===e||"Etc/GMT"===e)return[0,"-","UTC",null];for(var r=n.getZoneRules(e),u=r.length-1;u>=0;u--){var i=r[u][3];if(i&&t>i)break}var a=r[u+1];if(!a)throw new Error(o.formatMessage(o.NO_TZ_INFO,e));return a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(14);t.getZoneRules=function(e){var t=n.timezones.zones;if(!t)throw new Error(o.formatMessage(o.NO_TZ_INFO,e));var r=t[e],u="string"==typeof r?t[r]:r;if(!u)throw new Error(o.formatMessage(o.NO_TZ_INFO,e));return u}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(14);t.loadTimezone=function(e){if(!e)throw new Error(o.formatMessage(o.NO_TZ_INFO,""));var t=e.rules,r=e.titles,u=e.zones;if(void 0===t||void 0===u)throw new Error(o.INVALID_TZ_STRUCTURE);Object.assign(n.timezones.rules,t),Object.assign(n.timezones.titles,r||{}),Object.assign(n.timezones.zones,u)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.timezoneGroupNames=function(){var e=Object.keys(n.timezones.titles).reduce((function(e,t){var r=n.timezones.titles[t].group;return e[r]=r,e}),{});return Object.keys(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.timezoneNames=function(){return Object.keys(n.timezones.zones)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.timezoneTitle=function(e){return(n.timezones.titles[e]||{}).long||e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10),o=r(0),u=r(21),i=r(23),a=r(24),s=function(e,t){return new Date(e.getTime()+t*n.MS_PER_MINUTE)},c=function(e,t){return new Date(e.getTime()+t*n.MS_PER_HOUR)},f=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dev"],d=function(e,t){return void 0===t&&(t=2),(e<0?"-":"")+new Array(t).concat([Math.abs(e)]).join("0").slice(-t)};function p(e,t){var r=i.offset(t,e),n=c(e,-1);return r<i.offset(t,n)}function _(e,t){var r=p(e,t)?1:0;return c(e,r)}function y(e,t,r){if(t===r)return e;var n=i.offset(t,e),o=i.offset(r,e),u=n-o,a=s(e,u),c=i.offset(r,a);return s(e,u+(o-c))}var D=function(){function e(e,t){this._utcDate=o.cloneDate(e),this.timezone=t;var r=i.offset(t,e);this.timezoneOffset=r;var n=_(e,t);this._localDate=y(n,t,"Etc/UTC")}return Object.defineProperty(e.prototype,"cachedLocalDate",{get:function(){return this._localDate},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cachedUTCDate",{get:function(){return this._utcDate},enumerable:!0,configurable:!0}),e.fromLocalDate=function(t,r){void 0===r&&(r="");var n=y(t,"Etc/UTC",r),o=p(n,r),u=i.offset(r,n),a=0;o&&(a=u>0?-1:1);var s=c(n,a);return e.fromUTCDate(s,r)},e.fromUTCDate=function(t,r){return void 0===r&&(r=""),new e(t,r)},e.prototype.toLocalDate=function(){return o.cloneDate(this._localDate)},e.prototype.toUTCDate=function(){return o.cloneDate(this._utcDate)},e.prototype.toTimezone=function(t){if(this.timezone===t)return this.clone();var r=i.offset(this.timezone,this._utcDate),n=s(this._utcDate,r);return e.fromLocalDate(n,t)},e.prototype.clone=function(){return e.fromUTCDate(this._utcDate,this.timezone)},e.prototype.addDays=function(t){var r=new Date(this._utcDate.getTime());return r.setUTCDate(r.getUTCDate()+t),e.fromUTCDate(r,this.timezone)},e.prototype.addTime=function(t){var r=_(new Date(this._utcDate.getTime()),this.timezone);r.setTime(r.getTime()+t);var n=_(r,this.timezone);return e.fromUTCDate(n,this.timezone)},e.prototype.stripTime=function(){var t=this._utcDate,r=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),0,0,0);return e.fromUTCDate(new Date(r),this.timezone)},e.prototype.getTime=function(){return this._localDate.getTime()},e.prototype.getTimezoneOffset=function(){return this.timezoneOffset},e.prototype.getFullYear=function(){return this._utcDate.getUTCFullYear()},e.prototype.getMonth=function(){return this._utcDate.getUTCMonth()},e.prototype.getDate=function(){return this._utcDate.getUTCDate()},e.prototype.getDay=function(){return this._utcDate.getUTCDay()},e.prototype.getHours=function(){return this._utcDate.getUTCHours()},e.prototype.getMinutes=function(){return this._utcDate.getUTCMinutes()},e.prototype.getSeconds=function(){return this._utcDate.getUTCSeconds()},e.prototype.getMilliseconds=function(){return this._utcDate.getUTCMilliseconds()},e.prototype.getUTCDate=function(){return this._localDate.getUTCDate()},e.prototype.getUTCDay=function(){return this._localDate.getUTCDay()},e.prototype.getUTCFullYear=function(){return this._localDate.getUTCFullYear()},e.prototype.getUTCHours=function(){return this._localDate.getUTCHours()},e.prototype.getUTCMilliseconds=function(){return this._localDate.getUTCMilliseconds()},e.prototype.getUTCMinutes=function(){return this._localDate.getUTCMinutes()},e.prototype.getUTCMonth=function(){return this._localDate.getUTCMonth()},e.prototype.getUTCSeconds=function(){return this._localDate.getUTCSeconds()},e.prototype.setTime=function(e){throw new Error("Method not implemented.")},e.prototype.setMilliseconds=function(e){throw new Error("Method not implemented.")},e.prototype.setUTCMilliseconds=function(e){throw new Error("Method not implemented.")},e.prototype.setSeconds=function(e,t){throw new Error("Method not implemented.")},e.prototype.setUTCSeconds=function(e,t){throw new Error("Method not implemented.")},e.prototype.setMinutes=function(e,t,r){throw new Error("Method not implemented.")},e.prototype.setUTCMinutes=function(e,t,r){throw new Error("Method not implemented.")},e.prototype.setHours=function(e,t,r,n){throw new Error("Method not implemented.")},e.prototype.setUTCHours=function(e,t,r,n){throw new Error("Method not implemented.")},e.prototype.setDate=function(e){throw new Error("Method not implemented.")},e.prototype.setUTCDate=function(e){throw new Error("Method not implemented.")},e.prototype.setMonth=function(e,t){throw new Error("Method not implemented.")},e.prototype.setUTCMonth=function(e,t){throw new Error("Method not implemented.")},e.prototype.setFullYear=function(e,t,r){throw new Error("Method not implemented.")},e.prototype.setUTCFullYear=function(e,t,r){throw new Error("Method not implemented.")},e.prototype.toISOString=function(){return this._localDate.toISOString()},e.prototype.toJSON=function(){return this._localDate.toJSON()},e.prototype.toString=function(){var e,t=(e=this._utcDate,f[e.getUTCDay()]+" "+l[e.getUTCMonth()]),r=this.toTimeString();return t+" "+this.getDate()+" "+this.getFullYear()+" "+r},e.prototype.toDateString=function(){return a.toLocalDate(this._utcDate).toDateString()},e.prototype.toTimeString=function(){var e=d(this.getHours())+":"+d(this.getMinutes())+":"+d(this.getSeconds()),t=function(e){var t=e<=0?"+":"-",r=Math.abs(e);return"GMT"+t+d(Math.floor(r/60))+d(r%60)}(this.timezoneOffset),r=u.abbrTimezone(this.timezone,this._utcDate);return r&&(r=" ("+r+")"),e+" "+t+r},e.prototype.toLocaleString=function(e,t){return this._localDate.toLocaleString(e,t)},e.prototype.toLocaleDateString=function(e,t){return this._localDate.toLocaleDateString(e,t)},e.prototype.toLocaleTimeString=function(e,t){return this._localDate.toLocaleTimeString(e,t)},e.prototype.toUTCString=function(){return this.toTimezone("Etc/UTC").toString()},e.prototype[Symbol.toPrimitive]=function(e){return"string"===e||"default"===e?this.toString():this._localDate.getTime()},e.prototype.valueOf=function(){return this.getTime()},e.prototype.getVarDate=function(){throw new Error("Not implemented.")},e.prototype.format=function(e){throw new Error("Not implemented.")},e.prototype.formatUTC=function(e){throw new Error("Not implemented.")},e}();t.ZonedDate=D},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.zonesPerGroup=function(e){var t=n.timezones.titles;return Object.keys(t).reduce((function(r,n){return(t[n]||{}).group===e?r.concat(n.split(" ")):r}),[])}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),o=r(5),u=r(1),i=r(20),a=r(10),s=r(13),c=function(e,t){var r=u.createDate(e.getFullYear(),0,1,-6),s=function(e,t){return t!==n.Day.Monday?o.addDays(i.prevDayOfWeek(e,t),4):o.addDays(e,4-(e.getDay()||7))}(e,t).getTime()-r.getTime(),c=Math.floor(s/a.MS_PER_DAY);return 1+Math.floor(c/7)};t.weekInYear=function(e,t){void 0===t&&(t=n.Day.Monday),e=s.getDate(e);var r=o.addDays(e,-7),u=o.addDays(e,7),i=c(e,t);return 0===i?c(r,t)+1:53===i&&c(u,t)>1?1:i}}])}));