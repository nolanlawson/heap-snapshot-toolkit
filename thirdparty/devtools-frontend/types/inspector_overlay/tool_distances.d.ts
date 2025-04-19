import { Overlay } from './common.js';
interface Style {
    'background-color': string;
    'background-image': string;
    'border-left-width': string;
    'border-left-style': string;
    'border-left-color': string;
    'border-right-width': string;
    'border-right-style': string;
    'border-right-color': string;
    'border-top-width': string;
    'border-top-style': string;
    'border-top-color': string;
    'border-bottom-width': string;
    'border-bottom-style': string;
    'border-bottom-color': string;
    'outline-width': string;
    'outline-style': string;
    'outline-color': string;
    'box-shadow': string;
}
type Quad = number[];
interface DistanceInfo {
    style: Style;
    border: Quad;
    padding: Quad;
    content: Quad;
    boxes: number[][];
}
export declare class DistancesOverlay extends Overlay {
    drawDistances({ distanceInfo }: {
        distanceInfo: DistanceInfo;
    }): void;
    install(): void;
    uninstall(): void;
}
export {};
