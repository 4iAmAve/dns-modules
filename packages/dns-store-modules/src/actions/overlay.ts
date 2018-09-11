import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const overlayActions: any = {
  closeOverlay: createAction('CLOSE_OVERLAY', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  openOverlay: createAction('OPEN_OVERLAY', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  subscribeToOverlayStore: createAction('SUBSCRIBE_TO_OVERLAY_STORE', resolve => {
    return (id: string | number) => resolve({ id });
  })
};

export const returnOfActions = Object.values(overlayActions).map(getReturnOfExpression);
export type overlayAction = typeof returnOfActions[number];
