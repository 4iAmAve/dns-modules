import * as React from 'react';

import './Card.css';

export interface CardProps {
  /** remove the padding from the card  */
  withoutOffset?: boolean;
  /** additional classNames provided by the parent  */
  classNames?: any;
}

export interface CardState {
}

export class Card extends React.Component<CardProps, CardState> {
  public render() {
    const { classNames, withoutOffset } = this.props;
    return (
      <div
        className={`
          card
          ${withoutOffset ? 'card_without-offset' : ''}
          ${classNames ? classNames : ''}
        `}
      >
          {this.props.children}
      </div>
    );
  }
}
