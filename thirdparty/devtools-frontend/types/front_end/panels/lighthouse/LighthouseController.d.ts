import * as Common from '../../core/common/common.js';
import * as Host from '../../core/host/host.js';
import type * as Platform from '../../core/platform/platform.js';
import * as SDK from '../../core/sdk/sdk.js';
import type { LighthouseRun, ProtocolService } from './LighthouseProtocolService.js';
import type { RunnerResult } from './LighthouseReporterTypes.js';
export declare class LighthouseController extends Common.ObjectWrapper.ObjectWrapper<EventTypes> implements SDK.TargetManager.SDKModelObserver<SDK.ServiceWorkerManager.ServiceWorkerManager> {
    private readonly protocolService;
    private manager?;
    private serviceWorkerListeners?;
    private inspectedURL?;
    private currentLighthouseRun?;
    private emulationStateBefore?;
    constructor(protocolService: ProtocolService);
    modelAdded(serviceWorkerManager: SDK.ServiceWorkerManager.ServiceWorkerManager): void;
    modelRemoved(serviceWorkerManager: SDK.ServiceWorkerManager.ServiceWorkerManager): void;
    private hasActiveServiceWorker;
    private hasAtLeastOneCategory;
    private unauditablePageMessage;
    private javaScriptDisabled;
    private hasImportantResourcesNotCleared;
    private evaluateInspectedURL;
    getCurrentRun(): LighthouseRun | undefined;
    getFlags(): {
        formFactor: (string | undefined);
        mode: string;
    };
    getCategoryIDs(): string[];
    getInspectedURL(options?: {
        force: boolean;
    }): Promise<Platform.DevToolsPath.UrlString>;
    recomputePageAuditability(): void;
    private recordMetrics;
    startLighthouse(): Promise<void>;
    collectLighthouseResults(): Promise<RunnerResult>;
    cancelLighthouse(): Promise<void>;
    /**
     * We set the device emulation on the DevTools-side for two reasons:
     * 1. To workaround some odd device metrics emulation bugs like occuluding viewports
     * 2. To get the attractive device outline
     */
    private setupEmulationAndProtocolConnection;
    private restoreEmulationAndProtocolConnection;
}
const Presets: Preset[];
interface Flags {
    [flag: string]: string | boolean;
}
const RuntimeSettings: RuntimeSetting[];
export declare enum Events {
    PageAuditabilityChanged = "PageAuditabilityChanged",
    PageWarningsChanged = "PageWarningsChanged",
    AuditProgressChanged = "AuditProgressChanged"
}
interface PageAuditabilityChangedEvent {
    helpText: string;
}
interface PageWarningsChangedEvent {
    warning: string;
}
interface AuditProgressChangedEvent {
    message: string;
}
interface EventTypes {
    [Events.PageAuditabilityChanged]: PageAuditabilityChangedEvent;
    [Events.PageWarningsChanged]: PageWarningsChangedEvent;
    [Events.AuditProgressChanged]: AuditProgressChangedEvent;
}
interface Preset {
    setting: Common.Settings.Setting<boolean>;
    configID: string;
    title: () => Common.UIString.LocalizedString;
    description: () => Common.UIString.LocalizedString;
    supportedModes: string[];
    userMetric: Host.UserMetrics.LighthouseCategoryUsed;
}
interface RuntimeSetting {
    setting: Common.Settings.Setting<string | boolean>;
    description: () => Common.UIString.LocalizedString;
    setFlags: (flags: Flags, value: string | boolean) => void;
    options?: Array<{
        label: () => Common.UIString.LocalizedString;
        value: string;
        tooltip?: () => Common.UIString.LocalizedString;
    }>;
    title?: () => Common.UIString.LocalizedString;
    learnMore?: Platform.DevToolsPath.UrlString;
}
