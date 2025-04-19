import * as Common from '../../core/common/common.js';
import { ElementsTreeOutline } from './ElementsTreeOutline.js';
class ElementsTreeElementHighlighter {
    private readonly throttler;
    private treeOutline;
    private currentHighlightedElement;
    private alreadyExpandedParentElement;
    private pendingHighlightNode;
    private isModifyingTreeOutline;
    constructor(treeOutline: ElementsTreeOutline, throttler: Common.Throttler.Throttler);
    private highlightNode;
    private highlightNodeInternal;
    private clearState;
}
