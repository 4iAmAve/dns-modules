import * as React from 'react';
import { Notification } from '@dns/toolbox';
import { noop } from '@dns/utils';

import NotificationsBarProvider, { NotificationsBarContext } from './NotificationsBarProvider';

import './NotificationsBar.css';

export interface NotificationBarProps {
  stacked?: boolean;
  position?: 'bl' | 'bc' | 'br' | 'tl' | 'tc' | 'tr';
}

export interface NotificationBarState {
}

const actionProvider = {
  addNotification: noop,
  closeNotification: noop
};

export const getAddNotification = () => actionProvider.addNotification;
export const getCloseNotification = () => actionProvider.closeNotification;

const setAddNotification = addNotification => actionProvider.addNotification = addNotification;
const setCloseNotification = closeNotification => actionProvider.closeNotification = closeNotification;

export class NotificationsBar extends React.Component<NotificationBarProps, NotificationBarState> {
  static defaultProps: Partial<NotificationBarProps> = {
    stacked: false,
    position: 'tc',
  };

  render() {
    const { stacked, position } = this.props;
    return (
      <NotificationsBarProvider>
        <NotificationsBarContext.Consumer>
          {({ addNotification, closeNotification, items }) => {
            setAddNotification(addNotification);
            setCloseNotification(closeNotification);

            return (
              <div className={`notification-bar ${position ? `notification-bar--${position}` : ''}`}>
                {
                  items.map((item: any) => (
                    <Notification
                      key={item.timestamp}
                      item={item}
                      stacked={stacked}
                      decayTime={item.timeout}
                      onCloseNotification={closeNotification}
                      position={position}
                    />
                  ))
                }
              </div>
            );
          }}
        </NotificationsBarContext.Consumer>
      </NotificationsBarProvider>
    );
  }
}
