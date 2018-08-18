import * as React from 'react';
export interface StringProps {
    data: string;
    name: string;
    cutOff: boolean;
    cutOffThreshold: number;
}
export interface StringState {
    error: boolean | string;
    cutOff: boolean;
    addToClipboardVisible: boolean;
}
export declare class String extends React.Component<StringProps, StringState> {
    constructor(props: StringProps);
    validateInput: () => void;
    handleAddToClipboard: (data: any) => void;
    render(): JSX.Element;
}
