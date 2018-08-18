import * as React from 'react';
import './Ripple.css';
export interface RippleProps {
    cursorPos: {
        top: number;
        left: number;
        time: number;
    };
    parent: HTMLElement;
    classNames?: any;
    inlineStyle?: any;
}
export interface RippleState {
    animate: boolean;
    width: number;
    height: number;
    top: number;
    left: number;
}
export declare class Ripple extends React.Component<RippleProps, RippleState> {
    private rippleRef;
    constructor(props: RippleProps);
    componentDidUpdate(prevProps: RippleProps): void;
    rippling: (cursorPos: any, parent: HTMLElement) => void;
    handleRef: (ref: any) => any;
    render(): JSX.Element;
}
