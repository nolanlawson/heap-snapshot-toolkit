import * as Diff from '../../../third_party/diff/diff.js';
declare global {
    interface HTMLElementTagNameMap {
        'devtools-diff-view': DiffView;
    }
}
interface DiffViewData {
    diff: Diff.Diff.DiffArray;
    mimeType: string;
}
class DiffView extends HTMLElement {
    #private;
    loaded: Promise<void>;
    constructor(data?: DiffViewData);
    set data(data: DiffViewData);
}
export {};
