import * as React from 'react';
import './Input.css';
export interface InputProps {
    classNames?: any;
    disabled?: boolean;
    error?: string | null;
    label: string;
    name?: string;
    required?: boolean;
    type?: string;
    value?: string | number;
    extraProps?: any;
    autoFocus?: boolean;
    squared?: boolean;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    onClick?: (event: any) => void;
    onKeyUp?: (event: any) => void;
    onChange?: (event: any) => void;
    onGetRef?: (ref: any) => void;
}
export interface InputState {
    value: number | string;
    labelSmall: boolean;
}
export declare class Input extends React.Component<InputProps, InputState> {
    private input;
    constructor(props: InputProps);
    componentDidUpdate(prevProps: InputProps): void;
    componentDidMount(): void;
    onChange: (e: any) => void;
    handleFocus: (e: any) => void;
    handleBlur: (e: any) => void;
    handleInputRef: (ref: any) => void;
    render(): JSX.Element;
}
