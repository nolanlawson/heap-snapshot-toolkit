import '../../ui/legacy/legacy.js';
import * as Common from '../../core/common/common.js';
import * as UI from '../../ui/legacy/legacy.js';
declare const CSSOverviewSidebarPanel_base: {
    new (...args: any[]): {
        "__#15@#events": Common.ObjectWrapper.ObjectWrapper<EventTypes>;
        addEventListener<T extends keyof EventTypes>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<EventTypes, T>;
        once<T_1 extends keyof EventTypes>(eventType: T_1): Promise<EventTypes[T_1]>;
        removeEventListener<T_2 extends keyof EventTypes>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: keyof EventTypes): boolean;
        dispatchEventToListeners<T_3 extends keyof EventTypes>(eventType: import("../../core/platform/TypescriptUtilities.js").NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<EventTypes, T_3>): void;
    };
} & typeof UI.Widget.VBox;
export declare class CSSOverviewSidebarPanel extends CSSOverviewSidebarPanel_base {
    #private;
    containerElement: HTMLDivElement;
    constructor();
    addItem(name: string, id: string): void;
    select(id: string, focus: boolean): void;
}
export declare const enum SidebarEvents {
    ITEM_SELECTED = "ItemSelected",
    RESET = "Reset"
}
export interface ItemSelectedEvent {
    id: string;
    isMouseEvent: boolean;
    key: string | undefined;
}
export interface EventTypes {
    [SidebarEvents.ITEM_SELECTED]: ItemSelectedEvent;
    [SidebarEvents.RESET]: void;
}
export {};
