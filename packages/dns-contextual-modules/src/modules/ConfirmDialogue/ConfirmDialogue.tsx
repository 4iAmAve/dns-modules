import * as React from 'react';
import { Button, GenericDialogue } from '@dns/toolbox';
import { noop } from '@dns/utils';

import ConfirmDialogueProvider, { ConfirmDialogueContext } from './ConfirmDialogueProvider';

import './ConfirmDialogue.css';

export interface ConfirmDialogueProps {
}

export interface ConfirmDialogueState {
}

const actionProvider = {
  onConfirm: noop,
  openConfirmDialogue: noop,
  closeConfirmDialogue: noop,
  removeConfirmDialogue: noop,
};

const getOnConfirm = () => actionProvider.onConfirm;
export const getOpenConfirmDialogue = () => actionProvider.openConfirmDialogue;
const getCloseConfirmDialogue = () => actionProvider.closeConfirmDialogue;
const getRemoveConfirmDialogue = () => actionProvider.removeConfirmDialogue;

const setOnConfirm = onConfirm => actionProvider.onConfirm = onConfirm;
const setOpenConfirmDialogue = openConfirmDialogue => actionProvider.openConfirmDialogue = openConfirmDialogue;
const setCloseConfirmDialogue = closeConfirmDialogue => actionProvider.closeConfirmDialogue = closeConfirmDialogue;
const setRemoveConfirmDialogue = removeConfirmDialogue => actionProvider.removeConfirmDialogue = removeConfirmDialogue;

export class ConfirmDialogue extends React.Component<ConfirmDialogueProps, ConfirmDialogueState> {
  _inputRef: HTMLElement;

  setFocusToHiddenInput() {
    if (this._inputRef) {
      this._inputRef.focus();
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

  onConfirmClick = () => {
    const confirmAction = getOnConfirm();
    confirmAction();
    this.onCloseClick();
  }

  onCloseClick = () => {
    const closeAction = getCloseConfirmDialogue();
    const removeAction = getRemoveConfirmDialogue();
    closeAction();

    setTimeout(
      () => removeAction(),
      300
    );
  }

  getFooterButtons = () => {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  getContent = content => {
    return (
      <div>
        {content ? <div className="cd_content">{content}</div> : null}
        <p>Are you sure you want to proceed?</p>
      </div>
    );
  }

  handleInputRef = ref => this._inputRef = ref && ref.focus();

  render() {
    const footer = this.getFooterButtons();
    return (
      <ConfirmDialogueProvider>
        <ConfirmDialogueContext.Consumer>
          {({
              closeConfirmDialogue,
              data,
              openConfirmDialogue,
              removeConfirmDialogue,
              triggerClose
          }) => {
            setOpenConfirmDialogue(openConfirmDialogue);
            setCloseConfirmDialogue(closeConfirmDialogue);
            setRemoveConfirmDialogue(removeConfirmDialogue);
            let content = null;

            if (data) {
              setOnConfirm(data.onConfirm);
              this.setFocusToHiddenInput();
              content = this.getContent(data.content);
            }

            return (
              <React.Fragment>
                {
                  data ?
                    <GenericDialogue
                      className={'confirm-dialogue'}
                      content={content}
                      footer={footer}
                      title={data.title}
                      triggerClose={triggerClose}
                      onClose={this.onCloseClick}
                    /> : null
                }
              </React.Fragment>
            );
          }}
        </ConfirmDialogueContext.Consumer>
      </ConfirmDialogueProvider>
    );
  }
}
