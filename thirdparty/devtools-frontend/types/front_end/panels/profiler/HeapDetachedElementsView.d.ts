import * as Common from '../../core/common/common.js';
import * as SDK from '../../core/sdk/sdk.js';
import type * as Protocol from '../../generated/protocol.js';
import type * as DataGrid from '../../ui/legacy/components/data_grid/data_grid.js';
import * as UI from '../../ui/legacy/legacy.js';
import { type DataDisplayDelegate, type ProfileHeader, ProfileType } from './ProfileHeader.js';
import { WritableProfileHeader } from './ProfileView.js';
class DetachedElementsProfileView extends UI.View.SimpleView implements DataDisplayDelegate {
    readonly selectedSizeText: UI.Toolbar.ToolbarText;
    dataGrid: DataGrid.DataGrid.DataGridImpl<unknown>;
    profile: DetachedElementsProfileHeader;
    readonly parentDataDisplayDelegate: DataDisplayDelegate;
    constructor(dataDisplayDelegate: DataDisplayDelegate, profile: DetachedElementsProfileHeader);
    showProfile(profile: ProfileHeader | null): UI.Widget.Widget | null;
    showObject(objectId: string, perspectiveName: string): void;
    linkifyObject(): Promise<Element | null>;
    populateElementsGrid(detachedElements: Protocol.DOM.DetachedElementInfo[] | null): void;
    toolbarItems(): Promise<UI.Toolbar.ToolbarItem[]>;
}
declare const DetachedElementsProfileType_base: {
    new (...args: any[]): {
        "__#15@#events": Common.ObjectWrapper.ObjectWrapper<DetachedElementsProfileType.EventTypes>;
        addEventListener<T extends keyof DetachedElementsProfileType.EventTypes>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<DetachedElementsProfileType.EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<DetachedElementsProfileType.EventTypes, T>;
        once<T_1 extends keyof DetachedElementsProfileType.EventTypes>(eventType: T_1): Promise<DetachedElementsProfileType.EventTypes[T_1]>;
        removeEventListener<T_2 extends keyof DetachedElementsProfileType.EventTypes>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<DetachedElementsProfileType.EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: keyof DetachedElementsProfileType.EventTypes): boolean;
        dispatchEventToListeners<T_3 extends keyof DetachedElementsProfileType.EventTypes>(eventType: import("../../core/platform/TypescriptUtilities.js").NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<DetachedElementsProfileType.EventTypes, T_3>): void;
    };
} & typeof ProfileType;
export declare class DetachedElementsProfileType extends DetachedElementsProfileType_base {
    constructor(typeId?: string, description?: string);
    profileBeingRecorded(): DetachedElementsProfileHeader | null;
    get buttonTooltip(): Common.UIString.LocalizedString;
    buttonClicked(): boolean;
    getDetachedElements(): Promise<void>;
    get treeItemTitle(): Common.UIString.LocalizedString;
    get description(): string;
    isInstantProfile(): boolean;
    static readonly TypeId = "DetachedElements";
}
export declare namespace DetachedElementsProfileType {
    const enum Events {
        RECORDING_STOPPED = "RecordingStopped",
        STATS_UPDATE = "StatsUpdate",
        DETACHED_ELEMENTS_OBTAINED = "DetachedElementsObtained"
    }
    interface EventTypes {
        [Events.RECORDING_STOPPED]: void;
        [Events.STATS_UPDATE]: Protocol.HeapProfiler.SamplingHeapProfile | null;
        [Events.DETACHED_ELEMENTS_OBTAINED]: Protocol.DOM.DetachedElementInfo[] | null;
    }
}
class DetachedElementsProfileHeader extends WritableProfileHeader {
    readonly heapProfilerModelInternal: SDK.HeapProfilerModel.HeapProfilerModel | null;
    readonly detachedElements: Protocol.DOM.DetachedElementInfo[] | null;
    constructor(heapProfilerModel: SDK.HeapProfilerModel.HeapProfilerModel | null, type: DetachedElementsProfileType, detachedElements: Protocol.DOM.DetachedElementInfo[] | null, title?: string);
    createView(dataDisplayDelegate: DataDisplayDelegate): DetachedElementsProfileView;
    heapProfilerModel(): SDK.HeapProfilerModel.HeapProfilerModel | null;
    profileType(): DetachedElementsProfileType;
}
