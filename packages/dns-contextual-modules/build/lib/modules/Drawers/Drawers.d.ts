import * as React from 'react';
import './Drawers.css';
export interface DrawersProps {
}
export interface DrawersState {
}
export declare const getAddDrawer: () => () => void;
export declare const getCloseDrawer: () => () => void;
export declare const getRemoveDrawer: () => () => void;
export declare class Drawers extends React.Component<DrawersProps, DrawersState> {
    removeDrawer: (id: any) => void;
    render(): JSX.Element;
}
