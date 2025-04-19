import '../../../ui/components/spinners/spinners.js';
import * as Host from '../../../core/host/host.js';
import { type PromptBuilder, type Source } from '../PromptBuilder.js';
type PublicPromptBuilder = Pick<PromptBuilder, 'buildPrompt' | 'getSearchQuery'>;
type PublicAidaClient = Pick<Host.AidaClient.AidaClient, 'fetch' | 'registerClientEvent'>;
class ConsoleInsight extends HTMLElement {
    #private;
    static create(promptBuilder: PublicPromptBuilder, aidaClient: PublicAidaClient): Promise<ConsoleInsight>;
    disableAnimations: boolean;
    constructor(promptBuilder: PublicPromptBuilder, aidaClient: PublicAidaClient, aidaAvailability: Host.AidaClient.AidaAccessPreconditions);
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare class ConsoleInsightSourcesList extends HTMLElement {
    #private;
    constructor();
    set sources(values: Source[]);
    set isPageReloadRecommended(isPageReloadRecommended: boolean);
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-console-insight': ConsoleInsight;
        'devtools-console-insight-sources-list': ConsoleInsightSourcesList;
    }
}
export {};
