import * as React from 'react';
import './styles/renderXML.css';
export interface RenderXMLProps {
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
export interface RenderXMLState extends RenderXMLProps {
    validationFailure?: boolean;
}
export declare class RenderXML extends React.Component<RenderXMLProps, RenderXMLState> {
    static defaultProps: Partial<RenderXMLProps>;
    constructor(props: RenderXMLProps);
    validateInput: () => void;
    render(): JSX.Element;
}
