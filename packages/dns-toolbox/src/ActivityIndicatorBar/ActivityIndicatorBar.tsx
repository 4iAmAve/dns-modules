import * as React from 'react';

import './ActivityIndicatorBar.css';

export interface ActivityIndicatorBarProps {
  loading?: boolean;
}

export interface ActivityIndicatorBarState {
}

export class ActivityIndicatorBar extends React.Component<ActivityIndicatorBarProps, ActivityIndicatorBarState> {
  public render() {
    const { loading } = this.props;
    return (
      <div className={`activity-indicator-bar ${loading ? 'activity-indicator-bar--indeterminate' : ''}`}/>
    );
  }
}
