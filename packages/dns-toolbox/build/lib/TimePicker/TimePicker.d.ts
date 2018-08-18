import * as React from 'react';
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
export declare class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
    static defaultProps: Partial<TimePickerProps>;
    constructor(props: TimePickerProps);
    componentDidUpdate(prevProps: TimePickerProps): void;
    convertTime: (props: any) => any;
    handleSelectionChange: (e: any, type: string) => void;
    generateSelect: (options: any[], selected: string, label: string) => JSX.Element;
    generateEmptyArray: (length: number) => any;
    render(): JSX.Element;
}
