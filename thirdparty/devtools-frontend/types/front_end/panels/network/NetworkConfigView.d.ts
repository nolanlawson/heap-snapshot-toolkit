import * as UI from '../../ui/legacy/legacy.js';
class NetworkConfigView extends UI.Widget.VBox {
    constructor();
    static instance(opts?: {
        forceNew: boolean | null;
    }): NetworkConfigView;
    static createUserAgentSelectAndInput(title: string): {
        select: HTMLSelectElement;
        input: HTMLInputElement;
        error: HTMLElement;
    };
    private createSection;
    private createCacheSection;
    private createNetworkThrottlingSection;
    private createUserAgentSection;
    private createAcceptedEncodingSection;
    wasShown(): void;
}
export {};
