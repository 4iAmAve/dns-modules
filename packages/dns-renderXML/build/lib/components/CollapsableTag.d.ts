import * as React from 'react';
export interface CollapsableTagProps {
    data: any;
    curDepth: number;
    collapsed?: boolean;
    collapseStringsAfterLength?: number;
    shouldCollapse?: boolean;
    indentWidth?: number;
}
export interface CollapsableTagState {
    collapsed: boolean;
}
export declare class CollapsableTag extends React.Component<CollapsableTagProps, CollapsableTagState> {
    static defaultProps: Partial<CollapsableTagProps>;
    constructor(props: CollapsableTagProps);
    toggleCollapse: () => void;
    render(): JSX.Element;
}
export default CollapsableTag;
