import * as React from 'react';

import { Ripple } from '../Ripple/Ripple';

import './Button.css';

export interface ButtonProps {
  /** behaviour of button  */
  onClick: () => void;
  /** additional classes provided by the parent  */
  classNames?: any;
  /** text for button  */
  label?: string | number;
  /** icon displayed left of the label  */
  iconBefore?: string;
  /** icon displayed right of the label  */
  iconAfter?: string;
  /**  color of the button default | warning | danger | success | accent | primary  */
  color?: 'default' | 'warning' | 'danger' | 'success' | 'accent' | 'primary';
  /**  whether to display the button raised   */
  rounded?: boolean;
  /**  whether to display the button raised   */
  raised?: boolean;
  /** this dictates whether the button is clickable  */
  disabled?: boolean;
  /** this dictates whether the button is filled with the chosen color  */
  filled?: boolean;
  /** optional parameter to adjust inline style  */
  style?: any;
}

export interface ButtonState {
  cursorPos: {
    top: number;
    left: number;
    time: number;
  };
  parent: any;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
  public static defaultProps: Partial<ButtonProps> = {
    disabled: false,
    color: 'default',
  };

  public constructor(props: ButtonProps) {
    super(props);

    this.state = {
      cursorPos: {
        top: 0,
        left: 0,
        time: Date.now(),
      },
      parent: null,
    };
  }

  public handleClick = (e: any) => {
    // Get Cursor Position
    const cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    const parent = e.target;
    this.setState({ cursorPos: cursorPos, parent });
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  public render() {
    const {
      classNames,
      color,
      disabled,
      filled,
      label,
      iconBefore,
      iconAfter,
      raised,
      rounded,
      style,
      children = null,
    } = this.props;
    const { cursorPos, parent } = this.state;
    const buttonType = color === 'danger' ? 'button--danger' :
      color === 'warning' ? 'button--warning' :
      color === 'success' ? 'button--success' :
      color === 'accent' ? 'button--accent' :
      color === 'primary' ? 'button--primary' : 'button--default';
    let inlineStyle = {};
    if (style) {
      inlineStyle = {
        ...style
      };
    }
    return (
      <button
        className={`button ${classNames ? classNames : ''}
          ${color ? buttonType : ''}
          ${raised ? 'button--raised' : ''}
          ${iconBefore ? 'button--wib' : ''}
          ${iconAfter ? 'button--wia' : ''}
          ${rounded ? `button--rounded` : ''}
          ${filled ? `button--filled` : ''}
        `}
        style={inlineStyle}
        disabled={disabled}
        onClick={this.handleClick}
      >
        {iconBefore ? <i className={`material-icons`}>{iconBefore}</i> : null}
        {label ? <span>{label}</span> : null}
        {children}
        {iconAfter ? <i className={`material-icons`}>{iconAfter}</i> : null}
        <Ripple cursorPos={cursorPos} parent={parent} classNames="button_ripple"/>
      </button>
    );
  }
}
