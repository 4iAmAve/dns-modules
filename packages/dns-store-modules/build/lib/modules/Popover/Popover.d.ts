import * as React from 'react';
import { PopoverState as PopoverReducerState } from '../../reducers/popover';
import './Popover.css';
export interface PopoverProps {
    onSubscribeToPopoverStore: (id: string | number) => void;
    closePopover: (id: string | number) => void;
    popover: PopoverReducerState;
    id: string | number;
    rootID?: string;
    width?: string;
    title?: string | null;
    classNames?: any;
    withoutCloseButton?: boolean;
}
export interface PopoverState {
    menuOpen: boolean;
}
declare class Popover extends React.Component<PopoverProps, PopoverState> {
    static defaultProps: Partial<PopoverProps>;
    private node;
    constructor(props: PopoverProps, context: object);
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    getElement: () => HTMLElement;
    handleEventListeners: (type?: string) => void;
    onCloseClick: () => void;
    handleDocumentClick: (evt: any) => void;
    handleRef: (ref: any) => any;
    render(): JSX.Element;
}
export declare const connectedPopover: import("react-redux").ConnectedComponentClass<typeof Popover, Pick<PopoverProps, "width" | "title" | "classNames" | "rootID" | "id" | "withoutCloseButton">>;
export {};
