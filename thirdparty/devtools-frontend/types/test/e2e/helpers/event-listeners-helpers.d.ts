export declare const loadEventListenersAndSelectButtonNode: () => Promise<void>;
export declare const openEventListenersPaneAndWaitForListeners: () => Promise<void>;
export declare const getDisplayedEventListenerNames: () => Promise<string[]>;
export declare const getEventListenerProperties: (selector: string) => Promise<string[][]>;
export declare const getFirstNodeForEventListener: (listenerTypeSelector: string) => Promise<{
    firstListenerText: string;
    listenerSelector: string;
}>;
