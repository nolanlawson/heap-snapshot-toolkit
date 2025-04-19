import './Toolbar.js';
import * as Platform from '../../core/platform/platform.js';
import * as TextUtils from '../../models/text_utils/text_utils.js';
import * as Buttons from '../components/buttons/buttons.js';
import * as IconButton from '../components/icon_button/icon_button.js';
import { Size } from './Geometry.js';
import type { ToolbarButton } from './Toolbar.js';
import type { TreeOutline } from './Treeoutline.js';
declare global {
    interface HTMLElementTagNameMap {
        'devtools-checkbox': CheckboxLabel;
        'dt-close-button': DevToolsCloseButton;
        'dt-icon-label': DevToolsIconLabel;
        'dt-small-bubble': DevToolsSmallBubble;
    }
}
const highlightedSearchResultClassName = "highlighted-search-result";
const highlightedCurrentSearchResultClassName = "current-search-result";
declare function installDragHandle(element: Element, elementDragStart: ((arg0: MouseEvent) => boolean) | null, elementDrag: (arg0: MouseEvent) => void, elementDragEnd: ((arg0: MouseEvent) => void) | null, cursor: string | null, hoverCursor?: string | null, startDelay?: number): void;
declare function elementDragStart(targetElement: Element, elementDragStart: ((arg0: MouseEvent) => boolean) | null, elementDrag: (arg0: MouseEvent) => void, elementDragEnd: ((arg0: MouseEvent) => void) | null, cursor: string | null, event: Event): void;
declare function isBeingEdited(node?: Node | null): boolean;
declare function isEditing(): boolean;
declare function markBeingEdited(element: Element, value: boolean): boolean;
const StyleValueDelimiters = " \u00A0\t\n\"':;,/()";
declare function getValueModificationDirection(event: Event): string | null;
declare function modifiedFloatNumber(number: number, event: Event, modifierMultiplier?: number): number | null;
declare function createReplacementString(wordString: string, event: Event, customNumberHandler?: ((arg0: string, arg1: number, arg2: string) => string)): string | null;
declare function isElementValueModification(event: Event): boolean;
declare function handleElementValueModifications(event: Event, element: Element, finishHandler?: ((arg0: string, arg1: string) => void), suggestionHandler?: ((arg0: string) => boolean), customNumberHandler?: ((arg0: string, arg1: number, arg2: string) => string)): boolean;
declare function openLinkExternallyLabel(): string;
declare function copyLinkAddressLabel(): string;
declare function copyFileNameLabel(): string;
declare function anotherProfilerActiveLabel(): string;
declare function asyncStackTraceLabel(description: string | undefined, previousCallFrames: Array<{
    functionName: string;
}>): string;
declare function addPlatformClass(element: HTMLElement): void;
declare function installComponentRootStyles(element: HTMLElement): void;
class ElementFocusRestorer {
    private element;
    private previous;
    constructor(element: Element);
    restore(): void;
}
declare function highlightSearchResult(element: Element, offset: number, length: number, domChanges?: HighlightChange[]): Element | null;
declare function highlightSearchResults(element: Element, resultRanges: TextUtils.TextRange.SourceRange[], changes?: HighlightChange[]): Element[];
declare function runCSSAnimationOnce(element: Element, className: string): void;
declare function highlightRangesWithStyleClass(element: Element, resultRanges: TextUtils.TextRange.SourceRange[], styleClass: string, changes?: HighlightChange[]): Element[];
declare function applyDomChanges(domChanges: HighlightChange[]): void;
declare function revertDomChanges(domChanges: HighlightChange[]): void;
declare function measurePreferredSize(element: Element, containerElement?: Element | null): Size;
declare function startBatchUpdate(): void;
declare function endBatchUpdate(): void;
declare function invokeOnceAfterBatchUpdate(object: Object, method: () => void): void;
declare function animateFunction(window: Window, func: (...args: any[]) => void, params: Array<{
    from: number;
    to: number;
}>, duration: number, animationComplete?: (() => void)): () => void;
class LongClickController {
    private readonly element;
    private readonly callback;
    private readonly editKey;
    private longClickData;
    private longClickInterval;
    constructor(element: Element, callback: (arg0: Event) => void, isEditKeyFunc?: (arg0: KeyboardEvent) => boolean);
    reset(): void;
    private enable;
    dispose(): void;
    static readonly TIME_MS = 200;
}
declare function initializeUIUtils(document: Document): void;
declare function beautifyFunctionName(name: string): string;
const createTextChild: (element: Element | DocumentFragment, text: string) => Text;
const createTextChildren: (element: Element | DocumentFragment, ...childrenText: string[]) => void;
declare function createTextButton(text: string, clickHandler?: ((arg0: Event) => void), opts?: {
    className?: string;
    jslogContext?: string;
    variant?: Buttons.Button.Variant;
    title?: string;
    icon?: string;
}): Buttons.Button.Button;
declare function createInput(className?: string, type?: string, jslogContext?: string): HTMLInputElement;
declare function createHistoryInput(type?: string, className?: string): HTMLInputElement;
declare function createSelect(name: string, options: string[] | Array<Map<string, string[]>> | Set<string>): HTMLSelectElement;
declare function createOption(title: string, value?: string, jslogContext?: string): HTMLOptionElement;
declare function createLabel(title: string, className?: string, associatedControl?: Element): Element;
declare function createIconLabel(options: {
    title?: string;
    iconName: string;
    color?: string;
    width?: '14px' | '20px';
    height?: '14px' | '20px';
}): DevToolsIconLabel;
/**
 * Creates a radio button, which is comprised of a `<label>` and an `<input type="radio">` element.
 *
 * The returned pair contains the `label` element and and the `radio` input element. The latter is
 * a child of the `label`, and therefore no association via `for` attribute is necessary to make
 * the radio button accessible.
 *
 * The element is automatically styled correctly, as long as the core styles (in particular
 * `inspectorCommon.css` is injected into the current document / shadow root). The lit
 * equivalent of calling this method is:
 *
 * ```js
 * const jslog = VisualLogging.toggle().track({change: true}).context(jslogContext);
 * html`<label><input type="radio" name=${name} jslog=${jslog}>${title}</label>`
 * ```
 *
 * @param name the name of the radio group.
 * @param title the label text for the radio button.
 * @param jslogContext the context string for the `jslog` attribute.
 * @returns the pair of `HTMLLabelElement` and `HTMLInputElement`.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
 */
