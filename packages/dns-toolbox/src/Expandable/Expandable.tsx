import * as React from 'react';

import './Expandable.css';

export interface ExpandableProps {
  open: boolean;
  maxHeight?: number | string;
}

export interface ExpandableState {
}

export class Expandable extends React.Component<ExpandableProps, ExpandableState> {
  public render() {
    const { children, maxHeight, open } = this.props;
    const styles = {
      maxHeight: open && maxHeight ? maxHeight : open ? '50vh' : 0,
    };
    return (
      <div
        className={`
          expandable
          ${open ? 'expandable_open' : ''}
        `}
        style={styles}
      >
        {children}
      </div>
    );
  }
}
