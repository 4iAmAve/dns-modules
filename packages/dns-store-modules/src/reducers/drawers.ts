import { getType } from 'typesafe-actions';
import { /*drawerAction,*/ drawerActions } from '../actions';

export interface DrawersState {
}

const initialState = {
};

export default function drawers(state: DrawersState = initialState, action: any) {
  switch (action.type) {
    case getType(drawerActions.subscribeToDrawerStore):
      return {
        ...state,
        [action.payload.id]: {
          open: false,
        },
      };
    case getType(drawerActions.openDrawer):
      return {
        ...state,
        [action.payload.id]: {
          open: true,
          ...action.payload.data
        },
      };
    case getType(drawerActions.closeDrawer):
      return {
        ...state,
        [action.payload.id]: {
          open: false,
        },
      };
    default:
        return state;
  }
}
