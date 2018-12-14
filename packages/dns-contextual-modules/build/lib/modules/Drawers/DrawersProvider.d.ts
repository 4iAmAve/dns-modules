import * as React from 'react';
import { DrawerD } from '@dns/toolbox';
export interface DrawersPayload extends DrawerD {
    id: string | number;
    content: any;
}
export interface DrawersContextInterface {
    items?: DrawersPayload[];
    addDrawer: (dialogue: DrawersPayload) => void;
    closeDrawer: (id: string | number) => void;
    removeDrawer: (id: string | number) => void;
}
export declare const DrawersContext: React.Context<DrawersContextInterface>;
declare class DrawersProvider extends React.Component {
    state: {
        items: any[];
    };
    addDrawer: (drawer: DrawersPayload) => void;
    closeDrawer: (id: string | number) => void;
    removeDrawer: (id: string | number) => void;
    render(): JSX.Element;
}
export default DrawersProvider;
