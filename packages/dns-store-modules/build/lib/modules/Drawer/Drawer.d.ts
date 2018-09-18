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
declare class Drawer extends React.Component<DrawerProps, DrawerState> {
    static defaultProps: Partial<DrawerProps>;
    constructor(props: DrawerProps, context: object);
    onCloseClick: () => void;
    render(): JSX.Element;
}
export declare const connectedDrawer: import("react-redux").ConnectedComponentClass<typeof Drawer, Pick<DrawerProps, "width" | "classNames" | "id" | "withoutCloseButton" | "fullWidth" | "disableCloseOnOutsideClick">>;
export {};
