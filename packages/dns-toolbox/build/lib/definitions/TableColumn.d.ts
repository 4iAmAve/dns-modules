import { Operation } from './Operation';
export interface TableColumn {
    definition: string;
    label: string;
    action?: any;
    classNames?: any;
    date?: any;
    formater?: any;
    fullWidth?: boolean;
    headerOperations?: Array<any>;
    operations?: Array<Operation>;
    render?: any;
    small?: boolean;
    sortable?: boolean;
    selectable?: boolean;
    type?: string;
    validate?: Array<string>;
    withHeaderOperation?: Array<Operation>;
    onClick?: any;
    onChange?: any;
}
