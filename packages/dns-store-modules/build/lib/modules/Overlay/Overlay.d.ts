/// <reference types="react-redux" />
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
export declare const connectedOverlay: React.ComponentClass<Pick<OverlayProps, "title" | "classNames" | "rootID" | "id" | "withoutCloseButton" | "width">, React.ComponentState> & {
    WrappedComponent: React.ComponentType<OverlayProps>;
};
