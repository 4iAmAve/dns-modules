import * as React from 'react';
import { OverlayState as OverlayReducerState } from '../../reducers/overlay';
import './Overlay.css';
export interface OverlayProps {
    onSubscribeToOverlayStore: (id: string | number) => void;
    closeOverlay: (id: string | number) => void;
    overlay: OverlayReducerState;
    id: string | number;
    rootID?: string;
    width?: string;
    title?: string | null;
    classNames?: any;
    withoutCloseButton?: boolean;
}
export interface OverlayState {
    menuOpen: boolean;
}
declare class Overlay extends React.Component<OverlayProps, OverlayState> {
    static defaultProps: Partial<OverlayProps>;
    private node;
    constructor(props: OverlayProps, context: object);
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    getElement: () => HTMLElement;
    handleEventListeners: (type?: string) => void;
    onCloseClick: () => void;
    handleDocumentClick: (evt: any) => void;
    handleRef: (ref: any) => any;
    render(): JSX.Element;
}
export declare const connectedOverlay: import("react-redux").ConnectedComponentClass<typeof Overlay, Pick<OverlayProps, "width" | "title" | "classNames" | "rootID" | "id" | "withoutCloseButton">>;
export {};
