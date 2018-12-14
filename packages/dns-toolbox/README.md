## @dns/toolbox

A component library for react 

### Setup

```shell
yarn
```

### Storybook

For documentation purposes [Storybook](https://storybook.js.org/) is being used. Simply run:

```shell
yarn storybook
```

### Build

For building everything including Storybook

```shell
yarn build
```

For building just the lib

```shell
yarn build-lib
```

### Available Components

Checkout the storybook for a more detailed view of all components.

### Definitions

##### AutoCompleteSelectionD
```javascript
interface AutoCompleteSelection {
  title: string;
  className: any;
  color?: any;
  disabled?: boolean;
  node?: HTMLElement;
  payload?: any;
  type?: 'header' | 'node';
}
```

##### ChipD
```javascript
interface Chip {
  title: string;
  id?: number | string;
  bgColor?: string | boolean;
  image?: any;
  selectable?: boolean;
  deletable?: boolean;
  fullWidth?: boolean;
  classNames?: any;
  payload?: any;
  onClick?: () => void;
  onDelete?: () => void;
}
```

##### DrawerD
```javascript
interface Drawer {
  className?: any;
  content: any;
  disableCloseOnOutsideClick?: boolean;
  fullWidth?: boolean;
  id: string | number;
  onClose?: (id: string | number) => void;
  position?: 'top' | 'right' | 'bottom' | 'left';
  title?: any;
  triggerClose?: boolean;
  width?: string;
  withoutCloseButton?: boolean;
}
```

##### GenericDialogueD
```javascript
interface GenericDialogue {
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
```

##### NotificationD
```javascript
interface Notification {
  id: string | number;
  message: any;
  type: string | number;
  timestamp: number;
  timeout?: number;
}
```

##### OperationD
```javascript
interface Operation {
  icon: string;
  type: string;
  action?: (data?: any) => void;
}
```

##### PopoverD
```javascript
interface Popover {
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
```

##### RadioButtonD
```javascript
interface RadioButton {
  label: string;
  id?: string | number;
}
```

##### TabD
```javascript
interface Tab {
  title: string;
  selected: boolean;
  content?: any;
  target?: any;
}
```

##### TableColumnD
```javascript
interface TableColumn {
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
```

### NOTE

In case of style adjustments use SASS/SCSS. This will be compiled to CSS in the build step and as such added to the lib.

### License

@dns/toolbox is [MIT licensed](./LICENSE).
