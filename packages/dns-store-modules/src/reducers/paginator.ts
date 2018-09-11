import { getType } from 'typesafe-actions';
import { paginatorActions } from '../actions';

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
        [action.payload.id]: action.payload.settings,
        defaultState: {
          ...state.defaultState,
          [action.payload.id]: action.payload.settings,
        }
      };
    case getType(paginatorActions.updatePaginator):
      return {
        ...state,
        [action.payload.id]: action.payload.settings,
      };
    case getType(paginatorActions.resetPaginator):
      return {
        ...state,
        [action.payload.id]: state.defaultState[action.payload.id],
      };
    default:
      return state;
  }
}
