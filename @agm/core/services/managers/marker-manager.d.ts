import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmMarker } from './../../directives/marker';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { Marker } from './../google-maps-types';
import * as ɵngcc0 from '@angular/core';
export declare class MarkerManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    protected _zone: NgZone;
    protected _markers: Map<AgmMarker, Promise<Marker>>;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    convertAnimation(uiAnim: 'BOUNCE' | 'DROP' | null): Promise<any>;
    deleteMarker(marker: AgmMarker): Promise<void>;
    updateMarkerPosition(marker: AgmMarker): Promise<void>;
    updateTitle(marker: AgmMarker): Promise<void>;
    updateLabel(marker: AgmMarker): Promise<void>;
    updateDraggable(marker: AgmMarker): Promise<void>;
    updateIcon(marker: AgmMarker): Promise<void>;
    updateOpacity(marker: AgmMarker): Promise<void>;
    updateVisible(marker: AgmMarker): Promise<void>;
    updateZIndex(marker: AgmMarker): Promise<void>;
    updateClickable(marker: AgmMarker): Promise<void>;
    updateAnimation(marker: AgmMarker): Promise<void>;
    addMarker(marker: AgmMarker): void;
    getNativeMarker(marker: AgmMarker): Promise<Marker>;
    createEventObservable<T>(eventName: string, marker: AgmMarker): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MarkerManager, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<MarkerManager>;
}

//# sourceMappingURL=marker-manager.d.ts.map