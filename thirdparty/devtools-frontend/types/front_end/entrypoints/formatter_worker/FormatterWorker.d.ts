import { type FormatResult } from './FormatterActions.js';
interface Chunk {
    chunk: any[];
    isLastChunk: boolean;
}
export type ChunkCallback = (arg0: Chunk) => void;
declare function createTokenizer(mimeType: string): (arg0: string, arg1: (arg0: string, arg1: string | null, arg2: number, arg3: number) => (Object | undefined | void)) => void;
const AbortTokenization: {};
declare function evaluatableJavaScriptSubstring(content: string): string;
declare function format(mimeType: string, text: string, indentString?: string): FormatResult;
