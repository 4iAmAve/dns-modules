## @datns/contextual-modules

React context API modules library. 

Simply trigger the corresponding actions and you are done. No need for redux anymore.

### Setup

```shell
yarn
```

### Build

For building everything

```shell
yarn build
```

### Available Modules and Actions

Modules: 


```javascript
import {
  ConfirmDialogue,
  Dialogues,
  Drawers,
  NotificationsBar,
  Popover
};
```

Actions: 

```javascript
import {
  openConfirmDialogue,
  
  addDialogue,
  closeDialogue,
  
  addDrawer,
  closeDrawer,
  
  addNotification,
  closeNotification,
  
  openPopover
}
```

### USAGE

Add wherever you need the corresponding module.

```html
<App>
  <PopoversStore />
  <Dialogues />
  <Drawers />
  <NotificationsBar />
  <ConfirmDialogue />
</App>
```

Note: As for `Popovers`, you can add them wherever you like with `<Popover id={'test-id'} />`

Call actions wherever you need them like this:

```javascript
import { openConfirmDialogue } from '@datns/contextual-modules';

openConfirmDialogue({
  title: 'test-title',
  content: (<div>Test Content</div>),
  onConfirm: () => void
});
```

```javascript
import { addDialogue, closeDialogue } from '@datns/contextual-modules';

addDialogue({
  content: (<div>Test Content</div>),
  id: 'dialogue-id',
  title: 'test-title',
  onClose: () => void
});

closeDialogue('dialogue-id');
```

```javascript
import { addDrawer, closeDrawer } from '@datns/contextual-modules';

addDrawer({
  content: (<div>Test Content</div>),
  id: 'drawer-id',
  title: 'test-title',
  onClose: () => void
});

closeDrawer('drawer-id');
```

```javascript
import { addNotification, closeNotification } from '@datns/contextual-modules';

addNotification({
  id: 'optional-id-parameter-to-close-notification-on-request', 
  message: (<div>Test Content</div>),
  type: 'success',
});

closeNotification('optional-id-parameter-to-close-notification-on-request');
```

```javascript
import { openPopover } from '@datns/contextual-modules';

openPopover({
  content: (<div>Test Content</div>),
  id: 'drawer-id',
  title: 'test-title',
  onClose: () => void
});
```

Addendum: To see all available parameters, simply take a look into '@datns/toolbox' definitions.

### NOTE

In case of style adjustments use SASS/SCSS. This will be compiled to CSS in the build step and as such added to the lib.

### License

@datns/contextual-modules is [MIT licensed](./LICENSE).
