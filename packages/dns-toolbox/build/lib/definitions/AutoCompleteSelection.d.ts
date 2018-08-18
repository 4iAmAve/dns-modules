export interface AutoCompleteSelection {
    title: string;
    className: any;
    color?: any;
    disabled?: boolean;
    node?: HTMLElement;
    payload?: any;
    type?: 'header' | 'node';
}
