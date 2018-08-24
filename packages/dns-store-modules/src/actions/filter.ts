import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const filterActions: any = {
  resetFilter: createAction('RESET_FILTER', (id: string | number) => {
    return {
      type: 'RESET_FILTER',
      id,
    };
  }),
  updateFilter: createAction('UPDATE_FILTER', (id: string | number, settings: any) => {
    return {
      type: 'UPDATE_FILTER',
      id,
      settings,
    };
  }),
  subscribeToFilterStore: createAction('SUBSCRIBE_TO_FILTER_STORE', (id: string | number, settings: any) => {
    return {
      type: 'SUBSCRIBE_TO_FILTER_STORE',
      id,
      settings,
    };
  }),
};

export const returnOfActions = Object.values(filterActions).map(getReturnOfExpression);
export type filterAction = typeof returnOfActions[number];
