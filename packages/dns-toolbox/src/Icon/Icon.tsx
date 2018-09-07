import * as React from 'react';
import { noop } from '@dns/utils';

import './Icon.css';

export interface IconProps {
  icon: string;
  type?: 'success' | 'warning' | 'danger' | 'accent' | 'primary';
  onClick?: () => void;
  classNames?: any;
}

export const Icon: React.SFC<IconProps> = (props: IconProps) => {
  const {
    classNames,
    icon,
    type,
    onClick
  } = props;
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
      onClick={onClick ? onClick : noop}
    >
      {icon}
    </i>
  );
};
