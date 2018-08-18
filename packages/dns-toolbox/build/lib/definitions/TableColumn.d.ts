import { Operation } from './Operation';
export interface TableColumn {
    definition: string;
    label: string;
    action?: any;
    operations?: Array<Operation>;
    small?: boolean;
    selectable?: boolean;
    fullWidth?: boolean;
    date?: any;
    validate?: Array<string>;
    type?: string;
    formater?: any;
    headerOperations?: Array<any>;
    withHeaderOperation?: Array<Operation>;
    onClick?: any;
    classNames?: any;
    onChange?: any;
    render?: any;
}
