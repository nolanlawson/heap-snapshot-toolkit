import type { Chrome } from '../../../extension-api/ExtensionAPI.js';
declare global {
    let chrome: Chrome.DevTools.Chrome;
    interface Window {
        Module: {
            instance: WebAssembly.Instance;
        };
    }
}
