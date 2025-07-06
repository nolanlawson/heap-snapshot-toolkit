declare type AbstractConstructor<T, Args extends any[] = any[]> = (abstract new (...args: Args) => T);

declare class Aggregate {
    count: number;
    distance: number;
    self: number;
    maxRet: number;
    name: string;
    idxs: number[];
}

declare class AggregateForDiff {
    name: string;
    indexes: number[];
    ids: number[];
    selfSizes: number[];
    constructor();
}

declare class AllocationNodeCallers {
    nodesWithSingleCaller: SerializedAllocationNode[];
    branchingCallers: SerializedAllocationNode[];
    constructor(nodesWithSingleCaller: SerializedAllocationNode[], branchingCallers: SerializedAllocationNode[]);
}

declare class AllocationStackFrame {
    functionName: string;
    scriptName: string;
    scriptId: number;
    line: number;
    column: number;
    constructor(functionName: string, scriptName: string, scriptId: number, line: number, column: number);
}

/**
 * Appends the list of `styles` as individual `<style>` elements to the
 * given `node`.
 *
 * @param node the `Node` to append the `<style>` elements to.
 * @param styles an optional list of styles to append to the `node`.
 */
declare function appendStyle(node: Node, ...styles: CSSInJS[]): void;

declare interface ArgumentsToBuildDominatedNodes extends ArgumentsToComputeDominatorsAndRetainedSizes, DominatorsAndRetainedSizes {
}

declare type ArgumentsToBuildRetainers = SecondaryInitArgumentsStep1;

declare interface ArgumentsToComputeDominatorsAndRetainedSizes extends SecondaryInitArgumentsStep1, Retainers, SecondaryInitArgumentsStep2 {
    essentialEdges: Platform.TypedArrayUtilities.BitVector;
    port: MessagePort;
    nodeSelfSizesPromise: Promise<Uint32Array>;
}

declare function arrayDoesNotContainNullOrUndefined<T>(arr: Array<T | null | undefined>): arr is T[];

declare namespace ArrayUtilities {
    export {
        sortRange,
        lowerBound,
        upperBound,
        nearestIndexFromBeginning,
        nearestIndexFromEnd,
        arrayDoesNotContainNullOrUndefined,
        removeElement,
        binaryIndexOf,
        intersectOrdered,
        mergeOrdered,
        DEFAULT_COMPARATOR
    }
}

declare const ARROW_KEYS: Set<ArrowKey>;

declare const enum ArrowKey {
    UP = "ArrowUp",
    DOWN = "ArrowDown",
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight"
}

declare const aspectRatio: (width: number, height: number) => string;

declare function assertNever(_type: never, message: string): never;

/**
 * This is useful to keep TypeScript happy in a test - if you have a value
 * that's potentially `null` you can use this function to assert that it isn't,
 * and satisfy TypeScript that the value is present.
 */
declare function assertNotNullOrUndefined<T>(val: T, message?: string): asserts val is NonNullable<T>;

/**
 * This is useful to check on the type-level that the unhandled cases of
 * a switch are exactly `T` (where T is usually a union type of enum values).
 * @param caseVariable
 */
declare function assertUnhandled<T>(_caseVariable: T): T;

declare const base64ToSize: (content: string | null) => number;

declare const baseSystemDistance = 100000000;

declare const baseUnreachableDistance: number;

/**
 * An object which provides functionality similar to Uint32Array. It may be
 * implemented as:
 * 1. A Uint32Array,
 * 2. An array of Uint32Arrays, to support more data than Uint32Array, or
 * 3. A plain array, in which case the length may change by setting values.
 */
declare interface BigUint32Array {
    get length(): number;
    getValue(index: number): number;
    setValue(index: number, value: number): void;
    asUint32ArrayOrFail(): Uint32Array;
    asArrayOrFail(): number[];
}

declare const binaryIndexOf: <T, S>(array: T[], value: S, comparator: (a: S, b: T) => number) => number;

declare interface BitVector {
    getBit(index: number): boolean;
    setBit(index: number): void;
    clearBit(index: number): void;
    previous(index: number): number;
    get buffer(): ArrayBuffer;
}

declare namespace Brand {
    export {
        Brand_2 as Brand
    }
}

/**
 * Helper type to introduce new branded types.
 *
 * `Base` is the underlying data type and `Tag` must be unique symbol/string.
 *
 * Usage:
 * ```
 *   type LineNumber = Brand<number, "LineNumber">;
 *   type RawUrl = Brand<string, "RawUrl">;
 * ```
 */
declare type Brand_2<Base, Tag> = Base & {
    _tag: Tag;
};

declare const caseInsensetiveComparator: (a: string, b: string) => number;

declare const clamp: (num: number, min: number, max: number) => number;

declare const collapseWhitespace: (inputString: string) => string;

declare class ComparatorConfig {
    fieldName1: string;
    ascending1: boolean;
    fieldName2: string;
    ascending2: boolean;
    constructor(fieldName1: string, ascending1: boolean, fieldName2: string, ascending2: boolean);
}

declare const compare: (a: string, b: string) => number;

/**
 * Somewhat efficiently concatenates 2 base64 encoded strings.
 */
declare const concatBase64: (lhs: string, rhs: string) => string;

declare namespace Constructor {
    export {
        Constructor_2 as Constructor,
        AbstractConstructor,
        ConstructorOrAbstract
    }
}

declare type Constructor_2<T, Args extends any[] = any[]> = new (...args: Args) => T;

declare type ConstructorOrAbstract<T> = Constructor_2<T> | AbstractConstructor<T>;

declare const countUnmatchedLeftParentheses: (str: string) => number;

declare const countWtf8Bytes: (inputString: string) => number;

declare function createBitVector(lengthOrBuffer: number | ArrayBuffer): BitVector;

/**
 * @returns A BigUint32Array implementation which is based on Array.
 * This means that its length automatically expands to include the highest index
 * used, and asArrayOrFail will succeed.
 */
declare function createExpandableBigUint32Array(): BigUint32Array;

/**
 * @returns A BigUint32Array implementation which is based on Uint32Array.
 * If the length is small enough to fit in a single Uint32Array, then
 * asUint32ArrayOrFail will succeed. Otherwise, it will throw an exception.
 */
