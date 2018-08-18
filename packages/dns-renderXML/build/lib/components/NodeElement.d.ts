import * as React from 'react';
export interface NodeElementProps {
    data: any;
    curDepth: number;
    collapsed?: boolean;
    collapseStringsAfterLength?: number;
    shouldCollapse?: boolean;
    indentWidth?: number;
}
export interface NodeElementState {
}
export declare class NodeElement extends React.Component<NodeElementProps, NodeElementState> {
    static defaultProps: Partial<NodeElementProps>;
    parseXML: () => any;
    render(): JSX.Element;
}
export default NodeElement;
