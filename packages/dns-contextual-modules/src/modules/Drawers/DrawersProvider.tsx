import * as React from 'react';
import { DrawerD } from '@dns/toolbox';

export interface DrawersPayload extends DrawerD {
  id: string | number;
  content: any;
}

export interface DrawersContextInterface {
  items?: DrawersPayload[];
  addDrawer: (dialogue: DrawersPayload) => void;
  closeDrawer: (id: string | number) => void;
  removeDrawer: (id: string | number) => void;
}

export const DrawersContext = React.createContext<DrawersContextInterface>({
  items: [],
  addDrawer: (drawer: DrawersPayload) => { return true; },
  closeDrawer: (id: string | number) => { return true; },
  removeDrawer: (id: string | number) => { return true; }
});

class DrawersProvider extends React.Component {
  state = {
    items: [],
  };

  addDrawer = (drawer: DrawersPayload): void => {
    const items = Object.assign([], this.state.items);
    items.push({
      ...drawer,
      content: drawer.content,
      id: drawer.id,
      triggerClose: false
    });
    this.setState({ items });
  }

  closeDrawer = (id: string | number): void => {
    let items = Object.assign([], this.state.items);

    items = items.map(drawer => {
      const data = drawer;
      if (drawer.id === id) {
        data.triggerClose = true;
      }
      return data;
    });

    this.setState({ items });
  }

  removeDrawer = (id: string | number): void => {
    this.setState({
      items: this.state.items.filter(drawer => drawer.id !== id)
    });
  }

  render() {
    const { children } = this.props;
    return (
      <DrawersContext.Provider
        value={{
          ...this.state,
          addDrawer: this.addDrawer,
          closeDrawer: this.closeDrawer,
          removeDrawer: this.removeDrawer
        }}
      >
        {children}
      </DrawersContext.Provider>
    );
  }
}

export default DrawersProvider;