declare function createRadioButton(name: string, title: string, jslogContext: string): {
    label: HTMLLabelElement;
    radio: HTMLInputElement;
};
/**
 * Creates an `<input type="range">` element with the specified parameters (a slider)
 * and a `step` of 1 (the default for the element).
 *
 * The element is automatically styled correctly, as long as the core styles (in particular
 * `inspectorCommon.css` is injected into the current document / shadow root). The lit
 * equivalent of calling this method is:
 *
 * ```js
 * html`<input type="range" min=${min} max=${max} tabindex=${tabIndex}>`
 * ```
 *
 * @param min the minimum allowed value.
 * @param max the maximum allowed value.
 * @param tabIndex the value for the `tabindex` attribute.
 * @returns the newly created `HTMLInputElement` for the slider.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
 */
declare function createSlider(min: number, max: number, tabIndex: number): HTMLInputElement;
declare function setTitle(element: HTMLElement, title: string): void;
export declare class CheckboxLabel extends HTMLElement {
    #private;
    static readonly observedAttributes: string[];
    constructor();
    static create(title?: Platform.UIString.LocalizedString, checked?: boolean, subtitle?: Platform.UIString.LocalizedString, jslogContext?: string, small?: boolean): CheckboxLabel;
    attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void;
    get checked(): boolean;
    set checked(checked: boolean);
    set disabled(disabled: boolean);
    get disabled(): boolean;
    set indeterminate(indeterminate: boolean);
    get indeterminate(): boolean;
    set name(name: string);
    get name(): string;
    click(): void;
    /** Only to be used when the checkbox label is 'generated' (a regex, a className, etc). Most checkboxes should be create()'d with UIStrings */
    static createWithStringLiteral(title?: string, checked?: boolean, jslogContext?: string, small?: boolean): CheckboxLabel;
    private static lastId;
}
class DevToolsIconLabel extends HTMLElement {
    #private;
    constructor();
    set data(data: IconButton.Icon.IconData);
}
class DevToolsSmallBubble extends HTMLElement {
    private textElement;
    constructor();
    set type(type: string);
}
class DevToolsCloseButton extends HTMLElement {
    #private;
    constructor();
    setAccessibleName(name: string): void;
    setSize(size: Buttons.Button.Size): void;
    setTabbable(tabbable: boolean): void;
}
declare function bindInput(input: HTMLInputElement, apply: (arg0: string) => void, validate: (arg0: string) => {
    valid: boolean;
    errorMessage: (string | undefined);
}, numeric: boolean, modifierMultiplier?: number): (arg0: string) => void;
declare function trimText(context: CanvasRenderingContext2D, text: string, maxWidth: number, trimFunction: (arg0: string, arg1: number) => string): string;
declare function trimTextMiddle(context: CanvasRenderingContext2D, text: string, maxWidth: number): string;
declare function trimTextEnd(context: CanvasRenderingContext2D, text: string, maxWidth: number): string;
declare function measureTextWidth(context: CanvasRenderingContext2D, text: string): number;
declare function loadImage(url: string): Promise<HTMLImageElement | null>;
/**
 * Creates a file selector element.
 * @param callback - the function that will be called with the file the user selected
 * @param accept - optionally used to set the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept) parameter to limit file-types the user can pick.
 */
