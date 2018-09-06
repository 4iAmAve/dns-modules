/// <reference types="react-redux" />
import * as React from 'react';
import { DrawersState as DrawerReducerState } from '../../reducers/drawers';
import './Drawer.css';
export interface DrawerProps {
    onSubscribeToDrawerStore: (id: string | number) => void;
    onCloseDrawer: (id: string | number) => void;
    drawers: DrawerReducerState;
    id: string | number;
    width?: string;
    classNames?: any;
    withoutCloseButton?: boolean;
    fullWidth?: boolean;
    disableCloseOnOutsideClick?: boolean;
}
export interface DrawerState {
    loaded: boolean;
}
export declare const connectedDrawer: React.ComponentClass<Pick<DrawerProps, "width" | "classNames" | "id" | "withoutCloseButton" | "fullWidth" | "disableCloseOnOutsideClick">, any> & {
    WrappedComponent: React.ComponentType<DrawerProps>;
};
