import type * as puppeteer from 'puppeteer-core';
import { AsyncScope } from '../../conductor/async-scope.js';
import type { DevToolsPage } from '../../e2e_non_hosted/shared/frontend-helper.js';
import type { InspectedPage } from '../../e2e_non_hosted/shared/target-helper.js';
export declare const ELEMENTS_PANEL_SELECTOR = ".panel[aria-label=\"elements\"]";
export declare const SECTION_SUBTITLE_SELECTOR = ".styles-section-subtitle";
export declare const INACTIVE_GRID_ADORNER_SELECTOR = "[aria-label=\"Enable grid mode\"]";
export declare const ACTIVE_GRID_ADORNER_SELECTOR = "[aria-label=\"Disable grid mode\"]";
export declare const STYLE_PROPERTIES_SELECTOR = ".tree-outline-disclosure [role=\"treeitem\"]";
export declare const SEARCH_BOX_SELECTOR = ".search-bar";
export declare const EMULATE_FOCUSED_PAGE = "Emulate a focused page";
export declare const openLayoutPane: () => Promise<void>;
export declare const waitForAdorners: (expectedAdorners: Array<{
    textContent: string;
    isActive: boolean;
}>) => Promise<void>;
export declare const toggleAdornerSetting: (type: string) => Promise<void>;
export declare const waitForSelectedNodeToBeExpanded: () => Promise<void>;
export declare const waitForAdornerOnSelectedNode: (expectedAdornerText: string) => Promise<void>;
export declare const waitForNoAdornersOnSelectedNode: () => Promise<void>;
export declare const toggleElementCheckboxInLayoutPane: () => Promise<void>;
export declare const getGridsInLayoutPane: () => Promise<puppeteer.ElementHandle<Element>[]>;
export declare const waitForSomeGridsInLayoutPane: (minimumGridCount: number) => Promise<void>;
export declare const waitForContentOfSelectedElementsNode: (expectedTextContent: string) => Promise<void>;
export declare const waitForPartialContentOfSelectedElementsNode: (expectedPartialTextContent: string, devToolsPage?: DevToolsPage) => Promise<void>;
/**
 * Gets the text content of the currently selected element.
 */
export declare const getContentOfSelectedNode: (devToolsPage?: DevToolsPage) => Promise<string>;
export declare const waitForSelectedNodeChange: (initialValue: string, asyncScope?: AsyncScope) => Promise<void>;
export declare const assertSelectedElementsNodeTextIncludes: (expectedTextContent: string) => Promise<void>;
export declare const waitForSelectedTreeElementSelectorWithTextcontent: (expectedTextContent: string) => Promise<void>;
export declare const waitForSelectedTreeElementSelectorWhichIncludesText: (expectedTextContent: string) => Promise<void>;
export declare const waitForChildrenOfSelectedElementNode: () => Promise<void>;
export declare const waitForAndClickTreeElementWithPartialText: (text: string, devToolsPage?: DevToolsPage) => Promise<void>;
export declare const waitForElementWithPartialText: (text: string) => Promise<puppeteer.ElementHandle<Element>>;
export declare const clickTreeElementWithPartialText: (text: string, devToolsPage?: DevToolsPage) => Promise<boolean>;
export declare const clickNthChildOfSelectedElementNode: (childIndex: number) => Promise<void>;
export declare const focusElementsTree: () => Promise<void>;
export declare const navigateToSidePane: (paneName: string) => Promise<void>;
export declare const waitForElementsStyleSection: (expectedNodeText?: string | null, devToolsPage?: DevToolsPage) => Promise<void>;
export declare const waitForElementsComputedSection: () => Promise<void>;
export declare const getContentOfComputedPane: () => Promise<string>;
export declare const waitForComputedPaneChange: (initialValue: string) => Promise<void>;
export declare const getAllPropertiesFromComputedPane: () => Promise<({
    name: string;
    value: string;
} | null)[]>;
export declare const getPropertyFromComputedPane: (name: string) => Promise<puppeteer.ElementHandle<import("../../../front_end/panels/elements/components/ComputedStyleProperty.js").ComputedStyleProperty> | undefined>;
export declare const expandSelectedNodeRecursively: (devToolsPage?: DevToolsPage) => Promise<void>;
export declare const findElementById: (id: string) => Promise<void>;
export declare const showForceState: (specificStates?: boolean) => Promise<void>;
export declare const forcePseudoState: (pseudoState: string, specificStates?: boolean) => Promise<void>;
export declare const removePseudoState: (pseudoState: string) => Promise<void>;
export declare const getComputedStylesForDomNode: (elementSelector: string, styleAttribute: keyof CSSStyleDeclaration) => Promise<string | number | ((property: string) => string) | ((property: string, value: string | null, priority?: string | undefined) => void) | CSSRule | ((property: string) => string) | ((property: string) => string) | ((index: number) => string) | (() => IterableIterator<string>) | null>;
export declare const waitForNumberOfComputedProperties: (numberToWaitFor: number) => Promise<boolean>;
export declare const getComputedPanel: () => Promise<puppeteer.ElementHandle<Element>>;
export declare const filterComputedProperties: (filterString: string) => Promise<void>;
export declare const toggleShowAllComputedProperties: () => Promise<void>;
export declare const waitForDomNodeToBeVisible: (elementSelector: string) => Promise<void>;
export declare const waitForDomNodeToBeHidden: (elementSelector: string) => Promise<void>;
export declare const assertGutterDecorationForDomNodeExists: () => Promise<void>;
export declare const getStyleRuleSelector: (selector: string) => string;
export declare const waitForExactStyleRule: (expectedSelector: string) => Promise<void>;
export declare const waitForStyleRule: (expectedSelector: string, devToolsPage?: DevToolsPage) => Promise<void>;
export declare const getComputedStyleProperties: () => Promise<{
    name: string | null;
    value: string | null;
    trace: {
        value: string | null;
        selector: string | null;
        link: string | null;
    }[];
}[]>;
export declare const getDisplayedCSSDeclarations: () => Promise<(string | undefined)[]>;
export declare const getDisplayedStyleRulesCompact: () => Promise<{
    selectorText: string;
    propertyNames: (string | null)[];
}[]>;
export declare const getDisplayedStyleRules: (devToolsPage?: DevToolsPage) => Promise<{
    selectorText: string;
    propertyData: {
        propertyName: string | null;
        isOverLoaded: boolean | undefined;
        isInherited: boolean | undefined;
    }[];
}[]>;
/**
 * @param propertiesSection - The element containing this properties section.
 * @returns an array with an entry for each property in the section. Each entry has:
 * - propertyName: The name of this property.
 * - isOverloaded: True if this is an inherited properties section, and this property is overloaded by a child node.
 *                 The property will be shown as crossed out in the style pane.
 * - isInherited: True if this is an inherited properties section, and this property is a non-inherited CSS property.
 *                The property will be shown as grayed-out in the style pane.
 */
