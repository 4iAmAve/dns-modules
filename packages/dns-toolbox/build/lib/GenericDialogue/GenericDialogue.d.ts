import * as React from 'react';
import { GenericDialogue as GenericDialogueD } from '../definitions';
import './GenericDialogue.css';
export interface GenericDialogueProps extends GenericDialogueD {
}
export interface GenericDialogueState {
    visible: boolean;
}
export declare class GenericDialogue extends React.Component<GenericDialogueProps, GenericDialogueState> {
    static defaultProps: Partial<GenericDialogueProps>;
    _visibilityTimeout: number;
    _closeTimeout: number;
    constructor(props: GenericDialogueProps);
    componentDidUpdate(prevProps: GenericDialogueProps): void;
    makeVisible: () => void;
    closeDialogue: () => void;
    render(): JSX.Element;
}
