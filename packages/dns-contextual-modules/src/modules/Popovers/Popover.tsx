import * as React from 'react';
import { Popover as PopoverComponent, PopoverD } from '@dns/toolbox';

import { getRemovePopover, getSubscribePopover } from './PopoversStore';

export interface PopoverProps {
  id: string | number;
  onClose?: () => void;
}

export interface PopoverState {
  data: PopoverD | null;
}

export class Popover extends React.Component<PopoverProps, PopoverState> {
  constructor(props: PopoverProps) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount(): void {
    const subscribeAction: any = getSubscribePopover();
    return subscribeAction({
      id: this.props.id,
      onUpdate: this.onUpdate
    });
  }

  onUpdate = (data: PopoverD | null) => {
    this.setState({ data });
  }

  removePopover = () => {
    const removeAction: any = getRemovePopover();
    if (this.props.onClose) {
      this.props.onClose();
    }
    return removeAction(this.props.id);
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        {data ? <PopoverComponent {...data} onClosePopover={this.removePopover}/> : null}
      </React.Fragment>
    );
  }
}
