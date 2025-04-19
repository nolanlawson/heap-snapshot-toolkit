import { type Color4D } from '../front_end/core/common/ColorUtils.js';
import type { Bounds, PathCommands, Quad } from './common.js';
type PathBounds = Bounds & {
    leftmostXForY: {
        [key: string]: number;
    };
    rightmostXForY: {
        [key: string]: number;
    };
    topmostYForX: {
        [key: string]: number;
    };
    bottommostYForX: {
        [key: string]: number;
    };
};
export interface LineStyle {
    color?: string;
    pattern?: LinePattern;
}
export interface BoxStyle {
    fillColor?: string;
    hatchColor?: string;
}
declare const enum LinePattern {
    SOLID = "solid",
    DOTTED = "dotted",
    DASHED = "dashed"
}
declare function drawPathWithLineStyle(context: CanvasRenderingContext2D, path: Path2D, lineStyle?: LineStyle, lineWidth?: number): void;
declare function fillPathWithBoxStyle(context: CanvasRenderingContext2D, path: Path2D, bounds: PathBounds, angle: number, boxStyle?: BoxStyle): void;
declare function buildPath(commands: Array<string | number>, bounds: PathBounds, emulationScaleFactor: number): Path2D;
declare function emptyBounds(): PathBounds;
declare function applyMatrixToPoint(point: {
    x: number;
    y: number;
}, matrix: DOMMatrix): {
    x: number;
    y: number;
};
/**
 * Draw line hatching at a 45 degree angle for a given
 * path.
 *   __________
 *   |\  \  \ |
 *   | \  \  \|
 *   |  \  \  |
 *   |\  \  \ |
 *   **********
 */
declare function hatchFillPath(context: CanvasRenderingContext2D, path: Path2D, bounds: Bounds, delta: number, color: string, rotationAngle: number, flipDirection: boolean | undefined): void;
/**
 * Given a quad, create the corresponding path object. This also accepts a list of quads to clip from the resulting
 * path.
 */
declare function createPathForQuad(outerQuad: Quad, quadsToClip: Quad[], bounds: PathBounds, emulationScaleFactor: number): Path2D;
declare function parseHexa(hexa: string): Color4D;
declare function formatRgba(rgba: Color4D, colorFormat: 'rgb' | 'hsl' | 'hwb'): string;
declare function formatColor(hexa: string, colorFormat: string): string;
declare function drawPath(context: CanvasRenderingContext2D, commands: PathCommands, fillColor: string | undefined, outlineColor: string | undefined, outlinePattern: LinePattern | undefined, bounds: PathBounds, emulationScaleFactor: number): Path2D;
