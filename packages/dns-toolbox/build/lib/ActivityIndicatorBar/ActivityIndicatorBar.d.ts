import * as React from 'react';
import './ActivityIndicatorBar.css';
export interface ActivityIndicatorBarProps {
    loading?: boolean;
}
export interface ActivityIndicatorBarState {
}
export declare class ActivityIndicatorBar extends React.Component<ActivityIndicatorBarProps, ActivityIndicatorBarState> {
    render(): JSX.Element;
}
