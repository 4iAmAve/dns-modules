import * as React from 'react';
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
export declare class Paginator extends React.Component<PaginatorProps, PaginatorState> {
    onChange: (e: any) => void;
    onPageChange: (value: number) => void;
    render(): JSX.Element;
}
