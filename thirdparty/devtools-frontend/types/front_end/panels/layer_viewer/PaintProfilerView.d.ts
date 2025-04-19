import * as Common from '../../core/common/common.js';
import * as Platform from '../../core/platform/platform.js';
import type * as SDK from '../../core/sdk/sdk.js';
import type * as Protocol from '../../generated/protocol.js';
import * as UI from '../../ui/legacy/legacy.js';
declare const PaintProfilerView_base: {
    new (...args: any[]): {
        "__#15@#events": Common.ObjectWrapper.ObjectWrapper<EventTypes>;
        addEventListener<T extends Events.WINDOW_CHANGED>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<EventTypes, T>;
        once<T_1 extends Events.WINDOW_CHANGED>(eventType: T_1): Promise<EventTypes[T_1]>;
        removeEventListener<T_2 extends Events.WINDOW_CHANGED>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: Events.WINDOW_CHANGED): boolean;
        dispatchEventToListeners<T_3 extends Events.WINDOW_CHANGED>(eventType: Platform.TypeScriptUtilities.NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<EventTypes, T_3>): void;
    };
} & typeof UI.Widget.HBox;
export declare class PaintProfilerView extends PaintProfilerView_base {
    private canvasContainer;
    private readonly progressBanner;
    private pieChart;
    private readonly showImageCallback;
    private canvas;
    private context;
    private readonly selectionWindowInternal;
    private readonly innerBarWidth;
    private minBarHeight;
    private readonly barPaddingWidth;
    private readonly outerBarWidth;
    private pendingScale;
    private scale;
    private samplesPerBar;
    private log;
    private snapshot?;
    private logCategories?;
    private profiles?;
    private updateImageTimer?;
    constructor(showImageCallback: (arg0?: string | undefined) => void);
    static categories(): {
        [x: string]: PaintProfilerCategory;
    };
    private static initLogItemCategories;
    private static categoryForLogItem;
    onResize(): void;
    setSnapshotAndLog(snapshot: SDK.PaintProfiler.PaintProfilerSnapshot | null, log: SDK.PaintProfiler.PaintProfilerLogItem[], clipRect: Protocol.DOM.Rect | null): Promise<void>;
    setScale(scale: number): void;
    update(): void;
    private renderBar;
    private onWindowChanged;
    private updatePieChart;
    private calculatePieChart;
    private populatePieChart;
    private formatPieChartTime;
    selectionWindow(): {
        left: number;
        right: number;
    } | null;
    private updateImage;
    private reset;
}
export declare const enum Events {
    WINDOW_CHANGED = "WindowChanged"
}
export interface EventTypes {
    [Events.WINDOW_CHANGED]: void;
}
export declare class PaintProfilerCommandLogView extends UI.ThrottledWidget.ThrottledWidget {
    private readonly treeOutline;
    private log;
    private readonly treeItemCache;
    private selectionWindow?;
    constructor();
    setCommandLog(log: SDK.PaintProfiler.PaintProfilerLogItem[]): void;
    private appendLogItem;
    updateWindow(selectionWindow: {
        left: number;
        right: number;
    } | null): void;
    doUpdate(): Promise<void>;
}
export declare class LogTreeElement extends UI.TreeOutline.TreeElement {
    readonly logItem: SDK.PaintProfiler.PaintProfilerLogItem;
    private readonly ownerView;
    constructor(ownerView: PaintProfilerCommandLogView, logItem: SDK.PaintProfiler.PaintProfilerLogItem);
    onattach(): void;
    onpopulate(): Promise<void>;
    private paramToString;
    private paramsToString;
    private update;
}
export declare class LogPropertyTreeElement extends UI.TreeOutline.TreeElement {
    private property;
    constructor(property: {
        name: string;
        value: SDK.PaintProfiler.RawPaintProfilerLogItemParamValue;
    });
    static appendLogPropertyItem(element: UI.TreeOutline.TreeElement, name: string, value: SDK.PaintProfiler.RawPaintProfilerLogItemParamValue): void;
    onattach(): void;
}
export declare class PaintProfilerCategory {
    name: string;
    title: string;
    color: string;
    constructor(name: string, title: string, color: string);
}
export {};
