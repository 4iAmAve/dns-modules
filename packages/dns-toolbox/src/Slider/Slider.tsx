import * as React from 'react';
import { capitalize } from '@dns/utils';

import './Slider.css';

const constants = {
  orientation: {
    horizontal: {
      dimension: 'width',
      direction: 'left',
      reverseDirection: 'right',
      coordinate: 'x'
    },
    vertical: {
      dimension: 'height',
      direction: 'top',
      reverseDirection: 'bottom',
      coordinate: 'y'
    }
  }
};

export interface SliderProps {
  value: number;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  handleLabel?: string;
  labelBefore?: string;
  labelAfter?: string;
  orientation?: 'horizontal' | 'vertical';
  format?: (value: string | number) => void;
  onChangeStart?: (value: number, id?: string) => void;
  onChange?: (value: number, id?: string) => void;
  onChangeEnd?: (value: number, id?: string) => void;
  disabled?: boolean;
  reverseDirection?: boolean;
  classNames?: any;
}

export interface SliderState {
  value: number;
  active: boolean;
  limit: number;
  grab: number;
}

export class Slider extends React.Component<SliderProps, SliderState> {
  public static defaultProps: Partial<SliderProps> = {
    value: 0,
    orientation: 'horizontal',
    step: 1,
    reverseDirection: false,
    disabled: false,
  };

  private slider: Element;
  private handle: Element;

  public constructor(props: SliderProps) {
    super(props);

    this.state = {
      value: props.value || 0,
      active: false,
      limit: 0,
      grab: 0
    };
  }

  public componentDidMount() {
    this.handleUpdate();
  }

  public componentDidUpdate(prevProps: SliderProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  public clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
  }

  public handleFormat = (value: number) => {
    const { format } = this.props;
    return format ? format(value) : value;
  }

  public handleUpdate = () => {
    if (!this.slider) {
      // for shallow rendering
      return;
    }
    const { orientation } = this.props;
    const dimension = capitalize(constants.orientation[orientation || 'horizontal'].dimension);
    const sliderPos = this.slider[`offset${dimension}`];
    const handlePos = this.handle[`offset${dimension}`];

    this.setState({
      limit: sliderPos - handlePos,
      grab: handlePos / 2
    });
  }

