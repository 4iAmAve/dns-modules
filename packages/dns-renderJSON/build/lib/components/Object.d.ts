import * as React from 'react';
export interface ObjectProps {
    data: any;
    name: string;
    collapsed: boolean;
}
export interface ObjectState {
    error: boolean | string;
    collapsed: boolean;
    size: number;
}
export declare class ObjectType extends React.Component<ObjectProps, ObjectState> {
    constructor(props: ObjectProps);
    validateInput: () => void;
    generateObject: (data: any) => JSX.Element;
    getEllipsis: () => JSX.Element;
    toggleCollapsed: () => void;
    render(): JSX.Element;
}
