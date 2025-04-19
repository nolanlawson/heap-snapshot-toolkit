/**
 * Represents a selector that pierces shadow roots. Each selector before the
 * last one is matches a shadow root for which we pierce through.
 */
type DeepSelector = string[];
/**
 * Represents a selector.
 */
export type Selector = string | DeepSelector;
class SelectorPart {
    value: string;
    optimized: boolean;
    constructor(value: string, optimized: boolean);
    toString(): string;
}
