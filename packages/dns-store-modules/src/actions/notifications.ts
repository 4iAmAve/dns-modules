import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const notificationActions: any = {
  closeNotification: createAction('CLOSE_NOTIFICATION', (id: string | number) => {
    return {
      type: 'CLOSE_NOTIFICATION',
      id,
    };
  }),
  updateNotifications: createAction('UPDATE_NOTIFICATIONS', (notifications: any) => {
    return {
      type: 'UPDATE_NOTIFICATIONS',
      notifications,
    };
  }),
};

export const returnOfActions = Object.values(notificationActions).map(getReturnOfExpression);
export type notificationAction = typeof returnOfActions[number];

export function addNotification(message: any, type: string | number, timeout: number = 5000) {
  return (dispatch, getState) => {
    const notifications = getState().notifications.items;
    notifications.push({
      id: notifications.length,
      message,
      type,
      timeout,
      timestamp: Date.now(),
    });
    dispatch(notificationActions.updateNotifications(notifications));
  };
}
