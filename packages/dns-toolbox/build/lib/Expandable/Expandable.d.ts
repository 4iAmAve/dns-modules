import * as React from 'react';
import './Expandable.css';
export interface ExpandableProps {
    open: boolean;
    maxHeight?: number | string;
}
export interface ExpandableState {
}
export declare class Expandable extends React.Component<ExpandableProps, ExpandableState> {
    render(): JSX.Element;
}
