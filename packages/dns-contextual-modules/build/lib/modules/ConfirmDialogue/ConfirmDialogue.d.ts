import * as React from 'react';
import './ConfirmDialogue.css';
export interface ConfirmDialogueProps {
}
export interface ConfirmDialogueState {
}
export declare const getOpenConfirmDialogue: () => () => void;
export declare class ConfirmDialogue extends React.Component<ConfirmDialogueProps, ConfirmDialogueState> {
    _inputRef: HTMLElement;
    setFocusToHiddenInput(): void;
    handleKeyup: (e: any) => void;
    onConfirmClick: () => void;
    onCloseClick: () => void;
    getFooterButtons: () => JSX.Element;
    getContent: (content: any) => JSX.Element;
    handleInputRef: (ref: any) => any;
    render(): JSX.Element;
}