declare function createFixedBigUint32Array(length: number, maxLengthForTesting?: number): BigUint32Array;

declare const createPlainTextSearchRegex: (query: string, flags?: string) => RegExp;

declare const createSearchRegex: (query: string, caseSensitive: boolean, isRegex: boolean, matchWholeWord?: boolean) => RegExp;

declare type CSSInJS = string&{_tag: 'CSS-in-JS'}

declare namespace DateUtilities {
    export {
        isValid,
        toISO8601Compact
    }
}

/**
 * `document.activeElement` will not enter shadow roots to find the element
 * that has focus; use this method if you need to traverse through any shadow
 * roots to find the actual, specific focused element.
 */
declare function deepActiveElement(doc: Document): Element | null;

declare const DEFAULT_COMPARATOR: (a: string | number, b: string | number) => -1 | 0 | 1;

declare namespace DevToolsPath {
    export {
        UrlString,
        EmptyUrlString,
        urlString,
        RawPathString,
        EmptyRawPathString,
        EncodedPathString,
        EmptyEncodedPathString
    }
}

declare class Diff {
    name: string;
    addedCount: number;
    removedCount: number;
    addedSize: number;
    removedSize: number;
    deletedIndexes: number[];
    addedIndexes: number[];
    countDelta: number;
    sizeDelta: number;
    constructor(name: string);
}

declare class DiffForClass {
    name: string;
    addedCount: number;
    removedCount: number;
    addedSize: number;
    removedSize: number;
    deletedIndexes: number[];
    addedIndexes: number[];
    countDelta: number;
    sizeDelta: number;
}

declare interface DominatedNodes {
    firstDominatedNodeIndex: Uint32Array;
    dominatedNodes: Uint32Array;
}

declare interface DominatorsAndRetainedSizes {
    dominatorsTree: Uint32Array;
    retainedSizes: Float64Array;
}

/**
 * DOM node link state.
 */
declare const enum DOMLinkState {
    UNKNOWN = 0,
    ATTACHED = 1,
    DETACHED = 2
}

declare namespace DOMUtilities {
    export {
        deepActiveElement,
        getEnclosingShadowRootForNode,
        rangeOfWord,
        appendStyle,
        CSSInJS
    }
}

declare const DOUBLE_QUOTE = "\"";

declare class Edge {
    name: string;
    node: Node_2;
    type: string;
    edgeIndex: number;
    isAddedNotRemoved: boolean | null;
    constructor(name: string, node: Node_2, type: string, edgeIndex: number);
}

declare const EmptyEncodedPathString: EncodedPathString;

declare const EmptyRawPathString: RawPathString;

declare const EmptyUrlString: UrlString;

/**
 * File paths in DevTools that are represented as encoded paths.
 *
 * @example '/Hello%20World/file.js'
 */
declare type EncodedPathString = Brand_2<string, 'EncodedPathString'>;

declare const ENTER_KEY = "Enter";

declare const ESCAPE_KEY = "Escape";

declare const escapeCharacters: (inputString: string, charsToEscape: string) => string;

declare const escapeForRegExp: (str: string) => string;

declare type FieldsThatExtend<Type, Selector> = {
    [Key in keyof Type]: Type[Key] extends Selector ? Key : never;
}[keyof Type];

declare const filterRegex: (query: string) => RegExp;

declare const findIndexesOfSubString: (inputString: string, searchString: string) => number[];

declare const findLineEndingIndexes: (inputString: string) => number[];

declare const findUnclosedCssQuote: (str: string) => string;

/**
 * Rounds a number (including float) down.
 */
declare const floor: (value: number, precision?: number) => number;

declare const formatAsJSLiteral: (content: string) => string;

declare function getEnclosingShadowRootForNode(node: Node): Node | null;

/**
 * Gets value for key, assigning a default if value is falsy.
 */
declare function getWithDefault<K extends {}, V>(map: WeakMap<K, V> | Map<K, V>, key: K, defaultValueFactory: (key?: K) => V): V;

/**
 * Computes the great common divisor for two numbers.
 * If the numbers are floats, they will be rounded to an integer.
 */
declare const greatestCommonDivisor: (a: number, b: number) => number;

declare const hashCode: (string?: string) => number;

