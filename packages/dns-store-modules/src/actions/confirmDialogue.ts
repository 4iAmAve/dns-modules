import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const confirmDialogueActions: any = {
  closeDialogue: createAction('CLOSE_CONFIRM_DIALOGUE'),
  openDialogue: createAction('OPEN_CONFIRM_DIALOGUE', resolve => {
    return data => resolve({ data });
  }),
};

export const returnOfActions = Object.values(confirmDialogueActions).map(getReturnOfExpression);
export type confirmDialogueAction = typeof returnOfActions[number];
