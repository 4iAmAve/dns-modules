import { getType } from 'typesafe-actions';
import { /*dialoguesAction,*/ dialoguesActions } from '../actions/dialogues';

export interface DialoguesState {
}

const initialState = {};

export default function dialogues(state: DialoguesState = initialState, action: any) {
  switch (action.type) {
    case getType(dialoguesActions.subscribeToDialoguesStore):
      return {
        ...state,
        [action.id]: false,
      };
    case getType(dialoguesActions.openDialogue):
      return {
        ...state,
        [action.id]: true,
      };
    case getType(dialoguesActions.closeDialogue):
      return {
        ...state,
        [action.id]: false,
      };
    default:
        return state;
  }
}
