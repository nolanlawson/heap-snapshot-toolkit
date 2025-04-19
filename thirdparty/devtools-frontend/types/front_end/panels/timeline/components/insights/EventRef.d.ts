import * as Trace from '../../../../models/trace/trace.js';
class EventReferenceClick extends Event {
    event: Trace.Types.Events.Event;
    static readonly eventName = "eventreferenceclick";
    constructor(event: Trace.Types.Events.Event);
}
declare class EventRef extends HTMLElement {
    #private;
    set text(text: string);
    set event(event: Trace.Types.Events.Event);
}
declare class ImageRef extends HTMLElement {
    #private;
    set request(request: Trace.Types.Events.SyntheticNetworkRequest);
}
declare global {
    interface GlobalEventHandlersEventMap {
        [EventReferenceClick.eventName]: EventReferenceClick;
    }
    interface HTMLElementTagNameMap {
        'devtools-performance-event-ref': EventRef;
        'devtools-performance-image-ref': ImageRef;
    }
}
export {};
