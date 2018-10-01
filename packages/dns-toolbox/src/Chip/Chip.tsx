import * as React from 'react';
import { getContrastYIQ, stringToColour } from '@dns/utils';

import { Chip as ChipDef } from '../definitions';

import './Chip.css';

export interface ChipProps extends ChipDef {
  title: string;
  id?: number | string;
  bgColor?: string | boolean;
  image?: any;
  deletable?: boolean;
  fullWidth?: boolean;
  selectable?: boolean;
  classNames?: any;
  onClick?: () => void;
  onDelete?: () => void;
}

export interface ChipState {
}

export class Chip extends React.Component<ChipProps, ChipState> {
  public static defaultProps: Partial<ChipProps> = {
    deletable: false,
    title: '',
  };

  public render() {
    const {
      classNames,
      bgColor,
      deletable,
      fullWidth,
      image,
      id,
      onClick,
      onDelete,
      selectable,
      title
    } = this.props;
    const textToColour = bgColor ? bgColor.toString() : stringToColour(title);
    const textColor = getContrastYIQ(textToColour);
    const inlineStyle = {
      backgroundColor: textToColour,
      color: textColor,
    };
    const inlineCloseStyle = {
      color: textColor,
    };
    return (
      <div
        className={`
          chip
          ${classNames ? classNames : ''}
          ${!deletable ? 'chip--free' : ''}
          ${fullWidth ? 'chip--full-width' : ''}
          ${selectable ? 'chip--selectable' : ''}
        `}
        style={inlineStyle}
        key={id}
        title={title}
      >
        {
          image ?
            <img src={image} /> : null
        }
        <div className={`chip_value ${onClick ? 'chip_value_clickable' : ''}`} onClick={onClick}>
          {title}
        </div>
        {
          deletable ?
            <div
              className="chip_delete-icon"
              onClick={onDelete}
              style={inlineCloseStyle}
            >
              <i className={`material-icons`}>close</i>
            </div> : null
        }
      </div>
    );
  }
}
