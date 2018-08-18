import * as React from 'react';
import './ActivityIndicatorSpinner.css';
export interface ActivityIndicatorSpinnerProps {
    loading?: boolean;
}
export interface ActivityIndicatorSpinnerState {
}
export declare class ActivityIndicatorSpinner extends React.Component<ActivityIndicatorSpinnerProps, ActivityIndicatorSpinnerState> {
    render(): JSX.Element;
}
