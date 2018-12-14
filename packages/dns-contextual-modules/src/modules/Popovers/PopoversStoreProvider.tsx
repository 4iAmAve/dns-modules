import * as React from 'react';
import { PopoverD } from '@dns/toolbox';

interface PopoverSubscription {
  id: string | number;
  onUpdate: (data?: any) => void;
}

export interface PopoversStoreContextInterface {
  openPopover: (popover: PopoverD) => void;
  removePopover: (id: string | number) => void;
  subscribePopover: (popover: PopoverSubscription) => void;
}

export const PopoversStoreContext = React.createContext<PopoversStoreContextInterface>({
  openPopover: (popover: PopoverD) => { return true; },
  removePopover: (id: string | number) => { return true; },
  subscribePopover: (popover: PopoverSubscription) => { return true; },
});

class PopoversStoreProvider extends React.Component {
  _items = {};

  subscribePopover = (popover: PopoverSubscription) => {
    this._items = {
      ...this._items,
      [popover.id]: {
        id: popover.id,
        onUpdate: popover.onUpdate
      }
    };
  }

  openPopover = (popover: PopoverD): void => {
    if (this._items[popover.id]) {
      this._items[popover.id].onUpdate(popover);
    }
  }

  removePopover = (id: string | number): void => {
    if (this._items[id]) {
      this._items[id].onUpdate(false);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <PopoversStoreContext.Provider
        value={{
          ...this.state,
          openPopover: this.openPopover,
          removePopover: this.removePopover,
          subscribePopover: this.subscribePopover
        }}
      >
        {children}
      </PopoversStoreContext.Provider>
    );
  }
}

export default PopoversStoreProvider;
