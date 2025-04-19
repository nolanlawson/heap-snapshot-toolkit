import * as Common from '../../core/common/common.js';
import * as TextEditor from '../../ui/components/text_editor/text_editor.js';
import * as UI from '../../ui/legacy/legacy.js';
declare const ConsolePrompt_base: {
    new (...args: any[]): {
        "__#15@#events": Common.ObjectWrapper.ObjectWrapper<EventTypes>;
        addEventListener<T extends Events.TEXT_CHANGED>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T], any>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<EventTypes, T>;
        once<T_1 extends Events.TEXT_CHANGED>(eventType: T_1): Promise<EventTypes[T_1]>;
        removeEventListener<T_2 extends Events.TEXT_CHANGED>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<EventTypes[T_2], any>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: Events.TEXT_CHANGED): boolean;
        dispatchEventToListeners<T_3 extends Events.TEXT_CHANGED>(eventType: import("../../core/platform/TypescriptUtilities.js").NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<EventTypes, T_3>): void;
    };
} & typeof UI.Widget.Widget;
export declare class ConsolePrompt extends ConsolePrompt_base {
    #private;
    private addCompletionsFromHistory;
    private historyInternal;
    private initialText;
    private editor;
    private readonly eagerPreviewElement;
    private textChangeThrottler;
    private requestPreviewBound;
    private requestPreviewCurrent;
    private readonly innerPreviewElement;
    private readonly promptIcon;
    private readonly iconThrottler;
    private readonly eagerEvalSetting;
    protected previewRequestForTest: Promise<void> | null;
    private highlightingNode;
    constructor();
    private eagerSettingChanged;
    belowEditorElement(): Element;
    private onTextChanged;
    private requestPreview;
    willHide(): void;
    history(): TextEditor.AutocompleteHistory.AutocompleteHistory;
    clearAutocomplete(): void;
    moveCaretToEndOfPrompt(): void;
    clear(): void;
    text(): string;
    setAddCompletionsFromHistory(value: boolean): void;
    private editorKeymap;
    private enterWillEvaluate;
    showSelfXssWarning(): void;
    private handleEnter;
    private updatePromptIcon;
    private appendCommand;
    private evaluateCommandInConsole;
    private substituteNames;
    private editorUpdate;
    focus(): void;
    private editorSetForTest;
}
export declare const enum Events {
    TEXT_CHANGED = "TextChanged"
}
export interface EventTypes {
    [Events.TEXT_CHANGED]: void;
}
export {};
