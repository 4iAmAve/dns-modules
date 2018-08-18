import * as React from 'react';
import './NativeSelect.css';
export interface NativeSelectProps {
    selection: Array<string>;
    onChange: (event: any) => void;
    defaultSelected?: number;
    classNames?: any;
    id?: any;
    label?: string;
    required?: boolean;
    nullable?: boolean;
    disabled?: boolean;
}
export interface NativeSelectState {
}
export declare class NativeSelect extends React.Component<NativeSelectProps, NativeSelectState> {
    static defaultProps: Partial<NativeSelectProps>;
    handleSelectionChange: (e: any, type: string) => void;
    generateSelect: (options: any[], label: string) => JSX.Element;
    generateEmptyArray: (length: number) => any;
    render(): JSX.Element;
}