declare abstract class HeapSnapshot {
    #private;
    nodes: Platform.TypedArrayUtilities.BigUint32Array;
    containmentEdges: Platform.TypedArrayUtilities.BigUint32Array;
    strings: string[];
    rootNodeIndexInternal: number;
    profile: Profile;
    nodeTypeOffset: number;
    nodeNameOffset: number;
    nodeIdOffset: number;
    nodeSelfSizeOffset: number;
    nodeTraceNodeIdOffset: number;
    nodeFieldCount: number;
    nodeTypes: string[];
    nodeArrayType: number;
    nodeHiddenType: number;
    nodeObjectType: number;
    nodeNativeType: number;
    nodeStringType: number;
    nodeConsStringType: number;
    nodeSlicedStringType: number;
    nodeCodeType: number;
    nodeSyntheticType: number;
    nodeClosureType: number;
    nodeRegExpType: number;
    edgeFieldsCount: number;
    edgeTypeOffset: number;
    edgeNameOffset: number;
    edgeToNodeOffset: number;
    edgeTypes: string[];
    edgeElementType: number;
    edgeHiddenType: number;
    edgeInternalType: number;
    edgeShortcutType: number;
    edgeWeakType: number;
    edgeInvisibleType: number;
    edgePropertyType: number;
    nodeCount: number;
    retainedSizes: Float64Array;
    firstEdgeIndexes: Uint32Array;
    retainingNodes: Uint32Array;
    retainingEdges: Uint32Array;
    firstRetainerIndex: Uint32Array;
    nodeDistances: Int32Array;
    firstDominatedNodeIndex: Uint32Array;
    dominatedNodes: Uint32Array;
    dominatorsTree: Uint32Array;
    nodeDetachednessAndClassIndexOffset: number;
    detachednessAndClassIndexArray?: Uint32Array;
    constructor(profile: Profile, progress: HeapSnapshotProgress);
    initialize(secondWorker: MessagePort): Promise<void>;
    private startInitStep1InSecondThread;
    private startInitStep2InSecondThread;
    private startInitStep3InSecondThread;
    private installResultsFromSecondThread;
    private buildEdgeIndexes;
    static buildRetainers(inputs: ArgumentsToBuildRetainers): Retainers;
    abstract createNode(_nodeIndex?: number): HeapSnapshotNode;
    abstract createEdge(_edgeIndex: number): JSHeapSnapshotEdge;
    abstract createRetainingEdge(_retainerIndex: number): JSHeapSnapshotRetainerEdge;
    private allNodes;
    rootNode(): HeapSnapshotNode;
    get rootNodeIndex(): number;
    get totalSize(): number;
    private createFilter;
    search(searchConfig: HeapSnapshotModel_2.HeapSnapshotModel.SearchConfig, nodeFilter: HeapSnapshotModel_2.HeapSnapshotModel.NodeFilter): number[];
    aggregatesWithFilter(nodeFilter: HeapSnapshotModel_2.HeapSnapshotModel.NodeFilter): Record<string, HeapSnapshotModel_2.HeapSnapshotModel.Aggregate>;
    private createNodeIdFilter;
    private createAllocationStackFilter;
    private createNamedFilter;
    getAggregatesByClassKey(sortedIndexes: boolean, key?: string, filter?: ((arg0: HeapSnapshotNode) => boolean)): Record<string, HeapSnapshotModel_2.HeapSnapshotModel.Aggregate>;
    allocationTracesTops(): HeapSnapshotModel_2.HeapSnapshotModel.SerializedAllocationNode[];
    allocationNodeCallers(nodeId: number): HeapSnapshotModel_2.HeapSnapshotModel.AllocationNodeCallers;
    allocationStack(nodeIndex: number): HeapSnapshotModel_2.HeapSnapshotModel.AllocationStackFrame[] | null;
    aggregatesForDiff(interfaceDefinitions: string): Record<string, HeapSnapshotModel_2.HeapSnapshotModel.AggregateForDiff>;
    isUserRoot(_node: HeapSnapshotNode): boolean;
    calculateShallowSizes(): void;
    calculateDistances(isForRetainersView: boolean, filter?: ((arg0: HeapSnapshotNode, arg1: HeapSnapshotEdge) => boolean)): void;
    private bfs;
    private buildAggregates;
    private calculateClassesRetainedSize;
    private sortAggregateIndexes;
    tryParseWeakMapEdgeName(edgeNameIndex: number): {
        duplicatedPart: string;
        tableId: string;
    } | undefined;
    private computeIsEssentialEdge;
    private initEssentialEdges;
    static hasOnlyWeakRetainers(inputs: ArgumentsToComputeDominatorsAndRetainedSizes, nodeOrdinal: number): boolean;
    static calculateDominatorsAndRetainedSizes(inputs: ArgumentsToComputeDominatorsAndRetainedSizes): Promise<DominatorsAndRetainedSizes>;
    static buildDominatedNodes(inputs: ArgumentsToBuildDominatedNodes): DominatedNodes;
    private calculateObjectNames;
    interfaceDefinitions(): string;
    private isPlainJSObject;
    private inferInterfaceDefinitions;
    private applyInterfaceDefinitions;
    /**
     * Iterates children of a node.
     */
    private iterateFilteredChildren;
    /**
     * Adds a string to the snapshot.
     */
    private addString;
    /**
     * The phase propagates whether a node is attached or detached through the
     * graph and adjusts the low-level representation of nodes.
     *
     * State propagation:
     * 1. Any object reachable from an attached object is itself attached.
     * 2. Any object reachable from a detached object that is not already
     *    attached is considered detached.
     *
     * Representation:
     * - Name of any detached node is changed from "<Name>"" to
     *   "Detached <Name>".
     */
    private propagateDOMState;
    private buildSamples;
    private buildLocationMap;
    getLocation(nodeIndex: number): HeapSnapshotModel_2.HeapSnapshotModel.Location | null;
    getSamples(): HeapSnapshotModel_2.HeapSnapshotModel.Samples | null;
    calculateFlags(): void;
    calculateStatistics(): void;
    userObjectsMapAndFlag(): {
        map: Uint8Array;
        flag: number;
    } | null;
    calculateSnapshotDiff(baseSnapshotId: string, baseSnapshotAggregates: Record<string, HeapSnapshotModel_2.HeapSnapshotModel.AggregateForDiff>): Record<string, HeapSnapshotModel_2.HeapSnapshotModel.Diff>;
    private calculateDiffForClass;
    private nodeForSnapshotObjectId;
    classKeyFromClassKeyInternal(key: string | number): string;
    nodeClassKey(snapshotObjectId: number): string | null;
    idsOfObjectsWithName(name: string): number[];
    createEdgesProvider(nodeIndex: number): HeapSnapshotEdgesProvider;
    createEdgesProviderForTest(nodeIndex: number, filter: ((arg0: HeapSnapshotEdge) => boolean) | null): HeapSnapshotEdgesProvider;
    retainingEdgesFilter(): ((arg0: HeapSnapshotEdge) => boolean) | null;
    containmentEdgesFilter(): ((arg0: HeapSnapshotEdge) => boolean) | null;
    createRetainingEdgesProvider(nodeIndex: number): HeapSnapshotEdgesProvider;
    createAddedNodesProvider(baseSnapshotId: string, classKey: string): HeapSnapshotNodesProvider;
    createDeletedNodesProvider(nodeIndexes: number[]): HeapSnapshotNodesProvider;
    createNodesProviderForClass(classKey: string, nodeFilter: HeapSnapshotModel_2.HeapSnapshotModel.NodeFilter): HeapSnapshotNodesProvider;
    private maxJsNodeId;
    updateStaticData(): HeapSnapshotModel_2.HeapSnapshotModel.StaticData;
    ignoreNodeInRetainersView(nodeIndex: number): void;
    unignoreNodeInRetainersView(nodeIndex: number): void;
    unignoreAllNodesInRetainersView(): void;
    areNodesIgnoredInRetainersView(): boolean;
    getDistanceForRetainersView(nodeIndex: number): number;
    isNodeIgnoredInRetainersView(nodeIndex: number): boolean;
    isEdgeIgnoredInRetainersView(edgeIndex: number): boolean;
}

