import { NotificationD } from '@dns/toolbox';
export interface NotificationsState {
    items: NotificationD[];
}
export default function notifications(state: NotificationsState, action: any): {
    items: any;
};
