import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const paginatorActions: any = {
  resetPaginator: createAction('RESET_PAGINATOR', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  updatePaginator: createAction('UPDATE_PAGINATOR', resolve => {
    return (id: string | number, settings: any) => resolve({ id, settings });
  }),
  subscribeToPaginatorStore: createAction('SUBSCRIBE_TO_PAGINATOR_STORE', resolve => {
    return (id: string | number, settings: any) => resolve({ id, settings });
  }),
};

export const returnOfActions = Object.values(paginatorActions).map(getReturnOfExpression);
export type paginatorAction = typeof returnOfActions[number];
