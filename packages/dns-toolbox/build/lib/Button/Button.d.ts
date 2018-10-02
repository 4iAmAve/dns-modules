import * as React from 'react';
import './Button.css';
export interface ButtonProps {
    onClick: () => void;
    classNames?: any;
    label?: string | number;
    iconBefore?: string;
    iconAfter?: string;
    color?: 'default' | 'warning' | 'danger' | 'success' | 'accent' | 'primary';
    rounded?: boolean;
    raised?: boolean;
    disabled?: boolean;
    filled?: boolean;
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
