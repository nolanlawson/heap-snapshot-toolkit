import '../../../ui/components/icon_button/icon_button.js';
import './ExtensionView.js';
import './ControlButton.js';
import './ReplaySection.js';
import type * as PublicExtensions from '../../../models/extensions/extensions.js';
import type * as Converters from '../converters/converters.js';
import type * as Extensions from '../extensions/extensions.js';
import * as Models from '../models/models.js';
declare global {
    interface HTMLElementTagNameMap {
        'devtools-recording-view': RecordingView;
    }
}
interface ReplayState {
    isPlaying: boolean;
    isPausedOnBreakpoint: boolean;
}
interface RecordingViewData {
    replayState: ReplayState;
    isRecording: boolean;
    recordingTogglingInProgress: boolean;
    recording: Models.Schema.UserFlow;
    currentStep?: Models.Schema.Step;
    currentError?: Error;
    sections: Models.Section.Section[];
    settings?: Models.RecordingSettings.RecordingSettings;
    recorderSettings?: Models.RecorderSettings.RecorderSettings;
    lastReplayResult?: Models.RecordingPlayer.ReplayResult;
    replayAllowed: boolean;
    breakpointIndexes: Set<number>;
    builtInConverters: Converters.Converter.Converter[];
    extensionConverters: Converters.Converter.Converter[];
    replayExtensions: Extensions.ExtensionManager.Extension[];
    extensionDescriptor?: PublicExtensions.RecorderPluginManager.ViewDescriptor;
}
class RecordingView extends HTMLElement {
    #private;
    constructor();
    set data(data: RecordingViewData);
    connectedCallback(): void;
    disconnectedCallback(): void;
    scrollToBottom(): void;
    showCodeToggle: () => void;
}
export {};
