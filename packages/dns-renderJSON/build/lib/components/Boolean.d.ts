import * as React from 'react';
export interface BooleanProps {
    data: boolean;
    name: string;
}
export interface BooleanState {
    error: boolean | string;
}
export declare class Boolean extends React.Component<BooleanProps, BooleanState> {
    constructor(props: BooleanProps);
    validateInput: () => void;
    render(): JSX.Element;
}
