import * as React from 'react';
import './Icon.css';
export interface IconProps {
    icon: string;
    type?: 'success' | 'warning' | 'danger' | 'accent' | 'primary';
    onClick?: () => void;
    classNames?: any;
}
export declare const Icon: React.SFC<IconProps>;
