import { Operation } from './Operation';

export interface TableColumn {
  action?: any;
  classNames?: any;
  date?: any;
  definition: string;
  headerOperations?: Array<any>;
  formater?: any;
  fullWidth?: boolean;
  label: string;
  onClick?: any;
  onChange?: any;
  operations?: Array<Operation>;
  render?: any;
  selectable?: boolean;
  small?: boolean;
  sortable?: boolean;
  type?: string;
  validate?: Array<string>;
  withHeaderOperation?: Array<Operation>;
}
