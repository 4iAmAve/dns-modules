import * as React from 'react';
import './Button.css';
export interface ButtonProps {
    /** behaviour of button  */
    onClick: () => void;
    /** additional classes provided by the parent  */
    classNames?: any;
    /** text for button  */
    label?: string | number;
    /** icon displayed left of the label  */
    iconBefore?: string;
    /** icon displayed right of the label  */
    iconAfter?: string;
    /**  color of the button default | warning | danger | success | accent | primary  */
    color?: 'default' | 'warning' | 'danger' | 'success' | 'accent' | 'primary' | 'white' | 'white_danger' | 'white_accent' | 'white_primary' | 'white_warning' | 'white_default';
    /**  type of the button default | rounded  */
    type?: 'default' | 'rounded';
    /**  whether to display the button raised   */
    raised?: boolean;
    /** this dictates whether the button is clickable  */
    disabled?: boolean;
    /** optional parameter to adjust inline style  */
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
