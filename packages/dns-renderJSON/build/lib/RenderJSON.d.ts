import * as React from 'react';
import './styles/renderJSON.css';
export interface RenderJSONProps {
    data: any;
    name?: string;
    theme?: 'default' | 'dark';
    collapsed?: boolean;
    collapseStringsAfterLength?: number;
    shouldCollapse?: boolean;
    sortKeys?: boolean;
    groupArraysAfterLength?: number;
    indentWidth?: 4;
    enableClipboard?: boolean;
    displayObjectSize?: boolean;
    displayDataTypes?: boolean;
    onEdit?: boolean;
    onDelete?: boolean;
    onAdd?: boolean;
    onSelect?: boolean;
    iconStyle?: string;
    style?: any;
    validationMessage?: string;
}
export interface RenderJSONState extends RenderJSONProps {
    validationFailure?: boolean;
}
export declare class RenderJSON extends React.Component<RenderJSONProps, RenderJSONState> {
    static defaultProps: Partial<RenderJSONProps>;
    constructor(props: RenderJSONProps);
    validateInput: () => void;
    render(): JSX.Element;
}
