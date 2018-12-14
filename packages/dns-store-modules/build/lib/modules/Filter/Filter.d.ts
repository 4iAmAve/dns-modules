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
declare class FilterModule extends React.Component<FilterModuleProps, FilterModuleState> {
    constructor(props: FilterModuleProps);
    componentDidUpdate(prevProps: FilterModuleProps): void;
    render(): JSX.Element;
}
export declare const connectedFilter: import("react-redux").ConnectedComponentClass<typeof FilterModule, Pick<FilterModuleProps, "id" | "defaultSettings" | "className">>;
export {};
