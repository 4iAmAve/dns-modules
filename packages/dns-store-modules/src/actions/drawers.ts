import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const drawerActions: any = {
  closeDrawer: createAction('CLOSE_DRAWER', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  openDrawer: createAction('OPEN_DRAWER', resolve => {
    return (id: string | number, data: string) => resolve({ id, data });
  }),
  subscribeToDrawerStore: createAction('SUBSCRIBE_TO_DRAWER_STORE', resolve => {
    return (id: string | number) => resolve({ id });
  })
};

export const returnOfActions = Object.values(drawerActions).map(getReturnOfExpression);
export type drawerAction = typeof returnOfActions[number];
