import { getType } from 'typesafe-actions';
import { /*overlayAction,*/ popoverActions } from '../actions';

export interface PopoverState {
}

const initialState = {};
const subscribedState = initialState || {};

export default function popover(state: PopoverState = initialState, action: any) {
  switch (action.type) {
    case getType(popoverActions.subscribeToPopoverStore):
      subscribedState[action.payload.id] = false;
      return {
        ...state,
        [action.payload.id]: false,
      };
    case getType(popoverActions.openPopover):
      return {
        ...subscribedState,
        [action.payload.id]: true,
      };
    case getType(popoverActions.closePopover):
      return {
        ...subscribedState,
        [action.payload.id]: false,
      };
    default:
        return state;
  }
}
