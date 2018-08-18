import * as React from 'react';
import { connect } from 'react-redux';
import { GenericDialogue, GenericDialogueD } from '@dns/toolbox';

import { DialoguesState as DialogueReducerState } from '../../reducers/dialogues';
import { dialoguesActions } from '../../actions/dialogues';

import './Dialogue.css';

export interface DialogueProps extends GenericDialogueD {
  id: string | number;
  title: string | any | null;
  content?: any | null;
  footer?: any;
  hero?: any;
  onSubscribeToDialoguesStore: (id: string | number) => void;
  onCloseDialogue: (id: string | number) => void;
  dialogues: DialogueReducerState;
  containerClassNames?: any;
  withoutCloseButton?: boolean;
  onClose?: () => void;
}

export interface DialogueState {
}

class Dialogue extends React.Component<DialogueProps, DialogueState> {
  public static defaultProps: Partial<DialogueProps> = {
    width: 'auto',
    id: 0,
    title: null,
  };

  public constructor(props: DialogueProps) {
    super(props);

    if (!(props.id in props.dialogues)) {
      props.onSubscribeToDialoguesStore(props.id);
    }
  }

  public componentDidUpdate(prevProps: DialogueProps) {
    if (!(this.props.id in this.props.dialogues)) {
      this.props.onSubscribeToDialoguesStore(this.props.id);
    } else {
      if (!prevProps.dialogues[this.props.id] && this.props.dialogues[this.props.id]) {
        document.addEventListener('keyup', this.handleEscapeClick, false);
      } else if (prevProps.dialogues[this.props.id] && !this.props.dialogues[this.props.id]) {
        document.removeEventListener('keyup', this.handleEscapeClick, false);
      }
    }
  }

  public handleEscapeClick = (e: any) => {
    if (e.keyCode === 27) {
      this.onCloseClick();
    }
  }

  public onCloseClick = () => {
    this.props.onCloseDialogue(this.props.id);
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const { dialogues, id, containerClassNames, content, children } = this.props;
    return (
      <div
        className={`
          dialogue
          ${dialogues[id] ? 'dialogue_open' : ''}
          ${containerClassNames ? containerClassNames : ''}
        `}
      >
        <div className="dialogue-back-drop" onClick={() => this.onCloseClick()}/>
        <div className="dialogue-container">
          <GenericDialogue
            {...this.props}
            content={content ? content : children}
            onClose={this.onCloseClick}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: object) => ({
  dialogues: state.dialogues,
});

const mapDispatchToProps = dispatch => ({
  onCloseDialogue: (id: any) => dispatch(dialoguesActions.closeDialogue(id)),
  onSubscribeToDialoguesStore: (id: string | number) => dispatch(dialoguesActions.subscribeToDialoguesStore(id)),
});

export const connectedDialogue = connect(mapStateToProps, mapDispatchToProps)(Dialogue);
