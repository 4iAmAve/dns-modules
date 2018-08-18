import * as React from 'react';
export interface XMLViewerProps {
    data: any;
    curDepth: number;
    collapsed?: boolean;
    collapseStringsAfterLength?: number;
    shouldCollapse?: boolean;
    indentWidth?: number;
}
export interface XMLViewerState {
    collapsed: boolean;
}
export declare class XMLViewer extends React.Component<XMLViewerProps, XMLViewerState> {
    static defaultProps: Partial<XMLViewerProps>;
    constructor(props: XMLViewerProps);
    generateAttributes: (node: HTMLElement) => string;
    generateNode: (node: HTMLElement, key: number) => JSX.Element;
    parseXML: () => any;
    render(): JSX.Element;
}
