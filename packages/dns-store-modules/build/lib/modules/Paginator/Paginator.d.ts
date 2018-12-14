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
declare class PaginatorModule extends React.Component<PaginatorModuleProps, PaginatorModuleState> {
    private defaultSettings;
    constructor(props: PaginatorModuleProps);
    componentDidUpdate(prevProps: PaginatorModuleProps): void;
    onOptionChange: (e: Option) => void;
    onPageChange: (e: any) => void;
    render(): JSX.Element;
}
export declare const connectedPaginator: import("react-redux").ConnectedComponentClass<typeof PaginatorModule, Pick<PaginatorModuleProps, "label" | "id" | "className" | "onChange" | "defaultValue" | "pageSize" | "pageSizeOptions" | "pageIndex" | "totalItems">>;
export {};
