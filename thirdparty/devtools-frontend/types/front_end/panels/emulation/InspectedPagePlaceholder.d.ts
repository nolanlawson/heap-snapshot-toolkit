import * as Common from '../../core/common/common.js';
import * as UI from '../../ui/legacy/legacy.js';
declare const InspectedPagePlaceholder_base: {
    new (...args: any[]): {
        "__#15@#events": Common.ObjectWrapper.ObjectWrapper<EventTypes>;
        addEventListener<T extends Events.UPDATE>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<EventTypes, T>;
        once<T_1 extends Events.UPDATE>(eventType: T_1): Promise<EventTypes[T_1]>;
        removeEventListener<T_2 extends Events.UPDATE>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: Events.UPDATE): boolean;
        dispatchEventToListeners<T_3 extends Events.UPDATE>(eventType: import("../../core/platform/TypescriptUtilities.js").NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<EventTypes, T_3>): void;
    };
} & typeof UI.Widget.Widget;
export declare class InspectedPagePlaceholder extends InspectedPagePlaceholder_base {
    private updateId?;
    constructor();
    static instance(opts?: {
        forceNew: null;
    }): InspectedPagePlaceholder;
    onResize(): void;
    restoreMinimumSize(): void;
    clearMinimumSize(): void;
    private dipPageRect;
    update(force?: boolean): void;
}
declare const enum Events {
    UPDATE = "Update"
}
interface Bounds {
    x: number;
    y: number;
    height: number;
    width: number;
}
interface EventTypes {
    [Events.UPDATE]: Bounds;
}
