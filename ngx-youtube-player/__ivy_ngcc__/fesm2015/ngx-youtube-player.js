import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, NgZone, Injectable, EventEmitter, Input, Output, Component, ChangeDetectionStrategy, ElementRef, Renderer2, NgModule } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
function win() {
    return window;
}
function YouTubeRef() {
    return win()['YT'];
}
function YouTubePlayerRef() {
    return YouTubeRef().Player;
}
const defaultSizes = {
    height: 270,
    width: 367
};
let YoutubePlayerService = class YoutubePlayerService {
    constructor(zone) {
        this.zone = zone;
        this.ytApiLoaded = false;
        this.api = new ReplaySubject(1);
        this.createApi();
    }
    loadPlayerApi(options) {
        const doc = win().document;
        if (!this.ytApiLoaded) {
            this.ytApiLoaded = true;
            const playerApiScript = doc.createElement('script');
            playerApiScript.type = 'text/javascript';
            playerApiScript.src = `${options.protocol}://www.youtube.com/iframe_api`;
            doc.body.appendChild(playerApiScript);
        }
    }
    setupPlayer(elementId, outputs, sizes, videoId = '', playerVars) {
        const createPlayer = () => {
            if (YouTubePlayerRef) {
                this.createPlayer(elementId, outputs, sizes, videoId, playerVars);
            }
        };
        this.api.subscribe(createPlayer);
    }
    play(player) {
        player.playVideo();
    }
    pause(player) {
        player.pauseVideo();
    }
    playVideo(media, player) {
        const id = media.id.videoId ? media.id.videoId : media.id;
        player.loadVideoById(id);
        this.play(player);
    }
    isPlaying(player) {
        // because YT is not loaded yet 1 is used - YT.PlayerState.PLAYING
        const isPlayerReady = player && player.getPlayerState;
        const playerState = isPlayerReady ? player.getPlayerState() : {};
        const isPlayerPlaying = isPlayerReady
            ? playerState !== YouTubeRef().PlayerState.ENDED &&
                playerState !== YouTubeRef().PlayerState.PAUSED
            : false;
        return isPlayerPlaying;
    }
    createPlayer(elementId, outputs, sizes, videoId = '', playerVars = {}) {
        const playerSize = {
            height: sizes.height || defaultSizes.height,
            width: sizes.width || defaultSizes.width
        };
        const ytPlayer = YouTubePlayerRef();
        return new ytPlayer(elementId, Object.assign(Object.assign({}, playerSize), { events: {
                onReady: (ev) => {
                    this.zone.run(() => outputs.ready && outputs.ready.next(ev.target));
                },
                onStateChange: (ev) => {
                    this.zone.run(() => outputs.change && outputs.change.next(ev));
                }
            }, playerVars,
            videoId }));
    }
    toggleFullScreen(player, isFullScreen) {
        let { height, width } = defaultSizes;
        if (!isFullScreen) {
            height = window.innerHeight;
            width = window.innerWidth;
        }
        player.setSize(width, height);
    }
    // adpoted from uid
    generateUniqueId() {
        const len = 7;
        return Math.random()
            .toString(35)
            .substr(2, len);
    }
    createApi() {
        const onYouTubeIframeAPIReady = () => {
            if (win()) {
                this.api.next(YouTubeRef());
            }
        };
        win()['onYouTubeIframeAPIReady'] = onYouTubeIframeAPIReady;
    }
};
YoutubePlayerService.ɵfac = function YoutubePlayerService_Factory(t) { return new (t || YoutubePlayerService)(ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
YoutubePlayerService.ɵprov = ɵɵdefineInjectable({ factory: function YoutubePlayerService_Factory() { return new YoutubePlayerService(ɵɵinject(NgZone)); }, token: YoutubePlayerService, providedIn: "root" });
YoutubePlayerService = __decorate([ __metadata("design:paramtypes", [NgZone])
], YoutubePlayerService);

let YoutubePlayerComponent = class YoutubePlayerComponent {
    constructor(playerService, elementRef, renderer) {
        this.playerService = playerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.videoId = '';
        this.height = defaultSizes.height;
        this.width = defaultSizes.width;
        /**
         * @description sets the protocol by the navigator object
         * if there is no window, it sets a default http protocol
         * unless the protocol is set from outside
         */
        this.protocol = this.getProtocol();
        this.playerVars = {};
        // player created and initialized - sends instance of the player
        this.ready = new EventEmitter();
        // state change: send the YT event with its state
        this.change = new EventEmitter();
    }
    ngAfterContentInit() {
        const htmlId = this.playerService.generateUniqueId();
        const playerSize = { height: this.height, width: this.width };
        const container = this.renderer.selectRootElement('#yt-player-ngx-component');
        this.renderer.setAttribute(container, 'id', htmlId);
        this.playerService.loadPlayerApi({
            protocol: this.protocol
        });
        this.playerService.setupPlayer(htmlId, {
            change: this.change,
            ready: this.ready
        }, playerSize, this.videoId, this.playerVars);
    }
    getProtocol() {
        const hasWindow = window && window.location;
        const protocol = hasWindow
            ? window.location.protocol.replace(':', '')
            : 'http';
        return protocol;
    }
};
YoutubePlayerComponent.ɵfac = function YoutubePlayerComponent_Factory(t) { return new (t || YoutubePlayerComponent)(ɵngcc0.ɵɵdirectiveInject(YoutubePlayerService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
YoutubePlayerComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: YoutubePlayerComponent, selectors: [["youtube-player"]], inputs: { videoId: "videoId", height: "height", width: "width", protocol: "protocol", playerVars: "playerVars" }, outputs: { ready: "ready", change: "change" }, decls: 1, vars: 0, consts: [["id", "yt-player-ngx-component"]], template: function YoutubePlayerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    Input(),
    __metadata("design:type", Object)
], YoutubePlayerComponent.prototype, "videoId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YoutubePlayerComponent.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YoutubePlayerComponent.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YoutubePlayerComponent.prototype, "protocol", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YoutubePlayerComponent.prototype, "playerVars", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], YoutubePlayerComponent.prototype, "ready", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], YoutubePlayerComponent.prototype, "change", void 0);
YoutubePlayerComponent = __decorate([ __metadata("design:paramtypes", [YoutubePlayerService,
        ElementRef,
        Renderer2])
], YoutubePlayerComponent);

var NgxYoutubePlayerModule_1;
let NgxYoutubePlayerModule = NgxYoutubePlayerModule_1 = class NgxYoutubePlayerModule {
    static forRoot() {
        return {
            ngModule: NgxYoutubePlayerModule_1,
            providers: [YoutubePlayerService]
        };
    }
};
NgxYoutubePlayerModule.ɵfac = function NgxYoutubePlayerModule_Factory(t) { return new (t || NgxYoutubePlayerModule)(); };
NgxYoutubePlayerModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxYoutubePlayerModule });
NgxYoutubePlayerModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [YoutubePlayerService], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(YoutubePlayerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(YoutubePlayerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'youtube-player',
                template: `
    <div id="yt-player-ngx-component"></div>
  `
            }]
    }], function () { return [{ type: YoutubePlayerService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { videoId: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], protocol: [{
            type: Input
        }], playerVars: [{
            type: Input
        }], ready: [{
            type: Output
        }], change: [{
            type: Output
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxYoutubePlayerModule, [{
        type: NgModule,
        args: [{
                declarations: [YoutubePlayerComponent],
                imports: [],
                providers: [YoutubePlayerService],
                exports: [YoutubePlayerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxYoutubePlayerModule, { declarations: [YoutubePlayerComponent], exports: [YoutubePlayerComponent] }); })();

/*
 * Public API Surface of ngx-youtube-player
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxYoutubePlayerModule, YouTubePlayerRef, YouTubeRef, YoutubePlayerComponent, YoutubePlayerService, defaultSizes, win };

//# sourceMappingURL=ngx-youtube-player.js.map