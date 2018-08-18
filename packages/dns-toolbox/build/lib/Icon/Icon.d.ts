import * as React from 'react';
import './Icon.css';
export interface IconProps {
    icon: string;
    type?: 'success' | 'warning' | 'danger' | 'accent' | 'primary';
    classNames?: any;
}
export interface IconState {
}
export declare class Icon extends React.Component<IconProps, IconState> {
    static defaultProps: Partial<IconProps>;
    render(): JSX.Element;
}
