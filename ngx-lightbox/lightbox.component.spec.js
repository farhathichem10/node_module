"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var lightbox_event_service_1 = require("./lightbox-event.service");
var lightbox_component_1 = require("./lightbox.component");
describe('[ Unit - LightboxComponent ]', function () {
    var fixture;
    var lightboxEvent;
    var mockData;
    beforeEach(function () {
        mockData = {
            options: {
                fadeDuration: 1,
                resizeDuration: 0.5,
                fitImageInViewPort: true,
                positionFromTop: 20,
                showImageNumberLabel: false,
                alwaysShowNavOnTouchDevices: false,
                wrapAround: false,
                disableKeyboardNav: false
            },
            currentIndex: 1,
            album: [{
                    src: 'src/img/next.png',
                    thumb: 'thumb1',
                    caption: 'caption1'
                }, {
                    src: 'src/img/prev.png',
                    thumb: 'thumb2',
                    caption: 'caption2'
                }]
        };
    });
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [lightbox_component_1.LightboxComponent],
            providers: [lightbox_event_service_1.LightboxEvent, lightbox_event_service_1.LightboxWindowRef]
        });
        createComponent();
    });
    beforeEach(testing_1.inject([lightbox_event_service_1.LightboxEvent], function (lEvent) {
        lightboxEvent = lEvent;
    }));
    it('should initialize component with correct styling and default value', function () {
        expect(fixture.componentInstance.ui).toEqual({
            showReloader: true,
            showLeftArrow: false,
            showRightArrow: false,
            showArrowNav: false,
            showPageNumber: false,
            showCaption: false,
            showZoomButton: false,
            showRotateButton: false,
            classList: 'lightbox animation fadeIn'
        });
        expect(fixture.componentInstance.content).toEqual({ pageNumber: '' });
        expect(fixture.componentInstance.album).toEqual(mockData.album);
        expect(fixture.componentInstance.options).toEqual(mockData.options);
        expect(fixture.componentInstance.currentImageIndex).toEqual(mockData.currentIndex);
    });
    describe('{ method: ngOnDestroy }', function () {
        beforeEach(function () {
            fixture.componentInstance['_event'].keyup = jasmine.createSpy('keyup');
            fixture.componentInstance['_event'].load = jasmine.createSpy('load');
            spyOn(fixture.componentInstance['_event'].subscription, 'unsubscribe');
        });
        it('should call correct method if enable keyboard event', function () {
            fixture.componentInstance.options.disableKeyboardNav = false;
            fixture.componentInstance.ngOnDestroy();
            expect(fixture.componentInstance['_event'].keyup).toHaveBeenCalledTimes(1);
            expect(fixture.componentInstance['_event'].subscription.unsubscribe).toHaveBeenCalledTimes(1);
        });
        it('should not call if keyboard event is disabled', function () {
            fixture.componentInstance.options.disableKeyboardNav = true;
            fixture.componentInstance.ngOnDestroy();
            expect(fixture.componentInstance['_event'].keyup).not.toHaveBeenCalled();
        });
    });
    describe('{ method: close }', function () {
        it('should call `broadcastLightboxEvent` if classlist does contains expected class value', function () {
            var eventMock = {
                stopPropagation: jasmine.createSpy('spy'),
                target: { classList: { contains: jasmine.createSpy('contains').and.callFake(function () { return true; }) } }
            };
            spyOn(lightboxEvent, 'broadcastLightboxEvent');
            fixture.componentInstance.close(eventMock);
            expect(eventMock.stopPropagation).toHaveBeenCalledTimes(1);
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledTimes(1);
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledWith({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE, data: null });
        });
    });
    describe('{ method: nextImage }', function () {
        it('should change to correct state', function () {
            mockData.currentIndex = 0;
            createComponent();
            fixture.componentInstance['_event'].load = jasmine.createSpy('load');
            spyOn(lightboxEvent, 'broadcastLightboxEvent');
            fixture.componentInstance.nextImage();
            expect(fixture.componentInstance.ui).toEqual({
                showReloader: true,
                showLeftArrow: false,
                showRightArrow: false,
                showArrowNav: false,
                showPageNumber: false,
                showZoomButton: false,
                showRotateButton: false,
                showCaption: false,
                classList: 'lightbox animation fadeIn'
            });
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledTimes(1);
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledWith({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CHANGE_PAGE, data: 1 });
        });
        it('should change to correct state when index is the last image', function () {
            fixture.componentInstance['_event'].load = jasmine.createSpy('load');
            spyOn(lightboxEvent, 'broadcastLightboxEvent');
            fixture.componentInstance.nextImage();
            expect(fixture.componentInstance.ui).toEqual({
                showReloader: true,
                showLeftArrow: false,
                showZoomButton: false,
                showRotateButton: false,
                showRightArrow: false,
                showArrowNav: false,
                showPageNumber: false,
                showCaption: false,
                classList: 'lightbox animation fadeIn'
            });
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledTimes(1);
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledWith({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CHANGE_PAGE, data: 0 });
        });
    });
    describe('{ method: prevImage }', function () {
        it('should change to correct state', function () {
            fixture.componentInstance['_event'].load = jasmine.createSpy('load');
            spyOn(lightboxEvent, 'broadcastLightboxEvent');
            fixture.componentInstance.prevImage();
            expect(fixture.componentInstance.ui).toEqual({
                showReloader: true,
                showLeftArrow: false,
                showRightArrow: false,
                showArrowNav: false,
                showZoomButton: false,
                showRotateButton: false,
                showPageNumber: false,
                showCaption: false,
                classList: 'lightbox animation fadeIn'
            });
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledTimes(1);
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledWith({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CHANGE_PAGE, data: 0 });
        });
        it('should change to correct state when index is the first image', function () {
            mockData.currentIndex = 0;
            createComponent();
            fixture.componentInstance['_event'].load = jasmine.createSpy('load');
            spyOn(lightboxEvent, 'broadcastLightboxEvent');
            fixture.componentInstance.nextImage();
            expect(fixture.componentInstance.ui).toEqual({
                showReloader: true,
                showLeftArrow: false,
                showRightArrow: false,
                showZoomButton: false,
                showRotateButton: false,
                showArrowNav: false,
                showPageNumber: false,
                showCaption: false,
                classList: 'lightbox animation fadeIn'
            });
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledTimes(1);
            expect(lightboxEvent.broadcastLightboxEvent).toHaveBeenCalledWith({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CHANGE_PAGE, data: 1 });
        });
    });
    function createComponent() {
        fixture = testing_1.TestBed.createComponent(lightbox_component_1.LightboxComponent);
        // mock options and ref
        fixture.componentInstance.options = mockData.options;
        fixture.componentInstance.album = mockData.album;
        fixture.componentInstance.currentImageIndex = mockData.currentIndex;
        fixture.componentInstance.cmpRef = { destroy: jasmine.createSpy('spy') };
        fixture.detectChanges();
    }
});
//# sourceMappingURL=lightbox.component.spec.js.map