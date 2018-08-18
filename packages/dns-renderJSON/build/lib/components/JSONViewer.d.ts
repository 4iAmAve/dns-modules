import * as React from 'react';
export interface JSONViewerProps {
    data: any;
    curDepth: number;
    collapsed?: boolean;
    collapseStringsAfterLength?: number;
    shouldCollapse?: boolean;
    indentWidth?: number;
}
export interface JSONViewerState {
}
export declare class JSONViewer extends React.Component<JSONViewerProps, JSONViewerState> {
    static defaultProps: Partial<JSONViewerProps>;
    determineTypes: () => any;
    render(): JSX.Element;
}
