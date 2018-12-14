import * as React from 'react';
export interface DialoguePayload {
    className: string;
    content: any;
    footer?: any;
    height?: string;
    hero?: any;
    id: string | number;
    minHeight?: string;
    onClose?: () => void;
    text?: string | null;
    title: string;
    triggerClose?: boolean;
    width?: string;
    withoutOffset?: boolean;
}
export interface DialoguesContextInterface {
    items?: DialoguePayload[];
    addDialogue: (dialogue: DialoguePayload) => void;
    closeDialogue: (id: string | number) => void;
    removeDialogue: (id: string | number) => void;
}
export declare const DialoguesContext: React.Context<DialoguesContextInterface>;
declare class DialoguesProvider extends React.Component {
    state: {
        items: any[];
    };
    addDialogue: (dialogue: DialoguePayload) => void;
    closeDialogue: (id: string | number) => void;
    removeDialogue: (id: string | number) => void;
    render(): JSX.Element;
}
export default DialoguesProvider;
