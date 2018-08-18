import * as React from 'react';
import './Tooltip.css';
export interface TooltipProps {
    label: any;
    delay?: number;
    maxWidth?: number;
    rootID?: string;
}
export interface TooltipState {
    isOpen: boolean;
    ttTopValue: number;
    ttLeftValue: number;
}
export declare class Tooltip extends React.Component<TooltipProps, TooltipState> {
    static defaultProps: Partial<TooltipProps>;
    private tooltip;
    constructor(props: TooltipProps);
    componentWillUnmount(): void;
    getElement: () => false | HTMLElement;
    handleMouseEnter: (e: any) => void;
    handleMouseLeave: () => void;
    handleDocumentClick: (evt: any) => void;
    enhanceChild: (child: any) => React.DetailedReactHTMLElement<{
        onTouchStart: (e: any) => void;
        onMouseEnter: (e: any) => void;
        onTouchEnd: () => void;
        onMouseLeave: () => void;
    }, HTMLElement>;
    calculatePosition: (targetBoundings: any) => void;
    handleTtRef: (ref: any) => any;
    render(): JSX.Element;
}
