declare global {
    interface Window {
        iFrameWindow: Window | null | undefined;
    }
}
export {};
