import * as React from 'react';
import { Chip as ChipDefinition } from '../definitions';
export interface ChipsProps {
    chips: ChipDefinition[];
    onDeleteChip: (chip: any, key: number) => void;
    classNames?: any;
}
export interface ChipsState {
}
export declare class Chips extends React.Component<ChipsProps, ChipsState> {
    static defaultProps: Partial<ChipsProps>;
    deleteChip: (chip: ChipDefinition, key: number) => void;
    renderChip: (chip: ChipDefinition, key: number) => JSX.Element;
    render(): JSX.Element;
}
