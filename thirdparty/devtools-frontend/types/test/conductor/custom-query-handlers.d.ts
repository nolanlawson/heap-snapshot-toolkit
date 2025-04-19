/**
 * The following custom query all implement the same traversal logic and as such
 * it would be nice if we could refactor this out instead of repeating ourselves.
 * But because the handlers will be stringified and sent over the wire through
 * CDP, we need the functions to be completely self-contained and not refer any
 * names from the outer scope. This means that such a refactoring can only be
 * achieved by using reflection, which we decided against.
 */
export declare const querySelectorShadowTextOne: (element: Element | Document | ShadowRoot, text: string) => Element | null;
export declare const querySelectorShadowTextAll: (element: Element | Document, selector: string) => Element[];
