import * as React from 'react';
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
export declare class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps: Partial<DatePickerProps>;
    private root;
    private datePicker;
    private today;
    constructor(props: DatePickerProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DatePickerProps): void;
    componentWillUnmount(): void;
    getElement: () => HTMLElement | undefined;
    handleEventListeners: (type?: string | undefined) => void;
    handleDocumentClick: (evt: any) => void;
    handleOnBlur: () => void;
    handleClear: () => void;
    handleCalendarChange: (e: any) => void;
    onHoursSelection: (e: any) => void;
    onMinutesSelection: (e: any) => void;
    onChange: (e: any) => void;
    handleInputFocus: (e: any) => void;
    generateOptions: (limit: number) => any;
    handleRef: (ref: any) => any;
    render(): JSX.Element;
    private buildDateTimeString;
}
