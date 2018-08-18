import * as React from 'react';
import './Card.css';
export interface CardProps {
    /** remove the padding from the card  */
    withoutOffset?: boolean;
    /** additional classNames provided by the parent  */
    classNames?: any;
}
export interface CardState {
}
export declare class Card extends React.Component<CardProps, CardState> {
    render(): JSX.Element;
}
