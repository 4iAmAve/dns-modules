import * as React from 'react';

import { GenericDialogue as GenericDialogueD } from '../definitions';

import './GenericDialogue.css';

export interface GenericDialogueProps extends GenericDialogueD {
}

export interface GenericDialogueState {
  visible: boolean;
}

export class GenericDialogue extends React.Component<GenericDialogueProps, GenericDialogueState> {
  static defaultProps: Partial<GenericDialogueProps> = {
    title: null,
    width: '40em',
    height: 'auto',
    minHeight: '10%',
  };

  _visibilityTimeout = 100;
  _closeTimeout = 300;

  constructor(props: GenericDialogueProps) {
    super(props);

    this.state = {
      visible: false,
    };

    this.makeVisible();
  }

  componentDidUpdate(prevProps: GenericDialogueProps) {
    if (this.props.triggerClose && !prevProps.triggerClose) {
      this.closeDialogue();
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

  closeDialogue = () => {
    this.setState(
      { visible: false },
      () => {
        setTimeout(
          () => {
            if (this.props.onClose) {
              this.props.onClose();
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
      footer,
      hero,
      title,
      withoutOffset,
    } = this.props;
    const { visible } = this.state;
    let heroInlineStyle = {};

    if (hero) {
      heroInlineStyle = {
        backgroundImage: `url(${hero})`
      };
    }

    return (
      <div className={`dialogue ${visible ? 'dialogue--open' : ''} ${className ? className : ''}`}>
        <div className="dialogue_back-drop" onClick={() => this.closeDialogue()}/>
        <div className="dialogue_container">
          <div
            className={`gd ${withoutOffset ? 'gd--without-offset' : ''} ${hero ? 'gd--with-hero' : ''}
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
        </div>
      </div>
    );
  }
}
