import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const paginatorActions: any = {
  resetPaginator: createAction('RESET_PAGINATOR', (id: string | number) => {
    return {
      type: 'RESET_PAGINATOR',
      id,
    };
  }),
  updatePaginator: createAction('UPDATE_PAGINATOR', (id: string | number, settings: any) => {
    return {
      type: 'UPDATE_PAGINATOR',
      id,
      settings,
    };
  }),
  subscribeToPaginatorStore: createAction('SUBSCRIBE_TO_PAGINATOR_STORE', (id: string | number, settings: any) => {
    return {
      type: 'SUBSCRIBE_TO_PAGINATOR_STORE',
      id,
      settings,
    };
  }),
};

export const returnOfActions = Object.values(paginatorActions).map(getReturnOfExpression);
export type paginatorAction = typeof returnOfActions[number];
