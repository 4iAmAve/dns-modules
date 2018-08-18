import * as React from 'react';

import './Icon.css';

export interface IconProps {
  icon: string;
  type?: 'success' | 'warning' | 'danger' | 'accent' | 'primary';
  classNames?: any;
}

export interface IconState {
}

export class Icon extends React.Component<IconProps, IconState> {
  public static defaultProps: Partial<IconProps> = {
    type: 'accent',
  };

  public render() {
    const {
      classNames,
      icon,
      type,
    } = this.props;
    const modifier = type === 'success' ? 'icon--success' :
      type === 'danger' ? 'icon--danger' :
      type === 'accent' ? 'icon--accent' :
      type === 'primary' ? 'icon--primary' :
      type === 'warning' ? 'icon--warning' : '';
    return (
      <i
        className={`
          material-icons
          icon
          ${classNames ? classNames : ''}
          ${type ? modifier : ''}
        `}
      >
        {icon}
      </i>
    );
  }
}
