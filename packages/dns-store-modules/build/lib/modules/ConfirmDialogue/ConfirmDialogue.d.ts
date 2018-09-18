import * as React from 'react';
import { ConfirmDialogueState as ConfirmDialogueStateReducerState } from '../../reducers/confirmDialogue';
import './ConfirmDialogue.css';
export interface ConfirmDialogueProps {
    confirmDialogue: ConfirmDialogueStateReducerState;
    onCloseDialogue: () => void;
    classNames?: any;
}
export interface ConfirmDialogueState {
}
declare class ConfirmDialogue extends React.Component<ConfirmDialogueProps, ConfirmDialogueState> {
    static defaultProps: Partial<ConfirmDialogueProps>;
    private inputRef;
    handleKeyup: (e: any) => void;
    onCloseClick: () => void;
    onConfirmClick: () => void;
    handleInputRef: (ref: any) => any;
    render(): JSX.Element;
}
export declare const connectedConfirmDialogue: import("react-redux").ConnectedComponentClass<typeof ConfirmDialogue, Pick<ConfirmDialogueProps, "classNames">>;
export {};
