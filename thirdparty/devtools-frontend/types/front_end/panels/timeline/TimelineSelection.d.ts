import * as Trace from '../../models/trace/trace.js';
interface EventSelection {
    event: Trace.Types.Events.Event;
}
interface TimeRangeSelection {
    bounds: Trace.Types.Timing.TraceWindowMicro;
}
export type TimelineSelection = EventSelection | TimeRangeSelection;
declare function selectionFromEvent(event: Trace.Types.Events.Event): EventSelection;
declare function selectionFromRangeMicroSeconds(min: Trace.Types.Timing.Micro, max: Trace.Types.Timing.Micro): TimeRangeSelection;
declare function selectionFromRangeMilliSeconds(min: Trace.Types.Timing.Milli, max: Trace.Types.Timing.Milli): TimeRangeSelection;
declare function selectionIsEvent(selection: TimelineSelection | null): selection is EventSelection;
declare function selectionIsRange(selection: TimelineSelection | null): selection is TimeRangeSelection;
declare function rangeForSelection(selection: TimelineSelection): Trace.Types.Timing.TraceWindowMicro;
declare function selectionsEqual(s1: TimelineSelection, s2: TimelineSelection): boolean;
