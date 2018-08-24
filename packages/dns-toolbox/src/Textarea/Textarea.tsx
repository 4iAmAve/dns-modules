import * as React from 'react';
import { validURL } from '@dns/utils';

import { TableColumn } from '../definitions';
import { Checkbox } from '../Checkbox/Checkbox';
import { IconButton } from '../IconButton/IconButton';
import { Chip } from '../Chip/Chip';

import './Table.css';

export interface TableProps {
  columns: TableColumn[];
  data: any;
  classNames?: any;
  emptyLabel?: string;
  detailContent?: any;
  operationsClass?: any;
  selectedRow?: number;
  renderSubPanel?: any;
  stickyHeader?: boolean;
  withoutHeader?: boolean;
  onRowClick?: (data: any, key: number) => void;
}

export interface TableState {
}

export class Table extends React.Component<TableProps, TableState> {
  public static defaultProps: Partial<TableProps> = {
    columns: [],
    data: [],
    emptyLabel: 'no data available',
    selectedRow: -1,
    stickyHeader: true,
    withoutHeader: false
  };

  private table: HTMLElement;

  public buildOperations = (operations: any, data: any, rowKey?: number) => {
    const elements = [] as any;

    if (operations) {
      operations.map((operation: any, id: number) => (
        elements.push(
          <IconButton
            key={id}
            icon={operation.icon}
            color={operation.type}
            type="simple"
            classNames={operation.classNames}
            onClick={() => operation.action(data, rowKey)}
          />
        )
      ));
    }
    return elements;
  }

  public renderHeader = (column: TableColumn, key: number) => {
    const {
      classNames,
      // definition,
      label,
      /*action, */
      // render,
      small,
      type,
      withHeaderOperation
    } = column;
    const { operationsClass } = this.props;
    let node = null as any;

    switch (type) {
      case 'select':
        return (
          <div
            className={`
                column_select
                ${classNames ? classNames : ''}
              `}
            key={key}
          >
            <Checkbox onChange={() => console.log('eeeeee')} id="all" />
          </div>
        );
      case 'expand':
        return (
          <div
            className={`
                column_toggle
                ${classNames ? classNames : ''}
              `}
            key={key}
          >
            {label}
          </div>
        );
      case 'operations':
        node = this.buildOperations(withHeaderOperation, 'header-operation');
        return (
          <div
            key={`operations-${key}`}
            className={`
                column_operation
                ${operationsClass ? operationsClass : ''}
                ${classNames ? classNames : ''}
              `}
          >
            {node}
          </div>
        );
      default:
        node = this.buildOperations(withHeaderOperation, 'header-operation');
        return (
          <div
            key={key}
            className={`
              ${small ? 'column--small' : ''}
              ${classNames ? classNames : ''}
            `}
          >
            {label}{node}
          </div>
        );
    }
  }

  public handleRowClick = (data: any, key: number) => {
    const { onRowClick } = this.props;

    if (onRowClick) {
      onRowClick(data, key);
    }
  }

  public handleColumnClick = (column: TableColumn, data: any, key: number, checked?: boolean) => {
    const { onClick } = column;

    if (onClick) {
      onClick(data, key, checked);
    }
  }

