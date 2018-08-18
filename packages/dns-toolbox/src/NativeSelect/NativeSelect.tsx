import * as React from 'react';

import './NativeSelect.css';

export interface NativeSelectProps {
  selection: Array<string>;
  onChange: (event: any) => void;
  defaultSelected?: number;
  classNames?: any;
  id?: any;
  label?: string;
  required?: boolean;
  nullable?: boolean;
  disabled?: boolean;
}

export interface NativeSelectState {
}

export class NativeSelect extends React.Component<NativeSelectProps, NativeSelectState> {
  public static defaultProps: Partial<NativeSelectProps> = {
    required: false,
    disabled: false,
  };

  public handleSelectionChange = (e: any, type: string) => {
    const { label = null, id = null } = this.props;
    this.props.onChange({
      label,
      id,
      value: e.target.value
    });
  }

  public generateSelect = (options: Array<any>, label: string) => {
    const { defaultSelected, required, nullable } = this.props;
    const selectedValue = defaultSelected ? defaultSelected.toString() : '0';
    return (
      <div className="native-select-wrapper">
        <label>{label}</label>
        <select
          onChange={(e: any) => this.handleSelectionChange(e, label)}
          required={required}
          value={parseInt(selectedValue, 10)}
        >
          {nullable ? <option>none</option> : null}
          {
            options.map((item: any, key: number) =>
              <option
                key={key}
                value={key}
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
      selection,
      label,
      classNames,
      disabled,
    } = this.props;
    return (
      <div className={`${classNames ? classNames : ''} native-select ${disabled ? 'native-select--disabled' : ''}`}>
        {this.generateSelect(selection, label || '')}
      </div>
    );
  }
}
