import '../../../ui/components/icon_button/icon_button.js';
import { type IconInfo } from './CSSPropertyIconResolver.js';
declare global {
    interface HTMLElementEventMap {
        propertyselected: PropertySelectedEvent;
        propertydeselected: PropertyDeselectedEvent;
    }
}
interface FlexEditorData {
    authoredProperties: Map<string, string>;
    computedProperties: Map<string, string>;
}
interface EditableProperty {
    propertyName: string;
    propertyValues: string[];
}
class PropertySelectedEvent extends Event {
    static readonly eventName = "propertyselected";
    data: {
        name: string;
        value: string;
    };
    constructor(name: string, value: string);
}
class PropertyDeselectedEvent extends Event {
    static readonly eventName = "propertydeselected";
    data: {
        name: string;
        value: string;
    };
    constructor(name: string, value: string);
}
class StylePropertyEditor extends HTMLElement {
    #private;
    protected readonly editableProperties: EditableProperty[];
    getEditableProperties(): EditableProperty[];
    set data(data: FlexEditorData);
    protected findIcon(_query: string, _computedProperties: Map<string, string>): IconInfo | null;
}
class FlexboxEditor extends StylePropertyEditor {
    readonly jslogContext = "cssFlexboxEditor";
    protected readonly editableProperties: EditableProperty[];
    protected findIcon(query: string, computedProperties: Map<string, string>): IconInfo | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-flexbox-editor': FlexboxEditor;
    }
}
class GridEditor extends StylePropertyEditor {
    readonly jslogContext = "cssGridEditor";
    protected readonly editableProperties: EditableProperty[];
    protected findIcon(query: string, computedProperties: Map<string, string>): IconInfo | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'devtools-grid-editor': GridEditor;
    }
}
export {};
