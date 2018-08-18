import * as React from 'react';
import './Checkbox.css';
export interface CheckboxProps {
    id: number | string;
    onChange: (id: number | string, checked: boolean) => void;
    checked?: boolean;
    isDisabled?: boolean;
    classNames?: any;
    labelBefore?: string | number;
    labelAfter?: string | number;
}
export interface CheckboxState {
    checked: boolean;
}
export declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props: CheckboxProps, context: object);
    componentDidUpdate(prevProps: CheckboxProps): void;
    toggleChecked: () => void;
    render(): JSX.Element;
}
