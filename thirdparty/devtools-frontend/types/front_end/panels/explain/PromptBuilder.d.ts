import * as SDK from '../../core/sdk/sdk.js';
import type * as Console from '../console/console.js';
declare enum SourceType {
    MESSAGE = "message",
    STACKTRACE = "stacktrace",
    NETWORK_REQUEST = "networkRequest",
    RELATED_CODE = "relatedCode"
}
export interface Source {
    type: SourceType;
    value: string;
}
export declare class PromptBuilder {
    #private;
    constructor(consoleMessage: Console.ConsoleViewMessage.ConsoleViewMessage);
    getNetworkRequest(): Promise<SDK.NetworkRequest.NetworkRequest | undefined>;
    /**
     * Gets the source file associated with the top of the message's stacktrace.
     * Returns an empty string if the source is not available for any reasons.
     */
    getMessageSourceCode(): Promise<{
        text: string;
        columnNumber: number;
        lineNumber: number;
    }>;
    buildPrompt(sourcesTypes?: SourceType[]): Promise<{
        prompt: string;
        sources: Source[];
        isPageReloadRecommended: boolean;
    }>;
    formatPrompt({ message, relatedCode, relatedRequest }: {
        message: string;
        relatedCode: string;
        relatedRequest: string;
    }): string;
    getSearchQuery(): string;
}
declare function allowHeader(header: SDK.NetworkRequest.NameValue): boolean;
declare function lineWhitespace(line: string): string | null;
declare function formatRelatedCode({ text, columnNumber, lineNumber }: {
    text: string;
    columnNumber: number;
    lineNumber: number;
}, maxCodeSize?: number): string;
declare function formatNetworkRequest(request: Pick<SDK.NetworkRequest.NetworkRequest, 'url' | 'requestHeaders' | 'responseHeaders' | 'statusCode' | 'statusText'>): string;
declare function formatConsoleMessage(message: Console.ConsoleViewMessage.ConsoleViewMessage): string;
/**
 * This formats the stacktrace from the console message which might or might not
 * match the content of stacktrace(s) in the console message arguments.
 */
declare function formatStackTrace(message: Console.ConsoleViewMessage.ConsoleViewMessage): string;
