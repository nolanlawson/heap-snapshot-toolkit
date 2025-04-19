import * as Common from '../../core/common/common.js';
import type * as Platform from '../../core/platform/platform.js';
import * as UI from '../../ui/legacy/legacy.js';
import * as LinearMemoryInspectorComponents from './components/components.js';
import { type LazyUint8Array } from './LinearMemoryInspectorController.js';
declare const LinearMemoryInspectorPane_base: {
    new (...args: any[]): {
        "__#15@#events": Common.ObjectWrapper.ObjectWrapper<EventTypes>;
        addEventListener<T extends Events.VIEW_CLOSED>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<EventTypes, T>;
        once<T_1 extends Events.VIEW_CLOSED>(eventType: T_1): Promise<EventTypes[T_1]>;
        removeEventListener<T_2 extends Events.VIEW_CLOSED>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: Events.VIEW_CLOSED): boolean;
        dispatchEventToListeners<T_3 extends Events.VIEW_CLOSED>(eventType: Platform.TypeScriptUtilities.NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<EventTypes, T_3>): void;
    };
} & typeof UI.Widget.VBox;
export declare class LinearMemoryInspectorPane extends LinearMemoryInspectorPane_base {
    #private;
    constructor();
    createPlaceholder(): HTMLElement;
    static instance(): LinearMemoryInspectorPane;
    create(tabId: string, title: string, arrayWrapper: LazyUint8Array, address?: number): void;
    close(tabId: string): void;
    reveal(tabId: string, address?: number): void;
    refreshView(tabId: string): void;
}
export declare const enum Events {
    VIEW_CLOSED = "ViewClosed"
}
export interface EventTypes {
    [Events.VIEW_CLOSED]: string;
}
export declare class LinearMemoryInspectorView extends UI.Widget.VBox {
    #private;
    firstTimeOpen: boolean;
    constructor(memoryWrapper: LazyUint8Array, address: number | undefined, tabId: string, hideValueInspector?: boolean);
    wasShown(): void;
    saveSettings(settings: LinearMemoryInspectorComponents.LinearMemoryInspector.Settings): void;
    updateAddress(address: number): void;
    refreshData(): void;
}
export {};
