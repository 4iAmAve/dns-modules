import * as React from 'react';
import { GenericDialogue as GenericDialogueD } from '../definitions';
import './GenericDialogue.css';
export interface GenericDialogueProps extends GenericDialogueD {
}
export interface GenericDialogueState {
}
export declare class GenericDialogue extends React.Component<GenericDialogueProps, GenericDialogueState> {
    static defaultProps: Partial<GenericDialogueProps>;
    render(): JSX.Element;
}
