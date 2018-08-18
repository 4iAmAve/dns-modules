import * as React from 'react';

import './Checkbox.css';

export interface CheckboxProps {
  id: number | string;
  onChange: (id: number | string, checked: boolean) => void;
  checked?: boolean;
  isDisabled?: boolean;
  classNames?: any;
  labelBefore?: string | number;
  labelAfter?: string | number;
}

export interface CheckboxState {
  checked: boolean;
}

export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  public constructor(props: CheckboxProps, context: object) {
    super(props, context);
    this.state = {
      checked: this.props.checked || false,
    };
  }

  public componentDidUpdate(prevProps: CheckboxProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({ checked: this.props.checked || false });
    }
  }

  public toggleChecked = () => {
    this.setState(
      {
        checked: !this.state.checked,
      },
      () => this.props.onChange(this.props.id, this.state.checked)
    );
  }

  public render() {
    const {
      classNames,
      labelBefore,
      labelAfter,
      isDisabled,
    } = this.props;
    return (
      <div
        className={`
          ${classNames ? classNames : ''} checkbox
          ${isDisabled ? 'checkbox--disabled' : ''}
        `}
        onClick={() => this.toggleChecked()}
      >
        {labelBefore ? labelBefore : null}
        <input type="checkbox" checked={this.state.checked} onChange={() => null} />
        {labelAfter ? labelAfter : null}
      </div>
    );
  }
}
