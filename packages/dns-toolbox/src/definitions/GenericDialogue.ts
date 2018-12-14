export interface GenericDialogue {
  buttons?: Array<any>;
  className?: any;
  content?: any | null;
  footer?: any;
  height?: string;
  hero?: any;
  id?: string | number;
  minHeight?: string;
  onClose?: () => void;
  text?: string | null;
  title?: string | any | null;
  triggerClose?: boolean;
  width?: string;
  withoutOffset?: boolean;
}
