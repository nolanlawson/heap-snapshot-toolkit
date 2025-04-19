import type { ElementHandle, Page } from 'puppeteer-core';
import type { UserFlow } from '../../../front_end/panels/recorder/models/Schema.js';
import type * as Recorder from '../../../front_end/panels/recorder/recorder.js';
export declare function getRecordingController(): Promise<ElementHandle<Recorder.RecorderController.RecorderController>>;
export declare function onRecordingStateChanged(): Promise<unknown>;
export declare function onRecorderAttachedToTarget(): Promise<unknown>;
export declare function onReplayFinished(): Promise<unknown>;
export declare function enableUntrustedEventMode(): Promise<void>;
export declare function enableAndOpenRecorderPanel(path: string): Promise<void>;
export declare function createAndStartRecording(name?: string, selectorAttribute?: string): Promise<void>;
export declare function changeNetworkConditions(condition: string): Promise<void>;
export declare function openRecorderPanel(): Promise<void>;
interface StartRecordingOptions {
    networkCondition?: string;
    untrustedEvents?: boolean;
    selectorAttribute?: string;
}
export declare function startRecording(path: string, options?: StartRecordingOptions): Promise<void>;
export declare function stopRecording(): Promise<unknown>;
interface RecordingSnapshotOptions {
    /**
     * Whether to keep the offsets for recording or not.
     *
     * @defaultValue `false`
     */
    offsets?: boolean;
    /**
     * @defaultValue `true`
     */
    expectCommon?: boolean;
    resource?: string;
}
export declare const processAndVerifyBaseRecording: (recording: unknown, options?: RecordingSnapshotOptions) => any;
export declare function clickSelectButtonItem(itemLabel: string, root: string): Promise<void>;
export declare function setupRecorderWithScript(script: UserFlow, path?: string): Promise<void>;
export declare function setupRecorderWithScriptAndReplay(script: UserFlow, path?: string): Promise<void>;
export declare function getCurrentRecording(): Promise<any>;
export declare function startOrStopRecordingShortcut(execute?: 'page' | 'frontend'): Promise<unknown>;
export declare function fillCreateRecordingForm(path: string): Promise<void>;
export declare function startRecordingViaShortcut(path: string): Promise<void>;
export declare function replayShortcut(): Promise<void>;
export declare function toggleCodeView(): Promise<void>;
export declare function raf(page: Page): Promise<void>;
export {};
