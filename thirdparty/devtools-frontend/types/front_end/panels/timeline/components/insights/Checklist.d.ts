/**
 * @fileoverview A list of pass/fail conditions for an insight.
 */
import '../../../../ui/components/icon_button/icon_button.js';
import type * as Trace from '../../../../models/trace/trace.js';
type GenericChecklist = Trace.Insights.Types.Checklist<any>;
class Checklist extends HTMLElement {
    #private;
    set checklist(checklist: GenericChecklist);
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-performance-checklist': Checklist;
    }
}
export {};
