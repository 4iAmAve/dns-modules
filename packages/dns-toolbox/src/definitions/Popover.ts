export interface Popover {
  className?: any;
  content: any;
  id: string | number;
  onClosePopover?: (id: string | number) => void;
  reference?: any;
  rootID?: string;
  title?: any;
  width?: string;
  withoutCloseButton?: boolean;
}
