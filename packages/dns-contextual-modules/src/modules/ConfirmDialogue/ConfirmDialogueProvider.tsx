import * as React from 'react';

export interface ConfirmDialoguePayload {
  title?: string;
  content?: string;
  onConfirm: () => void;
}

export interface ConfirmDialogueContextInterface {
  data: ConfirmDialoguePayload;
  triggerClose: boolean;
  openConfirmDialogue: (data: ConfirmDialoguePayload) => void;
  closeConfirmDialogue: () => void;
  removeConfirmDialogue: () => void;
}

export const ConfirmDialogueContext = React.createContext<ConfirmDialogueContextInterface>({
  data: null,
  triggerClose: false,
  openConfirmDialogue: (data: ConfirmDialoguePayload) => { return true; },
  closeConfirmDialogue: () => { return true; },
  removeConfirmDialogue: () => { return true; },
});

class ConfirmDialogueProvider extends React.Component {
  state = {
    data: null,
    triggerClose: false,
  };

  openConfirmDialogue = (data: ConfirmDialoguePayload): void => {
    const dialogueData = {
      title: data.title || 'Confirm',
      content: data.content || null,
      onConfirm: data.onConfirm
    };

    this.setState({ data: dialogueData, triggerClose: false });
  }

  closeConfirmDialogue = (): void => {
    this.setState({ triggerClose: true });
  }

  removeConfirmDialogue = (): void => {
    this.setState({ data: null, triggerClose: false });
  }

  render() {
    const { children } = this.props;
    return (
      <ConfirmDialogueContext.Provider
        value={{
          ...this.state,
          openConfirmDialogue: this.openConfirmDialogue,
          closeConfirmDialogue: this.closeConfirmDialogue,
          removeConfirmDialogue: this.removeConfirmDialogue,
        }}
      >
        {children}
      </ConfirmDialogueContext.Provider>
    );
  }
}

export default ConfirmDialogueProvider;