declare class HeapSnapshotEdge implements HeapSnapshotItem {
    snapshot: HeapSnapshot;
    protected readonly edges: Platform.TypedArrayUtilities.BigUint32Array;
    edgeIndex: number;
    constructor(snapshot: HeapSnapshot, edgeIndex?: number);
    clone(): HeapSnapshotEdge;
    hasStringName(): boolean;
    name(): string;
    node(): HeapSnapshotNode;
    nodeIndex(): number;
    toString(): string;
    type(): string;
    itemIndex(): number;
    serialize(): HeapSnapshotModel_2.HeapSnapshotModel.Edge;
    rawType(): number;
    isInternal(): boolean;
    isInvisible(): boolean;
    isWeak(): boolean;
    getValueForSorting(_fieldName: string): number;
    nameIndex(): number;
}

declare class HeapSnapshotEdgeIterator implements HeapSnapshotItemIterator {
    #private;
    edge: JSHeapSnapshotEdge;
    constructor(node: HeapSnapshotNode);
    hasNext(): boolean;
    item(): HeapSnapshotEdge;
    next(): void;
}

declare class HeapSnapshotEdgesProvider extends HeapSnapshotItemProvider {
    snapshot: HeapSnapshot;
    constructor(snapshot: HeapSnapshot, filter: ((arg0: HeapSnapshotEdge) => boolean) | null, edgesIter: HeapSnapshotEdgeIterator | HeapSnapshotRetainerEdgeIterator, indexProvider: HeapSnapshotItemIndexProvider);
    sort(comparator: HeapSnapshotModel_2.HeapSnapshotModel.ComparatorConfig, leftBound: number, rightBound: number, windowLeft: number, windowRight: number): void;
}

declare interface HeapSnapshotHeader {
    title: string;
    meta: HeapSnapshotMetaInfo;
    node_count: number;
    edge_count: number;
    trace_function_count: number;
    root_index: number;
    extra_native_bytes?: number;
}

declare interface HeapSnapshotItem {
    itemIndex(): number;
    serialize(): Object;
}

declare interface HeapSnapshotItemIndexProvider {
    itemForIndex(newIndex: number): HeapSnapshotItem;
}

declare interface HeapSnapshotItemIterator {
    hasNext(): boolean;
    item(): HeapSnapshotItem;
    next(): void;
}

declare abstract class HeapSnapshotItemProvider {
    #private;
    protected readonly iterator: HeapSnapshotItemIterator;
    protected iterationOrder: number[] | null;
    protected currentComparator: HeapSnapshotModel_2.HeapSnapshotModel.ComparatorConfig | null;
    constructor(iterator: HeapSnapshotItemIterator, indexProvider: HeapSnapshotItemIndexProvider);
    protected createIterationOrder(): void;
    isEmpty(): boolean;
    serializeItemsRange(begin: number, end: number): HeapSnapshotModel_2.HeapSnapshotModel.ItemsRange;
    sortAndRewind(comparator: HeapSnapshotModel_2.HeapSnapshotModel.ComparatorConfig): void;
    abstract sort(comparator: HeapSnapshotModel_2.HeapSnapshotModel.ComparatorConfig, leftBound: number, rightBound: number, windowLeft: number, windowRight: number): void;
}

export declare class HeapSnapshotLoader {
    #private;
    parsingComplete: Promise<void>;
    constructor(dispatcher: HeapSnapshotWorkerDispatcher);
    dispose(): void;
    close(): void;
    buildSnapshot(secondWorker: MessagePort): Promise<JSHeapSnapshot>;
    write(chunk: string): void;
}

declare interface HeapSnapshotMetaInfo {
    location_fields: string[];
    node_fields: string[];
    node_types: string[][];
    edge_fields: string[];
    edge_types: string[][];
    trace_function_info_fields: string[];
    trace_node_fields: string[];
    sample_fields: string[];
    type_strings: Record<string, string>;
}

declare namespace HeapSnapshotModel {
    export {
        HeapSnapshotProgressEvent,
        baseSystemDistance,
        baseUnreachableDistance,
        AllocationNodeCallers,
        SerializedAllocationNode,
        AllocationStackFrame,
        Node_2 as Node,
        Edge,
        Aggregate,
        AggregateForDiff,
        Diff,
        DiffForClass,
        ComparatorConfig,
        WorkerCommand,
        ItemsRange,
        StaticData,
        Statistics,
        NodeFilter_2 as NodeFilter,
        SearchConfig,
        Samples,
        Location_2 as Location
    }
}
export { HeapSnapshotModel }

declare namespace HeapSnapshotModel_2 {
    export {
        HeapSnapshotModel
    }
}

declare class HeapSnapshotNode implements HeapSnapshotItem {
    #private;
    snapshot: HeapSnapshot;
    nodeIndex: number;
    constructor(snapshot: HeapSnapshot, nodeIndex?: number);
    distance(): number;
    distanceForRetainersView(): number;
    className(): string;
    classIndex(): number;
    classKeyInternal(): string | number;
    setClassIndex(index: number): void;
    dominatorIndex(): number;
    edges(): HeapSnapshotEdgeIterator;
    edgesCount(): number;
    id(): number;
    rawName(): string;
    isRoot(): boolean;
    isUserRoot(): boolean;
    isHidden(): boolean;
    isArray(): boolean;
    isSynthetic(): boolean;
    isDocumentDOMTreesRoot(): boolean;
    name(): string;
    retainedSize(): number;
    retainers(): HeapSnapshotRetainerEdgeIterator;
    retainersCount(): number;
    selfSize(): number;
    type(): string;
    traceNodeId(): number;
    itemIndex(): number;
    serialize(): HeapSnapshotModel_2.HeapSnapshotModel.Node;
    rawNameIndex(): number;
    edgeIndexesStart(): number;
    edgeIndexesEnd(): number;
    ordinal(): number;
    nextNodeIndex(): number;
    rawType(): number;
    isFlatConsString(): boolean;
    detachedness(): DOMLinkState;
    setDetachedness(detachedness: DOMLinkState): void;
}

