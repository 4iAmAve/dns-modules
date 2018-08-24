import { getType } from 'typesafe-actions';
import { filterActions } from '../actions/filter';

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
        [action.id]: action.settings,
        defaultState: {
          ...state.defaultState,
          [action.id]: action.settings,
        }
      };
    case getType(filterActions.updateFilter):
      return {
        ...state,
        [action.id]: action.settings,
      };
    case getType(filterActions.resetFilter):
      return {
        ...state,
        [action.id]: state.defaultState[action.id],
      };
    default:
      return state;
  }
}
