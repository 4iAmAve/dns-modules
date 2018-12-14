import * as React from 'react';
import { NotificationD } from '@dns/toolbox';

interface NotifcationPayload {
  message: string;
  type: string;
  timeout?: number;
}

export interface NotificationsBarContextInterface {
  items?: NotificationD[];
  addNotification: (notification: NotifcationPayload) => {};
  closeNotification: (id: string | number) => {};
}

export const NotificationsBarContext = React.createContext<NotificationsBarContextInterface>({
  items: [],
  addNotification: (notification: NotifcationPayload) => { return true; },
  closeNotification: (id: string | number) => { return true; }
});

class NotificationsBarProvider extends React.Component {
  state = {
    items: [],
  };

  addNotification = (notification: NotifcationPayload) => {
    const items = Object.assign([], this.state.items);
    items.push({
      id: items.length,
      message: notification.message,
      type: notification.type,
      timeout: notification.timeout || 5000,
      timestamp: Date.now(),
    });
    this.setState({ items });
    return true;
  }

  closeNotification = (id: string | number) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
    return true;
  }

  render() {
    const { children } = this.props;
    return (
      <NotificationsBarContext.Provider
        value={{
          ...this.state,
          addNotification: this.addNotification,
          closeNotification: this.closeNotification
        }}
      >
        {children}
      </NotificationsBarContext.Provider>
    );
  }
}

export default NotificationsBarProvider;
