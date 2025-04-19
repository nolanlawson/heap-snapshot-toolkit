import * as Common from '../../core/common/common.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as UI from '../../ui/legacy/legacy.js';
class InspectorMainImpl implements Common.Runnable.Runnable {
    static instance(opts?: {
        forceNew: boolean | null;
    }): InspectorMainImpl;
    run(): Promise<void>;
}
class ReloadActionDelegate implements UI.ActionRegistration.ActionDelegate {
    handleAction(_context: UI.Context.Context, actionId: string): boolean;
}
class FocusDebuggeeActionDelegate implements UI.ActionRegistration.ActionDelegate {
    handleAction(_context: UI.Context.Context, _actionId: string): boolean;
}
class NodeIndicator implements UI.Toolbar.Provider {
    #private;
    private constructor();
    static instance(opts?: {
        forceNew: boolean | null;
    }): NodeIndicator;
    item(): UI.Toolbar.ToolbarItem | null;
}
class SourcesPanelIndicator {
    constructor();
}
class BackendSettingsSync implements SDK.TargetManager.Observer {
    #private;
    constructor();
    targetAdded(target: SDK.Target.Target): void;
    targetRemoved(_target: SDK.Target.Target): void;
}
