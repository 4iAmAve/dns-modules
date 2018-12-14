import * as React from 'react';
import { GenericDialogue } from '@dns/toolbox';
import { noop } from '@dns/utils';

import DialoguesProvider, { DialoguesContext } from './DialoguesProvider';

import './Dialogues.css';

export interface DialoguesProps {
}

export interface DialoguesState {
}

const actionProvider = {
  addDialogue: noop,
  closeDialogue: noop,
  removeDialogue: noop
};

export const getAddDialogue = () => actionProvider.addDialogue;
export const getCloseDialogue = () => actionProvider.closeDialogue;

const setAddDialogue = addDialogue => actionProvider.addDialogue = addDialogue;
const setCloseDialogue = closeDialogue => actionProvider.closeDialogue = closeDialogue;

export class Dialogues extends React.Component<DialoguesProps, DialoguesState> {
  render() {
    return (
      <DialoguesProvider>
        <DialoguesContext.Consumer>
          {({ addDialogue, closeDialogue, items, removeDialogue }) => {
            setAddDialogue(addDialogue);
            setCloseDialogue(closeDialogue);

            return (
              <React.Fragment>
                {
                  items.map((item: any, key: number) => (
                    <GenericDialogue
                      {...item}
                      key={`gd__${key}`}
                      onClose={() => removeDialogue(item.id)}
                    />
                  ))
                }
              </React.Fragment>
            );
          }}
        </DialoguesContext.Consumer>
      </DialoguesProvider>
    );
  }
}