declare class HeapSnapshotNodesProvider extends HeapSnapshotItemProvider {
    snapshot: HeapSnapshot;
    constructor(snapshot: HeapSnapshot, nodeIndexes: number[] | Uint32Array);
    nodePosition(snapshotObjectId: number): number;
    private buildCompareFunction;
    sort(comparator: HeapSnapshotModel_2.HeapSnapshotModel.ComparatorConfig, leftBound: number, rightBound: number, windowLeft: number, windowRight: number): void;
}

declare class HeapSnapshotProgress {
    #private;
    constructor(dispatcher?: HeapSnapshotWorkerDispatcher);
    updateStatus(status: string): void;
    updateProgress(title: string, value: number, total: number): void;
    reportProblem(error: string): void;
    private sendUpdateEvent;
}

declare const HeapSnapshotProgressEvent: {
    Update: string;
    BrokenSnapshot: string;
};

declare class HeapSnapshotRetainerEdge implements HeapSnapshotItem {
    #private;
    protected snapshot: HeapSnapshot;
    constructor(snapshot: HeapSnapshot, retainerIndex: number);
    clone(): HeapSnapshotRetainerEdge;
    hasStringName(): boolean;
    name(): string;
    nameIndex(): number;
    node(): HeapSnapshotNode;
    nodeIndex(): number;
    retainerIndex(): number;
    setRetainerIndex(retainerIndex: number): void;
    set edgeIndex(edgeIndex: number);
    private nodeInternal;
    protected edge(): JSHeapSnapshotEdge;
    toString(): string;
    itemIndex(): number;
    serialize(): HeapSnapshotModel_2.HeapSnapshotModel.Edge;
    type(): string;
    isInternal(): boolean;
    getValueForSorting(fieldName: string): number;
}

declare class HeapSnapshotRetainerEdgeIterator implements HeapSnapshotItemIterator {
    #private;
    retainer: JSHeapSnapshotRetainerEdge;
    constructor(retainedNode: HeapSnapshotNode);
    hasNext(): boolean;
    item(): HeapSnapshotRetainerEdge;
    next(): void;
}

declare class HeapSnapshotWorkerDispatcher {
    #private;
    constructor(postMessage: typeof Window.prototype.postMessage);
    sendEvent(name: string, data: unknown): void;
    dispatchMessage({ data, ports }: {
        data: HeapSnapshotModel_2.HeapSnapshotModel.WorkerCommand;
        ports: readonly MessagePort[];
    }): Promise<void>;
}

/**
 * Turns a Union type (a | b) into an Intersection type (a & b).
 * This is a helper type to implement the "NoUnion" guard.
 *
 * Adapted from https://stackoverflow.com/a/50375286.
 *
 * The tautological `T extends any` is necessary to trigger distributivity for
 * plain unions, e.g. in IntersectionFromUnion<'a'|'b'> TypeScript expands it
 * to  ('a' extends any ? (arg: 'a') => void : never)
 *  |  ('b' extends any ? (arg: 'b') => void : never)
 *
 * The second extends clause then asks TypeScript to find a type of the form
 * `(arg: infer U) => void` that upper-bounds the union, i.e., intuitively,
 * a type that converts to each of the union members. This forces U to be the
 * intersection of 'a' and 'b' in the example.
 *
 * Please note that some intersection types are simply impossible, e.g.
 * `string & number`. There is no type that fulfills both at the same time. A
 * union of this kind is reduced to `never`.
 */
declare type IntersectionFromUnion<T> = (T extends any ? (arg: T) => void : never) extends ((arg: infer U) => void) ? U : never;

declare const intersectOrdered: <T>(array1: T[], array2: T[], comparator: (a: T, b: T) => number) => T[];

declare const inverse: <K, V>(map: Map<K, V>) => Multimap<V, K>;

declare function isEnterOrSpaceKey(event: KeyboardEvent): boolean;

declare function isEscKey(event: KeyboardEvent): boolean;

/**
 * Tests if the `inputStr` is following the extended Kebab Case naming convetion,
 * where words are separated with either a dash (`-`) or a dot (`.`), and all
 * characters must be lower-case alphanumeric.
 *
 * For example, it will yield `true` for `'my.amazing-string.literal'`, but `false`
 * for `'Another.AmazingLiteral'` or '`another_amazing_literal'`.
 *
 * @param inputStr the input string to test.
 * @return `true` if the `inputStr` follows the extended Kebab Case convention.
 */
declare const isExtendedKebabCase: (inputStr: string) => boolean;

/**
 * @returns true iff `mimeType` has textual content. Concretely we return true if:
 *   - `mimeType` starts with "text/" or "multipart/"
 *   - `mimeType` ends with "+xml"
 *   - `mimeType` contains "json"
 *   - if `mimeType` is one of a predefined list textual mime types.
 */
declare function isTextType(mimeType: string): boolean;

declare function isUserVisibleError(error: unknown): error is UserVisibleError_2;

declare const isValid: (date: Date) => boolean;

declare const isWhitespace: (inputString: string) => boolean;

declare class ItemsRange {
    startPosition: number;
    endPosition: number;
    totalLength: number;
    items: Array<Node_2 | Edge>;
    constructor(startPosition: number, endPosition: number, totalLength: number, items: Array<Node_2 | Edge>);
}

export declare class JSHeapSnapshot extends HeapSnapshot {
    #private;
    readonly nodeFlags: {
        canBeQueried: number;
        detachedDOMTreeNode: number;
        pageObject: number;
    };
    private flags;
    constructor(profile: Profile, progress: HeapSnapshotProgress);
    createNode(nodeIndex?: number): JSHeapSnapshotNode;
    createEdge(edgeIndex: number): JSHeapSnapshotEdge;
    createRetainingEdge(retainerIndex: number): JSHeapSnapshotRetainerEdge;
    containmentEdgesFilter(): (arg0: HeapSnapshotEdge) => boolean;
    retainingEdgesFilter(): (arg0: HeapSnapshotEdge) => boolean;
    calculateFlags(): void;
    calculateShallowSizes(): void;
    calculateDistances(isForRetainersView: boolean): void;
    isUserRoot(node: HeapSnapshotNode): boolean;
    userObjectsMapAndFlag(): {
        map: Uint8Array;
        flag: number;
    } | null;
    flagsOfNode(node: HeapSnapshotNode): number;
    private markDetachedDOMTreeNodes;
    private markQueriableHeapObjects;
    private markPageOwnedNodes;
    calculateStatistics(): void;
    private calculateArraySize;
    getStatistics(): HeapSnapshotModel_2.HeapSnapshotModel.Statistics;
}

