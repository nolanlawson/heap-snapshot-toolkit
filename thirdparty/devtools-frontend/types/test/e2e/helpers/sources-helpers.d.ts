import type * as puppeteer from 'puppeteer-core';
import type { DevToolsPage } from '../../e2e_non_hosted/shared/frontend-helper.js';
export declare const ACTIVE_LINE = ".CodeMirror-activeline > pre > span";
export declare const PAUSE_BUTTON = "[aria-label=\"Pause script execution\"]";
export declare const RESUME_BUTTON = "[aria-label=\"Resume script execution\"]";
export declare const SOURCES_LINES_SELECTOR = ".CodeMirror-code > div";
export declare const PAUSE_INDICATOR_SELECTOR = ".paused-status";
export declare const CODE_LINE_COLUMN_SELECTOR = ".cm-lineNumbers";
export declare const CODE_LINE_SELECTOR = ".cm-lineNumbers .cm-gutterElement";
export declare const SCOPE_LOCAL_VALUES_SELECTOR = "li[aria-label=\"Local\"] + ol";
export declare const THREADS_SELECTOR = "[aria-label=\"Threads\"]";
export declare const SELECTED_THREAD_SELECTOR = "div.thread-item.selected > div.thread-item-title";
export declare const STEP_INTO_BUTTON = "[aria-label=\"Step into next function call\"]";
export declare const STEP_OVER_BUTTON = "[aria-label=\"Step over next function call\"]";
export declare const STEP_OUT_BUTTON = "[aria-label=\"Step out of current function\"]";
export declare const TURNED_ON_PAUSE_BUTTON_SELECTOR = "button.toolbar-state-on";
export declare const DEBUGGER_PAUSED_EVENT = "DevTools.DebuggerPaused";
export declare const OVERRIDES_TAB_SELECTOR = "[aria-label=\"Overrides\"]";
export declare const ENABLE_OVERRIDES_SELECTOR = "[aria-label=\"Select folder for overrides\"]";
export declare const PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR = ".pause-on-uncaught-exceptions";
export declare const BREAKPOINT_ITEM_SELECTOR = ".breakpoint-item";
export declare function toggleNavigatorSidebar(frontend: puppeteer.Page): Promise<void>;
export declare function toggleDebuggerSidebar(frontend: puppeteer.Page): Promise<void>;
export declare function getLineNumberElement(lineNumber: number | string): Promise<puppeteer.ElementHandle<Element> | null>;
export declare function doubleClickSourceTreeItem(selector: string): Promise<void>;
export declare function waitForSourcesPanel(devToolsPage?: DevToolsPage): Promise<void>;
export declare function openSourcesPanel(devToolsPage?: DevToolsPage): Promise<void>;
export declare function openFileInSourcesPanel(testInput: string): Promise<void>;
export declare function openRecorderSubPane(): Promise<void>;
export declare function createNewRecording(recordingName: string): Promise<void>;
export declare function openSnippetsSubPane(): Promise<void>;
/**
 * Creates a new snippet, optionally pre-filling it with the provided content.
 * `snippetName` must not contain spaces or special characters, otherwise
 * `createNewSnippet` will time out.
 * DevTools uses the escaped snippet name for the ARIA label. `createNewSnippet`
 * doesn't mirror the escaping so it won't be able to wait for the snippet
 * entry in the navigation tree to appear.
 */
export declare function createNewSnippet(snippetName: string, content?: string): Promise<void>;
export declare function openWorkspaceSubPane(): Promise<void>;
export declare function openOverridesSubPane(): Promise<void>;
export declare function openFileInEditor(sourceFile: string): Promise<void>;
export declare function openSourceCodeEditorForFile(sourceFile: string, testInput: string): Promise<void>;
export declare function getSelectedSource(): Promise<string>;
export declare function getBreakpointHitLocation(): Promise<string>;
export declare function getOpenSources(devToolsPage?: DevToolsPage): Promise<(string | null)[]>;
export declare function waitForHighlightedLine(lineNumber: number): Promise<void>;
export declare function getToolbarText(): Promise<(string | null)[]>;
export declare function addBreakpointForLine(index: number | string): Promise<void>;
export declare function removeBreakpointForLine(index: number | string): Promise<void>;
export declare function addLogpointForLine(index: number, condition: string): Promise<void>;
export declare function isBreakpointSet(lineNumber: number | string): Promise<boolean | undefined>;
/**
 * @param lineNumber 1-based line number
 * @param index 1-based index of the inline breakpoint in the given line
 */
export declare function enableInlineBreakpointForLine(line: number, index: number): Promise<void>;
/**
 * @param lineNumber 1-based line number
 * @param index 1-based index of the inline breakpoint in the given line
 * @param expectNoBreakpoint If we should wait for the line to not have any inline breakpoints after
 *                           the click instead of a disabled one.
 */
