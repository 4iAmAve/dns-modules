import * as React from 'react';
import './CollectionLane.css';
export interface CollectionLaneProps {
    label: string;
}
export interface CollectionLaneState {
    atBeginning: boolean;
    atEnd: boolean;
    imageSize: number;
}
export declare class CollectionLane extends React.Component<CollectionLaneProps, CollectionLaneState> {
    private collectionLane;
    private collectionContent;
    constructor(props: CollectionLaneProps);
    getDiff: () => number;
    getOffset: () => number;
    detectBorders: (position: any) => void;
    scrollAnimator: (dir: any) => void;
    scrollHandler: (e: any) => void;
    handleAddTableGroup: () => void;
    handleCollectionContentRef: (ref: any) => any;
    handleCollectionLaneRef: (ref: any) => any;
    render(): JSX.Element;
}
