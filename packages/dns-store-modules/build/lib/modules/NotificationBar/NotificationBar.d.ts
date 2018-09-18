import * as React from 'react';
import { NotificationD } from '@dns/toolbox';
import './NotificationBar.css';
export interface Notifications {
    items: NotificationD[];
}
export interface NotificationBarProps {
    notifications: Notifications;
    onCloseNotification: (id: number | string) => {};
    stacked?: boolean;
    position?: 'bl' | 'bc' | 'br' | 'tl' | 'tc' | 'tr';
}
export interface NotificationBarState {
}
declare class NotificationBar extends React.Component<NotificationBarProps, NotificationBarState> {
    static defaultProps: Partial<NotificationBarProps>;
    render(): JSX.Element;
}
export declare const connectedNotficationBar: import("react-redux").ConnectedComponentClass<typeof NotificationBar, Pick<NotificationBarProps, "position" | "stacked">>;
export {};
