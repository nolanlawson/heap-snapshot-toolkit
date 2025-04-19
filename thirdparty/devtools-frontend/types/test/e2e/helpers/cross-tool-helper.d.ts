import type { DevToolsFrontendReloadOptions } from '../../conductor/frontend_tab.js';
export declare function clickOnContextMenuItemFromTab(tabId: string, menuItemSelector: string): Promise<void>;
export declare const MOVE_TO_DRAWER_SELECTOR = "[aria-label=\"Move to bottom\"]";
export declare const MOVE_TO_MAIN_PANEL_SELECTOR = "[aria-label=\"Move to top\"]";
export declare const MAIN_PANEL_SELECTOR = "div[class*=\"main-tabbed-pane\"][slot*=\"main\"]";
export declare const DRAWER_PANEL_SELECTOR = "div[class*=\"drawer-tabbed-pane\"][slot*=\"sidebar\"]";
export declare const TAB_HEADER_SELECTOR = "div[class*=\"tabbed-pane-header\"]";
export declare function tabExistsInMainPanel(tabId: string): Promise<void>;
export declare function tabExistsInDrawer(tabId: string): Promise<void>;
export declare const checkIfTabExistsInDrawer: (tabId: string) => Promise<boolean>;
export declare function reloadDevTools(options?: DevToolsFrontendReloadOptions & {
    expectClosedPanels?: string[];
    enableExperiments?: string[];
    disableExperiments?: string[];
    removeBackendState?: boolean;
}): Promise<void>;
