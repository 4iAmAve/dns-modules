import * as React from 'react';

import './Header.css';

export interface HeaderProps {
    label?: any;
    logo?: any;
    onClick?: () => void;
}

export interface HeaderState {
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  protected onButtonClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  public render() {
    const { logo, label } = this.props;
    return (
      <div className="header" onClick={() => this.onButtonClick()}>
        {logo}
        {label}
      </div>
    );
  }
}
