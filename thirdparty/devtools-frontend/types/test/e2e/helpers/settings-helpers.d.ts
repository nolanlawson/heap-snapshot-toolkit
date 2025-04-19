import type { DevToolsPage } from '../../e2e_non_hosted/shared/frontend-helper.js';
export declare function openPanelViaMoreTools(panelTitle: string, frontend?: DevToolsPage): Promise<void>;
export declare const openSettingsTab: (tabTitle: string) => Promise<void>;
export declare const closeSettings: () => Promise<void>;
export declare const togglePreferenceInSettingsTab: (label: string, shouldBeChecked?: boolean) => Promise<void>;
export declare const setIgnoreListPattern: (pattern: string) => Promise<void>;
export declare const toggleIgnoreListing: (enable: boolean) => Promise<void>;