declare function createFileSelectorElement(callback: (arg0: File) => void, accept?: string): HTMLInputElement;
const MaxLengthForDisplayedURLs = 150;
class MessageDialog {
    static show(header: string, message: string, where?: Element | Document, jslogContext?: string): Promise<void>;
}
class ConfirmDialog {
    static show(message: string, header?: string, where?: Element | Document, options?: ConfirmDialogOptions): Promise<boolean>;
}
declare function createInlineButton(toolbarButton: ToolbarButton): Element;
class Renderer {
    abstract render(object: Object, options?: Options): Promise<{
        node: Node;
        tree: TreeOutline | null;
    } | null>;
    static render(object: Object, options?: Options): Promise<{
        node: Node;
        tree: TreeOutline | null;
    } | null>;
}
declare function formatTimestamp(timestamp: number, full: boolean): string;
interface Options {
    title?: string | Element;
    editable?: boolean;
}
interface HighlightChange {
    node: Element | Text;
    type: string;
    oldText?: string;
    newText?: string;
    nextSibling?: Node;
    parent?: Node;
}
const isScrolledToBottom: (element: Element) => boolean;
declare function createSVGChild(element: Element, childType: string, className?: string): Element;
const enclosingNodeOrSelfWithNodeNameInArray: (initialNode: Node, nameArray: string[]) => Node | null;
const enclosingNodeOrSelfWithNodeName: (node: Node, nodeName: string) => Node | null;
const deepElementFromPoint: (document: Document | ShadowRoot | null | undefined, x: number, y: number) => Node | null;
const deepElementFromEvent: (ev: Event) => Node | null;
declare function registerRenderer(registration: RendererRegistration): void;
declare function getApplicableRegisteredRenderers(object: Object): RendererRegistration[];
interface RendererRegistration {
    loadRenderer: () => Promise<Renderer>;
    contextTypes: () => Array<Platform.Constructor.ConstructorOrAbstract<unknown>>;
}
interface ConfirmDialogOptions {
    okButtonLabel?: string;
    cancelButtonLabel?: string;
    jslogContext?: string;
}
declare function injectCoreStyles(elementOrShadowRoot: Element | ShadowRoot): void;
/**
 * Creates a new shadow DOM tree with the core styles and an optional list of
 * additional styles, and attaches it to the specified `element`.
 *
 * @param element the `Element` to attach the shadow DOM tree to.
 * @param options optional additional style sheets and options for `Element#attachShadow()`.
 * @returns the newly created `ShadowRoot`.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
 */
declare function createShadowRootWithCoreStyles(element: Element, options?: {
    cssFile?: Array<{
        cssText: string;
    }> | {
        cssText: string;
    };
    delegatesFocus?: boolean;
}): ShadowRoot;
declare function resetMeasuredScrollbarWidthForTest(): void;
declare function measuredScrollbarWidth(document?: Document | null): number;
/**
 * Opens the given `url` in a new Chrome tab.
 *
 * If the `url` is a Google owned documentation page (currently that includes
 * `web.dev`, `developers.google.com`, and `developer.chrome.com`), the `url`
 * will also be checked for UTM parameters:
 *
 * - If no `utm_source` search parameter is present, this method will add a new
 *   search parameter `utm_source=devtools` to `url`.
 * - If no `utm_campaign` search parameter is present, and DevTools is running
 *   within a branded build, this method will add `utm_campaign=<channel>` to
 *   the search parameters, with `<channel>` being the release channel of
 *   Chrome ("stable", "beta", "dev", or "canary").
 *
 * @param url the URL to open in a new tab.
 * @throws TypeError if `url` is not a valid URL.
 * @see https://en.wikipedia.org/wiki/UTM_parameters
 */
declare function openInNewTab(url: URL | string): void;
