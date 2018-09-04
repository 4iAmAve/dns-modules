import * as React from 'react';
import './Textarea.css';
export interface TextareaProps {
    classNames?: any;
    disabled?: boolean;
    error?: string | null;
    label: string;
    name?: string;
    required?: boolean;
    rows?: number;
    value?: string | number;
    extraProps?: any;
    style?: any;
    autoFocus?: boolean;
    autoExpand?: boolean;
    maxHeight?: number;
    disableResize?: boolean;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    onClick?: (event: any) => void;
    onKeyUp?: (event: any) => void;
    onChange?: (event: any) => void;
}
export interface TextareaState {
    value: number | string;
    initialRowHeight: number | null;
    initialRows: number;
    labelSmall: boolean;
    textareaHeight: number | null;
}
export declare class Textarea extends React.Component<TextareaProps, TextareaState> {
    private textarea;
    constructor(props: TextareaProps);
    componentDidUpdate(prevProps: TextareaProps): void;
    componentDidMount(): void;
    onChange: (e: any) => void;
    handleFocus: (e: any) => void;
    handleBlur: (e: any) => void;
    handleTextareaRef: (ref: any) => any;
    render(): JSX.Element;
}
