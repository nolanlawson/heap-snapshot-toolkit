export declare function securityTabExists(): Promise<void>;
export declare function securityTabDoesNotExist(): Promise<void>;
export declare function securityPanelContentIsLoaded(privacyEnabled?: boolean): Promise<void>;
export declare function navigateToSecurityTab(privacyEnabled?: boolean): Promise<void>;
export declare function closeSecurityTab(): Promise<void>;
export declare function openSecurityPanelFromMoreTools(): Promise<void>;
export declare function openSecurityPanelFromCommandMenu(): Promise<void>;
export declare function veImpressionForSecurityPanel(): {
    impressions: string[];
};
