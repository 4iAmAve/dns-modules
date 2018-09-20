import * as React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { parseDate, parseDateAndTime } from '@dns/utils';

import { Input } from '../Input/Input';
import { SelectDropdown } from '../SelectDropdown/SelectDropdown';

import './DatePicker.css';

export interface DatePickerProps {
  label: string;
  value: string | Date;
  calendarClassName?: string;
  calendarProps?: any;
  classNames?: any;
  clearable?: boolean;
  deletable?: boolean;
  icon?: string;
  iconClass?: string;
  maxDate?: string | Date;
  rootID?: string;
  required?: boolean;
  withTimeSelection?: boolean;
  onChange?: (event: any) => void;
  onClick?: (event: any) => void;
  onKeyUp?: (event: any) => void;
}

export interface DatePickerState {
  value: string | Date | null;
  rawValue: string | Date | null;
  calendarVisible: boolean;
  cTop: number;
  cLeft: number;
  hours: number;
  minutes: number;
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  public static defaultProps: Partial<DatePickerProps> = {
    deletable: true,
    icon: 'date_range',
    rootID: 'root',
    withTimeSelection: false
  };

  private root: HTMLElement;
  private datePicker: HTMLElement;
  private today: string;

  public constructor(props: DatePickerProps) {
    super(props);

    this.today = new Date() as any;
    let value = null as any;
    if (props.value) {
      value = this.buildDateTimeString(props.value);
    }

    this.state = {
      value,
      rawValue: props.value ? props.value : this.today,
      cTop: 0,
      cLeft: 0,
      calendarVisible: false,
      hours: 0,
      minutes: 0
    };
  }

  public componentDidMount() {
    this.handleEventListeners('add');
  }

  public componentDidUpdate(prevProps: DatePickerProps) {
    const date = new Date(this.props.value).getTime();
    const prevDate = new Date(prevProps.value).getTime();

    if (date !== prevDate && !isNaN(date)) {
      let value = parseDate(this.props.value.toString()) as string;

      if (this.props.withTimeSelection) {
        value = parseDateAndTime(this.props.value.toString()) as string;
      }

      this.setState({ value });
    }
  }

  public componentWillUnmount() {
    this.handleEventListeners();
  }

  public getElement = () => {
    const { rootID } = this.props;
    this.root = document.getElementById(rootID || 'root') as HTMLElement;
    if (this.root === null || this.root === undefined) {
      return;
    }
    return this.root;
  }

  public handleEventListeners = (type?: string) => {
    const element = this.getElement();

    if (element) {
      if (type === 'add') {
        element.addEventListener('click', this.handleDocumentClick);
      } else {
        element.removeEventListener('click', this.handleDocumentClick);
      }
    }
  }

  handleDocumentClick = (evt: any) => {
    const area = this.datePicker;

    if (area && !area.contains(evt.target)) {
      this.setState({ calendarVisible: false });
    }
  }

  public handleOnBlur = () => {
    this.setState({ calendarVisible: false });
  }

  public handleClear = () => {
    this.setState({ value: null, rawValue: this.today });
    if (this.props.onChange) {
      this.props.onChange(null);
    }
  }

  public handleCalendarChange = (e: any) => {
    const value = this.buildDateTimeString(e, this.state.hours, this.state.minutes);
    this.setState({
      value,
      rawValue: e,
      calendarVisible: false,
    });
    if (this.props.onChange) {
      const dateTime = new Date(value);
      this.props.onChange(dateTime);
    }
  }

  public onHoursSelection = (e: any) => {
    const value = this.buildDateTimeString(this.state.rawValue, e.label, this.state.minutes);
    this.setState({ hours: e.label, value });

    if (this.props.onChange) {
      const dateTime = new Date(value);
      this.props.onChange(dateTime);
    }
  }

  public onMinutesSelection = (e: any) => {
    const value = this.buildDateTimeString(this.state.rawValue, this.state.hours, e.label);
    this.setState({ minutes: e.label, value });

    if (this.props.onChange) {
      const dateTime = new Date(value);
      this.props.onChange(dateTime);
    }
  }

  public onChange = (e: any) => {
    this.setState({
      value: e.target.value,
    });
  }

  public handleInputFocus = (e: any) => {
    let { top, height } = e.target.getBoundingClientRect();
    let { left } = this.datePicker.getBoundingClientRect();
    const { width, height: rootHeight } = this.root.getBoundingClientRect();

    if (left + 350 > width) {
      left = width - 366;
    } else if (left < 0) {
      left = 16;
    }

    if (top + 350 > rootHeight) {
      top = rootHeight - 350;
    } else if (top < 0) {
      top = 16;
    }

    this.setState({
      cTop: top + height + 8,
      cLeft: left,
      calendarVisible: true,
    });
  }

  public generateOptions = (limit: number) => {
    const options = [] as any;
    let i = 0;

    while (i < limit) {
      options.push({ key: i, label: `${i}`, selected: i === 0 || false });
      i++;
    }

    return options;
  }

  handleRef = ref => this.datePicker = ref;

  public render() {
    const {
      classNames,
      onClick,
      onKeyUp,
      label,
      required = false,
      iconClass,
      icon,
      calendarProps,
      calendarClassName,
      clearable = true,
      withTimeSelection
    } = this.props;
    const { value, cTop, cLeft, calendarVisible } = this.state;
    const dateValue = value && value.toString().length ? value : this.today;
    const calendarValue = new Date(dateValue);
    const calendarInlineStyle = {
      top: cTop,
      left: cLeft,
    };
    const hourOptions = this.generateOptions(24);
    const minutesOptions = this.generateOptions(60);

    return (
      <div
        className={`date-picker ${classNames ? classNames : ''} ${clearable ? 'date-picker_clearable' : ''}`}
        ref={this.handleRef}
      >
        <Input
          required={required}
          onKeyUp={onKeyUp}
          onClick={onClick}
          value={value as string || ''}
          label={label}
          squared={true}
          classNames="dp_input"
          onFocus={this.handleInputFocus}
          onChange={this.onChange}
        />
        <i
          className={`material-icons dp_icon dp_calendar-icon ${iconClass ? iconClass : ''}`}
          onClick={this.handleInputFocus}
        >
          {icon}
        </i>
        {
          clearable ?
            <i className={`material-icons dp_icon`} onClick={this.handleClear}>
              close
            </i> : null
        }
        {
          calendarVisible ?
            <div className="dp_calendar" style={calendarInlineStyle}>
              <Calendar
                className={calendarClassName}
                onChange={this.handleCalendarChange}
                value={calendarValue || null}
                {...calendarProps}
              />
              {
                withTimeSelection ?
                  <div className="dp_time-selection">
                    <SelectDropdown
                      selectedValue={0}
                      options={hourOptions}
                      label={'Hours'}
                      onChange={this.onHoursSelection}
                      resetable={false}
                    />
                    <SelectDropdown
                      selectedValue={0}
                      options={minutesOptions}
                      label={'Minutes'}
                      onChange={this.onMinutesSelection}
                      resetable={false}
                    />
                  </div>
                  : null
              }
            </div> : null
        }
      </div>
    );
  }

  private buildDateTimeString = (date: any, hours?: any, minutes?: any, seconds?: any) => {
    const { withTimeSelection } = this.props;
    let value = parseDate(date.toString());

    if (withTimeSelection) {
      const hoursString = hours.toString().length === 1 ? `0${hours}` : hours;
      const minutesString = minutes.toString().length === 1 ? `0${minutes}` : minutes;
      value = `${value} ${hoursString}:${minutesString}`;
    }

    return value;
  }
}
