import * as React from 'react';
import { Chip as ChipDef } from '../definitions';
import './Chip.css';
export interface ChipProps extends ChipDef {
    title: string;
    id?: number | string;
    bgColor?: string | boolean;
    image?: any;
    deletable?: boolean;
    fullWidth?: boolean;
    selectable?: boolean;
    classNames?: any;
    onClick?: () => void;
    onDelete?: () => void;
}
export interface ChipState {
}
export declare class Chip extends React.Component<ChipProps, ChipState> {
    static defaultProps: Partial<ChipProps>;
    render(): JSX.Element;
}
