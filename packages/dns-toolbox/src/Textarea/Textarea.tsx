import * as React from 'react';

import './Textarea.css';

export interface TextareaProps {
  classNames?: any;
  disabled?: boolean;
  error?: string | null;
  label: string;
  name?: string;
  required?: boolean;
  rows?: number;
  value?: string | number;
  extraProps?: any;
  style?: any;
  autoFocus?: boolean;
  autoExpand?: boolean;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  onClick?: (event: any) => void;
  onKeyUp?: (event: any) => void;
  onChange?: (event: any) => void;
}

export interface TextareaState {
  value: number | string;
  labelSmall: boolean;
  textareaHeight: number | null;
}

export class Textarea extends React.Component<TextareaProps, TextareaState> {
  private textarea: HTMLElement;

  public constructor(props: TextareaProps) {
    super(props);

    this.state = {
      value: props.value || '',
      labelSmall: !!props.value,
      textareaHeight: null
    };
  }

  public componentDidUpdate(prevProps: TextareaProps) {
    if (prevProps.value !== this.props.value) {
      const value = this.props.value || '';
      this.setState({ value });

      if (value.toString().length > 0) {
        this.setState({ labelSmall: true });
      }
    }
  }

  public componentDidMount() {
    if (this.textarea && this.props.autoFocus) {
      this.textarea.focus();
    }
  }

  public onChange = (e: any) => {
    const { autoExpand } = this.props;
    const scrollHeight = this.textarea.scrollHeight;
    this.setState({
      value: e.target.value,
      textareaHeight: autoExpand ? scrollHeight : this.state.textareaHeight
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

  public handleTextareaRef = ref => this.textarea = ref;

  public render() {
    const {
      classNames,
      onClick,
      onKeyUp,
      onChange,
      rows = 2,
      label,
      required = false,
      disabled = false,
      error = null,
      extraProps = {},
      style = {},
      name,
    } = this.props;
    const { /*labelSmall,*/ textareaHeight, value } = this.state;
    const labelSmall = value && value.toString().length > 0;
    let inlineStyle = { ...style } as any;
    if (textareaHeight) {
      inlineStyle = {
        ...inlineStyle,
        height: textareaHeight
      };
    }

    return (
      <div
        className={`
          input-group
          ${classNames ? classNames : ''}
          ${disabled ? 'input--disabled' : ''}
          ${error ? 'input--error' : ''}
        `}
      >
        <textarea
          {...extraProps}
          required={required}
          value={value}
          rows={rows}
          name={name ? name : label}
          onKeyUp={onKeyUp}
          onClick={onClick}
          onChange={onChange ? onChange : this.onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          disabled={disabled}
          tabIndex={disabled ? -1 : 1}
          style={inlineStyle}
          ref={this.handleTextareaRef}
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
