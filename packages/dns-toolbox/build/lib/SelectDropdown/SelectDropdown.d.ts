import * as React from 'react';
import './SelectDropdown.css';
export interface SelectDropdownProps {
    selectedValue: number | string;
    defaultValue?: number;
    classNames?: any;
    filterable?: boolean;
    label?: string;
    options?: any;
    resetable?: boolean;
    resetLabel?: string | boolean;
    onChange?: (event: any) => void;
}
export interface SelectDropdownState {
    isOpen: boolean;
    listLeftValue: number;
    listTopValue: number;
    listWidthValue: number;
    isSelected: string | number;
    searchValue: string;
    selected: {
        key: string | number;
        label: string;
    };
}
export declare class SelectDropdown extends React.Component<SelectDropdownProps, SelectDropdownState> {
    static defaultProps: Partial<SelectDropdownProps>;
    private mounted;
    private wrapper;
    private list;
    private selected;
    private scrollView;
    constructor(props: SelectDropdownProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: SelectDropdownProps, prevState: SelectDropdownState): void;
    getValue(): string;
    getLabel(): string;
    handleToggleSelect(): void;
    handleOptionClick(key: number, option: any): void;
    changeState(newState: SelectDropdownState): void;
    handleResetSelect(): void;
    handleDocumentClick: (evt: any) => void;
    fireChangeEvent(newState: SelectDropdownState): void;
    countTopRmsList(): void;
    generateOptions: () => any;
    getSelectedPosition: () => void;
    handleFilterChange: (e: any) => void;
    handleWrapperRef: (ref: any) => any;
    handleListRef: (ref: any) => any;
    handleScrollViewRef: (ref: any) => any;
    handleSelectedRef: (ref: any, key: any) => void;
    render(): JSX.Element;
}
