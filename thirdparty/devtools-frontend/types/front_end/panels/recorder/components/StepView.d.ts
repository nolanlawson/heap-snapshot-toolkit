import '../../../ui/components/icon_button/icon_button.js';
import './StepEditor.js';
import './TimelineSection.js';
import * as Menus from '../../../ui/components/menus/menus.js';
import * as UI from '../../../ui/legacy/legacy.js';
import type * as Converters from '../converters/converters.js';
import * as Models from '../models/models.js';
import type { StepEditedEvent } from './StepEditor.js';
declare global {
    interface HTMLElementTagNameMap {
        'devtools-step-view': StepView;
    }
}
declare const enum State {
    DEFAULT = "default",
    SUCCESS = "success",
    CURRENT = "current",
    OUTSTANDING = "outstanding",
    ERROR = "error",
    STOPPED = "stopped"
}
interface StepViewData {
    state: State;
    step?: Models.Schema.Step;
    section?: Models.Section.Section;
    error?: Error;
    hasBreakpoint: boolean;
    isEndOfGroup: boolean;
    isStartOfGroup: boolean;
    isFirstSection: boolean;
    isLastSection: boolean;
    stepIndex: number;
    sectionIndex: number;
    isRecording: boolean;
    isPlaying: boolean;
    removable: boolean;
    builtInConverters: Converters.Converter.Converter[];
    extensionConverters: Converters.Converter.Converter[];
    isSelected: boolean;
    recorderSettings?: Models.RecorderSettings.RecorderSettings;
}
interface Action {
    id: string;
    label: string;
    group: string;
    groupTitle: string;
    jslogContext?: string;
}
interface ViewInput extends StepViewData {
    step?: Models.Schema.Step;
    section?: Models.Section.Section;
    state: State;
    error?: Error;
    showDetails: boolean;
    isEndOfGroup: boolean;
    isStartOfGroup: boolean;
    stepIndex: number;
    sectionIndex: number;
    isFirstSection: boolean;
    isLastSection: boolean;
    isRecording: boolean;
    isPlaying: boolean;
    isVisible: boolean;
    hasBreakpoint: boolean;
    removable: boolean;
    builtInConverters: Converters.Converter.Converter[];
    extensionConverters: Converters.Converter.Converter[];
    isSelected: boolean;
    recorderSettings?: Models.RecorderSettings.RecorderSettings;
    actions: Action[];
    stepEdited: (event: StepEditedEvent) => void;
    onBreakpointClick: () => void;
    handleStepAction: (event: Menus.Menu.MenuItemSelectedEvent) => void;
    toggleShowDetails: () => void;
    onToggleShowDetailsKeydown: (event: Event) => void;
    populateStepContextMenu: (contextMenu: UI.ContextMenu.ContextMenu) => void;
}
type ViewOutput = unknown;
declare function viewFunction(input: ViewInput, _output: ViewOutput, target: HTMLElement | ShadowRoot): void;
class StepView extends HTMLElement {
    #private;
    constructor(view?: typeof viewFunction);
    set data(data: StepViewData);
    get step(): Models.Schema.Step | undefined;
    get section(): Models.Section.Section | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export {};
