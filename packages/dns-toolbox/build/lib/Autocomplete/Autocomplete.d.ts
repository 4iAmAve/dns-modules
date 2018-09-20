import * as React from 'react';
import { AutoCompleteSelection, Chip } from '../definitions';
import './Autocomplete.css';
export interface AutocompleteProps {
    autocompleteSelection: AutoCompleteSelection[];
    chips?: Chip[];
    classNames?: any;
    disabled?: boolean;
    noDuplicates?: boolean;
    placeholder?: string | null;
    onSelection: (key: number, selection: any) => void;
    required?: boolean;
    rootID?: string;
    value?: string;
    squared?: boolean;
    onBlur?: (event: any) => void;
    onKeyUp?: (event: any) => void;
    onDeleteChip?: (chip: any, key: number) => void;
}
export interface AutocompleteState {
    autocompleteVisible: boolean;
    left: number;
    top: number;
    selectedItem: number;
    value: string;
    width: number;
}
export declare class Autocomplete extends React.Component<AutocompleteProps, AutocompleteState> {
    static defaultProps: Partial<AutocompleteProps>;
    private autocomplete;
    private input;
    private backSpaceClicked;
    constructor(props: AutocompleteProps);
    componentDidUpdate(prevProps: AutocompleteProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getElement: () => false | HTMLElement;
    getSelectionList: () => never[];
    getSelectedItemValue: (id: number) => any;
    handleEventListeners: (type?: string | undefined) => void;
    handleDocumentClick: (evt: any) => void;
    handleChipDelete: (chip: any, key: number) => void;
    handleKeyUp: (e: any) => void;
    handleChange: (e: any) => void;
    handleInputFocus: (e: any) => void;
    handleBlur: (e: any) => void;
    handleAutocompleteSelection: (key: number, selection: any) => void;
    handleSelectionKeyUp: (e: any) => void;
    calcTopValue: (top: number, selectionList: any[]) => number;
    handleAutocompleteRef: (ref: any) => any;
    handleInputRef: (ref: any) => any;
    render(): JSX.Element;
}