  public renderRow = (data: any, rowKey: number) => {
    const { columns, operationsClass, renderSubPanel, selectedRow } = this.props;

    const element = [] as any;

    Object.keys(columns).forEach((key: any) => {
      const column = columns[key] as TableColumn;
      switch (column.type) {
        case 'select':
          element.push(
            <div
              className={`
                column_select
                ${column.classNames ? column.classNames : ''}
              `}
              key={`select-${key}`}
            >
              <Checkbox
                onChange={(e: any, checked: boolean) => this.handleColumnClick(column, data, rowKey, checked)}
                id="single"
              />
            </div>
          );
          break;
        case 'expand':
          element.push(
            <div
              className={`
                column_toggle
                ${column.classNames ? column.classNames : ''}
              `}
              key={`expand-${key}`}
              onClick={() => this.handleColumnClick(column, data, rowKey)}
            >
              <i className={`material-icons`}>keyboard_arrow_down</i>
            </div>
          );
          break;
        case 'operations':
          let operations = this.buildOperations(column.operations, data, rowKey);
          element.push(
            <div
              key={`operations-${key}`}
              className={`
                column_operation
                ${operationsClass ? operationsClass : ''}
                ${column.classNames ? column.classNames : ''}
              `}
            >
              {operations}
            </div>
          );
          break;
        case 'render':
          const render = column.render(data, rowKey);
          element.push(render);
          break;
        case 'chip':
          const chip = (
            <div
              key={`default-${key}`}
              className={`
                  column-chip
                  ${column.small ? 'column--small' : ''}
                  ${column.classNames ? column.classNames : ''}
                `}
            >
              <Chip
                title={data[column.definition]}
                id={`${rowKey}-${key}`}
                deletable={false}
                fullWidth={column.fullWidth}
                selectable={column.selectable}
                onClick={() => this.handleColumnClick(column, data, rowKey)}
              />
            </div>
          );
          element.push(chip);
          break;
        case 'date':
          let date = data[column.definition];
          date = column.formater(date);
          element.push(
            <div
              key={`default-${key}`}
              className={`
                  ${column.small ? 'column--small' : ''}
                  ${column.classNames ? column.classNames : ''}
                `}
              onClick={() => this.handleColumnClick(column, data, rowKey)}
            >
              {date}
            </div>
          );
          break;
        case 'link':
          let value = data[column.definition];
          let elem: any = 'invalid link';
          if (validURL(value)) {
            elem = <a href={value} target="_blank">Link</a>;
          }
          element.push(
            <div
              key={`default-${key}`}
              className={`
                ${column.small ? 'column--small' : ''}
                ${column.classNames ? column.classNames : ''}
              `}
            >
              {elem}
            </div>
          );
          break;
        default:
          let content = data[column.definition];
          if (column.validate) {
            if (data[column.definition]) {
              content = column.validate[0];
            } else {
              content = column.validate[1];
            }
          }

          let domElement = null as any;
          domElement = (
            <div
              key={`default-${key}`}
              className={`
                ${column.small ? 'column--small' : ''}
                ${column.classNames ? column.classNames : ''}
              `}
              onClick={() => this.handleColumnClick(column, data, rowKey)}
            >
              {content}
            </div>
          );

          element.push(domElement);
          break;
      }
    });

    return (
      <React.Fragment key={`t_fragment-${rowKey}`}>
        <div
          className={`
            table_content
            ${selectedRow === rowKey ? 'table_selected-row' : ''}
          `}
          onClick={() => this.handleRowClick(data, rowKey)}
        >
          {element}
        </div>
        {
          renderSubPanel ?
            <div
              className={`table_row_sub-panel ${selectedRow === rowKey ? 'table_selected-row' : ''}`}
            >
              {renderSubPanel(data, rowKey)}
            </div> : null
        }
      </React.Fragment>
    );
  }

  handleRef = ref => this.table = ref;

  public render() {
    const { classNames, columns, data, detailContent, emptyLabel, stickyHeader, withoutHeader } = this.props;
    return (
      <div
        className={`
          table_container
          ${classNames ? classNames : ''}
        `}
        ref={this.handleRef}
      >
        <div
          className={`table ${detailContent ? 'table--with-detail-content' : ''}
            ${stickyHeader ? 'table--with-sticky-header' : ''} ${withoutHeader ? 'table--without-header' : ''}
          `}
        >
          {
            withoutHeader ?
              null :
              <div className="table_header">
                {columns.map((column: TableColumn, key: number) => (
                  this.renderHeader(column, key)
                ))}
              </div>
          }
          <div className="table_content-wrapper">
            {
              data && data.length ?
                data.map((rowData: any, key: number) => (
                  this.renderRow(rowData, key)
                )) :
                <div className="table--empty">
                  {emptyLabel}
                </div>
            }
          </div>
        </div>
        {
          detailContent ?
            <div className="table_detail-content">
              {detailContent}
            </div> : null
        }
      </div>
    );
  }
}
