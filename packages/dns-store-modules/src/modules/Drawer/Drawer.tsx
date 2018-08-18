import * as React from 'react';
import { connect } from 'react-redux';
import { IconButton } from '@dns/toolbox';

import { drawerActions } from '../../actions/drawers';
import { DrawersState as DrawerReducerState } from '../../reducers/drawers';

import './Drawer.css';

export interface DrawerProps {
  onSubscribeToDrawerStore: (id: string | number) => void;
  onCloseDrawer: (id: string | number) => void;
  drawers: DrawerReducerState;
  id: string | number;
  width?: string;
  classNames?: any;
  withoutCloseButton?: boolean;
  fullWidth?: boolean;
  disableCloseOnOutsideClick?: boolean;
}

export interface DrawerState {
  loaded: boolean;
}

class Drawer extends React.Component<DrawerProps, DrawerState> {
  public static defaultProps: Partial<DrawerProps> = {
    width: 'auto',
    id: 0,
    fullWidth: false,
  };

  public constructor(props: DrawerProps, context: object) {
    super(props, context);

    this.state = {
      loaded: false,
    };

    if (!(props.id in props.drawers)) {
      this.props.onSubscribeToDrawerStore(this.props.id);
    }
  }

  public onCloseClick = () => {
    const { drawers, id } = this.props;
    if (drawers[id] && drawers[id].onClose) {
      drawers[id].onClose();
    }
    this.props.onCloseDrawer(this.props.id);
  }

  render() {
    const {
      classNames,
      drawers,
      fullWidth,
      id,
      withoutCloseButton,
      disableCloseOnOutsideClick = false
    } = this.props;
    return (
      <div
        className={`
          drawer
          ${drawers[id] && drawers[id].open ? 'drawer--open' : ''}
          ${classNames ? classNames : ''}
        `}
      >
        {
          !disableCloseOnOutsideClick ?
            <div className="drawer_backdrop" onClick={this.onCloseClick}/> : null
        }
        <div
          className={`
            drawer_content
            ${fullWidth ? 'drawer_content--full-width' : ''}
          `}
        >
          {
            drawers[id] && drawers[id].title &&
              <div className="drawer_title">
                <span className="drawer_title">{drawers[id].title}</span>
                <hr className="drawer_separator" />
              </div>
          }
          <div className="drawer_wrapper">
            {
              drawers[id] && drawers[id].open && drawers[id].content ? drawers[id].content : null
            }
          </div>
          {
            !withoutCloseButton ?
              <div className="drawer_close">
                <IconButton icon={'close'} type="simple" onClick={this.onCloseClick} />
              </div> : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  drawers: state.drawers,
});

const mapDispatchToProps = dispatch => ({
  onCloseDrawer: (id: string | number) => dispatch(drawerActions.closeDrawer(id)),
  onSubscribeToDrawerStore: (id: string | number) => dispatch(drawerActions.subscribeToDrawerStore(id)),
});

export const connectedDrawer = connect(mapStateToProps, mapDispatchToProps)(Drawer);