export declare function disableInlineBreakpointForLine(line: number, index: number, expectNoBreakpoint?: boolean): Promise<void>;
export declare function checkBreakpointDidNotActivate(): Promise<void>;
export declare function getBreakpointDecorators(disabledOnly?: boolean): Promise<number[]>;
export declare function getNonBreakableLines(): Promise<number[]>;
export declare function executionLineHighlighted(): Promise<puppeteer.ElementHandle<Element>>;
export declare function getCallFrameNames(): Promise<string[]>;
export declare function getCallFrameLocations(): Promise<string[]>;
export declare function switchToCallFrame(index: number): Promise<void>;
export declare function retrieveTopCallFrameScriptLocation(script: string, target: puppeteer.Page): Promise<string | null>;
export declare function retrieveTopCallFrameWithoutResuming(): Promise<string | null>;
export declare function waitForStackTopMatch(matcher: RegExp): Promise<string>;
export declare function setEventListenerBreakpoint(groupName: string, eventName: string): Promise<void>;
declare global {
    interface Window {
        __sourceFileEvents: Map<number, {
            files: string[];
            handler: (e: Event) => void;
        }>;
    }
}
export declare const enum SourceFileEvents {
    SOURCE_FILE_LOADED = "source-file-loaded",
    ADDED_TO_SOURCE_TREE = "source-tree-file-added"
}
export declare function waitForSourceFiles<T>(eventName: SourceFileEvents, waitCondition: (files: string[]) => boolean | Promise<boolean>, action: () => T): Promise<T>;
export declare function captureAddedSourceFiles(count: number, action: () => Promise<void>): Promise<string[]>;
export declare function reloadPageAndWaitForSourceFile(target: puppeteer.Page, sourceFile: string): Promise<void>;
export declare function isEqualOrAbbreviation(abbreviated: string, full: string): boolean;
export interface NestedFileSelector {
    rootSelector: string;
    domainSelector: string;
    folderSelector?: string;
    fileSelector: string;
}
export declare function createSelectorsForWorkerFile(workerName: string, folderName: string, fileName: string, workerIndex?: number): NestedFileSelector;
export declare function expandSourceTreeItem(selector: string): Promise<void>;
export declare function expandFileTree(selectors: NestedFileSelector): Promise<puppeteer.ElementHandle<Element>>;
export declare function readSourcesTreeView(): Promise<string[]>;
export declare function readIgnoreListedSources(): Promise<string[]>;
export declare function stepThroughTheCode(): Promise<void>;
export declare function stepIn(): Promise<void>;
export declare function stepOver(): Promise<void>;
export declare function stepOut(): Promise<void>;
export declare function openNestedWorkerFile(selectors: NestedFileSelector): Promise<void>;
export declare function inspectMemory(variableName: string): Promise<void>;
export declare function typeIntoSourcesAndSave(text: string): Promise<void>;
export declare function getScopeNames(): Promise<(string | null)[]>;
export declare function getValuesForScope(scope: string, expandCount: number, waitForNoOfValues: number): Promise<string[]>;
export declare function getPausedMessages(): Promise<{
    statusMain: string | null;
    statusSub: string | null;
}>;
export declare function getWatchExpressionsValues(): Promise<string[] | null>;
export declare function runSnippet(): Promise<void>;
export declare function evaluateSelectedTextInConsole(): Promise<void>;
export declare function addSelectedTextToWatches(): Promise<void>;
export declare function enableLocalOverrides(): Promise<void>;
export interface LabelMapping {
    label: string;
    moduleOffset: number;
    bytecode: number;
    sourceLine: number;
    labelLine: number;
    labelColumn: number;
}
export declare class WasmLocationLabels {
    #private;
    constructor(source: string, wasm: string, mappings: Map<string, LabelMapping[]>);
    static load(source: string, wasm: string): WasmLocationLabels;
    checkLocationForLabel(label: string): Promise<LabelMapping>;
    addBreakpointsForLabelInSource(label: string): Promise<void>;
    addBreakpointsForLabelInWasm(label: string): Promise<void>;
    setBreakpointInSourceAndRun(label: string, script: string): Promise<void>;
    setBreakpointInWasmAndRun(label: string, script: string): Promise<void>;
    continueAndCheckForLabel(label: string): Promise<void>;
    getMappingsForPlugin(): LabelMapping[];
}
export declare function retrieveCodeMirrorEditorContent(): Promise<string[]>;
export declare function waitForLines(lineCount: number): Promise<void>;
export declare function isPrettyPrinted(): Promise<boolean>;
export declare function veImpressionForSourcesPanel(): {
    impressions: string[];
};
