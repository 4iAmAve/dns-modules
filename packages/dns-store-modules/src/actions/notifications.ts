import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const notificationActions: any = {
  closeNotification: createAction('CLOSE_NOTIFICATION', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  updateNotifications: createAction('UPDATE_NOTIFICATIONS', resolve => {
    return (notifications: string | number) => resolve({ notifications });
  })
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
