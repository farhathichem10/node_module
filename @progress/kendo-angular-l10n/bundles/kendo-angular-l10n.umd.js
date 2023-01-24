/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("rxjs"),require("rxjs/operators")):"function"==typeof define&&define.amd?define("KendoAngularL10N",["exports","@angular/core","rxjs","rxjs/operators"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).KendoAngularL10N={},e.ng.core,e.rxjs,e.rxjs.operators)}(this,function(e,t,o,i){"use strict";function r(r){var n;return r&&r.__esModule?r:(n=Object.create(null),r&&Object.keys(r).forEach(function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n))}var n=r(t),s=(a.prototype.notify=function(e){this.changes.next({rtl:e})},a.prototype.get=function(e){},a);function a(){this.changes=new o.BehaviorSubject({rtl:void 0})}s.ɵfac=n.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"12.2.16",ngImport:n,type:s,deps:[],target:n.ɵɵFactoryTarget.Injectable}),s.ɵprov=n.ɵɵngDeclareInjectable({minVersion:"12.0.0",version:"12.2.16",ngImport:n,type:s}),n.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.16",ngImport:n,type:s,decorators:[{type:t.Injectable}],ctorParameters:function(){return[]}});Object.defineProperty(p.prototype,"override",{get:function(){return!1},enumerable:!1,configurable:!0}),p.prototype.ngOnChanges=function(t){this.register(t),Object.keys(t).some(function(e){return!t[e].isFirstChange()})&&this.service.notifyChanges()},p.prototype.ngOnInit=function(){var e=this;this.subscription=this.service.changes.pipe(i.skip(1)).subscribe(function(){return e.register(e)})},p.prototype.register=function(e){var t=this;Object.keys(e).forEach(function(e){return t.service.register(e,t[e],t.override)})},p.prototype.ngOnDestroy=function(){this.subscription&&this.subscription.unsubscribe()};var c=p;function p(){}c.ɵfac=n.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"12.2.16",ngImport:n,type:c,deps:[],target:n.ɵɵFactoryTarget.Directive}),c.ɵdir=n.ɵɵngDeclareDirective({minVersion:"12.0.0",version:"12.2.16",type:c,usesOnChanges:!0,ngImport:n}),n.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.16",ngImport:n,type:c,decorators:[{type:t.Directive,args:[{}]}]});var u=new t.InjectionToken("Kendo UI Right-to-Left token"),g=new t.InjectionToken("Localization key prefix"),f=(Object.defineProperty(y.prototype,"rtl",{get:function(){return this._rtl},enumerable:!1,configurable:!0}),y.prototype.ngOnDestroy=function(){this.subscription&&this.subscription.unsubscribe()},y.prototype.get=function(e){e=this.key(e);return this.dictionary[e]},y.prototype.register=function(e,t,r){void 0===r&&(r=!1);var e=this.key(e),n=t;if(!r){if(this.dictionary.hasOwnProperty(e))return;n=this.defaultValue(e,t)}this.dictionary[e]=n},y.prototype.notifyChanges=function(){this.changes.next({rtl:this.rtl})},y.prototype.key=function(e){return this.prefix+"."+e},y.prototype.defaultValue=function(e,t){return!this.messageService||void 0===(e=this.messageService.get(e))?t:e},y);function y(e,t,r){var n=this;this.prefix=e,this.messageService=t,this._rtl=r,this.changes=new o.BehaviorSubject({rtl:this._rtl}),this.dictionary={},t&&(this.subscription=t.changes.pipe(i.map(function(e){e=e.rtl;return void 0!==e?e:n._rtl}),i.tap(function(e){return n._rtl=e})).subscribe(function(e){n.dictionary={},n.changes.next({rtl:e})}))}f.ɵfac=n.ɵɵngDeclareFactory({minVersion:"12.0.0",version:"12.2.16",ngImport:n,type:f,deps:[{token:g},{token:s,optional:!0},{token:u,optional:!0}],target:n.ɵɵFactoryTarget.Injectable}),f.ɵprov=n.ɵɵngDeclareInjectable({minVersion:"12.0.0",version:"12.2.16",ngImport:n,type:f}),n.ɵɵngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.16",ngImport:n,type:f,decorators:[{type:t.Injectable}],ctorParameters:function(){return[{type:void 0,decorators:[{type:t.Inject,args:[g]}]},{type:s,decorators:[{type:t.Optional}]},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[u]}]}]}}),e.ComponentMessages=c,e.L10N_PREFIX=g,e.LocalizationService=f,e.MessageService=s,e.RTL=u,Object.defineProperty(e,"__esModule",{value:!0})});