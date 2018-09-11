import { getType } from 'typesafe-actions';
import { GenericDialogueD } from '@dns/toolbox';
import { /*confirmDialogueAction,*/ confirmDialogueActions } from '../actions';

export interface ConfirmDialogueState extends GenericDialogueD {
  onConfirm: any;
  open: boolean;
  text: any | null;
  title: any | null;
}

const initialState = {
  onConfirm: null,
  open: false,
  title: '',
  text: null,
};

export default function confirmDialogue(state: ConfirmDialogueState = initialState, action: any) {
  switch (action.type) {
    case getType(confirmDialogueActions.closeDialogue):
      return {
        ...initialState,
        open: false,
      };
    case getType(confirmDialogueActions.openDialogue):
      return {
        ...state,
        ...action.payload.data,
        open: true,
      };
    default:
      return state;
  }
}
