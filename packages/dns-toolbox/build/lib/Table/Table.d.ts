import * as React from 'react';
import { TableColumn } from '../definitions';
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
    onSortChange?: (def: any, dir: number) => void;
}
export interface TableState {
}
export declare class Table extends React.Component<TableProps, TableState> {
    static defaultProps: Partial<TableProps>;
    private sortDirection;
    private table;
    buildOperations: (operations: any, data: any, rowKey?: number | undefined) => any;
    handleOnSort: (definition: string) => void | undefined;
    renderHeader: (column: TableColumn, key: number) => JSX.Element;
    handleRowClick: (data: any, key: number) => void;
    handleColumnClick: (column: TableColumn, data: any, key: number, checked?: boolean | undefined) => void;
    renderRow: (data: any, rowKey: number) => JSX.Element;
    handleRef: (ref: any) => any;
    render(): JSX.Element;
}
