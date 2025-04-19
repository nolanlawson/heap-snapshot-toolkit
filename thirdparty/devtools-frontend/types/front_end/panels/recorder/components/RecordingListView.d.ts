import '../../../ui/components/icon_button/icon_button.js';
declare global {
    interface HTMLElementTagNameMap {
        'devtools-recording-list-view': RecordingListView;
    }
    interface HTMLElementEventMap {
        openrecording: OpenRecordingEvent;
        deleterecording: DeleteRecordingEvent;
    }
}
class DeleteRecordingEvent extends Event {
    storageName: string;
    static readonly eventName = "deleterecording";
    constructor(storageName: string);
}
class OpenRecordingEvent extends Event {
    storageName: string;
    static readonly eventName = "openrecording";
    constructor(storageName: string);
}
interface Recording {
    storageName: string;
    name: string;
}
class RecordingListView extends HTMLElement {
    #private;
    constructor();
    connectedCallback(): void;
    set recordings(recordings: Recording[]);
    set replayAllowed(value: boolean);
}
export {};
