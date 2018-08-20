import * as React from 'react';

import './Expandable.css';

export interface ExpandableProps {
  open: boolean;
  children?: any;
  className?: any;
  maxHeight?: number | string;
}

export const Expandable: React.SFC<ExpandableProps> = (props: ExpandableProps) => {
  const { children, maxHeight, open, className } = props;
  const styles = {
    maxHeight: open && maxHeight ? maxHeight : open ? '50vh' : 0,
  };
  return (
    <div
      className={`expandable ${open ? 'expandable_open' : ''} ${className ? className : ''}`}
      style={styles}
    >
      {children}
    </div>
  );
};
