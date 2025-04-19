import type * as Common from '../../core/common/common.js';
import type * as Platform from '../../core/platform/platform.js';
import type { ContentDataOrError } from './ContentData.js';
import type { StreamingContentDataOrError } from './StreamingContentData.js';
import type { WasmDisassembly } from './WasmDisassembly.js';
interface ContentProvider {
    contentURL(): Platform.DevToolsPath.UrlString;
    contentType(): Common.ResourceType.ResourceType;
    /** @deprecated Prefer {@link requestContentData} instead */
    requestContent(): Promise<DeferredContent>;
    requestContentData(): Promise<ContentDataOrError>;
    searchInContent(query: string, caseSensitive: boolean, isRegex: boolean): Promise<SearchMatch[]>;
}
class SearchMatch {
    readonly lineNumber: number;
    readonly lineContent: string;
    readonly columnNumber: number;
    readonly matchLength: number;
    constructor(lineNumber: number, lineContent: string, columnNumber: number, matchLength: number);
    static comparator(a: SearchMatch, b: SearchMatch): number;
}
const contentAsDataURL: (content: string | null, mimeType: string, contentEncoded: boolean, charset?: string | null, limitSize?: boolean) => string | null;
export type DeferredContent = {
    content: string;
    isEncoded: boolean;
} | {
    content: '';
    isEncoded: false;
    wasmDisassemblyInfo: WasmDisassembly;
} | {
    content: null;
    error: string;
    isEncoded: boolean;
};
interface StreamingContentProvider extends ContentProvider {
    requestStreamingContent(): Promise<StreamingContentDataOrError>;
}
const isStreamingContentProvider: (provider: ContentProvider) => provider is StreamingContentProvider;
