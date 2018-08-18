import { getType } from 'typesafe-actions';
import { /*overlayAction,*/ overlayActions } from '../actions/overlay';

export interface OverlayState {
}

const initialState = {};
const subscribedState = initialState || {};

export default function overlay(state: OverlayState = initialState, action: any) {
  switch (action.type) {
    case getType(overlayActions.subscribeToOverlayStore):
      subscribedState[action.id] = false;
      return {
        ...state,
        [action.id]: false,
      };
    case getType(overlayActions.openOverlay):
      return {
        ...subscribedState,
        [action.id]: true,
      };
    case getType(overlayActions.closeOverlay):
      return {
        ...subscribedState,
        [action.id]: false,
      };
    default:
        return state;
  }
}
