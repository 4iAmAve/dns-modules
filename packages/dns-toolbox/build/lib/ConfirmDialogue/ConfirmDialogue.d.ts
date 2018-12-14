import * as React from 'react';
import { GenericDialogue } from '../definitions';
import './ConfirmDialogue.css';
export interface ConfirmDialogueProps extends GenericDialogue {
    onConfirm: (e: any) => void;
}
export interface ConfirmDialogueState {
}
export declare class ConfirmDialogue extends React.Component<ConfirmDialogueProps, ConfirmDialogueState> {
    static defaultProps: Partial<ConfirmDialogueProps>;
    _inputRef: HTMLElement;
    componentDidMount(): void;
    handleKeyup: (e: any) => void;
    confirmDialogue: () => void;
    closeDialogue: () => void;
    handleInputRef: (ref: any) => any;
    render(): JSX.Element;
}
