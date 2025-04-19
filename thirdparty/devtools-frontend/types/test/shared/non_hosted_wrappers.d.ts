import { BrowserWrapper } from '../e2e_non_hosted/shared/browser-helper.js';
import { DevToolsPage } from '../e2e_non_hosted/shared/frontend-helper.js';
import { InspectedPage } from '../e2e_non_hosted/shared/target-helper.js';
export declare function getBrowserAndPagesWrappers(): {
    devToolsPage: DevToolsPage;
    inspectedPage: InspectedPage;
    browserWrapper: BrowserWrapper;
};
