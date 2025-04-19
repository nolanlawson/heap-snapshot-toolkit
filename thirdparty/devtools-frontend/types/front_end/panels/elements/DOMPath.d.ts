import * as SDK from '../../core/sdk/sdk.js';
const fullQualifiedSelector: (node: SDK.DOMModel.DOMNode, justSelector?: boolean) => string;
const cssPath: (node: SDK.DOMModel.DOMNode, optimized?: boolean) => string;
const canGetJSPath: (node: SDK.DOMModel.DOMNode) => boolean;
const jsPath: (node: SDK.DOMModel.DOMNode, optimized?: boolean) => string;
const xPath: (node: SDK.DOMModel.DOMNode, optimized?: boolean) => string;
class Step {
    value: string;
    optimized: boolean;
    constructor(value: string, optimized: boolean);
    toString(): string;
}
