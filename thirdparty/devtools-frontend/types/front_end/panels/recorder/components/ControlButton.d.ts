import * as Lit from '../../../ui/lit/lit.js';
declare const LitElement: typeof Lit.LitElement;
declare global {
    interface HTMLElementTagNameMap {
        'devtools-control-button': ControlButton;
    }
}
class ControlButton extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    label: string;
    shape: string;
    disabled: boolean;
    constructor();
    protected render(): unknown;
}
export {};
