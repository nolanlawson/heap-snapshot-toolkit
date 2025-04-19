import { type DevToolsFrontendReloadOptions } from './frontend_tab.js';
export declare function unregisterAllServiceWorkers(): Promise<void>;
export declare function setupPages(): Promise<void>;
export declare function resetPages(): Promise<void>;
export declare function reloadDevTools(options?: DevToolsFrontendReloadOptions): Promise<void>;
export declare function preFileSetup(serverPort: number): Promise<void>;
export declare function postFileTeardown(): Promise<void>;
export declare function getDevToolsFrontendHostname(): string;
