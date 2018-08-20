import * as React from 'react';
import './Expandable.css';
export interface ExpandableProps {
    open: boolean;
    children?: any;
    className?: any;
    maxHeight?: number | string;
}
export declare const Expandable: React.SFC<ExpandableProps>;
