/// <reference types="react-redux" />
import * as React from 'react';
import { FilterState } from '../../reducers';
export interface FilterModuleProps {
    id: string;
    filter: FilterState;
    onSubscribeToFilterStore: (id: string | number, settings: any) => void;
    defaultSettings?: any;
    className?: any;
}
export interface FilterModuleState {
}
export declare const connectedFilter: React.ComponentClass<Pick<FilterModuleProps, "id" | "className" | "defaultSettings">, React.ComponentState> & {
    WrappedComponent: React.ComponentType<FilterModuleProps>;
};
