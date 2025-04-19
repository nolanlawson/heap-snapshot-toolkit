import '../../../ui/components/menus/menus.js';
import type { LocalizedString } from '../../../core/platform/UIString.js';
import type * as Actions from '../recorder-actions/recorder-actions.js';
declare const enum Variant {
    PRIMARY = "primary",
    OUTLINED = "outlined"
}
interface SelectMenuGroup {
    name: string;
    items: SelectButtonItem[];
}
interface SelectButtonItem {
    /**
     * Specifies the clicked item
     */
    value: string;
    /**
     * `icon` to be shown on the button
     */
    buttonIconName?: string;
    /**
     * Text to be shown in the select menu
     */
    label: () => string;
    /**
     * Text to be shown in the button when the item is selected for the button
     */
    buttonLabel?: () => string;
}
class SelectButtonClickEvent extends Event {
    value?: string | undefined;
    static readonly eventName = "selectbuttonclick";
    constructor(value?: string | undefined);
}
class SelectButton extends HTMLElement {
    #private;
    connectedCallback(): void;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    get items(): SelectButtonItem[];
    set items(items: SelectButtonItem[]);
    set buttonLabel(buttonLabel: LocalizedString);
    set groups(groups: SelectMenuGroup[]);
    get value(): string;
    set value(value: string);
    get variant(): Variant;
    set variant(variant: Variant);
    set action(value: Actions.RecorderActions);
}
declare global {
    interface HTMLElementEventMap {
        selectbuttonclick: SelectButtonClickEvent;
    }
    interface HTMLElementTagNameMap {
        'devtools-select-button': SelectButton;
    }
}
export {};
