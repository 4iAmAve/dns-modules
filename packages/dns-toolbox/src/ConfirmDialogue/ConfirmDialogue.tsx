import * as React from 'react';

import { GenericDialogue } from '../definitions';
import { Button } from '../Button/Button';

import './ConfirmDialogue.css';

export interface ConfirmDialogueProps extends GenericDialogue {
  onConfirm: (e: any) => void;
}

export interface ConfirmDialogueState {
}

export class ConfirmDialogue extends React.Component<ConfirmDialogueProps, ConfirmDialogueState> {
  static defaultProps: Partial<ConfirmDialogueProps> = {
    title: 'Confirm',
    width: '40em',
    height: 'auto',
    minHeight: '10%',
  };

  _inputRef: HTMLElement;

  componentDidMount() {
    if (this._inputRef) {
      this._inputRef.focus();
    }
  }

  handleKeyup = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();

    if (e.keyCode === 27) {
      this.closeDialogue();
    } else if (e.keyCode === 13) {
      this.confirmDialogue();
    }
  }

  confirmDialogue = () => {
    this.props.onConfirm(true);
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  closeDialogue = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleInputRef = ref => this._inputRef = ref && ref.focus();

  render() {
    const {
      width,
      height,
      minHeight,
      withoutOffset,
      className,
      title,
      content,
    } = this.props;
    const inlineStyle = {
      width,
      height,
      minHeight,
    };
    return (
      <div
        className={`
          confirm-dialogue
          ${withoutOffset ? 'without-offset' : ''}
          ${className ? className : ''}
        `}
        style={inlineStyle}
      >
        <h2>{title}</h2>
        <div>
          {content ? <p className="c-d_text">{content}</p> : null}
          <p>Are you sure you want to proceed?</p>
        </div>
        <div>
          <Button onClick={() => this.confirmDialogue()} label="Yes"/>
          <Button onClick={() => this.closeDialogue()} label="No"/>
          <input
            onKeyUp={this.handleKeyup}
            autoFocus={true}
            ref={this.handleInputRef}
            className="confirm-dialogue_hidden-input"
          />
        </div>
      </div>
    );
  }
}
