import * as React from 'react';
import { convertMillisToTime } from '@dns/utils';

import './TimePicker.css';

export interface TimePickerProps {
  classNames?: any;
  timeZone?: string;
  onChange: (event: any) => void;
  timeString?: string;
  timeInMs?: number;
  hours?: string | number;
  minutes?: string | number;
  seconds?: string | number;
  withoutSeconds?: boolean;
  required?: boolean;
  nullable?: boolean;
  disabled?: boolean;
}

export interface TimePickerState {
  hours: string;
  minutes: string;
  seconds: string;
}

export class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
  public static defaultProps: Partial<TimePickerProps> = {
    withoutSeconds: false,
    required: false,
    disabled: false,
  };

  public constructor(props: TimePickerProps) {
    super(props);

    let time = this.convertTime(props);

    this.state = {
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    };
  }

  public componentDidUpdate(prevProps: TimePickerProps) {
    let time = this.convertTime(this.props);
    let prevTime = this.convertTime(prevProps);

    if (
      time.hours !== prevTime.hours ||
      time.minutes !== prevTime.minutes ||
      time.seconds !== prevTime.seconds
    ) {
      this.setState({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds,
      });
    }
  }

  public convertTime = (props) => {
    const { hours, minutes, seconds, timeString, timeInMs} = props;

    let time = {
      hours: '',
      minutes: '',
      seconds: ''
    } as any;

    if (timeInMs) {
      time = convertMillisToTime(timeInMs);
    } else {
      if (hours && minutes) {
        time = {
          hours,
          minutes,
          seconds,
        };
      } else if (timeString) {
        const timeArray = timeString.split(':');
        time = {
          hours: timeArray[0] ? timeArray[0] : false,
          minutes: timeArray[1] ? timeArray[1] : false,
          seconds: timeArray[2] ? timeArray[2] : false,
        };
      }
    }

    return time;
  }

  public handleSelectionChange = (e: any, type: string) => {
    if (type === 'hours') {
      this.setState({ hours: e.target.value }, () => this.props.onChange(this.state));
    } else if (type === 'minutes') {
      this.setState({ minutes: e.target.value }, () => this.props.onChange(this.state));
    } else if (type === 'seconds') {
      this.setState({ seconds: e.target.value }, () => this.props.onChange(this.state));
    }
  }

  public generateSelect = (options: Array<any>, selected: string, label: string) => {
    const { required, nullable } = this.props;
    const selectedValue = parseInt(selected, 10).toString();
    return (
      <div className="time-picker_wrapper">
        <label>{label}</label>
        <select
          onChange={(e: any) => this.handleSelectionChange(e, label)}
          required={required}
          value={selectedValue}
        >
          {nullable ? <option>none</option> : null}
          {
            options.map((item: any, key: number) =>
              <option
                key={key}
                // selected={item === parseInt(selected, 10)}
              >
                {item}
              </option>
            )
          }
        </select>
        <i className="material-icons">arrow_drop_down</i>
      </div>
    );
  }

  public generateEmptyArray = (length: number) => {
    return Array.apply(null, { length }).map(
      (value: any, index: number) => {
        return index;
      }
    );
  }

  public render() {
    const {
      classNames,
      withoutSeconds,
      disabled
    } = this.props;
    const { hours, minutes, seconds } = this.state;
    const array24 = this.generateEmptyArray(24);
    const array60 = this.generateEmptyArray(60);
    return (
      <div className={`${classNames ? classNames : ''} time-picker ${disabled ? 'time-picker--disabled' : ''}`}>
        {
          hours ? this.generateSelect(array24, hours, 'hours') : null
        }
        {
          minutes ? this.generateSelect(array60, minutes, 'minutes') : null
        }
        {
          seconds && !withoutSeconds ? this.generateSelect(array60, seconds, 'seconds') : null
        }
      </div>
    );
  }
}
