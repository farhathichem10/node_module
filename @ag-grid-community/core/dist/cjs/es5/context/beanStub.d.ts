// Type definitions for @ag-grid-community/core v28.2.1
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IEventEmitter } from "../interfaces/iEventEmitter";
import { EventService } from "../eventService";
import { GridOptionsWrapper } from "../gridOptionsWrapper";
import { AgEvent } from "../events";
import { Context } from "./context";
import { IFrameworkOverrides } from "../interfaces/iFrameworkOverrides";
import { Component } from "../widgets/component";
export declare class BeanStub implements IEventEmitter {
    static EVENT_DESTROYED: string;
    protected localEventService: EventService;
    private destroyFunctions;
    private destroyed;
    __v_skip: boolean;
    private readonly frameworkOverrides;
    protected readonly context: Context;
    protected readonly eventService: EventService;
    protected readonly gridOptionsWrapper: GridOptionsWrapper;
    protected getFrameworkOverrides(): IFrameworkOverrides;
    getContext(): Context;
    protected destroy(): void;
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    dispatchEventAsync(event: AgEvent): void;
    dispatchEvent<T extends AgEvent>(event: T): void;
    addManagedListener(object: Window | HTMLElement | GridOptionsWrapper | IEventEmitter, event: string, listener: (event?: any) => void): (() => null) | undefined;
    isAlive: () => boolean;
    addDestroyFunc(func: () => void): void;
    createManagedBean<T>(bean: T, context?: Context): T;
    protected createBean<T>(bean: T, context?: Context | null, afterPreCreateCallback?: (comp: Component) => void): T;
    protected destroyBean<T>(bean: T, context?: Context): T | undefined;
    protected destroyBeans<T>(beans: T[], context?: Context): T[];
}
