import * as React from 'react';
import { Tab } from '../definitions';
import './Tabs.css';
export interface TabsProps {
    tabs: Tab[];
    className?: any;
    selectedTab?: number;
    swipeable?: boolean;
    withNavigation?: boolean;
    onChange?: (tabIndex: number) => void;
}
export interface TabsState {
    selectedTab: number;
}
export declare class Tabs extends React.Component<TabsProps, TabsState> {
    static defaultProps: Partial<TabsProps>;
    private tabNodes;
    constructor(props: TabsProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TabsProps): void;
    callChange: (tabIndex: number) => void;
    generateBorderStyle: (target: any) => {
        width: any;
        left: any;
    };
    onTabClick: (e: any, id: number) => void;
    handleRef: (key: number, tabRef: any) => void;
    handleChange: (value: number) => void;
    onNavigationClick: (dir: string) => void;
    determineBorderPosition: () => {
        left: number;
        width: number;
    };
    render(): JSX.Element;
}
