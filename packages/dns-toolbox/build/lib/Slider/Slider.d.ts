import * as React from 'react';
import './Slider.css';
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
export declare class Slider extends React.Component<SliderProps, SliderState> {
    static defaultProps: Partial<SliderProps>;
    private slider;
    private handle;
    constructor(props: SliderProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: SliderProps): void;
    clamp: (value: any, min: any, max: any) => number;
    handleFormat: (value: number) => number | void;
    handleUpdate: () => void;
    handleStart: (e: any) => void;
    handleDrag: (e: any) => void;
    handleEnd: (e: any) => void;
    handleKeyDown: (e: any) => void;
    getPositionFromValue: (value: number) => number;
    getValueFromPosition: (pos: any) => number;
    position: (e: any) => number;
    coordinates: (pos: any) => {
        fill: number;
        handle: number;
        label: number;
    };
    handleSliderRef: (ref: any) => any;
    handleDraggerRef: (ref: any) => any;
    render(): JSX.Element;
}
