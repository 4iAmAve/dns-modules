import { getType } from 'typesafe-actions';
import { paginatorActions } from '../actions/paginator';

export interface PaginatorState {
  defaultState: any;
}

const initialState = {
  defaultState: {},
};

export default function paginator(state: PaginatorState = initialState, action: any) {
  switch (action.type) {
    case getType(paginatorActions.subscribeToPaginatorStore):
      return {
        ...state,
        [action.id]: action.settings,
        defaultState: {
          ...state.defaultState,
          [action.id]: action.settings,
        }
      };
    case getType(paginatorActions.updatePaginator):
      return {
        ...state,
        [action.id]: action.settings,
      };
    case getType(paginatorActions.resetPaginator):
      return {
        ...state,
        [action.id]: state.defaultState[action.id],
      };
    default:
      return state;
  }
}
