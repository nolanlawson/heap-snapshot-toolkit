import * as Common from '../../core/common/common.js';
import { GlassPane } from './GlassPane.js';
declare const Dialog_base: {
    new (...args: any[]): {
        "__#15@#events": Common.ObjectWrapper.ObjectWrapper<EventTypes>;
        addEventListener<T extends Events.HIDDEN>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<EventTypes, T>;
        once<T_1 extends Events.HIDDEN>(eventType: T_1): Promise<EventTypes[T_1]>;
        removeEventListener<T_2 extends Events.HIDDEN>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: Events.HIDDEN): boolean;
        dispatchEventToListeners<T_3 extends Events.HIDDEN>(eventType: import("../../core/platform/TypescriptUtilities.js").NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<EventTypes, T_3>): void;
    };
} & typeof GlassPane;
export declare class Dialog extends Dialog_base {
    private tabIndexBehavior;
    private tabIndexMap;
    private focusRestorer;
    private closeOnEscape;
    private targetDocument;
    private readonly targetDocumentKeyDownHandler;
    private escapeKeyCallback;
    constructor(jslogContext?: string);
    static hasInstance(): boolean;
    static getInstance(): Dialog | null;
    show(where?: Document | Element): void;
    hide(): void;
    setAriaLabel(label: string): void;
    setCloseOnEscape(close: boolean): void;
    setEscapeKeyCallback(callback: (arg0: Event) => void): void;
    addCloseButton(): void;
    setOutsideTabIndexBehavior(tabIndexBehavior: OutsideTabIndexBehavior): void;
    private disableTabIndexOnElements;
    private getMainWidgetTabIndexElements;
    private restoreTabIndexOnElements;
    private onKeyDown;
    private static instance;
}
export declare const enum Events {
    HIDDEN = "hidden"
}
export interface EventTypes {
    [Events.HIDDEN]: void;
}
export declare const enum OutsideTabIndexBehavior {
    DISABLE_ALL_OUTSIDE_TAB_INDEX = "DisableAllTabIndex",
    PRESERVE_MAIN_VIEW_TAB_INDEX = "PreserveMainViewTabIndex",
    PRESERVE_TAB_INDEX = "PreserveTabIndex"
}
export {};
