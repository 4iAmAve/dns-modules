import * as React from 'react';
import { noop } from '@dns/utils';

import { Chip as ChipDefinition } from '../definitions';
import { Chip } from '../Chip/Chip';

export interface ChipsProps {
  chips: ChipDefinition[];
  onDeleteChip: (chip: any, key: number) => void;
  classNames?: any;
}

export interface ChipsState {
}

export class Chips extends React.Component<ChipsProps, ChipsState> {
  public static defaultProps: Partial<ChipsProps> = {
    chips: [],
  };

  public deleteChip = (chip: ChipDefinition, key: number) => {
    this.props.onDeleteChip(chip, key);
  }

  public renderChip = (chip: ChipDefinition, key: number) => {
    const { classNames } = this.props;
    const onClick = chip.onClick || noop;
    return (
      <Chip
        classNames={classNames}
        deletable={chip.deletable}
        id={key}
        image={chip.image ? chip.image : null}
        key={key}
        payload={chip.payload}
        selectable={chip.selectable}
        title={chip.title}
        onClick={onClick}
        onDelete={() => this.deleteChip(chip, key)}
      />
    );
  }

  public render() {
    const { chips } = this.props;
    return (
      <React.Fragment>
        {
          chips.map((chip: ChipDefinition, key: number) => (
            this.renderChip(chip, key)
          ))
        }
      </React.Fragment>
    );
  }
}
