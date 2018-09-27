import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from '@dns/toolbox';

import { popoverActions } from '../../actions/popover';
import { PopoverState as PopoverReducerState } from '../../reducers/popover';

import './Popover.css';

export interface PopoverProps {
  onSubscribeToPopoverStore: (id: string | number) => void;
  closePopover: (id: string | number) => void;
  popover: PopoverReducerState;
  id: string | number;
  rootID?: string;
  width?: string;
  title?: string | null;
  classNames?: any;
  withoutCloseButton?: boolean;
}

export interface PopoverState {
  menuOpen: boolean;
}

class Popover extends React.Component<PopoverProps, PopoverState> {
  public static defaultProps: Partial<PopoverProps> = {
    rootID: 'root',
    popover: {},
    width: 'auto',
    id: 0,
    title: null,
  };

  private node: HTMLElement;

  public constructor(props: PopoverProps, context: object) {
    super(props, context);
    if (!(props.id in props.popover)) {
      this.props.onSubscribeToPopoverStore(this.props.id);
    } else {
      this.handleEventListeners('add');
    }
  }

  public componentDidUpdate() {
    if (!(this.props.id in this.props.popover)) {
      this.props.onSubscribeToPopoverStore(this.props.id);
    }

    if (this.props.popover[this.props.id]) {
      this.handleEventListeners('add');
    } else {
      this.handleEventListeners();
    }

  }

  public componentWillUnmount() {
    this.handleEventListeners();
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
    this.props.closePopover(this.props.id);
  }

  handleDocumentClick = (evt: any) => {
    const area = this.node;
    const TIMEOUT = 5;

    if (area && !area.contains(evt.target)) {
      // @TODO dirty workaround to avoid race condition -> get rid of it
      setTimeout(
        () => {
          this.props.closePopover(this.props.id);
        },
        TIMEOUT
      );
    }
  }

  detectBorder = () => {
    let style = {};

    if (this.node) {
      const exceedsBoundary = (this.node.offsetWidth + this.node.offsetLeft) > document.body.offsetWidth;

      if (exceedsBoundary) {
        style = {
          right: 0
        };
      }
    }

    return style;
  }

  handleRef = ref => this.node = ref;

  render() {
    // const style = {
    //   height: 'auto',
    //   width: '95%',
    //   marginLeft: 20,
    //   padding: 6,
    //   display: 'inline-block',
    //   backgroundColor: 'white',
    //   position: 'relative',
    // };
    const style = this.detectBorder();
    return (
      <div
        className={`popover ${this.props.popover[this.props.id] ? 'popover--open' : ''}
          ${this.props.classNames ? this.props.classNames : ''}
        `}
        style={style}
        ref={this.handleRef}
      >
        <Card withoutOffset={true} classNames="popover_card">
          {
            this.props.title &&
            <div className="popover_title">
              <span className="popover_title">{this.props.title}</span>
              <hr className="popover_separator" />
            </div>
          }
          <div className="popover_wrapper">
            {this.props.children}
          </div>
          {
            !this.props.withoutCloseButton ?
              <div className="popover_close">
                <button
                  className="popover_button"
                  onClick={() => this.onCloseClick()}
                >
                  <i className={`material-icons`}>close</i>
                </button>
              </div> : null
          }
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  popover: state.popover,
});

const mapDispatchToProps = dispatch => ({
  closePopover: (id: string | number) => dispatch(popoverActions.closePopover(id)),
  onSubscribeToPopoverStore: (id: string | number) => dispatch(popoverActions.subscribeToPopoverStore(id)),
});

export const connectedPopover = connect(mapStateToProps, mapDispatchToProps)(Popover);
