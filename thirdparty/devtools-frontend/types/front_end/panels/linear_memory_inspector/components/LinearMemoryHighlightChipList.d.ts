import '../../../ui/components/icon_button/icon_button.js';
import type { HighlightInfo } from './LinearMemoryViewerUtils.js';
interface LinearMemoryHighlightChipListData {
    highlightInfos: HighlightInfo[];
    focusedMemoryHighlight?: HighlightInfo;
}
export declare class DeleteMemoryHighlightEvent extends Event {
    static readonly eventName = "deletememoryhighlight";
    data: HighlightInfo;
    constructor(highlightInfo: HighlightInfo);
}
class JumpToHighlightedMemoryEvent extends Event {
    static readonly eventName = "jumptohighlightedmemory";
    data: number;
    constructor(address: number);
}
class LinearMemoryHighlightChipList extends HTMLElement {
    #private;
    set data(data: LinearMemoryHighlightChipListData);
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-linear-memory-highlight-chip-list': LinearMemoryHighlightChipList;
    }
}
