import * as React from 'react';

import './ActivityIndicatorSpinner.css';

export interface ActivityIndicatorSpinnerProps {
  loading?: boolean;
}

export interface ActivityIndicatorSpinnerState {
}

export class ActivityIndicatorSpinner extends React.Component<ActivityIndicatorSpinnerProps, ActivityIndicatorSpinnerState> { // tslint:disable-line
  public render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        {
          loading ?
            <div className="activity-indicator_spinner">
              <svg className="activity-indicator_spinner--circular" height="50" width="50">
                <circle
                  className="activity-indicator_spinner-path"
                  cx="25"
                  cy="25.2"
                  r="19.9"
                  fill="none"
                  strokeWidth="6"
                  strokeMiterlimit="10"
                />
              </svg>
            </div> : null
        }
      </React.Fragment>
    );
  }
}
