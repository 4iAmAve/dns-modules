import * as React from 'react';
import { PopoverD } from '@dns/toolbox';
export interface PopoverProps {
    id: string | number;
    onClose?: () => void;
}
export interface PopoverState {
    data: PopoverD | null;
}
export declare class Popover extends React.Component<PopoverProps, PopoverState> {
    constructor(props: PopoverProps);
    componentDidMount(): void;
    onUpdate: (data: PopoverD) => void;
    removePopover: () => any;
    render(): JSX.Element;
}
