import * as React from 'react';
import './Dialogues.css';
export interface DialoguesProps {
}
export interface DialoguesState {
}
export declare const getAddDialogue: () => () => void;
export declare const getCloseDialogue: () => () => void;
export declare class Dialogues extends React.Component<DialoguesProps, DialoguesState> {
    render(): JSX.Element;
}
