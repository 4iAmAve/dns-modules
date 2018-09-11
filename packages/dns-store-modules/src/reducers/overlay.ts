import { getType } from 'typesafe-actions';
import { /*overlayAction,*/ overlayActions } from '../actions';

export interface OverlayState {
}

const initialState = {};
const subscribedState = initialState || {};

export default function overlay(state: OverlayState = initialState, action: any) {
  switch (action.type) {
    case getType(overlayActions.subscribeToOverlayStore):
      subscribedState[action.payload.id] = false;
      return {
        ...state,
        [action.payload.id]: false,
      };
    case getType(overlayActions.openOverlay):
      return {
        ...subscribedState,
        [action.payload.id]: true,
      };
    case getType(overlayActions.closeOverlay):
      return {
        ...subscribedState,
        [action.payload.id]: false,
      };
    default:
        return state;
  }
}
