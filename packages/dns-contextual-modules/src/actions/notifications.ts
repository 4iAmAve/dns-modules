import { getAddNotification, getCloseNotification } from '../modules';

export function addNotification(notification: { message: string, type: string }) {
  const action: any = getAddNotification();
  return action(notification);
}

export function closeNotification(id: string | number) {
  const action: any = getCloseNotification();
  return action(id);
}
