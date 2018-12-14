import * as React from 'react';
import './NotificationsBar.css';
export interface NotificationBarProps {
    stacked?: boolean;
    position?: 'bl' | 'bc' | 'br' | 'tl' | 'tc' | 'tr';
}
export interface NotificationBarState {
}
export declare const getAddNotification: () => () => void;
export declare const getCloseNotification: () => () => void;
export declare class NotificationsBar extends React.Component<NotificationBarProps, NotificationBarState> {
    static defaultProps: Partial<NotificationBarProps>;
    render(): JSX.Element;
}
