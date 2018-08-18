import * as React from 'react';
export interface NumberProps {
    data: number;
    name: string;
}
export interface NumberState {
    addToClipboardVisible: boolean;
    error: boolean | string;
}
export declare class Number extends React.Component<NumberProps, NumberState> {
    constructor(props: NumberProps);
    validateInput: () => void;
    handleAddToClipboard: (data: any) => void;
    render(): JSX.Element;
}
