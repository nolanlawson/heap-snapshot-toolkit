import type { AreaBounds, Bounds } from '../common.js';
import { type CanvasSize, type NormalizePositionDataConfig } from '../css_grid_label_helpers.js';
/**
 * This does the same as initFrame but also prepares the DOM for testing grid labels.
 */
export declare function initFrameForGridLabels(): void;
export declare function initFrameForMultipleGridLabels(numGrids: number): void;
export declare function createGridLabelContainer(layerId?: number): void;
export declare function getMainGridLabelContainer(): HTMLElement;
export declare function getGridLabelContainer(layerId?: number): HTMLElement;
export declare function getGridLineNumberLabelContainer(layerId?: number): HTMLElement;
export declare function getGridLineNameLabelContainer(layerId?: number): HTMLElement;
export declare function getGridTrackSizesLabelContainer(layerId?: number): HTMLElement;
export declare function getGridAreaNameLabelContainer(layerId?: number): HTMLElement;
interface ExpectedLayerLabel {
    layerId: number;
    expectedLabels: ExpectedLineNumberLabel[];
}
interface ExpectedLineNumberLabel {
    className: string;
    count: number;
}
interface ExpectedLineNameLabel {
    type: string;
    textContent: string;
    x?: number;
    y?: number;
}
interface ExpectedAreaNameLabel {
    textContent: string;
    left?: string;
    top?: string;
}
export declare function drawGridLineNumbersAndAssertLabels(config: NormalizePositionDataConfig & {
    writingMode?: string;
}, bounds: Bounds, canvasSize: CanvasSize, layerId: number, expectedLabels: ExpectedLineNumberLabel[]): void;
export declare function drawGridLineNamesAndAssertLabels(config: NormalizePositionDataConfig, bounds: Bounds, canvasSize: CanvasSize, layerId: number, deviceEmulationFactor: number, expectedLabels: ExpectedLineNameLabel[]): void;
export declare function drawGridAreaNamesAndAssertLabels(areaNames: AreaBounds[], writingModeMatrix: DOMMatrix | undefined, writingMode: string | undefined, expectedLabels: ExpectedAreaNameLabel[]): void;
export declare function drawMultipleGridLineNumbersAndAssertLabels(configs: Array<{
    config: NormalizePositionDataConfig;
    layerId: number;
}>, bounds: Bounds, canvasSize: CanvasSize, expectedLabelList: ExpectedLayerLabel[]): void;
export {};
