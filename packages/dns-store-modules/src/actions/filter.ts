import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const filterActions: any = {
  resetFilter: createAction('RESET_FILTER', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  updateFilter: createAction('UPDATE_FILTER', resolve => {
    return (id: string | number, settings: any) => resolve({ id, settings });
  }),
  subscribeToFilterStore: createAction('SUBSCRIBE_TO_FILTER_STORE', resolve => {
    return (id: string | number, settings: any) => resolve({ id, settings });
  })
};

export const returnOfActions = Object.values(filterActions).map(getReturnOfExpression);
export type filterAction = typeof returnOfActions[number];
