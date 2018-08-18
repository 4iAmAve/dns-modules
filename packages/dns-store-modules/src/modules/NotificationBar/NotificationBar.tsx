import * as React from 'react';
import { connect } from 'react-redux';
import { Notification, NotificationD } from '@dns/toolbox';

import { notificationActions } from '../../actions/notifications';

import './NotificationBar.css';

export interface Notifications {
  items: NotificationD[];
}

export interface NotificationBarProps {
  notifications: Notifications;
  onCloseNotification: (id: number | string) => {};
  stacked?: boolean;
  position?: 'bl' | 'bc' | 'br' | 'tl' | 'tc' | 'tr';
}

export interface NotificationBarState {
}

class NotificationBar extends React.Component<NotificationBarProps, NotificationBarState> {
  public static defaultProps: Partial<NotificationBarProps> = {
    stacked: false,
    position: 'tc',
  };

  public render() {
    const { notifications, onCloseNotification, stacked, position } = this.props;
    const items = notifications && notifications.items ? notifications.items : [];
    return (
      <div className={`notification-bar ${position ? `notification-bar--${position}` : ''}`}>
        {
          items.map(item => (
            <Notification
              key={item.timestamp}
              item={item}
              stacked={stacked}
              decayTime={item.timeout}
              onCloseNotification={onCloseNotification}
              position={position}
            />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
  onCloseNotification: (id: string | number) => dispatch(notificationActions.closeNotification(id)),
});

export const connectedNotficationBar = connect(mapStateToProps, mapDispatchToProps)(NotificationBar);