export declare const getDisplayedCSSPropertyData: (propertiesSection: puppeteer.ElementHandle<Element>, devtoolsPage?: DevToolsPage) => Promise<{
    propertyName: string | null;
    isOverLoaded: boolean | undefined;
    isInherited: boolean | undefined;
}[]>;
export declare const getDisplayedCSSPropertyNames: (propertiesSection: puppeteer.ElementHandle<Element>) => Promise<(string | null)[]>;
export declare const getStyleRule: (selector: string) => Promise<puppeteer.ElementHandle<Element>>;
export declare const getStyleRuleWithSourcePosition: (styleSelector: string, sourcePosition?: string) => Promise<puppeteer.ElementHandle<Element>>;
export declare const getColorSwatch: (parent: puppeteer.ElementHandle<Element> | undefined, index: number) => Promise<puppeteer.ElementHandle<Element>>;
export declare const getColorSwatchColor: (parent: puppeteer.ElementHandle<Element>, index: number) => Promise<string>;
export declare const shiftClickColorSwatch: (parent: puppeteer.ElementHandle<Element>, index: number, parentVe: string) => Promise<void>;
export declare const getElementStyleFontEditorButton: () => Promise<puppeteer.ElementHandle<Element>>;
export declare const getFontEditorButtons: () => Promise<puppeteer.ElementHandle<Element>[]>;
export declare const getHiddenFontEditorButtons: () => Promise<puppeteer.ElementHandle<Element>[]>;
export declare const getStyleSectionSubtitles: () => Promise<(string | null)[]>;
export declare const getCSSPropertyInRule: (ruleSection: puppeteer.ElementHandle<Element> | string, name: string, sourcePosition?: string) => Promise<puppeteer.ElementHandle<HTMLElement> | undefined>;
export declare const focusCSSPropertyValue: (selector: string, propertyName: string) => Promise<void>;
/**
 * Edit a CSS property value in a given rule
 * @param selector The selector of the rule to be updated. Note that because of the way the Styles populates, it is
 * important to provide a rule selector that is unique here, to avoid editing a property in the wrong rule.
 * @param propertyName The name of the property to be found and edited. If several properties have the same names, the
 * first one is edited.
 * @param newValue The new value to be used.
 */
export declare function editCSSProperty(selector: string, propertyName: string, newValue: string): Promise<void>;
export declare function editQueryRuleText(queryStylesSections: puppeteer.ElementHandle<Element>, newQueryText: string): Promise<void>;
export declare function waitForCSSPropertyValue(selector: string, name: string, value: string, sourcePosition?: string): Promise<puppeteer.ElementHandle<Element>>;
export declare function waitForPropertyToHighlight(ruleSelector: string, propertyName: string): Promise<void>;
export declare const getBreadcrumbsTextContent: ({ expectedNodeCount }: {
    expectedNodeCount: number;
}) => Promise<string[]>;
export declare const getSelectedBreadcrumbTextContent: () => Promise<string>;
export declare const navigateToElementsTab: () => Promise<void>;
export declare const clickOnFirstLinkInStylesPanel: () => Promise<void>;
export declare const toggleClassesPane: () => Promise<void>;
export declare const typeInClassesPaneInput: (text: string, commitWith?: puppeteer.KeyInput, waitForNodeChange?: boolean) => Promise<void>;
export declare const toggleClassesPaneCheckbox: (checkboxLabel: string) => Promise<void>;
export declare const uncheckStylesPaneCheckbox: (checkboxLabel: string) => Promise<void>;
export declare const assertSelectedNodeClasses: (expectedClasses: string[]) => Promise<void>;
export declare const toggleAccessibilityPane: () => Promise<void>;
export declare const toggleAccessibilityTree: () => Promise<void>;
export declare const getPropertiesWithHints: () => Promise<string[]>;
export declare const summonAndWaitForSearchBox: () => Promise<void>;
export declare const assertSearchResultMatchesText: (text: string) => Promise<void>;
export declare const goToResourceAndWaitForStyleSection: (path: string, devToolsPage?: DevToolsPage, inspectedPage?: InspectedPage) => Promise<void>;
export declare const checkStyleAttributes: (expectedStyles: string[]) => Promise<boolean>;
