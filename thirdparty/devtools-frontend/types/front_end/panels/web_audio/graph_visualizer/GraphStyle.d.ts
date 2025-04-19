const PortPadding = 4;
const InputPortRadius = 10;
const AudioParamRadius = 5;
const LeftMarginOfText = 12;
const RightMarginOfText = 30;
const LeftSideTopPadding = 5;
const BottomPaddingWithoutParam = 6;
const BottomPaddingWithParam = 8;
const ArrowHeadSize = 12;
const GraphPadding = 20;
const GraphMargin = 20;
const TotalInputPortHeight: number;
const TotalOutputPortHeight: number;
const TotalParamPortHeight: number;
const NodeLabelFontStyle = "14px Segoe UI, Arial";
const ParamLabelFontStyle = "12px Segoe UI, Arial";
/**
 * Supported port types.
 */
export declare const enum PortTypes {
    IN = "In",
    OUT = "Out",
    PARAM = "Param"
}
export interface Size {
    width: number;
    height: number;
}
export interface Point {
    x: number;
    y: number;
}
interface NodeLayout {
    inputPortSectionHeight: number;
    outputPortSectionHeight: number;
    maxTextLength: number;
    totalHeight: number;
}
export interface Port {
    id: string;
    type: PortTypes;
    label?: string;
    x: number;
    y: number;
}
export interface NodeCreationData {
    nodeId: string;
    nodeType: string;
    numberOfInputs: number;
    numberOfOutputs: number;
}
export interface ParamCreationData {
    paramId: string;
    paramType: string;
    nodeId: string;
}
export interface NodesConnectionData {
    sourceId: string;
    destinationId: string;
    sourceOutputIndex?: number;
    destinationInputIndex?: number;
}
export interface NodesDisconnectionData {
    sourceId: string;
    destinationId?: string | null;
    sourceOutputIndex?: number;
    destinationInputIndex?: number;
}
interface NodesDisconnectionDataWithDestination {
    sourceId: string;
    destinationId: string;
    sourceOutputIndex?: number;
    destinationInputIndex?: number;
}
export interface NodeParamConnectionData {
    sourceId: string;
    destinationId: string;
    sourceOutputIndex?: number;
    destinationParamId: string;
}
export interface NodeParamDisconnectionData {
    sourceId: string;
    destinationId: string;
    sourceOutputIndex?: number;
    destinationParamId: string;
}
