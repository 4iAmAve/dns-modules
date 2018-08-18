import * as React from 'react';
export interface FunctionProps {
    data: () => void;
    name: string;
    collapsed: boolean;
}
export interface FunctionState extends FunctionProps {
    error: boolean | string;
    collapsed: boolean;
}
export declare class Function extends React.Component<FunctionProps, FunctionState> {
    static defaultProps: Partial<FunctionProps>;
    constructor(props: FunctionProps);
    validateInput: () => void;
    getFunctionDisplay: (collapsed: boolean) => string | JSX.Element;
    toggleCollapsed: () => void;
    render(): JSX.Element;
}
