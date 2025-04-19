class InplaceEditor<T> {
    private focusRestorer?;
    static startEditing<T>(element: Element, config: Config<T>): Controller | null;
    editorContent(editingContext: EditingContext<T>): string;
    setUpEditor(editingContext: EditingContext<T>): void;
    closeEditor(editingContext: EditingContext<T>): void;
    cancelEditing(editingContext: EditingContext<T>): void;
    startEditing(element: Element, config: Config<T>): Controller | null;
}
type CommitHandler<T> = (element: Element, newText: string, oldText: string | null, context: T, moveDirection: string) => void;
type CancelHandler<T> = (element: Element, context: T) => void;
type BlurHandler = (element: Element, event?: Event) => boolean;
export declare class Config<T> {
    commitHandler: CommitHandler<T>;
    cancelHandler: CancelHandler<T>;
    context: T;
    blurHandler: BlurHandler;
    pasteHandler?: EventHandler;
    postKeydownFinishHandler?: EventHandler;
    constructor(commitHandler: CommitHandler<T>, cancelHandler: CancelHandler<T>, context: T, blurHandler?: BlurHandler);
    setPostKeydownFinishHandler(postKeydownFinishHandler: EventHandler): void;
}
type EventHandler = (event: Event) => string | undefined;
interface Controller {
    cancel: () => void;
    commit: () => void;
}
interface EditingContext<T> {
    element: Element;
    config: Config<T>;
    oldRole: string | null;
    oldText: string | null;
    oldTabIndex: string | null;
}
