import * as React from 'react';

export interface FunctionProps {
  data: () => void;
  name: string;
  collapsed: boolean;
}

export interface FunctionState extends FunctionProps {
  error: boolean | string;
  collapsed: boolean;
}

export class Function extends React.Component<FunctionProps, FunctionState> {
  public static defaultProps: Partial<FunctionProps> = {
  };

  public constructor(props: FunctionProps) {
    super(props);

    this.state = {
      error: false,
      collapsed: props.collapsed,
      ...props,
    };

    this.validateInput();
  }

  public validateInput = () => {
    if (typeof this.props.data !== 'function') {
      this.setState({ error: 'ERROR' });
    }
  }

  public getFunctionDisplay = (collapsed: boolean) => {
    const { data } = this.props;

    if (collapsed) {
      return (
        <span>
          {data.toString().slice(9, -1).replace(/\{[\s\S]+/, '')}
          <span className="function-collapsed" style={{ fontWeight: 'bold'}}>
            <span>{'{'}</span>
            <span className={'render-json_function-dots'}>...</span>
            <span>{'}'}</span>
          </span>
        </span>
      );
    } else {
      return data.toString().slice(9, -1);
    }
  }

  public toggleCollapsed = () => this.setState({ collapsed: !this.state.collapsed });

  public render() {
    const { name } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="render-json--flex render-json_function">
        <div onClick={this.toggleCollapsed} />
        <div className="render-json_label">{name}: </div>
        <div className="render-json_type">function</div>
        <div>
          {this.getFunctionDisplay(collapsed)}
        </div>
      </div>
    );
  }
}
