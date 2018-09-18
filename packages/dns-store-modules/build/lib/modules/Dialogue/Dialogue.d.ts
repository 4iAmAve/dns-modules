import * as React from 'react';
import { GenericDialogueD } from '@dns/toolbox';
import { DialoguesState as DialogueReducerState } from '../../reducers/dialogues';
import './Dialogue.css';
export interface DialogueProps extends GenericDialogueD {
    id: string | number;
    title: string | any | null;
    content?: any | null;
    footer?: any;
    hero?: any;
    onSubscribeToDialoguesStore: (id: string | number) => void;
    onCloseDialogue: (id: string | number) => void;
    dialogues: DialogueReducerState;
    containerClassNames?: any;
    withoutCloseButton?: boolean;
    onClose?: () => void;
}
export interface DialogueState {
}
declare class Dialogue extends React.Component<DialogueProps, DialogueState> {
    static defaultProps: Partial<DialogueProps>;
    constructor(props: DialogueProps);
    componentDidUpdate(prevProps: DialogueProps): void;
    handleEscapeClick: (e: any) => void;
    onCloseClick: () => void;
    render(): JSX.Element;
}
export declare const connectedDialogue: import("react-redux").ConnectedComponentClass<typeof Dialogue, Pick<DialogueProps, "content" | "height" | "minHeight" | "width" | "footer" | "title" | "text" | "classNames" | "id" | "buttons" | "hero" | "containerClassNames" | "withoutCloseButton" | "onClose" | "withoutOffset"> & object>;
export {};
