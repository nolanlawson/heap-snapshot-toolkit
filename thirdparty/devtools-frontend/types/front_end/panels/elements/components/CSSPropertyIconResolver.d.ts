declare const enum PhysicalDirection {
    LEFT_TO_RIGHT = "left-to-right",
    RIGHT_TO_LEFT = "right-to-left",
    BOTTOM_TO_TOP = "bottom-to-top",
    TOP_TO_BOTTOM = "top-to-bottom"
}
interface DirectionsDict {
    [key: string]: PhysicalDirection;
}
export interface IconInfo {
    iconName: string;
    rotate: number;
    scaleX: number;
    scaleY: number;
}
type ComputedStyles = Map<string, string>;
declare function reverseDirection(direction: PhysicalDirection): PhysicalDirection;
/**
 * Returns absolute directions for rows, columns,
 * reverse rows and reverse column taking into account the direction and writing-mode attributes.
 */
declare function getPhysicalDirections(computedStyles: ComputedStyles): DirectionsDict;
/**
 * Rotates the flex direction icon in such way that it indicates
 * the desired `direction` and the arrow in the icon is always at the bottom
 * or at the right.
 *
 * By default, the icon is pointing top-down with the arrow on the right-hand side.
 */
declare function rotateFlexDirectionIcon(direction: PhysicalDirection): IconInfo;
declare function rotateAlignContentIcon(iconName: string, direction: PhysicalDirection): IconInfo;
declare function rotateJustifyContentIcon(iconName: string, direction: PhysicalDirection): IconInfo;
declare function rotateJustifyItemsIcon(iconName: string, direction: PhysicalDirection): IconInfo;
declare function rotateAlignItemsIcon(iconName: string, direction: PhysicalDirection): IconInfo;
declare function roateFlexWrapIcon(iconName: string, direction: PhysicalDirection): IconInfo;
declare function findIcon(text: string, computedStyles: ComputedStyles | null, parentComputedStyles?: ComputedStyles | null): IconInfo | null;
declare function findFlexContainerIcon(text: string, computedStyles: ComputedStyles | null): IconInfo | null;
declare function findFlexItemIcon(text: string, parentComputedStyles?: ComputedStyles | null): IconInfo | null;
declare function findGridContainerIcon(text: string, computedStyles: ComputedStyles | null): IconInfo | null;
declare function findGridItemIcon(text: string, parentComputedStyles?: ComputedStyles | null): IconInfo | null;
