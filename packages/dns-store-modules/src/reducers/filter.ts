import { getType } from 'typesafe-actions';
import { filterActions } from '../actions';

export interface FilterState {
  defaultState: any;
}

const initialState = {
  defaultState: {},
};

export default function filter(state: FilterState = initialState, action: any) {
  switch (action.type) {
    case getType(filterActions.subscribeToFilterStore):
      return {
        ...state,
        [action.payload.id]: action.payload.settings,
        defaultState: {
          ...state.defaultState,
          [action.payload.id]: action.payload.settings,
        }
      };
    case getType(filterActions.updateFilter):
      return {
        ...state,
        [action.payload.id]: action.payload.settings,
      };
    case getType(filterActions.resetFilter):
      return {
        ...state,
        [action.payload.id]: state.defaultState[action.payload.id],
      };
    default:
      return state;
  }
}
