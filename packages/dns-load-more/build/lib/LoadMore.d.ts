import * as React from 'react';
import './LoadMore.css';
export interface LoadMoreProps {
    dataLength: number;
    data: any[];
    className?: any;
    endMessage?: any;
    handleInternally?: boolean;
    hasChildren?: boolean;
    hasMore?: boolean;
    limit?: number;
    loading?: any;
    loader: any;
    maxHeight?: number;
    style?: any;
    onFetch: (position: number) => void;
    onLoaded?: () => void;
    onRenderElement?: (data: any, key: number) => any;
}
export interface LoadMoreState {
    loading: boolean;
}
export declare class LoadMore extends React.Component<LoadMoreProps, LoadMoreState> {
    static defaultProps: Partial<LoadMoreProps>;
    constructor(props: LoadMoreProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: LoadMoreProps): void;
    onLoad: () => void;
    renderData: () => any[];
    render(): JSX.Element;
}
