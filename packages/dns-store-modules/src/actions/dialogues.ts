import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const dialoguesActions: any = {
  closeDialogue: createAction('CLOSE_DIALOGUE', (id: string | number) => {
    return {
      type: 'CLOSE_DIALOGUE',
      id,
    };
  }),
  openDialogue: createAction('OPEN_DIALOGUE', (id: string | number) => {
    return {
      type: 'OPEN_DIALOGUE',
      id,
    };
  }),
  subscribeToDialoguesStore: createAction('SUBSCRIBE_TO_DIALOGUE_STORE', (id: string | number) => {
    return {
      type: 'SUBSCRIBE_TO_DIALOGUE_STORE',
      id,
    };
  }),
};

export const returnOfActions = Object.values(dialoguesActions).map(getReturnOfExpression);
export type dialoguesAction = typeof returnOfActions[number];
