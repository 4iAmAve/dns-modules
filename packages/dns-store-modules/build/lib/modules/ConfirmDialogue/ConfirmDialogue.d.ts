/// <reference types="react-redux" />
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
export declare const connectedConfirmDialogue: React.ComponentClass<Pick<ConfirmDialogueProps, "classNames">, React.ComponentState> & {
    WrappedComponent: React.ComponentType<ConfirmDialogueProps>;
};
