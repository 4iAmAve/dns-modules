import * as React from 'react';
import { Drawer as DrawerD } from '../definitions';
import './Drawer.css';
export interface DrawerProps extends DrawerD {
}
export interface DrawerState {
    loaded: boolean;
    visible: boolean;
}
export declare class Drawer extends React.Component<DrawerProps, DrawerState> {
    static defaultProps: Partial<DrawerProps>;
    _visibilityTimeout: number;
    _closeTimeout: number;
    constructor(props: DrawerProps, context: object);
    componentDidUpdate(prevProps: DrawerProps): void;
    makeVisible: () => void;
    onClose: () => void;
    render(): JSX.Element;
}
