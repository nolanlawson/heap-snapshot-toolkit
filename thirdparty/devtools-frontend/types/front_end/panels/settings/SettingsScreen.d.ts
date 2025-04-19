import '../../ui/components/cards/cards.js';
import * as UI from '../../ui/legacy/legacy.js';
class SettingsScreen extends UI.Widget.VBox implements UI.View.ViewLocationResolver {
    private readonly tabbedLocation;
    private keybindsTab?;
    private reportTabOnReveal;
    private constructor();
    static instance(opts?: {
        forceNew: boolean | null;
    }): SettingsScreen;
    private static revealSettingsScreen;
    static showSettingsScreen(options?: ShowSettingsScreenOptions | undefined): Promise<void>;
    resolveLocation(_locationName: string): UI.View.ViewLocation | null;
    private selectTab;
    private tabInvoked;
    private reportSettingsPanelShown;
    private onEscapeKeyPressed;
}
interface ShowSettingsScreenOptions {
    name?: string;
    focusTabHeader?: boolean;
}
export {};
