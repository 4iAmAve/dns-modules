import * as React from 'react';
import './Page.css';
export interface PageProps {
    title?: string;
    withoutOffset?: boolean;
    classNames?: any;
}
export interface PageState {
}
export declare class Page extends React.Component<PageProps, PageState> {
    render(): JSX.Element;
}
