import { createAction } from 'typesafe-actions';
import { getReturnOfExpression } from 'react-redux-typescript';

export const popoverActions: any = {
  closePopover: createAction('CLOSE_POPOVER', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  openPopover: createAction('OPEN_POPOVER', resolve => {
    return (id: string | number) => resolve({ id });
  }),
  subscribeToPopoverStore: createAction('SUBSCRIBE_TO_POPOVER_STORE', resolve => {
    return (id: string | number) => resolve({ id });
  })
};

export const returnOfActions = Object.values(popoverActions).map(getReturnOfExpression);
export type popoverAction = typeof returnOfActions[number];
