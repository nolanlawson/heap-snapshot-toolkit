import * as Common from '../../core/common/common.js';
import * as SDK from '../../core/sdk/sdk.js';
interface Options extends Common.Linkifier.Options {
    hiddenClassList?: string[];
}
const decorateNodeLabel: (node: SDK.DOMModel.DOMNode, parentElement: HTMLElement, options: Options) => void;
const linkifyNodeReference: (node: SDK.DOMModel.DOMNode | null, options?: Options | undefined) => Node;
const linkifyDeferredNodeReference: (deferredNode: SDK.DOMModel.DeferredDOMNode, options?: Options | undefined) => Node;
class Linkifier implements Common.Linkifier.Linkifier {
    static instance(opts?: {
        forceNew: boolean | null;
    }): Linkifier;
    linkify(object: Object, options?: Options): Node;
}
