import * as Protocol from '../../generated/protocol.js';
class CSSMetadata {
    #private;
    constructor(properties: CSSPropertyDefinition[], aliasesFor: Map<string, string>);
    static isCSSWideKeyword(a: string): a is CSSWideKeyword;
    static isPositionTryOrderKeyword(a: string): a is PositionTryOrderKeyword;
    private static sortPrefixesAndCSSWideKeywordsToEnd;
    allProperties(): string[];
    aliasesFor(): Map<string, string>;
    nameValuePresets(includeSVG?: boolean): string[];
    isSVGProperty(name: string): boolean;
    getLonghands(shorthand: string): string[] | null;
    getShorthands(longhand: string): string[] | null;
    isColorAwareProperty(propertyName: string): boolean;
    isFontFamilyProperty(propertyName: string): boolean;
    isAngleAwareProperty(propertyName: string): boolean;
    isGridAreaDefiningProperty(propertyName: string): boolean;
    isGridColumnNameAwareProperty(propertyName: string): boolean;
    isGridRowNameAwareProperty(propertyName: string): boolean;
    isGridAreaNameAwareProperty(propertyName: string): boolean;
    isGridNameAwareProperty(propertyName: string): boolean;
    isLengthProperty(propertyName: string): boolean;
    isBezierAwareProperty(propertyName: string): boolean;
    isFontAwareProperty(propertyName: string): boolean;
    isCustomProperty(propertyName: string): boolean;
    isShadowProperty(propertyName: string): boolean;
    isStringProperty(propertyName: string): boolean;
    canonicalPropertyName(name: string): string;
    isCSSPropertyName(propertyName: string): boolean;
    isPropertyInherited(propertyName: string): boolean;
    private specificPropertyValues;
    getPropertyValues(propertyName: string): string[];
    propertyUsageWeight(property: string): number;
    getValuePreset(key: string, value: string): {
        text: string;
        startColumn: number;
        endColumn: number;
    } | null;
    isHighlightPseudoType(pseudoType: Protocol.DOM.PseudoType): boolean;
}
const CubicBezierKeywordValues: Map<string, string>;
export declare const enum CSSWideKeyword {
    INHERIT = "inherit",
    INITIAL = "initial",
    REVERT = "revert",
    REVERT_LAYER = "revert-layer",
    UNSET = "unset"
}
const CSSWideKeywords: CSSWideKeyword[];
declare const enum PositionTryOrderKeyword {
    NORMAL = "normal",
    MOST_HEIGHT = "most-height",
    MOST_WIDTH = "most-width",
    MOST_BLOCK_SIZE = "most-block-size",
    MOST_INLINE_SIZE = "most-inline-size"
}
const PositionTryOrderKeywords: PositionTryOrderKeyword[];
const VariableNameRegex: RegExp;
const VariableRegex: RegExp;
const CustomVariableRegex: RegExp;
const URLRegex: RegExp;
/**
 * Matches an instance of a grid area 'row' definition.
 * 'grid-template-areas', e.g.
 *    "a a ."
 *
 * 'grid', 'grid-template', e.g.
 *    [track-#name] "a a ." minmax(50px, auto) [track-#name]
 */
const GridAreaRowRegex: RegExp;
declare function cssMetadata(): CSSMetadata;
interface CSSPropertyDefinition {
    name: string;
    longhands: string[] | null;
    inherited: boolean | null;
    svg: boolean | null;
}
