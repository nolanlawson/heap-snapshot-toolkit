import * as UI from '../../ui/legacy/legacy.js';
class RenderingOptionsView extends UI.Widget.VBox {
    #private;
    constructor();
}
class ReloadActionDelegate implements UI.ActionRegistration.ActionDelegate {
    handleAction(_context: UI.Context.Context, actionId: string): boolean;
}
