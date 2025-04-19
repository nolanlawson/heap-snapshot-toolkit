import { type DevToolsFrontendReloadOptions } from './frontend_tab.js';
declare function unregisterAllServiceWorkers(): Promise<void>;
declare function setupPages(): Promise<void>;
declare function resetPages(): Promise<void>;
export declare function reloadDevTools(options?: DevToolsFrontendReloadOptions): Promise<void>;
declare function preFileSetup(serverPort: number): Promise<void>;
declare function postFileTeardown(): Promise<void>;
export declare function getDevToolsFrontendHostname(): string;
