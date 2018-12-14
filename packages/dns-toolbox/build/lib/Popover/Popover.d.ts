import * as React from 'react';
import { Popover as PopoverD } from '../definitions';
import './Popover.css';
export interface PopoverProps extends PopoverD {
}
export interface PopoverState {
    exceedsBoundary: boolean;
    refPosition: any;
    visible: boolean;
}
export declare class Popover extends React.Component<PopoverProps, PopoverState> {
    static defaultProps: Partial<PopoverProps>;
    _externalReference: HTMLElement;
    _closeTimeout: number;
    _node: HTMLElement;
    _visibilityTimeout: number;
    constructor(props: PopoverProps, context: object);
    componentDidMount(): void;
    componentWillUnmount(): void;
    makeVisible: () => void;
    getElement: () => HTMLElement | null;
    handleEventListeners: (type?: string | undefined) => void;
    onCloseClick: () => void;
    handleDocumentClick: (evt: any) => void;
    determineRefPosition: () => number | false;
    detectBorder: () => void;
    handleRef: (ref: any) => any;
    render(): JSX.Element;
}
