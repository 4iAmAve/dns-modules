import * as React from 'react';
import './IconButton.css';
export interface IconButtonProps {
    icon: string;
    classNames?: any;
    onClick?: () => void;
    type?: 'flat' | 'simple';
    color?: 'accent' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    filled?: boolean;
    style?: any;
    onTouchStart?: (e: any) => void;
    onMouseEnter?: (e: any) => void;
    onTouchEnd?: (e: any) => void;
    onMouseLeave?: (e: any) => void;
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
