interface SrgbOverlayProps {
    hue: number;
    width: number;
    height: number;
}
class SrgbOverlay extends HTMLElement {
    #private;
    constructor();
    render({ hue, width, height }: SrgbOverlayProps): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-spectrum-srgb-overlay': SrgbOverlay;
    }
}
export {};
