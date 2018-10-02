import * as React from 'react';
import './IconButton.css';
export interface IconButtonProps {
    icon: string;
    classNames?: any;
    onClick?: () => void;
    type?: 'flat' | 'simple';
    color?: 'success' | 'warning' | 'danger';
    disabled?: boolean;
    filled?: boolean;
    style?: any;
}
export interface IconButtonState {
    cursorPos: {
        top: number;
        left: number;
        time: number;
    };
    parent: any;
}
export declare class IconButton extends React.Component<IconButtonProps, IconButtonState> {
    static defaultProps: Partial<IconButtonProps>;
    constructor(props: IconButtonProps);
    handleClick: (e: any) => void;
    render(): JSX.Element;
}
