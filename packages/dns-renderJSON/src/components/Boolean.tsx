import * as React from 'react';

export interface BooleanProps {
  data: boolean;
  name: string;
}

export interface BooleanState {
  error: boolean | string;
}

export class Boolean extends React.Component<BooleanProps, BooleanState> {
  public constructor(props: BooleanProps) {
    super(props);

    this.state = {
      error: false,
    };

    this.validateInput();
  }

  public validateInput = () => {
    if (typeof this.props.data !== 'boolean') {
      this.setState({ error: 'ERROR' });
    }
  }

  public render() {
    const { name, data } = this.props;
    return (
      <div className="render-json--flex render-json_boolean">
        <span className="render-json_label">{name}: </span>
        <span className="render-json_type">boolean</span>
        <span className="render-json_data">{data ? 'true' : 'false'}</span>
      </div>
    );
  }
}
