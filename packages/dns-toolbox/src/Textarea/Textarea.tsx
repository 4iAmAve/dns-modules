import * as React from 'react';

import './Textarea.scss';

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
  maxHeight?: number;
  disableResize?: boolean;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  onClick?: (event: any) => void;
  onKeyUp?: (event: any) => void;
  onChange?: (event: any) => void;
}

export interface TextareaState {
  value: number | string;
  initialRowHeight: number | null;
  initialRows: number;
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
      initialRowHeight: null,
      initialRows: props.rows || 1,
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
    if (this.textarea) {
      const paddingOffset = 16;
      const scrollHeight = this.textarea.scrollHeight - paddingOffset;
      const rows = parseInt(this.textarea.getAttribute('rows') || '1', 10);

      this.setState(
        { initialRowHeight: scrollHeight / rows },
        () => {
          if (this.props.autoFocus) {
            this.textarea.focus();
          }
        }
      );
    }
  }

  public onChange = (e: any) => {
    const { autoExpand } = this.props;
    const { initialRowHeight, initialRows } = this.state;

    let taRows = e.target.value.split('\n').length;
    if (initialRows > taRows) {
      taRows = initialRows;
    }

    let height = this.state.textareaHeight;
    if (autoExpand && initialRowHeight) {
      height = taRows * initialRowHeight;
    }

    this.setState({
      value: e.target.value,
      textareaHeight: height
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
      onKeyUp,
      onClick,
      onChange,
      rows = 2,
      label,
      required = false,
      disabled = false,
      disableResize = false,
      error = null,
      extraProps = {},
      style = {},
      name,
      maxHeight = null
    } = this.props;
    const { /*labelSmall,*/ textareaHeight, value } = this.state;
    const labelSmall = value && value.toString().length > 0;
    let inlineStyle = { ...style, maxHeight: maxHeight || null } as any;
    if (textareaHeight) {
      inlineStyle = {
        ...inlineStyle,
        height: `${textareaHeight}px`,
      };
    }

    return (
      <div
        className={`ta ${classNames ? classNames : ''} ${disabled ? 'ta--disabled' : ''}
          ${disableResize ? 'ta--resize-disabled' : ''} ${error ? 'ta--error' : ''}
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
        <span className="ta_bar--default" />
        <span className="ta_bar" />
        <label className={`${labelSmall ? 'ta_label--small' : ''}`}>
          {label}
          {required ? <span className="ta_required">*</span> : null}
        </label>
        {error ? <div className="ta_error">{error}</div> : null}
      </div>
    );
  }
}
