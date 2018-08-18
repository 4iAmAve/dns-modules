import * as React from 'react';
import './MasterDetail.css';
export interface MasterDetailProps {
    master: any;
    detail: any;
    detailOpen: boolean;
    offsetTop?: number;
    offsetWidth?: number;
    masterMaxHeight?: number;
    detailMaxHeight?: number;
    masterMaxWidth?: number;
    detailMaxWidth?: number;
    orientation?: 'vertical' | 'horizontal';
    className?: any;
}
export declare class MasterDetail extends React.Component<MasterDetailProps, null> {
    static defaultProps: Partial<MasterDetailProps>;
    private masterRef;
    private detailRef;
    calculateMasterDetailMaxHeightDimensions: () => {
        master: string | number;
        detail: number;
    };
    calculateMasterDetailMaxWidthDimensions: () => {
        master: string | number;
        detail: number;
    };
    handleMasterRef: (ref: any) => any;
    handleDetailRef: (ref: any) => any;
    render(): JSX.Element;
}
