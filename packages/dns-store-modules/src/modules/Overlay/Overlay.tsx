import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from '@dns/toolbox';

import { overlayActions } from '../../actions/overlay';
import { OverlayState as OverlayReducerState } from '../../reducers/overlay';

import './Overlay.css';

export interface OverlayProps {
  onSubscribeToOverlayStore: (id: string | number) => void;
  closeOverlay: (id: string | number) => void;
  overlay: OverlayReducerState;
  id: string | number;
  rootID?: string;
  width?: string;
  title?: string | null;
  classNames?: any;
  withoutCloseButton?: boolean;
}

export interface OverlayState {
  menuOpen: boolean;
}

class Overlay extends React.Component<OverlayProps, OverlayState> {
  public static defaultProps: Partial<OverlayProps> = {
    rootID: 'root',
    overlay: {},
    width: 'auto',
    id: 0,
    title: null,
  };

  private node: HTMLElement;

  public constructor(props: OverlayProps, context: object) {
    super(props, context);
    if (!(props.id in props.overlay)) {
      this.props.onSubscribeToOverlayStore(this.props.id);
    } else {
      this.handleEventListeners('add');
    }
  }

  public componentDidUpdate() {
    if (!(this.props.id in this.props.overlay)) {
      this.props.onSubscribeToOverlayStore(this.props.id);
    }

    if (this.props.overlay[this.props.id]) {
      this.handleEventListeners('add');
    } else {
      this.handleEventListeners();
    }

  }

  public componentWillUnmount() {
    this.handleEventListeners();
  }

  public getElement = () => {
    const { rootID } = this.props;
    const element = document.getElementById(rootID || 'root') as HTMLElement;
    if (element === null || element === undefined) {
      return null;
    }
    return  element;
  }

  public handleEventListeners = (type?: string) => {
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
    this.props.closeOverlay(this.props.id);
  }

  handleDocumentClick = (evt: any) => {
    const area = this.node;
    const TIMEOUT = 5;

    if (area && !area.contains(evt.target)) {
      // @TODO dirty workaround to avoid race condition -> get rid of it
      setTimeout(
        () => {
          this.props.closeOverlay(this.props.id);
        },
        TIMEOUT
      );
    }
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
    return (
      <div
        className={`
          overlay
          ${this.props.overlay[this.props.id] ? 'overlay--open' : ''}
          ${this.props.classNames ? this.props.classNames : ''}
        `}
        ref={this.handleRef}
      >
        <Card withoutOffset={true}>
          {
            this.props.title &&
              <div className="overlay_title">
                <span className="overlay_title">{this.props.title}</span>
                <hr className="overlay_separator" />
              </div>
          }
          <div className="overlay_wrapper">
            {this.props.children}
          </div>
          {
            !this.props.withoutCloseButton ?
              <div className="overlay_close">
                <button
                  className="overlay_button"
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
  overlay: state.overlay,
});

const mapDispatchToProps = dispatch => ({
  closeOverlay: (id: string | number) => dispatch(overlayActions.closeOverlay(id)),
  onSubscribeToOverlayStore: (id: string | number) => dispatch(overlayActions.subscribeToOverlayStore(id)),
});

export const connectedOverlay = connect(mapStateToProps, mapDispatchToProps)(Overlay);
