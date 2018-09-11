import { getType } from 'typesafe-actions';
import { NotificationD } from '@dns/toolbox';

import { /*notificationAction,*/ notificationActions } from '../actions';

export interface NotificationsState {
  items: NotificationD[];
}

const initialState = {
  items: [],
};

export default function notifications(state: NotificationsState = initialState, action: any) {
  switch (action.type) {
    case getType(notificationActions.updateNotifications):
      return {
        items: action.payload.notifications,
      };
    case getType(notificationActions.closeNotification):
      return {
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}
