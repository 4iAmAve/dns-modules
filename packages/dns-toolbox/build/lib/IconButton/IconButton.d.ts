import * as React from 'react';
import './IconButton.css';
export interface IconButtonProps {
    /** what the icon the button is to show  */
    icon: string;
    /** additional classNames provided by the parent  */
    classNames?: any;
    /** what the button will do  */
    onClick?: () => void;
    /** what type the button is supposed to be  */
    type?: 'flat' | 'simple';
    /** the theme of the icon and the ripple  */
    color?: 'success' | 'warning' | 'danger';
    /** whether the button is clickable  */
    disabled?: boolean;
    /** optional parameter to adjust inline style  */
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
