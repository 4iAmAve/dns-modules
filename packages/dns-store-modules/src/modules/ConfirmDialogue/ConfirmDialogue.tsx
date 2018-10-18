import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@dns/toolbox';
import { noop } from '@dns/utils';

import { ConfirmDialogueState as ConfirmDialogueStateReducerState } from '../../reducers/confirmDialogue';
import { confirmDialogueActions } from '../../actions/confirmDialogue';

import './ConfirmDialogue.css';

export interface ConfirmDialogueProps {
  confirmDialogue: ConfirmDialogueStateReducerState;
  onCloseDialogue: () => void;
  classNames?: any;
}

export interface ConfirmDialogueState {
}

class ConfirmDialogue extends React.Component<ConfirmDialogueProps, ConfirmDialogueState> {
  public static defaultProps: Partial<ConfirmDialogueProps> = {
    confirmDialogue: {
      title: null,
      text: null,
      open: false,
      onConfirm: noop,
    },
  };

  private inputRef: HTMLElement;

  public componentDidMount() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  handleKeyup = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();

    if (e.keyCode === 27) {
      this.onCloseClick();
    } else if (e.keyCode === 13) {
      this.onConfirmClick();
    }
  }

  onCloseClick = () => {
    this.props.onCloseDialogue();
  }

  onConfirmClick = () => {
    this.props.confirmDialogue.onConfirm();
    this.props.onCloseDialogue();
  }

  public handleInputRef = ref => this.inputRef = ref && ref.focus();

  render() {
    const { confirmDialogue, classNames } = this.props;
    const { open, title, text } = confirmDialogue;
    return (
      <div
        className={`
          dialogue
          ${open ? 'dialogue_open' : ''}
          ${classNames ? classNames : ''}
        `}
      >
        <div className="dialogue-back-drop" onClick={() => this.onCloseClick()}/>
        <div className="dialogue-container confirm">
          <div className="dialogue-container_content">
            <h2>{title}</h2>
            <div>
              {text ? <p className="c-d_text">{text}</p> : null}
              <p>Are you sure you want to proceed?</p>
            </div>
            <div>
              <Button
                onClick={this.onConfirmClick}
                label="Yes"
                color="primary"
                classNames="_confirm-dialogue_confirm-btn"
              />
              <Button
                onClick={this.onCloseClick}
                label="No"
                color="danger"
                classNames="_confirm-dialogue_cancel-btn"
              />
              {
                open ?
                  <input
                    onKeyUp={this.handleKeyup}
                    autoFocus={true}
                    ref={this.handleInputRef}
                    className="dialogue_hidden-input"
                  /> : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  confirmDialogue: state.confirmDialogue,
});

const mapDispatchToProps = dispatch => ({
  onCloseDialogue: () => dispatch(confirmDialogueActions.closeDialogue()),
});

export const connectedConfirmDialogue = connect(mapStateToProps, mapDispatchToProps)(ConfirmDialogue);
