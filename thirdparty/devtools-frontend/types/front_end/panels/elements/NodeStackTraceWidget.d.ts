import * as UI from '../../ui/legacy/legacy.js';
class NodeStackTraceWidget extends UI.ThrottledWidget.ThrottledWidget {
    private readonly noStackTraceElement;
    private readonly creationStackTraceElement;
    private readonly linkifier;
    constructor();
    wasShown(): void;
    willHide(): void;
    doUpdate(): Promise<void>;
}
const MaxLengthForLinks = 40;
