import * as React from 'react';

import { Drawer as DrawerD } from '../definitions';
import { IconButton } from '../IconButton/IconButton';

import './Drawer.css';

export interface DrawerProps extends DrawerD {
}

export interface DrawerState {
  loaded: boolean;
  visible: boolean;
}

export class Drawer extends React.Component<DrawerProps, DrawerState> {
  static defaultProps: Partial<DrawerProps> = {
    disableCloseOnOutsideClick: false,
    fullWidth: false,
    id: 0,
    position: 'right',
    triggerClose: false,
    width: 'auto',
  };

  _visibilityTimeout = 100;
  _closeTimeout = 300;

  constructor(props: DrawerProps, context: object) {
    super(props, context);

    this.state = {
      loaded: false,
      visible: false,
    };

    this.makeVisible();
  }

  componentDidUpdate(prevProps: DrawerProps) {
    if (this.props.triggerClose && !prevProps.triggerClose) {
      this.onClose();
    }
  }

  makeVisible = () => {
    setTimeout(
      () => {
        this.setState({ visible: true });
      },
      this._visibilityTimeout
    );
  }

  onClose = () => {
    this.setState(
      { visible: false },
      () => {
        setTimeout(
          () => {
            if (this.props.onClose) {
              this.props.onClose(this.props.id);
            }
          },
          this._closeTimeout
        );
      }
    );
  }

  render() {
    const {
      className,
      content,
      fullWidth,
      position,
      title,
      withoutCloseButton,
      disableCloseOnOutsideClick
    } = this.props;
    const { visible } = this.state;

    return (
      <div className={`drawer ${visible ? 'drawer--open' : ''} ${className ? className : ''} drawer--${position}`}>
        {
          !disableCloseOnOutsideClick ?
            <div className="drawer_backdrop" onClick={this.onClose}/> : null
        }
        <div
          className={`
            drawer_content
            ${fullWidth ? 'drawer_content--full-width' : ''}
          `}
        >
          {
            title ?
              <div className="drawer_title">
                <span className="drawer_title">{title}</span>
                <hr className="drawer_separator" />
              </div> : null
          }
          <div className="drawer_wrapper">
            {
              this.state.visible && content ? content : null
            }
          </div>
          {
            !withoutCloseButton ?
              <div className="drawer_close">
                <IconButton icon={'close'} type="simple" onClick={this.onClose} />
              </div> : null
          }
        </div>
      </div>
    );
  }
}