  public handleStart = e => {
    const { onChangeStart } = this.props;
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleEnd);
    this.setState(
      {
        active: true
      },
      () => {
        if (onChangeStart) {
          onChangeStart(this.state.value);
        }
      }
    );
  }

  public handleDrag = (e: any) => {
    e.stopPropagation();
    const { onChange } = this.props;
    const { target: { className } } = e;
    if (className === 'rangeslider__labels') {
      return;
    }

    let value = this.position(e);

    this.setState({ value });

    if (onChange) {
      onChange(this.state.value);
    }
  }

  public handleEnd = (e: any) => {
    const { onChangeEnd } = this.props;
    this.setState(
      {
        active: false
      },
      () => {
        if (onChangeEnd) {
          onChangeEnd(this.state.value);
        }
      }
    );
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleEnd);
  }

  public handleKeyDown = (e: any) => {
    e.preventDefault();
    const { keyCode } = e;
    const { value, min = 0, max = 100, step = 1, onChange } = this.props;
    let sliderValue;

    switch (keyCode) {
      case 38:
      case 39:
        sliderValue = value + step > max ? max : value + step;
        if (onChange) {
          onChange(sliderValue, e);
        }
        break;
      case 37:
      case 40:
        sliderValue = value - step < min ? min : value - step;
        if (onChange) {
          onChange(sliderValue, e);
        }
        break;
      default:
        return;
    }
  }

  public getPositionFromValue = (value: number) => {
    const { limit = 0 } = this.state;
    const { min = 0, max = 100 } = this.props;
    const diffMaxMin = max - min;
    const diffValMin = value - min;
    const percentage = diffValMin / diffMaxMin;
    return Math.round(percentage * limit);
  }

  public getValueFromPosition = (pos: any) => {
    const { limit = 0 } = this.state;
    const { orientation, min = 0, max = 100, step = 1 } = this.props;
    const percentage = this.clamp(pos, 0, limit) / (limit || 1);
    const baseVal = step * Math.round(percentage * (max - min) / step);
    const value = orientation === 'horizontal' ? baseVal + min : max - baseVal;

    return this.clamp(value, min, max);
  }

  public position = (e: any) => {
    const { grab } = this.state;
    const { orientation = 'horizontal', reverseDirection } = this.props;

    const node = this.slider;
    const coordinateStyle = constants.orientation[orientation].coordinate;
    const directionStyle = reverseDirection
      ? constants.orientation[orientation].reverseDirection
      : constants.orientation[orientation].direction;
    const clientCoordinateStyle = `client${capitalize(coordinateStyle)}`;
    const coordinate = !e.touches
      ? e[clientCoordinateStyle]
      : e.touches[0][clientCoordinateStyle];
    const direction = node.getBoundingClientRect()[directionStyle];
    const pos = reverseDirection
      ? direction - coordinate - grab
      : coordinate - direction - grab;
    return this.getValueFromPosition(pos);
  }

  public coordinates = (pos: any) => {
    const { limit, grab } = this.state;
    const { orientation } = this.props;
    const value = this.getValueFromPosition(pos);
    const position = this.getPositionFromValue(value);
    const handlePos = orientation === 'horizontal' ? position + grab : position;
    const fillPos = orientation === 'horizontal'
      ? handlePos
      : limit - handlePos;

    return {
      fill: fillPos,
      handle: handlePos,
      label: handlePos
    };
  }

  public handleSliderRef = ref => this.slider = ref;
  public handleDraggerRef = ref => this.handle = ref;

  public render() {
    const {
      orientation = 'horizontal',
      classNames,
      // reverseDirection,
      min,
      max = 100,
      // handleLabel,
      labelBefore,
      labelAfter
    } = this.props;
    const { active, value } = this.state;
    // const dimension = constants.orientation[orientation].dimension;
    // const direction = reverseDirection
    //   ? constants.orientation[orientation].reverseDirection
    //   : constants.orientation[orientation].direction;
    // const position = this.getPositionFromValue(value);
    // const coords = this.coordinates(position);

    const position = (value / max) * 100;

    const draggerInlineStyle = {
      left: `${position}%`,
    };
    const draggedBarInlineStyle = {
      width: `${position}%`,
    };

    return (
      <div
        className={`
          slider
          ${classNames ? classNames : ''}
          ${orientation ? `slider--${orientation}` : 'slider--horizontal'}
          ${labelBefore ? `slider--with-before-label` : ''}
          ${labelAfter ? `slider--with-after-label` : ''}
        `}
      >
        {labelBefore ? <div className="slider_label-tag">{labelBefore}</div> : null}
        <div className="slider_container">
          {min ? <div className="slider_label slider_label_left">{min}</div> : null}
          <div
            className="slider-bar"
            onMouseDown={this.handleDrag}
            onMouseUp={this.handleEnd}
            onTouchStart={this.handleStart}
            onTouchEnd={this.handleEnd}
            ref={this.handleSliderRef}
          >
            <div className="slider_bar--default" />
            <div className="slider_bar--dragged" style={draggedBarInlineStyle}/>
            <div
              className={`slider_bar_dragger ${active ? 'slider_bar_dragger--active' : ''}`}
              style={draggerInlineStyle}
              onMouseDown={this.handleStart}
              onTouchMove={this.handleDrag}
              onTouchEnd={this.handleEnd}
              onKeyDown={this.handleKeyDown}
              ref={this.handleDraggerRef}
            />
            <div className="slider_value">{value}</div>
          </div>
          {max ? <div className="slider_label slider_label_right">{max}</div> : null}
        </div>
        {labelAfter ? <div className="slider_label-tag">{labelAfter}</div> : null}
      </div>
    );
  }
}
