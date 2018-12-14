import * as React from 'react';
export interface ConfirmDialoguePayload {
    title?: string;
    content?: string;
    onConfirm: () => void;
}
export interface ConfirmDialogueContextInterface {
    data: ConfirmDialoguePayload;
    triggerClose: boolean;
    openConfirmDialogue: (data: ConfirmDialoguePayload) => void;
    closeConfirmDialogue: () => void;
    removeConfirmDialogue: () => void;
}
export declare const ConfirmDialogueContext: React.Context<ConfirmDialogueContextInterface>;
declare class ConfirmDialogueProvider extends React.Component {
    state: {
        data: any;
        triggerClose: boolean;
    };
    openConfirmDialogue: (data: ConfirmDialoguePayload) => void;
    closeConfirmDialogue: () => void;
    removeConfirmDialogue: () => void;
    render(): JSX.Element;
}
export default ConfirmDialogueProvider;
