import * as React from 'react';
import { noop } from '@dns/utils';

import PopoversStoreProvider, { PopoversStoreContext } from './PopoversStoreProvider';

const actionProvider = {
  openPopover: noop,
  removePopover: noop,
  subscribePopover: noop,
};

export const getOpenPopover = () => actionProvider.openPopover;
export const getRemovePopover = () => actionProvider.removePopover;
export const getSubscribePopover = () => actionProvider.subscribePopover;

const setOpenPopover = openPopover => actionProvider.openPopover = openPopover;
const setRemovePopover = removePopover => actionProvider.removePopover = removePopover;
const setSubscribePopover = subscribePopover => actionProvider.subscribePopover = subscribePopover;

export class PopoversStore extends React.Component<{}, {}> {
  render() {
    return (
      <PopoversStoreProvider>
        <PopoversStoreContext.Consumer>
          {({ openPopover, removePopover, subscribePopover }) => {
            setOpenPopover(openPopover);
            setRemovePopover(removePopover);
            setSubscribePopover(subscribePopover);

            return (
              <React.Fragment />
            );
          }}
        </PopoversStoreContext.Consumer>
      </PopoversStoreProvider>
    );
  }
}
