import * as React from 'react';
import { addToClipboard } from '@dns/utils';

export interface DateTypeProps {
  data: any;
  name: string;
}

export interface DateTypeState {
  error: boolean | string;
  addToClipboardVisible: boolean;
}

export class DateType extends React.Component<DateTypeProps, DateTypeState> {
  public constructor(props: DateTypeProps) {
    super(props);

    this.state = {
      addToClipboardVisible: false,
      error: false,
    };

    this.validateInput();
  }

  public validateInput = () => {
    const date = new Date(this.props.data).getTime();

    if (isNaN(date)) {
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
    const { data, name } = this.props;
    const { addToClipboardVisible } = this.state;
    const display_options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    const date = new Date(data).toLocaleString('en-us', display_options);
    return (
      <div className="render-json--flex render-json_date">
        <div className="render-json_label">{name}: </div>
        <div className="render-json_type">date</div>
        <div
          className="render-json_date-value"
          title={data}
          onClick={() => this.handleAddToClipboard(data)}
        >
          {date}
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
