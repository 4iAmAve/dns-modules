import * as React from 'react';

import { Notification as NotificationD } from '../definitions';

import './Notification.css';

export interface NotificationProps {
  item: NotificationD;
  onCloseNotification: (id: number | string) => {};
  visibilityTimeout?: number;
  decayTime?: number;
  decayTimeout?: number;
  closeTimeout?: number;
  stacked?: boolean;
  position?: 'bl' | 'bc' | 'br' | 'tl' | 'tc' | 'tr';
}

export interface NotificationState {
  visible: boolean;
}

export class Notification extends React.Component<NotificationProps, NotificationState> {
  public static defaultProps: Partial<NotificationProps> = {
    visibilityTimeout: 300,
    decayTime: 5000,
    decayTimeout: 5000,
    closeTimeout: 300,
    stacked: false,
    position: 'tc',
  };

  private checkForDecayTimeout;
  private showTimeout;
  private closeTimeout;

  public constructor(props: NotificationProps, context: object) {
    super(props, context);
    this.state = {
        visible: false,
    };
    this.makeVisible();
    this.checkForDecay();
  }

  public componentWillUnmount() {
    clearTimeout(this.checkForDecayTimeout);
    clearTimeout(this.closeTimeout);
    clearTimeout(this.showTimeout);
  }

  public makeVisible = () => {
    this.showTimeout = setTimeout(
      () => {
        this.setState({ visible: true });
        clearTimeout(this.showTimeout);
      },
      this.props.visibilityTimeout
    );
  }

  public checkForDecay = () => {
    clearTimeout(this.checkForDecayTimeout);
    this.checkForDecayTimeout = setTimeout(
      () => {
        const timeNow = Date.now();
        let { decayTime } = this.props;
        if (decayTime === undefined) {
          decayTime = 5000;
        }
        const decayed = this.props.item.timestamp + decayTime;
        if (decayed < timeNow) {
          this.setState({ visible: false });
          this.closeNotification();
        }

        return this.checkForDecay();
      },
      this.props.decayTimeout
    );
  }

  public closeNotification = () => {
    this.setState({ visible: false });
    this.closeTimeout = setTimeout(
      () => {
        this.props.onCloseNotification(this.props.item.id);
        clearTimeout(this.closeTimeout);
      },
      this.props.closeTimeout
    );
    clearTimeout(this.checkForDecayTimeout);
  }

  public render() {
    const { item, stacked, position } = this.props;
    const { message, type } = item;
    const { visible } = this.state;
    const modColor = type === 'success' ? 'notification--success' :
      type === 'error' ? 'notification--error' :
        type === 'warning' ? 'notification--warning' : '';

    return (
      <div
        className={`
          notification
          ${modColor}
          ${visible ? 'notification--visible' : ''}
          ${stacked ? 'notification--stacked' : ''}
          ${position ? `notification--${position}` : ''}
        `}
      >
        {message}
        <div className="notification_close" onClick={this.closeNotification}>
            <i className={`material-icons`}>close</i>
        </div>
      </div>
    );
  }
}
