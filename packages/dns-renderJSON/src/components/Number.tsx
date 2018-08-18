import * as React from 'react';
import { addToClipboard } from '@dns/utils';

export interface NumberProps {
  data: number;
  name: string;
}

export interface NumberState {
  addToClipboardVisible: boolean;
  error: boolean | string;
}

export class Number extends React.Component<NumberProps, NumberState> {
  public constructor(props: NumberProps) {
    super(props);

    this.state = {
      addToClipboardVisible: false,
      error: false,
    };

    this.validateInput();
  }

  public validateInput = () => {
    if (typeof this.props.data !== 'number') {
      this.setState({ error: 'ERROR' });
    }
  }

  public handleAddToClipboard = (data: any) => {
    this.setState(
      { addToClipboardVisible: true },
      () => {
        addToClipboard(data);
        setTimeout(
          () => this.setState({ addToClipboardVisible: false }),
          1000
        );
      }
    );
  }

  public render() {
    const { name, data } = this.props;
    const { addToClipboardVisible } = this.state;
    return (
      <div className="render-json--flex render-json_number">
        <div className="render-json_label">{name}: </div>
        <div className="render-json_type">number</div>
        <div
          className="render-json_data"
          title={data.toString()}
          onClick={() => this.handleAddToClipboard(data)}
        >
          {data}
        </div>
        <div
          className={`rj_added-to-clipboard ${addToClipboardVisible ? 'rj_added-to-clipboard--open' : ''}`}
        >
          Added value to Clipboard
        </div>
      </div>
    );
  }
}
