import * as React from 'react';
import './Button.css';
export interface ButtonProps {
    onClick: () => void;
    classNames?: any;
    label?: string | number;
    iconBefore?: string;
    iconAfter?: string;
    color?: 'default' | 'warning' | 'danger' | 'success' | 'accent' | 'primary' | 'white' | 'white_danger' | 'white_accent' | 'white_primary' | 'white_warning' | 'white_default';
    type?: 'default' | 'rounded';
    raised?: boolean;
    disabled?: boolean;
    style?: any;
}
export interface ButtonState {
    cursorPos: {
        top: number;
        left: number;
        time: number;
    };
    parent: any;
}
export declare class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps: Partial<ButtonProps>;
    constructor(props: ButtonProps);
    handleClick: (e: any) => void;
    render(): JSX.Element;
}
