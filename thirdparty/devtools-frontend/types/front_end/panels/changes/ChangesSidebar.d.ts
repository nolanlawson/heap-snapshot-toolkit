import * as Common from '../../core/common/common.js';
import * as Platform from '../../core/platform/platform.js';
import * as Workspace from '../../models/workspace/workspace.js';
import * as WorkspaceDiff from '../../models/workspace_diff/workspace_diff.js';
import * as UI from '../../ui/legacy/legacy.js';
declare const ChangesSidebar_base: {
    new (...args: any[]): {
        "__#15@#events": Common.ObjectWrapper.ObjectWrapper<EventTypes>;
        addEventListener<T extends Events.SELECTED_UI_SOURCE_CODE_CHANGED>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<EventTypes, T>;
        once<T_1 extends Events.SELECTED_UI_SOURCE_CODE_CHANGED>(eventType: T_1): Promise<EventTypes[T_1]>;
        removeEventListener<T_2 extends Events.SELECTED_UI_SOURCE_CODE_CHANGED>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: Events.SELECTED_UI_SOURCE_CODE_CHANGED): boolean;
        dispatchEventToListeners<T_3 extends Events.SELECTED_UI_SOURCE_CODE_CHANGED>(eventType: Platform.TypeScriptUtilities.NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<EventTypes, T_3>): void;
    };
} & typeof UI.Widget.Widget;
export declare class ChangesSidebar extends ChangesSidebar_base {
    private treeoutline;
    private readonly treeElements;
    private readonly workspaceDiff;
    constructor(workspaceDiff: WorkspaceDiff.WorkspaceDiff.WorkspaceDiffImpl);
    selectedUISourceCode(): Workspace.UISourceCode.UISourceCode | null;
    private selectionChanged;
    private uiSourceCodeMofiedStatusChanged;
    private removeUISourceCode;
    private addUISourceCode;
}
declare const enum Events {
    SELECTED_UI_SOURCE_CODE_CHANGED = "SelectedUISourceCodeChanged"
}
interface EventTypes {
    [Events.SELECTED_UI_SOURCE_CODE_CHANGED]: void;
}
class UISourceCodeTreeElement extends UI.TreeOutline.TreeElement {
    uiSourceCode: Workspace.UISourceCode.UISourceCode;
    private readonly eventListeners;
    constructor(uiSourceCode: Workspace.UISourceCode.UISourceCode);
    private updateTitle;
    dispose(): void;
}
