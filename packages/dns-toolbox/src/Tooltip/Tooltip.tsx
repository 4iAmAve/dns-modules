import * as React from 'react';

import './Tooltip.css';

export interface TooltipProps {
  label: any;
  delay?: number;
  maxWidth?: number;
  rootID?: string;
}

export interface TooltipState {
  isOpen: boolean;
  ttTopValue: number;
  ttLeftValue: number;
}

export class Tooltip extends React.Component<TooltipProps, TooltipState> {
  public static defaultProps: Partial<TooltipProps> = {
    delay: 0,
    maxWidth: 160,
    rootID: 'root',
  };

  private tooltip: HTMLElement;
  // private mounted: boolean;

  constructor(props: TooltipProps) {
    super(props);

    this.state = {
      isOpen: false,
      ttTopValue: -32,
      ttLeftValue: -32,
    };
    // this.mounted = true;
  }

  public componentWillUnmount() {
    const element = this.getElement();
    if (element) {
      element.addEventListener('click', this.handleDocumentClick);
    }
  }

  public getElement = () => {
    const { rootID } = this.props;
    const element = document.getElementById(rootID || 'root') as HTMLElement;
    if (element === null || element === undefined) {
      return false;
    }
    return element;
  }

  public handleMouseEnter = (e: any) => {
    const { delay } = this.props;
    e.persist();
    setTimeout(
      () => {
        const element = this.getElement();
        if (element) {
          element.addEventListener('click', this.handleDocumentClick);
        }
        this.calculatePosition(e.target.getBoundingClientRect());
      },
      delay
    );
  }

  public handleMouseLeave = () => {
    const element = this.getElement();
    if (element) {
      element.removeEventListener('click', this.handleDocumentClick);
    }
    this.setState({ isOpen: false });
  }

  handleDocumentClick = (evt: any) => {
    const area = this.tooltip;

    if (area && !area.contains(evt.target)) {
      this.setState({ isOpen: false });
    }
  }

  public enhanceChild = (child: any) => {
    return React.cloneElement(child, {
      onTouchStart: this.handleMouseEnter,
      onMouseEnter: this.handleMouseEnter,
      onTouchEnd: this.handleMouseLeave,
      onMouseLeave: this.handleMouseLeave,
    });
  }

  public calculatePosition = (targetBoundings: any) => {
    const { maxWidth } = this.props;
    let left = targetBoundings.left;
    let top = targetBoundings.top - 32;

    const rightBoundaryExceeded = targetBoundings.left + maxWidth > document.body.offsetWidth;

    if (rightBoundaryExceeded) {
      left = document.body.offsetWidth - (maxWidth as any) || targetBoundings.left;
    }

    if (left < 0) {
      left = targetBoundings.left;
    }

    if (top < 0) {
      top = targetBoundings.height + 16;
    }

    this.setState({ isOpen: true, ttLeftValue: left, ttTopValue: top, });
  }

  handleTtRef = ref => this.tooltip = ref;

  render () {
    const { children,  label, maxWidth } = this.props;
    const { isOpen, ttTopValue, ttLeftValue } = this.state;
    const ttStyle = {
      top: ttTopValue,
      left: ttLeftValue,
      maxWidth: maxWidth || '160'
    };
    const enhancedChildren = React.Children.map(children, this.enhanceChild);
    return(
      <React.Fragment>
        <div
          className={`
            tooltip
            ${isOpen ? 'tooltip--open' : ''}
          `}
          style={ttStyle}
          ref={this.handleTtRef}
        >
          {label}
        </div>
        {enhancedChildren}
      </React.Fragment>
    );
  }
}
