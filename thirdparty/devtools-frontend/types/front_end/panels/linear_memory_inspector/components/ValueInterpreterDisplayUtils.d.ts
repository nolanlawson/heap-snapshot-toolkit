const VALUE_INTEPRETER_MAX_NUM_BYTES = 8;
export declare const enum ValueType {
    INT8 = "Integer 8-bit",
    INT16 = "Integer 16-bit",
    INT32 = "Integer 32-bit",
    INT64 = "Integer 64-bit",
    FLOAT32 = "Float 32-bit",
    FLOAT64 = "Float 64-bit",
    POINTER32 = "Pointer 32-bit",
    POINTER64 = "Pointer 64-bit"
}
export declare const enum Endianness {
    LITTLE = "Little Endian",
    BIG = "Big Endian"
}
export declare const enum ValueTypeMode {
    DECIMAL = "dec",
    HEXADECIMAL = "hex",
    OCTAL = "oct",
    SCIENTIFIC = "sci"
}
declare function getDefaultValueTypeMapping(): Map<ValueType, ValueTypeMode>;
const VALUE_TYPE_MODE_LIST: ValueTypeMode[];
declare function valueTypeToLocalizedString(valueType: ValueType): string;
declare function isValidMode(type: ValueType, mode: ValueTypeMode): boolean;
declare function isNumber(type: ValueType): boolean;
declare function getPointerAddress(type: ValueType, buffer: ArrayBuffer, endianness: Endianness): number | bigint;
declare function isPointer(type: ValueType): boolean;
interface FormatData {
    buffer: ArrayBuffer;
    type: ValueType;
    endianness: Endianness;
    signed: boolean;
    mode?: ValueTypeMode;
}
declare function format(formatData: FormatData): string;
declare function formatFloat(value: number, mode: ValueTypeMode): string;
declare function formatInteger(value: number | bigint, mode: ValueTypeMode): string;
