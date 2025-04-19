declare global {
    interface Window {
        searchEvents: Array<{
            action: string;
            queryString?: string;
        }>;
    }
}
export {};
