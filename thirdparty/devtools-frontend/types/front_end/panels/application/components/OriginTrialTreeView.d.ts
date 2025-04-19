import '../../../ui/components/icon_button/icon_button.js';
import '../../../ui/components/tree_outline/tree_outline.js';
import * as Protocol from '../../../generated/protocol.js';
import type * as TreeOutline from '../../../ui/components/tree_outline/tree_outline.js';
interface BadgeData {
    badgeContent: string;
    style: 'error' | 'success' | 'secondary';
}
class Badge extends HTMLElement {
    #private;
    set data(data: BadgeData);
}
type TreeNode<DataType> = TreeOutline.TreeOutlineUtils.TreeNode<DataType>;
type OriginTrialTreeNodeData = Protocol.Page.OriginTrial | Protocol.Page.OriginTrialTokenWithStatus | string;
interface OriginTrialTokenRowsData {
    node: TreeNode<OriginTrialTreeNodeData>;
}
class OriginTrialTokenRows extends HTMLElement {
    #private;
    set data(data: OriginTrialTokenRowsData);
    connectedCallback(): void;
}
interface OriginTrialTreeViewData {
    trials: Protocol.Page.OriginTrial[];
}
class OriginTrialTreeView extends HTMLElement {
    #private;
    set data(data: OriginTrialTreeViewData);
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-resources-origin-trial-tree-view': OriginTrialTreeView;
        'devtools-resources-origin-trial-token-rows': OriginTrialTokenRows;
        'devtools-resources-origin-trial-tree-view-badge': Badge;
    }
}
export {};
