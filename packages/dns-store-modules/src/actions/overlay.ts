import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const overlayActions: any = {
  closeOverlay: createAction('CLOSE_OVERLAY', (id: string | number) => {
    return {
      type: 'CLOSE_OVERLAY',
      id,
    };
  }),
  openOverlay: createAction('OPEN_OVERLAY', (id: string | number) => {
    return {
      type: 'OPEN_OVERLAY',
      id,
    };
  }),
  subscribeToOverlayStore: createAction('SUBSCRIBE_TO_OVERLAY_STORE', (id: string | number) => {
    return {
      type: 'SUBSCRIBE_TO_OVERLAY_STORE',
      id,
    };
  }),
};

export const returnOfActions = Object.values(overlayActions).map(getReturnOfExpression);
export type overlayAction = typeof returnOfActions[number];
