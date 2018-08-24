import * as React from 'react';
import { RadioButton } from '../definitions';
import './RadioButtons.css';
export interface RadioButtonsProps {
    buttons: RadioButton[];
    onClick: (key: number, button: RadioButton) => void;
    selected: number;
    disabled?: boolean;
}
export interface RadioButtonsState {
    selectedButton: number;
}
export declare class RadioButtons extends React.Component<RadioButtonsProps, RadioButtonsState> {
    constructor(props: RadioButtonsProps);
    componentDidUpdate(prevProps: RadioButtonsProps): void;
    onClick: (key: number, button: RadioButton) => void;
    onChange: () => null;
    render(): JSX.Element;
}
