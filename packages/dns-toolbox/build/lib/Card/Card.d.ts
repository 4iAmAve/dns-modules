import * as React from 'react';
import './Card.css';
export interface CardProps {
    withoutOffset?: boolean;
    classNames?: any;
}
export interface CardState {
}
export declare class Card extends React.Component<CardProps, CardState> {
    render(): JSX.Element;
}
