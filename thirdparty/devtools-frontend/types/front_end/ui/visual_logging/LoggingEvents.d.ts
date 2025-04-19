import * as Common from '../../core/common/common.js';
import type { Loggable } from './Loggable.js';
export declare function logImpressions(loggables: Loggable[]): Promise<void>;
const logResize: (loggable: Loggable, size: DOMRect) => void;
const logClick: (throttler: Common.Throttler.Throttler) => (loggable: Loggable, event: Event, options?: {
    doubleClick?: boolean;
}) => void;
const logHover: (throttler: Common.Throttler.Throttler) => (event: Event) => Promise<void>;
const logDrag: (throttler: Common.Throttler.Throttler) => (event: Event) => Promise<void>;
declare function logChange(loggable: Loggable): Promise<void>;
const logKeyDown: (throttler: Common.Throttler.Throttler) => (loggable: Loggable | null, event: Event | null, context?: string) => Promise<void>;
declare function contextAsNumber(context: string | undefined): Promise<number | undefined>;
export declare function logSettingAccess(name: string, value: number | string | boolean): Promise<void>;
