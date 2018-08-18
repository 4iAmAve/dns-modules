import * as React from 'react';
import { addToClipboard } from '@dns/utils';

export interface StringProps {
  data: string;
  name: string;
  cutOff: boolean;
  cutOffThreshold: number;
}

export interface StringState {
  error: boolean | string;
  cutOff: boolean;
  addToClipboardVisible: boolean;
}

export class String extends React.Component<StringProps, StringState> {
  public constructor(props: StringProps) {
    super(props);

    this.state = {
      addToClipboardVisible: false,
      error: false,
      cutOff: props.cutOff,
    };

    this.validateInput();
  }

  public validateInput = () => {
    if (typeof this.props.data !== 'string') {
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
    const { name, data, cutOff, cutOffThreshold } = this.props;
    const { addToClipboardVisible } = this.state;
    const value = cutOff && data.length >= cutOffThreshold ? `${data.substr(0, cutOffThreshold)}...` : data;
    return (
      <div className="render-json--flex render-json_string">
        <div className="render-json_label">{name}: </div>
        <div className="render-json_type">string</div>
        <div
          className={`render-json_data ${data}`}
          title={data}
          onClick={() => this.handleAddToClipboard(data)}
        >
          {`"${value}"`}
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
