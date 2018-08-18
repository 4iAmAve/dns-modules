import * as React from 'react';

import { SelectDropdown } from '../SelectDropdown/SelectDropdown';
import { IconButton } from '../IconButton/IconButton';

import './Paginator.css';

export interface Option {
  key: string | number;
  label: string;
  selected: boolean;
}

export interface PaginatorProps {
  pageSize: number;
  pageSizeOptions: Option[];
  defaultValue: number;
  totalItems: number | null;
  pageIndex: number;
  onOptionsChange: (e: any) => void;
  onPageChange: (e: any) => void;
  className?: any;
  label?: string;
}

export interface PaginatorState {
  menuOpen: boolean;
}

export class Paginator extends React.Component<PaginatorProps, PaginatorState> {
  public onChange = (e: any) => {
    this.props.onOptionsChange(e);
  }

  public onPageChange = (value: number) => {
    this.props.onPageChange({
      pageIndex: value,
      pageSize: this.props.pageSize,
    });
  }

  render() {
    const { className, pageSizeOptions, defaultValue, pageIndex, label, totalItems = 0, pageSize} = this.props;
/*    const selectedPageSizeOption = pageSizeOptions.filter((value: any) => {
      return value.selected === true;
    });*/
    let from = pageSize * (pageIndex + 1) - pageSize + 1;
    const to = pageSize * (pageIndex + 1) < (totalItems || 0) ? pageSize * (pageIndex + 1) : totalItems;

    if (to === 0) {
      from = 0;
    }

    return (
      <div className={`paginator ${className ? className : ''}`}>
        <div className="paginator_size">
          {label ? <div className="paginator_size-label">{label}</div> : null}
          {/*<div className={style.size_label}>Items per page: </div>*/}
          <div className="paginator_size-select">
            <SelectDropdown
              options={pageSizeOptions}
              selectedValue={defaultValue}
              resetLabel={false}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="paginator_range">
          <div className="paginator_range-label">{from} - {to} of {totalItems}</div>
          <IconButton
            icon="keyboard_arrow_left"
            type="simple"
            onClick={() => this.onPageChange(pageIndex - 1)}
            disabled={pageIndex === 0}
          />
          <IconButton
            icon="keyboard_arrow_right"
            type="simple"
            onClick={() => this.onPageChange(pageIndex + 1)}
            disabled={pageSize * (pageIndex + 1) >= (totalItems || 0)}
          />
        </div>
      </div>
    );
  }
}
