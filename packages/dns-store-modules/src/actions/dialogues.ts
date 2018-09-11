import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const dialoguesActions: any = {
  closeDialogue: createAction('CLOSE_DIALOGUE', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  openDialogue: createAction('OPEN_DIALOGUE', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  subscribeToDialoguesStore: createAction('SUBSCRIBE_TO_DIALOGUE_STORE', resolve => {
    return (id: string | number) => resolve({ id });
  })
};

export const returnOfActions = Object.values(dialoguesActions).map(getReturnOfExpression);
export type dialoguesAction = typeof returnOfActions[number];
