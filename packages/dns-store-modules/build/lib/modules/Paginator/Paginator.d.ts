/// <reference types="react-redux" />
import * as React from 'react';
import { PaginatorState } from '../../reducers';
export interface Option {
    key: string | number;
    label: string;
    selected: boolean;
}
export interface PaginatorModuleProps {
    id: string;
    paginator: Readonly<PaginatorState>;
    defaultValue: number;
    pageSize: number;
    pageSizeOptions: Option[];
    pageIndex: number;
    totalItems: number | null;
    onChange: (e: any) => void;
    onSubscribeToPaginatorStore: (id: string | number, settings: any) => void;
    onUpdatePaginator: (id: string | number, settings: any) => void;
    className?: any;
    label?: string;
}
export interface PaginatorModuleState {
    menuOpen: boolean;
}
export declare const connectedPaginator: React.ComponentClass<Pick<PaginatorModuleProps, "label" | "id" | "onChange" | "defaultValue" | "className" | "pageSize" | "pageSizeOptions" | "totalItems" | "pageIndex">, React.ComponentState> & {
    WrappedComponent: React.ComponentType<PaginatorModuleProps>;
};
