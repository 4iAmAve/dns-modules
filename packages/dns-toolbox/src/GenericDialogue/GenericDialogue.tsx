import * as React from 'react';

import { GenericDialogue as GenericDialogueD } from '../definitions';

import './GenericDialogue.css';

export interface GenericDialogueProps extends GenericDialogueD {
}

export interface GenericDialogueState {
}

export class GenericDialogue extends React.Component<GenericDialogueProps, GenericDialogueState> {
  public static defaultProps: Partial<GenericDialogueProps> = {
    title: null,
    width: '40em',
    height: 'auto',
    minHeight: '10%',
  };

  public render() {
    const {
      withoutOffset,
      classNames,
      title,
      footer,
      content,
      hero,
    } = this.props;
    let heroInlineStyle = {};

    if (hero) {
      heroInlineStyle = {
        backgroundImage: `url(${hero})`
      };
    }

    return (
      <div
        className={`${classNames ? classNames : ''} gd
          ${withoutOffset ? 'gd--without-offset' : ''} ${hero ? 'gd--with-hero' : ''}
          ${footer ? 'gd--wf' : ''}
        `}
      >
        {hero ? <div className="gd_hero" style={heroInlineStyle} /> : null}
        {title ? <h1>{title}</h1> : null}
        <div className={`gd_content ${footer ? 'gd_content--wf' : ''}`}>
          {content}
        </div>
        {footer ? <div className="gd_footer">{footer}</div> : null}
      </div>
    );
  }
}
