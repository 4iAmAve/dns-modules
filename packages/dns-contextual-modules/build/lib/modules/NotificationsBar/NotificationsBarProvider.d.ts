import * as React from 'react';
import { NotificationD } from '@dns/toolbox';
interface NotifcationPayload {
    message: string;
    type: string;
    timeout?: number;
}
export interface NotificationsBarContextInterface {
    items?: NotificationD[];
    addNotification: (notification: NotifcationPayload) => {};
    closeNotification: (id: string | number) => {};
}
export declare const NotificationsBarContext: React.Context<NotificationsBarContextInterface>;
declare class NotificationsBarProvider extends React.Component {
    state: {
        items: any[];
    };
    addNotification: (notification: NotifcationPayload) => boolean;
    closeNotification: (id: string | number) => boolean;
    render(): JSX.Element;
}
export default NotificationsBarProvider;
