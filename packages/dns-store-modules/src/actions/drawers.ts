import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const drawerActions: any = {
  closeDrawer: createAction('CLOSE_DRAWER', (id: string | number) => {
    return {
      type: 'CLOSE_DRAWER',
      id,
    };
  }),
  openDrawer: createAction('OPEN_DRAWER', (id: string | number, data: string) => {
    return {
      type: 'OPEN_DRAWER',
      id,
      data,
    };
  }),
  subscribeToDrawerStore: createAction('SUBSCRIBE_TO_DRAWER_STORE', (id: string | number) => {
    return {
      type: 'SUBSCRIBE_TO_DRAWER_STORE',
      id,
    };
  }),
};

export const returnOfActions = Object.values(drawerActions).map(getReturnOfExpression);
export type drawerAction = typeof returnOfActions[number];
