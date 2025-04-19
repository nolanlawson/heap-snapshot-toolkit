import * as Host from '../../core/host/host.js';
import * as SDK from '../../core/sdk/sdk.js';
declare const enum HintType {
    INACTIVE_PROPERTY = "ruleValidation",
    DEPRECATED_PROPERTY = "deprecatedProperty"
}
class Hint {
    #private;
    constructor(hintMessage: string, possibleFixMessage: string | null, learnMoreLink?: string);
    getMessage(): string;
    getPossibleFixMessage(): string | null;
    getLearnMoreLink(): string | undefined;
}
class CSSRuleValidator {
    #private;
    getMetricType(): Host.UserMetrics.CSSHintType;
    constructor(affectedProperties: string[]);
    getApplicableProperties(): string[];
    abstract getHint(propertyName: string, computedStyles?: Map<string, string>, parentComputedStyles?: Map<string, string>, nodeName?: string, fontFaces?: SDK.CSSFontFace.CSSFontFace[]): Hint | undefined;
}
class AlignContentValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(_propertyName: string, computedStyles?: Map<string, string>): Hint | undefined;
}
class FlexItemValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, _computedStyles?: Map<string, string>, parentComputedStyles?: Map<string, string>): Hint | undefined;
}
class FlexContainerValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, computedStyles?: Map<string, string>): Hint | undefined;
}
class GridContainerValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, computedStyles?: Map<string, string>): Hint | undefined;
}
class GridItemValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, _computedStyles?: Map<string, string>, parentComputedStyles?: Map<string, string>): Hint | undefined;
}
class FlexOrGridItemValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, _computedStyles?: Map<string, string>, parentComputedStyles?: Map<string, string>): Hint | undefined;
}
class FlexGridValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, computedStyles?: Map<string, string>, parentComputedStyles?: Map<string, string>): Hint | undefined;
}
class MulticolFlexGridValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, computedStyles?: Map<string, string>): Hint | undefined;
}
class PaddingValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, computedStyles?: Map<string, string>): Hint | undefined;
}
class PositionValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, computedStyles?: Map<string, string>): Hint | undefined;
}
class ZIndexValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, computedStyles?: Map<string, string>, parentComputedStyles?: Map<string, string>): Hint | undefined;
}
/**
 * Validates if CSS width/height are having an effect on an element.
 * See "Applies to" in https://www.w3.org/TR/css-sizing-3/#propdef-width.
 * See "Applies to" in https://www.w3.org/TR/css-sizing-3/#propdef-height.
 */
class SizingValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(propertyName: string, computedStyles?: Map<string, string>, _parentComputedStyles?: Map<string, string>, nodeName?: string): Hint | undefined;
}
/**
 * Checks that font variation settings are applicable to the actual font.
 */
class FontVariationSettingsValidator extends CSSRuleValidator {
    constructor();
    getMetricType(): Host.UserMetrics.CSSHintType;
    getHint(_propertyName: string, computedStyles?: Map<string, string>, _parentComputedStyles?: Map<string, string>, _nodeName?: string, fontFaces?: SDK.CSSFontFace.CSSFontFace[]): Hint | undefined;
}
const cssRuleValidatorsMap: Map<string, CSSRuleValidator[]>;
