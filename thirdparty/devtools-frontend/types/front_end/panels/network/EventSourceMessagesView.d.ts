import '../../ui/legacy/legacy.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as DataGrid from '../../ui/legacy/components/data_grid/data_grid.js';
import * as UI from '../../ui/legacy/legacy.js';
class EventSourceMessagesView extends UI.Widget.VBox {
    private readonly request;
    private dataGrid;
    private readonly mainToolbar;
    private readonly clearAllButton;
    private readonly filterTextInput;
    private filterRegex;
    private messageFilterSetting;
    constructor(request: SDK.NetworkRequest.NetworkRequest);
    wasShown(): void;
    willHide(): void;
    private messageAdded;
    private messageFilter;
    private clearMessages;
    private updateFilterSetting;
    private setFilter;
    private sortItems;
    private onRowContextMenu;
    refresh(): void;
}
class EventSourceMessageNode extends DataGrid.SortableDataGrid.SortableDataGridNode<EventSourceMessageNode> {
    readonly message: SDK.NetworkRequest.EventSourceMessage;
    constructor(message: SDK.NetworkRequest.EventSourceMessage);
}
const Comparators: {
    [x: string]: (arg0: EventSourceMessageNode, arg1: EventSourceMessageNode) => number;
};
