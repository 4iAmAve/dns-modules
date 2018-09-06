/// <reference types="react-redux" />
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
export declare const connectedNotficationBar: React.ComponentClass<Pick<NotificationBarProps, "position" | "stacked">, any> & {
    WrappedComponent: React.ComponentType<NotificationBarProps>;
};
