import * as React from 'react';

import './Ripple.css';

export interface RippleProps {
  cursorPos: {
    top: number;
    left: number;
    time: number;
  };
  parent: HTMLElement;
  classNames?: any;
  inlineStyle?: any;
}

export interface RippleState {
  animate: boolean;
  width: number;
  height: number;
  top: number;
  left: number;
}

export class Ripple extends React.Component<RippleProps, RippleState> {
  // private rippleRef: Element;

  public constructor(props: RippleProps) {
    super(props);

    this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  }

  public componentDidUpdate(prevProps: RippleProps) {
    const cursorPos = prevProps.cursorPos;

    // Prevent Component duplicates ripple effect at the same time
    if (cursorPos.time !== this.props.cursorPos.time) {
      // If Has Animated, set state to "false" First
      if (this.state.animate) {
        this.setState(
          { animate: false },
          () => {
            this.rippling(this.props.cursorPos, this.props.parent);
          }
        );
      } else {
        // else, Do Reppling
        this.rippling(this.props.cursorPos, this.props.parent);
      }
    }
  }

  public rippling = (cursorPos: any, parent: HTMLElement) => {
    // Get the element
    let $button = parent;

    let buttonPos = $button.getBoundingClientRect();

    let buttonWidth = $button.offsetWidth;
    let buttonHeight = $button.offsetHeight;

    // Make a Square Ripple
    let rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);

    // Make Ripple Position to be center
    let centerize = rippleWidthShouldBe / 2;

    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: cursorPos.top - buttonPos.top - centerize,
      left: cursorPos.left - buttonPos.left - centerize
    });
  }

  // public handleRef = ref => this.rippleRef = ref;

  render () {
    const { animate, height, left, top, width } = this.state;
    const { classNames, inlineStyle } = this.props;
    const style = {
      ...inlineStyle,
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`
    };
    return (
      <div
        className={`ripple ${animate ? 'ripple--animate' : ''} ${classNames ? classNames : ''}`}
        // ref={this.handleRef}
        style={style}
      />
    );
  }
}
