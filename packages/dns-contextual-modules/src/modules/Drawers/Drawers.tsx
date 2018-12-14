import * as React from 'react';
import { Drawer, DrawerD } from '@dns/toolbox';
import { noop } from '@dns/utils';

import DrawersProvider, { DrawersContext } from './DrawersProvider';

import './Drawers.css';

export interface DrawersProps {
}

export interface DrawersState {
}

const actionProvider = {
  addDrawer: noop,
  closeDrawer: noop,
  removeDrawer: noop,
};

export const getAddDrawer = () => actionProvider.addDrawer;
export const getCloseDrawer = () => actionProvider.closeDrawer;
export const getRemoveDrawer = () => actionProvider.removeDrawer;

const setAddDrawer = addDrawer => actionProvider.addDrawer = addDrawer;
const setCloseDrawer = closeDrawer => actionProvider.closeDrawer = closeDrawer;
const setRemoveDrawer = removeDrawer => actionProvider.removeDrawer = removeDrawer;

export class Drawers extends React.Component<DrawersProps, DrawersState> {
  removeDrawer = id => {
    const removeAction: any = getRemoveDrawer();
    removeAction(id);
  }

  render() {
    return (
      <DrawersProvider>
        <DrawersContext.Consumer>
          {({ addDrawer, closeDrawer, items, removeDrawer }) => {
            setAddDrawer(addDrawer);
            setCloseDrawer(closeDrawer);
            setRemoveDrawer(removeDrawer);

            return (
              <React.Fragment>
                {
                  items.map((item: DrawerD, key: number) => (
                    <Drawer
                      {...item}
                      key={`drawer_${item.id}_${key}`}
                      onClose={() => this.removeDrawer(item.id)}
                    />
                  ))
                }
              </React.Fragment>
            );
          }}
        </DrawersContext.Consumer>
      </DrawersProvider>
    );
  }
}
