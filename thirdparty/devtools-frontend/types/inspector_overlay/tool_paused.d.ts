import { Overlay } from './common.js';
export type PausedToolMessage = 'resume' | 'stepOver';
class PausedOverlay extends Overlay {
    private container;
    constructor(window: Window, style?: CSSStyleSheet[]);
    onKeyDown(event: KeyboardEvent): void;
    install(): void;
    uninstall(): void;
    drawPausedInDebuggerMessage(message: string): void;
}
