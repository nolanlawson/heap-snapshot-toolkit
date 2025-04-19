import '../../../ui/legacy/legacy.js';
import * as Platform from '../../../core/platform/platform.js';
import type * as Protocol from '../../../generated/protocol.js';
import type { EditableSpan } from './EditableSpan.js';
const isValidHeaderName: (headerName: string) => boolean;
const compareHeaders: (first: string | null | undefined, second: string | null | undefined) => boolean;
class HeaderEditedEvent extends Event {
    static readonly eventName = "headeredited";
    headerName: Platform.StringUtilities.LowerCaseString;
    headerValue: string;
    constructor(headerName: Platform.StringUtilities.LowerCaseString, headerValue: string);
}
class HeaderRemovedEvent extends Event {
    static readonly eventName = "headerremoved";
    headerName: Platform.StringUtilities.LowerCaseString;
    headerValue: string;
    constructor(headerName: Platform.StringUtilities.LowerCaseString, headerValue: string);
}
class EnableHeaderEditingEvent extends Event {
    static readonly eventName = "enableheaderediting";
    constructor();
}
interface HeaderSectionRowData {
    header: HeaderDescriptor;
}
class HeaderSectionRow extends HTMLElement {
    #private;
    connectedCallback(): void;
    set data(data: HeaderSectionRowData);
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-header-section-row': HeaderSectionRow;
        'devtools-editable-span': EditableSpan;
    }
    interface HTMLElementEventMap {
        [HeaderEditedEvent.eventName]: HeaderEditedEvent;
    }
}
interface BlockedDetailsDescriptor {
    explanation: () => string;
    examples: Array<{
        codeSnippet: string;
        comment?: () => string;
    }>;
    link: {
        url: string;
    } | null;
    reveal?: () => void;
}
declare const enum EditingAllowedStatus {
    DISABLED = 0,// Local overrides are currently disabled.
    ENABLED = 1,// The header is free to be edited.
    FORBIDDEN = 2
}
export interface HeaderDetailsDescriptor {
    name: Platform.StringUtilities.LowerCaseString;
    value: string | null;
    headerValueIncorrect?: boolean;
    blockedDetails?: BlockedDetailsDescriptor;
    headerNotSet?: boolean;
    setCookieBlockedReasons?: Protocol.Network.SetCookieBlockedReason[];
    highlight?: boolean;
    isResponseHeader?: boolean;
}
interface HeaderEditorDescriptor {
    name: Platform.StringUtilities.LowerCaseString;
    value: string | null;
    originalName?: string | null;
    originalValue?: string | null;
    isOverride?: boolean;
    valueEditable: EditingAllowedStatus;
    nameEditable?: boolean;
    isDeleted?: boolean;
}
type HeaderDescriptor = HeaderDetailsDescriptor & HeaderEditorDescriptor;
