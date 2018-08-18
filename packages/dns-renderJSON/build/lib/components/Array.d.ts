import * as React from 'react';
export interface ArrayProps {
    data: any[];
    name: string;
    collapsed: boolean;
}
export interface ArrayState {
    error: boolean | string;
    collapsed: boolean;
    size: number;
}
export declare class ArrayType extends React.Component<ArrayProps, ArrayState> {
    constructor(props: ArrayProps);
    validateInput: () => void;
    generateObject: (data: any) => JSX.Element;
    toggleCollapsed: () => void;
    render(): JSX.Element;
}