declare class JSHeapSnapshotEdge extends HeapSnapshotEdge {
    clone(): JSHeapSnapshotEdge;
    hasStringName(): boolean;
    isElement(): boolean;
    isHidden(): boolean;
    isWeak(): boolean;
    isInternal(): boolean;
    isInvisible(): boolean;
    isShortcut(): boolean;
    name(): string;
    toString(): string;
    private hasStringNameInternal;
    private nameInternal;
    private nameOrIndex;
    rawType(): number;
    nameIndex(): number;
}

declare class JSHeapSnapshotNode extends HeapSnapshotNode {
    #private;
    canBeQueried(): boolean;
    name(): string;
    private consStringName;
    static formatPropertyName(name: string): string;
    id(): number;
    isHidden(): boolean;
    isArray(): boolean;
    isSynthetic(): boolean;
    isNative(): boolean;
    isUserRoot(): boolean;
    isDocumentDOMTreesRoot(): boolean;
    serialize(): HeapSnapshotModel_2.HeapSnapshotModel.Node;
}

declare class JSHeapSnapshotRetainerEdge extends HeapSnapshotRetainerEdge {
    clone(): JSHeapSnapshotRetainerEdge;
    isHidden(): boolean;
    isInvisible(): boolean;
    isShortcut(): boolean;
    isWeak(): boolean;
}

declare namespace KeyboardUtilities {
    export {
        keyIsArrowKey,
        isEscKey,
        isEnterOrSpaceKey,
        ArrowKey,
        PageKey,
        ENTER_KEY,
        ESCAPE_KEY,
        TAB_KEY,
        ARROW_KEYS
    }
}

declare function keyIsArrowKey(key: string): key is ArrowKey;

declare const LocalizedEmptyString: LocalizedString;

declare type LocalizedString = Brand_2<string, 'LocalizedString'>;

declare class Location_2 {
    scriptId: number;
    lineNumber: number;
    columnNumber: number;
    constructor(scriptId: number, lineNumber: number, columnNumber: number);
}

/**
 * Returns the index of the element closest to the needle that is equal to or
 * greater than it. Assumes that the provided array is sorted.
 *
 * If no element is found, the right bound is returned.
 *
 * Uses the provided comparator function to determine if two items are equal or
 * if one is greater than the other. If you are working with strings or
 * numbers, you can use ArrayUtilities.DEFAULT_COMPARATOR. Otherwise, you
 * should define one that takes the needle element and an element from the
 * array and returns a positive or negative number to indicate which is greater
 * than the other.
 *
 * When specified, |left| (inclusive) and |right| (exclusive) indices
 * define the search window.
 */
declare function lowerBound<T>(array: Uint32Array | Int32Array, needle: T, comparator: (needle: T, b: number) => number, left?: number, right?: number): number;

declare function lowerBound<S, T>(array: S[], needle: T, comparator: (needle: T, b: S) => number, left?: number, right?: number): number;

declare function lowerBound<S, T>(array: readonly S[], needle: T, comparator: (needle: T, b: S) => number, left?: number, right?: number): number;

declare type LowerCaseString = Brand_2<string, 'lowerCaseStringTag'>;

declare namespace MapUtilities {
    export {
        getWithDefault,
        inverse,
        Multimap
    }
}

declare const mergeOrdered: <T>(array1: T[], array2: T[], comparator: (a: T, b: T) => number) => T[];

declare type MicroSeconds = Brand_2<number, 'MicroSeconds'>;

declare function microSecondsToMilliSeconds(x: MicroSeconds): MilliSeconds;

declare type MilliSeconds = Brand_2<number, 'MilliSeconds'>;

declare function milliSecondsToSeconds(x: MilliSeconds): Seconds;

declare namespace MimeType_2 {
    export {
        isTextType,
        parseContentType,
        MimeType_3 as MimeType
    }
}

declare const enum MimeType_3 {
    HTML = "text/html",
    XML = "text/xml",
    PLAIN = "text/plain",
    XHTML = "application/xhtml+xml",
    SVG = "image/svg+xml",
    CSS = "text/css",
    XSL = "text/xsl",
    VTT = "text/vtt",
    PDF = "application/pdf",
    EVENTSTREAM = "text/event-stream"
}

declare const mod: (m: number, n: number) => number;

declare class Multimap<K, V> {
    private map;
    set(key: K, value: V): void;
    get(key: K): Set<V>;
    has(key: K): boolean;
    hasValue(key: K, value: V): boolean;
    get size(): number;
    delete(key: K, value: V): boolean;
    deleteAll(key: K): void;
    keysArray(): K[];
    keys(): IterableIterator<K>;
    valuesArray(): V[];
    clear(): void;
}

declare const naturalOrderComparator: (a: string, b: string) => number;

/**
 * Obtains the first item in the array that satisfies the predicate function.
 * So, for example, if the array was arr = [2, 4, 6, 8, 10], and you are looking for
 * the first item arr[i] such that arr[i] > 5 you would be returned 2, because
 * array[2] is 6, the first item in the array that satisfies the
 * predicate function.
 *
 * Please note: this presupposes that the array is already ordered.
 */
declare function nearestIndexFromBeginning<T>(arr: T[], predicate: (arrayItem: T) => boolean): number | null;

/**
 * Obtains the last item in the array that satisfies the predicate function.
 * So, for example, if the array was arr = [2, 4, 6, 8, 10], and you are looking for
 * the last item arr[i] such that arr[i] < 5 you would be returned 1, because
 * arr[1] is 4, the last item in the array that satisfies the
 * predicate function.
 *
 * Please note: this presupposes that the array is already ordered.
 */
declare function nearestIndexFromEnd<T>(arr: readonly T[], predicate: (arrayItem: T) => boolean): number | null;

