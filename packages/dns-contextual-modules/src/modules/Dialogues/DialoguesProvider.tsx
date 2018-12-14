import * as React from 'react';

export interface DialoguePayload {
  className: string;
  content: any;
  footer?: any;
  height?: string;
  hero?: any;
  id: string | number;
  minHeight?: string;
  onClose?: () => void;
  text?: string | null;
  title: string;
  triggerClose?: boolean;
  width?: string;
  withoutOffset?: boolean;
}

export interface DialoguesContextInterface {
  items?: DialoguePayload[];
  addDialogue: (dialogue: DialoguePayload) => void;
  closeDialogue: (id: string | number) => void;
  removeDialogue: (id: string | number) => void;
}

export const DialoguesContext = React.createContext<DialoguesContextInterface>({
  items: [],
  addDialogue: (dialogue: DialoguePayload) => { return true; },
  closeDialogue: (id: string | number) => { return true; },
  removeDialogue: (id: string | number) => { return true; }
});

class DialoguesProvider extends React.Component {
  state = {
    items: [],
  };

  addDialogue = (dialogue: DialoguePayload): void => {
    const items = Object.assign([], this.state.items);
    items.push({
      ...dialogue,
      id: dialogue.id,
      content: dialogue.content,
      triggerClose: false
    });
    this.setState({ items });
  }

  closeDialogue = (id: string | number): void => {
    let items = Object.assign([], this.state.items);

    items = items.map(dialogue => {
      const data = dialogue;
      if (dialogue.id === id) {
        data.triggerClose = true;
      }
      return data;
    });

    this.setState({ items });
  }

  removeDialogue = (id: string | number): void => {
    this.setState({
      items: this.state.items.filter(dialogue => dialogue.id !== id)
    });
  }

  render() {
    const { children } = this.props;
    return (
      <DialoguesContext.Provider
        value={{
          ...this.state,
          addDialogue: this.addDialogue,
          closeDialogue: this.closeDialogue,
          removeDialogue: this.removeDialogue
        }}
      >
        {children}
      </DialoguesContext.Provider>
    );
  }
}

export default DialoguesProvider;
