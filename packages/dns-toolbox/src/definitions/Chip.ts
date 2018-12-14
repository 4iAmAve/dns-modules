export interface Chip {
  bgColor?: string | boolean;
  classNames?: any;
  deletable?: boolean;
  fullWidth?: boolean;
  id?: number | string;
  image?: any;
  title: string;
  onClick?: () => void;
  onDelete?: () => void;
  payload?: any;
  selectable?: boolean;
}
