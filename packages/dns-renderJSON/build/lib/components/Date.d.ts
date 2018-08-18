import * as React from 'react';
export interface DateTypeProps {
    data: any;
    name: string;
}
export interface DateTypeState {
    error: boolean | string;
    addToClipboardVisible: boolean;
}
export declare class DateType extends React.Component<DateTypeProps, DateTypeState> {
    constructor(props: DateTypeProps);
    validateInput: () => void;
    handleAddToClipboard: (data: any) => void;
    render(): JSX.Element;
}
