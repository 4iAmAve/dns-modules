import * as React from 'react';

import './Input.css';

export interface InputProps {
  classNames?: any;
  disabled?: boolean;
  error?: string | null;
  label: string;
  name?: string;
  required?: boolean;
  type?: string;
  value?: string | number;
  extraProps?: any;
  autoFocus?: boolean;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  onClick?: (event: any) => void;
  onKeyUp?: (event: any) => void;
  onChange?: (event: any) => void;
}

export interface InputState {
  value: number | string;
  labelSmall: boolean;
}

export class Input extends React.Component<InputProps, InputState> {
  private input: HTMLElement;

  public constructor(props: InputProps) {
    super(props);

    this.state = {
      value: props.value || '',
      labelSmall: !!props.value,
    };
  }

  public componentDidUpdate(prevProps: InputProps) {
    if (prevProps.value !== this.props.value) {
      const value = this.props.value || '';
      this.setState({ value });

      if (value.toString().length > 0) {
        this.setState({ labelSmall: true });
      }
    }
  }

  public componentDidMount() {
    if (this.input && this.props.autoFocus) {
      this.input.focus();
    }
  }

  public onChange = (e: any) => {
    this.setState({
        value: e.target.value
    });
  }

  public handleFocus = (e: any) => {
    if (!this.state.labelSmall) {
      this.setState({ labelSmall: true });
    }
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  public handleBlur = (e: any) => {
    const { labelSmall, value } = this.state;
    if (labelSmall && value.toString().length <= 0 ) {
      this.setState({ labelSmall: false });
    }
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  public handleInputRef = ref => this.input = ref;

  public render() {
    const {
      classNames,
      onClick,
      onKeyUp,
      onChange,
      type = 'text',
      label,
      required = false,
      disabled = false,
      error = null,
      extraProps = {},
      name,
    } = this.props;
    const { /*labelSmall,*/ value } = this.state;
    const labelSmall = value && value.toString().length > 0;

    return (
      <div
        className={`
          input-group
          ${classNames ? classNames : ''}
          ${disabled ? 'input--disabled' : ''}
          ${error ? 'input--error' : ''}
        `}
      >
        <input
          {...extraProps}
          type={type}
          required={required}
          value={value}
          name={name ? name : label}
          onKeyUp={onKeyUp}
          onClick={onClick}
          onChange={onChange ? onChange : this.onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          disabled={disabled}
          tabIndex={disabled ? -1 : 1}
          ref={this.handleInputRef}
        />
        <span className="input_bar--default" />
        <span className="input_bar" />
        <label className={`${labelSmall ? 'input_label--small' : ''}`}>
          {label}
          {required ? <span className="input_required">*</span> : null}
        </label>
        {error ? <div className="input_error">{error}</div> : null}
      </div>
    );
  }
}
