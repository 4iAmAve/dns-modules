import * as React from 'react';

import { Popover as PopoverD } from '../definitions';
import { Card } from '../Card/Card';
import { IconButton } from '../IconButton/IconButton';

import './Popover.css';

export interface PopoverProps extends PopoverD {
}

export interface PopoverState {
  exceedsBoundary: boolean;
  refPosition: any;
  visible: boolean;
}

export class Popover extends React.Component<PopoverProps, PopoverState> {
  static defaultProps: Partial<PopoverProps> = {
    rootID: 'root',
    width: 'auto',
    id: 0,
    title: null,
  };

  _externalReference: HTMLElement;
  _closeTimeout = 300;
  _node: HTMLElement;
  _visibilityTimeout = 100;

  constructor(props: PopoverProps, context: object) {
    super(props, context);

    this.state = {
      exceedsBoundary: false,
      refPosition: {},
      visible: false,
    };

    this._externalReference = props.reference || null;
    this.makeVisible();
  }

  componentDidMount(): void {
    this.handleEventListeners('add');
    this.detectBorder();
  }

  componentWillUnmount() {
    this.handleEventListeners();
  }

  makeVisible = () => {
    setTimeout(
      () => {
        this.setState({ visible: true });
      },
      this._visibilityTimeout
    );
  }

  getElement = () => {
    const { rootID } = this.props;
    const element = document.getElementById(rootID || 'root') as HTMLElement;
    if (element === null || element === undefined) {
      return null;
    }
    return  element;
  }

  handleEventListeners = (type?: string) => {
    const element = this.getElement();

    if (element) {
      if (type === 'add') {
        element.addEventListener('click', this.handleDocumentClick);
      } else {
        element.removeEventListener('click', this.handleDocumentClick);
      }
    }
  }

  onCloseClick = () => {
    this.setState(
      { visible: false },
      () => {
        setTimeout(
          () => {
            if (this.props.onClosePopover) {
              this.props.onClosePopover(this.props.id);
            }
          },
          this._closeTimeout
        );
      }
    );
  }

  handleDocumentClick = (evt: any) => {
    const area = this._node;
    const TIMEOUT = 5;

    if (area && !area.contains(evt.target)) {
      // @TODO dirty workaround to avoid race condition -> get rid of it
      setTimeout(
        () => this.onCloseClick(),
        TIMEOUT
      );
    }
  }

  determineRefPosition = () => {
    if (this._externalReference) {
      const { left } = this._externalReference.getBoundingClientRect();
      return left;
    }
    return false;
  }

  detectBorder = () => {
    if (this.props.id) {
      let { left } = this._node.getBoundingClientRect();
      const exceedsBoundary = (this._node.offsetWidth + left) > document.body.offsetWidth;

      if (exceedsBoundary) {
        this.setState({ exceedsBoundary });
      }
    }
  }

  handleRef = ref => this._node = ref;

  render() {
    const { className, content, title, withoutCloseButton } = this.props;
    let style = {};
    if (this.state.exceedsBoundary) {
      style = {
        right: 0
      };
    } else if (this._externalReference) {
      style = {
        left: this.determineRefPosition()
      };
    }

    return (
      <div
        className={`popover ${this.state.visible ? 'popover--open' : ''} ${className ? className : ''}`}
        style={style}
        ref={this.handleRef}
      >
        <Card withoutOffset={true} classNames="popover_card">
          {
            title &&
            <div className="popover_title">
              {title}
              <hr className="popover_separator" />
            </div>
          }
          <div className="popover_wrapper">
            {content}
          </div>
          {
            !withoutCloseButton ?
              <div className="popover_close">
                <IconButton
                  classNames="popover_button"
                  type={'simple'}
                  icon={'close'}
                  onClick={this.onCloseClick}
                />
              </div> : null
          }
        </Card>
      </div>
    );
  }
}