declare class Node_2 {
    id: number;
    name: string;
    distance: number;
    nodeIndex: number;
    retainedSize: number;
    selfSize: number;
    type: string;
    canBeQueried: boolean;
    detachedDOMTreeNode: boolean;
    isAddedNotRemoved: boolean | null;
    ignored: boolean;
    constructor(id: number, name: string, distance: number, nodeIndex: number, retainedSize: number, selfSize: number, type: string);
}

declare class NodeFilter_2 {
    minNodeId: number | undefined;
    maxNodeId: number | undefined;
    allocationNodeId: number | undefined;
    filterName: string | undefined;
    constructor(minNodeId?: number, maxNodeId?: number);
    equals(o: NodeFilter_2): boolean;
}

/**
 * When writing generic code it may be desired to disallow Union types from
 * being passed. This type can be used in those cases.
 *
 *   function foo<T>(argument: NoUnion<T>) {...}
 *
 * Would result in a compile error for foo<a|b>(...); invocations as `argument`
 * would be typed as `never`.
 *
 * Adapted from https://stackoverflow.com/a/50641073.
 *
 * Conditional types become distributive when receiving a union type. To
 * prevent this from happening, we use `[T] extends [IntersectionFromUnion<T>]`
 * instead of `T extends IntersectionFromUnion<T>`.
 * See: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */
declare type NoUnion<T> = [T] extends [IntersectionFromUnion<T>] ? T : never;

declare type NumberComparator = (a: number, b: number) => number;

declare namespace NumberUtilities {
    export {
        clamp,
        mod,
        toFixedIfFloating,
        floor,
        greatestCommonDivisor,
        aspectRatio,
        withThousandsSeparator
    }
}

declare const enum PageKey {
    UP = "PageUp",
    DOWN = "PageDown"
}

/**
 * Port of net::HttpUtils::ParseContentType to extract mimeType and charset from
 * the 'Content-Type' header.
 */
declare function parseContentType(contentType: string): {
    mimeType: string | null;
    charset: string | null;
};

declare type PickFieldsThatExtend<Type, Selector> = Pick<Type, FieldsThatExtend<Type, Selector>>;

declare namespace Platform {
    export {
        assertNever,
        assertNotNullOrUndefined,
        assertUnhandled,
        ArrayUtilities,
        Brand,
        Constructor,
        DateUtilities,
        DevToolsPath,
        DOMUtilities,
        KeyboardUtilities,
        MapUtilities,
        MimeType_2 as MimeType,
        NumberUtilities,
        StringUtilities,
        Timing,
        TypedArrayUtilities,
        TypeScriptUtilities,
        UIString,
        UserVisibleError
    }
}

declare interface Profile {
    root_index: number;
    nodes: Platform.TypedArrayUtilities.BigUint32Array;
    edges: Platform.TypedArrayUtilities.BigUint32Array;
    snapshot: HeapSnapshotHeader;
    samples: number[];
    strings: string[];
    locations: number[];
    trace_function_infos: Uint32Array;
    trace_tree: Object;
}

declare function rangeOfWord(rootNode: Node, offset: number, stopCharacters: string, stayWithinNode: Node, direction?: string): Range;

/**
 * File paths in DevTools that are represented as unencoded absolute
 * or relative paths.
 *
 * @example '/Hello World/file.js'
 */
declare type RawPathString = Brand_2<string, 'RawPathString'>;

declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

/**
 * Note this does not recursively
 * make Array items readonly at the moment
 */
declare type RecursiveReadonly<T> = {
    [P in keyof T]: Readonly<RecursiveReadonly<T[P]>>;
};

declare const regexSpecialCharacters: () => string;

declare const removeElement: <T>(array: T[], element: T, firstOnly?: boolean) => boolean;

declare const removeURLFragment: (inputStr: string) => string;

declare const replaceControlCharacters: (inputString: string) => string;

declare const replaceLast: (input: string, search: string, replacement: string) => string;

declare interface Retainers {
    firstRetainerIndex: Uint32Array;
    retainingNodes: Uint32Array;
    retainingEdges: Uint32Array;
}

declare const reverse: (inputString: string) => string;

declare class Samples {
    timestamps: number[];
    lastAssignedIds: number[];
    sizes: number[];
    constructor(timestamps: number[], lastAssignedIds: number[], sizes: number[]);
}

declare class SearchConfig {
    query: string;
    caseSensitive: boolean;
    isRegex: boolean;
    shouldJump: boolean;
    jumpBackward: boolean;
    constructor(query: string, caseSensitive: boolean, isRegex: boolean, shouldJump: boolean, jumpBackward: boolean);
    toSearchRegex(_global?: boolean): {
        regex: RegExp;
        fromQuery: boolean;
    };
}

declare interface SecondaryInitArgumentsStep1 {
    edgeToNodeOrdinals: Uint32Array;
    firstEdgeIndexes: Uint32Array;
    nodeCount: number;
    edgeFieldsCount: number;
    nodeFieldCount: number;
}

declare interface SecondaryInitArgumentsStep2 {
    rootNodeOrdinal: number;
    essentialEdgesBuffer: ArrayBuffer;
}

declare interface SecondaryInitArgumentsStep3 {
    nodeSelfSizes: Uint32Array;
}

export declare class SecondaryInitManager {
    argsStep1: Promise<SecondaryInitArgumentsStep1>;
    argsStep2: Promise<SecondaryInitArgumentsStep2>;
    argsStep3: Promise<SecondaryInitArgumentsStep3>;
    constructor(port: MessagePort);
    private getNodeSelfSizes;
    private initialize;
}

declare type Seconds = Brand_2<number, 'Seconds'>;

declare class SerializedAllocationNode {
    id: number;
    name: string;
    scriptName: string;
    scriptId: number;
    line: number;
    column: number;
    count: number;
    size: number;
    liveCount: number;
    liveSize: number;
    hasChildren: boolean;
    constructor(nodeId: number, functionName: string, scriptName: string, scriptId: number, line: number, column: number, count: number, size: number, liveCount: number, liveSize: number, hasChildren: boolean);
}

declare const SINGLE_QUOTE = "'";

declare function sortRange(array: number[], comparator: NumberComparator, leftBound: number, rightBound: number, sortWindowLeft: number, sortWindowRight: number): number[];

