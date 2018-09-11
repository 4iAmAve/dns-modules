import { getType } from 'typesafe-actions';
import { /*dialoguesAction,*/ dialoguesActions } from '../actions';

export interface DialoguesState {
}

const initialState = {};

export default function dialogues(state: DialoguesState = initialState, action: any) {
  switch (action.type) {
    case getType(dialoguesActions.subscribeToDialoguesStore):
      return {
        ...state,
        [action.payload.id]: false,
      };
    case getType(dialoguesActions.openDialogue):
      return {
        ...state,
        [action.payload.id]: true,
      };
    case getType(dialoguesActions.closeDialogue):
      return {
        ...state,
        [action.payload.id]: false,
      };
    default:
        return state;
  }
}
