import type { Loggable } from './Loggable.js';
import { type LoggingConfig } from './LoggingConfig.js';
import { type LoggingState } from './LoggingState.js';
export declare function setVeDebuggingEnabled(enabled: boolean, inspect?: (query: string) => void): void;
declare function processForDebugging(loggable: Loggable): void;
type EventType = 'Click' | 'Drag' | 'Hover' | 'Change' | 'KeyDown' | 'Resize' | 'SettingAccess';
declare function processEventForDebugging(event: EventType, state: LoggingState | null, extraInfo?: EventAttributes): void;
declare function processEventForIntuitiveDebugging(event: EventType, state: LoggingState | null, extraInfo?: EventAttributes): void;
declare function processEventForTestDebugging(event: EventType, state: LoggingState | null, _extraInfo?: EventAttributes): void;
declare function processEventForAdHocAnalysisDebugging(event: EventType, state: LoggingState | null, extraInfo?: EventAttributes): void;
interface EventAttributes {
    context?: string;
    width?: number;
    height?: number;
    mouseButton?: number;
    doubleClick?: boolean;
    name?: string;
    numericValue?: number;
    stringValue?: string;
}
type TestLogEntry = {
    impressions: string[];
} | {
    interaction: string;
};
declare function processImpressionsForDebugging(states: LoggingState[]): void;
declare function debugString(config: LoggingConfig): string;
export declare const enum DebugLoggingFormat {
    INTUITIVE = "Intuitive",
    TEST = "Test",
    AD_HOC_ANALYSIS = "AdHocAnalysis"
}
export declare function setVeDebugLoggingEnabled(enabled: boolean, format?: DebugLoggingFormat): void;
declare function processStartLoggingForDebugging(): void;
declare function expectVeEvents(expectedEvents: TestLogEntry[]): Promise<void>;