/**
 * This implements a subset of the sprintf() function described in the Single UNIX
 * Specification. It supports the %s, %f, %d, and %% formatting specifiers, and
 * understands the %m$d notation to select the m-th parameter for this substitution,
 * as well as the optional precision for %s, %f, and %d.
 *
 * @param fmt format string.
 * @param args parameters to the format string.
 * @returns the formatted output string.
 */
declare const sprintf: (fmt: string, ...args: unknown[]) => string;

declare class StaticData {
    nodeCount: number;
    rootNodeIndex: number;
    totalSize: number;
    maxJSObjectId: number;
    constructor(nodeCount: number, rootNodeIndex: number, totalSize: number, maxJSObjectId: number);
}

declare interface Statistics {
    total: number;
    native: {
        total: number;
        typedArrays: number;
    };
    v8heap: {
        total: number;
        code: number;
        jsArrays: number;
        strings: number;
        system: number;
    };
}

declare const stringifyWithPrecision: (s: number, precision?: number) => string;

declare namespace StringUtilities {
    export {
        toKebabCaseKeys,
        escapeCharacters,
        formatAsJSLiteral,
        sprintf,
        toBase64,
        findIndexesOfSubString,
        findLineEndingIndexes,
        isWhitespace,
        trimURL,
        collapseWhitespace,
        reverse,
        replaceControlCharacters,
        countWtf8Bytes,
        stripLineBreaks,
        isExtendedKebabCase,
        toTitleCase,
        removeURLFragment,
        regexSpecialCharacters,
        filterRegex,
        createSearchRegex,
        caseInsensetiveComparator,
        hashCode,
        compare,
        trimMiddle,
        trimEndWithMaxLength,
        escapeForRegExp,
        naturalOrderComparator,
        base64ToSize,
        SINGLE_QUOTE,
        DOUBLE_QUOTE,
        findUnclosedCssQuote,
        countUnmatchedLeftParentheses,
        createPlainTextSearchRegex,
        LowerCaseString,
        toLowerCaseString,
        toKebabCase,
        replaceLast,
        stringifyWithPrecision,
        concatBase64
    }
}

declare const stripLineBreaks: (inputStr: string) => string;

declare const TAB_KEY = "Tab";

declare namespace Timing {
    export {
        milliSecondsToSeconds,
        microSecondsToMilliSeconds,
        Seconds,
        MilliSeconds,
        MicroSeconds
    }
}

declare const toBase64: (inputString: string) => string;

declare const toFixedIfFloating: (value: string) => string;

declare const toISO8601Compact: (date: Date) => string;

declare const toKebabCase: (input: string) => Lowercase<string>;

declare function toKebabCaseKeys(settingValue: Record<string, any>): Record<string, any>;

declare const toLowerCaseString: (input: string) => LowerCaseString;

declare const toTitleCase: (inputStr: string) => string;

declare const trimEndWithMaxLength: (str: string, maxLength: number) => string;

declare const trimMiddle: (str: string, maxLength: number) => string;

declare const trimURL: (url: string, baseURLDomain?: string) => string;

declare namespace TypedArrayUtilities {
    export {
        createExpandableBigUint32Array,
        createFixedBigUint32Array,
        createBitVector,
        BigUint32Array,
        BitVector
    }
}

declare namespace TypeScriptUtilities {
    export {
        assertNotNullOrUndefined,
        assertNever,
        assertUnhandled,
        FieldsThatExtend,
        PickFieldsThatExtend,
        NoUnion,
        RecursivePartial,
        RecursiveReadonly
    }
}

declare namespace UIString {
    export {
        LocalizedString,
        LocalizedEmptyString
    }
}

/**
 * Returns the index of the element closest to the needle that is greater than
 * it. Assumes that the provided array is sorted.
 *
 * If no element is found, the right bound is returned.
 *
 * Uses the provided comparator function to determine if two items are equal or
 * if one is greater than the other. If you are working with strings or
 * numbers, you can use ArrayUtilities.DEFAULT_COMPARATOR. Otherwise, you
 * should define one that takes the needle element and an element from the
 * array and returns a positive or negative number to indicate which is greater
 * than the other.
 *
 * When specified, |left| (inclusive) and |right| (exclusive) indices
 * define the search window.
 */
declare function upperBound<T>(array: Uint32Array, needle: T, comparator: (needle: T, b: number) => number, left?: number, right?: number): number;

declare function upperBound<S, T>(array: S[], needle: T, comparator: (needle: T, b: S) => number, left?: number, right?: number): number;

/**
 * URLs are in DevTools are repsented as encoded URL strings.
 *
 * @example 'file:///Hello%20World/file/js'
 */
declare type UrlString = Brand_2<string, 'UrlString'>;

/**
 * Tagged template helper to construct `UrlString`s in a more readable form,
 * without having to sprinkle casts throughout the codebase. Primarily useful
 * for writing unit tests.
 *
 * Usage:
 * ```js
 * const url1 = urlString`https://www.example.com/404.html`;
 * const url2 = urlString`http://${host}/path/to/file.js`;
 * ```
 *
 * This is implemented as a wrapper around `String.raw` for convenience. This
 * function doesn't perform any kind of validation that the returned string is
 * really a valid `UrlString`.
 *
 * @param strings the string parts of the template.
 * @param values the dynamic values of the template.
 * @return the string constructed from `strings` and `values` casted to an
 *         `UrlString`.
 */
declare const urlString: (strings: ArrayLike<string>, ...values: any[]) => UrlString;

declare namespace UserVisibleError {
    export {
        isUserVisibleError,
        UserVisibleError_2 as UserVisibleError
    }
}

/**
 * Represents an error that might become visible to the user. Where errors
 * might be surfaced to the user (such as by displaying the message to the
 * console), this class should be used to enforce that the message is
 * localized on the way in.
 */
declare class UserVisibleError_2 extends Error {
    readonly message: LocalizedString;
    constructor(message: LocalizedString);
}

declare const withThousandsSeparator: (num: number) => string;

declare class WorkerCommand {
    callId: number;
    disposition: string;
    objectId: number;
    newObjectId: number;
    methodName: string;
    methodArguments: any[];
    source: string;
}

export { }
