export interface DOMPinnedWebIDLProp {
    global?: boolean;
    specs?: number;
    rules?: DOMPinnedWebIDLRule[];
}
export interface DOMPinnedWebIDLType {
    inheritance?: string;
    includes?: string[];
    props?: {
        [PropName: string]: DOMPinnedWebIDLProp;
    };
    rules?: DOMPinnedWebIDLRule[];
}
interface DOMPinnedWebIDLRule {
    when: string;
    is: string;
}
interface JavaScriptMetaData {
    signaturesForNativeFunction(name: string): string[][] | null;
    signaturesForInstanceMethod(name: string, receiverClassName: string): string[][] | null;
    signaturesForStaticMethod(name: string, receiverConstructorName: string): string[][] | null;
}
